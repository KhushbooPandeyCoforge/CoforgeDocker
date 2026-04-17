FROM eclipse-temurin:17-jre
WORKDIR /app
COPY target/StudentManagementBackend.war StudentManagementBackend.war
EXPOSE 8082
ENTRYPOINT ["java","-jar","StudentManagementBackend.war"]