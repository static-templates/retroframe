// Add your javascript here

window.currentTheme='autumn';

window.changeTheme = function (theme) {
    changeClass('bg-' + currentTheme + '-light', 'bg-' + theme + '-light');
    changeClass('bg-' + currentTheme + '-mid-light', 'bg-' + theme + '-mid-light');
    changeClass('bg-' + currentTheme + '-mid-dark', 'bg-' + theme + '-mid-dark');
    changeClass('bg-' + currentTheme + '-dark', 'bg-' + theme + '-dark');
    changeClass('text-' + currentTheme + '-mid-light', 'text-' + theme + '-mid-light');
    // setTimeout(function(){
        currentTheme = theme;
    // }, 10);
    document.getElementById('color-picker').classList.add('hidden')
}

window.changeClass = function (fromThis, toThis) {
    var elements = document.getElementsByClassName(fromThis);
    let changeClassArray = [];
    for(var i = 0; i < elements.length; i++){
        if(!elements[i].classList.contains('keep-color')){
            changeClassArray.push(elements[i]);
        }
    }

    changeClassArray.forEach(element => {
        element.classList.remove(fromThis);
        element.classList.add(toThis);
    });
}