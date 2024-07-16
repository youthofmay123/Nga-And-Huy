//libs
import classNames from 'classnames/bind';
import styles from './FormKetQuaDanhGia.module.scss';

//components
import Input from '~/components/Input';
import Button from '~/components/Button';

const FromThongTinSinhVien = () => {
    const cx = classNames.bind(styles);
    return (
        <div
            className={cx('modal', 'fade')}
            id="exampleModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className={cx('modal-dialog')} role="document" style={{ justifyContent: 'center' }}>
                <div
                    className={cx('form', 'modal-body', 'modal-content', 'modal-content-custom')}
                    id="exampleModal"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true"
                >
                    <div className={cx('content')}>
                        <div className={cx('close-modal')} data-dismiss="modal" aria-label="Close">
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
                            <Button primary className={cx('confirm-btn')} data-dismiss="modal" aria-label="Close">
                                Xác nhận
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FromThongTinSinhVien;