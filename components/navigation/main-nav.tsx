import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FancyButton } from "@/components/ui/fancy-button";
import { BarChart3, LogOut, Menu, X } from "lucide-react";
import { UserSession } from "@/types";
import { supabase } from "@/lib/supabase/client";

interface MainNavProps {
  userSession?: UserSession;
}

export function MainNav({ userSession }: MainNavProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

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
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Link to="/" className="flex items-center gap-2">
          <BarChart3 className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl hidden sm:inline">FPL Elite Insights</span>
          <span className="font-bold text-xl sm:hidden">FPL</span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6">
        {authNavItems.map((item) =>
          item && item.label === "Sign Up" ? (
            <FancyButton key={item.href} to={item.href}>
              {item.label}
            </FancyButton>
          ) : (
            <Link
              key={item?.href}
              to={item?.href || "#"}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive(item?.href || "")
                  ? "text-foreground font-semibold"
                  : "text-muted-foreground"
              )}
            >
              {item?.label}
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

      {/* Mobile menu toggle */}
      <div className="md:hidden">
        <Button variant="ghost" size="icon" onClick={toggleMenu}>
          {isMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background pt-16 px-4 md:hidden">
          <div className="flex flex-col space-y-4">
            {authNavItems.map((item) =>
              item && item.label === "Sign Up" ? (
                <FancyButton
                  key={item.href}
                  to={item.href}
                  className="w-full"
                >
                  {item.label}
                </FancyButton>
              ) : (
                <Link
                  key={item?.href}
                  to={item?.href || "#"}
                  className={cn(
                    "text-lg font-medium p-2 transition-colors hover:text-primary",
                    isActive(item?.href || "")
                      ? "text-foreground font-semibold"
                      : "text-muted-foreground"
                  )}
                  onClick={toggleMenu}
                >
                  {item?.label}
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
