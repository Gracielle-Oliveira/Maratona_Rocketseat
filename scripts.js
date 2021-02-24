const Modal = {
  open() {
    //Abrir modal
    //Adicionar a class active ao Modal

    document.querySelector(".modal-overlay").classList.add("active");
  },
  close() {
    //fechar o modal para
    //remover a class active do modal

    document.querySelector(".modal-overlay").classList.remove("active");
  },
};

// Lista de objetos
const transaction = [
  {
    id: 1,
    description: 'Luz',
    amount: -50000,
    date: "23/01/2021",
  },
  {
    id: 2,
    description: 'Website',
    amount: 500000,
    date: "23/01/2021",
},
  {id: 3,
    description: 'Internet',
    amount: -20000,
    date: "23/01/2021",},
];


const Transaction = {
  incomes() {
    //somar as entradas
  },

  expenses() {
    //somar as daídas
  },

  total() {
    // a soma das entradas e saídas
  },
};

const DOM = {
    addTransaction(transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction ()
    },

    innerHTMLTransaction(){

        const html = `    
        <td class="description">Luz</td>
        <td class="expense">- R$ 500,00</td>
        <td class="date">23/01/2021</td>
        <td>
          <img src="./assets/minus.svg" alt="Remover transação" />
        </td>
        `

        return html
    }
}

DOM.addTransaction()
