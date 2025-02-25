import "./headerbar.css";

export default function Headerbar() {
  return (
    <>
      <div className="headerbar">
        <header className="container">
          <nav>
            <ul>
              <li>
                <strong>Acme Corp</strong>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
}
