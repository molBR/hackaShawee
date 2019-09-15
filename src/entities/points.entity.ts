import { ApiModelProperty } from '@nestjs/swagger';
import { IsArray } from 'class-validator';


export class Points {
    
    @ApiModelProperty()
    points: number
    
    @ApiModelProperty()
    hackaId: string

    @ApiModelProperty()
    userId: string
}