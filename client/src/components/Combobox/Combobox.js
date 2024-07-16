//libs
import classNames from 'classnames/bind';
import styles from './Compobox.module.scss';

//components

function Combobox({ title, isRequire, small = false, red = false, orange = false, green = false, blue = false }) {
    const cx = classNames.bind(styles);

    return (
        <div className={cx('wrapper')}>
            <div
                className={cx('select', {
                    small,
                    red,
                    orange,
                    green,
                    blue,
                })}
            >
                <span className={cx('title')}>
                    <strong className={cx('text-title')}>{title}</strong>
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