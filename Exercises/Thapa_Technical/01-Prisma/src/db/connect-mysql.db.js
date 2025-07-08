// import mysql from "mysql2/promise";

// const connectMySQL = async () => {
//   const db = await mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: process.env.MYSQL_PASS,
//     // database: "",
//   });
//   console.log(`\nMySQL connected!!`);
//   //  await db.execute(`create database mysql_db`);
//   // console.log(await db.execute(`show databases`));
// };

// export { connectMySQL };

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
