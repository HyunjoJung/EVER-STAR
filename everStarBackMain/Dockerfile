# Stage 1: Use Eclipse Temurin JRE 17 (lightweight and optimized)
FROM eclipse-temurin:17-jre-alpine

# Set working directory
WORKDIR /app

# Copy the JAR file
COPY build/libs/everStarBackMain-0.0.1-SNAPSHOT.jar app.jar

# Expose port 8080 (Spring Boot default)
EXPOSE 8080

# Set JVM options for optimal performance
ENV JAVA_OPTS="-Xms512m -Xmx1536m -XX:+UseG1GC -XX:MaxGCPauseMillis=200"

# Run the application on port 8080
ENTRYPOINT ["sh", "-c", "java $JAVA_OPTS -Dserver.port=8080 -Dspring.profiles.active=prod -jar app.jar"]
