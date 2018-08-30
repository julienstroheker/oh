FROM python:3.6.1-alpine
ADD . /app
WORKDIR /app
RUN set -e; \
	apk add --no-cache --virtual .build-deps \
		gcc \
		libc-dev \
		linux-headers \
	; \
	pip install -r app/requirements.txt; \
	apk del .build-deps;
EXPOSE 8000
CMD python app/app.py