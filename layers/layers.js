var wms_layers = [];


        var lyr_streetmap_0 = new ol.layer.Tile({
            'title': 'streetmap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_admin_level_6_Banjarmasin_1 = new ol.format.GeoJSON();
var features_admin_level_6_Banjarmasin_1 = format_admin_level_6_Banjarmasin_1.readFeatures(json_admin_level_6_Banjarmasin_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_admin_level_6_Banjarmasin_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_admin_level_6_Banjarmasin_1.addFeatures(features_admin_level_6_Banjarmasin_1);
var lyr_admin_level_6_Banjarmasin_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_admin_level_6_Banjarmasin_1, 
                style: style_admin_level_6_Banjarmasin_1,
                popuplayertitle: 'admin_level_6_Banjarmasin',
                interactive: true,
                title: '<img src="styles/legend/admin_level_6_Banjarmasin_1.png" /> admin_level_6_Banjarmasin'
            });
var format_buffer_apotek_ril_2 = new ol.format.GeoJSON();
var features_buffer_apotek_ril_2 = format_buffer_apotek_ril_2.readFeatures(json_buffer_apotek_ril_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buffer_apotek_ril_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buffer_apotek_ril_2.addFeatures(features_buffer_apotek_ril_2);
var lyr_buffer_apotek_ril_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buffer_apotek_ril_2, 
                style: style_buffer_apotek_ril_2,
                popuplayertitle: 'buffer_apotek_ril',
                interactive: true,
                title: '<img src="styles/legend/buffer_apotek_ril_2.png" /> buffer_apotek_ril'
            });
var format_apotek_banjarmasin_3 = new ol.format.GeoJSON();
var features_apotek_banjarmasin_3 = format_apotek_banjarmasin_3.readFeatures(json_apotek_banjarmasin_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_apotek_banjarmasin_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_apotek_banjarmasin_3.addFeatures(features_apotek_banjarmasin_3);
var lyr_apotek_banjarmasin_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_apotek_banjarmasin_3, 
                style: style_apotek_banjarmasin_3,
                popuplayertitle: 'apotek_banjarmasin',
                interactive: true,
                title: '<img src="styles/legend/apotek_banjarmasin_3.png" /> apotek_banjarmasin'
            });

lyr_streetmap_0.setVisible(true);lyr_admin_level_6_Banjarmasin_1.setVisible(true);lyr_buffer_apotek_ril_2.setVisible(true);lyr_apotek_banjarmasin_3.setVisible(true);
var layersList = [lyr_streetmap_0,lyr_admin_level_6_Banjarmasin_1,lyr_buffer_apotek_ril_2,lyr_apotek_banjarmasin_3];
lyr_admin_level_6_Banjarmasin_1.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'admin_level': 'admin_level', 'building:levels': 'building:levels', 'short_name': 'short_name', 'office': 'office', 'building': 'building', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'type': 'type', 'ref:ID:kemendagri': 'ref:ID:kemendagri', 'official_name': 'official_name', 'name:ko': 'name:ko', 'name:ja': 'name:ja', 'name:id': 'name:id', 'name:en': 'name:en', 'name': 'name', 'boundary': 'boundary', 'alt_name': 'alt_name', });
lyr_buffer_apotek_ril_2.set('fieldAliases', {'fid': 'fid', 'no': 'no', 'nama': 'nama', 'alamat': 'alamat', 'lat': 'lat', 'lon': 'lon', 'link': 'link', });
lyr_apotek_banjarmasin_3.set('fieldAliases', {'fid': 'fid', 'no': 'no', 'nama': 'nama', 'alamat': 'alamat', 'lat': 'lat', 'lon': 'lon', 'link': 'link', });
lyr_admin_level_6_Banjarmasin_1.set('fieldImages', {'fid': '', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'admin_level': 'TextEdit', 'building:levels': 'TextEdit', 'short_name': 'TextEdit', 'office': 'TextEdit', 'building': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'type': 'TextEdit', 'ref:ID:kemendagri': 'TextEdit', 'official_name': 'TextEdit', 'name:ko': 'TextEdit', 'name:ja': 'TextEdit', 'name:id': 'TextEdit', 'name:en': 'TextEdit', 'name': 'TextEdit', 'boundary': 'TextEdit', 'alt_name': 'TextEdit', });
lyr_buffer_apotek_ril_2.set('fieldImages', {'fid': '', 'no': '', 'nama': '', 'alamat': '', 'lat': '', 'lon': '', 'link': '', });
lyr_apotek_banjarmasin_3.set('fieldImages', {'fid': 'TextEdit', 'no': 'Range', 'nama': 'TextEdit', 'alamat': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'link': 'TextEdit', });
lyr_admin_level_6_Banjarmasin_1.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'admin_level': 'no label', 'building:levels': 'no label', 'short_name': 'no label', 'office': 'no label', 'building': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'type': 'no label', 'ref:ID:kemendagri': 'no label', 'official_name': 'no label', 'name:ko': 'no label', 'name:ja': 'no label', 'name:id': 'no label', 'name:en': 'no label', 'name': 'no label', 'boundary': 'no label', 'alt_name': 'no label', });
lyr_buffer_apotek_ril_2.set('fieldLabels', {'fid': 'no label', 'no': 'no label', 'nama': 'no label', 'alamat': 'no label', 'lat': 'no label', 'lon': 'no label', 'link': 'no label', });
lyr_apotek_banjarmasin_3.set('fieldLabels', {'fid': 'no label', 'no': 'no label', 'nama': 'no label', 'alamat': 'no label', 'lat': 'no label', 'lon': 'no label', 'link': 'no label', });
lyr_apotek_banjarmasin_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});