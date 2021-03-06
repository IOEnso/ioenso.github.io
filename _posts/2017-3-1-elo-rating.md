---
layout: post
title: Рейтинг Эло
tags:
- javascript
---

Рейтиг Эло - это метод расчёта относительной силы игроков в играх, в которых участвуют двое.
<!--more-->
Сразу обусловимя входными параметрами:
ratingA - рейтинг игрока
ratingB - рейтинг соперника
result - результат игры (относительно игрока A)
0 - победил
1 - проиграл
2 - ничья
noob - новичок (0 нет/1 да)
если игрок сыграл меньше или ровно 30 партий - он является новичком
Также все переменные названы в соответствии с основной формулой.
Расчет рейтинга Эло на PHP
{% highlight php %}
function getRatingElo($ratingA,$ratingB,$result,$noob){
  // $Ea - математическое ожидание
  // $ratingA - рейтинг игрока
  // $ratingB - рейтинг соперника
  $Ea=1/(1+pow(10,($ratingB-$ratingA)/400));
  // $K - коэффициент силы игрока
  ($noob==1 ? $K=30 : ($ratingA<2400 ? $K=15 : $K=10));
  // $Sa - начисление очков в соответствии с результатом
  ($result==0 ? $Sa=1 : ($result==2 ? $Sa=0.5 : $Sa=0));
  // Новый рейтинг
  $resultRatingA = $ratingA + $K * ($Sa - $Ea);
  return round($resultRatingA);
}
{% endhighlight %}
Расчет рейтинга Эло на Node.js
По сути я решил, что раз сервер на nodejs, то путь он и будет считать, но вот не задача, чтобы возвести в степень, надо подключить библиотеку Math. Тогда можно будет использовать функцию Math.pow(x,n). Но я поленился и написал свою функцию.
{% highlight javascript %}
function getRatingElo(ratingA,ratingB,result,noob){
 // Ea - математическое ожидание
 // ratingA - рейтинг игрока
 // ratingB - рейтинг соперника
 var Ea=1/(1+pow(10,(ratingB-ratingA)/400));
 // K - коэффициент силы игрока
 (noob==1 ? K=30 : (ratingA<2400 ? K=15 : K=10));
 // Sa - начисление очков в соответствии с результатом
 (result==0 ? Sa=1 : (result==2 ? Sa=0.5 : Sa=0));
 // Новый рейтинг
 return (ratingA + K * (Sa - Ea)).toFixed();
}
 
// Возведение в степень
function pow(x, n) {
 var result = 1;
 // целые числа
 x=x.toFixed();
 n=n.toFixed();
 // если степень отрицательная
 if (n<0){
 n=-n;
 x=1/x;
 }
 // возведение в степень
 for(var i = 1; i <= n; i++) {
 result *= x;
 }
 return result;
}
{% endhighlight %}
