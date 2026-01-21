//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here


//Homepage routing
router.post("/homepage", (req, res) =>{
    if(req.body.yourBenefits === "radio") {
        res.redirect("/homepage/radio");
    } else {
        // could also do === "navigation" but don't really care
        res.redirect("/homepage/navigation"); 
    }
})