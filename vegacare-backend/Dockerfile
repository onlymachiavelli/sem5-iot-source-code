FROM node:18

WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm ci --omit=dev --force
RUN npm install -g nodemon

# Copy the environment file
COPY .env .env

# Copy all application files
COPY . .

# Expose application port
EXPOSE 3000

CMD ["npm", "run", "dev"]
