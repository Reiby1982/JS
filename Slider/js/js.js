 
(function(global) {
	'use strict';

	var slider = {
		init: function(id){
			this.elem = document.createElement("ul");
			document.getElementById(id).appendChild(this.elem);
			this.curentSlide = 0; // счетчик элементов
		},
		addSlide: function(scr, alt) {
			var li = document.createElement('li');		//создаем li
			var img = document.createElement('img');		//создаем img
			img.setAttribute('src', scr);
			img.setAttribute('alt', alt); // добавляем атрибуты

			img.style.height = window. innerHeight + "px"; // чтобы сделать по размеру окна
			img.style.width = window. innerWidth + "px"; // чтобы сделать по размеру окна

			li.appendChild(img); // добавляем img в li
			this.elem.appendChild(li); // применили к ul
		},
		//Функция переключения слайдера
		nextSlide: function() {
				if (this.curentSlide< this.allSlides.length - 1) {
					this.allSlides[this.curentSlide].classList.remove('active'); // убираем атрибут	
					this.allSlides[this.curentSlide+1].classList.add('active');	
					this.curentSlide++; // счетчик увеличили
			} else {this.curentSlide = 0;
					this.allSlides[this.allSlides.length - 1].classList.remove('active');
					this.allSlides[0].classList.add('active');

			}
		},
		//Функция запуска слайдера
		runSlider: function() {
				this.allSlides = document.querySelectorAll('#slider > ul > li'); //ищет все элементы соответствующие запросу и возвращает в виде массива
				this.nextSlide(); // запускает функцию nextSlide
				setInterval(this.nextSlide.bind(this),1500); //необходимо привязывать к контексту
				
		},
		setSize: function() {
				var imgs = document.querySelectorAll('img'); //изменение в зависимости от размера окна
				for (var i = 0; i < imgs.length; i++) {
					imgs[i].style.height = window.innerHeight + "px";
					imgs[i].style.width = window.innerWidth + "px";
				}
			}
		
	};

	slider.init('slider');
	slider.addSlide('img/1.jpg');
	slider.addSlide('img/2.jpg');
	slider.addSlide('img/3.jpg');
	slider.runSlider();

	window.addEventListener('resize', slider.setSize); //вешаем счутчик события

	//в ecma 5 надо выкидывать наружу, записав в window
	global.initSlider = slider.init.bind(slider); // через создание новой переменной мы записываем метод  

}(window));

 //Другой JS
 initSlider('slider');
//Второй вариант вывода метода нуаружу

 var  sliderModul = (function() {
 	function init () {},
 	function addSlide ( ) {},

 	return {
 		initSlider: init;
 		// перечисляем методы для общедоступного
 	}
 }());