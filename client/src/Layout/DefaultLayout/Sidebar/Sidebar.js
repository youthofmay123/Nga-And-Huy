//libs
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRightFromBracket,
    faBook,
    faBorderAll,
    faBriefcase,
    faChalkboardUser,
    faGear,
    faGraduationCap,
    faLandmark,
    faListCheck,
    faSchool,
} from '@fortawesome/free-solid-svg-icons';

//component
import config from '~/config';

function Sidebar() {
    const cx = classNames.bind(styles);
    return (
        <div className={cx('sidebar')}>
            <div className={cx('list')}>
                <div className={cx('list-group')}>
                    <div className={cx('list-group-space')}>
                        <NavLink
                            to={config.routes.lophocphan}
                            className={cx('list-group-item', 'list-group-item-action')}
                        >
                            <FontAwesomeIcon className={cx('icon')} icon={faBook} />
                            LỚP HỌC PHẦN
                        </NavLink>
                        <NavLink
                            to={config.routes.banganhxa}
                            className={cx('list-group-item', 'list-group-item-action')}
                        >
                            <FontAwesomeIcon className={cx('icon')} icon={faBorderAll} />
                            BẢNG ÁNH XẠ
                        </NavLink>
                        <NavLink to={config.routes.elospis} className={cx('list-group-item', 'list-group-item-action')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faSchool} />
                            ELOs & PIs
                        </NavLink>
                        <NavLink to={config.routes.clos} className={cx('list-group-item', 'list-group-item-action')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faLandmark} />
                            CLOs
                        </NavLink>
                        <NavLink
                            to={config.routes.chuongtrinhkhung}
                            className={cx('list-group-item', 'list-group-item-action')}
                        >
                            <FontAwesomeIcon className={cx('icon')} icon={faListCheck} />
                            CHƯƠNG TRÌNH KHUNG
                        </NavLink>
                        <NavLink
                            to={config.routes.giangvien}
                            className={cx('list-group-item', 'list-group-item-action')}
                        >
                            <FontAwesomeIcon className={cx('icon')} icon={faChalkboardUser} />
                            GIẢNG VIÊN
                        </NavLink>
                        <NavLink
                            to={config.routes.chuandaura}
                            className={cx('list-group-item', 'list-group-item-action')}
                        >
                            <FontAwesomeIcon className={cx('icon')} icon={faGraduationCap} />
                            CHUẨN ĐẦU RA
                        </NavLink>
                        <NavLink to={config.routes.bomon} className={cx('list-group-item', 'list-group-item-action')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faBriefcase} />
                            BỘ MÔN
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className={cx('active')}>
                <div className={cx('list')}>
                    <div className={cx('list-group')}>
                        <div className={cx('list-group-space')}>
                            <Link to="#" className={cx('list-group-item', 'list-group-item-action')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faGear} />
                                CÀI ĐẶT
                            </Link>

                            <Link to="#" className={cx('list-group-item', 'list-group-item-action')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faArrowRightFromBracket} />
                                ĐĂNG XUẤT
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
