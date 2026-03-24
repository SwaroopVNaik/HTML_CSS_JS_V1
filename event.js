function changeColor1(){
    //alert("Test Case 123")
    // console.log("Test Case 123")
    let btn1=document.getElementById('btn1');
    console.log(btn1);
    btn1.innerHTML = "Donald Trump";
    btn1.style.backgroundColor = "red";
}

function changeColor2(){
    let btn2 = document.getElementsByClassName('btnstyle1')[0]
    console.log(btn2);
    
    btn2.style.backgroundColor="Yellow";
}