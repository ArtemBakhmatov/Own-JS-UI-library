// (() => {
//     const $ = function(selector) {
//         const elements = document.querySelectorAll(selector);
//         const obj = {};
        
//         obj.hide = () => {
//             elements.forEach(elem => {
//                 elem.style.display = 'none';
//             });
//             return obj;
//         };

//         obj.show = () => {
//             elements.forEach(elem => {
//                 elem.style.display = '';
//             });
//             return obj;
//         };

//         return obj;
//     }
//     window.$ = $;
// })();

const $ = function(selector) {
    return new $.prototype.init(selector);
};

$.prototype.init = function(selector) {
    if (!selector) {
        return this;  // будет просто пустой объект
    }
    if (selector.tagName) {
        this[0] = selector;
        this.length = 1;
        return this; 
    }
    Object.assign(this, document.querySelectorAll(selector));  // в существ-й объект добавить новое свойство
    this.length = document.querySelectorAll(selector).length;
    return this;
};

$.prototype.init.prototype = $.prototype;

window.$ = $;

export default $;