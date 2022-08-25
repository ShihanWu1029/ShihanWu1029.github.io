function __gcd(a,b){
    if(Number(b)==0)  return a;
    else return __gcd(Number(b),Number(a%b));
}
function change_txt(){
    window.location.href="../pages/sth-text.html";
}
function change_main(){
    window.location.href="../pages/sth.html";
}
function runTime(y=1970,m=0,d=1,h=0,mm=0,s=0){
    window.setTimeout(function(){runTime(y,m,d,h,mm,s)}, 1000);
    var diff = new Date() - new Date(y,m-1,d,h,mm,s);
    //document.write(diff);
    var days = Math.floor(diff/(24*3600*1000));
    var hours = Math.floor((diff%(24*3600*1000))/(3600*1000));
    var minutes = Math.floor(diff%(3600*1000)/(60*1000));
    var seconds = Math.floor(diff%(60*1000)/1000);
    if(document.getElementById("siteTime"))
     document.getElementById("siteTime").innerHTML=days+"天"+hours+"小时"+minutes+"分"+seconds+"秒";
    else
     document.write('<span id="siteTime">'+days+"天"+hours+"小时"+minutes+"分"+seconds+"秒</span>");
}
console.log("欢迎来到我的博客~~\n你觉得怎么样？？");
runTime(2022,8,25,15,14,0);