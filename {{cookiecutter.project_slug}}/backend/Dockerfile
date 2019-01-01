FROM tiangolo/uwsgi-nginx-flask:python3.6

RUN pip install flask_cors

COPY ./app /app
WORKDIR /app/

EXPOSE 80
