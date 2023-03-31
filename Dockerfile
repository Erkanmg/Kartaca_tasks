FROM python:3.8-slim
ADD . /app
WORKDIR /app
COPY dependencies.txt .
RUN pip install -r dependencies.txt
CMD ["python", "./app.py"]
#FROM python:3.6
#ADD . /app
#WORKDIR /app
#RUN pip install -r dependencies.txt