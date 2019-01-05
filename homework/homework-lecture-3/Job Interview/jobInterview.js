
// Job Interview
// Two of three questions must have positive / true value!
// 10 ball for each positive answer

var candidateAge;
var candidateExperience;
var businessTripReadiness;
var calculateBalls;

// Ask candidate age
var askAge = Number(prompt('How old are you?'));

if (askAge === null || askAge == "") {
    candidateAge = 0;
} else if (isNaN(askAge)) {
    alert ('Please, input numbers only!');
} else if (askAge < 30 || askAge > 65) {
    candidateAge = 0;
} else {
    candidateAge = 10;
}

/* switch (true) {
    case NaN:
        alert ('Please, input numbers only!');
        break;
    case null:
    case (askAge < 30 || askAge > 65):
        candidateAge = 0;
        break;
    default:
        candidateAge = 10;
} */

// Ask candidate experience

var askExperience = Number(prompt('How many full! years do you do as a web developer?'));

if (askExperience === null || askExperience == "") {
    candidateExperience = 0;
} else if (isNaN(askExperience)) {
    alert ('Please, input numbers only!');
} else if (askExperience < 2) {
    candidateExperience = 0;
} else {
    candidateExperience = 10;
}

/* switch (true) {
    case NaN:
        alert ('Please, input numbers only!');
        break;
    case null:
    case (askExperience < 2):
        candidateExperience = 0;
        break;
    default:
        candidateExperience = 10;
} */

// Ask candidate readiness for business trip

var defaultAskReadinessForTrip = prompt('Are you ready for monthly business trip? (Yes or No)');
var askReadinessForTrip = defaultAskReadinessForTrip.toLowerCase();
    

if (askReadinessForTrip !== 'yes' && askReadinessForTrip !== 'no') {
    alert ('Please, input \'Yes\' or \'No\' only!');
} else if (askReadinessForTrip === 'no' || askReadinessForTrip == "" || askReadinessForTrip === null) {
    businessTripReadiness = 0;
} else  {
    businessTripReadiness = 10;
}

/* switch (true) {
    
    case (askReadinessForTrip !== 'yes' && askReadinessForTrip !== 'no'):
        alert ('Please, input \'Yes\' or \'No\' only!');
        break;
    case null:
    case (askReadinessForTrip === 'no'):
        businessTripReadiness = 0;
        break;
    default: 
        businessTripReadiness = 10;

} */

// calculate candidate ball and make a resume

calculateBalls = candidateAge + candidateExperience + businessTripReadiness;

if (calculateBalls < 20 || calculateBalls == "" || calculateBalls === null) {
    alert('Sorry, we can\'t hire you!');
} else {
    alert('Congradulations! You are hired!');
}






