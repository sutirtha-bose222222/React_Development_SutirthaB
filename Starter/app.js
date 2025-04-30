console.log("Hello I'm JS");
console.log(document); 
console.log(document.getElementsByTagName("h1")[0].innerHTML);
document.getElementsByTagName("span")[0].innerHTML="Hi, I'm coming from Javascript";
console.log(document.getElementsByTagName("span"));

document.getElementById("primary-btn-id").addEventListener('click',function (){
    alert("Hello I'm Sutirtha Bose");
});

function dontClickBtn(){
    alert("Oh Sorry!!! I clicked you!!!");
}