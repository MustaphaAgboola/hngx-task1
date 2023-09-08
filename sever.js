const express = require('express');
app = express();

const days = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const currentDay = days[new Date().getDay()];

app.get('/api', (request, response)=>{
    console.log(request.query)
   
     response.json({
        slack_name: request.query.name,
        current_day: currentDay,
        utc_time: new Date(),
        track: request.query.track,
        github_file_url: '',
        github_repo_url: '',
        status: 200
    })
})


let PORT = 3000

app.listen(PORT, ()=>{
    console.log(`App is listening on port ${PORT}`);
})
