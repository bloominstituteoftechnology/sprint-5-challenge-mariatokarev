 async function sprintChallenge5() { // Note the async keyword, in case you wish to use `await` inside sprintChallenge5
  // 👇 WORK WORK BELOW THIS LINE 👇
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`
  try {
    const learnersResponse = await axios.get('http://localhost:3003/api/learners');
    const learnersData = learnersResponse.data;

    
    const mentorsResponse = await axios.get('http://localhost:3003/api/mentors');
    const mentorsData = mentorsResponse.data;
  

  const section = document.querySelector('section');
  learnersData.forEach(learner => {
    const mentorsForLearner = mentorsData.map(mentor => mentor.fullName).join(', ');
  })

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

    [nameP, idElement, emailP, mentorP].forEach(p => {
      card.appendChild(p);
    });

    card.addEventListener('click', event => {
      document.querySelectorAll('.learner-card').forEach(card => {
        card.classList.remove('active');
      });
      card.classList.add('active');
    }

    return card;
  }

  
   learners.forEach(learner => {
    const mentorsForLearner = mentors.map(mentor => mentor.fullName).join(', ');
    const learnerCard = buildLearnerCard(learner, mentorsForLearner);
    section.appendChild(learnerCard);
  });

  section.addEventListener('click', event => {
    if (event.target === section) {
      const learners = document.querySelectorAll('.learner-card');
      learners.forEach(card => card.classList.remove('active'));
    }
    learnerCard.classList.add('active');
  });
  section.appendChild(learnerCard);




  let url = 'http://localhost:3003/';
  try {
    const res = await axios.get(url);
    console.log(res.data);
  } catch (error) {
    console.error('Error:', error);
  }

 





    



 }

  // 👆 WORK WORK ABOVE THIS LINE 👆
  if (typeof module !== "undefined" && module.exports)
  module.exports = { sprintChallenge5 };
else sprintChallenge5();
  
