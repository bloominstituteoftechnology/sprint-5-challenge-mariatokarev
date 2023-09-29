 function sprintChallenge5() { // Note the async keyword, in case you wish to use `await` inside sprintChallenge5
  // 👇 WORK WORK BELOW THIS LINE 👇
 
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`
  fetch(' http://localhost:3003/api/learners')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
  fetch(' http://localhost:3003/api/mentors')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

  
  const cards = document.querySelectorAll('section > div');
    cards.forEach((card) => {
      card.classList.add('card');
    });

    function buildLearnerCard(learner, mentors) {
      const card = document.createElement('div');
      card.classList.add('learner-card');

      const nameP = document.createElement('h3');
      nameP.textContent = `${learner.name}`;

      const idElement = document.createElement('h3');
      idElement.textContent = `${learner.id}`;

      const emailP = document.createElement('div');
      emailP.textContent = `${learner.email}`;

      const mentorP = document.createElement('li');
      mentorP.textContent = `${mentors}`;

      [nameP, idElement, emailP, mentorP].forEach(() => {
        card.appendChild();
      });

      card.addEventListener('click', async evt => {
        document.querySelectorAll('.learner-card').forEach(card =>{
          card.classList.remove('selected');
        });
        card.classList.add('active')
      })

      return card;
    }

   
   

   
    learners.forEach((learner) => {
      const mentor = mentors.find((mentor) => mentor.id === learner.mentorId);
      const learnerCard = buildLearnerCard(learner, mentor.name);
      document.querySelector('section').appendChild(learnerCard);
    });
      const mentor = mentors.find((mentor) => mentor.id === learner.mentorId);
      const learnerCard = buildLearnerCard(learner, mentor.name);
      document.querySelector('section').appendChild(learnerCard);
    }


  // 👆 WORK WORK ABOVE THIS LINE 👆


// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()
