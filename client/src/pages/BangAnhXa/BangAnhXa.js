//libs
import classNames from 'classnames/bind';
import styles from './BangAnhXa.module.scss';

//components
import HeaderContent from '~/Layout/HeaderContent';
// import Table from '~/components/Table';
function BangAnhXa() {
    return (
        <div>
            <HeaderContent
                name="BẢNG ÁNH XẠ"
                state1="Mã lớp HP"
                state2="Tên lớp HP"
                state3="Trạng thái"
                btnImport
                btnAdd
            />
        </div>
    );
}
export default BangAnhXa;
