//libs
import classNames from 'classnames/bind';
import styles from './Box.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
//components
import Image from '../Image';

function Box({ title, image, content, data }) {
    const cx = classNames.bind(styles);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>{title}</div>
            <div className={cx('image')}>
                <Image src={image} />
            </div>
            <div className={cx('content')}>{content}</div>
            <div className={cx('data-note')}>
                <p className={cx('data')}>
                    <FontAwesomeIcon icon={faChartLine} />
                    {data}%
                </p>
                <p className={cx('note')}>Up from yesterday</p>
            </div>
        </div>
    );
}

export default Box;
