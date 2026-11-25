
function ExpenseItem({expense, getCategoryLabel, id, fromPage, onEditExpense}) {
  //console.log("fromPage: ", fromPage)

  return (
    <>
      <div className="px-6 py-8 dark:bg-gray-800 rounded-lg relative" key={id}>
        { 
          fromPage && fromPage === "expense-list" &&
            (
              <span className="absolute right-5 top-2 cursor-pointer" onClick={onEditExpense}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
              </span>
          )}

        <div className="flex gap-4 items-center justify-between mb-2">
          <h3 className="text-gray-900 dark:text-white text-base font-medium tracking-tight">
            {expense.name}
          </h3>
          <p className="text-gray-500 dark:text-white text-base font-medium tracking-tight">
            <span>₹</span> {expense.amount}
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <p className="font-medium text-gray-500">
            {getCategoryLabel(expense.category)}
          </p>
          <span className="relative -top-1">.</span>
          <p className="font-medium text-gray-500">{expense.date}</p>
        </div>
        {expense.notes && (
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
            {expense.notes}
          </p>
        )}
      </div>
    </>
  );
}

export default ExpenseItem;
