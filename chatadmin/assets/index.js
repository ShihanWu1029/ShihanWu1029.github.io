function putnav(a="none",b="none",c="none",d="none",e="none",f="none"){
    document.getElementById("nav-main").innerHTML=`<div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="./index.html">ChatAdmin</a>
  </div>
  <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
          <li class="${String(a)}"><a href="./index.html">主页</a></li>
          <li class="dropdown ${String(c)}">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">管理&查询<span class="caret"></span></a>
              <ul class="dropdown-menu">
                  <li class="${String(d)}"><a href="./user.html">用户</a></li>
                  <li class="${String(e)}"><a href="./grp.html">群组</a></li>
                  <li class="${String(f)}"><a href="./msg.html">消息</a></li>
                  <li role="separator" class="divider"></li>
                  <li><a href="javascript: alert('')" class="dropdown-toggle">导出</a></li>
              </ul>
          </li>
        </ul>
      <ul class="nav navbar-nav navbar-right">
          <li><a onclick="history.back(1)">返回</a></li>
          <li><a href="#" target="_blank">回到前台</a></li>
      </ul>
    </div>
  </div>`
}
document.getElementById("footer").innerHTML=`<center>
<a href="https://github.com/iNeverNobody" class="ft" target="_blank">&copy; iNeverNobody, 2022</a>
</center>
`
function gotomsg(page){
    var i=document.getElementById("inputid");
    window.location.href=`./${page}.html#${String(i.value-2)}`
}
function addNumber(start, end, id, step=1){
  var o = document.getElementById(id);
  var i = start;
  var Interval;
  if(i < end){
      Interval = setInterval(function(){
          i += step; // 设置每次增加的动态数字，可调整
          if(i > end) {
              clearInterval(Interval); // 清除setInterval的time，这个方法w3c可具体查看文档
              o.innerHTML = end.toLocaleString(); // 此赋值是为了避免最后一次增加过后的数据和真实数据不同
              i = 0;
          } else {
              o.innerHTML = i.toLocaleString();
          }
      }, 20); // 数据跳转的速度控制
  }
}