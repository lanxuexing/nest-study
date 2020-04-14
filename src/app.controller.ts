import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {

  constructor(
    private readonly appService: AppService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('front-end')
  @Render('front-end') // 使用模版引擎渲染
  getFrontEnd(): {name: string, age: number} {
    return {name: '萱萱框', age: 18};
  }

  @Get('news')
  @Render('news') // 使用模版引擎渲染
  getNews(): {newsList: { name: string }[]} {
    return {
      newsList: this.appService.getNews()
    };
  }

}
