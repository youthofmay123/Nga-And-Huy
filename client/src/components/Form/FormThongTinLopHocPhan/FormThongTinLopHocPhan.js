//libs
import classNames from 'classnames/bind';
import styles from './FormThongTinLopHocPhan.module.scss';

//components
import Input from '~/components/Input';
import Button from '~/components/Button';

function FormThongTinLopHocPhan() {
    const cx = classNames.bind(styles);
    return (
        <div
            className={cx('modal', 'fade')}
            id="exampleModalLHP"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className={cx('modal-dialog')} role="document" style={{ justifyContent: 'center' }}>
                <div
                    className={cx('form', 'modal-body', 'modal-content', 'modal-content-custom')}
                    id="exampleModalLHP"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true"
                >
                    <div className={cx('content')}>
                        <div className={cx('close-modal')} data-dismiss="modal" aria-label="Close">
                            &times;
                        </div>
                        <div className={cx('title')}>THÔNG TIN LỚP HỌC PHẦN</div>
                        <div className={cx('info', 'row')}>
                            <Input title="Mã lớp HP" autoPading isRequire />
                            <Input title="Tên lớp" autoPading isRequire />
                            <Input title="Tên môn học" autoPading isRequire />
                            <Input title="Giảng viên" autoPading isRequire />
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
}

export default FormThongTinLopHocPhan;
