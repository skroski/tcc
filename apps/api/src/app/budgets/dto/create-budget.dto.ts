import { ArrayMinSize, IsNotEmpty, IsNumber, IsPositive, IsString, MaxLength, MinLength, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
//import { UsersDTO } from "../../users/dto/create-user.dto";
//import { CreateClientDTO } from "../../clients/dto/create-client.dto";
import { ServiceDTO } from "../../services/dto/create-service.dto";
import { ApiProperty } from "@nestjs/swagger";

export class CreateBudgetDto {

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
    @Type(() => ServiceDTO)
    @ArrayMinSize(1)
    //@IsNotEmptyObject({ each : true})
    @ApiProperty()
    readonly services: ServiceDTO[];

    // @IsNotEmpty()
    // @ValidateNested({each : true})
    // @Type(() => CreateClientDTO)
    // @ArrayMinSize(1)
    // //@IsNotEmptyObject({ each : true})
    // readonly clients: CreateClientDTO[];

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