import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";
import { todoInput } from "~/types/todo";

export const todoRouter = createTRPCRouter({
  all: protectedProcedure.query(async ({ ctx }) => {
    const todos = await ctx.db.todo.findMany({
      where: {
        userId: ctx.session.user.id,
      }
    });
    return todos;
  }),
  create: protectedProcedure
    .input(z.object({ text: todoInput }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.todo.create({
        data: {
          text: input.text,
          user: { connect: { id: ctx.session.user.id } },
        },
      });
    }),
  delete: protectedProcedure
    .input(z.string())
    .mutation(async ({ ctx, input }) => {
      return ctx.db.todo.delete({
        where: {
          id: input,
        },
      })
    }),
  toggle: protectedProcedure
    .input(z.object({
      id: z.string(),
      done: z.boolean(),
    }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.todo.update({
        where: {
          id: input.id,
        },
        data: {
          done: input.done,
        },
      })
    }),
});
