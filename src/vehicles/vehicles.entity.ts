import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';

//entidades para las relaciones
import { User } from '../users/users.entity';
import { VehicleType } from '../vehicletypes/vehicletypes.entity';
import { Brand } from '../brands/brands.entity'; 

@Entity({ name: 'tb_vehicles' })
export class Vehicle {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ name: 'user_id' })
  userId: number;

  @Column({ name: 'brand_id', nullable: true })
  brandId: number;

  // --- RELACIONES ---

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' }) // Une la propiedad con la columna física
  user: User;

  @ManyToOne(() => Brand)
  @JoinColumn({ name: 'brand_id' })
  brand: Brand;

  @ManyToOne(() => VehicleType)
  @JoinColumn({ name: 'vehicle_type_id' })
  vehicleType: VehicleType;

  // ------------------

  @Column({ name: 'vehicle_type_id', type: 'int4', nullable: true })
  vehicleTypeId: number;

  @Column({ name: 'model_id', type: 'int4', nullable: true })
  modelId: number;

  @Column({ type: 'int4', nullable: true })
  year: number;

  @Column({ type: 'int4', default: 1 })
  operative: number;

  @Column({ name: 'parking_number', type: 'int4', nullable: true })
  parkingNumber: number;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'modified_at', type: 'timestamp' })
  modifiedAt: Date;
}