//libs
import classNames from 'classnames/bind';
import styles from './Compobox.module.scss';

//components

function Combobox({ title, isRequire, small = false }) {
    const cx = classNames.bind(styles);

    return (
        <div className={cx('wrapper')}>
            <div
                className={cx('select', {
                    small,
                })}
            >
                <span className={cx('title')}>
                    <strong>{title}</strong>
                    {isRequire && <span className={cx('isRequired')}>*</span>}
                </span>

                <select>
                    <option>Tự phát sinh</option>
                </select>
            </div>
        </div>
    );
}

export default Combobox;
