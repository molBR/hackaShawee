import { Injectable, NotFoundException, HttpStatus } from '@nestjs/common';
import {PointsRepos} from '../repos/points.repos'
import {HackaRepos} from '../repos/hacka.repos'
import {UserRepos} from '../repos/user.repos'
import {Points} from '../entities/points.entity'

@Injectable()
export class PointsService {
    
    constructor(
        private readonly pointsRepos: PointsRepos,
        private readonly hackaRepos: HackaRepos,
        private readonly userRepos: UserRepos
    ){}

    async insertPoints (body : Points) {
        try{
            const checkHacka : FirebaseFirestore.DocumentSnapshot 
             = await this.hackaRepos.getByHackaId(body.hackaId)
            const checkUser : FirebaseFirestore.DocumentSnapshot
             = await this.userRepos.getByUserId(body.userId)
            if(!checkHacka.exists || !checkUser.exists)
                return new Promise(resolve => {resolve(new NotFoundException)})
            return new Promise(async(resolve) => {resolve( await this.pointsRepos.addPoints(body))})
        } catch (e) {
            return new Promise(resolve => {new Error})
        }
    }

    async getUserPoints (userId : string) {
        try{
            const points :  FirebaseFirestore.QuerySnapshot = await this.pointsRepos.getUserPoints(userId)
            if(points.empty)
                return new NotFoundException
            let totalPoints : Number = 0
            points.forEach(p => {
                const data = p.data()
                console.log(data)
                totalPoints = totalPoints + data.points
            });
            return new Promise(async(resolve) => {resolve( totalPoints)})
        } catch (e) {
            return new Promise(resolve => {new Error})
        }
    }
}
