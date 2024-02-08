import { Controller, Get, UseGuards, HttpStatus, Req, HttpException } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Request } from "express";
// Define una interfaz para el usuario que incluya accessToken
interface User {
  // Otras propiedades del usuario
  accessToken: string;
}

@Controller("instagram")
export class AppController {
  constructor() {}

  

  @Get()
  @UseGuards(AuthGuard('instagram'))
  async instagramLogin() {}

  @Get('callback')
  async instagramCallback(@Req() req: Request): Promise<any> {
    try {
      if (!req.user) {
        // Manejo de caso en el que el usuario no está autenticado
        return { statusCode: HttpStatus.UNAUTHORIZED, message: 'User not authenticated' };
      }

      // Usuario autenticado, envía la información del usuario como respuesta
      return { statusCode: HttpStatus.OK, user: req.user };
    } catch (error) {
      // Manejo de errores
      return { statusCode: HttpStatus.INTERNAL_SERVER_ERROR, error: 'Internal server error' };
    }
  }
  
}
