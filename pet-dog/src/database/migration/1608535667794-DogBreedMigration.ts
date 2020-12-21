import {MigrationInterface, QueryRunner} from "typeorm";

export class DogBreedMigration1608535667794 implements MigrationInterface {
    name = 'DogBreedMigration1608535667794'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "dog_breed" ("id" varchar PRIMARY KEY NOT NULL, "Name" varchar(300) NOT NULL, "PictureUrl" varchar(500) NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "dog_breed"`);
    }

}
