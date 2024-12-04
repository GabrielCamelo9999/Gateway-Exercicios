import { IsNumber, IsNotEmpty, IsString, IsArray, ArrayMinSize } from 'class-validator'
export class CriarRegistroDto{
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsNotEmpty()
    @IsString()
    nome: string;

    @IsNotEmpty()
    @IsString()
    nome_exercicio: string;

    @IsNotEmpty()
    @IsNumber()
    tempo: number;
}