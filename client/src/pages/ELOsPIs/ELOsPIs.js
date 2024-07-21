//libs
import classNames from 'classnames/bind';
import styles from './ELOsPIs.module.scss';

//components
import HeaderContent from '~/Layout/HeaderContent';
import TableELO from '~/components/Table/TableELO';
function ELOsPIs({ data }) {
    const cx = classNames.bind(styles);
    const states = ['ELOs', 'MÔ TẢ', 'CHÚ THÍCH', ''];
    const formIdModalELO = '#exampleModalELO';
    const valueState1 = [
        {
            title: 'Mã lớp HP',
        },
    ];
    const valueState2 = [
        {
            title: 'Tên lớp HP',
        },
    ];
    const valueState3 = [
        {
            title: 'Trạng thái',
        },
    ];

    data = [
        {
            id: 1,
            ELOs: 'ELO-A',
            moTa: 'Identify, formulate, and solve complex engineering problems by applying principles of SE',
            chuThich: 'Foundations Of Computing',
            pis: [
                {
                    sttPI: 'PI1',
                    pis: 'Apply the relevant knowledge to identify complex engineering problems',
                    bloom: 'Create (6)',
                    domain: 'Knowledge (Cognitive)',
                    chuThich: 'None',
                },
                {
                    sttPI: 'PI2',
                    pis: 'Apply the relevant knowledge to identify complex engineering problems',
                    bloom: 'Create (6)',
                    domain: 'Knowledge (Cognitive)',
                    chuThich: 'None',
                },
            ],
        },
        {
            id: 2,
            ELOs: 'ELO-B',
            moTa: 'Identify, formulate, and solve complex engineering problems by applying principles of SE',
            chuThich: 'Foundations Of Computing',
            pis: [
                {
                    sttPI: 'PI1',
                    pis: 'Apply the relevant knowledge to identify complex engineering problems',
                    bloom: 'Create (6)',
                    domain: 'Knowledge (Cognitive)',
                    chuThich: 'None',
                },
                {
                    sttPI: 'PI2',
                    pis: 'Apply the relevant knowledge to identify complex engineering problems',
                    bloom: 'Create (6)',
                    domain: 'Knowledge (Cognitive)',
                    chuThich: 'None',
                },
            ],
        },
        {
            id: 3,
            ELOs: 'ELO-C',
            moTa: 'Identify, formulate, and solve complex engineering problems by applying principles of SE',
            chuThich: 'Foundations Of Computing',
            pis: [
                {
                    sttPI: 'PI1',
                    pis: 'Apply the relevant knowledge to identify complex engineering problems',
                    bloom: 'Create (6)',
                    domain: 'Knowledge (Cognitive)',
                    chuThich: 'None',
                },
                {
                    sttPI: 'PI2',
                    pis: 'Apply the relevant knowledge to identify complex engineering problems',
                    bloom: 'Create (6)',
                    domain: 'Knowledge (Cognitive)',
                    chuThich: 'None',
                },
            ],
        },
        {
            id: 4,
            ELOs: 'ELO-D',
            moTa: 'Identify, formulate, and solve complex engineering problems by applying principles of SE',
            chuThich: 'Foundations Of Computing',
            pis: [
                {
                    sttPI: 'PI1',
                    pis: 'Apply the relevant knowledge to identify complex engineering problems',
                    bloom: 'Create (6)',
                    domain: 'Knowledge (Cognitive)',
                    chuThich: 'None',
                },
                {
                    sttPI: 'PI2',
                    pis: 'Apply the relevant knowledge to identify complex engineering problems',
                    bloom: 'Create (6)',
                    domain: 'Knowledge (Cognitive)',
                    chuThich: 'None',
                },
            ],
        },
        {
            id: 5,
            ELOs: 'ELO-E',
            moTa: 'Identify, formulate, and solve complex engineering problems by applying principles of SE',
            chuThich: 'Foundations Of Computing',
            pis: [
                {
                    sttPI: 'PI1',
                    pis: 'Apply the relevant knowledge to identify complex engineering problems',
                    bloom: 'Create (6)',
                    domain: 'Knowledge (Cognitive)',
                    chuThich: 'None',
                },
                {
                    sttPI: 'PI2',
                    pis: 'Apply the relevant knowledge to identify complex engineering problems',
                    bloom: 'Create (6)',
                    domain: 'Knowledge (Cognitive)',
                    chuThich: 'None',
                },
            ],
        },
        {
            id: 6,
            ELOs: 'ELO-F',
            moTa: 'Identify, formulate, and solve complex engineering problems by applying principles of SE',
            chuThich: 'Foundations Of Computing',
            pis: [
                {
                    sttPI: 'PI1',
                    pis: 'Apply the relevant knowledge to identify complex engineering problems',
                    bloom: 'Create (6)',
                    domain: 'Knowledge (Cognitive)',
                    chuThich: 'None',
                },
                {
                    sttPI: 'PI2',
                    pis: 'Apply the relevant knowledge to identify complex engineering problems',
                    bloom: 'Create (6)',
                    domain: 'Knowledge (Cognitive)',
                    chuThich: 'None',
                },
            ],
        },
    ];
    return (
        <div className={cx('wrapper')}>
            <HeaderContent
                name="ELOs & PIs"
                valueState1={valueState1}
                valueState2={valueState2}
                valueState3={valueState3}
                formId={formIdModalELO}
                btnImport
                btnAdd
            />

            <div className={cx('wrapper-table')}>
                <TableELO states={states} valueData={data} add edit formELOs formId={formIdModalELO} />
            </div>
        </div>
    );
}
export default ELOsPIs;
