//libs
import classNames from 'classnames/bind';
import styles from './FormCLO.module.scss';

//component
import Input from '~/components/Input';
import Button from '~/components/Button';
import Combobox from '~/components/Combobox';
import Textarea from '~/components/Textarea';

function FormCLOs() {
    const cx = classNames.bind(styles);
    return (
        <div
            className={cx('modal', 'fade')}
            id="exampleModalCLO"
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
                        <div className={cx('title')}>CLOs</div>
                        <div className={cx('name-course')}>NHẬP MÔN LẬP TRÌNH</div>
                        <div className={cx('info', 'row')}>
                            <Input title="Mã CLOs" isRequire small />
                            <Combobox title="Level" isRequire small />
                            <Combobox title="ELOs" isRequire small />
                            <Combobox title="PIs" isRequire small />
                            <Combobox title="Bloom Level" isRequire />
                            <Textarea title="CLOs" isRequire />
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

export default FormCLOs;
