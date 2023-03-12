import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ServicesService } from './services.service';
import { ServiceDTO } from './dto/create-service.dto';
import { Service } from './interfaces/service.interface';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('services')
@ApiTags('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Post()
  @ApiOperation({ summary: 'Criação de serviço' })
  @ApiResponse({ status: 200, description: 'Insere um serviço' })
  @ApiResponse({ status: 404, description: 'Serviço não foi inserido.' })
  create(@Body() createServiceDto: ServiceDTO) {
    return this.servicesService.create(createServiceDto);
  }

  @Get()
  @ApiOperation({ summary: 'Consulta de todos os serviços' })
  @ApiResponse({ status: 200, description: 'Consulta de todos os serviços.' })
  @ApiResponse({ status: 404, description: 'Serviços não encontrados.' })
  async findAll(): Promise<Service[]> {
    return await this.servicesService.findAll();
  }

  @Get(':serviceID')
  @ApiOperation({ summary: 'Consulta de serviço por ID' })
  @ApiResponse({ status: 200, description: 'Consulta de serviço por ID.' })
  @ApiResponse({ status: 404, description: 'Serviço não encontrado.' })
  async findOne(@Param('serviceID') serviceID: string) {
    return await this.servicesService.findOne(serviceID);
  }

  @Get('users/:userName')
  @ApiOperation({ summary: 'Consulta de serviço por Usuário' })
  @ApiResponse({ status: 200, description: 'Consulta de serviço por Usuário.' })
  @ApiResponse({ status: 404, description: 'Serviço não encontrado.' })
    async getServicesByUserName(@Param('userName') userName: string) {
        return await this.servicesService.getServicesByUserName(userName);
    }


  @Patch(':serviceID')
  @ApiOperation({ summary: 'Alteração de serviço' })
  @ApiResponse({ status: 200, description: 'Alteração de serviço .' })
  @ApiResponse({ status: 404, description: 'Não foi possível alterar o Serviço.' })
  async update(@Param('serviceID') serviceID : string, @Body() newService : ServiceDTO): Promise<Service> {
    return await this.servicesService.update(serviceID, newService);
}

  @Delete(':serviceID')
  @ApiOperation({ summary: 'Exlusão de Serviço' })
  @ApiResponse({ status: 200, description: 'Exclusão de Serviço.' })
  @ApiResponse({ status: 404, description: 'Serviço não exlcuido.' })
  remove(@Param('serviceID') serviceID: string) {
    return this.servicesService.remove(serviceID);
  }
}
