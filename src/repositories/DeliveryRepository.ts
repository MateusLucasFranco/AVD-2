import { EntityRepository, Repository} from 'typeorm';
import { Delivery } from '../entities/Delivery';

@EntityRepository(Delivery)
class DeliveryRepository extends Repository<Delivery> {

}

export { DeliveryRepository }