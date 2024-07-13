//libs
import classNames from 'classnames/bind';
import styles from './FormThongTinSinhVien.module.scss';

//components
import Input from '~/components/Input';
import Button from '~/components/Button';
import Combobox from '~/components/Combobox';

const FromThongTinSinhVien = ({ show, handleClose, name }) => {
    const cx = classNames.bind(styles);
    return (
        <div className={cx('wrapper')}>
            <div style={{ display: show ? 'flex' : 'none' }} className={cx('modal', 'form')}>
                <div className={cx('content')}>
                    <div className={cx('close-modal')} onClick={handleClose}>
                        &times;
                    </div>
                    <div className={cx('title')}>THÔNG TIN SINH VIÊN</div>
                    <div className={cx('info', 'row')}>
                        <Input title="MSSV" isRequire />
                        <Input title="Họ và tên" isRequire />
                        <Input title="Ngày sinh" isRequire />
                        <Input title="Lớp danh nghĩa" isRequire />
                        <Combobox title="Giới tính" isRequire />
                        <Combobox title="Trạng thái" isRequire />
                    </div>
                    <div className={cx('action')}>
                        <Button primary className={cx('confirm-btn')} onClick={handleClose}>
                            Xác nhận
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FromThongTinSinhVien;
