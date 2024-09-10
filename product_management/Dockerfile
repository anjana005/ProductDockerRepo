# Use Node.js to build the React app
FROM node:20 AS builder

WORKDIR /app
    
COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . .

RUN npm run build

# Use Nginx to serve the built app
FROM nginx:alpine

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
