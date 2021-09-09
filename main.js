// let i = 0
// let txt = `Hello Guys Welcome To My New Game Called "Dam: Code"
// `;


// function typwritter(){
//     if(i < txt.length){
//         document.querySelector(".demo").innerHTML += txt.charAt(i)
//         i++;

//         setTimeout(typwritter, 100);
//     }
    
// }

// typwritter()

// function hide(){
//     document.querySelector(".demo").style.display = "none"

// }

// setTimeout(hide, 12000)


// var userName = prompt("Welcome please can you tell us your name")
// var userNameDisplay = document.querySelector(".userNameDisplay").textContent = `Welcome ${userName} to the world of command console`

// if(userName == ""|| userName == null){
//     alert("please enter your name to contiune..Reload this page and input your name to have access to this game");

//     document.querySelector(".container").style.display = "none";
// }


const closeToggle = document.querySelector(".closeToggle")

closeToggle.addEventListener("click", function(){
    console.log("hello")
})


// Auto complate input part

const commands = [
    "/text :",
    "/menu :",
    "/house :",
    "/anim :",
    "/anim : stop",
    "/anim : start",
    "/about :",
    "/contact : ",
    "/help: ",
    "/theme : black",
    "/theme : white"
];

var command = commands.length;

function show(value){
    document.getElementById("datalist").innerHTML = "";

    list = value.length;

    for(let i = 0; i < command; i++){

        if(((commands[i].toLowerCase()).indexOf(value.toLowerCase())) >-1){
            var n = document.createElement("option");
            
            var v = document.createTextNode(commands[i]);
            n.appendChild(v);
            
            document.getElementById("datalist").appendChild(n);
        }
    }
}

const btn = document.querySelector(".btn");
// stating from here in your next coding
btn.addEventListener("click", function(){
    const input = document.querySelector(".sample").value;

    if(input == "/theme : black"){
        document.querySelector(".container").style.background = "black";
        
        document.querySelector(".instructions").style.color = "white";
    }else if(input == "/theme : white"){
        document.querySelector(".instructions").style.color = "black";

        document.querySelector(".container").style.background = "white";
    }
})