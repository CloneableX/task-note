function setOrPush(target, val) {
    var result = val;
    if (target) {
        result = [target];
        result.push(val);
    }
    return result;
}

function getFormResults(formElement) {
    var formElements = formElement.elements;
    var formParams = {};
    var i = 0;
    var elem = null;
    for (i = 0; i < formElements.length; i += 1) {
        elem = formElements[i];
        switch (elem.type) {
        case 'submit':
            break;
        case 'radio':
            if (elem.checked) {
            formParams[elem.name] = elem.value;
            }
            break;
        case 'checkbox':
            if (elem.checked) {
            formParams[elem.name] = setOrPush(formParams[elem.name], elem.value);
            }
            break;
        default:
            formParams[elem.name] = setOrPush(formParams[elem.name], elem.value);
        }
    }
    return formParams;
}