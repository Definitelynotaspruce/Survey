import { domControl } from './domControl.js';


/* document.getElementById("add_second_name").onclick = function() {
    domControl.createInputField(document.getElementById("second_name-label"), "input-box", "second_name", "Second name: ", "Enter second name here (optional)" );
};
 */

document.getElementById("add_second_name").onclick = function () {
    domControl.hideElement("second_name-label",
        "- Remove second name",
        "+ Add second name",
        this)
}
document.getElementById("add_second_surname").onclick = function () {
    domControl.hideElement("second_surname-label",
        "- Remove second surname",
        "+ Add second surname",
        this)
}

document.getElementById("education_dropdown").onchange = function () {
    let graduationObj = document.getElementById("graduation");
    let qualificationObj = document.getElementById("qualification");
    let degreeObj = document.getElementById("degree");
    switch (this.value) {
        case "None":
            domControl.hideObject(graduationObj);
            break;
        case "Profession":
        case "College":
            domControl.showObject(graduationObj);
            domControl.showObject(qualificationObj);
            domControl.hideObject(degreeObj);
            break;
        case "University":
            domControl.showObject(graduationObj);
            domControl.showObject(qualificationObj);
            domControl.showObject(degreeObj);
            break;
        default:
            domControl.showObject(graduationObj);
            domControl.hideObject(degreeObj);
            domControl.hideObject(qualificationObj);
            break;
    }
}

document.getElementById("marriage_dropdown").onchange = function () {
    let partnerObj = document.getElementById("partner-info")
    if (this.value === "married") {
        domControl.showObject(partnerObj);
    } else {
        domControl.hideObject(partnerObj);
    }
}

document.getElementById("add_link").onclick = function () {
    domControl.createInputField(document.getElementById("second_name-label"),
        "input-box",
        "link",
        "Nuoroda: ",
        "Nuoroda į socialinį tinklą")
}




/* domControl.createInputField(document.getElementById("survey-form"), "input-box", "second_name", "Second name: ", "Enter second name here (optional)" ); */

/* document.getElementById("myBtn").addEventListener("click", displayDate);
 */