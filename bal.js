var equation = "X2Y+Y2Z->XZ+XY3Z"
var a = equation.split("->")

var b = a[0].split("+")
var c = a[1].split("+")

var el = []
var spread = equation.split('')
for (var i = 0; i < spread.length; i++) {
    if (spread[i] == "1" || spread[i] == "2" || spread[i] == "3" || spread[i] == "4" || spread[i] == "5" || spread[i] == "6" || spread[i] == "7" || spread[i] == "8" || spread[i] == "9" || spread[i] == "0" || spread[i] == "+" || spread[i] == "-" || spread[i] == ">") {} else {
        el.push(spread[i])
    }
}

var elr = [];
elr = el.filter(function (item, i, ar) {
    return ar.indexOf(item) === i;
});

var A, B, C, D;

var z1 = [1, 1, 1, 1]
var z2 = [0, 0, 0, 0]
var z3 = [0, 0, 0, 0]
var z4 = [0, 0, 0, 0]

for (var i = 0; i < b[0].length; i++) {
    if (b[0][i] == elr[0]) {

        if (i == (b[0].length) - 1) {
            z1[0]=1
        } else {
if (b[0][i + 1] == "1" || b[0][i + 1] == "2" || b[0][i + 1] == "3" || b[0][i + 1] == "4" || b[0][i + 1] == "5" || b[0][i + 1] == "6" || b[0][i + 1] == "7" || b[0][i + 1] == "8" || b[0][i + 1] == "9") {
                alert(b[0][i+1]);
                z1[0] = Number(b[0][i + 1])
            }
        }
break;
    } 
else {
        z1[0] = 0
    }
}
