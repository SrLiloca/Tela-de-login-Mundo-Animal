import { useState } from "react";
import { PawPrint, Mail, Lock, Eye, EyeOff, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { authenticate, User } from "@/lib/auth";
import { toast } from "@/hooks/use-toast";

interface LoginFormProps {
  onLogin: (user: User) => void;
  onSwitchToRegister: () => void;
  onForgotPassword: () => void;
}

export function LoginForm({ onLogin, onSwitchToRegister, onForgotPassword }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!email.trim()) newErrors.email = "Informe seu e-mail 📧";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "E-mail inválido 🐾";
    if (!password) newErrors.password = "Informe sua senha 🔒";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    // Simulate network delay for better UX
    await new Promise((r) => setTimeout(r, 800));

    const user = authenticate(email, password);
    setLoading(false);

    if (user) {
      toast({
        title: `Bem-vindo de volta! 🐶`,
      });
      onLogin(user);
    } else {
      toast({
        title: "Ops! Dados incorretos 🐾",
        description: "Verifique seu e-mail e senha e tente novamente.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="w-full max-w-md border-none shadow-xl bg-card/80 backdrop-blur-sm">
      <CardHeader className="text-center pb-2">
        <div className="mx-auto mb-3 animate-float">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
            <PawPrint className="w-10 h-10 text-primary" />
          </div>
        </div>
        <CardTitle className="text-3xl font-heading font-bold text-foreground">
          Mundo Animal
        </CardTitle>
        <CardDescription className="text-muted-foreground text-base">
          A rede social do seu pet 🐾
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="font-heading font-semibold">
              E-mail
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setErrors((p) => ({ ...p, email: undefined })); }}
                className="pl-10"
                autoComplete="email"
              />
            </div>
            {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="font-heading font-semibold">
              Senha
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setErrors((p) => ({ ...p, password: undefined })); }}
                className="pl-10 pr-10"
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            <button
              type="button"
              onClick={onForgotPassword}
              className="text-sm text-muted-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
            >
              Esqueci minha senha
            </button>
            {errors.password && <p className="text-xs text-destructive">{errors.password}</p>}
          </div>

          <Button
            type="submit"
            className="w-full font-heading font-semibold text-base transition-all duration-200 active:scale-95"
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <PawPrint className="w-4 h-4 animate-spin" /> Entrando...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <LogIn className="w-4 h-4" /> Entrar
              </span>
            )}
          </Button>

          <p className="text-xs text-center text-muted-foreground pt-2">
            Teste: <span className="font-mono bg-muted px-1 rounded">teste@1234.com</span> / <span className="font-mono bg-muted px-1 rounded">1234</span>
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
