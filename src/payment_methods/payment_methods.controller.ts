import { Controller, Get } from '@nestjs/common';
import { PaymentMethodsService } from './payment_methods.service';

@Controller()
export class PaymentMethodsController {
  constructor(private readonly paymentMethodsService: PaymentMethodsService) {}

  //obtener lista de métodos de pago
    @Get('/paymentMethodsList')
    async getPaymentMethodsList(): Promise<any> {
      let paymentMethodsList = this.paymentMethodsService.getPaymentMethodsList();
      
      let response = {
        statusCode: 200,
        message: 'Lista de métodos de pago obtenida',
        data: await paymentMethodsList
      };
  
      return response;
    } 
    
}
