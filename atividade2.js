import PromptSync from "prompt-sync"
const prompt =  PromptSync()

const clientes = []

while(true){
    const nome = prompt('Insira o Nome do Cliente: ')
    if (nome === ''){
        break;
    }

    const hobbies = []
    while (true) {
        const hobby = prompt(`Insira um hobby  ${nome}: `)
        if (hobby === ''){
            break
        }
        hobbies.push(hobby);
    }

    clientes[nome] = hobbies;
}

console.log("Clientes e seus hobbies: ")
console.log(clientes)