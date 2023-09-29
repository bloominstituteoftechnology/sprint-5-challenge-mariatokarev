 function sprintChallenge5() { // Note the async keyword, in case you wish to use `await` inside sprintChallenge5
  // 👇 WORK WORK BELOW THIS LINE 👇
 
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`
  try {
    const learnersResponse = await fetch('http://localhost:3003/api/learners');
    const mentorsResponse = await fetch('http://localhost:3003/api/mentors');
    const learners =  learnersResponse.json();
    const mentors =  mentorsResponse.json();

   
    const footer = document.querySelector('footer');
    const currentYear = new Date().getFullYear();
    footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`;

    const cards = document.querySelectorAll('section > div');
    cards.forEach((card) => {
      card.classList.add('card');
    });

    function buildLearnerCard(learner, mentors) {
      const card = document.createElement('div');
      card.classList.add('learner-card');

      const nameP = document.createElement('h3');
      nameP.textContent = learner.fullName;

      const idElement = document.createElement('h3');
      idElement.textContent = `${learner.id}`;

      const emailP = document.createElement('div');
      emailP.textContent = `${learner.email}`;

      const mentorP = document.createElement('li');
      mentorP.textContent = `${mentors}`;

      [nameP, idElement, emailP, mentorP].forEach((p) => {
        card.appendChild(p);
      });

     
      card.addEventListener('click', (event) => {
      });

      return card;
    }

   
    learners.forEach((learner) => {
      const mentor = mentors.find((mentor) => mentor.id === learner.mentorId);
      const learnerCard = buildLearnerCard(learner, mentor.name);
      document.querySelector('section').appendChild(learnerCard);
    });
  } catch (error) {
    console.error('An error occurred:', error);
  }
}



 



    

  


  // 👆 WORK WORK ABOVE THIS LINE 👆


// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()
