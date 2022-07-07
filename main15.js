/**
 * BAI TAP NOP : QUAN LY SINH VIEN 
 * INPUT: DIEMCHUAN, MON1, MON2, MON3. KHUVUC A = 2, B = 1, C = 0.5, X = 0. DOITUONG 1 = 2.5, 2 = 1.5, 3 = 1, 0 = 0.
 * 
 * PROCESS: DIEMUUTIEN = KHUVUC + DOITUONG.
 * DIEMTONGKET = MON1 + MON2 + MON3 + DIEMUUTIEN
 * IF(DIEMTONGKET > DIEMCHUAN && MON1 > 0 & MON2 > 0 && MON3 > 0)
 * => HOC SINH DO DAU
 * NGUOCLAI HOC SINH DO ROT
 * 
 * OUTPUT: TONGDIEM, DAU OR ROT ? 
 */

function areas(area){
    var area = "A"
    if(area === "A"){
        area = 2;
        return area;
    }
    if(area === "B"){
        area = 1;
        return area;
    }
    if(area === "C"){
        area = 0.5;
        return area;
    }
    if(area === "X"){
        area = 0;
        return area;
    }
}
function object1(object){
    var object = "1";
if(object === "1"){
    object = 2.5;
    return object;
}   
if(object === "2"){
    object = 1.5;
    return object;
}
if(object === "3"){
    object = 1;
    return object;
}
if(object === "0"){
    object = 0;
    return object;
}

}

function exercise() { 
    var benchmark = 18;
    var subject1 = 1;
    var subject2 = 1;
    var subject3 = 8;
    var area = areas(area);
    var object = object1(object);
    var total = area + object;

    var sum = subject1 + subject2 + subject3 + total;
    if(sum > benchmark && subject1 > 0 && subject2 > 0 && subject3 > 0){
        console.log("Ban da : Dau", ".Tong diem = ", sum);
    }
    else{
        console.log("Ban da : Rot", ".","Tong diem =", sum);
    }

 }
 exercise();

 /**
  * BAI TAP NOP: TINH TIEN DIEN
  * INPUT: TEN, KW
  * 
  * PROCESS: 
  * TIEN TRA 50KW DAU * 500;
  * TIEN TRA 50KW DAU * 500 + 50KW KE * 650;
  * TIEN TRA 50KW DAU * 500 + 50KW KE = 650 + 100KW KE * 850;
  * TIEN TRA 50KW DAU * 500 + 50KW KE * 650 + 100KW KE * 850 + 150KW KE * 1100;
  * TIEN TRA 50KW DAU * 500 + 50KW KE * 650 + 100KW KE * 850 + 150KW KE * 1100 + (KW - 350) * 1300;
  * 
  * OUTPUT: PAY
  * 
  */

 function exercise2(){
    var yourName = "Quoc"
    var KW = 360;
    var Pay = '';

    if(KW <= 50){
        Pay = KW * 500;
    }if(KW > 50 && KW <= 100){
        Pay = 50 * 500 + (KW - 50)*650;
    }if(KW > 100 && KW <= 200){
        Pay = 50 * 500 + (100 - 50)*650 + (KW - 100)*850;
    } if(KW> 200 && KW< 350){
        Pay = 50 * 500 + (100 - 50)*650 + (200 - 100)*850 + (KW - 200)*1100;
    }if(KW > 350){
        Pay = 50 * 500 + (100- 50)*650 + (200 - 100)*850 + (350 - 200)*1100 + (KW - 350)*1300;
    }

    console.log("Ten khach hang: ",yourName,",", "So tien phai tra la: ", Pay);

 }
 exercise2();