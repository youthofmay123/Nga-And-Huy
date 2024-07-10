//libs
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileImport, faFilter, faPlus, faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
//component
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function Header_Content({ name, state1, state2, state3, btnAdd, btnImport, onClickWhenAdd, onClickWhenImport }) {
    return (
        <div className={cx('header')}>
            <h1 className={cx('name-page')}>
                <strong>{name}</strong>
            </h1>
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
                        <Button primary small leftIcon={<FontAwesomeIcon icon={faPlus} />} onClick={onClickWhenAdd}>
                            THÊM
                        </Button>
                    )}
                    {btnImport && (
                        <Button
                            primary
                            small
                            leftIcon={<FontAwesomeIcon icon={faFileImport} />}
                            onClick={onClickWhenImport}
                        >
                            IMPORT
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}
Header_Content.protoTypes = {
    name: PropTypes.string.isRequired,
    state1: PropTypes.string,
    state2: PropTypes.string,
    state3: PropTypes.string,
    btnAdd: PropTypes.node,
    btnImport: PropTypes.node,
};
export default Header_Content;
