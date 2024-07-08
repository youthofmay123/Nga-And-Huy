import icon01 from '~/IMG/icon-01.png';
import icon02 from '~/IMG/icon-02.png';
import icon03 from '~/IMG/icon-03.png';
import icon04 from '~/IMG/icon-04.png';
import icon05 from '~/IMG/icon-05.png';
import icon06 from '~/IMG/icon-06.png';
import '~/components/ComponetStyle/Sidebar.css';

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

function Sidebar() {
    const cx = classNames.bind(styles);
    return (
        <div className={cx('sidebar')}>
            <div className={cx('list')}>
                <div className={cx('list-group')}>
                    <div className={cx('list-group-space')}>
                        <NavLink to="/lophocphan" className={cx('list-group-item', 'list-group-item-action')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faBook} />
                            LỚP HỌC PHẦN
                        </NavLink>

                        <NavLink to="/banganhxa" className={cx('list-group-item', 'list-group-item-action')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faBorderAll} />
                            BẢNG ÁNH XẠ
                        </NavLink>
                        <NavLink to="/elospis" className={cx('list-group-item', 'list-group-item-action')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faSchool} />
                            ELOs & PIs
                        </NavLink>
                        <NavLink to="/clos" className={cx('list-group-item', 'list-group-item-action')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faLandmark} />
                            CLOs
                        </NavLink>
                        <NavLink to="/chuongtrinhkhung" className={cx('list-group-item', 'list-group-item-action')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faListCheck} />
                            CHƯƠNG TRÌNH KHUNG
                        </NavLink>
                        <NavLink to="/giangvien" className={cx('list-group-item', 'list-group-item-action')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faChalkboardUser} />
                            GIẢNG VIÊN
                        </NavLink>
                        <NavLink to="/chuandaura" className={cx('list-group-item', 'list-group-item-action')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faGraduationCap} />
                            CHUẨN ĐẦU RA
                        </NavLink>
                        <NavLink to="/bomon" className={cx('list-group-item', 'list-group-item-action')}>
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
