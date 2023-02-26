import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersDTO } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthorizationGuard } from '../authorization.guard';
import { ApiOperation } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new user' })

  async create(@Body() createUserDto: UsersDTO) {
    return await this.usersService.create(createUserDto);
  }
  // @UseGuards(AuthorizationGuard)
  @Get()
  async findAll() {
    return await this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.usersService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return await this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: string) {
    return await this.usersService.deleteOne(id);
  }
}
