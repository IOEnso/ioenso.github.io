---
layout: post
title: Скрипт для бюджетного блога
tags:
- javascript
---

Недавно пришла идея создать скрипт вывода постов для бюджетного блога (статичного до ужаса), а мысль такая пришла как обычно ночью. 
Суть этого скрипта заключается в том чтобы облегчить задачу в создании статичных сайтов.
<!--more-->
Я использовал библиотеку JQuery чтобы намного упростить код (меньше кода - меньше головной боли).
Для начала нам нужно достать переменные из url, а для этого используем этот скрипт:
{% highlight.javascript %}
//Прощупаем и разберем параметры url
function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value;
	});
	return vars;
}
var postId = getUrlVars()["id"]; //Создаем переменную postiD (название поста) из параметра ID
{% endhighlight %}
Далее нам нужно с помощью JQuery взять содержимое из файла (название мы взяли раннее теперь это переменная postId) и вклеить всё в div #postContent
{% highlight.javascript %}
$(document).ready(function(){
	$('#postContent').load('http://ваш_сайт/'+postId+'.txt'); //путь к файлу указывается полностью
});
{% endhighlight %}
Вот и все, при вводе в адресную строку ссылку вида http://ваш_сайт/?id=test браузер достанет содержимое файла http://ваш_сайт/test.txt и вклеит всё в div #postContent 

Для тех кто ленив вклеивать всё по местам:
{% highlight.html %}
<!DOCTYPE HTML>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <script>
    function getUrlVars() {
	     var vars = {};
       var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
  		 vars[key] = value;
  	   });
	    return vars;
    }
    </script>
    <title>Наш бюджетный блог</title>
</head>
<body>
      <script>
      $(document).ready(function(){
        $('#postContent').load('http://ваш_сайт/'+postId+'.txt');
      });
      </script>
      <div id="postContent"></div>
</body>
</html>
{% endhighlight %}
