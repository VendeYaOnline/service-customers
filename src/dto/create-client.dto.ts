import { IsBoolean, IsDate, IsNumber, IsString } from 'class-validator';

export class CreateClientDto {
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsBoolean()
  state: boolean;

  @IsDate()
  last_payment: Date;

  @IsNumber()
  cutting_day: number;

  @IsDate()
  date_purchase: Date;

  @IsString()
  phone: string;

  @IsString()
  type: string;
}
