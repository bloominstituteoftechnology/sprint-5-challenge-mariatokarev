async function sprintChallenge5() { // Note the async keyword, in case you wish to use `await` inside sprintChallenge5
  // 👇 WORK WORK BELOW THIS LINE 👇
 
  const learnersResponse = await fetch('http://localhost:3003/api/learners');
  const learnersData = await learnersResponse.json();
  console.log(learnersData)

  
  const mentorsResponse = await fetch('http://localhost:3003/api/mentors');
  const mentorsData = await mentorsResponse.json();
  console.log(mentorsData)
  const cards = document.querySelector('.cards');
  let data = [];

  learnersData.forEach(learner => {
    const learnerCard = buildLearnerCard(learner, mentorsData);
    cards.appendChild(learnerCard);
  });
}

function buildLearnerCard(learner, mentorsData) {
  const card = document.createElement('div');
  card.classList.add('card');

  const nameH3 = document.createElement('h3');
  nameH3.textContent = learner.learnerFullName;

  const emailDiv = document.createElement('div');
  emailDiv.textContent = learner.email;

  const mentorHeadingH4 = document.createElement('h4');
  mentorHeadingH4.textContent = 'Mentors';
  mentorHeadingH4.classList.add('closed');

  const mentorListUl = document.createElement('ul');
  learner.mentorsArray.forEach(mentorName => {
    const mentorItemLi = document.createElement('li');
    mentorItemLi.textContent = mentorName;
    mentorListUl.appendChild(mentorItemLi);
  });

  [nameH3, emailDiv, mentorHeadingH4, mentorListUl].forEach(element => {
    card.appendChild(element);
  });

  mentorHeadingH4.addEventListener('click', () => {
    mentorHeadingH4.classList.toggle('open');
    mentorHeadingH4.classList.toggle('closed');
    mentorListUl.style.display = mentorHeadingH4.classList.contains('open') ? 'block' : 'none';
  });

  card.addEventListener('click', () => {
    document.querySelectorAll('.card').forEach(card => {
      card.classList.remove('selected');
    });
    card.classList.add('selected');

    const selectedLearnerId = learner.learnerId;
    const infoP = document.querySelector('.info');
    if (selectedLearnerId) {
      infoP.textContent = `The selected learner's ID is: ${selectedLearnerId}`;
    } else {
      infoP.textContent = "No learner selected.";
    }

    const mentorListElement = document.getElementById('mentorList');
    while (mentorListElement.firstChild) {
      mentorListElement.removeChild(mentorListElement.firstChild);
    }

    learner.mentorsArray.forEach(mentorName => {
      const mentorItemLi = document.createElement('li');
      mentorItemLi.textContent = mentorName;
      mentorListElement.appendChild(mentorItemLi);
    });
  });

  return card;
}
 
 

    
    // ❗ DO NOT CHANGE THE CODE BELOW
    if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 };
    else sprintChallenge5();
    

