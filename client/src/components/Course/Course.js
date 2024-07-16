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

function Course() {
    const cx = classNames.bind(styles);
    return (
        <div className={cx('card')}>
            <Image className={cx('card-img-top')} src={Frame01} alt="Card image cap" />
            <div className={cx('card-body')}>
                <Link to={config.routes.chitiethocphan} className={cx('course-name')}>
                    <strong className={cx('full-name')}>Lập trình phân tán với công nghệ Java</strong>
                    <div className={cx('course-id')}>(420300214601)</div>
                </Link>
                <div className={cx('class-name')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faUser} />
                    DHKTPM17A
                </div>
            </div>
        </div>
    );
}

export default Course;
