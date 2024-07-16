//libs
import classNames from 'classnames/bind';
import styles from './BoMon.module.scss';

//components
import HeaderContent from '~/Layout/HeaderContent';
import Table from '~/components/Table';

function BoMon() {
    const cx = classNames.bind(styles);
    const states = ['MÃ BỘ MÔN', 'TÊN BỘ MÔN', 'TRƯỞNG BỘ MÔN', 'PHÓ BỘ MÔN', 'TRẠNG THÁI', ''];
    return (
        <div className={cx('wrapper')}>
            <HeaderContent name="BỘ MÔN" btnAdd />
            <div className={cx('wrapper-table')}>
                <Table states={states} />
            </div>
        </div>
    );
}

export default BoMon;
