
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
const prisma = new PrismaClient();

async function main() {
 
  const hashedPassword = await bcrypt.hash(process.env.SUPER_ADMIN_PASSWORD, 10);

  
  await prisma.user.create({
    data: {
      username: 'superAdmin',
      password: hashedPassword,
      role: 'SUPERADMIN', 
    },
  });

  console.log('SuperAdmin user created');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
