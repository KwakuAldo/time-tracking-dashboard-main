fetch("data.json")
    .then(response => response.json())
    .then(data => {
        console.log(data[5].timeframes.daily);
        document.querySelector(".current").innerHTML = data[0].timeframes.daily.current + "hrs";
        document.querySelector(".previous").innerHTML = "Yesterday - " + data[1].timeframes.daily.previous + "hrs";
    })

console.log('loaded script')