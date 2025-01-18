FROM node:18-alpine
WORKDIR /app

# Copy pre-built artifacts
COPY .next ./.next
COPY public ./public
COPY package*.json ./
RUN npm install --production

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["npm", "start"]