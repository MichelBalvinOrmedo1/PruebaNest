import { Module } from "@nestjs/common";
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '@nestjs/config'; // Importa ConfigModule si lo necesitas
import { FacebookAuthModule } from 'facebook-auth-nestjs';

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { FacebookStrategy } from "./facebook.strategy";

@Module({
  imports: [   
     PassportModule.register({ defaultStrategy: 'jwt' }),
      ConfigModule.forRoot(),
      FacebookAuthModule.forRoot({
        clientId: 1485547361993999,
        clientSecret: "7675f7d6b53b2694381355411625e695",
      }),
],
  controllers: [AppController],
  providers: [AppService, FacebookStrategy],
})
export class AppModule {}