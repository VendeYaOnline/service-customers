import { IsNumber, IsString } from 'class-validator';

export class CreateClientDto {
  @IsString()
  name: string;

  @IsString()
  lastname: string;

  @IsString()
  email: string;

  @IsString()
  state: string;

  @IsString()
  last_payment: string;

  @IsNumber()
  phone: number;
}
