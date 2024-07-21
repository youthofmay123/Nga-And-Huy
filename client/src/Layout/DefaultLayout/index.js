import Header from './Header';
import Sidebar from './Sidebar';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useState } from 'react';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const [choose, setChoose] = useState(true);
    const callbackFunction = (childChoose) => {
        setChoose(childChoose);
    };

    return (
        <div className={cx(choose ? 'wrapper' : 'wrapper-dark')}>
            <Header />
            <div className={cx('container-component')}>
                <Sidebar parentCallback={callbackFunction} />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
