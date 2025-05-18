FROM eclipse-temurin:21

RUN apt-get update
LABEL maintainer="matheusteixeira358@gmail.com"
WORKDIR /app
COPY target/demo-0.0.1-SNAPSHOT.jar /app/saude-facil.jar
COPY src/main/resources/application-docker.properties /app/application-docker.properties
ENTRYPOINT ["java","-Dspring.profiles.active=docker", "-jar", "saude-facil.jar"]