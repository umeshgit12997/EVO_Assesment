//Pie chart
$("span.pie").peity("pie");
//Donut chart
$('.donut').peity('donut');
$('.peity-line').peity('line');
$('.peity-bar').peity('bar');

$(".data-attributes span").peity("donut");
//Dashboard animated counter
$('.dash-counts').each(function () {
    var $this = $(this);
    jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
      duration: 1000,
      easing: 'swing',
      step: function () {
        $this.text(Math.ceil(this.Counter));
      }
    });
  });
 