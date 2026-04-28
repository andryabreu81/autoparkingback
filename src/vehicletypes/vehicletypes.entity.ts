import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'tb_vehicle_types' })
export class VehicleType {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ name: 'vehicle_types_code', type: 'varchar', nullable: true })
  vehicleTypesCode: string;

  @Column({ name: 'vehicle_types_name', type: 'varchar', nullable: true })
  vehicleTypesName: string;

  @Column({ type: 'int4', default: 1 })
  active: number;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'modified_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  modifiedAt: Date;
}