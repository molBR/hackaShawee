import {ApiModelProperty} from '@nestjs/swagger'
import { IsNotEmpty, IsNumber, IsDate, IsUrl } from 'class-validator'


export class Hacka {

    @ApiModelProperty()
    @IsNotEmpty()
    ref: string

    @ApiModelProperty()
    @IsNotEmpty()
    @IsNumber()
    rating: Number

    @ApiModelProperty()
    description: string
    
    @ApiModelProperty()
    resumeDescription : string

    @ApiModelProperty()
    @IsNotEmpty()
    date : string

    @ApiModelProperty()
    @IsUrl()
    linkInscription : string

    @ApiModelProperty()
    idUser : string

}