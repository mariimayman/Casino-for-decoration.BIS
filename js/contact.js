function Validateform() {

    var contact_name = document.forms['form']['name'].value;
    if (contact_name == "" || contact_name == null) {
        alert(" Please, fill the Name field");
        return false;
    }

    var contact_email = document.forms['form']['email'].value;
    if (contact_email == "" || contact_email == null) {
        alert(" Please, fill the Email field");
        return false;
    }
    var message = document.forms['form']['message'].value;
    if (message == "" || message == null) {
        alert(" Please, fill the message field");
        return false;
    }

}