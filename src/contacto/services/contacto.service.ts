import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/commons/service.commons";
import { Repository } from "typeorm";
import { Contacto } from "../entities/contacto.entity";

@Injectable()
export class ContactoService extends BaseService<Contacto> {

    constructor(@InjectRepository(Contacto) private contactoRepo : Repository<Contacto>) {
        super();
    }

    getRepository(): Repository<Contacto> {
        return this.contactoRepo;
    }

}