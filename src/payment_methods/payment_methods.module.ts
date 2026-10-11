import { Module } from '@nestjs/common';
import { PaymentMethodsService } from './payment_methods.service';
import { PaymentMethodsController } from './payment_methods.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentMethod } from './payment_methods.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentMethod])],
  providers: [PaymentMethodsService],
  controllers: [PaymentMethodsController],
  exports: [PaymentMethodsService, TypeOrmModule], // <--- Añade esto por si otros módulos lo consumen
})
export class PaymentMethodsModule {}