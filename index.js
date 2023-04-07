// [Поиск элементов] ------------------

// Вот документ с таблицей и формой.

// Как найти?…

// 1. Таблицу с `id="age-table"`.

let table = document.getElementById('age-table')

// 2. Все элементы `label` внутри этой таблицы (их три).

let allLabels = document.getElementsByTagName('label')

// 3. Первый `td` в этой таблице (со словом «Age»).

let firstTd = document.getElementsByTagName('td')[0]
console.log(firstTd)

// 4. Форму `form` с именем `name="search"`.

console.log(document.querySelector('form[name="search"]'))
// 5. Первый `input` в этой форме.

console.log(document.getElementsByTagName("input")[0])

// 6. Последний `input` в этой форме.


let allInputs = document.querySelectorAll('input')
let theLastinput = allInputs[allInputs.length-1]
console.log(theLastinput)


// [Тег в комментарии]
// Что выведет этот код?


let body = document.body;
body.innerHTML = "<!--" + body.tagName + "-->";
alert( body.firstChild.data ); // что выведет?


// the answer: BODY