import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateEPI1637356698925 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'epi',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'name_epi',
                        type: 'varchar',
                    },
                    {
                        name: 'validity',
                        type: 'Date',
                    },
                    {
                        name: 'number_ca',
                        type: 'number'
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('epi')
    }

}
