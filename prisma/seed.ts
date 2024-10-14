import { PrismaClient, UserRole } from '@prisma/client';
import { hash } from 'bcryptjs';


const prisma = new PrismaClient();

async function main() {
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminEmail || !adminPassword) {
    console.error('Admin email or password not set in environment variables');
    process.exit(1);
  }

  const hashedPassword = await hash(adminPassword, 12);

  const user = await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      email: adminEmail,
      name: 'Admin',
      password: hashedPassword,
      role: UserRole.SUPER_ADMIN,
    },
  });

  console.log(`Admin user created/updated: ${user.email}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });