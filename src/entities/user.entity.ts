
import { ApiModelProperty } from '@nestjs/swagger';
import { Specialties } from './specialties.entity'
import { IsArray, IsEmail } from 'class-validator';
import {UserExists} from '../validators/user.validator' 
export class User {

    @ApiModelProperty()
    name: string
    
    @ApiModelProperty()
    nickname: string

    @IsEmail()
    @UserExists()
    @ApiModelProperty()
    email: string

    @ApiModelProperty()
    password: string

    @ApiModelProperty()
    gender: string

    @ApiModelProperty()
    description: string

    @ApiModelProperty()
    imgurl: string

    @ApiModelProperty()
    document: string

    @ApiModelProperty()
    isCompany: boolean

    @IsArray()
    @ApiModelProperty({isArray: true})
    specialtiesId : string
}