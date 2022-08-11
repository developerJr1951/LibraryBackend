import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, Query } from '@nestjs/common';
import { MangasService } from './mangas.service';
import { CreateMangasDto } from './dto/create-mangas.dto';
import { UpdateMangasDto } from './dto/update-mangas.dto';
import { PaginationDto } from '../common/dtos/pagination.dto';

@Controller('mangas')
export class MangasController {
  constructor(private readonly mangasService: MangasService) {}

  @Post()
  create(@Body() createMangasDto: CreateMangasDto) {
    return this.mangasService.create(createMangasDto);
  }

  @Post('add/:id')
  addKokoro(@Param('id',ParseUUIDPipe)id: string){
    return this.mangasService.addKokoro(id)
  }

  @Post('remove/:id')
  removeKokoro(@Param('id',ParseUUIDPipe)id: string){
  return this.mangasService.removeKokoro(id)
  }

  @Get()
  findAll(@Query() paginationDto:PaginationDto) {
    return this.mangasService.findAll(paginationDto);
  }
  @Get('top')
  findTop( ) {
    return this.mangasService.findTop();
  }

  @Get('find/:term')
  findOne(@Param('term') term: string) {
    return this.mangasService.findOne(term);
  }

  @Patch(':id')
  update(@Param('id',ParseUUIDPipe) id: string, @Body() updateMangasDto: UpdateMangasDto) {
    return this.mangasService.update(id, updateMangasDto);
  }

  
  @Delete(':id')
  remove(@Param('id',ParseUUIDPipe) id: string) {
    return this.mangasService.remove(id);
  }
}
