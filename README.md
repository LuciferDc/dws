# redirect
---------------
## 结构 ##
- 抽取情况
> *base.redirect.js* 抽取了31个调用wanli()的接口, 直接返回wanli()算法返回的数据, 没有做特殊处理. <br>
---
> *dispose.redirect.js* 对 **hehun, currscores, pphp, color, xuanshi** 五个接口做了数据处理.
>> 其中 **hehun, pphp, xuanshi** 从原版 *core.controller.js* 抽取 组织的数据为原版 controller 中组织的数据. <br>
>> 其中 **color, currsorces** 组织的数据 经过 *coupling.redirect.js* 处理.
---
> *coupling.redirect.js* 对 **getMonthsSimple, getDayun** 做了数据处理和整合wanli()相关算法的调用.
>> 
