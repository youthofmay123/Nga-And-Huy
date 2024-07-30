import Image1 from '~/IMG/Icon1.png';
import Image2 from '~/IMG/Icon2.png';
import Image3 from '~/IMG/Icon3.png';
import Image4 from '~/IMG/Icon4.png';

//libs
import classNames from 'classnames/bind';
import styles from './ChuanDauRa.module.scss';
import HeaderContent from '~/Layout/HeaderContent';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    scales,
    elements,
} from 'chart.js';
//components
import Box from '~/components/Box';
import Table from '~/components/Table';

function ChuanDauRa() {
    const cx = classNames.bind(styles);
    ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
    const valueState1 = [
        { title: 'Kỹ thuật phần mềm' },
        { title: 'Hệ thống thông tin' },
        { title: 'Khoa học máy tính' },
        { title: 'Khoa học dữ liệu' },
        { title: 'Công nghệ thông tin' },
    ];
    const valueState2 = [{ title: '2023 - 2024' }];
    const valueState3 = [
        { title: 'Học kỳ 1' },
        { title: 'Học kỳ 2' },
        { title: 'Học kỳ 3' },
        { title: 'Học kỳ 4' },
        { title: 'Học kỳ 5' },
        { title: 'Học kỳ 6' },
        { title: 'Học kỳ 7' },
        { title: 'Học kỳ 8' },
        { title: 'Học kỳ 9' },
    ];

    const data = {
        eloa: {
            PI1: {
                pass: 250,
                fail: 50,
            },
            PI2: {
                pass: 200,
                fail: 60,
            },
            PI3: {
                pass: 160,
                fail: 30,
            },
            PI4: {
                pass: 60,
                fail: 260,
            },
        },
        elob: {
            PI1: {
                pass: 250,
                fail: 50,
            },
            PI2: {
                pass: 260,
                fail: 60,
            },
        },

        eloc: {
            PI1: {
                pass: 250,
                fail: 50,
            },
            PI2: {
                pass: 260,
                fail: 60,
            },
        },

        elod: {
            PI1: {
                pass: 250,
                fail: 50,
            },
            PI2: {
                pass: 260,
                fail: 60,
            },
        },
        eloe: {
            PI1: {
                pass: 250,
                fail: 50,
            },
            PI2: {
                pass: 260,
                fail: 60,
            },
        },

        elof: {
            PI1: {
                pass: 250,
                fail: 50,
            },
            PI2: {
                pass: 60,
                fail: 260,
            },
        },
    };
    const elo = data.eloa;
    const pass = Object.keys(elo).map((key) => elo[key].pass);
    const fail = Object.keys(elo).map((key) => elo[key].fail);
    const pecent = pass.map((a, i) => 100 * (a / (a + fail[i])));

    const data1 = {
        labels: Object.keys(elo),
        datasets: [
            {
                label: 'Số lượng sinh viên đạt PI',
                data: pass,
                backgroundColor: '#4880FF',
            },
            {
                label: 'Số lượng sinh viên không đạt PI',
                data: fail,
                backgroundColor: '#FF9000',
            },
        ],
    };
    const data2 = {
        labels: Object.keys(elo),
        datasets: [
            {
                label: 'Phần trăm',
                data: pecent,
                backgroundColor: '#4880FF',
            },
        ],
    };

    const options1 = {
        responsive: true,
        scales: {
            x: {
                grid: {
                    drawOnChartArea: false,
                },
            },

            y: {
                grid: {
                    drawOnChartArea: true,
                },
            },
        },

        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    usePointStyle: true, // Use point style for legend labels
                    pointStyle: 'circle', // Change point style to circle
                },
            },
        },
    };

    const options2 = {
        responsive: true,

        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    usePointStyle: true, // Use point style for legend labels
                    pointStyle: 'circle', // Change point style to circle
                },
            },
        },
        scales: {
            x: {
                grid: {
                    drawOnChartArea: false,
                },
            },

            y: {
                grid: {
                    drawOnChartArea: true,
                },

                beginAtZero: true,
                ticks: {
                    callback: function (value) {
                        return value + '%'; // add percentage symbol to y-axis ticks
                    },
                },
            },
        },
    };
    const states = ['PI', 'Target', 'Số sinh viên đạt', 'Số sinh viên không dạt', 'Chú thích'];
    return (
        <div className={cx('wrapper')}>
            <HeaderContent
                name="ĐÁNH GIÁ CHUẨN ĐẦU RA CHƯƠNG TRÌNH ĐÀO TẠO"
                valueState1={valueState1}
                valueState2={valueState2}
                valueState3={valueState3}
            />
            <div className={cx('content-box')}>
                <Box title="ELOs" image={Image1} content="ELO-A" data="8.5" />
                <Box title="Năm học" image={Image2} content="2023-2024" data="1.3" />
                <Box title="Target" image={Image3} content="60%" data="4.3" />
                <Box title="Total Pending" image={Image4} content="2040" data="1.8" />
            </div>
            <div className={cx('content-statistical')}>
                <div className={cx('content-results')}>
                    <div className={cx('header-result')}>
                        <span className={cx('title')}>Results</span>
                    </div>
                    <div className={cx('chart')}>
                        <div className={cx('chart-1')}>
                            <Bar data={data1} options={options1} className={cx('canvas')} />
                        </div>
                        <div className={cx('chart-2')}>
                            <Bar data={data2} options={options2} className={cx('canvas')} />
                        </div>
                    </div>
                </div>
                <div className={cx('content-table')}>
                    <div className={cx('header-result')}>
                        <span className={cx('title')}>Table Results</span>
                        <div className={cx('table-wrapper')}>
                            <Table states={states} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChuanDauRa;
