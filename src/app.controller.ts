import { Controller, Get, UseGuards, HttpStatus, Req, HttpException } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import axios from "axios";
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
  async instagramRedirect(@Req() req: Request) {
    // Obtener el código de autorización de la solicitud
    const code = req.query.code as string;

    try {
      // Parámetros para solicitar el token de acceso a Instagram
      const clientId = '751902293045624';
      const clientSecret = '00a486c16ebc9243a199f671c0a7affe';
      const redirectUri = 'https://nestprueba.onrender.com/instagram/callback';

      // Solicitar el token de acceso a la API de Instagram
      const response = await axios.post(
        'https://api.instagram.com/oauth/access_token',
        `client_id=${clientId}&client_secret=${clientSecret}&grant_type=authorization_code&redirect_uri=${redirectUri}&code=${code}`,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );
      
      // Manejar la respuesta y enviarla al cliente
      const responseData = response.data;
      console.log('Instagram API response:', responseData);
      return responseData;
    } catch (error) {
      console.error('Error al obtener el token:', error);
      // Enviar un mensaje de error específico al cliente
      throw new HttpException('Error al obtener el token', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
