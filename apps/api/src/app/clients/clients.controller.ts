import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ClientsService } from './clients.service';
import { CreateClientDTO } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Controller('clients')
@ApiTags('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  @ApiOperation({ summary: 'Criação de Cliente' })
  @ApiResponse({ status: 200, description: 'Insere um Cliente' })
  @ApiResponse({ status: 404, description: 'Cliente não foi inserido.' })
  create(@Body() createClientDto: CreateClientDTO) {
    return this.clientsService.create(createClientDto);
  }

  @Get()
  @ApiOperation({ summary: 'Consulta de todos os Clientes' })
  @ApiResponse({ status: 200, description: 'Consulta de todos os Clientes.' })
  @ApiResponse({ status: 404, description: 'Clientes não encontrados.' })
  findAll() {
    return this.clientsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Consulta de Cliente por ID' })
  @ApiResponse({ status: 200, description: 'Consulta de Cliente por ID.' })
  @ApiResponse({ status: 404, description: 'Cliente não encontrado.' })
  findOne(@Param('id') id: string) {
    return this.clientsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Alteração de Cliente' })
  @ApiResponse({ status: 200, description: 'Alteração de Cliente .' })
  @ApiResponse({ status: 404, description: 'Não foi possível alterar o Cliente.' })
  update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
    return this.clientsService.update(id, updateClientDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Exlusão de Cliente' })
  @ApiResponse({ status: 200, description: 'Exclusão de Cliente.' })
  @ApiResponse({ status: 404, description: 'Cliente não exlcuido.' })
  remove(@Param('id') id: string) {
    return this.clientsService.remove(id);
  }
}
