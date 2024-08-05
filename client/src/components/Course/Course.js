//libs
import classNames from 'classnames/bind';
import styles from './Course.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import config from '~/config';

//component
import Image from '~/components/Image';
import Frame01 from '~/IMG/Frame 1201.png';

function Course({ data }) {
    const cx = classNames.bind(styles);
    return (
        <Link
            to={config.routes.chitiethocphan}
            className={cx('course-name')}
            state={data}
            style={{ textDecoration: 'none' }}
        >
            <div className={cx('card')}>
                <Image className={cx('card-img-top')} src={Frame01} alt="Card image cap" />
                <div className={cx('card-body')}>
                    <strong className={cx('full-name')}>{data.tenMonHoc}</strong>
                    <div className={cx('course-id')}>({data.maLopHocPhan})</div>
                    <div className={cx('class-name')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faUser} />
                        {data.tenLopHocPhan}
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Course;
