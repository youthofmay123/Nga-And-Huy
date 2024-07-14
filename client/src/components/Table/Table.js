//libs
import classNames from 'classnames/bind';
import styles from './Table.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//component
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import FromThongTinSinhVien from '~/components/Form/FormThongTinSinhVien/FormThongTinSinhVien';
import FormKetQuaDanhGia from '../Form/FormKetQuaDanhGia';
import FormThongTinGiangVien from '../Form/FormThongTinGiangVien';

function Table({ states, valueData, edit, formThongTinSinhVien, formKetQuaDanhGia, formThongTinGiangVien }) {
    const cx = classNames.bind(styles);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-table')}>
                <table className={cx('table', 'custom-table')}>
                    <thead className={cx('header')}>
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
                        <tbody className={cx('body')}>
                            {valueData.map((student, index) => (
                                <tr key={index}>
                                    <th scope="row">{index.toString().padStart(4, '0')}</th>

                                    {Object.entries(student).map(([key, value]) => (
                                        <td key={key}>{value}</td>
                                    ))}
                                    <td>
                                        {edit && (
                                            <FontAwesomeIcon
                                                className={cx('edit-btn')}
                                                icon={faPencil}
                                                data-toggle="modal"
                                                data-target="#exampleModal"
                                            />
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    ) : (
                        <div className={cx('no-data')}>KHÔNG CÓ DỮ LIỆU</div>
                    )}
                </table>
            </div>
            {(formThongTinSinhVien && <FromThongTinSinhVien />) ||
                (formKetQuaDanhGia && <FormKetQuaDanhGia />) ||
                (formThongTinGiangVien && <FormThongTinGiangVien />)}
        </div>
    );
}

export default Table;
