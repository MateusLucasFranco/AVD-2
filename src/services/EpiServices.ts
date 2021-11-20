import { getCustomRepository } from 'typeorm';
import { EpiRepository } from '../repositories/EpiRepository';


interface IEpiCreate {
    name_epi: string;
    validity: number;
    number_ca: string;
}

class EpiServices {

    async create({ name_epi, validity, number_ca }: IEpiCreate) {
        const epiRepository = getCustomRepository(EpiRepository);

        const epi = epiRepository.create({ 
            name_epi, 
            validity, 
            number_ca
        });

        await epiRepository.save(epi);

        return epi;
    }

}

export { EpiServices }
