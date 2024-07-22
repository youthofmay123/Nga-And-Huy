//libs
import classNames from 'classnames/bind';
import styles from './TableBAX.module.scss';
//components
function TableBAX({ states, data }) {
    const cx = classNames.bind(styles);
    const renderTableData = (course, key, num) => {
        const columns = [];
        for (let i = 1; i <= num; i++) {
            const piKey = `pi${i}`;
            columns.push(
                course[key] && course[key][piKey] ? (
                    <td key={piKey}>{course[key][piKey].join(',')}</td>
                ) : (
                    <td key={piKey}></td>
                ),
            );
        }
        return <>{columns}</>;
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-table')}>
                <table className={cx('table', 'custom-table')}>
                    <thead>
                        <tr>
                            <th rowSpan="2">STT</th>
                            <th rowSpan="2">Tên môn học</th>
                            <th rowSpan="2">Tên môn tiếng Anh</th>
                            {states.map((elo, index) => (
                                <th key={index} colSpan={elo.num.length} className={cx('elo-title')}>
                                    {`ELO${elo.name}`}
                                </th>
                            ))}
                            <th rowSpan="2">Học kì</th>
                        </tr>
                        <tr>
                            {states.map((elo) =>
                                elo.num.map((eloNum, index) => (
                                    <th key={index} className={cx('elo-title')}>{`PI${eloNum}`}</th>
                                )),
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((course, index) => (
                            <tr key={course.id}>
                                <td>{index + 1}</td>
                                <td>{course.tenTiengViet}</td>
                                <td>{course.tenTiengAnh}</td>

                                {renderTableData(course, 'eloa', states[0].num.length)}
                                {renderTableData(course, 'elob', states[1].num.length)}
                                {renderTableData(course, 'eloc', states[2].num.length)}
                                {renderTableData(course, 'elod', states[3].num.length)}
                                {renderTableData(course, 'eloe', states[4].num.length)}
                                {renderTableData(course, 'elof', states[5].num.length)}

                                <td>{course.hocKy}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TableBAX;
