import { Body, Get, HttpCode, HttpStatus, Param, Post, Patch,Delete} from "@nestjs/common";
import { BaseService } from "./service.commons";


export abstract class BaseController<T> {

    abstract getService(): BaseService<T>;

    @Get('all')
    @HttpCode(HttpStatus.OK)
    async findAll() : Promise<T[]> {
       
        return await this.getService().findAll();
    }

    @Get('find/:id')
    async findOne(@Param('id') id): Promise<T> {
        return await this.getService().findOne( {
            where: { id },
          });
    }

    @Post('save')
    @HttpCode(HttpStatus.CREATED)
    async save(@Body() entity: T) : Promise<T> {
        return await this.getService().save(entity);
    }

    /*@Patch('update/')
    async update(@Param('id') id: any) {
      return await this.getService().update(id);
    }*/

    @Post('save/many')
    @HttpCode(HttpStatus.CREATED)
    async saveMany(@Body() entities: T[]) : Promise<T[]> {
        return await this.getService().saveMany(entities);
    }

    @Delete('delete/:id')
    @HttpCode(HttpStatus.OK)
    async delete(@Param('id') id: any) {
        return this.getService().remove(id);
    }

    @Get('count')
    async count() : Promise<number> {
        return await this.getService().count();
    }
}