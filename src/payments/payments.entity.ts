import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../users/users.entity';

@Entity({ name: 'tb_parking_payments' })
@Index('tb_parking_payments_user_period_idx', ['userId', 'paymentYear', 'paymentMonth'])
export class Payment {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: string;

  @Column({ name: 'user_id', type: 'int8' })
  userId: string;

  @ManyToOne(() => User, { nullable: false })
  @JoinColumn({ name: 'user_id', foreignKeyConstraintName: 'tb_parking_payments_users_fk' })
  user: User;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  amount: string;

  @Column({ name: 'payment_month', type: 'int4' })
  paymentMonth: number;

  @Column({ name: 'payment_year', type: 'int4' })
  paymentYear: number;

  @Column({ name: 'payment_date', type: 'timestamp', default: () => 'now()' })
  paymentDate: Date;

  @Column({ name: 'payment_method', type: 'varchar', length: 50 })
  paymentMethod: string;

  @Column({ name: 'reference_number', type: 'varchar', length: 100, nullable: true })
  referenceNumber: string | null;

  @Column({ type: 'varchar', length: 20, default: 'pending' })
  status: string;

  @Column({ type: 'text', nullable: true })
  notes: string | null;

  @Column({ name: 'created_at', type: 'timestamp', default: () => 'now()', nullable: true })
  createdAt: Date | null;

  @Column({ name: 'modified_at', type: 'timestamp', default: () => 'now()', nullable: true })
  modifiedAt: Date | null;
}