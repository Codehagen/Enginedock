"use client";

import { Icons } from "@/components/icons";
import { MobileDrawer } from "@/components/mobile-drawer";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SignInButton, UserButton, useAuth } from "@clerk/nextjs";

export function Header() {
  const { isSignedIn, isLoaded } = useAuth();
  const router = useRouter();

  // Redirect to dashboard if signed in
  if (isLoaded && isSignedIn) {
    router.push("/dashboard");
  }

  return (
    <header className="sticky top-0 h-[var(--header-height)] z-50 p-0 bg-background/60 backdrop-blur">
      <div className="flex justify-between items-center container mx-auto p-2">
        <Link
          href="/"
          title="brand-logo"
          className="relative mr-6 flex items-center space-x-2"
        >
          <Icons.logo className="w-auto" />
          <span className="font-semibold text-lg">{siteConfig.name}</span>
        </Link>
        <div className="hidden lg:block">
          {isLoaded && (
            <>
              {isSignedIn ? (
                <UserButton afterSignOutUrl="/" />
              ) : (
                <SignInButton mode="modal">
                  <button
                    className={cn(
                      buttonVariants({ variant: "default" }),
                      "h-8 text-primary-foreground rounded-lg group tracking-tight font-medium flex items-center gap-2"
                    )}
                  >
                    <Icons.logo className="h-4 w-4" />
                    {siteConfig.cta}
                  </button>
                </SignInButton>
              )}
            </>
          )}
        </div>
        <div className="mt-2 cursor-pointer block lg:hidden">
          <MobileDrawer />
        </div>
      </div>
      <hr className="absolute w-full bottom-0" />
    </header>
  );
}
