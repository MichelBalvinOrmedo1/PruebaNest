import { Module } from "@nestjs/common";
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '@nestjs/config'; // Importa ConfigModule si lo necesitas

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { FacebookStrategy } from "./facebook.strategy";
import { InstagramStrategy } from "./instagram.strategy";

@Module({
  imports: [   
     PassportModule.register({ defaultStrategy: 'jwt' }),
      ConfigModule.forRoot(),
],
  controllers: [AppController],
  providers: [AppService, FacebookStrategy, InstagramStrategy],
})
export class AppModule {}