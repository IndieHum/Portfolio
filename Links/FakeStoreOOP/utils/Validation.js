const ValidateUserName = (username) => {
    const RegEx = /^[a-zA-Z\d_]{4,16}$/;
    const Result = RegEx.test(username);
    return Result;
};

const ValidatePassWord = (password) => {
    const RegEx = /^.{4,20}$/;
    const Result = RegEx.test(password);
    return Result;
};

function ValidateForm(username, password) {
    const ValidUserName = ValidateUserName(username);
    const ValidPassWord = ValidatePassWord(password);

    if (ValidUserName && ValidPassWord) return true;

    if (!ValidUserName) alert("wrong username");
    if (!ValidPassWord) alert("wrong password");
}

export default ValidateForm;
