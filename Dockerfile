# Stage 1: Build the Node.js (npm) application
FROM node:14 as frontend-builder

WORKDIR /app

# Copy the package.json and package-lock.json to the container
COPY package*.json ./

# Install npm dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the frontend application (adjust this according to your project)
RUN npm run build

# Stage 2: Build the Python (Flask) application
FROM python:3.8-slim as backend-builder

WORKDIR /app

# Copy the Flask application code to the container
COPY ./backend/ .

# Install Flask dependencies
RUN pip install -r requirements.txt

# Stage 3: Create the final image
FROM python:3.8-slim

# Set environment variables, if needed
# ENV VARIABLE_NAME=value

WORKDIR /app

# Copy the Flask application files from the backend-builder stage
COPY --from=backend-builder /app .

# Copy the built frontend files from the frontend-builder stage
COPY --from=frontend-builder /app/dist /app/static

# Expose the desired port (adjust as needed)
EXPOSE 5000

# Start the Flask application
CMD ["python", "app.py"]
