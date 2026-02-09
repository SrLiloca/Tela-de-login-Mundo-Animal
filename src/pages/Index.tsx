import { useState } from "react";
import { LoginForm } from "@/components/LoginForm";
import { ForgotPasswordModal } from "@/components/ForgotPasswordModal";
import { Dashboard } from "@/components/Dashboard";
import { User } from "@/lib/auth";
import { toast } from "@/hooks/use-toast";
import { NavLink } from "@/components/NavLink";

type View = "login" | "register";

const Index = () => {
  const [view, setView] = useState<View>("login");
  const [user, setUser] = useState<User | null>(null);
  const [forgotOpen, setForgotOpen] = useState(false);

  const handleLogin = (u: User) => setUser(u);

  const handleRegister = (u: User) => setUser(u);

  const handleLogout = () => {
    setUser(null);
    setView("login");
    toast({
      title: "Até logo! 👋",
      description: "Seu pet ficará esperando seu retorno 🐾",
    });
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-4 py-8">
      {/* Decorative background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 text-6xl opacity-10 animate-float" style={{ animationDelay: "0s" }}>🐾</div>
        <div className="absolute top-1/4 right-16 text-5xl opacity-10 animate-float" style={{ animationDelay: "1s" }}>🐶</div>
        <div className="absolute bottom-20 left-1/4 text-5xl opacity-10 animate-float" style={{ animationDelay: "2s" }}>🐱</div>
        <div className="absolute bottom-1/3 right-1/4 text-4xl opacity-10 animate-float" style={{ animationDelay: "0.5s" }}>🐾</div>
      </div>

      <div className="relative z-10">
        {user ? (
          <Dashboard user={user} onLogout={handleLogout} />
        ) : view === "login" ? (
          <LoginForm
            onLogin={handleLogin}
            onSwitchToRegister={() => setView("register")}
            onForgotPassword={() => setForgotOpen(true)}
          />
        ) : (
          <ForgotPasswordModal open={forgotOpen} onClose={() => setForgotOpen(false)}
          />
        )}
      </div>

      <ForgotPasswordModal open={forgotOpen} onClose={() => setForgotOpen(false)} />
    </main>
  );
};

export default Index;
