FROM node:20-alpine AS base
WORKDIR /app
RUN apk add --no-cache libc6-compat

FROM base AS deps
WORKDIR /app
COPY client/package.json ./client/package.json
COPY package.json ./package.json
WORKDIR /app/client
RUN npm install

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/client/node_modules ./client/node_modules
COPY client ./client
WORKDIR /app/client
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

FROM base AS runner
WORKDIR /app/client
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=builder /app/client/.next ./.next
COPY --from=builder /app/client/public ./public
COPY --from=builder /app/client/node_modules ./node_modules
COPY --from=builder /app/client/package.json ./package.json
COPY --from=builder /app/client/next.config.mjs ./next.config.mjs
EXPOSE 3000
CMD ["npm", "start"]
