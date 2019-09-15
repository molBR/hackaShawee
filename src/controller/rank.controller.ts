import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    UseGuards,
    Req,
    Res,
    UseInterceptors,
    Param,
    NotFoundException,
    Query,
  } from '@nestjs/common'
import { ApiUseTags, ApiResponse } from '@nestjs/swagger'
import {RankInfo} from '../entities/rankInfo'


@ApiUseTags('Rank')
@Controller('rank')
export class RankController {
    constructor (
        
        ){}

        
    @Get()
    @ApiResponse({status: 200, description: 'Rank enviado:'})
    async insertUser(@Res() res){
        try{
            const jsonResponse = {
                message: 'Rank enviado',
                content: [
                    {
                        idUser: 'ainda não tem',
                        name: 'Fausto Silva',
                        pont: 1000
                    },
                    {
                        idUser: 'ainda não tem',
                        name: 'Silvio Santos',
                        pont: 900
                    },
                    {
                        idUser: 'ainda não tem',
                        name: 'Bel Pesce',
                        pont: 800
                    },
                    {
                        idUser: 'ainda não tem',
                        name: 'Darth Vader',
                        pont: 700
                    },
                    {
                        idUser: 'ainda não tem',
                        name: 'Cebolinha',
                        pont: 600
                    },
                    {
                        idUser: 'ainda não tem',
                        name: 'Thiaguinho, aquele cantor de pagode',
                        pont: 500
                    },
                    {
                        idUser: 'ainda não tem',
                        name: 'Linus Trovalds',
                        pont: 400
                        
                    }
                ]
            }
            res.code(201).send(jsonResponse)
        } catch (e) {
            console.log('olhaa', e)
            if (e instanceof NotFoundException)
                res.code(404).send('Usuário não encontrado')
            else{
                const jsonReturn = {
                    code: 500, 
                    message: 'Erro interno no servidor',
                    content: e
                }
                res.code(500).send(jsonReturn)
            }
        }
    } 
}
