import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Setting } from '@/settings/settings.entity';

@Injectable()
export class SettingsService {
    constructor(@InjectRepository(Setting) private settingRepository: Repository<Setting>) {}

    getSettings(): Promise<Setting[]> {
        return this.settingRepository.find()
    }

    getSetting(id: number): Promise<Setting> {
        return this.settingRepository.findOneBy({ id });
    }

    getSettingsByDay(day: string): Promise<Setting[]> {
        return this.settingRepository.findBy({ day });
    }
}