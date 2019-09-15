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
import { Login } from '../entities/login.entity'
import { ApiUseTags, ApiResponse } from '@nestjs/swagger'
import {LoginService} from '../services/login.service'


@ApiUseTags('Login')
@Controller('login')
export class LoginController {
    constructor (
        private readonly loginService: LoginService
        ){}

        
    @Post()
    @ApiResponse({status: 201, description: 'Usuário criado com sucesso'})
    @ApiResponse({status: 400, description: 'Dados inválidos'})
    @ApiResponse({status: 405, description: 'email ja cadastrado'})
    async insertUser(@Body() login: Login, @Res() res){
        try{
            const returnContent = await this.loginService.loginUser(login)
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
