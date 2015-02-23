'use strik';
var CreateForm = function(ObjectConfig){    


    var Content = document.getElementById(ObjectConfig.Content);
    var ObjectForm=ObjectConfig.Forms;


	ObjectConfig.Forms.forEach(function(item){
        //mandar los objetos con la funcion Bind .... enviandole como en el video xD

       var mask=NewObject.mak.bind(item);
       Content.appendChild(mask());


        // agregar los objetos al container ..... add(mask);
	});
};

var NewObject={
	
	type:undefined ? 'text':'',
	label:'Label 1',
    _id:'_1',
    mak:function(){        
        var NewContent=document.createElement('div');
        var NewLabel=document.createElement('p');
        NewLabel.textContent=this.label;
        var NewInput=document.createElement('input');
        NewInput.type=this.type;
        NewInput.id=this._id;
        NewContent.appendChild(NewLabel);
        NewContent.appendChild(NewInput);

        return NewContent; 
    }

}