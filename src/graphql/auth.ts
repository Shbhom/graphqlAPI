import { objectType, extendType, nonNull, stringArg, arg } from "nexus";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { APP_SECRET } from "../utils/auth";

export const AuthPayload = objectType({
  name: "AuthPayload",
  definition(t) {
    t.nonNull.string("token"),
      t.nonNull.field("user", {
        type: "User",
      });
  },
});

export const Authmutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("login", {
      type: "AuthPayload",
      args: {
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      async resolve(parent, args, context) {
        const { email, password } = args;
        const User = context.prisma.user.findUnique({
          where: {
            email: email,
          },
        });
        if (!User) {
          throw new Error(`User with email ${args.email} doesn't exists`);
        }
        const validate = await bcrypt.compare(args.password, User.password);
        if (!validate) {
          throw new Error("Entered wrong password");
        }
        const token = jwt.sign({ userId: User.id }, APP_SECRET);
        return {
          token,
          User: {
            id: User.id,
            email: User.email!,
            name: User.name!,
          },
        };
      },
    }),
      t.nonNull.field("signup", {
        type: "AuthPayload",
        args: {
          email: nonNull(stringArg()),
          password: nonNull(stringArg()),
          name: nonNull(stringArg()),
        },
        async resolve(parent, args, context) {
          const { email, name } = args;
          const password = await bcrypt.hash(args.password, 10);

          const user = await context.prisma.user.create({
            data: { email, name, password },
          });
          const token = jwt.sign({ userId: user.id }, APP_SECRET);
          return { user, token };
        },
      });
  },
});
