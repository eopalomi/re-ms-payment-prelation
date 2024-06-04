import { Module } from '@nestjs/common';
import { PrelationModule } from './modules/prelation/prelation.module';

@Module({
  imports: [PrelationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
