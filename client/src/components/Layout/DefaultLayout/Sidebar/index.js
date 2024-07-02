import icon01 from '~/IMG/icon-01.png';
import icon02 from '~/IMG/icon-02.png';
import icon03 from '~/IMG/icon-03.png';
import icon04 from '~/IMG/icon-04.png';
import icon05 from '~/IMG/icon-05.png';
import icon06 from '~/IMG/icon-06.png';
import icon07 from '~/IMG/icon-07.png';
import { Link } from 'react-router-dom';
import '~/components/ComponetStyle/Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="list" style={{ width: '240px', 'margin-top': '8px', 'margin-left': '8px' }}>
                <div className="list-group" style={{ left: '5px', width: '200px' }}>
                    <div className="list-group-space">
                        <Link to="/lophocphan" className="list-group-item list-group-item-action">
                            <img src={icon01} alt="icon-01" className="icon" style={{ 'margin-right': '10px' }} />
                            LỚP HỌC PHẦN
                        </Link>

                        <Link to="/banganhxa" className="list-group-item list-group-item-action">
                            <img src={icon02} alt="icon-02" className="icon" style={{ 'margin-right': '10px' }} />
                            BẢNG ÁNH XẠ
                        </Link>
                        <Link to="/elospis" className="list-group-item list-group-item-action">
                            <img src={icon03} alt="icon-03" className="icon" style={{ 'margin-right': '10px' }} />
                            ELOs & PIs
                        </Link>
                        <Link to="/clos" className="list-group-item list-group-item-action">
                            <img src={icon04} alt="icon-04" className="icon" style={{ 'margin-right': '10px' }} />
                            CLOs
                        </Link>
                        <Link to="/chuongtrinhkhung" className="list-group-item list-group-item-action">
                            <img src={icon06} alt="icon-06" className="icon" style={{ 'margin-right': '10px' }} />
                            CHƯƠNG TRÌNH KHUNG
                        </Link>
                        <Link to="/giangvien" className="list-group-item list-group-item-action">
                            <img src={icon05} alt="icon-05" className="icon" style={{ 'margin-right': '10px' }} />
                            GIẢNG VIÊN
                        </Link>
                        <Link to="/chuandaura" className="list-group-item list-group-item-action">
                            <img src={icon05} alt="icon-05" className="icon" style={{ 'margin-right': '10px' }} />
                            CHUẨN ĐẦU RA
                        </Link>
                        <Link to="/bomon" className="list-group-item list-group-item-action">
                            <img src={icon05} alt="icon-05" className="icon" style={{ 'margin-right': '10px' }} />
                            BỘ MÔN
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
