
import {  IsString } from 'class-validator';

export class RegisterDto{
    @IsString()
    username: string;

    @IsString()
    password: string;

    @IsString()
    first_name: string;

    @IsString()
    second_name: string;

    @IsString()
    email: string;

    @IsString()
    address: string;

    @IsString()
    phone_num: string;
}