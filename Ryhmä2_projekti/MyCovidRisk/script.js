/*
var maxBounds = L.latLngBounds(
L.latLng(62.999999, 35.999999),
L.latLng(66.249997, 20.952164)
);
*/

var map = L.map("map").setView([64.96, 29.59], 6);
L.tileLayer(
  "https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=nyWayRxsiz0odG92pLMX",
  {
    tileSize: 512,
    zoomOffset: -1,
    minZoom: 0.5,
    zoomDelta: 0.25,
    zoomSnap: 0.25,
    attribution:
      '\u003ca href="https://www.maptiler.com/copyright/" target="_blank"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href="https://www.openstreetmap.org/copyright" target="_blank"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e',
    crossOrigin: true,
  }
).addTo(map);

var control = new L.Control.Zoom({ position: 'topright' }).addTo(map);

var offset = map.getSize().x*0.14;

map.panBy(new L.Point(-offset, 0), {animate: false});


//SHP-alueet
var myGeoJSON = {
  type: "FeatureCollection",
  features: [
    {
      id: "6e7182c0-3f9b-4202-87d5-98a79040a13e",
      properties: { name: "HUS" },
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [23.05237959, 60.10765098],
            [23.07478148, 59.83861162],
            [23.70203461, 59.97340452],
            [24.50850292, 60.02940686],
            [25.62859778, 60.2857988],
            [26.52467368, 60.45193564],
            [26.25585091, 60.72695299],
            [25.87501865, 60.72695299],
            [25.60619589, 60.67213675],
            [25.4493826, 60.78167583],
            [25.15815794, 60.78167583],
            [24.5981105, 60.68310748],
            [24.32928774, 60.54019607],
            [23.83644599, 60.63920213],
            [23.70322059, 60.32672746],
            [23.67963271, 60.17456975],
            [23.05237959, 60.10765098],
          ],
        ],
      },
    },
    {
      id: "7125d637-9aef-424e-9592-edd8a437f521",
      properties: { name: "Keski-Pohjanmaa" },
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [24.37045639, 63.14660881],
            [24.72888674, 63.17695035],
            [25.0873171, 63.46861907],
            [24.75128864, 63.62827814],
            [24.2808488, 63.90553659],
            [24.03442792, 64.09213016],
            [23.74320326, 64.20933806],
            [23.60879187, 64.04314733],
            [22.98517389, 63.81937636],
            [23.18679097, 63.74019514],
            [23.362371, 63.63822717],
            [23.51918429, 63.52859603],
            [23.65359567, 63.43858334],
            [23.90001654, 63.3181249],
            [24.37045639, 63.14660881],
          ],
        ],
      },
    },
    {
      id: "5ce18b4c-fb4e-4e38-8242-4902062e97f9",
      properties: { name: "Etel\u00e4-Savo" },
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [28.08917135, 62.15877137],
            [27.57392771, 62.38806609],
            [26.8122632, 62.38806609],
            [26.54344043, 62.28405762],
            [26.20741197, 62.14830736],
            [26.45383284, 61.99091253],
            [26.00579489, 61.79037239],
            [26.38662715, 61.62047516],
            [26.25221576, 61.43893183],
            [26.54707558, 61.28076293],
            [26.86070214, 61.31303987],
            [26.88310404, 61.17293309],
            [27.1967306, 61.17293309],
            [27.30874009, 61.34528361],
            [27.01751542, 61.42039005],
            [28.5087613, 61.52461286],
            [28.4700036, 61.77978122],
            [27.86515237, 61.89608363],
            [28.20118083, 61.98039052],
            [28.08917135, 62.15877137],
          ],
        ],
      },
    },
    {
      id: "7bbcefc4-2734-47db-a7b5-90b1d40aa1ed",
      properties: { name: "Pohjois-Savo" },
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [26.09540248, 62.94351881],
            [26.54344043, 62.6259219],
            [26.8122632, 62.38806609],
            [27.57392771, 62.38806609],
            [28.08917135, 62.15877137],
            [28.31319032, 62.40882458],
            [28.44760171, 62.61561976],
            [28.82843396, 62.61561976],
            [28.73882637, 62.8107497],
            [29.05245293, 62.84144205],
            [29.05245293, 63.01476138],
            [28.67162068, 63.22744906],
            [28.69402258, 63.60836963],
            [28.35799412, 63.7375259],
            [27.68593719, 63.92523672],
            [26.90187079, 64.0627508],
            [26.27461766, 63.87596043],
            [26.34182335, 63.57848072],
            [26.11780438, 63.48862538],
            [26.36422525, 63.01476138],
            [26.09540248, 62.94351881],
          ],
        ],
      },
    },
    {
      id: "d12945f0-c2ab-4ffb-bfbc-730cd8569303",
      properties: { name: "It\u00e4-Savo" },
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [28.5087613, 61.52461286],
            [28.44760171, 61.77978122],
            [27.86515237, 61.89608363],
            [28.17877894, 62.0014309],
            [28.08917135, 62.15877137],
            [28.60441499, 62.1901417],
            [29.00764914, 62.1901417],
            [29.38848139, 62.27363696],
            [29.45568709, 61.99091253],
            [29.6262515, 61.71796217],
            [28.854471, 61.54872465],
            [28.5087613, 61.52461286],
          ],
        ],
      },
    },
    {
      id: "e9ae644c-97ea-43d9-aa35-168efe7b93da",
      properties: { name: "Satakunta" },
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [22.962772, 61.05389289],
            [22.60434164, 62.03579324],
            [22.87316441, 62.25559333],
            [22.60434164, 62.29727932],
            [22.04429421, 62.00426282],
            [21.64106005, 62.02528673],
            [21.2602278, 61.9832244],
            [21.66346195, 61.58072569],
            [21.48424677, 61.46322705],
            [21.46184487, 61.03220103],
            [21.75306954, 60.93440384],
            [22.1114999, 60.87994193],
            [22.962772, 61.05389289],
          ],
        ],
      },
    },
    {
      id: "c014952e-9c68-4b6e-a2a0-a6551fe52810",
      properties: { name: "Vaasa" },
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [21.2602278, 61.9832244],
            [21.64106005, 62.02528673],
            [21.77547144, 62.27644354],
            [21.57385436, 62.42199144],
            [21.82027523, 62.84419558],
            [22.15630369, 62.77253696],
            [22.62674354, 63.12909027],
            [22.73875302, 63.38112038],
            [23.02997769, 63.38112038],
            [23.36600615, 63.4913181],
            [23.65359567, 63.43858334],
            [22.98517389, 63.81937636],
            [22.60434164, 63.65085039],
            [22.40272456, 63.51130854],
            [22.26831318, 63.32083368],
            [21.82027523, 63.22007462],
            [21.19302211, 63.26042047],
            [21.2826297, 63.088561],
            [21.49278417, 63.0399152],
            [21.43944298, 62.90255405],
            [21.20829781, 62.86203075],
            [21.06605462, 62.6749015],
            [21.15495661, 62.41256636],
            [21.29719979, 62.33011173],
            [21.35054099, 62.23086659],
            [21.2602278, 61.9832244],
          ],
        ],
      },
    },
    {
      id: "ec4994da-43b5-4820-a112-76a5d32e1f13",
      properties: { name: "Etel\u00e4-Pohjanmaa" },
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [23.92605358, 62.47380198],
            [23.99325928, 62.3493057],
            [24.54967156, 62.52273944],
            [24.46006397, 62.92313187],
            [24.37045639, 63.14660881],
            [23.65359567, 63.43858334],
            [23.36600615, 63.4913181],
            [23.02997769, 63.38112038],
            [22.73875302, 63.38112038],
            [22.62674354, 63.12909027],
            [22.15630369, 62.77253696],
            [21.82027523, 62.84419558],
            [21.57385436, 62.42199144],
            [21.77547144, 62.27644354],
            [21.64106005, 62.02528673],
            [22.04429421, 62.00426282],
            [22.60434164, 62.29727932],
            [22.87316441, 62.25559333],
            [23.38840805, 62.41161856],
            [23.92605358, 62.47380198],
          ],
        ],
      },
    },
    {
      id: "d8101c32-14e1-42be-9155-ad87cefbcff6",
      properties: { name: "Keski-Suomi" },
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [26.00579489, 61.79037239],
            [26.45383284, 61.99091253],
            [26.20741197, 62.14830736],
            [26.54344043, 62.28405762],
            [26.8122632, 62.38806609],
            [26.54344043, 62.6259219],
            [26.09540248, 62.94351881],
            [26.36422525, 63.01476138],
            [26.11780438, 63.48862538],
            [25.80417782, 63.49862329],
            [25.22172848, 63.57848072],
            [25.0873171, 63.46861907],
            [24.72888674, 63.17695035],
            [24.37045639, 63.14660881],
            [24.46006397, 62.92313187],
            [24.54967156, 62.52273944],
            [23.99325928, 62.3493057],
            [24.46369912, 62.18250387],
            [24.91173707, 62.04629612],
            [25.00134466, 61.76144239],
            [25.46814936, 61.6736686],
            [26.00579489, 61.79037239],
          ],
        ],
      },
    },
    {
      id: "9883ca09-928e-4870-befc-b3ddd1f16657",
      properties: { name: "Kainuu" },
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [26.90187079, 64.0627508],
            [26.67785181, 64.32605186],
            [26.31942146, 64.50019963],
            [26.61064612, 64.66365991],
            [26.96907648, 64.7019787],
            [27.19309545, 64.83566848],
            [27.43951632, 64.94024683],
            [27.37231063, 65.11992506],
            [27.88755427, 65.11049845],
            [28.22358273, 65.27966663],
            [28.58201309, 65.30775638],
            [29.18686432, 65.50354825],
            [29.74691175, 65.50354825],
            [29.65730416, 65.28903321],
            [29.85892124, 65.13876824],
            [29.63490227, 65.06331524],
            [29.74691175, 64.83566848],
            [30.03813642, 64.77845391],
            [30.1949497, 64.62528691],
            [29.97093073, 64.53874919],
            [30.08294021, 64.36484694],
            [30.44137057, 64.26775662],
            [30.66538954, 64.0627508],
            [30.08294021, 63.7375259],
            [29.81411744, 63.71769399],
            [29.61250037, 63.87596043],
            [29.00764914, 63.83647707],
            [28.55961119, 63.87596043],
            [28.35799412, 63.7375259],
            [27.68593719, 63.92523672],
            [26.90187079, 64.0627508],
          ],
        ],
      },
    },
    {
      id: "a05281e0-bbbb-478e-a500-e42fd6e24756",
      properties: { name: "Lappi" },
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [26.31942146, 65.6794372],
            [26.7898613, 65.6794372],
            [27.10348786, 65.76233844],
            [27.37231063, 65.95474306],
            [27.6411334, 65.93648087],
            [27.86515237, 65.79909816],
            [28.44760171, 65.83580547],
            [28.4700036, 65.9821119],
            [28.80603206, 66.00034151],
            [28.55961119, 66.37119038],
            [28.78363017, 66.4608187],
            [29.25407001, 66.3981126],
            [29.52289278, 66.42500591],
            [29.20926622, 66.78966233],
            [29.03005104, 66.87779147],
            [29.11965863, 67.00064105],
            [29.59009847, 67.33098482],
            [29.92612693, 67.49446679],
            [30.03813642, 67.67385677],
            [29.65730416, 67.83499216],
            [29.41088329, 68.07044299],
            [28.76122827, 68.18727501],
            [28.4700036, 68.49320118],
            [28.82843396, 68.81933279],
            [28.53720929, 68.90012568],
            [28.91804155, 69.04481219],
            [28.91804155, 69.22831083],
            [29.3436776, 69.49675856],
            [29.11965863, 69.69979888],
            [28.5148074, 69.78511965],
            [28.33559222, 69.88551032],
            [27.95475996, 70.06959258],
            [27.6635353, 70.10011544],
            [27.32750684, 69.94705148],
            [27.08108597, 69.90860944],
            [26.65544992, 69.93168313],
            [26.40902905, 69.87780495],
            [26.34182335, 69.74638015],
            [25.9609911, 69.69202536],
            [25.87138351, 69.44176263],
            [25.82657971, 69.28385277],
            [25.80417782, 69.10082291],
            [25.82657971, 68.99668893],
            [25.66976643, 68.86784388],
            [25.40094366, 68.89205965],
            [25.19932659, 68.78693306],
            [25.1321209, 68.68130715],
            [24.88570002, 68.56699546],
            [24.66168105, 68.66501256],
            [24.2808488, 68.72199172],
            [23.85521275, 68.81933279],
            [23.74320326, 68.72199172],
            [23.22795962, 68.62422414],
            [23.02634254, 68.69758987],
            [22.71271598, 68.68130715],
            [22.44389321, 68.75448605],
            [22.21987424, 68.95650562],
            [21.74943439, 69.26006649],
            [21.25659265, 69.28385277],
            [21.07737747, 69.1885509],
            [21.16698506, 69.06883432],
            [20.8085547, 69.07683585],
            [20.8533585, 68.96454815],
            [20.92056419, 68.86784388],
            [21.25659265, 68.80313883],
            [21.59262111, 68.64870611],
            [21.92864957, 68.58336139],
            [22.10786475, 68.47676961],
            [22.39908942, 68.46032608],
            [22.80232357, 68.38618205],
            [23.16075393, 68.25377011],
            [23.22795962, 68.0955284],
            [23.63119377, 68.00341496],
            [23.58638998, 67.89407901],
            [23.49678239, 67.77575536],
            [23.56398808, 67.61421135],
            [23.47438049, 67.46014266],
            [23.74320326, 67.41716773],
            [23.72080136, 67.27912562],
            [23.56398808, 67.1576836],
            [23.74320326, 66.98312897],
            [23.94482034, 66.88658697],
            [23.96722223, 66.73663262],
            [23.92241844, 66.60355736],
            [24.236045, 66.55903949],
            [24.41526018, 66.6391142],
            [24.79609244, 66.78966233],
            [24.95290572, 66.90416849],
            [25.28893418, 66.98312897],
            [25.80417782, 66.77199846],
            [25.42334556, 66.50551255],
            [25.80417782, 66.33524904],
            [26.92427268, 66.24517017],
            [26.38662715, 66.19096789],
            [26.61064612, 66.08221377],
            [26.36422525, 65.97299221],
            [26.31942146, 65.6794372],
          ],
        ],
      },
    },
    {
      id: "3bb5d53a-bff0-4c79-8cf7-aa57310fe7e5",
      properties: { name: "Kanta-H\u00e4me" },
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [24.32928774, 60.54019607],
            [24.5981105, 60.68310748],
            [25.15815794, 60.78167583],
            [25.18055984, 60.94528506],
            [25.27016743, 61.08640287],
            [25.20296173, 61.25922652],
            [24.93413897, 61.33453939],
            [23.16438907, 60.84722011],
            [23.41080994, 60.71599722],
            [23.83644599, 60.63920213],
            [24.32928774, 60.54019607],
          ],
        ],
      },
    },
    {
      id: "4efab3f0-a85e-4a1e-ad6b-01eb8998ca95",
      properties: { name: "Pohjois-Karjala" },
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [29.38848139, 62.27363696],
            [29.00764914, 62.1901417],
            [29.00764914, 62.1901417],
            [28.60441499, 62.1901417],
            [28.08917135, 62.15877137],
            [28.31319032, 62.40882458],
            [28.44760171, 62.61561976],
            [28.82843396, 62.61561976],
            [28.73882637, 62.8107497],
            [29.05245293, 62.84144205],
            [29.05245293, 63.01476138],
            [28.67162068, 63.22744906],
            [28.69402258, 63.60836963],
            [28.35799412, 63.7375259],
            [28.55961119, 63.87596043],
            [29.00764914, 63.83647707],
            [29.61250037, 63.87596043],
            [29.81411744, 63.71769399],
            [30.08294021, 63.7375259],
            [30.37416488, 63.5086177],
            [30.77739903, 63.40851609],
            [30.97901611, 63.26778462],
            [31.29264267, 63.19716041],
            [31.33744646, 63.04524076],
            [31.56146544, 62.87210239],
            [31.38225026, 62.64651545],
            [31.27024077, 62.48136611],
            [31.0686237, 62.37768144],
            [30.88940852, 62.25278481],
            [30.46377247, 62.05396834],
            [30.01936967, 61.80381046],
            [29.6262515, 61.71796217],
            [29.45568709, 61.99091253],
            [29.38848139, 62.27363696],
          ],
        ],
      },
    },
    {
      id: "a78b7cb7-36e6-4254-9379-985c7af96079",
      properties: { name: "Etel\u00e4-Karjala" },
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [27.1967306, 61.17293309],
            [27.30874009, 61.34528361],
            [27.01751542, 61.42039005],
            [28.854471, 61.54872465],
            [30.01936967, 61.80381046],
            [27.98079701, 60.63920213],
            [27.39834768, 60.87994193],
            [27.1967306, 61.17293309],
          ],
        ],
      },
    },
    {
      id: "8f3792e6-b929-45a8-b8d9-cf270fae2397",
      properties: { name: "P\u00e4ij\u00e4t-H\u00e4me" },
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [25.00134466, 61.76144239],
            [25.46814936, 61.6736686],
            [25.9609911, 61.79037239],
            [26.38662715, 61.62047516],
            [26.25221576, 61.43893183],
            [26.54707558, 61.28076293],
            [26.3006547, 61.15132275],
            [26.25585091, 60.94528506],
            [26.03183194, 60.84722011],
            [26.25585091, 60.72695299],
            [25.87501865, 60.72695299],
            [25.60619589, 60.67213675],
            [25.4493826, 60.78167583],
            [25.15815794, 60.78167583],
            [25.18055984, 60.94528506],
            [25.27016743, 61.08640287],
            [25.20296173, 61.25922652],
            [24.93413897, 61.33453939],
            [24.93413897, 61.52737228],
            [25.00134466, 61.76144239],
          ],
        ],
      },
    },
    {
      id: "76d99c52-0e4e-46c2-9585-698247acaf9c",
      properties: { name: "Pirkanmaa" },
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [23.23159477, 60.9996354],
            [23.63482892, 60.94528506],
            [24.19487635, 61.11887948],
            [24.6429143, 61.24845278],
            [24.93413897, 61.33453939],
            [24.93413897, 61.52737228],
            [25.00134466, 61.76144239],
            [24.91173707, 62.04629612],
            [24.46369912, 62.18250387],
            [23.99325928, 62.3493057],
            [23.92605358, 62.47380198],
            [23.38840805, 62.41161856],
            [22.87316441, 62.25559333],
            [22.60434164, 62.03579324],
            [22.73875302, 61.83554821],
            [22.76115492, 61.49531619],
            [22.82836061, 61.36676101],
            [22.9403701, 61.25922652],
            [22.9403701, 61.03220103],
            [23.23159477, 60.9996354],
          ],
        ],
      },
    },
    {
      id: "7754387d-27c2-4581-b8ec-e25a49fd2bbf",
      properties: { name: "L\u00e4nsi-Pohja" },
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [25.22172848, 65.63326594],
            [25.33373797, 65.73473424],
            [25.69216833, 65.75314032],
            [26.09540248, 65.81745836],
            [26.31942146, 65.6794372],
            [26.36422525, 65.97299221],
            [26.61064612, 66.08221377],
            [26.38662715, 66.19096789],
            [26.92427268, 66.24517017],
            [25.80417782, 66.33524904],
            [25.42334556, 66.50551255],
            [25.80417782, 66.77199846],
            [25.28893418, 66.98312897],
            [24.95290572, 66.90416849],
            [24.79609244, 66.78966233],
            [24.41526018, 66.6391142],
            [24.236045, 66.55903949],
            [23.92241844, 66.60355736],
            [23.65359567, 66.48764462],
            [23.69839946, 66.22711567],
            [24.01202603, 66.13664916],
            [24.05682982, 65.99122834],
            [24.16883931, 65.79909816],
            [24.46006397, 65.81745836],
            [24.63927915, 65.71631503],
            [24.86329813, 65.64250677],
            [25.22172848, 65.63326594],
          ],
        ],
      },
    },
    {
      id: "3dd81c1e-9d45-4e30-8b66-9f261fffb49d",
      properties: { name: "Kymenlaakso" },
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [26.52467368, 60.45193564],
            [27.98079701, 60.63920213],
            [27.39834768, 60.87994193],
            [27.1967306, 61.17293309],
            [26.88310404, 61.17293309],
            [26.86070214, 61.31303987],
            [26.54707558, 61.28076293],
            [26.3006547, 61.15132275],
            [26.25585091, 60.94528506],
            [26.03183194, 60.84722011],
            [26.25585091, 60.72695299],
            [26.52467368, 60.45193564],
          ],
        ],
      },
    },
    {
      id: "5688b7e0-5706-4827-ac62-a9ad4c6a9d86",
      properties: { name: "Varsinais-Suomi" },
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [23.05237959, 60.10765098],
            [23.67963271, 60.17456975],
            [23.72443651, 60.46298134],
            [23.83644599, 60.63920213],
            [23.41080994, 60.71599722],
            [23.16438907, 60.84722011],
            [23.50041753, 60.94528506],
            [22.962772, 61.05389289],
            [22.20110749, 60.87994193],
            [21.46184487, 61.03220103],
            [21.30503159, 60.62821644],
            [21.2826297, 60.42983298],
            [21.52905057, 60.08531445],
            [22.24591128, 60.14112738],
            [22.46993026, 60.0070173],
            [22.80595872, 60.19684577],
            [23.05237959, 60.10765098],
          ],
        ],
      },
    },
    {
      id: "563439bf-0e3b-46c4-b067-0de3166599f3",
      properties: { name: "Pohjois-Pohjanmaa" },
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [26.90187079, 64.0627508],
            [26.67785181, 64.32605186],
            [26.31942146, 64.50019963],
            [26.61064612, 64.66365991],
            [26.96907648, 64.7019787],
            [27.19309545, 64.83566848],
            [27.43951632, 64.94024683],
            [27.37231063, 65.11992506],
            [27.88755427, 65.11049845],
            [28.22358273, 65.27966663],
            [28.58201309, 65.30775638],
            [29.18686432, 65.50354825],
            [29.74691175, 65.50354825],
            [29.70210796, 65.6147744],
            [30.03813642, 65.68866158],
            [30.03813642, 66.0458586],
            [29.52289278, 66.42500591],
            [29.25407001, 66.3981126],
            [28.78363017, 66.4608187],
            [28.55961119, 66.37119038],
            [28.76122827, 66.15476836],
            [28.80603206, 66.00034151],
            [28.4700036, 65.9821119],
            [28.44760171, 65.83580547],
            [27.86515237, 65.79909816],
            [27.6411334, 65.93648087],
            [27.37231063, 65.95474306],
            [27.10348786, 65.76233844],
            [26.7898613, 65.6794372],
            [26.31942146, 65.6794372],
            [26.09540248, 65.81745836],
            [25.69216833, 65.75314032],
            [25.33373797, 65.73473424],
            [25.22172848, 65.63326594],
            [25.33373797, 65.47566741],
            [25.33373797, 65.12934832],
            [25.28893418, 64.92126287],
            [25.04251331, 64.84519244],
            [24.68408295, 64.80707638],
            [24.10163362, 64.41326392],
            [23.74320326, 64.20933806],
            [24.03442792, 64.09213016],
            [24.2808488, 63.90553659],
            [24.75128864, 63.62827814],
            [25.0873171, 63.46861907],
            [25.22172848, 63.57848072],
            [25.80417782, 63.49862329],
            [26.11780438, 63.48862538],
            [26.34182335, 63.57848072],
            [26.27461766, 63.87596043],
            [26.90187079, 64.0627508],
          ],
        ],
      },
    },
  ],
};

L.geoJSON(myGeoJSON).addTo(map)

//-- markers --//
var finMarker = L.marker([64.9147, 26.0673]).addTo(map);
finMarker
  .bindPopup("<b> Finland </b><br><b> 45,482 Confirmed Covid-19 cases</b>")
  .openPopup();

//map.setMaxBounds(maxBounds);
map.fitBounds(maxBounds);
