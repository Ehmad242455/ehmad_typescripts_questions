// Function to determine if the age makes the user a minor or an adult
function determineAgeCategory(age) {
    if (age < 0) {
        console.log("Invalid age entered");
    }
    else if (age <= 18) {
        console.log("You are a minor.");
    }
    else {
        console.log("You are an adult.");
    }
}
determineAgeCategory(32);
export {};
