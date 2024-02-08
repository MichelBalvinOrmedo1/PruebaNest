import { Controller, Get, UseGuards, HttpStatus, Req, HttpException } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Request } from "express";

@Controller("instagram")
export class AppController {
  constructor() {}

  

  @Get()
  @UseGuards(AuthGuard('instagram'))
  async instagramLogin() {}

  @Get('callback')
  @UseGuards(AuthGuard("instagram"))
  async instagramCallback(@Req() req: Request) {
    // El token de acceso está disponible en req.user.accessToken
    return req.user.accessToken;
  }

  
}
