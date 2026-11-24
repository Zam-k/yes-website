(function(){
document.addEventListener('contextmenu',function(e){e.preventDefault()});
document.addEventListener('keydown',function(e){var k=(e.key||'').toLowerCase(),c=e.ctrlKey||e.metaKey;
if(e.key==='F12'||(c&&['u','s','p'].indexOf(k)>-1)||(c&&e.shiftKey&&['i','j','c'].indexOf(k)>-1)||(e.metaKey&&e.altKey&&['i','j','u'].indexOf(k)>-1)){e.preventDefault();e.stopPropagation();return false}},true);
document.addEventListener('dragstart',function(e){if(e.target.tagName==='IMG')e.preventDefault()});
document.addEventListener('selectstart',function(e){var t=e.target;if(!(t.closest&&t.closest('input,textarea,select,form')))e.preventDefault()});
})();
