//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
  // Add JavaScript here

  // For /ecms-v1/actions/actions-create-copy.html : conditional filter for second select box
document.addEventListener('DOMContentLoaded', function () {
  const businessUnit = document.getElementById('copyBusinessUnit')
  const benefitSelect = document.getElementById('copyBenefitType')

  // Safety: page might not contain these elements
  if (!businessUnit || !benefitSelect) return

  const options = Array.from(benefitSelect.options)

  function updateBenefitOptions () {
    const selectedUnit = businessUnit.value

    options.forEach(option => {
      const unit = option.dataset.businessUnit

      // ✅ No business unit selected → show EVERYTHING
      if (selectedUnit === '') {
        option.hidden = false
        return
      }

      // ✅ Options without a business unit should remain visible
      if (!unit) {
        option.hidden = false
        return
      }

      // ✅ Show matching options only
      option.hidden = unit !== selectedUnit
    })
  }

  // Run on change
  businessUnit.addEventListener('change', function () {
    updateBenefitOptions()
    benefitSelect.value = ''
  })

  // ✅ Run once on page load (important!)
  updateBenefitOptions()
})


// Add more JavaScript here


})

