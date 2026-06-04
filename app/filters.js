//
// For guidance on how to create filters see:
// https://prototype-kit.service.gov.uk/docs/filters
//

const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter


// Format date filter that turns day, month and year into a GOV.UK style format

govukPrototypeKit.views.addFunction('formatDate', function (day, month, year) {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]

    return `${parseInt(day, 10)} ${months[parseInt(month, 10) -1]} ${year}`
})

// Add your filters here