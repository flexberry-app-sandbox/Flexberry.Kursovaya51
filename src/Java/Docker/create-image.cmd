docker build --no-cache -f SQL\Dockerfile.PostgreSql -t kursovaya5-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t kursovaya5-java/app ../../..
