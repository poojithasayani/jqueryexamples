$().ready(function(){

var arr=[];
var obj, n, str='';
       var a;
    $("form[name='submission']").validate({
     rules:{
        fulname:"required",
        eid:{
           required:true,
           number:true,
           minlength:3
           },
         salary:{
           required:true,
           number:true,
           minlength:4
          }
      },
    messages: {
        fulname: "Please enter your name",
        eid: {
          required: "Please provide id",
          number:"Id must be in number format",
          minlength: "Your id must be at least 3 digits"
         },
        salary:{
          required:"please provide the salaray",
          number:"salary must be in number format",
          minlength:"salary must be atleast of 4 digits"
         }
       },
       

submitHandler: function(form) {     
    
      obj={
         "fulname" : $('#fulname').val(),
         "eid" : $('#eid').val(),
         "salary" : $('#salary').val()
        
         }   
           
            str += '<tr id="row'+n+'"><td input type="text" class="name'+n+'">'+$('#fulname').val()+'</td>';
            str += '<td input type="text" class="eid'+n+'">'+$('#eid').val()+'</td>';
            str += '<td input type="text" class="sal'+n+'">'+$('#salary').val()+'</td>';
            str += '<td input type="hidden" class="hide'+n+'" value='+n+'></td>';
            str += '<td id="edit'+n+'"><input type="button" name="edit" class="edit" value="edit" data-toggle="modal" data-target="#myModal"></td>';
            str += '<td id="del'+n+'"><input type="button" name="del" class="del" value="del" ></td></tr>'; 
            $("#ok").find('tbody:last').append(str); 
    arr.push(obj);
  
    n=arr.length-1; 
document.getElementById("demo").innerHTML = "Found " + n + " tr elements in the table.";
console.log(arr,n); 
          }

        });

$('tbody').on("click","#edit"+n,function(){

  var x = $(this).closest("#row"+n).find('td.name'+n).text();
  var y = $(this).closest("#row"+n).find('td.eid'+n).text();
  var z = $(this).closest("#row"+n).find('td.sal'+n).text();
  a = $(this).closest("#row"+n).find('td.hide'+n).attr('value');
   console.log(a);
   $('#myMsodal').modal({
        show: 'false'
    }); 

    $("#en").val(x);
    $("#ei").val(y);
    $("#es").val(z);

  
 });

  $("body").on("click","#update", function(){
      console.log("herer",a); 
      var p=$("#en").val();      
      var q=$("#ei").val();      
      var r=$("#es").val();
       
    var tds ='';
    tds += '<td input type="text" class="name'+a+'">'+p+'</td>';
    tds += '<td input type="text" class="eid'+a+'">'+q+'</td>';
    tds += '<td input type="text" class="sal'+a+'">'+r+'</td>';
    tds += '<td input type="hide" class="hide'+a+'"value='+a+'></td>';
    tds += '<td id="edit'+a+'"><input type="button" name="edit" class="edit" value="edit" data-toggle="modal" data-target="#myModal"></td>';
    tds += '<td id="del'+a+'"><input type="button" name="del" class="del" value="del" ></td></tr>';
 $('#ok').find('tbody tr#row'+a).html(tds);
// $('#ok').eq('a').find('tbody tr#row'+a).html(tds);


    });  
  
 
$('tbody').on('click','#del'+n,function(){
   //var id = $(this).closest('#row'+n).attr('id');
   //alert(id);
 $("#row"+n).find("*").remove();



});

 

});
