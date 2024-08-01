import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('clients')
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  state: boolean;

  @Column()
  last_payment: Date;

  @Column()
  cutting_day: number;

  @Column()
  date_purchase: Date;

  @Column()
  phone: string;

  @Column()
  type: string;
}
