---
layout: draft
title: Текст с переходом (появление/исчезновение)
tags: html, css
---
Сегодня ночью в 00:36 (Чита) мне понадобилось написать код для небольшого плана, основная идея в том чтобы текст и содержимое объектов на странице менялось.
Подумывая о чистом css я принял решение что мне это не нравится т.к. возможностей будет больше если использовать javascript.
И так, приступим!

Начнём с HTML (мы будем использовать 2 элемента, 1-й основной (div.wrapper) где будет меняться :
{% highlight html %}
<div class="wrapper">
    <div class="text-block">Кисонька</div>
    <div class="text-block"><img src="http://malsup.github.com/images/beach2.jpg" alt="" /></div>
    <div class="text-block"><img src="http://malsup.github.com/images/beach3.jpg" alt="" /></div>
</div>
