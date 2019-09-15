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
import { User } from '../entities/user.entity'
import { ApiUseTags, ApiResponse } from '@nestjs/swagger'
import {UserService} from '../services/user.service'


@ApiUseTags('User')
@Controller('User')
export class UserController {
    constructor (
        private readonly userService: UserService
        ){}

        
    @Post()
    @ApiResponse({status: 201, description: 'Usuário criado com sucesso'})
    @ApiResponse({status: 400, description: 'Dados inválidos'})
    @ApiResponse({status: 405, description: 'email ja cadastrado'})
    async insertUser(@Body() user: User, @Res() res){
        try{
            const returnContent = await this.userService.insertUser(user)
            res.code(201).send(returnContent)
        } catch (e) {
            const jsonReturn = {
                code: 500, 
                message: 'Erro interno no servidor',
                content: e
            }
            res.code(500).send(jsonReturn)
        }
    } 
}
