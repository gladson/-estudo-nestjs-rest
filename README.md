# Estudo - NestJS

## Instalação

> Acesse a pasta do projeto exemplo chamado pet-dog e execute o comando abaixo:

```shell
$ yarn install
```

## Rodar projeto

```shell
# desenvolvimento
$ npm run start

# modo desenvolvimento com atualização automática
$ npm run start:dev

# modo produção
$ npm run start:prod
```

## Rodar projeto testes

```bash
# testes unitários
$ npm run test

# testes e2e
# E2E(End-To-End) - é uma metodologia utilizada para testar se o fluxo de um aplicativo está sendo executado conforme o projeto do início ao fim.
$ npm run test:e2e

# teste coverage
# Teste da cobertura do código
$ npm run test:cov
```

## Instalação do ambiente para desenvolvimento de novos projetos

### NestJS

```shell
$ yarn global add @nestjs/cli
```

## Pacotes para uso no desenvolvimento de novos projetos

### TypeORM

> Conectores para os bancos de dados (sqlite3, mysql, etc...)

```shell
$ yarn add ts-node --dev
$ yarn add typeorm @nestjs/typeorm sqlite3
```

```shell
$ npx typeorm init
```

> Arquivo de configuração [ormconfig](/pet-dog/ormconfig.json)

> Foi reconfigurado a estrutura para ficar mais didatico, tudo foi apontado para a pasta database

#### Config package.json para o uso do TypeORM

```json
"scripts" {
    ...
    "typeorm": "node --require ts-node/register ./node_modules/typeorm/cli.js"    
}
```

#### Criar novas entidades

```shell
$ yarn typeorm entity:create -n DogBreed
```

#### Criar novas migrações

> Nova

```shell
$ yarn typeorm migration:create -n DogBreedMigration
```

> existente

```shell
$ yarn typeorm migration:generate -n DogBreedMigration
```

#### Rodar migrações

```shell
$ yarn typeorm migration:run
yarn run v1.22.5

$ node --require ts-node/register ./node_modules/typeorm/cli.js migration:run
query: SELECT * FROM "sqlite_master" WHERE "type" = 'table' AND "name" = 'migration_history'
query: SELECT * FROM "migration_history" "migration_history"  ORDER BY "id" DESC
0 migrations are already loaded in the database.
2 migrations were found in the source code.
2 migrations are new migrations that needs to be executed.
query: BEGIN TRANSACTION
query: INSERT INTO "migration_history"("timestamp", "name") VALUES (?, ?) -- PARAMETERS: [1608535527518,"DogBreedMigration1608535527518"]
Migration DogBreedMigration1608535527518 has been executed successfully.
query: CREATE TABLE "dog_breed" ("id" varchar PRIMARY KEY NOT NULL, "Name" varchar(300) NOT NULL, "PictureUrl" varchar(500) NOT NULL)
query: INSERT INTO "migration_history"("timestamp", "name") VALUES (?, ?) -- PARAMETERS: [1608535667794,"DogBreedMigration1608535667794"]
Migration DogBreedMigration1608535667794 has been executed successfully.
query: COMMIT

Done in 3.84s.
```

#### Reverter migrações

```shell
$ yarn typeorm migration:revert
```

#### Mostrar migrações

```shell
$ yarn typeorm migration:show
yarn run v1.22.5

$ node --require ts-node/register ./node_modules/typeorm/cli.js migration:show
query: SELECT * FROM "sqlite_master" WHERE "type" = 'table' AND "name" = 'migration_history'
query: SELECT * FROM "migration_history" "migration_history"  ORDER BY "id" DESC
 [X] DogBreedMigration1608535527518
 [X] DogBreedMigration1608535667794
Done in 0.77s.
```

#### Sincronizar migrações

```shell
$ yarn typeorm schema:sync
yarn run v1.22.5

$ node --require ts-node/register ./node_modules/typeorm/cli.js schema:sync
query: BEGIN TRANSACTION
query: SELECT * FROM "sqlite_master" WHERE "type" = 'table' AND "name" IN ('dog_breed')
query: SELECT * FROM "sqlite_master" WHERE "type" = 'index' AND "tbl_name" IN ('dog_breed')
query: PRAGMA table_info("dog_breed")
query: PRAGMA index_list("dog_breed")
query: PRAGMA foreign_key_list("dog_breed")
query: SELECT * FROM "sqlite_master" WHERE "type" = 'table' AND "name" = 'typeorm_metadata'
query: COMMIT
Schema syncronization finished successfully.
Done in 0.74s.
```

#### Logs migrações

```shell
$ yarn typeorm schema:log
```

#### Limpar banco de dados

```shell
$ yarn typeorm schema:drop
yarn run v1.22.5

$ node --require ts-node/register ./node_modules/typeorm/cli.js schema:drop
query: PRAGMA foreign_keys = OFF;
query: BEGIN TRANSACTION
query: SELECT 'DROP VIEW "' || name || '";' as query FROM "sqlite_master" WHERE "type" = 'view'
query: SELECT 'DROP TABLE "' || name || '";' as query FROM "sqlite_master" WHERE "type" = 'table' AND "name" != 'sqlite_sequence'
query: DROP TABLE "migration_history";
query: DROP TABLE "dog_breed";
query: COMMIT
query: PRAGMA foreign_keys = ON;
Database schema has been successfully dropped.
Done in 0.80s.
```

#### Rodar query sql

```shell
$ yarn typeorm query "SELECT * FROM dog_breed"
```

#### Limpar cache

```shell
$ yarn typeorm cache:clear
yarn run v1.22.5

$ node --require ts-node/register ./node_modules/typeorm/cli.js cache:clear
Cache was successfully cleared
Done in 0.75s.
```

### Caso ocorra um erro ao limpar cache

```shell
$ yarn typeorm cache:clear
yarn run v1.22.5

$ node --require ts-node/register ./node_modules/typeorm/cli.js cache:clear
Cache is not enabled. To use cache enable it in connection configuration.
Done in 0.72s.
```
> Faltou incluir a configuração no [ormconfig](/pet-dog/ormconfig.json)

```json
{
    ...
    "cache": true,
    ...
}
```


#### Checar versão do TypeORM

```shell
$ yarn typeorm version
yarn run v1.22.5

$ node --require ts-node/register ./node_modules/typeorm/cli.js version
Local installed version: 0.2.29
No global installed was found.
Done in 5.72s.
```