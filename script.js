let x = []
while (true) {
    let y = prompt("Введите команду (stop, add, del)");
    if (y == "stop") {
        break
    }
    let d = y.split(", ")
    if (d[0] == "del") {
        for (let i = 0; i < x.length; i++) {
            if (x[i] == d[1]) {
                x.splice(i, 1);
            }
        }
    } else if (d[0] == "add") {
        x.push(d[1])
    }
    alert(x)

}
console.log(x);