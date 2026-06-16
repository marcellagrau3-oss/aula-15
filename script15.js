let quantidadeProduzida // entrada - input
let custoPorUnidade // entrada - input
let custoTotal // saída - output

quantidadeProduzida = prompt("Informe a quantidade produzida");
custoPorUnidade = prompt("Informe o custo por unidade");

quantidadeProduzida = parseFloat(quantidadeProduzida);
custoPorUnidade = parseFloat(custoPorUnidade);
custoTotal = quantidadeProduzida * custoPorUnidade;
alert("O custo total da produção é de R$ " + custoTotal.toFixed(2) + ".");