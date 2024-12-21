import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">
      <header
        className="d-flex align-items-center justify-content-between bg-light shadow"
        style={{
          padding: '10px 20px',
          borderRadius: '10px',
          maxWidth: '1200px',
          margin: '10px auto',
        }}
      >
        <h1 className="mb-0">
          <Link className="text-decoration-none text-dark" to="/">
            Purrfect Adoption
          </Link>
        </h1>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link" to="/available-cats">
                Available Cats
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact-us">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-us">
                About Us
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main id="content">
        <Outlet />
      </main>
      <footer className="bg-light text-center py-3">
        <p>© Copyright 2024</p>
      </footer>
    </div>
  );
};

export default BaseLayout;
