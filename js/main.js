// Bài 1 :
function tinhSoNguyen() {
    var tong = 0
    var n = 0
    for (i = 0; tong < 10000; i++) {
        tong += i
        n = i
    }

document.getElementById('kq1').innerHTML = "Số nguyên nhỏ nhất : " + n + "<br>Tổng : "+ tong
}
tinhSoNguyen();
// Bai 2 :
var soX = document.getElementById('numberX')
var soN = document.getElementById('numberN')

function tinhTong() {
    var tong = 0
    for (var i = 1; i <= soN.value; i++) {
        tong += Math.pow(soX.value, i)
    }
    document.getElementById('kq2').innerHTML = "Tổng : " + tong
}
// Bai 3 :
var n3 = document.getElementById('numberN3')

function tinhGiaiThua() {
    var tong = 1
    for (var i = 1; i <= n3.value; i++) {
        tong *= i
    }
    document.getElementById('kq3').innerHTML = "Giai Thừa : " + tong
}

// Bài 4 :
function taoDiv() {
    for (var i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            document.getElementById('kq4').innerHTML += "<p style='background-color: blue; color: white;'> Div chẵn " + i + "</p>"
        } else {
            document.getElementById('kq4').innerHTML += "<p style='background-color: red;'> Div lẻ " + i + "</p>"
        }
    }
}