import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Lock, LogIn } from "lucide-react";

export default function Login() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "تنبيه",
      description: "سيتم تفعيل تسجيل الدخول قريباً",
    });

    setIsLoading(false);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center animate-fade-in">
      <div className="w-full max-w-md">
        <div className="gradient-card rounded-2xl p-8 shadow-elevated border-t-4 border-primary">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-foreground">تسجيل الدخول</h1>
            <p className="text-muted-foreground mt-2">أدخل بياناتك للوصول إلى حسابك</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                البريد الإلكتروني
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                value={formData.email}
                onChange={handleChange}
                className="input-animated"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="flex items-center gap-2">
                <Lock className="h-4 w-4 text-primary" />
                كلمة المرور
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="أدخل كلمة المرور"
                value={formData.password}
                onChange={handleChange}
                className="input-animated"
                required
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? (
                "جاري تسجيل الدخول..."
              ) : (
                <>
                  <LogIn className="h-5 w-5 ml-2" />
                  تسجيل الدخول
                </>
              )}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-muted-foreground">
              ليس لديك حساب؟{" "}
              <Link to="/signup" className="text-primary font-medium hover:underline">
                سجل الآن
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
