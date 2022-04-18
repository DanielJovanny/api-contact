import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactoModule } from './contacto/contacto.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type : 'mysql',
      host: 'localhost',
      port : 3306,
      username : 'root',
      database : 'local_db',
      autoLoadEntities : true
   }),
   ContactoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
