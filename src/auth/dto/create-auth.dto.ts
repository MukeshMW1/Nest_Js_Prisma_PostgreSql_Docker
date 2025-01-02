import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateAuthDto {
@IsString()
@IsNotEmpty()
username:string
@IsString()
@IsNotEmpty()
@MinLength(5)
password:string
}
