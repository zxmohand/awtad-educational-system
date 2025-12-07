import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "الأساسي",
    price: "مجاني",
    period: "",
    description: "للتجربة والاطلاع على المحتوى",
    features: [
      "الوصول للدروس المجانية",
      "اختبارات تقييمية محدودة",
      "الدعم عبر البريد الإلكتروني",
    ],
    popular: false,
  },
  {
    name: "المميز",
    price: "99",
    period: "/ شهرياً",
    description: "للطلاب الجادين في التعلم",
    features: [
      "جميع مميزات الباقة الأساسية",
      "الوصول لجميع الدروس",
      "اختبارات غير محدودة",
      "شهادات إتمام معتمدة",
      "الدعم الفني على مدار الساعة",
    ],
    popular: true,
  },
  {
    name: "المؤسسات",
    price: "تواصل معنا",
    period: "",
    description: "للمدارس والمؤسسات التعليمية",
    features: [
      "جميع مميزات الباقة المميزة",
      "لوحة تحكم للمؤسسة",
      "تقارير أداء الطلاب",
      "تخصيص المحتوى",
      "مدير حساب مخصص",
      "تدريب المعلمين",
    ],
    popular: false,
  },
];

export default function Subscription() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="text-center animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          خطط الاشتراك
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          اختر الباقة المناسبة لاحتياجاتك التعليمية وابدأ رحلتك نحو التميز
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 animate-stagger">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              "relative gradient-card rounded-2xl p-6 shadow-soft card-hover",
              plan.popular && "ring-2 ring-accent shadow-elevated",
            )}
          >
            {plan.popular && (
              <div className="absolute -top-3 right-4 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                <Star className="h-4 w-4" />
                الأكثر طلباً
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
              <p className="text-muted-foreground text-sm">{plan.description}</p>
            </div>

            <div className="mb-6">
              <span className="text-3xl font-bold text-primary">{plan.price}</span>
              {plan.period && (
                <span className="text-muted-foreground mr-1">{plan.period}</span>
              )}
            </div>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 text-accent" />
                  </div>
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              asChild
              size="lg"
              className="w-full"
              variant={plan.popular ? "default" : "outline"}
            >
              <Link to="/signup">
                {plan.price === "تواصل معنا" ? "تواصل معنا" : "اشترك الآن"}
              </Link>
            </Button>
          </div>
        ))}
      </section>

      {/* FAQ Section */}
      <section className="gradient-card rounded-2xl p-8 shadow-soft animate-fade-in">
        <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
          أسئلة شائعة
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-foreground mb-2">
              هل يمكنني تغيير الباقة لاحقاً؟
            </h4>
            <p className="text-muted-foreground text-sm">
              نعم، يمكنك الترقية أو التعديل في أي وقت من خلال لوحة التحكم.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-2">
              هل هناك فترة تجريبية؟
            </h4>
            <p className="text-muted-foreground text-sm">
              الباقة الأساسية مجانية تماماً ويمكنك تجربتها لأي مدة تريد.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
