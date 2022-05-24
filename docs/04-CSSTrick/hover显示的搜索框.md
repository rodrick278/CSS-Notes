# hover显示的搜索框

## 效果

<img src="./pic/008-search1.gif">

## 代码

**HTML**

```HTML
<body>
  <div class="search_box">
    <input type="text" class="search_input" placeholder="search">
    <a href="" class="search_btn">
      <svg t="1613781818331" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3355" width="20" height="20"><path d="M768 448a362.666667 362.666667 0 1 0-725.333333 0 362.666667 362.666667 0 0 0 725.333333 0z m-640 0a277.333333 277.333333 0 1 1 554.666667 0 277.333333 277.333333 0 0 1-554.666667 0z m739.925333 525.568l-194.304-196.949333 60.757334-59.904 194.304 196.949333-60.757334 59.904z" p-id="3356" fill="#e16531"></path></svg>
    </a>
  </div>
</body>
```

**CSS**

```css
body {
	background-color: #e16531;
}

.search_box {
	display: flex;
	position: absolute;
	left: 50%;
	top: 50%;
	border-radius: 50px;
	height: 40px;
	background: #fff;
	transform: translate(-50%,-50%);
}

.search_input {
	padding: 0;
	border: transparent;
	width: 0;
	height: 40px;
	outline: none;
	background-color: transparent;
	line-height: 40px;
	font-weight: 400;
	font-size: 16px;
	transition: width .3s;
  color: #666;
}

.search_btn {
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	width: 40px;
	height: 40px;
}

.search_box:hover .search_input {
	padding: 0 20px;
	width: 200px;
}
```

