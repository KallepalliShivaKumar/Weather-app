const oracledb = require("oracledb");

async function connectDB() {

  try {

    const connection = await oracledb.getConnection({

      user: "system",

      password: "oracle",

      connectString: "localhost:1521/XE"

    });

    console.log("Oracle Database Connected");

    return connection;

  } catch (error) {

    console.log(error);

  }
}

module.exports = connectDB;