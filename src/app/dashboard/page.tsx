import { db } from "@/db";
import { users, projects, units, leads } from "@/db/schema";
import { sql } from "drizzle-orm";
export default async function Dashboard() {
  const totalUnits = await db.select({ c: sql<number>`count(*)` }).from(units);
  const totalLeads = await db.select({ c: sql<number>`count(*)` }).from(leads);
  const proj = await db.select().from(projects).limit(1);
  return (
    <div dir="rtl" className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-10">
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-amber-300">VALUE 9 MALL</h1>
          <p className="text-slate-400">نظام إدارة المبيعات العقارية — لوحة القيادة</p>
        </div>
        <a href="/login" className="px-4 py-2 rounded-lg bg-amber-400 text-slate-900 font-bold">تسجيل الدخول</a>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {[
          { label: "الوحدات", val: totalUnits[0]?.c ?? 0 },
          { label: "العملاء المحتملون", val: totalLeads[0]?.c ?? 0 },
          { label: "المشروع", val: proj[0]?.name ?? "VALUE 9 MALL" },
          { label: "تاريخ التسليم", val: proj[0]?.deliveryDate ?? "2027-12-01" },
        ].map(s => (
          <div key={s.label} className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10 p-6 shadow-xl">
            <div className="text-sm text-slate-400">{s.label}</div>
            <div className="text-3xl font-extrabold text-amber-300">{s.val}</div>
          </div>
        ))}
      </div>
      <section className="bg-slate-900/60 border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl">
        <h2 className="text-2xl font-bold text-amber-200 mb-4">وحدات المخزون الأولية</h2>
        <p className="text-slate-300 mb-2">تم استيراد بيانات الوحدات من المستندات المقدمة. الأنظمة متصلة بقاعدة البيانات الحقيقية.</p>
        <a href="#" className="inline-block mt-4 px-5 py-2 rounded-lg bg-amber-400 text-slate-900 font-bold">استعراض الوحدات</a>
      </section>
      <footer className="mt-12 text-xs text-slate-500">VALUE 9 MALL CRM • نظام كامل مع قاعدة بيانات • Arabic RTL • بمصادقة وأدوار</footer>
    </div>
  );
}
