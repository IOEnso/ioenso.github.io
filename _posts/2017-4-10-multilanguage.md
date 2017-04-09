---
layout: post
title: Мультиязычность (Javascript)
tags: javascript, ucoz
---
Допустим нам нужен мультиязычный сайт, а сам сайт лежит на хостинге без php, статичный или ещё лучше создан на конструкторе ucoz.
То в этом случае мы не имеем встроенного модуля. Есть один из способов, не самый лучший, но всё же.
<!--more-->
Перейдем к делу:
* Напишем основной скрипт и назовем файл (mtLng.js) (показываем часть с одним языком и скрываем другую часть):
{% highlight javascript %}
function mTsetLang(e) {
  var t=e["mainLang"];
  var n=e["LangCookieName"];
  if(!getCookie(n)){setCookie(n,t,365)
}
  var r="lang-"+getCookie(n);
  $("head").append('<style type="text/css">[class^="lang-"] {display:none;} .'+r+"{display:inline!important;}</style>");
  $(document).ready(function() {
    $(".mTsetLang").click(function() {
      var e=$(this).attr("setlang");
      setCookie(n,e,365);
      window.location.reload()});
      $(".mTsetLang").each(function(e,t) {
        var n=$(this).attr("setlang");
        if("lang-"+n!=r){$(".lang-"+n).remove()}})})}
{% endhighlight %}
> для установки начального языка используем скрипт в
{% highlight html %}
    <script language="javascript"> 
    mTsetLang({ 
    mainLang:'rus',
    LangCookieName:'SiteLanguage'
    }) </script>
{% endhighlight %}
* Пишем куки с выбранным языком и назовем файл (cookieJar.js):
{% highlight javascript %}
function setCookie(name, value, days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		var expires = "; expires=" + date.toGMTString();
	}
	else var expires = "";
	document.cookie = name + "=" + value + expires + "; path=/";
}
function getCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}
function eraseCookie(name) {
	setCookie(name, "", -1);
}
{% endhighlight %}
* А теперь создадим файл для проверки (назвать можно по усмотрению, но я назову test.html):
{% highlight html %}
<!DOCTYPE html>
<html>
  <head>
    <script src="http://code.jquery.com/jquery-latest.min.js"></script>  
    <script src="cookieJar.js"></script> 
    <script src="mtLng.js"></script>  
    <script language="javascript"> 
    mTsetLang({ 
    mainLang:'rus',
    LangCookieName:'SiteLanguage'
    }) </script>
    <meta charset="UTF-8">
    <title>Мультязычность на Javascript</title>
    <style>
        body {
            background: #333;
            margin-top: 20px;
        }
        .wrapper {
            font-family: "Segoe UI", "sans-serif";
            width: 550px;
            margin: 0 auto;
        }
        h1 {
            font-weight: normal;
            font-size: 24px;
            margin: 0;
            padding: 0;
            color: #fff;
        }
        header {
            padding: 10px;
        }
        section {
            padding: 15px;
            font-size: 14px;
            background: #fff;
            border-radius: 5px;
            display: block;
        }
        .block-l {  
        }  
        .block-l a {color: #fff;text-decoration: none;}
    </style>
  </head>
  <body>
    <div class="wrapper">
    <header>
    <h1>Мультиязычность</h1>
    <span class="block-l">
      <a href="#rus"><span class="mTsetLang" setlang="rus">Русский</span></a>   
      <a href="#eng"><span class="mTsetLang" setlang="eng">English</span></a>
    </span>
    </header>
    <section>
    <p>
      <span class="lang-rus">
      Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).
      </span>
      <span class="lang-eng">
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
      </span>
    </p>
    </section>
    </div>
  </body>
</html>

{% endhighlight %}

Для добавления языка сайта нам нужно лишь добавить ссылку вида (пример с испанским языком):
{% highlight html %}
<a href="#spa"><span class="mTsetLang" setlang="spa">Испанский</span></a>
{% endhighlight %}
А материал на испанском добавляем под тегом:
{% highlight html %}
<span class="lang-spa">
Далее текст на испанском или на языке который вы установили
</span>
{% endhighlight %}
