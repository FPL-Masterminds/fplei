import { Link } from 'react-router-dom'
import { BarChart3, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="flex items-center justify-between p-4 border-b">
        <Link to="/" className="flex items-center gap-2">
          <BarChart3 className="h-6 w-6" />
          <span className="font-bold text-xl">FPL Elite Insights</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/login">Login</Link>
          <Button asChild>
            <Link to="/signup">Sign Up</Link>
          </Button>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Elevate Your Fantasy Premier League Game
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Join thousands of players gaining the competitive edge with our expert insights and data-driven analysis.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" asChild>
              <Link to="/signup">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/about">Learn more</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}