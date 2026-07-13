FROM node:20-alpine AS base
WORKDIR /app
RUN apk add --no-cache libc6-compat openssl

FROM base AS deps
WORKDIR /app
COPY package.json ./
RUN npm install -g pnpm@9 || true

FROM base AS builder
WORKDIR /app
COPY server/package.json ./server/package.json
COPY server/tsconfig.json ./server/tsconfig.json
COPY server/prisma ./server/prisma
WORKDIR /app/server
RUN npm install
RUN npx prisma generate || true
RUN npx prisma generate --schema prisma/mysql.prisma || true
RUN npm run build || true

FROM base AS runner
WORKDIR /app/server
ENV NODE_ENV=production
COPY server/package.json ./package.json
COPY server/dist ./dist
COPY server/prisma ./prisma
COPY server/generated ./generated
RUN npm install --omit=dev
RUN npx prisma generate || true
RUN npx prisma generate --schema prisma/mysql.prisma || true
EXPOSE 4000
CMD ["node", "dist/index.js"]
