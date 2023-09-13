      
let city;
async function clickHandler(){            
            // alert('clicked');
            // alert(document.getElementById('weather').innerText);


    city = document.getElementById('city').value;
           
    if(city === "") return;

            // Fetch the weather details
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=93f26e3c57081a6210de53b8dcfdfea4`;
            // let response = await fetch(url);
            // console.log(response.json());


    await fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error('City not found (404)');
            }
            return response.json();
        })
        .then(displayData)
        .catch((error) => {
            document.getElementById('weather').innerHTML = `<div class="error">${error.message}</div>`;
        });       


            // print to console
            // get needed info and display it in div
        }


    function displayData(data){
        console.log(data);
        console.log(data.main.temp_min)
        let imgurl = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            
        document.getElementById('weather').innerHTML =
             
         `<div class="new-content"><h3> ${city} </h3> 
        MinTemp ${Math.floor(data.main.temp_min-273)}C
        Max Temp ${Math.floor(data.main.temp_max-273)}C
        Wind Speed ${data.wind.speed} kmph <br>
        Weather:  ${data.weather[0].main}
        <img src=${imgurl} alt='weather'/>            
        </div>`;
            
        console.log(imgurl)  

            
            
            
        }
        
    