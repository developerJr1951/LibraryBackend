import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { MangasModule } from '../mangas/mangas.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports:[MangasModule]
})
export class SeedModule {}
