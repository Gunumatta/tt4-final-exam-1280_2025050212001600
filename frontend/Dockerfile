FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Set environment variables
ENV NODE_ENV=development
ENV REACT_APP_API_URL=http://localhost:5000

EXPOSE 3000

# Start the app in development mode
CMD ["npm", "start"] 