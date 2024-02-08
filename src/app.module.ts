import { Module } from "@nestjs/common";
import { PassportModule } from '@nestjs/passport';

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { FacebookStrategy } from "./facebook.strategy";
import { InstagramStrategy } from "./instagram.strategy";

@Module({
  imports: [    PassportModule.register({ defaultStrategy: 'jwt' }),
],
  controllers: [AppController],
  providers: [AppService, FacebookStrategy, InstagramStrategy],
})
export class AppModule {}