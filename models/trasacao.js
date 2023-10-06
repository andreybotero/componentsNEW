export default class Trasacao {
    constructor(descricao, valor, tipo) {
        this.id = this.gerarId();
        this.descricao = descricao;
        this.valor = valor;
        this.tipo = tipo;
    }
gerarId() { 
    return Math.round(Math.random() * 1000);
}

}



