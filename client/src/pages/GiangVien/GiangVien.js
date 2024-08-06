//libs
import classNames from 'classnames/bind';
import styles from './GiangVien.module.scss';
import HeaderContent from '~/Layout/HeaderContent';
import DanhSachGiangVien from './DanhSachGiangVien';
import { useEffect, useState } from 'react';

//components

function GiangVien() {
    const cx = classNames.bind(styles);
    const formIdModalGiangVien = '#exampleModalGiangVien';
    const [data, setData] = useState([]);

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

    const getData = async () => {
        try {
            let result = await fetch(`http://localhost:4000/giangvien/`);
            const data = await result.json();

            setData(data);
            return data;
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getData();
    }, []);

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
