import { Injectable} from '@nestjs/common';
import { Firestore} from '@google-cloud/firestore'
import {Points } from '../entities/points.entity'
@Injectable()
export class PointsRepos { 
  firestore: Firestore
  collection: string
  constructor (){
      this.firestore = new Firestore
      this.collection = 'Points'
  }
  async addPoints(points : Points){
    try{
      const document = this.firestore.collection(this.collection)
      const insertedPoints = await document.add(points)
      return new Promise((resolve) => resolve(insertedPoints))
    } catch (e){
        throw new Error('Erro no banco')
    }
  }
  async getUserPoints(userId : string):  Promise<FirebaseFirestore.QuerySnapshot>{
    try{
      const document = this.firestore.collection(this.collection)
      const insertedPoints = await document.where('userId', '==', userId).get()
      return new Promise((resolve) => resolve(insertedPoints))
    } catch (e){
        throw new Error('Erro no banco')
    }
  }
  
}