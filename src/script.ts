import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const newlink = await prisma.link.create({
    data: {
      url: "howtographql.com",
      description: "An easy way to learn buildind api's using graphql",
    },
  });
  const allLinks = await prisma.link.findMany();
  console.log(allLinks);
}
main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
