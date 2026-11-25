function Header({page, setpage, setEditingExpense}){
    return(
        <>
            <div className="w-full border-b border-gray-700 shadow-sm relative">
                <div className="h-20 flex items-center justify-between gap-10 text-white px-4">
                    <div className="logo-wrap text-center">
                        <h1 className="logo text-2xl font-bold">
                            <a 
                                href="#home" 
                                onClick={(e) => {
                                    e.preventDefault();
                                    setEditingExpense(null)
                                    setpage("home")}}
                            >
                                Expense Tracker
                            </a>
                        </h1>
                    </div>
                    <nav className="text-[14px] flex flex-wrap justify-start space-x-4">
                        <a 
                            href="#home" 
                            className={`rounded-lg px-3 py-1 hover:bg-gray-100 hover:text-gray-900 ${page === 'home' ? 'bg-gray-100 text-gray-900 font-bold' : 'font-medium'}`} 
                            onClick={(e) => {
                                e.preventDefault(); 
                                setEditingExpense(null)
                                setpage('home')
                            }}
                        >
                            Home
                        </a>
                        <a 
                            href="#expenses" 
                            className={`rounded-lg px-3 py-1 hover:bg-gray-100 hover:text-gray-900 ${page === 'expenses' ? 'bg-gray-100 text-gray-900 font-bold' : 'font-medium'}`} 
                            onClick={(e) => {
                                e.preventDefault();
                                setpage('expenses')}}
                        >
                            Expenses
                        </a>
                    </nav>
                </div>
            </div>            
        </>
    )
}

export default Header