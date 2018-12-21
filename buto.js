
function check(){

    var s1 = document.quiz.s1.value;
    var s2 = document.quiz.s2.value;
    var s3 = document.quiz.s3.value;
    var count=0;
  
        if (s1 == "d") {
          count+=25;
        }
        if (s2 == "b"){
          count+=25;
        }
        if (s3 == "b"){
          count+=25;
        }
        
    document.getElementById("after_submit").style.visibility ="visible";
  
    document.getElementById("number_count").innerHTML = "You got " +count + "%.";
  
    $("#button").hide();
    $("#quiz").hide();
    $("#number_count").show();
    event.preventDefault();
  
  };