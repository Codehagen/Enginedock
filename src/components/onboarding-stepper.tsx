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

export default function OnboardingStepper() {
  const [currentStep, setCurrentStep] = useState(1);
  const [apiKey, setApiKey] = useState("");
  const [showApiKey, setShowApiKey] = useState(false);

  const generateApiKey = () => {
    const key = "ed_" + Math.random().toString(36).substring(2, 15);
    setApiKey(key);
    setCurrentStep(2);
  };

  const languages = [
    "Node.js",
    "Python",
    "PHP",
    "Ruby",
    "Go",
    "Java",
    ".NET",
    "cURL",
  ];

  return (
    <div className="p-6 space-y-8">
      {/* Step 1: API Key Generation */}
      <div className="relative">
        <div className="absolute left-2 top-10 bottom-0 w-0.5 bg-border" />

        <div className="relative mb-8">
          <div className="flex items-center">
            <div
              className={cn(
                "w-4 h-4 rounded-full border-2 relative z-10",
                currentStep >= 1
                  ? "bg-primary border-primary"
                  : "border-muted-foreground bg-background"
              )}
            />
            <h2 className="ml-4 text-xl font-semibold">Generate API Key</h2>
          </div>

          <div className="ml-8 mt-4">
            <p className="text-muted-foreground mb-4">
              Generate an API key to start integrating with EngineDock
            </p>
            {!apiKey ? (
              <Button onClick={generateApiKey}>
                Generate API Key
              </Button>
            ) : (
              <div className="space-y-4">
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
                      {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => navigator.clipboard.writeText(apiKey)}
                    >
                      <Copy className="h-4 w-4" />
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
              <div className="flex items-center gap-2 p-2 border-b overflow-x-auto">
                {languages.map((lang, i) => (
                  <Button
                    key={lang}
                    variant={i === 0 ? "secondary" : "ghost"}
                    size="sm"
                    disabled={currentStep !== 2}
                  >
                    {lang}
                  </Button>
                ))}
              </div>

              <div className="p-4 bg-muted font-mono text-sm">
                <pre className="text-muted-foreground">
                  {`import { EngineDock } from '@enginedock/sdk';

const engine = new EngineDock('${apiKey || "••••••••••••••••••••••••••••••••••"}');

// Test the connection
const response = await engine.test.connection();
console.log('Connection successful:', response);`}
                </pre>
              </div>

              <div className="p-4 border-t">
                <Button disabled={currentStep !== 2}>Test Connection</Button>
              </div>
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
              <CardDescription>
                Add an extra layer of security
              </CardDescription>
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
