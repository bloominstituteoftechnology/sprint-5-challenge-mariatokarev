async function sprintChallenge5() { // Note the async keyword, in case you wish to use `await` inside sprintChallenge5
  // 👇 WORK WORK BELOW THIS LINE 👇
 
  const learnersResponse = await fetch('http://localhost:3003/api/learners');
  const learnersData = await learnersResponse.json();

  
  const mentorsResponse = await fetch('http://localhost:3003/api/mentors');
  const mentorsData = await mentorsResponse.json();


 
      const cards = document.querySelector('.cards');
      let data = []; 
    
      data.forEach(learner => {
      
        const newObject = {
          learnerId: learner.id,
          learnerFullName: learner.name,
          email: learner.email,
          mentorsArray: []
        };
    
       
        learner.mentors.forEach(mentor => {
          const mentorName = `${mentor.firstName} ${mentor.lastName}`;
          newObject.mentorsArray.push(mentorName);
        });
    
        
        data.push(newObject);
    
        const learnerCard = buildLearnerCard(newObject);
        cards.appendChild(learnerCard);
      });
    
      function buildLearnerCard(learner) {
        const card = document.createElement('div');
        card.classList.add('card');
    
        const nameP = document.createElement('h3');
        nameP.textContent = learner.learnerFullName;
    
        const idElement = document.createElement('h3');
        idElement.textContent = learner.learnerId;
    
        const emailP = document.createElement('div');
        emailP.textContent = learner.email;
    
        const mentorList = document.createElement('h4');
        learner.mentorsArray.forEach(mentorName => {
          const mentorItem = document.createElement('ul');
          mentorItem.textContent = mentorName;
          mentorList.appendChild(mentorItem);
        });
    
        [nameP, idElement, emailP, mentorList].forEach(element => {
          card.appendChild(element);
        });
    
        card.addEventListener('click', () => {
          document.querySelectorAll('.learner-card').forEach(card => {
            card.classList.remove('selected');
          });
          card.classList.add('selected');
        });
    
        return card;
      }
    
      document.addEventListener('DOMContentLoaded', () => {
        data = fetchData(); 
        data.forEach(learner => {
          const learnerCard = buildLearnerCard(learner);
          cards.appendChild(learnerCard);
        });
      });
    }
    
    // ❗ DO NOT CHANGE THE CODE BELOW
    if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 };
    else sprintChallenge5();
    

