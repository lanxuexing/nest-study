import { Body, Controller, Get, Post, Render, Res } from '@nestjs/common';
import { Response } from 'express';
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

  @Get('login')
  @Render('login') // 使用模版引擎渲染
  getLogin() {
    return;
  }

  @Post('addUser')
  addUser(@Body() body: {username: string, password: string}, @Res() res: Response) {
    console.log('收到参数: ', '用户名: ', body.username, ' 密码：', body.password);
    res.redirect('news');
  }

}
