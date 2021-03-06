# 设计模式

## 设计原则
### 何为设计？
#### 描述
什么是设计？
- 即按照哪一种思路或者标准类实现功能
- 功能相同，可以有不同的设计方案来实现
- 伴随着需求的增加，设计的作用才能体现出来
#### 结合《UNIX/LINUX设计哲学》
这本书讲了很多的设计准则
- 准则1：小即是美
- 准则2：让每个程序只做好一件事情
- 准则3：快速建立原型
- 准则4：舍弃高效率而取可移植性
- 准则5：采用纯文本来存储数据
- 准则6：充分利用软件的杠杆效应（软件复用)
- 准则7：使用shell脚本来提高杠杆效应和可移植性
- 准则8：避免强制性的用户界面
- 准则9：让每个程序都成为过滤器
- 小准则：
  1. 允许用户定制环境
  2. 尽量使操作系统内核小而轻量化
  3. 使用小写字母并尽量简写
  4. 沉默是金
  5. 各部分之和大于整体
  6. 寻求90%的解决方案
  
### SOLID 五大设计原则
- S - 单一职责原则
  > 一个程序只做好一件事
  > 如果功能过于复杂就拆分开，每个部分保持独立，不要混合大而全
- O - 开发封闭原则
  > 对扩展开放，对修改封闭
  > 增加需求时，扩展新代码，而非修改已有代码，这是软件设计的中级目标
- L - 李氏置换原则
  > 子类能覆盖父类
  > 父类能出现的地方子类就能出现
  > js 中使用较少（弱类型 & 继承使用较少）
- I - 接口独立原则
  > 保持接口的单一独立，避免出现“胖接口“
  > js 中没有接口（typescript例外），使用较少
  > 类似于单一职责原则，这里更关注接口
- D - 依赖倒置原则 
  > 面向接口编程，依赖于抽象而不依赖于具体
  > 使用方只关注接口而不关注具体类的实现
  > js 中使用较少（没有接口 & 弱类型）

#### 设计原则总结
  - S O 体现较多
  - L I D 体现较少，但是要了解其用意
`2.设计模式/loadImg —— 案例`
    
### 从设计到模式
！（需要补充创建型、结构型、行为型的区别）
介绍23种设计模式
- 创建型
  + 工厂模式（工厂方法模式, 抽象工厂模式，建造者模式)
  + 单利模式
  + 原型模式 
- 组合型（结构型）
  + 适配器模式
  + 装饰器模式
  + 代理模式
  + 外观模式
  + ！桥接模式
  + ！组合模式
  + ！享元模式
- 行为型
  + 策略模式
  + *迭代器模式
  + 模板方法模式
  + 职责连模式
  + *观察者模式
  + 命令模式
  + 备忘录模式
  + 状态模式
  + 访问者模式
  + 中介者模式
  + 解释器模式
  
#### 工厂模式
- 介绍
  + 将 new 操作单独封装
  + 遇到 new 时，就要考虑是否该使用工厂模式
- 演示
- 场景
- 总结