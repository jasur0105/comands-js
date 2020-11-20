let x = []
for (;;) {
    let y = prompt("Введите команду");
    if (y == "stop") {
        break
    }
    let d = y.split(", ")
    if (d[0] == "del") {
        x.splice(d[1], 1)
    } else if (d[0] == "add"){
        x.push(d[1])
    }  else if (y == "alert(arr)") {
        x.forEach(function (array){
            alert(array)
        })
    }
    
}
console.log(x);