import OpenAI from "openai";

async function sendPrompt() {
    const userInput = document.getElementById("prom").value;

    const client = new OpenAI();

    const completion = await client.chat.completions.create({
        model: "gpt-4.1",
        messages: [
            {
                role: "user",
                content: userInput,
            },
        ],
    });

    console.log(completion.choices[0].message.content);

}