# --------------------------------------------------------------------------------------------------------------------
# BASE
# --------------------------------------------------------------------------------------------------------------------

FROM node:18-alpine AS base

WORKDIR /app

RUN apk update && apk add --no-cache libc6-compat

# --------------------------------------------------------------------------------------------------------------------
# PRUNNER
# --------------------------------------------------------------------------------------------------------------------

FROM base AS prunner

RUN yarn global add turbo@1.13.4

COPY . .

RUN turbo prune @growthxlabs/front --docker

# --------------------------------------------------------------------------------------------------------------------
# BUILDER
# --------------------------------------------------------------------------------------------------------------------

FROM base AS builder

WORKDIR /app

COPY --from=prunner /app/out/json/ .

RUN yarn install

COPY --from=prunner /app/out/full/ .

ARG NEXT_PUBLIC_STRAPI_BASE_URL
ARG NEXT_PUBLIC_STRAPI_DEV_API_TOKEN
ENV NEXT_PUBLIC_STRAPI_BASE_URL=${NEXT_PUBLIC_STRAPI_BASE_URL}
ENV NEXT_PUBLIC_STRAPI_DEV_API_TOKEN=${NEXT_PUBLIC_STRAPI_DEV_API_TOKEN}

RUN yarn turbo build --filter=@growthxlabs/front

# --------------------------------------------------------------------------------------------------------------------
# RUNNER
# --------------------------------------------------------------------------------------------------------------------

FROM base AS runner

WORKDIR /app

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=builder /app/apps/front/next.config.mjs .
COPY --from=builder /app/apps/front/package.json .

COPY --from=builder --chown=nextjs:nodejs /app/apps/front/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/front/.next/static ./apps/front/.next/static
COPY --from=builder --chown=nextjs:nodejs /app/apps/front/public ./apps/front/public

CMD node apps/front/server.js
