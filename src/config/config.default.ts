import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1645246000126_9913',
  koa: {
    port: 7001,
  },
  cors: {
    credentials: true,
    origin: 'http://127.0.0.1:3000'
  },
  orm: {
    /**
     * 单数据库实例
     */
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: "db_whh",
    synchronize: true,     // 如果第一次使用，不存在表，有同步的需求可以写 true
    logging: false,
    timezone: '+08:00',
  },
  sequelize:{
    // options: {
    //   database:'db_whh',
    //   username: 'root',
    //   password: 'root',
    //   host:'127.0.0.1',
    //   port: 3306,
    //   encrypt: false,
    //   dialect: 'mysql',
    //   define: { charset: 'utf8' },
    //   timezone: '+08:00',
    //   logging: console.log
    // },
    sync:false,
    hooks:{
      afterConnect(connection: unknown){
        console.log('数据库连接成功')
      }
    }
  }
} as MidwayConfig;
