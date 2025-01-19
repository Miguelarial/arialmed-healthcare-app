FROM node:18-alpine
WORKDIR /app

# Copy package files and install production dependencies
COPY package*.json ./
RUN npm install --production

# Copy pre-built Next.js artifacts and public files
COPY .next ./.next
COPY public ./public

# Set runtime environment variables
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
ENV NODE_ENV=production

# Copy environment variables file
COPY .env.production ./.env.production

EXPOSE 3000

CMD ["npm", "start"]