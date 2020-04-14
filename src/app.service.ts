import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello World! 你好，世界！';
  }

  getNews(): { name: string }[] {
    return [
      { name: '新闻1+1' },
      { name: '焦点访谈' },
      { name: '今日说法' },
      { name: '感动中国' },
      { name: '新闻联播' },
      { name: '朗读者' }
    ];
  }
}
