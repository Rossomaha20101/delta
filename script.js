let rowActive;
let chart;

document.addEventListener('DOMContentLoaded', function() {
    chart = Highcharts.stockChart('container', {
		rangeSelector: {
            selected: 1
        },
        series: [{
			name: 'USD to EUR',
            data: usdtoeur // predefined JavaScript array
        }]
    });
});	

document.addEventListener('DOMContentLoaded', function () {
	rowActive = [];
	$('.active').each(function(row){
		$(this).find('td').each(function(cell){
			//alert('Строка ' + row + ', ячейка ' + cell + ', значение: ' + $(this).html());
			if(cell!==2){
				let numData = Number($(this).html().replace(/\s/g, ''));
				rowActive.push( numData );
			}
		});
	});
	
    const chart = Highcharts.chart('container', {
        title: {
            text: ''
        },
        xAxis: {
            categories: ['Текущий день', 'Вчера', 'Этот день недели']
        },
        yAxis: {
            title: {
                text: ''
            }
        },
        series: [{
            name: '',
            data: rowActive
        }]
    });
});
	
$('.table tr').click(function(){
	rowActive = null;
	rowActive = [];
	$('.table tr').removeClass('active');
	$(this).addClass('active');
	$('.active').each(function(row){
		$(this).find('td').each(function(cell){
			//alert('Строка ' + row + ', ячейка ' + cell + ', значение: ' + $(this).html());
			if(cell!==2){
				let numData = Number($(this).html().replace(/\s/g, ''));
				rowActive.push( numData );
			}
		});
	});
	
	const chart = Highcharts.chart('container', {
        title: {
            text: ''
        },
        xAxis: {
            categories: ['Текущий день', 'Вчера', 'Этот день недели']
        },
        yAxis: {
            title: {
                text: ''
            }
        },
        series: [{
            name: '',
            data: rowActive
        }]
    });
	
});  