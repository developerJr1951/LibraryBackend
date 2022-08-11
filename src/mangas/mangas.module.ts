import { Module } from '@nestjs/common';
import { MangasService } from './mangas.service';
import { MangasController } from './mangas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mangas } from './entities/mangas.entity';
import { CommonModule } from '../common/common.module';

@Module({
  controllers: [MangasController],
  providers: [MangasService],
  imports:[TypeOrmModule.forFeature([Mangas])],
  exports:[MangasService]
})
export class MangasModule {}
