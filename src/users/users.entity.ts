import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'tb_users' })
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ name: 'identification_id', type: 'int4' })
  identificationId: number;

  @Column({ type: 'varchar', nullable: true })
  name: string;

  @Column({ type: 'varchar' })
  lastname: string;

  @Column({ type: 'varchar' })
  email: string;

  @Column({ name: 'phone_number', type: 'int4', nullable: true })
  phoneNumber: number;

  @Column({ name: 'apto_number', type: 'varchar', nullable: true })
  aptoNumber: string;

  @Column({ type: 'int4', nullable: true })
  floor: number;

  @Column({ type: 'varchar', nullable: true })
  leader: string;

  @Column({ name: 'vehicle_id', type: 'int4', nullable: true })
  vehicleId: number;

  @Column({ name: 'role_id', type: 'int4' })
  roleId: number;

  @Column({ type: 'varchar', nullable: true })
  login: string;

  // Es recomendable manejar el password con precaución (puedes usar select: false para que no se traiga por defecto)
  @Column({ type: 'varchar', nullable: true, select: false })
  password?: string;

  @Column({ type: 'int4', nullable: true, default: 1 })
  active: number;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'modified_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  modifiedAt: Date;
}