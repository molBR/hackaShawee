
import { ApiModelProperty } from '@nestjs/swagger';
import { isArray } from 'util';


export class Specialties {

    @ApiModelProperty()
    name: string
    
    @ApiModelProperty()
    points: string

    @ApiModelProperty()
    certificates: string

    @ApiModelProperty()
    hackaExperience: string //experiencia em que trabalhou nesse hackathon com a linguagem
    
}