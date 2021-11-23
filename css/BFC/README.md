1. BFC 定义？
   > W3C 对 BFC 的定义如下： 浮动元素和绝对定位元素，非块级盒子的块级容器（例如 inline-blocks, table-cells, 和 table-captions），以及 overflow 值不为"visiable"的块级盒子，都会为他们的内容创建新的 BFC（Block Fromatting Context， 即块级格式上下文）。
2. 触发条件
   一个 HTML 元素要创建 BFC，则满足下列的任意一个或多个条件即可： 下列方式会创建块格式化上下文：

- body 根元素()
- 浮动元素(元素的 float 不是 none)
- 绝对定位元素(元素的 position 为 absolute 或 fixed)
- 行内块元素(元素的 display 为 inline-block)
- 表格单元格（元素的 display 为 table-cell，HTML 表格单元格默认为该值）
- 表格标题（元素的 display 为 table-caption，HTML 表格标题默认为该值）
- 匿名表格单元格元素（元素的 display 为 table、table-row、 table-row-group、table-header-group、table-footer-group（分别是 HTML table、row、tbody、thead、tfoot 的默认属性）或 inline-table）
- overflow 值不为 visible 的块元素 -弹性元素（display 为 flex 或 inline-flex 元素的直接子元素）
- 网格元素（display 为 grid 或 inline-grid 元素的直接子元素） 等等。

3. BFC 渲染规则
   1. BFC 垂直方向边距重叠
   2. BFC 的区域不会与浮动元素的 box 重叠
   3. BFC 是一个独立的容器，外面的元素不会影响里面的元素
   4. 计算 BFC 高度的时候，float 元素也会参与计算
