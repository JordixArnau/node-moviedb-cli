const https = require("https");
const render = require("./person_render");
const ora = require("ora");
const fs = require("fs");
require("dotenv/config");

exports.httpRequest = function (endPoint, option1 = "", option2 = "") {
  https
    .get(
      `https://api.themoviedb.org/3/${endPoint}?api_key=${process.env.API_KEY}&${option1}&${option2}`,
      (response) => {
        let result = "";

        response.on("data", (c) => {
          result += c;
        });

        response.on("end", () => {
          const data = JSON.parse(result);

          if (endPoint.startsWith("person/") && endPoint!=="person/popular") {
            render.person(data);
            ora("Person data loaded").succeed();
          return;
          }
        });
      }
    )
    .on("error", (err) => {
      ora.fails(err.message);
    })
    .end();
};