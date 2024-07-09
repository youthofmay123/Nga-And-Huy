import Logo_IUH from '~/IMG/Logo_IUH.png';
import { Link } from 'react-router-dom';
import avatar from '~/IMG/avatar.jpg';

//libs
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import config from '~/config';
//componet
import Search from '~/components/Search';
import Image from '~/components/Image';

function Header() {
    const cx = classNames.bind(styles);

    return (
        <header className={cx('wrapper')}>
            <nav className="navbar navbar-expand-lg ">
                {/* Logo */}
                <Link to={config.home} className={cx('logo')}>
                    <img className={cx('logo-iuh')} src={Logo_IUH} alt="logo iuh" />
                </Link>
                {/* search */}
                <Search />

                <div className="container">
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
                                    style={{ display: 'flex', alignItems: 'center' }}
                                >
                                    <div className={cx('active')}>
                                        <Image src={avatar} alt="" className={cx('user-avatar')} />
                                        <div className={cx('name-role')}>
                                            <strong className={cx('name')}>Huy Nguyễn</strong>
                                            <p className={cx('role')}>Giảng viên</p>
                                        </div>
                                    </div>
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to="#">
                                        Đăng xuất
                                    </Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="#">
                                        Đổi mật khẩu
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
