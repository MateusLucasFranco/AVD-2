import { 
    Entity,
    PrimaryColumn, 
    Column, 
    UpdateDateColumn,
    CreateDateColumn
} from 'typeorm'

import { v4 as uuid } from 'uuid'

@Entity('epi')
class Epi {
    
    @PrimaryColumn()
    id: string;

    @Column()
    name_epi: string;

    @Column()
    validity: number;

    @Column()
    number_ca: string;

    @UpdateDateColumn()
    updated_at: Date;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { Epi }