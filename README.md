# redirect
---------------
## 结构 ##
- 抽取情况
   - *base.redirect.js* 抽取了31个调用wanli()的接口, 直接返回wanli()算法返回的数据, 没有做特殊处理. <br><br>
   - *dispose.redirect.js* 对 **hehun, currscores, pphp, color, xuanshi** 五个接口做了数据处理. <br>
       - 其中 **hehun, pphp, xuanshi** 从原版 *core.controller.js* 抽取 组织的数据为原版 controller 中组织的数据. <br>
       - 其中 **color, currsorces** 组织的数据 经过 *coupling.redirect.js* 处理.<br><br>
   - *coupling.redirect.js* 对 **getMonthsSimple, getDayun** 做了数据处理和整合wanli()相关算法的调用, 从原版 *auspices.service.js* 抽取.<br><br>
- 功能简介<br>
   &ensp; &ensp; 主要分为 **utils, core**
   - **core**: 从原项目抽取出来的算法接口和数据处理, 具体分类由抽取情况介绍完毕.
   - **utils**: redirect 中需要用到的方法和从原项目中抽取出来的私有方法.
      - *date-to-redirect-utils.js* 由于除生日之外的其他日期参数统一为时间戳, 这里集成了由原日期格式转换成时间戳的方法.
