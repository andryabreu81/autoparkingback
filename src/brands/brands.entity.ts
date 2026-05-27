import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
// CORRECCIÓN: Importar el nombre correcto de la clase
import { VehicleType } from '../vehicletypes/vehicletypes.entity';

@Entity({ name: 'tb_brands' })
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

  // CORRECCIÓN: Usar VehicleType y apuntar a la propiedad correcta del inverso (brands)
  @ManyToOne(() => VehicleType, (vehicleType) => vehicleType.brands)
  @JoinColumn({ name: 'vehicle_type_id' })
  vehicletype: VehicleType; // CORRECCIÓN: El tipo debe ser la Entidad, no un number
}