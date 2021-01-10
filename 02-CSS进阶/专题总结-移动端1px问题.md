### 一、产生原因

网上说了很多 dpr 的原因，实际原因其实和 dpr 没啥大关系，而是👇

我们做移动端页面时一般都会设置 meta 标签 viewport 的 `content=“width=device-width”` ，
这里就是把 html 视窗宽度大小设置等于设备宽度的大小，大多数手机的屏幕设备宽度都差不多，
以 iphoneX 为例，屏幕宽度 375px。

而UI给设计图的时候基本上都是给的二倍图甚至三倍图，假设设计图是 750px 的二倍图，在 750px 上设计了 1px 的边框，要拿到 375px 宽度的手机来显示，就相当于整体设计图缩小了一倍，所以 750px 设计图里的 1px 边框在 375px 手机设备上要以 0.5px 来呈现才符合预期效果，**然而 css 里最低只支持 1px 大小，不足 1px 就以 1px 显示**，所以你看到的就显得边框较粗，实际上只是设计图整体缩小了，而 1px 的边框没有跟着缩小导致的。

这就是 1px 问题的由来了，并不是什么高深莫测的原因。

## 二、推荐处理办法

这里主要推荐两种处理办法，是较为常用并且限制比较小的常用操作。

其他还有一些方案可以参见 [掘金](https://juejin.cn/post/6844903877947424782) 

### 2.1 伪元素 + transform

#### 适用场景

所有场景

#### 缺点

因为使用伪元素，如果这个元素本身已经有伪元素，那么使用的时候需要考虑一下嵌套等问题。不过大部分场景非常 ok

#### 写法

**一条边框**

```css
.scale-1px {
  position: relative;
  border: none;
}

.scale-1px:after {
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 1px;
  background-color: #000;
  content: "";
  transform: scaleY(.5);
}
```

**四条边框**

```css
.scale-1px {
  position: relative;
  border: none;
}

.scale-1px:after {
  position: absolute;
  left: 0;
  top: 0;
  box-sizing: border-box;
  border: 1px solid #000;
  border-radius: 5px;
  /** 整体缩小 0.5 对应宽高x2 **/
  width: 200%;
  height: 200%;
  content: "";
  transform: scale(.5);
  transform-origin: left top;
}
```

<img src="./pic/016.png" width=90%>

### 2.2 viewport的scale

#### 适用场景

新做项目 任何场景

#### 缺点

适合新的项目，老的项目可能会需要做一些修正。

#### 写法

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <title>移动端1px问题</title>
  <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
  <meta name="viewport" id="WebViewport"
    content="width=device-width,initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
  <style>
    html {
      font-size: 1px;
    }

    * {
      padding: 0;
      margin: 0;
    }

    .item {
      padding: 1rem;
      border-bottom: 1px solid gray;
      font-size: 1.2rem;
    }
  </style>
  <script>
    var viewport = document.querySelector("meta[name=viewport]");
    var dpr = window.devicePixelRatio || 1;
    var scale = 1 / dpr;
    viewport.setAttribute('content'
      , `width=device-width,initial-scale=${scale}, maximum-scale=${scale}, minimum-scale=${scale}, user-scalable=no`);

    var docEl = document.documentElement;
    var fontsize = 10 * (docEl.clientWidth / 320) + "px";
    docEl.style.fontSize = fontsize;
  </script>
</head>

<body>
  <div class="item">border-bottom: 1px solid gray;</div>
</body>

</html>
```





