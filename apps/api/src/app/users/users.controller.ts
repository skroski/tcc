import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersDTO } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
//import { AuthorizationGuard } from '../authorization.guard';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  // @UseGuards(AuthorizationGuard)
  
  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'Consulta de todos os usuários.' })
  @ApiResponse({ status: 404, description: 'Usuários não encontrados.' })
  
  async findAll() {
    return await this.usersService.findAll();
  }
  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({ status: 200, description: 'Novo usuário criado com sucesso' })
  @ApiResponse({ status: 400, description: 'Rota inválida' })
  async create(@Body() createUserDto: UsersDTO) {
    return await this.usersService.create(createUserDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get user by ID' })
  @ApiResponse({ status: 200, description: 'Dados do usuário retornado com sucesso' })
  @ApiResponse({ status: 400, description: 'Rota inválida' })
  async findOne(@Param('id') id: string) {
    return await this.usersService.findOne(id);
  }
  @Patch(':id')
  @ApiOperation({ summary: 'Update user' })
  @ApiResponse({ status: 200, description: 'Usuário alterado com sucesso' })
  @ApiResponse({ status: 404, description: 'Usuário não encontrado' })
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return await this.usersService.update(id, updateUserDto);
  }
  @Delete(':id')
  @ApiOperation({ summary: 'Delete user' })
  @ApiResponse({ status: 204, description: 'Usuário removido com sucesso' })
  @ApiResponse({ status: 404, description: 'Usuário não encontrado' })
  async deleteOne(@Param('id') id: string) {
    return await this.usersService.deleteOne(id);
  }
}
