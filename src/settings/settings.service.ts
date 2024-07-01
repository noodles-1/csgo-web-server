import { Injectable } from '@nestjs/common';

@Injectable()
export class SettingsService {
    getSettings() {
        return {
            id: 1,
            from: '17:00',
            to: '21:00'
        };
    }
}