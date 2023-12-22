const passwordDisplay=document.querySelector('.password-placeholder');
const InputSlider=document.querySelector('.slider');
const passwordLength=document.querySelector('.char-count');
const uppercaseCheck=document.getElementById('uppercase')
const lowercaseCheck=document.getElementById('lowercase')
const numbersCheck=document.getElementById('numbers')
const symbolsCheck=document.getElementById('symbols')
const generateBtn=document.querySelector('.generate-btn');
const copyBtn=document.querySelector('.copy-btn');
const copyMessage=document.querySelector('.copied-text')
const strengthratingtext=document.querySelector('.strength-rating-text');
const bar1=document.querySelector('.bar1')
const bar2=document.querySelector('.bar2')
const bar3=document.querySelector('.bar3')
const bar4=document.querySelector('.bar4')



function handleSlider(){
  passwordLength.textContent=InputSlider.value;
  InputSlider.addEventListener('input',()=>{
    passwordLength.textContent=InputSlider.value;

  })
}
handleSlider();

function generatePassword(){
  updatestrength();
  const password=generateRandom(passwordLength,uppercaseCheck,lowercaseCheck,numbersCheck,symbolsCheck);
passwordDisplay.innerHTML=password;
passwordDisplay.classList.add('active')
}

function generateRandom(passwordLength,uppercaseCheck,lowercaseCheck,numbersCheck,symbolsCheck){
 
  let charset="";
  if(uppercaseCheck.checked) charset+='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  if(lowercaseCheck.checked) charset+='abcdefghijklmnopqrstuvwxyz'
  if(numbersCheck.checked) charset+='0123456789'
  if(symbolsCheck.checked) charset+='`@#$%^&*()_{}"][|\-/+*';
  let password="";

  for(let i=0;i<InputSlider.value;i++){
    const randomIndex=Math.floor(Math.random() * charset.length)
    password+=charset.charAt(randomIndex);
  }
  return password;


}
function updatestrength(){
  let strength="";
  if(InputSlider.value<=7){
    strength="Weak"
    bar1.classList.add('weak');
    bar2.classList.remove('medium');
    bar3.classList.remove('medium');
   
  }
  if(InputSlider.value>=8){
    strength="MEDIUM";
    bar1.classList.add('medium');
    bar2.classList.add('medium');
  

  } 
  if(InputSlider.value>=12) {
    strength="STRONG";
    bar1.classList.add('strong');
    bar2.classList.add('strong');
    bar3.classList.add('strong');

  }
  if(InputSlider.value>=16){ strength="VERY STRONG"
  bar1.classList.add('strong');
  bar2.classList.add('strong');
  bar3.classList.add('strong');
  bar4.classList.add('strong');
};
  strengthratingtext.textContent=strength;
}
function copyPassword(){
  if(passwordDisplay.innerHTML==="P4$5W0rD!") return;
  if(passwordDisplay.innerHTML){
    navigator.clipboard.writeText(passwordDisplay.innerHTML)
  }
}
copyBtn.addEventListener('click',()=>{
  copyPassword();
  copyMessage.classList.add('active');
  setTimeout(() => {
    copyMessage.classList.remove('active')
  }, 2000);
})
generateBtn.addEventListener('click',(e)=>{
  console.log(e.target);
  e.preventDefault()
  
generatePassword();
});

