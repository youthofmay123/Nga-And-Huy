//libs
import classNames from 'classnames/bind';
import styles from './ChuanDauRa.module.scss';
import HeaderContent from '~/Layout/HeaderContent';
//components
import Box from '~/components/Box';

function ChuanDauRa() {
    const cx = classNames.bind(styles);
    const valueState1 = [
        { title: 'Kỹ thuật phần mềm' },
        { title: 'Hệ thống thông tin' },
        { title: 'Khoa học máy tính' },
        { title: 'Khoa học dữ liệu' },
        { title: 'Công nghệ thông tin' },
    ];
    const valueState2 = [{ title: '2023 - 2024' }];
    const valueState3 = [
        { title: 'Học kỳ 1' },
        { title: 'Học kỳ 2' },
        { title: 'Học kỳ 3' },
        { title: 'Học kỳ 4' },
        { title: 'Học kỳ 5' },
        { title: 'Học kỳ 6' },
        { title: 'Học kỳ 7' },
        { title: 'Học kỳ 8' },
        { title: 'Học kỳ 9' },
    ];

    return (
        <div className={cx('wrapper')}>
            <HeaderContent
                name="ĐÁNH GIÁ CHUẨN ĐẦU RA CHƯƠNG TRÌNH ĐÀO TẠO"
                valueState1={valueState1}
                valueState2={valueState2}
                valueState3={valueState3}
            />
            <div className={cx('content-box')}>
                <Box />
                <Box />
                <Box />
                <Box />
            </div>

            <div className={cx('content-results')}></div>
            <div className={cx('content-table')}></div>
        </div>
    );
}

export default ChuanDauRa;
