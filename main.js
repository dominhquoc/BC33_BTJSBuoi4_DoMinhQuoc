/**
 * Cau 5: .Viết chương trình nhập vào ngày, tháng, năm (Giả sử nhập đúng, không cần kiểm tra hợp lệ).
Tìm ngày, tháng, năm của ngày tiếp theo. Tương tự tìm ngày tháng năm của ngày trước đó
 */

//*************** Ngay hom qua **********//
//INPUT: Nhap bien va gan gia tri
var ngay_day = 5,
  thang_month = 7,
  nam_year = 2022;
//PROCESS: Neu 1/1/2022 => ngay = 31, thang = 1, nam = 2021 nam giam di 1 gia tri.
if (ngay_day == 1) {
  if (thang_month == 1) {
    ngay_day = 31;
    thang_month = 12;
    nam_year--;
    console.log("Ngay hom qua ", ngay_day, thang_month, nam_year);
  } else {
    if (thang_month == 3) {
      ngay_day = 28;
      thang_month--;
    } else if (
      thang_month == 5 ||
      thang_month == 7 ||
      thang_month == 10 ||
      thang_month == 12
    ) {
      ngay_day = 30;
      thang_month--;
    } else if (
      thang_month == 2 ||
      thang_month == 4 ||
      thang_month == 6 ||
      thang_month == 8 ||
      thang_month == 9 ||
      thang_month == 11
    ) {
      ngay_day = 31;
      thang_month--;
    } else {
      console.log("Nhap lai 1 - 12");
    }
    console.log("Ngay hom qua ", ngay_day, thang_month, nam_year); //OUTPUT: In ket qua
  }
} else {
  ngay_day--;
  console.log("Ngay hom qua ", ngay_day, thang_month, nam_year);
}

//*************** Ngay mai *************//
//INPUT: Nhap bien va gan gia tri
var ngay = 5,
  thang = 7,
  nam = 2022;
//Process: Neu ngay 31/12/2002 => ngay = 1, thang = 1, nam 2003 => nam tang len 1 don vi.
if (ngay == 31) {
  if (thang == 12) {
    ngay = 1;
    thang = 1;
    nam++;
    console.log("Ngay mai ", ngay, thang, nam);
  } else {
    ngay = 1;
    thang++;
    console.log("Ngay mai ", ngay, thang, nam);
  }
} else {
  ngay++;
  console.log("Ngay mai ", ngay, thang, nam); // OUTPUT: IN ket qua
}

/**
 * Cau 6: . Viết chương trình nhập vào tháng, năm. Cho biết tháng đó có bao nhiêu ngày. (bao gồm tháng
của năm nhuận)..
 */

/**
 * INPUT: Khai bao va gan gia tri month = 2 , year = 2020.
 *
 * PROCESS: Su dung ham switch.
 * Thang co 30 ngay bao gom nhung thang 1, 3, 5, 7, 8, 10, 12.
 * Thang co 31 ngay bao gom nhung thang 4, 6, 9, 11.
 * thang 2. Cu 4 Nam thi se du ra 1 ngay nam nhuan la 29 ngay => Neu Year % 400 == 0 || year % 4 && year % 100 != 0
 * Nguoc lai la Nam khong Nhuan co 28 ngay
 *
 * OUTPUT: IN KET QUA Thang 2 2020 CO 29 ngay la nam Nhuan.
 */

var month = 2;
var year = 2020;

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("Thang co 31 ngay");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log("Thang co 30 ngay");
    break;
  case 2:
    if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
      console.log("Thang co 29 ngay. Nam nhuan");
    } else {
      console.log("Thang co 28 ngay. Khong la nam nhuan");
    }
    break;
  default:
    console.log("Nhap tu 1 den 12");
    break;
}

/**
 * Cau 7: . Viết chương trình nhập vào số nguyên có 3 chữ số. In ra cách đọc nó
 */

//OUTPUT: Khai bao bien va gan gia tri
var number = 239;
//Process: Thuc hien phep tinh tim don vi, hang chuc, hang tram.
var donvi = number % 10;
var chuc = Math.floor(number / 10) % 10;
var tram = Math.floor(number / 100);


if (number == 0) {
  console.log("Nhap lai");
} else {
  if (tram == 1) {
    tram = "Mot tram";
  } else if (tram == 2) {
    tram = "Hai tram";
  } else if (tram == 3) {
    tram = "Ba tram";
  } else if (tram == 4) {
    tram = "Bon tram";
  } else if (tram == 5) {
    tram = "Nam tram";
  } else if (tram == 6) {
    tram = "Sau tram";
  } else if (tram == 7) {
    tram = "Bay tram";
  } else if (tram == 8) {
    tram = "Tam tram";
  } else if (tram == 9) {
    tram = "Chin tram";
  }

  if (chuc == 1) {
    console.log("muoi");
  } else if (chuc == 2) {
    chuc = "hai muoi";
  } else if (chuc == 3) {
    chuc = "ba muoi";
  } else if (chuc == 4) {
    chuc = "bon muoi";
  } else if (chuc == 5) {
    chuc = "nam muoi";
  } else if (chuc == 6) {
    chuc = "sau muoi";
  } else if (chuc == 7) {
    chuc = "bay muoi";
  } else if (chuc == 8) {
    chuc = "tam muoi";
  } else if (chuc == 9) {
    chuc = "chin muoi";
  }

  if (donvi == 1) {
    donvi = "mot";
  } else if (donvi == 2) {
    donvi = "hai";
  } else if (donvi == 3) {
    donvi = "ba";
  } else if (donvi == 4) {
    donvi = "bon";
  } else if (donvi == 5) {
    donvi = "nam";
  } else if (donvi == 6) {
    donvi = "sau";
  } else if (donvi == 7) {
    donvi = "bay";
  } else if (donvi == 8) {
    donvi = "tam";
  } else if (donvi == 9) {
    donvi = "chin";
  }
}
//INPUT: In ket qua
console.log(tram, chuc, donvi);

// if (number == 0) {
//   console.log("Nhap lai");
// } else {
//   switch (tram) {
//     case 1:
//       console.log("mot tram");
//       break;
//     case 2:
//       console.log("hai tram");
//       break;
//     case 3:
//       console.log("ba tram");
//       break;
//     case 4:
//       console.log("bon tram");
//       break;
//     case 5:
//       console.log("nam tram");
//       break;
//     case 6:
//       console.log("sau tram");
//       break;
//     case 7:
//       console.log("bay tram");
//       break;
//     case 8:
//       console.log("tam tram");
//       break;
//     case 9:
//       console.log("chin tram");
//       break;
//   }
//   switch (chuc) {

//     case 1:
//       console.log("muoi");
//       break;
//     case 2:
//       console.log("hai muoi");
//       break;
//     case 3:
//       console.log("ba muoi");
//       break;
//     case 4:
//       console.log("bon muoi");
//       break;
//     case 5:
//       console.log("nam muoi");
//       break;
//     case 6:
//       console.log("sau muoi");
//       break;
//     case 7:
//       console.log("bay muoi");
//       break;
//     case 8:
//       console.log("tam muoi");
//       break;
//     case 9:
//       console.log("chin muoi");
//       break;
//   }
//   switch (donvi) {
//     case 1:
//       console.log("mot");
//       break;
//     case 2:
//       console.log("hai");
//       break;
//     case 3:
//       console.log("ba");
//       break;
//     case 4:
//       console.log("bon");
//       break;
//     case 5:
//       console.log("nam");
//       break;
//     case 6:
//       console.log("sau");
//       break;
//     case 7:
//       console.log("bay");
//       break;
//     case 8:
//       console.log("tam");
//       break;
//     case 9:
//       console.log("chin");
//       break;
//   }
// }

/**Bai 8: Cho biết tên và tọa độ nhà của 3 sinh viên. Cho biết tọa độ của trường đại học. Viết chương
trình in tên sinh viên xa trường nhất. */

//INPUT: Khai bao
var nameOne = "Quoc",
  x1 = 3,
  y1 = 6;
var nameTwo = "Minh",
  x2 = 4,
  y2 = 8;
var nameThree = "Do",
  x3 = 2,
  y3 = 4;

var x = 1,
  y = 1;
//Process: Tinh toa do duong thang va so sanh gia tri
var d = Math.sqrt(Math.pow(x1 - x, 2) + Math.pow(y1 - y, 2));
var d2 = Math.sqrt(Math.pow(x2 - x, 2) + Math.pow(y2 - y, 2));
var d3 = Math.sqrt(Math.pow(x3 - x, 2) + Math.pow(y3 - y, 2));

if (d > d2 && d > d3) {
  console.log(nameOne, "...hoc xa truong nhat"); //Input: In ket qua
} else if (d2 > d && d2 > d3) {
  console.log(nameTwo, "...hoc xa truong nhat");
} else {
  console.log(nameThree, "...hoc xa truong nhat");
}
