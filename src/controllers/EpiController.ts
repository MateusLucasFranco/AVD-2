import { Request, Response } from 'express'
import { EpiServices } from '../services/EpiServices'

class EpiController {

    async create(req: Request, res: Response) {
        const { name_epi, validity, number_ca } = req.body

        const epiServices = new EpiServices()

        try {
            const epi = await epiServices.create({ 
                name_epi,
                validity,
                number_ca
            })
            return res.json(epi)
        } catch(error) {
            return res
                    .status(400)
                    .json({ messagem: error.message })
        }
    }

}

export { EpiController }