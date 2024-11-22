"use client";

import { useEffect, useState, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, FileWarning, RefreshCcw, HelpCircle } from "lucide-react";
import { CheckIcon } from "@radix-ui/react-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { motion, AnimatePresence } from "framer-motion";
import { Confetti } from "@/components/ui/confetti";

interface AuthStatus {
  status: "loading" | "success" | "error";
  message: string;
  provider?: string;
}

export default function CallbackPage() {
  const searchParams = useSearchParams();
  const [authStatus, setAuthStatus] = useState<AuthStatus>({
    status: "loading",
    message: "Processing your authentication...",
  });
  const [progress, setProgress] = useState(0);
  const confettiRef = useRef(null);

  const triggerConfetti = () => {
    if (confettiRef.current) {
      (confettiRef.current as any).fire({
        spread: 360,
        startVelocity: 45,
        elementCount: 200,
        decay: 0.9,
        scalar: 1.2,
        drift: 0,
        origin: {
          x: 0.5,
          y: 0.3,
        },
        colors: ["#4CAF50", "#2196F3", "#FF9800", "#E91E63", "#9C27B0"],
      });
    }
  };

  useEffect(() => {
    const handleAuth = async () => {
      try {
        const provider = searchParams.get("provider");
        const code = searchParams.get("code");
        const state = searchParams.get("state");

        if (!code) {
          throw new Error("No authorization code received");
        }

        // Simulate progress
        for (let i = 0; i <= 100; i += 10) {
          await new Promise((resolve) => setTimeout(resolve, 300));
          setProgress(i);
        }

        setAuthStatus({
          status: "success",
          message: "Successfully connected!",
          provider: provider || undefined,
        });

        // Only trigger confetti once after success
        setTimeout(triggerConfetti, 300);
      } catch (error) {
        setAuthStatus({
          status: "error",
          message:
            error instanceof Error ? error.message : "Authentication failed",
        });
      }
    };

    handleAuth();
  }, [searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-950/50 dark:to-purple-950/50">
      <Confetti
        ref={confettiRef}
        className="fixed inset-0 pointer-events-none w-full h-full"
        manualstart={true}
      />
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="w-full max-w-md p-6 space-y-6">
            <div className="text-center space-y-4">
              {authStatus.status === "loading" && (
                <>
                  <Icons.spinner className="h-8 w-8 animate-spin mx-auto text-blue-500" />
                  <h2 className="text-xl font-semibold">
                    Connecting your account
                  </h2>
                  <Progress value={progress} className="w-full" />
                </>
              )}

              {authStatus.status === "success" && (
                <>
                  <CheckIcon className="h-8 w-8 mx-auto text-green-500" />
                  <h2 className="text-xl font-semibold">
                    Connection Successful!
                  </h2>
                  <Alert>
                    {/* <CheckIcon className="h-4 w-4" /> */}
                    <AlertTitle>Authentication Successful</AlertTitle>
                    <AlertDescription>
                      You&apos;ve been securely connected. Click below to access
                      your dashboard.
                    </AlertDescription>
                  </Alert>
                </>
              )}

              {authStatus.status === "error" && (
                <>
                  <FileWarning className="h-8 w-8 mx-auto text-red-500" />
                  <h2 className="text-xl font-semibold">Connection Failed</h2>
                  <Alert variant="destructive">
                    {/* <FileWarning className="h-4 w-4" /> */}
                    <AlertTitle>Authentication Failed</AlertTitle>
                    <AlertDescription>
                      We couldn&apos;t connect your account. Please try again or
                      contact support.
                    </AlertDescription>
                  </Alert>
                </>
              )}

              <p className="text-muted-foreground">{authStatus.message}</p>

              {authStatus.status === "success" && authStatus.provider && (
                <div className="bg-muted p-3 rounded-lg mt-4">
                  <p className="text-sm">
                    Successfully connected to{" "}
                    <span className="font-semibold capitalize">
                      {authStatus.provider}
                    </span>
                  </p>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-3">
              {authStatus.status === "success" && (
                <Button asChild>
                  <Link href="/dashboard">
                    Go to Dashboard
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              )}

              {authStatus.status === "error" && (
                <>
                  <Button variant="destructive" asChild>
                    <Link href="/integrations">
                      Try Again
                      <RefreshCcw className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/support">Contact Support</Link>
                  </Button>
                </>
              )}

              <Button variant="ghost" asChild>
                <Link href="/">Back to Home</Link>
              </Button>

              <div className="flex justify-center space-x-4 mt-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="link" asChild>
                        <Link href="/faq">
                          <HelpCircle className="h-4 w-4 mr-2" />
                          FAQ
                        </Link>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>View frequently asked questions</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="link" asChild>
                        <Link href="/support">
                          <HelpCircle className="h-4 w-4 mr-2" />
                          Support
                        </Link>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Contact our support team</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
