import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { FilesModule } from './files/files.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './users/entities/user.entity';
import { FileEntity } from './files/entities/file.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'horton.db.elephantsql.com',
      port: 5432,
      username: 'hithewpp',
      password: 'Geuyp6kuIqewSKqnlejYKP8nxZhWYmS7',
      database: 'hithewpp',
      entities: [UserEntity, FileEntity],
      synchronize: true,
    }),
    UsersModule,
    FilesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
