//libs
import classNames from 'classnames/bind';
import styles from './GiangVien.module.scss';
import HeaderContent from '~/Layout/HeaderContent';
import DanhSachGiangVien from './DanhSachGiangVien';

//components

function GiangVien() {
    const cx = classNames.bind(styles);
    const formIdModalGiangVien = '#exampleModalGiangVien';
    const valueState1 = [
        {
            title: 'Bộ môn',
        },
    ];
    const valueState2 = [
        {
            title: 'Chức vụ',
        },
    ];
    const valueState3 = [
        {
            title: 'Trạng thái',
        },
    ];

    const data = [
        {
            maGiangVien: '21130791',
            hoTen: 'TS.Nguyễn Thị Hạnh',
            chucVu: 'Trưởng bộ môn',
            email: 'ngthihanh@gmail.com',
            trangThai: 'Còn dạy',
        },
        {
            maGiangVien: '21130791',
            hoTen: 'TS.Nguyễn Thị Hạnh',
            chucVu: 'Trưởng bộ môn',
            email: 'ngthihanh@gmail.com',
            trangThai: 'Còn dạy',
        },

        {
            maGiangVien: '21130791',
            hoTen: 'TS.Nguyễn Thị Hạnh',
            chucVu: 'Trưởng bộ môn',
            email: 'ngthihanh@gmail.com',
            trangThai: 'Còn dạy',
        },

        {
            maGiangVien: '21130791',
            hoTen: 'TS.Nguyễn Thị Hạnh',
            chucVu: 'Trưởng bộ môn',
            email: 'ngthihanh@gmail.com',
            trangThai: 'Còn dạy',
        },

        {
            maGiangVien: '21130791',
            hoTen: 'TS.Nguyễn Thị Hạnh',
            chucVu: 'Trưởng bộ môn',
            email: 'ngthihanh@gmail.com',
            trangThai: 'Còn dạy',
        },
        {
            maGiangVien: '21130791',
            hoTen: 'TS.Nguyễn Thị Hạnh',
            chucVu: 'Trưởng bộ môn',
            email: 'ngthihanh@gmail.com',
            trangThai: 'Còn dạy',
        },

        {
            maGiangVien: '21130791',
            hoTen: 'TS.Nguyễn Thị Hạnh',
            chucVu: 'Trưởng bộ môn',
            email: 'ngthihanh@gmail.com',
            trangThai: 'Còn dạy',
        },

        {
            maGiangVien: '21130791',
            hoTen: 'TS.Nguyễn Thị Hạnh',
            chucVu: 'Trưởng bộ môn',
            email: 'ngthihanh@gmail.com',
            trangThai: 'Còn dạy',
        },

        {
            maGiangVien: '21130791',
            hoTen: 'TS.Nguyễn Thị Hạnh',
            chucVu: 'Trưởng bộ môn',
            email: 'ngthihanh@gmail.com',
            trangThai: 'Còn dạy',
        },
        {
            maGiangVien: '21130791',
            hoTen: 'TS.Nguyễn Thị Hạnh',
            chucVu: 'Trưởng bộ môn',
            email: 'ngthihanh@gmail.com',
            trangThai: 'Còn dạy',
        },

        {
            maGiangVien: '21130791',
            hoTen: 'TS.Nguyễn Thị Hạnh',
            chucVu: 'Trưởng bộ môn',
            email: 'ngthihanh@gmail.com',
            trangThai: 'Còn dạy',
        },

        {
            maGiangVien: '21130791',
            hoTen: 'TS.Nguyễn Thị Hạnh',
            chucVu: 'Trưởng bộ môn',
            email: 'ngthihanh@gmail.com',
            trangThai: 'Còn dạy',
        },

        {
            maGiangVien: '21130791',
            hoTen: 'TS.Nguyễn Thị Hạnh',
            chucVu: 'Trưởng bộ môn',
            email: 'ngthihanh@gmail.com',
            trangThai: 'Còn dạy',
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <HeaderContent
                name="GIẢNG VIÊN"
                valueState1={valueState1}
                valueState2={valueState2}
                valueState3={valueState3}
                btnAdd
                btnImport
                formId={formIdModalGiangVien}
            />
            <DanhSachGiangVien data={data} formId={formIdModalGiangVien} />
        </div>
    );
}

export default GiangVien;
