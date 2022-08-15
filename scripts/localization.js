// self mange localization script just for a personal profil if yopu want to used it for a large project it's recommended using a library
//Autor Duplex kamdjou - August 2022

// get the browser langage
let language = window.navigator.userLanguage || window.navigator.language;

// The active locale
let locale = '';

// set the default user local
if(language == 'en-US' || language == 'en'){
  locale = 'en';
}else{
  locale = language;
}



// When the page content is ready...
document.addEventListener("DOMContentLoaded", () => {

  siteTranslator();
    
  //set language buttons
  const en_btn = document.querySelector('#english-lang');
  const fr_btn = document.querySelector('#french-lang');
  if(locale == 'en-US' || locale == 'en'){
    en_btn.style.display = 'none';
  }else if(locale == 'fr'){
    fr_btn.style.display = 'none';
  }else{
    locale = 'en';
  }

  en_btn.addEventListener('click', ()=>{
    locale = 'en';
    siteTranslator();
    fr_btn.style.display = 'inline-block';
    en_btn.style.display = 'none';
  })

  fr_btn.addEventListener('click', ()=>{
    locale = 'fr';
    siteTranslator();
    en_btn.style.display = 'inline-block';
    fr_btn.style.display = 'none';
  })

});


function siteTranslator(){
  document
    // Find all elements that have the key attribute
    .querySelectorAll("[data-i18n-key]")
    .forEach(translateElement);
}

// Replace the inner text of the given HTML element
// with the translation in the active locale,
// corresponding to the element's data-i18n-key
function translateElement(element) {
  const key = element.getAttribute("data-i18n-key");
  const translation = translations[locale][key];
  element.innerHTML = translation;
}