"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BarChart3, LogOut, Menu, X } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { UserSession } from "@/types";
import { supabase } from "@/lib/supabase/client";

interface MainNavProps {
  userSession?: UserSession;
}

export function MainNav({ userSession }: MainNavProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  };

  const mainNavItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const authNavItems = userSession?.user
    ? [
        { label: "Dashboard", href: "/dashboard" },
        userSession?.subscription?.status === "active"
          ? { label: "Premium", href: "/premium" }
          : null,
      ].filter(Boolean)
    : [
        { label: "Login", href: "/login" },
        { label: "Sign Up", href: "/signup" },
      ];

  return (
    <nav className="flex items-center justify-between w-full p-4 md:px-8 border-b">
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2">
          <BarChart3 className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl hidden sm:inline">FPL Elite Insights</span>
          <span className="font-bold text-xl sm:hidden">FPL</span>
        </Link>
      </div>

      {/* Desktop navigation */}
      <div className="hidden md:flex items-center gap-6">
        {mainNavItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              isActive(item.href)
                ? "text-foreground font-semibold"
                : "text-muted-foreground"
            )}
          >
            {item.label}
          </Link>
        ))}

        {authNavItems.map((item) => 
          item && (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive(item.href)
                  ? "text-foreground font-semibold"
                  : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          )
        )}

        {userSession?.user && (
          <Button 
            variant="ghost" 
            size="sm" 
            className="ml-2"
            onClick={handleSignOut}
          >
            <LogOut className="h-4 w-4 mr-2" />
            <span>Sign Out</span>
          </Button>
        )}
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <Button variant="ghost" size="icon" onClick={toggleMenu}>
          {isMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background pt-16 px-4 md:hidden">
          <div className="flex flex-col space-y-4">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-lg font-medium p-2 transition-colors hover:text-primary",
                  isActive(item.href)
                    ? "text-foreground font-semibold"
                    : "text-muted-foreground"
                )}
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            ))}

            <div className="border-t my-2"></div>

            {authNavItems.map((item) => 
              item && (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-lg font-medium p-2 transition-colors hover:text-primary",
                    isActive(item.href)
                      ? "text-foreground font-semibold"
                      : "text-muted-foreground"
                  )}
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              )
            )}

            {userSession?.user && (
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  handleSignOut();
                  toggleMenu();
                }}
              >
                <LogOut className="h-4 w-4 mr-2" />
                <span>Sign Out</span>
              </Button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}