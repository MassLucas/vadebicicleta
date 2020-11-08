class Usuario {
    
    constructor(email, senha, cpf, nome, nascimento) {
        this.email = email;
        this.senha = senha;
        this.cpf = cpf;
        this.nome = nome;
        this.nascimento = nascimento;
    }
}

class Cartao {
    
    constructor(numero, validade, nome, codseg) {
        this.numero = numero;
        this.validade = validade;
        this.nome = nome;
        this.codseg = codseg;
    }
}

class Emprestimo {
     constructor (id, dataaluguel, datadevolucao, valor) {
        this.id = id;
        this.dataaluguel = dataaluguel;
        this.datadevolucao = datadevolucao;
        this.valor = valor;
     }
}

class Endereco {

    constructor (cep, rua, cidade, estado) {
        this.cep = cep;
        this.rua = rua;
        this.cidade = cidade;
        this.estado = estado;
    }
}

class Bicicleta {

    constructor (id) {
        this.id = id;
    }
}

class Tranca {

    constructor (num) {
        this.num = num;
    }
}

class Totem {
    
    constructor (id, latitude, longitude, capacidade) {
        this.id = id;
        this.latitude = latitude;
        this.longitude = longitude;
        this.capacidade = capacidade;
    }
}