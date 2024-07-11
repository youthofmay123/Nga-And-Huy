//libs
import classNames from 'classnames/bind';
import styles from './DanhSachSinhVien.module.scss';

//components
import Table from '~/components/Table';

function DanhSachSinhVien({ data }) {
    const cx = classNames.bind(styles);
    const stateTable = ['MSSV', 'HỌ VÀ TÊN', 'NGÀY SINH', 'LỚP DANH NGHĨA', 'TRẠNG THÁI', ''];

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

    const DataDSSV = ['mssv', 'hoTen', 'ngaySinh', 'lopDanhNghia', 'trangThai'];

    const valueTable = filterArrayByKeys(data, DataDSSV);
    return (
        <div className={cx('wrapper')}>
            <Table states={stateTable} valueStudent={valueTable} rootValue={data} />
        </div>
    );
}

export default DanhSachSinhVien;
