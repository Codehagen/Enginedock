"use client";

import { EmptyPlaceholder } from "@/components/empty-placeholder";
import { buttonVariants } from "@/components/ui/button";
import { ApiKeyDialog } from "@/components/api-key-dialog";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Key } from "lucide-react";

export default function ApiKeysPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const apiKeys: any[] = [];

  const handleCreateKey = () => {
    // Here you would typically make an API call to create a new key
    setIsDialogOpen(true);
  };

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold">API Keys</h1>
          <p className="text-sm text-muted-foreground">
            Manage your API keys for authentication.
          </p>
        </div>
      </div>

      {apiKeys.length === 0 ? (
        <EmptyPlaceholder>
          <EmptyPlaceholder.Icon icon={Key} />
          <EmptyPlaceholder.Title>No API Keys</EmptyPlaceholder.Title>
          <EmptyPlaceholder.Description>
            You haven&apos;t created any API keys yet. Create one to get started
            with our API.
          </EmptyPlaceholder.Description>
          <button
            onClick={handleCreateKey}
            className={cn(buttonVariants({ variant: "default" }), "mt-4")}
          >
            Create API Key
          </button>
        </EmptyPlaceholder>
      ) : (
        <div className="rounded-md border">
          {/* API keys list will go here when we have keys */}
        </div>
      )}

      <ApiKeyDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </div>
  );
}
