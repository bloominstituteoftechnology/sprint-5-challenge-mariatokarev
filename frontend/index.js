async function sprintChallenge5() { // Note the async keyword, in case you wish to use `await` inside sprintChallenge5
  // 👇 WORK WORK BELOW THIS LINE 👇
  const info = document.querySelector('.info')
  const cardsContainer = document.querySelector('.cards')

 
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  
  try {
    let resLearners = await axios.get('/api/learners') 
    let resMentors = await axios.get('/api/mentors') 
   
    let formattedData = []
    resLearners.data.forEach(learner => {
      let cardData = {}
      
      cardData.id = learner.id
      cardData.fullName = learner.fullName
      cardData.email = learner.email
      cardData.mentors = []
     
      learner.mentors.forEach(mentorId => {
        let mentor = resMentors.data.find(m => m.id === mentorId)
        const mentorName = `${mentor.firstName} ${mentor.lastName}`
        cardData.mentors.push(mentorName)
      })
     
      formattedData.push(cardData)
    })

  
    info.textContent = 'No learner is selected'
    formattedData.forEach(learner => {
      const card = cardComponent(learner)
      cardsContainer.appendChild(card)
    })

    function cardComponent(data) {
     
      const card = document.createElement('div')
      const name = document.createElement('h3')
      const email = document.createElement('div')
      const mentors = document.createElement('h4')
      const mentorsList = document.createElement('ul')

      
      card.appendChild(name)
      card.appendChild(email)
      card.appendChild(mentors)
      card.appendChild(mentorsList)

     
      data.mentors.forEach(mentorName => {
        const li = document.createElement('li')
        li.textContent = mentorName
        mentorsList.appendChild(li)
      })

     
      card.classList.add('card')
      mentors.classList.add('closed')

      name.textContent = data.fullName
      email.textContent = data.email
      mentors.textContent = 'Mentors'

    
      function selectCard() {
        info.textContent = `The selected learner is ${data.fullName}`
        const cards = document.querySelectorAll('.card')
        cards.forEach(c => {
          const name = c.querySelector('h3')
          name.textContent = name.textContent.split(',')[0]
          c.classList.remove('selected')
        })
        card.classList.add('selected')
        name.textContent = `${data.fullName}, ID ${data.id}`
      }
      function deselectCard() {
        info.textContent = 'No learner is selected'
        card.classList.remove('selected')
        name.textContent = name.textContent.split(',')[0]
      }

     
      card.addEventListener('click', evt => {
        const isSelected = card.classList.contains('selected')
        const isMentorsVisible = mentors.classList.contains('open')

        if (evt.target !== mentors) { 
          if (isSelected) deselectCard()
          else selectCard()
        } else if (evt.target === mentors) {
          if (!isSelected) selectCard()
          if (isMentorsVisible) mentors.classList.replace('open', 'closed')
          else mentors.classList.replace('closed', 'open')
        }
      })
      return card
    }
  } catch (err) {
  
    info.textContent = 'Something went wrong'
  }
}




// ❗ DO NOT CHANGE THE CODE BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 };
else sprintChallenge5();

