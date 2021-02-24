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
const transactions = [
  {
    id: 1,
    description: "Luz",
    amount: -50000,
    date: "23/01/2021",
  },
  {
    id: 2,
    description: "Website",
    amount: 500000,
    date: "23/01/2021",
  },

  {
    id: 3,
    description: "Internet",
    amount: -20000,
    date: "23/01/2021",
  },

  {
    id: 4,
    description: "App",
    amount: 200000,
    date: "23/01/2021",
  },
];

// Responsável pelo cálculo matemático
const Transaction = {
  incomes() {
    let income = 0
    transactions.forEach(transaction => {

      if (transaction.amount > 0){
        income += transaction.amount;
      }
    })

    return income;
      
  },
  
  //somar as saídas
  expenses() {

    let expense = 0
    transactions.forEach(transaction => {
      if (transaction.amount < 0){
        expense += transaction.amount;
      }
    })

    return expense;
   
  },

  // a soma das entradas e saídas
  total() {

    return Transaction.incomes() + Transaction.expenses();
      
  },
};


const DOM = {
  transactionsContainer: document.querySelector("#data-table tbody"),

  addTransaction(transaction, index) {
    const tr = document.createElement("tr");
    tr.innerHTML = DOM.innerHTMLTransaction(transaction);

    DOM.transactionsContainer.appendChild(tr);
  },

  innerHTMLTransaction(transaction) {
    const CSSclass = transaction.amount > 0 ? "income" : "expense";

    const amount = Utils.formatCurrency(transaction.amount);

    const html = `    
        <td class="description">${transaction.description}</td>
        <td class="${CSSclass}">${amount}</td>
        <td class="date">${transaction.date}</td>
        <td>
          <img src="./assets/minus.svg" alt="Remover transação" />
        </td>
        `;

    return html;
  
  
  },

//Mostrar os valores atualizados//
  updateBalance(){
    document
      .getElementById('incomeDisplay')
      .innerHTML = Utils.formatCurrency(Transaction.incomes())
    document
      .getElementById('expenseDisplay')
      .innerHTML = Utils.formatCurrency(Transaction.expenses())
    document
      .getElementById('totalDisplay')
      .innerHTML = Utils.formatCurrency(Transaction.total())
  }
};


//Para modificação dos dados de valor, colocando a moeda e características de positivo ou negativo//
const Utils = {
  formatCurrency(value) {
    const signal = Number(value) < 0 ? "-" : "";

    value = String(value).replace(/\D/g, "");

    value = Number(value) / 100;

    value = value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    return signal + value;
  },
};


//Chamar a lista de transações através do for Each substituindo o for//
transactions.forEach(function (transaction) {
  DOM.addTransaction(transaction);
});

//Chamando a função de atualização dos valores
 DOM.updateBalance()
