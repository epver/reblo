import {Module, DynamicModule} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {configure as i18nConfigure} from 'i18n';
import {I18nOptions, i18nOptions} from './locales/configure';
import {DB_CONFIG} from './api.config';
// entities
import {Admin} from './entities/admin.entity';
import {Setting} from './entities/setting.entity';
// services
import {AdminService} from './services/admin.service';
import {AuthorizeService} from './services/authorize.service';
import {SettingService} from './services/setting.service';
// controllers
import {AdminController} from './controllers/admin.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot(DB_CONFIG),
    TypeOrmModule.forFeature([Admin, Setting]),
  ],
  providers: [
    AuthorizeService,
    AdminService,
    SettingService
  ],
  controllers: [
    AdminController
  ],
  exports: [],
})
export class ApiModule {
  static forRoot(options?: I18nOptions): DynamicModule {
    i18nConfigure({...i18nOptions, ...options});
    return {module: ApiModule};
  }
}
