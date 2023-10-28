import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException,  Query, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    if(
      !createUserDto.first_name ||
      !createUserDto.email ||
      !createUserDto.password
    ) {
      throw new HttpException('Inclomplete Values', HttpStatus.BAD_REQUEST)
    }

    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll(@Query('limit') limit) {
    console.log(limit)

    const users = this.usersService.findAll();
    return { status: 'success', users, limit: +limit }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    if (isNaN(+id)) {
      throw new HttpException('Invalid Param', HttpStatus.BAD_REQUEST)
    }

    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
