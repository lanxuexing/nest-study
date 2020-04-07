import { Controller, Get, Query, Request, Post, Body, Param } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get()
    index() {
        return '<h1>用户中心！</h1>'
    }

    // GET请求
    @Get('query')
    queryUser(@Query() query, @Request() req) {
        console.log('得到Query参数: ', query);
        console.log('得到Request参数: ', req);
        return `<div>
                    <p>${JSON.stringify(query)}</p>
                    <p>${JSON.stringify(req.route)}</p>
               </div>`;
    }

    // 精确GET QUERY可选参数
    @Get('select')
    selectUser(@Query('id') id) {
        console.log('得到Query参数: ', id);
        return `<h1>${id}</h1>`;
    }

    // 模糊查询
    @Get('fuzzy*query')
    fuzzy(@Query() query) {
        console.log('得到模糊查询Query参数: ', query);
        return `<h1>${JSON.stringify(query)}</h1>`;
    }

    // POST请求
    @Post('add')
    addUser(@Body() body) {
        console.log('POST请求参数: ', body);
        return '<h1>添加用户！</h1>'
    }

    // 动态路由
    @Get(':id')
    dynamicRouter(@Param() param) {
        console.log('动态路由: ', param);
        return `<h1>${JSON.stringify(param)}</h1>`
    }

}
