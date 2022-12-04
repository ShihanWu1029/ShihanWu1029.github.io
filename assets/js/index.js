window.onload=function(){
    console.log("Hello World!");  
}
function startEndTime(currentTime){
    let day = Math.floor(new Date().getTime() / 1e3) - (new Date(currentTime).getTime() / 1e3),
    day2 = Math.floor(day / (24 * 3600)),
    day3 = day2 * 24 * 3600,
    day4 = day - day3,
    day5 = Math.floor(day4 / 3600),
    day6 = day4 - day5 * 3600,
    day7 = Math.floor(day6 / 60),
    day8 = day6 - day7 * 60;
    return `${day2} 天 ${day5} 小时 ${day7} 分钟 ${day8} 秒`;
}
 
function startCounting(){
    document.getElementById("timer").innerHTML = startEndTime('2022-08-24 00:00:00');
    setTimeout("startCounting()",500);
}
startCounting();
