let APIkey = '36219d4f5f4653985dad50781b885e98'
window.addEventListener('DOMContentLoaded', function () {

    let form = document.querySelector('form')
   

    form.addEventListener('submit', function (evt) {
        evt.preventDefault()
        let cityName = document.querySelector('input').value
        // console.log(cityName)

        fetch(` http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${APIkey}`)
            .then(response => response.json())
            .then(data => {
                let city_Name = document.querySelector('.city-name')
                // let lat = data.0.lat
                let lon = data.lon
                // city_Name.innerHTML = `${data.}`
                console.log(data)
                console.log(data[0][0])
                console.log(lon)
                // fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${data.lat}&lon=${data.lon}&appid=${APIkey}`)
                //     .then(response => response.json())
                //     .then(current => {
                //         let weather = current.results
                //         console.log(weather)
                //         let temperature = document.querySelector('.temperature')
                //         console.log(temperature)
                //     })

            })












    })




})




























//