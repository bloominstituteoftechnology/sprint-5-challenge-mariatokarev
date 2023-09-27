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
  
    

  
  const learners = [
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




    

  


  // 👆 WORK WORK ABOVE THIS LINE 👆
}
function _0x5800() {
  const _0x42e30c = ['classList', 'find', '2197755fshBew', 'replace', '102414WllEmB', 'forEach', '10aZqHZO', 'contains', '.info', 'Something\x20went\x20wrong', '945822yHbMVy', 'querySelector', 'data', 'catch', '.card', 'No\x20learner\x20is\x20selected', '574116dSJNwl', 'email', 'add', 'querySelectorAll', 'addEventListener', '1576254onBLLP', '19734781ufvNmR', '.cards', 'fullName', '7BmgGNN', '14270920obaJCA', 'open', 'remove', 'textContent', 'The\x20selected\x20learner\x20is\x20', 'target', '3dIEhRP', 'then', 'footer', 'get', 'Mentors', 'div', 'split', 'selected', 'closed', 'createElement', '265BTGtwW', 'mentors', 'click', 'appendChild'];
  _0x5800 = function() {
      return _0x42e30c;
  }
  ;
  return _0x5800();
}
(function(_0x25f525, _0x1bd9a6) {
  const _0x191c13 = _0x45e6
    , _0x41fdea = _0x25f525();
  while (!![]) {
      try {
          const _0x532792 = parseInt(_0x191c13(0x141)) / 0x1 + parseInt(_0x191c13(0x14c)) / 0x2 * (-parseInt(_0x191c13(0x129)) / 0x3) + parseInt(_0x191c13(0x147)) / 0x4 + -parseInt(_0x191c13(0x133)) / 0x5 * (-parseInt(_0x191c13(0x13b)) / 0x6) + parseInt(_0x191c13(0x122)) / 0x7 * (-parseInt(_0x191c13(0x123)) / 0x8) + -parseInt(_0x191c13(0x139)) / 0x9 + parseInt(_0x191c13(0x13d)) / 0xa * (parseInt(_0x191c13(0x11f)) / 0xb);
          if (_0x532792 === _0x1bd9a6)
              break;
          else
              _0x41fdea['push'](_0x41fdea['shift']());
      } catch (_0x2e1023) {
          _0x41fdea['push'](_0x41fdea['shift']());
      }
  }
}(_0x5800, 0xed474));
async function sprintChallenge5() {
  const _0x18a67a = _0x45e6
    , _0x1fa0a8 = document[_0x18a67a(0x142)](_0x18a67a(0x13f))
    , _0x43c571 = document[_0x18a67a(0x142)](_0x18a67a(0x120))
    , _0xff8cc8 = document[_0x18a67a(0x142)](_0x18a67a(0x12b))
    , _0x1bef94 = new Date()['getFullYear']();
  _0xff8cc8['textContent'] = '©\x20BLOOM\x20INSTITUTE\x20OF\x20TECHNOLOGY\x20' + _0x1bef94;
  const _0x2b9841 = [axios['get']('/api/learners'), axios[_0x18a67a(0x12c)]('/api/mentors')];
  Promise['all'](_0x2b9841)[_0x18a67a(0x12a)](([_0x21b833,_0x2cc38d])=>{
      const _0x1699fa = _0x18a67a;
      let _0x2da9d0 = [];
      _0x21b833['data'][_0x1699fa(0x13c)](_0x102bd4=>{
          const _0x1f9fc1 = _0x1699fa;
          let _0x4207ed = {};
          _0x4207ed['id'] = _0x102bd4['id'],
          _0x4207ed[_0x1f9fc1(0x121)] = _0x102bd4[_0x1f9fc1(0x121)],
          _0x4207ed[_0x1f9fc1(0x148)] = _0x102bd4[_0x1f9fc1(0x148)],
          _0x4207ed[_0x1f9fc1(0x134)] = [],
          _0x102bd4[_0x1f9fc1(0x134)][_0x1f9fc1(0x13c)](_0x4926e6=>{
              const _0x3ebfbe = _0x1f9fc1;
              let _0x17701e = _0x2cc38d[_0x3ebfbe(0x143)][_0x3ebfbe(0x138)](_0x42da06=>_0x42da06['id'] === _0x4926e6);
              const _0x4b4c1f = _0x17701e['firstName'] + '\x20' + _0x17701e['lastName'];
              _0x4207ed['mentors']['push'](_0x4b4c1f);
          }
          ),
          _0x2da9d0['push'](_0x4207ed);
      }
      ),
      _0x1fa0a8['textContent'] = _0x1699fa(0x146),
      _0x2da9d0['forEach'](_0x1b2d51=>{
          const _0x45e254 = _0x76e565(_0x1b2d51);
          _0x43c571['appendChild'](_0x45e254);
      }
      );
      function _0x76e565(_0x270d0f) {
          const _0x180947 = _0x1699fa
            , _0x190e7e = document[_0x180947(0x132)](_0x180947(0x12e))
            , _0x318478 = document['createElement']('h3')
            , _0x50038a = document['createElement'](_0x180947(0x12e))
            , _0x17c81e = document[_0x180947(0x132)]('h4')
            , _0x4c54a8 = document[_0x180947(0x132)]('ul');
          _0x190e7e[_0x180947(0x136)](_0x318478),
          _0x190e7e[_0x180947(0x136)](_0x50038a),
          _0x190e7e[_0x180947(0x136)](_0x17c81e),
          _0x190e7e[_0x180947(0x136)](_0x4c54a8),
          _0x270d0f['mentors'][_0x180947(0x13c)](_0xa484f8=>{
              const _0x416456 = _0x180947
                , _0x32d5c7 = document[_0x416456(0x132)]('li');
              _0x32d5c7[_0x416456(0x126)] = _0xa484f8,
              _0x4c54a8['appendChild'](_0x32d5c7);
          }
          ),
          _0x190e7e[_0x180947(0x137)][_0x180947(0x149)]('card'),
          _0x17c81e[_0x180947(0x137)][_0x180947(0x149)](_0x180947(0x131)),
          _0x318478[_0x180947(0x126)] = _0x270d0f[_0x180947(0x121)],
          _0x50038a['textContent'] = _0x270d0f[_0x180947(0x148)],
          _0x17c81e[_0x180947(0x126)] = _0x180947(0x12d);
          function _0x3fc501() {
              const _0x308ffd = _0x180947;
              _0x1fa0a8['textContent'] = _0x308ffd(0x127) + _0x270d0f[_0x308ffd(0x121)];
              const _0x506b46 = document[_0x308ffd(0x14a)](_0x308ffd(0x145));
              _0x506b46[_0x308ffd(0x13c)](_0x2abfd3=>{
                  const _0x1b0349 = _0x308ffd
                    , _0x4618f7 = _0x2abfd3[_0x1b0349(0x142)]('h3');
                  _0x4618f7[_0x1b0349(0x126)] = _0x4618f7[_0x1b0349(0x126)]['split'](',')[0x0],
                  _0x2abfd3[_0x1b0349(0x137)][_0x1b0349(0x125)](_0x1b0349(0x130));
              }
              ),
              _0x190e7e[_0x308ffd(0x137)]['add']('selected'),
              _0x318478[_0x308ffd(0x126)] = _0x270d0f[_0x308ffd(0x121)] + ',\x20ID\x20' + _0x270d0f['id'];
          }
          function _0xf084c7() {
              const _0x29e0bb = _0x180947;
              _0x1fa0a8[_0x29e0bb(0x126)] = _0x29e0bb(0x146),
              _0x190e7e['classList'][_0x29e0bb(0x125)](_0x29e0bb(0x130)),
              _0x318478[_0x29e0bb(0x126)] = _0x318478[_0x29e0bb(0x126)][_0x29e0bb(0x12f)](',')[0x0];
          }
          return _0x190e7e[_0x180947(0x14b)](_0x180947(0x135), _0x4f8784=>{
              const _0x11c50a = _0x180947
                , _0x222e6a = _0x190e7e[_0x11c50a(0x137)][_0x11c50a(0x13e)]('selected')
                , _0x58b51e = _0x17c81e[_0x11c50a(0x137)][_0x11c50a(0x13e)](_0x11c50a(0x124));
              if (_0x4f8784[_0x11c50a(0x128)] !== _0x17c81e) {
                  if (_0x222e6a)
                      _0xf084c7();
                  else
                      _0x3fc501();
              } else {
                  if (_0x4f8784[_0x11c50a(0x128)] === _0x17c81e) {
                      if (!_0x222e6a)
                          _0x3fc501();
                      if (_0x58b51e)
                          _0x17c81e['classList'][_0x11c50a(0x13a)](_0x11c50a(0x124), _0x11c50a(0x131));
                      else
                          _0x17c81e[_0x11c50a(0x137)][_0x11c50a(0x13a)]('closed', _0x11c50a(0x124));
                  }
              }
          }
          ),
          _0x190e7e;
      }
  }
  )[_0x18a67a(0x144)](_0x302314=>{
      const _0x3ded09 = _0x18a67a;
      _0x1fa0a8[_0x3ded09(0x126)] = _0x3ded09(0x140);
  }
  ),
  window['aidgfuioghausfdu'] = 'Please\x20speak\x20to\x20a\x20member\x20of\x20staff!';
}
function _0x45e6(_0x477576, _0x1eccf1) {
  const _0x5800bf = _0x5800();
  return _0x45e6 = function(_0x45e6bf, _0x21bf11) {
      _0x45e6bf = _0x45e6bf - 0x11f;
      let _0x4b877f = _0x5800bf[_0x45e6bf];
      return _0x4b877f;
  }
  ,
  _0x45e6(_0x477576, _0x1eccf1);
}
sprintChallenge5();
try {
  module['exports'] = {
      'sprintChallenge5': sprintChallenge5
  };
} catch {}


// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()
