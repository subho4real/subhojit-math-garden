var resultToCompare;
var userScore = 0;
var backgroundImages = [];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

function prepareGame (){
    var i = getRandomInt(1,8);
    var j = getRandomInt(0,9-i);

    document.getElementById("n1").innerHTML = i;
    document.getElementById("n2").innerHTML = j;

    resultToCompare = i+j;
}

function checkAnswer(){
    const prediction = predictImage();

    if (prediction == resultToCompare)
    {
        userScore = userScore + 1;
        backgroundImages.push(`url(images/background${userScore}.svg)`);
        document.body.style.backgroundImage = backgroundImages;

        if (userScore == 6)
        {
            alert(`AMAZING! You have won this game!!! Current Score: ${userScore}`);
            backgroundImages = []
            userScore = 0;
            document.body.style.backgroundImage = backgroundImages;
            
        }
        
    }
    else{
        if (userScore != 0 )
        {
            userScore = userScore - 1;
            alert(`Sorry! Try again!!! Current Score: ${userScore}`);
            setTimeout(function (){
                var x = backgroundImages.pop();
                document.body.style.backgroundImage = backgroundImages;
            }, 1000)
        }
    
        
    }


}