import { Controller, Get, Req, Res, UseGuards,HttpStatus} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
interface AuthenticatedRequest extends Request {
  user: any; // Define el tipo de 'user' según lo que esperas recibir
}
@Controller()
export class AppController {
  constructor() {}

  @Get()
  getHello(): string {
    return 'Hello World!';
  }
  @Get("/facebook")
  @UseGuards(AuthGuard("facebook"))
  async facebookLogin(): Promise<any> {
    return HttpStatus.OK;
  }

  @Get("/facebook/redirect")
  @UseGuards(AuthGuard("facebook"))
  async facebookLoginRedirect(@Req() req: AuthenticatedRequest): Promise<any> {
    return {
      statusCode: HttpStatus.OK,
      data: req.user,
    };
  }

  @Get('instagram')
  @UseGuards(AuthGuard('instagram'))
  instagramLogin() {}

  @Get('instagram/callback')
  @UseGuards(AuthGuard('instagram'))
  async instagramLoginCallback(@Req() req: any, @Res() res: any) {
    // Aquí puedes manejar la lógica de redirección después de la autenticación exitosa
    res.redirect('/'); // Por ejemplo, redirige al usuario a la página principal
  }
  
}
