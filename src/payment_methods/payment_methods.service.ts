import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaymentMethod } from './payment_methods.entity';

@Injectable()
export class PaymentMethodsService {
  constructor(
    @InjectRepository(PaymentMethod)
    private readonly paymentMethodsRepository: Repository<PaymentMethod>,
  ) {}

  // Obtener lista de métodos de pago
  async getPaymentMethodsList(): Promise<PaymentMethod[]> {
    
    return await this.paymentMethodsRepository.find();
  }
}