const count = document.getElementById('count')
const question = document.getElementById('question')
const nextBtn = document.getElementById('next')
const domOptions = document.getElementsByClassName('options')
const optionContainer = document.getElementById('options')
const domPoints = document.getElementById('points')

let countVar = 0
let points = 0
let tempAns
const noOfQuestions = Object.keys(questionJson).length

function initQuestion(q,options){
    console.log(options);
    count.innerText = `${countVar}/${noOfQuestions}`
    question.innerText = `${q}`
    
    for(let i in options){
        console.log(options[i]);
         console.log(domOptions[i]);
        domOptions[i].innerHTML = options[i]
        domOptions[i].addEventListener('click',()=>{
            nextBtn.classList.remove('disable')
            domOptions[0].classList.remove('selected')
            domOptions[1].classList.remove('selected')
            domOptions[2].classList.remove('selected')
            domOptions[3].classList.remove('selected')
            domOptions[i].classList.add('selected')
            tempAns = domOptions[i].innerHTML;
        })
    }

}

function reset(){
    countVar++;
    nextBtn.classList.add('disable')
    domOptions[0].classList.remove('selected')
    domOptions[1].classList.remove('selected')
    domOptions[2].classList.remove('selected')
    domOptions[3].classList.remove('selected')
   
    const q = questionJson[countVar].Q
    const a = questionJson[countVar].ans
    const options = questionJson[countVar].option
    for(let i in options){
        domOptions[i].classList.remove('correct','wronge')
    }
    initQuestion(q,options)
}


function check(ans){
    if(ans === tempAns){
        points+=10
    }
}

function showResults(){
    document.getElementById('score').innerHTML = `You Scored ${points}`
    document.getElementById('resultContainer').classList.remove("hidden")

}


function next(){
    if (countVar === 0){
        reset()
    }else if(countVar === noOfQuestions-1){
        reset()
        nextBtn.innerHTML = "Show Results"
    }else if(countVar === noOfQuestions){
        showResults()
    }
    else{
        check(questionJson[countVar].ans)
        reset()
    }
}


if(nextBtn)nextBtn.addEventListener('click',next)
next()

