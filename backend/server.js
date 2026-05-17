const express = require("express");

const cors = require("cors");

const connectDB = require("./db");

const ExcelJS = require("exceljs");

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

app.get("/history", async (req, res) => {

  try {

    const connection = await connectDB();

    const result = await connection.execute(

      `SELECT
         id,
         city,
         temperature,
         condition
       FROM weather_history
       ORDER BY id`

    );

    res.json(result.rows);

  } catch (error) {

    console.log(error);

  }

});

app.get("/export-excel", async (req, res) => {

  try {

    const connection = await connectDB();

    const result = await connection.execute(

      `SELECT
         id,
         city,
         temperature,
         condition
       FROM weather_history
       ORDER BY id`

    );

    const workbook = new ExcelJS.Workbook();

    const worksheet = workbook.addWorksheet("Weather History");

    worksheet.columns = [

      { header: "ID", key: "id", width: 10 },

      { header: "City", key: "city", width: 20 },

      { header: "Temperature", key: "temperature", width: 15 },

      { header: "Condition", key: "condition", width: 20 }

    ];

    result.rows.forEach((row) => {

      worksheet.addRow({

        id: row[0],

        city: row[1],

        temperature: row[2],

        condition: row[3]

      });

    });

    await workbook.xlsx.writeFile("weather-history.xlsx");

    res.json({

      message: "Excel file created successfully"

    });

  } catch (error) {

    console.log(error);

  }

});

app.listen(3001, () => {

  console.log("Server running on port 3001");

});