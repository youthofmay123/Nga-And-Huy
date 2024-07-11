//libs
import classNames from 'classnames/bind';
import styles from './Form.module.scss';

//components

function From() {
    const cx = classNames.bind(styles);
    return (
        <div
            className={cx('modal fade')}
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className={cx('modal-dialog')}>
                <div className={cx('modal-content')}>
                    <div className={cx('modal-header')}>
                        <h1 className={cx('modal-title', 'fs-5')} id="exampleModalLabel">
                            Modal title
                        </h1>
                        <button
                            type="button"
                            className={cx('btn-close')}
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className={cx('modal-body')}>...</div>
                    <div className={cx('modal-footer')}>
                        <button type="button" className={cx('btn', 'btn-secondary')} data-bs-dismiss="modal">
                            Close
                        </button>
                        <button type="button" className={cx('btn', 'btn-primary')}>
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default From;
