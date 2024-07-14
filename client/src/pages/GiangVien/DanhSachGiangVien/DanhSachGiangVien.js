//libs
import classNames from 'classnames/bind';
import styles from './DanhSachGiangVien.module.scss';

//components
import Table from '~/components/Table';

function DanhSachGiangVien({ data }) {
    const cx = classNames.bind(styles);
    const stateTable = ['MÃ GIẢNG VIÊN', 'HỌ VÀ TÊN', 'CHỨC VỤ', 'EMAIL', 'TRẠNG THÁI', ''];
    return (
        <div className={cx('wrapper')}>
            <Table states={stateTable} valueData={data} formThongTinGiangVien edit />
        </div>
    );
}

export default DanhSachGiangVien;
