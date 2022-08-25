function __gcd(a,b){
    if(Number(b)==0)  return a;
    else return __gcd(Number(b),Number(a%b));
}
console.log("欢迎来到我的博客~~\n你觉得怎么样？？");
