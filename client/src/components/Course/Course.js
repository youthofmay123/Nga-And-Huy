//libs
import classNames from 'classnames/bind';
import styles from './Course.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//component
import Image from '~/components/Image';
import Frame01 from '~/IMG/Frame 1201.png';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Course() {
    const cx = classNames.bind(styles);
    return (
        <div className={cx('card')}>
            <Image className={cx('card-img-top')} src={Frame01} alt="Card image cap" />
            <div className={cx('card-body')}>
                <div className={cx('course-name')}>
                    <strong className={cx('full-name')}>Lập trình phân tán với công nghệ Java</strong>
                    <div className={cx('course-id')}>(420300214601)</div>
                </div>
                <p className={cx('class-name')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faUser} />
                    DHKTPM17A
                </p>
            </div>
        </div>
    );
}

export default Course;
