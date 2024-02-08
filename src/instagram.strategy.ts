import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-instagram-token';

@Injectable()
export class InstagramStrategy extends PassportStrategy(Strategy, 'instagram') {
  constructor() {
    super({
      clientID: '751902293045624',
      clientSecret: '00a486c16ebc9243a199f671c0a7affe',
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any) {
    // Lógica de validación y retorno de datos del usuario
    return { accessToken, profile };
  }
}

