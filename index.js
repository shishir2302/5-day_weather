
function getInfo() {
	
	const city= document.getElementById('city')
	const cityName = document.getElementById('cityName')
	cityName.innerHTML = "--"+city.value+"--"


fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${+city.value}&appid=eb878164262b8f9b6aa4759fd73fec4e`)
.then(response => response.json())
.then(data =>{
	// console.log(response)
	for(let i=0;i<5;i++){
		document.getElementById('day' +(i+1)+ 'Min').innerHTML = "Min:" + Number(data.list[i].main.temp_min - 284.46).toFixed(1) + "°";
	}
	for(i=0;i<5;i++){
		document.getElementById('day' +(i+1)+ 'Max').innerHTML = "Max:" + Number(data.list[i].main.temp_max - 284.46).toFixed(1) + "°";
	}
	console.log(data)
})

.catch(err => console.log("something is wrong"))
}


function DefaultScreen(){
    document.getElementById("city").defaultValue = "london";
    getInfo();
}




const d= new Date()
const weekdays=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

function checkDay(day){
	if(day + d.getDay() > 6){
		return day + d.getDay() - 7;
	}
	else{
		return day + d.getDay();
	}
}

for(let i=0; i<5; i++){
	document.getElementById("day"+(i+1)).innerHTML = weekdays[checkDay(i)]
}