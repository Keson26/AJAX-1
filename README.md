# AJAX demo
## 调试
```
node server.js 8888/index.html
```
## 四个步骤

1. 创建 XMLHttpRequest 对象

2. 调用该对象的 open 方法 .open(method, url)

3. 监听对象的 onreadystatechange 事件

   - 在该事件处理函数里操作文件(css/js/html/responseXML/JSON.parse/JSON.stringify)等内容

4. 调用对象 send 方法发送请求
