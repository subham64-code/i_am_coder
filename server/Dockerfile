# I AM CODER — backend (Express + Prisma MongoDB + MySQL)
# Build context: repository root (Render & docker-compose use root context).

FROM node:20-alpine AS base
WORKDIR /app
RUN apk add --no-cache libc6-compat openssl

FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
COPY server/package.json ./server/package.json
COPY client/package.json ./client/package.json
RUN npm install

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Generate BOTH Prisma clients (MongoDB @prisma/client + committed MySQL client types)
RUN npx prisma generate --schema server/prisma/schema.prisma
RUN npx prisma generate --schema server/prisma/mysql.prisma || true
RUN npm run build --workspace server

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=4000
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/server/dist ./server/dist
COPY --from=builder /app/server/prisma ./server/prisma
COPY --from=builder /app/server/generated ./server/generated
COPY --from=builder /app/server/package.json ./server/package.json
EXPOSE 4000
CMD ["node", "server/dist/index.js"]
