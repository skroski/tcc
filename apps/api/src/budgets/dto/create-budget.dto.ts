import { ArrayMinSize, IsNotEmpty, IsNumber, IsPositive, IsString, MaxLength, MinLength, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
//import { UsersDTO } from "../../users/dto/create-user.dto";
//import { CreateClientDTO } from "../../clients/dto/create-client.dto";
import { ServiceDTO } from "../../services/dto/create-service.dto";

export class CreateBudgetDto {

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    readonly name: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(20)
    @MaxLength(150)
    readonly excerpt: string;


    @IsNotEmpty()
    @ValidateNested({each : true})
    @Type(() => ServiceDTO)
    @ArrayMinSize(1)
    //@IsNotEmptyObject({ each : true})
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
    readonly description: string;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    readonly price: number;

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(30)
    readonly type: string;

}