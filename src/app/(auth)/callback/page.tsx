"use client";

//For local testing: http://localhost:3000/callback?provider=poweroffice&code=abc123&state=xyz789

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, FileWarning, RefreshCcw } from "lucide-react";
import { CheckIcon } from "@radix-ui/react-icons";

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

  useEffect(() => {
    const handleAuth = async () => {
      try {
        const provider = searchParams.get("provider");
        const code = searchParams.get("code");
        const state = searchParams.get("state");

        if (!code) {
          throw new Error("No authorization code received");
        }

        // Here you would typically exchange the code for an access token
        // await engine.auth.exchangeCode({ provider, code, state });

        setAuthStatus({
          status: "success",
          message: "Successfully connected!",
          provider: provider || undefined,
        });
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
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-6 space-y-6">
        <div className="text-center space-y-4">
          {authStatus.status === "loading" && (
            <>
              <Icons.spinner className="h-8 w-8 animate-spin mx-auto text-blue-500" />
              <h2 className="text-xl font-semibold">Connecting your account</h2>
            </>
          )}

          {authStatus.status === "success" && (
            <>
              <CheckIcon className="h-8 w-8 mx-auto text-green-500" />
              <h2 className="text-xl font-semibold">Connection Successful!</h2>
            </>
          )}

          {authStatus.status === "error" && (
            <>
              <FileWarning className="h-8 w-8 mx-auto text-red-500" />
              <h2 className="text-xl font-semibold">Connection Failed</h2>
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
        </div>
      </Card>
    </div>
  );
}
