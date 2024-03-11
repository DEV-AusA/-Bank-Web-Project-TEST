const validate = (input) => {
    const errors = {}
    const emailRegex = /^.+@.+\..+$/; // <= regex
    if (emailRegex.test(input.username)) {
        console.log("HOLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
        errors.username = "Username is invalid"
    }
    return errors;
}
export default validate