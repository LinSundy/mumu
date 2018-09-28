import { Get, Controller } from '@nestjs/common';
import { AppService } from './app.service';
import {CatsService} from "./cats/cats.service";
import {CatsDto} from "./cats/cats.dto";

@Controller('self')
export class AppController {
  private readonly appService: AppService;
  private readonly catsService: CatsService;
  constructor(appService: AppService, catsService: CatsService) {
    this.appService = appService;
    this.catsService = catsService;
  }

  @Get('home')
  root(): string {
    return this.appService.root();
  }

  @Get('all')
  findAll(): string[] {
    return ['1']
  }

  @Get('cats')
  findAllCats(): CatsDto[]{
    return this.catsService.findAll()
  }
}
