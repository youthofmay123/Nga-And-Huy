//libs
import classNames from 'classnames/bind';
import styles from './Table.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//component
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import From from '~/components/Form';

function Table({ states, valueStudent, rootValue }) {
    const cx = classNames.bind(styles);

    const editStudent = () => {
        <From />;
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-table')}>
                <table className={cx('table', 'custom-table')}>
                    <thead className={cx('header')}>
                        <tr>
                            <th scope="col">STT</th>

                            {states.map((state, index) => (
                                <th scope="col" key={index}>
                                    {state}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className={cx('body')}>
                        {valueStudent.map((student, index) => (
                            <tr key={index}>
                                <th scope="row">{index.toString().padStart(4, '0')}</th>

                                {Object.entries(student).map(([key, value]) => (
                                    <td key={key}>{value}</td>
                                ))}
                                <td>
                                    <FontAwesomeIcon className={cx('edit-btn')} icon={faPencil} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Table;
