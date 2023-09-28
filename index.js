 async function sprintChallenge5() { // Note the async keyword, in case you wish to use `await` inside sprintChallenge5
  // 👇 WORK WORK BELOW THIS LINE 👇
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  const section = document.querySelector('section');

  function buildLearnerCard(learner, mentors) {
    const card = document.createElement('div');
    card.classList.add('learner-card');

    const nameP = document.createElement('p');
    nameP.textContent = learner.fullName;

    const idElement = document.createElement('p');
    idElement.textContent = `${learner.id}`;

    const emailP = document.createElement('p');
    emailP.textContent = `${learner.email}`;

    const mentorP = document.createElement('p');
    mentorP.textContent = `${mentors}`;

    [nameP, idElement, emailP, mentorP].forEach(p => {
      card.appendChild(p);
    });

    card.addEventListener('click', event => {
      document.querySelectorAll('.learner-card').forEach(card => {
        card.classList.remove('active');
      });
      card.classList.add('active');
    });

    return card;
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
   let mentors=[
    {id: 12, fullName:'Ada Lovelace'},
    {id:78, fullName:'Bill Gates'},
    {id:63, fullName:'Brendan Eich'},
    {id:42, fullName:'Brian Kernighan'},
    {id:94, fullName: 'Dan Ingalls'},
    {id:17, fullName:'Grace Hopper'},
    {id:7, fullName:'Guido van Rossum'},
    {id:83, fullName:'James Gosling'},
    {id:51, fullName:'Linus Torvalds'},
    {id:67, fullName:'Margaret Hamilton'},
    {id:60, fullName:'Mark Zuckerberg'},
    {id:25, fullName:'Martin Fowler'},
    {id:88, fullName:'Mary Shaw'},
    {id:71, fullName:'Mitchell Hashimoto'},
    {id:95, fullName:'Rasmus Lerdorf'},
    {id:14, fullName:'Robert Martin'},
    {id:32, fullName:'Sergey Brin'},
    {id:58, fullName:'Yukihiro Matsumoto'},
    {id:49, fullName:'Sheryl Sangberg'},
   ]
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
  });

  // Make an HTTP request
  let url = 'http://localhost:3003/';
  try {
    const res = await axios.get(url);
    console.log(res.data);
  } catch (error) {
    console.error('Error:', error);
  }

 





    

}



  // 👆 WORK WORK ABOVE THIS LINE 👆

