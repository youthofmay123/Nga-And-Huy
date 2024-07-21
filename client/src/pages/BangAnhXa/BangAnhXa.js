//libs
import classNames from 'classnames/bind';
import styles from './BangAnhXa.module.scss';
//components
import HeaderContent from '~/Layout/HeaderContent';
import TableBAX from '~/components/Table/TableBAX';

function BangAnhXa() {
    const cx = classNames.bind(styles);
    const valueState1 = [
        {
            title: 'ELOs',
        },
        {
            title: 'ELO-A',
        },
        {
            title: 'ELO-B',
        },
        {
            title: 'ELO-C',
        },
        {
            title: 'ELO-D',
        },
        {
            title: 'ELO-E',
        },
        {
            title: 'ELO-F',
        },
    ];
    const valueState2 = [
        {
            title: 'Học kỳ',
        },
        {
            title: 'Học kỳ 1',
        },
        {
            title: 'Học kỳ 2',
        },
        {
            title: 'Học kỳ 3',
        },
        {
            title: 'Học kỳ 4',
        },
        {
            title: 'Học kỳ 5',
        },
        {
            title: 'Học kỳ 6',
        },
        {
            title: 'Học kỳ 7',
        },
        {
            title: 'Học kỳ 8',
        },
        {
            title: 'Học kỳ 9',
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <HeaderContent name="BẢNG ÁNH XẠ" valueState1={valueState1} valueState2={valueState2} />
            <div className={cx('wrapper-table')}>
                <TableBAX />
            </div>
        </div>
    );
}

export default BangAnhXa;
