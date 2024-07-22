//libs
import classNames from 'classnames/bind';
import styles from '../Table.module.scss';
import React, { useState } from 'react';
//components
import FormThongTinMonHoc from '~/components/Form/FormThongTinMonHoc';

const TableCTK = React.memo(({ states, valueData, formThongTinMonHoc, formId }) => {
    const cx = classNames.bind(styles);
    const [openGroups, setOpenGroups] = useState({});

    let index = 1;
    const toggleGroup = (group) => {
        setOpenGroups((prevOpenGroups) => ({
            ...prevOpenGroups,
            [group]: !prevOpenGroups[group],
        }));
    };

    const isGroupOpen = (group) => openGroups[group];
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-table')}>
                <table className={cx('table', 'custom-table', 'table-CTK')}>
                    <thead className={cx('header-CTK')}>
                        <tr>
                            <th scope="col">STT</th>

                            {states.map((state, index) => (
                                <th scope="col" key={index}>
                                    {state}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    {valueData ? (
                        <tbody>
                            {valueData.map((item) => (
                                <>
                                    <tr
                                        onClick={() => {
                                            toggleGroup(item.hocKy);
                                        }}
                                        className={cx('no-highlight', 'hocky-tinchi')}
                                    >
                                        <td colSpan="3" className={cx('hocky')}>
                                            Học kỳ {item.hocKy}
                                        </td>
                                        <td colSpan="3">{item.tinChiBatBuoc + item.tinChiTuChon}</td>
                                    </tr>
                                    {isGroupOpen(item.hocKy) && (
                                        <>
                                            <tr
                                                className={cx('no-highlight', 'loaihocphan')}
                                                onClick={() => {
                                                    toggleGroup(`batbuoc${item.hocKy}`);
                                                }}
                                            >
                                                <td colSpan="3">Học phần bắt buộc</td>
                                                <td colSpan="3">
                                                    <strong>{item.tinChiBatBuoc}</strong>
                                                </td>
                                            </tr>
                                            {isGroupOpen(`batbuoc${item.hocKy}`) && (
                                                <>
                                                    {item.hocPhanBatBuoc.map((itemBatBuoc, childIndex) => (
                                                        <tr key={childIndex}>
                                                            <td>
                                                                <strong>{(index++).toString().padStart(4, '0')}</strong>
                                                            </td>
                                                            <td>{itemBatBuoc.maMonHoc}</td>
                                                            <td>{itemBatBuoc.tenMonHoc}</td>
                                                            <td>{itemBatBuoc.soTinChi}</td>
                                                            <td>{itemBatBuoc.hocPhan}</td>
                                                            <td>{itemBatBuoc.ghiChu}</td>
                                                        </tr>
                                                    ))}
                                                </>
                                            )}
                                            {item.hocPhanTuChon && (
                                                <tr
                                                    className={cx('no-highlight', 'loaihocphan')}
                                                    onClick={() => {
                                                        toggleGroup(`tuchon${item.hocKy}`);
                                                    }}
                                                >
                                                    <td colSpan="3">Học phần tự chọn</td>
                                                    <td colSpan="3">
                                                        <strong>{item.tinChiTuChon}</strong>
                                                    </td>
                                                </tr>
                                            )}

                                            {isGroupOpen(`tuchon${item.hocKy}`) && (
                                                <>
                                                    {item.hocPhanTuChon.map((itemTuChon, childIndex) => (
                                                        <tr key={childIndex}>
                                                            <td>
                                                                <strong>{(index++).toString().padStart(4, '0')}</strong>
                                                            </td>
                                                            <td>{itemTuChon.maMonHoc}</td>
                                                            <td>{itemTuChon.tenMonHoc}</td>
                                                            <td>{itemTuChon.soTinChi}</td>
                                                            <td>{itemTuChon.hocPhan}</td>
                                                            <td>{itemTuChon.ghiChu}</td>
                                                        </tr>
                                                    ))}
                                                </>
                                            )}
                                        </>
                                    )}
                                </>
                            ))}
                        </tbody>
                    ) : (
                        <tbody>
                            <tr>
                                <td colSpan="6" className={cx('no-data')}>
                                    KHÔNG CÓ DỮ LIỆU
                                </td>
                            </tr>
                        </tbody>
                    )}
                </table>
            </div>
            {formThongTinMonHoc && <FormThongTinMonHoc />}
        </div>
    );
});

export default TableCTK;