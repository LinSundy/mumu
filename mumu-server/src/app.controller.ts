import { Get, Controller } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('home')
  root(): string {
    return this.appService.root();
  }

  @Get('all')
  findAll(): string[] {
    return ['1']
  }
}
