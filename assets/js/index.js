window.onload=function(){
    console.log("Hello World!");  
    document.getElementById('foot').innerHTML=`<hr><CENTER><a href="https://github.com/iNeverNobody" class="ft" target="_blank">&copy;iNeverNobody ,2021~2022</a><br><a href="https://icp.gov.moe/?keyword=20222133" target="_blank" class="ft">萌ICP备20222133号</a><br><a class="ft" href="">网站已经存在了<span id="timer"></span></a><br><a href="" class="ft" onclick="window.close()">离开</a></CENTER>`;
    startCounting();
    document.getElementById('say').innerHTML=`<center><h1>那些夏天，就像青春一样回不来。<small>--《安和桥》</small></h1></center>`
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