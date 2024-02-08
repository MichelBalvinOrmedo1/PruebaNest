import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Profile, Strategy } from "passport-facebook";

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, "facebook") {
  constructor() {
    super({
      clientID: "881471950379451",
      clientSecret: "e5a147b2a21c41395fe022d086374165",
      callbackURL: "https://nestprueba.onrender.com/facebook/redirect",
      fbGraphVersion: 'v19.0', // Versión de la API de Facebook
      scope: "email",
      profileFields: ["emails", "name"],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: (err: any, user: any, info?: any) => void
  ): Promise<any> {
    const { name, emails, id } = profile;
    const user = {
      email: emails[0].value,
      firstName: name.givenName,
      lastName: name.familyName,
      id: id,
    };
    const payload = {
      user,
      accessToken,
    };

    done(null, payload);
  }
}