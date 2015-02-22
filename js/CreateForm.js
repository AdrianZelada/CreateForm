
var CreateForm = function(ObjectConfig){			
	ObjectConfig.forEach(function(item){
        //mandar los objetos con la funcion Bind .... enviandole como en el video xD

        var mask=NewObject.mak.bind(item);

        // agregar los objetos al container ..... add(mask);
	});	
};

var NewObject={
	
	type:'text',
	label:'Label 1',
    _id:'_1',
    mak:function(){
        var NewContent=document.createElement('div');
        var NewLabel=document.createElement('p');
        var NewInput=document.createElement('input').type(this.type).id(this._id);


       //formar aca los elementos

    }

}