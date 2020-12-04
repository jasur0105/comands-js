function vowels() {
    var x = 0;
    var stringsearch = ["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я", "А", "О", "И", "Е", "Ё", "Э", "Ы", "У", "Ю", "Я"];
    var str = prompt("Введите текст:");
    for (var i = 0; i < str.length; i++)
        for (var j = 0; j < stringsearch.length; j++)
            if (str[i] === stringsearch[j]) {
                ++x;
                break;
            }
    return x 
}

console.log(vowels());