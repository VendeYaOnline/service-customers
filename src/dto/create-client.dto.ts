import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateClientDto {
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsBoolean()
  state: boolean;

  @IsString()
  last_payment: string;

  @IsNumber()
  cutting_day: number;

  @IsString()
  date_purchase: string;

  @IsString()
  phone: string;

  @IsString()
  type: string;
}
