import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from './entities/auth.entity';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdatePokemonDto } from './dto/updated-client.dto';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Client)
    private clientRepository: Repository<Client>,
  ) {}
  async createClient(client: CreateClientDto) {
    const { email } = client;
    const findUser = await this.clientRepository.findOne({
      where: { email: email },
    });

    if (findUser) {
      throw new ConflictException('El cliente ya existe');
    } else {
      const newClient = this.clientRepository.create({
        ...client,
      });
      await this.clientRepository.save(newClient);
      return {
        message: 'Cliente creado con éxito',
        client: newClient.name,
      };
    }
  }

  async updateClient(client: UpdatePokemonDto) {
    const { email } = client;

    // Buscar el cliente existente
    const existingClient = await this.clientRepository.findOne({
      where: { email: email },
    });

    if (!existingClient) {
      throw new NotFoundException('El cliente no existe');
    }

    // Actualizar la información del cliente
    const updatedClient = this.clientRepository.merge(existingClient, client);

    // Guardar los cambios
    await this.clientRepository.save(updatedClient);

    return {
      message: 'Cliente actualizado con éxito',
      client: updatedClient.name,
    };
  }

  async getClient(email: string) {
    const findUser = await this.clientRepository.findOne({
      where: { email: email },
    });

    if (!findUser) {
      throw new NotFoundException(`User with email ${email} not found`);
    } else {
      return {
        last_payment: findUser.last_payment,
        payment_date: findUser.cutting_day,
        state: findUser.state,
      };
    }
  }

  async getClients() {
    const clients = await this.clientRepository.find({});
    return clients;
  }

  async deleteClients() {
    await this.clientRepository.delete({});
    return 'Eliminados correctamente';
  }
}
