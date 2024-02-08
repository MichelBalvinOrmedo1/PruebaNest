import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Profile, Strategy } from "passport-instagram";

@Injectable()
export class InstagramStrategy extends PassportStrategy(Strategy, "instagram") {
  constructor() {
    super({
      clientID: "751902293045624",
      clientSecret: "00a486c16ebc9243a199f671c0a7affe",
      callbackURL: "https://nestprueba.onrender.com/instagram/redirect",
      scope: ["user_profile"],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: (err: any, user: any, info?: any) => void
  ): Promise<any> {
    const { id, username } = profile;
    const user = {
      id,
      username,
      // Aquí puedes agregar cualquier otra información del usuario que desees extraer del perfil de Instagram
    };
    const payload = {
      user,
      accessToken,
    };

    done(null, payload);
  }
}
