/* global google */

(function() {

    if (!(/espc\.com/.test(document.location.hostname) && document.getElementById('gmap'))) {
        alert('This bookmarklet is only designed to work with the map view of search results at www.espc.com.');
        return;
    }

    var that = this;

    this.map = window.espcGoogleMap;

    this.url_root = 'https://s3-eu-west-1.amazonaws.com/edinburgh-school-catchments/';

    this.categories = {
        'ndps': {
            'name': 'Primary, non-denominational',
            'boundaries': 'ndps.kml',
            'locations': [{
                "name": "Abbeyhill Primary School",
                "lat": 55.9564341456,
                "lng": -3.16956394941
            },{
                "name": "Balgreen Primary School",
                "lat": 55.9374226996,
                "lng": -3.2481229117
            },{
                "name": "Blackhall Primary School",
                "lat": 55.9554563921,
                "lng": -3.26138830498
            },{
                "name": "Bonaly Primary School",
                "lat": 55.8992513886,
                "lng": -3.25876367604
            },{
                "name": "Broomhouse Primary School",
                "lat": 55.9282888348,
                "lng": -3.2740138145
            },{
                "name": "Broughton Primary School",
                "lat": 55.965413794,
                "lng": -3.18894719434
            },{
                "name": "Brunstane Primary School",
                "lat": 55.9418206303,
                "lng": -3.10368821811
            },{
                "name": "Bruntsfield Primary School",
                "lat": 55.9373489093,
                "lng": -3.21049957664
            },{
                "name": "Buckstone Primary School",
                "lat": 55.9058622658,
                "lng": -3.19592185945
            },{
                "name": "Canal View Primary School",
                "lat": 55.916029985,
                "lng": -3.28031573934
            },{
                "name": "Carrick Knowe Primary School",
                "lat": 55.9385046482,
                "lng": -3.27409305142
            },{
                "name": "Castleview Primary School",
                "lat": 55.9304341574,
                "lng": -3.13553615942
            },{
                "name": "Clermiston Primary School",
                "lat": 55.9600672667,
                "lng": -3.29162087481
            },{
                "name": "Clovenstone Primary School",
                "lat": 55.9113690192,
                "lng": -3.27400275158
            },{
                "name": "Colinton Primary School",
                "lat": 55.9083804223,
                "lng": -3.2366316377
            },{
                "name": "Corstorphine Primary School",
                "lat": 55.940633888,
                "lng": -3.28537024146
            },{
                "name": "Craigentinny Primary School",
                "lat": 55.9600656196,
                "lng": -3.14454102736
            },{
                "name": "Craiglockhart Primary School",
                "lat": 55.9317850196,
                "lng": -3.22793330979
            },{
                "name": "Craigour Park Primary School",
                "lat": 55.9129288851,
                "lng": -3.1347363598
            },{
                "name": "Craigroyston Primary School",
                "lat": 55.9684439625,
                "lng": -3.25488950734
            },{
                "name": "Cramond Primary School",
                "lat": 55.971434873,
                "lng": -3.30433753268
            },{
                "name": "Currie Primary School",
                "lat": 55.8980566857,
                "lng": -3.3129247824
            },{
                "name": "Dalmeny Primary School",
                "lat": 55.9804317253,
                "lng": -3.3736044837
            },{
                "name": "Dalry Primary School",
                "lat": 55.9420778584,
                "lng": -3.22297546292
            },{
                "name": "Davidson's Mains Primary School",
                "lat": 55.9637218369,
                "lng": -3.26851374458
            },{
                "name": "Dean Park Primary School",
                "lat": 55.8791763729,
                "lng": -3.34302684526
            },{
                "name": "Duddingston Primary School",
                "lat": 55.9478934537,
                "lng": -3.13156354746
            },{
                "name": "East Craigs Primary School",
                "lat": 55.9513754441,
                "lng": -3.30212541955
            },{
                "name": "Echline Primary School",
                "lat": 55.9882296523,
                "lng": -3.41192101419
            },{
                "name": "Ferryhill Primary School",
                "lat": 55.9635019375,
                "lng": -3.2504682706
            },{
                "name": "Flora Stevenson Primary School",
                "lat": 55.9583822472,
                "lng": -3.22521956251
            },{
                "name": "Forthview Primary School",
                "lat": 55.9702982215,
                "lng": -3.24036900805
            },{
                "name": "Fox Covert Primary School",
                "lat": 55.9525210196,
                "lng": -3.27940610854
            },{
                "name": "Gilmerton Primary School",
                "lat": 55.9075137941,
                "lng": -3.13828935784
            },{
                "name": "Gracemount Primary School",
                "lat": 55.9049153861,
                "lng": -3.1548644174
            },{
                "name": "Granton Primary School",
                "lat": 55.9764576705,
                "lng": -3.22646409887
            },{
                "name": "Gylemuir Primary School",
                "lat": 55.9379233435,
                "lng": -3.29536631166
            },{
                "name": "Hermitage Park Primary School",
                "lat": 55.9655899229,
                "lng": -3.16200617908
            },{
                "name": "Hillwood Primary School",
                "lat": 55.9359238437,
                "lng": -3.3913671704
            },{
                "name": "James Gillespie's Primary School",
                "lat": 55.9366596106,
                "lng": -3.20197751678
            },{
                "name": "Juniper Green Primary School",
                "lat": 55.906575438,
                "lng": -3.28478705744
            },{
                "name": "Kirkliston Primary School",
                "lat": 55.9558715627,
                "lng": -3.41039022719
            },{
                "name": "Leith Primary School",
                "lat": 55.970503873,
                "lng": -3.16877078454
            },{
                "name": "Leith Walk Primary School",
                "lat": 55.9603843912,
                "lng": -3.17934214732
            },{
                "name": "Liberton Primary School",
                "lat": 55.9230778716,
                "lng": -3.16220581312
            },{
                "name": "Longstone Primary School",
                "lat": 55.921025594,
                "lng": -3.26119770293
            },{
                "name": "Lorne Primary School",
                "lat": 55.9661899619,
                "lng": -3.1745363289
            },{
                "name": "Murrayburn Primary School",
                "lat": 55.9223887976,
                "lng": -3.28146958087
            },{
                "name": "Nether Currie Primary School",
                "lat": 55.9001922134,
                "lng": -3.30306478925
            },{
                "name": "Newcraighall Primary School",
                "lat": 55.9351675015,
                "lng": -3.08797149565
            },{
                "name": "Niddrie Mill Primary School",
                "lat": 55.9347706027,
                "lng": -3.12711495425
            },{
                "name": "Oxgangs Primary School",
                "lat": 55.9126927817,
                "lng": -3.23491307308
            },{
                "name": "Parsons Green Primary School",
                "lat": 55.9480520753,
                "lng": -3.14357802906
            },{
                "name": "Pentland Primary School",
                "lat": 55.9072017772,
                "lng": -3.21966983005
            },{
                "name": "Pirniehall Primary School",
                "lat": 55.9734267179,
                "lng": -3.25088464771
            },{
                "name": "Preston Street Primary School",
                "lat": 55.9398396715,
                "lng": -3.17599596444
            },{
                "name": "Prestonfield Primary School",
                "lat": 55.930929213,
                "lng": -3.15859941892
            },{
                "name": "Queensferry Primary School",
                "lat": 55.9873752261,
                "lng": -3.39462554899
            },{
                "name": "Ratho Primary School",
                "lat": 55.9222739432,
                "lng": -3.38423670508
            },{
                "name": "Roseburn Primary School",
                "lat": 55.9435505772,
                "lng": -3.23656759869
            },{
                "name": "Royal Mile Primary School",
                "lat": 55.9517420809,
                "lng": -3.17728569035
            },{
                "name": "Sciennes Primary School",
                "lat": 55.9383607927,
                "lng": -3.18778196862
            },{
                "name": "Sighthill Primary School",
                "lat": 55.920068361,
                "lng": -3.2928503815
            },{
                "name": "South Morningside Primary School",
                "lat": 55.9213375383,
                "lng": -3.21224069013
            },{
                "name": "Stenhouse Primary School",
                "lat": 55.930803521,
                "lng": -3.26279589827
            },{
                "name": "Stockbridge Primary School",
                "lat": 55.959389652,
                "lng": -3.20782382307
            },{
                "name": "The Royal High Primary School",
                "lat": 55.9535672941,
                "lng": -3.13989695136
            },{
                "name": "Tollcross Primary School",
                "lat": 55.943266347,
                "lng": -3.20632912233
            },{
                "name": "Towerbank Primary School",
                "lat": 55.9548926398,
                "lng": -3.11286896897
            },{
                "name": "Trinity Primary School",
                "lat": 55.9763340804,
                "lng": -3.19328848169
            },{
                "name": "Victoria Primary School",
                "lat": 55.9805265612,
                "lng": -3.1927444891
            },{
                "name": "Wardie Primary School",
                "lat": 55.97529702,
                "lng": -3.21391217218
            }]
        },
        'rcps': {
            'name': 'Primary, Roman Catholic',
            'boundaries': 'rcps.kml',
            'locations': [
            {
                "name": "Fox Covert RC Primary School",
                "lat": 55.952189833,
                "lng": -3.28014789572
            },{
                "name": "Holy Cross RC Primary School",
                "lat": 55.9734238677,
                "lng": -3.19688432858
            },{
                "name": "St Catherine's RC Primary School",
                "lat": 55.9037180755,
                "lng": -3.15606043752
            },{
                "name": "St Cuthbert's RC Primary School",
                "lat": 55.9307696555,
                "lng": -3.24137842382
            },{
                "name": "St David's RC Primary School (Edin)",
                "lat": 55.9734034634,
                "lng": -3.24963403623
            },{
                "name": "St Francis' RC Primary School",
                "lat": 55.9352948888,
                "lng": -3.12775448731
            },{
                "name": "St John Vianney RC Primary School",
                "lat": 55.9187199174,
                "lng": -3.15743506727
            },{
                "name": "St John's RC Primary School",
                "lat": 55.9490065376,
                "lng": -3.12185980422
            },{
                "name": "St Joseph's RC Primary School (Edin)",
                "lat": 55.9284501421,
                "lng": -3.27318683036
            },{
                "name": "St Margaret's RC Primary School",
                "lat": 55.9875654278,
                "lng": -3.3881241952
            },{
                "name": "St Mark's RC Primary School",
                "lat": 55.9111967369,
                "lng": -3.22997007748
            },{
                "name": "St Mary's RC Primary School (Edin)",
                "lat": 55.9596427673,
                "lng": -3.18732860043
            },{
                "name": "St Mary's RC Primary School (Leith)",
                "lat": 55.971621802,
                "lng": -3.15981563387
            },{
                "name": "St Ninian's RC Primary School (Edin)",
                "lat": 55.9607103601,
                "lng": -3.15056695529
            },{
                "name": "St Peter's RC Primary School",
                "lat": 55.9293837626,
                "lng": -3.20448916331
            }]
        },
        'ndss': {
            'name': 'Secondary, non-denominational',
            'boundaries': 'ndss.kml',
            'locations': [{
                "name": "Balerno Community High School",
                "lat": 55.8868752194,
                "lng": -3.33825643769
            },{
                "name": "Boroughmuir High School",
                "lat": 55.9385261021,
                "lng": -3.20957573763
            },{
                "name": "Broughton High School",
                "lat": 55.9602802281,
                "lng": -3.22230012187
            },{
                "name": "Castlebrae High School",
                "lat": 55.9297549987,
                "lng": -3.13317947607
            },{
                "name": "Craigmount High School",
                "lat": 55.9452636827,
                "lng": -3.30481850423
            },{
                "name": "Craigroyston Community High School",
                "lat": 55.9734745121,
                "lng": -3.25413904044
            },{
                "name": "Currie High School",
                "lat": 55.8966761595,
                "lng": -3.32101825895
            },{
                "name": "Drummond Community High School",
                "lat": 55.9605538088,
                "lng": -3.18975926114
            },{
                "name": "Firrhill High School",
                "lat": 55.914924176,
                "lng": -3.23640799465
            },{
                "name": "Forrester High School",
                "lat": 55.9315840733,
                "lng": -3.28721542175
            },{
                "name": "Gracemount High School",
                "lat": 55.9041087275,
                "lng": -3.15176938978
            },{
                "name": "James Gillespie's High School",
                "lat": 55.9366701328,
                "lng": -3.19997677053
            },{
                "name": "Leith Academy",
                "lat": 55.9672975441,
                "lng": -3.16671952284
            },{
                "name": "Liberton High School",
                "lat": 55.9137314644,
                "lng": -3.15280668044
            },{
                "name": "Portobello High School",
                "lat": 55.9484405504,
                "lng": -3.12480588978
            },{
                "name": "Queensferry High School",
                "lat": 55.9857337455,
                "lng": -3.3848046069
            },{
                "name": "The Royal High Secondary School",
                "lat": 55.9639352005,
                "lng": -3.28434848993
            },{
                "name": "Trinity Academy",
                "lat": 55.9764935533,
                "lng": -3.19537664413
            },{
                "name": "Tynecastle High School",
                "lat": 55.9399209255,
                "lng": -3.23203316525
            },{
                "name": "Wester Hailes Education Centre",
                "lat": 55.917648272,
                "lng": -3.29056168175
            }]
        },
        'rcss': {
            'name': 'Secondary, Roman Catholic',
            'boundaries': 'rcss.kml',
            'locations': [{
                "name": "Holy Rood RC High School",
                "lat": 55.9406194433,
                "lng": -3.14375920927
            },{
                "name": "St Augustine's RC High School",
                "lat": 55.9329536996,
                "lng": -3.29028621486
            },{
                "name": "St Thomas of Aquin's RC High School",
                "lat": 55.9437010165,
                "lng": -3.19769643851
            }]
        }
    };

    this.updateMarkerCategory = function(category, map) {
        for (var i=0; i < category.markers.length; i++) {
            category.markers[i].setMap(map);
        }
    };

    this.chooseLayer = function(ev) {
        for (var cat in that.categories) {
            var category = that.categories[cat];
            if (cat === ev.target.value) {
                category.shape_layer.setMap(that.map);
                for (var i=0; i < category.markers.length; i++) {
                    category.markers[i].setMap(that.map);
                }
            } else {
                category.shape_layer.setMap(null);
                for (var j=0; j < category.markers.length; j++) {
                    category.markers[j].setMap(null);
                }
            }
        }
    };

    this.setup = function() {
        for (var cat in that.categories) {
            // create KML layers
            var category = that.categories[cat];
            category.shape_layer = new google.maps.KmlLayer({
                url: that.url_root + category.boundaries,
                preserveViewport: true
            });

            // create markers
            category.markers = [];
            for (var i=0; i < category.locations.length; i++) {
                var marker = new google.maps.Marker({
                    position: {
                        lat: category.locations[i].lat,
                        lng: category.locations[i].lng
                    },
                    title: category.locations[i].name,
                    animation: google.maps.Animation.DROP
                });

                // add infowindow so we know which is which
                google.maps.event.addListener(marker, 'click', function() {
                    that.iw.setContent('<h4>' + this.title + '</h4>');
                    that.iw.open(that.map, this);
                });
                category.markers.push(marker);
            }

            // populate selector
            var option = document.createElement('option');

            option.value = cat;
            option.innerHTML = category.name;
            that.selector.appendChild(option);
        }
    };

    // build & display interface
    this.controls = document.createElement('div');
    this.controls.id = 'catchment-controls';
    this.controls.style.cssText = 'background-color: #00aeef; box-shadow: 1px 1px 3px rgba(0,0,0,0.4); bottom: 33px; color: #fff; font-size: 1.2em; position: absolute; left: 10px; padding: 5px; text-shadow: 2px 2px 2px #0b94cb;';
    this.controls.innerHTML = '<label for="catchment-areas" style="display: block; float: none; font-weight: bold; margin: 0; padding: 0 2px 2px; width: auto;">Show school catchment areas: [ <a href="http://maniacyak.github.io/espc-edinburgh-school-catchments/">?</a> ]</label>';

    this.selector = document.createElement('select');
    this.selector.id = 'catchment-areas';
    this.selector.style.cssText = 'background-color: #f8f8f8; border: none; float: none; font-size: 13px; margin: 0; padding: 0;';
    this.selector.innerHTML = '<option value="">None</option>';
    this.selector.onchange = this.chooseLayer;

    this.iw = new google.maps.InfoWindow();

    this.setup();

    controls.appendChild(this.selector);
    document.getElementById('gmap').appendChild(controls);

})();
