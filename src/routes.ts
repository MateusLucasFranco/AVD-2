import { Router } from 'express'
import { EmployeesController } from './controllers/EmployeesController'
import { DeliveryController } from './controllers/DeliveryController'
import { EpiController } from './controllers/EpiController'

const routes = Router()


const employeesController = new EmployeesController()

routes.post('/employees', employeesController.create)

// Employees ↑ - Epi ↓

const epiController = new EpiController()

routes.post('/epi', epiController.create);

// Epi ↑ - Delivery ↓

const deliveryController = new DeliveryController()

routes.post('/delivery', deliveryController.create);
routes.get('/delivery', deliveryController.index);
routes.delete('/delivery/:id', deliveryController.delete);
routes.put('/delivery/:id', deliveryController.update);

export { routes }