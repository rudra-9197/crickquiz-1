var readlinesync = require("readline-sync")
const chalk = require("chalk")

var username = readlinesync.question(chalk.blue("what is your name?  ".toLowerCase()));
var score=0


console.log(chalk.red("hi!! " + username,"....welcome to the quiz."));
console.log("\n")
console.log("how well do u know " +chalk.blue("indian ")+ chalk.red("cricket?"))
console.log(".............")


function play(question,answer) {
  var useranswer = readlinesync.question(chalk.green(question));

 if (useranswer.toLowerCase() === answer){
   console.log(chalk.yellow("your answer is right."));
   score= score+1;
   }
  else{
  console.log("your answer is wrong");
   score =score-1;
   }
console.log("..................")
}





// calling the array;
var questions = [{
  question:"1.when did india play first test match?\na.1932\nb.1942\nc.1955\nd.1931\n Enter ans>:",
  answer:"1932"
},{
  question:"2.which year did india won cricket world cup\na.1954\nb.1982\nc.1983\nd.1962\n Enter ans>",
  answer:"1983"
  },{
  question:"3.who is the top wicket taker in the 2011 world cup?\na.ishanth sharma\nb.ravindra jadeja\nc.jasprith boomrah\nd.jaheer khan\n Enter ans>:"  ,
  answer:"jaheer khan"
  },{
  question:"4.who is the top run scorer in the 2019 cricket world cup?\na.rohit sharma\nb.virat kohli\nc.sachin tendulkar\nd.yuvraj singh\n Enter ans>:",
  answer:"rohit sharma"  
  },{
  question:"5.who was awarded man of the tournament in icc world cup?\na.dhoni\nb.virat kohli\nc.sachin\nd.ravindra jadeja\n Enter ans>:",
  answer:"sachin"
  }]

  
//loop
for( i=0;i<questions.length;i++){
 var currentquestion = questions[i];
  play(currentquestion.question,currentquestion.answer)
  
}
console.log("your total score is "+score)