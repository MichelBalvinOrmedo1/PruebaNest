import { Controller, Get, UseGuards, HttpStatus, Req, HttpException } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Request } from "express";

import { AppService } from "./app.service";
import { log } from "console";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/facebook")
  @UseGuards(AuthGuard("facebook"))
  async facebookLogin(): Promise<any> {
    return HttpStatus.OK;
  }

  @Get("/facebook/redirect")
  @UseGuards(AuthGuard("facebook"))
  async facebookLoginRedirect(@Req() req: Request): Promise<any> {
    return {
      statusCode: HttpStatus.OK,
      data: req.user,
    };
  }
  @Get("/instagram")
  @UseGuards(AuthGuard("instagram"))
  async instagramLogin(): Promise<any> {
    return HttpStatus.OK;
  }

  @Get("/instagram/redirect")
  @UseGuards(AuthGuard("instagram"))
  async instagramLoginRedirect(@Req() req: Request): Promise<any> {
    try {
      if (!req.user) {
        throw new HttpException('User not authenticated', HttpStatus.UNAUTHORIZED);
      }
      return {
        statusCode: HttpStatus.OK,
        data: req.user,
      };
    } catch (error) {
      console.error('Error during Instagram authentication:', error);
      throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}