import { Module } from '@nestjs/common';
import {UserModule} from './modules/user.module'
import {LoginModule} from './modules/login.module'
import {RankModule} from './modules/rankInfo.module'

@Module({
  imports: [UserModule, LoginModule, RankModule],
})
export class ApplicationModule {}
