fetch("data.json")
    .then(response => response.json())
    .then(data => {
        data.forEach(activity => {
            const title = document.querySelector(`#${activity.title}.title`);
            title.innerHTML = activity.title;
            const dailyCurrent = document.querySelector(`#${activity.title}.daily.current`)
            // select the element with the previous daily hours of the current activity
            const dailyPrevious = document.querySelector(`#${activity.title} .daily .previous`);
            // update the innerHTML of the dailyPrevious element with the previous daily hours of the current activity
            dailyPrevious.innerHTML = activity.timeframes.daily.previous;

            // repeat the above steps for the weekly and monthly timeframes
            const weeklyCurrent = document.querySelector(`#${activity.title} .weekly .current`);
            weeklyCurrent.innerHTML = activity.timeframes.weekly.current;
            const weeklyPrevious = document.querySelector(`#${activity.title} .weekly .previous`);
            weeklyPrevious.innerHTML = activity.timeframes.weekly.previous;

            const monthlyCurrent = document.querySelector(`#${activity.title} .monthly .current`);
            monthlyCurrent.innerHTML = activity.timeframes.monthly.current;
            const monthlyPrevious = document.querySelector(`#${activity.title} .monthly .previous`);
        })
    })

// fetch("data.json")
//     .then(response => response.json())
//     .then(data => {
//         window.data = data
//         // console.log(data[5].timeframes.daily);
//         // document.querySelector(".current").innerHTML = data[0].timeframes.daily.current + "hrs";
//         // document.querySelector(".previous").innerHTML = "Yesterday - " + data[1].timeframes.daily.previous + "hrs";
//     })

//     .catch(error => console.error(error))

//     const dailyBtn = document.getElementById("daily")
//     const weeklyBtn = document.getElementById("weekly")
//     const monthlyBtn = document.getElementById("monthly")

//     dailyBtn.addEventListener("click", () => {
//         for (let i = 0; i < data.length; i++) {
//             document.querySelectorAll("current" + i).innerHTML = data[i].timeframes.daily.current;
//             document.querySelectorAll("previous" + i).innerHTML = data[i].timeframes.daily.previous;
//     }
//     console.log("dailyBtn clicked");
// })

// weeklyBtn.addEventListener("click", () => {
//     for (let i = 0; i < data.length; i++) {
//         document.querySelectorAll("current" + i).innerHTML = data[i].timeframes.weekly.current;
//         document.querySelectorAll("previous" + i).innerHTML = data[i].timeframes.weekly.previous;
//     }
//     console.log("weeklyBtn clicked");
// })

console.log('loaded script')