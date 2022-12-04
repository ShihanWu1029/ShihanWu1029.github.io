document.getElementById("nav").innerHTML = `
<nav class="navbar navbar-default" role="navigation">
<div class="container-fluid">
<div class="navbar-header">
    <a class="navbar-brand" href="../../../index.html">Blog</a>
</div>
<div>
    <ul class="nav navbar-nav">
        <li class=""><a href="../../../index.html">首页</a></li>
        <li class=""><a href="../about.html">关于</a></li>
        <li class="dropdown active">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                亿点东西
                <b class="caret"></b>
            </a>
            <ul class="dropdown-menu">
                <li><a href="./index.html">主页</a></li>
                <li class="active"><a href="./text.html">文章</a></li>
                <li><a href="./interesting.html">有趣的东西</a></li>
                <li class="divider"></li>
                <li><a href="#" onclick="JavaScript:alert('没做好呢')">下载</a></li>
                <li class="divider"></li>
                <li><a href="#" onclick="JavaScript:history.back(1);">返回</a></li>
            </ul>
        </li>
        <form class="navbar-form navbar-left" role="search">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Search">
            </div>
            <button type="submit" class="btn btn-default">提交</button>
        </form>
    </ul>
</div>
</div>
</nav>

`