import {
  Body,
  Controller,
  Post,
  Get,
  Patch,
  Param,
  Query,
  Delete,
  NotFoundException,
  // ?-1 ClassSerializerInterceptor,
  // ?-2UseInterceptors,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UsersService } from './users.service';
// import { SerializeInterceptor } from 'src/interceptors/serialzie.interceptor';
import { Serialize } from 'src/interceptors/serialzie.interceptor';
import { UserDto } from './dtos/user.dto';

@Controller('auth')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
    this.usersService.create(body.email, body.password);
    return true;
  }

  // id is string in here because is part of the URL
  // ?-1 @UseInterceptors(ClassSerializerInterceptor) // This is if we use Exclude decorator in model
  // ?-2@UseInterceptors(new SerializeInterceptor(UserDto)) // This will be moved to a custom decorator
  @Serialize(UserDto)
  @Get('/:id')
  async findUser(@Param('id') id: string) {
    const user = await this.usersService.findOne(parseInt(id));
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  @Get()
  findAllUsers(@Query('email') email: string) {
    return this.usersService.find(email);
  }

  @Delete('/:id')
  removeUser(@Param('id') id: string) {
    return this.usersService.remove(parseInt(id));
  }

  @Patch('/:id')
  updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.usersService.update(parseInt(id), body);
  }
}
