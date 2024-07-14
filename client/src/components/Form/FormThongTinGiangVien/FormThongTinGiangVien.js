//libs
import classNames from 'classnames/bind';
import styles from './FormThongTinGiangVien.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

//components
import Input from '~/components/Input';
import Combobox from '~/components/Combobox';
import Button from '~/components/Button';
import { faCamera, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const FormThongTinGiangVien = () => {
    const cx = classNames.bind(styles);
    const [avatar, setAvatar] = useState();

    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview);
        };
    }, [avatar]);

    const handleImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            file.preview = URL.createObjectURL(file);
            setAvatar(file);
        }
    };

    const handleClearAvatar = () => {
        setAvatar(null);
    };

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
                        <div className={cx('title')}>THÔNG TIN GIẢNG VIÊN</div>
                        <div className={cx('avatar')}>
                            <div className={cx('format-input')}>
                                {avatar ? (
                                    <img className={cx('avatar-value')} src={avatar.preview} />
                                ) : (
                                    <FontAwesomeIcon icon={faCamera} className={cx('camera-icon')} />
                                )}
                                <input type="file" accept="image/*" onChange={handleImage} />
                            </div>
                            {!avatar && <div className={cx('title-avatar')}>Chọn hình</div>}
                            {avatar && (
                                <FontAwesomeIcon
                                    icon={faCircleXmark}
                                    className={cx('clear-avatar')}
                                    onClick={handleClearAvatar}
                                />
                            )}
                        </div>
                        <div className={cx('info', 'row')}>
                            <Input title="Mã giảng viên" isRequire />
                            <Input title="Họ và tên" isRequire />
                            <Input title="Ngày sinh" isRequire />
                            <Input title="Số điện thoại" isRequire />
                            <Input title="Email" isRequire />
                            <Combobox title="Thuộc bộ môn" isRequire />
                            <Combobox title="Chức vụ" isRequire />
                            <Combobox title="Trạng thái" isRequire />
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

export default FormThongTinGiangVien;
