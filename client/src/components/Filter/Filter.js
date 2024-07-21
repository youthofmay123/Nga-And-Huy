//libs
import classNames from 'classnames/bind';
import styles from './Filter.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import Menu from '../Popper/Menu';
import { useState } from 'react';

//components

function Filter({ state1, state2, state3, valueState1, valueState2, valueState3 = [{}] }) {
    const cx = classNames.bind(styles);
    const [data1, setData1] = useState(valueState1[0].title);
    const [data2, setData2] = useState(valueState2[0].title);
    const [data3, setData3] = useState(valueState3[0].title);

    const callbackFunction1 = (childChoose) => {
        setData1(childChoose);
    };
    const callbackFunction2 = (childChoose) => {
        setData2(childChoose);
    };

    const callbackFunction3 = (childChoose) => {
        setData3(childChoose);
    };

    return (
        <div className={cx('filter-section')}>
            <div className={cx('form-group-title')}>
                <FontAwesomeIcon className={cx('icon')} icon={faFilter} />
                <div className={cx('title-filter')}>Lọc theo</div>
            </div>
            {valueState1[0].title && (
                <div className={cx('form-group')}>
                    <Menu items={valueState1} parentCallback={callbackFunction1}>
                        <button className={cx('filter-selection-btn')}>{data1}</button>
                    </Menu>
                </div>
            )}
            {valueState2[0].title && (
                <div className={cx('form-group')}>
                    <Menu items={valueState2} parentCallback={callbackFunction2}>
                        <button className={cx('filter-selection-btn')}>{data2}</button>
                    </Menu>
                </div>
            )}
            {valueState3[0].title && (
                <div className={cx('form-group')}>
                    <Menu items={valueState3} parentCallback={callbackFunction3}>
                        <button className={cx('filter-selection-btn')}>{data3}</button>
                    </Menu>
                </div>
            )}
            <div className={cx('form-group')}>
                <button className={cx('filter-reset-btn')}>
                    <FontAwesomeIcon className={cx('icon-reset')} icon={faRotateLeft} />
                    Reset Filter
                </button>
            </div>
        </div>
    );
}

export default Filter;
