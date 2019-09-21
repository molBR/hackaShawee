import { Module} from '@nestjs/common';
import { HackaController } from '../controller/hacka.controller';
import { HackaService } from '../services/hacka.service';
import { HackaRepos} from '../repos/hacka.repos'

@Module({
  controllers: [HackaController],
  providers: [HackaService,  HackaRepos]
})
export class HackaModule {}