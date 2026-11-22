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
var format_apotek_UTM_2 = new ol.format.GeoJSON();
var features_apotek_UTM_2 = format_apotek_UTM_2.readFeatures(json_apotek_UTM_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_apotek_UTM_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_apotek_UTM_2.addFeatures(features_apotek_UTM_2);
var lyr_apotek_UTM_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_apotek_UTM_2, 
                style: style_apotek_UTM_2,
                popuplayertitle: 'apotek_UTM',
                interactive: false,
                title: '<img src="styles/legend/apotek_UTM_2.png" /> apotek_UTM'
            });
var format_buffer_apotek_3 = new ol.format.GeoJSON();
var features_buffer_apotek_3 = format_buffer_apotek_3.readFeatures(json_buffer_apotek_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buffer_apotek_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buffer_apotek_3.addFeatures(features_buffer_apotek_3);
var lyr_buffer_apotek_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buffer_apotek_3, 
                style: style_buffer_apotek_3,
                popuplayertitle: 'buffer_apotek',
                interactive: true,
                title: '<img src="styles/legend/buffer_apotek_3.png" /> buffer_apotek'
            });
var format_Apotek_Banjarmasin_QGIS_4 = new ol.format.GeoJSON();
var features_Apotek_Banjarmasin_QGIS_4 = format_Apotek_Banjarmasin_QGIS_4.readFeatures(json_Apotek_Banjarmasin_QGIS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Apotek_Banjarmasin_QGIS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Apotek_Banjarmasin_QGIS_4.addFeatures(features_Apotek_Banjarmasin_QGIS_4);
var lyr_Apotek_Banjarmasin_QGIS_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Apotek_Banjarmasin_QGIS_4, 
                style: style_Apotek_Banjarmasin_QGIS_4,
                popuplayertitle: 'Apotek_Banjarmasin_QGIS',
                interactive: true,
                title: '<img src="styles/legend/Apotek_Banjarmasin_QGIS_4.png" /> Apotek_Banjarmasin_QGIS'
            });

lyr_streetmap_0.setVisible(true);lyr_admin_level_6_Banjarmasin_1.setVisible(true);lyr_apotek_UTM_2.setVisible(false);lyr_buffer_apotek_3.setVisible(true);lyr_Apotek_Banjarmasin_QGIS_4.setVisible(true);
var layersList = [lyr_streetmap_0,lyr_admin_level_6_Banjarmasin_1,lyr_apotek_UTM_2,lyr_buffer_apotek_3,lyr_Apotek_Banjarmasin_QGIS_4];
lyr_admin_level_6_Banjarmasin_1.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'admin_level': 'admin_level', 'building:levels': 'building:levels', 'short_name': 'short_name', 'office': 'office', 'building': 'building', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'type': 'type', 'ref:ID:kemendagri': 'ref:ID:kemendagri', 'official_name': 'official_name', 'name:ko': 'name:ko', 'name:ja': 'name:ja', 'name:id': 'name:id', 'name:en': 'name:en', 'name': 'name', 'boundary': 'boundary', 'alt_name': 'alt_name', });
lyr_apotek_UTM_2.set('fieldAliases', {'fid': 'fid', 'No': 'No', 'Nama Apotek (jika ada)': 'Nama Apotek (jika ada)', 'Alamat': 'Alamat', 'Titik Koordinat': 'Titik Koordinat', 'Link': 'Link', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_buffer_apotek_3.set('fieldAliases', {'fid': 'fid', 'No': 'No', 'Nama Apotek (jika ada)': 'Nama Apotek (jika ada)', 'Alamat': 'Alamat', 'Titik Koordinat': 'Titik Koordinat', 'Link': 'Link', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Apotek_Banjarmasin_QGIS_4.set('fieldAliases', {});
lyr_admin_level_6_Banjarmasin_1.set('fieldImages', {'fid': '', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'admin_level': 'TextEdit', 'building:levels': 'TextEdit', 'short_name': 'TextEdit', 'office': 'TextEdit', 'building': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'type': 'TextEdit', 'ref:ID:kemendagri': 'TextEdit', 'official_name': 'TextEdit', 'name:ko': 'TextEdit', 'name:ja': 'TextEdit', 'name:id': 'TextEdit', 'name:en': 'TextEdit', 'name': 'TextEdit', 'boundary': 'TextEdit', 'alt_name': 'TextEdit', });
lyr_apotek_UTM_2.set('fieldImages', {'fid': '', 'No': '', 'Nama Apotek (jika ada)': '', 'Alamat': '', 'Titik Koordinat': '', 'Link': '', 'Latitude': '', 'Longitude': '', });
lyr_buffer_apotek_3.set('fieldImages', {'fid': 'TextEdit', 'No': 'TextEdit', 'Nama Apotek (jika ada)': 'TextEdit', 'Alamat': 'TextEdit', 'Titik Koordinat': 'TextEdit', 'Link': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Apotek_Banjarmasin_QGIS_4.set('fieldImages', {});
lyr_admin_level_6_Banjarmasin_1.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'admin_level': 'no label', 'building:levels': 'no label', 'short_name': 'no label', 'office': 'no label', 'building': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'type': 'no label', 'ref:ID:kemendagri': 'no label', 'official_name': 'no label', 'name:ko': 'no label', 'name:ja': 'no label', 'name:id': 'no label', 'name:en': 'no label', 'name': 'no label', 'boundary': 'no label', 'alt_name': 'no label', });
lyr_apotek_UTM_2.set('fieldLabels', {'fid': 'no label', 'No': 'no label', 'Nama Apotek (jika ada)': 'no label', 'Alamat': 'no label', 'Titik Koordinat': 'no label', 'Link': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_buffer_apotek_3.set('fieldLabels', {'fid': 'no label', 'No': 'no label', 'Nama Apotek (jika ada)': 'no label', 'Alamat': 'no label', 'Titik Koordinat': 'no label', 'Link': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_Apotek_Banjarmasin_QGIS_4.set('fieldLabels', {});
lyr_Apotek_Banjarmasin_QGIS_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});