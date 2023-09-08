const express = require("express");
app = express();

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const currentDay = days[new Date().getDay()];

const now = new Date();


const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, "0");
const day = String(now.getDate()).padStart(2, "0");
const hours = String(now.getUTCHours()).padStart(2, "0");
const minutes = String(now.getUTCMinutes()).padStart(2, "0");
const seconds = String(now.getUTCSeconds()).padStart(2, "0");

const utcTime = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;

;



app.get("/api", (request, response) => {
  response.status(200).json({
    slack_name: request.query.slack_name,
    current_day: currentDay,
    utc_time: utcTime,
    track: request.query.track,
    github_file_url:
      "https://github.com/MustaphaAgboola/hngx-task1/blob/main/sever.js",
    github_repo_url: "https://github.com/MustaphaAgboola/hngx-task1",
    status: 200,
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
