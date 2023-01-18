function loadJSON() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            //update the element with title
            document.getElementById("title").innerHTML = data[0].title;

            //update the element with daily current
            document.getElementById("dailyCurrent").innerText = data[0].timeframes.daily.current;

            //update the element with daily previous
            document.getElementById("dailyPrevious").innerText = data[0].timeframes.daily.previous;
        })
        .catch(error => console.error(error))
}

console.log('loaded script')