//libs
import classNames from 'classnames/bind';
import styles from './FormELOs.module.scss';
//components
import Input from '~/components/Input';
import Button from '~/components/Button';
import Combobox from '~/components/Combobox';
import Textarea from '~/components/Textarea';
export default function FormELOs() {
    const cx = classNames.bind(styles);

    return (
        <div
            className={cx('modal', 'fade')}
            id="exampleModalELO"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className={cx('modal-dialog')} role="document" style={{ justifyContent: 'center' }}>
                <div
                    className={cx('form', 'modal-body', 'modal-content', 'modal-content-custom')}
                    id="exampleModalELO"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true"
                >
                    <div className={cx('content')}>
                        <div className={cx('close-modal')} data-dismiss="modal" aria-label="Close">
                            &times;
                        </div>
                        <div className={cx('title')}>ELOs</div>
                        <div className={cx('name-course')}>EXPECTED LEARNING OUTCOMES </div>
                        <div className={cx('info', 'row')}>
                            <Input title="Mã ELOs" isRequire small />
                            <Input title="ELOs" isRequire small />
                            <Input title="Ghi chú" />
                            <Textarea title="Mô tả" isRequire />
                        </div>
                        <div className={cx('action')}>
                            <Button primary className={cx('confirm-btn')} data-dismiss="modal" aria-label="Close" large>
                                Xác nhận
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
