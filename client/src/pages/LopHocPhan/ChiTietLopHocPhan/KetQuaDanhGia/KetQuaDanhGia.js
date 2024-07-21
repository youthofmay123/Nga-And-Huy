//libs
import classNames from 'classnames/bind';
import styles from './KetQuaDanhGia.module.scss';

//components
import Table from '~/components/Table';

function KetQuaDanhGia({ data }) {
    const cx = classNames.bind(styles);
    const formIdModalKetQuaDG = '#exampleModalKQDG';
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

    const stateTable = ['MSSV', 'HỌ VÀ TÊN', 'CLO1', 'CLO2', 'CLO3', 'CLO4', 'TRẠNG THÁI', ''];
    const DataDSSV = ['mssv', 'hoTen', 'clo1', 'clo2', 'clo3', 'clo4', 'trangThai'];

    const valueTable = filterArrayByKeys(data, DataDSSV);

    return (
        <div className={cx('wrapper')}>
            <Table states={stateTable} valueData={valueTable} formKetQuaDanhGia edit formId={formIdModalKetQuaDG} />
        </div>
    );
}

export default KetQuaDanhGia;
