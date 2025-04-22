"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, LineChart, PieChart } from "lucide-react";
import { 
  Bar, 
  BarChart as RechartBarChart, 
  Line, 
  LineChart as RechartLineChart, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  PieChart as RechartPieChart,
  Pie,
  Cell
} from "recharts";

const playerFormData = [
  { name: "GW1", Salah: 8, Haaland: 12, Saka: 2, Palmer: 6 },
  { name: "GW2", Salah: 2, Haaland: 2, Saka: 8, Palmer: 9 },
  { name: "GW3", Salah: 9, Haaland: 7, Saka: 1, Palmer: 5 },
  { name: "GW4", Salah: 5, Haaland: 12, Saka: 7, Palmer: 2 },
  { name: "GW5", Salah: 17, Haaland: 6, Saka: 10, Palmer: 15 },
];

const teamGoalsData = [
  { name: "Man City", goals: 42 },
  { name: "Liverpool", goals: 36 },
  { name: "Arsenal", goals: 33 },
  { name: "Aston Villa", goals: 31 },
  { name: "Chelsea", goals: 28 },
  { name: "Tottenham", goals: 27 },
  { name: "Newcastle", goals: 26 },
  { name: "Brighton", goals: 25 },
];

const positionDistribution = [
  { name: "Goalkeepers", value: 2 },
  { name: "Defenders", value: 5 },
  { name: "Midfielders", value: 5 },
  { name: "Forwards", value: 3 },
];

const COLORS = ['hsl(var(--chart-1))', 'hsl(var(--chart-2))', 'hsl(var(--chart-3))', 'hsl(var(--chart-4))'];

export function PremiumStats() {
  return (
    <div className="space-y-8">
      <Tabs defaultValue="player-form">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="player-form" className="flex items-center gap-2">
            <LineChart className="h-4 w-4" />
            <span>Player Form</span>
          </TabsTrigger>
          <TabsTrigger value="team-stats" className="flex items-center gap-2">
            <BarChart className="h-4 w-4" />
            <span>Team Stats</span>
          </TabsTrigger>
          <TabsTrigger value="template-team" className="flex items-center gap-2">
            <PieChart className="h-4 w-4" />
            <span>Template Team</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="player-form" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Premium Player Form</CardTitle>
              <CardDescription>
                Track the form of premium players over the last 5 gameweeks
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartLineChart
                    data={playerFormData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Salah" stroke="hsl(var(--chart-1))" strokeWidth={2} />
                    <Line type="monotone" dataKey="Haaland" stroke="hsl(var(--chart-2))" strokeWidth={2} />
                    <Line type="monotone" dataKey="Saka" stroke="hsl(var(--chart-3))" strokeWidth={2} />
                    <Line type="monotone" dataKey="Palmer" stroke="hsl(var(--chart-4))" strokeWidth={2} />
                  </RechartLineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Form Analysis</CardTitle>
                <CardDescription>
                  Insights from the performance data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium">Key Observations:</h3>
                    <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                      <li>• Mo Salah shows the most explosive potential with a 17-point haul in GW5</li>
                      <li>• Haaland has been the most consistent performer, never scoring below 2 points</li>
                      <li>• Palmer is emerging as a value pick with increasing form</li>
                      <li>• Saka has been inconsistent but shows high ceiling potential</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium">Recommendations:</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Captaincy should be considered for Salah or Haaland, with the fixture difficulty being the tie-breaker. Palmer represents excellent value and should be in most squads.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Form vs. Fixtures</CardTitle>
                <CardDescription>
                  Upcoming fixture difficulty for in-form players
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-4 gap-4 pb-4 border-b">
                    <div className="font-medium">Player</div>
                    <div className="font-medium">Form</div>
                    <div className="font-medium">Next 3</div>
                    <div className="font-medium">Buy?</div>
                  </div>
                  
                  {[
                    { name: "Salah", form: "8.2", fixtures: "MUN, TOT, SOU", buy: "Yes" },
                    { name: "Haaland", form: "7.8", fixtures: "ARS, BRI, BOU", buy: "Hold" },
                    { name: "Palmer", form: "7.4", fixtures: "WHU, NOT, EVE", buy: "Yes" },
                    { name: "Saka", form: "5.6", fixtures: "MCI, NEW, WOL", buy: "No" },
                  ].map((player, index) => (
                    <div key={index} className="grid grid-cols-4 gap-4 py-3 border-b last:border-0">
                      <div>{player.name}</div>
                      <div>{player.form}</div>
                      <div className="text-sm text-muted-foreground">{player.fixtures}</div>
                      <div className={player.buy === "Yes" ? "text-green-600 font-medium" : player.buy === "No" ? "text-red-600 font-medium" : "text-amber-600 font-medium"}>
                        {player.buy}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="team-stats" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Team Goals Scored</CardTitle>
              <CardDescription>
                Total goals scored by each team this season
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartBarChart data={teamGoalsData} layout="vertical" margin={{ top: 20, right: 30, left: 80, bottom: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" />
                    <Tooltip />
                    <Bar dataKey="goals" fill="hsl(var(--chart-1))" />
                  </RechartBarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Offensive Analysis</CardTitle>
                <CardDescription>
                  Insights into team attacking patterns
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium">Key Insights:</h3>
                    <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                      <li>• Man City and Liverpool's attacking assets should be prioritized</li>
                      <li>• Arsenal creative players are creating consistent chances</li>
                      <li>• Aston Villa's attacking output represents excellent value</li>
                      <li>• Chelsea's recent uptick in form warrants attention</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium">Target Players:</h3>
                    <div className="mt-2 grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-medium">Man City</p>
                        <p className="text-muted-foreground">Haaland, Foden, De Bruyne</p>
                      </div>
                      <div>
                        <p className="font-medium">Liverpool</p>
                        <p className="text-muted-foreground">Salah, Jota, Gakpo</p>
                      </div>
                      <div>
                        <p className="font-medium">Arsenal</p>
                        <p className="text-muted-foreground">Saka, Martinelli, Havertz</p>
                      </div>
                      <div>
                        <p className="font-medium">Aston Villa</p>
                        <p className="text-muted-foreground">Watkins, Bailey, Rogers</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Defensive Analysis</CardTitle>
                <CardDescription>
                  Clean sheet potential for each team
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 pb-4 border-b">
                    <div className="font-medium">Team</div>
                    <div className="font-medium">Clean Sheets</div>
                    <div className="font-medium">Target?</div>
                  </div>
                  
                  {[
                    { name: "Man City", cleanSheets: "8", target: "Yes" },
                    { name: "Arsenal", cleanSheets: "7", target: "Yes" },
                    { name: "Liverpool", cleanSheets: "6", target: "Yes" },
                    { name: "Newcastle", cleanSheets: "5", target: "Hold" },
                    { name: "Aston Villa", cleanSheets: "4", target: "Hold" },
                    { name: "Man United", cleanSheets: "3", target: "No" },
                  ].map((team, index) => (
                    <div key={index} className="grid grid-cols-3 gap-4 py-3 border-b last:border-0">
                      <div>{team.name}</div>
                      <div>{team.cleanSheets}</div>
                      <div className={team.target === "Yes" ? "text-green-600 font-medium" : team.target === "No" ? "text-red-600 font-medium" : "text-amber-600 font-medium"}>
                        {team.target}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="template-team" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Elite Template Team</CardTitle>
              <CardDescription>
                The most optimal team structure based on our analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartPieChart>
                      <Pie
                        data={positionDistribution}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        innerRadius={60}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {positionDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </RechartPieChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium">Recommended Structure:</h3>
                    <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                      <li>• GK: Premium (£5.5m) + Budget (£4.0m)</li>
                      <li>• DEF: 2x Premium (£6.0m+), 3x Mid-price (£4.5-5.5m)</li>
                      <li>• MID: 3x Premium (£8.0m+), 2x Mid-price (£5.5-7.5m)</li>
                      <li>• FWD: 1x Premium (£11.0m+), 2x Budget (£5.5-7.0m)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium">Budget Allocation:</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Prioritize premium midfielders and a premium forward. Investing in defense offers better value than multiple premium forwards.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Elite Template XI</CardTitle>
                <CardDescription>
                  The optimal starting XI based on form and fixtures
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-4 gap-4 pb-2 border-b">
                    <div className="font-medium">Position</div>
                    <div className="font-medium">Player</div>
                    <div className="font-medium">Team</div>
                    <div className="font-medium">Price</div>
                  </div>
                  
                  {[
                    { position: "GK", name: "Ederson", team: "MCI", price: "£5.5m" },
                    { position: "DEF", name: "Alexander-Arnold", team: "LIV", price: "£7.0m" },
                    { position: "DEF", name: "Gabriel", team: "ARS", price: "£5.0m" },
                    { position: "DEF", name: "Estupiñán", team: "BHA", price: "£5.0m" },
                    { position: "DEF", name: "Porro", team: "TOT", price: "£5.5m" },
                    { position: "MID", name: "Salah", team: "LIV", price: "£12.5m" },
                    { position: "MID", name: "Saka", team: "ARS", price: "£9.5m" },
                    { position: "MID", name: "Foden", team: "MCI", price: "£8.5m" },
                    { position: "MID", name: "Palmer", team: "CHE", price: "£5.8m" },
                    { position: "MID", name: "Gordon", team: "NEW", price: "£6.5m" },
                    { position: "FWD", name: "Haaland", team: "MCI", price: "£14.0m" },
                  ].map((player, index) => (
                    <div key={index} className="grid grid-cols-4 gap-4 py-2 text-sm border-b last:border-0">
                      <div>{player.position}</div>
                      <div className="font-medium">{player.name}</div>
                      <div>{player.team}</div>
                      <div>{player.price}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Differential Picks</CardTitle>
                <CardDescription>
                  Low-ownership players with high potential
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-4 gap-4 pb-2 border-b">
                    <div className="font-medium">Player</div>
                    <div className="font-medium">Team</div>
                    <div className="font-medium">Price</div>
                    <div className="font-medium">Own%</div>
                  </div>
                  
                  {[
                    { name: "Trossard", team: "ARS", price: "£6.5m", ownership: "3.2%" },
                    { name: "Diogo Jota", team: "LIV", price: "£7.8m", ownership: "5.6%" },
                    { name: "James Maddison", team: "TOT", price: "£7.9m", ownership: "8.1%" },
                    { name: "Darwin Núñez", team: "LIV", price: "£7.5m", ownership: "4.3%" },
                    { name: "Morgan Rogers", team: "AVL", price: "£5.0m", ownership: "1.2%" },
                    { name: "Bryan Mbeumo", team: "BRE", price: "£6.8m", ownership: "7.5%" },
                    { name: "Eberechi Eze", team: "CRY", price: "£6.0m", ownership: "2.8%" },
                  ].map((player, index) => (
                    <div key={index} className="grid grid-cols-4 gap-4 py-2 text-sm border-b last:border-0">
                      <div className="font-medium">{player.name}</div>
                      <div>{player.team}</div>
                      <div>{player.price}</div>
                      <div>{player.ownership}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}