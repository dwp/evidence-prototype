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
  router.post('/ecms-v1/hr-search/hr-search', function (req, res) {

    var choice = req.session.data['HowToSearch'];

    if (choice === 'microfiche') {
      res.redirect('/ecms-v1/hr-search/microfiche');
    } else {
      res.redirect('/ecms-v1/hr-search/hr-records');
    }
  });

  // Route links HR records
  router.get('/ecms-v1/hr-search/microfiche', function (req, res) {
    res.render('ecms-v1/hr-search/microfiche');
  });

  router.get('/ecms-v1/hr-search/hr-records', function (req, res) {
    res.render('ecms-v1/hr-search/hr-records');
  });

// reset the "Document upload" data back to defaults when end is got at confirmation screen
router.get('/upload-end', function (req, res) {
  let data = req.session.data;


  delete data['upload-nino'];
  delete data['upload-crn'];
  delete data['upload-claimref'];
  delete data['upload-first-name'];
  delete data['upload-last-name'];
  delete data['upload-dob-day'];
  delete data['upload-dob-month'];
  delete data['upload-dob-year'];
  delete data['upload-postcode'];
  delete data['uploadBusinessUnit'];
  delete data['uploadBenefitType'];
  delete data['uploadClassification'];
  delete data['uploadHarmful'];
  delete data['upload-issue-date-day'];
  delete data['upload-issue-date-month'];
  delete data['upload-issue-date-year'];
  delete data['upload-lob'];
  delete data['upload-link-data'];
  delete data['documentType'];

  
  res.redirect('/ecms-v1/records');
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


// Mapping benefit type to business unit for Manage metadata

router.post('/ecms-v1/metadata/metadata-document-details', function (req, res) {
  const benefitType = req.session.data['metadataBenefitType'];

  const mapping = {
   
  "Access to Work": "Health",
  "Alternative Format": "Alternative format",
  "Attendance Allowance unit": "Attendance Allowance Unit",
  "B2OL": "Reports",
  "Bereavement benefit": "Bereavement benefit",
  "Bereavement Support Payment": "Bereavement Support Payment",
  "Budgeting Loans": "Social Fund",
  "Carer's Allowance": "Carer's Allowance",
  "Carer's Credit": "Care'r's Allowance",
  "CFEMS": "Cfems",
  "Compensation Recovery unit": "Compensation Recovery Unit",
  "Debt": "Debt Management",
  "Disability Living Allowance 65": "Disability Living Allowance 65",
  "Disability Living Allowance Adult": "Disability Living Allowance Adult",
  "Disability Living Allowance Child": "Disability Living Allowance Child",
  "Employment and Support Allowance (ESA)": "Working Age Benefits",
  "Fraud": "Fraud",
  "Funeral Payments": "Social Fund",
  "Future Pensions Centre": "Future Pensions Centre",
  "Human resources": "Human resources",
  "Integrated Loan Scheme (ILS), Eligible Loan Deduction Scheme (ELDS)": "Debt management",
  "Industrial Injuries Disablement Benefit": "Industrial Injuries Disablement Benefit",
  "International Pension Centre BB": "Newcastle Pension Centre",
  "International Pension Centre BSP": "Newcastle Pension Centre",
  "International Pension Centre ESA": "Newcastle Pension Centre",
  "International Pension Centre IB": "Newcastle Pension Centre",
  "International Pension Centre IIDB": "Newcastle Pension Centre",
  "International Pension Centre JSA": "Newcastle Pension Centre",
  "International Pension Centre MA": "Newcastle Pension Centre",
  "International Pension Centre PC": "Newcastle Pension Centre",
  "International Pension Centre SP": "Newcastle Pension Centre",
  "International Pension Centre WFP": "Newcastle Pension Centre",
  "Income Support (IS)": "Working Age Benefits",
  "Jobseeker's Allowance (JSA)": "Working Age Benefits",
  "Maternity Allowance": "Maternity Allowance",
  "New Style Jobseeker's Allowance": "New Style Jobseeker's Allowance",
  "National Insurance Delivery Centre": "National Insurance Delivery Centre",
  "NISSA Attendance Allowance Unit": "NISSA",
  "NISSA BB": "NISSA",
  "NISSA BSP": "NISSA",
  "NISSA Budgeting Loans": "NISSA",
  "NISSA Carers Allowance": "NISSA",
  "NISSA CRS": "NISSA",
  "NISSA Disability Living Allowance": "NISSA",
  "NISSA ESA": "NISSA",
  "NISSA Funeral Payments": "NISSA",
  "NISSA IIDB": "NISSA",
  "NISSA INC New": "NISSA",
  "NISSA JSA New": "NISSA",
  "NISSA MA": "NISSA",
  "NISSA NINO Allocation": "NISSA",
  "NISSA Pension Credit": "NISSA",
  "NISSA PIP": "NISSA",
  "NISSA SIS": "NISSA",
  "NISSA SSMG": "NISSA",
  "NISSA State Pension": "NISSA",
  "NISSA UC": "NISSA",
  "Notification Online (NOL)": "Notifications Online",
  "Payment Services": "Payment Services",
  "Pension Credit": "The Pension Service",
  "Performance Measurement": "Performance Measurement",
  "Personal Independence Payment (PIP)": "Personal Independence Payment (PIP)",
  "Right of Access Request": "Right Of Access Request",
  "Severe Disablement Allowance (SDA), Incapacity Benefit (IB)": "Severe Disablement Allowance (SDA), Incapacity Benefit (IB)",
  "Serious and Organised Crime": "Serious And Organised Crime",
  "State Pension": "The Pension Service",
  "Support for Mortgage Interest": "Debt Management",
  "SureStart Maternity Grant": "Social Fund",
  "Universal Credit": "Universal Credit"

  };

  req.session.data['metadataBusinessUnit'] = mapping[benefitType];

  res.redirect('/ecms-v1/metadata/metadata');
});



 // add next route here







};





