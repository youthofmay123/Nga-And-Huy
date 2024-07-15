//libs
import classNames from 'classnames/bind';
import styles from './Textarea.module.scss';
import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

//components

function Input({ title, isRequire, small = false, placeholder = 'Tự phát sinh' }) {
    const cx = classNames.bind(styles);
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef();

    const handleClear = () => {
        setInputValue('');
        inputRef.current.focus();
    };

    const handleChange = (e) => {
        const inputValue = e.target.value;
        if (!inputValue.startsWith(' ')) {
            setInputValue(inputValue);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div
                className={cx('input', {
                    small,
                })}
            >
                <span className={cx('title')}>
                    <strong>{title}</strong>
                    {isRequire && <span className={cx('isRequired')}>*</span>}
                </span>

                <textarea
                    value={inputValue}
                    spellCheck="false"
                    onChange={handleChange}
                    ref={inputRef}
                    placeholder={placeholder}
                />
                {!!inputValue && (
                    <button className={cx('clear')} onClick={handleClear}>
                        {/* Clear */}
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
            </div>
        </div>
    );
}

export default Input;
