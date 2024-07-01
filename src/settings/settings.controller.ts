import { 
    Get, 
    Controller 
} from '@nestjs/common';
import { SettingsService } from '@/settings/settings.service';

@Controller('settings')
export class SettingsController {
    constructor(private readonly settingsService: SettingsService) {}

    @Get()
    getSettings() {
        return this.settingsService.getSettings();
    }
}