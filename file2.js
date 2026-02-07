function check_age() {
    let age = document.getElementById("age").value; 
    if(age=='')
    {
        console.log("your age is 10");
        age=10; //age eka emptynam age eka automatically 10i kiyala gannawa 
    }
    if (age > 18) {
        console.log("You are an adult.");
    } else {
        console.log("You are young.");
    }
}

//************************************************************************************************************** */
function check_district(){

    let discrict=document.getElementById("select1").value;
    switch(discrict)
    {
       case "colombo":
       console.log("you are in colombo");
       break;
       case "kurunagala":
        console.log("you are in kurunagala");
        break;
        case "mawathagama":
            console.log("you are in mawathagama");
            break;
        default:
            console.log("you are in another country")
    }

}
//*************************************************************************************************************** */
function compare()
    {
        let num1=document.getElementById("input1").value;
        let num2=document.getElementById("input2").value;
        num1=Number(num1);
        num2=Number(num2);
        if(num1==num2)
        {
            console.log("num1 and num2 value same");
            document.getElementById("div1").innerHTML="num1 and num2 value same"; //inner html
        }
        if(num1===num2){
console.log("num1 and num2 value and data type same");
document.getElementById("div2").innerHTML="num1 and num2 value and data type same"; //inner html
        }

    } 

//************************************************************************************************************** */

    function show_message()
    {
alert("this is a message box");
document.getElementById("div3").innerHTML="clicked message"; //message box eka click karahama wena de methana denna
    }

//***************************************************************************************************************** */

    function get_input()
    {
let input=prompt("what is your name");
document.getElementById("div3").innerHTML=typeof input; //input type eka balaganna
console.log(input); 
    }

//**************************************************************************************************************** */


    function ok_box()
    {
let ok=confirm("are you sure");
console.log(typeof ok);
if(ok==true)
{
    document.getElementById("div3").innerHTML="prrof";
}else{
    document.getElementById("div3").innerHTML="not prrof";
}
    }

    //********************************************************************************************************** */

    