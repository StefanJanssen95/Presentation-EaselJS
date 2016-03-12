"use strict";

function arrayRemoveElement(array, index){
    var a=[];
    for( var i=0; i<array.length; i++){
        if( i!=index ){
            a.push(array[i]);
        }
    }
    return a;
}
