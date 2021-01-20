export const domControl = (() => {

    const createInputField = (parent, className, ID_name, label_text, placeholder) => {
        if (label_text) {
            const label = document.createElement("label");
            label.innerText = label_text;
            parent.appendChild(label);
        }
        const input = document.createElement("input");
        input.type = "text";
        input.className = className;
        input.placeholder = placeholder;
        input.setAttribute("id", ID_name);

        return parent.appendChild(input);
    }

    const hideElement = (hiddenElementID, hideText, displayText, elementObj) => {
        let field = document.getElementById(hiddenElementID)
        if (field.style.display === "none") {
            field.style.display = "block";
            elementObj.innerText = hideText;
        } else if (field.style.display === "block") {
            field.style.display = "none";
            elementObj.innerText = displayText;

        } else {
            field.style.display = "block";
            elementObj.innerText = hideText;
        }
    }

    const changeElement = (elementObj) => {
        if (elementObj.style.display !== "none") {
            elementObj.style.display = "none";
        } else {
            elementObj.style.display = "block";
        }
    }

    const hideObject = (elementObj) => {
        elementObj.style.display = "none";
    }

    const showObject = (elementObj) => {
        elementObj.style.display = "block";
    }

    return {
        createInputField,
        hideElement,
        changeElement,
        hideObject,
        showObject,
    }
})();


