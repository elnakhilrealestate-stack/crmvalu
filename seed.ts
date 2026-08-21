import { db } from "./src/db/index";
import { users, projects, units, leads, activities } from "./src/db/schema";
async function seed() {
  await db.insert(users).values({ name: "مدير النظام", email: "admin@value9mall.com", password: "$2a$10$N9qo8uLOickgx2ZMRZoMy.MqrqhmM6JGKpS4G3R1G2JH8YpfB0Bqy", role: "SUPER_ADMIN", active: true }).onConflictDoNothing();
  const proj = await db.insert(projects).values({ name: "VALUE 9 MALL", developer: "VALUE 9", location: "الرياض", deliveryDate: "2027-12-01", maintenancePct: "7", status: "ACTIVE" }).returning({ id: projects.id });
  const pId = proj[0]?.id || 1;
  await db.insert(units).values({ projectId: pId, code: "F1-V9", areaInternal: "27", view: "Front", pricePerSqm: "137500", originalPrice: "3712500", discountPct: "10", netPrice: "3341250", status: "AVAILABLE", floor: 1, notes: "Needs Verification" }).onConflictDoNothing();
  await db.insert(units).values({ projectId: pId, code: "S1-V9", areaInternal: "47", view: "Corner", pricePerSqm: "62300", originalPrice: "2926100", discountPct: "10", netPrice: "2633490", status: "AVAILABLE", floor: 1 }).onConflictDoNothing();
  console.log("Seeded");
}
seed();
