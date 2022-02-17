const readLineSync = require('readLine-sync');

//1. A imobiliária Imóbilis vende apenas terrenos retangulares. Faça um algoritmo para ler as dimensões de um terreno e depois exibir a área do terreno. 



const P1 = readLineSync.questionFloat( "Digite o primeiro perimetro: " );

const P2 = readLineSync.questionFloat( "Digite o segundo perimetro: " );

const P3 = readLineSync.questionFloat( "Digite o terceiro perimetro: " );

const P4 = readLineSync.questionFloat( "Digite o quarto perimetro: " );

const area = ( P1 + P2 + P3 +P4 )

console.log ( ` Resutado: ${area}m² ` )



//2. Faça um algoritmo para calcular quantas ferraduras são necessárias para equipar todos os cavalos comprados para um haras. 



const cav = readLineSync.questionInt( "quantos cavalos sao: " );

const ferr = ( cav * 4 );

console.log(ferr);



//3. A padaria Hotpão vende uma certa quantidade de pães franceses e uma quantidade de broas a cada dia. Cada pãozinho custa R$ 0,12 e a broa 
//custa R$ 1,50. Ao final do dia, o dono quer saber quanto arrecadou com a venda dos pães e broas (juntos), e quanto deve guardar numa conta 
//de poupança (10% do total arrecadado). Você foi contratado para fazer os cálculos para o dono. Com base nestes fatos, faça um algoritmo para 
//ler as quantidades de pães e de broas, e depois calcular os dados solicitados. 



const pao = readLineSync.questionFloat( "Quantos paes: " );

const broa = readLineSync.questionFloat( "Quantas broas: " );

const pa = ( pao * 0.12 );

const bro = ( broa * 1.50 );

const soma = ( pa + bro );

const gua = ( soma / 100 );

const por = ( gua * 10 );

console.log( ` Ao todo : R$${soma}, vc deveria quardar R$${por}` );



//4. Escreva um algoritmo para ler o nome e a idade de uma pessoa, e exibir quantos dias de vida ela possui. Considere sempre anos completos, e que um ano possui 365 dias. Ex: uma pessoa com 19 anos possui 6935 dias de vida; veja um exemplo de saída: MARIA, VOCÊ JÁ VIVEU 6935 DIAS 



const nome = readLineSync.question( "Digite seu nome: " );

const idade = readLineSync.questionInt( "Digite sua idade: " );

const dias = ( idade * 365 );

console.log( `Nome: ${nome}, Dias vivo: ${dias}`);



//5. Um motorista deseja colocar no seu tanque X reais de gasolina. Escreva um algoritmo para ler o preço do litro da gasolina e o valor do 
//pagamento, e exibir quantos litros ele conseguiu colocar no tanque. 



const gas = readLineSync.questionFloat( "Digite quantos litros: " );

const pre = readLineSync.questionFloat( "Digite o preco da gasolina: " );

const soma1 = ( gas * pre );

console.log(` R$${soma1} `);



//6. O restaurante a quilo Bem-Bão cobra R$12,00 por cada quilo de refeição. Escreva um algoritmo que leia o peso do prato montado pelo 
//cliente (em quilos) e imprima o valor a pagar. Assuma que a balança já desconte o peso do prato. 



const qui = readLineSync.questionInt( "Digite quantos quilos: " );

const soma = ( qui * 12 );

console.log( `Valor: R$ ${soma}` );



//7. Entrar com o dia e o mês de uma data e informar quantos dias se passaram desde o início do ano. Esqueça a questão dos anos bissextos e 
//considere sempre que um mês possui 30 dias.  



const mes = readLineSync.questionFloat("Digite quatos meses: ");

const dia = readLineSync.questionFloat("Digite quantos dias: ");

const soma6 = (( mes * 30 ) + dia);

console.log( `Sao ${soma6} Dias` );




//8. Faça um algoritmo para ler três notas de um aluno em uma disciplina e imprimir a sua média ponderada (as notas tem pesos respectivos de 1, 2 e 3). 



const prov1 = readLineSync.questionFloat( "Digite a nota da primeira prova: " );

const prov2 = readLineSync.questionFloat( "Digite a nota da segunda prova: " );

const prov3 = readLineSync.questionFloat( "Digite a nota da terceira prova: " );

const soma1 = ( prov1 * 1 );

const soma2 = ( prov2 * 2 );

const soma3 = ( prov3 * 3 );

const soma4 = ( soma1 + soma2 + soma3 );

const final = ( soma4 / 3 );

console.log(final);



//9.Uma fábrica de camisetas produz os tamanhos pequeno, médio e grande, cada uma sendo vendida respectivamente por 10, 12 e 15 reais. 
//Construa um algoritmo em que o usuário forneça a quantidade de camisetas pequenas, médias e grandes referentes a uma venda, e a máquina 
//informe quanto será o valor arrecadado. 



const T1 = readLineSync.questionFloat("Quantas camisas P : ");

const T2 = readLineSync.questionFloat("Quantas camisas M : ");

const T3 = readLineSync.questionFloat("Quantas camisas G : ");

const peq = (T1 * 10);

const med = (T2 * 12);

const gra = (T3 * 15);

console.log(`Preço peguenas: R$${peq}, media: R$${med}, grande: R$${gra}.`);



//10. Construa um algoritmo para calcular a distância entre dois pontos do plano cartesiano. Cada ponto é um par ordenado (x,y). 



const x = readLineSync.questionFloat("Digite qual o numero X: ");

const y = readLineSync.questionFloat("Digite qual o numero Y: ");

console.log(`x . y = (${x} ,${y}) `);



//11. Uma fábrica controla o tempo de trabalho sem acidentes pela quantidade de dias. Faça um algoritmo para converter este tempo em anos, 
//meses e dias. Assuma que cada mês possui sempre 30 dias. 



const dia = readLineSync.questionInt(`Digite quatos dias : `);

const mese = ( dia / 30 );

const dias = ( dia % 30 );

const anos = ( mese / 12 );

const meses = ( mese % 12 );

console.log(`Anos: ${anos}, Meses: ${meses}, Dias: ${dias}`);



//12. Faça um algoritmo para ler o salário de um funcionário e aumentá-Io em 15%. Após o aumento, desconte 8% de impostos. Imprima o salário 
//inicial, o salário com o aumento e o salário final. 



const salarioi = readLineSync.questionFloat("Digite o salario inicial do funcionario: ");

const aumento = (( salarioi / 100 ) * 15 );

const imposto = ( ( salarioi / 100 ) * 8 );

const aument = ( salarioi + aumento ); 

const final = ( aument - imposto );

console.log(`Salario inicial:${salarioi}, Salario com aulmento:${aument}, Salario final:${final} `);



//13. Ler um número inteiro (assuma até três dígitos) e imprimir a saída da seguinte forma: CENTENA = x DEZENA = x UNIDADE = x 



const dig = readLineSync.questionFloat("Digite 3 numeros: ");

if(dig < 1000){
    console.log(`Centena = ${dig[0]} Dezena = ${dig[1]} Unidade = ${dig[2]}`);
    
} 

// 14. Calcule a área de uma pizza que possui um raio R (pi=3.14).

console.log(`14- `);

const raio = readlineSync.questionFloat( "qual o raio da pizza? " );

const area = (3.14 * (raio ** 2));

console.log(` a area da pizza é ${area}`);

// 15. Três amigos, Carlos, André e Felipe. decidiram rachar igualmente a conta de um bar. 
// Faça um algoritmo para ler o valor total da conta e imprimir quanto cada um deve pagar, mas faça com que Carlos e 
// André não paguem centavos. 
// Ex: uma conta de R$101,53 resulta em R$33,00 para Carlos, R$33,00 para André e R$35,53 para Felipe.

 console.log(`15- `);

const pizza = readlineSync.questionFloat( " qual o valor da pizza? ");

const centavos = pizza % 3;

const precoandrecarlos = (pizza - centavos)/3;

const felipe = precoandrecarlos + centavos;

console.log(` a conta para felipe ficou R$${felipe}`);

console.log(` a conta para carlos ficou R$${precoandrecarlos}`);

console.log(` a conta para andre ficou R$${precoandrecarlos}`);



// 16. A lanchonete Gostosura vende apenas um tipo de sanduíche, cujo recheio inclui duas fatias de queijo, uma fatia de 
// presunto e uma rodela de hambúrguer. Sabendo que cada fatia de queijo ou presunto pesa 50 gramas, e que a rodela de 
// hambúrguer pesa 100 gramas, faça um algoritmo em que o dono forneça a quantidade de sanduíches a fazer, e a máquina 
// informe as quantidades (em quilos) de queijo, presunto e carne necessários para compra. 

console.log(`16- `);

const qntdeSanduiche = readlineSync.questionFloat( " qual a quantidade de sanduiches a fazer? ");

const qntdeQueijo = (qntdeSanduiche * 50)/ 1000;

console.log(`a quantidade de queijo será de ${qntdeQueijo}kg`);

const qntdePresunto = (qntdeSanduiche * 50)/ 1000;

console.log(`a quantidade de presunto será de ${qntdePresunto}kg`);

const qntdeCarne = (qntdeSanduiche * 100)/ 1000;

console.log(`a quantidade de carne será de ${qntdeCarne}kg`);


// 17. Alguns países medem temperaturas em graus Celsius, e outros em graus Fahrenheit. Faça um algoritmo para ler 
// uma temperatura Celsius e imprimi-Ia em Fahrenheit (pesquise como fazer este tipo de conversão).

console.log(`17- `);

const celsius = readlineSync.questionFloat(" qual a temperatura em graus celsius? ");

const fahrenheit = celsius * 1.8 + 32;

console.log(` a temperatura em fahrenheit sera de ${fahrenheit}`);


// 18. A empresa Hipotheticus paga R$10,00 por hora normal trabalhada, e R$15,00 por hora extra. Faça um algoritmo para
// calcular e imprimir o salário bruto e o salário líquido de um determinado funcionário. Considere que o salário 
//líquido é igual ao salário bruto descontando-se 10% de impostos.  

console.log(`18- `);

const funcionario = readlineSync.question("qual seu nome: ");

const horas = readlineSync.questionFloat(" quantas horas normais voce trabalhou? ");

const horaExtra = readlineSync.questionFloat(" quantas horas extras voce trabalhou? ");

const salarioBruto = (horas * 10) + (horaExtra * 15);

console.log(` ${funcionario} seu salario bruto é de R$${salarioBruto}`);

const salarioLiquido = salarioBruto - (salarioBruto * 10/100);

console.log(`${funcionario} seu salario liquido é de R$${salarioLiquido}`);

// 19. A granja Frangotech possui um controle automatizado de cada frango da sua produção. No pé direito do frango 
// há um anel com um chip de identificação; no pé esquerdo são dois anéis para indicar o tipo de alimento que ele 
// deve consumir. Sabendo que o anel com chip custa R$4,00 e o anel de alimento custa R$3,50, faça um algoritmo 
// para calcular o gasto total da granja para marcar todos os seus frangos.

console.log(`19- `);

const qntdeFrango = readlineSync.questionFloat(" qual a quantidade de frango? ");

const gastoTotal = qntdeFrango * (4 + 3.50 * 2);

console.log(` o gasto total da granja e de R$${gastoTotal}`);

// 20. Uma confecção produz X blusas de lã e para isto gasta uma certa quantidade de novelos. 
// Faça um algoritmo para calcular quantos novelos de lã ela gasta por blusa.

console.log(`20- `);

const blusas = readlineSync.questionFloat(" quantas blusas de la foram produzidas? ");

const novelo = readlineSync.questionFloat(" quantos novelos de la foram utilizados? ");

const qntdeNovelo = novelo / blusas;

console.log(`foram gastos ${qntdeNovelo} novelos de la por blusa produzida`);

// 21. A fábrica de refrigerantes Meia-Cola vende seu produto em três formatos: lata de 350 ml, garrafa de 600 ml 
// e garrafa de 2 litros. Se um comerciante compra uma determinada quantidade de cada formato, faça um algoritmo
// para calcular quantos litros de refrigerante ele comprou. 

console.log(`21- `);

const lata = readlineSync.questionFloat(" quantas latas voce comprou? ");

const lataTotal = (lata * 350) / 1000;

const garrafaMl = readlineSync.questionFloat(" quantas garrafas de 600ml voce comprou? ");

const garrafaMlTotal= (garrafaMl * 600) / 1000;

const garrafaLitro = readlineSync.questionFloat(" quantas garrafas de 2 litros voce comprou? ");

const garrafaLitroTotal = garrafaLitro * 2;

const totalLitro = lataTotal + garrafaMlTotal + garrafaLitroTotal;

console.log(` ${totalLitro} foi a quantidade de litros de refrigerante comprados`);

// 22. Pedrinho tem um cofrinho com muitas moedas, e deseja saber quantos reais conseguiu poupar. Faça um algoritmo 
// para ler a quantidade de cada tipo de moeda, e imprimir o valor total economizado, em reais. Considere que existam 
// moedas de 1, 5, 10, 25 e 50 centavos, e ainda moedas de 1 real. Não havendo moeda de um tipo, a quantidade respectiva 
// é zero. 

console.log(`22- `);

const moedaUm = readlineSync.questionFloat(" ha quantas moedas de um centavo? ");

moedaUmTotal = moedaUm * 0.01;

const moedaCinco = readlineSync.questionFloat(" ha quantas moedas de cinco centavos? ");

moedaCincoTotal = moedaCinco * 0.05;

const moedaDez = readlineSync.questionFloat(" ha quantas moedas de dez centavos? ");

moedaDezTotal = moedaDez * 0.10;

const moedaVinte = readlineSync.questionFloat(" ha quantas moedas de vinte centavos? ");

moedaVinteTotal = moedaVinte * 0.20;

const moedaVinteCinco = readlineSync.questionFloat(" ha quantas moedas de vinte e cinco centavos? ");

moedaVinteCincoTotal = moedaVinteCinco * 0.25;

const moedaCinquenta = readlineSync.questionFloat(" ha quantas moedas de cinquenta centavos? ");

moedaCinquentaTotal = moedaCinquenta * 0.50;

const moedaUmReal = readlineSync.questionFloat(" ha quantas moedas de um real? ");

const somaMoeda = moedaUmTotal + moedaCincoTotal + moedaDezTotal + moedaVinteTotal + moedaVinteCincoTotal + moedaCinquentaTotal + moedaUmReal;

console.log(` o total economizado foi de R$${somaMoeda}`);


//23. Num dia de sol, você deseja medir a altura de um prédio, porém, a trena não é suficientemente longa. 
// Assumindo que seja possível medir sua sombra e a do prédio no chão, e que você lembre da sua altura, 
//faça um algoritmo para ler os dados necessários e calcular a altura do prédio.

console.log(`23- `);

const alturapessoa = readlineSync.questionFloat(" qual sua altura em metros? ");

const sombrapessoa = readlineSync.questionFloat(" qual o tamanho da sua sombra em metros? ");

const sombrapredio = readlineSync.questionFloat(" qual o tamanho da sombra do prédio em metros? ");

const alturapredio = ( alturapessoa * sombrapredio ) / sombrapessoa;

console.log(` a altura do predio sera de ${alturapredio} metros`);

// 24. Um tonel de refresco é feito com 8 partes de água mineral e 2 partes de suco de maracujá. Faça um algoritmo 
// para calcular quantos litros de água e de suco são necessários para se fazer X litros de refresco (informados 
// pelo usuário). 

console.log(`24- `);

const litrosRefresco = readlineSync.questionFloat(" quantos litros de referesco serao feitos? ");

const agua = litrosRefresco / 10 * 8;

const suco = litrosRefresco / 10 * 2;

console.log(`sera necessario ${agua} litos de agua e ${suco} litros de suco de maracuja `);


// 25. Calcule o volume de uma caixa d'água cilíndrica.

console.log(`25- `);

const altura = readlineSync.questionFloat(" qual a altura dessa caixa d'agua? ");

const raioCDA = readlineSync.questionFloat(" qual o raio dessa caixa d'agua? ");

const volume = 3.14 * (raioCDA ** 2) * altura;

console.log(` volume da caixa d'agua: ${volume}`);


// 26. Faça um algoritmo que receba três números, calcule e mostre a multiplicação desses números.

console.log(`26- `);

const nmrum = readlineSync.questionFloat(" digite o primeiro numero: ");

const nmrdois = readlineSync.questionFloat(" digite o segundo numero: ");

const nmrtres = readlineSync.questionFloat(" digite o terceiro numero: ");

const multiplicacao = nmrum * nmrdois * nmrtres;

console.log(`${nmrum} x ${nmrdois} x ${nmrtres} = ${multiplicacao}`);

// 27. Faça um algoritmo que receba dois números, calcule e mostre a divisão do primeiro número pelo segundo. Sabe-se que o segundo número não pode ser zero, portanto não é necessário se preocupar com validações. 


const numero1 = readlinesync.questionFloat(" Digite o valor do primeiro numero:");

const numero2 = readlinesync.questionFloat(" Digite o valor do segundo numero:");

const div = numero1/numero2

console.log(`A divisão entre ${numero1} ÷ ${numero2} é: ${div} `); 

// 28. Faça um algoritmo que receba duas notas, calcule e mostre a média ponderada dessas notas, considerando peso 2 para a primeira nota e peso 3 para a segunda nota.

let peso1 = 2

let peso2 = 3

const nota1 = readlinesync.questionFloat(" Digite o valor da sua primeira nota: ");

const nota2 = readlinesync.questionFloat(" Digite o valor da sua segunda nota: ");

const media = ((nota1*peso1)+(nota2*peso2))/2
console.log(`A média das suas notas é de: ${media}`); 


//29. Faça um algoritmo que receba o preço de um produto, calcule e mostre o novo preço, sabendo-se que este sofreu um desconto de 10%. 

const produto = readlinesync.question("Qual vai se o produto? ");

const preco = readlinesync.questionFloat("Qual o preço desse produto? ");

const porc = (preco*10)/100;

console.log(`O(a) ${produto} sofreu um desconto de 10% tornando o valor de ${preco}R$ para ${porc}R$`) 

// 30. Um funcionário recebe um salário fixo mais 4% de comissão sobre as vendas. Faça um algoritmo que receba o salário fixo de um funcionário e o valor de suas vendas, calcule e mostre a comissão e o salário final do funcionário. 

const funcionario = readlinesync.question("Qual o nome do funcionário(a)? ");

const salario = readlinesync.questionFloat(`Qual o salário do(a) ${funcionario}? `);

const tvendas = readlinesync.questionFloat(` Quantas vendar o(a) ${funcionario} fez este mês? (em reais)`);

const comi = (tvendas * 4)/100;

const salariof = salario + comi;

console.log(`O(a) funcionário(a) ${funcionario} foi de ${comi}R$ e o seu salário final foi de ${salariof}RS`);



// 31. Faça um algoritmo que receba o peso de uma pessoa, calcule e mostre: a) o novo peso se a pessoa engordar 15% sobre o peso digitado; b) o novo peso se a pessoa emagrecer 20% sobre o peso digitado 

 const peso = readlinesync.questionFloat("Qual o seu peso? ");

const engo = (peso*15)/100;

const engo1 = peso + engo;

const ema = (peso*20)/100;

const ema1 = peso - ema;

console.log(`Se engordar mais 15% ficará com ${engo1}`);

console.log(`Se emagreçer 20% ficará com ${ema1}`); 

// 32. Faça um algoritmo que receba o peso de uma pessoa em quilos, calcule e mostre esse peso em gramas. 

const kg = readlinesync.questionFloat("Quantos quilos para ser convertido em gramas? "); 

const gramas = kg*1000;

console.log(`${kg}kg convertido para gramas fica ${gramas}gramas`) ;


// 33. Faça um algoritmo que calcule e mostre a área de um trapézio. Sabe-se que: A = (base maior + base menor)* altura)/2 ; 

const baseM = readlinesync.questionFloat("Quanto mede a base maior do trapézio? ")

const baseme = readlinesync.questionFloat("Quanto mede a base menor do trapézio? ")

const altura = readlinesync.questionFloat("Quanto mede a altura do trapézio? ")

const areaT = ((baseM + baseme)* altura)/2

console.log(`A área do trapézio é de ${areaT}`) 

// 34. Faça um algoritmo que calcule e mostre a área de um quadrado. Sabe-se que: A = lado * lado; 

const lado = readlinesync.questionFloat("Quanto mede o lado do quadrado? ")

const areaQ = lado * lado;

console.log(`A area do quadrado é de ${areaQ} `) 

// 35.Faça um algoritmo que calcule e mostre a área de um losango. Sabe-se que: A = (diagonal_maior * diagonal_menor)/2; 

const dMAIOR = readlinesync.questionFLoat(" Quanto mede a diagonal maior do losando? ");

const dMENOR = readlinesync.questionFLoat(" Quanto mede a diagonal meno do losando? ");

const areaL = (dMAIOR * dMENOR)/2 

console.log(`A área do losango é de ${areaL}`)


// 36. Faça um algoritmo que receba o valor do salário mínimo e o valor do salário de um funcionário, calcule e mostre a quantidade de salários mínimos que ganha esse funcionário. 

const funcionario = readlinesync.question("Qual o nome do funcionário(a)? ");

const salario = readlinesync.questionFloat(`Qual o salário do(a) ${funcionario}? `);

const minSalario = readlinesync.questionFloat("Quanto está valendo o salário mínimo? "); 

const Sm = salario/minSalario;

console.log(`O(a) funcionário(a) ${funcionario} com o salário de ${salario} ganha ${Sm} salários mínimos`) 

// 37. Faça um algoritmo que calcule e mostre a tabuada de um número digitado pelo usuário. 

const numero = readlinesync.questionFloat("Qual o número que você quer ver na tabuada? ");

for(let i = 0; i < 11; i++){
    const multi = numero * i 
    console.log(`${numero} x ${i} = ${multi}`)
} 

// 38. Faça um algoritmo que receba o ano de nascimento de uma pessoa e o ano atual, calcule e mostre: a) a idade dessa pessoa em anos; b) a idade dessa pessoa em meses; c) a idade dessa pessoa em dias; d) a idade dessa pessoa em semanas. 

const ADN = readlinesync.questionFloat("Qual seu ano de nacsimento? ");

const anoA = readlinesync.questionFloat("Em que ano estamos? ");

const anos = anoA - ADN;

const meses = anos*12;

const sema = meses*4.345;

console.log(`Você tem ${anos} anos`);

console.log(`sua idade em meses é de ${meses}`);

console.log(`Sua idade em semanas é de ${sema}`); 


// 39. João recebeu seu salário de R$ 1200,00 e precisa pagar duas contas (C1=R$ 200,00 e C2=R$120,00) que estão atrasadas. Como as contas estão atrasadas, João terá de pagar multa de 2% sobre cada conta. Faça um algoritmo que calcule e mostre quanto restará do salário do João 

const Jsalario = readlinesync.questionFloat("Qual o salário? ");

const c1 =  readlinesync.questionFloat("Qual o valor da primeira conta a ser paga? ");

const c2 =  readlinesync.questionFloat("Qual o valor da segunda conta a ser paga? ");

const multas = ((c2+c1)*2)/100;

const multas2 = 320 + multas;

const menos = Jsalario - multas2;

console.log(`Com as multas de ${multas2}R$, o salario de João vai ficar ${menos}`) 


// 40. Faça um algoritmo que receba o valor dos catetos de um triângulo, calcule e mostre o valor da hipotenusa

const cat1 =  readlinesync.questionFloat("Quanto mede o primeiro cateto? ");

const cat2 =  readlinesync.questionFloat("Quanto mede o segundo cateto? ");

const hip = (cat1*cat1) + (cat2*cat2)

const raiz = Math.sqrt(hip)

console.log(`A hipotenusa mede ${raiz}`) 
