const express = require("express");

const cors = require("cors");

const connectDB = require("./db");

const app = express();

app.use(cors());

app.get("/weather", async (req, res) => {

  try {

    const connection = await connectDB();

    const city = req.query.city;

    const temperature = req.query.temperature;

    const condition = req.query.condition;

    await connection.execute(

      `INSERT INTO weather_history
       (city, temperature, condition)
       VALUES
       (:city, :temperature, :condition)`,

      {
        city,
        temperature,
        condition
      },

      { autoCommit: true }

    );

    res.json({
      message: "Weather saved successfully"
    });

  } catch (error) {

    console.log(error);

  }

});

app.listen(3001, () => {

  console.log("Server running on port 3001");

});