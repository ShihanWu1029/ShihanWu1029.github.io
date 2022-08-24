function __gcd(a,b){
    if(Number(b)==0)  return a;
    else return __gcd(Number(b),Number(a%b));
}