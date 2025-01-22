FROM node:18-alpine
WORKDIR /app

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

# Copy environment variables file
COPY .env.production ./.env.production

EXPOSE 3000

CMD ["npm", "start"]