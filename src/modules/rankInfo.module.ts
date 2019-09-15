import { Module} from '@nestjs/common';
import { RankController } from '../controller/rank.controller';

@Module({
  controllers: [RankController]
})
export class RankModule {}