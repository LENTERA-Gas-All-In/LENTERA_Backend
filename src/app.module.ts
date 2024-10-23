import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { BusinessModule } from './modules/business/business.module';
import { EducationModule } from './modules/education/education.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    BusinessModule,
    EducationModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
