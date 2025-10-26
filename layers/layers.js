var wms_layers = [];

var format_KL_Wards_0 = new ol.format.GeoJSON();
var features_KL_Wards_0 = format_KL_Wards_0.readFeatures(json_KL_Wards_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KL_Wards_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KL_Wards_0.addFeatures(features_KL_Wards_0);
var lyr_KL_Wards_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KL_Wards_0, 
                style: style_KL_Wards_0,
                popuplayertitle: 'KL_Wards',
                interactive: true,
    title: 'KL_Wards<br />\
    <img src="styles/legend/KL_Wards_0_0.png" /> ALATHOOR<br />\
    <img src="styles/legend/KL_Wards_0_1.png" /> ANAMUKHAM<br />\
    <img src="styles/legend/KL_Wards_0_2.png" /> ANCODE<br />\
    <img src="styles/legend/KL_Wards_0_3.png" /> ARUVIKKARA<br />\
    <img src="styles/legend/KL_Wards_0_4.png" /> ARUVIPPURAM<br />\
    <img src="styles/legend/KL_Wards_0_5.png" /> AYIROOR<br />\
    <img src="styles/legend/KL_Wards_0_6.png" /> CHULLIYOOR<br />\
    <img src="styles/legend/KL_Wards_0_7.png" /> MANALUVILA<br />\
    <img src="styles/legend/KL_Wards_0_8.png" /> MARAYAMUTTOM<br />\
    <img src="styles/legend/KL_Wards_0_9.png" /> PALKULANGARA<br />\
    <img src="styles/legend/KL_Wards_0_10.png" /> PAZHAMALA<br />\
    <img src="styles/legend/KL_Wards_0_11.png" /> PERUMKADAVILA<br />\
    <img src="styles/legend/KL_Wards_0_12.png" /> PULIMANCODE<br />\
    <img src="styles/legend/KL_Wards_0_13.png" /> THATHAMALA<br />\
    <img src="styles/legend/KL_Wards_0_14.png" /> THATHIYOOR<br />\
    <img src="styles/legend/KL_Wards_0_15.png" /> THRIPPALAVOOR<br />\
    <img src="styles/legend/KL_Wards_0_16.png" /> VADAKARA<br />\
    <img src="styles/legend/KL_Wards_0_17.png" /> <br />' });

lyr_KL_Wards_0.setVisible(true);
var layersList = [lyr_KL_Wards_0];
lyr_KL_Wards_0.set('fieldAliases', {'gml_parent': 'gml_parent', 'gml_pare_1': 'gml_pare_1', 'gml_id': 'gml_id', 'geom': 'geom', 'District': 'District', 'LSGD': 'LSGD', 'Ward_Name': 'Ward_Name', 'Ward_No': 'Ward_No', 'Lsgd_Type': 'Lsgd_Type', 'Created_Da': 'Created_Da', 'Surveyor': 'Surveyor', 'Mob_No': 'Mob_No', 'Remarks': 'Remarks', '_distLsgd': '_distLsgd', 'OBJECTID': 'OBJECTID', '_result': '_result', '_ulid': '_ulid', '_distLsgd2': '_distLsgd2', 'population': 'population', 'POPULATI_1': 'POPULATI_1', });
lyr_KL_Wards_0.set('fieldImages', {'gml_parent': 'TextEdit', 'gml_pare_1': 'TextEdit', 'gml_id': 'TextEdit', 'geom': 'TextEdit', 'District': 'TextEdit', 'LSGD': 'TextEdit', 'Ward_Name': 'TextEdit', 'Ward_No': 'TextEdit', 'Lsgd_Type': 'TextEdit', 'Created_Da': 'TextEdit', 'Surveyor': 'TextEdit', 'Mob_No': 'TextEdit', 'Remarks': 'TextEdit', '_distLsgd': 'TextEdit', 'OBJECTID': 'TextEdit', '_result': 'TextEdit', '_ulid': 'TextEdit', '_distLsgd2': 'TextEdit', 'population': 'TextEdit', 'POPULATI_1': 'TextEdit', });
lyr_KL_Wards_0.set('fieldLabels', {'gml_parent': 'no label', 'gml_pare_1': 'no label', 'gml_id': 'no label', 'geom': 'no label', 'District': 'inline label - always visible', 'LSGD': 'inline label - always visible', 'Ward_Name': 'inline label - visible with data', 'Ward_No': 'inline label - visible with data', 'Lsgd_Type': 'inline label - visible with data', 'Created_Da': 'no label', 'Surveyor': 'no label', 'Mob_No': 'no label', 'Remarks': 'no label', '_distLsgd': 'no label', 'OBJECTID': 'no label', '_result': 'no label', '_ulid': 'no label', '_distLsgd2': 'no label', 'population': 'no label', 'POPULATI_1': 'no label', });
lyr_KL_Wards_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});