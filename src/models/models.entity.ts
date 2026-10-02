import { Entity, Column, PrimaryGeneratedColumn, Index, ManyToOne, JoinColumn } from 'typeorm';

import { VehicleType } from '../vehicletypes/vehicletypes.entity';


@Entity({ name: 'tb_models' })
@Index('tb_models_id_idx', ['id'])
export class Model {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ name: 'model_code', nullable: true })
  modelCode: string;

  @Column({ name: 'model_name', nullable: true })
  modelName: string;

  @Column({ default: 1 })
  active: number;

  @Column({ name: 'vehicle_type_id', nullable: true })
  vehicleTypeId: number;

  @Column({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ name: 'modified_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  modifiedAt: Date;

  @ManyToOne(() => VehicleType, (vehicleType) => vehicleType.brands)
  @JoinColumn({ name: 'vehicle_type_id' })
  vehicletype: VehicleType; // CORRECCIÓN: El tipo debe ser la Entidad, no un number
}