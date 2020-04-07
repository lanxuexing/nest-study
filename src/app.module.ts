import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleController } from './article/article.controller';
import { UserController } from './user/user.controller';

@Module({
  imports: [],
  controllers: [AppController, ArticleController, UserController],
  providers: [AppService],
})
export class AppModule {}
