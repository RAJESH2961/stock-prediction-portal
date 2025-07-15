#!/bin/bash

# Exit if any command fails
set -o errexit

# Install dependencies using Poetry
poetry install

# Run Django database migrations
poetry run python manage.py migrate

# (Optional) collect static files
poetry run python manage.py collectstatic --noinput
