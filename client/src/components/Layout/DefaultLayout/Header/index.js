import Logo_IUH from '~/IMG/Logo_IUH.png';
import { Link } from 'react-router-dom';
import avatar from '~/IMG/avatar.jpg';

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/lophocphan">
                    <img
                        className="logo-iuh"
                        src={Logo_IUH}
                        alt="logo iuh"
                        style={{ width: '155px', height: '78px', padding: '10px 5px', margin: '0' }}
                    />
                </Link>
                <div className="container">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle"
                                    to="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    <img
                                        src={avatar}
                                        alt=""
                                        className="user-avatar"
                                        style={{
                                            'border-radius': '50%',
                                            width: '45px',
                                            height: '45px',
                                            'margin-right': '5px',
                                        }}
                                    />
                                    Huy Nguyễn
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to="#">
                                        Giảng viên
                                    </Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="#">
                                        Đổi mật khẩu
                                    </Link>
                                    <Link className="dropdown-item" to="#">
                                        Đăng xuất
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
