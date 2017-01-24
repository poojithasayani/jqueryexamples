$().ready(function(){

	$("body").on("click", "#upload", function(){
		
		
      var uploadfile=document.getElementById('uploadfile');
      var fi=document.getElementById('fi');
      var file=uploadfile.files[0];

      var filereader=new FileReader();
      
        filereader.onload = function(e) {
        	
        	
          fi.innerText = filereader.result; //for text files
         /* fi.innerText="";
          var img=new Image();
          img.src=filereader.result;
          fi.appendChild(img);*/
            }

       // filereader.readAsDataURL(file);
       filereader.readAsBinaryString(file);

	  });

	
});