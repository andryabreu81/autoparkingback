import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Brand } from '../brands/brands.entity';

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

  // CORRECCIÓN: Apuntar a brand.vehicletype y renombrar la propiedad a 'brands'
  @OneToMany(() => Brand, (brand) => brand.vehicletype)
  brands: Brand[];
}