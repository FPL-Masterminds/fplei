import { Button } from "@/components/ui/button";
import { BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

function Header1() {
    return (
        <header className="w-full z-40 fixed top-0 left-0 bg-background">
            <div className="container relative mx-auto min-h-20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link to="/" className="flex items-center gap-2">
                        <BarChart3 className="h-6 w-6 text-primary" />
                        <span className="font-bold text-xl hidden sm:inline">FPL Elite Insights</span>
                        <span className="font-bold text-xl sm:hidden">FPL</span>
                    </Link>
                </div>
                
                <div className="flex items-center gap-4">
                    <Link to="/login" className="text-sm font-medium text-muted-foreground hover:text-primary">
                        Login
                    </Link>
                    <Button asChild>
                        <Link to="/signup">
                            Sign Up
                        </Link>
                    </Button>
                </div>
            </div>
        </header>
    );
}

export { Header1 };