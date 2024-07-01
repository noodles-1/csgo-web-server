import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SettingsController } from '@/settings/settings.controller';
import { SettingsService } from '@/settings/settings.service';
import { Setting } from '@/settings/settings.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Setting])],
    exports: [TypeOrmModule],
    controllers: [SettingsController],
    providers: [SettingsService]
})
export class SettingsModule {}
