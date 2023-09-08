const express = require("express");
const formatUtcTime = require('./date')
app = express();

// const utcTime = new Date(Date.now())


console.log(utcTime);
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

app.get("/api", (request, response) => {
  response.status(200).json({
    slack_name: request.query.slack_name,
    current_day: currentDay,
    utc_time: formatUtcTime(),
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
