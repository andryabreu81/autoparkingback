import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_payment_methods' })
export class PaymentMethod {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: string; // Coincide con bigserial del DDL

  @Column({ type: 'varchar' })
  code: string;

  @Column({ name: 'payment_method', type: 'varchar', nullable: true })
  paymentMethod: string | null;

  @Column({ type: 'int4', default: 1 })
  active: number;

  @Column({ name: 'created_at', type: 'timestamp', default: () => 'now()', nullable: true })
  createdAt: Date | null;

  @Column({ name: 'updated_at', type: 'timestamp', default: () => 'now()', nullable: true })
  updatedAt: Date | null;
}