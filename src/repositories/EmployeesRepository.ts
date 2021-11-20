import { EntityRepository, Repository} from 'typeorm';
import { Employees } from '../entities/Employees';

@EntityRepository(Employees)
class EmployeesRepository extends Repository<Employees> {

}

export { EmployeesRepository }