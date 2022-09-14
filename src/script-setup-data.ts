import { prisma } from './prisma.service';
import { cleanup, createTestData } from './testdata';

async function main() {
  await cleanup();
  await createTestData();
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })