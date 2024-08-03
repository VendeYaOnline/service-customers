import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  BadRequestException,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdatePokemonDto } from './dto/updated-client.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('get-client')
  getClients(@Query('email') email: string) {
    if (!email) {
      throw new BadRequestException('Email is required');
    } else {
      return this.appService.getClient(email);
    }
  }

  @Get('get-all-clients')
  getAllClients() {
    return this.appService.getClients();
  }

  @Post('create-client')
  createClient(@Body() client: CreateClientDto) {
    return this.appService.createClient(client);
  }

  @Put('updated-client')
  updatedClient(@Body() client: UpdatePokemonDto) {
    return this.appService.updateClient(client);
  }

  /*   @Delete('delete-clients')
  deleteClient() {
    return this.appService.deleteClients();
  } */
}
