# I AM CODER — frontend (Next.js)
# Build context: repository root (Render & docker-compose use root context).

FROM node:20-alpine AS base
WORKDIR /app
RUN apk add --no-cache libc6-compat

FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
COPY client/package.json ./client/package.json
COPY server/package.json ./server/package.json
RUN npm install

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
WORKDIR /app/client
ENV NEXT_TELEMETRY_DISABLED=1
# NEXT_PUBLIC_* are inlined at build time, so pass them as a build arg.
ARG NEXT_PUBLIC_API_URL=http://localhost:4000/api/v1
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
RUN npm run build

FROM base AS runner
WORKDIR /app/client
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/client/.next ./.next
COPY --from=builder /app/client/public ./public
COPY --from=builder /app/client/package.json ./package.json
COPY --from=builder /app/client/next.config.mjs ./next.config.mjs
EXPOSE 3000
CMD ["npm", "start"]
