import { Module} from '@nestjs/common';
import { LoginController } from '../controller/login.controller';
import { LoginService } from '../services/login.service';
import { LoginRepos} from '../repos/login.repos'

@Module({
  controllers: [LoginController],
  providers: [LoginService, LoginRepos]
})
export class LoginModule {}