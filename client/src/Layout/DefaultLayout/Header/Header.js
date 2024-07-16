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
import Menu from '~/components/Popper/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faArrowRightFromBracket, faLock, faUser } from '@fortawesome/free-solid-svg-icons';

function Header() {
    const cx = classNames.bind(styles);

    return (
        <header className={cx('wrapper')}>
            <nav className="navbar navbar-expand-lg ">
                {/* Logo */}
                <Link to={config.routes.home} className={cx('logo')}>
                    <img className={cx('logo-iuh')} src={Logo_IUH} alt="logo iuh" />
                </Link>
                {/* search */}
                <Search />

                <div className="container">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item dropdown">
                                <div
                                    className="nav-link dropdown-toggle"
                                    id="navbarDropdown"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    style={{ display: 'flex', alignItems: 'center' }}
                                >
                                    <Menu
                                        items={[
                                            {
                                                icon: <FontAwesomeIcon icon={faUser} />,
                                                title: 'Thông tin cá nhân',
                                            },

                                            {
                                                icon: <FontAwesomeIcon icon={faLock} />,
                                                title: 'Đổi mật khẩu',
                                            },
                                            {
                                                icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
                                                title: 'Đăng Xuất',
                                            },
                                        ]}
                                    >
                                        <div className={cx('active')}>
                                            <Image src={avatar} alt="" className={cx('user-avatar')} />
                                            <div className={cx('name-role')}>
                                                <strong className={cx('name')}>Huy Nguyễn</strong>
                                                <p className={cx('role')}>Giảng viên</p>
                                            </div>
                                        </div>
                                    </Menu>
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
