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


```json

{ "title": "My new post",	"content": "New post content",	"keywords": "some, key, words",	"userId": 1,	"categoryId": 1}
```

.development.env
.production.env
.env


TODO сделать миграции при инициализации бд - добавить роли ADMIN и USER


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
Остановить проект
```bash
docker compose down
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



