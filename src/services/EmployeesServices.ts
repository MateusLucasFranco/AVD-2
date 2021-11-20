import { getCustomRepository } from 'typeorm';
import { EmployeesRepository } from '../repositories/EmployeesRepository';


interface IEmployeesCreate {
    name: string;
    cpf: string;
    occupation: string;
}

class EmployeesServices {

    async create({ name, cpf, occupation }: IEmployeesCreate) {
        const employeesRepository = getCustomRepository(EmployeesRepository);

        const employees = employeesRepository.create({ 
            name, 
            cpf, 
            occupation
        });

        await employeesRepository.save(employees);

        return employees;
    }

}

export { EmployeesServices }