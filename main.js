let btns = document.querySelectorAll('.btn div');
let submit = document.getElementById('submit');
let frontFace = document.querySelector('.containerFront');
let backFace = document.querySelector('.containerBack');
let selceted = document.getElementById('selected');
let message = document.querySelector('.message');

btns.forEach((btn,index)=>{
btn.addEventListener('click',()=>{
selceted.innerHTML = `You selected ${index+1} out of 5`
submit.onclick = ()=>{
frontFace.style.display = 'none'
backFace.style.display = 'block'
message.style.display = 'none'  
        }
    })
    submit.onclick = ()=>{
        message.style.display = 'block'
    }
})

