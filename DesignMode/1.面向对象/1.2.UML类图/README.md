## UML 类图
Unified Modeling Language 统一建模语言

#### 介绍

|  类名   |
|  ----  | 
| +publics 属性名A: 类型  |
| #protected 属性名B: 类型  |
| -publics 属性名C: 类型  |
|  ----  | 
| +publics 方法名A(参数1,参数2): 返回值类型  |
| #protected 方法名B(参数1,参数2): 返回值类型  |
| -publics 方法名C(参数1): 返回值类型 |

```javascript
// 代码示例
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        alert(`${this.name} eat something`);
    }
    speak() {
        alert(`My name is ${this.name}, age ${this.age}`)
    }
}
```

线上绘制地址 https://www.processon.com/diagraming/60dd7c25637689510d67caa0

#### 关系
- 泛化，表示继承
- 关联，表示应用