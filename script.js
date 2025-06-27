
const KEY = window.ENV.API_KEY

const prom = "Porque se usa JavaScrip?"
async function sendPrompt(prom) {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${KEY}`,
            "Content-Type": "application/json"
    },
        body: JSON.stringify({
        model: "gpt-4",
        messages: [{ role: "user", content: prom }]
    })
});
    

const data = await response.json();
console.log("Respuesta de OpenAI:");
console.log(data.choices[0].message.content);
}

sendPrompt(prom);



/*
function handleClick() {
    const userInput = document.getElementById("prom").value;
    callOpenAI(userInput); // Aquí pasas el texto del input como prompt
}
    */