"use client"
import { useState } from 'react'
import styles from './finances.module.css'
import { FaPen, FaTrash } from 'react-icons/fa'
import ListaTransacao from '@/models/listaTransacao'
import Trasacao from '@/models/trasacao'
import DashCard from '../components/dashcard/DashCard'
import Headernova from '../components/felpsheader/header'
import inputS from '../components/inputs/Inputs'




const listaTransacao = new ListaTransacao()

function Finances() {

  // Inputs

  const [value, setValue] = useState('')
  const [description, setDescription] = useState('')

  // Dados da Classe 

  const [lista, setlista] = useState(listaTransacao.getHistorico());
  const [saldo, setSaldo] = useState(listaTransacao.saldo);
  const [receitas, setReceitas] = useState(listaTransacao.receitas);
  const [despesas, setDespesas] = useState(listaTransacao.despesas);

  // Adicionar Receita

  const addReceita = () => {
    // console.log("ADICIONAR RECEITA")
    listaTransacao.adicionarTransacao(description, value, 'Receita')

    atualizarValores()
  }

  const edit = (id) => {

    const transacao = listaTransacao.getTransacaoPorId(id)

    setDescription(transacao.descricao);
    setValue(transacao.valor);

    setEditButton(true);
    setFlag(id);

  }

  // Adicionar Despesa
  const addDespesa = () => {
    // console.log("ADICIONAR DESPESA")

    listaTransacao.adicionarTransacao(description, value, 'Despesa')

    atualizarValores()
  }

  const exclude = (id) => {
    listaTransacao.excluirTransacao(id)

    atualizarValores()
  }

  const atualizarValores = () => {

    setDescription('')
    setValue('')

    setSaldo(listaTransacao.saldo)
    setReceitas(listaTransacao.receitas)
    setDespesas(listaTransacao.despesas)
    setlista(listaTransacao.getHistorico())
  }

  const update = () => {
    listaTransacao.atualizarTransacao(flag, description, value);

    atualizarValores()
    setEditButton(false)
  }



  // Edição
  const [flag, setFlag] = useState(0)
  const [editButton, setEditButton] = useState(false)

  return (
    <>
      <div className={styles.container}>
        <Headernova nome={'Andrey'} email={'andrey.botero2018@gmail.com'} />
      </div>

      <div className={styles.content}>
        <div className={styles.mainheader}>
          <p className={styles.title}>Dashboard</p>
          <div className={styles.transaction}>

          <inputS varName={description} tipo={'text'} descricao={'Descrição'} setVarName={setDescription} name={'description'} />
          <inputS varName={value} tipo={'number'} descricao={'Valor R$:'} setVarName={setValue} name={'value'} />


            <div className={styles.type}>
              {
                editButton ? (
                  <button className={styles.buttonAtualizar} onClick={() => update()}>Atualizar</button>
                ) : (
                  <>
                    <button className={styles.buttonreceita} onClick={addReceita}>Receita</button>
                    <button className={styles.buttondespesa} onClick={addDespesa}>Despesa</button>
                  </>
                )
              }
            </div>
          </div>
        </div>
        <div className={styles.infos}>

          <DashCard titulo={'Saldo'} valor={saldo} cor={'#9fc7e0'} />
          <DashCard titulo={'Receitas'} valor={receitas} cor={'#9fe0b1'} />
          <DashCard titulo={'Despesas'} valor={despesas} cor={'#e09f9f'} />

        </div>


        <div className={styles.registros}>
          <div className={styles.registrosreceitas}>
            <p className={styles.registrosreceitastitle}>Receitas Registradas</p>
            <div className={styles.registrosreceitaslist}>
              {
                lista.map(transacao =>

                  transacao.tipo == "Receita" && (
                    <div key={transacao.id} className={styles.registrosreceitasitem}>
                      <p>{transacao.descricao}</p>
                      <p className={styles.registrosreceitasitemvalue}>R${transacao.valor}</p>

                      <button
                        className={styles.actionsbutton}
                        onClick={() => exclude(transacao.id)}>
                        <FaTrash />
                      </button>


                      <button
                        className={styles.actionsbutton}
                        onClick={() => edit(transacao.id)}>
                        <FaPen />
                      </button>
                    </div>
                  ))
              }
            </div>
          </div>

          <div className={styles.registrosdespesas}>
            <p className={styles.registrosdespesastitle}>Despesas Registradas</p>
            <div className={styles.registrosdespesaslist}>
              {
                lista.map(transacao =>

                  transacao.tipo == "Despesa" && (
                    <div key={transacao.id} className={styles.registrosdespesasitem}>

                      <p>{transacao.descricao}</p>
                      <p className={styles.registrosdespesasitemvalue}>{transacao.valor}</p>
                    </div>
                  ))
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Finances