# NestJs backend app for Comsa.uz
- by Dmitry https://t.me/jsdeemon

### Запустить проект
```bash
docker compose up
``` 

### Запустить мониторинг
```bash
docker compose -f docker-compose.monitoring.yml up
```
### Pronetheus URL
```bash
http://localhost:9090
``` 

### Grafana URL
```bash
http://localhost:3000
```

- Grafana credentials for first launch:
- login - admin
- password - admin

- In Grafana add following Prometheus url:
```bash
http://prometheus:9090
```

### Документация swagger
```bash
http://localhost:5000/api/docs 
```
- Коллекция http запросов (Insomnia) лежит в файле
```bash
insomnia_http_req_collection.json
```

### Prometheus metrics
```bash
GET http://localhost:5000/mymetrics
```

- add seeder
```bash
npx sequelize-cli seed:generate --name demo-user
```

- commit seeders
```bash
npx sequelize-cli db:seed:all
```

- .env переменные (dev mode)
```javascript
PORT=5000
POSTGRES_HOST=postgres
POSTGRES_USER=postgres
POSTGRES_DB=postgres
POSTGRESS_PASSWORD=root
POSTGRESS_PORT=5432
SECRET_KEY=secret_key_safasf
```




