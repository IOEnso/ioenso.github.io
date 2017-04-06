---
layout: post
title: Шаблонизация с Javascript
date:  2017-04-06 16:30:04 +0600
tags: 
- javascript
- полезное
---

Есть одна утилита, довольно полезная при построении javascript-приложений. 
Это - простая и очень быстрая функция для шаблонизации на клиенте. Она предложена Джоном Ресигом.
<!--more-->
Очень приятно применять её в качестве постраничной навигации и для небольших шаблонов в AJAX-приложениях с подгрузкой данных с сервера.
Вот исходный код функции шаблонизатора:
{% highlight javascript %}
(function(){
  var cache = {};
 
  this.tmpl = function tmpl(str, data){
    // Выяснить, мы получаем шаблон или нам нужно его загрузить
    // обязательно закешировать результат
    var fn = !/\W/.test(str) ?
      cache[str] = cache[str] ||
        tmpl(document.getElementById(str).innerHTML) :
     
      // Сгенерировать (и закешировать) функцию, 
      // которая будет служить генератором шаблонов
      new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +
       
        // Сделать данные доступными локально при помощи with(){}
        "with(obj){p.push('" +
       
        // Превратить шаблон в чистый JavaScript
        str
          .replace(/[\r\t\n]/g, " ")
          .split("<%").join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)%>/g, "',$1,'")
          .split("\t").join("');")
          .split("%>").join("p.push('")
          .split("\r").join("\\'") + "');}return p.join('');");
   
    // простейший карринг(термин функ. прог. - прим. пер.)
    // для пользователя
    return data ? fn( data ) : fn;
  };
})();
{% endhighlight %}
Её можно использовать с шаблонами, написанными в таком виде (не обязательно точно в таком, но этот стиль приятен):
{% highlight javascript %}
<script type="text/html" id="item_tmpl">
  <div id="<%=id%>" class="<%=(i % 2 == 1 ? " even" : "")%>">
    <div class="grid_1 alpha right">
      <img class="righted" src="<%=profile_image_url%>"/>
    </div>
    <div class="grid_6 omega contents">
      <p><b><a href="/<%=from_user%>"><%=from_user%></a>:</b> <%=text%></p>
    </div>
  </div>
</script>
{% endhighlight %}
<blockquote>
Скрипты с неизвестным типом содержания type (как в примере выше - браузер не знает что делать с text/html-скриптом) просто игнорируются браузерами и поисковиками.
Это замечательный способ незаметной вставки шаблонов в страницу. Мне нравится такая техника для случаев, когда нужно быстро вставить один-другой небольшой шаблон.
</blockquote>
А вызов шаблонки из скрипта - примерно такой:
{% highlight javascript %}
var results = document.getElementById("results");
results.innerHTML = tmpl("item_tmpl", dataObject);
{% endhighlight %}
Вы можете прекомпилировать результат для дальнейшего использования. Если Вы вызываете функцию-шаблонизатор только с ID(или кодом шаблона) - она вернет прекомпилированную функцию, которую Вы можете запускать, когда угодно:
{% highlight javascript %}
var show_user = tmpl("item_tmpl"), html = "";
for ( var i = 0; i < users.length; i++ ) {
  html += show_user( users[i] );
}
{% endhighlight %}
Самая большая проблема этого метода, на текущий момент - это код парсинга/конвертации. Он использует много регулярных выражений и его можно улучшить.

Однако, он использует одну технику, которая мне очень нравится - а именно: если Вы делаете поиск-и-замену фиксированных подстрок, то быстрее всех с этим справляется .split("match").join("replace").

Это неочевидно, но так оно работает быстрее всего в большинстве современных браузеров.

Основной материал: http://ejohn.org/blog/javascript-micro-templating/
