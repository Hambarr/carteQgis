var wms_layers = [];

var format_200043396_ZONE_URBA_20191212_0 = new ol.format.GeoJSON();
var features_200043396_ZONE_URBA_20191212_0 = format_200043396_ZONE_URBA_20191212_0.readFeatures(json_200043396_ZONE_URBA_20191212_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_200043396_ZONE_URBA_20191212_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_200043396_ZONE_URBA_20191212_0.addFeatures(features_200043396_ZONE_URBA_20191212_0);
var lyr_200043396_ZONE_URBA_20191212_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_200043396_ZONE_URBA_20191212_0, 
                style: style_200043396_ZONE_URBA_20191212_0,
                interactive: true,
                title: '<img src="styles/legend/200043396_ZONE_URBA_20191212_0.png" /> 200043396_ZONE_URBA_20191212'
            });
var format_200043396_PRESCRIPTION_SURF_20191212_1 = new ol.format.GeoJSON();
var features_200043396_PRESCRIPTION_SURF_20191212_1 = format_200043396_PRESCRIPTION_SURF_20191212_1.readFeatures(json_200043396_PRESCRIPTION_SURF_20191212_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_200043396_PRESCRIPTION_SURF_20191212_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_200043396_PRESCRIPTION_SURF_20191212_1.addFeatures(features_200043396_PRESCRIPTION_SURF_20191212_1);
var lyr_200043396_PRESCRIPTION_SURF_20191212_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_200043396_PRESCRIPTION_SURF_20191212_1, 
                style: style_200043396_PRESCRIPTION_SURF_20191212_1,
                interactive: true,
                title: '<img src="styles/legend/200043396_PRESCRIPTION_SURF_20191212_1.png" /> 200043396_PRESCRIPTION_SURF_20191212'
            });
var format_200043396_PRESCRIPTION_PCT_20191212_2 = new ol.format.GeoJSON();
var features_200043396_PRESCRIPTION_PCT_20191212_2 = format_200043396_PRESCRIPTION_PCT_20191212_2.readFeatures(json_200043396_PRESCRIPTION_PCT_20191212_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_200043396_PRESCRIPTION_PCT_20191212_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_200043396_PRESCRIPTION_PCT_20191212_2.addFeatures(features_200043396_PRESCRIPTION_PCT_20191212_2);
var lyr_200043396_PRESCRIPTION_PCT_20191212_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_200043396_PRESCRIPTION_PCT_20191212_2, 
                style: style_200043396_PRESCRIPTION_PCT_20191212_2,
                interactive: true,
                title: '<img src="styles/legend/200043396_PRESCRIPTION_PCT_20191212_2.png" /> 200043396_PRESCRIPTION_PCT_20191212'
            });
var format_200043396_PRESCRIPTION_LIN_20191212_3 = new ol.format.GeoJSON();
var features_200043396_PRESCRIPTION_LIN_20191212_3 = format_200043396_PRESCRIPTION_LIN_20191212_3.readFeatures(json_200043396_PRESCRIPTION_LIN_20191212_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_200043396_PRESCRIPTION_LIN_20191212_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_200043396_PRESCRIPTION_LIN_20191212_3.addFeatures(features_200043396_PRESCRIPTION_LIN_20191212_3);
var lyr_200043396_PRESCRIPTION_LIN_20191212_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_200043396_PRESCRIPTION_LIN_20191212_3, 
                style: style_200043396_PRESCRIPTION_LIN_20191212_3,
                interactive: true,
                title: '<img src="styles/legend/200043396_PRESCRIPTION_LIN_20191212_3.png" /> 200043396_PRESCRIPTION_LIN_20191212'
            });

lyr_200043396_ZONE_URBA_20191212_0.setVisible(true);lyr_200043396_PRESCRIPTION_SURF_20191212_1.setVisible(true);lyr_200043396_PRESCRIPTION_PCT_20191212_2.setVisible(true);lyr_200043396_PRESCRIPTION_LIN_20191212_3.setVisible(true);
var layersList = [lyr_200043396_ZONE_URBA_20191212_0,lyr_200043396_PRESCRIPTION_SURF_20191212_1,lyr_200043396_PRESCRIPTION_PCT_20191212_2,lyr_200043396_PRESCRIPTION_LIN_20191212_3];
lyr_200043396_ZONE_URBA_20191212_0.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'LIBELONG': 'LIBELONG', 'TYPEZONE': 'TYPEZONE', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_200043396_PRESCRIPTION_SURF_20191212_1.set('fieldAliases', {'libelle': 'libelle', 'txt': 'txt', 'typepsc': 'typepsc', 'stypepsc': 'stypepsc', 'nomfic': 'nomfic', 'urlfic': 'urlfic', 'idurba': 'idurba', 'datvalid': 'datvalid', });
lyr_200043396_PRESCRIPTION_PCT_20191212_2.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_200043396_PRESCRIPTION_LIN_20191212_3.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_200043396_ZONE_URBA_20191212_0.set('fieldImages', {'LIBELLE': '', 'LIBELONG': '', 'TYPEZONE': '', 'NOMFIC': '', 'URLFIC': '', 'IDURBA': '', 'DATVALID': '', });
lyr_200043396_PRESCRIPTION_SURF_20191212_1.set('fieldImages', {'libelle': '', 'txt': '', 'typepsc': '', 'stypepsc': '', 'nomfic': '', 'urlfic': '', 'idurba': '', 'datvalid': '', });
lyr_200043396_PRESCRIPTION_PCT_20191212_2.set('fieldImages', {'LIBELLE': '', 'TXT': '', 'TYPEPSC': '', 'STYPEPSC': '', 'NOMFIC': '', 'URLFIC': '', 'IDURBA': '', 'DATVALID': '', });
lyr_200043396_PRESCRIPTION_LIN_20191212_3.set('fieldImages', {'LIBELLE': '', 'TXT': '', 'TYPEPSC': '', 'STYPEPSC': '', 'NOMFIC': '', 'URLFIC': '', 'IDURBA': '', 'DATVALID': '', });
lyr_200043396_ZONE_URBA_20191212_0.set('fieldLabels', {'LIBELLE': 'no label', 'LIBELONG': 'no label', 'TYPEZONE': 'no label', 'NOMFIC': 'no label', 'URLFIC': 'no label', 'IDURBA': 'no label', 'DATVALID': 'no label', });
lyr_200043396_PRESCRIPTION_SURF_20191212_1.set('fieldLabels', {'libelle': 'no label', 'txt': 'no label', 'typepsc': 'no label', 'stypepsc': 'no label', 'nomfic': 'no label', 'urlfic': 'no label', 'idurba': 'no label', 'datvalid': 'no label', });
lyr_200043396_PRESCRIPTION_PCT_20191212_2.set('fieldLabels', {'LIBELLE': 'no label', 'TXT': 'no label', 'TYPEPSC': 'no label', 'STYPEPSC': 'no label', 'NOMFIC': 'no label', 'URLFIC': 'no label', 'IDURBA': 'no label', 'DATVALID': 'no label', });
lyr_200043396_PRESCRIPTION_LIN_20191212_3.set('fieldLabels', {'LIBELLE': 'no label', 'TXT': 'no label', 'TYPEPSC': 'no label', 'STYPEPSC': 'no label', 'NOMFIC': 'no label', 'URLFIC': 'no label', 'IDURBA': 'no label', 'DATVALID': 'no label', });
lyr_200043396_PRESCRIPTION_LIN_20191212_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});