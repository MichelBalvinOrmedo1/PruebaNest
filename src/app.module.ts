import { Module } from "@nestjs/common";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { FacebookStrategy } from "./facebook.strategy";
import { InstagramStrategy } from "./instagram.strategy";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, FacebookStrategy, InstagramStrategy],
})
export class AppModule {}