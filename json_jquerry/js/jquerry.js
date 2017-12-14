$(document).ready(function(){
    


//jQuery(document).ready(function(){
//    $(elem)
//        .method(arg)
//        .method()

// библиотека обработки событий jquery.com
    // сначала скачать библиотеку
    // $ /jQuery - для указания объекта jquery
    
//    .height(); // вернет высоту
//    .height(arc); // установит высоту
//    $("#elem_id")
//    $(".class-name")
//    $("p, ul")
//    $("#id > ul > li")
//    $("#id > ul > li")
//    $("iput[role = 'role_name']")
    
//    var div = document.getElementById("elem_id");
//    $(div)



//AJAX
    //передача данных
//    $.ajax({
//        url: "tst_ajax.js",
//        data: {key: value}, //указываем данные которые передаем
//        type: "POST",
//        success: function(data){
//            //функцияnвыполнится в случае успеха
//        },
//        error: function(data){
//            // отработает в случае неуспешного соединения
//        },
//       // async: false; //запрос станет синхронным и пользователь не сможет ничего делать
//        beforeSend: function(){}
        //функция перед отправкой
//        dataType: "xml, json,script" - указываем тип данных от сервера
//        },
// 
    
//    
  document.getElementById('ajax').addEventListener('click', function(){
    
    
 
      $('#ajax').load('tst_ajax.html', function(){
          //code after load загрузка c тестовой страницы в главну.
      })
    
    
    
    
    
    });

    
    
    
    
    
    

    
    
    
    
    

