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


// default settings for metadata business unit and benefit type
  router.get('/ecms-v1/metadata/metadata-document-details', function (req, res) {

    if (!req.session.data.metadataBusinessUnit) {
      req.session.data.metadataBusinessUnit = 'working-age-benefits'
    }

    if (!req.session.data.metadataBenefitType) {
      req.session.data.metadataBenefitType = 'Employment and Support Allowance (ESA)'
    }

    res.render('ecms-v1/metadata/metadata-document-details')
  })





 // add next route here







};





