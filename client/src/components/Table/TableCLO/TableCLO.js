//libs
import classNames from 'classnames/bind';
import styles from '../Table.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//component
import { faPencil, faPlus } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import Table from '~/components/Table';
import FormCLOs from '~/components/Form/FormCLOs';

function TableCLO({ states, valueData, add, edit, formCLOs }) {
    const cx = classNames.bind(styles);

    const childState = ['CLO', 'BLOOM LEVEL', 'PIS', 'ELOS', 'LEVEL', ''];
    ///
    const [expandedRow, setExpandedRow] = useState(null);

    const toggleRow = (id) => {
        setExpandedRow(expandedRow === id ? null : id);
    };
    ///

    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-table')}>
                <table className={cx('table', 'custom-table')}>
                    <thead className={cx('header-CLO')}>
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
                            {valueData.map((course) => (
                                <React.Fragment key={course.id}>
                                    <tr
                                        className={expandedRow === course.id ? cx('highlighted') : cx('no-highligh')}
                                        style={{
                                            cursor: 'pointer',
                                        }}
                                    >
                                        <th scope="row" onClick={() => toggleRow(course.id)}>
                                            {course.id.toString().padStart(4, '0')}
                                        </th>
                                        <td onClick={() => toggleRow(course.id)}>{course.maMonHoc}</td>
                                        <td onClick={() => toggleRow(course.id)}>
                                            {course.tenMonHoc} <br />({course.tenTiengAnh})
                                        </td>
                                        <td onClick={() => toggleRow(course.id)}>{course.chuThich}</td>
                                        <td>
                                            {add && (
                                                <FontAwesomeIcon
                                                    className={cx('add-btn')}
                                                    icon={faPlus}
                                                    data-toggle="modal"
                                                    data-target="#exampleModalCLO"
                                                />
                                            )}

                                            {edit && (
                                                <FontAwesomeIcon
                                                    className={cx('edit-btn')}
                                                    icon={faPencil}
                                                    data-toggle="modal"
                                                    data-target="#exampleModalCLO"
                                                />
                                            )}
                                        </td>
                                    </tr>
                                    {expandedRow === course.id && (
                                        <tr className={cx('form')}>
                                            <td
                                                colSpan="5"
                                                className={cx('child-form')}
                                                style={{
                                                    padding: 0,
                                                }}
                                            >
                                                <Table
                                                    states={childState}
                                                    valueData={course.clos}
                                                    add
                                                    edit
                                                    formCLOsRubrics
                                                />
                                            </td>
                                        </tr>
                                    )}
                                </React.Fragment>
                            ))}
                        </tbody>
                    ) : (
                        <div className={cx('no-data')}>KHÔNG CÓ DỮ LIỆU</div>
                    )}
                </table>
            </div>
            {formCLOs && <FormCLOs />}
        </div>
    );
}

export default TableCLO;
