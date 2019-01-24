document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, {responsiveThreshold:0});
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
  });

var leftChart = new Chart("leftChart",{
    type: 'doughnut',
    data: {
        datasets: [{
            data:[120,60,175,90],
            "backgroundColor":["rgb(49, 232, 194)","rgb(255, 230, 61)","rgb(232, 55, 64)","rgb(185, 48, 255)"]
        }],
        labels: [
            'Founder Capital',
            'Private Funding',
            'Investments',
            'Capital Gain'
        ]
    },
    options: {}
});

var rightChart = new Chart("rightChart",{
    type: 'doughnut',
    data: {
        datasets: [{
            data:[265,20,40,120],
            "backgroundColor":["rgb(49, 232, 194)","rgb(255, 230, 61)","rgb(232, 55, 64)","rgb(185, 48, 255)"]
        }],
        labels: [
            'Community Giving',
            'R&D',
            'Equipment',
            'Savings/Reinvestment'
        ]
    },
    options: {rotation:0.5*Math.PI}
});