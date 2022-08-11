import { Injectable } from '@nestjs/common';
import { MangasService } from '../mangas/mangas.service';
import { initalData } from './data/see-data';

@Injectable()
export class SeedService {
  constructor(private readonly mangasService:MangasService){}


  async runSeed(){
    this.inserNewMangas()
    return `Seed executed`
  }


  private async inserNewMangas(){
    await this.mangasService.deleteAllMangas()
    const mangas=initalData.mangas
    const insertPromises=[]
    mangas.forEach(manga=>{
      insertPromises.push(this.mangasService.create(manga))
    })
    await Promise.all(insertPromises)
    return true
  }

}
