import { Target, Eye, Heart } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "رسالتنا",
    description:
      "نسعى لتقديم تعليم متميز يجمع بين الأصالة والمعاصرة، ويبني جيلاً واعياً قادراً على المساهمة في بناء مجتمعه.",
  },
  {
    icon: Eye,
    title: "رؤيتنا",
    description:
      "أن نكون المنصة التعليمية الرائدة عربياً في تقديم محتوى تعليمي متكامل يحقق التميز الأكاديمي والتربوي.",
  },
  {
    icon: Heart,
    title: "قيمنا",
    description:
      "الإتقان، الإبداع، التميز، والالتزام بأعلى معايير الجودة في التعليم والتربية.",
  },
];

const team = [
  { name: "د. أحمد محمد", role: "المدير التنفيذي" },
  { name: "أ. سارة علي", role: "مديرة المحتوى التعليمي" },
  { name: "م. خالد حسن", role: "المدير التقني" },
];

export default function About() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-12 animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          من نحن
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          أكاديمية أوتاد هي منصة تعليمية متكاملة تأسست بهدف تقديم تجربة تعليمية
          فريدة تجمع بين التميز الأكاديمي والقيم الأصيلة
        </p>
      </section>

      {/* Values Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-stagger">
        {values.map((value) => (
          <div
            key={value.title}
            className="gradient-card rounded-2xl p-8 shadow-soft card-hover text-center"
          >
            <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6">
              <value.icon className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">
              {value.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {value.description}
            </p>
          </div>
        ))}
      </section>

      {/* Story Section */}
      <section className="gradient-primary rounded-2xl p-8 md:p-12 shadow-elevated animate-fade-in">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-6">
            قصتنا
          </h2>
          <p className="text-primary-foreground/90 leading-relaxed text-lg">
            بدأت فكرة أوتاد من إيماننا العميق بأن التعليم هو الركيزة الأساسية
            لبناء المجتمعات. انطلقنا بفريق صغير من المتحمسين للتعليم، وها نحن
            اليوم نخدم آلاف الطلاب في مختلف أنحاء العالم العربي، ملتزمين برسالتنا
            في تقديم تعليم يترك أثراً.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
          فريق القيادة
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-stagger">
          {team.map((member) => (
            <div
              key={member.name}
              className="gradient-card rounded-xl p-6 shadow-soft text-center card-hover"
            >
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">
                  {member.name.charAt(0)}
                </span>
              </div>
              <h4 className="font-bold text-foreground">{member.name}</h4>
              <p className="text-muted-foreground text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
