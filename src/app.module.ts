import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

/// modules
import { BrandsModule } from './brands/brands.module';
import { ModelsModule } from './models/models.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { VehicletypesModule } from './vehicletypes/vehicletypes.module';
import { UsersModule } from './users/users.module';
import { PaymentsModule } from './payments/payments.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentMethodsModule } from './payment_methods/payment_methods.module';
import { LoginModule } from './login/login.module';

//entities
import { Brand } from './brands/brands.entity';
import { User } from './users/users.entity';
import { VehicleType } from './vehicletypes/vehicletypes.entity';
import { Model } from './models/models.entity';
import { Login } from './login/login.entity';
import { Vehicle } from './vehicles/vehicles.entity';
import { PaymentMethod } from './payment_methods/payment_methods.entity';
import { Payment } from './payments/payments.entity';

@Module({
  imports: [
    BrandsModule, 
    ModelsModule, 
    VehiclesModule, 
    VehicletypesModule, 
    UsersModule, 
    PaymentsModule, 
    LoginModule, 
    PaymentMethodsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '20111981',
      database: 'db_autoparking',
      entities: [
        Brand, 
        User, 
        VehicleType, 
        Model, 
        Vehicle, 
        Login, 
        PaymentMethod,
        Payment
      ], 
      synchronize: false,
    }), 
  ],
  controllers: [AppController], // <--- 3. Quitamos PaymentMethodsController de aquí
  providers: [AppService],       // <--- 4. Quitamos PaymentMethodsService de aquí
})
export class AppModule { }