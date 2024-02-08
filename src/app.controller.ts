import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  getHello(): string {
    return 'Hello World!';
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
