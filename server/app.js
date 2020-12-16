// 请求数据到做接口获得数据逻辑
// 1.使用axios发送请求（下载axios,配置axios（引入main.js/基础路径:端口号/存入vue原型对象））
// 2.需要数据的页面在js中的mounted阶段进行axios请求，使用get或者post方法设置相对路径，this.axios.get('/category').then(res=>{});
// 3.加载EXPRESS模块->创建服务器->服务器设置监听的端口（与当时配置axios设置的基础路径端口一致）
// 4.使用get或者post方法设置接口
// 5.解决跨域问题，下载cors模块
// 6.为所有HTTP请求使用cors模块，设置路径与页面路径一致
// 7.下载mysql模块->创建连接池
// 8.在接口内写sql语句，获取mysql数据库中的数据




// 1.加载Express模块
const express=require('express');
// 2.创建WEB服务器
const server=express();
// 6.加载CORS模块
const cors=require('cors');


// 9.加载mysql模块
const mysql=require('mysql');
// 10.创建mysql的连接池
const pool=mysql.createPool({
    // 当前数据库服务器的地址
    host:'127.0.0.1',
    // 数据库服务器的端口号
    port:3306,
    // 数据库用户的用户名
    user:'root',
    // 数据库用户的密码
    password:'',
    // 数据库名称
    database:'lc',
    // 最大连接数：
    connectionLimit:15
})


// 7.为所有HTTP请求使用cors模块
server.use(cors({
    origin:['http://127.0.0.1:8080','http://localhost:8080']
}));


// 1.请求顶部分类选项卡数据的接口开始
server.get('/category',(req,res)=>{
    //  11.查询lc_category数据表的全部记录
    let sql='SELECT id,category_name FROM lc_category ORDER BY id';
    // 12.执行SQL查询
    pool.query(sql,(error,results)=>{
        if(error) throw error;
        res.send({code:200,message:'查询成功',results:results});
    })
});
// 请求顶部分类选项卡数据的接口结束

// 2.请求主页第一个面板商品数据开始
server.get('/laptop',(req,res)=>{
    // 测试
    // res.send('ok');
    // 写查询laptop表格的sql语句，其中需要查询到所有数据
    let sql='SELECT * FROM lc_laptop ORDER BY lid';
    // 执行sql语句
    pool.query(sql,(error,results)=>{
      if(error)throw error;
      res.send({code:200,message:'查询成功',results:results});
    }
)
});
// 请求主页第一个面板商品数据结束

// 3.请求主页第二个面板所需数据
server.get('/category_laptop',(req,res)=>{
    // 测试
    // res.send('ok');
    // 声明id保存请求中传来的参数
    let id=req.query.id;
    // 写查询lc_category_laptop表格的sql语句
    let sql='SELECT * FROM lc_category_laptop WHERE category_id=?';
    // 执行sql语句
    pool.query(sql,[id],(error,results)=>{
        if(error)throw error;
        res.send({code:200,message:'查询成功',results:results});
    })
})
// 请求主页第二个面板商品数据结束

// 4.请求详情页数据开始
server.get('/details',(req,res)=>{
    let id=req.query.id;
    // 测试
    // res.send('ok');
    // 将lc_laptop和lc_category_laptop两个表中的lid=lid编号；title=ltitle;subtitle=lsubtitle;detail=ldetail;price=price;img=img
    let sql='SELECT * FROM (SELECT lid AS id,title,subtitle,detail,price,img FROM lc_category_laptop UNION SELECT lid AS id,ltitle AS title,lsubtitle AS subtitle,ldetail AS detail,price,img FROM lc_laptop) AS A WHERE id=?';
    // 执行sql语句
    pool.query(sql,[id],(error,results)=>{
        if(error)throw error;
        res.send({code:200,message:'查询成功',results:results});
    })

})
// 4.请求详情页数据结束







// 8.重新启动app.js

// 4.设置接口：获取所有的文章分类,接口
// server.get('/category',(req,res)=>{
//     //  11.查询xzqa_category数据表的全部记录
//     let sql='SELECT id,category_name FROM xzqa_category ORDER BY id';
//     // 12.执行SQL查询
//     pool.query(sql,(error,results)=>{
//         if(error) throw error;
//         res.send({code:200,message:'查询成功',results:results});
//     })
// });
// 11.设置接口：获取指定分类下包含的文章数据
// server.get('/articles',(req,res)=>{
//     // 获取地址栏的url参数
//    let id=req.query.id;
// //    查找特定分类下包含的文章数据
// let sql='SELECT id,subject,description,image,category_id FROM xzqa_article WHERE category_id=?';
// pool.query(sql,[id],(error,results)=>{
//     if(error) throw error;
//     res.send({code:200,message:"查询成功",results:results});
// })

// })
// 5.启动node.js服务器输入 node app.js

// 3.指定WEB服务器监听的端口
server.listen(3000);
