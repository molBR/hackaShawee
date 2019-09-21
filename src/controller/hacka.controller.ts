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
import { Hacka } from '../entities/hacka.entity'
import { ApiUseTags, ApiResponse } from '@nestjs/swagger'
import {HackaService} from '../services/hacka.service'


@ApiUseTags('Hacka')
@Controller('hacka')
export class HackaController {
    constructor (
        private readonly hackaService: HackaService
        ){}

        
    @Post()
    @ApiResponse({status: 201, description: 'Usuário criado com sucesso'})
    @ApiResponse({status: 400, description: 'Dados inválidos'})
    @ApiResponse({status: 405, description: 'email ja cadastrado'})
    async insertUser(@Body() hacka: Hacka, @Res() res){
        try{
            console.log(hacka)
            const returnContent = await this.hackaService.insertHacka(hacka)
            res.code(201).send(returnContent)
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
