import { getCustomRepository } from 'typeorm';
import { DeliveryRepository } from '../repositories/DeliveryRepository';
import { EpiRepository } from '../repositories/EpiRepository';

interface IDeliveryDelete {
    id: string;
}

interface IDeliveryUpdate {
    id: string;
    epi_id: string;
    date_delivery: Date;
    quantity_delivered: number;
}

interface IDeliveryCreate {
    //employ_id: string;
    epi_id: string;
    date_delivery: Date;
    quantity_delivered: number;
}

class DeliveryServices {

    async create({ /*employ_id,*/ epi_id, date_delivery, quantity_delivered }: IDeliveryCreate) {
        const deliveryRepository = getCustomRepository(DeliveryRepository);

        const epiRepository = getCustomRepository(EpiRepository);

        let epi = await epiRepository.findOne(epi_id);

        if (!epi) {
            throw new Error(`EPI não encontrada`);
        }

        const delivery = deliveryRepository.create({
            //employ_id,
            epi_id,
            date_delivery,
            quantity_delivered
        });

        await deliveryRepository.save(delivery);

        if (!delivery) {
            throw new Error('Alguma informação foi digitado de forma incorreta, verifique e tente novamente.');
        }

        return delivery;
    }

    async index() {
        const deliveryRepository = getCustomRepository(DeliveryRepository);

        const delivery = await deliveryRepository.find({
            relations: ['epi']
        });

        return delivery;

    }

    async delete({ id }: IDeliveryDelete) {
        const deliveryRepository = getCustomRepository(DeliveryRepository);

        let delivery = await deliveryRepository.findOne({ id });

        if (!delivery) {
            throw new Error(`Pedido de entrega não encontrado`);
        }

        return deliveryRepository.delete({ id });
    }

    async update({ id, epi_id, date_delivery, quantity_delivered }: IDeliveryUpdate) {
        const deliveryRepository = getCustomRepository(DeliveryRepository);

        let delivery = await deliveryRepository.findOne({ id });

        if (!delivery) {
            throw new Error(`Pedidod de entrega não encontrado`);
        }

        const epiRepository = getCustomRepository(EpiRepository);

        let epi = await epiRepository.findOne(epi_id);

        if (!epi) {
            throw new Error(`EPI não encontrada`);
        }

        await deliveryRepository.update(id, {
            epi_id,
            date_delivery,
            quantity_delivered,
        });

        delivery = await deliveryRepository.findOne({ id });

        return delivery;
    }

}

export { DeliveryServices }