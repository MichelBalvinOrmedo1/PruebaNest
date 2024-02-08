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
  async instagramLogin() {
    // Esta ruta maneja la redirección inicial a Instagram para la autorización
  }

  @Get('instagram/callback')
  @UseGuards(AuthGuard('instagram'))
  async instagramLoginCallback(@Req() req: Request) {
    try {
      // Extrae el código de autorización de la URL
      const code = req.query.code as string;
      
      // Usa el código de autorización para solicitar el token de acceso
      // y realizar cualquier otra lógica de autenticación necesaria
      
      return {
        statusCode: HttpStatus.OK,
        message: 'Authorization successful',
        code: code
      };
    } catch (error) {
      throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
