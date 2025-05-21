const cepInput = document.querySelector("#cep")

cepInput.addEventListener("#blur", ()=>{
    
    const cep = cepInput.value.replace(/\D/g,'')
    if(cep.length === 8){
        fetch(`https://viacep.com.br/ws/${cep}/json/`) ``
    
    .then(response => response.json())
    .then(data => {
        if(!data.erro){
            document.querySelector("#logradouro").value = data.logradouro

            document.querySelector("#complemento").value = data.complemento

            document.querySelector("#bairro").value = data.bairro

            document.querySelector("#cidade").value = data.localidade

            document.querySelector("#estado").value = data.uf
        }
       
        else{
            console.log("CEP não encontrado")
        }
    })
    .catch(error =>{
        alert("Erro ao buscar o CEP")
    })
    }
    else{
        alert("CEP inválido")
    }
})


/*
    sobre a regex /\D/g
    /.../ - delimita a expressão regular

    \D - É o inverno de \d, ou seja , "qualquer caracter que não seja digito" (0 a 9)

    g - É a flag global, que faz a substituição ocorrer em todas as ocorrências do texto

    ex: se o usuário digita 88.000-000
    a função fará '88.000-000'.replace(/\Dg,'') //
    resultado: '88000000'
    */