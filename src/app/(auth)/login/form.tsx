"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { Film } from "lucide-react";
import { createSession, getRequestToken, login } from "@/domain/auth/requests";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const initialRequestToken = await getRequestToken();
      const validatedRequestToken = await login(
        username,
        password,
        initialRequestToken.request_token
      );

      if (!validatedRequestToken) {
        toast({
          variant: "destructive",
          title: "Erro de autenticação",
          description: "Credenciais inválidas. Por favor, tente novamente.",
        });
        setIsLoading(false);
        return;
      }
      const sessionCreated = await createSession(validatedRequestToken);
      if (sessionCreated) {
        router.push("/");
      } else {
        toast({
          variant: "destructive",
          title: "Erro de sessão",
          description: "Erro ao criar sessão. Por favor, tente novamente.",
        });
      }
    } catch (error) {
      console.error("Erro no login:", error);
      toast({
        variant: "destructive",
        title: "Erro de login",
        description:
          "Ocorreu um erro durante o login. Por favor, tente novamente." +
          error,
      });
    }

    setIsLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-primary flex items-center justify-center">
          <Film className="mr-2" size={36} />
          CinephileX
        </h1>
        <p className="text-xl text-muted-foreground mt-2">
          Sua jornada cinematográfica começa aqui
        </p>
      </div>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Entre para explorar o mundo do cinema
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Nome de usuário</Label>
              <Input
                id="username"
                placeholder="Nome de usuário"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                placeholder="Senha"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full"
            type="submit"
            disabled={isLoading}
            onClick={handleLogin}
          >
            {isLoading ? "Carregando..." : "Entrar"}
          </Button>
        </CardFooter>
      </Card>
      <Toaster />
    </div>
  );
}
