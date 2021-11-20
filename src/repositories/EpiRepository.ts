import { EntityRepository, Repository} from 'typeorm';
import { Epi } from '../entities/EPI';

@EntityRepository(Epi)
class EpiRepository extends Repository<Epi> {

}

export { EpiRepository }