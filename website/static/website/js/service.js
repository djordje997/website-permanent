function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function changePlaceholder(language){
    if (dictionary.hasOwnProperty(language)) {
        var values = dictionary[language];
        $("[data-translate]").each(function(){
            if($(this).is( "input" )){
                $(this).attr('placeholder',values[$(this).data("translate")] )
            } else{
                // $(this).text(dictionary[$(this).data("translate")])
            }
        })
    }
};

var dictionary = {
    "en": {
        "email_placeHolder": "Enter email",
        "company_name_placeHolder" : "Enter company name",
        "number_invoices_placeHolder" : "Enter number of invoices",
        "number_employees_placeHolder" : "Enter number of employees",
        "number_d_invoices_placeHolder" : "Enter number of domestic input invoices",
        "number_i_invoices_placeHolder" : "Enter number of international input invoices",
        "number_ccard_placeHolder" : "Enter number of business credit cards",
        "number_payed_invs_placeHolder" : "Enter number of cash payed invoices",
        "number_assets_placeHolder" : "Enter number of fixed assets"
    },
    "sr": {
        "email_placeHolder": "Unesite email",
        "company_name_placeHolder" : "Unesite naziv firme",
        "number_invoices_placeHolder" : "Unesite broj izlaznih faktura",
        "number_employees_placeHolder" : "Unesite broj zaposlenih",
        "number_d_invoices_placeHolder" : "Unesite broj ulaznih inostranih faktura",
        "number_ccard_placeHolder" : "Unesite broj poslovnih kreditnih kartica",
        "number_payed_invs_placeHolder" : "Unesite broj gotovinskih računa",
        "number_assets_placeHolder" : "Unesite broj osnovnih sredstava"
    }
};
var currentTab = 0; // Current tab is set to be the first tab (0)

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  // x = document.getElementsByClassName("tab");
  // y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  // for (i = 0; i < y.length; i++) {
    // If a field is empty...
    // if (y[i].value == "") {
      // add an "invalid" class to the field:
      // y[i].className += " invalid";
      // and set the current valid status to false:
      // valid = false;
    // }
  // }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}
$(document).ready(function(){

    
    showTab(currentTab); // Display the current tab


    $("#en-btn").on("click", function () {
     changePlaceholder("en")
 });
    $("#sr-btn").on("click", function () {
        console.log("kliknuto")
        changePlaceholder("sr")
    });


    var language = getCookie("language");
    if (language=="sr"){
        changePlaceholder("sr")
    }else if (language=="en"){
        changePlaceholder("en")
    }
    if (language==""){
        setCookie("language", "sr", 356)
        changePlaceholder("sr")
    }
});
