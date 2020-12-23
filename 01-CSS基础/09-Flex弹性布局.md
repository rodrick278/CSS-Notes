## 概念

Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性

任何一个容器都可以指定为 Flex 布局（包括**行内元素**）

```css
.box{
  display: flex;
}
```

<img src="./pic/09-01.png">

根据 [caniuse](https://caniuse.com/) 显示，大部分浏览器的兼容已经是没问题了，使用时建议补充前缀，如

```css
.box{
  display: -webkit-flex; /* Safari */
  display: flex;
}
```

采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。**它的所有子元素自动成为容器成员**，称为 Flex 项目（flex item），简称"项目"。

<img src="./pic/09-02.png">

**容器** 默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做`main start`，结束位置叫做`main end`；交叉轴的开始位置叫做`cross start`，结束位置叫做`cross end`。

**项目** 默认沿主轴排列。单个项目占据的主轴空间叫做`main size`，占据的交叉轴空间叫做`cross size`。

## 1.【容器】属性

- [flex-direction](#1-1-flex-direction:主轴方向) 
- flex-wrap
- flex-flow
- justify-content
- align-items
- align-content

### 1.1 flex-direction:主轴方向



