// Navbar without React Router

const Navbar = ({page, setPage}) => {
    return(
        <nav className="w-full h-24 flex items-center gap-10 px-5 fixed bg-white mx-auto shadow-2xl z-10">
            
            <div className="logo-wrap text-center w-40">
                <h1 className="logo text-3xl"><a href="#home" className="item" onClick={(e) => { e.preventDefault(); setPage('home') }}>BG</a></h1>
            </div>
            <div className="nav-items flex flex-wrap items-start justify-start gap-5">
                <a href="#home" className="item" onClick={(e) => { e.preventDefault(); setPage('home') }} style={{ fontWeight: page === 'home' ? 'bold' : 'normal' }}>Home</a>
                <a href="#bgchanger1" className="item" onClick={(e) => { e.preventDefault(); setPage('bgchanger1') }} style={{ fontWeight: page === 'bgchanger1' ? 'bold' : 'normal' }}>BG Change 1</a>
                <a href="#bgchanger2" className="item" onClick={(e) => { e.preventDefault(); setPage('bgchanger2') }} style={{ fontWeight: page === 'bgchanger2' ? 'bold' : 'normal' }}>BG Change 2</a>
                <a href="#bgchanger3" className="item" onClick={(e) => { e.preventDefault(); setPage('bgchanger3') }} style={{ fontWeight: page === 'bgchanger3' ? 'bold' : 'normal' }}>BG Change 3</a>
                <a href="#bloglist" className="item" onClick={(e) => { e.preventDefault(); setPage('bloglist') }} style={{ fontWeight: page === 'bloglist' ? 'bold' : 'normal' }}>Blog List</a>
            </div>
                
        </nav>
    );
}

export default Navbar