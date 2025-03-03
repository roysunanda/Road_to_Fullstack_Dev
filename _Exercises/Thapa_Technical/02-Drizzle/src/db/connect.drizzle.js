import { drizzle } from "drizzle-orm/mysql2";
import { usersTable } from "../../drizzle/schema.drizzle.js";

const db_mysql = drizzle(process.env.SQL_URL);

const drizzle_db = async () => {
  try {
    const insertUser = await db_mysql.insert(usersTable).values([
      {
        name: "bishal",
        age: "28",
        email: "bishal@email.com",
      },
      {
        name: "rupam",
        age: "30",
        email: "rupam@email.com",
      },
      {
        name: "suman",
        age: "30",
        email: "suman@email.com",
      },
    ]);
    console.log(insertUser);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export { drizzle_db };
