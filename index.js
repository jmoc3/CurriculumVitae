Morris.Bar({
    element: 'graph',
    data: [
      {x: 'Nov', y: 0.25},
      {x: 'Dec', y: 0.5},
      {x: 'Jan', y: 0.8},
      {x: 'Feb', y: 1},
      {x: 'Mar', y: 1.5},
      {x: 'Apr', y: 1}
    ],
    xkey: 'x',
    ykeys: ['y'],
    labels: ['y'],
    grid: false,
    axes: false,
    barSizeRatio: .8,
  
    barColors: function (row, series, type) {
      if (type === 'bar') {
        var aqua = Math.ceil(0 * row.y / this.ymax);
        return 'rgb(' + aqua + '25,192,204)';
      }
      else {
        return '#2253DD';
      }
    },
  });
hideHover: true;




new Morris.Line({
  // ID of the element in which to draw the chart.
  element: 'myfirstchart',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
    { year: '2018', value: 20 },
    { year: '2019', value: 50 },
    { year: '2020', value: 35 },
    { year: '2021', value: 15 },
    { year: '2022', value: 98 }
  ],

  labelColor: '#BEC4C7',
  axes : false,
  grid :false,

  
  
  lineColors:[
      '#19C0CC ',
      '#FA9111',
      
      
  ],
  // The name of the data record attribute that contains x-values.
  xkey: 'year',
  // A list of names of data record attributes that contain y-values.
  ykeys: ['value'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['Value']
  
});

Morris.Donut({
  element: 'Donut',
  data: [
    {value: 298, label: 'Occupied'},
    {value: 249, label: 'Vacan'},
    {value: 85, label: 'Maintenance'},
  ],

  

  
  labelColor: '#11383d',
  colors: [
    '#2253DD ',
    '#FA9111',
    '#19C0CC'
    
  ],
  formatter: function (x) { return x + "%"}
});