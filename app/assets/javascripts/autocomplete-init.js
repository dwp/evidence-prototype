document.addEventListener("DOMContentLoaded", () => {
  const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola",
    "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan"
  ];

  accessibleAutocomplete({
    element: document.querySelector('#country-container'),
    id: 'country',
    source: countries,
    minLength: 2
  });
});