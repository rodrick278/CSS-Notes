## CSS选择器语法

CSS包含样式规则，这些样式规则由浏览器解析，然后应用于HTML的相应元素。

- Selector  - 选择器是将应用样式的HTML标签。 这可以是任何标签，例如\<h1>或\<table>等。
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

假设仅当样式规则位于特定元素内时，才希望将其应用于特定元素。 如以下示例所示，样式规则仅在\<em>元素位于\<ul>标签内时才适用。



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

此规则仅将**class**属性设置为black的\<h1>元素呈现为黑色。

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

该规则仅将id属性设置为black的\<h1>元素的内容呈现为黑色。

将ID为black 里面的\<h2>元素内容设置为黑色。例如-



```css
#black h2 {
   color: #000000; 
}
```

在此示例中，当所有\<h2>位于 id 属性设置为 black 的标签中时，这些标题将以黑色显示。

## 子元素选择器

子元素选择器，考虑以下示例-



```css
body > p {
   color: #000000; 
}
```

如果这些段落是\<body>元素的直接\<p>子元素呈现为黑色。 放在\<div>或\<td>之类的其他元素内的其他段落对此规则无效。

## 属性选择器

您还可以将样式应用于具有特定属性的HTML元素。以下样式规则将匹配所有具有type属性值为 text 的输入元素-



```css
input[type="text"] {
   color: #000000; 
}
```

此方法的优点是\<input type =“ submit” />元素不受影响，并且颜色仅应用于所需的文本字段。

有以下规则适用于属性选择器。

- `p [lang]`        - 选择有 lang 属性的所有段落元素。
- `p [lang ="fr"]`   - 选择其 lang 属性的值为" fr"的所有段落元素。
- `p [lang~="fr"]`  - 选择所有 lang 属性包含单词" fr"的段落元素。
- `p [lang|="en"]` - 选择其 lang 属性包含的值完全为" en"或以"en-"开始的所有段落元素。

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

## 选择器查询表(包含CSS3)

CSS3 之后又加入了一些新的选择器，下面这张表是一种总表：

| 选择器                                                       | 例子                  | 例子描述                                             | CSS  |
| :----------------------------------------------------------- | :-------------------- | :--------------------------------------------------- | :--- |
| [.*class*](https://www.w3school.com.cn/cssref/selector_class.asp) | .intro                | 选择 class="intro" 的所有元素。                      | 1    |
| [#*id*](https://www.w3school.com.cn/cssref/selector_id.asp)  | #firstname            | 选择 id="firstname" 的所有元素。                     | 1    |
| [*](https://www.w3school.com.cn/cssref/selector_all.asp)     | *                     | 选择所有元素。                                       | 2    |
| [*element*](https://www.w3school.com.cn/cssref/selector_element.asp) | p                     | 选择所有 \<p> 元素。                                 | 1    |
| [*element*,*element*](https://www.w3school.com.cn/cssref/selector_element_comma.asp) | div,p                 | 选择所有 \<div> 元素和所有 \<p> 元素。               | 1    |
| [*element* *element*](https://www.w3school.com.cn/cssref/selector_element_element.asp) | div p                 | 选择 \<div> 元素内部的所有 \<p> 元素。               | 1    |
| [*element*>*element*](https://www.w3school.com.cn/cssref/selector_element_gt.asp) | div>p                 | 选择父元素为 \div> 元素的所有 \<p> 元素。            | 2    |
| [*element*+*element*](https://www.w3school.com.cn/cssref/selector_element_plus.asp) | div+p                 | 选择紧接在 \<div> 元素之后的所有 \<p> 元素。         | 2    |
| [[*attribute*]](https://www.w3school.com.cn/cssref/selector_attribute.asp) | [target]              | 选择带有 target 属性所有元素。                       | 2    |
| [[*attribute*=*value*]](https://www.w3school.com.cn/cssref/selector_attribute_value.asp) | [target=_blank]       | 选择 target="_blank" 的所有元素。                    | 2    |
| [[*attribute*~=*value*]](https://www.w3school.com.cn/cssref/selector_attribute_value_contain.asp) | [title~=flower]       | 选择 title 属性包含单词 "flower" 的所有元素。        | 2    |
| [[*attribute*\|=*value*]](https://www.w3school.com.cn/cssref/selector_attribute_value_start.asp) | [lang\|=en]           | 选择 lang 属性值以 "en" 开头的所有元素。             | 2    |
| [:link](https://www.w3school.com.cn/cssref/selector_link.asp) | a:link                | 选择所有未被访问的链接。                             | 1    |
| [:visited](https://www.w3school.com.cn/cssref/selector_visited.asp) | a:visited             | 选择所有已被访问的链接。                             | 1    |
| [:active](https://www.w3school.com.cn/cssref/selector_active.asp) | a:active              | 选择活动链接。                                       | 1    |
| [:hover](https://www.w3school.com.cn/cssref/selector_hover.asp) | a:hover               | 选择鼠标指针位于其上的链接。                         | 1    |
| [:focus](https://www.w3school.com.cn/cssref/selector_focus.asp) | input:focus           | 选择获得焦点的 input 元素。                          | 2    |
| [:first-letter](https://www.w3school.com.cn/cssref/selector_first-letter.asp) | p:first-letter        | 选择每个 \<p> 元素的首字母。                         | 1    |
| [:first-line](https://www.w3school.com.cn/cssref/selector_first-line.asp) | p:first-line          | 选择每个 \<p> 元素的首行。                           | 1    |
| [:first-child](https://www.w3school.com.cn/cssref/selector_first-child.asp) | p:first-child         | 选择属于父元素的第一个子元素的每个 \<p> 元素。       | 2    |
| [:before](https://www.w3school.com.cn/cssref/selector_before.asp) | p:before              | 在每个 \<p> 元素的内容之前插入内容。                 | 2    |
| [:after](https://www.w3school.com.cn/cssref/selector_after.asp) | p:after               | 在每个 \<p> 元素的内容之后插入内容。                 | 2    |
| [:lang(*language*)](https://www.w3school.com.cn/cssref/selector_lang.asp) | p:lang(it)            | 选择带有以 "it" 开头的 lang 属性值的每个 \<p> 元素。 | 2    |
| [*element1*~*element2*](https://www.w3school.com.cn/cssref/selector_gen_sibling.asp) | p~ul                  | 选择前面有 \<p> 元素的每个 \<ul> 元素。              | 3    |
| [[*attribute*^=*value*]](https://www.w3school.com.cn/cssref/selector_attr_begin.asp) | a[src^="https"]       | 选择其 src 属性值以 "https" 开头的每个 \<a> 元素。   | 3    |
| [[*attribute*$=*value*]](https://www.w3school.com.cn/cssref/selector_attr_end.asp) | a[src$=".pdf"]        | 选择其 src 属性以 ".pdf" 结尾的所有 \<a> 元素。      | 3    |
| [[*attribute*\*=*value*]](https://www.w3school.com.cn/cssref/selector_attr_contain.asp) | a[src*="abc"]         | 选择其 src 属性中包含 "abc" 子串的每个 \<a> 元素。   | 3    |
| [:first-of-type](https://www.w3school.com.cn/cssref/selector_first-of-type.asp) | p:first-of-type       | 选择属于其父元素的首个 \<p> 元素的每个 \<p> 元素。   | 3    |
| [:last-of-type](https://www.w3school.com.cn/cssref/selector_last-of-type.asp) | p:last-of-type        | 选择属于其父元素的最后 \<p> 元素的每个 \<p> 元素。   | 3    |
| [:only-of-type](https://www.w3school.com.cn/cssref/selector_only-of-type.asp) | p:only-of-type        | 选择属于其父元素唯一的 \<p> 元素的每个 \<p> 元素。   | 3    |
| [:only-child](https://www.w3school.com.cn/cssref/selector_only-child.asp) | p:only-child          | 选择属于其父元素的唯一子元素的每个 \<p> 元素。       | 3    |
| [:nth-child(*n*)](https://www.w3school.com.cn/cssref/selector_nth-child.asp) | p:nth-child(2)        | 选择属于其父元素的第二个子元素的每个 \<p> 元素。     | 3    |
| [:nth-last-child(*n*)](https://www.w3school.com.cn/cssref/selector_nth-last-child.asp) | p:nth-last-child(2)   | 同上，从最后一个子元素开始计数。                     | 3    |
| [:nth-of-type(*n*)](https://www.w3school.com.cn/cssref/selector_nth-of-type.asp) | p:nth-of-type(2)      | 选择属于其父元素第二个 \<p> 元素的每个 \<p> 元素。   | 3    |
| [:nth-last-of-type(*n*)](https://www.w3school.com.cn/cssref/selector_nth-last-of-type.asp) | p:nth-last-of-type(2) | 同上，但是从最后一个子元素开始计数。                 | 3    |
| [:last-child](https://www.w3school.com.cn/cssref/selector_last-child.asp) | p:last-child          | 选择属于其父元素最后一个子元素每个 \<p> 元素。       | 3    |
| [:root](https://www.w3school.com.cn/cssref/selector_root.asp) | :root                 | 选择文档的根元素。                                   | 3    |
| [:empty](https://www.w3school.com.cn/cssref/selector_empty.asp) | p:empty               | 选择没有子元素的每个 \<p> 元素（包括文本节点）。     | 3    |
| [:target](https://www.w3school.com.cn/cssref/selector_target.asp) | #news:target          | 选择当前活动的 #news 元素。                          | 3    |
| [:enabled](https://www.w3school.com.cn/cssref/selector_enabled.asp) | input:enabled         | 选择每个启用的 \<input> 元素。                       | 3    |
| [:disabled](https://www.w3school.com.cn/cssref/selector_disabled.asp) | input:disabled        | 选择每个禁用的 \<input> 元素                         | 3    |
| [:checked](https://www.w3school.com.cn/cssref/selector_checked.asp) | input:checked         | 选择每个被选中的 \<input> 元素。                     | 3    |
| [:not(*selector*)](https://www.w3school.com.cn/cssref/selector_not.asp) | :not(p)               | 选择非 \<p> 元素的每个元素。                         | 3    |
| [::selection](https://www.w3school.com.cn/cssref/selector_selection.asp) | ::selection           | 选择被用户选取的元素部分。                           | 3    |

