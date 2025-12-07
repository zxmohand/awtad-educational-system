import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, GraduationCap, Award } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "مناهج متطورة",
    description: "مناهج تعليمية حديثة تواكب أحدث المعايير العالمية",
  },
  {
    icon: Users,
    title: "معلمون متميزون",
    description: "فريق من المعلمين المؤهلين والمتخصصين في مجالاتهم",
  },
  {
    icon: GraduationCap,
    title: "شهادات معتمدة",
    description: "شهادات معترف بها محلياً ودولياً",
  },
  {
    icon: Award,
    title: "تميز أكاديمي",
    description: "برامج تعزز التفوق والإبداع لدى الطلاب",
  },
];

export default function Home() {
  return (
    <div className="space-y-16 animate-fade-in">
      {/* Hero Section */}
      <section className="text-center py-16">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            مرحباً بكم في <span className="text-primary">أكاديمية أوتاد</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            نظام تعليمي متكامل يجمع بين الأصالة والمعاصرة، نسعى لبناء جيل واعٍ
            ومتميز
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg" className="text-lg px-8">
              <Link to="/subscription">ابدأ رحلتك التعليمية</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8"
            >
              <Link to="/about">تعرف علينا</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          لماذا أوتاد؟
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-stagger">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="gradient-card rounded-xl p-6 shadow-soft card-hover"
            >
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                <feature.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-primary rounded-2xl p-8 md:p-12 text-center shadow-elevated">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
          انضم إلى عائلة أوتاد اليوم
        </h2>
        <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
          سجل الآن واحصل على تجربة تعليمية فريدة تجمع بين التميز الأكاديمي
          والتربية القيمية
        </p>
        <Button asChild size="lg" variant="secondary" className="text-lg px-8">
          <Link to="/signup">سجل الآن مجاناً</Link>
        </Button>
      </section>
    </div>
  );
}
