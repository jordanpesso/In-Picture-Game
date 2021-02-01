
var gQuests = [
    {id: 0, opts:['Taj Mahal, India', 'Machu Picchu'], correctOptIndex:0, score:10},
    {id: 1, opts:['Chichén Itza, Mexico', 'Christ The Redeemer, Brazil'], correctOptIndex:1, score:20 },
    {id: 2, opts:['Pyramids of Giza', 'look like ashdod'], correctOptIndex:0, score:40 }

]

var gScore = 0
// idx of the current question
var gCurrQuestIdx = 0
// function createQuests(){

//     }

function init() {
    gCurrQuestIdx = 0 
    gScore = 0
    renderQuest(gQuests)
    // gQuests =createQuests();
    console.log(gQuests)


}

function renderQuest(){
    var elQuestArea = document.querySelector('.questions-area')
if (gCurrQuestIdx<gQuests.length) {
    var currQuest = gQuests[gCurrQuestIdx]
    var imgName = currQuest.id
    // var elQuest = currQuest
    // // document.querySelector('answers')
    var elAnswersButtons = document.querySelectorAll('.answers button')
    elQuestArea.innerHTML = `<img class="question-images" src="img/${imgName}.jpg" alt="taj"></img>`
    
    for (var i =0; i<currQuest.opts.length; i++) {
        elAnswersButtons[i].innerText=currQuest.opts[i];
    }
}else {
    var elScore = document.querySelector('.score')
    elScore.innerText = gScore
 toggleScreen()
    
}

}
function checkAns(optIdx){
    // debugger;
    var currQuest = gQuests[gCurrQuestIdx]
var currAns = currQuest.correctOptIndex;
if (optIdx===currAns){
    gScore+= currQuest.score 
}  
gCurrQuestIdx++;
renderQuest();
     
}

function restatGame() {
    toggleScreen()
    init()
    
}

function toggleScreen(){
    var victorious = document.querySelector('.victorious')
    victorious.classList.toggle('displaynone');
    var elQuestArea = document.querySelector('.questions-area')
    elQuestArea.classList.toggle('displaynone')
    var elAnswers = document.querySelector('.answers')
    elAnswers.classList.toggle('displaynone')
}