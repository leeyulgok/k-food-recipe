"use strict";
require("dotenv").config();
var mysql = require("mysql2/promise");
// 연결 풀 생성
var pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    charset: process.env.DB_CHARSET,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});
module.exports = pool;
