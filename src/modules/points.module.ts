import { Module} from '@nestjs/common';
import { PointsController } from '../controller/points.controller';
import { PointsService } from '../services/points.service';
import { PointsRepos} from '../repos/points.repos'
import { UserRepos } from '../repos/user.repos';
import { HackaRepos } from '../repos/hacka.repos';

@Module({
  imports: [],
  controllers: [PointsController],
  providers: [PointsService, PointsRepos,UserRepos, HackaRepos]
})
export class PointsModule {}