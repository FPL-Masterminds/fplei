import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { UserSession } from "@/types";
import { ArrowRight, BarChart3, Crown, Gem, Medal, Trophy } from "lucide-react";
import Link from "next/link";

export function DashboardContent({ userSession }: { userSession: UserSession }) {
  const currentWeek = 38; // In a real app, calculate current gameweek
  
  return (
    <div className="space-y-8">
      <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 flex flex-col md:flex-row gap-6 items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
            <Crown className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Premium Subscription Active</h2>
            <p className="text-muted-foreground">You have full access to FPL Elite Insights</p>
          </div>
        </div>
        
        <Button asChild>
          <Link href="/premium">
            Access Premium Stats
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Gameweek</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{currentWeek}</div>
            <p className="text-xs text-muted-foreground mt-1">Deadline: Sat 15 May, 11:00</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Top Captain Pick</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Erling Haaland</div>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <p className="text-xs text-muted-foreground">MUN (H)</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Best Differential</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Cole Palmer</div>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <p className="text-xs text-muted-foreground">NOT (H)</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Form Player</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Mo Salah</div>
            <p className="text-xs text-muted-foreground mt-1">Last 5 GW: 8.2 pts/game</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              <span>Weekly Insights</span>
            </CardTitle>
            <CardDescription>
              Latest premium analysis for the upcoming gameweek
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Trophy className="h-4 w-4 text-primary" />
                  <h3 className="font-medium">Top 3 Captain Picks</h3>
                </div>
                <ul className="pl-6 text-sm space-y-1">
                  <li>Erling Haaland (MUN H) - Expected goals: 1.24</li>
                  <li>Mo Salah (BOU A) - Expected goals: 0.92</li>
                  <li>Phil Foden (MUN H) - Expected goals: 0.76</li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Medal className="h-4 w-4 text-primary" />
                  <h3 className="font-medium">Fixture Analysis</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Manchester City and Liverpool have the best fixtures this week. Consider players from these teams for transfers.
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Gem className="h-4 w-4 text-primary" />
                  <h3 className="font-medium">Hidden Gems</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Cole Palmer (5.8%) and Diogo Jota (8.1%) are excellent low-ownership differentials this week.
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" asChild className="w-full">
              <Link href="/premium">
                View Full Analysis
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              <span>Player Form Tracker</span>
            </CardTitle>
            <CardDescription>
              Players with the best form over the last 5 gameweeks
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Mohamed Salah", team: "Liverpool", form: 8.2, position: "MID" },
                { name: "Erling Haaland", team: "Man City", form: 7.8, position: "FWD" },
                { name: "Cole Palmer", team: "Chelsea", form: 7.6, position: "MID" },
                { name: "Bukayo Saka", team: "Arsenal", form: 7.2, position: "MID" },
                { name: "Alexander Isak", team: "Newcastle", form: 6.9, position: "FWD" },
              ].map((player, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="font-medium w-5 text-center">{index + 1}</div>
                    <div>
                      <div className="font-medium">{player.name}</div>
                      <div className="text-xs text-muted-foreground">{player.team} • {player.position}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">{player.form}</div>
                    <div className="text-xs text-muted-foreground">pts/game</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" asChild className="w-full">
              <Link href="/premium">
                View All Players
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}