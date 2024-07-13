//libs
import classNames from 'classnames/bind';
import styles from './Table.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

//component
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import FromThongTinSinhVien from '~/components/Form/FormThongTinSinhVien/FormThongTinSinhVien';
import FormKetQuaDanhGia from '../Form/FormKetQuaDanhGia';

function Table({ states, valueStudent, edit, formThongTinSinhVien, formKetQuaDanhGia }) {
    const cx = classNames.bind(styles);
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };
    const handleCloseModal = () => {
        setShowModal(false);
    };

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
                    <tbody className={cx('body')}>
                        {valueStudent.map((student, index) => (
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
                                            onClick={handleOpenModal}
                                        />
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {(formThongTinSinhVien && <FromThongTinSinhVien show={showModal} handleClose={handleCloseModal} />) ||
                (formKetQuaDanhGia && <FormKetQuaDanhGia show={showModal} handleClose={handleCloseModal} />)}
        </div>
    );
}

export default Table;
