






$(document).ready(function(){
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    var MDCRipple = mdc.ripple.MDCRipple;
    var MDCRippleFoundation = mdc.ripple.MDCRippleFoundation;
    var surfaceNodeList = document.querySelectorAll('.mdc-ripple-surface');
    var numSurfaceItems = surfaceNodeList.length;
    for(var i = 0; i < numSurfaceItems; i++){
        MDCRipple.attachTo(surfaceNodeList.item(i));
    }
    
});
