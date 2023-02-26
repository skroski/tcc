import { Prop, Schema } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = UserEntity & Document
@Schema()
export class UserEntity {
    @Prop()
    name: string;
    @Prop()
    password: string;
    @Prop()
    email: string;
    constructor(user?: Partial<UserEntity>) {
        this.name = user?.name;
        this.email = user?.email;
        this.password = user?.password;
    }

}
