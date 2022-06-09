// code your solution here
function saturdayFun(activity="roller-skate") {
    return(`This Saturday, I want to ${activity}!`)
}

const mondayWork = function(activity="go to the office") {
    return (`This Monday, I will ${activity}.`)
}

function wrapAdjective(flair="*") {
    (adj="Special") => `You are ${flair + adj + flair}!`
}

function wrapAdjective(string = "*") {
    return `You are ${string}${string}!`
    wrapAdjective()(parameter = 'special')
        return `You are ${string}${parameter}${string}!`
  }

//  function wrapAdjective(flair="*") {
//    (adj="Special") => `You are ${flair + adj + flair}!`
//}
//function wrapAdjective() {
//    return function inner(default='*') {
//    return `You are ${default}!`
//    }
//}