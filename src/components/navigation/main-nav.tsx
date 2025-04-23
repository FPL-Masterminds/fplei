import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BarChart3 } from "lucide-react";
import { UserSession } from "@/types";
import { supabase } from "@/lib/supabase/client";

interface MainNavProps {
  userSession?: UserSession;
}

export function MainNav({ userSession }: MainNavProps) {
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  return (
    <nav className="flex items-center justify-between w-full p-4 md:px-8 border-b">
      <div className="flex items-center gap-2">
        <Link to="/" className="flex items-center gap-2">
          <BarChart3 className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl hidden sm:inline">FPL Elite Insights</span>
          <span className="font-bold text-xl sm:hidden">FPL</span>
        </Link>
      </div>

      <div className="flex items-center gap-4">
        {userSession?.user ? (
          <>
            {userSession.subscription?.status === "active" && (
              <Link
                to="/premium"
                className="text-sm font-medium text-muted-foreground hover:text-primary"
              >
                Premium
              </Link>
            )}
            <Link
              to="/dashboard"
              className="text-sm font-medium text-muted-foreground hover:text-primary"
            >
              Dashboard
            </Link>
            <Button variant="outline" onClick={handleSignOut}>
              Sign Out
            </Button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="text-sm font-medium text-muted-foreground hover:text-primary"
            >
              Login
            </Link>
            <Button asChild>
              <Link to="/signup">
                Sign Up
              </Link>
            </Button>
          </>
        )}
      </div>
    </nav>
  );
}