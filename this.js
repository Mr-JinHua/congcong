var color = 'red'
var Obj = {
    color: 'blue',
    fn: function() {
        var _this = this;
        console.log(this.color);
        console.log(_this.color);
        (function() {
            console.log(this.color);
            console.log(_this.color);
        })()
    },
    fn2: () => {
        console.log(this.color);
    }
}

Obj.fn()
Obj.fn2()