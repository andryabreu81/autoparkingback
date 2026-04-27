import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_brands' }) // Nombre exacto de tu tabla
export class Brand {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ name: 'brand_code', nullable: true })
  brandCode: string;

  @Column({ name: 'brand_name', nullable: true })
  brandName: string;

  @Column({ default: 1 })
  active: number;

  @Column({ name: 'vehicle_type_id', nullable: true })
  vehicleTypeId: number;

  @Column({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ name: 'modified_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  modifiedAt: Date;
}