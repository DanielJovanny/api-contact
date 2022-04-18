import { FindManyOptions, Repository } from "typeorm";


export abstract class BaseService<T> {
    abstract getRepository() : Repository<T>;

    findAll() : Promise<T[]> {
        return this.getRepository().find();
    }

    findOne(options: { where: any; }): Promise<T> {
        return this.getRepository().findOne({
            where: options.where,
          });
    }

    save(entity: T) : Promise<T> {
        return this.getRepository().save(entity);
    }

    saveMany(entities: T[]) : Promise<T[]> {
        return this.getRepository().save(entities);
    }

    async remove(id:any): Promise<void> {
        await this.getRepository().delete(id);
      }

    count(options?: FindManyOptions<T>) : Promise<number> {
        return this.getRepository().count(options);
    }
}