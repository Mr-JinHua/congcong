
Function.prototype.bind = function(scope) {
    const _this = this
    return function() {
        _this.call(scope)
    }
}

var color = 'red'

function fn() {
    console.log(this.color)
}
 
console.log(fn.bind)

var obj = {color: 'blue'}

fn.bind(obj)()