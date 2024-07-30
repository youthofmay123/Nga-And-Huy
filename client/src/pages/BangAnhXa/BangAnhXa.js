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
            title: 'Kỹ thuật phần mềm',
        },
        {
            title: 'Hệ thống thông tin',
        },
        {
            title: 'Khoa học máy tính',
        },
        {
            title: 'Khoa học dữ liệu',
        },
        {
            title: 'Công nghệ thông tin',
        },
    ];
    const valueState2 = [
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

    const states = [
        { name: 'a', num: [1, 2] },
        { name: 'b', num: [1, 2, 3] },
        { name: 'c', num: [1, 2, 3, 4] },
        { name: 'd', num: [1, 2] },
        { name: 'e', num: [1, 2] },
        { name: 'f', num: [1, 2] },
    ];

    const data = [
        {
            id: 1,
            tenTiengViet: 'Triết học Mác - Lênin',
            tenTiengAnh: 'Philosophy of Marxism and Leninism',
            hocKy: 1,
            eloa: {
                pi1: [1, 2, 3],
            },
        },
        {
            id: 2,
            tenTiengViet: 'Giáo dục thể chất 1',
            tenTiengAnh: 'Physical education 1',
            hocKy: 1,
            eloa: {
                pi1: [1, 2, 3],
            },
        },
        {
            id: 3,
            tenTiengViet: 'Giáo dục Quốc phòng và an ninh 1',
            tenTiengAnh: 'National defence Education and security 1',
            hocKy: 1,
            eloa: {
                pi1: [1, 2, 3],
            },
        },
        {
            id: 4,
            tenTiengViet: 'Toán cao cấp 1',
            tenTiengAnh: 'Calculus 1',
            hocKy: 1,
            eloa: {
                pi2: [1, 2, 3],
            },
        },
        {
            id: 5,
            tenTiengViet: 'Nhập môn tin học',
            tenTiengAnh: 'Foundations of Computing',
            hocKy: 1,
            eloa: {
                pi2: [2, 6],
            },
            elob: {
                pi1: [1, 5],
            },
            eloc: {
                pi1: [3, 4],
            },
            elof: {
                pi2: [7],
            },
        },
        {
            id: 6,
            tenTiengViet: 'Nhập môn lập trình',
            tenTiengAnh: 'Introduction to Programming',
            hocKy: 1,
            elob: {
                pi3: [1],
            },
            eloc: {
                pi1: [2, 3],
                pi2: [4],
            },
        },
        {
            id: 7,
            tenTiengViet: 'Kỹ năng làm việc nhóm',
            tenTiengAnh: 'Teamwork skills',
            hocKy: 1,
            eloe: {
                pi1: [1, 2],
                pi2: [3, 4],
            },
        },
        {
            id: 8,
            tenTiengViet: 'Giáo dục thể chất 2',
            tenTiengAnh: 'Physical Education 2',
            hocKy: 2,
            eloa: {
                pi1: [1, 2, 3],
            },
        },
        {
            id: 9,
            tenTiengViet: 'Hệ thống máy tính',
            tenTiengAnh: 'Computer Systems',
            hocKy: 2,
            elob: {
                pi1: [1],
                pi3: [4],
            },
            eloc: {
                pi1: [3],
                pi4: [2],
            },
        },
        {
            id: 10,
            tenTiengViet: 'Giáo dục Quốc phòng và an ninh 2',
            tenTiengAnh: 'National defence Education and security 2',
            hocKy: 2,
            eloa: {
                pi1: [1, 2, 3],
            },
        },
        {
            id: 11,
            tenTiengViet: 'Kỹ thuật lập trình',
            tenTiengAnh: 'Programming Techniques',
            hocKy: 2,
            eloa: {
                pi2: [1],
            },
            eloc: {
                pi1: [5],
                pi2: [2, 3, 4],
            },
        },
        {
            id: 12,
            tenTiengViet: 'Kinh tế chính trị Mác — Lênin',
            tenTiengAnh: 'Political economics of Marxism and Leninism',
            hocKy: 2,
            eloa: {
                pi1: [1, 2, 3],
            },
        },
        {
            id: 13,
            tenTiengViet: 'Tiếng Anh 1',
            tenTiengAnh: 'English 1',
            hocKy: 2,
            eloa: {
                pi1: [1, 2, 3],
            },
        },
        {
            id: 14,
            tenTiengViet: 'Lập trình hướng đối tượng',
            tenTiengAnh: 'Object Oriented Programming',
            hocKy: 3,
            elob: {
                pi3: [1, 3],
            },
            eloc: {
                pi1: [2],
                pi2: [4, 5],
            },
        },
        {
            id: 15,
            tenTiengViet: 'Hệ cơ sở dữ liệu',
            tenTiengAnh: 'Database Systems',
            hocKy: 3,
            eloa: {
                pi2: [3],
            },
            elob: {
                pi1: [2],
            },
            eloc: {
                pi1: [1, 5],
                pi2: [4],
            },
        },
        {
            id: 16,
            tenTiengViet: 'Cấu trúc dữ liệu và giải thuật',
            tenTiengAnh: 'Data Structures and Algorithms',
            hocKy: 3,
            elob: {
                pi1: [2],
            },
            eloc: {
                pi2: [1],
                pi3: [3],
            },
            elo3: {
                pi2: [4],
            },
        },
        {
            id: 17,
            tenTiengViet: 'Cấu trúc rời rạc',
            tenTiengAnh: 'Discrete Structures',
            hocKy: 3,
            eloa: {
                pi2: [2, 4, 5],
            },
            elob: {
                pi2: [1, 3],
            },
        },
        {
            id: 18,
            tenTiengViet: 'Tiếng Anh 2',
            tenTiengAnh: 'English 2',
            hocKy: 3,
            eloa: {
                pi1: [1, 2, 3],
            },
        },
        {
            id: 19,
            tenTiengViet: 'Toán cao cấp 2',
            tenTiengAnh: 'Calculus 2',
            hocKy: 3,
            eloa: {
                pi2: [1, 2, 3],
            },
        },
        {
            id: 20,
            tenTiengViet: 'Địa lý kinh tế',
            tenTiengAnh: 'Economic geography',
            hocKy: '3_opt',
            eloa: {
                pi1: [1],
            },
        },
        {
            id: 21,
            tenTiengViet: 'Ứng dụng hóa học trong Công nghiệp',
            tenTiengAnh: 'Industrial applications of chemistry',
            hocKy: '3_opt',
            eloa: {
                pi2: [1, 2, 3],
            },
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <HeaderContent name="BẢNG ÁNH XẠ" valueState1={valueState1} valueState2={valueState2} />
            <div className={cx('wrapper-table')}>
                <TableBAX states={states} data={data} />
            </div>
        </div>
    );
}

export default BangAnhXa;
