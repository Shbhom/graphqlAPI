import { User } from "@prisma/client";
import { objectType, extendType, nonNull, intArg } from "nexus";

export const Vote = objectType({
  name: "Vote",
  definition(t) {
    t.nonNull.field("link", { type: "link" });
    t.nonNull.field("user", { type: "User" });
  },
});

export const voteMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.field("vote", {
      type: "Vote",
      args: {
        LinkId: nonNull(intArg()),
      },
      async resolve(parent, args, context) {
        const { userId } = context;
        const { LinkId } = args;
        if (!userId) {
          throw new Error("cannot continue without logging in ");
        }
        const link = await context.prisma.link.update({
          where: { id: LinkId },
          data: { voters: { connect: { id: userId } } },
        });
        const user = await context.prisma.user.findUnique({
          where: { id: userId },
        });
        return { link, user: user as User };
      },
    });
  },
});
