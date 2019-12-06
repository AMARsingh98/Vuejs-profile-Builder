var app = new Vue({ 
    el: '#app',
    data: {
        name: '',
        email:'',
        age: '' ,
        selected: '',
        picked:'',
        links:'',
        YOUTUBE:'',
        INSTAGRAM:'',
        FACEBOOK:'',
        LINKEDIN:'',
        image:'',
        checkedNames: [], 
        htmlCompiler:''
        
    },
     /*upload profile*/
    methods:{
        onFileChange(e){
          var files= e.target.files || e.dataTransfer.files;
          this.createImg(files[0]);  
        }, 
        createImg(file){
          var image= new Image;
          var reader= new FileReader;

          reader.onload=(e)=>{
              this.image=e.target.result; 
          };
      reader.readAsDataURL(file);
        },
        
    }
        });  

     
     /*convert to PDF
        $(document).ready(function(){
        var specialElementHandlers={
          "#editor":function(element,renderer){
            return true;
          }
        };
        $("#cmd").click(function(){
          var doc=new jsPDF();
          doc.fromHTML($("#target").html(),15,15,{
            "width":170,
            "elementHndlers":specialElementHandlers
          });
doc.save("sample-file.pdf");
          

});
});
*/
