### Link

[CodePen 预览](https://codepen.io/rodrick278/pen/wvzYwjr)

### radio

效果：

<img src="./pic/001-radio.gif" width=50%>

HTML

```html
<body>
  <h3>有简单的背景动画</h3>
  <label class="bui-radios-label bui-radios-anim">
    <input type="radio" name="selector1" /><i class="bui-radios"></i> 选择1
  </label>
  <label class="bui-radios-label bui-radios-anim">
    <input type="radio" checked name="selector1" /><i class="bui-radios"></i> 默认选择2
  </label>

  <h3>无动画</h3>
  <label class="bui-radios-label">
    <input type="radio" name="selector2" /><i class="bui-radios"></i> 选择1
  </label>
  <label class="bui-radios-label">
    <input type="radio" name="selector2" /><i class="bui-radios"></i> 选择2
  </label>

  <h3>禁用状态（disabled）</h3>
  <label class="bui-radios-label">
    <input type="radio" disabled name="selector3" /><i class="bui-radios"></i> 未选择禁用
  </label>
  <label class="bui-radios-label">
    <input type="radio" checked disabled name="selector3" /><i class="bui-radios"></i> 选择禁用
  </label>
</body>
```

CSS

```css
label.bui-radios-label input {
  visibility: hidden;
  position: absolute;
  opacity: 0;
}

label.bui-radios-label .bui-radios {
  display: inline-block;
  position: relative;
  border: 1px solid #979797;
  border-radius: 50%;
  width: 13px;
  height: 13px;
  background: #fff;
  vertical-align: -2px;
}

label.bui-radios-label input:checked + .bui-radios:after {
  position: absolute;
  left: 3px;
  top: 3px;
  border-radius: 50%;
  width: 7px;
  height: 7px;
  background-color: #fff;
  content: "";
}

label.bui-radios-label input:checked + .bui-radios {
  border: 1px solid #00b066;
  background: #00b066;
}

label.bui-radios-label input:disabled + .bui-radios {
  border: solid 1px #979797;
  background-color: #e8e8e8;
}

label.bui-radios-label input:disabled:checked + .bui-radios:after {
  background-color: #c1c1c1;
}

label.bui-radios-label.bui-radios-anim .bui-radios {
  transition: background-color ease-out 0.3s;
  -webkit-transition: background-color ease-out 0.3s;
}
```



