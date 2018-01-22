 var findParentNode = function(childObj, parentName) {
    parentName = parentName.toLowerCase();
    var result = false;

    var findByClassName = function(parentObj,parentName){
        var result = false;
        var parentClassList = parentObj.className.split(' ');
        for(var xx = 0; xx < parentClassList.length; xx++){
            if(parentClassList[xx].toLowerCase() == parentName){result = true;}
        }

        return result;
    };

    var parentObj = childObj;
    var parentTagName = parentObj.tagName.toLowerCase();
    while(parentTagName != parentName && !findByClassName(parentObj,parentName) && parentObj.id.toLowerCase() != parentName ) {
        parentObj = parentObj.parentNode;
        parentTagName = parentObj.tagName.toLowerCase();
        if(parentTagName !== "body"){
            parentTagName = parentObj.tagName.toLowerCase();
            result = parentObj;
        }
        else{
            result = false;
            break;
        }
    }
    if(parentObj === childObj){result = false;}
    return result;
};
