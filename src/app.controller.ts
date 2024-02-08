import { Controller, Get, UseGuards, HttpStatus, Req, HttpException } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Request } from "express";

@Controller()
export class AppController {
  constructor() {}

  @Get()
  getHello(): string {
    return 'Hello World!';
  }

  @Get('instagram')
  @UseGuards(AuthGuard('instagram'))
  async instagramLogin() {}

  @Get('instagram/callback')
  @UseGuards(AuthGuard('instagram'))
  async instagramLoginCallback(@Req() req: Request) {
    // Lógica para manejar el resultado de la autenticación de Instagram
    return req.user;
  }

  
}
