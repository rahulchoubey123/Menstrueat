const express = require("express");
const router = express.Router();
const config = require("./config");
const sql = require("mssql");

router.use(function (req, res, next) {
  try {
    decodeURIComponent(req.path);
    next();
  } catch (err) {
    res.status(400).json({
      Response: {
        Status: 400,
        Message: "Failed to load the data",
        Bacode: req.path,
      },
    });
  }
});

router.get('/diet/:stage/:time', function (req, res) {
  const stage = req.params.stage;
  const time = req.params.time;

  console.log(stage);
  console.log(time)

  const sqlConfig = {
    user: config.development.connection.user,
    password: config.development.connection.password,
    server: config.development.connection.server,
    database: config.development.connection.database,
    port: parseInt(config.development.connection.options.port),
    encrypt: config.development.connection.options.encrypt,
  };

  sql.connect(sqlConfig, function (err) {
    if (err) {
      console.error("Error connecting to SQL Server", err);
      return res.status(500).json({
        Status: 500,
        Message: "Error connecting to the database",
        Error: err.message,
      });
    }

    var request = new sql.Request();
    var stringRequest = `use menstrueat; select FoodItem from MST_Diet where Stage='${stage}' and TimeOfDay='${time}'`;

    request.query(stringRequest, function (err, recordsets) {
      if (err) {
        console.error("Error executing the query", err);
        return res.status(500).json({
          Status: 500,
          Message: "Error executing the query",
          Error: err.message,
        });
      }

      if (recordsets.recordset.length === 0) {
        return res.status(404).json({
          Status: 404,
          Message: "No location found with the given plant",
        });
      }

      const locationData = recordsets.recordset;
      console.log(locationData);
      sql.close(); 
      return res.status(200).json(locationData);
    });
  });
});

module.exports = router;
