import { IsNumber, IsNotEmpty, IsString, IsArray, ArrayMinSize } from 'class-validator'
export class CAtualizarRegistroDto{
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