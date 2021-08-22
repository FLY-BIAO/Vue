// 1.定义了名为 info的装饰器
function info(target) {
    // 2.为目标添加静态属性 info
    target.info = 'Person info'
}

// 3.为Person类应用info装饰器
@info
class Person{}

// 4.打印Person的静态属性info
console.log(Person.info)

