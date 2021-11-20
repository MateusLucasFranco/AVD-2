import { Request, Response } from 'express'
import { EmployeesServices } from '../services/EmployeesServices'

class EmployeesController {

    async create(req: Request, res: Response) {
        const { name, cpf, occupation } = req.body

        const employeesServices = new EmployeesServices()

        try {
            const employees = await employeesServices.create({ 
                name, 
                cpf, 
                occupation
            })
            return res.json(employees)
        } catch(error) {
            return res
                    .status(400)
                    .json({ messagem: error.message })
        }
    }

}

export { EmployeesController }