import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { CreateMangasDto } from './dto/create-mangas.dto';
import { UpdateMangasDto } from './dto/update-mangas.dto';
import { Mangas } from './entities/mangas.entity';
import { PaginationDto } from '../common/dtos/pagination.dto';

@Injectable()
export class MangasService {
  private readonly logger=new Logger('MangaService')

  constructor(
    @InjectRepository(Mangas)
    private readonly mangasRepository:Repository<Mangas>,
    private readonly dataSource:DataSource,
  ){}

  async create(createMangasDto: CreateMangasDto) {
    

    try {
      // const date=new Date().getTime()
      const manga=this.mangasRepository.create({...createMangasDto})
      await this.mangasRepository.save(manga)
      return {manga}
    } catch (error) {
      this.handleDBExceptions(error)
    }


  }

  async findAll(paginationDto:PaginationDto) {
    const {limit=10,offset=0}=paginationDto
    const newMangas=await this.mangasRepository.find({order:{date:"desc"},take:limit,skip:offset*10})
    return newMangas
    
  }
  async findTop() {
    const top=await this.mangasRepository.find({order:{kokoros:"desc"},take:5})
    return top;
  }

  async findOne(term: string) {
    let mangas:Mangas[]
    
      const limit=4
      const queryBuilder=this.mangasRepository.createQueryBuilder('mangas')
      mangas=await queryBuilder
                    .where('LOWER(title) LIKE :title',{title:`${term.toLowerCase()}%`})
                    .limit(limit)
                    .getMany()
                    


      return mangas
  }

  async update(id: string, updateMangasDto: UpdateMangasDto) {

    const  manga=await this.mangasRepository.preload({id,...updateMangasDto})
    if(!manga) throw new NotFoundException(`Manga with ${id} not found`)

    const queryRunner=this.dataSource.createQueryRunner();
    await queryRunner.connect()
    await queryRunner.startTransaction()
    try {
      await queryRunner.manager.save(manga)
      await queryRunner.commitTransaction()
      await queryRunner.release()
      return manga
    } catch (error) {
      this.handleDBExceptions(error)
    }




  }

  async remove(id: string) {

      const manga=await this.mangasRepository.delete(id)
      if (manga.affected===0)throw new NotFoundException(`manga with id "${id}" no exist`)
      
      return `manga with id "${id}" deleteado`
   

  }


  async addKokoro(id:string){
    const {kokoros}=await this.mangasRepository.findOneBy({id:id})
    const newkokoros=kokoros+1
    const  manga=await this.mangasRepository.preload({id,kokoros:newkokoros})
    const queryRunner=this.dataSource.createQueryRunner();
    await queryRunner.connect()
    await queryRunner.startTransaction()
    try {
      await queryRunner.manager.save(manga)
      await queryRunner.commitTransaction()
      await queryRunner.release()
      return manga
    } catch (error) {
      this.handleDBExceptions(error)
    }

  }
  async removeKokoro(id:string){
    const {kokoros}=await this.mangasRepository.findOneBy({id:id})
    const newkokoros=kokoros-1
    
    const  manga=await this.mangasRepository.preload({id,kokoros:newkokoros})
    const queryRunner=this.dataSource.createQueryRunner();
    await queryRunner.connect()
    await queryRunner.startTransaction()
    try {
      await queryRunner.manager.save(manga)
      await queryRunner.commitTransaction()
      await queryRunner.release()
      return manga
    } catch (error) {
      this.handleDBExceptions(error)
    }

  }




  async deleteAllMangas(){

    const query=this.mangasRepository.createQueryBuilder('mangas')
    try {
      return await query
                    .delete()
                    .where({})
                    .execute()
    } catch (error) {
      this.handleDBExceptions(error)
    }

  }




  private handleDBExceptions(error:any){
    if(error.code==='23505') throw new BadRequestException(error.detail)
    
    this.logger.error(error)
    
    throw new InternalServerErrorException('Aiudaa!')
    
  }


}
