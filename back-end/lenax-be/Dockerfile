FROM eclipse-temurin:21-jdk-alpine

WORKDIR /app

# Copy Maven wrapper and pom files first to cache dependencies
COPY .mvn/ .mvn
COPY mvnw pom.xml ./
RUN chmod +x mvnw && ./mvnw dependency:go-offline

# Copy source code and build the jar
COPY src ./src
RUN ./mvnw clean package -DskipTests

EXPOSE 8080

# Use the exact jar file name to avoid wildcard issues
CMD ["java", "-jar", "target/back-end-0.0.1-SNAPSHOT.jar"]
