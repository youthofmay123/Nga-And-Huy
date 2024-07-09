//libs
import classNames from 'classnames/bind';
import styles from './LopHocPhan.module.scss';
//component
import Header_Content from '~/Layout/Header_Content';
import Course from '~/components/Course';

function LopHocPhan() {
    const cx = classNames.bind(styles);

    return (
        <div className={cx('wrapper')}>
            <Header_Content name="LỚP HỌC PHẦN" state1="Mã lớp HP" state2="Tên lớp HP" state3="Trạng thái" />
            <div className={cx('container')}>
                <div className={cx('courses', 'row')}>
                    <Course />
                    <Course />
                    <Course />
                    <Course />
                </div>
            </div>
        </div>
    );
}

export default LopHocPhan;
