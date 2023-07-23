import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">
          SB Admin <sup>2</sup>
        </div>
      </a>
      <hr className="sidebar-divider my-0" />

      <li className="nav-item">
        <Link to="/" className="nav-link">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </Link>
      </li>
      <hr className="sidebar-divider" />

      <div className="sidebar-heading">Interface</div>
      <li className="nav-item active">
        <Link to="/uploadFile" className="nav-link">
          <i className="fas fa-fw fa-file"></i>
          <span>Upload File</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/managerRole" className="nav-link" href="#">
          <i className="fas fa-fw fa-pen"></i>
          <span>Manager Role</span>
        </Link>
      </li>
      <hr className="sidebar-divider d-none d-md-block" />

      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle"></button>
      </div>
    </ul>
  );
}

export default Sidebar;
