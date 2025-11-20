
const content=document.querySelector("#content")
const voice=document.querySelector("#voice")
const btn=document.querySelector(".btn")
function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1;
    text_speak.pitch=1;
    text_speak.volume=1;
    text_speak.lang="hi-GB";
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
})


let speehReRecognition=window.SpeechRecognition||window.webkitSpeechRecognition
let recognition=new speechRecognition()
recognition.onresult=(event)=>{
   let currentIndex= event.resultIndex
   let transcript=event.results[currentIndex][0].transcript
   content.innerText=transcript;
    console.log(event)
    takeCommand(transcript.toLowerCase());
}
btn.addEventListener("click",()=>{
    recognition.start();
    btn.style.display="none";
    voice.style.display='block';

})
function takeCommand(message){
     btn.style.display="flex";
        voice.style.display='none';
if(message.hoursincludes("Hello,Lyra")||message.hours.includes("Hey,Lyra")){

    speak("hello,Aakash sir,How can I help you?");

}
else if(message.includes("Who are you?")){
    speak("Hello sir,I`m Lyra a Virtual assistant created by Aakash gupta sir");

}
else if(message.includes("Lyra open my portfolio website")){
    speak('your portfolio is opening...')
window.open("///");
speak("This is your portfolio website, Aakash sir");

}
else if(message.includes("Lyra open my instagram account")){
    speak('your instagram account is opening...')
window.open("///");
speak("This is your instagram account, Aakash sir");

}
else if(message.includes("Lyra open my linkdin account")){
    speak('your linkdin account is opening...')
window.open("///");
speak("This is your linkdin account, Aakash sir");

}
else if(message.includes("Lyra open my github account")){
    speak('your githuib account is opening...')
window.open("///");
speak("This is your github account, Aakash sir");

}
else {
    speak(`this nis what i found on internet regarging${message.replace("Lyra","")}`)

window.open(`https://www.google.com/search?q=${message.replace("Lyra","")}`);
speak("This is your github account, Aakash sir");


}
}