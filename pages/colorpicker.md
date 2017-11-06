---
layout: page
title: Палитра цветов а-ля Google
---
    <script src="/assets/js/jquery.min.js"></script>
    <script src="/assets/js/jquery-ui.min.js"></script>
    <script src="/assets/js/material.min.js"></script>
    <div class="pickshell">
      <div class="picker" data-hsv="180,60,78">
        <div class="icon change">
          <div class="inputContainer"><i class="material-icons">edit</i>
            <input class="change" type="text" name="change" value="" style="z-index: 12345; text-transform: uppercase"/>
          </div>
          <div class="inputContainerRGB"><i class="material-icons" style="margin-top: 15px">edit</i>
            <input class="changeRGB" type="text" name="change" value="" style="z-index: 12345; margin-top: 15px"/>
          </div>
        </div>
        <div class="selector_color">
          <div class="board">
            <div class="choice"></div>
          </div>
          <div class="rainbow"></div>
        </div>
      </div>
      <div id="allColorCodes">
        <div class="secondaryBar barCollapsedDiv collapsedTransition collapsedBar">
          <div class="cell left-cell">HEX</div>
          <div class="cell right-cell" id="mainHEX">code</div>
        </div>
        <div class="secondaryBar barCollapsedDiv collapsedTransition collapsedBar">
          <div class="cell left-cell">RGB</div>
          <div class="cell right-cell" id="mainRGB">code</div>
        </div>
        <div class="secondaryBar barCollapsedDiv collapsedTransition collapsedBar">
          <div class="cell left-cell">HSV</div>
          <div class="cell right-cell" id="mainHSV">code</div>
        </div>
        <div class="secondaryBar barCollapsedDiv collapsedTransition collapsedBar">
          <div class="cell left-cell">HSL</div>
          <div class="cell right-cell" id="mainHSL">В разработке!</div>
        </div>
        <div class="secondaryBar barCollapsedDiv collapsedTransition collapsedBar">
          <div class="cell left-cell">CMYK</div>
          <div class="cell right-cell" id="mainCMYK">В разработке!</div>
        </div>
        <div class="mainBar barCollapsedDiv" id="ColourExpandBar">
          <div class="cell left-cell"><span style="position: absolute"><i class="material-icons" style="vertical-align:middle">expand_more</i></span>
            <div class="cell txtCollapse" style="padding-left: 45px">Значения цветов</div>
          </div>
        </div>
      </div>
    </div>
    <script src="/sandbox/colorpicker/color-picker.js"></script>

