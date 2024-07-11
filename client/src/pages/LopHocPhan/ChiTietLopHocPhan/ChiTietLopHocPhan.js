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

    const callbackFunction = (childChoose) => {
        setChoose(childChoose);
    };
    const data = [
        {
            mssv: '21128101',
            hoTen: 'Nguyễn Lê Nhật Huy',
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
            hoTen: 'Nguyễn Lê Nhật Huy',
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
            hoTen: 'Nguyễn Lê Nhật Huy',
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
            hoTen: 'Nguyễn Lê Nhật Huy',
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
            hoTen: 'Nguyễn Lê Nhật Huy',
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
            hoTen: 'Nguyễn Lê Nhật Huy',
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
            hoTen: 'Nguyễn Lê Nhật Huy',
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
            hoTen: 'Nguyễn Lê Nhật Huy',
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
            hoTen: 'Nguyễn Lê Nhật Huy',
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
            hoTen: 'Nguyễn Lê Nhật Huy',
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
            hoTen: 'Nguyễn Lê Nhật Huy',
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
            hoTen: 'Nguyễn Lê Nhật Huy',
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
            hoTen: 'Nguyễn Lê Nhật Huy',
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
            hoTen: 'Nguyễn Lê Nhật Huy',
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
                state1="Mã Lớp HP"
                state2="Tên Lớp HP"
                state3="Trạng thái"
                btnAdd
                btnImport
                listStudentResultBtn
                parentCallback={callbackFunction}
            />
            {!choose ? <DanhSachSinhVien data={data} /> : <KetQuaDanhGia data={data} />}
        </div>
    );
}

export default ChiTietLopHocPhan;
