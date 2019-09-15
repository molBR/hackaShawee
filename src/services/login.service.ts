import { Injectable, NotFoundException, HttpStatus } from '@nestjs/common';
import {LoginRepos} from '../repos/login.repos'

@Injectable()
export class LoginService {
    
    constructor(
        private readonly loginRepos: LoginRepos
    ){}

    async loginUser (body) {
        try{
            let user: FirebaseFirestore.QuerySnapshot
            user = await this.loginRepos
                        .loginUser(body.email, body.password)
            if(user.empty) {
                console.log('nao deu')
                throw new NotFoundException
            } else
            return new Promise((resolve) => resolve(user))
        } catch (e) {
            if(e instanceof NotFoundException)
                throw new NotFoundException
            throw new Error
        }
    }
}
