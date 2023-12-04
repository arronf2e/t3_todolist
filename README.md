# Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## TodoList

### 1. Backend
- [] Update Prisma Schema
- [] Add Other Auth Provider
- [] Create TRPC Router for Todos

### 2. Frontend
- [] Login
- [] TodoList
- [] Create Todo
- [] Toggle Todo
- [] Delete Todo

## Start Project

### 1. Create db in Vercel

[https://vercel.com/dashboard/stores](https://vercel.com/dashboard/stores)

### 2. Create .env file
```dotenv
# use vercel db variables
POSTGRES_URL=""
POSTGRES_PRISMA_URL=""
POSTGRES_URL_NON_POOLING=""
POSTGRES_USER=""
POSTGRES_HOST=""
POSTGRES_PASSWORD=""
POSTGRES_DATABASE=""
```

### 3. Shell

```shell
# run
pnpm install
pnpm run db:push
pnpm run dev
```