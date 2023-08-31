import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  productId: number;

  @Column()
  title: string;

  @Column()
  price: number;

  @Column()
  discount: number;

  @Column()
  description: string;

  @Column()
  productInStock: number;

  @Column('json', { array: true, default: [] }) // Use jsonb for JSON array
  productUrl: string[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
