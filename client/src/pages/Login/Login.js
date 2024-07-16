//libs
import classNames from 'classnames/bind';
import styles from './Login.module.scss';

//components
import Input from '~/components/Input';
import Button from '~/components/Button';
import config from '~/config';

function Login() {
    const cx = classNames.bind(styles);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('login')}>
                <div className={cx('title')}>Đăng nhập</div>
                <div className={cx('guide')}>Nhập ID và password để đăng nhập</div>
                <div className={cx('account')}>
                    <div className={cx('account-id')}>
                        <div className={cx('title-id')}>ID</div>
                        <Input large placeholder="Nhập mã giảng viên" login />
                    </div>
                    <div className={cx('account-password')}>
                        <div className={cx('password')}>
                            <div className={cx('title-password')}>Password</div>
                            <div className={cx('forgot-password')}>Forgot Password?</div>
                        </div>
                        <Input large placeholder="" login password />
                    </div>
                    <div className={cx('remember-password')}>
                        <input type="checkbox" />
                        Nhớ mật khẩu
                    </div>
                </div>
                <div className={cx('action')}>
                    {
                        <Button to={config.routes.lophocphan} primary className={cx('custom-btn')}>
                            Đăng nhập
                        </Button>
                    }
                </div>
            </div>
        </div>
    );
}

export default Login;
