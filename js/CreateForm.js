
var CreateForm = function(ObjectConfig){		
	(function(ObjectConfig){
		for(objectC in ObjectConfig){
			var x=new schema(ObjectConfig[objectC]);
			console.log(x);
		}
	})(ObjectConfig);


}	
var schema=function(objectc){
		this.type=objectc.type;		
	}