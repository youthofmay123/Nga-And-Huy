//libs
import classNames from 'classnames/bind';
import styles from './TableBAX.module.scss';
//components
function TableBAX() {
    const cx = classNames.bind(styles);
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
            id: 8,
            tenTiengViet: 'Giáo dục thể chất 2',
            tenTiengAnh: 'Physical Education 2',
            hocKy: 2,
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
            id: 9,
            tenTiengViet: 'Hệ thống máy tính',
            tenTiengAnh: 'Computer Systems',
            hocKy: 2,
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
            id: 10,
            tenTiengViet: 'Giáo dục Quốc phòng và an ninh 2',
            tenTiengAnh: 'National defence Education and security 2',
            hocKy: 2,
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
            id: 11,
            tenTiengViet: 'Kỹ thuật lập trình',
            tenTiengAnh: 'Programming Techniques',
            hocKy: 2,
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
            id: 12,
            tenTiengViet: 'Kinh tế chính trị Mác — Lênin',
            tenTiengAnh: 'Political economics of Marxism and Leninism',
            hocKy: 2,
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
            id: 13,
            tenTiengViet: 'Tiếng Anh 1',
            tenTiengAnh: 'English 1',
            hocKy: 2,
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
            id: 14,
            tenTiengViet: 'Lập trình hướng đối tượng',
            tenTiengAnh: 'Object Oriented Programming',
            hocKy: 3,
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
            id: 15,
            tenTiengViet: 'Hệ cơ sở dữ liệu',
            tenTiengAnh: 'Database Systems',
            hocKy: 3,
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
            id: 16,
            tenTiengViet: 'Cấu trúc dữ liệu và giải thuật',
            tenTiengAnh: 'Data Structures and Algorithms',
            hocKy: 3,
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
            id: 17,
            tenTiengViet: 'Cấu trúc rời rạc',
            tenTiengAnh: 'Discrete Structures',
            hocKy: 3,
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
            id: 18,
            tenTiengViet: 'Tiếng Anh 2',
            tenTiengAnh: 'English 2',
            hocKy: 3,
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
            id: 19,
            tenTiengViet: 'Toán cao cấp 2',
            tenTiengAnh: 'Calculus 2',
            hocKy: 3,
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
            id: 20,
            tenTiengViet: 'Địa lý kinh tế',
            tenTiengAnh: 'Economic geography',
            hocKy: '3_opt',
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
            id: 21,
            tenTiengViet: 'Ứng dụng hóa học trong Công nghiệp',
            tenTiengAnh: 'Industrial applications of chemistry',
            hocKy: '3_opt',
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
    ];
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-table')}>
                <table className={cx('table', 'custom-table')}>
                    <thead>
                        <tr>
                            <th rowSpan="2">STT</th>
                            <th rowSpan="2">Tên môn học</th>
                            <th rowSpan="2">Tên môn tiếng Anh</th>
                            {states.map((elo, index) => (
                                <th key={index} colSpan={elo.num.length} className={cx('elo-title')}>
                                    {`ELO${elo.name}`}
                                </th>
                            ))}
                            <th rowSpan="2">Học kì</th>
                        </tr>
                        <tr>
                            {states.map((elo) =>
                                elo.num.map((eloNum, index) => (
                                    <th key={index} className={cx('elo-title')}>{`PI${eloNum}`}</th>
                                )),
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((course, index) => (
                            <tr key={course.id}>
                                <td>{index + 1}</td>
                                <td>{course.tenTiengViet}</td>
                                <td>{course.tenTiengAnh}</td>
                                {course.eloa && course.eloa.pi1 ? <td>{course.eloa.pi1.join(',')}</td> : <td></td>}
                                {course.eloa && course.eloa.pi2 ? <td>{course.eloa.pi2.join(',')}</td> : <td></td>}

                                {course.elob && course.elob.pi1 ? <td>{course.elob.pi1.join(',')}</td> : <td></td>}
                                {course.elob && course.elob.pi2 ? <td>{course.elob.pi2.join(',')}</td> : <td></td>}
                                {course.elob && course.elob.pi3 ? <td>{course.elob.pi3.join(',')}</td> : <td></td>}

                                {course.eloc && course.eloc.pi1 ? <td>{course.eloc.pi1.join(',')}</td> : <td></td>}
                                {course.eloc && course.eloc.pi2 ? <td>{course.eloc.pi2.join(',')}</td> : <td></td>}
                                {course.eloc && course.eloc.pi3 ? <td>{course.eloc.pi3.join(',')}</td> : <td></td>}
                                {course.eloc && course.eloc.pi4 ? <td>{course.eloc.pi4.join(',')}</td> : <td></td>}

                                {course.elod && course.elod.pi1 ? <td>{course.elod.pi1.join(',')}</td> : <td></td>}
                                {course.elod && course.elod.pi2 ? <td>{course.elod.pi2.join(',')}</td> : <td></td>}

                                {course.eloe && course.eloe.pi1 ? <td>{course.eloe.pi1.join(',')}</td> : <td></td>}
                                {course.eloe && course.eloe.pi2 ? <td>{course.eloe.pi2.join(',')}</td> : <td></td>}

                                {course.elof && course.elof.pi1 ? <td>{course.elof.pi1.join(',')}</td> : <td></td>}
                                {course.elof && course.elof.pi2 ? <td>{course.elof.pi2.join(',')}</td> : <td></td>}

                                <td>{course.hocKy}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TableBAX;
