import { LogOut, Heart, MessageCircle, Share2, PawPrint } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { User } from "@/lib/auth";
import { useState } from "react";

interface DashboardProps {
  user: User;
  onLogout: () => void;
}

export function Dashboard({ user, onLogout }: DashboardProps) {
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());

  const toggleLike = (index: number) => {
    setLikedPosts((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <div className="w-full max-w-lg space-y-6">
      {/* Welcome header */}
      <Card className="border-none shadow-lg bg-card/80 backdrop-blur-sm">
        <CardContent className="pt-6 text-center space-y-3">
          <div className="animate-float inline-block">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <PawPrint className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="text-2xl font-heading font-bold text-foreground">
            Olá, {user.userName}! 🐾
          </h1>
          <p className="text-muted-foreground">
            O login foi efetuado com sucesso!
          </p>
          <Button
            variant="outline"
            onClick={onLogout}
            className="gap-2 hover-scale"
          >
            <LogOut className="w-4 h-4" /> Sair
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
