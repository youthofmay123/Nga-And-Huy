//libs
import classNames from 'classnames/bind';
import styles from './Table.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//component
import { faPencil, faPlus } from '@fortawesome/free-solid-svg-icons';
import FromThongTinSinhVien from '~/components/Form/FormThongTinSinhVien/FormThongTinSinhVien';
import FormKetQuaDanhGia from '../Form/FormKetQuaDanhGia';
import FormThongTinGiangVien from '../Form/FormThongTinGiangVien';
import FormCLOsRubric from '../Form/FormCLOsRubrics';
import FormThongTinBoMon from '../Form/FormThongTinBoMon';
import FormELOs from '../Form/FormELOs/FormELOs';
import FormPIs from '../Form/FormPIs';
function Table({
    states,
    valueData,
    add,
    edit,
    formThongTinSinhVien,
    formKetQuaDanhGia,
    formThongTinGiangVien,
    formCLOsRubrics,
    formThongTinBoMon,
    formELOs,
    formPIs,
    formId,
}) {
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
                                    <th scope="row">{(index + 1).toString().padStart(4, '0')}</th>

                                    {Object.entries(student).map(([key, value]) => (
                                        <td key={key}>{value}</td>
                                    ))}
                                    <td>
                                        {add && (
                                            <FontAwesomeIcon
                                                className={cx('add-btn')}
                                                icon={faPlus}
                                                data-toggle="modal"
                                                data-target={formId}
                                            />
                                        )}

                                        {edit && (
                                            <FontAwesomeIcon
                                                className={cx('edit-btn')}
                                                icon={faPencil}
                                                data-toggle="modal"
                                                data-target={formId}
                                            />
                                        )}
                                    </td>
                                </tr>
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
            {(formThongTinSinhVien && <FromThongTinSinhVien />) ||
                (formKetQuaDanhGia && <FormKetQuaDanhGia />) ||
                (formThongTinGiangVien && <FormThongTinGiangVien />) ||
                (formCLOsRubrics && <FormCLOsRubric />) ||
                (formThongTinBoMon && <FormThongTinBoMon />) ||
                (formCLOsRubrics && <FormCLOsRubric />) ||
                (formPIs && <FormPIs />)}
        </div>
    );
}

export default Table;
