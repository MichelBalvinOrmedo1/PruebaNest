import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Profile, Strategy } from "passport-instagram";

@Injectable()
export class InstagramStrategy extends PassportStrategy(Strategy, "instagram") {
  constructor() {
    super({
      clientID: "751902293045624",
      clientSecret: "00a486c16ebc9243a199f671c0a7affe",
      callbackURL: "https://nestprueba.onrender.com/instagram/callback",
      scope: ["user_profile","user_media"],
    });
  }

  
}
