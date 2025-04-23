import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface FancyButtonProps {
  children: React.ReactNode;
  to: string;
  className?: string;
}

export function FancyButton({ children, to, className }: FancyButtonProps) {
  return (
    <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white text-xs font-medium backdrop-blur-3xl">
        <Link
          to={to}
          className={cn(
            "inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-tr from-zinc-300/20 via-[#00FF87]/30 to-transparent text-[#2E0032] border-input border-[1px] hover:bg-gradient-to-tr hover:from-zinc-300/30 hover:via-[#00FF87]/40 hover:to-transparent transition-all sm:w-auto py-4 px-10",
            className
          )}
        >
          {children}
        </Link>
      </div>
    </span>
  );
}
