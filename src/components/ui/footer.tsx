import { Button } from "@/components/ui/button";
import { BarChart3, Github, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="pb-6 pt-16 lg:pb-8 lg:pt-24">
      <div className="px-4 lg:px-8">
        <div className="md:flex md:items-start md:justify-between">
          <a
            href="/"
            className="flex items-center gap-x-2"
            aria-label="FPL Elite Insights"
          >
            <BarChart3 className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">FPL Elite Insights</span>
          </a>
          <ul className="flex list-none mt-6 md:mt-0 space-x-3">
            <li>
              <Button
                variant="secondary"
                size="icon"
                className="h-10 w-10 rounded-full"
                asChild
              >
                <a href="https://twitter.com" target="_blank" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
            </li>
            <li>
              <Button
                variant="secondary"
                size="icon"
                className="h-10 w-10 rounded-full"
                asChild
              >
                <a href="https://github.com" target="_blank" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </li>
          </ul>
        </div>
        <div className="border-t mt-6 pt-6 md:mt-4 md:pt-8 lg:grid lg:grid-cols-10">
          <nav className="lg:mt-0 lg:col-[4/11]">
            <ul className="list-none flex flex-wrap -my-1 -mx-2 lg:justify-end">
              <li className="my-1 mx-2 shrink-0">
                <a
                  href="/about"
                  className="text-sm text-primary underline-offset-4 hover:underline"
                >
                  About
                </a>
              </li>
              <li className="my-1 mx-2 shrink-0">
                <a
                  href="/contact"
                  className="text-sm text-primary underline-offset-4 hover:underline"
                >
                  Contact
                </a>
              </li>
              <li className="my-1 mx-2 shrink-0">
                <a
                  href="/premium"
                  className="text-sm text-primary underline-offset-4 hover:underline"
                >
                  Premium
                </a>
              </li>
            </ul>
          </nav>
          <div className="mt-6 lg:mt-0 lg:col-[4/11]">
            <ul className="list-none flex flex-wrap -my-1 -mx-3 lg:justify-end">
              <li className="my-1 mx-3 shrink-0">
                <a
                  href="/privacy"
                  className="text-sm text-muted-foreground underline-offset-4 hover:underline"
                >
                  Privacy
                </a>
              </li>
              <li className="my-1 mx-3 shrink-0">
                <a
                  href="/terms"
                  className="text-sm text-muted-foreground underline-offset-4 hover:underline"
                >
                  Terms
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-6 text-sm leading-6 text-muted-foreground whitespace-nowrap lg:mt-0 lg:row-[1/3] lg:col-[1/4]">
            <div>© 2024 FPL Elite Insights</div>
            <div>All rights reserved</div>
          </div>
        </div>
      </div>
    </footer>
  );
}