FROM python:3.12

WORKDIR /personal-website
RUN pip install poetry
COPY pyproject.toml /personal-website/
RUN pip install poetry \
  && poetry config virtualenvs.create false \
  && poetry install --no-root
COPY . /personal-website/

ENV PYTHONPATH=${PYTHONPATH}:${PWD}
ENV HOST=${HOST}
ENV SMTP_PORT=${SMTP_PORT}
ENV SMTP_PASSWORD=${SMTP_PASSWORD}

EXPOSE 3000

CMD ["poetry", "run", "waitress-serve", "--listen=*:3000", "__init__:app"]