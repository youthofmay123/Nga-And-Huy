//libs
import styles from './HeaderContent.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileImport, faFilter, faPlus, faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

//component
import Button from '~/components/Button';

function HeaderContent({
    name,
    state1,
    state2,
    state3,
    btnAdd,
    btnImport,
    onClickWhenAdd,
    onClickWhenImport,
    listStudentResultBtn,
    listTeacherResultBtn,
    parentCallback,
}) {
    const cx = classNames.bind(styles);

    const [selectionBtnList, setSelectionBtnList] = useState(true);
    const [selectionBtnResult, setSelectionBtnResult] = useState(false);

    const sendChoose = () => {
        parentCallback(selectionBtnList);
    };

    const handleBtnList = () => {
        setSelectionBtnList(true);
        setSelectionBtnResult(false);
        sendChoose();
    };

    const handleBtnResult = () => {
        setSelectionBtnResult(true);
        setSelectionBtnList(false);
        sendChoose();
    };

    return (
        <div className={cx('header')}>
            <h1 className={cx('name-page')}>{name}</h1>
            {listStudentResultBtn && (
                <div className={cx('listStudent_result_btn')}>
                    <Button
                        className={cx('listStudent_btn')}
                        onClick={handleBtnList}
                        style={{
                            backgroundColor: selectionBtnList ? 'var(--primary)' : 'var(--white)',
                            color: selectionBtnList ? 'var(--white)' : 'var(--primary)',
                        }}
                    >
                        <strong>DANH SÁCH SINH VIÊN</strong>
                    </Button>
                    <Button
                        className={cx('result_btn')}
                        onClick={handleBtnResult}
                        style={{
                            backgroundColor: selectionBtnResult ? 'var(--primary)' : 'var(--white)',
                            color: selectionBtnResult ? 'var(--white)' : 'var(--primary)',
                        }}
                    >
                        <strong>KẾT QUẢ ĐÁNH GIÁ</strong>
                    </Button>
                </div>
            )}
            {listTeacherResultBtn && (
                <div className={cx('listTeacher_result_btn')}>
                    <Button
                        className={cx('listTeacher_btn')}
                        onClick={handleBtnList}
                        style={{
                            backgroundColor: selectionBtnList ? 'var(--primary)' : 'var(--white)',
                            color: selectionBtnList ? 'var(--white)' : 'var(--primary)',
                        }}
                    >
                        <strong>DANH SÁCH GIẢNG VIÊN</strong>
                    </Button>
                    <Button
                        className={cx('result_btn')}
                        onClick={handleBtnResult}
                        style={{
                            backgroundColor: selectionBtnResult ? 'var(--primary)' : 'var(--white)',
                            color: selectionBtnResult ? 'var(--white)' : 'var(--primary)',
                        }}
                    >
                        <strong>BỘ MÔN</strong>
                    </Button>
                </div>
            )}

            <div className={cx('container', 'mt-3')}>
                <div className={cx('filter-section')}>
                    <div className={cx('icon-filter')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faFilter} />
                    </div>
                    <div className={cx('form-group')}>
                        <div className={cx('title-filter')}>Lọc theo</div>
                    </div>
                    <div className={cx('form-group')}>
                        <select className={cx('form-control')} id="ma-lop">
                            <option>{state1}</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </select>
                    </div>
                    <div className={cx('form-group')}>
                        <select className={cx('form-control')} id="ten-lop">
                            <option>{state2}</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </select>
                    </div>
                    <div className={cx('form-group')}>
                        <select className={cx('form-control')} id="trang-thai">
                            <option>{state3}</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </select>
                    </div>
                    <div className={cx('reset-filter')}>
                        <FontAwesomeIcon className={cx('icon-reset')} icon={faRotateLeft} />
                        Reset Filter
                    </div>
                </div>
                <div className={cx('action')}>
                    {btnAdd && (
                        <Button
                            primary
                            small
                            leftIcon={<FontAwesomeIcon icon={faPlus} />}
                            onClick={onClickWhenAdd}
                            data-toggle="modal"
                            data-target="#exampleModal"
                        >
                            <strong>THÊM</strong>
                        </Button>
                    )}
                    {btnImport && (
                        <Button
                            primary
                            small
                            leftIcon={<FontAwesomeIcon icon={faFileImport} />}
                            onClick={onClickWhenImport}
                            className={cx('import-btn')}
                        >
                            <strong>IMPORT</strong>
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}
HeaderContent.protoTypes = {
    name: PropTypes.string.isRequired,
    state1: PropTypes.string,
    state2: PropTypes.string,
    state3: PropTypes.string,
    btnAdd: PropTypes.node,
    btnImport: PropTypes.node,
};
export default HeaderContent;
