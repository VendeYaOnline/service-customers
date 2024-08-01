import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Client } from './entities/auth.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 43912,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Client],
      synchronize: false, // * Opcional: sincroniza automáticamente las estructuras de la base de datos (no recomendado en producción)
    }),

    TypeOrmModule.forFeature([Client]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
