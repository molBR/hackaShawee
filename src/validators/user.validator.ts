import { registerDecorator, ValidationOptions, ValidationArguments } from "class-validator";
import { UserRepos } from "../repos/user.repos";

const userRepos = new UserRepos()
const documentMessage: ValidationOptions = {message: 'Email $value já cadastrado'};

export function UserExists () {
    return function(object: Object, propertyName: string) {
      registerDecorator({
          name: "UserExists",
          target: object.constructor,
          propertyName: propertyName,
          constraints: [],
          options: documentMessage,
          validator: {
              async validate(email: ValidationArguments) {
                return await userRepos.userExists(email)
              }
          }
      });
    }
  }