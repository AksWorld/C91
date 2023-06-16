function LabelNameScoreTurn(){
 document.getElementById("player1_name").innerHTML=localStorage.getItem("player1_name",player1_name);
 document.getElementById("player2_name").innerHTML=localStorage.getItem("player2_name",player2_name);
 document.getElementById("player1_score").innerHTML=0;
 document.getElementById("player2_score").innerHTML=0;
 document.getElementById("player_question").innerHTML="Question Turn - "+ localStorage.getItem("player1_name",player1_name);
 document.getElementById("player_answer").innerHTML="Answer Turn - "+ localStorage.getItem("player2_name",player2_name);
}
function Send(){
    console.log("personfsfsf");
 number1=document.getElementById("number_1").value;
 number2=document.getElementById("number_2").value;
 actual_answer=parseInt(number1) * parseInt(number2);
 question_number= "<h4>" + number1 + "X" + number2 + "</h4>"
 input_box= "<br>Answer :  <input type='text' id='input_check_box'>";
 check_button= "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
 row= question_number+input_box+check_button;
 document.getElementById("output").innerHTML=row;
 document.getElementById("number_1").value="";
 document.getElementById("number_2").value="";
}