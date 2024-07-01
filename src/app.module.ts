import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { SettingsModule } from '@/settings/settings.module';

import 'dotenv/config'

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: process.env.RDS_ENDPOINT,
            port: parseInt(process.env.RDS_PORT),
            username: process.env.RDS_USER,
            password: process.env.RDS_PASSWORD,
            database: process.env.RDS_DB,
            entities: [],
            synchronize: true,
        }),
        SettingsModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
    constructor(private dataSource: DataSource) {}
}
