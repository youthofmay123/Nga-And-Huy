//libs
import classNames from 'classnames/bind';
import styles from './DanhSachGiangVien.module.scss';

//components
import Table from '~/components/Table';

function DanhSachGiangVien({ data, formId }) {
    const cx = classNames.bind(styles);
    const stateTable = ['MÃ GIẢNG VIÊN', 'HỌ VÀ TÊN', 'CHỨC VỤ', 'EMAIL', 'TRẠNG THÁI', ''];
    const filterArrayByKeys = (array, keys) => {
        return array.map((obj) => {
            let filteredObj = {};
            keys.forEach((key) => {
                if (obj.hasOwnProperty(key)) {
                    filteredObj[key] = obj[key];
                }
            });
            return filteredObj;
        });
    };
    const DataDSGV = ['maGiangVien', 'hoTen', 'chucVu', 'email', 'trangThai'];
    const valueTable = filterArrayByKeys(data, DataDSGV);

    return (
        <div className={cx('wrapper')}>
            <Table states={stateTable} valueData={valueTable} formThongTinGiangVien edit formId={formId} />
        </div>
    );
}

export default DanhSachGiangVien;
