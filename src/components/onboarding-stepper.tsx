"use client";

import { useState } from "react";
import {
  Check,
  Copy,
  Eye,
  EyeOff,
  Globe,
  Users,
  ShieldCheck,
  Plus,
  PartyPopper,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/ui/code-block";

export default function OnboardingStepper() {
  const [currentStep, setCurrentStep] = useState(1);
  const [apiKey, setApiKey] = useState("");
  const [showApiKey, setShowApiKey] = useState(false);
  const [copied, setCopied] = useState(false);

  const generateApiKey = () => {
    const key = "ed_" + Math.random().toString(36).substring(2, 15);
    setApiKey(key);
    setCurrentStep(2);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(apiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const codeExamples = {
    nodejs: `import { EngineDock } from '@enginedock/sdk';

const engine = new EngineDock('${
      apiKey || "••••••••••••••••••••••••••••••••••"
    }');

// Test the connection
const response = await engine.test.connection();
console.log('Connection successful:', response);`,
    python: `from enginedock import EngineDock

engine = EngineDock('${apiKey || "••••••••••••••••••••••••••••••••••••"}')

# Test the connection
response = engine.test.connection()
print('Connection successful:', response)`,
    curl: `curl -X POST https://api.enginedock.com/v1/test \\
  -H "Authorization: Bearer ${
    apiKey || "••••••••••••••••••••••••••••••••••"
  }" \\
  -H "Content-Type: application/json"`,
  };

  return (
    <div className="p-6 space-y-8">
      {/* Step 1: API Key Generation */}
      <div className="relative">
        <div className="absolute left-2 top-10 bottom-0 w-0.5 bg-border" />

        <div className="relative mb-8">
          <div className="flex items-center">
            <div
              className={cn(
                "w-4 h-4 rounded-full border-2 relative z-10 transition-colors",
                currentStep >= 1
                  ? "bg-primary border-primary"
                  : "border-muted-foreground bg-background",
                currentStep > 1 && "bg-primary border-primary"
              )}
            >
              {currentStep > 1 && (
                <Check className="h-3 w-3 text-primary-foreground absolute -top-0.5 -left-0.5" />
              )}
            </div>
            <h2 className="ml-4 text-xl font-semibold">Generate API Key</h2>
          </div>

          <div className="ml-8 mt-4">
            <p className="text-muted-foreground mb-4">
              Generate an API key to start integrating with EngineDock
            </p>
            {!apiKey ? (
              <Button onClick={generateApiKey}>
                <Plus className="mr-2 h-4 w-4" />
                Generate API Key
              </Button>
            ) : (
              <div
                className={cn(
                  "p-4 rounded-lg border transition-colors",
                  currentStep === 2 ? "bg-primary/5 border-primary/20" : ""
                )}
              >
                <div className="relative">
                  <Input
                    type={showApiKey ? "text" : "password"}
                    value={apiKey}
                    readOnly
                    className="pr-20"
                  />
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setShowApiKey(!showApiKey)}
                    >
                      {showApiKey ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                    <Button variant="ghost" size="icon" onClick={handleCopy}>
                      {copied ? (
                        <Check className="h-4 w-4 text-primary" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Step 2: Integration Example */}
        <div className="relative">
          <div className="flex items-center">
            <div
              className={cn(
                "w-4 h-4 rounded-full border-2 relative z-10",
                currentStep === 2
                  ? "bg-background border-muted-foreground"
                  : "border-muted-foreground bg-background"
              )}
            />
            <h2 className="ml-4 text-xl font-semibold">Test the Integration</h2>
          </div>

          <div className="ml-8 mt-4">
            <p className="text-muted-foreground mb-4">
              Try out this example to test your API key
            </p>

            <div className="rounded-lg border overflow-hidden">
              <Tabs defaultValue="nodejs" className="w-full">
                <TabsList className="w-full justify-start rounded-none border-b bg-transparent">
                  <TabsTrigger value="nodejs">Node.js</TabsTrigger>
                  <TabsTrigger value="python">Python</TabsTrigger>
                  <TabsTrigger value="curl">cURL</TabsTrigger>
                </TabsList>
                {Object.entries(codeExamples).map(([lang, code]) => (
                  <TabsContent key={lang} value={lang}>
                    <CodeBlock 
                      code={code}
                      language={lang === 'nodejs' ? 'javascript' : lang}
                    />
                  </TabsContent>
                ))}
                <div className="p-4 border-t">
                  <Button disabled={currentStep !== 2}>
                    <PartyPopper className="mr-2 h-4 w-4" />
                    Test Connection
                  </Button>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold">Next Steps</h2>
          <p className="text-muted-foreground">
            Complete these additional steps to get the most out of EngineDock
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Connect Bank</CardTitle>
                <Globe className="h-5 w-5 text-muted-foreground" />
              </div>
              <CardDescription>
                Connect your first banking provider
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Connect Bank
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Setup Webhooks</CardTitle>
                <Users className="h-5 w-5 text-muted-foreground" />
              </div>
              <CardDescription>
                Configure webhooks for real-time updates
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Setup Webhooks
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Enable MFA</CardTitle>
                <ShieldCheck className="h-5 w-5 text-muted-foreground" />
              </div>
              <CardDescription>Add an extra layer of security</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Enable MFA
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
