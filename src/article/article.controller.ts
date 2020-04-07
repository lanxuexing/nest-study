import { Controller, Get } from '@nestjs/common';

@Controller('article')
export class ArticleController {

    @Get()
    getArticleList() {
        return '<h1>这里是文章列表首页</h1>'
    }

    @Get('detail')
    queryDetail() {
        return '<h3>查询文章明细信息</h3>'
    }

}
