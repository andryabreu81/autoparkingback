import { Controller, Get } from '@nestjs/common';
import { PaymentsService } from './payments.service';

@Controller()
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  //obtener lista de pagos pendientes y realizados
    @Get('/paymentsList')
    async getPaymentsList(): Promise<any> {
      let paymentsList = this.paymentsService.getPaymentsList();
      
      let response = {
        statusCode: 200,
        message: 'Lista de pagos obtenida',
        data: await paymentsList
      };
  
      return response;
    }
}
