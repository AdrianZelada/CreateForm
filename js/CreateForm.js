'use strik';
var CreateForm = function(ObjectConfig){    


    var Content = document.getElementById(ObjectConfig.Content);
    var ObjectForm=ObjectConfig.Forms;


	ObjectConfig.Forms.forEach(function(item){
        //mandar los objetos con la funcion Bind .... enviandole como en el video xD

      // var mask=NewObject.mak.bind(item);
       //Content.appendChild(mask());

        var obForm=new NewObject(item);
        Content.appendChild(obForm.mak());

        // agregar los objetos al container ..... add(mask);
	});
};

var NewObject=function(ObjectF){
    console.log(ObjectF.type);
	type=ObjectF.type ? ObjectF.type : 'text' ;
	label=ObjectF.label ?  ObjectF.label : 'Label 1';
    _id=ObjectF._id ? ObjectF._id : '_1';
    options=ObjectF.options ? ObjectF.options : [];
    group_title=ObjectF.group_title ? ObjectF.group_title : 'title group';
    this.mak=function(){
        var NewContent=document.createElement('div');
        //var NewLabel=document.createElement('p');
        //NewLabel.textContent=this.label;
        if(type=="Group_radio"){
            console.log("group");
            var resutl=this.mak_Radio();

            NewContent.appendChild(resutl);
            console.log(resutl);
        }else{

        }
        /*var NewInput=document.createElement('input');
        NewInput.type=this.type;
        NewInput.id=this._id;
        NewContent.appendChild(NewLabel);
        NewContent.appendChild(NewInput);*/
        return NewContent; 
    };
    this.mak_Radio=function(){
        console.log(this.options);
        var ContentRadio=document.createElement('div');
        var labelGroup=document.createElement('p');
        labelGroup.textContent=this.label;
        ContentRadio.appendChild(labelGroup);
        options.forEach(function(item){
            var labelRadio=document.createElement('p');
            labelRadio.textContent=item.title;
            var NewOption=document.createElement('input');
            NewOption.type='radio';
            NewOption.value=item.value;
            NewOption.addEventListener('onclick',function(){alert('hola')});
            ContentRadio.appendChild(labelRadio);
            ContentRadio.appendChild(NewOption);
        });

        return ContentRadio;
    }
}