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
var z2 = [1,1,1,1,]
var z3 = [1,1,1,1]
var z4 = [1,1,1,1]

for (var i = 0; i < b[0].length; i++) {
    if (b[0][i] == elr[0]) {

        if (i == (b[0].length) - 1) {
            z1[0]=1
        } else {
if (b[0][i + 1] == "1" || b[0][i + 1] == "2" || b[0][i + 1] == "3" || b[0][i + 1] == "4" || b[0][i + 1] == "5" || b[0][i + 1] == "6" || b[0][i + 1] == "7" || b[0][i + 1] == "8" || b[0][i + 1] == "9") {
                
                z1[0] = Number(b[0][i + 1])
            }
        }
break;
    } 
else {
        z1[0] = 0
    }
}


for (var i = 0; i < b[0].length; i++) {
    if (b[0][i] == elr[1]) {

        if (i == (b[0].length) - 1) {
            z1[1]=1
        } else {
if (b[0][i + 1] == "1" || b[0][i + 1] == "2" || b[0][i + 1] == "3" || b[0][i + 1] == "4" || b[0][i + 1] == "5" || b[0][i + 1] == "6" || b[0][i + 1] == "7" || b[0][i + 1] == "8" || b[0][i + 1] == "9") {
                
                z1[1] = Number(b[0][i + 1])
            }
        }
break;
    } 
else {
        z1[1] = 0
    }
}


for (var i = 0; i < b[0].length; i++) {
    if (b[0][i] == elr[2]) {

        if (i == (b[0].length) - 1) {
            z1[2]=1
        } else {
if (b[0][i + 1] == "1" || b[0][i + 1] == "2" || b[0][i + 1] == "3" || b[0][i + 1] == "4" || b[0][i + 1] == "5" || b[0][i + 1] == "6" || b[0][i + 1] == "7" || b[0][i + 1] == "8" || b[0][i + 1] == "9") {
                
                z1[2] = Number(b[0][i + 1])
            }
        }
break;
    } 
else {
        z1[2] = 0
    }
}



for (var i = 0; i < b[1].length; i++) {
    if (b[1][i] == elr[0]) {

        if (i == (b[1].length) - 1) {
            z2[0]=1
        } else {
if (b[1][i + 1] == "1" || b[1][i + 1] == "2" || b[1][i + 1] == "3" || b[1][i + 1] == "4" || b[1][i + 1] == "5" || b[1][i + 1] == "6" || b[1][i + 1] == "7" || b[1][i + 1] == "8" || b[1][i + 1] == "9") {
                
                z2[0] = Number(b[1][i + 1])
            }
        }
break;
    } 
else {
        z2[0] = 0
    }
}


for (var i = 0; i < b[1].length; i++) {
    if (b[1][i] == elr[1]) {

        if (i == (b[1].length) - 1) {
            z2[1]=1
        } else {
if (b[1][i + 1] == "1" || b[1][i + 1] == "2" || b[1][i + 1] == "3" || b[1][i + 1] == "4" || b[1][i + 1] == "5" || b[1][i + 1] == "6" || b[1][i + 1] == "7" || b[1][i + 1] == "8" || b[1][i + 1] == "9") {
                
                z2[1] = Number(b[1][i + 1])
            }
        }
break;
    } 
else {
        z2[1] = 0
    }
}


for (var i = 0; i < b[1].length; i++) {
    if (b[1][i] == elr[2]) {

        if (i == (b[1].length) - 1) {
            z2[2]=1
        } else {
if (b[1][i + 1] == "1" || b[1][i + 1] == "2" || b[1][i + 1] == "3" || b[1][i + 1] == "4" || b[1][i + 1] == "5" || b[1][i + 1] == "6" || b[1][i + 1] == "7" || b[1][i + 1] == "8" || b[1][i + 1] == "9") {
                
                z2[2] = Number(b[1][i + 1])
            }
        }
break;
    } 
else {
        z2[2] = 0
    }
}


for (var i = 0; i < c[0].length; i++) {
    if (c[0][i] == elr[0]) {

        if (i == (c[0].length) - 1) {
            z3[0]=1
        } else {
if (c[0][i + 1] == "1" || c[0][i + 1] == "2" || c[0][i + 1] == "3" || c[0][i + 1] == "4" || c[0][i + 1] == "5" || c[0][i + 1] == "6" || c[0][i + 1] == "7" || c[0][i + 1] == "8" || c[0][i + 1] == "9") {
                
                z3[0] = Number(c[0][i + 1])
            }
        }
break;
    } 
else {
        z3[0] = 0
    }
}


for (var i = 0; i < c[0].length; i++) {
    if (c[0][i] == elr[1]) {

        if (i == (c[0].length) - 1) {
            z3[1]=1
        } else {
if (c[0][i + 1] == "1" || c[0][i + 1] == "2" || c[0][i + 1] == "3" || c[0][i + 1] == "4" || c[0][i + 1] == "5" || c[0][i + 1] == "6" || c[0][i + 1] == "7" || c[0][i + 1] == "8" || c[0][i + 1] == "9") {
                
                z3[1] = Number(c[0][i + 1])
            }
        }
break;
    } 
else {
        z3[1] = 0
    }
}


for (var i = 0; i < c[0].length; i++) {
    if (c[0][i] == elr[2]) {

        if (i == (c[0].length) - 1) {
            z3[2]=1
        } else {
if (c[0][i + 1] == "1" || c[0][i + 1] == "2" || c[0][i + 1] == "3" || c[0][i + 1] == "4" || c[0][i + 1] == "5" || c[0][i + 1] == "6" || c[0][i + 1] == "7" || c[0][i + 1] == "8" || c[0][i + 1] == "9") {
                
                z3[2] = Number(c[0][i + 1])
            }
        }
break;
    } 
else {
        z3[2] = 0
    }
}


for (var i = 0; i < c[1].length; i++) {
    if (c[1][i] == elr[0]) {

        if (i == (c[1].length) - 1) {
            z4[0]=1
        } else {
if (c[1][i + 1] == "1" || c[1][i + 1] == "2" || c[1][i + 1] == "3" || c[1][i + 1] == "4" || c[1][i + 1] == "5" || c[1][i + 1] == "6" || c[1][i + 1] == "7" || c[1][i + 1] == "8" || c[1][i + 1] == "9") {
                
                z4[0] = Number(c[1][i + 1])
            }
        }
break;
    } 
else {
        z4[0] = 0
    }
}


for (var i = 0; i < c[1].length; i++) {
    if (c[1][i] == elr[1]) {

        if (i == (c[1].length) - 1) {
            z4[1]=1
        } else {
if (c[1][i + 1] == "1" || c[1][i + 1] == "2" || c[1][i + 1] == "3" || c[1][i + 1] == "4" || c[1][i + 1] == "5" || c[1][i + 1] == "6" || c[1][i + 1] == "7" || c[1][i + 1] == "8" || c[1][i + 1] == "9") {
                
                z4[1] = Number(c[1][i + 1])
            }
        }
break;
    } 
else {
        z4[1] = 0
    }
}


for (var i = 0; i < c[1].length; i++) {
    if (c[1][i] == elr[2]) {

        if (i == (c[1].length) - 1) {
            z4[2]=1
        } else {
if (c[1][i + 1] == "1" || c[1][i + 1] == "2" || c[1][i + 1] == "3" || c[1][i + 1] == "4" || c[1][i + 1] == "5" || c[1][i + 1] == "6" || c[1][i + 1] == "7" || c[1][i + 1] == "8" || c[1][i + 1] == "9") {
                
                z4[2] = Number(c[1][i + 1])
            }
        }
break;
    } 
else {
        z4[2] = 0
    }
}
