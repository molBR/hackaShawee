import { Module} from '@nestjs/common';
import { UserController } from '../controller/user.controller';
import { UserService } from '../services/user.service';
import { UserRepos} from '../repos/user.repos'

@Module({
  controllers: [UserController],
  providers: [UserService, UserRepos]
})
export class UserModule {}