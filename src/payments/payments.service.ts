import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Payment } from './payments.entity';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>,
  ) {}

  // Obtener lista de pagos pendientes y realizados
  async getPaymentsList(): Promise<Payment[]> {
    console.log('Obteniendo lista de pagos...');
    console.log('Repositorio de pagos:', this.paymentRepository);
    
    return await this.paymentRepository.find();
  }
}