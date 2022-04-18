import { Controller } from "@nestjs/common";
import { BaseController } from "src/commons/controller.commons";
import { BaseService } from "src/commons/service.commons";
import { Contacto } from "../entities/contacto.entity";
import { ContactoService } from "../services/contacto.service";

@Controller('api/contacto')
export class ContactoController extends BaseController<Contacto> {

    constructor(private readonly contactoService: ContactoService) {
        super();
    }

    getService(): BaseService<Contacto> {
        return this.contactoService;
    }

}