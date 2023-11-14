ARG NODE_IMAGE=node:18-alpine@sha256:d51f2f5ce2dc7dfcc27fc2aa27a6edc66f6b89825ed4c7249ed0a7298c20a45a

# Creating multi-stage build for production
FROM ${NODE_IMAGE} as build
RUN ls
#WORKDIR apps/strapi-cms/
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev > /dev/null 2>&1
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /opt/apps/strapi-cms/
RUN ls
COPY package*.json ./
RUN npm config set fetch-retry-maxtimeout 600000 -g && npm install
ENV PATH /opt/apps/strapi-cms/node_modules/.bin:$PATH
WORKDIR /opt/apps/strapi-cms/app
RUN ls
COPY . .
RUN npm run build

# Creating final production image
FROM ${NODE_IMAGE} as buildfinal
#WORKDIR /apps/strapi-cms/
RUN apk add --no-cache vips-dev
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /opt/apps/strapi-cms/
COPY --from=build /opt/apps/strapi-cms/node_modules ./node_modules
WORKDIR /opt/apps/strapi-cms/app
COPY --from=build /opt/apps/strapi-cms/app ./
ENV PATH /opt/apps/strapi-cms/node_modules/.bin:$PATH

RUN chown -R node:node /opt/apps/strapi-cms/app
USER node
EXPOSE 1337
CMD npm run start
