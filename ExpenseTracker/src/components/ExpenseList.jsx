import React, { useEffect, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import { getCategoryLabel, getMonthKey, monthFilterOption, monthFormatter, categoryOptions } from "./constant";


function ExpenseList({ expenses, editExpense }) {
    // console.log("Expenses: ", expenses);
    // console.log("categoryOptions: ", categoryOptions);

    const [selectedMonth, setSelectedMonth] = useState("all")
    const [selectedCategory, setSelectedCategory] = useState("all")
    const [search, setSearch] = useState("")

    let filteredExpenses = expenses

    // search by name filter
    if (search !== "") {
        filteredExpenses = [...expenses].filter(
           (exp) => exp.name.toLowerCase().includes(search.toLowerCase())  
        )
    }

    // search by category [category-wise expense filter]
    if (selectedCategory !== "all") {
        filteredExpenses = [...expenses].filter(
            (exp) => exp.category === selectedCategory
        )
    }  

    // month-wise expense filter
    let monthExpense = filteredExpenses;
    if (selectedMonth !== "all") {
        monthExpense = expenses.filter(
            (expense) => getMonthKey(expense.date) === selectedMonth
        )
    }
    //console.log('monthExpense:', monthExpense)


    // organised the filtered results for display
    const groupedExpenses = {}
    for (const expense of monthExpense) {
        const monthKey = getMonthKey(expense.date)

        if (!groupedExpenses[monthKey]) {
            groupedExpenses[monthKey] = [];
        }

        groupedExpenses[monthKey].push(expense)
    }
    //console.log('groupedExpenses:', groupedExpenses)

    // Convert the grouped object to an array and sort months newest first
    const monthGroups = Object.entries(groupedExpenses).sort(
        ([monthA], [monthB]) => monthB.localeCompare(monthA)
    )
    //console.log('monthGroups:', monthGroups)


    // reset all filter
    function resetFilter(){
        setSearch("")
        setSelectedCategory("all")
        setSelectedMonth("all")
    }


    return (
        <>
            <h1 className="mb-6 text-xl">My Expenses</h1>

            {/* Filter Warp */}
            <div className="flex justify-between filter-wrap items-top gap-4 mb-8">
                
                <div className="flex flex-wrap gap-4">
                    <div className="filter-month">
                        <label>Month: </label>
                        <select
                            id="month"
                            className="text-gray-500 border border-gray-700 rounded-md px-2 py-1.5 focus:outline-1 focus:outline-sky-800"
                            value={selectedMonth}
                            onChange={(e) => setSelectedMonth(e.target.value)}
                        >
                            {monthFilterOption.length &&
                                monthFilterOption.map((month) => (
                                    <option key={month.id} value={month.value}>
                                        {month.label}
                                    </option>
                                ))}
                        </select>
                    </div>
                    <div className="filter-category">
                        <label>Category: </label>
                        <select
                            id="category"
                            className="text-gray-500 border border-gray-700 rounded-md px-2 py-1.5 focus:outline-1 focus:outline-sky-800"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            <option value="all">All Categories</option>
                            
                            {categoryOptions.length &&
                                categoryOptions.map((category) => (
                                    <option key={category.id} value={category.value}>
                                        {category.label}
                                    </option>
                                ))}
                        </select>
                    </div>
                    <div className="filter-search">
                        <label>Search: </label>
                        <input 
                            type="search"
                            name="searchExpense"
                            value={search}
                            placeholder="search...."
                            className="border border-gray-700 rounded-sm px-2 py-1 focus:outline-1 focus:outline-sky-800"
                            onChange={(e) => setSearch(e.target.value)}
                            />
                    </div>
                </div>
                
                <div className="btn-wrap">
                    <button 
                        type="button"
                        className="cursor-pointer px-3 py-1 border border-sky-800 bg-sky-800 rounded-md backdrop-blur-sm hover:bg-sky-900/80"
                        onClick={resetFilter}>
                            Reset
                        </button>
                </div>
            </div>

            {/* Listing Warp */}
            <div className="flex flex-col gap-5 text-sm leading-4 text-white">
                {monthExpense.length === 0 ? (
                    <p className="text-gray-500 dark:text-gray-400 text-base font-medium tracking-tight mb-2">
                        No expenses found.
                    </p>
                ) : (
                    monthGroups.map(([monthKey, items]) => {
                        
                        // Monthwise total
                        const monthTotal = items.reduce(
                            (total, expense) => total + expense.amount, 
                            0
                        );

                        // sorted items descending order
                        const sortedItems = [...items].sort(
                            (a, b) => b.date.localeCompare(a.date)
                        )

                        return (
                            <>
                                <section key={monthKey} className="mb-4">
                                    {/* Month heading and total */}
                                    <div className="flex gap-4 items-center justify-between border-b border-gray-700 px-2 pb-2 mb-4">
                                        <h3 className="text-lg font-medium">
                                            { monthFormatter.format(new Date(`${monthKey}-01`)) }
                                        </h3>
                                        <p className="text-base font-medium">
                                            <span>₹</span> {monthTotal}
                                        </p>     
                                    </div>
                                    
                                    {/* Expenses belonging to this month */}
                                    <div className="flex flex-col gap-5">
                                        {sortedItems.map((expense) => (

                                            <ExpenseItem
                                                fromPage="expense-list"
                                                getCategoryLabel={getCategoryLabel}
                                                expense={expense}
                                                key={expense.id}
                                                onEditExpense={() => editExpense(expense)}
                                            />
                                        ))}
                                    </div>
                                </section>    
                            </>
                        )
                    })
                )}
            </div>
        </>
    );
}

export default ExpenseList