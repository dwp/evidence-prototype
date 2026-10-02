//module.exports = function (router) {
  
//  router.get('/records', function (req, res) {
 //   res.render('user-research/round-2/records')
//  })

// }

//const BASE_PATH = 'user-research/round-2';
//const ABS_BASE_PATH = `/${BASE_PATH}`;
//const NEXT_PATH = 'user-research/round-2/index-current';



module.exports = function (router) {

  // add all routing here


//Bulk update mapping bulk data to metadata for doc 1, 2 and 3

router.post(
  '/user-research/round-2/metadata/bulk-metadata-confirmation',
  function (req, res) {

    const data = req.session.data;

    let selectedDocs = data.selectedDocuments || [];

    if (typeof selectedDocs === 'string') {
      selectedDocs = JSON.parse(selectedDocs);
    }

    function updateValue(value, field1, field2, field3) {

      if (!value) {
        return;
      }

      if (selectedDocs.includes('result-1')) {
        data[field1] = value;
      }

      if (selectedDocs.includes('result-2')) {
        data[field2] = value;
      }

      if (selectedDocs.includes('result-3')) {
        data[field3] = value;
      }

    }

    // NINO
    updateValue(
      data['bulk-nino'],
      'metadata-nino',
      'metadata-nino-2',
      'metadata-nino-3'
    );

    // CRN
    updateValue(
      data['bulk-crn'],
      'metadata-crn',
      'metadata-crn-2',
      'metadata-crn-3'
    );

    // Claim reference
    updateValue(
      data['bulk-claim-ref'],
      'metadata-claim-ref',
      'metadata-claim-ref-2',
      'metadata-claim-ref-3'
    );

    // First name
    updateValue(
      data['bulk-first-name'],
      'metadata-first-name',
      'metadata-first-name-2',
      'metadata-first-name-3'
    );

    // Last name
    updateValue(
      data['bulk-last-name'],
      'metadata-last-name',
      'metadata-last-name-2',
      'metadata-last-name-3'
    );

    // Classification
    updateValue(
      data['bulk-classification'],
      'metadata-classification',
      'metadata-classification-2',
      'metadata-classification-3'
    );

    // LOB case ID
    updateValue(
      data['bulk-lob-case-id'],
      'metadata-lob-case-id',
      'metadata-lob-case-id-2',
      'metadata-lob-case-id-3'
    );

    // Benefit type
    updateValue(
      data['bulkBenefitType'],
      'metadataBenefitType',
      'metadataBenefitType-2',
      'metadataBenefitType-3'
    );

    // Office postcode
    updateValue(
      data['bulk-office-postcode'],
      'metadata-office-postcode',
      'metadata-office-postcode-2',
      'metadata-office-postcode-3'
    );

    // Link data
    updateValue(
      data['bulk-link-data'],
      'metadata-link-data',
      'metadata-link-data-2',
      'metadata-link-data-3'
    );

    // Date of birth

    const day = data['bulk-dob-day'];
    const month = data['bulk-dob-month'];
    const year = data['bulk-dob-year'];

    if (day || month || year) {

      if (selectedDocs.includes('result-1')) {
        data['metadata-dob-day'] = day;
        data['metadata-dob-month'] = month;
        data['metadata-dob-year'] = year;
      }

      if (selectedDocs.includes('result-2')) {
        data['metadata-dob-2-day'] = day;
        data['metadata-dob-2-month'] = month;
        data['metadata-dob-2-year'] = year;
      }

      if (selectedDocs.includes('result-3')) {
        data['metadata-dob-3-day'] = day;
        data['metadata-dob-3-month'] = month;
        data['metadata-dob-3-year'] = year;
      }

    }

    // Clear bulk update fields
 
      delete data['bulk-nino'];
      delete data['bulk-crn'];
      delete data['bulk-claim-ref'];
      delete data['bulk-first-name'];
      delete data['bulk-last-name'];
       
      delete data['bulk-dob-day'];
      delete data['bulk-dob-month'];
      delete data['bulk-dob-year'];
       
      delete data['bulk-classification'];
      delete data['bulk-lob-case-id'];
       
      delete data['bulkBenefitType'];
       
      delete data['bulk-office-postcode'];
      delete data['bulk-link-data'];

      delete data.selectedDocuments;

    res.redirect(
      '/user-research/round-2/metadata/bulk-metadata-confirmation'
    );

  }
);



// Clear the "Advanced search" fields when clicking clear search link
router.get('/clear-advanced-search-ur', function (req, res) {
  let data = req.session.data;

  delete data['nino'];
  delete data['FirstName'];
  delete data['lastName'];
  delete data['dob'];
  delete data['customerReference'];
  delete data['claimReference'];
  delete data['documentType'];
  delete data['scanEnvelopeID'];
  delete data['scanBatchID'];
  delete data['lobCaseID'];
  delete data['from'];
  delete data['To'];
  
  res.redirect('bulk-metadata-confirmation');
});


// Mapping benefit type to business unit for Manage metadata

router.post('/user-research/round-2/metadata/metadata-document-details', function (req, res) {
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

  res.redirect('/user-research/round-2/metadata/metadata');
});

// Mapping benefit type to business unit for Manage metadata 2

router.post('/user-research/round-2/metadata-2/metadata-document-details-2', function (req, res) {
  const benefitType2 = req.session.data['metadataBenefitType-2'];

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

  req.session.data['metadataBusinessUnit-2'] = mapping[benefitType2];

  res.redirect('/user-research/round-2/metadata-2/metadata-2');
});

// Mapping benefit type to business unit for Manage metadata 3

router.post('/user-research/round-2/metadata-3/metadata-document-details-3', function (req, res) {
  const benefitType3 = req.session.data['metadataBenefitType-3'];

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

  req.session.data['metadataBusinessUnit-3'] = mapping[benefitType3];

  res.redirect('/user-research/round-2/metadata-3/metadata-3');
});





 // add next route here







};





