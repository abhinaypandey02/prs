export function getErrorMessage(code){
    switch (code){
        case "required":return "This field is required"
        case "passwordMismatch": return "Passwords don't match"
        case "emailPattern": return "Invalid email format"
        case "minLength": return "Field too short"
        default: return "Error in this field"
    }

}