let form = document.querySelector(".age-form");
let DOB = document.querySelector(".date");
let hour = document.querySelector(".hour");
let min = document.querySelector(".minute");
let msgBox = document.querySelector(".msg-box");
let timeBoxs = document.querySelectorAll(".counter-container h1");
let submit = document.querySelector(".submit");
let ageDisplayed = document.querySelector(".your-age");




let showDOB =(e)=>{
    // e.preventDefault();
    let DOBValue=DOB.value;
    let hourValue=hour.value;
    let minValue=min.value;


   
       if(!DOBValue || !hourValue || !minValue ){
        displayMsg("Enter all the values !","danger");
    } 
    else{

        let date = new Date(DOBValue);

        let tempYear=date.getFullYear();
        let tempMonth=date.getMonth();
        let tempDay =date.getDate();

        let dateFullDOB = new Date(tempYear,tempMonth,tempDay,hourValue,minValue);

        let currentDate = new Date();

        let t = currentDate.getTime() - dateFullDOB.getTime();

        //1s = 1000
        //1m = 60*1000
        //1hr = 60*60*1000
        //1d = 60*60*24*1000
        //1yr = 60*60*24*1000*365.25

        let oneMinInMs = 60*1000;
        let oneHourInMs =60*60*1000;
        let oneDayInMs =60*60*24*1000;
        let oneYearInMs =60*60*24*1000*365.25;

        let year = Math.floor(t/oneYearInMs);
        let month = Math.floor(((t/oneDayInMs)/30.44)%12);
        let day = Math.floor((t/oneDayInMs)%30.44);
        let hour = Math.floor((t/oneHourInMs)%24);
        let min = Math.floor((t/oneMinInMs)%60);
        let sec =Math.floor((t/1000)%60);

        let time=[year,month,day,hour,min,sec];

        timeBoxs.forEach((item,index)=>{
            item.innerHTML=`${time[index]}`;
        })
        
        ageDisplayed.innerHTML="Your age is ";
        // displayMsg("Age Calculated","success");
    }
    
}
submit.addEventListener("click",showDOB);

function displayMsg(msg,type){
    msgBox.innerHTML=msg;
    msgBox.classList.add(type);
    setTimeout(()=>{
        msgBox.innerHTML="";
        msgBox.classList.remove(type);
    },1000);
}

let countdown = setInterval(showDOB, 1000);

 



