# Use an official Ubuntu image as a parent image
FROM ubuntu:20.04

# Set the working directory to /app
WORKDIR /app

# Update package lists and install necessary packages
RUN apt-get update && \
    apt-get install -y python3 python3-pip && \
    rm -rf /var/lib/apt/lists/*

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in requirements.txt
RUN pip3 install -r requirements.txt

# Make port 80 available to the world outside this container
EXPOSE 80

# Define environment variable
ENV NAME World

# Run app.py when the container launches
CMD ["gunicorn", "-c", "gunicorn_config.py", "app:app"]
