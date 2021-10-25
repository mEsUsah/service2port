let userInput = document.getElementById("subnetting__input");
let assignmentText = document.getElementById("subnetting__address");
let assingmentHint = document.getElementById("subnetting__hint");
let checkButton = document.getElementById("subnetting__checkbutton");
let difficultySelector = document.querySelectorAll('input[name="subnetting__level"]');
let alerts = document.getElementById("subnetting__alerts");
let attemptsDisplay = document.getElementById("subnetting__notications--attempts");
let scoreDisplay = document.getElementById("subnetting__notications--score");

let services = [
    {
        name: "HTTP",
        port: "80"
    },
    {
        name: "HTTPS",
        port: "443"
    },
    {
        name: "FTP-data",
        port: "21"
    },
    {
        name: "FTP-Control",
        port: "20"
    },
    {
        name: "SSH",
        port: "22"
    },
    {
        name: "Telnet",
        port: "23"
    },
    {
        name: "SMTP",
        port: "25"
    },
    {
        name: "DNS",
        port: "53"
    },
    {
        name: "DHCP-client",
        port: "68"
    },
    {
        name: "DHCP-server",
        port: "67"
    },
    {
        name: "TFTP",
        port: "69"
    },
    {
        name: "POP3",
        port: "110"
    },
    {
        name: "IMAP",
        port: "143"
    },
    {
        name: "SNMP",
        port: "161"
    },
    {
        name: "NTP",
        port: "123"
    },
]

let assignment;
let attempts = 0;
let score = 0;


function generateAssignment(){
    assignment = Math.floor(Math.random()*services.length);
    assignmentText.innerText = services[assignment].name;
    assingmentHint.innerText = services[assignment].port;

}

function gradeAnswer(){
    userInputReading = userInput.value;
    if (userInputReading == services[assignment].port){
        attempts++;
        score++;
        return true;
    } else {
        attempts++;
        return false;
    }
}

function checkAnswer(){
    if (gradeAnswer()){
        generateAssignment();
        displayCorrect();
        userInput.value = "";
    } else {
        displayError();
    }
    attemptsDisplay.innerText = attempts;
    scoreDisplay.innerText = score;
}

function displayCorrect(){
    userInput.classList.add("correct");
    setTimeout(() => {
        userInput.classList.remove("correct");
    }, 150);
}

function displayError(){
    userInput.classList.add("error");
    setTimeout(() => {
        userInput.classList.remove("error");
    }, 1000);

    assingmentHint.classList.add("active");
    setTimeout(() => {
        assingmentHint.classList.remove("active");
    }, 1000);
}

generateAssignment(0); // default value


/*-------Events------- */
checkButton.addEventListener('click', ()=>{
    checkAnswer();
});

difficultySelector.forEach((element)=>{
    element.addEventListener("change", () => {
        if (element.checked == true){
            networkClass = element.value;
            generateAssignment(networkClass);
        }
    })
})


window.addEventListener('keydown', (event)=>{
    if (event.key == "Enter"){
        checkAnswer();
    }
})
