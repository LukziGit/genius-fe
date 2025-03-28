import {IsEmail, IsNotEmpty, IsString, IsStrongPassword} from "class-validator";

export class UserRegisterDto{
    @IsNotEmpty()
    @IsEmail()
    email!: string;
    @IsNotEmpty()
    @IsStrongPassword()
    password!: string;
    @IsNotEmpty()
    @IsString()
    firstName!: string;
    @IsNotEmpty()
    @IsString()
    lastName!: string;
}