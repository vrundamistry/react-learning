import React, {useState, useEffect} from "react";
import { getCategoryLabel, monthFormatter, getMonthKey } from "./constant";
import ExpenseItem from "./ExpenseItem";

function Home({page, setpage, expenses}) {
    
    const currentMonthYear = monthFormatter.format(new Date());

    const currentMonthKey = getMonthKey(new Date())

    const currentMonthExpenses = expenses.filter(
        (expense) => getMonthKey(expense.date) === currentMonthKey
    )
    //console.log('currentMonthExpenses: ', currentMonthExpenses)


    // Total Expense
    const totalExpense = expenses.reduce((total, item) => {
        return total + item.amount
    }, 0)
    //console.log('totalExpense: ', totalExpense)

    // Total Transactions
    const totalTransactions = expenses.length;


    // Current Month Total Expense
    const currentMonthTotalExpense = currentMonthExpenses.reduce((total, item) => {
        return total + item.amount
    }, 0)

    // Current Month Total Transactions
    const currentMonthTotalTransactions = currentMonthExpenses.length


    // Spending by Category of Current Month
    const categoryExpense = {}
    currentMonthExpenses.forEach((exp) => {
        //const cat = exp.category;
        const cat = getCategoryLabel(exp.category);
        const amount = exp.amount;

        //console.log(`cat: ${cat} amount: ${amount}`)
        if( Object.keys(categoryExpense).includes(cat) ){
            categoryExpense[cat] += amount
        }else{
            categoryExpense[cat] = amount
        }
    })
    //console.log('categoryExpense: ', categoryExpense)


    // Grouping by Category
    const categoryTotal = expenses.reduce((acc, item) => {
        //console.log('acc: ', acc)
        acc[item.category] = (acc[item.category] || 0) + item.amount
        return acc;
    }, {});
    //console.log('categoryTotal: ', categoryTotal)


    // Recent Expenses of current Month
    const recentExpenses = [...expenses].sort(
        (a,b) => new Date(b.date) - new Date(a.date)
    ).slice(0, 3);

   

    useEffect(() => {
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }, [expenses]);



    return (
      <>
        <div className="flex justify-end text-sm leading-4 text-white mb-6">
            <button 
                className="cursor-pointer px-4 py-2 border border-sky-800 bg-sky-800 rounded-md backdrop-blur-sm hover:bg-sky-900/80" onClick={(e) => setpage("expense-form")}
            >
                Add Expense
            </button>
        </div>

        <div className="mb-5">
            <h2 className="font-bold mb-2 text-xl">{currentMonthYear}</h2>
        </div>

        <div className="mb-10">
            <div className="grid grid-cols-2 gap-4">                
                 <div className="flex-1 p-6 dark:bg-gray-800 rounded-lg text-lg leading-4 text-gray-300 space-y-3">
                    <h4 className="font-normal mb-4">Total Spent This Month</h4>
                    <p className="text-gray-500 dark:text-gray-400 font-medium tracking-tight">
                            <span>₹</span> {currentMonthTotalExpense}
                    </p>            
                </div>
                <div className="flex-1 p-6 dark:bg-gray-800 rounded-lg text-lg leading-4 text-gray-300 space-y-3">
                    <h4 className="font-normal mb-4">Transactions This Month</h4>
                    <p className="text-gray-500 dark:text-gray-400 font-medium tracking-tight">
                        {currentMonthTotalTransactions}
                    </p>
                </div>
                <div className="flex-1 p-6 dark:bg-gray-800 rounded-lg text-lg leading-4 text-gray-300 space-y-3">
                    <h4 className="font-normal mb-4">Total Expense</h4>
                    <p className="text-gray-500 dark:text-gray-400 font-medium tracking-tight">
                        <span>₹</span> {totalExpense}
                    </p>
                </div>
                <div className="flex-1 p-6 dark:bg-gray-800 rounded-lg text-lg leading-4 text-gray-300 space-y-3">
                    <h4 className="font-normal mb-4">Total Transactions</h4>
                    <p className="text-gray-500 dark:text-gray-400 font-medium tracking-tight">
                        {totalTransactions}
                    </p>
                </div>
            </div>
        </div>


        {/* Home component (e.g.,Spending by Category) */}
        <div className="mb-10">
            <h4 className="font-bold mb-2">Spending by Category</h4>

            <div className="px-6 py-8 dark:bg-gray-800 rounded-lg text-md leading-4 text-gray-300 space-y-3">
                {categoryExpense && (
                    <>
                        {Object.entries(categoryExpense).map(([category, amount]) => (

                            <div className="flex items-center justify-between gap-2" key={category}>
                                <h3>{category}</h3>
                                <p><span>₹</span> {amount}</p>
                            </div>

                        ))}                        
                    </> 
                )}                

            </div>
        </div>
        
        {/* Home component (e.g.,Recent Expense List) */}
        <div className="mb-6">
            <h4 className="font-bold mb-2">Recent Expenses</h4>

            <div className="flex flex-col gap-5 text-sm leading-4 text-white">
                {expenses.length === 0 ? (
                    <p className="text-gray-500 dark:text-gray-400 text-base font-medium tracking-tight mb-2">No expenses found.</p>
                ) : (
                    <>
                        {recentExpenses.map((expense) => (

                            <ExpenseItem getCategoryLabel={getCategoryLabel} expense={expense} key={expense.id} />

                        ))}                        
                    </> 
                )}                

            </div>
        </div>

      </>
    );
}

export default Home