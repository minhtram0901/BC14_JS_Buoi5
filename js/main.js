// Bài tập 1: Quản lý tuyển sinh

// Điểm ưu tiên theo khu vực
const KVA = 2; //điểm
const KVB = 1; //điểm
const KVC = 0.5; //điểm

// Điểm ưu tiên theo đối tượng
const DT1 = 2.5; //điểm
const DT2 = 1.5; //điểm
const DT3 = 1; //điểm

function diemKV(kv) {
    switch (kv) {
        case "A":
            return KVA;
        case "B":
            return KVB;
        case "C":
            return KVC;
        default:
            return 0;
    }
}

function diemDoiTuong(dt) {
    switch (dt) {
        case "1":
            return DT1;
        case "2":
            return DT2;
        case "3":
            return DT3;
        default:
            return 0;
    }
}

// tinhTongDiem(diem mon A, diem mon B, diem mon C, diem khu vuc, diem doi tuong)
function tinhTongDiem(a, b, c, kv, dt) {
    return a + b + c + diemKV(kv) + diemDoiTuong(dt);
}

// tinhDiemLiet(diem mon A, diem mon B, diem mon C)
function tinhDiemLiet(a, b, c) {
    if (a == 0 || b == 0 || c == 0)
        return true;
    else
        return false;
}

// tinhDiemChuan(diem chuan mon A, diem chuan mon B, diem chuan mon C)
function tinhDiemChuan(a, b, c) {
    return a + b + c;
}

function showResult() {
    var diemChuanA = Number(document.getElementById("standard1").value);
    var diemChuanB = Number(document.getElementById("standard2").value);
    var diemChuanC = Number(document.getElementById("standard3").value);

    var diemThiA = Number(document.getElementById("exam1").value);
    var diemThiB = Number(document.getElementById("exam2").value);
    var diemThiC = Number(document.getElementById("exam3").value);

    var khuVuc = document.getElementById("areaSelect").value;
    var doiTuong = document.getElementById("prioritySelect").value;

    var p0 = document.getElementById("bt1-output0");
    var p1 = document.getElementById("bt1-output1");
    var p2 = document.getElementById("bt1-output2");

    var tongDiem = tinhTongDiem(diemThiA, diemThiB, diemThiC, khuVuc, doiTuong);
    var diemChuan = tinhDiemChuan(diemChuanA, diemChuanB, diemChuanC);
    var diemLiet = tinhDiemLiet(diemThiA, diemThiB, diemThiC);

    p0.innerHTML = "Điểm chuẩn đầu vào là: " + diemChuan + " điểm."
    if (diemLiet)
        p1.innerHTML = "Tổng điểm của thí sinh là: " + tongDiem + " và có 1 điểm liệt (bằng 0).";
    else
        p1.innerHTML = "Tổng điểm của thí sinh là: " + tongDiem + " và không có điểm liệt (bằng 0).";

    if (tongDiem >= diemChuan && !diemLiet) {
        p2.innerHTML = "Chúc mừng thí sinh đã đậu kì thi tuyển!";
    } else {
        p2.innerHTML = "Rất tiếc thí sinh đã thi trượt!";
    }
}


//Bài tập 2: Tính tiền điện

// Giá điện
const FROM0KW = 500;
const FROM51KW = 650;
const FROM101KW = 850;
const FROM201KW = 1100;
const FROM351KW = 1300;

function tinhTienDien(kw) {
    var tienDien = 0;
    if (kw > 350){
        tienDien = (kw - 350) * FROM351KW + 150 * FROM201KW + 100 * FROM101KW + 50 * FROM51KW + 50 * FROM0KW;
        return tienDien;
    } else if (kw > 200){
        tienDien = (kw - 200) * FROM201KW + 100 * FROM101KW + 50 * FROM51KW + 50 * FROM0KW;
        return tienDien;
    } else if (kw > 100){
        tienDien = (kw - 100) * FROM101KW + 50 * FROM51KW + 50 * FROM0KW;
        return tienDien;
    } else if (kw > 50){
        tienDien = (kw - 50) * FROM51KW + 50 * FROM0KW;
        return tienDien;
    } else {
        tienDien = kw * FROM0KW;
        return tienDien;
    }
}

function calculate(){
    var name = document.getElementById("name").value;
    var kw = Number(document.getElementById("kw").value);

    var tienDien = tinhTienDien(kw);

    var p1 = document.getElementById("bt2-output1");
    var p2 = document.getElementById("bt2-output2");
    p1.innerHTML = "Tiền điện tháng này của Ông/Bà là:";
    p2.innerHTML = tienDien + " vnd";
}