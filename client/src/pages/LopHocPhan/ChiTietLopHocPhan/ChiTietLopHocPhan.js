//libs
import classNames from 'classnames/bind';
import styles from './ChiTietLopHocPhan.module.scss';
import HeaderContent from '~/Layout/HeaderContent';
import { useState } from 'react';

//component
import DanhSachSinhVien from './DanhSachSinhVien';
import KetQuaDanhGia from './KetQuaDanhGia';

function ChiTietLopHocPhan() {
    const cx = classNames.bind(styles);
    const [choose, setChoose] = useState(false);
    const formIdModalDanhSachSV = '#exampleModalDSSV';
    const formIdModalKetQuaDG = '#exampleModalKQDG';

    const valueState1 = [
        {
            title: 'Mã lớp học phần',
        },
    ];
    const valueState2 = [
        {
            title: 'Tên lớp học phần',
        },
    ];
    const valueState3 = [
        {
            title: 'Trạng thái',
        },
    ];

    const callbackFunction = (childChoose) => {
        setChoose(childChoose);
    };
    const data = [
        {
            mssv: '21128101',
            hoTen: 'Nguyễn Thị Nga',
            ngaySinh: '20/09/2003',
            lopDanhNghia: 'DHKTPM17B',
            clo1: 4,
            clo2: 4,
            clo3: 4,
            clo4: 4,
            trangThai: 'Còn học',
        },
        {
            mssv: '21128101',
            hoTen: 'Nguyễn Thị Nga',
            ngaySinh: '20/09/2003',
            lopDanhNghia: 'DHKTPM17B',
            clo1: 4,
            clo2: 4,
            clo3: 4,
            clo4: 4,
            trangThai: 'Còn học',
        },
        {
            mssv: '21128101',
            hoTen: 'Nguyễn Thị Nga',
            ngaySinh: '20/09/2003',
            lopDanhNghia: 'DHKTPM17B',
            clo1: 4,
            clo2: 4,
            clo3: 4,
            clo4: 4,
            trangThai: 'Còn học',
        },

        {
            mssv: '21128101',
            hoTen: 'Nguyễn Thị Nga',
            ngaySinh: '20/09/2003',
            lopDanhNghia: 'DHKTPM17B',
            clo1: 4,
            clo2: 4,
            clo3: 4,
            clo4: 4,
            trangThai: 'Còn học',
        },

        {
            mssv: '21128101',
            hoTen: 'Nguyễn Thị Nga',
            ngaySinh: '20/09/2003',
            lopDanhNghia: 'DHKTPM17B',
            clo1: 4,
            clo2: 4,
            clo3: 4,
            clo4: 4,
            trangThai: 'Còn học',
        },

        {
            mssv: '21128101',
            hoTen: 'Nguyễn Thị Nga',
            ngaySinh: '20/09/2003',
            lopDanhNghia: 'DHKTPM17B',
            clo1: 4,
            clo2: 4,
            clo3: 4,
            clo4: 4,
            trangThai: 'Còn học',
        },

        {
            mssv: '21128101',
            hoTen: 'Nguyễn Thị Nga',
            ngaySinh: '20/09/2003',
            lopDanhNghia: 'DHKTPM17B',
            clo1: 4,
            clo2: 4,
            clo3: 4,
            clo4: 4,
            trangThai: 'Còn học',
        },
        {
            mssv: '21128101',
            hoTen: 'Nguyễn Thị Nga',
            ngaySinh: '20/09/2003',
            lopDanhNghia: 'DHKTPM17B',
            clo1: 4,
            clo2: 4,
            clo3: 4,
            clo4: 4,
            trangThai: 'Còn học',
        },

        {
            mssv: '21128101',
            hoTen: 'Nguyễn Thị Nga',
            ngaySinh: '20/09/2003',
            lopDanhNghia: 'DHKTPM17B',
            clo1: 4,
            clo2: 4,
            clo3: 4,
            clo4: 4,
            trangThai: 'Còn học',
        },
        {
            mssv: '21128101',
            hoTen: 'Nguyễn Thị Nga',
            ngaySinh: '20/09/2003',
            lopDanhNghia: 'DHKTPM17B',
            clo1: 4,
            clo2: 4,
            clo3: 4,
            clo4: 4,
            trangThai: 'Còn học',
        },

        {
            mssv: '21128101',
            hoTen: 'Nguyễn Thị Nga',
            ngaySinh: '20/09/2003',
            lopDanhNghia: 'DHKTPM17B',
            clo1: 4,
            clo2: 4,
            clo3: 4,
            clo4: 4,
            trangThai: 'Còn học',
        },
        {
            mssv: '21128101',
            hoTen: 'Nguyễn Thị Nga',
            ngaySinh: '20/09/2003',
            lopDanhNghia: 'DHKTPM17B',
            clo1: 4,
            clo2: 4,
            clo3: 4,
            clo4: 4,
            trangThai: 'Còn học',
        },
        {
            mssv: '21128101',
            hoTen: 'Nguyễn Thị Nga',
            ngaySinh: '20/09/2003',
            lopDanhNghia: 'DHKTPM17B',
            clo1: 4,
            clo2: 4,
            clo3: 4,
            clo4: 4,
            trangThai: 'Còn học',
        },
        {
            mssv: '21128101',
            hoTen: 'Nguyễn Thị Nga',
            ngaySinh: '20/09/2003',
            lopDanhNghia: 'DHKTPM17B',
            clo1: 4,
            clo2: 4,
            clo3: 4,
            clo4: 4,
            trangThai: 'Còn học',
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <HeaderContent
                name="LẬP TRÌNH PHÂN TÁN VỚI CÔNG NGHỆ JAVA (420300214601)"
                valueState1={valueState1}
                valueState2={valueState2}
                valueState3={valueState3}
                btnAdd
                btnImport
                listStudentResultBtn
                parentCallback={callbackFunction}
                formId={choose ? formIdModalKetQuaDG : formIdModalDanhSachSV}
            />
            {!choose ? <DanhSachSinhVien data={data} /> : <KetQuaDanhGia data={data} />}
        </div>
    );
}

export default ChiTietLopHocPhan;
