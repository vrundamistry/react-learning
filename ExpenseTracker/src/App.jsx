import React, { useState } from "react";
import { Header, Home, ExpenseList, ExpenseForm } from "./components";

function App() {

  const [page, setPage] = useState("home");

  const [expenses, setExpenses] = useState(() => {
      const savedExpenses = localStorage.getItem("expenses");
      return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  const [editingExpense, setEditingExpense] = useState(null);
  

  function handleEditExpense(expense) {
    //console.log('Edit click From App: ', expense)
    setEditingExpense(expense);
    setPage("expense-form");
  }

  return (
    <>
      <div className="w-full h-screen flex flex-wrap justify-center text-white">
        <div className="w-full max-w-4xl mx-auto">
         
          <Header page={page} setpage={setPage} setEditingExpense={setEditingExpense} />

          <div className="w-full py-6 h-screen overflow-y-scroll mb-6 scrollbar-thumb-slate-900/60 scrollbar-track-slate-700 scrollbar-thin overflow-auto">
            <div className="px-4">
              { page === "home" && <Home page={page} setpage={setPage} expenses={expenses} /> }
              { page === "expenses" && <ExpenseList expenses={expenses} editExpense={handleEditExpense} /> }
              { page === "expense-form" && <ExpenseForm setpage={setPage} expenses={expenses} setExpenses={setExpenses} editingExpense={editingExpense} setEditingExpense={setEditingExpense} /> }
            </div>
          </div>                  

        </div>
      </div>

    </>
  )
}

export default App
