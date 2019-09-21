import { Injectable, NotFoundException, HttpStatus } from '@nestjs/common';
import {HackaRepos} from '../repos/hacka.repos'

@Injectable()
export class HackaService {
    
    constructor(
        private readonly hackaRepos: HackaRepos
    ){}

    async insertHacka (body) {
        try{
            console.log('service', body)
            return await this.hackaRepos.addHacka(body)
        } catch (e) {

        }
    }
}
