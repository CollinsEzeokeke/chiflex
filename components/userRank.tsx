'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Trophy } from "lucide-react";

interface RankStats {
  currentPoints: number;
  nextRankPoints: number;
  currentRank: string;
  nextRank: string;
  percentile: string;
}

export default function UserRank() {
  const rankStats: RankStats = {
    currentPoints: 1234,
    nextRankPoints: 2000,
    currentRank: "Gold Member",
    nextRank: "Platinum",
    percentile: "Top 15% of buyers"
  };

  const progress = (rankStats.currentPoints / rankStats.nextRankPoints) * 100;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-yellow-500" />
          Your Rank
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-xl">{rankStats.currentRank}</h3>
              <p className="text-sm text-muted-foreground">{rankStats.percentile}</p>
            </div>
            <div className="h-12 w-12 bg-yellow-500/10 rounded-full flex items-center justify-center">
              <Trophy className="h-6 w-6 text-yellow-500" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress to {rankStats.nextRank}</span>
              <span>{progress.toFixed(0)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
            <p className="text-sm text-muted-foreground">
              {rankStats.currentPoints.toLocaleString()} / {rankStats.nextRankPoints.toLocaleString()} points
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
