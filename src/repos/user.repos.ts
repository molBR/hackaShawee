import { Injectable} from '@nestjs/common';
import { Firestore} from '@google-cloud/firestore'

@Injectable()
export class UserRepos { 
  firestore: Firestore
  collection: string
  constructor (){
      this.firestore = new Firestore
      this.collection = 'User'
  }
  async addUser(user){
    try{
      const document = this.firestore.collection(this.collection)
      const insertedUser = await document.add(user)
      return new Promise((resolve) => resolve(insertedUser))
    } catch (e){
        throw new Error('Erro no banco')

    }
  }

  async getByUserId(id : string) :  Promise<FirebaseFirestore.DocumentSnapshot> { 
    return await this.firestore.collection(this.collection).doc(id).get()
  }

  async userExists(email) {
    const userRef = this.firestore.collection(this.collection).where('email', '==', email)
    const user = await userRef.get()
    return user.empty
  }
}