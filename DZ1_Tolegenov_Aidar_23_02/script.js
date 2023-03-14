
///////////////////////////////регулярка


const emailInput = document.querySelector('#email')
const userMail = document.querySelector('#userEmail')
const emailRes = document.querySelector('.emailRes')

const regExp = /@\w{15}/gi

userMail.onclick = () => {
    if (regExp.test(emailInput.value)){
        emailRes.innerHTML = 'ok'
        emailRes.style.color = 'green'
    }else {
        emailRes.innerHTML = 'not ok'
        emailRes.style.color = 'red'
    }

}
const passInput = document.querySelector('#password')
const userPass = document.querySelector('#userPassword')
const passRes = document.querySelector('.passRes')

const regEx = /^\w{8}$/gi

userPass.onclick = () => {
    if (regEx.test(passInput.value)){
        passRes.innerHTML = 'ok'
        passRes.style.color = 'green'
    }else {
        passRes.innerHTML = 'not ok'
        passRes.style.color = 'red'
    }
}
//////////////////////////////////////Рекурсия

let offset = 0;

function animation (){
    offset = offset + 10;
    document.querySelector('.box').style.left = offset + 'px';
    if (offset > 445){
        return true;

    }
    setTimeout(animation, 50);

}
animation()
