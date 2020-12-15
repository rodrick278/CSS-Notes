## CSS选择器语法

CSS包含样式规则，这些样式规则由浏览器解析，然后应用于HTML的相应元素。

- Selector  - 选择器是将应用样式的HTML标签。 这可以是任何标签，例如<h1>或<table>等。
- Property - 属性是HTML标签的一种属性，简而言之，所有HTML属性都将转换为CSS属性，它可能是颜色(color)，边框(border)等。
- Value   - 将值分配给属性。例如， color 属性可以具有 red 或#F1F1F1 等值。

您可以按如下所示放置CSS样式规则语法-

```css
selector { property: value }
```

示例-您可以如下定义表格边框-

```css
table{ border :1px solid #C00; }
```

这里的table是一个选项器，border是一个属性，给定值 1px solid#C00 是该属性的值。

您可以根据自己的喜好以各种简单的方式定义选择器。

## 类型选择器

这是我们上面看到的相同选择器。同样，还有一个示例为所有h1赋予颜色-



```css
h1 {
   color: #36CFFF; 
}
```

## 通用选择器

通用选择器不选择特定类型的元素，而是简单地匹配任何元素类型的名称-



```css
* { 
   color: #000000; 
}
```

该规则将文档中每个元素的内容显示为黑色。

## 特定选择器

假设仅当样式规则位于特定元素内时，才希望将其应用于特定元素。 如以下示例所示，样式规则仅在<em>元素位于<ul>标签内时才适用。



```css
ul em {
   color: #000000; 
}
```

## Class选择器

您可以基于元素的**class**属性定义样式规则。具有该类的所有元素将根据定义的规则进行格式化。



```css
.black {
   color: #000000; 
}
```

对于我们文档中**class**属性设置为 black 的每个元素，此规则均将其内容呈现为黑色。例如-



```css
h1.black {
   color: #000000; 
}
```

此规则仅将**class**属性设置为black的<h1>元素呈现为黑色。

您可以将多个类选项器应用于给定元素。考虑以下示例-



```css
<p class="center bold">
   This para will be styled by the classes center and bold.
</p>
```

## ID选择器

您可以基于元素的 id 属性定义样式规则。



```css
#black {
   color: #000000; 
}
```

对于我们文档中 id 属性设置为 black 的每个元素，此规则均将其内容呈现为黑色。例如-



```css
h1#black {
   color: #000000; 
}
```

该规则仅将id属性设置为black的<h1>元素的内容呈现为黑色。

将ID为black 里面的<h2>元素内容设置为黑色。例如-



```css
#black h2 {
   color: #000000; 
}
```

在此示例中，当所有<h2>位于 id 属性设置为 black 的标签中时，这些标题将以黑色显示。

## 子元素选择器

子元素选择器，考虑以下示例-



```css
body > p {
   color: #000000; 
}
```

如果这些段落是<body>元素的直接<p>子元素呈现为黑色。 放在<div>或<td>之类的其他元素内的其他段落对此规则无效。

## 属性选择器

您还可以将样式应用于具有特定属性的HTML元素。以下样式规则将匹配所有具有type属性值为 text 的输入元素-



```css
input[type="text"] {
   color: #000000; 
}
```

此方法的优点是<input type =“ submit” />元素不受影响，并且颜色仅应用于所需的文本字段。

有以下规则适用于属性选择器。

- p [lang]        - 选择有 lang 属性的所有段落元素。
- p [lang =" fr"]   - 选择其 lang 属性的值为" fr"的所有段落元素。
- p [lang〜=" fr"]  - 选择所有 lang 属性包含单词" fr"的段落元素。
- p [lang | =" en"] - 选择其 lang 属性包含的值完全为" en"或以"en-"开始的所有段落元素。

## 多种样式规则

您可能需要为单个元素定义多个样式规则。您可以定义这些规则，以将多个属性和相应的值组合到一个块中，如以下示例中所定义:



```css
h1 {
   color: #36C;
   font-weight: normal;
   letter-spacing: .4em;
   margin-bottom: 1em;
   text-transform: lowercase;
}
```

在这里，所有属性和值对都用分号(;)分隔。您可以将它们放在一行或多行中。





## 聚合选择器

如果愿意，可以将样式应用于许多选择器。只需用逗号分隔，如以下示例所示:



```css
h1, h2, h3 {
   color: #36C;
   font-weight: normal;
   letter-spacing: .4em;
   margin-bottom: 1em;
   text-transform: lowercase;
}
```

此定义样式规则也将适用于h1，h2和h3元素。列表的顺序无关紧要。

您可以将各种 id 选项器组合在一起，如下所示-



```css
#content, #footer, #supplement {
   position: absolute;
   left: 510px;
   width: 200px;
}
```