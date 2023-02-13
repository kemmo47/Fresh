FROM denoland/deno:1.25.0

ARG GIT_REVISION
ENV DENO_DEPLOYMENT_ID=${GIT_REVISION}

EXPOSE 8000

WORKDIR /app

ADD /app /app

RUN deno cache main.ts --import-map=import_map.json

CMD ["run", "-A", "main.ts"]
