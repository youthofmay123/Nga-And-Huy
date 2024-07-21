//libs
import classNames from 'classnames/bind';
import styles from './FormCLOsRubrics.module.scss';

//components
import Input from '~/components/Input';
import Combobox from '~/components/Combobox';
import Button from '~/components/Button';

function FormCLOsRubrics() {
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
                    id="exampleModalCLO"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true"
                >
                    <div className={cx('content')}>
                        <div className={cx('close-modal')} data-dismiss="modal" aria-label="Close">
                            &times;
                        </div>
                        <div className={cx('title')}>CLOs RUBRICS</div>
                        <div className={cx('name-course')}>NHẬP MÔN LẬP TRÌNH</div>
                        <div className={cx('info', 'row')}>
                            <Input title="CLOs" isRequire large />
                            <Input title="A-Failed" isRequire red />
                            <Input title="%" isRequire small darkGreen />
                            <Input title="B-Fair" isRequire orange />
                            <Input title="%" isRequire small darkGreen />
                            <Input title="C-Accepted" isRequire green />
                            <Input title="%" isRequire small darkGreen />
                            <Input title="D-Excellent" isRequire blue />
                            <Input title="%" isRequire small darkGreen />
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

export default FormCLOsRubrics;
