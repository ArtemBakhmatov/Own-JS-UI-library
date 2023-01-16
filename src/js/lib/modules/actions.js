import $ from "../core"; 

$.prototype.html = function(content) {
    for (let i = 0; i < this.length; i++) {
        if (content) {
            this[i].innerHTML = content;
        } else {
            return this[i].innerHTML;
        }
    }

    return this;
};

$.prototype.eq = function(i) {
    const swap = this[i];
    const objLength = Object.keys(this).length; // Объект превращаем в массив и добавляем метод длина

    for (let i = 0; i < objLength; i++) {
        delete this[i];
    }

    this[0] = swap;
    this.length = 1;

    return this;
};

$.prototype.index = function() {
    const parent = this[0].parentNode;
    const childs = [...parent.children];

    const findMyIndex = (item) => {
        return item == this[0];
    };

    return childs.findIndex(findMyIndex);
    // findIndex() -> возвращает индекс в массиве, если элемент удовлетворяет условию проверяющей функции. 
    // В противном случае возвращается -1.
};

$.prototype.find = function(selector) {
    let numberOfitems = 0;
    let counter = 0;

    const copyObj = Object.assign({}, this);

    for (let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].querySelectorAll(selector);

        if (arr.length == 0) {
            continue;
        }

        for (let j = 0; j < arr.length; j++) {
            this[counter] = arr[j];
            counter++;
        }  
        
        numberOfitems += arr.length;
    }

    this.length = numberOfitems;

    const objLength = Object.keys(this).length;
    for (; numberOfitems < objLength; numberOfitems++) {
        delete this[numberOfitems];
    }

    return this;
};