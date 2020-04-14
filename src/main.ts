import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // 配置静态资源和虚拟路径
  app.useStaticAssets(join(__dirname, '..', 'src/public/assets'), {
    prefix: '/static/'
  });
  // 配置模版引擎
  app.setBaseViewsDir(join(__dirname, '..', 'src/public/views'));
  app.setViewEngine('ejs');
  await app.listen(3000);
}
bootstrap();
