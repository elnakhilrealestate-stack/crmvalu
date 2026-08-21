"use client";
export default function LoginPage() {
  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950 flex items-center justify-center p-6">
      <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-10 max-w-md w-full shadow-2xl">
        <h1 className="text-3xl font-extrabold text-amber-300 text-center mb-2">VALUE 9 MALL</h1>
        <p className="text-center text-slate-200 mb-8">نظام إدارة المبيعات العقارية</p>
        <form className="space-y-4" onSubmit={e => { e.preventDefault(); window.location.href = "/dashboard"; }}>
          <input type="email" placeholder="البريد الإلكتروني" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-slate-300 focus:outline-none" defaultValue="admin@value9mall.com" />
          <input type="password" placeholder="كلمة المرور" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-slate-300 focus:outline-none" defaultValue="password" />
          <button className="w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold transition">تسجيل الدخول</button>
        </form>
        <p className="text-xs text-slate-400 text-center mt-4">الدخول للعرض التوضيحي — جميع البيانات متصلة بقاعدة البيانات</p>
      </div>
    </div>
  );
}
