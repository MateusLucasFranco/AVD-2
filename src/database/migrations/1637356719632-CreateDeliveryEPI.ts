import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateDeliveryEPI1637356719632 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'deliverys',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                /*    {
                        name: 'employ_id',
                        type: 'uuid',
                        isNullable: false,
                    },*/
                    {
                        name: 'epi_id',
                        type: 'uuid',
                        isNullable: false,
                    },
                    {
                        name: 'date_delivery',
                        type: 'Date'
                    },
                    {
                        name: 'quantity_delivered',
                        type: 'number',
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
                ],
                foreignKeys: [
                 /*   {
                        name: 'FKEmployees',
                        referencedTableName: 'employees',
                        referencedColumnNames: ['id'],
                        columnNames: ['employ_id'],
                        onDelete: 'SET NULL',
                        onUpdate: 'SET NULL',
                    },*/
                    {
                        name: 'FKEPI',
                        referencedTableName: 'epi',
                        referencedColumnNames: ['id'],
                        columnNames: ['epi_id'],
                        onDelete: 'SET NULL',
                        onUpdate: 'SET NULL',
                    }, 
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('deliverys')
    }

}
