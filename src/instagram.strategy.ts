
// instagram.strategy.ts

import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-instagram';
import { ConfigService } from '@nestjs/config'; // Asegúrate de tener ConfigService configurado

@Injectable()
export class InstagramStrategy extends PassportStrategy(Strategy, 'instagram') {
  constructor(private readonly configService: ConfigService) {
    super({
      clientID: configService.get('751902293045624'),
      clientSecret: configService.get('INSTAGRA00a486c16ebc9243a199f671c0a7affeM_CLIENT_SECRET'),
      callbackURL: configService.get('https://nestprueba.onrender.com/instagram/callback'),
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any) {
    return {
      accessToken,
      profile,
    };
  }
}
