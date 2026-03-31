//module.exports = function (router) {
  
//  router.get('/records', function (req, res) {
 //   res.render('ecms-v1/records')
//  })

// }

//const BASE_PATH = 'ecms-v1';
//const ABS_BASE_PATH = `/${BASE_PATH}`;
//const NEXT_PATH = 'ecms-v1/index-current';



module.exports = function (router) {

  // add all routing here

  // Routing for HR search (POST)
  router.post('/ecms-v1/hr-search', function (req, res) {

    var choice = req.session.data['HowToSearch'];

    if (choice === 'microfiche') {
      res.redirect('/ecms-v1/microfiche');
    } else {
      res.redirect('/ecms-v1/hr-records');
    }
  });

  // Route links for the two pages (GET)
  router.get('/ecms-v1/microfiche', function (req, res) {
    res.render('ecms-v1/microfiche');
  });

  router.get('/ecms-v1/hr-records', function (req, res) {
    res.render('ecms-v1/hr-records');
  });

 // add next route here







};





