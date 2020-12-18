# Stage 1 - the build process
FROM node:15.3.0-alpine3.12 as build-deps
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install --ignore-engine
COPY . ./
RUN npm run build

# Stage 2 - the production environment
FROM nginx:stable-alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
