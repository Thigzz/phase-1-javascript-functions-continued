// code your solution here
function saturdayFun(activity) {
    if (activity) {
        return `This Saturday, I want to ${activity}!`;
    } else {
        return "This Saturday, I want to roller-skate!";
    }
}

const mondayWork = function(action) {
    if (action) {
        return `This Monday, I will ${action}.`;
    } else {
        return "This Monday, I will go to the office."
    }
}

function wrapAdjective(flair = "*") {
    return function(trait = "special") {
        return `You are ${flair}${trait}${flair}!`
    }
}