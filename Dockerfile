# Use an official Python runtime as a parent image
FROM python:3.12

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install Poetry
RUN pip install poetry

# Copy pyproject.toml and poetry.lock to the container
COPY pyproject.toml poetry.lock /app/

# Install project dependencies using Poetry
RUN poetry install

# Make port 5000 available to the world outside this container
EXPOSE 5000

# Activate the Poetry virtual environment and run your command
CMD ["/bin/sh", "-c", "poetry shell && waitress-serve --listen=*:5000 __init__:app"]
