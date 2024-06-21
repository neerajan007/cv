const radioButtons = document.querySelectorAll('input[name="maritalOptions"]');
const marriedWithChildrenHide = document.getElementsByClassName('marriedWithChildrenHide')[0]
radioButtons.forEach((radio)=>{
  radio.addEventListener('change', ()=>{
    if(radio.checked && radio.value === 'married'){
      marriedWithChildrenHide.style.display = 'block';
    }
    else{
      marriedWithChildrenHide.style.display = 'none';
    }
  })
})


const relativesInJapan = document.querySelectorAll('input[name="relativeInfoJapan"]');

relativesInJapan.forEach((radio)=>{
  radio.addEventListener('change', ()=>{
    
  });
});
