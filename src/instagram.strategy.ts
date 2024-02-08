import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-instagram-token';

@Injectable()
export class InstagramStrategy extends PassportStrategy(Strategy, 'instagram') {
  constructor() {
    super({
      clientID: '751902293045624',
      clientSecret: '00a486c16ebc9243a199f671c0a7affe',
      authorizationURL: 'https://api.instagram.com/oauth/authorize', // URL de autorización de Instagram
      tokenURL: 'https://api.instagram.com/oauth/access_token',
      callbackURL: 'https://nestprueba.onrender.com/instagram/callback',

    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any) {
    // Lógica de validación y retorno de datos del usuario
    return { accessToken, profile };
  }
}

