import { Injectable, NotFoundException, HttpStatus } from '@nestjs/common';
import {UserRepos} from '../repos/user.repos'

@Injectable()
export class UserService {
    
    constructor(
        private readonly userRepos: UserRepos
    ){}

    async insertUser (body) {
        try{
            return await this.userRepos.addUser(body)
        } catch (e) {

        }
    }
}
