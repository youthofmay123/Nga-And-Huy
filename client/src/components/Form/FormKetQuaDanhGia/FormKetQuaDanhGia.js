//libs
import classNames from 'classnames/bind';
import styles from './FormKetQuaDanhGia.module.scss';

//components
import Input from '~/components/Input';
import Button from '~/components/Button';

const FromThongTinSinhVien = ({ show, handleClose }) => {
    const cx = classNames.bind(styles);
    return (
        <div style={{ display: show ? 'flex' : 'none' }} className={cx('modal', 'form')}>
            <div className={cx('content')}>
                <div className={cx('close-modal')} onClick={handleClose}>
                    &times;
                </div>
                <div className={cx('title')}>KẾT QUẢ ĐÁNH GIÁ</div>
                <div className={cx('info', 'row')}>
                    <Input title="MSSV" isRequire />
                    <Input title="Họ và tên" isRequire />
                    <Input title="CLO1" isRequire small />
                    <Input title="CLO2" isRequire small />
                    <Input title="CLO3" isRequire small />
                    <Input title="CLO4" isRequire small />
                    <Input title="CLO1" isRequire small />
                    <Input title="CLO2" isRequire small />
                    <Input title="CLO3" isRequire small />
                    <Input title="CLO4" isRequire small />
                </div>
                <div className={cx('action')}>
                    <Button primary className={cx('confirm-btn')} onClick={handleClose}>
                        Xác nhận
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default FromThongTinSinhVien;
