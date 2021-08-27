//  selecting the Element
 
 const button =document.getElementById('Btn')
  const Massage = document.getElementById('massage')




 
 button.addEventListener('click' , function(){

  console.log('button was click')
  Massage.value = " "
  document.querySelector('.output').style.display = "block"


})
Massage.addEventListener('click', ()=>{
  document.querySelector('.output').style.display = "none"
})