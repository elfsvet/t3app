import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

// create router helps to create a router
export const postsRouter = createTRPCRouter({
  // publicProcedure a method to generate the function your client calls. Everyone who not  authenticated can call it
  // getAll should be public to everyone see the posts on the open page without sign in
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.post.findMany();
  }),
});
