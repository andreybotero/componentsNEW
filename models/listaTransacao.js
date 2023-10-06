import Trasacao from "./trasacao";

export default class ListaTransacao {
    constructor() {
        this.historico = [];
        this.saldo = 0;
        this.receitas = 0;
        this.despesas = 0;
    }

    adicionarTransacao(descricao, valor, tipo) {
        const novaTransacao = new Trasacao(descricao, valor, tipo)

        console.log("Passou pelo front")
        console.log(novaTransacao);

        this.historico.push(novaTransacao);
        this.atualizarValores();
    }
    getHistorico() {
        return this.historico;
    }

    excluirTransacao(id) {
        const listaTransacoes = (this.historico = this.historico.filter(transacao => transacao.id != id));


        this.atualizarValores();
        return listaTransacoes;
    }

    
    getTransacaoPorId(id) {

        const transacao = this.historico.find(transacao => transacao.id == id);

        return transacao;

    }

    atualizarTransacao(id, descricao, valor) {
        const transacao = this.getTransacaoPorId(id);

        if (transacao) {
            transacao.descricao = descricao;
            transacao.valor = valor;
        }

        this.atualizarValores();

        return transacao;
    }

    atualizarValores() {
        this.saldo = 0;
        this.receitas = 0;
        this.despesas = 0;

        this.historico.map(transacao => {
            if (transacao.tipo == "Receita") {
                this.receitas = Number(this.receitas) + Number(transacao.valor);
            } else {
                this.despesas = Number(this.despesas) + Number(transacao.valor);
            }
        });
        this.saldo = Number(this.receitas) - Number(this.despesas);
    }


}