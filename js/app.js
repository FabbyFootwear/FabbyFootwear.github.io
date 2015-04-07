function initialize() {

  map = new google.maps.Map(document.getElementById("map-canvas"), {
		center: new google.maps.LatLng(53.2, -1.75),
		zoom: 6,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI:true
  });

  var style = [
    {
      "stylers": [
        { "visibility": "off" },
        { "saturation": -30}
      ]
    },{
      "featureType": "water",
      "stylers": [
        { "visibility": "on" },
        { "hue": "#00ffff" }
      ]
    },{
      "featureType": "landscape",
      "stylers": [
        { "hue": "#ff0000" },
        { "lightness": 100 },
        { "visibility": "on" }
      ]
    },{
    }
  ];

  map.setOptions({styles: style});

  poverty = new google.maps.FusionTablesLayer({
    query: {
      select: "col0>>1",
      from: "1Gs_VpoFPJ2uAOoXUPuocQxQ5-sYihrMF1GouV04M"
    },
    options: {
      styleId: 2,
      templateId: 2
    }
  });

  segregation = new google.maps.FusionTablesLayer({
    query: {
      select: "col0>>1",
      from: "1qn8rmf4jZcR-booMyg8rIuL6MIkQIaAWq4HLiMQO"
    },
    options: {
      styleId: 2,
      templateId: 2
    }
  });

  unemployment = new google.maps.FusionTablesLayer({
    query: {
      select: "col0>>1",
      from: "1gG0Lz6lVDf2hen0HG_siR0cRz0zMlRjN1wa_HM43"
    },
    options: {styleId: 2,
      templateId: 2
    }
  });

  // ghostLA = new google.maps.FusionTablesLayer({
  //   query: {
  //     select: "geometry",
  //     from: "1PtVDxWQf3EkT8I1DKCDRokVNqgPTn_6DYkjrEaR4"
  //   },
  //   styleId: 2,
  //   templateId: 2
  // });
  //
  // ghostLEP = new google.maps.FusionTablesLayer({
  //   query: {
  //     select: "geometry",
  //     from: "15m9sDjTrifzF0Id5ZD9OQ48fGinUeqFNRzr1kwZh"
  //   },
  //   styleId: 2,
  //   templateId: 2
  // });

  updateLayer(unemployment);

}

// function updateSelect(currentLayer) {
//
//   google.maps.event.addListener(currentLayer, 'click', function(e) {
//
//     var id = e.row["LA"].value;
//     console.log(e.row["LA"].value);
//
//     selection = new google.maps.FusionTablesLayer({
//       query: {
//         select: "geometry",
//         from: "1PtVDxWQf3EkT8I1DKCDRokVNqgPTn_6DYkjrEaR4",
//         where: "LA='" + id + "'"
//       },
//       map: map,
//       styleId: 2,
//       templateId: 2
//     });
//
//     selection.setMap(map);
//
//   });
// }

function updateLayer(currentLayer){

  layer = currentLayer;
  poverty.setMap(null);
  segregation.setMap(null);
  unemployment.setMap(null);
  currentLayer.setMap(map);
  updateLegend();
  // updateSelect(currentLayer);
}

function updateLegend(){

  map.controls[google.maps.ControlPosition.RIGHT_TOP].clear();
  var legend = document.createElement('div');
  legend.style.width = "120px";
  legend.id = 'legend-box';

  if (layer === poverty) {
  	var content = ['<img src="http://www.jrf.org.uk/sites/default/themes/jrftheme/images/logo.png" width="174.66" height="40"><br /><br />  <div class="panel panel-default">  <div class="panel-heading">Percentage of Households in poverty</div>  <table class="table table-condensed table-bordered">  <tr><td bgcolor="#FF0000">&nbsp;</td><td>No data</td></tr>   <tr><td bgcolor="#9FC5E8">&nbsp;</td><td>1 -10</td></tr>   <tr><td bgcolor="#6FA8DC">&nbsp;</td><td>10 - 15</td></tr>   <tr><td bgcolor="#3D85C6">&nbsp;</td><td>15 - 20</td></tr>   <tr><td bgcolor="#0B5394">&nbsp;</td><td>20 - 25</td></tr>   <tr><td bgcolor="#073763">&nbsp;</td><td>25 -35</td></tr>  </table>  </div>  Source: JRF analysis of Understanding Society (2011)'];
  	legend.innerHTML = content.join('');
  	legend.index = 1;
  	map.controls[google.maps.ControlPosition.RIGHT_TOP].push(legend);
    document.getElementById("title").innerHTML = "Ethnicity map - Poverty";
  }
  else if (layer === unemployment) {
  	var content = ['Percentage of population White British<table>  <tr><td bgcolor="#CFE2F3">&nbsp;</td><td>00 - 90</td></tr>   <tr><td bgcolor="#9FC5E8">&nbsp;</td><td>90 - 92</td></tr>   <tr><td bgcolor="#6FA8DC">&nbsp;</td><td>92 - 94</td></tr>   <tr><td bgcolor="#3D85C6">&nbsp;</td><td>94 - 96</td></tr>   <tr><td bgcolor="#0B5394">&nbsp;</td><td>96 - 98</td></tr>   <tr><td bgcolor="#073763">&nbsp;</td><td>99 - 100</td></tr>  </table>  </div>'];
  	legend.innerHTML = content.join('');
  	legend.index = 1;
  	map.controls[google.maps.ControlPosition.RIGHT_TOP].push(legend);
    document.getElementById("title").innerHTML = "Ethnicity map - Unemployment";
  }
  else {
  	var content = ['<img src="http://www.jrf.org.uk/sites/default/themes/jrftheme/images/logo.png" width="174.66" height="40"><br /><br />  <div class="panel panel-default">  <div class="panel-heading">Percentage White Irish Segregation</div>  <table class="table table-condensed table-bordered">  <tr><td bgcolor="#CFE2F3">&nbsp;</td><td>00 - 10</td></tr>   <tr><td bgcolor="#9FC5E8">&nbsp;</td><td>10 - 12</td></tr>   <tr><td bgcolor="#6FA8DC">&nbsp;</td><td>12 - 14</td></tr>   <tr><td bgcolor="#3D85C6">&nbsp;</td><td>14 - 16</td></tr>   <tr><td bgcolor="#0B5394">&nbsp;</td><td>16 - 18</td></tr>   <tr><td bgcolor="#073763">&nbsp;</td><td>18 - 28</td></tr>  </table>  </div>  Source: Analysis of Understanding Society (2011).'];
  	legend.innerHTML = content.join('');
  	legend.index = 1;
  	map.controls[google.maps.ControlPosition.RIGHT_TOP].push(legend);
    document.getElementById("title").innerHTML = "Ethnicity map - Segregation";
  }
}

function hideLegend(){

  map.controls[google.maps.ControlPosition.RIGHT_TOP].pop();
}
