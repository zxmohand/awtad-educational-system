import { useState } from "react";
import { Users, BookOpen, ClipboardList, TrendingUp, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const initialStats = [
  { label: "إجمالي الطلاب", value: "1,234", icon: Users, color: "text-accent" },
  { label: "الدورات النشطة", value: "45", icon: BookOpen, color: "text-primary" },
  { label: "الواجبات", value: "89", icon: ClipboardList, color: "text-secondary" },
  { label: "معدل الإنجاز", value: "87%", icon: TrendingUp, color: "text-accent" },
];

interface User {
  name: string;
  email: string;
  status: string;
}

interface Assignment {
  title: string;
  dueDate: string;
  status: string;
}

export default function Dashboard() {
  const [users, setUsers] = useState<User[]>([
    { name: "محمد أحمد", email: "m.ahmed@email.com", status: "نشط" },
    { name: "سارة خالد", email: "s.khalid@email.com", status: "نشط" },
    { name: "علي حسن", email: "a.hassan@email.com", status: "معلق" },
  ]);

  const [assignments, setAssignments] = useState<Assignment[]>([
    { title: "اختبار الرياضيات", dueDate: "2025-12-10", status: "قيد التقديم" },
    { title: "مشروع اللغة العربية", dueDate: "2025-12-15", status: "قيد التقديم" },
    { title: "اختبار العلوم", dueDate: "2025-12-08", status: "مكتمل" },
  ]);

  const [showAllUsers, setShowAllUsers] = useState(false);
  const [showAddUser, setShowAddUser] = useState(false);
  const [showAddAssignment, setShowAddAssignment] = useState(false);
  const [showAddCourse, setShowAddCourse] = useState(false);

  const [newUser, setNewUser] = useState({ name: "", email: "" });
  const [newAssignment, setNewAssignment] = useState({ title: "", dueDate: "" });
  const [newCourse, setNewCourse] = useState({ title: "", description: "" });

  const handleAddUser = () => {
    if (!newUser.name || !newUser.email) {
      toast.error("يرجى ملء جميع الحقول");
      return;
    }
    setUsers([...users, { ...newUser, status: "نشط" }]);
    setNewUser({ name: "", email: "" });
    setShowAddUser(false);
    toast.success("تم إضافة المستخدم بنجاح");
  };

  const handleAddAssignment = () => {
    if (!newAssignment.title || !newAssignment.dueDate) {
      toast.error("يرجى ملء جميع الحقول");
      return;
    }
    setAssignments([...assignments, { ...newAssignment, status: "قيد التقديم" }]);
    setNewAssignment({ title: "", dueDate: "" });
    setShowAddAssignment(false);
    toast.success("تم إضافة الاختبار بنجاح");
  };

  const handleAddCourse = () => {
    if (!newCourse.title) {
      toast.error("يرجى إدخال عنوان الدورة");
      return;
    }
    setNewCourse({ title: "", description: "" });
    setShowAddCourse(false);
    toast.success("تم إنشاء الدورة بنجاح");
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="gradient-primary rounded-xl p-6 shadow-elevated animate-fade-in">
        <h1 className="text-2xl md:text-3xl font-bold text-primary-foreground">
          لوحة تحكم المدير
        </h1>
        <p className="text-primary-foreground/80 mt-2">
          مرحباً بك في نظام إدارة أوتاد التعليمي
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-stagger">
        {initialStats.map((stat) => (
          <div
            key={stat.label}
            className="gradient-card rounded-xl p-5 shadow-soft card-hover"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-2xl font-bold text-foreground mt-1">
                  {stat.value}
                </p>
              </div>
              <div className={`${stat.color}`}>
                <stat.icon className="h-8 w-8" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-stagger">
        {/* User Management */}
        <div className="gradient-card rounded-xl p-6 shadow-soft card-hover">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-foreground border-b-2 border-highlight pb-2">
              إدارة المستخدمين
            </h2>
            <Button size="sm" variant="outline" onClick={() => setShowAllUsers(!showAllUsers)}>
              {showAllUsers ? "إخفاء" : "عرض الكل"}
            </Button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-right py-3 px-2 font-medium text-muted-foreground">الاسم</th>
                  <th className="text-right py-3 px-2 font-medium text-muted-foreground">البريد</th>
                  <th className="text-right py-3 px-2 font-medium text-muted-foreground">الحالة</th>
                </tr>
              </thead>
              <tbody>
                {(showAllUsers ? users : users.slice(0, 3)).map((user) => (
                  <tr
                    key={user.email}
                    className="border-b border-border/50 hover:bg-muted/30 transition-colors"
                  >
                    <td className="py-3 px-2 text-foreground">{user.name}</td>
                    <td className="py-3 px-2 text-muted-foreground">{user.email}</td>
                    <td className="py-3 px-2">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          user.status === "نشط"
                            ? "bg-accent/20 text-accent"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Assignments */}
        <div className="gradient-card rounded-xl p-6 shadow-soft card-hover">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-foreground border-b-2 border-highlight pb-2">
              الواجبات والاختبارات
            </h2>
            <Button size="sm" variant="outline" onClick={() => setShowAddAssignment(true)}>
              إضافة جديد
            </Button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-right py-3 px-2 font-medium text-muted-foreground">العنوان</th>
                  <th className="text-right py-3 px-2 font-medium text-muted-foreground">الموعد</th>
                  <th className="text-right py-3 px-2 font-medium text-muted-foreground">الحالة</th>
                </tr>
              </thead>
              <tbody>
                {assignments.map((assignment) => (
                  <tr
                    key={assignment.title}
                    className="border-b border-border/50 hover:bg-muted/30 transition-colors"
                  >
                    <td className="py-3 px-2 text-foreground">{assignment.title}</td>
                    <td className="py-3 px-2 text-muted-foreground">{assignment.dueDate}</td>
                    <td className="py-3 px-2">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          assignment.status === "مكتمل"
                            ? "bg-accent/20 text-accent"
                            : "bg-primary/20 text-primary"
                        }`}
                      >
                        {assignment.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="gradient-card rounded-xl p-6 shadow-soft animate-fade-in">
        <h2 className="text-lg font-bold text-foreground mb-4">إجراءات سريعة</h2>
        <div className="flex flex-wrap gap-3">
          <Button onClick={() => setShowAddUser(true)}>
            <Users className="h-4 w-4 ml-2" />
            إضافة مستخدم
          </Button>
          <Button variant="secondary" onClick={() => setShowAddCourse(true)}>
            <BookOpen className="h-4 w-4 ml-2" />
            إنشاء دورة
          </Button>
          <Button variant="secondary" onClick={() => setShowAddAssignment(true)}>
            <ClipboardList className="h-4 w-4 ml-2" />
            إنشاء اختبار
          </Button>
        </div>
      </div>

      {/* Add User Modal */}
      {showAddUser && (
        <div className="fixed inset-0 bg-foreground/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="gradient-card rounded-xl p-6 shadow-elevated w-full max-w-md animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-foreground">إضافة مستخدم جديد</h3>
              <Button variant="ghost" size="icon" onClick={() => setShowAddUser(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="userName">الاسم</Label>
                <Input
                  id="userName"
                  value={newUser.name}
                  onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                  placeholder="أدخل اسم المستخدم"
                />
              </div>
              <div>
                <Label htmlFor="userEmail">البريد الإلكتروني</Label>
                <Input
                  id="userEmail"
                  type="email"
                  value={newUser.email}
                  onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                  placeholder="أدخل البريد الإلكتروني"
                />
              </div>
              <Button className="w-full" onClick={handleAddUser}>
                إضافة المستخدم
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Add Assignment Modal */}
      {showAddAssignment && (
        <div className="fixed inset-0 bg-foreground/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="gradient-card rounded-xl p-6 shadow-elevated w-full max-w-md animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-foreground">إضافة اختبار جديد</h3>
              <Button variant="ghost" size="icon" onClick={() => setShowAddAssignment(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="assignmentTitle">عنوان الاختبار</Label>
                <Input
                  id="assignmentTitle"
                  value={newAssignment.title}
                  onChange={(e) => setNewAssignment({ ...newAssignment, title: e.target.value })}
                  placeholder="أدخل عنوان الاختبار"
                />
              </div>
              <div>
                <Label htmlFor="assignmentDate">تاريخ التسليم</Label>
                <Input
                  id="assignmentDate"
                  type="date"
                  value={newAssignment.dueDate}
                  onChange={(e) => setNewAssignment({ ...newAssignment, dueDate: e.target.value })}
                />
              </div>
              <Button className="w-full" onClick={handleAddAssignment}>
                إضافة الاختبار
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Add Course Modal */}
      {showAddCourse && (
        <div className="fixed inset-0 bg-foreground/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="gradient-card rounded-xl p-6 shadow-elevated w-full max-w-md animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-foreground">إنشاء دورة جديدة</h3>
              <Button variant="ghost" size="icon" onClick={() => setShowAddCourse(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="courseTitle">عنوان الدورة</Label>
                <Input
                  id="courseTitle"
                  value={newCourse.title}
                  onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
                  placeholder="أدخل عنوان الدورة"
                />
              </div>
              <div>
                <Label htmlFor="courseDesc">وصف الدورة</Label>
                <Input
                  id="courseDesc"
                  value={newCourse.description}
                  onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
                  placeholder="أدخل وصف الدورة"
                />
              </div>
              <Button className="w-full" onClick={handleAddCourse}>
                إنشاء الدورة
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
