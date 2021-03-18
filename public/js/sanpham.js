function TruyxuatSanPhamTheoID(id){
    var jsonDanhSachSanPham = localStorage.getItem('danhSachSanPham');
    var danhSachSanPham = JSON.parse(jsonDanhSachSanPham)
    for (var i = 0; i< danhSachSanPham; i++){
        var sanPhamHienTai = danhSachSanPham[i];
        if(sanPhamHienTai.id = id){
            return sanPhamHienTai
        }
    }
}
function onclickDuaVaoGioHang(idSanPham){
    alert('Sản Phẩm Của Bạn Đã Được Thêm Vào Giỏ Hàng')
}