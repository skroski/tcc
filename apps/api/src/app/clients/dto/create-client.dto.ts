import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
export class CreateClientDTO {
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    @ApiProperty()
    readonly user: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    @ApiProperty()
    readonly name: string;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    @ApiProperty()
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    @ApiProperty()
    readonly mobile: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    @ApiProperty()
    readonly cpf: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(200)
    @IsEmail()
    @ApiProperty()
    readonly cnpj: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(200)
    @ApiProperty()
    readonly razaosocial: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    @ApiProperty()
    readonly cep: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(250)
    @ApiProperty()
    readonly address: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    @ApiProperty()
    readonly budget: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    @ApiProperty()
    readonly typecustomer: string;
}