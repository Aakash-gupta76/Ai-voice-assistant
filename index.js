const content=document.querySelector("#content")
const voice=document.querySelector("#voice")
const btn=document.querySelector(".btn")
function speak(message){
    let text_speak=new SpeechSynthesisUtterance(message)
    text_speak.rate=1;
    text_speak.pitch=1;
    text_speak.volume=1;
    text_speak.lang="hindi";
window.speechSynthesis.speak(text_speak)

}
function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    console.log(hours);
    if(hours>=0 && hours<12){
        speak("Good morning Aakash sir");

    }
    else if(hours>=12 && hours<16){
        speak("Good Afternoon Aakash sir");
    }
    else
        {
        speak("Good evening Aakash sir..");

    }

}
window.addEventListener('load',()=>{
   wishMe();
});


let SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition=new SpeechRecognition()
recognition.onresult=(event)=>{
   let currentIndex= event.resultIndex
   let transcript=event.results[currentIndex][0].transcript
   content.innerText=transcript;
    console.log(transcript);
    takeCommand(transcript.toLowerCase());
};

btn.addEventListener("click",()=>{
    recognition.start();
    btn.style.display="none";
    voice.style.display='block';

});
function takeCommand(message){
     btn.style.display="flex";
        voice.style.display='none';
if(message.includes("Hello,Lyra")||message.includes("Hey,Lyra")){

    speak("hello,Aakash sir,How can I help you?");

}
else if(message.includes("Who are you?")){
    speak("Hello sir,I`m Lyra a Virtual assistant created by Aakash gupta sir");

}
else if(message.includes("Lyra open my portfolio website")){
    speak('your portfolio is opening...')
window.open("https://aakash-gupta76.github.io/Modern-portfolio-website/");
speak("This is your portfolio website, Aakash sir");

}
else if(message.includes("Lyra open my instagram account")){
    speak('your instagram account is opening...')
window.open("https://www.instagram.com/developer_baniya4959?igsh=ZG1wdWd6cjlrbTRx");
speak("This is your instagram account, Aakash sir");

}
else if(message.includes("Lyra open my linkdin account")){
    speak('your linkdin account is opening...')
window.open("https://www.linkedin.com/in/aakash-gupta760771");
speak("This is your linkdin account, Aakash sir");

}
else if(message.includes("Lyra open my github account")){
    speak('your githuib account is opening...')
window.open("https://github.com/Aakash-gupta76");
speak("This is your github account, Aakash sir");

}
else {
    speak(`this nis what i found on internet regarging${message.replace("Lyra","")}`)

window.open(`https://www.google.com/search?q=${message.replace("Lyra","")}`);
speak("This is your github account, Aakash sir");


}
}


