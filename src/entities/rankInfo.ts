import { ApiModelProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class RankInfo {
    
    @ApiModelProperty()
    idUser: string
    
    @ApiModelProperty()
    email: string

    @ApiModelProperty()
    pont: Number

}