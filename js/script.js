// document.getElementById('output').style.visibility = 'hidden';
// document.getElementById('lbsInput').addEventListener('input', function(e){
//     document.getElementById('output').style.visibility = 'visible';
//     var lbs = e.target.value;
//     document.getElementById('gramsOutput').innerHTML = lbs/0.0022046;
//     document.getElementById('kgOutput').innerHTML = lbs/2.2046;
//     document.getElementById('ozOutput').innerHTML = lbs*16;

// });

document.getElementById('output').style.visibility = 'hidden';
document.getElementById('nairaInput').addEventListener('input', function(e){
    document.getElementById('output').style.visibility = 'visible';
    var naira = e.target.value;
    document.getElementById('dollarOutput').innerHTML = naira/0.00258905;
    document.getElementById('poundsOutput').innerHTML = naira/0.00207039;
    document.getElementById('eurosOutput').innerHTML = naira/0.00228832;

});