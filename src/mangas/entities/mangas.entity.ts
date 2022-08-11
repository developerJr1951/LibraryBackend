import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity({name:'mangas'})
export class Mangas {

    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column('text',{unique:true})
    title:string;
    
    @Column('text',{nullable:true})
    description:string;
    
    @Column('text',{array:true,default:[]})
    linksM:string[];
    
    @Column('text',{array:true,default:[]})
    linksA:string[];
    
    @Column('text',{array:true,default:[]})
    tags:string[];
    

    @CreateDateColumn()
    date:Date

    @Column('int',{default:0})
    kokoros:number;


}
