let inicialization = prompt('Olá, seja bem vindo(a) a hamburgueria Hamburguer, como posso ajudar? 1 Fazer um pedido | 2 Tirar dúvidas | 3 Sair');

if (inicialization === 1) {
    let order = prompt('Certo, quer dar uma olhada em nosso cardápio ou já sabe o que pedir? 1 Cardápio | 2 Já sei o que quero!');
        if (order === 1){
            let menu = prompt('Qual vai ser seu pedido? 1 x-burguer | 2 x-salada | 3 x-bacon | 4 x-frango ')
            console.log(menu)
        } else{
            console.log('uai')
        }
} else if (inicialization === 2){
    prompt('Qual é a sua dúvida? 1 Horário de funcionamento | 2 Valores dos lanches | 3 Nenhuma das opções.')

} else if (inicialization === 3) {
    alert('Agradecemos seu contato e ficamos a disposição, até mais.');
} else {
    alert('Digite uma opção válida.')
    console.log(inicialization)
}