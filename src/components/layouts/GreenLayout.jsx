import {Routes, Route} from 'react-router-dom';
import Home from '../../pages/Home';
// nanti akan ada halaman lain seperti About, Contact, dll

export default function GreenLayout() {
    return (
       
        <Routes>
             
        <Route path="/" element={<Home />} />
        {/* Tambahkan route lain di sini jika diperlukan */}
        </Routes>
    );


}