import { 
    Entity,
    PrimaryColumn,
    Column,
    UpdateDateColumn,
    CreateDateColumn,
    JoinColumn,
    ManyToOne
} from 'typeorm';

import { v4 as uuid } from 'uuid';

import { Employees } from './Employees';
import { Epi } from './EPI';

@Entity('deliverys')
class Delivery {

    @PrimaryColumn()
    id: string;

  /*  @JoinColumn({ name: 'employ_id' })
    @ManyToOne(() => Employees )
    employees: Employees;

    @Column()
    employ_id: string;
*/
    @JoinColumn({ name: 'epi_id' })
    @ManyToOne(() => Epi )
    epi: Epi;

    @Column()
    epi_id: string;

    @Column()
    date_delivery: Date;

    @Column()
    quantity_delivered: number;

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

export { Delivery }