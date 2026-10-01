import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // 1. Importar TypeOrmModule
import { ModelsService } from './models.service';
import { ModelsController } from './models.controller';
import { Model } from './models.entity'; // 2. Importar tu entidad Model (ajusta la ruta si es necesario)

@Module({
  imports: [
    TypeOrmModule.forFeature([Model]), // 3. Registrar la entidad aquí
  ],
  controllers: [ModelsController],
  providers: [ModelsService],
  exports: [ModelsService], // Opcional, por si otro módulo necesita usar este servicio
})
export class ModelsModule { }