//libs
import classNames from 'classnames/bind';
import styles from './ChuongTrinhKhung.module.scss';

//components
import HeaderContent from '~/Layout/HeaderContent';
import TableCTK from '~/components/Table/TableCTK';

function ChuongTrinhKhung() {
    const cx = classNames.bind(styles);
    const formIdModalMonHoc = '#exampleModalMonHoc';
    const states = ['MÃ MÔN HỌC', 'TÊN MÔN HỌC', 'SỐ TÍN CHỈ', 'HỌC PHẦN', 'GHI CHÚ'];
    const valueState1 = [{ title: 'Loại học phần' }, { title: 'Học phần bắt buộc' }, { title: 'Học phần tự chọn' }];
    const valueState2 = [
        {
            title: 'Kỹ thuật phần mềm',
        },
        {
            title: 'Hệ thống thông tin',
        },
        {
            title: 'Khoa học máy tính',
        },
        {
            title: 'Khoa học dữ liệu',
        },
        {
            title: 'Công nghệ thông tin',
        },
    ];

    const dataKTPM = [
        {
            hocKy: 1,
            tinChiBatBuoc: 11,
            tinChiTuChon: 0,
            hocPhanBatBuoc: [
                {
                    maMonHoc: '4203002009',
                    tenMonHoc: 'Nhập môn Tin học',
                    soTinChi: 2,
                    hocPhan: '',
                    ghiChu: '',
                },
                {
                    maMonHoc: '4203003192',
                    tenMonHoc: 'Kỹ năng làm việc nhóm',
                    soTinChi: 2,
                    hocPhan: '',
                    ghiChu: '',
                },
                {
                    maMonHoc: '4203003242',
                    tenMonHoc: 'Giáo dục Quốc phòng và An ninh 1',
                    soTinChi: 4,
                    hocPhan: '',
                    ghiChu: '',
                },
                {
                    maMonHoc: '4203003307',
                    tenMonHoc: 'Giáo dục thể chất 1',
                    soTinChi: 2,
                    hocPhan: '',
                    ghiChu: '',
                },
                {
                    maMonHoc: '4203003848',
                    tenMonHoc: 'Nhập môn Lập trình',
                    soTinChi: 2,
                    hocPhan: '',
                    ghiChu: '',
                },
                {
                    maMonHoc: '4203014164',
                    tenMonHoc: 'Triết học Mác - Lênin',
                    soTinChi: 3,
                    hocPhan: '',
                    ghiChu: '',
                },
                {
                    maMonHoc: '4203003259',
                    tenMonHoc: 'Toán cao cấp 1',
                    soTinChi: 2,
                    hocPhan: '',
                    ghiChu: '',
                },
            ],
        },
        {
            hocKy: 2,
            tinChiBatBuoc: 6,
            tinChiTuChon: 3,
            hocPhanBatBuoc: [
                {
                    maMonHoc: '21128101',
                    tenMonHoc: 'Kỹ thuật lập trình',
                    soTinChi: 3,
                    hocPhan: '2222222',
                    ghiChu: '',
                },
                {
                    maMonHoc: '21128101',
                    tenMonHoc: 'Phân tích dữ liệu 1',
                    soTinChi: 3,
                    hocPhan: '2222222',
                    ghiChu: '',
                },
            ],
            hocPhanTuChon: [
                {
                    maMonHoc: '21128101',
                    tenMonHoc: 'Nhập môn tin học',
                    soTinChi: 3,
                    hocPhan: '2222222',
                    ghiChu: '',
                },
            ],
        },
        {
            hocKy: 3,
            tinChiBatBuoc: 6,
            tinChiTuChon: 3,
            hocPhanBatBuoc: [
                {
                    maMonHoc: '21128101',
                    tenMonHoc: 'Kỹ thuật lập trình',
                    soTinChi: 3,
                    hocPhan: '2222222',
                    ghiChu: '',
                },
                {
                    maMonHoc: '21128101',
                    tenMonHoc: 'Phân tích dữ liệu 1',
                    soTinChi: 3,
                    hocPhan: '2222222',
                    ghiChu: '',
                },
            ],
            hocPhanTuChon: [
                {
                    maMonHoc: '21128101',
                    tenMonHoc: 'Nhập môn tin học',
                    soTinChi: 3,
                    hocPhan: '2222222',
                    ghiChu: '',
                },
            ],
        },

        {
            hocKy: 4,
            tinChiBatBuoc: 6,
            tinChiTuChon: 3,
            hocPhanBatBuoc: [
                {
                    maMonHoc: '21128101',
                    tenMonHoc: 'Kỹ thuật lập trình',
                    soTinChi: 3,
                    hocPhan: '2222222',
                    ghiChu: '',
                },
                {
                    maMonHoc: '21128101',
                    tenMonHoc: 'Phân tích dữ liệu 1',
                    soTinChi: 3,
                    hocPhan: '2222222',
                    ghiChu: '',
                },
            ],
            hocPhanTuChon: [
                {
                    maMonHoc: '21128101',
                    tenMonHoc: 'Nhập môn tin học',
                    soTinChi: 3,
                    hocPhan: '2222222',
                    ghiChu: '',
                },
            ],
        },

        {
            hocKy: 5,
            tinChiBatBuoc: 6,
            tinChiTuChon: 3,
            hocPhanBatBuoc: [
                {
                    maMonHoc: '21128101',
                    tenMonHoc: 'Kỹ thuật lập trình',
                    soTinChi: 3,
                    hocPhan: '2222222',
                    ghiChu: '',
                },
                {
                    maMonHoc: '21128101',
                    tenMonHoc: 'Phân tích dữ liệu 1',
                    soTinChi: 3,
                    hocPhan: '2222222',
                    ghiChu: '',
                },
            ],
            hocPhanTuChon: [
                {
                    maMonHoc: '21128101',
                    tenMonHoc: 'Nhập môn tin học',
                    soTinChi: 3,
                    hocPhan: '2222222',
                    ghiChu: '',
                },
            ],
        },

        {
            hocKy: 6,
            tinChiBatBuoc: 6,
            tinChiTuChon: 3,
            hocPhanBatBuoc: [
                {
                    maMonHoc: '21128101',
                    tenMonHoc: 'Kỹ thuật lập trình',
                    soTinChi: 3,
                    hocPhan: '2222222',
                    ghiChu: '',
                },
                {
                    maMonHoc: '21128101',
                    tenMonHoc: 'Phân tích dữ liệu 1',
                    soTinChi: 3,
                    hocPhan: '2222222',
                    ghiChu: '',
                },
            ],
            hocPhanTuChon: [
                {
                    maMonHoc: '21128101',
                    tenMonHoc: 'Nhập môn tin học',
                    soTinChi: 3,
                    hocPhan: '2222222',
                    ghiChu: '',
                },
            ],
        },

        {
            hocKy: 7,
            tinChiBatBuoc: 6,
            tinChiTuChon: 3,
            hocPhanBatBuoc: [
                {
                    maMonHoc: '21128101',
                    tenMonHoc: 'Kỹ thuật lập trình',
                    soTinChi: 3,
                    hocPhan: '2222222',
                    ghiChu: '',
                },
                {
                    maMonHoc: '21128101',
                    tenMonHoc: 'Phân tích dữ liệu 1',
                    soTinChi: 3,
                    hocPhan: '2222222',
                    ghiChu: '',
                },
            ],
            hocPhanTuChon: [
                {
                    maMonHoc: '21128101',
                    tenMonHoc: 'Nhập môn tin học',
                    soTinChi: 3,
                    hocPhan: '2222222',
                    ghiChu: '',
                },
            ],
        },

        {
            hocKy: 8,
            tinChiBatBuoc: 6,
            tinChiTuChon: 3,
            hocPhanBatBuoc: [
                {
                    maMonHoc: '21128101',
                    tenMonHoc: 'Kỹ thuật lập trình',
                    soTinChi: 3,
                    hocPhan: '2222222',
                    ghiChu: '',
                },
                {
                    maMonHoc: '21128101',
                    tenMonHoc: 'Phân tích dữ liệu 1',
                    soTinChi: 3,
                    hocPhan: '2222222',
                    ghiChu: '',
                },
            ],
            hocPhanTuChon: [
                {
                    maMonHoc: '21128101',
                    tenMonHoc: 'Nhập môn tin học',
                    soTinChi: 3,
                    hocPhan: '2222222',
                    ghiChu: '',
                },
            ],
        },

        {
            hocKy: 9,
            tinChiBatBuoc: 6,
            tinChiTuChon: 3,
            hocPhanBatBuoc: [
                {
                    maMonHoc: '21128101',
                    tenMonHoc: 'Kỹ thuật lập trình',
                    soTinChi: 3,
                    hocPhan: '2222222',
                    ghiChu: '',
                },
                {
                    maMonHoc: '21128101',
                    tenMonHoc: 'Phân tích dữ liệu 1',
                    soTinChi: 3,
                    hocPhan: '2222222',
                    ghiChu: '',
                },
            ],
            hocPhanTuChon: [
                {
                    maMonHoc: '21128101',
                    tenMonHoc: 'Nhập môn tin học',
                    soTinChi: 3,
                    hocPhan: '2222222',
                    ghiChu: '',
                },
            ],
        },
    ];
    return (
        <div className={cx('wrapper')}>
            <HeaderContent
                name="CHƯƠNG TRÌNH KHUNG"
                state1="Loại học phần"
                state2="Kỹ thuật phần mềm"
                valueState1={valueState1}
                valueState2={valueState2}
                btnAdd
                btnImport
                formId={formIdModalMonHoc}
            />
            <div className={cx('wrapper-table')}>
                <TableCTK states={states} valueData={dataKTPM} formThongTinMonHoc formId={formIdModalMonHoc} />
            </div>
        </div>
    );
}

export default ChuongTrinhKhung;
