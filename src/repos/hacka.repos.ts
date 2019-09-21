import {Injectable} from '@nestjs/common'
import {Firestore} from '@google-cloud/firestore'

@Injectable()
export class HackaRepos {
  firestore: Firestore
  collection: string
  constructor (){
      this.firestore = new Firestore
      this.collection = 'Hacka'
  }
  async addHacka(hacka)
  {
    try{
      const document = this.firestore.collection(this.collection)
      const insertedHacka = await document.add(hacka)
      console.log('repos',insertedHacka)
      return new Promise((resolve) => resolve(insertedHacka))
     
    } catch(e) {
        throw new Error('erro')
    }
  }
  async getByHackaId(id : string) :  Promise<FirebaseFirestore.DocumentSnapshot> { 
    return await this.firestore.collection(this.collection).doc(id).get()
  }

}