import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberPass, setRememberPass] = useState(false);

    const handleSubmit = () => {
        if (username==='user' && password==='123') {
            alert('Login successful')
        }
        console.log(username + ' ' + password);
    }

    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Upload File Tool</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Upload File</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Manager Role</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="container py-5">
            <div className="card mx-auto shadow border-0" style={{width: '30rem'}}>
                <div className="card-body">
                    <h3 className="card- text-center">Login</h3>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" className="form-control" id="username" value={username} onChange={e => setUsername(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" value={password} onChange={e => setPassword(e.target.value)}/>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="rememberPass" onChange={() => setRememberPass(!rememberPass)}/>
                            <label className="form-check-label" htmlFor="rememberPass">Remember Password</label>
                        </div>
                        <button className="btn btn-dark" onClick={handleSubmit}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login;
