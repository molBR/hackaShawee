import { Injectable} from '@nestjs/common';
import { Firestore} from '@google-cloud/firestore'

@Injectable()
export class LoginRepos { 
  firestore: Firestore
  collection: string
  constructor (){
      this.firestore = new Firestore
      this.collection = 'User'
  }
  async loginUser(email, password) : Promise<FirebaseFirestore.QuerySnapshot>{
    try{
        const userRef = this.firestore.collection(this.collection)
                        .where('email', '==', email)
                        .where('password', '==', password)
        const user = await userRef.get()
        return new Promise((resolve) => resolve(user))
    } catch (e){
        throw new Error('Erro no banco')

    }
  }

 
}