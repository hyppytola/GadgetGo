import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { RegisterDto } from './dto/create-registr.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() dto: RegisterDto) {
    const oldUser = await this.authService.findUser(dto.email);
    if (oldUser) {
      throw new BadRequestException("User already exist");
    }
    return this.authService.register(dto);
  }

  @Post('login')
  async login(@Body() dto: CreateAuthDto) {
    const password = dto.password;
    const email = dto.email;
    const oldUser = await this.authService.findUser(email);
    if (!oldUser) {
      throw new BadRequestException("User doesn't exitst");
    }
    return this.authService.login(email,password);
  }



}
