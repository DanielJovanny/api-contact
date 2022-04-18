import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactoController } from './controllers/contacto.controller';
import { Contacto } from './entities/contacto.entity';
import { ContactoService } from './services/contacto.service';

@Module({
    imports : [TypeOrmModule.forFeature([Contacto])],
    providers : [ContactoService],
    controllers : [ContactoController]
})
export class ContactoModule {

}