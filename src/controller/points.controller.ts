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
import { Points } from '../entities/points.entity'
import { ApiUseTags, ApiResponse, ApiImplicitParam } from '@nestjs/swagger'
import {PointsService} from '../services/points.service'


@ApiUseTags('Points')
@Controller('Points')
export class PointsController {
    constructor (
        private readonly PointsService: PointsService
        ){}

        
    @Post()
    
    @ApiResponse({status: 201, description: 'Usuário criado com sucesso'})
    @ApiResponse({status: 400, description: 'Dados inválidos'})
    @ApiResponse({status: 404, description: 'Usuário não encontrado'})
    async insertUser(@Body() points: Points, @Res() res){
        try{
            console.log('a')
            const returnContent = await this.PointsService.insertPoints(points)
            console.log(returnContent)
            res.code(201).send(returnContent)
        } catch (e) {
            console.log(e)
            const jsonReturn = {
                code: 500, 
                message: 'Erro interno no servidor',
                content: e
            }
            res.code(500).send(jsonReturn)
        }
    }
    
            
    @Get(':id')
    @ApiImplicitParam({name: 'id', description: 'id do usuario'})
    @ApiResponse({status: 201, description: 'Usuário criado com sucesso'})
    @ApiResponse({status: 400, description: 'Dados inválidos'})
    @ApiResponse({status: 404, description: 'Usuário não encontrado'})
    async gettUser(@Param() param, @Res() res){
        try{
            const id : string = param.id
            console.log(id)
            const returnContent = await this.PointsService.getUserPoints(id) 
            res.code(200).send(returnContent)
        } catch (e) {
            console.log(e)
            const jsonReturn = {
                code: 500, 
                message: 'Erro interno no servidor',
                content: e
            }
            res.code(500).send(jsonReturn)
        }
    }
    
    
}
