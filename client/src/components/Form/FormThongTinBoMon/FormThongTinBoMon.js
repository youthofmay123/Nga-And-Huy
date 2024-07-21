//libs
import classNames from 'classnames/bind';
import styles from './FormThongTinBoMon.module.scss';

//components
import Input from '~/components/Input';
import Button from '~/components/Button';

function FormThongTinBoMon() {
    const cx = classNames.bind(styles);
    return (
        <div
            className={cx('modal', 'fade')}
            id="exampleModalBoMon"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className={cx('modal-dialog')} role="document" style={{ justifyContent: 'center' }}>
                <div
                    className={cx('form', 'modal-body', 'modal-content', 'modal-content-custom')}
                    id="exampleModalBoMon"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true"
                >
                    <div className={cx('content')}>
                        <div className={cx('close-modal')} data-dismiss="modal" aria-label="Close">
                            &times;
                        </div>
                        <div className={cx('title')}>BỘ MÔN</div>
                        <div className={cx('name-course')}>NHẬP MÔN LẬP TRÌNH</div>
                        <div className={cx('info', 'row')}>
                            <Input title="Mã bộ môn" isRequire className={cx('maBoMon')} />
                            <Input title="Tên bộ môn" isRequire red />
                            <Input title="Trưởng bộ môn" isRequire orange />
                            <Input title="Phó bộ môn" isRequire green />
                            <Input title="Trạng thái" isRequire blue />
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

export default FormThongTinBoMon;
