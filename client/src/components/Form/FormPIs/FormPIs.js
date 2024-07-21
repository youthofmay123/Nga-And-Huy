//libs
import classNames from 'classnames/bind';
import styles from './FormPIs.module.scss';
//component
import Input from '~/components/Input';
import Textarea from '~/components/Textarea';
import Button from '~/components/Button';

export default function FormPIs() {
    const cx = classNames.bind(styles);

    return (
        <div
            className={cx('modal', 'fade')}
            id="exampleModalPIs"
            taxIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className={cx('modal-dialog')} role="document" style={{ justifyContent: 'center' }}>
                <div
                    className={cx('form', 'modal-body', 'modal-content', 'modal-content-custom')}
                    id="exampleModalPIs"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true"
                >
                    <div className={cx('content')}>
                        <div className={cx('close-modal')} data-dismiss="modal" aria-label="Close">
                            &times;
                        </div>

                        <div className={cx('title')}>PIs</div>
                        <div className={cx('name-course')}>ELO-A</div>
                        <div className={cx('info', 'row')}>
                            <Input title="MÃ PI" isRequire small />
                            <Input title="PI" isRequire small />
                            <Input title="BLOOM'S TAXONOMY LEVELS" isRequire />
                            <Input title="DOMAIN" isRequire />
                            <Input title="CHÚ THÍCH" />
                            <Textarea title="MÔ TẢ" />
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
