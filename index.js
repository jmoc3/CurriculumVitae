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