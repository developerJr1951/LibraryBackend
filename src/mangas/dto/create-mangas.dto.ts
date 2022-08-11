import { IsArray, IsDate, IsNumber, IsOptional, IsPositive, IsString, MinLength } from "class-validator";

export class CreateMangasDto {

    @IsString()
    @MinLength(2)
    title:string;
    
    @IsString()
    @IsOptional()
    description?:string;
    
    @IsString({each:true})
    @IsArray()
    linksM:string[];
    
    @IsString({each:true})
    @IsArray()
    linksA:string[];
    
    @IsString({each:true})
    @IsArray()
    tags:string[];

    // @IsDate()
    // date:string;

    @IsNumber()
    @IsOptional()
    @IsPositive()
    kokoros?:number;

}
