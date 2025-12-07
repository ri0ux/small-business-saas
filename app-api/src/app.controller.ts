import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { UsersService } from './user.service';
import { User as UserModel } from './generated/prisma/client';
@Controller('users/api')
export class AppController {
  constructor(private readonly userService: UsersService) {}

  @Post('post')
  async signupUser(
    @Body() userData: { name?: string; email: string },
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }

  @Get('getAll')
  async getAllUsers(): Promise<UserModel[]> {
    return this.userService.users({});
  }
}
