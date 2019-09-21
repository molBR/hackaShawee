import { Module } from '@nestjs/common';
import {UserModule} from './modules/user.module'
import {LoginModule} from './modules/login.module'
import {RankModule} from './modules/rankInfo.module'
import { HackaModule } from './modules/hacka.module';
import { PointsModule} from './modules/points.module'
@Module({
  imports: [UserModule,
     LoginModule,
      RankModule,
       HackaModule,
        PointsModule],
})
export class ApplicationModule {}
