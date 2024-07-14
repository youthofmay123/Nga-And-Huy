//libs
import classNames from 'classnames/bind';
import styles from './GiangVien.module.scss';
import HeaderContent from '~/Layout/HeaderContent';
import { useState } from 'react';
import DanhSachGiangVien from './DanhSachGiangVien';
import BoMon from '../BoMon';

//components

function GiangVien() {
    const cx = classNames.bind(styles);

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
            <HeaderContent name="GIẢNG VIÊN" state1="Bộ môn" state2="Chức vụ" state3="Trạng thái" btnAdd btnImport />
            <DanhSachGiangVien data={data} />
        </div>
    );
}

export default GiangVien;
