const form = document.querySelector('#form'),
      footer = document.querySelector('.form__footer');

let scoreBool = 0

footer.addEventListener('mouseover',e => {

  scoreBool = 0

  form.querySelectorAll('input').forEach((input) => {
    if(input.value !== ''){
      scoreBool++
    }  
  })

  if(e.target.classList.contains('form__btn')){

    if(scoreBool == 3){
      form.querySelector('button').classList.add('success')
      if(form.querySelector('button').classList.contains('anim-left')) 
        form.querySelector('button').classList.remove('anim-left')
      if(form.querySelector('button').classList.contains('anim-right')) 
        form.querySelector('button').classList.remove('anim-right')
    }else{
      form.querySelector('button').classList.contains('success') && form.querySelector('button').classList.remove('success')
      
      if(e.target.classList.contains('active')){
        if(e.target.classList.contains('anim-left')){
          e.target.classList.replace('anim-left','anim-right')
        }else{
          if(!e.target.classList.contains('anim-right')){
            e.target.classList.add('anim-right')
          }
          e.target.classList.replace('anim-right','anim-left')
        }
        
      }else{
        e.target.classList.add('active')
      }
    }
    
  }
})