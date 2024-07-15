//libs
import classNames from 'classnames/bind';
import styles from './CLOs.module.scss';
import HeaderContent from '~/Layout/HeaderContent';
import TableCLO from '~/components/Table/TableCLO';

//component

function CLOs() {
    const cx = classNames.bind(styles);
    const states = ['MÃ MÔN HỌC', 'TÊN MÔN HỌC', 'CHÚ THÍCH', ''];
    const data = [
        {
            id: 1,
            maMonHoc: '2101539',
            tenMonHoc: 'Nhập Môn Tin Học',
            tenTiengAnh: 'Foundations Of Computing',
            chuThich: '',
            clos: [
                {
                    clo: 'Present and explain the Importantsteps in the process of solving a problem on the computer',
                    bloomLevel: 'Explain(2)',
                    pis: 'PI3',
                    elos: 'ELO-B',
                    level: 'I',
                },
                {
                    clo: 'Present and explain the Importantsteps in the process of solving a problem on the computer',
                    bloomLevel: 'Explain(2)',
                    pis: 'PI3',
                    elos: 'ELO-B',
                    level: 'I',
                },
            ],
        },
        {
            id: 2,
            maMonHoc: '2101539',
            tenMonHoc: 'Kỹ Thuật Lập Trình',
            tenTiengAnh: 'Programming Techniques',
            chuThich: '',
            clos: [
                {
                    clo: 'Present and explain the Importantsteps in the process of solving a problem on the computer',
                    bloomLevel: 'Explain(2)',
                    pis: 'PI3',
                    elos: 'ELO-B',
                    level: 'I',
                },
            ],
        },
        {
            id: 3,
            maMonHoc: '2101539',
            tenMonHoc: 'Nhập Môn Lập Trình',
            tenTiengAnh: 'Introduction to Programming',
            chuThich: '',
            clos: [
                {
                    clo: 'Present and explain the Importantsteps in the process of solving a problem on the computer',
                    bloomLevel: 'Explain(2)',
                    pis: 'PI3',
                    elos: 'ELO-B',
                    level: 'I',
                },
                {
                    clo: 'Able to design an algorithm to solve what the problem requirement using repetition structures and control structures.',
                    bloomLevel: 'Apply(3)',
                    pis: 'PI1',
                    elos: 'ELO-C',
                    level: 'I',
                },

                {
                    clo: 'Define functions to solve the tasks of the problem.',
                    bloomLevel: 'Apply(3)',
                    pis: 'PI1',
                    elos: 'ELO-C',
                    level: 'I',
                },

                {
                    clo: 'Implement the correct program on a one-dimensional array data structure with time complexity o(n)',
                    bloomLevel: 'Apply(3)',
                    pis: 'PI1',
                    elos: 'ELO-C',
                    level: 'I',
                },
            ],
        },
        {
            id: 4,
            maMonHoc: '2101539',
            tenMonHoc: 'Lập Trình Hướng Đối Tượng',
            tenTiengAnh: 'Object Oriented Programming',
            chuThich: '',
            clos: [
                {
                    clo: 'Present and explain the Importantsteps in the process of solving a problem on the computer',
                    bloomLevel: 'Explain(2)',
                    pis: 'PI3',
                    elos: 'ELO-B',
                    level: 'I',
                },
            ],
        },
        {
            id: 5,
            maMonHoc: '2101539',
            tenMonHoc: 'Nhập Môn Tin Học',
            tenTiengAnh: 'Foundations Of Computing',
            chuThich: '',
            clos: [
                {
                    clo: 'Present and explain the Importantsteps in the process of solving a problem on the computer',
                    bloomLevel: 'Explain(2)',
                    pis: 'PI3',
                    elos: 'ELO-B',
                    level: 'I',
                },
            ],
        },

        {
            id: 6,
            maMonHoc: '2101539',
            tenMonHoc: 'Nhập Môn Tin Học',
            tenTiengAnh: 'Foundations Of Computing',
            chuThich: '',
            clos: [
                {
                    clo: 'Present and explain the Importantsteps in the process of solving a problem on the computer',
                    bloomLevel: 'Explain(2)',
                    pis: 'PI3',
                    elos: 'ELO-B',
                    level: 'I',
                },
            ],
        },

        {
            id: 7,
            maMonHoc: '2101539',
            tenMonHoc: 'Nhập Môn Tin Học',
            tenTiengAnh: 'Foundations Of Computing',
            chuThich: '',
            clos: [
                {
                    clo: 'Present and explain the Importantsteps in the process of solving a problem on the computer',
                    bloomLevel: 'Explain(2)',
                    pis: 'PI3',
                    elos: 'ELO-B',
                    level: 'I',
                },
            ],
        },

        {
            id: 8,
            maMonHoc: '2101539',
            tenMonHoc: 'Nhập Môn Tin Học',
            tenTiengAnh: 'Foundations Of Computing',
            chuThich: '',
            clos: [
                {
                    clo: 'Present and explain the Importantsteps in the process of solving a problem on the computer',
                    bloomLevel: 'Explain(2)',
                    pis: 'PI3',
                    elos: 'ELO-B',
                    level: 'I',
                },
            ],
        },

        {
            id: 9,
            maMonHoc: '2101539',
            tenMonHoc: 'Nhập Môn Tin Học',
            tenTiengAnh: 'Foundations Of Computing',
            chuThich: '',
            clos: [
                {
                    clo: 'Present and explain the Importantsteps in the process of solving a problem on the computer',
                    bloomLevel: 'Explain(2)',
                    pis: 'PI3',
                    elos: 'ELO-B',
                    level: 'I',
                },
            ],
        },

        {
            id: 10,
            maMonHoc: '2101539',
            tenMonHoc: 'Nhập Môn Tin Học',
            tenTiengAnh: 'Foundations Of Computing',
            chuThich: '',
            clos: [
                {
                    clo: 'Present and explain the Importantsteps in the process of solving a problem on the computer',
                    bloomLevel: 'Explain(2)',
                    pis: 'PI3',
                    elos: 'ELO-B',
                    level: 'I',
                },
            ],
        },
        {
            id: 11,
            maMonHoc: '2101539',
            tenMonHoc: 'Nhập Môn Tin Học',
            tenTiengAnh: 'Foundations Of Computing',
            chuThich: '',
            clos: [
                {
                    clo: 'Present and explain the Importantsteps in the process of solving a problem on the computer',
                    bloomLevel: 'Explain(2)',
                    pis: 'PI3',
                    elos: 'ELO-B',
                    level: 'I',
                },
            ],
        },

        {
            id: 12,
            maMonHoc: '2101539',
            tenMonHoc: 'Nhập Môn Tin Học',
            tenTiengAnh: 'Foundations Of Computing',
            chuThich: '',
            clos: [
                {
                    clo: 'Present and explain the Importantsteps in the process of solving a problem on the computer',
                    bloomLevel: 'Explain(2)',
                    pis: 'PI3',
                    elos: 'ELO-B',
                    level: 'I',
                },
            ],
        },

        {
            id: 13,
            maMonHoc: '2101539',
            tenMonHoc: 'Nhập Môn Tin Học',
            tenTiengAnh: 'Foundations Of Computing',
            chuThich: '',
            clos: [
                {
                    clo: 'Present and explain the Importantsteps in the process of solving a problem on the computer',
                    bloomLevel: 'Explain(2)',
                    pis: 'PI3',
                    elos: 'ELO-B',
                    level: 'I',
                },
            ],
        },

        {
            id: 14,
            maMonHoc: '2101539',
            tenMonHoc: 'Nhập Môn Tin Học',
            tenTiengAnh: 'Foundations Of Computing',
            chuThich: '',
            clos: [
                {
                    clo: 'Present and explain the Importantsteps in the process of solving a problem on the computer',
                    bloomLevel: 'Explain(2)',
                    pis: 'PI3',
                    elos: 'ELO-B',
                    level: 'I',
                },
            ],
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <HeaderContent name="CLOs" state1="Môn học" state2="Order Type" state3="Order Status" />
            <div className={cx('wrapper-table')}>
                <TableCLO states={states} valueData={data} add edit formCLOs />
            </div>
        </div>
    );
}

export default CLOs;
