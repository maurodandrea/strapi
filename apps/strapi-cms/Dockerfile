<<<<<<< HEAD
# node:18.17-alpine3.17
FROM node:18-alpine@sha256:667b1cc7a038a4bbfeb9852e1bfe9bd956e10215092b076d968c62a673d5b773 as base

# Install turbo and create a pruned version of the monorepo inside an ./out directory.
# It only includes workspaces which strapi-cms depends on.
FROM base AS builder
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev > /dev/null 2>&1
# Set working directory
WORKDIR /opt
RUN npm i -g turbo
COPY . .
RUN turbo prune strapi-cms --docker

# Add lockfile and package.json's of isolated subworkspace
FROM base AS installer
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /opt
# Install the dependencies (production only)
COPY .gitignore .gitignore
COPY --from=builder /opt/out/json/ .
COPY --from=builder /opt/out/package-lock.json ./package-lock.json
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
RUN npm i --ignore-scripts

# Build strapi-cms application
COPY --from=builder /opt/out/full/ .
RUN npm run build -w strapi-cms

FROM base AS runner
=======
ARG NODE_IMAGE=node:18-alpine@sha256:d51f2f5ce2dc7dfcc27fc2aa27a6edc66f6b89825ed4c7249ed0a7298c20a45a

# Creating multi-stage build for production
FROM ${NODE_IMAGE} as build
>>>>>>> 174ad7d70ceaedc43dc34d5e078a297fc07d71af
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev > /dev/null 2>&1
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /opt/
COPY --from=installer /opt/node_modules ./node_modules
WORKDIR /opt/app
<<<<<<< HEAD
COPY --from=installer /opt ./
=======
COPY . .
RUN npm run build

# Creating final production image
FROM ${NODE_IMAGE} as finalbuild
RUN apk add --no-cache vips-dev
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /opt/
COPY --from=build /opt/node_modules ./node_modules
WORKDIR /opt/app
COPY --from=build /opt/app ./
>>>>>>> 174ad7d70ceaedc43dc34d5e078a297fc07d71af
ENV PATH /opt/node_modules/.bin:$PATH

RUN chown -R node:node /opt/app
USER node
EXPOSE 1337
<<<<<<< HEAD
CMD npm run start -w strapi-cms
=======
CMD npm run start
>>>>>>> 174ad7d70ceaedc43dc34d5e078a297fc07d71af
