import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { User, Mail, Lock, Phone, MapPin, UserPlus } from "lucide-react";

export default function SignUp() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    username: "",
    country: "",
    address: "",
    phone: "",
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
      description: "سيتم تفعيل التسجيل قريباً",
    });

    setIsLoading(false);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-8 animate-fade-in">
      <div className="w-full max-w-lg">
        <div className="gradient-card rounded-2xl p-8 shadow-elevated border-t-4 border-primary">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-foreground">إنشاء حساب جديد</h1>
            <p className="text-muted-foreground mt-2">انضم إلى عائلة أوتاد التعليمية</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2">
                  <User className="h-4 w-4 text-primary" />
                  الاسم الكامل
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="أدخل اسمك الكامل"
                  value={formData.name}
                  onChange={handleChange}
                  className="input-animated"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="username" className="flex items-center gap-2">
                  <User className="h-4 w-4 text-primary" />
                  اسم المستخدم
                </Label>
                <Input
                  id="username"
                  name="username"
                  placeholder="اختر اسم مستخدم"
                  value={formData.username}
                  onChange={handleChange}
                  className="input-animated"
                  required
                />
              </div>
            </div>

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
                placeholder="أدخل كلمة مرور قوية"
                value={formData.password}
                onChange={handleChange}
                className="input-animated"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  رقم الهاتف
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="أدخل رقم هاتفك"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input-animated"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="country" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  الدولة
                </Label>
                <Input
                  id="country"
                  name="country"
                  placeholder="أدخل دولتك"
                  value={formData.country}
                  onChange={handleChange}
                  className="input-animated"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address" className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                العنوان
              </Label>
              <Input
                id="address"
                name="address"
                placeholder="أدخل عنوانك"
                value={formData.address}
                onChange={handleChange}
                className="input-animated"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full mt-6"
              disabled={isLoading}
            >
              {isLoading ? (
                "جاري إنشاء الحساب..."
              ) : (
                <>
                  <UserPlus className="h-5 w-5 ml-2" />
                  إنشاء حساب
                </>
              )}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-muted-foreground">
              لديك حساب بالفعل؟{" "}
              <Link to="/login" className="text-primary font-medium hover:underline">
                تسجيل الدخول
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
