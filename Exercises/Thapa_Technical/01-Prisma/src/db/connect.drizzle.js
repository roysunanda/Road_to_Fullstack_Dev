import { drizzle } from "drizzle-orm/mysql2";

const db_mysql = drizzle(process.env.SQL_URL);

const connectDrizzle = async () => {
  try {
  } catch (error) {
    console.log(`\nMySQL connection failed!! \nError: ${error}`);
    process.exit(1);
  }
};
