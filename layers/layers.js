var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_aksesibilitas_univunion_1 = new ol.format.GeoJSON();
var features_aksesibilitas_univunion_1 = format_aksesibilitas_univunion_1.readFeatures(json_aksesibilitas_univunion_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_aksesibilitas_univunion_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_aksesibilitas_univunion_1.addFeatures(features_aksesibilitas_univunion_1);
var lyr_aksesibilitas_univunion_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_aksesibilitas_univunion_1, 
                style: style_aksesibilitas_univunion_1,
                popuplayertitle: 'aksesibilitas_univ — union',
                interactive: true,
                title: '<img src="styles/legend/aksesibilitas_univunion_1.png" /> aksesibilitas_univ — union'
            });
var format_univ_surabaya_2 = new ol.format.GeoJSON();
var features_univ_surabaya_2 = format_univ_surabaya_2.readFeatures(json_univ_surabaya_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_univ_surabaya_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_univ_surabaya_2.addFeatures(features_univ_surabaya_2);
var lyr_univ_surabaya_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_univ_surabaya_2, 
                style: style_univ_surabaya_2,
                popuplayertitle: 'univ_surabaya',
                interactive: true,
    title: 'univ_surabaya<br />\
    <img src="styles/legend/univ_surabaya_2_0.png" /> ITS<br />\
    <img src="styles/legend/univ_surabaya_2_1.png" /> UIN Sunan Ampel<br />\
    <img src="styles/legend/univ_surabaya_2_2.png" /> UNAIR<br />\
    <img src="styles/legend/univ_surabaya_2_3.png" /> UNESA<br />\
    <img src="styles/legend/univ_surabaya_2_4.png" /> UPNV Jatim<br />' });
var format_PTNdiSurabaya_3 = new ol.format.GeoJSON();
var features_PTNdiSurabaya_3 = format_PTNdiSurabaya_3.readFeatures(json_PTNdiSurabaya_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PTNdiSurabaya_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PTNdiSurabaya_3.addFeatures(features_PTNdiSurabaya_3);
var lyr_PTNdiSurabaya_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PTNdiSurabaya_3, 
                style: style_PTNdiSurabaya_3,
                popuplayertitle: 'PTN di Surabaya',
                interactive: true,
    title: 'PTN di Surabaya<br />\
    <img src="styles/legend/PTNdiSurabaya_3_0.png" /> ITS<br />\
    <img src="styles/legend/PTNdiSurabaya_3_1.png" /> UIN Sunan Ampel<br />\
    <img src="styles/legend/PTNdiSurabaya_3_2.png" /> UNAIR<br />\
    <img src="styles/legend/PTNdiSurabaya_3_3.png" /> UNESA<br />\
    <img src="styles/legend/PTNdiSurabaya_3_4.png" /> UPNV Jatim<br />' });

lyr_GoogleRoad_0.setVisible(true);lyr_aksesibilitas_univunion_1.setVisible(true);lyr_univ_surabaya_2.setVisible(true);lyr_PTNdiSurabaya_3.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_aksesibilitas_univunion_1,lyr_univ_surabaya_2,lyr_PTNdiSurabaya_3];
lyr_aksesibilitas_univunion_1.set('fieldAliases', {'fid': 'fid', 'Access': 'Access', });
lyr_univ_surabaya_2.set('fieldAliases', {'fid': 'fid', 'Nama': 'Nama', 'Kampus': 'Kampus', 'Deskripsi Univ_QS WUR': 'Deskripsi Univ_QS WUR', 'Deskripsi Univ_Didirikan': 'Deskripsi Univ_Didirikan', 'Deskripsi Univ_Fakultas': 'Deskripsi Univ_Fakultas', });
lyr_PTNdiSurabaya_3.set('fieldAliases', {'fid': 'fid', 'Nama': 'Nama', 'Kampus': 'Kampus', 'Ranking Qs': 'Ranking Qs', 'Tahun Berdiri': 'Tahun Berdiri', 'Fakultas': 'Fakultas', 'Foto': 'Foto', });
lyr_aksesibilitas_univunion_1.set('fieldImages', {'fid': '', 'Access': '', });
lyr_univ_surabaya_2.set('fieldImages', {'fid': 'TextEdit', 'Nama': 'TextEdit', 'Kampus': 'TextEdit', 'Deskripsi Univ_QS WUR': 'TextEdit', 'Deskripsi Univ_Didirikan': 'Range', 'Deskripsi Univ_Fakultas': 'TextEdit', });
lyr_PTNdiSurabaya_3.set('fieldImages', {'fid': 'TextEdit', 'Nama': 'TextEdit', 'Kampus': 'TextEdit', 'Ranking Qs': 'TextEdit', 'Tahun Berdiri': 'Range', 'Fakultas': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_aksesibilitas_univunion_1.set('fieldLabels', {'fid': 'hidden field', 'Access': 'inline label - always visible', });
lyr_univ_surabaya_2.set('fieldLabels', {'fid': 'hidden field', 'Nama': 'inline label - always visible', 'Kampus': 'inline label - always visible', 'Deskripsi Univ_QS WUR': 'no label', 'Deskripsi Univ_Didirikan': 'no label', 'Deskripsi Univ_Fakultas': 'no label', });
lyr_PTNdiSurabaya_3.set('fieldLabels', {'fid': 'no label', 'Nama': 'no label', 'Kampus': 'no label', 'Ranking Qs': 'no label', 'Tahun Berdiri': 'no label', 'Fakultas': 'no label', 'Foto': 'no label', });
lyr_PTNdiSurabaya_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});