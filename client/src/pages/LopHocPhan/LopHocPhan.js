//libs
import classNames from 'classnames/bind';
import styles from './LopHocPhan.module.scss';
import { useEffect, useState } from 'react';

//component
import HeaderContent from '~/Layout/HeaderContent';
import Course from '~/components/Course';
import FormThongTinLopHocPhan from '~/components/Form/FormThongTinLopHocPhan';

function LopHocPhan() {
    const cx = classNames.bind(styles);
    const [courses, setCourses] = useState([]);
    const [data, setData] = useState([]);
    const formIdModalLHP = '#exampleModalLHP';
    const valueState1 = [
        {
            title: 'Mã lớp HP',
        },
    ];
    const valueState2 = [
        {
            title: 'Tên lớp HP',
        },
    ];
    const valueState3 = [
        {
            title: 'Trạng thái',
        },
    ];

    const handleOnClick = () => {};

    const getData = async () => {
        try {
            let result = await fetch('http://localhost:4000/lophocphan');
            const data = await result.json();

            setData(data);
            return data;
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getData(<Course data={data} />);
    }, []);

    return (
        <div className={cx('wrapper')}>
            <HeaderContent
                name="LỚP HỌC PHẦN"
                valueState1={valueState1}
                valueState2={valueState2}
                valueState3={valueState3}
                btnImport
                btnAdd
                onClickWhenAdd={handleOnClick}
                formId={formIdModalLHP}
            />
            <div className={cx('container')}>
                <div className={cx('courses', 'row')}>
                    {data.map((course, index) => (
                        <Course data={course} key={index} />
                    ))}
                </div>
            </div>
            <FormThongTinLopHocPhan />
        </div>
    );
}

export default LopHocPhan;
