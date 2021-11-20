import { Request, Response } from 'express'
import { DeliveryServices } from '../services/DeliveryServices'

class DeliveryController {

    async create(req: Request, res: Response) {
        let { /*employ_id,*/ epi_id, date_delivery, quantity_delivered } = req.body

        const deliveryServices = new DeliveryServices()

        date_delivery = new Date(date_delivery)

        try {
            const delivery = await deliveryServices.create({ 
                //employ_id,
                epi_id,
                date_delivery,
                quantity_delivered
            })
            if (!delivery) {
                throw new Error('Alguma informação foi digitado de forma incorreta, verifique e tente novamente.');
            }
            return res.json(delivery)
        } catch(error) {
            return res
                    .status(400)
                    .json({ messagem: error.message })
        }
    }

    async index(req: Request, res: Response) {
        const deliveryService = new DeliveryServices();

        try {
            const delivery = await deliveryService.index();
            return res
                .status(200)
                .json(delivery);
        } catch (error) {
            return res
                .status(400)
                .json({ message: error.message })
        }
    }

    async delete(req: Request, response: Response) {
        const DeliveryService = new DeliveryServices();

        const { id } = req.params;

        try {
            await DeliveryService.delete({ id })
            return response
                .status(200)
                .json({ message: 'Produto excluído com sucesso.' })
        } catch (error) {
            return response
                .status(400)
                .json({ message: error.message })
        }
    }

    async update(req: Request, res: Response) {
        const deliveryServices = new DeliveryServices();

        let { epi_id, date_delivery, quantity_delivered } = req.body;

        const { id } = req.params;

        date_delivery = new Date(date_delivery)

        try {
            const delivery = await deliveryServices.update({ 
                id, 
                epi_id, 
                date_delivery,
                quantity_delivered
            });
            return res
                .status(200)
                .json(delivery);
        } catch (error) {
            return res
                .status(400)
                .json({ message: error.message });
        }
    }

}

export { DeliveryController }