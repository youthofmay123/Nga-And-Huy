import BangAnhXa from '~/pages/BangAnhXa';
import BaoCao from '~/pages/BaoCao';
import ChuongTrinhKhung from '~/pages/ChuongTrinhKhung';
import CLOs from '~/pages/CLOs';
import DanhSachSinhVien from '~/pages/DanhSachSinhVien';
import Diem from '~/pages/Diem';
import ELOsPIs from '~/pages/ELOsPIs';
import GiangVien from '~/pages/GiangVien';
import LopHocPhan from '~/pages/LopHocPhan';
import ChuanDauRa from '~/pages/ChuanDauRa';
import BoMon from '~/pages/BoMon';

//public routes
const publicRoutes = [
    { path: '/banganhxa', component: BangAnhXa },
    { path: '/baocao', component: BaoCao },
    { path: '/chuongtrinhkhung', component: ChuongTrinhKhung },
    { path: '/clos', component: CLOs },
    { path: '/danhsachsinhvien', component: DanhSachSinhVien },
    { path: '/diem', component: Diem },
    { path: '/elospis', component: ELOsPIs },
    { path: '/giangvien', component: GiangVien },
    { path: '/lophocphan', component: LopHocPhan },
    { path: '/chuandaura', component: ChuanDauRa },
    { path: '/bomon', component: BoMon },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
