FROM node:18-alpine
WORKDIR /app

# Copy environment variables file first
COPY .env.production ./.env.production

# Copy all source files
COPY . .

# Install dependencies
RUN npm install

# Build the application
RUN npm run build

# Set runtime environment variables
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
ENV NODE_ENV=production

EXPOSE 3000

CMD ["npm", "start"]