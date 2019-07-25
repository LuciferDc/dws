# redirect v-0.8.0
---------------
## 结构 ##
- 抽取情况
   - *base.redirect.js* 抽取了31个调用wanli()的接口, 直接返回wanli()算法返回的数据, 没有做特殊处理. <br><br>
   - *dispose.redirect.js* 对 **hehun, currscores, pphp, color, xuanshi** 五个接口做了数据处理. <br>
       - 其中 **hehun, pphp, xuanshi** 从原版 *core.controller.js* 抽取 组织的数据为原版 controller 中组织的数据. <br>
       - 其中 **color, currsorces** 组织的数据 经过 *coupling.redirect.js* 处理.<br><br>
   - *coupling.redirect.js* 对 **getMonthsSimple, getDayun** 做了数据处理和整合wanli()相关算法的调用, 从原版 *auspices.service.js* 抽取.<br><br><br>
- 功能简介<br>
   &ensp; &ensp; 主要分为 **utils, core**
   - **core**: 从原项目抽取出来的算法接口和数据处理, 具体分类由抽取情况介绍完毕.<br><br>
   - **utils**: redirect 中需要用到的方法和从原项目中抽取出来的私有方法.
      - *date-to-redirect-utils.js* 由于除生日之外的其他日期参数统一为时间戳, 这里集成了由原日期格式转换成时间戳的方法.
      - *date-to-wanli-utils.js* 由时间戳转换成wanli算法需要的日期格式的方法, 不向外部提供.
      - *coupling-utils.js* 从原项目抽取出来的私有方法.<br><br>
   - *exm.js*: 各个方法的参数与返回内容样例.
---
## redirect用法 ##
1. 对于原 *auspices.service.js* 中的 **get_months_simple, get_dayun** 方法, 可直接调用 *coupling.redirect.js* 的 **getMonthsSimple, getDayun** 方法获取数据.
2. 对于原 *core.controller.js* 中的 **hehun, pphp, xuanshi** 方法, 可直接调用 *dispose.redirect.js* 的同名方法.
3. 其他调用wanli算法处, 可从 *base.redirect.js* 调用wanli算法的同名方法.
4. 对于原 *auspices.service.js, *core.controller.js* 中调用的私有方法, 可以调用 *coupling-utils.js* 中的对应方法.
---
## 接口具体参数介绍 ##
   &ensp; &ensp; 所有接口的参数均为params对象, 所有 birthday 参数为经由 *base.redirect.js* 的 **getSolarBirthday** 转换后的方法. **getSolarBirthday** 的 birthday 参数为时间戳 例如: 
   ```
   {
     birthday: 1570672800,
     lunisolar: 1(阳历) || 0(阴历),
     knowHour: true,
   }
   ```
- **core**:
   - *base.redirect.js*:
      - **mingpan**: 基础命盘 ( birthday: *string*, sex: *number* [ 0: 女, 1: 男 ] )
      - **hometwo**: 首页2分钟语音 ( birthday: *string*, sex: *number* [ 0: 女, 1: 男 ] )
      - **dgmoshu**: 豆果专属魔术大师 ( sex: *number* [ 0: 女, 1: 男 ], num1: *number* [ 0-9 ], num2: *number* [ 0-9 ], num3: *number* [ 0-9 ], num4: *number* [ 0-9 ])
      - **getSolarBirthday**: 转换成算法层识别的生日结构 ( birthday: *number* [ 时间戳 ], lunisolar: *number* [ 0: 阴历, 1: 阳历 ], knowHour: *boolean* [ 是否知道时辰 ] )
      - **getLevelByDay**: 得到所有分类的级别（吉中凶）( birthday: *string*, sex: *number* [ 0: 女, 1: 男 ], date: *number* [ 时间戳 ] )
      - **reportByYear**: 年度报告 ( birthday: *string*, sex: *number* [ 0: 女, 1: 男 ], year: *number* [ 年份 ] )
      - **monthsummary**: 2018年12个月的概述 ( birthday: *string*, sex: *number* [ 0: 女, 1: 男 ] )
      - **seasons**: 四季 ( birthday: *string*, sex: *number* [ 0: 女, 1: 男 ] )
      - **myWxfriend**: 五星朋友圈 ( birthday: *string*, sex: *number* [ 0: 女, 1: 男 ], friends: *Array* [ 朋友列表 [ {id: 1, birthday: '2009071815', sex: 1, b:'a'} ] ] )
      - **hehun**: 新版合婚 ( femaleBirthday: *string* [ 参数格式 ＝ birthday ], maleBirthday: *string* [ 参数格式 ＝ birthday ] )
      - **currscores**: 当日能量 ( birthday: *string*, sex: *number* [ 0: 女, 1: 男 ], date: *number* [ 时间戳 ] )
      - **color**: 颜色数字 ( birthday: *string*, sex: *number* [ 0: 女, 1: 男 ], date: *number* [ 时间戳 ], type: string [ 'hour', 'days', 'months', 'years' ] )
      - **yuncheng**: 运程 ( birthday: *string*, sex: *number* [ 0: 女, 1: 男 ], date: *number* [ 时间戳 ], type: string [ 'hour', 'days', 'months', 'years' ], datestatus: *number* [ 0 ? ], length: *number* [ 7 ? ], steps: *number* [ 2 ? ] )
      - **xuanshi**: 新版 选时 ( birthday: *string*, sex: *number* [ 0: 女, 1: 男 ], date: *number* [ 时间戳 ], type: *number* [ 0: 做事，1: 搬家，2: 求财，3: 开业，4: 约会，5: 会友，6: 出行，7: 面试 ] )
      - **xuanri**: 新版 选日 ( birthday: *string*, sex: *number* [ 0: 女, 1: 男 ], date: *number* [ 时间戳 ] )
      - **zeji**: 新版 择吉 ( birthday: *string*, sex: *number* [ 0: 女, 1: 男 ],  type: *number* [ 0: 做事，1: 搬家，2: 求财，3: 开业，4: 约会，5: 会友，6: 出行，7: 面试 ], startdate: *number* [ 时间戳 ], enddate: *number* [ 时间戳 ], days: [ 3 天数 ]) ( enddate days 二选一 )
      - **zeshi**: 旧版 择时(选时) ( birthday: *string*, sex: *number* [ 0: 女, 1: 男 ], date: *number* [ 时间戳 ] )
      - **zeri**: 旧版 择日(选日) ( birthday: *string*, sex: *number* [ 0: 女, 1: 男 ], type: *number* [ 0: 做事，1: 搬家，2: 求财，3: 开业，4: 约会，5: 会友，6: 出行，7: 面试 ] )
      - **kwkd**: 快问快答 ( birthday: *string*, sex: *number* [ 0: 女, 1: 男 ], <br>
      code: *number* [<br> KWKD_CODE_ENTERPRISE_1: 1001, // 2018年我的事业运如何？<br>
          KWKD_CODE_ENTERPRISE_2: 1002, // 2018年我的工作要变动吗？<br>
          KWKD_CODE_ENTERPRISE_3: 1003, // 不满现状，现在跳槽好吗？<br>
          KWKD_CODE_ENTERPRISE_4: 1004, // 今年我能升职加薪吗？<br>
          KWKD_CODE_ENTERPRISE_5: 1005, // 今年我能找到好工作吗？<br>
          KWKD_CODE_ENTERPRISE_6: 1006, // 今年我要转行吗？<br>
          KWKD_CODE_ENTERPRISE_7: 1007, // 今年我适合独自创业吗？<br>
          KWKD_CODE_ENTERPRISE_8: 1008, // 今年我适合与好友合作创业吗？<br>
          KWKD_CODE_ENTERPRISE_9: 1009, // 今年我适合做的副业赚外快吗？<br>
          KWKD_CODE_ENTERPRISE_10: 1010, // 今年我能遇到帮助我的贵人吗？<br>
          KWKD_CODE_WEALTH_1: 2001, // 2018年我哪个月最容易破财？<br>
          KWKD_CODE_WEALTH_2: 2002, // 2018年我怎么做才能旺财？<br>
          KWKD_CODE_WEALTH_3: 2003, // 2018年我适合做那种方向的投资？<br>
          KWKD_CODE_WEALTH_4: 2004, // 今年我的财运如何？<br>
          KWKD_CODE_WEALTH_5: 2005, // 今年我哪个月份财运最旺？<br>
          KWKD_CODE_WEALTH_6: 2006, // 今年我会因为女人破财吗？<br>
          KWKD_CODE_WEALTH_7: 2007, // 今年我会因为男人人破财吗？<br>
          KWKD_CODE_EMOTION_1: 3001, // 2018年我的感情运势如何？<br>
          KWKD_CODE_EMOTION_2: 3002, // 我的感情容易遇到什么问题？如何化解？<br>
          KWKD_CODE_EMOTION_3: 3003, // 我什么时候可以开始一段稳定的恋情？<br>
          KWKD_CODE_EMOTION_4: 3004, // 我什么时候能遇到正缘？<br>
          KWKD_CODE_EMOTION_5: 3005, // 我什么时候会结婚？<br>
          KWKD_CODE_EMOTION_6: 3006, // 我未来的婚姻会怎么样？<br>
          KWKD_CODE_EMOTION_7: 3007, // 我什么时候能开始恋爱？<br>
          KWKD_CODE_EMOTION_8: 3008, // 我什么时候能有一段有结果的恋爱？<br>
          KWKD_CODE_EMOTION_9: 3009, // 我怎么才能旺桃花？<br>
          KWKD_CODE_EMOTION_10: 3010, // 我怎么才能减少烂桃花？<br>
          KWKD_CODE_EMOTION_11: 3011, // 我目前的感情是否能有结果？<br>
          KWKD_CODE_EMOTION_12: 3012, // 我目前的感情是否有利于我？<br>
          KWKD_CODE_EMOTION_13: 3013, // 目前的感情是否是我最好的选择？<br>
          KWKD_CODE_EMOTION_14: 3014, // 我目前的感情出现问题，是否应该分手？<br>
          KWKD_CODE_EMOTION_15: 3015, // 我们什么时候会分手？<br>
          KWKD_CODE_EMOTION_16: 3016, // 我与前任是否应该复合？<br> ] )
        - **dayun**: 十年大运 ( birthday: *string*, sex: *number* [ 0: 女, 1: 男 ], index: *number* [ 第几个大运 ] )
        - **mingge**: 命格 ( birthday: *string*, sex: *number* [ 0: 女, 1: 男 ] )
        - **yyjkzangfu**: 易医健康五脏数据 ( birthday: *string*, sex: *number* [ 0: 女, 1: 男 ], type: *string* [ 火(心火), 土(脾土), 金(肺金), 木(肝木), 水(肾水)] )
        - **yyjkreport**: 易医健康今日健康数据 ( birthday: *string*, sex: *number* [ 0: 女, 1: 男 ], type: *string* [ 年, 月, 日 ] )
        - **yyjkzhengti**: 易医健康整体健康数据 ( birthday: *string*, sex: *number* [ 0: 女, 1: 男 ] )
        - **moshu**: 魔术大师 ( sex: *number* [ 0: 女, 1: 男 ], num1: *number* [ 0-9 ], num2: *number* [ 0-9 ], num3: *number* [ 0-9 ], num4: *number* [ 0-9 ] )
        - **bzhh**: 旧版合婚 ( femaleBirthday: *string* [ 参数格式 ＝ birthday ], maleBirthday: *string* [ 参数格式 ＝ birthday ] )
        - **pphp**: 匹配合盘 ( birthday1: *string* [ 参数格式 ＝ birthday ], sex1: *number* [ 0: 女, 1: 男 ], birthday2: *string* [ 参数格式 ＝ birthday ], sex2: *number* [ 0: 女, 1: 男 ], )
        - **compass**: 风水罗盘 ( birthday: *string*, sex: *number* [ 0: 女, 1: 男 ], time: *number* [ 时间戳 ], type: *number* [ 0: 利于能量, 1: 利于钱财, 2: 利于运程, 3: 利于桃花 ] )
        - **yaoce**: 遥测 ( type: *number* [ 0: 吉凶, 1: 出行, 2: 钱财, 3: B超, 4: 情感, 5: 会见 ], num0: *number* [ 0-9 ? ], num1: *number* [ 0-9 ? ] )
        - **yindateDetail**: 阴历转阳历 ( stamp: *number* [ 时间戳 ], sex: *number* [ 0: 女, 1: 男 ] )
        - **dateDetail**: 阳历转阴历 ( stamp: *number* [ 时间戳 ], sex: *number* [ 0: 女, 1: 男 ] )
        
        
---
## 样例请见*exm.js* ##      
