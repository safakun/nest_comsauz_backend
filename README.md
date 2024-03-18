### NestJs backend app for Comsa
sudo docker rm -f $(docker ps -a -q) 

sudo docker volume rm $(docker volume ls -q)

- add seeder
```bash
npx sequelize-cli seed:generate --name demo-user
```

- commit seeders
```bash
npx sequelize-cli db:seed:all
```


.development.env
.production.env
.env


```javascript
PORT=5000
POSTGRES_HOST=postgres
POSTGRES_USER=postgres
POSTGRES_DB=postgres
POSTGRESS_PASSWORD=root
POSTGRESS_PORT=5432
SECRET_KEY=secret_key_safasf
```

Запустить проект
```bash
docker compose up
```

Документация swagger
```bash
http://localhost:5000/api/docs
```


```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```



