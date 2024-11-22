"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";

interface ApiKeyDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ApiKeyDialog({ isOpen, onClose }: ApiKeyDialogProps) {
  const [copied, setCopied] = useState(false);
  const apiKey = "os_3ZkZaaH74dy8DAYQWKA2KS6T"; // This would come from your API in real implementation

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(apiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>API Key</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Please make sure to store the API key safely. You will only be able
            to see it once. If you forgot to save it, you will need to revoke
            and recreate a key.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div className="relative rounded-md bg-muted p-3 font-mono text-sm">
            {apiKey}
            <Button
              size="icon"
              variant="ghost"
              className="absolute right-1 top-1 h-8 w-8"
              onClick={copyToClipboard}
            >
              {copied ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>
          <Button onClick={onClose}>Continue</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
