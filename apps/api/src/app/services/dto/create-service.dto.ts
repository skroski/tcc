import { ArrayMinSize, IsNotEmpty, IsNumber, IsPositive, IsString, MaxLength, MinLength, ValidateNested } from "class-validator";
import { UsersDTO } from "../../users/dto/create-user.dto";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export class ServiceDTO {

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    @ApiProperty()
    readonly name: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(20)
    @MaxLength(150)
    @ApiProperty()
    readonly excerpt: string;


    @IsNotEmpty()
    @ValidateNested({each : true})
    @Type(() => UsersDTO)
    @ArrayMinSize(1)
    //@IsNotEmptyObject({ each : true})
    @ApiProperty()
    readonly users: UsersDTO[];

    @IsNotEmpty()
    @IsString()
    @MinLength(50)
    @MaxLength(250)
    @ApiProperty()
    readonly description: string;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    @ApiProperty()
    readonly price: number;

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(30)
    @ApiProperty()
    readonly type: string;

}