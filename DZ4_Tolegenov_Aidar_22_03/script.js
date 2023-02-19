
// const data = JSON.stringify(arr)
//
// const newObj = JSON.parse(data)
// console.log(JSON)
// console.log(newObj.name)
// console.log(typeof data)
// console.log(arr)
//
// const btn = document.querySelector('.btn')
//
// btn.addEventListener('click', () => {
//     const request = new XMLHttpRequest() // создание запроса
//     request.open("GET", "people.json") // объявление метода запроса и указание пути
//     request.setRequestHeader("Content-type", "application/json") // указывание заголовка
//     request.send() // отправка запроса
//
//     request.addEventListener('load', () => {
//         const data = JSON.parse(request.response)
//         document.querySelector('.name').innerHTML = data.name
//         document.querySelector('.age').innerHTML = data.age
//     })
// })
//////////////////////


const url = 'people.json';
const btn = document.getElementById('btn');
const dataContainer = document.getElementById('data');

btn.addEventListener('click', () => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let html = '';
            data.forEach(person => {
                html += `<p>${person.name} - ${person.age} лет - ${person.position}</p>`;
            });
            dataContainer.innerHTML = html;
        });
});
