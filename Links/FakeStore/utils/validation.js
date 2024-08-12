function ValidationUsername(username) {
    const RegEx = /^[a-zA-Z\d_]{4,16}$/;
    const Result = RegEx.test(username);
    return Result;
}

function ValidationPassword(password) {
    const RegEx = /^.{4,20}$/;
    const Result = RegEx.test(password);
    return Result;
}

const ValidateForm = (username, password) => {
    const UserNameResult = ValidationUsername(username);
    const PassWordResult = ValidationPassword(password);

    if (UserNameResult && PassWordResult) return true;
    else if (!UserNameResult)
        alert(
            "Username is not valid, only Alphabet, Numbers and _ are acceptable!"
        );
    else if (!PassWordResult)
        alert("Password is not valid, it is must be between 4 and 20!");
};

export default ValidateForm;
