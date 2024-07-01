import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'current_setting' })
export class Setting {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'time', nullable: false })
    hourFrom: Date;

    @Column({ type: 'time', nullable: false })
    hourTo: Date;

    @Column({ type: 'varchar', nullable: false })
    day: string;

    @Column({ type: 'bool', nullable: false })
    detectCar: boolean;

    @Column({ type: 'bool', nullable: false })
    detectMotorcycle: boolean;

    @Column({ type: 'bool', nullable: false })
    detectBus: boolean;

    @Column({ type: 'bool', nullable: false })
    detectTruck: boolean;

    @Column({ type: 'float', nullable: false })
    carPrice: number;

    @Column({ type: 'float', nullable: false })
    motorcyclePrice: number;

    @Column({ type: 'float', nullable: false })
    busPrice: number;

    @Column({ type: 'float', nullable: false })
    truckPrice: number;
}