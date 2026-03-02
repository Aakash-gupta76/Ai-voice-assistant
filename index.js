const content=document.querySelector("#content")
const voice=document.querySelector("#img")
const btn=document.querySelector(".btn")
const para=document.querySelector(".listen")
function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1;
    text_speak.pitch=1;
    text_speak.volume=1;
    text_speak.lang="hi-IN";

    
    
window.speechSynthesis.speak(text_speak)

}




function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    
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
    // wishMe();
 
});


let SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition=new SpeechRecognition();
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
    para.style.display="inline";
    

});



function takeCommand(message){
        btn.style.display="flex";
    voice.style.display="none";
      para.style.display="none";
  
    
     if(message.includes("hii")|| message.includes("hey")|| message.includes("hello") || message.includes("good")||message.includes("hi layra")){
        
        speak("Hey Aakash sir ! How can I help you sir?");
        console.log("Hey Aakash sir ! How can I help you sir?")
    }
    
    
     else if(message.includes("who are you")||message.includes("what is your name")){
        speak("I am layra a virtual assistant created by Aakash sir");
    }
       else if(message.includes("how are you")||message.includes("whats`up")){
        speak("I am fine,How can I help you sir");
    }

    else if(message.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://www.youtube.com/","_blank");
        speak("your task is completed sir")

    }
       else if(message.includes("open facebook")){
        speak("opening facebook...")
        window.open("https://www.facebook.com/","_blank");
         speak("your task is completed sir")

    }
    else if(message.includes("open my github")){
    speak('your githuib account is opening...')
window.open("https://github.com/Aakash-gupta76","_blank");
 speak("your task is completed sir")
    }
       else if(message.includes("open my instagram")){
        speak("opening instagram...")
        window.open("https://www.instagram.com/","_blank");
         speak("your task is completed sir")

    }
     else if(message.includes("open my portfolio")){
    speak('your portfolio is opening...')
 window.open("https://aakash-gupta76.github.io/Modern-portfolio-website/","_blank");
 speak("your task is completed sir")


}
       else if(message.includes("open spotify")){
        speak("opening sportify...")
        window.open("https://open.spotify.com/","_blank");
         speak("your task is completed sir")

    }
       else if(message.includes("open whatsapp")){
        speak("opening whatsapp...")
        window.open("whatsapp://","_blank");
         speak("your task is completed sir")

    }
      else if(message.includes("open chatgpt")){
        speak("opening chatgpt...")
        openchatgpt();
         speak("your task is completed sir")

    }

    

    
   
    
        else if(message.includes("time")){
        let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time);

    }
       else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short",year:"numeric"})
        speak(date);

    }
    else if(message.includes("open my linkedin")){
    speak('your linkedin account is opening')
window.open("https://www.linkedin.com/in/aakash-gupta760771","_blank");
 speak("your task is completed sir")

}



      else {
        
//         let finalText="this is what i found on internet regarding"+message.replace("lyra","")||message.replace("layra","")

//      speak(finalText)

// window.open(`https://www.google.com/search?q=${message.replace("layra","")}`,"_blank")
 let cleanMsg = message
    .replace("lyra","")
    .replace("layra","");

  askGemini(cleanMsg).then(reply => {

    speak(reply);
    // content.innerText = reply;

  });
    }
}









async function askGemini(userMessage){

  const API_KEY = "AIzaSyC8UZlxsdBkmE3NG7qS79BaNeLnPhRcpQA";

  const res = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=" + API_KEY,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              { text:userMessage+"reply in short minimum 30 words only and replace text 'google' by Aakash sir  and if ask your name? tell mera naam layra hai" }
            ]
          }
        ]
      })
    }
  );

  const data = await res.json();
  console.log(data);

  const reply =
    data.candidates?.[0]?.content?.parts?.[0]?.text;
    

  return reply || "Sorry, I could not understand.";
}







