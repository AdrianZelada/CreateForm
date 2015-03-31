'use strik';
var CreateForm = function(ObjectConfig){    

    var Content = document.getElementById(ObjectConfig.Content);
    var ObjectForm=ObjectConfig.Forms;

	ObjectConfig.Forms.forEach(function(item){
        //mandar los objetos con la funcion Bind .... enviandole como en el video xD
        var obForm=new NewObject(item);
        Content.appendChild(obForm.mak());
	});
};

var NewObject=function(ObjectF){

	type=ObjectF.type ? ObjectF.type : 'text' ;
	label=ObjectF.label ?  ObjectF.label : 'Label 1';
    _id=ObjectF._id ? ObjectF._id : '_1';
    options=ObjectF.options ? ObjectF.options : [];
    group_title=ObjectF.group_title ? ObjectF.group_title : 'title group';
    name_group=ObjectF.name_group ? ObjectF.name_group : 'group1';
    callback=ObjectF.callback ? ObjectF.callback : null;

    Class=ObjectF.Class ? ObjectF.Class : 'CreateForm';


    this.mak=function(){
        var NewContent=document.createElement('div');
            NewContent.className=Class;
        console.log(NewContent.className);
        var NewLabel=document.createElement('label');
        NewLabel.textContent=label;
        if(type=="radio" || type=="checkBox"){
            var result=this.mak_RadioBox();
            NewContent.appendChild(result);
        }else{
            var NewInput=document.createElement('input');
            NewInput.type=type;
            NewInput.id=_id;
            NewContent.appendChild(NewLabel);
            NewContent.appendChild(NewInput);
        }
        return NewContent;
    };

    this.mak_RadioBox=function(){

        var ContentRadioBox=document.createElement('div');
        var labelGroup=document.createElement('label');
        var handleEvent=(type!="radio") ? "onclick" : "onchange";
        ContentRadioBox.dataName=name_group;
        labelGroup.textContent=label;
        ContentRadioBox.appendChild(labelGroup);

        options.forEach(function(item){
            var labelRadio=document.createElement('label');
            labelRadio.textContent=item.title;
            var NewOption=document.createElement('input');
            NewOption.type=type;
            NewOption.value=item.value;
            NewOption[handleEvent]=function(event){
                alert('cambiado');
            };
            ContentRadioBox.appendChild(labelRadio);
            ContentRadioBox.appendChild(NewOption);
        });

        return ContentRadioBox;
    }
}