import image from '~/IMG/Icon.png';
//libs
import classNames from 'classnames/bind';
import styles from './Box.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
//components
import Image from '../Image';

function Box() {
    const cx = classNames.bind(styles);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>ELOs</div>
            <div className={cx('image')}>
                <Image src={image} />
            </div>
            <div className={cx('content')}>ELO-A</div>
            <div className={cx('data-note')}>
                <p className={cx('data')}>
                    <FontAwesomeIcon icon={faChartLine} />
                    8.5%
                </p>
                <p className={cx('note')}>Up from yesterday</p>
            </div>
        </div>
    );
}

export default Box;
