import React, {useState, useEffect} from "react";
import {categoryOptions} from './constant.jsx'

function ExpenseForm({setpage, expenses, setExpenses, editingExpense, setEditingExpense}){

    const [expenseName, setExpenseName] = useState("");
    const [expenseAmount, setExpenseAmount] = useState("");
    const [expenseCategory, setExpenseCategory] = useState("");
    const [expenseDate, setExpenseDate] = useState("");
    const [expenseNote, setExpenseNote] = useState("");

    const [error, setError] = useState({});
    
    // console.log('from form edit: ', editingExpense)

    useEffect(() => {
        if(editingExpense){
            //console.log('edit')
            setExpenseName(editingExpense.name)
            setExpenseAmount(editingExpense.amount)
            setExpenseCategory(editingExpense.category)
            setExpenseDate(editingExpense.date)
            setExpenseNote(editingExpense.notes || "")
        }else{
            //console.log('add')
            setExpenseName("");
            setExpenseAmount("");
            setExpenseCategory("");
            setExpenseDate("");
            setExpenseNote("")
        }
    }, [editingExpense])
    


    const saveExpense = () => {

        let newErrors = {};
        
        if(!expenseName.trim()){
            newErrors.name ="Please enter an expense name.";
        }
        if(!expenseAmount || isNaN(expenseAmount) || Number(expenseAmount) <= 0){
            newErrors.amount = "Please enter a valid expense amount.";
        }
        if(!expenseCategory.trim()){
            newErrors.category = "Please select an expense category.";
        }
        if(!expenseDate){
            newErrors.date = "Please select a date for the expense.";
        }        

        if(Object.keys(newErrors).length > 0){
            console.log('Error found')
            setError(newErrors);
            return;
        }

        setError({}); // Clear any previous error

        const expenseData = {
            name: expenseName,
            amount: Number(expenseAmount),
            category: expenseCategory,
            date: expenseDate || new Date().toISOString(),
            notes: expenseNote,
        }

        if (editingExpense) {
            // Update existing expense
            console.log('save edited')

            const updatedExpenses = expenses.map((exp) =>
                exp.id === editingExpense.id 
                ? {
                    ...exp, 
                    ...expenseData
                  }
                : exp
            );
            
            setExpenses(updatedExpenses);
            setEditingExpense(null);

        } else {
            console.log('save new')

            const newExpense = {
                id: expenses.length > 0 ? expenses[expenses.length - 1].id + 1 : 1,
                ...expenseData,
                createdAt: new Date().toISOString()
            }

            setExpenses([...expenses, newExpense]);
        }


        // const newExpense = {
        //     id: expenses.length > 0 ? expenses[expenses.length - 1].id + 1 : 1,
        //     name: expenseName,
        //     amount: Number(expenseAmount),
        //     category: expenseCategory,
        //     date: expenseDate || new Date().toISOString(),
        //     notes: expenseNote,
        //     createdAt: new Date().toISOString()
        // }

        // setExpenses([...expenses, newExpense]);

        
        setExpenseName("");
        setExpenseAmount("");
        setExpenseCategory("");
        setExpenseDate("");
        setExpenseNote("")

        //console.log("Expenses list: ", ...expenses);

        setpage("home")
    }
   


    return (
        <>
            <div className="flex mb-6 text-sm leading-4 text-white">
                <a 
                    href="#home" 
                    onClick={(e) => {
                        e.preventDefault(); 
                        setEditingExpense(null); 
                        setpage("home")}}
                >
                    &larr; Back
                </a>
            </div>

            <form 
                className="space-y-4 text-gray-400 font-normal leading-5"
                onSubmit={(e) => {
                    e.preventDefault();
                    saveExpense();
                }}
            >
                <div>
                    <label htmlFor="expenseName" className="block text-[16px] font-normal text-sky-600">
                        Expense Name
                    </label>
                    <input
                        type="text"
                        id="expenseName"
                        name="expenseName"
                        value={expenseName}
                        className="mt-1 block w-full border border-gray-600 rounded-md px-3 py-2 focus:outline-1 focus:outline-sky-800 shadow-md"
                        onChange={(e) => setExpenseName(e.target.value)}
                    />
                    { error.name && <p className="text-red-500 text-sm mt-1">{error.name}</p> }
                </div>

                <div>
                    <label htmlFor="expenseAmount" className="block text-[16px] font-normal text-sky-600">
                        Amount
                    </label>
                    <input
                        type="number"
                        id="expenseAmount"
                        name="expenseAmount"
                        value={expenseAmount}
                        className="mt-1 block w-full border border-gray-600 rounded-md px-3 py-2 focus:outline-1 focus:outline-sky-800 shadow-md"
                        onChange={(e) => setExpenseAmount(e.target.value)}
                    />
                    { error.amount && <p className="text-red-500 text-sm mt-1">{error.amount}</p> }
                </div>

                <div>
                    <label htmlFor="expenseCategoty" className="block text-[16px] font-normal text-sky-600">
                        Category
                    </label>
                    <select
                        id="expenseCategoty"
                        name="expenseCategoty"
                        value={expenseCategory}
                        className="mt-1 block w-full border border-gray-600 rounded-md px-3 py-2 focus:outline-1 focus:outline-sky-800 shadow-md"
                        onChange={(e) => setExpenseCategory(e.target.value)}
                    >
                        <option value="">Select a category</option>
                        
                        {categoryOptions.map((category) => (
                            <option key={category.id} value={category.value}>{category.label}</option>
                        ))}

                    </select>
                    { error.category && <p className="text-red-500 text-sm mt-1">{error.category}</p> }
                </div>
                
                <div>
                    <label htmlFor="expenseDate" className="block text-[16px] font-normal text-sky-600">
                        Date
                    </label>
                    <input
                        type="date"
                        id="expenseDate"
                        name="expenseDate"
                        value={expenseDate}
                        className="mt-1 block w-full border border-gray-600 rounded-md px-3 py-2 focus:outline-1 focus:outline-sky-800 shadow-md"
                        onChange={(e) => setExpenseDate(e.target.value)}
                    />
                    { error.date && <p className="text-red-500 text-sm mt-1">{error.date}</p> }               
                </div>

                <div>
                    <label htmlFor="expenseNote" className="block text-[16px] font-normal text-sky-600">
                        Note (optional)
                    </label>
                    <textarea
                        id="expenseNote"
                        name="expenseNote"
                        rows="2"
                        value={expenseNote}
                        className="mt-1 block w-full border border-gray-600 rounded-md px-3 py-2 focus:outline-1 focus:outline-sky-800 shadow-md"
                        onChange={(e) => setExpenseNote(e.target.value)}
                    ></textarea>
                </div>

                <div className="flex flex-wrap gap-3 text-white text-sm leading-4 mt-7">
                    <button type="submit" className="cursor-pointer px-4 py-2 border border-sky-800 bg-sky-800 rounded-md backdrop-blur-sm hover:bg-sky-900/80">
                        Save
                    </button>
                    <button type="button" className="cursor-pointer px-4 py-2 border border-gray-600 bg-gray-600 rounded-md backdrop-blur-sm hover:bg-gray-700/80" onClick={(e) => {e.preventDefault(); setpage("home")}}>
                        Cancel
                    </button>
                </div>

            </form>
        </>
    )
}

export default ExpenseForm;