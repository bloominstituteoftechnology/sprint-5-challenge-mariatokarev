 function sprintChallenge5() { // Note the async keyword, in case you wish to use `await` inside sprintChallenge5
  // 👇 WORK WORK BELOW THIS LINE 👇
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

 
  function buildLearnerCard(learner, mentors){
    const card = document.createElement('div')
    card.classList.add('learner-card')

    const nameP = document.createElement('p')
    nameP.textContent= learner.fullName

    const idElement=document.createElement('p')
    idElement.textContent=`${learner.id}`

    const emailP = document.createElement('p')
    emailP.textContent= `${learner.email}`

    const mentorP = document.createElement('p')
    mentorP.textContent=`${mentors}`

    [nameP, idElement, emailP, mentorP].forEach(p =>{
      card.appendChild(p)
    })
    card.addEventListener('click', Event => {
      document.querySelectorAll('.learner-card').forEach(card => {
      })
      card.classList.add('active')
    })
    return card
  }
   let learners = [
    {id:6, fullName:'Bob Johnson', email:'bob.johnson@example.com'},
    {id:52, fullName:'Samantha Richards', email: 'samantha.richards@example.com'},
    {id:18, fullName: 'Gina Smith', email: 'gina.smith@example.com'},
    {id:77, fullName: 'Max Power', email:'max.power@example.com'},
    {id:68, fullName: 'Daisy Duke', email:'daisy.duke@example.com'},
    {id:1, fullName: 'Jack Sparrow', email:'jack.sparrow@example.com'},
    {id:48, fullName:'Homer Simpson', email:'homer.simpson@example.com'},
    {id:97, fullName:'Luna Lovegood', email:'luna.lovegood@example.com'},
    {id:3, fullName:'Joe Bloggs', email:'joe.bloggs@example.com'},
    {id:35, fullName:'Bilbo Baggins', email:'bilbo.baggins@example.com'},
    {id:29, fullName:'Marge Simpson', email:'marge.simpson@example.com'},
    {id:8, fullName:'Peter Parker', email:'peter.parker@example.com'},
    {id:57, fullName:'Betty Boop', email:'betty.boop@example.com'},
    {id:22, fullName:'Mickey Mouse', email:'mickey.mouse@example.com'},
    {id: 91, fullName:'Daffy Duck', email:'daffy.duck@example.com'}
  ]
   
  learners.forEach(learner =>{
    const learnerCard = buildLearnerCard(learner)
    document.querySelector('section').appendChild(learnerCard)
  })
document.addEventListened('click', evt=< {
  if(evt.target === document.querySelector('section')) {
    const learners = document.querySelectorAll('.learner-card')
    learners.forEach(card => card.classList.remove('active'))
  }
})
 



    

  


  // 👆 WORK WORK ABOVE THIS LINE 👆
}
