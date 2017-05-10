//Задание 1. Создайте блок. Сделайте так, чтобы при прокрутке колеса
// мыши над ним, блок менял цвет.
var y='';
document.querySelector('.test').onmousewheel = function (event){
    y = event.deltaY;
    console.log(y);
    if(y<0){
        this.style.background = 'red';
    }
    else{
        this.style.background = 'green';
    }
    console.log(event);
    // return false;
}

// Задание 2. Создайте изображение. Добавьте возможность
// масштабирования изображения при прокрутке колеса мыши

document.querySelector('.task2_img').onmousewheel = function (event){
    y = event.deltaY;
    if(y<0){
        this.style.width = '500px';
    }
    else{
        this.style.width = '200px';
    }
    console.log(event);
}

// Задание 3. Создайте вертикальный слайдер, в котором элементы
// прокручиваются с помощью колеса мыши. Учтите граничные условия
var i = 0;
var stopSlider= 0;

document.querySelector('.slider').onmousewheel = function (event){
    y = event.deltaY;
    stopSlider = -(this.offsetHeight-420);
    console.log(this.offsetHeight);
    console.log(y);
    if(y>0 && i>=stopSlider) {
       i = i-20;
       this.style.marginTop = i+'px';
        console.log(i);
    }

    else if(y<0 && i<0){
        i = i+20;
        this.style.marginTop = i+'px';
        console.log(i);
    }
    console.log(i);
}

//
// Задание 4. Создайте блок и разместите в нем изображения одинакового
// размера. При прокрутке колеса мыши над блоком «активируйте» по
// очереди изображения по кругу. Т.е. при прокрутке колеса вокруг первого
// элемента возникает граница. При дальнейшей прокрутке у первого блока
// граница исчезает и появляется у второго блока.


var img = document.getElementById('slider2').getElementsByTagName('img');
console.log(img);
var count=0;
img[0].style.borderColor = 'red';
document.getElementById('slider2').onmousewheel = function (event) {

    y = event.deltaY;
    if(y>0){
        if (count < (img.length-1)){
            console.log(y);
            console.log(count);
            count = count+1;
            console.log(count);
        }
        else if(count == (img.length-1)){
            console.log(y);
            console.log(count);
            count = 0;
            console.log(count);
        }
    }
    else if(y<0){
         if (count <= (img.length-1) && count >0){
            console.log(y);
            console.log(count);
            count = count-1;
            console.log(count);
        }
        else if(count == 0){
            console.log(y);
            console.log(count);
            count = img.length-1;
            console.log(count);
         }
    }
    for (var i=0; i< img.length; i++) {
        img[i].style.borderColor = 'transparent';
    }
    img[count].style.borderColor = 'red';

}