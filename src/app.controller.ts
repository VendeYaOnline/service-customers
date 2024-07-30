import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  BadRequestException,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateClientDto } from './dto/create-client.dto';

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

  @Post('create-client')
  createClient(@Body() client: CreateClientDto) {
    return this.appService.createClient(client);
  }

  /*   @Delete('delete-clients')
  deleteClient() {
    return this.appService.deleteClients();
  } */
}
