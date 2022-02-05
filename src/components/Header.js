
import AllNotes from "./AllNotes"

function Header() {
    return (
      <div>
        <nav className="nav">
          <div className="nav-left">
            <a className="brand" href="/">
             Task lista
            </a>
          </div>
          <div className="nav-right">
            <div className="tabs">
              <a href="/beleske">Beleške</a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
  
  export default Header;