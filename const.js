/**
 * const 不能改变的内存地址
 * 修改const 定义的引用数据类型的属性，是不会改变对象的内存地址的
 * 修改简单数据类型，需要改变数据存储的内存地址
 */

const obj = {
	name: 'lin',
	sex: 'female',
	age: 16
}

console.log(obj)

obj.name = 'hua hua'

console.log(obj)