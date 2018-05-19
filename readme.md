# 从字符串中提取出数字部分
```
const strGetNum = require('zhf.str-get-num');

strGetNum(); // ''
strGetNum(''); // ''
strGetNum('    '); // ''
strGetNum('从字符串中提取出数字部分'); // ''
strGetNum(0); // '0'
strGetNum(-0); // '0'
strGetNum('-0'); // '0'
strGetNum(1); // '1'
strGetNum(-1); // '-1'
strGetNum('10.2'); // '10.2'
strGetNum('-10.2'); // '-10.2'
strGetNum('-0010.2'); // '-10.2'
strGetNum('-0.010.2'); // '-0.010'
strGetNum('从字符串中提取出数1字部分'); // '1'
strGetNum('-从字符串中提取出数1字部分'); // '-1'
strGetNum('从字符串中提取出数1字部1分'); // '1.1'
strGetNum('-从字符串中提取出数1字部1分'); // '-1.1'
strGetNum('.-.0...0.1.0...2.'); // '0.0'
strGetNum('-.0...0.1.0...2.'); // '0.0'
strGetNum('-.0.1..0.1.0...2.'); // '-0.1'
strGetNum('-00.00000000'); // '0.00000000'
strGetNum('-00.00000001'); // '-0.00000001'
strGetNum('-190.'); // '-190'
strGetNum('190.'); // '190'
strGetNum('.190'); // '190'
strGetNum('-.190'); // '-190'
```