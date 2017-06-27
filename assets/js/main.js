const laboratoria = {
  students: null
}

$( _ => {


  $.getJSON('http://laboratoria.cuadra.co:9339/api/v1/students/',function(result){
        laboratoria.students = result;
   });

});
