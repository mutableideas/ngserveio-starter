import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NgServeIoApiPlaygroundFeatureModule } from '@ng-serve-io/api-playground-feature';

@Module({
  imports: [NgServeIoApiPlaygroundFeatureModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
