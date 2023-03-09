import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
export class UsersDTO {
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    @ApiPropertyOptional()
    readonly name: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    @ApiProperty()
    readonly password: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(200)
    @IsEmail()
    @ApiProperty()
    readonly email: string;
}