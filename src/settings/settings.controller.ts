import { 
    Get, 
    Controller,
    Param,
    ParseIntPipe
} from '@nestjs/common';
import { SettingsService } from '@/settings/settings.service';

@Controller('settings')
export class SettingsController {
    constructor(private readonly settingsService: SettingsService) {}

    @Get()
    getSettings() {
        return this.settingsService.getSettings();
    }

    @Get(':id')
    getSetting(@Param('id', ParseIntPipe) id: number) {
        return this.settingsService.getSetting(id);
    }

    @Get('day/:day')
    getSettingsByDay(@Param('day') day: string) {
        return this.settingsService.getSettingsByDay(day);
    }
}