  $( document ).ready(function(){
    gameNumber = Math.floor(Math.random() * 102 ) + 19;
    $('#scoreToMatch').text(gameNumber);
    var gCrystal = reGenNum();
    var rCrystal = reGenNum();
    var bCrystal = reGenNum();
    var yCrystal = reGenNum();

    var playerTotal= 0; 
    var wins= 0;
    var losses = 0;

    $('#wins').text(wins);
    $('#losses').text(losses);
    
    function reGenNum (){
      var ranNum = Math.floor(Math.random()*12+1);
      return ranNum;
    }


    function restart(){
      gameNumber=Math.floor(Math.random()*102+19);
      
      $('#scoreToMatch').text(gameNumber);
      var gCrystal = reGenNum();
      var rCrystal = reGenNum();
      var bCrystal = reGenNum();
      var yCrystal = reGenNum();
      playerTotal= 0;
      $('#totalScore').text(playerTotal);
    } 

    function gameWin(){
      alert("You won!");
      wins++; 
      $('#wins').text(wins);
      restart();
    }
        
    function gameLose(){
      alert ("You lose!");
      losses++;
      $('#losses').text(losses);
      restart();
    }

    $('.red').on ('click', function(){
      playerTotal = playerTotal + rCrystal;
      $('#totalScore').text(playerTotal).css('color','black');
      // $('#totalScore').css('color','black');
          if (playerTotal == gameNumber){
            gameWin();
          }
          else if ( playerTotal > gameNumber){
            gameLose();
          }   
    });  

    $('.blue').on ('click', function(){
      playerTotal = playerTotal + bCrystal;
      $('#totalScore').text(playerTotal).css('color','black'); 
          if (playerTotal == gameNumber){
            gameWin();
          }
          else if ( playerTotal > gameNumber){
            gameLose();
          } 
    });

    $('.yellow').on ('click', function(){
      playerTotal = playerTotal + yCrystal;
            $('#totalScore').text(playerTotal).css('color','black');
  
            if (playerTotal == gameNumber){
            gameWin();
          }
          else if ( playerTotal > gameNumber){
            gameLose();
          } 
    });

    $('.green').on ('click', function(){
      playerTotal = playerTotal + gCrystal;
            $('#totalScore').text(playerTotal).css('color','black'); 
        
            if (playerTotal == gameNumber){
            gameWin();
          }
          else if ( playerTotal > gameNumber){
            gameLose();
          }
    }); 

  });