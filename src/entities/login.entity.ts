import { ApiModelProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class Login {
    
    @ApiModelProperty()
    @IsEmail()
    email: string
    
    @ApiModelProperty()
    password: string

}