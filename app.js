const CITY_LOCATIONS = [
  { name: "臺北市", lat: 25.033, lon: 121.5654 },
  { name: "新北市", lat: 25.012, lon: 121.4657 },
  { name: "基隆市", lat: 25.1276, lon: 121.7392 },
  { name: "桃園市", lat: 24.9936, lon: 121.301 },
  { name: "新竹市", lat: 24.8138, lon: 120.9675 },
  { name: "新竹縣", lat: 24.8387, lon: 121.0177 },
  { name: "苗栗縣", lat: 24.5602, lon: 120.8214 },
  { name: "臺中市", lat: 24.1477, lon: 120.6736 },
  { name: "彰化縣", lat: 24.0838, lon: 120.5384 },
  { name: "南投縣", lat: 23.9609, lon: 120.9719 },
  { name: "雲林縣", lat: 23.7092, lon: 120.4313 },
  { name: "嘉義市", lat: 23.4801, lon: 120.4491 },
  { name: "嘉義縣", lat: 23.4518, lon: 120.2555 },
  { name: "臺南市", lat: 22.9997, lon: 120.227 },
  { name: "高雄市", lat: 22.6273, lon: 120.3014 },
  { name: "屏東縣", lat: 22.5519, lon: 120.5488 },
  { name: "宜蘭縣", lat: 24.7021, lon: 121.7378 },
  { name: "花蓮縣", lat: 23.9872, lon: 121.6015 },
  { name: "臺東縣", lat: 22.7583, lon: 121.1444 },
  { name: "澎湖縣", lat: 23.5712, lon: 119.5793 },
  { name: "金門縣", lat: 24.4492, lon: 118.3765 },
  { name: "連江縣", lat: 26.1543, lon: 119.9517 }
];

const TOWNSHIP_LOCATIONS = [
  { city: "臺北市", town: "中正區", lat: 25.0324, lon: 121.5183 },
  { city: "臺北市", town: "大同區", lat: 25.0627, lon: 121.5113 },
  { city: "臺北市", town: "中山區", lat: 25.0689, lon: 121.5337 },
  { city: "臺北市", town: "松山區", lat: 25.0542, lon: 121.5638 },
  { city: "臺北市", town: "大安區", lat: 25.0263, lon: 121.5435 },
  { city: "臺北市", town: "萬華區", lat: 25.0358, lon: 121.4997 },
  { city: "臺北市", town: "信義區", lat: 25.0335, lon: 121.5627 },
  { city: "臺北市", town: "士林區", lat: 25.0928, lon: 121.5244 },
  { city: "臺北市", town: "北投區", lat: 25.1323, lon: 121.5015 },
  { city: "臺北市", town: "內湖區", lat: 25.0697, lon: 121.5891 },
  { city: "臺北市", town: "南港區", lat: 25.0546, lon: 121.6068 },
  { city: "臺北市", town: "文山區", lat: 24.9898, lon: 121.5705 },
  { city: "新北市", town: "板橋區", lat: 25.0119, lon: 121.4628 },
  { city: "新北市", town: "三重區", lat: 25.062, lon: 121.487 },
  { city: "新北市", town: "中和區", lat: 24.999, lon: 121.499 },
  { city: "新北市", town: "永和區", lat: 25.007, lon: 121.514 },
  { city: "新北市", town: "新莊區", lat: 25.0359, lon: 121.432 },
  { city: "新北市", town: "新店區", lat: 24.9674, lon: 121.5417 },
  { city: "新北市", town: "土城區", lat: 24.9722, lon: 121.443 },
  { city: "新北市", town: "蘆洲區", lat: 25.0847, lon: 121.4737 },
  { city: "新北市", town: "汐止區", lat: 25.0617, lon: 121.6617 },
  { city: "新北市", town: "樹林區", lat: 24.99, lon: 121.424 },
  { city: "新北市", town: "淡水區", lat: 25.1695, lon: 121.4441 },
  { city: "新北市", town: "三峽區", lat: 24.934, lon: 121.369 },
  { city: "新北市", town: "瑞芳區", lat: 25.108, lon: 121.805 },
  { city: "新北市", town: "五股區", lat: 25.083, lon: 121.433 },
  { city: "新北市", town: "泰山區", lat: 25.059, lon: 121.43 },
  { city: "新北市", town: "林口區", lat: 25.077, lon: 121.388 },
  { city: "新北市", town: "鶯歌區", lat: 24.954, lon: 121.353 },
  { city: "新北市", town: "三芝區", lat: 25.258, lon: 121.501 },
  { city: "新北市", town: "石門區", lat: 25.292, lon: 121.567 },
  { city: "新北市", town: "八里區", lat: 25.146, lon: 121.398 },
  { city: "新北市", town: "平溪區", lat: 25.026, lon: 121.738 },
  { city: "新北市", town: "雙溪區", lat: 25.037, lon: 121.866 },
  { city: "新北市", town: "貢寮區", lat: 25.022, lon: 121.908 },
  { city: "新北市", town: "金山區", lat: 25.223, lon: 121.638 },
  { city: "新北市", town: "萬里區", lat: 25.18, lon: 121.689 },
  { city: "新北市", town: "深坑區", lat: 25.002, lon: 121.615 },
  { city: "新北市", town: "石碇區", lat: 24.991, lon: 121.657 },
  { city: "新北市", town: "坪林區", lat: 24.936, lon: 121.711 },
  { city: "新北市", town: "烏來區", lat: 24.863, lon: 121.551 },
  { city: "基隆市", town: "中正區", lat: 25.151, lon: 121.774 },
  { city: "基隆市", town: "七堵區", lat: 25.095, lon: 121.713 },
  { city: "基隆市", town: "暖暖區", lat: 25.08, lon: 121.745 },
  { city: "基隆市", town: "仁愛區", lat: 25.127, lon: 121.741 },
  { city: "基隆市", town: "中山區", lat: 25.149, lon: 121.73 },
  { city: "基隆市", town: "安樂區", lat: 25.141, lon: 121.723 },
  { city: "基隆市", town: "信義區", lat: 25.129, lon: 121.753 },
  { city: "桃園市", town: "桃園區", lat: 24.9936, lon: 121.301 },
  { city: "桃園市", town: "中壢區", lat: 24.9536, lon: 121.2258 },
  { city: "桃園市", town: "平鎮區", lat: 24.944, lon: 121.216 },
  { city: "桃園市", town: "八德區", lat: 24.928, lon: 121.284 },
  { city: "桃園市", town: "楊梅區", lat: 24.908, lon: 121.145 },
  { city: "桃園市", town: "蘆竹區", lat: 25.049, lon: 121.291 },
  { city: "桃園市", town: "大溪區", lat: 24.884, lon: 121.287 },
  { city: "桃園市", town: "龍潭區", lat: 24.864, lon: 121.212 },
  { city: "桃園市", town: "龜山區", lat: 25.019, lon: 121.365 },
  { city: "桃園市", town: "大園區", lat: 25.064, lon: 121.197 },
  { city: "桃園市", town: "觀音區", lat: 25.036, lon: 121.082 },
  { city: "桃園市", town: "新屋區", lat: 24.972, lon: 121.105 },
  { city: "桃園市", town: "復興區", lat: 24.816, lon: 121.351 },
  { city: "新竹市", town: "東區", lat: 24.8018, lon: 120.9716 },
  { city: "新竹市", town: "北區", lat: 24.805, lon: 120.968 },
  { city: "新竹市", town: "香山區", lat: 24.771, lon: 120.959 },
  { city: "新竹縣", town: "竹北市", lat: 24.8387, lon: 121.0177 },
  { city: "新竹縣", town: "竹東鎮", lat: 24.736, lon: 121.088 },
  { city: "新竹縣", town: "新埔鎮", lat: 24.827, lon: 121.074 },
  { city: "新竹縣", town: "關西鎮", lat: 24.792, lon: 121.177 },
  { city: "新竹縣", town: "湖口鄉", lat: 24.903, lon: 121.045 },
  { city: "新竹縣", town: "新豐鄉", lat: 24.9, lon: 120.986 },
  { city: "新竹縣", town: "芎林鄉", lat: 24.776, lon: 121.078 },
  { city: "新竹縣", town: "橫山鄉", lat: 24.718, lon: 121.137 },
  { city: "新竹縣", town: "北埔鄉", lat: 24.698, lon: 121.056 },
  { city: "新竹縣", town: "寶山鄉", lat: 24.743, lon: 120.999 },
  { city: "新竹縣", town: "峨眉鄉", lat: 24.688, lon: 121.017 },
  { city: "新竹縣", town: "尖石鄉", lat: 24.705, lon: 121.281 },
  { city: "新竹縣", town: "五峰鄉", lat: 24.632, lon: 121.119 },
  { city: "苗栗縣", town: "苗栗市", lat: 24.5602, lon: 120.8214 },
  { city: "苗栗縣", town: "頭份市", lat: 24.688, lon: 120.907 },
  { city: "苗栗縣", town: "竹南鎮", lat: 24.686, lon: 120.873 },
  { city: "苗栗縣", town: "後龍鎮", lat: 24.615, lon: 120.789 },
  { city: "苗栗縣", town: "通霄鎮", lat: 24.491, lon: 120.679 },
  { city: "苗栗縣", town: "苑裡鎮", lat: 24.443, lon: 120.651 },
  { city: "苗栗縣", town: "卓蘭鎮", lat: 24.311, lon: 120.853 },
  { city: "苗栗縣", town: "大湖鄉", lat: 24.422, lon: 120.868 },
  { city: "苗栗縣", town: "公館鄉", lat: 24.502, lon: 120.828 },
  { city: "苗栗縣", town: "銅鑼鄉", lat: 24.487, lon: 120.786 },
  { city: "苗栗縣", town: "南庄鄉", lat: 24.597, lon: 121.0 },
  { city: "苗栗縣", town: "三義鄉", lat: 24.354, lon: 120.773 },
  { city: "苗栗縣", town: "造橋鄉", lat: 24.645, lon: 120.876 },
  { city: "苗栗縣", town: "頭屋鄉", lat: 24.575, lon: 120.851 },
  { city: "苗栗縣", town: "三灣鄉", lat: 24.656, lon: 120.952 },
  { city: "苗栗縣", town: "西湖鄉", lat: 24.547, lon: 120.761 },
  { city: "苗栗縣", town: "獅潭鄉", lat: 24.541, lon: 120.921 },
  { city: "苗栗縣", town: "泰安鄉", lat: 24.415, lon: 120.908 },
  { city: "臺中市", town: "中區", lat: 24.1417, lon: 120.68 },
  { city: "臺中市", town: "東區", lat: 24.137, lon: 120.697 },
  { city: "臺中市", town: "南區", lat: 24.121, lon: 120.664 },
  { city: "臺中市", town: "西區", lat: 24.143, lon: 120.662 },
  { city: "臺中市", town: "北區", lat: 24.158, lon: 120.681 },
  { city: "臺中市", town: "西屯區", lat: 24.1769, lon: 120.6399 },
  { city: "臺中市", town: "南屯區", lat: 24.141, lon: 120.637 },
  { city: "臺中市", town: "北屯區", lat: 24.1892, lon: 120.6863 },
  { city: "臺中市", town: "豐原區", lat: 24.252, lon: 120.72 },
  { city: "臺中市", town: "東勢區", lat: 24.258, lon: 120.828 },
  { city: "臺中市", town: "大里區", lat: 24.099, lon: 120.678 },
  { city: "臺中市", town: "太平區", lat: 24.124, lon: 120.721 },
  { city: "臺中市", town: "清水區", lat: 24.268, lon: 120.569 },
  { city: "臺中市", town: "沙鹿區", lat: 24.234, lon: 120.569 },
  { city: "臺中市", town: "大甲區", lat: 24.349, lon: 120.622 },
  { city: "臺中市", town: "烏日區", lat: 24.104, lon: 120.623 },
  { city: "臺中市", town: "大雅區", lat: 24.227, lon: 120.647 },
  { city: "臺中市", town: "潭子區", lat: 24.209, lon: 120.705 },
  { city: "臺中市", town: "梧棲區", lat: 24.257, lon: 120.53 },
  { city: "臺中市", town: "龍井區", lat: 24.201, lon: 120.546 },
  { city: "臺中市", town: "大肚區", lat: 24.154, lon: 120.543 },
  { city: "臺中市", town: "霧峰區", lat: 24.062, lon: 120.7 },
  { city: "臺中市", town: "后里區", lat: 24.305, lon: 120.715 },
  { city: "臺中市", town: "神岡區", lat: 24.256, lon: 120.661 },
  { city: "臺中市", town: "石岡區", lat: 24.275, lon: 120.779 },
  { city: "臺中市", town: "新社區", lat: 24.234, lon: 120.808 },
  { city: "臺中市", town: "外埔區", lat: 24.332, lon: 120.655 },
  { city: "臺中市", town: "大安區", lat: 24.347, lon: 120.586 },
  { city: "臺中市", town: "和平區", lat: 24.175, lon: 121.14 },
  { city: "彰化縣", town: "彰化市", lat: 24.0685, lon: 120.5575 },
  { city: "彰化縣", town: "員林市", lat: 23.959, lon: 120.572 },
  { city: "彰化縣", town: "和美鎮", lat: 24.114, lon: 120.494 },
  { city: "彰化縣", town: "鹿港鎮", lat: 24.057, lon: 120.435 },
  { city: "彰化縣", town: "溪湖鎮", lat: 23.962, lon: 120.479 },
  { city: "彰化縣", town: "田中鎮", lat: 23.861, lon: 120.581 },
  { city: "彰化縣", town: "北斗鎮", lat: 23.871, lon: 120.525 },
  { city: "彰化縣", town: "二林鎮", lat: 23.899, lon: 120.367 },
  { city: "彰化縣", town: "線西鄉", lat: 24.131, lon: 120.467 },
  { city: "彰化縣", town: "伸港鄉", lat: 24.146, lon: 120.486 },
  { city: "彰化縣", town: "福興鄉", lat: 24.047, lon: 120.431 },
  { city: "彰化縣", town: "秀水鄉", lat: 24.033, lon: 120.504 },
  { city: "彰化縣", town: "花壇鄉", lat: 24.03, lon: 120.547 },
  { city: "彰化縣", town: "芬園鄉", lat: 24.014, lon: 120.63 },
  { city: "彰化縣", town: "大村鄉", lat: 23.992, lon: 120.545 },
  { city: "彰化縣", town: "埔鹽鄉", lat: 24.0, lon: 120.463 },
  { city: "彰化縣", town: "埔心鄉", lat: 23.953, lon: 120.544 },
  { city: "彰化縣", town: "永靖鄉", lat: 23.924, lon: 120.548 },
  { city: "彰化縣", town: "社頭鄉", lat: 23.897, lon: 120.581 },
  { city: "彰化縣", town: "二水鄉", lat: 23.809, lon: 120.618 },
  { city: "彰化縣", town: "田尾鄉", lat: 23.899, lon: 120.522 },
  { city: "彰化縣", town: "埤頭鄉", lat: 23.846, lon: 120.462 },
  { city: "彰化縣", town: "芳苑鄉", lat: 23.924, lon: 120.32 },
  { city: "彰化縣", town: "大城鄉", lat: 23.852, lon: 120.311 },
  { city: "彰化縣", town: "竹塘鄉", lat: 23.86, lon: 120.428 },
  { city: "彰化縣", town: "溪州鄉", lat: 23.851, lon: 120.499 },
  { city: "南投縣", town: "南投市", lat: 23.908, lon: 120.6853 },
  { city: "南投縣", town: "埔里鎮", lat: 23.966, lon: 120.968 },
  { city: "南投縣", town: "草屯鎮", lat: 23.974, lon: 120.683 },
  { city: "南投縣", town: "竹山鎮", lat: 23.757, lon: 120.675 },
  { city: "南投縣", town: "集集鎮", lat: 23.829, lon: 120.785 },
  { city: "南投縣", town: "名間鄉", lat: 23.838, lon: 120.703 },
  { city: "南投縣", town: "鹿谷鄉", lat: 23.745, lon: 120.752 },
  { city: "南投縣", town: "中寮鄉", lat: 23.879, lon: 120.766 },
  { city: "南投縣", town: "魚池鄉", lat: 23.896, lon: 120.94 },
  { city: "南投縣", town: "國姓鄉", lat: 24.041, lon: 120.858 },
  { city: "南投縣", town: "水里鄉", lat: 23.811, lon: 120.855 },
  { city: "南投縣", town: "信義鄉", lat: 23.567, lon: 120.987 },
  { city: "南投縣", town: "仁愛鄉", lat: 24.023, lon: 121.133 },
  { city: "雲林縣", town: "斗六市", lat: 23.7119, lon: 120.5442 },
  { city: "雲林縣", town: "斗南鎮", lat: 23.679, lon: 120.477 },
  { city: "雲林縣", town: "虎尾鎮", lat: 23.708, lon: 120.433 },
  { city: "雲林縣", town: "西螺鎮", lat: 23.798, lon: 120.462 },
  { city: "雲林縣", town: "土庫鎮", lat: 23.677, lon: 120.393 },
  { city: "雲林縣", town: "北港鎮", lat: 23.575, lon: 120.302 },
  { city: "雲林縣", town: "古坑鄉", lat: 23.644, lon: 120.562 },
  { city: "雲林縣", town: "大埤鄉", lat: 23.646, lon: 120.43 },
  { city: "雲林縣", town: "莿桐鄉", lat: 23.761, lon: 120.502 },
  { city: "雲林縣", town: "林內鄉", lat: 23.759, lon: 120.615 },
  { city: "雲林縣", town: "二崙鄉", lat: 23.771, lon: 120.415 },
  { city: "雲林縣", town: "崙背鄉", lat: 23.76, lon: 120.354 },
  { city: "雲林縣", town: "麥寮鄉", lat: 23.754, lon: 120.252 },
  { city: "雲林縣", town: "東勢鄉", lat: 23.675, lon: 120.253 },
  { city: "雲林縣", town: "褒忠鄉", lat: 23.697, lon: 120.311 },
  { city: "雲林縣", town: "臺西鄉", lat: 23.702, lon: 120.199 },
  { city: "雲林縣", town: "元長鄉", lat: 23.649, lon: 120.316 },
  { city: "雲林縣", town: "四湖鄉", lat: 23.637, lon: 120.226 },
  { city: "雲林縣", town: "口湖鄉", lat: 23.583, lon: 120.185 },
  { city: "雲林縣", town: "水林鄉", lat: 23.573, lon: 120.248 },
  { city: "嘉義市", town: "東區", lat: 23.4786, lon: 120.4586 },
  { city: "嘉義市", town: "西區", lat: 23.479, lon: 120.434 },
  { city: "嘉義縣", town: "太保市", lat: 23.459, lon: 120.332 },
  { city: "嘉義縣", town: "朴子市", lat: 23.465, lon: 120.247 },
  { city: "嘉義縣", town: "布袋鎮", lat: 23.378, lon: 120.158 },
  { city: "嘉義縣", town: "大林鎮", lat: 23.604, lon: 120.454 },
  { city: "嘉義縣", town: "民雄鄉", lat: 23.551, lon: 120.429 },
  { city: "嘉義縣", town: "溪口鄉", lat: 23.603, lon: 120.395 },
  { city: "嘉義縣", town: "新港鄉", lat: 23.555, lon: 120.348 },
  { city: "嘉義縣", town: "六腳鄉", lat: 23.493, lon: 120.29 },
  { city: "嘉義縣", town: "東石鄉", lat: 23.459, lon: 120.154 },
  { city: "嘉義縣", town: "義竹鄉", lat: 23.336, lon: 120.244 },
  { city: "嘉義縣", town: "鹿草鄉", lat: 23.408, lon: 120.309 },
  { city: "嘉義縣", town: "水上鄉", lat: 23.429, lon: 120.398 },
  { city: "嘉義縣", town: "中埔鄉", lat: 23.425, lon: 120.523 },
  { city: "嘉義縣", town: "竹崎鄉", lat: 23.524, lon: 120.551 },
  { city: "嘉義縣", town: "梅山鄉", lat: 23.545, lon: 120.644 },
  { city: "嘉義縣", town: "番路鄉", lat: 23.465, lon: 120.555 },
  { city: "嘉義縣", town: "大埔鄉", lat: 23.296, lon: 120.591 },
  { city: "嘉義縣", town: "阿里山鄉", lat: 23.508, lon: 120.805 },
  { city: "臺南市", town: "中西區", lat: 22.992, lon: 120.205 },
  { city: "臺南市", town: "東區", lat: 22.981, lon: 120.228 },
  { city: "臺南市", town: "南區", lat: 22.961, lon: 120.188 },
  { city: "臺南市", town: "北區", lat: 23.01, lon: 120.207 },
  { city: "臺南市", town: "安平區", lat: 22.9997, lon: 120.1615 },
  { city: "臺南市", town: "安南區", lat: 23.047, lon: 120.185 },
  { city: "臺南市", town: "永康區", lat: 23.0265, lon: 120.2531 },
  { city: "臺南市", town: "歸仁區", lat: 22.967, lon: 120.294 },
  { city: "臺南市", town: "新化區", lat: 23.038, lon: 120.311 },
  { city: "臺南市", town: "左鎮區", lat: 23.057, lon: 120.407 },
  { city: "臺南市", town: "玉井區", lat: 23.124, lon: 120.461 },
  { city: "臺南市", town: "楠西區", lat: 23.179, lon: 120.485 },
  { city: "臺南市", town: "南化區", lat: 23.043, lon: 120.477 },
  { city: "臺南市", town: "仁德區", lat: 22.972, lon: 120.252 },
  { city: "臺南市", town: "關廟區", lat: 22.963, lon: 120.328 },
  { city: "臺南市", town: "龍崎區", lat: 22.966, lon: 120.371 },
  { city: "臺南市", town: "官田區", lat: 23.194, lon: 120.315 },
  { city: "臺南市", town: "麻豆區", lat: 23.182, lon: 120.248 },
  { city: "臺南市", town: "佳里區", lat: 23.165, lon: 120.177 },
  { city: "臺南市", town: "西港區", lat: 23.124, lon: 120.203 },
  { city: "臺南市", town: "七股區", lat: 23.141, lon: 120.101 },
  { city: "臺南市", town: "將軍區", lat: 23.199, lon: 120.127 },
  { city: "臺南市", town: "學甲區", lat: 23.232, lon: 120.181 },
  { city: "臺南市", town: "北門區", lat: 23.268, lon: 120.125 },
  { city: "臺南市", town: "新營區", lat: 23.31, lon: 120.317 },
  { city: "臺南市", town: "後壁區", lat: 23.366, lon: 120.362 },
  { city: "臺南市", town: "白河區", lat: 23.351, lon: 120.415 },
  { city: "臺南市", town: "東山區", lat: 23.326, lon: 120.404 },
  { city: "臺南市", town: "六甲區", lat: 23.232, lon: 120.348 },
  { city: "臺南市", town: "下營區", lat: 23.236, lon: 120.265 },
  { city: "臺南市", town: "柳營區", lat: 23.278, lon: 120.312 },
  { city: "臺南市", town: "鹽水區", lat: 23.32, lon: 120.267 },
  { city: "臺南市", town: "善化區", lat: 23.132, lon: 120.297 },
  { city: "臺南市", town: "大內區", lat: 23.119, lon: 120.359 },
  { city: "臺南市", town: "山上區", lat: 23.104, lon: 120.351 },
  { city: "臺南市", town: "新市區", lat: 23.078, lon: 120.295 },
  { city: "臺南市", town: "安定區", lat: 23.121, lon: 120.237 },
  { city: "高雄市", town: "新興區", lat: 22.631, lon: 120.31 },
  { city: "高雄市", town: "前金區", lat: 22.627, lon: 120.294 },
  { city: "高雄市", town: "苓雅區", lat: 22.622, lon: 120.313 },
  { city: "高雄市", town: "鹽埕區", lat: 22.624, lon: 120.284 },
  { city: "高雄市", town: "鼓山區", lat: 22.65, lon: 120.274 },
  { city: "高雄市", town: "旗津區", lat: 22.589, lon: 120.289 },
  { city: "高雄市", town: "前鎮區", lat: 22.5908, lon: 120.3076 },
  { city: "高雄市", town: "三民區", lat: 22.65, lon: 120.31 },
  { city: "高雄市", town: "楠梓區", lat: 22.727, lon: 120.328 },
  { city: "高雄市", town: "小港區", lat: 22.565, lon: 120.353 },
  { city: "高雄市", town: "左營區", lat: 22.6876, lon: 120.2944 },
  { city: "高雄市", town: "仁武區", lat: 22.701, lon: 120.348 },
  { city: "高雄市", town: "大社區", lat: 22.73, lon: 120.347 },
  { city: "高雄市", town: "岡山區", lat: 22.797, lon: 120.296 },
  { city: "高雄市", town: "路竹區", lat: 22.854, lon: 120.262 },
  { city: "高雄市", town: "阿蓮區", lat: 22.883, lon: 120.327 },
  { city: "高雄市", town: "田寮區", lat: 22.87, lon: 120.363 },
  { city: "高雄市", town: "燕巢區", lat: 22.793, lon: 120.36 },
  { city: "高雄市", town: "橋頭區", lat: 22.758, lon: 120.306 },
  { city: "高雄市", town: "梓官區", lat: 22.761, lon: 120.259 },
  { city: "高雄市", town: "彌陀區", lat: 22.783, lon: 120.248 },
  { city: "高雄市", town: "永安區", lat: 22.818, lon: 120.225 },
  { city: "高雄市", town: "湖內區", lat: 22.885, lon: 120.212 },
  { city: "高雄市", town: "茄萣區", lat: 22.907, lon: 120.183 },
  { city: "高雄市", town: "鳳山區", lat: 22.627, lon: 120.357 },
  { city: "高雄市", town: "大寮區", lat: 22.606, lon: 120.395 },
  { city: "高雄市", town: "林園區", lat: 22.508, lon: 120.395 },
  { city: "高雄市", town: "鳥松區", lat: 22.659, lon: 120.364 },
  { city: "高雄市", town: "大樹區", lat: 22.693, lon: 120.431 },
  { city: "高雄市", town: "旗山區", lat: 22.888, lon: 120.483 },
  { city: "高雄市", town: "美濃區", lat: 22.898, lon: 120.541 },
  { city: "高雄市", town: "六龜區", lat: 22.998, lon: 120.633 },
  { city: "高雄市", town: "甲仙區", lat: 23.083, lon: 120.591 },
  { city: "高雄市", town: "杉林區", lat: 22.971, lon: 120.54 },
  { city: "高雄市", town: "內門區", lat: 22.942, lon: 120.463 },
  { city: "高雄市", town: "茂林區", lat: 22.886, lon: 120.663 },
  { city: "高雄市", town: "桃源區", lat: 23.159, lon: 120.764 },
  { city: "高雄市", town: "那瑪夏區", lat: 23.273, lon: 120.695 },
  { city: "屏東縣", town: "屏東市", lat: 22.669, lon: 120.488 },
  { city: "屏東縣", town: "潮州鎮", lat: 22.55, lon: 120.543 },
  { city: "屏東縣", town: "東港鎮", lat: 22.4653, lon: 120.4493 },
  { city: "屏東縣", town: "恆春鎮", lat: 22.002, lon: 120.746 },
  { city: "屏東縣", town: "萬丹鄉", lat: 22.59, lon: 120.485 },
  { city: "屏東縣", town: "長治鄉", lat: 22.676, lon: 120.53 },
  { city: "屏東縣", town: "麟洛鄉", lat: 22.65, lon: 120.527 },
  { city: "屏東縣", town: "九如鄉", lat: 22.74, lon: 120.49 },
  { city: "屏東縣", town: "里港鄉", lat: 22.779, lon: 120.495 },
  { city: "屏東縣", town: "鹽埔鄉", lat: 22.755, lon: 120.574 },
  { city: "屏東縣", town: "高樹鄉", lat: 22.827, lon: 120.601 },
  { city: "屏東縣", town: "萬巒鄉", lat: 22.572, lon: 120.567 },
  { city: "屏東縣", town: "內埔鄉", lat: 22.614, lon: 120.567 },
  { city: "屏東縣", town: "竹田鄉", lat: 22.584, lon: 120.544 },
  { city: "屏東縣", town: "新埤鄉", lat: 22.47, lon: 120.55 },
  { city: "屏東縣", town: "枋寮鄉", lat: 22.366, lon: 120.595 },
  { city: "屏東縣", town: "新園鄉", lat: 22.544, lon: 120.462 },
  { city: "屏東縣", town: "崁頂鄉", lat: 22.515, lon: 120.515 },
  { city: "屏東縣", town: "林邊鄉", lat: 22.434, lon: 120.515 },
  { city: "屏東縣", town: "南州鄉", lat: 22.49, lon: 120.51 },
  { city: "屏東縣", town: "佳冬鄉", lat: 22.418, lon: 120.548 },
  { city: "屏東縣", town: "琉球鄉", lat: 22.34, lon: 120.37 },
  { city: "屏東縣", town: "車城鄉", lat: 22.073, lon: 120.713 },
  { city: "屏東縣", town: "滿州鄉", lat: 22.021, lon: 120.838 },
  { city: "屏東縣", town: "枋山鄉", lat: 22.261, lon: 120.656 },
  { city: "屏東縣", town: "三地門鄉", lat: 22.713, lon: 120.654 },
  { city: "屏東縣", town: "霧臺鄉", lat: 22.745, lon: 120.733 },
  { city: "屏東縣", town: "瑪家鄉", lat: 22.671, lon: 120.644 },
  { city: "屏東縣", town: "泰武鄉", lat: 22.591, lon: 120.632 },
  { city: "屏東縣", town: "來義鄉", lat: 22.526, lon: 120.633 },
  { city: "屏東縣", town: "春日鄉", lat: 22.371, lon: 120.629 },
  { city: "屏東縣", town: "獅子鄉", lat: 22.202, lon: 120.706 },
  { city: "屏東縣", town: "牡丹鄉", lat: 22.126, lon: 120.775 },
  { city: "宜蘭縣", town: "宜蘭市", lat: 24.757, lon: 121.753 },
  { city: "宜蘭縣", town: "羅東鎮", lat: 24.6786, lon: 121.7669 },
  { city: "宜蘭縣", town: "蘇澳鎮", lat: 24.594, lon: 121.851 },
  { city: "宜蘭縣", town: "頭城鎮", lat: 24.859, lon: 121.823 },
  { city: "宜蘭縣", town: "礁溪鄉", lat: 24.821, lon: 121.771 },
  { city: "宜蘭縣", town: "壯圍鄉", lat: 24.747, lon: 121.793 },
  { city: "宜蘭縣", town: "員山鄉", lat: 24.742, lon: 121.723 },
  { city: "宜蘭縣", town: "冬山鄉", lat: 24.635, lon: 121.792 },
  { city: "宜蘭縣", town: "五結鄉", lat: 24.685, lon: 121.798 },
  { city: "宜蘭縣", town: "三星鄉", lat: 24.661, lon: 121.654 },
  { city: "宜蘭縣", town: "大同鄉", lat: 24.677, lon: 121.605 },
  { city: "宜蘭縣", town: "南澳鄉", lat: 24.465, lon: 121.801 },
  { city: "花蓮縣", town: "花蓮市", lat: 23.9877, lon: 121.6014 },
  { city: "花蓮縣", town: "鳳林鎮", lat: 23.745, lon: 121.448 },
  { city: "花蓮縣", town: "玉里鎮", lat: 23.336, lon: 121.315 },
  { city: "花蓮縣", town: "新城鄉", lat: 24.127, lon: 121.648 },
  { city: "花蓮縣", town: "吉安鄉", lat: 23.973, lon: 121.568 },
  { city: "花蓮縣", town: "壽豐鄉", lat: 23.871, lon: 121.509 },
  { city: "花蓮縣", town: "光復鄉", lat: 23.669, lon: 121.424 },
  { city: "花蓮縣", town: "豐濱鄉", lat: 23.602, lon: 121.521 },
  { city: "花蓮縣", town: "瑞穗鄉", lat: 23.497, lon: 121.376 },
  { city: "花蓮縣", town: "富里鄉", lat: 23.179, lon: 121.298 },
  { city: "花蓮縣", town: "秀林鄉", lat: 24.158, lon: 121.62 },
  { city: "花蓮縣", town: "萬榮鄉", lat: 23.715, lon: 121.319 },
  { city: "花蓮縣", town: "卓溪鄉", lat: 23.346, lon: 121.183 },
  { city: "臺東縣", town: "臺東市", lat: 22.7553, lon: 121.15 },
  { city: "臺東縣", town: "成功鎮", lat: 23.101, lon: 121.38 },
  { city: "臺東縣", town: "關山鎮", lat: 23.048, lon: 121.163 },
  { city: "臺東縣", town: "卑南鄉", lat: 22.783, lon: 121.087 },
  { city: "臺東縣", town: "大武鄉", lat: 22.341, lon: 120.904 },
  { city: "臺東縣", town: "太麻里鄉", lat: 22.615, lon: 121.007 },
  { city: "臺東縣", town: "東河鄉", lat: 22.97, lon: 121.302 },
  { city: "臺東縣", town: "長濱鄉", lat: 23.315, lon: 121.455 },
  { city: "臺東縣", town: "鹿野鄉", lat: 22.914, lon: 121.136 },
  { city: "臺東縣", town: "池上鄉", lat: 23.122, lon: 121.215 },
  { city: "臺東縣", town: "綠島鄉", lat: 22.662, lon: 121.49 },
  { city: "臺東縣", town: "蘭嶼鄉", lat: 22.057, lon: 121.551 },
  { city: "臺東縣", town: "延平鄉", lat: 22.902, lon: 121.086 },
  { city: "臺東縣", town: "海端鄉", lat: 23.102, lon: 121.017 },
  { city: "臺東縣", town: "達仁鄉", lat: 22.295, lon: 120.884 },
  { city: "臺東縣", town: "金峰鄉", lat: 22.595, lon: 120.952 },
  { city: "澎湖縣", town: "馬公市", lat: 23.5662, lon: 119.5666 },
  { city: "澎湖縣", town: "湖西鄉", lat: 23.589, lon: 119.659 },
  { city: "澎湖縣", town: "白沙鄉", lat: 23.666, lon: 119.598 },
  { city: "澎湖縣", town: "西嶼鄉", lat: 23.6, lon: 119.508 },
  { city: "澎湖縣", town: "望安鄉", lat: 23.358, lon: 119.504 },
  { city: "澎湖縣", town: "七美鄉", lat: 23.208, lon: 119.424 },
  { city: "金門縣", town: "金城鎮", lat: 24.4321, lon: 118.3186 },
  { city: "金門縣", town: "金湖鎮", lat: 24.441, lon: 118.434 },
  { city: "金門縣", town: "金沙鎮", lat: 24.488, lon: 118.413 },
  { city: "金門縣", town: "金寧鄉", lat: 24.456, lon: 118.334 },
  { city: "金門縣", town: "烈嶼鄉", lat: 24.429, lon: 118.247 },
  { city: "金門縣", town: "烏坵鄉", lat: 24.992, lon: 119.453 },
  { city: "連江縣", town: "南竿鄉", lat: 26.1543, lon: 119.9517 },
  { city: "連江縣", town: "北竿鄉", lat: 26.224, lon: 119.998 },
  { city: "連江縣", town: "莒光鄉", lat: 25.973, lon: 119.939 },
  { city: "連江縣", town: "東引鄉", lat: 26.366, lon: 120.49 },
];


const REGION_GROUPS = [
  { name: "北部", cities: ["臺北市", "新北市", "基隆市", "桃園市", "新竹市", "新竹縣", "宜蘭縣"] },
  { name: "中部", cities: ["苗栗縣", "臺中市", "彰化縣", "南投縣", "雲林縣"] },
  { name: "南部", cities: ["嘉義市", "嘉義縣", "臺南市", "高雄市", "屏東縣"] },
  { name: "東部", cities: ["花蓮縣", "臺東縣"] },
  { name: "離島", cities: ["澎湖縣", "金門縣", "連江縣"] }
];

const CAMERA_DISTRICT_NEAR_POINT = "near-point";
const CAMERA_DISTRICT_ALL_CITY = "all-city";
const CAMERA_TOWN_RADIUS_KM = 6; // retained for map focus fallback only

const FREEWAY_CAMERA_REGIONS = [
  { id: "n1", label: "國道1號", lat: 24.5, lon: 120.9, radiusKm: 9999, routes: ["N1", "N1H", "N1K"] },
  { id: "n2", label: "國道2號", lat: 24.9, lon: 121.2, radiusKm: 9999, routes: ["N2", "N2A"] },
  { id: "n3", label: "國道3號", lat: 24.5, lon: 120.9, radiusKm: 9999, routes: ["N3", "N3A", "N3K", "N3N"] },
  { id: "n4", label: "國道4號", lat: 24.2, lon: 120.7, radiusKm: 9999, routes: ["N4"] },
  { id: "n5", label: "國道5號", lat: 24.8, lon: 121.8, radiusKm: 9999, routes: ["N5"] },
  { id: "n6", label: "國道6號", lat: 24.0, lon: 120.9, radiusKm: 9999, routes: ["N6"] },
  { id: "n8", label: "國道8號", lat: 23.1, lon: 120.3, radiusKm: 9999, routes: ["N8"] },
  { id: "n10", label: "國道10號", lat: 22.7, lon: 120.4, radiusKm: 9999, routes: ["N10"] },
  { id: "all-freeway", label: "全部國道", lat: 23.7, lon: 120.96, radiusKm: 9999, routes: null }
];

const FREEWAY_CITY_PLACE_ALIASES = {
  臺南市: [
    "大灣",
    "新吉",
    "台南端",
    "臺南端",
    "台南系統",
    "臺南系統",
    "下營系統",
    "官田系統",
    "新化系統"
  ],
  高雄市: ["高科", "路竹", "岡山"]
};

const REGION_STORAGE_KEY = "weatherRegionPreferenceV1";
const KNOWN_CITIES = new Set(CITY_LOCATIONS.map((city) => city.name));
const WEATHER_CODE_LABEL = {
  0: "晴朗",
  1: "大致晴",
  2: "局部多雲",
  3: "陰天",
  45: "有霧",
  48: "霧凇",
  51: "毛毛雨",
  53: "小雨",
  55: "中雨",
  56: "凍毛雨",
  57: "凍毛雨偏強",
  61: "小雨",
  63: "中雨",
  65: "大雨",
  66: "凍雨",
  67: "凍雨偏強",
  71: "小雪",
  73: "中雪",
  75: "大雪",
  77: "雪粒",
  80: "陣雨",
  81: "陣雨偏強",
  82: "強烈陣雨",
  85: "陣雪",
  86: "強烈陣雪",
  95: "雷雨",
  96: "雷雨伴冰雹",
  99: "強雷雨伴冰雹"
};

const regionSelect = null;
const citySelect = document.querySelector("#citySelect");
const townshipSelect = document.querySelector("#townshipSelect");
const locateBtn = document.querySelector("#locateBtn");
const windyLocateBtn = document.querySelector("#windyLocateBtn");
const windyLocateBtnLabel = windyLocateBtn?.querySelector(".windy-locate-btn-label");
const LOCATE_BTN_LABEL = "依設備定位選區";
const WINDY_LOCATE_BTN_LABEL = "定位";
const locateBtnLabel = locateBtn?.querySelector(".locate-btn-label");
const regionMemoryMeta = document.querySelector("#regionMemoryMeta");
let suppressRegionSelectEvents = false;
let windyLocateFocus = null;
let cctvLocateFocus = null;
let pendingMapLocateSync = false;
let fitLocateRangeTimer = 0;
const cameraProbeCache = new Map();
let cameraPrefetchToken = 0;
const CAMERA_PREFETCH_CONCURRENCY = 3;
const CAMERA_PREFETCH_CACHE_MS = 30 * 60 * 1000;

function setLocateButtonsDisabled(disabled) {
  if (locateBtn) {
    locateBtn.disabled = Boolean(disabled);
  }
  if (windyLocateBtn) {
    windyLocateBtn.disabled = Boolean(disabled);
  }
}

function setLocateButtonText(text = LOCATE_BTN_LABEL) {
  if (locateBtnLabel) {
    locateBtnLabel.textContent = text;
  } else if (locateBtn) {
    locateBtn.textContent = text;
  }
  if (windyLocateBtnLabel) {
    windyLocateBtnLabel.textContent = text === LOCATE_BTN_LABEL ? WINDY_LOCATE_BTN_LABEL : "定位中";
  }
}

function setLocateStatus(message, { isError = false } = {}) {
  if (!regionMemoryMeta) {
    return;
  }
  if (!message) {
    regionMemoryMeta.classList.remove("locate-status-error");
    return;
  }
  regionMemoryMeta.textContent = message;
  regionMemoryMeta.classList.toggle("locate-status-error", Boolean(isError));
}

function setLocateCompleteMeta(city, town) {
  if (!regionMemoryMeta) {
    return;
  }
  const cityName = String(city || "").trim();
  const townName = String(town || "").trim();
  regionMemoryMeta.classList.remove("locate-status-error");
  regionMemoryMeta.textContent = `區域：${cityName}${townName}定位完成，並背景預載全市路口監控串流`;
}
const refreshBtn = document.querySelector("#refreshBtn");
const refreshBtnLabel = refreshBtn?.querySelector(".refresh-btn-label");
const refreshProgressHost = document.querySelector("#refreshProgressHost");
const refreshProgress = document.querySelector("#refreshProgress");
const refreshProgressPie = document.querySelector("#refreshProgressPie");
const refreshProgressPct = document.querySelector("#refreshProgressPct");
let refreshProgressToken = 0;
let refreshProgressHideTimer = 0;
const lastUpdated = document.querySelector("#lastUpdated");
const weatherSummary = document.querySelector("#weatherSummary");
const weatherPlace = document.querySelector("#weatherPlace");
const tempValue = document.querySelector("#tempValue");
const feelValue = document.querySelector("#feelValue");
const weatherIcon = document.querySelector("#weatherIcon");
const weatherIconThemeOptions = document.querySelector("#weatherIconThemeOptions");
const humidityValue = document.querySelector("#humidityValue");
const windValue = document.querySelector("#windValue");
const rainValue = document.querySelector("#rainValue");
const rainProbValue = document.querySelector("#rainProbValue");
const cloudValue = document.querySelector("#cloudValue");
const pressureValue = document.querySelector("#pressureValue");
const rainTimeline = document.querySelector("#rainTimeline");
const weeklyForecastSummary = document.querySelector("#weeklyForecastSummary");
const weeklyForecastSummaryText = document.querySelector("#weeklyForecastSummaryText");
const weeklyForecastList = document.querySelector("#weeklyForecastList");
const closureMeta = document.querySelector("#closureMeta");
const closureList = document.querySelector("#closureList");
const cameraMeta = document.querySelector("#cameraMeta");
const cameraList = document.querySelector("#cameraList");
const cameraListMore = document.querySelector("#cameraListMore");
const cameraMoreDetails = document.querySelector("#cameraMoreDetails");
const cameraMoreSummaryText = document.querySelector("#cameraMoreDetails .camera-more-summary-text");
const cameraListMoreBottom = document.querySelector("#cameraListMoreBottom");
const cameraMoreDetailsBottom = document.querySelector("#cameraMoreDetailsBottom");
const cameraMoreSummaryTextBottom = document.querySelector(
  "#cameraMoreDetailsBottom .camera-more-summary-text"
);
const cameraKeyword = document.querySelector("#cameraKeyword");
const cameraRegionSelect = document.querySelector("#cameraRegionSelect");
const cameraCitySelect = document.querySelector("#cameraCitySelect");
const freewayCameraMeta = document.querySelector("#freewayCameraMeta");
const freewayCameraList = document.querySelector("#freewayCameraList");
const freewayCitySelect = document.querySelector("#freewayCitySelect");
const freewayRegionSelect = document.querySelector("#freewayRegionSelect");
const freewayInterchangeSelect = document.querySelector("#freewayInterchangeSelect");
const freewayLoadProgressHost = document.querySelector("#freewayLoadProgressHost");
const freewayLoadProgress = document.querySelector("#freewayLoadProgress");
const freewayLoadProgressPie = document.querySelector("#freewayLoadProgressPie");
const freewayLoadProgressPct = document.querySelector("#freewayLoadProgressPct");
let freewayLoadProgressToken = 0;
let freewayLoadProgressHideTimer = 0;
const cityCameraLoadProgressHost = document.querySelector("#cityCameraLoadProgressHost");
const cityCameraLoadProgress = document.querySelector("#cityCameraLoadProgress");
const cityCameraLoadProgressPie = document.querySelector("#cityCameraLoadProgressPie");
const cityCameraLoadProgressPct = document.querySelector("#cityCameraLoadProgressPct");
const cityCameraLoadProgressLabel = document.querySelector("#cityCameraLoadProgressLabel");
let cityCameraLoadProgressToken = 0;
let cityCameraLoadProgressHideTimer = 0;
let cityCameraLoadProgressFound = 0;
let cityCameraLoadProgressLimit = 8;
const mapLayerList = document.querySelector("#mapLayerList");
const airSummary = document.querySelector("#airSummary");
const aqiMetric = document.querySelector("#aqiMetric");
const pm25Metric = document.querySelector("#pm25Metric");
const pm10Metric = document.querySelector("#pm10Metric");
const ozoneMetric = document.querySelector("#ozoneMetric");
const aqiValue = document.querySelector("#aqiValue");
const pm25Value = document.querySelector("#pm25Value");
const pm10Value = document.querySelector("#pm10Value");
const ozoneValue = document.querySelector("#ozoneValue");
const typhoonRiskBadge = document.querySelector("#typhoonRiskBadge");
const typhoonAnalysisList = document.querySelector("#typhoonAnalysisList");
const windyEmbed = document.querySelector("#windyEmbed");
const windyExternalLink = document.querySelector("#windyExternalLink");
const visitorCounter = document.querySelector("#visitorCounter");
const visitorCounterValue = document.querySelector("#visitorCounterValue");
const likeBtn = document.querySelector("#likeBtn");
const likeBtnLabel = likeBtn?.querySelector(".like-btn-label");
const likeCountValue = document.querySelector("#likeCountValue");
const powerOutageMeta = document.querySelector("#powerOutageMeta");
const mapCategoryFilters = document.querySelector("#mapCategoryFilters");
const aiAlertList = document.querySelector("#aiAlertList");
const earthquakeMeta = document.querySelector("#earthquakeMeta");
const earthquakeSummary = document.querySelector("#earthquakeSummary");
const earthquakeList = document.querySelector("#earthquakeList");
const earthquakeDetailSheet = document.querySelector("#earthquakeDetailSheet");
const earthquakeDetailSheetBody = document.querySelector("#earthquakeDetailSheetBody");
const earthquakeDetailSheetClose = document.querySelector("#earthquakeDetailSheetClose");
const rainProjection = document.querySelector("#rainProjection");
const subscriptionForm = document.querySelector("#subscriptionForm");
const subscriberEmail = document.querySelector("#subscriberEmail");
const subscriptionStatus = document.querySelector("#subscriptionStatus");
const testNotificationBtn = document.querySelector("#testNotificationBtn");
const notifyPermissionStatus = document.querySelector("#notifyPermissionStatus");
const notifyHistoryList = document.querySelector("#notifyHistoryList");
const pwaInstallBanner = document.querySelector("#pwaInstallBanner");
const pwaInstallBtn = document.querySelector("#pwaInstallBtn");
const pwaInstallDismiss = document.querySelector("#pwaInstallDismiss");
const pwaInstallTitle = document.querySelector("#pwaInstallTitle");
const pwaInstallText = document.querySelector("#pwaInstallText");
const torchVideo = document.querySelector("#torchVideo");
const androidShadePrompt = document.querySelector("#androidShadePrompt");
const androidShadeAllowBtn = document.querySelector("#androidShadeAllowBtn");
const androidShadeLaterBtn = document.querySelector("#androidShadeLaterBtn");
const notificationHint = document.querySelector("#notificationHint");
const inPageAlertHost = document.querySelector("#inPageAlertHost");
const autoRefreshMeta = document.querySelector("#autoRefreshMeta");
const autoRefreshIntervalSelect = document.querySelector("#autoRefreshInterval");

let cityCameraDataset = null;
let freewayCameraDataset = null;
let freewayInterchangeIndex = null;
let shelterDataset = null;
let blackScreenCameraIds = new Set();
let utilityAlertTimers = [];
const DISABLED_CAMERA_HOSTS = new Set([]);
let warningMap = null;
let mapFloodLayer = null;
let mapCameraLayer = null;
let mapCityFocusLayer = null;
let mapPowerOutageLayer = null;
let mapWaterOutageLayer = null;
let mapClosureLayer = null;
let mapEarthquakeLayer = null;
let mapShelterLayer = null;
const mapLegendMarkers = {
  "flood-4": [],
  "flood-3": [],
  "flood-2": [],
  "flood-1": [],
  "power-disaster": [],
  "power-planned": [],
  "water-outage": [],
  closure: [],
  earthquake: [],
  shelter: [],
  cctv: [],
  "city-focus": []
};
const MAP_LEGEND_CALLOUT_CONFIG = {
  "flood-4": { title: "積水 4", color: "#d00000", layer: "flood-warning", skipCallout: true },
  "flood-3": { title: "積水 3", color: "#e85d04", layer: "flood-warning", skipCallout: true },
  "flood-2": { title: "積水 2", color: "#ffba08", layer: "flood-warning", skipCallout: true },
  "flood-1": { title: "積水 1", color: "#ffd166", layer: "flood-warning", skipCallout: true },
  "power-disaster": { title: "災害停電", color: "#6d28d9", layer: "power-outage", skipCallout: true },
  "power-planned": { title: "計畫停電", color: "#c77dff", layer: "power-outage", skipCallout: true },
  "water-outage": { title: "停水公告", color: "#0f766e", layer: "water-outage", skipCallout: true },
  closure: { title: "停班停課", color: "#b71c1c", layer: "closure-points", skipCallout: true },
  earthquake: { title: "地震震央", color: "#ffe600", layer: "earthquake-points", skipCallout: true },
  shelter: { title: "避難場所", color: "#15803d", layer: "shelter-points", skipCallout: true },
  cctv: { title: "路口監控", color: "#0096c7", layer: "cctv-points", skipCallout: true, alwaysShow: true },
  "city-focus": { title: "定位範圍", color: "#e11d48", layer: "city-focus", skipCallout: true, alwaysShow: true, flash: true }
};
let mapLegendLabelLayer = null;
const mapLayerOrder = [
  "city-focus",
  "closure-points",
  "flood-warning",
  "power-outage",
  "water-outage",
  "earthquake-points",
  "shelter-points",
  "cctv-points"
];
const MAP_PANE_ZINDEX = {
  "city-focus": 680,
  "closure-points": 662,
  "flood-warning": 650,
  "power-outage": 655,
  "water-outage": 658,
  "earthquake-points": 660,
  "shelter-points": 670,
  "cctv-points": 740
};
const mapLayerVisibility = {
  "power-outage": true,
  "flood-warning": true,
  "water-outage": true,
  "closure-points": false,
  "earthquake-points": true,
  "shelter-points": true,
  "cctv-points": true,
  "city-focus": true
};
const mapCategoryVisibility = {
  "flood-4": true,
  "flood-3": true,
  "flood-2": true,
  "flood-1": true,
  "power-disaster": true,
  "power-planned": true,
  "water-outage": true,
  closure: false,
  earthquake: true,
  shelter: true,
  cctv: true,
  "city-focus": true
};
const DISASTER_LEGEND_KEYS = [
  "flood-4",
  "flood-3",
  "flood-2",
  "flood-1",
  "power-disaster",
  "power-planned",
  "water-outage",
  "closure",
  "earthquake"
];
const mapCategoryUserOff = new Set();
const ALWAYS_ON_MAP_CATEGORIES = new Set(["city-focus"]);
const TAIWAN_MAP_BOUNDS = [
  [21.8, 119.15],
  [25.35, 122.05]
];
const TAIWAN_MAP_CENTER = [23.7, 120.96];
const TAIWAN_MAP_ZOOM = 7;
const mapLayerConfig = {
  "power-outage": { label: "停電區域標示", pane: "outagePane", hiddenInControl: true },
  "flood-warning": { label: "即時積淹水感測", pane: "floodPane", hiddenInControl: true },
  "water-outage": { label: "停水公告", pane: "waterPane", hiddenInControl: true },
  "closure-points": { label: "停班停課", pane: "closurePane", hiddenInControl: true },
  "earthquake-points": { label: "地震震央", pane: "earthquakePane", hiddenInControl: true },
  "shelter-points": { label: "避難場所", pane: "shelterPane", hiddenInControl: true },
  "cctv-points": { label: "路口監控", pane: "cameraPane", hiddenInControl: true },
  "city-focus": { label: "定位範圍（直徑 5 公里）", pane: "focusPane", hiddenInControl: true }
};
const AUTO_REFRESH_OPTIONS = {
  5: { ms: 5 * 60 * 1000, label: "5 分鐘" },
  15: { ms: 15 * 60 * 1000, label: "15 分鐘" },
  30: { ms: 30 * 60 * 1000, label: "30 分鐘" }
};
const AUTO_REFRESH_STORAGE_KEY = "autoRefreshIntervalMinutesV1";
const WEATHER_ICON_THEME_KEY = "weatherIconThemeV2";
const DEFAULT_AUTO_REFRESH_MINUTES = 15;
const SUBSCRIPTION_STORAGE_KEY = "weatherMemberSubscriptionV1";
const NOTIFICATION_DIGEST_STORAGE_KEY = "subscriptionNotificationDigestV1";
const DAILY_WEATHER_EMAIL_DATE_KEY = "dailyWeatherEmailDateV1";
const SUBSCRIPTION_TOPIC_ORDER = [
  "weather",
  "air",
  "closure",
  "flood",
  "power-outage",
  "water-outage",
  "earthquake"
];
const PWA_NOTIFY_HISTORY_KEY = "pwaNotificationHistoryV1";
const PWA_NOTIFY_COOLDOWN_KEY = "pwaNotificationCooldownV1";
const PWA_SUBSCRIBER_RECORDS_KEY = "pwaSubscriberRecordsV1";
const PWA_INSTALL_DISMISS_KEY = "pwaInstallDismissedV1";
const ANDROID_SHADE_PROMPT_DISMISS_KEY = "androidShadePromptDismissedV1";
const WEATHER_STATUS_NOTIFY_TAG = "jin-weather-status";
const NOTIFY_COOLDOWN_MS = 30 * 60 * 1000;
const CWA_WARNING_PAGE = "https://www.cwa.gov.tw/V8/C/P/Warning/W29.html";
const CWA_WARNING_MIRROR = `https://r.jina.ai/${CWA_WARNING_PAGE}`;
const NCDR_ALERT_PAGE = "https://alerts.ncdr.nat.gov.tw/";
// Canonical public site. Subscribe UI + confirmation emails must use this exact string.
const SITE_PUBLIC_URL = "https://jin358-cmd.github.io/weather/";
const SUBSCRIPTION_TOPIC_LABELS = {
  weather: "每日天氣預報（Email，每天一次）",
  air: "空氣品質異常",
  closure: "停班停課公告",
  flood: "積淹水監測（20 公里內）",
  "power-outage": "停電區域（10 公里內）",
  "water-outage": "停水公告（定位／所選鄉鎮市區）",
  earthquake: "地震通報（氣象署／國家級警報同步）"
};
const DISASTER_STATUS_TOPICS = ["closure", "flood", "earthquake"];
const UTILITY_STATUS_TOPICS = ["power-outage", "water-outage"];
const EARTHQUAKE_CWA_PAGE = "https://www.cwa.gov.tw/V8/C/E/index.html";
const EARTHQUAKE_CWA_LIST_MIRROR =
  "https://r.jina.ai/https://scweb.cwa.gov.tw/zh-tw/earthquake/data";
const EARTHQUAKE_CWA_MORE_PAGE = "https://www.cwa.gov.tw/V8/C/E/more.html";
const EARTHQUAKE_USGS_FALLBACK_API =
  "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&minmagnitude=3.5&limit=12&minlatitude=21.5&maxlatitude=26.5&minlongitude=118&maxlongitude=123&orderby=time";
const EARTHQUAKE_NATIONAL_INTENSITY = 4;
const EARTHQUAKE_RECENT_HOURS = 168;
const EARTHQUAKE_COORD_CACHE_KEY = "cwaEarthquakeCoordCacheV1";
const EARTHQUAKE_DETAIL_ENRICH_LIMIT = 12;
const EARTHQUAKE_PREVIEW_LIMIT = 3;
const EARTHQUAKE_LIST_DAYS = 2;
const EARTHQUAKE_MAP_LIMIT = 4;
const EARTHQUAKE_SCWEB_PAGE = "https://scweb.cwa.gov.tw/zh-tw/earthquake/data";
const EARTHQUAKE_SCWEB_MAP_BASE = "https://scweb.cwa.gov.tw/zh-tw/earthquake/imgs";
const SUBSCRIBE_OWNER_INBOX = "jin358@gmail.com";
const VAPID_PUBLIC_KEY =
  "BJXXT1l-q5eu0Obt6DDDndh1NeVqGL9jR3mS8aoH1-cB6W3Cqk_UM9jLLF9PLyc1RguSVPmki1bxbOsNcYeOVbI";
const RECOVERY_STATE_STORAGE_KEY = "subscriptionRecoveryStateV1";
const RECOVERY_SENT_STORAGE_KEY = "subscriptionRecoverySentV1";
const RECOVERY_SENT_TTL_MS = 48 * 60 * 60 * 1000;
const FORECAST_NOTIFY_ARM_KEY = "jinForecastNotifyArmedByLocateV1";
const FLOOD_LATEST_API =
  "https://opendata.wra.gov.tw/api/v2/1b991bbb-ad85-4e7a-b931-06ce8749d3ed?format=JSON";
const TAIPOWER_DISASTER_OUTAGE_URL =
  "https://service.taipower.com.tw/data/opendata/apply/file/d006012/001.xml";
const TAIPOWER_PLANNED_OUTAGE_ZIP_URL =
  "https://service.taipower.com.tw/data/opendata/apply/file/d077004/001.zip";
const TYPHOON_NEWS_MIRROR = "https://r.jina.ai/https://www.cwa.gov.tw/V8/C/P/Typhoon/TY_NEWS.html";
const TYPHOON_WARN_MIRROR = "https://r.jina.ai/https://www.cwa.gov.tw/V8/C/P/Typhoon/TY_WARN.html";
const CLOSURE_OFFICIAL_URL = "https://www.dgpa.gov.tw/typh/daily/nds.html";
const CLOSURE_REGION_LABELS = ["北部地區", "中部地區", "南部地區", "東部地區", "外島地區"];
const MAP_LOCATE_DIAMETER_KM = 5;
const MAP_LOCATE_RADIUS_KM = MAP_LOCATE_DIAMETER_KM / 2;
const MAP_FOCUS_CIRCLE_RADIUS_M = MAP_LOCATE_RADIUS_KM * 1000;
const MAP_LOCATE_VIEW_DIAMETER_M = 1000;
const LAST_MAP_LOCATE_STORAGE_KEY = "lastMapLocateV1";
const WINDY_EMBED_HEIGHT = 560;
const WINDY_EMBED_WIDTH = 560;
const RAIN_FORECAST_HOURS = 8;
const VISITOR_COUNTER_NAMESPACE = "jin-weather-tw-v1";
const VISITOR_COUNTER_KEY = "visits";
const VISITOR_COUNTER_STORAGE_KEY = "siteVisitCountGlobalV2";
const LIKE_COUNTER_KEY = "likes";
const LIKE_COUNTER_STORAGE_KEY = "siteLikeCountGlobalV2";
const COUNTER_FLOOR_URL = "./data/counters.json";
const COUNTER_ABACUS_BASE = "https://abacus.jasoncameron.dev";
const LIKE_VOTED_STORAGE_KEY = "siteLikedV1";
const CITY_CCTV_RADIUS_KM = MAP_LOCATE_RADIUS_KM;
const CITY_CCTV_NEARBY_KM = 8;
const CITY_CCTV_PREVIEW_LIMIT = 6;
const CITY_CCTV_MORE_CHUNK = 12;
const CITY_CCTV_VERIFY_EXPAND_SIZE = 48;
const SHELTER_DATA_URL = "./data/shelters.json";
let ignoreShelterZoomEvents = 0;
const FREEWAY_CCTV_RADIUS_KM = 40;
const FREEWAY_INTERCHANGE_BASE_RADIUS_KM = 40;
const FREEWAY_CCTV_PREVIEW_LIMIT = 6;
const WINDY_TAIWAN_VIEW = { lat: 23.7, lon: 121.0, zoom: 5 };
const POWER_OUTAGE_NOTIFY_RADIUS_KM = 10;
const FLOOD_NOTIFY_RADIUS_KM = 80;
const FLOOD_SUBSCRIPTION_RADIUS_KM = 20;
const FLOOD_SAFE_DEPTH_CM = 15;
const UTILITY_ALERT_REPEAT_MS = 15 * 60 * 1000;
const UTILITY_ALERT_REPEAT_COUNT = 2;
const PENDING_UTILITY_ALERT_STORAGE_KEY = "pendingUtilityAlertNotificationsV1";
const WATER_OUTAGE_STATE_STORAGE_KEY = "waterOutageTrackingStateV1";
const BLACK_SCREEN_CCTV_STORAGE_KEY = "blackScreenCctvIdsV1";
const CCTV_BLACK_LUMINANCE_THRESHOLD = 28;
const CCTV_VISIBLE_LIMIT = 8;
const CCTV_VERIFY_POOL_SIZE = 48;
let cityCameraRenderToken = 0;
let freewayCameraRenderToken = 0;
const freewayFeedTimers = new Map();
let jsZipModulePromise = null;
const appState = {
  weather: null,
  airQuality: null,
  closureRows: [],
  closureNoticeDate: "",
  floodStations: [],
  floodLivePoints: [],
  floodFeatures: [],
  floodMetaText: "",
  powerOutagePoints: [],
  powerOutageMetaText: "",
  powerOutageDataOk: true,
  waterOutageItems: [],
  waterOutageMetaText: "",
  waterOutageDataOk: true,
  closureDataOk: true,
  lastRecoveryMessages: [],
  earthquakes: [],
  earthquakeMetaText: "",
  typhoon: null,
  typhoonOfficial: null,
  aiAlerts: [],
  autoRefreshEnabled: true,
  autoRefreshIntervalMinutes: DEFAULT_AUTO_REFRESH_MINUTES,
  nextAutoRefreshAt: Date.now() + AUTO_REFRESH_OPTIONS[DEFAULT_AUTO_REFRESH_MINUTES].ms,
  autoRefreshRunning: false,
  subscription: null,
  lastNotifiedAt: 0,
  cwaWarnings: [],
  notifyHistory: [],
  lastWeatherCode: null,
  lastCloudCover: null,
  weeklyForecast: [],
  verifiedCityCameras: []
};
let autoRefreshTickTimer = null;
let notificationRegistration = null;

function getRegionForCity(cityName) {
  return REGION_GROUPS.find((region) => region.cities.includes(cityName))?.name ?? REGION_GROUPS[0].name;
}

function getSelectedTownship() {
  const city = citySelect.value;
  const town = townshipSelect.value;
  return TOWNSHIP_LOCATIONS.find((item) => item.city === city && item.town === town) ?? null;
}

function getActiveWeatherLocation() {
  const township = getSelectedTownship();
  if (township) {
    return {
      label: `${township.city}${township.town}`,
      cityName: township.city,
      townName: township.town,
      lat: township.lat,
      lon: township.lon
    };
  }
  const city = CITY_LOCATIONS.find((item) => item.name === citySelect.value);
  return city
    ? { label: city.name, cityName: city.name, townName: "", lat: city.lat, lon: city.lon }
    : null;
}

function persistMapLocatePoint(point) {
  if (!point || !Number.isFinite(Number(point.lat)) || !Number.isFinite(Number(point.lon))) {
    return;
  }
  try {
    localStorage.setItem(
      LAST_MAP_LOCATE_STORAGE_KEY,
      JSON.stringify({
        lat: Number(point.lat),
        lon: Number(point.lon),
        label: String(point.label || "").trim(),
        fromDevice: Boolean(point.fromDevice),
        savedAt: new Date().toISOString()
      })
    );
  } catch {
    /* ignore storage errors */
  }
}

function readPersistedMapLocatePoint() {
  try {
    const parsed = JSON.parse(localStorage.getItem(LAST_MAP_LOCATE_STORAGE_KEY) || "null");
    const lat = Number(parsed?.lat);
    const lon = Number(parsed?.lon);
    if (!Number.isFinite(lat) || !Number.isFinite(lon)) {
      return null;
    }
    return {
      lat,
      lon,
      label: String(parsed.label || "").trim() || "上次定位點",
      fromDevice: Boolean(parsed.fromDevice)
    };
  } catch {
    return null;
  }
}

function restoreMapLocateFocus() {
  if (
    cctvLocateFocus &&
    Number.isFinite(cctvLocateFocus.lat) &&
    Number.isFinite(cctvLocateFocus.lon)
  ) {
    return cctvLocateFocus;
  }
  const last = readPersistedMapLocatePoint();
  if (last) {
    cctvLocateFocus = last;
    return last;
  }
  const location = getActiveWeatherLocation();
  if (location && Number.isFinite(location.lat) && Number.isFinite(location.lon)) {
    persistMapLocatePoint(location);
    return location;
  }
  return null;
}

function getMapLocatePoint() {
  if (
    cctvLocateFocus &&
    Number.isFinite(cctvLocateFocus.lat) &&
    Number.isFinite(cctvLocateFocus.lon)
  ) {
    return {
      lat: cctvLocateFocus.lat,
      lon: cctvLocateFocus.lon,
      label: cctvLocateFocus.label || "裝置定位點"
    };
  }
  const last = readPersistedMapLocatePoint();
  if (last) {
    return last;
  }
  const location = getActiveWeatherLocation();
  if (location && Number.isFinite(location.lat) && Number.isFinite(location.lon)) {
    return {
      lat: location.lat,
      lon: location.lon,
      label: location.label
    };
  }
  const fallbackCity = CITY_LOCATIONS.find((item) => item.name === "臺南市") || CITY_LOCATIONS[0];
  if (fallbackCity) {
    return {
      lat: fallbackCity.lat,
      lon: fallbackCity.lon,
      label: `${fallbackCity.name}（預設範圍）`
    };
  }
  return {
    lat: TAIWAN_MAP_CENTER[0],
    lon: TAIWAN_MAP_CENTER[1],
    label: "預設定位範圍"
  };
}

function isWithinMapLocateRange(lat, lon) {
  const focus = getMapLocatePoint();
  if (!focus) {
    return false;
  }
  const pointLat = Number(lat);
  const pointLon = Number(lon);
  if (!Number.isFinite(pointLat) || !Number.isFinite(pointLon)) {
    return false;
  }
  return getDistanceKm(focus.lat, focus.lon, pointLat, pointLon) <= MAP_LOCATE_RADIUS_KM + 0.0001;
}

function getMapDeclutterSeparationKm(zoom) {
  const z = Number(zoom);
  if (!Number.isFinite(z) || z >= 17) {
    return 0;
  }
  if (z >= 16) {
    return 0.05;
  }
  if (z >= 15) {
    return 0.09;
  }
  if (z >= 14) {
    return 0.15;
  }
  if (z >= 13) {
    return 0.24;
  }
  if (z >= 12) {
    return 0.36;
  }
  if (z >= 11) {
    return 0.55;
  }
  return 0.85;
}

const MAP_ALERT_LAYER_DECLUTTER = {
  ignoreLocateRange: true,
  ignoreViewBounds: true
};

function declutterMapItems(items, getLatLng, options = {}) {
  const ignoreLocateRange = Boolean(options.ignoreLocateRange);
  const ignoreViewBounds = Boolean(options.ignoreViewBounds);
  const focus = getMapLocatePoint();
  const zoom = warningMap?.getZoom?.();
  const bounds = warningMap?.getBounds?.();
  const sepKm = getMapDeclutterSeparationKm(zoom);
  const scored = (items || [])
    .map((item) => {
      const point = getLatLng(item) || {};
      const lat = Number(point.lat);
      const lon = Number(point.lon ?? point.lng);
      if (!Number.isFinite(lat) || !Number.isFinite(lon)) {
        return null;
      }
      if (!ignoreLocateRange && !isWithinMapLocateRange(lat, lon)) {
        return null;
      }
      if (!ignoreViewBounds && bounds?.isValid?.() && !bounds.contains([lat, lon])) {
        return null;
      }
      return {
        item,
        lat,
        lon,
        dist: focus ? getDistanceKm(focus.lat, focus.lon, lat, lon) : 0
      };
    })
    .filter(Boolean)
    .sort((a, b) => a.dist - b.dist);
  if (sepKm <= 0) {
    return scored.map((entry) => entry.item);
  }
  const kept = [];
  scored.forEach((entry) => {
    const tooClose = kept.some(
      (other) => getDistanceKm(entry.lat, entry.lon, other.lat, other.lon) < sepKm
    );
    if (!tooClose) {
      kept.push(entry);
    }
  });
  return kept.map((entry) => entry.item);
}

function getCctvLocationFocus() {
  const mapped = getMapLocatePoint();
  if (mapped) {
    return mapped;
  }
  const city = CITY_LOCATIONS.find((item) => item.name === citySelect.value);
  if (city) {
    return { lat: city.lat, lon: city.lon, label: city.name };
  }
  return { lat: 23.7, lon: 121.0, label: "台灣中部" };
}

function normalizeTaiwanPlaceText(text) {
  return String(text ?? "").replace(/臺/g, "台").trim();
}

function sameTaiwanCityName(a, b) {
  const left = normalizeTaiwanPlaceText(a);
  const right = normalizeTaiwanPlaceText(b);
  return Boolean(left) && left === right;
}

function sameTaiwanTownshipName(a, b) {
  return sameTaiwanCityName(a, b);
}

function getTaiwanDateSlash() {
  return getTaiwanDateKey().replace(/-/g, "/");
}

function getTaiwanDateKey(value = Date.now()) {
  const timeMs = Number(value);
  const date = Number.isFinite(timeMs) ? new Date(timeMs) : new Date();
  return date.toLocaleDateString("sv-SE", { timeZone: "Asia/Taipei" });
}

function isEarthquakeOnTaiwanToday(timeMs) {
  const stamp = Number(timeMs);
  return Number.isFinite(stamp) && getTaiwanDateKey(stamp) === getTaiwanDateKey();
}

function isEarthquakeWithinTaiwanDays(timeMs, days = EARTHQUAKE_LIST_DAYS) {
  const stamp = Number(timeMs);
  const window = Math.max(1, Number(days) || 1);
  if (!Number.isFinite(stamp)) {
    return false;
  }
  const today = new Date(`${getTaiwanDateKey()}T00:00:00+08:00`);
  const eventDay = new Date(`${getTaiwanDateKey(stamp)}T00:00:00+08:00`);
  if (!Number.isFinite(today.getTime()) || !Number.isFinite(eventDay.getTime())) {
    return false;
  }
  const diffDays = Math.round((today.getTime() - eventDay.getTime()) / (24 * 60 * 60 * 1000));
  return diffDays >= 0 && diffDays < window;
}

function getRecentEarthquakesForList() {
  return (appState.earthquakes || [])
    .filter((quake) => isEarthquakeWithinTaiwanDays(quake.timeMs, EARTHQUAKE_LIST_DAYS))
    .sort((a, b) => b.timeMs - a.timeMs);
}

function getTodayEarthquakesForMap() {
  return (appState.earthquakes || [])
    .filter(
      (quake) => isEarthquakeOnTaiwanToday(quake.timeMs) && Number.isFinite(quake.lat) && Number.isFinite(quake.lon)
    )
    .sort((a, b) => b.timeMs - a.timeMs)
    .slice(0, EARTHQUAKE_MAP_LIMIT);
}

function geocodeOutageArea(areaText) {
  const normalizedArea = normalizeTaiwanPlaceText(areaText);
  if (!normalizedArea) {
    return null;
  }
  const townshipCandidates = [...TOWNSHIP_LOCATIONS].sort(
    (a, b) => `${b.city}${b.town}`.length - `${a.city}${a.town}`.length
  );
  for (const township of townshipCandidates) {
    const key = normalizeTaiwanPlaceText(`${township.city}${township.town}`);
    if (normalizedArea.includes(key)) {
      return {
        lat: township.lat,
        lon: township.lon,
        label: `${township.city}${township.town}`
      };
    }
  }
  for (const city of CITY_LOCATIONS) {
    if (normalizedArea.includes(normalizeTaiwanPlaceText(city.name))) {
      return { lat: city.lat, lon: city.lon, label: city.name };
    }
  }
  return null;
}

function parseSimpleCsv(text) {
  return String(text ?? "")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .slice(1)
    .map((line) => {
      const columns = line.split(",");
      return {
        office: columns[0] ?? "",
        requestId: columns[1] ?? "",
        summary: columns[2] ?? "",
        firstTime: columns[3] ?? "",
        secondTime: columns[4] ?? "",
        area: columns[5] ?? "",
        phone: columns[6] ?? ""
      };
    });
}

async function loadJsZipModule() {
  if (!jsZipModulePromise) {
    jsZipModulePromise = import("https://cdn.jsdelivr.net/npm/jszip@3.10.1/+esm").then((module) => module.default);
  }
  return jsZipModulePromise;
}

function parseDisasterOutageXml(xmlText) {
  const doc = new DOMParser().parseFromString(xmlText, "text/xml");
  const placemarks = [...doc.querySelectorAll("Placemark")];
  return placemarks
    .map((placemark) => {
      const fields = {};
      placemark.querySelectorAll("SimpleData").forEach((node) => {
        const key = node.getAttribute("name");
        if (key) {
          fields[key] = node.textContent?.trim() ?? "";
        }
      });
      placemark.querySelectorAll("Data").forEach((node) => {
        const key = node.getAttribute("name");
        if (key) {
          fields[key] = node.querySelector("value")?.textContent?.trim() ?? "";
        }
      });
      const coordinates = placemark.querySelector("coordinates")?.textContent?.trim() ?? "";
      const [lonText, latText] = coordinates.split(",").map((part) => part.trim());
      const lat = Number(latText);
      const lon = Number(lonText);
      const area = fields["停電區域"] || fields.area || "";
      const geocoded = Number.isFinite(lat) && Number.isFinite(lon) ? null : geocodeOutageArea(area);
      return {
        type: "disaster",
        area: area || fields["行政區"] || "未提供區域",
        district: fields["行政區"] ?? "",
        info: fields["停電資訊"] ?? "災害性停電",
        affectedHouseholds: fields["影響戶數"] ?? "",
        eta: fields["預計修復時間"] ?? "",
        updatedAt: fields["資料更新時間"] ?? "",
        lat: Number.isFinite(lat) ? lat : geocoded?.lat,
        lon: Number.isFinite(lon) ? lon : geocoded?.lon,
        label: geocoded?.label ?? area
      };
    })
    .filter((point) => Number.isFinite(point.lat) && Number.isFinite(point.lon));
}

async function fetchPlannedOutagePoints() {
  const todaySlash = getTaiwanDateSlash();

  const buildPointsFromRows = (rows) => {
    const points = [];
    const seen = new Set();
    rows.forEach((row) => {
      if (!row.firstTime?.includes(todaySlash)) {
        return;
      }
      const geocoded = geocodeOutageArea(row.area);
      if (!geocoded) {
        return;
      }
      const dedupeKey = `${row.requestId}|${row.area}|${row.firstTime}`;
      if (seen.has(dedupeKey)) {
        return;
      }
      seen.add(dedupeKey);
      points.push({
        type: "planned",
        area: row.area,
        office: row.office,
        summary: row.summary,
        firstTime: row.firstTime,
        secondTime: row.secondTime,
        phone: row.phone,
        lat: geocoded.lat,
        lon: geocoded.lon,
        label: geocoded.label
      });
    });
    return points.slice(0, 260);
  };

  try {
    const JSZip = await loadJsZipModule();
    const response = await fetch(TAIPOWER_PLANNED_OUTAGE_ZIP_URL);
    if (!response.ok) {
      throw new Error(`計畫性停電資料讀取失敗：${response.status}`);
    }
    const zip = await JSZip.loadAsync(await response.arrayBuffer());
    const rows = [];
    await Promise.all(
      Object.keys(zip.files).map(async (filename) => {
        if (!/^\d{3}\.csv$/i.test(filename)) {
          return;
        }
        const csvText = await zip.files[filename].async("string");
        rows.push(...parseSimpleCsv(csvText));
      })
    );
    return buildPointsFromRows(rows);
  } catch {
    const snapshotResponse = await fetch("./data/power_outage_snapshot.json");
    if (!snapshotResponse.ok) {
      throw new Error("計畫性停電資料與本地快照皆無法讀取");
    }
    const snapshot = await snapshotResponse.json();
    if (snapshot.dateKey && snapshot.dateKey !== todaySlash) {
      return [];
    }
    return buildPointsFromRows(snapshot.planned ?? []);
  }
}

async function fetchPowerOutageData() {
  const [disasterResult, plannedResult] = await Promise.allSettled([
    fetch(TAIPOWER_DISASTER_OUTAGE_URL).then(async (response) => {
      if (!response.ok) {
        throw new Error(`災害停電資料讀取失敗：${response.status}`);
      }
      return parseDisasterOutageXml(await response.text());
    }),
    fetchPlannedOutagePoints()
  ]);

  const prevPoints = appState.powerOutagePoints || [];
  const prevDisaster = prevPoints.filter((point) => point.type === "disaster");
  const prevPlanned = prevPoints.filter((point) => point.type !== "disaster");
  const disasterFailed = disasterResult.status !== "fulfilled";
  const plannedFailed = plannedResult.status !== "fulfilled";
  const disasterPoints = disasterFailed ? prevDisaster : disasterResult.value;
  const plannedPoints = plannedFailed ? prevPlanned : plannedResult.value;
  appState.powerOutagePoints = [...disasterPoints, ...plannedPoints];
  appState.powerOutageDataOk = !(disasterFailed && plannedFailed);

  const disasterCount = disasterPoints.length;
  const plannedCount = plannedPoints.length;
  if (disasterCount || plannedCount) {
    appState.powerOutageMetaText = `停電標示：全台災害性 ${disasterCount} 處、今日計畫性 ${plannedCount} 處。`;
  } else {
    appState.powerOutageMetaText = "目前全台無災害性停電通報，今日亦無計畫性停電標示。";
  }
  if (powerOutageMeta) {
    powerOutageMeta.textContent = appState.powerOutageMetaText;
  }
  updatePowerOutageMapLayer();
}

function buildPowerOutageMarkerStyle(type) {
  if (type === "disaster") {
    return {
      radius: 8,
      color: "#9d0208",
      fillColor: "#d00000",
      fillOpacity: 0.86,
      weight: 2
    };
  }
  return {
    radius: 7,
    color: "#7b2cbf",
    fillColor: "#c77dff",
    fillOpacity: 0.82,
    weight: 2
  };
}

function updatePowerOutageMapLayer() {
  if (!warningMap) {
    return;
  }
  if (mapPowerOutageLayer && warningMap.hasLayer(mapPowerOutageLayer)) {
    warningMap.removeLayer(mapPowerOutageLayer);
  }
  mapPowerOutageLayer = L.layerGroup();
  mapLegendMarkers["power-disaster"] = [];
  mapLegendMarkers["power-planned"] = [];
  const grouped = new Map();

  declutterMapItems(
    appState.powerOutagePoints.filter(
      (point) => Number.isFinite(point.lat) && Number.isFinite(point.lon)
    ),
    (point) => ({ lat: point.lat, lon: point.lon }),
    MAP_ALERT_LAYER_DECLUTTER
  ).forEach((point) => {
    const key = `${point.type}|${point.lat.toFixed(4)}|${point.lon.toFixed(4)}`;
    if (!grouped.has(key)) {
      grouped.set(key, []);
    }
    grouped.get(key).push(point);
  });

  grouped.forEach((items, key) => {
    const [type] = key.split("|");
    const sample = items[0];
    const marker = L.circleMarker(
      [sample.lat, sample.lon],
      getMapCircleMarkerOptions({
        pane: "outagePane",
        ...buildPowerOutageMarkerStyle(type)
      })
    );
    const popupLines = items
      .slice(0, 4)
      .map((item) => {
        if (item.type === "disaster") {
          return `<strong>${item.info}</strong><br/>${item.area}<br/>影響戶數：${item.affectedHouseholds || "-"}<br/>預計修復：${item.eta || "-"}`;
        }
        return `<strong>計畫性停電</strong><br/>${item.area}<br/>時段：${item.firstTime}<br/>工作：${item.summary || "-"}`;
      })
      .join("<hr/>");
    marker.bindPopup(`${popupLines}<br/>來源：台灣電力公司開放資料`, getMapPopupOptions());
    marker._legendPlace = String(sample.area || sample.label || sample.info || "").trim();
    const legendKey = type === "disaster" ? "power-disaster" : "power-planned";
    mapLegendMarkers[legendKey].push(marker);
  });
  addVisibleLegendMarkers(mapPowerOutageLayer, ["power-disaster", "power-planned"]);

  syncMapLayerVisibility("power-outage");
  syncMapLegendState();
}

function saveRegionPreference({ updateMeta = true } = {}) {
  const region = getRegionForCity(citySelect.value);
  const payload = {
    region,
    city: citySelect.value,
    town: townshipSelect.value,
    savedAt: new Date().toISOString()
  };
  localStorage.setItem(REGION_STORAGE_KEY, JSON.stringify(payload));
  if (updateMeta && regionMemoryMeta) {
    regionMemoryMeta.classList.remove("locate-status-error");
    regionMemoryMeta.textContent = `區域偏好：已記住 ${payload.region}／${payload.city}${payload.town}（下次開啟自動套用）`;
  }
}

function readRegionPreference() {
  try {
    const raw = localStorage.getItem(REGION_STORAGE_KEY);
    if (!raw) {
      return null;
    }
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function fillCitySelect(preferredCity) {
  citySelect.innerHTML = "";
  CITY_LOCATIONS.forEach((city) => {
    const option = document.createElement("option");
    option.value = city.name;
    option.textContent = city.name;
    citySelect.append(option);
  });
  if (preferredCity && CITY_LOCATIONS.some((city) => city.name === preferredCity)) {
    citySelect.value = preferredCity;
  }
}

function fillTownshipSelect(cityName, preferredTown) {
  const towns = TOWNSHIP_LOCATIONS.filter((item) => item.city === cityName);
  townshipSelect.innerHTML = "";
  towns.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.town;
    option.textContent = item.town;
    townshipSelect.append(option);
  });
  if (preferredTown && towns.some((item) => item.town === preferredTown)) {
    townshipSelect.value = preferredTown;
  } else if (towns.length) {
    townshipSelect.value = towns[0].town;
  }
}

function setWindyLocateFocus(lat, lon) {
  if (!Number.isFinite(Number(lat)) || !Number.isFinite(Number(lon))) {
    return;
  }
  windyLocateFocus = {
    lat: Number(lat),
    lon: Number(lon),
    zoom: WINDY_TAIWAN_VIEW.zoom,
    precision: 6
  };
}

function restoreWindyLocateFocus() {
  if (
    windyLocateFocus &&
    Number.isFinite(windyLocateFocus.lat) &&
    Number.isFinite(windyLocateFocus.lon)
  ) {
    return;
  }
  const last = readPersistedMapLocatePoint();
  if (!last?.fromDevice || !Number.isFinite(last.lat) || !Number.isFinite(last.lon)) {
    return;
  }
  setWindyLocateFocus(last.lat, last.lon);
}

function applyDeviceCoordinatesToMaps(latitude, longitude, accuracy, nearest = null) {
  cctvLocateFocus = {
    lat: latitude,
    lon: longitude,
    label: nearest ? `${nearest.city}${nearest.town}｜裝置定位` : "裝置定位點",
    accuracy,
    fromDevice: true
  };
  persistMapLocatePoint(cctvLocateFocus);
  setWindyLocateFocus(latitude, longitude);
  lockWindyWrapSize();
  updateWindyTrackEmbed({ force: true });
  pendingMapLocateSync = true;
  if (warningMap) {
    updateCityFocusLayer();
    scheduleFitMapToLocateRange({ animate: true });
  }
}

function applyDeviceLocateToSiteDisplays(nearest, latitude, longitude, accuracy) {
  applyRegionSelection(getRegionForCity(nearest.city), nearest.city, nearest.town, {
    persist: true,
    updateMeta: false
  });
  applyDeviceCoordinatesToMaps(latitude, longitude, accuracy, nearest);
  syncCityCameraScopeToLocator();
  syncFreewayCameraScopeToLocator();
  setLocateCompleteMeta(nearest.city, nearest.town);
  updateMapForCityChange();
}

function applyRegionSelection(regionName, cityName, townName, { persist = true, updateMeta = true } = {}) {
  const city = cityName || "臺北市";
  suppressRegionSelectEvents = true;
  try {
    fillCitySelect(city);
    fillTownshipSelect(citySelect.value, townName);
    if (persist) {
      saveRegionPreference({ updateMeta });
    }
  } finally {
    suppressRegionSelectEvents = false;
  }
}

function initRegionSelectors() {
  const saved = readRegionPreference();
  if (saved?.city) {
    applyRegionSelection(saved.region || getRegionForCity(saved.city), saved.city, saved.town, {
      persist: false
    });
    regionMemoryMeta.textContent = `區域偏好：已套用上次選取 ${saved.region || getRegionForCity(saved.city)}／${saved.city}${saved.town || ""}`;
  } else {
    applyRegionSelection("北部", "臺北市", "信義區", { persist: false });
    regionMemoryMeta.textContent = "區域偏好：尚未儲存（選取後會自動記住）";
  }
}

function initCameraRegionSelect() {
  syncCameraRegionToLocatorArea();
}

function getCameraCityForDistrictSelect() {
  if (isNationwideCameraCity(cameraCitySelect)) {
    return "";
  }
  return getSelectedCameraCityName() || citySelect?.value || "";
}

function fillCameraDistrictSelect(preferredTown = "") {
  if (!cameraRegionSelect) {
    return;
  }
  const cityName = getCameraCityForDistrictSelect();
  const previous = cameraRegionSelect.value;
  const preferred = String(preferredTown || townshipSelect?.value || "").trim();
  cameraRegionSelect.innerHTML = "";

  const allOption = document.createElement("option");
  allOption.value = CAMERA_DISTRICT_ALL_CITY;
  allOption.textContent = cityName ? `${cityName}全部` : "全台";
  cameraRegionSelect.append(allOption);
  if (!cityName) {
    cameraRegionSelect.value = CAMERA_DISTRICT_ALL_CITY;
    return;
  }

  TOWNSHIP_LOCATIONS.filter((item) => item.city === cityName).forEach((item) => {
    const option = document.createElement("option");
    option.value = `town:${item.town}`;
    option.textContent = item.town;
    option.title = `${cityName}${item.town}（地政行政區）`;
    cameraRegionSelect.append(option);
  });

  const preferredValue = preferred ? `town:${preferred}` : "";
  const previousValid =
    previous &&
    previous !== CAMERA_DISTRICT_NEAR_POINT &&
    [...cameraRegionSelect.options].some((option) => option.value === previous);

  if (preferredValue && [...cameraRegionSelect.options].some((option) => option.value === preferredValue)) {
    cameraRegionSelect.value = preferredValue;
  } else if (previousValid) {
    cameraRegionSelect.value = previous;
  } else {
    cameraRegionSelect.value = CAMERA_DISTRICT_ALL_CITY;
  }
}

function fillCameraCitySelectOptions(selectElement, defaultValue = "follow", labels = {}) {
  if (!selectElement) {
    return;
  }
  selectElement.innerHTML = "";
  const allOption = document.createElement("option");
  allOption.value = "all";
  allOption.textContent = labels.all || "全部縣市";
  selectElement.append(allOption);

  const followOption = document.createElement("option");
  followOption.value = "follow";
  followOption.textContent = labels.follow || "跟隨上方所選縣市";
  selectElement.append(followOption);

  CITY_LOCATIONS.forEach((city) => {
    const option = document.createElement("option");
    option.value = city.name;
    option.textContent = city.name;
    selectElement.append(option);
  });
  selectElement.value = defaultValue;
}

function initCameraCitySelect() {
  fillCameraCitySelectOptions(cameraCitySelect, "follow", {
    all: "全台路口監控",
    follow: "跟隨定位範圍"
  });
  syncCityCameraScopeToLocator();
}

function initFreewayRegionSelect() {
  if (!freewayRegionSelect) {
    return;
  }
  freewayRegionSelect.innerHTML = "";
  FREEWAY_CAMERA_REGIONS.forEach((region) => {
    const option = document.createElement("option");
    option.value = region.id;
    option.textContent = region.label;
    freewayRegionSelect.append(option);
  });
  freewayRegionSelect.value = "n1";
}

function initFreewayCitySelect() {
  const locateCity = citySelect?.value || "follow";
  fillCameraCitySelectOptions(freewayCitySelect, locateCity);
  reorderSelectCitiesSouthToNorth(freewayCitySelect);
  if (freewayCitySelect) {
    freewayCitySelect.value = [...freewayCitySelect.options].some((option) => option.value === locateCity)
      ? locateCity
      : "follow";
  }
}

function getTaiwanCitySouthToNorthRank(cityName) {
  const city = CITY_LOCATIONS.find((item) => item.name === cityName);
  return Number.isFinite(city?.lat) ? city.lat : Number.POSITIVE_INFINITY;
}

function compareFreewayItemsByMileage(a, b) {
  const kmA = Number.isFinite(Number(a.km)) ? Number(a.km) : Number.POSITIVE_INFINITY;
  const kmB = Number.isFinite(Number(b.km)) ? Number(b.km) : Number.POSITIVE_INFINITY;
  if (kmA !== kmB) {
    return kmA - kmB;
  }
  return String(a.name || "").localeCompare(String(b.name || ""), "zh-Hant");
}

function reorderSelectCitiesSouthToNorth(selectElement) {
  if (!selectElement) {
    return;
  }
  const current = selectElement.value;
  const pinned = [];
  const cities = [];
  [...selectElement.options].forEach((option) => {
    if (option.value === "all" || option.value === "follow") {
      pinned.push(option);
    } else {
      cities.push(option);
    }
  });
  cities.sort(
    (a, b) => getTaiwanCitySouthToNorthRank(b.value) - getTaiwanCitySouthToNorthRank(a.value)
  );
  selectElement.replaceChildren(...pinned, ...cities);
  if ([...selectElement.options].some((option) => option.value === current)) {
    selectElement.value = current;
  }
}

function fillFreewayInterchangeSelect(preferred = "") {
  if (!freewayInterchangeSelect) {
    return;
  }
  const previous = preferred || freewayInterchangeSelect.value || "";
  const options = getFreewayInterchangeOptions();
  freewayInterchangeSelect.innerHTML = "";

  const south = options.filter((item) => item.dir === "S");
  const north = options.filter((item) => item.dir === "N");
  const other = options.filter((item) => item.dir !== "S" && item.dir !== "N");
  const groups = [
    { label: "南下", items: south },
    { label: "北上", items: north },
    { label: "其他方向", items: other }
  ].filter((group) => group.items.length);

  if (!groups.length) {
    const empty = document.createElement("option");
    empty.value = "";
    empty.textContent = "目前無監控點";
    freewayInterchangeSelect.append(empty);
    return;
  }

  groups.forEach((group) => {
    const optgroup = document.createElement("optgroup");
    optgroup.label = group.label;
    group.items.forEach((item) => {
      const option = document.createElement("option");
      option.value = `${item.dir}|${item.name}`;
      const km = formatFreewayKmLabel(item.km);
      option.textContent = [km, formatFreewayPointName(item.name)].filter(Boolean).join("｜");
      optgroup.append(option);
    });
    freewayInterchangeSelect.append(optgroup);
  });

  const values = [...freewayInterchangeSelect.options].map((option) => option.value);
  if (previous && values.includes(previous)) {
    freewayInterchangeSelect.value = previous;
    return;
  }
  const preferredName = String(preferred || "").replace(/^[NSEW]\|/, "");
  const matchByName = values.find((value) => value.endsWith(`|${preferredName}`) || value === preferredName);
  if (matchByName) {
    freewayInterchangeSelect.value = matchByName;
    return;
  }
  freewayInterchangeSelect.value = values[0] || "";
}

function getSelectedFreewayInterchangeName() {
  const value = String(freewayInterchangeSelect?.value || "").trim();
  if (!value || value === "all") {
    return "";
  }
  const parts = value.split("|");
  return parts.length > 1 ? parts.slice(1).join("|") : value;
}

function getSelectedFreewayInterchangeDir() {
  const value = String(freewayInterchangeSelect?.value || "").trim();
  const dir = value.split("|")[0];
  return /^[NSEW]$/.test(dir) ? dir : "";
}

function cameraMatchesFreewayRoute(camera, region) {
  if (!region?.routes?.length) {
    return true;
  }
  return region.routes.includes(getCameraRouteCode(camera.id));
}

function isUsableFreewayCamera(camera) {
  return Boolean(
    camera &&
      isCameraUrlUsable(camera.html) &&
      !isCameraMarkedBlackScreen(camera) &&
      !isCameraMaintenanceText(camera)
  );
}

function isGenericFreewayDirectionLabel(name = "") {
  return /^[東西南北][向上下]$/u.test(String(name || "").trim());
}

function getFreewayPointDisplayName(camera = {}) {
  const point = parseFreewayCameraPoint(camera);
  const named = (point.names || []).find((name) => {
    const text = String(name || "").trim();
    return text && !text.startsWith("--") && !isGenericFreewayDirectionLabel(text);
  });
  if (named) {
    return named;
  }
  const km = formatFreewayKmLabel(point.km);
  if (km) {
    return km;
  }
  const place = String(point.place || "").trim();
  if (place && !place.startsWith("--") && !isGenericFreewayDirectionLabel(place)) {
    return place;
  }
  return String(camera.stakenumber || camera.id || "").trim();
}

function addFreewayInterchangeOption(byKey, camera) {
  const name = getFreewayPointDisplayName(camera);
  if (!name) {
    return;
  }
  const point = parseFreewayCameraPoint(camera);
  const lat = Number(camera.gisy);
  const lon = Number(camera.gisx);
  const city = resolveFreewayCameraCity(camera);
  const dir = point.dir || "";
  const key = `${dir}|${name}`;
  if (!byKey.has(key)) {
    byKey.set(key, {
      name,
      dir,
      km: point.km,
      lat,
      lon,
      city,
      count: 1
    });
    return;
  }
  const row = byKey.get(key);
  row.count += 1;
  if (Number.isFinite(point.km) && (!Number.isFinite(row.km) || point.km < row.km)) {
    row.km = point.km;
    row.lat = lat;
    row.lon = lon;
    row.city = city || row.city;
  }
}

function collectFreewayInterchangeOptions({ ignoreRoute = false, ignoreCity = false } = {}) {
  const region = getSelectedFreewayRegion();
  const nationwide = isFreewayNationwideScope();
  const selectedCity = getSelectedFreewayCityName();
  const byKey = new Map();
  (freewayCameraDataset?.cameras || []).forEach((camera) => {
    if (!isUsableFreewayCamera(camera)) {
      return;
    }
    if (!ignoreRoute && !nationwide && !cameraMatchesFreewayRoute(camera, region)) {
      return;
    }
    if (!ignoreCity && !nationwide && selectedCity) {
      if (!sameTaiwanCityName(resolveFreewayCameraCity(camera), selectedCity)) {
        return;
      }
    }
    addFreewayInterchangeOption(byKey, camera);
  });
  return [...byKey.values()].sort(compareFreewayItemsByMileage);
}

function getFreewayNearbyFallbackOptions() {
  const selectedCity = getSelectedFreewayCityName();
  const focus = getFreewayBrowseFocus();
  const cityRec = CITY_LOCATIONS.find((item) => item.name === selectedCity);
  const lat = Number(focus?.lat ?? cityRec?.lat);
  const lon = Number(focus?.lon ?? cityRec?.lon);
  const byKey = new Map();
  (freewayCameraDataset?.cameras || []).forEach((camera) => {
    if (!isUsableFreewayCamera(camera)) {
      return;
    }
    const city = resolveFreewayCameraCity(camera);
    const textHit = selectedCity && collectFreewayCityHitsFromText(getFreewayCameraCityText(camera)).has(selectedCity);
    const clat = Number(camera.gisy);
    const clon = Number(camera.gisx);
    const near =
      Number.isFinite(lat) &&
      Number.isFinite(lon) &&
      Number.isFinite(clat) &&
      Number.isFinite(clon) &&
      getDistanceKm(clat, clon, lat, lon) <= 45;
    if (!textHit && !near && !sameTaiwanCityName(city, selectedCity)) {
      return;
    }
    addFreewayInterchangeOption(byKey, camera);
  });
  return [...byKey.values()].sort(compareFreewayItemsByMileage);
}

function getFreewayInterchangeOptions() {
  const selectedCity = getSelectedFreewayCityName();
  const nationwide = isFreewayNationwideScope();
  if (!nationwide && selectedCity) {
    const cityWide = collectFreewayInterchangeOptions({ ignoreRoute: true, ignoreCity: false });
    if (cityWide.length) {
      return cityWide;
    }
    const nearby = getFreewayNearbyFallbackOptions();
    if (nearby.length) {
      return nearby;
    }
  }
  const scoped = collectFreewayInterchangeOptions({ ignoreRoute: false, ignoreCity: false });
  if (scoped.length) {
    return scoped;
  }
  const cityOnly = collectFreewayInterchangeOptions({ ignoreRoute: true, ignoreCity: false });
  if (cityOnly.length) {
    return cityOnly;
  }
  return getFreewayNearbyFallbackOptions();
}

function findNearestCityName(lat, lon) {
  let nearestCity = "";
  let best = Infinity;
  CITY_LOCATIONS.forEach((city) => {
    const distance = getDistanceKm(lat, lon, city.lat, city.lon);
    if (distance < best) {
      best = distance;
      nearestCity = city.name;
    }
  });
  return nearestCity;
}

let freewayCityTextIndex = null;

function getFreewayCityTextIndex() {
  if (freewayCityTextIndex) {
    return freewayCityTextIndex;
  }
  const cityFull = CITY_LOCATIONS.map((city) => ({
    key: normalizeTaiwanPlaceText(city.name),
    city: city.name
  })).sort((a, b) => b.key.length - a.key.length);

  const bareCount = new Map();
  CITY_LOCATIONS.forEach((city) => {
    const bare = normalizeTaiwanPlaceText(city.name).replace(/[市縣]$/u, "");
    bareCount.set(bare, (bareCount.get(bare) || 0) + 1);
  });
  const cityBare = CITY_LOCATIONS.map((city) => ({
    key: normalizeTaiwanPlaceText(city.name).replace(/[市縣]$/u, ""),
    city: city.name
  }))
    .filter((item) => item.key.length >= 2 && bareCount.get(item.key) === 1)
    .sort((a, b) => b.key.length - a.key.length);

  const townFull = TOWNSHIP_LOCATIONS.map((item) => ({
    key: normalizeTaiwanPlaceText(item.town),
    city: item.city,
    town: item.town
  })).sort((a, b) => b.key.length - a.key.length);

  const shortHits = new Map();
  TOWNSHIP_LOCATIONS.forEach((item) => {
    const short = normalizeTaiwanPlaceText(item.town).replace(/[區鄉鎮市]$/u, "");
    if (short.length < 2) {
      return;
    }
    if (!shortHits.has(short)) {
      shortHits.set(short, item.city);
      return;
    }
    if (shortHits.get(short) !== item.city) {
      shortHits.set(short, "");
    }
  });

  const aliases = [];
  Object.entries(FREEWAY_CITY_PLACE_ALIASES).forEach(([city, places]) => {
    places.forEach((place) => {
      aliases.push({ key: normalizeTaiwanPlaceText(place), city });
    });
  });
  aliases.sort((a, b) => b.key.length - a.key.length);

  freewayCityTextIndex = { cityFull, cityBare, townFull, shortHits, aliases };
  return freewayCityTextIndex;
}

function cityFromTownship(townName = "") {
  const key = normalizeTaiwanPlaceText(townName);
  if (!key) {
    return "";
  }
  const exact = TOWNSHIP_LOCATIONS.find((item) => normalizeTaiwanPlaceText(item.town) === key);
  if (exact) {
    return exact.city;
  }
  const short = key.replace(/[區鄉鎮市]$/u, "");
  const unique = getFreewayCityTextIndex().shortHits.get(short);
  return unique || "";
}

function getTownshipFromLocation(text = "") {
  const blob = normalizeTaiwanPlaceText(text);
  if (!blob) {
    return null;
  }
  const index = getFreewayCityTextIndex();
  for (const town of index.townFull) {
    if (town.key.length >= 2 && blob.includes(town.key)) {
      return TOWNSHIP_LOCATIONS.find((item) => item.city === town.city && item.town === town.town) || null;
    }
  }
  for (const [short, city] of index.shortHits) {
    if (!city || short.length < 2 || !blob.includes(short)) {
      continue;
    }
    return (
      TOWNSHIP_LOCATIONS.find(
        (item) => item.city === city && normalizeTaiwanPlaceText(item.town).replace(/[區鄉鎮市]$/u, "") === short
      ) || null
    );
  }
  return null;
}

function collectFreewayCityHitsFromText(text = "") {
  const blob = normalizeTaiwanPlaceText(text);
  const hits = new Set();
  if (!blob) {
    return hits;
  }
  const index = getFreewayCityTextIndex();
  index.aliases.forEach((item) => {
    if (item.key && blob.includes(item.key)) {
      hits.add(item.city);
    }
  });
  index.cityFull.forEach((item) => {
    if (item.key && blob.includes(item.key)) {
      hits.add(item.city);
    }
  });
  index.cityBare.forEach((item) => {
    if (item.key && blob.includes(item.key)) {
      hits.add(item.city);
    }
  });
  index.townFull.forEach((item) => {
    if (item.key.length >= 2 && blob.includes(item.key)) {
      hits.add(item.city);
    }
  });
  index.shortHits.forEach((city, short) => {
    if (city && short.length >= 2 && blob.includes(short)) {
      hits.add(city);
    }
  });
  return hits;
}

function inferFreewayCityFromText(text = "") {
  const hits = collectFreewayCityHitsFromText(text);
  if (hits.size === 1) {
    return [...hits][0];
  }
  return "";
}

function getFreewayCameraCityText(camera = {}) {
  return [
    camera.stakenumber,
    camera.location,
    camera.roadName,
    camera.roadsection,
    camera.name,
    camera.description
  ]
    .filter(Boolean)
    .join(" ");
}

function resolveFreewayCameraCity(camera = {}) {
  const text = getFreewayCameraCityText(camera);
  const hits = collectFreewayCityHitsFromText(text);
  if (hits.size === 1) {
    return [...hits][0];
  }
  const lat = Number(camera.gisy);
  const lon = Number(camera.gisx);
  if (Number.isFinite(lat) && Number.isFinite(lon)) {
    const township = findNearestTownship(lat, lon);
    if (township?.city) {
      return township.city;
    }
    return findNearestCityName(lat, lon);
  }
  if (hits.size) {
    return [...hits][0];
  }
  const township = getTownshipFromLocation(text);
  return township?.city || cityFromTownship(text) || "";
}

function getSelectedCameraCityNameFrom(selectElement) {
  if (!selectElement) {
    return citySelect.value;
  }
  if (selectElement.value === "all") {
    return "";
  }
  if (selectElement.value === "follow") {
    return citySelect.value;
  }
  return selectElement.value;
}

function getSelectedCameraCityName() {
  return getSelectedCameraCityNameFrom(cameraCitySelect);
}

function getSelectedFreewayCityName() {
  return getSelectedCameraCityNameFrom(freewayCitySelect);
}

function isNationwideCameraCity(selectElement) {
  return String(selectElement?.value || "") === "all";
}

function isLocatorFollowCameraCity(selectElement) {
  const value = String(selectElement?.value || "follow");
  return value === "follow" || value === "";
}

function isFreewayCityManuallyScoped() {
  const value = String(freewayCitySelect?.value || "");
  return Boolean(value) && value !== "follow";
}

function isFreewayNationwideScope() {
  return freewayCitySelect?.value === "all" || freewayRegionSelect?.value === "all-freeway";
}

function getNearestFreewayMonitorName(focus = getCctvLocationFocus()) {
  const options = getFreewayInterchangeOptions();
  if (!options.length || !Number.isFinite(focus?.lat) || !Number.isFinite(focus?.lon)) {
    return "";
  }
  let bestName = "";
  let bestDistance = Infinity;
  options.forEach((item) => {
    const distance = getDistanceKm(focus.lat, focus.lon, item.lat, item.lon);
    if (distance < bestDistance) {
      bestDistance = distance;
      bestName = item.name;
    }
  });
  return bestName;
}

function getFreewayBrowseFocus() {
  const interchangeName = getSelectedFreewayInterchangeName();
  if (interchangeName && freewayInterchangeIndex?.all?.length) {
    const hit = freewayInterchangeIndex.all.find((item) => item.name === interchangeName);
    if (hit && Number.isFinite(hit.lat) && Number.isFinite(hit.lon)) {
      return { lat: hit.lat, lon: hit.lon, label: hit.name };
    }
  }
  const locate = getCctvLocationFocus();
  const cityName = getSelectedFreewayCityName();
  const locatorCity = String(citySelect?.value || "").trim();
  const followsLocator =
    freewayCitySelect?.value === "follow" ||
    (Boolean(cctvLocateFocus) && cityName && cityName === locatorCity);
  if (followsLocator && Number.isFinite(locate?.lat) && Number.isFinite(locate?.lon)) {
    return locate;
  }
  if (isFreewayCityManuallyScoped()) {
    const city = CITY_LOCATIONS.find((item) => item.name === cityName);
    if (city) {
      return { lat: city.lat, lon: city.lon, label: city.name };
    }
  }
  return locate;
}

function findNearestTownship(lat, lon) {
  let best = null;
  let bestDistance = Infinity;
  TOWNSHIP_LOCATIONS.forEach((item) => {
    const distance = getDistanceKm(lat, lon, item.lat, item.lon);
    if (distance < bestDistance) {
      bestDistance = distance;
      best = item;
    }
  });
  return best ? { ...best, distanceKm: bestDistance } : null;
}

function getGeolocationErrorMessage(error) {
  const code = error?.code;
  if (code === 1 || /denied/i.test(error?.message || "")) {
    return "定位權限未允許。請到瀏覽器「網站設定／權限」開啟位置存取，或重新整理後再按一次並選擇「允許」。";
  }
  if (code === 2) {
    return "目前無法取得位置資訊，請確認手機定位（GPS／定位服務）已開啟後再試。";
  }
  if (code === 3) {
    return "定位逾時，請移至空曠處或確認定位服務已開啟後再試。";
  }
  return `定位失敗（${error?.message || "未知錯誤"}）`;
}

async function readGeolocationPermissionState() {
  if (!navigator.permissions?.query) {
    return "unknown";
  }
  try {
    const status = await navigator.permissions.query({ name: "geolocation" });
    return status?.state || "unknown";
  } catch {
    return "unknown";
  }
}

function requestDevicePosition(options) {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation?.getCurrentPosition) {
      reject(Object.assign(new Error("unsupported"), { code: 0 }));
      return;
    }
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}

async function ensureGeolocationPermission() {
  if (!window.isSecureContext) {
    return { ok: false, message: "請以 HTTPS（或本機安全環境）開啟本站後再使用定位功能。" };
  }
  if (!navigator.geolocation) {
    return { ok: false, message: "此裝置瀏覽器不支援衛星定位。" };
  }
  // Never hard-block on Permissions API "denied" alone: some mobile browsers
  // mis-report state, and only getCurrentPosition can surface the system prompt.
  const state = await readGeolocationPermissionState();
  return { ok: true, state };
}

function syncSelectValue(selectEl, value) {
  if (!selectEl || value == null || value === "") {
    return;
  }
  const hasOption = [...selectEl.options].some((option) => option.value === value);
  if (hasOption) {
    selectEl.value = value;
  }
}

async function locateByDevice() {
  if (!locateBtn && !windyLocateBtn) {
    return;
  }

  if (!window.isSecureContext) {
    const message = "請以 HTTPS（或本機安全環境）開啟本站後再使用定位功能。";
    setLocateStatus(message, { isError: true });
    showInPageAlert("定位無法啟用", message, { timeoutMs: 9000, fullscreen: true });
    return;
  }
  if (!navigator.geolocation?.getCurrentPosition) {
    const message = "此裝置瀏覽器不支援衛星定位。";
    setLocateStatus(message, { isError: true });
    showInPageAlert("定位無法啟用", message, { timeoutMs: 9000, fullscreen: true });
    return;
  }

  setLocateButtonsDisabled(true);
  setLocateButtonText("定位中...");

  const applySuccess = (position) => {
    const { latitude, longitude, accuracy } = position.coords;
    const nearest = findNearestTownship(latitude, longitude);
    if (!nearest) {
      const message = "定位成功，但找不到對應鄉鎮，請改以手動選取縣市／鄉鎮。";
      setLocateStatus(message, { isError: true });
      setLocateButtonsDisabled(false);
      setLocateButtonText();
      return;
    }

    applyDeviceLocateToSiteDisplays(nearest, latitude, longitude, accuracy);

    armForecastNotifyByDeviceLocate();
    if (appState.subscription?.email) {
      persistSubscriptionForBackground(appState.subscription).catch(() => {});
    }

    setLocateButtonsDisabled(false);
    setLocateButtonText();
    performFullRefresh("manual")
      .then(async () => {
        updateMapForCityChange();
        pendingMapLocateSync = true;
        scheduleFitMapToLocateRange({ animate: false });
        updateWindyTrackEmbed({ force: true });
        if (appState.subscription?.email) {
          await sendSubscriptionNotification({ force: true });
        }
      })
      .catch(() => {});
  };

  const failWith = (error) => {
    const message = getGeolocationErrorMessage(error);
    setLocateStatus(message, { isError: true });
    showInPageAlert("定位無法啟用", message, { timeoutMs: 10000, fullscreen: true });
    setLocateButtonsDisabled(false);
    setLocateButtonText();
  };

  // Must call getCurrentPosition directly inside the user gesture (click).
  // Awaiting Permissions API first can break the activation chain on mobile Safari/Chrome.
  navigator.geolocation.getCurrentPosition(
    (position) => applySuccess(position),
    (firstError) => {
      navigator.geolocation.getCurrentPosition(
        (position) => applySuccess(position),
        (secondError) => failWith(secondError || firstError),
        {
          enableHighAccuracy: true,
          timeout: 30000,
          maximumAge: 0
        }
      );
    },
    {
      enableHighAccuracy: true,
      timeout: 20000,
      maximumAge: 0
    }
  );
}

function getCameraRouteCode(cameraId = "") {
  const match = String(cameraId).match(/CCTV-([A-Z0-9]+)-/i);
  return match ? match[1].toUpperCase() : "";
}

function parseFreewayCameraPoint(camera = {}) {
  const id = String(camera?.id || "");
  const match = id.match(/^CCTV-([A-Z0-9]+)-([NSEW])-(\d+(?:\.\d+)?)/i);
  const route = match ? match[1].toUpperCase() : getCameraRouteCode(id);
  const dir = match ? match[2].toUpperCase() : getFreewayCameraDirectionCode(camera);
  const km = match ? Number(match[3]) : Number.NaN;
  const names = extractFreewayInterchangeNames(camera.stakenumber);
  const kmLabel = formatFreewayKmLabel(km);
  const place = names[0] || kmLabel || getFreewayEntranceExitLabel(camera);
  return { route, dir, km, place, names };
}

function formatFreewayKmLabel(km) {
  if (!Number.isFinite(Number(km))) {
    return "";
  }
  const value = Number(km);
  const text = Number.isInteger(value) ? String(value) : value.toFixed(1).replace(/\.0$/, "");
  return `${text}K`;
}

function formatFreewayPointName(place = "") {
  return simplifyFreewayOptionLabel(place).replace(/到.+$/u, "").trim() || simplifyFreewayOptionLabel(place);
}

function getSelectedCameraDistrict() {
  const cityName = getCameraCityForDistrictSelect();
  const location = getCctvLocationFocus();
  let value = cameraRegionSelect?.value || "";

  if (!value || value === CAMERA_DISTRICT_NEAR_POINT) {
    value = CAMERA_DISTRICT_ALL_CITY;
  }

  if (value === CAMERA_DISTRICT_ALL_CITY) {
    const city = CITY_LOCATIONS.find((item) => item.name === cityName);
    return {
      id: CAMERA_DISTRICT_ALL_CITY,
      label: cityName ? `${cityName}全部` : "全國",
      lat: location?.lat ?? city?.lat,
      lon: location?.lon ?? city?.lon,
      radiusKm: CITY_CCTV_RADIUS_KM,
      town: ""
    };
  }
  if (value.startsWith("town:")) {
    const town = value.slice(5);
    const record = TOWNSHIP_LOCATIONS.find((item) => item.city === cityName && item.town === town);
    return {
      id: value,
      label: town,
      lat: record?.lat ?? location?.lat,
      lon: record?.lon ?? location?.lon,
      radiusKm: CAMERA_TOWN_RADIUS_KM,
      town
    };
  }

  const city = CITY_LOCATIONS.find((item) => item.name === cityName);
  return {
    id: CAMERA_DISTRICT_ALL_CITY,
    label: cityName ? `${cityName}全部` : "全國",
    lat: location?.lat ?? city?.lat,
    lon: location?.lon ?? city?.lon,
    radiusKm: 9999,
    town: ""
  };
}

function getSelectedCameraRegion() {
  return getSelectedCameraDistrict();
}

function getActiveCityCctvRadiusKm() {
  return Number(getSelectedCameraDistrict()?.radiusKm) || CITY_CCTV_RADIUS_KM;
}

function syncCameraRegionToLocatorArea() {
  fillCameraDistrictSelect("");
  if (cameraRegionSelect) {
    cameraRegionSelect.value = CAMERA_DISTRICT_ALL_CITY;
  }
  if (cameraKeyword) {
    cameraKeyword.value = "";
  }
}

function refreshCityCameraDistrictOptions() {
  if (isNationwideCameraCity(cameraCitySelect)) {
    fillCameraDistrictSelect("");
    if (cameraRegionSelect) {
      cameraRegionSelect.value = CAMERA_DISTRICT_ALL_CITY;
    }
    return;
  }
  if (isLocatorFollowCameraCity(cameraCitySelect)) {
    fillCameraDistrictSelect("");
    if (cameraRegionSelect) {
      cameraRegionSelect.value = CAMERA_DISTRICT_ALL_CITY;
    }
  }
}

function syncCityCameraScopeToLocator() {
  if (cameraCitySelect) {
    syncSelectValue(cameraCitySelect, "follow");
  }
  syncCameraRegionToLocatorArea();
}

function getCameraKeywordQuery() {
  return String(cameraKeyword?.value || "").trim();
}

function syncCameraScopeToLocatorCityForKeyword() {
  const keyword = getCameraKeywordQuery();
  if (!keyword) {
    return;
  }
  if (isNationwideCameraCity(cameraCitySelect) || !isLocatorFollowCameraCity(cameraCitySelect)) {
    if (cameraRegionSelect && !isNationwideCameraCity(cameraCitySelect)) {
      cameraRegionSelect.value = CAMERA_DISTRICT_ALL_CITY;
    }
    return;
  }
  const locatorCity = String(citySelect?.value || "").trim();
  const allCityLabel = [...(cameraRegionSelect?.options || [])].find(
    (option) => option.value === CAMERA_DISTRICT_ALL_CITY
  )?.textContent || "";
  const districtCityMismatch = Boolean(locatorCity) && allCityLabel && !allCityLabel.includes(locatorCity);
  if (!cameraRegionSelect?.options?.length || districtCityMismatch) {
    fillCameraDistrictSelect("");
  }
  if (cameraRegionSelect) {
    cameraRegionSelect.value = CAMERA_DISTRICT_ALL_CITY;
  }
}

function getNearestFreewayRegionId(focus = getCctvLocationFocus()) {
  const cameras = freewayCameraDataset?.cameras || [];
  const preferredCity = getSelectedFreewayCityName() || String(citySelect?.value || "").trim();
  let bestId = "n1";
  let bestDistance = Infinity;
  let bestInCityId = "";
  let bestInCityDistance = Infinity;
  cameras.forEach((camera) => {
    if (!isUsableFreewayCamera(camera)) {
      return;
    }
    const lat = Number(camera.gisy);
    const lon = Number(camera.gisx);
    if (!Number.isFinite(lat) || !Number.isFinite(lon) || !Number.isFinite(focus?.lat) || !Number.isFinite(focus?.lon)) {
      return;
    }
    const region = FREEWAY_CAMERA_REGIONS.find((item) => item.routes?.includes(getCameraRouteCode(camera.id)));
    if (!region) {
      return;
    }
    const distance = getDistanceKm(focus.lat, focus.lon, lat, lon);
    if (distance < bestDistance) {
      bestDistance = distance;
      bestId = region.id;
    }
    if (
      preferredCity &&
      sameTaiwanCityName(resolveFreewayCameraCity(camera), preferredCity) &&
      distance < bestInCityDistance
    ) {
      bestInCityDistance = distance;
      bestInCityId = region.id;
    }
  });
  return bestInCityId || bestId;
}

function applyLocateDefaultFreewayRegion({ force = false } = {}) {
  if (!freewayRegionSelect) {
    return;
  }
  if (!force && freewayCitySelect?.value === "all") {
    return;
  }
  const regionId = getNearestFreewayRegionId();
  if ([...freewayRegionSelect.options].some((option) => option.value === regionId)) {
    freewayRegionSelect.value = regionId;
  }
}

function applyLocateDefaultFreewayScope() {
  const cityName = citySelect?.value || "";
  if (freewayCitySelect) {
    if (cityName && [...freewayCitySelect.options].some((option) => option.value === cityName)) {
      freewayCitySelect.value = cityName;
    } else {
      syncSelectValue(freewayCitySelect, "follow");
    }
  }
  applyLocateDefaultFreewayRegion({ force: true });
  fillFreewayInterchangeSelect();
  const nearestPoint = getNearestFreewayMonitorName();
  fillFreewayInterchangeSelect(nearestPoint);
}

function syncFreewayCameraScopeToLocator() {
  applyLocateDefaultFreewayScope();
}

function getSelectedFreewayRegion() {
  return (
    FREEWAY_CAMERA_REGIONS.find((item) => item.id === freewayRegionSelect?.value) ?? FREEWAY_CAMERA_REGIONS[0]
  );
}

function getCameraFocusPoint(region, selectedCityName) {
  const city = CITY_LOCATIONS.find((item) => item.name === selectedCityName);
  const location = getCctvLocationFocus();
  if (region?.id === CAMERA_DISTRICT_NEAR_POINT || region?.id === "near-city") {
    return {
      lat: location?.lat ?? city?.lat,
      lon: location?.lon ?? city?.lon
    };
  }
  return {
    lat: region?.lat ?? location?.lat ?? city?.lat,
    lon: region?.lon ?? location?.lon ?? city?.lon
  };
}

function getCityCameraFocusPoint() {
  const locate = getCctvLocationFocus();
  const selectedCity = getSelectedCameraCityName() || citySelect?.value || "";
  const locatorCity = citySelect?.value || "";
  if (
    isNationwideCameraCity(cameraCitySelect) ||
    isLocatorFollowCameraCity(cameraCitySelect) ||
    sameTaiwanCityName(selectedCity, locatorCity)
  ) {
    return { lat: locate.lat, lon: locate.lon };
  }
  return getCameraFocusPoint(getSelectedCameraDistrict(), selectedCity);
}

function getFreewayCameraFocusPoint() {
  return getFreewayBrowseFocus();
}

function isFreewayCameraStream(url = "") {
  return /cctvn\.freeway\.gov\.tw|abs2mjpg|bmjpg\?camera=/i.test(String(url || ""));
}

function simplifyFreewayOptionLabel(text = "") {
  const raw = String(text || "").trim();
  const simplified = raw.replaceAll("交流道", "").replace(/[ \t]+/g, " ").trim();
  return simplified || raw;
}

function stripFreewayDirectionFromLabel(text = "") {
  return String(text || "")
    .replace(/[｜|／/]\s*(北向|南向|東向|西向|北上|南下)\s*$/u, "")
    .replace(/^\s*(北向|南向|東向|西向|北上|南下)\s*[｜|／/]/u, "")
    .replace(/\s*(北向|南向|東向|西向|北上|南下)\s*$/u, "")
    .trim();
}

function getCameraEntranceExitLabel(camera) {
  const text = String(camera?.stakenumber || "").trim();
  const match = text.match(/[（(]([^）)]+)[）)]/);
  if (match?.[1]) {
    return simplifyFreewayOptionLabel(match[1]);
  }
  const names = extractFreewayInterchangeNames(text);
  if (names.length) {
    return simplifyFreewayOptionLabel(names.join("到"));
  }
  return camera?.id || "出入口";
}

function getFreewayCameraDirectionCode(camera = {}) {
  const id = String(camera?.id || "").toUpperCase();
  const stake = String(camera?.stakenumber || "");
  const blob = `${id} ${stake}`;
  if (/北上|北向/.test(blob)) {
    return "N";
  }
  if (/南下|南向/.test(blob)) {
    return "S";
  }
  if (/東向/.test(blob)) {
    return "E";
  }
  if (/西向/.test(blob)) {
    return "W";
  }
  const tunnel = id.match(/^CCTV-[A-Z0-9]+-T-.*-([NSEW])(?:-\d+)?$/);
  if (tunnel) {
    return tunnel[1];
  }
  const standard = id.match(/^CCTV-[A-Z0-9]+-([NSEW])-/);
  if (standard) {
    return standard[1];
  }
  return "";
}

function getFreewayDirectionLabel(code = "") {
  if (code === "N") {
    return "北上";
  }
  if (code === "S") {
    return "南下";
  }
  if (code === "E") {
    return "東向";
  }
  if (code === "W") {
    return "西向";
  }
  return "";
}

function groupFreewayCamerasByDirection(cameras = []) {
  const buckets = { N: [], S: [], E: [], W: [] };
  cameras.forEach((camera) => {
    const code = camera.directionCode || getFreewayCameraDirectionCode(camera);
    if (buckets[code]) {
      buckets[code].push(camera);
    }
  });
  const northSouthCount = buckets.N.length + buckets.S.length;
  const eastWestCount = buckets.E.length + buckets.W.length;
  const codes = northSouthCount >= eastWestCount ? ["S", "N"] : ["E", "W"];
  return codes.map((code) => ({
    code,
    label: getFreewayDirectionLabel(code),
    cameras: buckets[code]
  }));
}

function stopFreewayFeedRefresh(img) {
  if (img) {
    const timer = freewayFeedTimers.get(img);
    if (timer) {
      window.clearInterval(timer);
      freewayFeedTimers.delete(img);
    }
    return;
  }
  freewayFeedTimers.forEach((timer) => window.clearInterval(timer));
  freewayFeedTimers.clear();
}

function startFreewayFeedRefresh(img, url) {
  stopFreewayFeedRefresh(img);
  if (!img || !url) {
    return Promise.resolve(false);
  }
  const apply = () => {
    if (!img?.isConnected) {
      stopFreewayFeedRefresh(img);
      return;
    }
    const joiner = String(url).includes("?") ? "&" : "?";
    img.src = `${url}${joiner}_ts=${Date.now()}`;
  };
  const ready = waitForImageLoad(img, 8000);
  apply();
  freewayFeedTimers.set(img, window.setInterval(apply, 1600));
  return ready;
}

function waitForImageLoad(img, timeoutMs = 8000) {
  return new Promise((resolve) => {
    if (!img) {
      resolve(false);
      return;
    }
    let settled = false;
    const finish = (ok) => {
      if (settled) {
        return;
      }
      settled = true;
      img.removeEventListener("load", onLoad);
      img.removeEventListener("error", onError);
      window.clearTimeout(timer);
      resolve(ok);
    };
    const onLoad = () => finish(img.naturalWidth > 0);
    const onError = () => finish(false);
    img.addEventListener("load", onLoad);
    img.addEventListener("error", onError);
    const timer = window.setTimeout(() => finish(img.naturalWidth > 0), timeoutMs);
    if (img.complete && img.naturalWidth > 0) {
      finish(true);
    }
  });
}

function getEarthquakeDisasterLevel(quake) {
  const mag = Number(quake?.magnitude) || 0;
  const intensity = Number(quake?.intensityValue) || 0;
  if (mag >= 6 || intensity >= 5) {
    return "red";
  }
  if (mag >= 5 || intensity >= 4) {
    return "orange";
  }
  if (mag >= 4 || intensity >= 3) {
    return "yellow";
  }
  return "gray";
}

function syncEarthquakeSummaryLevel(quake) {
  if (!earthquakeSummary) {
    return;
  }
  ["eq-level-gray", "eq-level-yellow", "eq-level-orange", "eq-level-red", "intensity-3-plus", "intensity-below-3"].forEach(
    (name) => {
      earthquakeSummary.classList.remove(name);
    }
  );
  if (!quake) {
    return;
  }
  earthquakeSummary.classList.add(`eq-level-${getEarthquakeDisasterLevel(quake)}`);
}

function getFreewayEntranceExitLabel(camera) {
  const text = String(camera?.stakenumber || "").trim();
  const match = text.match(/[（(]([^）)]+)[）)]/);
  if (match?.[1] && !isGenericFreewayDirectionLabel(match[1])) {
    return simplifyFreewayOptionLabel(match[1]);
  }
  const names = extractFreewayInterchangeNames(text);
  if (names.length) {
    return simplifyFreewayOptionLabel(names.join("到"));
  }
  if (text) {
    return simplifyFreewayOptionLabel(text);
  }
  return "出入口";
}

function formatFreewayCameraCaption(camera) {
  const point = parseFreewayCameraPoint(camera);
  const direction = getFreewayDirectionLabel(point.dir || camera.directionCode);
  const km = formatFreewayKmLabel(point.km);
  const stake = String(camera?.stakenumber || "").trim();
  const segment = stripFreewayDirectionFromLabel(
    stake
      ? simplifyFreewayOptionLabel(stake).replace(/^國道\d+號/u, "").replace(/^[()（）]+|[()（）]+$/g, "")
      : formatFreewayPointName(point.place)
  );
  return [direction, km, segment].filter(Boolean).join("｜");
}

function formatFreewayChannelLabel(camera) {
  const point = parseFreewayCameraPoint(camera);
  const km = formatFreewayKmLabel(point.km);
  const segment = formatFreewayPointName(point.place || getCameraEntranceExitLabel(camera));
  return [km, segment].filter(Boolean).join("｜");
}

function isCameraUrlUsable(url) {
  if (!url) {
    return false;
  }
  try {
    const host = new URL(url).hostname;
    return !DISABLED_CAMERA_HOSTS.has(host);
  } catch {
    return false;
  }
}

function getFreewayRadiusCacheKey(focus) {
  const lat = Number.isFinite(focus?.lat) ? focus.lat.toFixed(3) : "na";
  const lon = Number.isFinite(focus?.lon) ? focus.lon.toFixed(3) : "na";
  const freewayRegion = getSelectedFreewayRegion();
  return `${lat},${lon}|${freewayRegion.id}`;
}

function getFreewayCamerasBeforeRadiusFilter() {
  if (!freewayCameraDataset || !Array.isArray(freewayCameraDataset.cameras)) {
    return [];
  }
  const freewayRegion = getSelectedFreewayRegion();

  return freewayCameraDataset.cameras
    .filter((camera) => isCameraUrlUsable(camera.html))
    .filter((camera) => {
      const routeCode = getCameraRouteCode(camera.id);
      if (freewayRegion.routes?.length) {
        return freewayRegion.routes.includes(routeCode);
      }
      return true;
    });
}

function resolveFreewayCctvRadiusKm() {
  return FREEWAY_CCTV_RADIUS_KM;
}

function extractFreewayInterchangeNames(stakenumber = "") {
  const text = String(stakenumber || "");
  const names = [];
  const push = (value) => {
    const name = String(value || "").trim();
    if (name && !names.includes(name)) {
      names.push(name);
    }
  };
  const placeMatches = text.matchAll(/([^()到＋+、，,\s]{1,20}?(?:系統交流道|交流道|轉接道|服務區|休息站|系統))/g);
  for (const match of placeMatches) {
    push(match[1]);
  }
  const endMatches = text.matchAll(/([^()到＋+、，,\s]{1,16}端)(?![0-9A-Za-z\u4e00-\u9fff])/g);
  for (const match of endMatches) {
    push(match[1]);
  }
  return names.filter(
    (name, _index, all) => !all.some((other) => other !== name && other.startsWith(name))
  );
}

function freewayPlaceAliases(name = "") {
  const raw = normalizeTaiwanPlaceText(name);
  const aliases = new Set();
  if (!raw) {
    return aliases;
  }
  aliases.add(raw);
  if (/(系統交流道|交流道|端|系統)$/u.test(raw)) {
    const key = raw.replace(/(系統交流道|交流道|端|系統)$/u, "");
    if (key) {
      aliases.add(key);
      aliases.add(`${key}交流道`);
      aliases.add(`${key}系統交流道`);
      aliases.add(`${key}系統`);
      aliases.add(`${key}端`);
    }
  }
  return aliases;
}

function cameraMatchesFreewayInterchange(camera, interchangeName) {
  const target = String(interchangeName || "").trim();
  if (!target) {
    return true;
  }
  const point = parseFreewayCameraPoint(camera);
  if (point.place === target || point.names.includes(target)) {
    return true;
  }
  if (formatFreewayKmLabel(point.km) === target || getFreewayPointDisplayName(camera) === target) {
    return true;
  }
  const stake = String(camera?.stakenumber || "");
  const names = extractFreewayInterchangeNames(stake);
  const aliases = freewayPlaceAliases(target);
  if (names.some((name) => aliases.has(normalizeTaiwanPlaceText(name)) || name === target)) {
    return true;
  }
  const stakeNorm = normalizeTaiwanPlaceText(stake);
  return [...aliases].some((alias) => alias && stakeNorm.includes(alias));
}

function buildFreewayInterchangeIndex(cameras = []) {
  const byName = new Map();
  cameras.forEach((camera) => {
    const lat = Number(camera.gisy);
    const lon = Number(camera.gisx);
    if (!Number.isFinite(lat) || !Number.isFinite(lon)) {
      return;
    }
    const names = extractFreewayInterchangeNames(camera.stakenumber);
    const place = getFreewayPointDisplayName(camera);
    const labels = names.length ? names : place ? [place] : [];
    if (!labels.length) {
      return;
    }
    const city = resolveFreewayCameraCity(camera);
    labels.forEach((name) => {
      if (!byName.has(name)) {
        byName.set(name, { name, latSum: 0, lonSum: 0, count: 0, cityVotes: new Map() });
      }
      const row = byName.get(name);
      row.latSum += lat;
      row.lonSum += lon;
      row.count += 1;
      if (city) {
        row.cityVotes.set(city, (row.cityVotes.get(city) || 0) + 1);
      }
    });
  });

  const interchanges = [...byName.values()].map((row) => {
    const lat = row.latSum / row.count;
    const lon = row.lonSum / row.count;
    let votedCity = "";
    let votedCount = 0;
    row.cityVotes.forEach((count, city) => {
      if (count > votedCount) {
        votedCount = count;
        votedCity = city;
      }
    });
    let nearestCity = votedCity || CITY_LOCATIONS[0]?.name || "";
    let best = Infinity;
    CITY_LOCATIONS.forEach((city) => {
      const distance = getDistanceKm(lat, lon, city.lat, city.lon);
      if (distance < best) {
        best = distance;
        if (!votedCity) {
          nearestCity = city.name;
        }
      }
    });
    return {
      name: row.name,
      lat,
      lon,
      city: nearestCity,
      cityDistanceKm: best
    };
  });

  return {
    all: interchanges,
    byCity: interchanges.reduce((acc, item) => {
      if (!acc[item.city]) {
        acc[item.city] = [];
      }
      acc[item.city].push(item);
      return acc;
    }, {})
  };
}

function getFreewayInterchangesForCity(cityName) {
  if (!freewayInterchangeIndex) {
    return [];
  }
  if (!cityName) {
    return freewayInterchangeIndex.all;
  }
  const exact = freewayInterchangeIndex.byCity[cityName] || [];
  if (exact.length) {
    return exact;
  }
  const city = CITY_LOCATIONS.find((item) => item.name === cityName);
  if (!city) {
    return [];
  }
  return freewayInterchangeIndex.all.filter(
    (item) => getDistanceKm(item.lat, item.lon, city.lat, city.lon) <= 35
  );
}

function getMinDistanceToPointsKm(lat, lon, points = []) {
  let best = Infinity;
  points.forEach((point) => {
    const distance = getDistanceKm(lat, lon, point.lat, point.lon);
    if (distance < best) {
      best = distance;
    }
  });
  return best;
}

function resolveCameraLandDistrict(camera = {}) {
  const city = String(camera.city || "").trim();
  const lat = Number(camera.gisy);
  const lon = Number(camera.gisx);
  if (!city || !Number.isFinite(lat) || !Number.isFinite(lon)) {
    return "";
  }
  const towns = TOWNSHIP_LOCATIONS.filter((item) => sameTaiwanCityName(item.city, city));
  if (!towns.length) {
    return "";
  }
  let best = null;
  towns.forEach((town) => {
    const distanceKm = getDistanceKm(lat, lon, town.lat, town.lon);
    if (!best || distanceKm < best.distanceKm) {
      best = { town: town.town, distanceKm };
    }
  });
  return best?.town || "";
}

function appendUniqueCameras(target, cameras = []) {
  const seen = new Set(target.map((camera) => String(camera.id || camera.html || "")));
  cameras.forEach((camera) => {
    const key = String(camera.id || camera.html || "");
    if (!key || seen.has(key)) {
      return;
    }
    seen.add(key);
    target.push(camera);
  });
  return target;
}

function cameraTextMentionsTown(camera, townName) {
  const town = normalizeTaiwanPlaceText(townName);
  if (!town) {
    return false;
  }
  const blob = normalizeTaiwanPlaceText(
    `${camera?.name || ""} ${camera?.roadName || ""} ${camera?.stakenumber || ""} ${camera?.description || ""} ${camera?.crossRoad || ""} ${camera?.landTown || ""}`
  );
  if (blob.includes(town)) {
    return true;
  }
  const shortTown = town.replace(/[區鄉鎮市]$/u, "");
  return shortTown.length >= 2 && blob.includes(shortTown);
}

function cameraMatchesSelectedTownship(camera, townName) {
  if (!townName) {
    return true;
  }
  const landTown = camera?.landTown || resolveCameraLandDistrict(camera);
  if (sameTaiwanTownshipName(landTown, townName)) {
    return true;
  }
  return cameraTextMentionsTown({ ...camera, landTown }, townName);
}

function scoreCityCameras({ cityName = "", keyword = "", radiusOnly = false, townName = "" } = {}) {
  if (!cityCameraDataset || !Array.isArray(cityCameraDataset.cameras)) {
    return [];
  }
  const normalize = (text) => String(text || "").toLowerCase().replaceAll("臺", "台");
  const focusPoint = getCityCameraFocusPoint();
  const focus = getCctvLocationFocus();
  const keywordNorm = normalize(keyword);
  const radiusKm = CITY_CCTV_RADIUS_KM;
  const nearbyKm = CITY_CCTV_NEARBY_KM;

  return dedupeCamerasByIdentity(
    cityCameraDataset.cameras
      .filter((camera) => isCameraUrlUsable(camera.html))
      .filter((camera) => !isCameraMarkedBlackScreen(camera))
      .filter((camera) => !isCameraMaintenanceText(camera))
      .filter((camera) => !cityName || sameTaiwanCityName(camera.city, cityName))
      .map((camera) => {
        const distanceKm =
          Number.isFinite(focusPoint?.lat) && Number.isFinite(focusPoint?.lon)
            ? getDistanceKm(focusPoint.lat, focusPoint.lon, Number(camera.gisy), Number(camera.gisx))
            : Infinity;
        const landTown = resolveCameraLandDistrict(camera);
        return {
          ...camera,
          distanceKm,
          landTown,
          focusLabel: focus.label,
          areaLabel: landTown ? `${camera.city || ""}${landTown}` : camera.city || focus.label,
          withinLocateRadius: Number.isFinite(distanceKm) && distanceKm <= radiusKm,
          withinNearby: Number.isFinite(distanceKm) && distanceKm <= nearbyKm,
          locateFallback: false
        };
      })
      .filter((camera) => {
        if (keywordNorm) {
          const haystack = normalize(
            `${camera.id ?? ""} ${camera.stakenumber ?? ""} ${camera.roadName ?? ""} ${camera.crossRoad ?? ""} ${camera.description ?? ""} ${camera.city ?? ""} ${camera.landTown ?? ""}`
          );
          if (!haystack.includes(keywordNorm)) {
            return false;
          }
        }
        if (townName && !cameraMatchesSelectedTownship(camera, townName)) {
          return false;
        }
        if (radiusOnly) {
          return camera.withinLocateRadius;
        }
        return true;
      })
      .sort((a, b) => a.distanceKm - b.distanceKm)
  );
}

function getFilteredSortedCityCameras({ forMap = false } = {}) {
  if (!cityCameraDataset || !Array.isArray(cityCameraDataset.cameras)) {
    return [];
  }
  const nationwide = isNationwideCameraCity(cameraCitySelect);
  const keyword = getCameraKeywordQuery();
  const cityName = nationwide ? "" : getSelectedCameraCityName() || citySelect?.value || "";
  const townName = getSelectedCameraDistrict()?.town || "";
  const ordered = [];

  const followLocate =
    !nationwide &&
    !townName &&
    !keyword &&
    (isLocatorFollowCameraCity(cameraCitySelect) ||
      sameTaiwanCityName(cityName, citySelect?.value || ""));

  if (keyword) {
    appendUniqueCameras(ordered, scoreCityCameras({ cityName, keyword, townName }));
    if (townName && !ordered.length) {
      appendUniqueCameras(ordered, scoreCityCameras({ cityName, keyword }));
    }
  } else if (townName) {
    appendUniqueCameras(ordered, scoreCityCameras({ cityName, townName }));
  } else if (nationwide) {
    appendUniqueCameras(ordered, scoreCityCameras({ cityName: "" }));
  } else if (followLocate) {
    appendUniqueCameras(ordered, scoreCityCameras({ radiusOnly: true }));
  } else {
    appendUniqueCameras(ordered, scoreCityCameras({ cityName }));
  }

  if (forMap) {
    return ordered;
  }
  return ordered;
}

function enrichCityCameraForMap(camera, focusPoint, focus) {
  const focusLat = Number(focusPoint?.lat);
  const focusLon = Number(focusPoint?.lon);
  const radiusKm = CITY_CCTV_RADIUS_KM;
  const lat = Number(camera.gisy);
  const lon = Number(camera.gisx);
  const distanceKm =
    Number.isFinite(focusLat) && Number.isFinite(focusLon) && Number.isFinite(lat) && Number.isFinite(lon)
      ? getDistanceKm(focusLat, focusLon, lat, lon)
      : Number.isFinite(camera.distanceKm)
        ? camera.distanceKm
        : Infinity;
  const landTown = camera.landTown || resolveCameraLandDistrict(camera);
  return {
    ...camera,
    distanceKm,
    landTown,
    focusLabel: focus?.label || camera.city || "",
    areaLabel: landTown ? `${camera.city || ""}${landTown}` : camera.city || focus?.label || "",
    withinLocateRadius: Number.isFinite(distanceKm) && distanceKm <= radiusKm,
    withinNearby: Number.isFinite(distanceKm) && distanceKm <= CITY_CCTV_NEARBY_KM
  };
}

function setVerifiedCityCameras(cameras = []) {
  appState.verifiedCityCameras = dedupeCamerasByIdentity(cameras)
    .filter((camera) => Number.isFinite(Number(camera.gisy)) && Number.isFinite(Number(camera.gisx)))
    .slice(0, CITY_CCTV_PREVIEW_LIMIT);
  updateCameraMapLayer();
}

function toHantStreetName(text = "") {
  const map = {
    门: "門",
    号: "號",
    东: "東",
    区: "區",
    镇: "鎮",
    乡: "鄉",
    与: "與",
    邻: "鄰",
    桥: "橋",
    线: "線",
    环: "環",
    国: "國",
    广: "廣",
    场: "場",
    乐: "樂",
    义: "義",
    华: "華",
    汉: "漢",
    湾: "灣",
    点: "點",
    连: "連",
    过: "過"
  };
  return String(text || "").replace(/[门号东区镇乡与邻桥线环国广场乐义华汉湾点连过]/g, (ch) => map[ch] || ch);
}

function getCachedCameraPlace(camera) {
  const key = getCameraCoordKey(camera);
  if (!key) {
    return null;
  }
  const cached = loadCctvRoadCache()[key];
  if (!cached || typeof cached !== "object" || !cached.label) {
    return null;
  }
  return cached;
}

function setCachedCameraPlace(camera, place) {
  const key = getCameraCoordKey(camera);
  if (!key || !place?.label) {
    return;
  }
  loadCctvRoadCache()[key] = place;
  saveCctvRoadCache();
}

function applyCameraMapPlace(camera, place) {
  if (!camera || !place?.label) {
    return place;
  }
  camera.mapPlace = place;
  if (place.type === "intersection" && Array.isArray(place.roads) && place.roads[0]) {
    camera.displayRoadName = place.roads[0];
    camera.displayCrossRoad = place.roads[1] || "";
  } else if (place.road) {
    camera.displayRoadName = place.house ? `${place.road} ${place.house}` : place.road;
    camera.displayCrossRoad = "";
    camera.nearestHouse = place.house || "";
  }
  return place;
}

function getCameraDisplayRoads(camera) {
  const place = camera?.mapPlace || getCachedCameraPlace(camera);
  if (place) {
    applyCameraMapPlace(camera, place);
    if (place.type === "intersection" && Array.isArray(place.roads) && place.roads.length >= 2) {
      return [place.roads[0], place.roads[1]];
    }
    if (place.road) {
      return [place.house ? `${place.road} ${place.house}` : place.road, ""];
    }
    if (place.label) {
      return [place.label, ""];
    }
  }
  const [roadA, roadB] = getCameraIntersectionRoads(camera, { allowLookup: false });
  const cleanA =
    roadA && roadA !== "未提供路名" && !looksLikeCameraCode(roadA) ? roadA : "";
  const cleanB =
    roadB &&
    roadB !== CCTV_MISSING_CROSS_LABEL &&
    roadB !== CCTV_CROSS_LOOKUP_LABEL &&
    !looksLikeCameraCode(roadB)
      ? roadB
      : "";
  return [cleanA, cleanB];
}

function formatCameraIntersectionShort(camera) {
  const place = camera?.mapPlace || getCachedCameraPlace(camera);
  if (place?.label) {
    applyCameraMapPlace(camera, place);
    return place.label;
  }
  const [cleanA, cleanB] = getCameraDisplayRoads(camera);
  if (cleanA && cleanB) {
    return `${cleanA} × ${cleanB}`;
  }
  if (cleanA) {
    return cleanA;
  }
  if (cleanB) {
    return cleanB;
  }
  const fallback = normalizeRoadToken(camera?.roadName || camera?.stakenumber || camera?.description || "");
  return fallback || "路口";
}

function getCityCamerasForDisasterMap() {
  if (!cityCameraDataset || !Array.isArray(cityCameraDataset.cameras)) {
    return [];
  }
  const focus = getMapLocatePoint();
  if (!focus) {
    return [];
  }
  const focusPoint = { lat: focus.lat, lon: focus.lon };
  return declutterMapItems(
    dedupeCamerasByIdentity(
      cityCameraDataset.cameras
        .filter((camera) => Number.isFinite(Number(camera.gisy)) && Number.isFinite(Number(camera.gisx)))
        .map((camera) => enrichCityCameraForMap(camera, focusPoint, focus))
        .filter((camera) => isWithinMapLocateRange(Number(camera.gisy), Number(camera.gisx)))
        .sort((a, b) => a.distanceKm - b.distanceKm)
    ),
    (camera) => ({ lat: Number(camera.gisy), lon: Number(camera.gisx) })
  );
}

function dedupeCamerasByIdentity(cameras = []) {
  const seenIds = new Set();
  const seenUrls = new Set();
  return cameras.filter((camera) => {
    const id = String(camera?.id || "").trim();
    const url = String(camera?.html || "").trim().toLowerCase();
    if (id && seenIds.has(id)) {
      return false;
    }
    if (url && seenUrls.has(url)) {
      return false;
    }
    if (id) {
      seenIds.add(id);
    }
    if (url) {
      seenUrls.add(url);
    }
    return Boolean(id || url);
  });
}

function scoreFreewayCameras({
  ignoreRoute = false,
  ignoreCityRadius = false,
  ignoreInterchange = false,
  radiusKm = FREEWAY_CCTV_RADIUS_KM
} = {}) {
  if (!freewayCameraDataset || !Array.isArray(freewayCameraDataset.cameras)) {
    return [];
  }
  const selectedCity = isNationwideCameraCity(freewayCitySelect) ? "" : getSelectedFreewayCityName();
  const region = getSelectedFreewayRegion();
  const interchangeName = ignoreInterchange ? "" : getSelectedFreewayInterchangeName();
  const interchanges = getFreewayInterchangesForCity(ignoreCityRadius ? "" : selectedCity).filter((item) => {
    if (!interchangeName) {
      return true;
    }
    return item.name === interchangeName;
  });
  const weatherFocus = getFreewayBrowseFocus();
  const normalize = (text) => String(text || "").toLowerCase().replaceAll("臺", "台");
  const targetInterchange = normalize(interchangeName);

  return dedupeCamerasByIdentity(
    freewayCameraDataset.cameras
      .filter((camera) => isCameraUrlUsable(camera.html))
      .filter((camera) => !isCameraMarkedBlackScreen(camera))
      .filter((camera) => !isCameraMaintenanceText(camera))
      .filter((camera) => ignoreRoute || cameraMatchesFreewayRoute(camera, region))
      .map((camera) => {
        const lat = Number(camera.gisy);
        const lon = Number(camera.gisx);
        const names = extractFreewayInterchangeNames(camera.stakenumber);
        const nameHit = targetInterchange
          ? names.some((name) => normalize(name) === targetInterchange)
          : false;
        const focusDistanceKm =
          Number.isFinite(weatherFocus.lat) && Number.isFinite(weatherFocus.lon)
            ? getDistanceKm(weatherFocus.lat, weatherFocus.lon, lat, lon)
            : Infinity;
        const interchangeDistanceKm = interchanges.length
          ? getMinDistanceToPointsKm(lat, lon, interchanges)
          : focusDistanceKm;
        const distanceKm = nameHit
          ? 0
          : interchangeName
            ? interchangeDistanceKm
            : Number.isFinite(focusDistanceKm)
              ? focusDistanceKm
              : interchangeDistanceKm;
        return {
          ...camera,
          distanceKm,
          routeCode: getCameraRouteCode(camera.id),
          directionCode: getFreewayCameraDirectionCode(camera),
          focusLabel: interchangeName
            ? simplifyFreewayOptionLabel(interchangeName)
            : selectedCity
              ? `${selectedCity}｜${region.label}`
              : `公路局即時｜${region.label}`,
          interchangeNames: names
        };
      })
      .filter((camera) => {
        if (interchangeName) {
          return cameraMatchesFreewayInterchange(camera, interchangeName);
        }
        if (!selectedCity || ignoreCityRadius) {
          return true;
        }
        return Number.isFinite(camera.distanceKm) && camera.distanceKm <= radiusKm;
      })
      .sort((a, b) => {
        const pointA = parseFreewayCameraPoint(a);
        const pointB = parseFreewayCameraPoint(b);
        const kmA = Number.isFinite(pointA.km) ? pointA.km : Number.POSITIVE_INFINITY;
        const kmB = Number.isFinite(pointB.km) ? pointB.km : Number.POSITIVE_INFINITY;
        if (kmA !== kmB) {
          return kmA - kmB;
        }
        return a.distanceKm - b.distanceKm;
      })
  );
}

function getFilteredSortedFreewayCameras() {
  if (!freewayCameraDataset || !Array.isArray(freewayCameraDataset.cameras)) {
    return [];
  }
  const selectedCity = isNationwideCameraCity(freewayCitySelect) ? "" : getSelectedFreewayCityName();
  const interchangeName = getSelectedFreewayInterchangeName();
  const nationwide = isFreewayNationwideScope();
  const attempts = interchangeName
    ? [
        {
          ignoreRoute: true,
          ignoreCityRadius: true,
          ignoreInterchange: false,
          radiusKm: 3
        }
      ]
    : [
        {
          ignoreRoute: false,
          ignoreCityRadius: !selectedCity,
          ignoreInterchange: true,
          radiusKm: selectedCity ? FREEWAY_CCTV_RADIUS_KM : 9999
        },
        ...(selectedCity
          ? [
              {
                ignoreRoute: true,
                ignoreCityRadius: false,
                ignoreInterchange: true,
                radiusKm: FREEWAY_CCTV_RADIUS_KM
              }
            ]
          : []),
        ...(nationwide
          ? [{ ignoreRoute: true, ignoreCityRadius: true, ignoreInterchange: true, radiusKm: 80 }]
          : [])
      ];
  for (const attempt of attempts) {
    const rows = scoreFreewayCameras(attempt);
    if (rows.length) {
      return rows;
    }
  }
  return [];
}

function getFreewayDirectionGroups() {
  const primary = dedupeCamerasByIdentity(getFilteredSortedFreewayCameras());
  const groups = groupFreewayCamerasByDirection(primary).filter((group) => group.cameras.length);
  if (groups.length) {
    return groups;
  }
  if (!primary.length) {
    return [];
  }
  return [{ code: "", label: "即時", cameras: primary }];
}

function isLikelyDirectImageStream(url = "") {
  const lower = String(url).toLowerCase();
  if (!lower) {
    return false;
  }
  if (lower.includes("index.html") || lower.includes("/play/") || lower.includes(".html")) {
    return false;
  }
  if (lower.includes("mjpg") || lower.includes("mjpeg") || lower.includes("jpeg") || lower.includes("jpg")) {
    return true;
  }
  if (lower.includes("bmjpg") || lower.includes("getjpeg") || lower.includes("snapshot")) {
    return true;
  }
  // Many city feeds are player pages; prefer iframe/link preview.
  if (
    lower.includes("showframe") ||
    lower.includes("showcctv") ||
    lower.includes("hls.") ||
    lower.includes("/live/")
  ) {
    return false;
  }
  return true;
}

const CCTV_ROAD_CACHE_KEY = "cctv-place-label-cache-v3";
const CCTV_MISSING_CROSS_LABEL = "交叉路名待補";
const CCTV_CROSS_LOOKUP_LABEL = "交叉路名查詢中…";
const CCTV_INTERSECTION_MAX_M = 55;
let cctvRoadCache = null;
let cctvRoadLookupQueue = Promise.resolve();
let cityCameraRoadIndex = null;

function normalizeRoadToken(text = "") {
  return String(text)
    .replace(/[()（）\[\]【】].*$/g, "")
    .replace(/(交叉口|路口|街口|巷口|口)$/g, "")
    .replace(/\s+/g, "")
    .trim();
}

const TAINAN_YANSHUI_BRIDGE_LAT = 23.016;

function aliasProvincialRoadName(camera, token = "") {
  const name = normalizeRoadToken(token);
  if (!name) {
    return "";
  }
  const city = String(camera?.city || "").replaceAll("台", "臺");
  const lat = Number(camera?.gisy);
  const highway = name.replaceAll("臺", "台");
  if (
    city === "臺南市" &&
    Number.isFinite(lat) &&
    lat < TAINAN_YANSHUI_BRIDGE_LAT &&
    highway === "台17線"
  ) {
    return "中華西路";
  }
  return name;
}

function areRelatedRoadNames(a = "", b = "") {
  const left = normalizeRoadToken(a);
  const right = normalizeRoadToken(b);
  if (!left || !right) {
    return true;
  }
  if (left === right) {
    return true;
  }
  if (left.includes(right) || right.includes(left)) {
    return true;
  }
  const n = Math.min(4, left.length, right.length);
  return n >= 2 && left.slice(0, n) === right.slice(0, n);
}

function loadCctvRoadCache() {
  if (cctvRoadCache) {
    return cctvRoadCache;
  }
  try {
    cctvRoadCache = JSON.parse(localStorage.getItem(CCTV_ROAD_CACHE_KEY) || "{}");
  } catch {
    cctvRoadCache = {};
  }
  return cctvRoadCache;
}

function saveCctvRoadCache() {
  try {
    localStorage.setItem(CCTV_ROAD_CACHE_KEY, JSON.stringify(loadCctvRoadCache()));
  } catch {
    /* ignore quota */
  }
}

function isIntersectionRoadName(name = "") {
  const token = normalizeRoadToken(toHantStreetName(name));
  if (!token || looksLikeCameraCode(token) || /^\d+[巷弄號]$/.test(token)) {
    return false;
  }
  return /路|街|大道|大橋|快速道路|公路|便道|國道|省道|縣道|交流道|匝道|引道/.test(token) || /橋/.test(token);
}

function parseStreetIntRoads(address = "") {
  return toHantStreetName(address)
    .split(/\s*(?:&|與|\/|／)\s*/)
    .map((part) => normalizeRoadToken(part))
    .filter((part) => isIntersectionRoadName(part))
    .slice(0, 2);
}

function splitRoadAndHouse(address = "", addNum = "") {
  const raw = toHantStreetName(address).replace(/\s+/g, "");
  const num = String(addNum || "").replace(/號/g, "").trim();
  if (num && raw.endsWith(`${num}號`)) {
    return { road: raw.slice(0, -`${num}號`.length), house: `${num}號` };
  }
  if (num && raw.endsWith(num)) {
    return { road: raw.slice(0, -num.length), house: `${num}號` };
  }
  const match = raw.match(/^(.*?)(\d+(?:[-之]\d+)*)號$/);
  if (match && /[路街巷弄大道橋]/.test(match[1])) {
    return { road: match[1], house: `${match[2]}號` };
  }
  return { road: raw, house: num ? `${num}號` : "" };
}

function arcGisPlaceDistanceM(lat, lon, payload) {
  const loc = payload?.location;
  const y = Number(loc?.y);
  const x = Number(loc?.x);
  if (!Number.isFinite(y) || !Number.isFinite(x)) {
    return Infinity;
  }
  return getDistanceKm(lat, lon, y, x) * 1000;
}

async function reverseGeocodeArcGis(lat, lon, featureTypes) {
  const url = new URL("https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode");
  url.searchParams.set("f", "pjson");
  url.searchParams.set("location", `${lon},${lat}`);
  url.searchParams.set("langCode", "zh-TW");
  url.searchParams.set("featureTypes", featureTypes);
  url.searchParams.set("outSR", "4326");
  const response = await fetch(url.toString());
  if (!response.ok) {
    return null;
  }
  const payload = await response.json();
  if (!payload?.address || payload.error) {
    return null;
  }
  return payload;
}

function buildIntersectionPlace(camera, roads = []) {
  const unique = [];
  roads.forEach((name) => {
    const token = aliasProvincialRoadName(camera, toHantStreetName(name));
    if (
      token &&
      isIntersectionRoadName(token) &&
      !unique.some((existing) => areRelatedRoadNames(existing, token))
    ) {
      unique.push(token);
    }
  });
  if (unique.length < 2) {
    return null;
  }
  return {
    type: "intersection",
    roads: unique.slice(0, 2),
    label: `${unique[0]} × ${unique[1]}`,
    source: "live-map"
  };
}

function buildSegmentPlace(camera, road = "", house = "") {
  const token = aliasProvincialRoadName(camera, toHantStreetName(road));
  if (!token || looksLikeCameraCode(token)) {
    return null;
  }
  const houseLabel = house && !token.includes(house) ? house : "";
  return {
    type: "segment",
    road: token,
    house: houseLabel,
    label: houseLabel ? `${token} ${houseLabel}` : token,
    source: "live-map"
  };
}

async function lookupNearbyNamedRoads(lat, lon) {
  try {
    const query = `[out:json][timeout:20];(way(around:40,${lat},${lon})["highway"~"^(motorway|trunk|primary|secondary|tertiary|residential|unclassified|living_street)$"]["name"];);out tags;`;
    const response = await fetch("https://overpass-api.de/api/interpreter", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
      body: `data=${encodeURIComponent(query)}`
    });
    if (!response.ok) {
      return [];
    }
    const payload = await response.json();
    const names = [];
    (payload.elements || []).forEach((el) => {
      const token = normalizeRoadToken(el?.tags?.name);
      if (token && !names.includes(token)) {
        names.push(token);
      }
    });
    return names;
  } catch {
    return [];
  }
}

async function lookupCameraPlaceFromLiveMaps(camera) {
  const lat = Number(camera.gisy);
  const lon = Number(camera.gisx);
  if (!Number.isFinite(lat) || !Number.isFinite(lon)) {
    return null;
  }
  const cached = getCachedCameraPlace(camera);
  if (cached) {
    return applyCameraMapPlace(camera, cached);
  }

  try {
    const streetInt = await reverseGeocodeArcGis(lat, lon, "StreetInt");
    if (streetInt && arcGisPlaceDistanceM(lat, lon, streetInt) <= CCTV_INTERSECTION_MAX_M) {
      const roads = parseStreetIntRoads(streetInt.address?.Address || streetInt.address?.ShortLabel || "");
      const place = buildIntersectionPlace(camera, roads);
      if (place) {
        setCachedCameraPlace(camera, place);
        return applyCameraMapPlace(camera, place);
      }
    }
  } catch {
    /* try address next */
  }

  try {
    const point =
      (await reverseGeocodeArcGis(lat, lon, "PointAddress")) ||
      (await reverseGeocodeArcGis(lat, lon, "StreetAddress"));
    if (point && arcGisPlaceDistanceM(lat, lon, point) <= 80) {
      const split = splitRoadAndHouse(point.address?.Address || point.address?.ShortLabel || "", point.address?.AddNum);
      const place = buildSegmentPlace(camera, split.road, split.house);
      if (place) {
        setCachedCameraPlace(camera, place);
        return applyCameraMapPlace(camera, place);
      }
    }
  } catch {
    /* fall through */
  }

  const nearbyRoads = await lookupNearbyNamedRoads(lat, lon);
  const intersection = buildIntersectionPlace(camera, nearbyRoads);
  if (intersection) {
    setCachedCameraPlace(camera, intersection);
    return applyCameraMapPlace(camera, intersection);
  }

  try {
    const url = new URL("https://nominatim.openstreetmap.org/reverse");
    url.searchParams.set("lat", String(lat));
    url.searchParams.set("lon", String(lon));
    url.searchParams.set("format", "jsonv2");
    url.searchParams.set("zoom", "18");
    url.searchParams.set("addressdetails", "1");
    const response = await fetch(url.toString(), {
      headers: { Accept: "application/json", "User-Agent": "jin-weather-cctv-labels/1.0" }
    });
    if (response.ok) {
      const payload = await response.json();
      const address = payload.address || {};
      const road = address.road || address.pedestrian || address.residential || "";
      const house = address.house_number || "";
      const place = buildSegmentPlace(camera, road, /號$/.test(house) ? house : house ? `${house}號` : "");
      if (place) {
        setCachedCameraPlace(camera, place);
        return applyCameraMapPlace(camera, place);
      }
    }
  } catch {
    /* ignore */
  }

  try {
    const street = await reverseGeocodeArcGis(lat, lon, "StreetName");
    if (street && arcGisPlaceDistanceM(lat, lon, street) <= 80) {
      const name = toHantStreetName(street.address?.Address || street.address?.ShortLabel || "");
      const place = buildSegmentPlace(camera, name, "");
      if (place) {
        setCachedCameraPlace(camera, place);
        return applyCameraMapPlace(camera, place);
      }
    }
  } catch {
    /* ignore */
  }
  return null;
}

function getCameraCoordKey(camera) {
  const lat = Number(camera.gisy);
  const lon = Number(camera.gisx);
  if (!Number.isFinite(lat) || !Number.isFinite(lon)) {
    return "";
  }
  return `${lat.toFixed(5)},${lon.toFixed(5)}`;
}

function buildCityCameraRoadIndex(cameras = []) {
  const cell = 0.001;
  const grid = new Map();
  cameras.forEach((camera, index) => {
    const lat = Number(camera.gisy);
    const lon = Number(camera.gisx);
    if (!Number.isFinite(lat) || !Number.isFinite(lon)) {
      return;
    }
    const key = `${Math.floor(lat / cell)}:${Math.floor(lon / cell)}`;
    if (!grid.has(key)) {
      grid.set(key, []);
    }
    grid.get(key).push(index);
  });
  return { cameras, grid, cell };
}

function findNeighborCrossRoad(camera, index = cityCameraRoadIndex, maxMeters = 100) {
  if (!index || !Array.isArray(index.cameras)) {
    return "";
  }
  const lat = Number(camera.gisy);
  const lon = Number(camera.gisx);
  if (!Number.isFinite(lat) || !Number.isFinite(lon)) {
    return "";
  }
  const primary =
    normalizeRoadToken(camera.roadName) ||
    normalizeRoadToken(camera.stakenumber) ||
    normalizeRoadToken(camera.description);
  const gi = Math.floor(lat / index.cell);
  const gj = Math.floor(lon / index.cell);
  let best = "";
  let bestDist = Infinity;
  let relatedFallback = "";
  let relatedDist = Infinity;

  for (let di = -1; di <= 1; di += 1) {
    for (let dj = -1; dj <= 1; dj += 1) {
      const bucket = index.grid.get(`${gi + di}:${gj + dj}`) || [];
      for (const idx of bucket) {
        const other = index.cameras[idx];
        if (!other || other === camera || other.id === camera.id) {
          continue;
        }
        const distKm = getDistanceKm(lat, lon, Number(other.gisy), Number(other.gisx));
        const distM = distKm * 1000;
        if (!Number.isFinite(distM) || distM > maxMeters) {
          continue;
        }
        const otherRoad =
          normalizeRoadToken(other.roadName) ||
          normalizeRoadToken(other.stakenumber) ||
          normalizeRoadToken(other.crossRoad);
        if (!otherRoad || otherRoad === primary) {
          continue;
        }
        if (!areRelatedRoadNames(primary, otherRoad)) {
          if (distM < bestDist) {
            bestDist = distM;
            best = otherRoad;
          }
        } else if (distM < relatedDist) {
          relatedDist = distM;
          relatedFallback = otherRoad;
        }
      }
    }
  }
  return best || relatedFallback;
}

function enrichCityCameraCrossRoadsFromNeighbors() {
  if (!cityCameraDataset || !Array.isArray(cityCameraDataset.cameras)) {
    return;
  }
  cityCameraRoadIndex = buildCityCameraRoadIndex(cityCameraDataset.cameras);
  cityCameraDataset.cameras.forEach((camera) => {
    if (normalizeRoadToken(camera.crossRoad)) {
      return;
    }
    const [roadA, roadB] = getCameraIntersectionRoads(camera, { allowLookup: false });
    if (roadB && roadB !== CCTV_MISSING_CROSS_LABEL) {
      return;
    }
    const neighbor = findNeighborCrossRoad(camera, cityCameraRoadIndex, 100);
    if (neighbor && !areRelatedRoadNames(roadA, neighbor)) {
      camera.crossRoad = neighbor;
      camera.crossRoadSource = camera.crossRoadSource || "neighbor";
    } else if (neighbor) {
      camera.crossRoad = neighbor;
      camera.crossRoadSource = camera.crossRoadSource || "neighbor-related";
    }
  });
}

function getCameraIntersectionRoads(camera, { allowLookup = true } = {}) {
  const parts = [];
  const pushUnique = (value) => {
    const token = aliasProvincialRoadName(camera, value);
    if (!token) {
      return;
    }
    if (!parts.includes(token)) {
      parts.push(token);
    }
  };

  const candidates = [camera.description, camera.stakenumber, camera.roadName].filter(Boolean);
  for (const raw of candidates) {
    const text = String(raw);
    if (/與/.test(text)) {
      text.split(/與/).forEach((piece) => pushUnique(piece));
      break;
    }
    if (/到/.test(text) && /國道|快速|公路/.test(text)) {
      text
        .replace(/^.*?(國道[^()（）]*)/, "$1")
        .split(/到/)
        .forEach((piece) => pushUnique(piece.replace(/[()（）]/g, " ")));
      break;
    }
    if (/[／\/]/.test(text)) {
      text.split(/[／\/]/).forEach((piece) => pushUnique(piece));
      break;
    }
  }

  pushUnique(camera.roadName);
  pushUnique(camera.description);
  pushUnique(camera.stakenumber);
  pushUnique(camera.crossRoad);

  if (allowLookup && parts.length === 1) {
    const cached = getCachedCameraPlace(camera);
    if (cached?.roads) {
      cached.roads.forEach((name) => pushUnique(name));
    } else if (cached?.road) {
      pushUnique(cached.road);
    }
  }
  if (allowLookup && parts.length === 1) {
    pushUnique(findNeighborCrossRoad(camera));
  }

  if (!parts.length) {
    return ["未提供路名", "未提供交叉路名"];
  }
  if (parts.length === 1) {
    return [parts[0], CCTV_MISSING_CROSS_LABEL];
  }
  return parts.slice(0, 2);
}

async function lookupCrossRoadFromMap(lat, lon, primaryRoad = "") {
  const cache = loadCctvRoadCache();
  const key = `${Number(lat).toFixed(5)},${Number(lon).toFixed(5)}`;
  if (cache[key]) {
    return cache[key];
  }

  const primary = normalizeRoadToken(primaryRoad);
  const pickFromNames = (names = []) => {
    const unique = [];
    for (const name of names) {
      const token = normalizeRoadToken(name);
      if (!token || unique.includes(token)) {
        continue;
      }
      unique.push(token);
    }
    const preferred = unique.find((name) => !areRelatedRoadNames(primary, name));
    return preferred || unique.find((name) => name !== primary) || "";
  };

  try {
    const query = `[out:json][timeout:20];(way(around:35,${lat},${lon})["highway"~"^(motorway|trunk|primary|secondary|tertiary|residential|unclassified|living_street)$"]["name"];);out tags;`;
    const response = await fetch("https://overpass-api.de/api/interpreter", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
      body: `data=${encodeURIComponent(query)}`
    });
    if (response.ok) {
      const payload = await response.json();
      const names = (payload.elements || []).map((el) => el?.tags?.name).filter(Boolean);
      const picked = pickFromNames(names);
      if (picked) {
        cache[key] = picked;
        saveCctvRoadCache();
        return picked;
      }
    }
  } catch {
    /* fall through to nominatim */
  }

  try {
    const url = new URL("https://nominatim.openstreetmap.org/reverse");
    url.searchParams.set("lat", String(lat));
    url.searchParams.set("lon", String(lon));
    url.searchParams.set("format", "jsonv2");
    url.searchParams.set("zoom", "18");
    url.searchParams.set("addressdetails", "1");
    const response = await fetch(url.toString(), {
      headers: { Accept: "application/json" }
    });
    if (response.ok) {
      const payload = await response.json();
      const address = payload.address || {};
      const picked = pickFromNames([
        address.road,
        address.pedestrian,
        address.footway,
        address.residential,
        address.suburb
      ]);
      if (picked && !areRelatedRoadNames(primary, picked)) {
        cache[key] = picked;
        saveCctvRoadCache();
        return picked;
      }
    }
  } catch {
    /* ignore */
  }
  return "";
}

function queueCrossRoadLookup(task) {
  cctvRoadLookupQueue = cctvRoadLookupQueue
    .then(() => new Promise((resolve) => setTimeout(resolve, 280)))
    .then(task)
    .catch(() => {});
  return cctvRoadLookupQueue;
}

function refreshCctvMarkerPlace(camera) {
  const label = formatCameraIntersectionShort(camera);
  (mapLegendMarkers.cctv || []).forEach((marker) => {
    if (marker._cctvCamera?.id !== camera.id) {
      return;
    }
    marker._legendPlace = label;
    marker._cctvCamera = camera;
    try {
      const pin = marker.getElement?.()?.querySelector?.(".cctv-map-pin");
      if (pin) {
        const nextLabel = getCctvMapRoadLabelHtml(camera);
        const oldLabel = pin.querySelector(".cctv-map-road-label");
        if (nextLabel) {
          const wrap = document.createElement("template");
          wrap.innerHTML = nextLabel.trim();
          const nextEl = wrap.content.firstElementChild;
          if (nextEl && oldLabel) {
            oldLabel.replaceWith(nextEl);
          } else if (nextEl) {
            pin.insertAdjacentElement("afterbegin", nextEl);
          }
        } else if (oldLabel) {
          oldLabel.remove();
        }
      } else {
        marker.setIcon(getCctvThumbIcon(camera));
      }
      marker.setPopupContent(buildCctvMapPopupHtml(camera));
      if (marker.options) {
        marker.options.title = label;
      }
    } catch {
      /* ignore */
    }
  });
}

function scheduleCameraCrossRoadEnrichment(card, camera) {
  const roadEl = card.querySelector("[data-cross-roads]");
  if (!roadEl || roadEl.dataset.lookupState === "done") {
    return;
  }
  const cached = getCachedCameraPlace(camera);
  if (cached) {
    applyCameraMapPlace(camera, cached);
    roadEl.textContent = formatCityCameraCaption(camera);
    roadEl.dataset.lookupState = "done";
    refreshCctvMarkerPlace(camera);
    return;
  }
  const lat = Number(camera.gisy);
  const lon = Number(camera.gisx);
  if (!Number.isFinite(lat) || !Number.isFinite(lon)) {
    roadEl.dataset.lookupState = "done";
    return;
  }

  roadEl.textContent = `${formatCityCameraCaption(camera)}（路名更新中）`;
  roadEl.dataset.lookupState = "pending";
  queueCrossRoadLookup(async () => {
    const place = await lookupCameraPlaceFromLiveMaps(camera);
    if (place?.label) {
      roadEl.textContent = formatCityCameraCaption(camera);
      refreshCctvMarkerPlace(camera);
    } else {
      const [roadA, roadB] = getCameraIntersectionRoads(camera, { allowLookup: false });
      roadEl.textContent =
        roadA && roadB && roadB !== CCTV_MISSING_CROSS_LABEL
          ? `交叉路口：${roadA} × ${roadB}`
          : formatCityCameraCaption(camera);
    }
    roadEl.dataset.lookupState = "done";
  });
}

function scheduleCameraMapPlaceEnrichment(camera) {
  if (!camera || getCachedCameraPlace(camera)?.label || camera._placeLookupQueued) {
    if (getCachedCameraPlace(camera)) {
      applyCameraMapPlace(camera, getCachedCameraPlace(camera));
    }
    return;
  }
  const lat = Number(camera.gisy);
  const lon = Number(camera.gisx);
  if (!Number.isFinite(lat) || !Number.isFinite(lon)) {
    return;
  }
  camera._placeLookupQueued = true;
  queueCrossRoadLookup(async () => {
    const place = await lookupCameraPlaceFromLiveMaps(camera);
    if (place?.label) {
      refreshCctvMarkerPlace(camera);
    }
  });
}

function formatDateTime(value) {
  return new Date(value).toLocaleString("zh-TW", {
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
}

function toRadians(value) {
  return (value * Math.PI) / 180;
}

function getDistanceKm(lat1, lon1, lat2, lon2) {
  const earthRadiusKm = 6371;
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return earthRadiusKm * c;
}

function loadBlackScreenCameraIds() {
  try {
    const raw = JSON.parse(localStorage.getItem(BLACK_SCREEN_CCTV_STORAGE_KEY) || "[]");
    return new Set(Array.isArray(raw) ? raw.map(String) : []);
  } catch {
    return new Set();
  }
}

function saveBlackScreenCameraIds() {
  try {
    localStorage.setItem(BLACK_SCREEN_CCTV_STORAGE_KEY, JSON.stringify([...blackScreenCameraIds]));
  } catch {
    /* ignore */
  }
}

function markCameraAsBlackScreen(cameraId) {
  if (!cameraId) {
    return;
  }
  blackScreenCameraIds.add(String(cameraId));
  saveBlackScreenCameraIds();
}

function isCameraMarkedBlackScreen(camera) {
  return blackScreenCameraIds.has(String(camera?.id || ""));
}

function isCameraMaintenanceText(camera = {}) {
  const text = `${camera.description || ""} ${camera.stakenumber || ""} ${camera.roadName || ""} ${camera.id || ""} ${camera.html || ""}`;
  return /維修|維護中|影像維護|施工中|暫停|故障|無訊號|黑畫面|無畫面|測試中|停用|關閉|無法顯示|offline|off[\s_-]?line|out[\s_-]?of[\s_-]?service|maintenance|under[\s_-]?construction/i.test(
    text
  );
}

function analyzeImageDarkness(img) {
  try {
    const canvas = document.createElement("canvas");
    const size = 64;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) {
      return null;
    }
    ctx.drawImage(img, 0, 0, size, size);
    const { data } = ctx.getImageData(0, 0, size, size);
    let total = 0;
    let sumSq = 0;
    let darkPixels = 0;
    let count = 0;
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const a = data[i + 3];
      if (a < 8) {
        continue;
      }
      const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      total += luminance;
      sumSq += luminance * luminance;
      if (luminance <= 22) {
        darkPixels += 1;
      }
      count += 1;
    }
    if (!count) {
      return null;
    }
    const average = total / count;
    return {
      average,
      darkRatio: darkPixels / count,
      variance: sumSq / count - average * average
    };
  } catch {
    return null;
  }
}

function isLikelyBlackFrame(analysis) {
  if (!analysis) {
    return false;
  }
  return analysis.average <= CCTV_BLACK_LUMINANCE_THRESHOLD || analysis.darkRatio >= 0.92;
}

function isLikelyNonLiveFrame(analysis) {
  if (!analysis) {
    return false;
  }
  if (isLikelyBlackFrame(analysis)) {
    return true;
  }
  // Near-uniform frames usually mean maintenance placeholders, not live traffic.
  return Number.isFinite(analysis.variance) && analysis.variance <= 48;
}

function probeImageStream(url, { timeoutMs = 8000 } = {}) {
  return new Promise((resolve) => {
    if (!url) {
      resolve({ ok: false, reason: "empty" });
      return;
    }
    const img = new Image();
    let settled = false;
    const finish = (result) => {
      if (settled) {
        return;
      }
      settled = true;
      window.clearTimeout(timer);
      resolve(result);
    };
    const timer = window.setTimeout(() => finish({ ok: false, reason: "timeout" }), timeoutMs);
    img.decoding = "async";
    img.referrerPolicy = "no-referrer-when-downgrade";
    img.onload = () => {
      if (!img.naturalWidth || !img.naturalHeight) {
        finish({ ok: false, reason: "empty-frame" });
        return;
      }
      // Allow one frame paint before sampling.
      window.setTimeout(() => {
        const analysis = analyzeImageDarkness(img);
        if (isLikelyNonLiveFrame(analysis)) {
          finish({ ok: false, reason: "black", analysis });
          return;
        }
        // CORS-tainted frames cannot be sampled; accept only if image dimensions are valid.
        finish({ ok: true, analysis });
      }, 120);
    };
    img.onerror = () => finish({ ok: false, reason: "error" });
    img.src = url;
  });
}

async function probeCameraStream(url, { timeoutMs = 4500 } = {}) {
  if (!url || !isCameraUrlUsable(url)) {
    return Promise.resolve({ ok: false, reason: "unusable" });
  }
  if (isFreewayCameraStream(url)) {
    return Promise.resolve({ ok: true, reason: "freeway-mjpeg" });
  }
  if (isLikelyDirectImageStream(url)) {
    return probeImageStream(url, { timeoutMs });
  }

  // HTML / HLS player pages: confirm the endpoint is reachable, then show via iframe.
  try {
    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), timeoutMs);
    const response = await fetch(url, {
      method: "GET",
      mode: "cors",
      signal: controller.signal,
      cache: "no-store",
      redirect: "follow"
    });
    window.clearTimeout(timer);
    if (response.ok) {
      return { ok: true, reason: "player-page", via: "cors" };
    }
  } catch {
    /* fall through to no-cors reachability check */
  }

  try {
    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), timeoutMs);
    await fetch(url, {
      method: "GET",
      mode: "no-cors",
      signal: controller.signal,
      cache: "no-store"
    });
    window.clearTimeout(timer);
    return { ok: true, reason: "player-page-opaque", via: "no-cors" };
  } catch {
    return { ok: false, reason: "unreachable" };
  }
}

function getCachedCameraProbe(url) {
  const key = String(url || "").trim();
  if (!key) {
    return null;
  }
  const hit = cameraProbeCache.get(key);
  if (!hit) {
    return null;
  }
  if (Date.now() - Number(hit.at || 0) > CAMERA_PREFETCH_CACHE_MS) {
    cameraProbeCache.delete(key);
    return null;
  }
  return hit;
}

async function probeCameraStreamCached(url, options = {}) {
  const cached = getCachedCameraProbe(url);
  if (cached) {
    return cached;
  }
  const result = await probeCameraStream(url, options);
  cameraProbeCache.set(String(url || "").trim(), {
    ...result,
    at: Date.now()
  });
  return result;
}

function getCityCamerasForPrefetch(cityName) {
  if (!cityName || !cityCameraDataset || !Array.isArray(cityCameraDataset.cameras)) {
    return [];
  }
  return cityCameraDataset.cameras
    .filter((camera) => sameTaiwanCityName(camera.city, cityName))
    .filter((camera) => isCameraUrlUsable(camera.html))
    .filter((camera) => !isCameraMarkedBlackScreen(camera))
    .filter((camera) => !isCameraMaintenanceText(camera));
}

function getFreewayCamerasForPrefetch(cityName) {
  if (!cityName || !freewayCameraDataset || !Array.isArray(freewayCameraDataset.cameras)) {
    return [];
  }
  const focus = CITY_LOCATIONS.find((item) => item.name === cityName) || getCctvLocationFocus();
  return freewayCameraDataset.cameras
    .filter((camera) => isCameraUrlUsable(camera.html))
    .filter((camera) => !isCameraMarkedBlackScreen(camera))
    .filter((camera) => !isCameraMaintenanceText(camera))
    .map((camera) => {
      const lat = Number(camera.gisy);
      const lon = Number(camera.gisx);
      const distanceKm =
        Number.isFinite(focus?.lat) && Number.isFinite(focus?.lon)
          ? getDistanceKm(focus.lat, focus.lon, lat, lon)
          : Infinity;
      return { ...camera, distanceKm };
    })
    .filter((camera) => Number.isFinite(camera.distanceKm) && camera.distanceKm <= FREEWAY_CCTV_RADIUS_KM)
    .sort((a, b) => a.distanceKm - b.distanceKm)
    .slice(0, 60);
}

async function prefetchCityMonitorStreams(cityName, { label = "" } = {}) {
  const token = ++cameraPrefetchToken;
  const city = String(cityName || "").trim();
  if (!city) {
    return { city: "", total: 0, done: 0 };
  }
  // Wait briefly if camera snapshots are still loading after locate.
  for (let i = 0; i < 20 && (!cityCameraDataset || !freewayCameraDataset); i += 1) {
    await sleep(250);
    if (token !== cameraPrefetchToken) {
      return { city, total: 0, done: 0, cancelled: true };
    }
  }
  const queue = [
    ...getCityCamerasForPrefetch(city),
    ...getFreewayCamerasForPrefetch(city)
  ];
  const unique = [];
  const seen = new Set();
  queue.forEach((camera) => {
    const url = String(camera.html || "").trim();
    if (!url || seen.has(url)) {
      return;
    }
    seen.add(url);
    unique.push(camera);
  });
  let done = 0;
  let index = 0;
  const updatePrefetchMeta = () => {};
  updatePrefetchMeta();

  const worker = async () => {
    while (index < unique.length) {
      if (token !== cameraPrefetchToken) {
        return;
      }
      const current = unique[index];
      index += 1;
      const url = String(current?.html || "").trim();
      if (!url) {
        done += 1;
        updatePrefetchMeta();
        continue;
      }
      if (!getCachedCameraProbe(url)) {
        const probe = await probeCameraStreamCached(url, { timeoutMs: 3200 });
        if (!probe.ok) {
          markCameraAsBlackScreen(current.id);
        }
        await sleep(40);
      }
      done += 1;
      if (done % 4 === 0 || done === unique.length) {
        updatePrefetchMeta();
      }
    }
  };

  await Promise.all(
    Array.from({ length: Math.min(CAMERA_PREFETCH_CONCURRENCY, Math.max(1, unique.length)) }, () => worker())
  );
  return { city, total: unique.length, done };
}

function looksLikeCameraCode(text = "") {
  const value = String(text || "").trim();
  return !value || /^[A-Z]?\d{3,}$/i.test(value) || /^CCTV[-_]/i.test(value) || value === "None";
}

function formatCityCameraCaption(camera) {
  const place = camera?.mapPlace || getCachedCameraPlace(camera);
  if (place?.type === "intersection" && place.label) {
    return `交叉路口：${place.label}`;
  }
  if (place?.label) {
    return place.label;
  }
  const [roadA, roadB] = getCameraIntersectionRoads(camera);
  const hasRoadA = roadA && !looksLikeCameraCode(roadA);
  const hasRoadB =
    roadB &&
    roadB !== CCTV_MISSING_CROSS_LABEL &&
    roadB !== CCTV_CROSS_LOOKUP_LABEL &&
    !looksLikeCameraCode(roadB);
  if (hasRoadA && hasRoadB) {
    return `交叉路口：${roadA} × ${roadB}`;
  }
  if (hasRoadA) {
    return roadA;
  }
  const landTown = camera?.landTown || resolveCameraLandDistrict(camera);
  if (landTown) {
    return `${camera?.city || ""}${landTown}`;
  }
  return camera?.city || "路口監控";
}

function createCameraCard(camera, _scopeLabel, { forceImage = false, variant = "city" } = {}) {
  const card = document.createElement("article");
  const isFreeway = variant === "freeway" || isFreewayCameraStream(camera.html);
  card.className = isFreeway
    ? "camera-item camera-item-live camera-item-freeway"
    : "camera-item camera-item-pending";
  card.hidden = !isFreeway;
  card.dataset.cameraId = camera.id || "";
  const streamUrl = camera.html;
  const [roadA, roadB] = getCameraIntersectionRoads(camera);
  const useImage = forceImage || isLikelyDirectImageStream(streamUrl) || isFreeway;
  const caption = isFreeway ? formatFreewayCameraCaption(camera) : formatCityCameraCaption(camera);

  const mediaHtml = useImage
    ? `<img src="${streamUrl}" alt="${caption}" loading="eager" referrerpolicy="${
        isFreeway ? "origin" : "no-referrer-when-downgrade"
      }" />`
    : `<iframe class="camera-frame" src="${streamUrl}" title="${caption}" loading="eager" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

  card.innerHTML = `
    ${mediaHtml}
    <div class="camera-body">
      <p data-cross-roads>${caption}</p>
    </div>
  `;

  const revealCard = () => {
    card.hidden = false;
    card.classList.remove("camera-item-pending");
    card.classList.add("camera-item-live");
  };
  const hideDeadCard = (reason = "dead") => {
    markCameraAsBlackScreen(camera.id);
    card.dataset.deadReason = reason;
    card.remove();
  };

  const img = card.querySelector("img");
  if (img && isFreeway) {
    img.addEventListener("error", () => hideDeadCard("img-error"));
  } else if (img) {
    img.addEventListener("error", () => hideDeadCard("img-error"));
    img.addEventListener("load", () => {
      window.setTimeout(() => {
        if (!img.naturalWidth || !img.naturalHeight) {
          hideDeadCard("empty-frame");
          return;
        }
        const analysis = analyzeImageDarkness(img);
        if (isLikelyNonLiveFrame(analysis)) {
          hideDeadCard("black");
          return;
        }
        revealCard();
      }, 180);
    });
  }

  const frame = card.querySelector("iframe");
  if (frame) {
    let settled = false;
    const finishOk = () => {
      if (settled) {
        return;
      }
      settled = true;
      revealCard();
    };
    const fail = (reason) => {
      if (settled) {
        return;
      }
      settled = true;
      hideDeadCard(reason);
    };
    frame.addEventListener("error", () => fail("iframe-error"));
    frame.addEventListener("load", () => finishOk());
    // Player pages often load slowly; keep the card if the iframe remains attached.
    window.setTimeout(() => {
      if (!settled && card.isConnected) {
        finishOk();
      }
    }, 6000);
  }

  if (!isFreeway) {
    scheduleCameraCrossRoadEnrichment(card, camera);
  }
  return card;
}

async function appendVerifiedCameraCards(
  listEl,
  cameras,
  scopeLabel,
  { limit = CCTV_VISIBLE_LIMIT, isCurrent = () => true, onFirstCard = null } = {}
) {
  if (!listEl) {
    return { shown: 0, liveCameras: [] };
  }
  let shown = 0;
  const liveCameras = [];
  const seenIds = new Set();
  let firstCardEmitted = false;
  for (const camera of cameras) {
    if (!isCurrent()) {
      return { shown, liveCameras };
    }
    if (shown >= limit) {
      break;
    }
    const cameraId = String(camera.id || "");
    if (cameraId && seenIds.has(cameraId)) {
      continue;
    }
    if (isCameraMarkedBlackScreen(camera) || isCameraMaintenanceText(camera) || !isCameraUrlUsable(camera.html)) {
      continue;
    }

    const probe = await probeCameraStream(camera.html, { timeoutMs: 4500 });
    if (!isCurrent()) {
      return { shown, liveCameras };
    }
    if (!probe.ok) {
      markCameraAsBlackScreen(camera.id);
      continue;
    }

    const card = createCameraCard(camera, scopeLabel, {
      forceImage: isLikelyDirectImageStream(camera.html)
    });
    if (cameraId) {
      seenIds.add(cameraId);
    }
    if (!firstCardEmitted) {
      firstCardEmitted = true;
      try {
        onFirstCard?.();
      } catch {
        /* ignore */
      }
    }
    listEl.append(card);
    const ok = await waitForCameraCardDecision(card, 8000);
    if (!isCurrent()) {
      return { shown, liveCameras };
    }
    if (ok) {
      shown += 1;
      liveCameras.push(camera);
    }
  }
  return { shown, liveCameras };
}

async function collectVerifiedLiveCameras(
  cameras,
  { isCurrent = () => true, limit = Infinity, onProgress = null } = {}
) {
  const liveCameras = [];
  const seenIds = new Set();
  const total = Math.max(1, cameras.length);
  let checked = 0;

  const reportProgress = () => {
    if (typeof onProgress !== "function") {
      return;
    }
    const byScan = Math.round((checked / total) * 100);
    const byFound =
      Number.isFinite(limit) && limit > 0 && limit < Infinity
        ? Math.round((liveCameras.length / limit) * 100)
        : 0;
    const pct = Math.max(0, Math.min(99, Math.max(byScan, byFound)));
    try {
      onProgress({
        pct,
        checked,
        total,
        found: liveCameras.length,
        limit
      });
    } catch {
      /* ignore */
    }
  };

  reportProgress();
  for (const camera of cameras) {
    if (!isCurrent()) {
      return liveCameras;
    }
    if (liveCameras.length >= limit) {
      break;
    }
    const cameraId = String(camera.id || "");
    if (cameraId && seenIds.has(cameraId)) {
      continue;
    }
    if (isCameraMarkedBlackScreen(camera) || isCameraMaintenanceText(camera) || !isCameraUrlUsable(camera.html)) {
      checked += 1;
      reportProgress();
      continue;
    }
    const probe = await probeCameraStreamCached(camera.html, { timeoutMs: 4500 });
    checked += 1;
    if (!isCurrent()) {
      return liveCameras;
    }
    if (!probe.ok) {
      markCameraAsBlackScreen(camera.id);
      reportProgress();
      continue;
    }
    if (cameraId) {
      seenIds.add(cameraId);
    }
    liveCameras.push(camera);
    reportProgress();
  }
  if (typeof onProgress === "function") {
    try {
      onProgress({
        pct: 100,
        checked,
        total,
        found: liveCameras.length,
        limit
      });
    } catch {
      /* ignore */
    }
  }
  return liveCameras;
}

function waitForCameraCardDecision(card, timeoutMs = 10000) {
  return new Promise((resolve) => {
    if (!card) {
      resolve(false);
      return;
    }
    if (!card.hidden && card.classList.contains("camera-item-live")) {
      resolve(true);
      return;
    }
    if (!card.isConnected) {
      resolve(false);
      return;
    }
    const started = Date.now();
    const timer = window.setInterval(() => {
      if (!card.isConnected) {
        window.clearInterval(timer);
        resolve(false);
        return;
      }
      if (!card.hidden && card.classList.contains("camera-item-live")) {
        window.clearInterval(timer);
        resolve(true);
        return;
      }
      if (Date.now() - started >= timeoutMs) {
        window.clearInterval(timer);
        if (card.isConnected && card.hidden) {
          markCameraAsBlackScreen(card.dataset.cameraId);
          card.remove();
        }
        resolve(false);
      }
    }, 200);
  });
}

function getCameraCityScopeMetaLabel(selectElement) {
  const resolvedCity = getSelectedCameraCityNameFrom(selectElement) || citySelect?.value || "";
  if (selectElement?.value === "follow") {
  return resolvedCity ? `跟隨定位範圍：${resolvedCity}` : "跟隨定位範圍";
  }
  if (selectElement?.value === "all") {
    return "全台路口監控";
  }
  return resolvedCity || "所選縣市";
}

function updateCameraMetaText() {
  if (!cameraMeta || !cityCameraDataset) {
    return;
  }
  const cityFetchedAt = cityCameraDataset.fetchedAt ? formatDateTime(cityCameraDataset.fetchedAt) : "未提供";
  const nationwide = isNationwideCameraCity(cameraCitySelect);
  const cityName = nationwide ? "全國" : getSelectedCameraCityName() || citySelect?.value || "所選位置";
  const townName = getSelectedCameraDistrict()?.town || "";
  const keyword = getCameraKeywordQuery();
  const locateLabel = getCctvLocationFocus()?.label || cityName;
  const parts = [];
  if (keyword) {
    parts.push(`關鍵字：${keyword}`);
    if (townName) {
      parts.push(`地區：${cityName}${townName}`);
    } else if (nationwide) {
      parts.push("全台路口監控");
    } else {
      parts.push(cityName);
    }
  } else if (townName) {
    parts.push(`地區：${cityName}${townName}`);
  } else if (nationwide) {
    parts.push("全台路口監控");
  } else if (
    isLocatorFollowCameraCity(cameraCitySelect) ||
    sameTaiwanCityName(getSelectedCameraCityName() || "", citySelect?.value || "")
  ) {
    parts.push(`定位點：${locateLabel}`);
    parts.push(`定位範圍直徑 ${MAP_LOCATE_DIAMETER_KM} 公里`);
  } else {
    parts.push(cityName);
  }
  parts.push(`快照：${cityFetchedAt}`);
  cameraMeta.textContent = parts.join("｜");
}

function placeCityCameraMoreAfterLastScreen() {
  if (!cameraList || !cameraMoreDetails) {
    return;
  }
  if (cameraMoreDetails.parentElement !== cameraList) {
    cameraList.append(cameraMoreDetails);
  }
}

function clearCityCameraCards() {
  if (!cameraList) {
    return;
  }
  cameraList.querySelectorAll(".camera-item, .status-warn").forEach((node) => node.remove());
}

function appendCityCameraCard(card) {
  if (!cameraList || !card) {
    return;
  }
  placeCityCameraMoreAfterLastScreen();
  if (cameraMoreDetails && cameraMoreDetails.parentElement === cameraList) {
    cameraList.insertBefore(card, cameraMoreDetails);
    return;
  }
  cameraList.append(card);
}

function showCityCameraListMessage(message) {
  clearCityCameraCards();
  if (!cameraList) {
    return;
  }
  const note = document.createElement("p");
  note.className = "status-warn";
  note.textContent = message;
  if (cameraMoreDetails && cameraMoreDetails.parentElement === cameraList) {
    cameraList.insertBefore(note, cameraMoreDetails);
  } else {
    cameraList.append(note);
  }
}

function resetCityCameraMoreBottomPanel() {
  if (cameraListMoreBottom) {
    cameraListMoreBottom.innerHTML = "";
    delete cameraListMoreBottom.dataset.filled;
  }
  if (cameraMoreDetailsBottom) {
    cameraMoreDetailsBottom.hidden = true;
    cameraMoreDetailsBottom.open = false;
  }
  if (cameraMoreSummaryTextBottom) {
    cameraMoreSummaryTextBottom.textContent = "▸ 展開其餘路口監控";
  }
}

function resetCityCameraLists() {
  clearCityCameraCards();
  if (cameraListMore) {
    cameraListMore.innerHTML = "";
    delete cameraListMore.dataset.filled;
  }
  if (cameraMoreDetails) {
    cameraMoreDetails.hidden = true;
    cameraMoreDetails.open = false;
  }
  if (cameraMoreSummaryText) {
    cameraMoreSummaryText.textContent = "▸ 展開其餘路口監控";
  }
  resetCityCameraMoreBottomPanel();
  placeCityCameraMoreAfterLastScreen();
}

function fillCityCameraMoreList(extraCameras = [], scopeLabel = "所選位置") {
  if (!cameraListMore || cameraListMore.dataset.filled === "1") {
    return;
  }
  cameraListMore.innerHTML = "";
  cameraListMore.dataset.filled = "1";
  let index = 0;
  const appendChunk = () => {
    if (!cameraListMore || cameraListMore.dataset.filled !== "1") {
      return;
    }
    const slice = extraCameras.slice(index, index + CITY_CCTV_MORE_CHUNK);
    slice.forEach((camera) => {
      const card = createCameraCard(camera, scopeLabel, {
        forceImage: isLikelyDirectImageStream(camera.html)
      });
      cameraListMore.append(card);
    });
    index += slice.length;
    if (index < extraCameras.length) {
      window.setTimeout(appendChunk, 0);
    }
  };
  appendChunk();
}

function syncCityCameraMorePanel(extraCameras = [], scopeLabel = "所選位置") {
  if (!cameraMoreDetails || !cameraMoreSummaryText) {
    return;
  }
  placeCityCameraMoreAfterLastScreen();
  const extraCount = extraCameras.length;
  if (cameraListMore) {
    cameraListMore.innerHTML = "";
    delete cameraListMore.dataset.filled;
  }
  if (extraCount > 0) {
    cameraMoreDetails.hidden = false;
    cameraMoreDetails.open = false;
    cameraMoreSummaryText.textContent = `▸ 展開其餘 ${extraCount} 組路口監控`;
    cameraMoreDetails.onchange = null;
    cameraMoreDetails.ontoggle = () => {
      cameraMoreSummaryText.textContent = cameraMoreDetails.open
        ? `▾ 收合其餘 ${extraCount} 組路口監控`
        : `▸ 展開其餘 ${extraCount} 組路口監控`;
      if (cameraMoreDetails.open) {
        fillCityCameraMoreList(extraCameras, scopeLabel);
      }
    };
    return;
  }
  cameraMoreDetails.hidden = true;
  cameraMoreDetails.open = false;
  cameraMoreSummaryText.textContent = "▸ 展開其餘路口監控";
}

function fillCityCameraMoreBottomList(extraCameras = [], scopeLabel = "所選位置") {
  if (!cameraListMoreBottom || cameraListMoreBottom.dataset.filled === "1") {
    return;
  }
  cameraListMoreBottom.innerHTML = "";
  extraCameras.forEach((camera) => {
    const card = createCameraCard(camera, scopeLabel, {
      forceImage: isLikelyDirectImageStream(camera.html)
    });
    cameraListMoreBottom.append(card);
  });
  cameraListMoreBottom.dataset.filled = "1";
}

function syncCityCameraMoreBottomPanel(extraCameras = [], scopeLabel = "所選位置") {
  if (!cameraMoreDetailsBottom || !cameraMoreSummaryTextBottom) {
    return;
  }
  const extraCount = extraCameras.length;
  if (cameraListMoreBottom) {
    cameraListMoreBottom.innerHTML = "";
    delete cameraListMoreBottom.dataset.filled;
  }
  if (extraCount > 0) {
    cameraMoreDetailsBottom.hidden = false;
    cameraMoreDetailsBottom.open = false;
    cameraMoreSummaryTextBottom.textContent = `▸ 展開其餘 ${extraCount} 組路口監控`;
    cameraMoreDetailsBottom.onchange = null;
    cameraMoreDetailsBottom.ontoggle = () => {
      cameraMoreSummaryTextBottom.textContent = cameraMoreDetailsBottom.open
        ? `▾ 收合其餘 ${extraCount} 組路口監控`
        : `▸ 展開其餘 ${extraCount} 組路口監控`;
      if (cameraMoreDetailsBottom.open) {
        fillCityCameraMoreBottomList(extraCameras, scopeLabel);
      }
    };
    return;
  }
  resetCityCameraMoreBottomPanel();
}

async function renderCameraList() {
  if (!cameraList) {
    updateCameraMapLayer();
    return;
  }
  const token = ++cityCameraRenderToken;
  const isCurrent = () => token === cityCameraRenderToken;
  showCityCameraLoadProgress();
  resetCityCameraLists();
  setVerifiedCityCameras([]);
  await new Promise((resolve) => window.requestAnimationFrame(() => resolve()));
  if (!isCurrent()) {
    return;
  }

  if (!cityCameraDataset || !Array.isArray(cityCameraDataset.cameras)) {
    showCityCameraListMessage("目前無法載入各縣市市區路口監控資料。");
    hideCityCameraLoadProgress();
    return;
  }

  updateCameraMetaText();
  setCityCameraLoadProgress(12);
  const allMatched = getFilteredSortedCityCameras();
  const rows = allMatched.slice(0, CITY_CCTV_VERIFY_EXPAND_SIZE);
  const district = getSelectedCameraDistrict();
  const nationwide = isNationwideCameraCity(cameraCitySelect);
  const cityName = nationwide ? "" : getSelectedCameraCityName() || citySelect?.value || "";
  const scopeLabel = nationwide
    ? "全台路口監控"
    : district?.town
      ? `${cityName}${district.town}`
      : getCctvLocationFocus().label || district?.label || "所選位置";
  if (!rows.length) {
    const keyword = getCameraKeywordQuery();
    const emptyLabel = keyword
      ? `目前沒有符合「${keyword}」的路口監控。`
      : district?.town
        ? `目前沒有符合「${cityName}${district.town}」的路口監控。`
        : nationwide
          ? "目前沒有可顯示的全台路口監控。"
          : `定位範圍直徑 ${MAP_LOCATE_DIAMETER_KM} 公里內目前沒有路口監控。可改選全台路口監控、縣市或輸入路名關鍵字。`;
    showCityCameraListMessage(emptyLabel);
    hideCityCameraLoadProgress();
    return;
  }
  const candidates = rows;

  const displayLimit = Math.min(candidates.length, CITY_CCTV_PREVIEW_LIMIT);
  const liveCameras = await collectVerifiedLiveCameras(candidates, {
    isCurrent,
    limit: displayLimit,
    onProgress: ({ pct, found, limit }) => {
      if (!isCurrent()) {
        return;
      }
      setCityCameraLoadProgress(12 + Math.round(Math.max(0, Math.min(100, pct)) * 0.5), {
        found,
        limit: limit || displayLimit
      });
    }
  });
  if (!isCurrent()) {
    return;
  }

  const renderQueue = dedupeCamerasByIdentity([...liveCameras, ...candidates]);
  const confirmedLive = [];

  for (let index = 0; index < renderQueue.length && confirmedLive.length < displayLimit; index += 1) {
    const camera = renderQueue[index];
    if (!isCurrent()) {
      return;
    }
    const card = createCameraCard(camera, scopeLabel, {
      forceImage: isLikelyDirectImageStream(camera.html)
    });
    appendCityCameraCard(card);
    const ok = await waitForCameraCardDecision(card, 8000);
    if (ok) {
      confirmedLive.push(camera);
      setVerifiedCityCameras(confirmedLive);
    }
    if (isCurrent()) {
      setCityCameraLoadProgress(62 + Math.round((confirmedLive.length / Math.max(1, displayLimit)) * 36), {
        found: confirmedLive.length,
        limit: displayLimit
      });
    }
  }
  if (!isCurrent()) {
    return;
  }

  if (!confirmedLive.length && cameraList) {
    renderQueue.slice(0, displayLimit).forEach((camera) => {
      const card = createCameraCard(camera, scopeLabel, {
        forceImage: isLikelyDirectImageStream(camera.html)
      });
      card.hidden = false;
      card.classList.add("camera-item-live");
      appendCityCameraCard(card);
    });
    confirmedLive.push(...renderQueue.slice(0, displayLimit));
    setVerifiedCityCameras(confirmedLive);
  }

  const shownIds = new Set();
  confirmedLive.forEach((camera) => {
    const id = String(camera.id || "").trim();
    const url = String(camera.html || "").trim();
    if (id) {
      shownIds.add(id);
    }
    if (url) {
      shownIds.add(url);
    }
  });
  const extraCameras = allMatched.filter((camera) => {
    const id = String(camera.id || "").trim();
    const url = String(camera.html || "").trim();
    if ((id && shownIds.has(id)) || (url && shownIds.has(url))) {
      return false;
    }
    if (isCameraMarkedBlackScreen(camera) || isCameraMaintenanceText(camera) || !isCameraUrlUsable(camera.html)) {
      return false;
    }
    return true;
  });
  syncCityCameraMorePanel(extraCameras, scopeLabel);
  syncCityCameraMoreBottomPanel([], scopeLabel);
  updateCameraMetaText();
  if (confirmedLive.length) {
    setVerifiedCityCameras(confirmedLive.slice(0, displayLimit));
  }
  hideCityCameraLoadProgress();
}

function updateFreewayCameraMetaText(directionGroups = []) {
  if (!freewayCameraMeta || !freewayCameraDataset) {
    return;
  }
  const freewayFetchedAt = freewayCameraDataset.fetchedAt
    ? formatDateTime(freewayCameraDataset.fetchedAt)
    : "未提供";
  const region = getSelectedFreewayRegion();
  const cityName = isNationwideCameraCity(freewayCitySelect) ? "" : getSelectedFreewayCityName();
  const point = getSelectedFreewayInterchangeName();
  const parts = [region.label];
  if (cityName) {
    parts.push(cityName);
  }
  if (point) {
    const dir = getFreewayDirectionLabel(getSelectedFreewayInterchangeDir());
    parts.push(`監控點：${[dir, formatFreewayPointName(point)].filter(Boolean).join("｜")}`);
  }
  parts.push(`快照：${freewayFetchedAt}`);
  freewayCameraMeta.textContent = parts.join("｜");
}

function createFreewayMonitorPanel(cameras, directionLabel, isCurrent) {
  const monitor = document.createElement("article");
  monitor.className = "freeway-monitor";
  monitor.dataset.direction = directionLabel;
  const safeLabel = escapeMapLegendHtml(directionLabel);
  if (!cameras.length) {
    return null;
  }

  const first = cameras[0];
  const firstCaption = formatFreewayCameraCaption(first);
  monitor.innerHTML = `
    <div class="freeway-monitor-bezel">
      <p class="freeway-monitor-label">即時畫面｜${safeLabel}</p>
      <div class="freeway-monitor-screen">
        <img class="freeway-monitor-feed" alt="${escapeMapLegendHtml(firstCaption)}" referrerpolicy="origin" />
      </div>
    </div>
    <p class="freeway-monitor-caption">${escapeMapLegendHtml(firstCaption)}</p>
    <div class="freeway-monitor-channels" role="list" aria-label="${safeLabel}國道監控鏡頭"></div>
  `;
  const feed = monitor.querySelector(".freeway-monitor-feed");
  const captionEl = monitor.querySelector(".freeway-monitor-caption");
  const channels = monitor.querySelector(".freeway-monitor-channels");

  const showCamera = (camera, button) => {
    if (!isCurrent()) {
      return Promise.resolve(false);
    }
    const caption = formatFreewayCameraCaption(camera);
    const url = String(camera.html || "");
    captionEl.textContent = caption;
    feed.alt = caption;
    channels.querySelectorAll(".freeway-channel-btn").forEach((item) => {
      item.classList.toggle("is-active", item === button);
    });
    return startFreewayFeedRefresh(feed, url);
  };

  cameras.forEach((camera, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `freeway-channel-btn${index === 0 ? " is-active" : ""}`;
    button.textContent = formatFreewayChannelLabel(camera);
    button.addEventListener("click", () => showCamera(camera, button));
    channels.append(button);
  });

  return {
    monitor,
    start: () => showCamera(first, channels.querySelector(".freeway-channel-btn"))
  };
}

function setFreewayLoadProgress(pct) {
  const value = Math.max(0, Math.min(100, Math.round(Number(pct) || 0)));
  if (freewayLoadProgressPie) {
    freewayLoadProgressPie.style.setProperty("--pct", String(value));
  }
  if (freewayLoadProgressPct) {
    freewayLoadProgressPct.textContent = `${value}%`;
  }
  if (freewayLoadProgress) {
    freewayLoadProgress.setAttribute("aria-valuenow", String(value));
  }
}

function showFreewayLoadProgress() {
  window.clearTimeout(freewayLoadProgressHideTimer);
  freewayLoadProgressToken += 1;
  setFreewayLoadProgress(6);
  if (freewayLoadProgressHost) {
    freewayLoadProgressHost.hidden = false;
    freewayLoadProgressHost.setAttribute("aria-busy", "true");
  }
}

function hideFreewayLoadProgress() {
  const token = freewayLoadProgressToken;
  setFreewayLoadProgress(100);
  window.clearTimeout(freewayLoadProgressHideTimer);
  freewayLoadProgressHideTimer = window.setTimeout(() => {
    if (token !== freewayLoadProgressToken) {
      return;
    }
    if (freewayLoadProgressHost) {
      freewayLoadProgressHost.hidden = true;
      freewayLoadProgressHost.setAttribute("aria-busy", "false");
    }
    setFreewayLoadProgress(0);
  }, 280);
}

function setCityCameraLoadProgress(pct, { found, limit } = {}) {
  const value = Math.max(0, Math.min(100, Math.round(Number(pct) || 0)));
  if (Number.isFinite(found)) {
    cityCameraLoadProgressFound = Math.max(0, found);
  }
  if (Number.isFinite(limit) && limit > 0) {
    cityCameraLoadProgressLimit = limit;
  }
  if (cityCameraLoadProgressPie) {
    cityCameraLoadProgressPie.style.setProperty("--pct", String(value));
  }
  if (cityCameraLoadProgressPct) {
    cityCameraLoadProgressPct.textContent = `${value}%`;
  }
  if (cityCameraLoadProgress) {
    cityCameraLoadProgress.setAttribute("aria-valuenow", String(value));
  }
  if (cityCameraLoadProgressLabel) {
    cityCameraLoadProgressLabel.textContent = `路口監控讀取進度 ${value}%（已確認 ${cityCameraLoadProgressFound}/${cityCameraLoadProgressLimit}）`;
  }
}

function showCityCameraLoadProgress() {
  window.clearTimeout(cityCameraLoadProgressHideTimer);
  cityCameraLoadProgressToken += 1;
  cityCameraLoadProgressFound = 0;
  cityCameraLoadProgressLimit = CITY_CCTV_PREVIEW_LIMIT;
  setCityCameraLoadProgress(6, { found: 0, limit: CITY_CCTV_PREVIEW_LIMIT });
  if (cityCameraLoadProgressHost) {
    cityCameraLoadProgressHost.hidden = false;
    cityCameraLoadProgressHost.setAttribute("aria-busy", "true");
  }
}

function hideCityCameraLoadProgress() {
  const token = cityCameraLoadProgressToken;
  setCityCameraLoadProgress(100);
  window.clearTimeout(cityCameraLoadProgressHideTimer);
  cityCameraLoadProgressHideTimer = window.setTimeout(() => {
    if (token !== cityCameraLoadProgressToken) {
      return;
    }
    if (cityCameraLoadProgressHost) {
      cityCameraLoadProgressHost.hidden = true;
      cityCameraLoadProgressHost.setAttribute("aria-busy", "false");
    }
    setCityCameraLoadProgress(0);
  }, 280);
}

async function renderFreewayCameraList() {
  if (!freewayCameraList) {
    return;
  }
  const token = ++freewayCameraRenderToken;
  const isCurrent = () => token === freewayCameraRenderToken;
  showFreewayLoadProgress();
  setFreewayLoadProgress(8);
  if (freewayCameraMeta) {
    freewayCameraMeta.textContent = "國道監控讀取中...";
  }
  await new Promise((resolve) => window.requestAnimationFrame(() => resolve()));
  if (!isCurrent()) {
    return;
  }
  stopFreewayFeedRefresh();
  freewayCameraList.innerHTML = "";
  if (!freewayCameraDataset || !Array.isArray(freewayCameraDataset.cameras)) {
    freewayCameraList.innerHTML = `<p class="status-warn">目前無法載入國道監控資料。</p>`;
    hideFreewayLoadProgress();
    return;
  }
  setFreewayLoadProgress(22);
  const rows = dedupeCamerasByIdentity(getFilteredSortedFreewayCameras());
  if (!isCurrent()) {
    return;
  }
  setFreewayLoadProgress(40);
  const directionGroups = getFreewayDirectionGroups().map((group) => ({
    ...group,
    cameras: group.cameras.slice(0, FREEWAY_CCTV_PREVIEW_LIMIT)
  }));
  updateFreewayCameraMetaText(directionGroups);
  if (!directionGroups.length && rows.length) {
    directionGroups.push({ code: "", label: "即時", cameras: rows.slice(0, FREEWAY_CCTV_PREVIEW_LIMIT) });
  }
  if (!directionGroups.length) {
    const point = getSelectedFreewayInterchangeName();
    freewayCameraList.innerHTML = `<p class="status-warn">${
      point
        ? `目前沒有符合「${simplifyFreewayOptionLabel(point)}」的國道監控點。`
        : "目前沒有符合所選國道／縣市的監控點。"
    }</p>`;
    hideFreewayLoadProgress();
    return;
  }

  const pair = document.createElement("div");
  pair.className = "freeway-monitor-pair";
  const starters = directionGroups
    .map((group) => {
      const panel = createFreewayMonitorPanel(group.cameras, group.label, isCurrent);
      if (!panel) {
        return null;
      }
      pair.append(panel.monitor);
      return panel.start;
    })
    .filter(Boolean);
  if (!starters.length) {
    const point = getSelectedFreewayInterchangeName();
    freewayCameraList.innerHTML = `<p class="status-warn">${
      point
        ? `目前沒有符合「${simplifyFreewayOptionLabel(point)}」的國道監控點。`
        : "目前沒有符合所選國道／縣市的監控點。"
    }</p>`;
    hideFreewayLoadProgress();
    return;
  }
  freewayCameraList.append(pair);
  setFreewayLoadProgress(55);
  let loaded = 0;
  const total = Math.max(1, starters.length);
  await Promise.all(
    starters.map(async (start) => {
      try {
        await start();
      } finally {
        loaded += 1;
        if (isCurrent()) {
          setFreewayLoadProgress(55 + Math.round((loaded / total) * 40));
        }
      }
    })
  );
  if (!isCurrent()) {
    return;
  }
  hideFreewayLoadProgress();
}

async function renderAllCameraLists() {
  if (!cameraList && !freewayCameraList) {
    updateCameraMapLayer();
    return;
  }
  await renderCameraList();
  await renderFreewayCameraList();
}

function formatEarthquakeMagnitudeLabel(magnitude) {
  const value = Number(magnitude);
  const number = Number.isFinite(value) ? value.toFixed(1) : "--";
  return `<span class="earthquake-mag-value">${number}</span><span class="earthquake-mag-unit">(級)</span>`;
}

function getKawaiiWeatherIconSvg(code) {
  const category = getWeatherCategory(code);
  // Kawaii eyes: oversized sparkly eyes, blush, soft smile.
  if (category === "thunder") {
    return `
      <svg viewBox="0 0 96 96" role="img" aria-label="雷雨">
        <ellipse class="cloud-body" cx="48" cy="40" rx="30" ry="17" fill="#dce6fb"/>
        <ellipse class="cloud-body" cx="30" cy="44" rx="15" ry="11" fill="#c6d4f0"/>
        <ellipse class="cloud-body" cx="64" cy="44" rx="14" ry="10" fill="#eef3ff"/>
        <circle cx="36" cy="40" r="6.2" fill="#fff"/>
        <circle cx="58" cy="40" r="6.2" fill="#fff"/>
        <circle class="kawaii-blink" cx="37" cy="40.8" r="3.3" fill="#334155"/>
        <circle class="kawaii-blink" cx="59" cy="40.8" r="3.3" fill="#334155"/>
        <circle cx="35.2" cy="39.2" r="1.3" fill="#fff"/>
        <circle cx="57.2" cy="39.2" r="1.3" fill="#fff"/>
        <path d="M40 50 Q48 57 56 50" fill="none" stroke="#64748b" stroke-width="2.6" stroke-linecap="round"/>
        <circle cx="24" cy="50" r="3.8" fill="#fda4af"/>
        <circle cx="72" cy="50" r="3.8" fill="#fda4af"/>
        <path class="bolt kawaii-sparkle" d="M52 52 L43 67 H51 L45 82 L66 60 H56 L62 52 Z" fill="#ffe066" stroke="#b45309" stroke-width="1.6"/>
        <path class="rain-drop" d="M18 58 q3 8 0 14" fill="none" stroke="#0284c7" stroke-width="3.2" stroke-linecap="round"/>
        <path class="rain-drop" d="M26 61 q3 8 0 14" fill="none" stroke="#60a5fa" stroke-width="3.4" stroke-linecap="round"/>
        <path class="rain-drop" d="M34 59 q3 8 0 14" fill="none" stroke="#0284c7" stroke-width="3.2" stroke-linecap="round"/>
        <path class="rain-drop" d="M70 58 q3 8 0 14" fill="none" stroke="#60a5fa" stroke-width="3.4" stroke-linecap="round"/>
        <path class="rain-drop" d="M78 61 q3 8 0 14" fill="none" stroke="#0284c7" stroke-width="3.2" stroke-linecap="round"/>
      </svg>`;
  }
  if (category === "snow") {
    return `
      <svg viewBox="0 0 96 96" role="img" aria-label="下雪">
        <ellipse class="cloud-body" cx="48" cy="36" rx="28" ry="15" fill="#eef4ff"/>
        <ellipse class="cloud-body" cx="32" cy="40" rx="14" ry="10" fill="#dbe7ff"/>
        <ellipse class="cloud-body" cx="64" cy="40" rx="13" ry="9" fill="#f8fbff"/>
        <circle cx="36" cy="36" r="5.8" fill="#fff"/>
        <circle cx="58" cy="36" r="5.8" fill="#fff"/>
        <circle class="kawaii-blink" cx="37" cy="36.7" r="3" fill="#475569"/>
        <circle class="kawaii-blink" cx="59" cy="36.7" r="3" fill="#475569"/>
        <circle cx="35.3" cy="35.3" r="1.2" fill="#fff"/>
        <circle cx="57.3" cy="35.3" r="1.2" fill="#fff"/>
        <path d="M40 45 Q48 51 56 45" fill="none" stroke="#94a3b8" stroke-width="2.4" stroke-linecap="round"/>
        <circle cx="24" cy="46" r="3.4" fill="#fda4af"/>
        <circle cx="72" cy="46" r="3.4" fill="#fda4af"/>
        <g fill="#bae6fd" stroke="#7dd3fc" stroke-width="1.1">
          <path d="M30 58 l0 11 M25 63.5 l10 0 M27 60 l6 6 M27 67 l6 -6"/>
          <path d="M48 60 l0 11 M43 65.5 l10 0 M45 62 l6 6 M45 69 l6 -6"/>
          <path d="M68 56 l0 11 M63 61.5 l10 0 M65 58 l6 6 M65 65 l6 -6"/>
        </g>
      </svg>`;
  }
  if (category === "rain") {
    return `
      <svg viewBox="0 0 96 96" role="img" aria-label="雨天">
        <circle class="sun-core" cx="72" cy="20" r="11" fill="#ffd56a"/>
        <ellipse class="cloud-body" cx="42" cy="40" rx="28" ry="15" fill="#eaf3ff"/>
        <ellipse class="cloud-body" cx="27" cy="44" rx="14" ry="10" fill="#d5e6fb"/>
        <ellipse class="cloud-body" cx="58" cy="44" rx="13" ry="9" fill="#f8fbff"/>
        <circle cx="32" cy="40" r="6" fill="#fff"/>
        <circle cx="52" cy="40" r="6" fill="#fff"/>
        <circle class="kawaii-blink" cx="33" cy="40.8" r="3.2" fill="#334155"/>
        <circle class="kawaii-blink" cx="53" cy="40.8" r="3.2" fill="#334155"/>
        <circle cx="31.3" cy="39.2" r="1.25" fill="#fff"/>
        <circle cx="51.3" cy="39.2" r="1.25" fill="#fff"/>
        <path d="M36 51 Q42 57 48 51" fill="none" stroke="#64748b" stroke-width="2.5" stroke-linecap="round"/>
        <circle cx="20" cy="50" r="3.6" fill="#fda4af"/>
        <circle cx="64" cy="50" r="3.6" fill="#fda4af"/>
        <path class="rain-drop" d="M30 58 q3.4 9 0 15" fill="none" stroke="#38bdf8" stroke-width="4" stroke-linecap="round"/>
        <path class="rain-drop" d="M44 60 q3.4 9 0 15" fill="none" stroke="#38bdf8" stroke-width="4" stroke-linecap="round"/>
        <path class="rain-drop" d="M58 58 q3.4 9 0 15" fill="none" stroke="#38bdf8" stroke-width="4" stroke-linecap="round"/>
      </svg>`;
  }
  if (category === "overcast") {
    return `
      <svg viewBox="0 0 96 96" role="img" aria-label="陰天">
        <ellipse class="cloud-body" cx="48" cy="48" rx="30" ry="17" fill="#cdd7e8"/>
        <ellipse class="cloud-body" cx="30" cy="52" rx="15" ry="11" fill="#b7c4d8"/>
        <ellipse class="cloud-body" cx="66" cy="52" rx="14" ry="10" fill="#dde5f2"/>
        <circle cx="36" cy="48" r="6.4" fill="#fff"/>
        <circle cx="58" cy="48" r="6.4" fill="#fff"/>
        <circle class="kawaii-blink" cx="37.1" cy="48.8" r="3.4" fill="#475569"/>
        <circle class="kawaii-blink" cx="59.1" cy="48.8" r="3.4" fill="#475569"/>
        <circle cx="35.3" cy="47.2" r="1.35" fill="#fff"/>
        <circle cx="57.3" cy="47.2" r="1.35" fill="#fff"/>
        <path d="M40 59 Q48 66 56 59" fill="none" stroke="#64748b" stroke-width="2.7" stroke-linecap="round"/>
        <circle cx="24" cy="58" r="4" fill="#fda4af"/>
        <circle cx="72" cy="58" r="4" fill="#fda4af"/>
      </svg>`;
  }
  if (category === "partly") {
    return `
      <svg viewBox="0 0 96 96" role="img" aria-label="多雲">
        <g class="sun-core">
          <circle cx="70" cy="24" r="13" fill="#ffd56a"/>
          <g stroke="#ffc107" stroke-width="2.6" stroke-linecap="round">
            <path d="M70 4 v5"/><path d="M70 39 v5"/><path d="M50 24 h5"/><path d="M85 24 h5"/>
            <path d="M55 9 l3.2 3.2"/><path d="M81.8 35.8 l3.2 3.2"/>
            <path d="M81.8 9 l3.2 -3.2"/><path d="M55 39 l-3.2 -3.2"/>
          </g>
          <circle cx="65" cy="22" r="2.6" fill="#fff"/>
          <circle cx="75" cy="22" r="2.6" fill="#fff"/>
          <circle class="kawaii-blink" cx="65.7" cy="22.5" r="1.5" fill="#9a3412"/>
          <circle class="kawaii-blink" cx="75.7" cy="22.5" r="1.5" fill="#9a3412"/>
          <path d="M65 28.5 Q70 32 75 28.5" fill="none" stroke="#b45309" stroke-width="1.7" stroke-linecap="round"/>
          <circle cx="61" cy="27" r="1.8" fill="#fb7185" opacity="0.9"/>
          <circle cx="79" cy="27" r="1.8" fill="#fb7185" opacity="0.9"/>
        </g>
        <ellipse class="cloud-body" cx="38" cy="58" rx="24" ry="13" fill="#ffffff"/>
        <ellipse class="cloud-body" cx="24" cy="62" rx="13" ry="9" fill="#edf4ff"/>
        <ellipse class="cloud-body" cx="54" cy="62" rx="12" ry="9" fill="#f8fbff"/>
        <circle cx="30" cy="58" r="5.4" fill="#fff" stroke="#e2e8f0"/>
        <circle cx="46" cy="58" r="5.4" fill="#fff" stroke="#e2e8f0"/>
        <circle class="kawaii-blink" cx="30.9" cy="58.7" r="2.8" fill="#64748b"/>
        <circle class="kawaii-blink" cx="46.9" cy="58.7" r="2.8" fill="#64748b"/>
        <circle cx="29.4" cy="57.4" r="1.1" fill="#fff"/>
        <circle cx="45.4" cy="57.4" r="1.1" fill="#fff"/>
        <path d="M34 66 Q38 71 42 66" fill="none" stroke="#94a3b8" stroke-width="2.2" stroke-linecap="round"/>
        <circle cx="18" cy="64" r="3.1" fill="#fda4af"/>
        <circle cx="58" cy="64" r="3.1" fill="#fda4af"/>
      </svg>`;
  }
  return `
    <svg viewBox="0 0 96 96" role="img" aria-label="晴朗">
      <g class="sun-core">
        <circle cx="48" cy="48" r="20" fill="#ffd166"/>
        <g stroke="#ffc107" stroke-width="3.4" stroke-linecap="round">
          <path d="M48 10 v8"/><path d="M48 78 v8"/><path d="M10 48 h8"/><path d="M78 48 h8"/>
          <path d="M20 20 l5.5 5.5"/><path d="M70.5 70.5 l5.5 5.5"/>
          <path d="M70.5 20 l5.5 -5.5"/><path d="M20 76 l5.5 -5.5"/>
        </g>
        <circle cx="40" cy="44" r="5.2" fill="#fff"/>
        <circle cx="56" cy="44" r="5.2" fill="#fff"/>
        <circle class="kawaii-blink" cx="41.1" cy="44.8" r="2.9" fill="#9a3412"/>
        <circle class="kawaii-blink" cx="57.1" cy="44.8" r="2.9" fill="#9a3412"/>
        <circle cx="39.2" cy="43.2" r="1.2" fill="#fff"/>
        <circle cx="55.2" cy="43.2" r="1.2" fill="#fff"/>
        <path d="M38 57 Q48 66 58 57" fill="none" stroke="#b45309" stroke-width="2.8" stroke-linecap="round"/>
        <circle cx="31" cy="54" r="3.8" fill="#fb7185"/>
        <circle cx="65" cy="54" r="3.8" fill="#fb7185"/>
        <path class="kawaii-sparkle" d="M18 16 l2 5 L25 23 l-5 2 L18 30 l-2 -5 L11 23 l5 -2 Z" fill="#fff7c2"/>
        <path class="kawaii-sparkle" d="M76 68 l1.5 3.5 L81 73.5 l-3.5 1.5 L76 79 l-1.5 -3.5 L71 73.5 l3.5 -1.5 Z" fill="#fff7c2"/>
      </g>
    </svg>`;
}

const WEATHER_ICON_THEMES = {
  kawaii: { label: "可愛動態", className: "weather-icon-theme-kawaii" },
  flat: { label: "扁平簡約", className: "weather-icon-theme-flat" },
  line: { label: "線條風格", className: "weather-icon-theme-line" },
  glass: { label: "玻璃質感", className: "weather-icon-theme-glass" },
  vivid: { label: "鮮明動態", className: "weather-icon-theme-vivid" },
  motion: { label: "暮光動態", className: "weather-icon-theme-motion" }
};

const WEATHER_WIND_ICON_SPEED_KMH = 40;
const WEATHER_WIND_ICON_GUST_KMH = 55;
const WEATHER_CATEGORY_LABEL = {
  clear: "晴朗",
  partly: "多雲",
  overcast: "陰天",
  rain: "雨天",
  snow: "下雪",
  thunder: "雷雨",
  fog: "有霧",
  wind: "強風",
  typhoon: "颱風"
};

function hasActiveTyphoonWarning(official = appState.typhoonOfficial) {
  return Boolean(official?.hasLandWarning || official?.hasWarning);
}

function getLiveWeatherIconExtras() {
  const current = appState.weather?.current;
  return {
    typhoon: hasActiveTyphoonWarning(),
    windSpeed: Number(current?.wind_speed_10m),
    windGusts: Number(current?.wind_gusts_10m)
  };
}

function getWeatherCategory(code, extras = {}) {
  const weatherCode = Number(code);
  if (extras.typhoon) {
    return "typhoon";
  }
  if ([95, 96, 99].includes(weatherCode)) {
    return "thunder";
  }
  if ([71, 73, 75, 77, 85, 86].includes(weatherCode)) {
    return "snow";
  }
  if ([61, 63, 65, 80, 81, 82, 51, 53, 55, 56, 57, 66, 67].includes(weatherCode)) {
    return "rain";
  }
  if ([45, 48].includes(weatherCode)) {
    return "fog";
  }
  const windSpeed = Number(extras.windSpeed);
  const windGusts = Number(extras.windGusts);
  if (
    (Number.isFinite(windSpeed) && windSpeed >= WEATHER_WIND_ICON_SPEED_KMH) ||
    (Number.isFinite(windGusts) && windGusts >= WEATHER_WIND_ICON_GUST_KMH)
  ) {
    return "wind";
  }
  if (weatherCode === 3) {
    return "overcast";
  }
  if (weatherCode === 2) {
    return "partly";
  }
  return "clear";
}

const FLAT_WEATHER_ICONS = {
  clear:
    '<svg viewBox="0 0 96 96" role="img" aria-label="晴朗"><circle class="sun-core" cx="48" cy="48" r="18" fill="#fde68a" stroke="#92400e" stroke-width="2.6"/><g stroke="#b45309" stroke-width="3.4" stroke-linecap="round"><path d="M48 12v8"/><path d="M48 76v8"/><path d="M12 48h8"/><path d="M76 48h8"/></g></svg>',
  partly:
    '<svg viewBox="0 0 96 96" role="img" aria-label="多雲"><circle class="sun-core" cx="72" cy="28" r="12" fill="#fde68a" stroke="#92400e" stroke-width="2.4"/><ellipse class="cloud-body" cx="40" cy="58" rx="24" ry="13" fill="#f1f5f9" stroke="#334155" stroke-width="2.3"/><ellipse class="cloud-body" cx="24" cy="62" rx="13" ry="9" fill="#e2e8f0" stroke="#334155" stroke-width="2.1"/><ellipse class="cloud-body" cx="56" cy="62" rx="12" ry="9" fill="#f8fafc" stroke="#475569" stroke-width="2.1"/></svg>',
  overcast:
    '<svg viewBox="0 0 96 96" role="img" aria-label="陰天"><ellipse class="cloud-body" cx="48" cy="50" rx="30" ry="16" fill="#e2e8f0" stroke="#1e293b" stroke-width="2.4"/><ellipse class="cloud-body" cx="28" cy="54" rx="15" ry="10" fill="#cbd5e1" stroke="#334155" stroke-width="2.1"/><ellipse class="cloud-body" cx="68" cy="54" rx="14" ry="10" fill="#f1f5f9" stroke="#475569" stroke-width="2.1"/></svg>',
  rain:
    '<svg viewBox="0 0 96 96" role="img" aria-label="雨天"><ellipse class="cloud-body" cx="44" cy="40" rx="26" ry="14" fill="#e2e8f0" stroke="#1e293b" stroke-width="2.3"/><path class="rain-drop" d="M30 58 v14" stroke="#0369a1" stroke-width="4" stroke-linecap="round"/><path class="rain-drop" d="M44 60 v14" stroke="#0284c7" stroke-width="4" stroke-linecap="round"/><path class="rain-drop" d="M58 58 v14" stroke="#0369a1" stroke-width="4" stroke-linecap="round"/></svg>',
  snow:
    '<svg viewBox="0 0 96 96" role="img" aria-label="下雪"><ellipse class="cloud-body" cx="48" cy="38" rx="26" ry="14" fill="#f1f5f9" stroke="#334155" stroke-width="2.3"/><circle cx="34" cy="62" r="4" fill="#bae6fd" stroke="#0369a1" stroke-width="1.6"/><circle cx="48" cy="68" r="4" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.6"/><circle cx="62" cy="62" r="4" fill="#bae6fd" stroke="#0369a1" stroke-width="1.6"/></svg>',
  thunder:
    '<svg viewBox="0 0 96 96" role="img" aria-label="雷雨"><ellipse class="cloud-body" cx="48" cy="36" rx="28" ry="15" fill="#cbd5e1" stroke="#1e293b" stroke-width="2.5"/><path class="bolt" d="M54 46 L45 60 H53 L47 76 L69 54 H58 L64 46 Z" fill="#fde68a" stroke="#92400e" stroke-width="2"/><path class="rain-drop" d="M18 54 v16" stroke="#0369a1" stroke-width="3.4" stroke-linecap="round"/><path class="rain-drop" d="M26 57 v16" stroke="#0284c7" stroke-width="3.4" stroke-linecap="round"/><path class="rain-drop" d="M34 55 v15" stroke="#0369a1" stroke-width="3.4" stroke-linecap="round"/><path class="rain-drop" d="M72 54 v16" stroke="#0284c7" stroke-width="3.4" stroke-linecap="round"/><path class="rain-drop" d="M80 57 v16" stroke="#0369a1" stroke-width="3.4" stroke-linecap="round"/></svg>'
};

const LINE_WEATHER_ICONS = {
  clear:
    '<svg viewBox="0 0 96 96" role="img" aria-label="晴朗"><circle class="sun-core" cx="48" cy="48" r="16" fill="none" stroke="#f59e0b" stroke-width="3"/><g stroke="#f59e0b" stroke-width="2.5" stroke-linecap="round"><path d="M48 14v8"/><path d="M48 74v8"/><path d="M14 48h8"/><path d="M74 48h8"/></g></svg>',
  partly:
    '<svg viewBox="0 0 96 96" role="img" aria-label="多雲"><circle cx="72" cy="28" r="10" fill="none" stroke="#f59e0b" stroke-width="2.5"/><path class="cloud-body" d="M22 58 q8 -12 22 -10 q6 -10 18 -8 q12 0 18 10 q10 2 10 14 q0 10 -12 10 H30 q-12 0 -12 -10 q0 -8 4 -16" fill="none" stroke="#64748b" stroke-width="2.5"/></svg>',
  overcast:
    '<svg viewBox="0 0 96 96" role="img" aria-label="陰天"><path class="cloud-body" d="M18 54 q8 -14 24 -12 q6 -12 22 -10 q14 0 20 12 q12 2 12 16 q0 12 -14 12 H28 q-14 0 -14 -12 q0 -10 4 -18" fill="none" stroke="#475569" stroke-width="2.8"/></svg>',
  rain:
    '<svg viewBox="0 0 96 96" role="img" aria-label="雨天"><path class="cloud-body" d="M20 46 q8 -12 22 -10 q6 -10 18 -8 q12 0 18 10 q10 2 10 14 q0 10 -12 10 H30 q-12 0 -12 -10 q0 -8 4 -16" fill="none" stroke="#64748b" stroke-width="2.5"/><path class="rain-drop" d="M32 62 v14" stroke="#0284c7" stroke-width="3" stroke-linecap="round"/><path class="rain-drop" d="M48 64 v14" stroke="#0284c7" stroke-width="3" stroke-linecap="round"/><path class="rain-drop" d="M64 62 v14" stroke="#0284c7" stroke-width="3" stroke-linecap="round"/></svg>',
  snow:
    '<svg viewBox="0 0 96 96" role="img" aria-label="下雪"><path class="cloud-body" d="M20 42 q8 -12 22 -10 q6 -10 18 -8 q12 0 18 10 q10 2 10 14 q0 10 -12 10 H30 q-12 0 -12 -10 q0 -8 4 -16" fill="none" stroke="#64748b" stroke-width="2.5"/><path d="M34 62 l0 10 M29 67 l10 0 M31 64 l6 6 M31 70 l6 -6" stroke="#0284c7" stroke-width="2"/><path d="M62 62 l0 10 M57 67 l10 0 M59 64 l6 6 M59 70 l6 -6" stroke="#0284c7" stroke-width="2"/></svg>',
  thunder:
    '<svg viewBox="0 0 96 96" role="img" aria-label="雷雨"><path class="cloud-body" d="M18 44 q8 -12 22 -10 q6 -10 18 -8 q12 0 18 10 q10 2 10 14 q0 10 -12 10 H30 q-12 0 -12 -10 q0 -8 4 -16" fill="none" stroke="#475569" stroke-width="2.5"/><path class="bolt" d="M52 50 L44 64 H50 L46 78 L64 58 H56 L60 50 Z" fill="none" stroke="#ca8a04" stroke-width="2.2"/></svg>'
};

const GLASS_WEATHER_ICONS = {
  clear:
    '<svg viewBox="0 0 96 96" role="img" aria-label="晴朗"><defs><radialGradient id="gSun"><stop offset="0%" stop-color="#fff7c2"/><stop offset="100%" stop-color="#fbbf24"/></radialGradient></defs><circle class="sun-core" cx="48" cy="48" r="18" fill="url(#gSun)" opacity="0.95"/></svg>',
  partly:
    '<svg viewBox="0 0 96 96" role="img" aria-label="多雲"><circle class="sun-core" cx="72" cy="28" r="11" fill="#fde68a" opacity="0.85"/><ellipse class="cloud-body" cx="40" cy="58" rx="24" ry="13" fill="rgba(255,255,255,0.75)" stroke="rgba(148,163,184,0.6)" stroke-width="1.5"/></svg>',
  overcast:
    '<svg viewBox="0 0 96 96" role="img" aria-label="陰天"><ellipse class="cloud-body" cx="48" cy="50" rx="30" ry="16" fill="rgba(148,163,184,0.55)" stroke="rgba(100,116,139,0.65)" stroke-width="1.5"/></svg>',
  rain:
    '<svg viewBox="0 0 96 96" role="img" aria-label="雨天"><ellipse class="cloud-body" cx="44" cy="40" rx="26" ry="14" fill="rgba(226,232,240,0.8)"/><path class="rain-drop" d="M30 58 v14" stroke="rgba(56,189,248,0.9)" stroke-width="4" stroke-linecap="round"/></svg>',
  snow:
    '<svg viewBox="0 0 96 96" role="img" aria-label="下雪"><ellipse class="cloud-body" cx="48" cy="38" rx="26" ry="14" fill="rgba(241,245,249,0.85)"/><circle cx="48" cy="66" r="5" fill="rgba(186,230,253,0.95)"/></svg>',
  thunder:
    '<svg viewBox="0 0 96 96" role="img" aria-label="雷雨"><ellipse class="cloud-body" cx="48" cy="40" rx="28" ry="15" fill="rgba(148,163,184,0.7)"/><path class="bolt" d="M52 48 L43 62 H51 L45 78 L66 56 H56 L62 48 Z" fill="rgba(251,191,36,0.95)"/></svg>'
};

const MOTION_WEATHER_ICONS = {
  clear:
    '<svg viewBox="0 0 96 96" role="img" aria-label="晴朗"><circle class="sun-glow" cx="48" cy="48" r="30" fill="#ffe08a" opacity="0.28"/><g class="sun-rays" fill="none" stroke="#e8a317" stroke-width="3.2" stroke-linecap="round"><path d="M48 8 v10"/><path d="M48 78 v10"/><path d="M8 48 h10"/><path d="M78 48 h10"/><path d="M20 20 l7 7"/><path d="M69 69 l7 7"/><path d="M20 76 l7 -7"/><path d="M69 27 l7 -7"/></g><circle class="sun-core" cx="48" cy="48" r="18" fill="#f6c453" stroke="#b45309" stroke-width="2.4"/></svg>',
  partly:
    '<svg viewBox="0 0 96 96" role="img" aria-label="多雲"><circle class="sun-glow" cx="70" cy="26" r="16" fill="#ffe08a" opacity="0.32"/><g class="sun-rays" fill="none" stroke="#e8a317" stroke-width="2.6" stroke-linecap="round"><path d="M70 8 v6"/><path d="M70 38 v6"/><path d="M52 26 h6"/><path d="M82 26 h6"/><path d="M57 13 l4 4"/><path d="M79 35 l4 4"/></g><circle class="sun-core" cx="70" cy="26" r="11" fill="#f6c453" stroke="#b45309" stroke-width="2"/><ellipse class="cloud-body cloud-back" cx="40" cy="58" rx="26" ry="14" fill="#e8eef6" stroke="#1e3a5f" stroke-width="2.1"/><ellipse class="cloud-body" cx="26" cy="62" rx="13" ry="9" fill="#c5d4e8" stroke="#1e3a5f" stroke-width="1.9"/><ellipse class="cloud-body" cx="56" cy="62" rx="13" ry="9" fill="#f4efe6" stroke="#334155" stroke-width="1.9"/></svg>',
  overcast:
    '<svg viewBox="0 0 96 96" role="img" aria-label="陰天"><ellipse class="cloud-body cloud-back" cx="48" cy="46" rx="30" ry="16" fill="#c5d4e8" stroke="#1e3a5f" stroke-width="2.2"/><ellipse class="cloud-body" cx="28" cy="54" rx="16" ry="11" fill="#8aa0b8" stroke="#1e3a5f" stroke-width="2"/><ellipse class="cloud-body" cx="68" cy="54" rx="15" ry="11" fill="#e8eef6" stroke="#334155" stroke-width="2"/></svg>',
  rain:
    '<svg viewBox="0 0 96 96" role="img" aria-label="雨天"><ellipse class="cloud-body" cx="46" cy="36" rx="26" ry="14" fill="#e8eef6" stroke="#1e3a5f" stroke-width="2.2"/><ellipse class="cloud-body" cx="30" cy="40" rx="13" ry="9" fill="#c5d4e8" stroke="#1e3a5f" stroke-width="1.9"/><path class="rain-drop" d="M26 56 v16" stroke="#0891b2" stroke-width="4" stroke-linecap="round"/><path class="rain-drop" d="M38 58 v16" stroke="#22d3ee" stroke-width="4" stroke-linecap="round"/><path class="rain-drop" d="M50 56 v16" stroke="#0891b2" stroke-width="4" stroke-linecap="round"/><path class="rain-drop" d="M62 58 v16" stroke="#22d3ee" stroke-width="4" stroke-linecap="round"/><path class="rain-drop" d="M74 56 v14" stroke="#0891b2" stroke-width="3.6" stroke-linecap="round"/></svg>',
  snow:
    '<svg viewBox="0 0 96 96" role="img" aria-label="下雪"><ellipse class="cloud-body" cx="48" cy="34" rx="26" ry="14" fill="#f4efe6" stroke="#1e3a5f" stroke-width="2.2"/><circle class="snow-flake" cx="30" cy="60" r="4.2" fill="#bae6fd" stroke="#0891b2" stroke-width="1.4"/><circle class="snow-flake" cx="48" cy="70" r="4.6" fill="#e0f2fe" stroke="#0891b2" stroke-width="1.4"/><circle class="snow-flake" cx="66" cy="60" r="4.2" fill="#bae6fd" stroke="#0891b2" stroke-width="1.4"/><circle class="snow-flake" cx="40" cy="80" r="3.4" fill="#e0f2fe" stroke="#22d3ee" stroke-width="1.2"/></svg>',
  thunder:
    '<svg viewBox="0 0 96 96" role="img" aria-label="雷雨"><ellipse class="cloud-body" cx="48" cy="34" rx="28" ry="15" fill="#8aa0b8" stroke="#0f172a" stroke-width="2.3"/><path class="bolt" d="M54 44 L44 60 H52 L46 78 L68 54 H57 L63 44 Z" fill="#ffd60a" stroke="#92400e" stroke-width="1.8"/><path class="rain-drop" d="M16 52 v16" stroke="#0891b2" stroke-width="3.4" stroke-linecap="round"/><path class="rain-drop" d="M24 55 v16" stroke="#22d3ee" stroke-width="3.4" stroke-linecap="round"/><path class="rain-drop" d="M32 53 v15" stroke="#0891b2" stroke-width="3.4" stroke-linecap="round"/><path class="rain-drop" d="M74 52 v16" stroke="#22d3ee" stroke-width="3.4" stroke-linecap="round"/><path class="rain-drop" d="M82 55 v16" stroke="#0891b2" stroke-width="3.4" stroke-linecap="round"/></svg>'
};

const VIVID_WEATHER_ICONS = {
  clear:
    '<svg viewBox="0 0 96 96" role="img" aria-label="晴朗"><g class="sun-rays" fill="none" stroke="#ffcc00" stroke-width="3.4" stroke-linecap="round"><path d="M48 8 v11"/><path d="M48 77 v11"/><path d="M8 48 h11"/><path d="M77 48 h11"/><path d="M20 20 l8 8"/><path d="M68 68 l8 8"/><path d="M20 76 l8 -8"/><path d="M68 28 l8 -8"/></g><circle class="sun-core" cx="48" cy="48" r="18" fill="#ff9500"/></svg>',
  partly:
    '<svg viewBox="0 0 96 96" role="img" aria-label="多雲"><g class="sun-rays" fill="none" stroke="#ffcc00" stroke-width="2.8" stroke-linecap="round"><path d="M72 8 v7"/><path d="M72 38 v7"/><path d="M54 23 h7"/><path d="M83 23 h7"/></g><circle class="sun-core" cx="72" cy="23" r="11" fill="#ffb703"/><ellipse class="cloud-body" cx="38" cy="58" rx="24" ry="13" fill="#ffffff"/><ellipse class="cloud-body" cx="24" cy="62" rx="13" ry="9" fill="#dbeafe"/><ellipse class="cloud-body" cx="54" cy="62" rx="12" ry="9" fill="#f8fbff"/></svg>',
  overcast:
    '<svg viewBox="0 0 96 96" role="img" aria-label="陰天"><ellipse class="cloud-body" cx="48" cy="46" rx="30" ry="16" fill="#64748b"/><ellipse class="cloud-body" cx="28" cy="52" rx="15" ry="10" fill="#475569"/><ellipse class="cloud-body" cx="68" cy="52" rx="14" ry="10" fill="#94a3b8"/></svg>',
  rain:
    '<svg viewBox="0 0 96 96" role="img" aria-label="雨天"><ellipse class="cloud-body" cx="44" cy="36" rx="26" ry="14" fill="#64748b"/><ellipse class="cloud-body" cx="28" cy="40" rx="12" ry="8" fill="#475569"/><path class="rain-drop" d="M28 54 v18" stroke="#0077b6" stroke-width="4.5" stroke-linecap="round"/><path class="rain-drop" d="M44 56 v18" stroke="#00b4d8" stroke-width="4.5" stroke-linecap="round"/><path class="rain-drop" d="M60 54 v18" stroke="#0077b6" stroke-width="4.5" stroke-linecap="round"/></svg>',
  snow:
    '<svg viewBox="0 0 96 96" role="img" aria-label="下雪"><ellipse class="cloud-body" cx="48" cy="34" rx="26" ry="14" fill="#cbd5e1"/><circle class="snow-flake" cx="32" cy="62" r="4.5" fill="#48cae4"/><circle class="snow-flake" cx="48" cy="72" r="4.5" fill="#90e0ef"/><circle class="snow-flake" cx="64" cy="62" r="4.5" fill="#48cae4"/></svg>',
  thunder:
    '<svg viewBox="0 0 96 96" role="img" aria-label="雷雨"><ellipse class="cloud-body" cx="48" cy="36" rx="28" ry="15" fill="#334155" stroke="#020617" stroke-width="2.4"/><path class="bolt" d="M54 46 L44 60 H52 L46 78 L68 54 H57 L63 46 Z" fill="#ffd60a" stroke="#92400e" stroke-width="1.8"/><path class="rain-drop" d="M18 54 v16" stroke="#0077b6" stroke-width="3.6" stroke-linecap="round"/><path class="rain-drop" d="M26 57 v16" stroke="#00b4d8" stroke-width="3.6" stroke-linecap="round"/><path class="rain-drop" d="M34 55 v15" stroke="#0077b6" stroke-width="3.6" stroke-linecap="round"/><path class="rain-drop" d="M72 54 v16" stroke="#00b4d8" stroke-width="3.6" stroke-linecap="round"/><path class="rain-drop" d="M80 57 v16" stroke="#0077b6" stroke-width="3.6" stroke-linecap="round"/></svg>'
};

function getFlatWeatherIconSvg(code, cloudCover) {
  return FLAT_WEATHER_ICONS[getWeatherCategory(code)] || FLAT_WEATHER_ICONS.clear;
}

function getLineWeatherIconSvg(code, cloudCover) {
  return LINE_WEATHER_ICONS[getWeatherCategory(code)] || LINE_WEATHER_ICONS.clear;
}

function getGlassWeatherIconSvg(code, cloudCover) {
  return GLASS_WEATHER_ICONS[getWeatherCategory(code)] || GLASS_WEATHER_ICONS.clear;
}

function getVividWeatherIconSvg(code, cloudCover) {
  return VIVID_WEATHER_ICONS[getWeatherCategory(code)] || VIVID_WEATHER_ICONS.clear;
}

function getMotionWeatherIconSvg(code, cloudCover) {
  return MOTION_WEATHER_ICONS[getWeatherCategory(code)] || MOTION_WEATHER_ICONS.clear;
}

const MOTION_WEATHER_ICON_PNG = {
  clear: "./icons/weather/motion-clear.png",
  partly: "./icons/weather/motion-partly.png",
  overcast: "./icons/weather/motion-overcast.png",
  rain: "./icons/weather/motion-rain.png",
  snow: "./icons/weather/motion-snow.png",
  thunder: "./icons/weather/motion-thunder.png",
  fog: "./icons/weather/motion-fog.png",
  wind: "./icons/weather/motion-wind.png",
  typhoon: "./icons/weather/motion-typhoon.png"
};
const WEATHER_ICON_ASSET_VERSION = "v203";

function weatherIconSrc(path) {
  return `${path}?v=${WEATHER_ICON_ASSET_VERSION}`;
}

function getWeatherStatusIconHtml(weatherCode, extras = {}, size = 120) {
  const category = getWeatherCategory(weatherCode, extras);
  const src = weatherIconSrc(MOTION_WEATHER_ICON_PNG[category] || MOTION_WEATHER_ICON_PNG.clear);
  const label =
    category === "typhoon"
      ? WEATHER_CATEGORY_LABEL.typhoon
      : category === "wind"
        ? WEATHER_CATEGORY_LABEL.wind
        : WEATHER_CODE_LABEL[Number(weatherCode)] || WEATHER_CATEGORY_LABEL[category] || "天氣";
  return `<img class="weather-status-icon-img" src="${src}" alt="${label}" width="${size}" height="${size}" decoding="async" />`;
}

function getWeeklyForecastIconHtml(weatherCode, extras = {}) {
  const category = getWeatherCategory(weatherCode, extras);
  const src = weatherIconSrc(MOTION_WEATHER_ICON_PNG[category] || MOTION_WEATHER_ICON_PNG.clear);
  const label =
    WEATHER_CODE_LABEL[Number(weatherCode)] || WEATHER_CATEGORY_LABEL[category] || "天氣";
  return `<img class="weekly-forecast-icon-img" src="${src}" alt="${label}" width="48" height="48" decoding="async" />`;
}

function getWeatherIconTheme() {
  const saved = localStorage.getItem(WEATHER_ICON_THEME_KEY);
  return "motion";
}

function setWeatherIconTheme(themeKey) {
  const nextTheme = "motion";
  localStorage.setItem(WEATHER_ICON_THEME_KEY, nextTheme);
  if (weatherIcon) {
    Object.values(WEATHER_ICON_THEMES).forEach((theme) => {
      weatherIcon.classList.remove(theme.className);
    });
    weatherIcon.classList.add(WEATHER_ICON_THEMES[nextTheme].className);
  }
  weatherIconThemeOptions?.querySelectorAll(".weather-icon-theme-btn").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.theme === nextTheme);
  });
  refreshWeatherStatusIcon();
}

function getWeatherIconSvg(code, theme = getWeatherIconTheme(), cloudCover) {
  switch (theme) {
    case "flat":
      return getFlatWeatherIconSvg(code, cloudCover);
    case "line":
      return getLineWeatherIconSvg(code, cloudCover);
    case "glass":
      return getGlassWeatherIconSvg(code, cloudCover);
    case "vivid":
      return getVividWeatherIconSvg(code, cloudCover);
    case "motion":
      return getMotionWeatherIconSvg(code, cloudCover);
    default:
      return getKawaiiWeatherIconSvg(code, cloudCover);
  }
}

function initWeatherIconThemePicker() {
  if (weatherIconThemeOptions) {
    weatherIconThemeOptions.style.display = "none";
  }
  setWeatherIconTheme("motion");
}

function renderWeatherIcon(weatherCode, cloudCover, extras = {}) {
  if (!weatherIcon) {
    return;
  }
  appState.lastWeatherCode = Number(weatherCode);
  if (cloudCover !== undefined) {
    appState.lastCloudCover = cloudCover;
  }
  weatherIcon.innerHTML = getWeatherStatusIconHtml(
    weatherCode,
    extras,
    120
  );
}

function refreshWeatherStatusIcon() {
  const current = appState.weather?.current;
  if (current) {
    renderWeatherIcon(current.weather_code, current.cloud_cover, getLiveWeatherIconExtras());
    return;
  }
  const currentCode = appState.lastWeatherCode;
  if (Number.isFinite(currentCode)) {
    renderWeatherIcon(currentCode, appState.lastCloudCover, getLiveWeatherIconExtras());
  }
}

function findNearestTimeIndex(times, nowIso) {
  const index = times.findIndex((time) => time >= nowIso);
  return index === -1 ? Math.max(times.length - 1, 0) : index;
}

function getAqiLabel(aqi) {
  if (aqi <= 50) return "良好";
  if (aqi <= 100) return "普通";
  if (aqi <= 150) return "對敏感族群不健康";
  if (aqi <= 200) return "不健康";
  return "非常不健康";
}

const AIR_LEVEL_CLASSES = [
  "air-level-good",
  "air-level-moderate",
  "air-level-sensitive",
  "air-level-unhealthy",
  "air-level-very-unhealthy",
  "air-level-hazardous",
  "air-level-unknown"
];

function getAirQualityLevelKey(value, pollutant = "aqi") {
  const reading = Number(value);
  if (!Number.isFinite(reading)) {
    return "unknown";
  }
  if (pollutant === "aqi") {
    if (reading <= 50) return "good";
    if (reading <= 100) return "moderate";
    if (reading <= 150) return "sensitive";
    if (reading <= 200) return "unhealthy";
    if (reading <= 300) return "very-unhealthy";
    return "hazardous";
  }
  if (pollutant === "pm25") {
    if (reading <= 12) return "good";
    if (reading <= 35.4) return "moderate";
    if (reading <= 55.4) return "sensitive";
    if (reading <= 150.4) return "unhealthy";
    if (reading <= 250.4) return "very-unhealthy";
    return "hazardous";
  }
  if (pollutant === "pm10") {
    if (reading <= 54) return "good";
    if (reading <= 154) return "moderate";
    if (reading <= 254) return "sensitive";
    if (reading <= 354) return "unhealthy";
    if (reading <= 424) return "very-unhealthy";
    return "hazardous";
  }
  if (pollutant === "ozone") {
    if (reading <= 100) return "good";
    if (reading <= 160) return "moderate";
    if (reading <= 214) return "sensitive";
    if (reading <= 404) return "unhealthy";
    if (reading <= 504) return "very-unhealthy";
    return "hazardous";
  }
  return "unknown";
}

function setAirLevelClass(element, levelKey) {
  if (!element) {
    return;
  }
  element.classList.remove(...AIR_LEVEL_CLASSES);
  element.classList.add(`air-level-${levelKey || "unknown"}`);
}

function renderAirQualityLevelStyles({ aqi, pm25, pm10, ozone }) {
  const airDetails = document.querySelector("#airDetails");
  setAirLevelClass(airSummary, getAirQualityLevelKey(aqi, "aqi"));
  setAirLevelClass(airDetails, getAirQualityLevelKey(aqi, "aqi"));
  setAirLevelClass(aqiMetric, getAirQualityLevelKey(aqi, "aqi"));
  setAirLevelClass(pm25Metric, getAirQualityLevelKey(pm25, "pm25"));
  setAirLevelClass(pm10Metric, getAirQualityLevelKey(pm10, "pm10"));
  setAirLevelClass(ozoneMetric, getAirQualityLevelKey(ozone, "ozone"));
}

function renderRainTimeline(hours) {
  rainTimeline.innerHTML = "";
  if (!hours.length) {
    rainTimeline.innerHTML = `<p class="rain-empty">暫無預報資料</p>`;
    return;
  }

  hours.forEach((item) => {
    const row = document.createElement("div");
    row.className = "rain-row";
    row.innerHTML = `
      <span class="rain-row-time">${item.time}</span>
      <div class="bar-bg">
        <div class="bar" style="width:${Math.max(0, Math.min(item.probability, 100))}%"></div>
      </div>
      <strong class="rain-row-probability">${item.probability}%</strong>
    `;
    rainTimeline.append(row);
  });
}

function buildWeeklyForecastDays(daily = {}) {
  const dates = Array.isArray(daily.time) ? daily.time : [];
  return dates.slice(0, 7).map((date, index) => {
    const weekday = new Date(`${date}T12:00:00+08:00`).toLocaleDateString("zh-TW", {
      weekday: "short",
      timeZone: "Asia/Taipei"
    });
    const monthDay = new Date(`${date}T12:00:00+08:00`).toLocaleDateString("zh-TW", {
      month: "numeric",
      day: "numeric",
      timeZone: "Asia/Taipei"
    });
    const weatherCode = Number(daily.weather_code?.[index]);
    return {
      date,
      weekday,
      monthDay,
      weatherCode,
      label: WEATHER_CODE_LABEL[weatherCode] ?? "天氣更新中",
      tempMax: Number(daily.temperature_2m_max?.[index]),
      tempMin: Number(daily.temperature_2m_min?.[index]),
      rainSum: Number(daily.precipitation_sum?.[index] ?? 0),
      rainProb: Number(daily.precipitation_probability_max?.[index] ?? 0),
      cloudCover: Number(daily.cloud_cover_mean?.[index]),
      windSpeedMax: Number(daily.wind_speed_10m_max?.[index])
    };
  });
}

function fitWeeklyForecastSummary() {
  clearFittedTextStyles(weeklyForecastSummary);
  const node = weeklyForecastSummaryText;
  if (!node) {
    return;
  }
  const fieldWidth = Math.floor(node.getBoundingClientRect().width);
  fitSingleLineText(node, {
    minPx: 14,
    maxPx: 80,
    fillRatio: 1,
    fillLine: true,
    availablePx: fieldWidth || undefined
  });
}

function renderWeeklyForecast(days = [], locationLabel = "") {
  appState.weeklyForecast = days;
  if (weeklyForecastSummaryText || weeklyForecastSummary) {
    const titleHost = weeklyForecastSummaryText || weeklyForecastSummary;
    titleHost.textContent = locationLabel
      ? `${locationLabel}｜一週天氣預報`
      : "一週天氣預報";
    window.requestAnimationFrame(() => {
      fitWeeklyForecastSummary();
    });
  }
  if (!weeklyForecastList) {
    return;
  }
  weeklyForecastList.innerHTML = "";
  if (!days.length) {
    weeklyForecastList.innerHTML = `<p class="rain-empty">暫無一週預報資料</p>`;
    return;
  }

  days.forEach((day, index) => {
    const row = document.createElement("div");
    row.className = "weekly-forecast-row";
    if (index === 0) {
      row.classList.add("is-today");
    }
    const maxText = Number.isFinite(day.tempMax) ? `${Math.round(day.tempMax)}°` : "--";
    const minText = Number.isFinite(day.tempMin) ? `${Math.round(day.tempMin)}°` : "--";
    const rainProbText = Number.isFinite(day.rainProb) ? `${Math.round(day.rainProb)}%` : "--";
    const rainSumText = Number.isFinite(day.rainSum) ? `${day.rainSum.toFixed(1)} mm` : "--";
    const iconHtml = getWeeklyForecastIconHtml(day.weatherCode, {
      windSpeed: day.windSpeedMax
    });
    row.innerHTML = `
      <div class="weekly-forecast-day">
        <strong>${index === 0 ? "今天" : day.weekday}</strong>
        <span>${day.monthDay}</span>
      </div>
      <div class="weekly-forecast-status">
        <div class="weekly-forecast-icon weekly-forecast-icon-png">${iconHtml}</div>
        <span class="weekly-forecast-label">${day.label}</span>
      </div>
      <div class="weekly-forecast-side">
        <span class="weekly-forecast-temps">${minText} / ${maxText}</span>
        <span class="weekly-forecast-rain">
          <span class="weekly-forecast-rain-prob">降雨 ${rainProbText}</span>
          <span class="weekly-forecast-rain-sum">${rainSumText}</span>
        </span>
      </div>
    `;
    weeklyForecastList.append(row);
  });
}

async function fetchWeather() {
  const location = getActiveWeatherLocation();
  if (!location) {
    throw new Error("找不到指定鄉鎮座標");
  }

  const endpoint = new URL("https://api.open-meteo.com/v1/forecast");
  endpoint.searchParams.set("latitude", location.lat.toString());
  endpoint.searchParams.set("longitude", location.lon.toString());
  endpoint.searchParams.set(
    "current",
    "temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m,wind_gusts_10m,pressure_msl,apparent_temperature,cloud_cover"
  );
  endpoint.searchParams.set("hourly", "precipitation_probability,precipitation");
  endpoint.searchParams.set(
    "daily",
    "weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max,cloud_cover_mean,wind_speed_10m_max"
  );
  endpoint.searchParams.set("timezone", "Asia/Taipei");
  endpoint.searchParams.set("forecast_days", "7");

  const response = await fetch(endpoint.toString());
  if (!response.ok) {
    throw new Error(`氣象資料讀取失敗：${response.status}`);
  }

  const payload = await response.json();
  const current = payload.current;
  const allHours = payload.hourly.time.map((time, index) => ({
    isoTime: time,
    time: new Date(time).toLocaleTimeString("zh-TW", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    }),
    probability: Number(payload.hourly.precipitation_probability[index] ?? 0),
    precipitation: Number(payload.hourly.precipitation[index] ?? 0)
  }));
  const nowIndex = allHours.findIndex((row) => row.isoTime >= current.time);
  const startIndex = nowIndex === -1 ? 0 : nowIndex;
  const next8Hours = allHours.slice(startIndex, startIndex + RAIN_FORECAST_HOURS);
  const next24Hours = allHours.slice(startIndex, startIndex + 24);
  const rain24 = next24Hours.reduce((sum, item) => sum + item.precipitation, 0);
  const rainProbIndex = findNearestTimeIndex(payload.hourly.time, current.time);
  const rainProb = Number(payload.hourly.precipitation_probability[rainProbIndex] ?? 0);
  const weeklyForecast = buildWeeklyForecastDays(payload.daily || {});

  if (weatherPlace) {
    weatherPlace.textContent = location.label || "所選位置";
  }
  weatherSummary.textContent = WEATHER_CODE_LABEL[current.weather_code] ?? "天氣狀態更新中";
  tempValue.textContent = `${Math.round(current.temperature_2m)}°`;
  feelValue.textContent = `${Math.round(current.apparent_temperature)}°`;
  renderWeatherIcon(current.weather_code, current.cloud_cover, {
    typhoon: hasActiveTyphoonWarning(),
    windSpeed: current.wind_speed_10m,
    windGusts: current.wind_gusts_10m
  });
  humidityValue.textContent = `${Math.round(current.relative_humidity_2m)}%`;
  windValue.textContent = `${Math.round(current.wind_speed_10m)} km/h`;
  rainValue.textContent = `${current.precipitation.toFixed(1)} mm`;
  rainProbValue.textContent = `${Math.round(rainProb)}%`;
  cloudValue.textContent = `${Math.round(current.cloud_cover)}%`;
  pressureValue.textContent = `${Math.round(current.pressure_msl)} hPa`;
  rainProjection.textContent = `未來 ${RAIN_FORECAST_HOURS} 小時累積降雨預估：${rain24.toFixed(1)} mm`;
  renderRainTimeline(next8Hours);
  renderWeeklyForecast(weeklyForecast, location.label);

  appState.weather = {
    cityName: location.cityName,
    townName: location.townName,
    label: location.label,
    lat: location.lat,
    lon: location.lon,
    current,
    next8Hours,
    next24Hours,
    weeklyForecast,
    rain24,
    rainProb
  };
  refreshPwaWeatherStatus();
}

function getClosureCityNamesDescending() {
  return CITY_LOCATIONS.map((city) => city.name).sort((a, b) => b.length - a.length);
}

function resolveClosureCityFromLine(line) {
  let rest = normalizeTaiwanPlaceText(line.trim());
  if (!rest) {
    return null;
  }

  for (const region of CLOSURE_REGION_LABELS) {
    const normalizedRegion = normalizeTaiwanPlaceText(region);
    if (rest.startsWith(normalizedRegion)) {
      rest = rest.slice(normalizedRegion.length).trim();
      break;
    }
  }

  for (const cityName of getClosureCityNamesDescending()) {
    const normalizedCity = normalizeTaiwanPlaceText(cityName);
    if (!rest.startsWith(normalizedCity)) {
      continue;
    }
    const message = rest.slice(normalizedCity.length).trim();
    if (!message || !/(今天|明日|停止|照常)/.test(message)) {
      return null;
    }
    return { city: cityName, message };
  }

  return null;
}

function parseClosureMarkdown(markdownText) {
  const text = String(markdownText ?? "");
  const lines = text.split("\n").map((line) => line.trim());
  const updateLine = lines.find((line) => /更新時間：/.test(line)) ?? "";
  const titleLine = lines.find((line) => /\d{2,3}\s*年/.test(line) && /停止上班/.test(line)) ?? "";
  const updateAt = updateLine.replace(/^#+\s*/, "").replace(/更新時間：/, "").trim();
  const noticeDate = parseDgpaNoticeDate(updateLine || titleLine || updateAt);
  const noClosure = /無停班停課訊息/.test(text);

  if (noClosure) {
    return { updateAt, noticeDate: noticeDate.toISOString(), rows: [], noClosure: true };
  }

  const rows = [];
  const seenCities = new Set();

  for (const line of lines) {
    if (!line || line.startsWith("#")) {
      continue;
    }
    if (/^備註：?/.test(line) || /^[一二三四五六七八九十]+、/.test(line) || line.startsWith("（")) {
      break;
    }
    if (line.includes("縣市名稱") && line.includes("區域")) {
      continue;
    }

    if (line.startsWith("|")) {
      if (line.includes("---") || line.includes("縣市名稱") || line.includes("無停班停課訊息")) {
        continue;
      }
      const raw = line.split("|").map((cell) => cell.trim()).filter(Boolean);
      if (raw.length < 2) {
        continue;
      }
      const cityCell = raw[0].replace(/^#+/, "").trim();
      const city =
        CITY_LOCATIONS.find((item) => normalizeTaiwanPlaceText(item.name) === normalizeTaiwanPlaceText(cityCell))
          ?.name ?? null;
      if (!city || seenCities.has(city)) {
        continue;
      }
      const message = raw.slice(1).join(" ").trim();
      if (!message) {
        continue;
      }
      seenCities.add(city);
      rows.push(enrichClosureRow({ city, message }, noticeDate));
      continue;
    }

    const parsed = resolveClosureCityFromLine(line);
    if (!parsed || seenCities.has(parsed.city)) {
      continue;
    }
    seenCities.add(parsed.city);
    rows.push(enrichClosureRow(parsed, noticeDate));
  }

  return {
    updateAt,
    noticeDate: noticeDate.toISOString(),
    rows,
    noClosure: rows.length === 0 ? noClosure : false
  };
}

function saveClosureCache(data) {
  localStorage.setItem("closureCacheV1", JSON.stringify(data));
}

function readClosureCache() {
  const text = localStorage.getItem("closureCacheV1");
  if (!text) {
    return null;
  }
  try {
    const data = JSON.parse(text);
    const noticeDate = parseDgpaNoticeDate(data.noticeDate || data.updateAt || "");
    return {
      ...data,
      noticeDate: noticeDate.toISOString(),
      rows: (data.rows || []).map((row) => enrichClosureRow(row, noticeDate))
    };
  } catch {
    return null;
  }
}

function getClosureFieldTitleFontPx() {
  const title =
    document.querySelector(".visual-break-closure .visual-break-caption") ||
    document.querySelector(".visual-break-caption");
  const px = title ? Number.parseFloat(window.getComputedStyle(title).fontSize) : NaN;
  return Number.isFinite(px) && px > 0 ? px : 28;
}

function fitClosureEmptyMessage() {
  const msg = closureList?.querySelector(".closure-empty-msg");
  if (!msg) {
    return;
  }
  const titlePx = getClosureFieldTitleFontPx();
  clearFittedTextStyles(msg);
  msg.style.whiteSpace = "normal";
  msg.style.fontSize = `${titlePx * 1.1}px`;
}

function fitClosureMetaLine() {
  if (!closureMeta) {
    return;
  }
  clearFittedTextStyles(closureMeta);
  const sample = earthquakeMeta;
  const samplePx = sample ? Number.parseFloat(window.getComputedStyle(sample).fontSize) : 14;
  if (Number.isFinite(samplePx) && samplePx > 0) {
    closureMeta.style.fontSize = `${samplePx}px`;
  }
}

function renderClosureMeta(updateAt, sourceLabel, { cacheSuffix = false } = {}) {
  if (!closureMeta) {
    return;
  }
  const timeText = updateAt || "未提供";
  const sourceLabelText =
    sourceLabel === "本機快取" ? "行政院人事行政總處" : sourceLabel || "行政院人事行政總處";
  closureMeta.innerHTML = `
    <span class="closure-meta-primary">公告更新時間：${timeText}</span>
    <span class="closure-meta-source">（來源：<a href="${CLOSURE_OFFICIAL_URL}" target="_blank" rel="noopener noreferrer" class="closure-meta-link">${sourceLabelText}</a>）</span>
  `;
  if (cacheSuffix) {
    const cacheNote = document.createElement("span");
    cacheNote.className = "closure-meta-source";
    cacheNote.textContent = "（目前使用快取，請稍後重試）";
    closureMeta.append(cacheNote);
  }
  window.requestAnimationFrame(() => {
    fitClosureMetaLine();
  });
}

function isClosureStopMessage(message) {
  const text = String(message || "");
  return text.includes("停止上班") || text.includes("停止上課");
}

const TAIWAN_WEEKDAY_LABELS = ["日", "一", "二", "三", "四", "五", "六"];

function getTaiwanDateParts(value = new Date()) {
  const date = value instanceof Date ? value : new Date(value);
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Taipei",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(Number.isNaN(date.getTime()) ? new Date() : date);
  return {
    year: Number(parts.find((part) => part.type === "year")?.value),
    month: Number(parts.find((part) => part.type === "month")?.value),
    day: Number(parts.find((part) => part.type === "day")?.value)
  };
}

function taiwanDateFromYmd(year, month, day) {
  return new Date(Date.UTC(Number(year), Number(month) - 1, Number(day), 4, 0, 0));
}

function addTaiwanDays(value, days) {
  const { year, month, day } = getTaiwanDateParts(value);
  return new Date(Date.UTC(year, month - 1, day + Number(days || 0), 4, 0, 0));
}

function formatClosureDateLabel(value, { weekday = true } = {}) {
  const { year, month, day } = getTaiwanDateParts(value);
  const weekdayLabel = TAIWAN_WEEKDAY_LABELS[taiwanDateFromYmd(year, month, day).getUTCDay()];
  return weekday ? `${month}月${day}日（${weekdayLabel}）` : `${month}月${day}日`;
}

function formatClosureDateShort(value) {
  const { month, day } = getTaiwanDateParts(value);
  return `${month}/${day}`;
}

function formatClosureDatesText(dates, { short = false } = {}) {
  return (dates || [])
    .map((date) => (short ? formatClosureDateShort(date) : formatClosureDateLabel(date)))
    .filter(Boolean)
    .join("、");
}

function parseDgpaNoticeDate(text) {
  const raw = String(text || "");
  const iso = raw.match(/(20\d{2})[/\-](\d{1,2})[/\-](\d{1,2})/);
  if (iso) {
    return taiwanDateFromYmd(iso[1], iso[2], iso[3]);
  }
  const roc = raw.match(/(\d{2,3})\s*年\s*(\d{1,2})\s*月\s*(\d{1,2})\s*日/);
  if (roc) {
    return taiwanDateFromYmd(Number(roc[1]) + 1911, roc[2], roc[3]);
  }
  const { year, month, day } = getTaiwanDateParts();
  return taiwanDateFromYmd(year, month, day);
}

function extractClosureApplyDates(message, noticeDate) {
  const text = String(message || "");
  if (!isClosureStopMessage(text)) {
    return [];
  }
  const base = noticeDate instanceof Date ? noticeDate : parseDgpaNoticeDate(noticeDate);
  const dates = [];
  const addDate = (date) => {
    if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
      return;
    }
    const key = formatClosureDateShort(date);
    if (!dates.some((item) => formatClosureDateShort(item) === key)) {
      dates.push(date);
    }
  };
  const clauses = text.split(/[。；;\n]/).map((clause) => clause.trim()).filter(Boolean);
  (clauses.length ? clauses : [text]).forEach((clause) => {
    if (!clause || (/照常/.test(clause) && !/停止/.test(clause))) {
      return;
    }
    if (!/停止上班|停止上課|已達停止/.test(clause)) {
      return;
    }
    for (const match of clause.matchAll(/(\d{2,3})\s*年\s*(\d{1,2})\s*月\s*(\d{1,2})\s*日/g)) {
      addDate(taiwanDateFromYmd(Number(match[1]) + 1911, match[2], match[3]));
    }
    for (const match of clause.matchAll(/(\d{1,2})\s*月\s*(\d{1,2})\s*日/g)) {
      if (new RegExp(`${match[1]}\\s*年\\s*${match[2]}\\s*月`).test(clause)) {
        continue;
      }
      addDate(taiwanDateFromYmd(getTaiwanDateParts(base).year, match[1], match[2]));
    }
    for (const match of clause.matchAll(/(20\d{2})[/\-](\d{1,2})[/\-](\d{1,2})/g)) {
      addDate(taiwanDateFromYmd(match[1], match[2], match[3]));
    }
    const tomorrowNum = clause.match(/明[（(](\d{1,2})[)）]日/);
    if (tomorrowNum) {
      const { year, month } = getTaiwanDateParts(base);
      addDate(taiwanDateFromYmd(year, month, tomorrowNum[1]));
    }
    const todayNum = clause.match(/今[（(](\d{1,2})[)）]日/);
    if (todayNum) {
      const { year, month } = getTaiwanDateParts(base);
      addDate(taiwanDateFromYmd(year, month, todayNum[1]));
    }
    if (/明天|明日/.test(clause)) {
      addDate(addTaiwanDays(base, 1));
    }
    if (/今天|今日|本日|今[（(]|已達停止/.test(clause)) {
      addDate(base);
    }
  });
  if (!dates.length) {
    addDate(base);
  }
  return dates.sort((a, b) => a.getTime() - b.getTime());
}

function enrichClosureRow(row, noticeDate) {
  const message = String(row?.message || "");
  const dates = isClosureStopMessage(message) ? extractClosureApplyDates(message, noticeDate) : [];
  return {
    city: row?.city || "",
    message,
    noticeDate: noticeDate instanceof Date ? noticeDate.toISOString() : String(noticeDate || ""),
    dates: dates.map((date) => date.toISOString())
  };
}

function getClosureRowDates(row) {
  if (Array.isArray(row?.dates) && row.dates.length) {
    return row.dates.map((value) => new Date(value)).filter((date) => !Number.isNaN(date.getTime()));
  }
  const notice = row?.noticeDate ? new Date(row.noticeDate) : parseDgpaNoticeDate("");
  return isClosureStopMessage(row?.message) ? extractClosureApplyDates(row.message, notice) : [];
}

function renderClosure(data, sourceLabel, { cacheSuffix = false } = {}) {
  closureList.innerHTML = "";
  closureList.classList.remove("is-empty");
  const sorted = [...(data.rows || [])].sort((a, b) => {
    const aStop = Number(isClosureStopMessage(a.message));
    const bStop = Number(isClosureStopMessage(b.message));
    return bStop - aStop;
  });

  if (!sorted.length) {
    const okText = data.noClosure
      ? "目前全台無停班停課訊息。"
      : "目前未讀取到停班停課區域，請點擊最上方按鍵「立即更新資料」重試。";
    closureList.classList.add("is-empty");
    closureList.innerHTML = `<p class="status-ok closure-empty-msg">${okText}</p>`;
    appState.closureRows = [];
    appState.closureNoticeDate = data.noticeDate || "";
    appState.closureDataOk = true;
    renderClosureMeta(data.updateAt, sourceLabel, { cacheSuffix });
    updateClosureMapLayer();
    window.requestAnimationFrame(() => {
      fitClosureEmptyMessage();
    });
    return;
  }

  const appendClosureGroup = (rows, groupClass, groupLabel) => {
    if (!rows.length) {
      return;
    }
    const group = document.createElement("div");
    group.className = `closure-group ${groupClass}`;
    const heading = document.createElement("p");
    heading.className = "closure-group-label";
    heading.textContent = groupLabel;
    group.append(heading);
    rows.forEach((item) => {
      const entry = document.createElement("article");
      entry.className = `closure-item ${groupClass}`;
      const dateText = formatClosureDatesText(getClosureRowDates(item));
      entry.innerHTML = `
        <h3>${item.city}</h3>
        ${dateText ? `<p class="closure-date">適用日期：${dateText}</p>` : ""}
        <p>${item.message}</p>
      `;
      group.append(entry);
    });
    closureList.append(group);
  };

  appendClosureGroup(
    sorted.filter((item) => isClosureStopMessage(item.message)),
    "closure-stop",
    "停班停課"
  );
  appendClosureGroup(
    sorted.filter((item) => !isClosureStopMessage(item.message)),
    "closure-normal",
    "照常上班上課"
  );

  appState.closureRows = sorted;
  appState.closureNoticeDate = data.noticeDate || "";
  appState.closureDataOk = true;
  renderClosureMeta(data.updateAt, sourceLabel, { cacheSuffix });
  updateClosureMapLayer();
}

async function fetchClosureNotices() {
  const endpoint = `https://r.jina.ai/${CLOSURE_OFFICIAL_URL}`;
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`停班停課資料讀取失敗：${response.status}`);
    }
    const markdown = await response.text();
    const data = parseClosureMarkdown(markdown);
    if (!data.rows.length && !data.noClosure && !data.updateAt) {
      throw new Error("停班停課資料格式無法解析");
    }
    saveClosureCache(data);
    renderClosure(data, "行政院人事行政總處");
  } catch (error) {
    const cache = readClosureCache();
    if (cache) {
      renderClosure(cache, "本機快取", { cacheSuffix: true });
      appState.closureRows = cache.rows || [];
      appState.closureNoticeDate = cache.noticeDate || "";
      return;
    }
    closureMeta.textContent = `停班停課資料暫時無法更新：${error.message}`;
    appState.closureRows = [];
    appState.closureNoticeDate = "";
    appState.closureDataOk = false;
    updateClosureMapLayer();
    closureList.classList.remove("is-empty");
    closureList.innerHTML = `
      <p class="status-warn">
        系統目前無法讀取公告，請改用
        <a href="https://www.dgpa.gov.tw/typh/daily/nds.html" target="_blank" rel="noopener noreferrer">官方頁面</a>
        查詢。
      </p>
    `;
  }
}

function getActiveClosureMapRows() {
  return (appState.closureRows || []).filter((row) => isClosureStopMessage(row.message));
}

function updateClosureMapLayer() {
  if (!warningMap) {
    return;
  }
  if (!mapClosureLayer) {
    mapClosureLayer = L.layerGroup();
  }
  mapClosureLayer.clearLayers();
  mapLegendMarkers.closure = [];

  getActiveClosureMapRows().forEach((row) => {
    const city = CITY_LOCATIONS.find((item) => item.name === row.city);
    if (!city || !Number.isFinite(city.lat) || !Number.isFinite(city.lon)) {
      return;
    }
    const dates = getClosureRowDates(row);
    const dateLabel = formatClosureDatesText(dates);
    const dateShort = formatClosureDatesText(dates, { short: true });
    const marker = L.marker([city.lat, city.lon], {
      pane: "closurePane",
      keyboard: false,
      title: dateLabel ? `${row.city}｜${dateLabel}停班停課` : `${row.city}停班停課`,
      zIndexOffset: 520,
      icon: L.divIcon({
        className: "map-closure-marker",
        html: `
          <span class="map-closure-pin">
            <span class="map-closure-card">
              <strong>${escapeMapLegendHtml(row.city)}</strong>
              <span>${escapeMapLegendHtml(dateShort || dateLabel || "停班停課")}</span>
            </span>
          </span>
        `,
        iconSize: [0, 0],
        iconAnchor: [0, 0]
      })
    });
    const popupHtml = `
      <strong>停班停課</strong><br/>
      ${escapeMapLegendHtml(row.city)}<br/>
      ${dateLabel ? `適用日期：${escapeMapLegendHtml(dateLabel)}<br/>` : ""}
      ${escapeMapLegendHtml(row.message)}<br/>
      來源：行政院人事行政總處
    `;
    marker.bindPopup(popupHtml, getMapPopupOptions({ className: "disaster-map-popup closure-map-popup" }));
    marker._legendPlace = dateLabel ? `${row.city}｜${dateLabel}` : row.city;
    marker._popupHtml = popupHtml;
    marker._closureDates = dates.map((date) => date.toISOString());
    marker._legendKey = "closure";
    mapLegendMarkers.closure.push(marker);
  });

  addVisibleLegendMarkers(mapClosureLayer, ["closure"]);
  syncMapLayerVisibility("closure-points");
  syncMapLegendState();
}

async function fetchAirQuality() {
  const location = getActiveWeatherLocation();
  if (!location) {
    throw new Error("找不到空品鄉鎮座標");
  }
  const endpoint = new URL("https://air-quality-api.open-meteo.com/v1/air-quality");
  endpoint.searchParams.set("latitude", String(location.lat));
  endpoint.searchParams.set("longitude", String(location.lon));
  endpoint.searchParams.set("hourly", "us_aqi,pm2_5,pm10,ozone");
  endpoint.searchParams.set("timezone", "Asia/Taipei");
  endpoint.searchParams.set("forecast_days", "2");

  const response = await fetch(endpoint.toString());
  if (!response.ok) {
    throw new Error(`空氣品質讀取失敗：${response.status}`);
  }
  const payload = await response.json();
  const nowIso = appState.weather?.current?.time ?? payload.hourly.time[0];
  const index = findNearestTimeIndex(payload.hourly.time, nowIso);
  const aqi = Number(payload.hourly.us_aqi[index] ?? 0);
  const pm25 = Number(payload.hourly.pm2_5[index] ?? 0);
  const pm10 = Number(payload.hourly.pm10[index] ?? 0);
  const ozone = Number(payload.hourly.ozone[index] ?? 0);

  airSummary.textContent = `當地空氣品質：${getAqiLabel(aqi)}`;
  aqiValue.textContent = `${Math.round(aqi)}`;
  pm25Value.textContent = `${pm25.toFixed(1)} μg/m³`;
  pm10Value.textContent = `${pm10.toFixed(1)} μg/m³`;
  ozoneValue.textContent = `${ozone.toFixed(1)} μg/m³`;

  renderAirQualityLevelStyles({ aqi, pm25, pm10, ozone });
  syncAirDetailsSummaryLabel();

  appState.airQuality = {
    cityName: location.cityName,
    label: location.label,
    aqi,
    pm25,
    pm10,
    ozone
  };
}

function syncAirDetailsSummaryLabel() {
  if (!airSummary || !appState.airQuality) {
    return;
  }
  const label = getAqiLabel(appState.airQuality.aqi);
  airSummary.textContent = `當地空氣品質：${label}`;
}

function getFloodLevelByDepth(depthCm) {
  if (depthCm >= 50) return 4;
  if (depthCm >= 30) return 3;
  if (depthCm >= 15) return 2;
  return 1;
}

function parseTyphoonOfficialText(newsMarkdown, warnMarkdown) {
  const warnText = warnMarkdown || "";
  const hasWarning = !/目前無發布颱風警報/.test(warnText);
  const hasLandWarning =
    hasWarning && /陸上颱風警報/.test(warnText) && !/解除陸上颱風警報/.test(warnText);
  const countMatch = (newsMarkdown || "").match(/有\s*(\d+)\s*個颱風/);
  const typhoonCount = countMatch ? Number(countMatch[1]) : 0;
  const nameMatch = (newsMarkdown || "").match(/(強烈颱風|中度颱風|輕度颱風)\s+([^\s]+)\s+編號第\s*(\d+)\s*號\s+國際命名\s+([A-Z]+)/);
  const detailMatch = (newsMarkdown || "").match(
    /中心位置在北緯\s*([0-9.]+)\s*度，東經\s*([0-9.]+)\s*度.*?中心氣壓\s*([0-9]+)\s*百帕，近中心最大風速每秒\s*([0-9]+)\s*公尺，瞬間最大陣風每秒\s*([0-9]+)\s*公尺/
  );

  const messages = [];
  if (nameMatch) {
    messages.push(`${nameMatch[1]} ${nameMatch[2]}（第 ${nameMatch[3]} 號 / ${nameMatch[4]}）`);
  } else if (typhoonCount > 0) {
    messages.push(`太平洋地區目前有 ${typhoonCount} 個颱風活動。`);
  } else {
    messages.push("目前中央氣象署颱風消息未顯示活躍颱風。");
  }

  if (detailMatch) {
    messages.push(
      `中心位置：北緯 ${detailMatch[1]}°、東經 ${detailMatch[2]}°；中心氣壓 ${detailMatch[3]} hPa。`
    );
    messages.push(
      `近中心最大風速 ${detailMatch[4]} m/s，瞬間最大陣風 ${detailMatch[5]} m/s。`
    );
  }

  messages.push(hasWarning ? "官方狀態：已發布颱風警報，請提高警戒。" : "官方狀態：目前無發布颱風警報。");
  messages.push("資料來源：中央氣象署颱風消息／颱風警報頁面。");

  return {
    hasWarning,
    hasLandWarning,
    typhoonCount,
    name: nameMatch ? `${nameMatch[1]} ${nameMatch[2]}` : null,
    lat: detailMatch ? Number(detailMatch[1]) : null,
    lon: detailMatch ? Number(detailMatch[2]) : null,
    pressure: detailMatch ? Number(detailMatch[3]) : null,
    maxWindMs: detailMatch ? Number(detailMatch[4]) : null,
    gustMs: detailMatch ? Number(detailMatch[5]) : null,
    messages
  };
}

function hasLifeThreateningTyphoonInfo() {
  const official = appState.typhoonOfficial;
  return Boolean(official?.hasLandWarning || official?.hasWarning);
}

function getWindyWrap() {
  return windyEmbed?.closest(".windy-wrap-large") || windyEmbed?.parentElement || null;
}

function getWindyEmbedPixelSize() {
  const wrap = getWindyWrap();
  const measured = Math.round(wrap?.getBoundingClientRect().width || wrap?.clientWidth || 0);
  const size = measured >= 80 ? measured : WINDY_EMBED_WIDTH;
  const clamped = Math.max(240, Math.min(size, 560));
  return { width: clamped, height: clamped };
}

function lockWindyWrapSize() {
  const wrap = getWindyWrap();
  if (!wrap) {
    return;
  }
  const width = Math.round(wrap.getBoundingClientRect().width);
  if (width < 80) {
    return;
  }
  wrap.style.width = `${width}px`;
  wrap.style.height = `${width}px`;
  wrap.style.maxWidth = `${width}px`;
  wrap.style.maxHeight = `${width}px`;
  wrap.style.minWidth = `${width}px`;
  wrap.style.minHeight = `${width}px`;
  wrap.style.aspectRatio = "1 / 1";
}

function unlockWindyWrapSize() {
  const wrap = getWindyWrap();
  if (!wrap) {
    return;
  }
  wrap.style.width = "";
  wrap.style.height = "";
  wrap.style.maxWidth = "";
  wrap.style.maxHeight = "";
  wrap.style.minWidth = "";
  wrap.style.minHeight = "";
  wrap.style.aspectRatio = "";
}

function buildWindyEmbedUrl(lat, lon, zoom = 5, { precision = 3, markerLat, markerLon } = {}) {
  const digits = Math.min(6, Math.max(3, Number(precision) || 3));
  const fmt = (value) => Number(value).toFixed(digits);
  const box = getWindyEmbedPixelSize();
  const pinLat = Number.isFinite(Number(markerLat)) ? Number(markerLat) : lat;
  const pinLon = Number.isFinite(Number(markerLon)) ? Number(markerLon) : lon;
  const params = new URLSearchParams({
    lat: fmt(lat),
    lon: fmt(lon),
    detailLat: fmt(pinLat),
    detailLon: fmt(pinLon),
    width: String(box.width),
    height: String(box.height),
    zoom: String(zoom),
    level: "surface",
    overlay: "rain",
    product: "ecmwf",
    menu: "",
    message: "true",
    marker: "true",
    calendar: "12",
    pressure: "false",
    type: "map",
    location: "coordinates",
    detail: "",
    metricWind: "kt",
    metricTemp: "°C",
    radarRange: "-1"
  });
  return `https://embed.windy.com/embed2.html?${params.toString()}`;
}

function getWindyFocusPoint() {
  const hasTyphoonCenter = Boolean(
    Number.isFinite(appState.typhoonOfficial?.lat) && Number.isFinite(appState.typhoonOfficial?.lon)
  );
  if (
    windyLocateFocus &&
    Number.isFinite(windyLocateFocus.lat) &&
    Number.isFinite(windyLocateFocus.lon)
  ) {
    return {
      ...WINDY_TAIWAN_VIEW,
      markerLat: windyLocateFocus.lat,
      markerLon: windyLocateFocus.lon,
      precision: windyLocateFocus.precision || 6,
      hasTyphoonCenter
    };
  }
  return {
    ...WINDY_TAIWAN_VIEW,
    precision: 3,
    hasTyphoonCenter
  };
}

function updateWindyTrackEmbed({ force = false } = {}) {
  if (!windyEmbed) {
    return;
  }
  const focus = getWindyFocusPoint();
  const embedUrl = buildWindyEmbedUrl(focus.lat, focus.lon, focus.zoom, {
    precision: focus.precision || 3,
    markerLat: focus.markerLat,
    markerLon: focus.markerLon
  });
  const normalizeSrc = (src) => {
    try {
      const url = new URL(src);
      url.searchParams.delete("_replay");
      url.searchParams.delete("_locate");
      return url.toString();
    } catch {
      return src;
    }
  };
  const currentSrc = windyEmbed.getAttribute("src") || "";
  if (force || !currentSrc || normalizeSrc(currentSrc) !== normalizeSrc(embedUrl)) {
    const nextUrl = new URL(embedUrl);
    if (force) {
      nextUrl.searchParams.set("_locate", String(Date.now()));
    }
    windyEmbed.loading = "eager";
    windyEmbed.src = nextUrl.toString();
  }
  windyEmbed.style.width = "100%";
  windyEmbed.style.height = "100%";
  windyEmbed.style.minHeight = "100%";
  windyEmbed.style.maxWidth = "none";
  windyEmbed.style.maxHeight = "none";
  if (windyExternalLink) {
    windyExternalLink.href = `https://www.windy.com/?${Number(focus.lat).toFixed(5)},${Number(focus.lon).toFixed(5)},${focus.zoom},i:pressure`;
  }
}

function resolveWindyLocateZoom(accuracyMeters) {
  if (!Number.isFinite(accuracyMeters)) {
    return 11;
  }
  if (accuracyMeters <= 50) {
    return 12;
  }
  if (accuracyMeters <= 150) {
    return 11;
  }
  if (accuracyMeters <= 500) {
    return 10;
  }
  return 9;
}

function locateWindyEmbed() {
  if (!windyLocateBtn || !windyEmbed) {
    return;
  }
  if (!window.isSecureContext) {
    showInPageAlert("定位無法啟用", "請以 HTTPS（或本機安全環境）開啟本站後再使用 Windy 定位。", {
      timeoutMs: 9000,
      fullscreen: true
    });
    return;
  }
  if (!navigator.geolocation?.getCurrentPosition) {
    showInPageAlert("定位無法啟用", "此裝置瀏覽器不支援衛星定位。", { timeoutMs: 9000, fullscreen: true });
    return;
  }

  windyLocateBtn.disabled = true;
  if (windyLocateBtnLabel) {
    windyLocateBtnLabel.textContent = "定位中";
  }

  const finish = () => {
    windyLocateBtn.disabled = false;
    if (windyLocateBtnLabel) {
      windyLocateBtnLabel.textContent = WINDY_LOCATE_BTN_LABEL;
    }
  };

  const applySuccess = (position) => {
    const { latitude, longitude, accuracy } = position.coords;
    const nearest = findNearestTownship(latitude, longitude);
    if (nearest) {
      applyDeviceLocateToSiteDisplays(nearest, latitude, longitude, accuracy);
    } else {
      applyDeviceCoordinatesToMaps(latitude, longitude, accuracy);
    }
    finish();
  };

  const failWith = (error) => {
    showInPageAlert("Windy 定位失敗", getGeolocationErrorMessage(error), {
      timeoutMs: 10000,
      fullscreen: true
    });
    finish();
  };

  // Keep getCurrentPosition inside the click gesture; high-accuracy feeds Windy embed coords.
  navigator.geolocation.getCurrentPosition(applySuccess, failWith, {
    enableHighAccuracy: true,
    timeout: 15000,
    maximumAge: 0
  });
}

function formatVisitorCount(count) {
  const value = Math.max(0, Math.floor(Number(count) || 0));
  return String(value).padStart(7, "0");
}

function setVisitorCountDisplay(count) {
  const formatted = formatVisitorCount(count);
  if (visitorCounterValue) {
    visitorCounterValue.textContent = formatted;
    return;
  }
  if (visitorCounter) {
    visitorCounter.textContent = `觀看人數：${formatted}`;
  }
}

function setLikeCountDisplay(count) {
  if (likeCountValue) {
    likeCountValue.textContent = formatVisitorCount(count);
  }
}

function hasUserLiked() {
  return localStorage.getItem(LIKE_VOTED_STORAGE_KEY) === "1";
}

function markUserLiked() {
  localStorage.setItem(LIKE_VOTED_STORAGE_KEY, "1");
}

function syncLikeButtonState(liked = hasUserLiked()) {
  if (!likeBtn) {
    return;
  }
  likeBtn.classList.toggle("is-liked", liked);
  likeBtn.disabled = liked;
  likeBtn.setAttribute("aria-pressed", liked ? "true" : "false");
  if (likeBtnLabel) {
    likeBtnLabel.textContent = liked ? "已按讚" : "按讚";
  }
}

function readCachedGlobalCount(storageKey) {
  const value = Number(localStorage.getItem(storageKey) || 0);
  return Number.isFinite(value) && value > 0 ? Math.floor(value) : 0;
}

function rememberGlobalCount(storageKey, count) {
  const next = Math.max(readCachedGlobalCount(storageKey), Math.max(0, Math.floor(Number(count) || 0)));
  if (next > 0) {
    localStorage.setItem(storageKey, String(next));
  }
  return next;
}

async function fetchCounterFloor() {
  try {
    const response = await fetch(`${COUNTER_FLOOR_URL}?t=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) {
      return { visits: 0, likes: 0 };
    }
    const payload = await response.json();
    return {
      visits: Math.max(0, Math.floor(Number(payload?.visits) || 0)),
      likes: Math.max(0, Math.floor(Number(payload?.likes) || 0))
    };
  } catch {
    return { visits: 0, likes: 0 };
  }
}

async function fetchAbacusCounter(key, { increment = false, timeoutMs = 5000 } = {}) {
  const action = increment ? "hit" : "get";
  const url = `${COUNTER_ABACUS_BASE}/${action}/${VISITOR_COUNTER_NAMESPACE}/${encodeURIComponent(key)}`;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, { signal: controller.signal, cache: "no-store" });
    if (!response.ok) {
      return null;
    }
    const payload = await response.json();
    const value = Number(payload?.value ?? payload?.count);
    return Number.isFinite(value) ? Math.max(0, Math.floor(value)) : null;
  } catch {
    return null;
  } finally {
    clearTimeout(timeoutId);
  }
}

async function initVisitorCounter() {
  if (!visitorCounter) {
    return;
  }
  const floor = await fetchCounterFloor();
  const cached = readCachedGlobalCount(VISITOR_COUNTER_STORAGE_KEY);
  let totalCount = Math.max(floor.visits, cached);
  setVisitorCountDisplay(totalCount);

  const remoteCount = await fetchAbacusCounter(VISITOR_COUNTER_KEY, { increment: true });
  if (Number.isFinite(remoteCount)) {
    totalCount = Math.max(totalCount, remoteCount);
  }
  totalCount = rememberGlobalCount(VISITOR_COUNTER_STORAGE_KEY, totalCount);
  setVisitorCountDisplay(totalCount);
}

async function initLikeCounter() {
  if (!likeBtn || !likeCountValue) {
    return;
  }

  const floor = await fetchCounterFloor();
  const cached = readCachedGlobalCount(LIKE_COUNTER_STORAGE_KEY);
  let totalCount = Math.max(floor.likes, cached);
  setLikeCountDisplay(totalCount);
  syncLikeButtonState();

  const remoteGet = await fetchAbacusCounter(LIKE_COUNTER_KEY, { increment: false });
  if (Number.isFinite(remoteGet)) {
    totalCount = rememberGlobalCount(LIKE_COUNTER_STORAGE_KEY, Math.max(totalCount, remoteGet));
    setLikeCountDisplay(totalCount);
  }

  likeBtn.addEventListener("click", async () => {
    if (hasUserLiked() || likeBtn.disabled) {
      return;
    }
    likeBtn.disabled = true;
    markUserLiked();
    syncLikeButtonState(true);
    const optimistic = rememberGlobalCount(LIKE_COUNTER_STORAGE_KEY, totalCount + 1);
    setLikeCountDisplay(optimistic);

    const remoteHit = await fetchAbacusCounter(LIKE_COUNTER_KEY, { increment: true });
    if (Number.isFinite(remoteHit)) {
      totalCount = rememberGlobalCount(LIKE_COUNTER_STORAGE_KEY, Math.max(optimistic, remoteHit));
      setLikeCountDisplay(totalCount);
    } else {
      totalCount = optimistic;
    }
  });
}

function calculateTyphoonRisk() {
  const weather = appState.weather;
  const official = appState.typhoonOfficial;
  if (!weather && !official) {
    return null;
  }

  const wind = Number(weather?.current?.wind_speed_10m ?? 0);
  const gust = Number(weather?.current?.wind_gusts_10m ?? wind);
  const pressure = Number(weather?.current?.pressure_msl ?? 1015);
  const rainProbAvg = weather
    ? weather.next8Hours.reduce((sum, item) => sum + item.probability, 0) / Math.max(weather.next8Hours.length, 1)
    : 0;
  const rain24 = Number(weather?.rain24 ?? 0);

  let score = 0;
  score += Math.min(wind * 1.2, 30);
  score += Math.min(gust * 0.7, 25);
  score += Math.max(0, 1012 - pressure) * 1.6;
  score += Math.min(rainProbAvg * 0.25, 18);
  score += Math.min(rain24 * 0.45, 20);

  if (official?.hasWarning) {
    score += 35;
  }
  if ((official?.typhoonCount ?? 0) > 0) {
    score += 18;
  }
  if (official?.maxWindMs) {
    score += Math.min(official.maxWindMs * 0.55, 28);
  }
  if (official?.pressure && official.pressure < 970) {
    score += 12;
  }

  score = Math.round(Math.min(score, 100));
  const level = score >= 70 ? "高" : score >= 40 ? "中" : "低";
  const messages = [
    ...(official?.messages ?? []),
    `本地觀測：風速 ${wind.toFixed(1)} km/h，陣風 ${gust.toFixed(1)} km/h，氣壓 ${Math.round(pressure)} hPa。`,
    `本地降雨：12 小時平均降雨機率 ${Math.round(rainProbAvg)}%，${RAIN_FORECAST_HOURS} 小時雨量預估 ${rain24.toFixed(1)} mm。`
  ];
  return { level, score, messages, hasWarning: Boolean(official?.hasWarning) };
}

function renderTyphoonAnalysis() {
  const result = calculateTyphoonRisk();
  if (!result) {
    typhoonRiskBadge.textContent = "風險等級：資料不足";
    typhoonRiskBadge.className = "risk-badge risk-low hero-fit-text";
    typhoonAnalysisList.innerHTML = "<li>等待氣象資料。</li>";
    updateWindyTrackEmbed();
    scheduleHeroTextFit();
    return;
  }
  appState.typhoon = result;
  const className = result.level === "高" ? "risk-high" : result.level === "中" ? "risk-medium" : "risk-low";
  typhoonRiskBadge.className = `risk-badge ${className} hero-fit-text`;
  typhoonRiskBadge.textContent = `風險等級：${result.level}（指數 ${result.score}/100）`;
  typhoonAnalysisList.innerHTML = "";
  result.messages.forEach((message) => {
    const item = document.createElement("li");
    item.textContent = message;
    typhoonAnalysisList.append(item);
  });
  updateWindyTrackEmbed();
  scheduleHeroTextFit();
}

function decodeHtmlEntities(text) {
  const raw = String(text ?? "");
  if (!raw || !raw.includes("&")) {
    return raw;
  }
  const textarea = document.createElement("textarea");
  textarea.innerHTML = raw;
  return textarea.value;
}

function formatFloodStationLabel(point = {}) {
  const county = String(point.county || "").trim();
  const town = String(point.town || "").trim();
  const area = `${county}${town}`.trim();
  const name = decodeHtmlEntities(point.name || point.areaName || "")
    .replace(/\s+/g, " ")
    .trim();

  let locationPart = name
    .replace(/[（(]\s*編號\s*[0-9]+\s*[）)]/g, "")
    .replace(/編號\s*[0-9]+/g, "")
    .trim();

  if (town && locationPart.startsWith(town)) {
    locationPart = locationPart.slice(town.length).replace(/^[-－\s]+/, "").trim();
  }
  if (county && locationPart.startsWith(county)) {
    locationPart = locationPart.slice(county.length).replace(/^[-－\s]+/, "").trim();
  }

  const hasOwnHouseNumber = /\d+號/.test(locationPart) || /\d+號/.test(name);
  const nearbyHouse = hasOwnHouseNumber
    ? ""
    : findNearbyFloodHouseNumber(point, {
        excludeSensorId: point.sensorid,
        maxKm: 0.8
      });

  const parts = [];
  if (area) {
    parts.push(area);
  }
  if (locationPart) {
    parts.push(locationPart);
  } else if (nearbyHouse) {
    parts.push(`鄰近門牌${nearbyHouse}`);
  } else if (name) {
    parts.push(name);
  }

  let label = parts.join(" ").replace(/\s+/g, " ").trim();
  if (
    !hasOwnHouseNumber &&
    nearbyHouse &&
    label &&
    !label.includes(nearbyHouse) &&
    !label.includes("鄰近門牌")
  ) {
    label = `${label}（鄰近門牌${nearbyHouse}）`;
  }

  return label || area || "感測點";
}

function extractFloodHouseNumberHint(text = "") {
  const raw = decodeHtmlEntities(String(text || ""));
  if (!raw) {
    return "";
  }
  const match = raw.match(
    /(?:[\u4e00-\u9fff\w]+)?\d+(?:[-－之]\d+)*(?:巷\d+號|弄\d+號|號(?:[-－之]\d+)?)(?:前|旁|口)?/
  );
  if (!match) {
    return "";
  }
  return match[0].replace(/^[-－\s]+/, "").trim();
}

function findNearbyFloodHouseNumber(point = {}, { excludeSensorId = "", maxKm = 0.8 } = {}) {
  const lat = Number(point.lat);
  const lon = Number(point.lon);
  if (!Number.isFinite(lat) || !Number.isFinite(lon) || !appState.floodStations?.length) {
    return "";
  }

  let best = null;
  appState.floodStations.forEach((station) => {
    if (excludeSensorId && station.sensorid === excludeSensorId) {
      return;
    }
    const house = extractFloodHouseNumberHint(station.name);
    if (!house) {
      return;
    }
    const distanceKm = getDistanceKm(lat, lon, station.lat, station.lon);
    if (!(distanceKm <= maxKm)) {
      return;
    }
    if (!best || distanceKm < best.distanceKm) {
      best = { house, distanceKm, county: station.county, town: station.town };
    }
  });

  return best?.house || "";
}

function getNearbyFloodWarnings() {
  const location = getActiveWeatherLocation();
  if (!location || !appState.floodLivePoints.length) {
    return [];
  }
  return getNearbyFloodPoints(location, FLOOD_NOTIFY_RADIUS_KM);
}

function getNearbyFloodPoints(location, radiusKm = FLOOD_NOTIFY_RADIUS_KM) {
  if (!location || !appState.floodLivePoints.length) {
    return [];
  }
  return appState.floodLivePoints
    .map((point) => ({
      areaName: formatFloodStationLabel(point),
      sensorid: point.sensorid,
      level: point.level,
      waterDepthCm: point.depthCm,
      depthCm: point.depthCm,
      updatedAt: point.updatedAt,
      lat: point.lat,
      lon: point.lon,
      distanceKm: getDistanceKm(location.lat, location.lon, point.lat, point.lon)
    }))
    .filter((row) => row.distanceKm <= radiusKm)
    .sort((a, b) => b.level - a.level || a.distanceKm - b.distanceKm);
}

function isFloodWarningDepth(depthCm) {
  return Number(depthCm) >= FLOOD_SAFE_DEPTH_CM;
}

function buildPowerOutageTrackingKey(point) {
  const area = normalizeTaiwanPlaceText(point.area || point.label || "");
  const lat = Number(point.lat).toFixed(4);
  const lon = Number(point.lon).toFixed(4);
  return `${point.type}|${area}|${lat}|${lon}`;
}

function createDefaultRecoveryState() {
  return {
    floodSensors: {},
    powerOutages: {},
    waterOutages: {},
    earthquakes: {},
    cityClosures: {},
    hasLandTyphoonWarning: false
  };
}

function loadRecoveryState() {
  try {
    const raw = localStorage.getItem(RECOVERY_STATE_STORAGE_KEY);
    if (!raw) {
      return createDefaultRecoveryState();
    }
    const parsed = JSON.parse(raw);
    return {
      floodSensors: parsed.floodSensors ?? {},
      powerOutages: parsed.powerOutages ?? {},
      waterOutages: parsed.waterOutages ?? {},
      earthquakes: parsed.earthquakes ?? {},
      cityClosures: parsed.cityClosures ?? {},
      hasLandTyphoonWarning: Boolean(parsed.hasLandTyphoonWarning)
    };
  } catch {
    return createDefaultRecoveryState();
  }
}

function saveRecoveryState(state) {
  localStorage.setItem(RECOVERY_STATE_STORAGE_KEY, JSON.stringify(state));
}

function isRecoveryNotificationKind(kind) {
  return String(kind || "").includes("recovery");
}

function isRecoveryNotificationLine(text) {
  return /消退|解除|已恢復|已解除/.test(String(text || ""));
}

const NOTIFY_CATEGORY_ORDER = [
  "closure",
  "flood",
  "typhoon",
  "earthquake",
  "power",
  "water",
  "cwa-warning",
  "weather",
  "air",
  "other"
];

function getNotifyCategoryKey(text = "", kind = "") {
  const raw = `${kind}\n${text}`;
  if (/停班停課/.test(raw)) {
    return "closure";
  }
  if (/積淹水/.test(raw)) {
    return "flood";
  }
  if (/停電/.test(raw)) {
    return "power";
  }
  if (/停水/.test(raw)) {
    return "water";
  }
  if (/地震/.test(raw)) {
    return "earthquake";
  }
  if (/颱風/.test(raw)) {
    return "typhoon";
  }
  if (/空氣/.test(raw)) {
    return "air";
  }
  if (/氣象署警特報|【氣象署/.test(raw)) {
    return "cwa-warning";
  }
  if (/【天氣】|【降雨】/.test(raw)) {
    return "weather";
  }
  return "other";
}

function mergeNotifyLinesByCategory(lines = []) {
  const groups = new Map();
  (lines || []).forEach((line) => {
    const text = String(line || "").trim();
    if (!text) {
      return;
    }
    const key = getNotifyCategoryKey(text);
    if (!groups.has(key)) {
      groups.set(key, []);
    }
    const list = groups.get(key);
    if (!list.includes(text)) {
      list.push(text);
    }
  });
  return NOTIFY_CATEGORY_ORDER.filter((key) => groups.has(key)).flatMap((key) => groups.get(key));
}

function mergeNotifyItemsByCategory(items = []) {
  const groups = new Map();
  (items || []).forEach((item) => {
    const text = String(typeof item === "string" ? item : item?.text || "").trim();
    if (!text) {
      return;
    }
    const kind = typeof item === "object" ? String(item.kind || "") : "";
    const key = getNotifyCategoryKey(text, kind);
    if (!groups.has(key)) {
      groups.set(key, []);
    }
    const list = groups.get(key);
    if (!list.some((row) => row.text === text)) {
      list.push({ kind, text });
    }
  });
  return NOTIFY_CATEGORY_ORDER.filter((key) => groups.has(key)).map((key) => ({
    category: key,
    items: groups.get(key),
    lines: groups.get(key).map((row) => row.text)
  }));
}

function getMergedNotifyBatchTitle(lines = []) {
  const rows = (lines || []).map((line) => String(line || "").trim()).filter(Boolean);
  if (!rows.length) {
    return "災害狀態更新";
  }
  const allRecovery = rows.every(isRecoveryNotificationLine);
  const anyRecovery = rows.some(isRecoveryNotificationLine);
  if (allRecovery) {
    return "災害警戒解除";
  }
  if (anyRecovery) {
    return "災害狀態更新";
  }
  return "災害警戒通知";
}

function getRecoverySentKey(item) {
  return `${item?.kind || "recovery"}::${String(item?.text || "").trim()}`;
}

function loadRecoverySentMap() {
  try {
    const raw = JSON.parse(localStorage.getItem(RECOVERY_SENT_STORAGE_KEY) || "{}");
    return raw && typeof raw === "object" ? raw : {};
  } catch {
    return {};
  }
}

function pruneRecoverySentMap(map) {
  const cutoff = Date.now() - RECOVERY_SENT_TTL_MS;
  const next = {};
  Object.entries(map || {}).forEach(([key, timestamp]) => {
    if (Number(timestamp) >= cutoff) {
      next[key] = timestamp;
    }
  });
  return next;
}

function filterUnsentRecoveryMessages(messages) {
  const sent = pruneRecoverySentMap(loadRecoverySentMap());
  return (messages || []).filter((item) => {
    if (!isRecoveryNotificationKind(item?.kind)) {
      return true;
    }
    return !sent[getRecoverySentKey(item)];
  });
}

function markRecoveryMessagesSent(messages) {
  const sent = pruneRecoverySentMap(loadRecoverySentMap());
  const now = Date.now();
  (messages || []).forEach((item) => {
    if (!isRecoveryNotificationKind(item?.kind)) {
      return;
    }
    sent[getRecoverySentKey(item)] = now;
  });
  try {
    localStorage.setItem(RECOVERY_SENT_STORAGE_KEY, JSON.stringify(sent));
  } catch {
    /* ignore */
  }
}

function updateRecoveryTrackingState() {
  const prev = loadRecoveryState();
  const next = createDefaultRecoveryState();
  const messages = [];
  const topics = new Set(appState.subscription?.topics ?? []);
  const isSubscribed = Boolean(appState.subscription?.email);
  const location = getSubscriptionWeatherLocation();
  const locationLabel = getSubscriptionLocationLabel();

  if (location) {
    const nearbyFloods = getNearbyFloodPoints(location, FLOOD_SUBSCRIPTION_RADIUS_KM);
    const currentWarningSensors = {};
    nearbyFloods.forEach((point) => {
      if (!isFloodWarningDepth(point.depthCm)) {
        return;
      }
      currentWarningSensors[point.sensorid] = {
        areaName: point.areaName,
        level: point.level,
        depthCm: point.depthCm,
        distanceKm: point.distanceKm
      };
    });

    if (isSubscribed && topics.has("flood")) {
      Object.entries(prev.floodSensors).forEach(([sensorid, point]) => {
        if (currentWarningSensors[sensorid]) {
          return;
        }
        messages.push({
          kind: "flood-recovery",
          text: `【積淹水消退】${point.areaName} 已消退至安全警戒高度（原水深 ${point.depthCm} cm、等級 ${point.level}），${locationLabel} 周邊約 ${point.distanceKm.toFixed(1)} km，請恢復通行並持續留意。`
        });
      });
      Object.entries(currentWarningSensors).forEach(([sensorid, point]) => {
        if (prev.floodSensors[sensorid]) {
          return;
        }
        messages.push({
          kind: "flood-alert",
          text: `【積淹水警戒】${point.areaName} 水深 ${point.depthCm} cm（等級 ${point.level}），距離約 ${point.distanceKm.toFixed(1)} km。`
        });
      });
    }
    next.floodSensors = currentWarningSensors;
  } else {
    next.floodSensors = prev.floodSensors;
  }

  const currentOutages = {};
  getNearbyPowerOutages().forEach((point) => {
    const key = buildPowerOutageTrackingKey(point);
    currentOutages[key] = {
      area: point.area,
      type: point.type,
      label: point.label,
      distanceKm: point.distanceKm
    };
  });

  if (appState.powerOutageDataOk === false) {
    next.powerOutages = prev.powerOutages || {};
  } else {
    const wantsPowerRecovery =
      isSubscribed && (topics.has("power-outage") || isForecastNotifyArmedByLocate());
    if (wantsPowerRecovery) {
      Object.entries(prev.powerOutages).forEach(([key, point]) => {
        if (currentOutages[key]) {
          return;
        }
        const typeLabel = point.type === "disaster" ? "災害性停電" : "計畫性停電";
        const place = point.label || point.area || "未提供區域";
        messages.push({
          kind: "power-recovery",
          text: `【停電解除】${place}（${typeLabel}）已恢復供電，${locationLabel} 半徑 ${POWER_OUTAGE_NOTIFY_RADIUS_KM} 公里內距離約 ${Number(point.distanceKm).toFixed(1)} km。`
        });
      });
    }
    if (isSubscribed && topics.has("power-outage")) {
      Object.entries(currentOutages).forEach(([key, point]) => {
        if (prev.powerOutages[key]) {
          return;
        }
        const typeLabel = point.type === "disaster" ? "災害性停電" : "計畫性停電";
        const place = point.label || point.area || "未提供區域";
        messages.push({
          kind: "power-alert",
          text: `【停電警戒】${place}（${typeLabel}）距離約 ${Number(point.distanceKm).toFixed(1)} km，請留意供電狀況。`
        });
      });
    }
    next.powerOutages = currentOutages;
  }

  const currentWater = {};
  (appState.waterOutageItems || []).forEach((item) => {
    currentWater[item.id] = item;
  });
  const { townshipName } = getActiveWaterOutageScope();
  if (!townshipName || appState.waterOutageDataOk === false) {
    next.waterOutages = prev.waterOutages || {};
  } else {
    const wantsWaterRecovery =
      isSubscribed && (topics.has("water-outage") || isForecastNotifyArmedByLocate());
    const prevLocalWater = Object.fromEntries(
      Object.entries(prev.waterOutages || {}).filter(([, item]) => {
        if (item?.township && item.township === townshipName) {
          return true;
        }
        return areaMentionsTownship(`${item?.area || ""} ${item?.summary || ""}`, townshipName);
      })
    );
    if (wantsWaterRecovery) {
      Object.entries(prevLocalWater).forEach(([id, item]) => {
        if (currentWater[id]) {
          return;
        }
        messages.push({
          kind: "water-recovery",
          text: `【停水解除】${item.area || item.summary || "本鄉鎮停水案件"} 已恢復供水／降壓解除，請確認用水恢復正常。`
        });
      });
    }
    if (isSubscribed && topics.has("water-outage")) {
      Object.entries(currentWater).forEach(([id, item]) => {
        if (prevLocalWater[id] || prev.waterOutages?.[id]) {
          return;
        }
        messages.push({
          kind: "water-alert",
          text: `【停水警戒】${item.township ? `${item.city || ""}${item.township}` : item.area || "本鄉鎮"}：${item.summary || "有停水／降壓公告"}（${item.period || "期間詳見台水公告"}）。`
        });
      });
    }
    next.waterOutages = currentWater;
  }

  const currentEarthquakes = {};
  (appState.earthquakes || []).forEach((quake) => {
    if (!isNationalEarthquakeAlert(quake)) {
      return;
    }
    if (Date.now() - quake.timeMs > EARTHQUAKE_RECENT_HOURS * 60 * 60 * 1000) {
      return;
    }
    currentEarthquakes[quake.id] = {
      place: quake.place,
      magnitude: quake.magnitude,
      intensityValue: quake.intensityValue,
      timeMs: quake.timeMs,
      distanceKm: quake.distanceKm,
      reportContent: quake.reportContent || buildCwaEarthquakeReportContent(quake)
    };
  });
  if (isSubscribed && topics.has("earthquake")) {
    Object.entries(currentEarthquakes).forEach(([id, quake]) => {
      if (prev.earthquakes?.[id]) {
        return;
      }
      messages.push({
        kind: "earthquake-alert",
        text: quake.reportContent || buildCwaEarthquakeReportContent(quake)
      });
    });
  }
  next.earthquakes = {
    ...(prev.earthquakes || {}),
    ...currentEarthquakes
  };
  const pruneBefore = Date.now() - 7 * 24 * 60 * 60 * 1000;
  Object.entries(next.earthquakes).forEach(([id, quake]) => {
    if (!Number.isFinite(quake?.timeMs) || quake.timeMs < pruneBefore) {
      delete next.earthquakes[id];
    }
  });

  if (appState.typhoonOfficial == null) {
    next.hasLandTyphoonWarning = Boolean(prev.hasLandTyphoonWarning);
  } else {
    const hasLandWarning = Boolean(appState.typhoonOfficial.hasLandWarning);
    if (isSubscribed && prev.hasLandTyphoonWarning && !hasLandWarning) {
      const typhoonName = appState.typhoonOfficial?.name;
      messages.push({
        kind: "typhoon-recovery",
        text: `【解除颱風警報】中央氣象署已解除陸上颱風警報${typhoonName ? `（${typhoonName}）` : ""}，${locationLabel} 請持續留意後續天氣與防災資訊。`
      });
    }
    next.hasLandTyphoonWarning = hasLandWarning;
  }

  next.cityClosures = { ...(prev.cityClosures || {}) };
  if (appState.closureDataOk === false) {
    next.cityClosures = prev.cityClosures || {};
  } else if (isSubscribed && topics.has("closure")) {
    const cityName = getSubscriptionCityName();
    if (cityName) {
      const row = (appState.closureRows || []).find((item) => item.city === cityName);
      const active = Boolean(row && isClosureStopMessage(row.message));
      const prevCity = prev.cityClosures?.[cityName];
      if (prevCity?.active && !active) {
        const place = `${cityName}${getSubscriptionTownshipName() || ""}`;
        messages.push({
          kind: "closure-recovery",
          text: `【停班停課解除】${place} 已解除停班停課警戒${
            row?.message ? `，目前${row.message}` : "，目前恢復照常上班上課"
          }。`
        });
      }
      next.cityClosures[cityName] = {
        active,
        message: row?.message || ""
      };
    }
  }

  saveRecoveryState(next);
  const normalized = messages
    .map((item) => (typeof item === "string" ? { kind: "generic", text: item } : item))
    .filter((item) => item?.text);
  if (!isSubscribed) {
    return [];
  }
  if (!isForecastNotifyArmedByLocate()) {
    return normalized.filter((item) => isRecoveryNotificationKind(item.kind));
  }
  return normalized;
}

function parseAiAlertPresentation(text) {
  const raw = String(text || "").trim();
  const tagMatch = raw.match(/^【([^】]+)】\s*(.*)$/);
  const tag = tagMatch ? tagMatch[1] : "";
  const body = tagMatch ? tagMatch[2] : raw;
  const levelMatch = raw.match(/等級\s*([1-4])/);
  const floodLevel = levelMatch ? Number(levelMatch[1]) : 0;

  let tone = "neutral";
  if (tag.includes("高風險")) {
    tone = "typhoon-high";
  } else if (
    tag.includes("積淹水警戒") ||
    tag.includes("國家緊急訊息") ||
    tag === "地震通報"
  ) {
    tone = "high";
  } else if (tag.includes("積淹水警示") || tag.includes("積淹水監測")) {
    tone = floodLevel >= 1 ? `flood-${floodLevel}` : "flood-1";
  } else if (tag.includes("公有事業警戒")) {
    tone = "watch";
  } else if (tag.includes("公有事業")) {
    tone = "general";
  } else if (tag.includes("注意") || tag.includes("地震")) {
    tone = "watch";
  } else if (tag.includes("空品")) {
    tone = "air";
  } else if (tag.includes("停班停課解除") || /已解除停班停課/.test(raw)) {
    tone = "general";
  } else if (
    tag.includes("停班停課") &&
    isClosureStopMessage(raw) &&
    !/目前無停班停課|恢復正常上班/.test(raw)
  ) {
    tone = "closure-stop";
  } else if (tag.includes("停班停課")) {
    tone = "neutral";
  } else if (tag.includes("一般") || tag.includes("解除") || tag.includes("消退") || tag.includes("回復")) {
    tone = "general";
  } else if (floodLevel >= 1) {
    tone = `flood-${floodLevel}`;
  }

  if (tag.includes("地震") && /最大震度\s*(?:[4-7]|5弱|5強|6弱|6強)/.test(raw)) {
    tone = "high";
  }

  return {
    tag: tag ? `【${tag}】` : "",
    body,
    tone,
    text: raw
  };
}

function getEarthquakeMapPinStyle(isLatest = false) {
  if (isLatest) {
    return {
      color: "#7f1d1d",
      fillColor: "#dc2626",
      radius: 8,
      weight: 2,
      fillOpacity: 0.95,
      className: "eq-map-pulse eq-map-pulse-latest",
      label: "最新地震震央"
    };
  }
  return {
    color: "#ffe600",
    fillColor: "#ffe600",
    radius: 7,
    weight: 2,
    fillOpacity: 0.95,
    className: "eq-map-pulse",
    label: "地震震央"
  };
}

function getEarthquakePulseIcon(isLatest = false) {
  return L.divIcon({
    className: isLatest ? "eq-map-pulse eq-map-pulse-latest" : "eq-map-pulse",
    html: `<span class="eq-map-pulse-dot${isLatest ? " is-latest" : ""}" aria-hidden="true"></span>`,
    iconSize: [28, 28],
    iconAnchor: [14, 14]
  });
}

function getEarthquakeMarkerStyle(quake) {
  const colorKey = quake.alertColor || getCwaEarthquakeAlertColor(quake.magnitude, quake.intensityValue);
  if (colorKey === "red") {
    return { color: "#7f1d1d", fillColor: "#dc2626", radius: 11, label: "國家級警戒（紅）" };
  }
  if (colorKey === "orange") {
    return { color: "#9a3412", fillColor: "#f97316", radius: 10, label: "國家級警戒（橙）" };
  }
  if (colorKey === "yellow") {
    return { color: "#a16207", fillColor: "#eab308", radius: 8, label: "國家級警戒（黃）" };
  }
  if ((quake.intensityValue || 0) >= 4) {
    return { color: "#7f1d1d", fillColor: "#b91c1c", radius: 9, label: "最大震度 4 級以上" };
  }
  if ((quake.intensityValue || 0) >= 3) {
    return { color: "#1d4ed8", fillColor: "#60a5fa", radius: 6, label: "有感地震" };
  }
  return { color: "#334155", fillColor: "#94a3b8", radius: 5, label: "一般有感" };
}

function parseIntensityValue(raw) {
  const text = String(raw || "").replace(/\s+/g, "");
  if (!text) {
    return 0;
  }
  if (text.includes("7")) {
    return 7;
  }
  if (text.includes("6強")) {
    return 6.5;
  }
  if (text.includes("6弱") || text === "6") {
    return 6;
  }
  if (text.includes("5強")) {
    return 5.5;
  }
  if (text.includes("5弱") || text === "5") {
    return 5;
  }
  const numeric = Number(text.replace(/級/g, ""));
  return Number.isFinite(numeric) ? numeric : 0;
}

function formatIntensityLabel(value) {
  if (value >= 7) {
    return "7級";
  }
  if (value >= 6.5) {
    return "6強";
  }
  if (value >= 6) {
    return "6弱";
  }
  if (value >= 5.5) {
    return "5強";
  }
  if (value >= 5) {
    return "5弱";
  }
  if (value > 0) {
    return `${Math.round(value)}級`;
  }
  return "--";
}

function formatEarthquakeSerialLabel(quake) {
  const serial = String(quake?.serial || "").trim();
  if (/^\d+$/.test(serial)) {
    return `第${serial}號`;
  }
  if (serial === "小區域") {
    return "小區域";
  }
  const eventId = String(quake?.eventId || "")
    .replace(/^(cwa-|usgs-)/i, "")
    .trim();
  const rawId = String(quake?.id || "")
    .replace(/^(cwa-|usgs-)/i, "")
    .trim();
  const number = eventId || rawId;
  if (number) {
    return `第${number}號`;
  }
  return serial ? `第${serial}號` : "小區域";
}

function isIntensityThreePlus(quake) {
  return (Number(quake?.intensityValue) || 0) >= 3;
}

function getCwaEarthquakeAlertColor(magnitude, intensityValue) {
  const mag = Number(magnitude) || 0;
  const intensity = Number(intensityValue) || 0;
  // Align with CWA public warning color criteria on scweb.
  if (mag >= 6.5 && intensity >= 6) {
    return "red";
  }
  if (mag >= 6 && intensity >= 5) {
    return "orange";
  }
  if (mag >= 5.5 && intensity >= 4) {
    return "yellow";
  }
  return "gray";
}

function isNationalEarthquakeAlert(quake) {
  if (!quake) {
    return false;
  }
  const color = quake.alertColor || getCwaEarthquakeAlertColor(quake.magnitude, quake.intensityValue);
  return color !== "gray" || (quake.intensityValue || 0) >= EARTHQUAKE_NATIONAL_INTENSITY;
}

function buildCwaEarthquakeReportContent(quake) {
  const serial = formatEarthquakeSerialLabel(quake);
  const serialText = serial === "小區域" ? "小區域有感" : serial;
  const when = formatDateTime(quake.timeMs);
  const intensity = formatIntensityLabel(quake.intensityValue);
  const placeText = extractEarthquakeRegionName(quake.place) || String(quake.place || "").replace(/[（(][^)）]*[)）]/g, "").trim() || "位置未提供";
  return `【地震通報】${serialText}地震報告：${when} 左右，${placeText}發生規模 ${quake.magnitude.toFixed(
    1
  )} 地震，最大震度 ${intensity}。請就近掩護、遠離危險物，並留意官方後續指示與餘震。`;
}

function loadEarthquakeCoordCache() {
  try {
    const raw = JSON.parse(localStorage.getItem(EARTHQUAKE_COORD_CACHE_KEY) || "{}");
    return raw && typeof raw === "object" ? raw : {};
  } catch {
    return {};
  }
}

function saveEarthquakeCoordCache(cache) {
  try {
    localStorage.setItem(EARTHQUAKE_COORD_CACHE_KEY, JSON.stringify(cache));
  } catch {
    /* ignore */
  }
}

function estimateEpicenterFromPlace(place) {
  const text = String(place || "");
  const located = text.match(/位於([^)）]+)/);
  const target = (located?.[1] || text).replace(/\s+/g, "");
  const township = TOWNSHIP_LOCATIONS.find(
    (item) => target.includes(`${item.city}${item.town}`) || target.includes(item.town)
  );
  if (township) {
    return { lat: township.lat, lon: township.lon, approx: true };
  }
  const city = CITY_LOCATIONS.find((item) => target.includes(item.name) || text.includes(item.name));
  if (city) {
    return { lat: city.lat, lon: city.lon, approx: true };
  }
  return null;
}

function enrichEarthquakeDistances(quakes) {
  const location = getCctvLocationFocus() || getSubscriptionWeatherLocation() || getSelectedTownship();
  if (!location) {
    return quakes;
  }
  return quakes.map((quake) => {
    if (!Number.isFinite(quake.lat) || !Number.isFinite(quake.lon)) {
      return { ...quake, distanceKm: null };
    }
    return {
      ...quake,
      distanceKm: getDistanceKm(location.lat, location.lon, quake.lat, quake.lon)
    };
  });
}

function parseCwaEarthquakeListMarkdown(markdown) {
  const quakes = [];
  const lines = String(markdown || "").split(/\r?\n/);
  lines.forEach((line) => {
    if (!line.includes("/earthquake/details/") || !line.includes("規模：")) {
      return;
    }
    const eventMatch = line.match(/\/earthquake\/details\/(\d+)/);
    const intensityMatch = line.match(/\|\s*(?:[0-9]{2,3}|!\[[^\]]*\]\([^)]*\))\s*\|\s*([0-9]+(?:\s*[弱強])?)\s*級\s*\|/);
    const metaMatch = line.match(
      /([0-9]{4}-[0-9]{2}-[0-9]{2}\s+[0-9]{2}:[0-9]{2}:[0-9]{2})\s*規模：([0-9.]+)\s*深度：([0-9.]+)\s*\[([^\]]+)\]/
    );
    const serialMatch = line.match(/^\|\s*([0-9]{2,3})\s*\|/);
    if (!eventMatch || !metaMatch) {
      return;
    }
    const eventId = eventMatch[1];
    const originTime = metaMatch[1];
    const magnitude = Number(metaMatch[2]);
    const depthKm = Number(metaMatch[3]);
    const place = String(metaMatch[4] || "").trim();
    const timeMs = Date.parse(`${originTime.replace(" ", "T")}+08:00`);
    if (!Number.isFinite(magnitude) || !Number.isFinite(timeMs)) {
      return;
    }
    const intensityRaw = String(intensityMatch?.[1] || "").replace(/\s+/g, "");
    const intensityValue = parseIntensityValue(intensityRaw);
    const serial = serialMatch?.[1] || "小區域";
    const alertColor = getCwaEarthquakeAlertColor(magnitude, intensityValue);
    const estimated = estimateEpicenterFromPlace(place);
    quakes.push({
      id: `cwa-${eventId}`,
      eventId,
      serial,
      source: "cwa",
      place,
      magnitude,
      depthKm: Number.isFinite(depthKm) ? depthKm : null,
      intensityRaw: intensityRaw ? `${intensityRaw}級` : "--",
      intensityValue,
      alertColor,
      timeMs,
      lat: estimated?.lat ?? null,
      lon: estimated?.lon ?? null,
      approxCoords: Boolean(estimated?.approx),
      url: `https://scweb.cwa.gov.tw/zh-tw/earthquake/details/${eventId}`,
      mapUrl: `https://scweb.cwa.gov.tw/zh-tw/earthquake/imgs/${eventId}`,
      pwsUrl: `https://scweb.cwa.gov.tw/zh-tw/earthquake/pws/${eventId}`,
      cwaUrl: EARTHQUAKE_CWA_PAGE,
      reportContent: ""
    });
  });
  const unique = new Map();
  quakes.forEach((quake) => {
    if (!unique.has(quake.id)) {
      unique.set(quake.id, quake);
    }
  });
  return [...unique.values()].sort((a, b) => b.timeMs - a.timeMs);
}

async function enrichCwaEarthquakeDetails(quakes) {
  const cache = loadEarthquakeCoordCache();
  const targets = quakes.slice(0, EARTHQUAKE_DETAIL_ENRICH_LIMIT);
  await Promise.all(
    targets.map(async (quake) => {
      if (cache[quake.eventId]?.lat && cache[quake.eventId]?.lon) {
        quake.lat = Number(cache[quake.eventId].lat);
        quake.lon = Number(cache[quake.eventId].lon);
        quake.approxCoords = false;
        if (cache[quake.eventId].intensityAreas) {
          quake.intensityAreas = cache[quake.eventId].intensityAreas;
        }
        quake.reportContent = buildCwaEarthquakeReportContent(quake);
        return;
      }
      const controller = new AbortController();
      const timer = window.setTimeout(() => controller.abort(), 12000);
      try {
        const response = await fetch(
          `https://r.jina.ai/https://scweb.cwa.gov.tw/zh-tw/earthquake/details/${quake.eventId}`,
          { cache: "no-store", signal: controller.signal }
        );
        if (!response.ok) {
          return;
        }
        const markdown = await response.text();
        const coordMatch = markdown.match(/北緯\s*([0-9.]+)\s*[°度].{0,24}東經\s*([0-9.]+)/);
        if (coordMatch) {
          quake.lat = Number(coordMatch[1]);
          quake.lon = Number(coordMatch[2]);
          quake.approxCoords = false;
        }
        const areaMatches = [...markdown.matchAll(/\[([^\]]+?)地區最大震度\s*([0-9]+(?:\s*[弱強])?)\s*級\]/g)];
        if (areaMatches.length) {
          quake.intensityAreas = areaMatches.slice(0, 8).map((item) => ({
            area: item[1],
            intensity: `${String(item[2]).replace(/\s+/g, "")}級`
          }));
        }
        quake.reportContent = buildCwaEarthquakeReportContent(quake);
        if (Number.isFinite(quake.lat) && Number.isFinite(quake.lon)) {
          cache[quake.eventId] = {
            lat: quake.lat,
            lon: quake.lon,
            intensityAreas: quake.intensityAreas || []
          };
        }
      } catch {
        /* keep estimated coords */
      } finally {
        window.clearTimeout(timer);
      }
      if (!quake.reportContent) {
        quake.reportContent = buildCwaEarthquakeReportContent(quake);
      }
    })
  );
  saveEarthquakeCoordCache(cache);
  return quakes;
}

function extractEarthquakeRegionName(place) {
  const text = String(place || "").trim();
  const withoutLocated = text.replace(/^位於\s*/, "");
  return withoutLocated.replace(/[（(][^)）]*[)）]/g, "").replace(/\s+/g, " ").trim();
}

function getEarthquakeLocatedLabel(place, quake = null) {
  const source = quake?.place || place;
  const regionName = extractEarthquakeRegionName(source);
  if (regionName) {
    return `位於${regionName}`;
  }
  return "位置未提供";
}

function renderEarthquakeSourceMeta(updatedAt = Date.now()) {
  if (!earthquakeMeta) {
    return;
  }
  earthquakeMeta.innerHTML = `來源：<a href="${EARTHQUAKE_CWA_PAGE}" target="_blank" rel="noopener noreferrer">中央氣象署</a>｜更新 ${formatDateTime(
    updatedAt
  )}`;
}

function getEarthquakeTaiwanMapUrl(quake) {
  if (quake?.mapUrl) {
    return quake.mapUrl;
  }
  const eventId = String(quake?.eventId || "")
    .replace(/^(cwa-|usgs-)/i, "")
    .trim();
  if (/^\d{10,}$/.test(eventId)) {
    return `${EARTHQUAKE_SCWEB_MAP_BASE}/${eventId}`;
  }
  return quake?.url || EARTHQUAKE_SCWEB_PAGE;
}

function createEarthquakeListItem(quake, options = {}) {
  const pinned = Boolean(options.pinned);
  const item = document.createElement("li");
  const colorKey = quake.alertColor || "gray";
  const intensityHigh = isIntensityThreePlus(quake);
  const level = getEarthquakeDisasterLevel(quake);
  item.className = `earthquake-item alert-${colorKey}${
    isNationalEarthquakeAlert(quake) ? " is-national" : ""
  }${intensityHigh ? " intensity-3-plus" : " intensity-below-3"}${
    pinned ? ` earthquake-item-pinned eq-level-${level}` : ""
  }`;
  const serialText = formatEarthquakeSerialLabel(quake);
  const intensityText = formatIntensityLabel(quake.intensityValue);
  const mapUrl = getEarthquakeTaiwanMapUrl(quake);
  const placeLine = getEarthquakeLocatedLabel(quake.place, quake);
  const timeLine = formatDateTime(quake.timeMs);
  const depthText = `深度 ${Number.isFinite(quake.depthKm) ? `${quake.depthKm.toFixed(1)} 公里` : "--"}`;
  const rangeLine = Number.isFinite(quake.distanceKm)
    ? `約 ${quake.distanceKm.toFixed(0)} 公里 ｜${depthText}`
    : depthText;
  const nationalLine = isNationalEarthquakeAlert(quake) ? "國家警報同步" : "";
  const titleLine = pinned
    ? `<strong class="earthquake-pinned-kicker">最新：規模 ${quake.magnitude.toFixed(1)}｜最大震度 ${intensityText}</strong>
        <strong>${serialText}</strong>`
    : `<strong>${serialText}｜震度 ${intensityText}</strong>`;
  item.innerHTML = `
    <a class="earthquake-item-main" href="${mapUrl}" target="_blank" rel="noopener noreferrer" aria-label="開啟台灣地圖地震圖：${serialText}">
      <span class="earthquake-mag">${formatEarthquakeMagnitudeLabel(quake.magnitude)}</span>
      <span class="earthquake-body">
        ${titleLine}
        <span class="earthquake-place-label">${placeLine}</span>
        <small class="earthquake-meta-line">${timeLine}</small>
        <small class="earthquake-meta-line earthquake-range-line">${rangeLine}</small>
        ${nationalLine ? `<small class="earthquake-meta-line">${nationalLine}</small>` : ""}
      </span>
    </a>
    <span class="earthquake-links">
      <a href="${quake.pwsUrl || quake.url}" target="_blank" rel="noopener noreferrer">公眾警示</a>
      <a href="${mapUrl}" target="_blank" rel="noopener noreferrer">地震圖</a>
    </span>
  `;
  return item;
}

function renderEarthquakePanel() {
  if (!earthquakeList) {
    return;
  }
  const allQuakes = enrichEarthquakeDistances(appState.earthquakes || []);
  appState.earthquakes = allQuakes;
  const quakes = getRecentEarthquakesForList();
  earthquakeList.innerHTML = "";

  if (!quakes.length) {
    if (earthquakeSummary) {
      earthquakeSummary.hidden = false;
      earthquakeSummary.textContent = "目前中央氣象署無2日內台灣地區有感地震";
      syncEarthquakeSummaryLevel(null);
    }
    renderEarthquakeSourceMeta(Date.now());
    earthquakeList.innerHTML = "<li>目前無2日內符合條件的地震事件。</li>";
    return;
  }

  const latest = quakes[0];
  if (earthquakeSummary) {
    const placeLabel = getEarthquakeLocatedLabel(latest.place, latest);
    earthquakeSummary.innerHTML = `最新：規模 ${latest.magnitude.toFixed(1)}｜最大震度 ${formatIntensityLabel(
      latest.intensityValue
    )}<span class="earthquake-place-label">${placeLabel}</span>`;
    syncEarthquakeSummaryLevel(latest);
    earthquakeSummary.hidden = true;
  }
  renderEarthquakeSourceMeta(Date.now());

  const preview = quakes.slice(0, EARTHQUAKE_PREVIEW_LIMIT);
  const rest = quakes.slice(EARTHQUAKE_PREVIEW_LIMIT);
  preview.forEach((quake, index) => {
    earthquakeList.append(createEarthquakeListItem(quake, { pinned: index === 0 }));
  });

  if (!rest.length) {
    return;
  }

  const wrap = document.createElement("li");
  wrap.className = "earthquake-more-wrap";
  const details = document.createElement("details");
  details.className = "earthquake-more-details";
  const topSummary = document.createElement("summary");
  topSummary.className = "earthquake-more-summary";
  topSummary.textContent = `▸ 展開其餘 ${rest.length} 筆通報`;
  const restList = document.createElement("ul");
  restList.className = "earthquake-list earthquake-more-list";
  rest.forEach((quake) => {
    restList.append(createEarthquakeListItem(quake));
  });
  const footer = document.createElement("button");
  footer.type = "button";
  footer.className = "earthquake-more-footer";
  footer.textContent = `▾ 收合其餘 ${rest.length} 筆通報`;
  footer.hidden = true;
  footer.addEventListener("click", (event) => {
    event.preventDefault();
    details.open = false;
    window.requestAnimationFrame(() => {
      const earthquakeTitle = document.querySelector(".visual-break-earthquake");
      earthquakeTitle?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
  const syncCollapseLabels = () => {
    topSummary.textContent = details.open
      ? `▾ 收合其餘 ${rest.length} 筆通報`
      : `▸ 展開其餘 ${rest.length} 筆通報`;
    footer.hidden = !details.open;
  };
  details.addEventListener("toggle", syncCollapseLabels);
  details.append(topSummary, restList, footer);
  wrap.append(details);
  earthquakeList.append(wrap);
}

function buildEarthquakePopupHtml(quake) {
  const style = getEarthquakeMarkerStyle(quake);
  const compact = isCompactEarthquakeMapView();
  const distanceText = Number.isFinite(quake.distanceKm)
    ? `<div>距所選位置約 ${quake.distanceKm.toFixed(0)} km</div>`
    : "";
  const areas = compact
    ? ""
    : (quake.intensityAreas || [])
        .slice(0, 8)
        .map((area) => `<li>${area.area}：${area.intensity}</li>`)
        .join("");
  const report = quake.reportContent || buildCwaEarthquakeReportContent(quake);
  const locatedLabel = getEarthquakeLocatedLabel(quake.place, quake);
  const linksHtml = compact
    ? ""
    : `<div class="eq-popup-links">
        <a href="${getEarthquakeTaiwanMapUrl(quake)}" target="_blank" rel="noopener noreferrer">台灣地震圖</a>
        <a href="${quake.pwsUrl || quake.url}" target="_blank" rel="noopener noreferrer">開啟國家緊急訊息（公眾警示）</a>
        <a href="${EARTHQUAKE_CWA_PAGE}" target="_blank" rel="noopener noreferrer">中央氣象署</a>
      </div>`;
  return `
    <div class="eq-popup">
      <strong>${style.label}｜規模 ${quake.magnitude.toFixed(1)}</strong>
      <div>最大震度：${formatIntensityLabel(quake.intensityValue)}</div>
      <div class="eq-located-label">${locatedLabel}</div>
      <div>${formatDateTime(quake.timeMs)}</div>
      <div>深度 ${Number.isFinite(quake.depthKm) ? `${quake.depthKm.toFixed(1)} 公里` : "--"}${
        quake.approxCoords ? "（暫估位置）" : ""
      }</div>
      ${distanceText}
      <div class="eq-popup-report">${report}</div>
      ${areas ? `<ul class="eq-popup-areas">${areas}</ul>` : ""}
      ${linksHtml}
    </div>
  `;
}

function isCompactEarthquakeMapView() {
  return window.matchMedia("(max-width: 860px)").matches;
}

function closeEarthquakeDetailSheet() {
  if (!earthquakeDetailSheet) {
    return;
  }
  const wasOpen = !earthquakeDetailSheet.hidden;
  earthquakeDetailSheet.hidden = true;
  document.body.classList.remove("eq-sheet-open");
  if (wasOpen) {
    unlockPageScrollForOverlay();
  }
}

function openEarthquakeDetailSheet(quake) {
  if (!earthquakeDetailSheet || !earthquakeDetailSheetBody) {
    return;
  }
  const wasOpen = !earthquakeDetailSheet.hidden;
  earthquakeDetailSheetBody.innerHTML = buildEarthquakePopupHtml(quake);
  earthquakeDetailSheet.hidden = false;
  document.body.classList.add("eq-sheet-open");
  if (!wasOpen) {
    lockPageScrollForOverlay();
  }
  window.requestAnimationFrame(() => {
    earthquakeDetailSheetBody.scrollTop = 0;
    const panel = earthquakeDetailSheet.querySelector(".eq-detail-sheet-panel");
    if (panel) {
      panel.scrollTop = 0;
    }
  });
}

function updateEarthquakeMapLayer() {
  if (!warningMap) {
    return;
  }
  if (!mapEarthquakeLayer) {
    mapEarthquakeLayer = L.layerGroup();
  }
  mapEarthquakeLayer.clearLayers();
  mapLegendMarkers.earthquake = [];

  const todayQuakes = getTodayEarthquakesForMap();
  const latestQuake = todayQuakes.find((quake) => Number.isFinite(quake.lat) && Number.isFinite(quake.lon));
  todayQuakes.forEach((quake) => {
    if (!Number.isFinite(quake.lat) || !Number.isFinite(quake.lon)) {
      return;
    }
    const isLatest = Boolean(latestQuake && quake.id === latestQuake.id);
    const style = getEarthquakeMapPinStyle(isLatest);
    const marker = L.marker([quake.lat, quake.lon], {
      pane: "earthquakePane",
      keyboard: false,
      icon: getEarthquakePulseIcon(isLatest),
      title: style.label,
      zIndexOffset: isLatest ? 820 : 500
    });
    const popupHtml = buildEarthquakePopupHtml(quake);
    marker.bindPopup(popupHtml, getMapPopupOptions({ className: "eq-popup-wrap disaster-map-popup" }));
    marker.on("click", () => {
      if (!quake.reportContent) {
        quake.reportContent = buildCwaEarthquakeReportContent(quake);
      }
      const html = buildEarthquakePopupHtml(quake);
      marker.setPopupContent(html);
      if (isCompactEarthquakeMapView()) {
        marker.closePopup();
        openEarthquakeDetailSheet(quake);
      }
    });
    marker._earthquake = quake;
    marker._legendKey = "earthquake";
    marker._popupHtml = popupHtml;
    marker._legendPlace = extractEarthquakeRegionName(quake.place) || String(quake.place || "").trim();
    mapLegendMarkers.earthquake.push(marker);
  });
  addVisibleLegendMarkers(mapEarthquakeLayer, ["earthquake"]);

  syncMapLayerVisibility("earthquake-points");
  syncMapLegendState();
}

async function fetchEarthquakeDataFromUsgsFallback() {
  const response = await fetch(EARTHQUAKE_USGS_FALLBACK_API, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`USGS fallback HTTP ${response.status}`);
  }
  const payload = await response.json();
  return (payload.features || [])
    .map((feature) => {
      const props = feature.properties || {};
      const coords = feature.geometry?.coordinates || [];
      const lon = Number(coords[0]);
      const lat = Number(coords[1]);
      const depthKm = Number(coords[2]);
      const magnitude = Number(props.mag);
      const timeMs = Number(props.time);
      if (!Number.isFinite(lat) || !Number.isFinite(lon) || !Number.isFinite(magnitude) || !Number.isFinite(timeMs)) {
        return null;
      }
      return {
        id: String(feature.id || props.code || `${timeMs}-${magnitude}`),
        eventId: String(props.code || feature.id || ""),
        serial: String(props.code || feature.id || "").replace(/^us/i, "") || String(feature.id || ""),
        source: "usgs",
        place: String(props.place || "台灣鄰近地震")
          .replace(/,\s*Taiwan$/i, "")
          .replace(/\bTaiwan\b/gi, "台灣"),
        magnitude,
        depthKm: Number.isFinite(depthKm) ? depthKm : null,
        intensityRaw: "--",
        intensityValue: magnitude >= 5.5 ? 4 : magnitude >= 4.5 ? 3 : 2,
        alertColor: getCwaEarthquakeAlertColor(magnitude, magnitude >= 5.5 ? 4 : 2),
        timeMs,
        lat,
        lon,
        approxCoords: false,
        url: props.url || EARTHQUAKE_CWA_PAGE,
        pwsUrl: EARTHQUAKE_CWA_PAGE,
        cwaUrl: EARTHQUAKE_CWA_PAGE,
        reportContent: ""
      };
    })
    .filter(Boolean)
    .map((quake) => ({
      ...quake,
      reportContent: buildCwaEarthquakeReportContent(quake)
    }));
}

async function fetchEarthquakeData() {
  try {
    const response = await fetch(EARTHQUAKE_CWA_LIST_MIRROR, { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`CWA mirror HTTP ${response.status}`);
    }
    const markdown = await response.text();
    let quakes = parseCwaEarthquakeListMarkdown(markdown);
    if (!quakes.length) {
      throw new Error("CWA 地震列表解析為空");
    }
    quakes = quakes.map((quake) => ({
      ...quake,
      reportContent: buildCwaEarthquakeReportContent(quake)
    }));
    appState.earthquakes = enrichEarthquakeDistances(quakes);
    renderEarthquakePanel();
    updateEarthquakeMapLayer();
    quakes = await enrichCwaEarthquakeDetails(quakes);
    appState.earthquakes = enrichEarthquakeDistances(quakes);
    appState.earthquakeMetaText = `來源：中央氣象署｜更新 ${formatDateTime(Date.now())}｜`;
    renderEarthquakePanel();
    updateEarthquakeMapLayer();
    return appState.earthquakes;
  } catch (cwaError) {
    try {
      const fallback = await fetchEarthquakeDataFromUsgsFallback();
      appState.earthquakes = enrichEarthquakeDistances(fallback);
      appState.earthquakeMetaText = `來源：中央氣象署｜更新 ${formatDateTime(Date.now())}｜`;
      renderEarthquakePanel();
      updateEarthquakeMapLayer();
      return appState.earthquakes;
    } catch (error) {
      appState.earthquakes = [];
      appState.earthquakeMetaText = `地震資料暫時無法更新：${error.message}`;
      if (earthquakeMeta) {
        earthquakeMeta.textContent = appState.earthquakeMetaText;
      }
      if (earthquakeSummary) {
        earthquakeSummary.hidden = false;
        earthquakeSummary.textContent = "地震資料讀取失敗";
      }
      if (earthquakeList) {
        earthquakeList.innerHTML = `<li class="status-warn">請稍後重試，或改看 <a href="${EARTHQUAKE_CWA_PAGE}" target="_blank" rel="noopener noreferrer">中央氣象署</a>。</li>`;
      }
      updateEarthquakeMapLayer();
      return [];
    }
  }
}

function getSubscriptionEarthquakeMessage() {
  const locationLabel = getSubscriptionLocationLabel();
  const quakes = enrichEarthquakeDistances(appState.earthquakes || []);
  const recentNational = quakes.filter(
    (quake) =>
      isNationalEarthquakeAlert(quake) &&
      Date.now() - quake.timeMs <= EARTHQUAKE_RECENT_HOURS * 60 * 60 * 1000
  );
  if (recentNational.length) {
    const top = recentNational[0];
    return stampNotifySource("中央氣象署地震", top.reportContent || buildCwaEarthquakeReportContent(top));
  }
  if (quakes.length) {
    const top = quakes[0];
    return stampNotifySource(
      "中央氣象署地震",
      `【地震監測】${locationLabel} 最新：規模 ${top.magnitude.toFixed(
        1
      )}、最大震度 ${formatIntensityLabel(top.intensityValue)}（${formatDateTime(top.timeMs)}），目前未達國家緊急訊息等級。`
    );
  }
  return stampNotifySource(
    "中央氣象署地震",
    `【地震監測】${locationLabel} 目前無近期台灣地區有感地震通報。`
  );
}

function getLocatedCityName() {
  return citySelect?.value || getActiveWeatherLocation()?.cityName || "";
}

function getLocatedCityFloodPoints() {
  const cityName = getLocatedCityName();
  const location = getActiveWeatherLocation();
  if (!cityName) {
    return [];
  }
  return (appState.floodLivePoints || [])
    .filter((point) => sameTaiwanCityName(point.county, cityName))
    .map((point) => ({
      ...point,
      areaName: formatFloodStationLabel(point),
      distanceKm:
        location && Number.isFinite(location.lat) && Number.isFinite(location.lon)
          ? getDistanceKm(location.lat, location.lon, point.lat, point.lon)
          : null
    }))
    .sort(
      (a, b) =>
        (Number(b.level) || 0) - (Number(a.level) || 0) ||
        (Number(b.depthCm) || 0) - (Number(a.depthCm) || 0) ||
        (Number(a.distanceKm) || 0) - (Number(b.distanceKm) || 0)
    );
}

function getLocatedCityFloodWarningPoints() {
  return getLocatedCityFloodPoints().filter((point) => isFloodWarningDepth(point.depthCm));
}

function formatFloodAlertLocationLine(point) {
  const dist = Number.isFinite(point.distanceKm) ? `，約 ${point.distanceKm.toFixed(1)} km` : "";
  return `${point.areaName || "積水點"} 水深 ${point.depthCm} cm（等級 ${point.level}）${dist}`;
}

function getUtilityAlertLocationLines() {
  const lines = [];
  getNearbyPowerOutages().forEach((point) => {
    const typeLabel = point.type === "disaster" ? "災害性停電" : "計畫性停電";
    const place = point.label || point.area || "未提供區域";
    const dist = Number.isFinite(point.distanceKm) ? `，約 ${point.distanceKm.toFixed(1)} km` : "";
    lines.push(`停電｜${place}（${typeLabel}${dist}）`);
  });
  (appState.waterOutageItems || []).forEach((item) => {
    const place = item.area || item.summary || "停水公告";
    const period = item.period ? `（${item.period}）` : "";
    lines.push(`停水｜${place}${period}`);
  });
  return lines;
}

function getUtilityRecoveryLocationLines() {
  return (appState.lastRecoveryMessages || [])
    .filter((item) => {
      const kind = typeof item === "object" ? String(item.kind || "") : "";
      const text = String(typeof item === "string" ? item : item?.text || "");
      return (
        kind === "power-recovery" ||
        kind === "water-recovery" ||
        /【停電解除】|【停水解除】/.test(text)
      );
    })
    .map((item) => String(typeof item === "string" ? item : item?.text || "").trim())
    .filter(Boolean);
}

function appendAiAlertItem({ tag, tone, summary, locations = [], recovered = false, top = false }) {
  if (!aiAlertList) {
    return;
  }
  const item = document.createElement("li");
  item.className = `ai-alert-item ai-alert-${tone || "neutral"}`;
  if (top) {
    item.classList.add("ai-alert-top");
  }
  if (tag) {
    const tagEl = document.createElement("span");
    tagEl.className = "ai-alert-tag";
    tagEl.textContent = tag;
    item.append(tagEl);
  }
  const bodyEl = document.createElement("span");
  bodyEl.className = "ai-alert-body";
  bodyEl.textContent = summary;
  item.append(bodyEl);
  if (locations.length) {
    const details = document.createElement("details");
    details.className = "ai-alert-more-details";
    const summaryEl = document.createElement("summary");
    summaryEl.className = "ai-alert-more-summary";
    const closedLabel = recovered
      ? `▸ 展開查看 ${locations.length} 處解除位置`
      : `▸ 展開全部 ${locations.length} 處位置`;
    const openedLabel = recovered
      ? `▾ 收合 ${locations.length} 處解除位置`
      : `▾ 收合全部 ${locations.length} 處位置`;
    summaryEl.textContent = closedLabel;
    const list = document.createElement("ul");
    list.className = "ai-alert-location-list";
    locations.forEach((line) => {
      const row = document.createElement("li");
      row.textContent = line;
      list.append(row);
    });
    details.addEventListener("toggle", () => {
      summaryEl.textContent = details.open ? openedLabel : closedLabel;
    });
    details.append(summaryEl, list);
    item.append(details);
  }
  aiAlertList.append(item);
}

function appendAiAlertText(text, { top = false } = {}) {
  const presentation = parseAiAlertPresentation(text);
  appendAiAlertItem({
    tag: presentation.tag,
    tone: presentation.tone,
    summary: presentation.body || presentation.text,
    top
  });
}

function renderFloodStatusAlert() {
  const cityName = getLocatedCityName() || "所選縣市";
  const warningFloods = getLocatedCityFloodWarningPoints();
  if (warningFloods.length) {
    const top = warningFloods[0];
    const maxLevel = Math.max(...warningFloods.map((point) => Number(point.level) || 1), 1);
    const summary = `${cityName}目前 ${warningFloods.length} 處積水，最高等級 ${maxLevel}（${formatFloodAlertLocationLine(top)}）。`;
    appendAiAlertItem({
      tag: "【積淹水警示】",
      tone: `flood-${Math.min(4, maxLevel)}`,
      summary,
      locations: warningFloods.map(formatFloodAlertLocationLine)
    });
    return `【積淹水警示】${summary}`;
  }
  if (/暫時無法更新/.test(appState.floodMetaText || "")) {
    const text = `【積淹水監測】${appState.floodMetaText}`;
    appendAiAlertText(text);
    return text;
  }
  const text = `【積淹水監測】${cityName}目前無積淹水通報。`;
  appendAiAlertText(text);
  return text;
}

function renderUtilityStatusAlert() {
  const cityName = getLocatedCityName() || "所選縣市";
  const activeLines = getUtilityAlertLocationLines();
  if (activeLines.length) {
    const powerCount = getNearbyPowerOutages().length;
    const waterCount = (appState.waterOutageItems || []).length;
    const parts = [];
    if (powerCount) {
      parts.push(`${powerCount} 處停電`);
    }
    if (waterCount) {
      parts.push(`${waterCount} 筆停水`);
    }
    const summary = `${cityName}目前${parts.join("、")}，可展開查看全部位置。`;
    appendAiAlertItem({
      tag: "【公有事業警戒】",
      tone: "watch",
      summary,
      locations: activeLines
    });
    return `【公有事業警戒】${summary}`;
  }
  const recoveryLines = getUtilityRecoveryLocationLines();
  const summary = `${cityName}目前恢復正常。`;
  appendAiAlertItem({
    tag: "【公有事業】",
    tone: "general",
    summary,
    locations: recoveryLines,
    recovered: true
  });
  return `【公有事業】${summary}`;
}

function renderAiAlerts() {
  const alerts = [];
  const typhoon = appState.typhoon;
  const air = appState.airQuality;
  const cityClosure = appState.closureRows.find((row) => row.city === citySelect.value);
  const recentQuakes = (appState.earthquakes || []).filter(
    (quake) => Date.now() - quake.timeMs <= EARTHQUAKE_RECENT_HOURS * 60 * 60 * 1000
  );
  const nationalQuake = recentQuakes.find((quake) => isNationalEarthquakeAlert(quake));

  const cityName = citySelect?.value || cityClosure?.city || "所選縣市";
  if (cityClosure && isClosureStopMessage(cityClosure.message)) {
    const dateText = formatClosureDatesText(getClosureRowDates(cityClosure));
    alerts.push(
      `【停班停課】${cityClosure.city}${dateText ? `（${dateText}）` : ""} 最新公告：${cityClosure.message}`
    );
  } else {
    alerts.push(`【停班停課】${cityName}：目前無停班停課狀態`);
  }

  if (nationalQuake) {
    alerts.push(nationalQuake.reportContent || buildCwaEarthquakeReportContent(nationalQuake));
  } else if (recentQuakes.length) {
    const top = recentQuakes[0];
    alerts.push(
      `【地震監測】最近有感 ${recentQuakes.length} 筆，最新規模 ${top.magnitude.toFixed(
        1
      )}、最大震度 ${formatIntensityLabel(top.intensityValue)}（${top.place}）。`
    );
  }

  if (typhoon) {
    if (hasLifeThreateningTyphoonInfo()) {
      const official = appState.typhoonOfficial;
      const name = official?.name ? `（${official.name}）` : "";
      if (official?.hasLandWarning) {
        alerts.push(
          `【高風險】中央氣象署已發布陸上颱風警報${name}，請依地方政府指示避難，避免非必要外出。`
        );
      } else {
        alerts.push(
          `【高風險】中央氣象署已發布颱風警報${name}，請持續留意路徑與風雨，預先備妥防災物資。`
        );
      }
    } else if (typhoon.level === "中" || typhoon.level === "高") {
      alerts.push(`【注意】颱風風險指數 ${typhoon.score}，請關注地方政府後續警戒資訊。`);
    } else {
      alerts.push("【一般】目前風險偏低，仍建議維持基本防災準備。");
    }
  }

  if (air && air.aqi > 100) {
    alerts.push(`【空品提醒】目前 AQI ${Math.round(air.aqi)}，敏感族群請減少戶外活動。`);
  }

  (appState.cwaWarnings || []).slice(0, 1).forEach((row) => {
    if (row?.title) {
      alerts.push(`【氣象署警特報】${row.title}`);
    }
  });

  const visibleAlerts = alerts.filter((text) => !isDroppedNcdrAlertText(text));
  if (!aiAlertList) {
    appState.aiAlerts = visibleAlerts;
    return;
  }
  aiAlertList.innerHTML = "";
  const digest = [];
  visibleAlerts.forEach((text, index) => {
    appendAiAlertText(text, { top: index === 0 });
    digest.push(text);
    if (index === 0) {
      digest.push(renderFloodStatusAlert(), renderUtilityStatusAlert());
    }
  });
  if (!visibleAlerts.length) {
    digest.push(renderFloodStatusAlert(), renderUtilityStatusAlert());
  }
  appState.aiAlerts = digest.map((text) => String(text || "").trim()).filter(Boolean);
  syncAlertDataToDisasterMapLayers();
}

function syncAlertDataToDisasterMapLayers() {
  if (!warningMap || isMapPopupHoldActive()) {
    return;
  }
  updateFloodMapLayer();
  updateWaterOutageMapLayer();
  updatePowerOutageMapLayer();
  updateEarthquakeMapLayer();
}

function loadSubscription() {
  try {
    const raw = localStorage.getItem(SUBSCRIPTION_STORAGE_KEY);
    if (!raw) {
      return;
    }
    appState.subscription = JSON.parse(raw);
    if (appState.subscription?.email) {
      subscriberEmail.value = appState.subscription.email;
    }
    const allowedTopics = new Set(SUBSCRIPTION_TOPIC_ORDER);
    if (Array.isArray(appState.subscription?.topics)) {
      appState.subscription.topics = appState.subscription.topics.filter((topic) => allowedTopics.has(topic));
    }
    const topics = new Set(appState.subscription?.topics ?? []);
    subscriptionForm.querySelectorAll("input[name='topic']").forEach((checkbox) => {
      checkbox.checked = topics.has(checkbox.value);
    });
  } catch {
    appState.subscription = null;
  }
}

function renderSubscriptionStatus(message) {
  if (!subscriptionStatus) {
    return;
  }
  if (message) {
    subscriptionStatus.textContent = message;
    return;
  }
  if (!appState.subscription?.email) {
    subscriptionStatus.textContent = "尚未設定訂閱。";
    return;
  }
  subscriptionStatus.textContent = "訂閱完成。";
}

function clearSubscriptionHint() {
  if (notificationHint) {
    notificationHint.hidden = true;
    notificationHint.textContent = "";
  }
}

function isStandaloneDisplay() {
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    window.matchMedia("(display-mode: fullscreen)").matches ||
    window.matchMedia("(display-mode: minimal-ui)").matches ||
    Boolean(window.navigator.standalone)
  );
}

function isLikelyAndroidDevice() {
  return /Android/i.test(navigator.userAgent || "");
}

function isDesktopBrowser() {
  if (isLikelyIosDevice() || isLikelyAndroidDevice()) {
    return false;
  }
  const ua = navigator.userAgent || "";
  if (/Mobile|Tablet/i.test(ua)) {
    return false;
  }
  return window.matchMedia("(min-width: 861px)").matches || window.matchMedia("(pointer: fine)").matches;
}

async function hasInstalledDesktopPwa() {
  if (isStandaloneDisplay()) {
    return true;
  }
  if (typeof navigator.getInstalledRelatedApps !== "function") {
    return false;
  }
  try {
    const apps = await navigator.getInstalledRelatedApps();
    return Array.isArray(apps) && apps.length > 0;
  } catch {
    return false;
  }
}

function isInstallBannerDismissed() {
  try {
    return sessionStorage.getItem(PWA_INSTALL_DISMISS_KEY) === "1";
  } catch {
    return false;
  }
}

function isLikelyIosDevice() {
  const ua = navigator.userAgent || "";
  return /iPad|iPhone|iPod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
}

function formatTaipeiDateTime(value = Date.now()) {
  return new Date(value).toLocaleString("zh-TW", { hour12: false, timeZone: "Asia/Taipei" });
}

function stampNotifySource(source, body) {
  return `${body}（來源：${source}｜${formatTaipeiDateTime()}）`;
}

function readJsonStorage(key, fallback) {
  try {
    const parsed = JSON.parse(localStorage.getItem(key) || "");
    return parsed ?? fallback;
  } catch {
    return fallback;
  }
}

function writeJsonStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* ignore quota */
  }
}

function loadNotifyHistory() {
  const rows = readJsonStorage(PWA_NOTIFY_HISTORY_KEY, []);
  appState.notifyHistory = Array.isArray(rows) ? rows.slice(0, 30) : [];
  return appState.notifyHistory;
}

function renderNotifyHistory() {
  if (!notifyHistoryList) {
    return;
  }
  const rows = (appState.notifyHistory || loadNotifyHistory())
    .map((row) => ({
      ...row,
      body: stripDroppedNcdrAlertText(row.body || "")
    }))
    .filter((row) => row.body || !isDroppedNcdrAlertText(row.title));
  if (!rows.length) {
    notifyHistoryList.innerHTML = "<li>尚無發送紀錄。</li>";
    return;
  }
  notifyHistoryList.innerHTML = rows
    .slice(0, 12)
    .map((row) => {
      const time = formatTaipeiDateTime(row.time);
      const city = row.city ? `｜${row.city}` : "";
      const body = row.body || stripDroppedNcdrAlertText(row.title || "");
      if (!body) {
        return "";
      }
      return `<li><strong>${escapeMapLegendHtml(row.source || "本機")}</strong>${escapeMapLegendHtml(city)}｜${escapeMapLegendHtml(time)}<br/>${escapeMapLegendHtml(body)}</li>`;
    })
    .join("");
}

function recordNotifyHistory(entry) {
  const row = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    time: Date.now(),
    source: entry.source || "本機",
    sourceUrl: entry.sourceUrl || "",
    city: entry.city || citySelect?.value || "",
    eventKey: entry.eventKey || "",
    title: entry.title || "災防通知",
    body: stripDroppedNcdrAlertText(entry.body || ""),
    channel: entry.channel || "in-page"
  };
  if (!row.body && isDroppedNcdrAlertText(entry.body || entry.title || "")) {
    return null;
  }
  const next = [row, ...loadNotifyHistory()].slice(0, 30);
  appState.notifyHistory = next;
  writeJsonStorage(PWA_NOTIFY_HISTORY_KEY, next);
  renderNotifyHistory();
  updatePwaTestChecklist();
  return row;
}

function recordSubscriberSnapshot(subscription = appState.subscription, extra = {}) {
  const email = String(subscription?.email || "").trim().toLowerCase();
  if (!email) {
    return;
  }
  const records = readJsonStorage(PWA_SUBSCRIBER_RECORDS_KEY, []);
  const list = Array.isArray(records) ? records : [];
  const next = {
    email,
    topics: Array.isArray(subscription?.topics) ? subscription.topics : [],
    city: subscription?.city || citySelect?.value || "",
    township: subscription?.township || townshipSelect?.value || "",
    permission: typeof Notification === "undefined" ? "unsupported" : Notification.permission,
    savedAt: list.find((item) => item.email === email)?.savedAt || new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    ...extra
  };
  writeJsonStorage(PWA_SUBSCRIBER_RECORDS_KEY, [next, ...list.filter((item) => item.email !== email)].slice(0, 40));
}

function notifyEventKey(message, city = citySelect?.value || "") {
  const compact = String(message || "")
    .replace(/\d{4}\/\d{1,2}\/\d{1,2}[^\s]*/g, "")
    .replace(/\d{1,2}:\d{2}(?::\d{2})?/g, "")
    .replace(/來源：[^｜|]+[｜|]\s*/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 96);
  return `${String(city).replace(/臺/g, "台")}|${compact}`;
}

function filterCooldownMessages(messages, city, { force = false } = {}) {
  const lines = (messages || []).map((item) => String(item || "").trim()).filter(Boolean);
  const now = Date.now();
  const map = readJsonStorage(PWA_NOTIFY_COOLDOWN_KEY, {}) || {};
  const kept = [];
  lines.forEach((line) => {
    const key = notifyEventKey(line, city);
    if (!force && map[key] && now - Number(map[key]) < NOTIFY_COOLDOWN_MS) {
      return;
    }
    map[key] = now;
    kept.push(line);
  });
  writeJsonStorage(PWA_NOTIFY_COOLDOWN_KEY, map);
  return kept;
}

function getNotifyPermissionExplain() {
  const support = getNotificationSupport();
  if (!support.secure) {
    return {
      status: "此環境改用頁面內提醒",
      detail: "系統通知需在 HTTPS 網站才能開啟。"
    };
  }
  if (support.isIos && !support.isStandalone) {
    return {
      status: "iPhone 請先加入主畫面",
      detail: "Safari 分頁不能發系統通知。請用分享 → 加入主畫面後再開；或改用頁面內提醒／測試通知。"
    };
  }
  if (!support.apiAvailable) {
    return {
      status: "此瀏覽器改用頁面內提醒",
      detail: "目前裝置不支援系統通知。"
    };
  }
  if (Notification.permission === "granted") {
    return { status: "已允許系統通知", detail: "" };
  }
  if (Notification.permission === "denied") {
    return {
      status: "已被拒絕，改用頁面內提醒",
      detail: support.isIos
        ? "請到設定 → 通知 → 災防通報改為允許；或刪除主畫面圖示後重新加入。"
        : "瀏覽器已封鎖本站通知（先前點過拒絕，或把權限彈窗關掉）。請點網址列左側圖示 → 網站設定 → 通知 → 允許。"
    };
  }
  return {
    status: "尚未詢問",
    detail: "可用「測試通知」確認提醒。系統通知請在瀏覽器網站設定允許。"
  };
}

function renderNotifyPermissionStatus() {
  if (!notifyPermissionStatus) {
    return;
  }
  const explain = getNotifyPermissionExplain();
  notifyPermissionStatus.textContent = explain.detail
    ? `通知權限：${explain.status}。${explain.detail}`
    : `通知權限：${explain.status}`;
}

function updatePwaTestChecklist() {
  const checks = {
    secure: window.isSecureContext,
    manifest: Boolean(document.querySelector('link[rel="manifest"]')),
    sw: Boolean(notificationRegistration || navigator.serviceWorker?.controller),
    standalone: isStandaloneDisplay(),
    install:
      Boolean(deferredPwaPrompt) ||
      isStandaloneDisplay() ||
      (pwaInstallBanner && !pwaInstallBanner.hidden),
    permission: typeof Notification === "undefined" ? true : Notification.permission !== "default",
    history: (appState.notifyHistory || []).length > 0,
    offline: Boolean(navigator.serviceWorker?.controller)
  };
  document.querySelectorAll("[data-pwa-check]").forEach((item) => {
    const key = item.dataset.pwaCheck;
    const ok = Boolean(checks[key]);
    item.classList.toggle("is-ok", ok);
    item.classList.toggle("is-off", !ok && (key === "permission" || key === "history"));
    item.classList.toggle("is-warn", !ok && key !== "permission" && key !== "history");
  });
}

let deferredPwaPrompt = window.__jinPwaPrompt || null;

function renderPwaInstallBanner() {
  if (!pwaInstallBanner) {
    return;
  }
  if (isStandaloneDisplay() || isInstallBannerDismissed() || pwaInstallBanner.dataset.installed === "1") {
    pwaInstallBanner.hidden = true;
    updatePwaTestChecklist();
    return;
  }
  pwaInstallBanner.hidden = false;
  if (isDesktopBrowser()) {
    if (pwaInstallTitle) {
      pwaInstallTitle.textContent = "尚未安裝桌面版";
    }
    if (pwaInstallText) {
      pwaInstallText.textContent = deferredPwaPrompt
        ? "點安裝後可獨立視窗開啟災防通報，並接收通知。"
        : "建議安裝桌面版。點安裝，或從 Chrome／Edge 網址列右側安裝圖示加入電腦。";
    }
    if (pwaInstallBtn) {
      pwaInstallBtn.hidden = false;
      pwaInstallBtn.textContent = "安裝桌面版";
    }
    updatePwaTestChecklist();
    return;
  }
  if (isLikelyIosDevice()) {
    if (pwaInstallTitle) {
      pwaInstallTitle.textContent = "尚未安裝災防通報";
    }
    if (pwaInstallText) {
      pwaInstallText.textContent = "在 Safari 點分享，再選「加入主畫面」。";
    }
    if (pwaInstallBtn) {
      pwaInstallBtn.hidden = true;
    }
    updatePwaTestChecklist();
    return;
  }
  if (pwaInstallTitle) {
    pwaInstallTitle.textContent = "尚未安裝災防通報";
  }
  if (pwaInstallText) {
    pwaInstallText.textContent = deferredPwaPrompt
      ? "加到主畫面後可全螢幕開啟，並接收災防通知。"
      : "請用 Chrome 開啟，點選選單後選擇「安裝應用程式」。";
  }
  if (pwaInstallBtn) {
    pwaInstallBtn.hidden = false;
    pwaInstallBtn.textContent = "安裝到主畫面";
  }
  updatePwaTestChecklist();
}

async function refreshPwaInstallBanner() {
  if (!pwaInstallBanner) {
    return;
  }
  const installed = await hasInstalledDesktopPwa();
  if (installed) {
    pwaInstallBanner.dataset.installed = "1";
    pwaInstallBanner.hidden = true;
    updatePwaTestChecklist();
    pinAndroidWeatherStatusTray().catch(() => {});
    return;
  }
  delete pwaInstallBanner.dataset.installed;
  renderPwaInstallBanner();
}

function initPwaInstallExperience() {
  if (window.__jinPwaPrompt) {
    deferredPwaPrompt = window.__jinPwaPrompt;
  }
  window.addEventListener("jin-pwa-prompt-ready", () => {
    deferredPwaPrompt = window.__jinPwaPrompt || deferredPwaPrompt;
    renderPwaInstallBanner();
  });
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredPwaPrompt = event;
    renderPwaInstallBanner();
  });
  window.addEventListener("appinstalled", () => {
    deferredPwaPrompt = null;
    if (pwaInstallBanner) {
      pwaInstallBanner.dataset.installed = "1";
    }
    renderPwaInstallBanner();
    pinAndroidWeatherStatusTray().catch(() => {});
  });
  window.matchMedia("(display-mode: standalone)").addEventListener("change", () => {
    refreshPwaInstallBanner().catch(() => renderPwaInstallBanner());
  });
  pwaInstallBtn?.addEventListener("click", async () => {
    if (deferredPwaPrompt) {
      deferredPwaPrompt.prompt();
      try {
        const choice = await deferredPwaPrompt.userChoice;
        if (choice?.outcome === "accepted") {
          if (pwaInstallBanner) {
            pwaInstallBanner.dataset.installed = "1";
          }
        }
      } catch {
        /* ignore */
      }
      deferredPwaPrompt = null;
      window.__jinPwaPrompt = null;
      renderPwaInstallBanner();
      return;
    }
    if (pwaInstallText) {
      pwaInstallText.textContent = isDesktopBrowser()
        ? "請用 Chrome 或 Edge 開啟，點網址列右側「安裝」圖示，或選單中的「安裝應用程式」。"
        : "請用 Chrome 開啟，點選右上角選單後選擇「安裝應用程式」。";
    }
  });
  pwaInstallDismiss?.addEventListener("click", () => {
    try {
      sessionStorage.setItem(PWA_INSTALL_DISMISS_KEY, "1");
    } catch {
      /* ignore */
    }
    renderPwaInstallBanner();
  });
  refreshPwaInstallBanner().catch(() => renderPwaInstallBanner());
  pinAndroidWeatherStatusTray().catch(() => {});
}

const WEATHER_STATUS_PERIODIC_TAG = "jin-weather-status";
let torchOn = false;
let torchCapability = "unknown";
let torchStream = null;
let torchTrack = null;

function isWebTorchLikely() {
  if (!isLikelyAndroidDevice()) {
    return false;
  }
  return Boolean(navigator.mediaDevices?.getUserMedia);
}

function weatherAssetUrl(path) {
  try {
    return new URL(path, document.baseURI).href;
  } catch {
    return path;
  }
}

function shouldPinWeatherStatusTray() {
  if (typeof Notification === "undefined" || Notification.permission !== "granted") {
    return false;
  }
  if (isLikelyAndroidDevice()) {
    return true;
  }
  return isStandaloneDisplay() || pwaInstallBanner?.dataset.installed === "1";
}

function getWeatherStatusPayload() {
  const current = appState.weather?.current;
  const location = getActiveWeatherLocation();
  const place = appState.weather?.label || location?.label || "所選位置";
  const status = current
    ? WEATHER_CODE_LABEL[current.weather_code] ?? "天氣狀態更新中"
    : "天氣讀取中";
  const tempRaw = Number(current?.temperature_2m);
  const temperature = Number.isFinite(tempRaw) ? Math.round(tempRaw) : null;
  const title = temperature !== null ? `${temperature}° ${status}` : status;
  const torchAvailable = torchCapability !== "no" && isWebTorchLikely();
  const torchText = torchAvailable ? `｜手電筒 ${torchOn ? "開" : "關"}` : "";
  return {
    title,
    body: `${place}${torchText}`,
    temperature,
    status,
    place,
    lat: Number(appState.weather?.lat ?? location?.lat),
    lon: Number(appState.weather?.lon ?? location?.lon),
    torchOn,
    torchAvailable
  };
}

function buildWeatherNotificationOptions(payload, { withActions = true } = {}) {
  const torchAvailable = Boolean(payload.torchAvailable) && withActions;
  const isOn = Boolean(payload.torchOn);
  const icon = weatherAssetUrl("./icons/icon-192.png");
  return {
    body: payload.body || payload.place || "災防通報",
    tag: WEATHER_STATUS_NOTIFY_TAG,
    silent: false,
    renotify: false,
    requireInteraction: false,
    icon,
    badge: icon,
    actions: torchAvailable
      ? [
          {
            action: "torch-toggle",
            title: isOn ? "關閉手電筒" : "開啟手電筒",
            icon: weatherAssetUrl(isOn ? "./icons/torch-on-96.png" : "./icons/torch-off-96.png")
          }
        ]
      : [],
    data: {
      kind: "weather-status",
      torchOn: isOn,
      place: payload.place || ""
    }
  };
}

function stopTorchStream() {
  try {
    torchTrack?.stop();
  } catch {
    /* ignore */
  }
  try {
    torchStream?.getTracks?.().forEach((track) => track.stop());
  } catch {
    /* ignore */
  }
  torchTrack = null;
  torchStream = null;
  if (torchVideo) {
    torchVideo.srcObject = null;
  }
}

async function applyTorchConstraint(track, on) {
  const attempts = [{ advanced: [{ torch: on }] }, { torch: on }];
  let lastError = null;
  for (const constraint of attempts) {
    try {
      await track.applyConstraints(constraint);
      return true;
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError || new Error("torch unsupported");
}

async function getTorchTrack() {
  if (torchTrack && torchTrack.readyState === "live") {
    return torchTrack;
  }
  const stream = await navigator.mediaDevices.getUserMedia({
    audio: false,
    video: { facingMode: { ideal: "environment" } }
  });
  torchStream = stream;
  torchTrack = stream.getVideoTracks()[0] || null;
  if (torchVideo && torchTrack) {
    torchVideo.srcObject = stream;
    try {
      await torchVideo.play();
    } catch {
      /* autoplay can fail; constraints may still work */
    }
  }
  return torchTrack;
}

async function setTorchEnabled(nextOn) {
  if (!isWebTorchLikely()) {
    torchCapability = "no";
    torchOn = false;
    return false;
  }
  if (!nextOn) {
    if (torchTrack) {
      try {
        await applyTorchConstraint(torchTrack, false);
      } catch {
        /* stop the stream anyway */
      }
    }
    stopTorchStream();
    torchOn = false;
    torchCapability = "yes";
    publishWeatherStatusNotification().catch(() => {});
    return true;
  }
  try {
    const track = await getTorchTrack();
    if (!track) {
      throw new Error("no camera track");
    }
    await applyTorchConstraint(track, true);
    torchCapability = "yes";
    torchOn = true;
    publishWeatherStatusNotification().catch(() => {});
    return true;
  } catch {
    stopTorchStream();
    torchOn = false;
    torchCapability = "no";
    showInPageAlert("手電筒無法開啟", "請允許相機權限，或此裝置沒有補光燈。", {
      timeoutMs: 6000,
      variant: "not-open"
    });
    publishWeatherStatusNotification().catch(() => {});
    return false;
  }
}

async function toggleTorchFromExternal() {
  await setTorchEnabled(!torchOn);
}

async function showWeatherStatusOnDevice(payload) {
  await initServiceWorker();
  const registration = await getNotificationRegistration();
  const attempts = [
    buildWeatherNotificationOptions(payload, { withActions: true }),
    buildWeatherNotificationOptions(payload, { withActions: false })
  ];
  if (registration?.showNotification) {
    for (const options of attempts) {
      try {
        await registration.showNotification(payload.title, options);
        return true;
      } catch {
        /* try a simpler payload */
      }
    }
  }
  try {
    const fallback = buildWeatherNotificationOptions(payload, { withActions: false });
    const notification = new Notification(payload.title, fallback);
    if (notification) {
      return true;
    }
  } catch {
    /* fall through to service worker message */
  }
  return postToServiceWorker({ type: "SHOW_WEATHER_STATUS", payload });
}

async function publishWeatherStatusNotification() {
  if (!shouldPinWeatherStatusTray()) {
    return false;
  }
  const payload = getWeatherStatusPayload();
  const shown = await showWeatherStatusOnDevice(payload);
  await postToServiceWorker({ type: "SHOW_WEATHER_STATUS", payload });
  return shown;
}

function refreshPwaWeatherStatus() {
  publishWeatherStatusNotification().catch(() => {});
}

async function registerWeatherStatusPeriodicSync() {
  const registration = await initServiceWorker();
  if (!registration || !("periodicSync" in registration)) {
    return false;
  }
  try {
    const status = await navigator.permissions?.query?.({ name: "periodic-background-sync" });
    if (status && status.state !== "granted") {
      return false;
    }
    await registration.periodicSync.register(WEATHER_STATUS_PERIODIC_TAG, {
      minInterval: 15 * 60 * 1000
    });
    return true;
  } catch {
    return false;
  }
}

async function pinAndroidWeatherStatusTray() {
  if (!isLikelyAndroidDevice()) {
    torchCapability = "no";
  }
  registerWeatherStatusPeriodicSync().catch(() => {});
  if (shouldPinWeatherStatusTray()) {
    await publishWeatherStatusNotification();
    hideAndroidShadePrompt();
    return true;
  }
  maybeShowAndroidShadePrompt();
  return false;
}

function isAndroidShadePromptDismissed() {
  try {
    return sessionStorage.getItem(ANDROID_SHADE_PROMPT_DISMISS_KEY) === "1";
  } catch {
    return false;
  }
}

function hideAndroidShadePrompt() {
  if (androidShadePrompt) {
    androidShadePrompt.hidden = true;
  }
}

function maybeShowAndroidShadePrompt() {
  if (!androidShadePrompt) {
    return;
  }
  if (!isLikelyAndroidDevice()) {
    hideAndroidShadePrompt();
    return;
  }
  if (typeof Notification === "undefined") {
    hideAndroidShadePrompt();
    return;
  }
  if (Notification.permission === "granted") {
    hideAndroidShadePrompt();
    return;
  }
  if (Notification.permission === "denied" || isAndroidShadePromptDismissed()) {
    hideAndroidShadePrompt();
    return;
  }
  androidShadePrompt.hidden = false;
}

function consumeTorchQuery() {
  try {
    const params = new URLSearchParams(window.location.search);
    if (params.get("torch") !== "toggle") {
      return;
    }
    params.delete("torch");
    const query = params.toString();
    const next = `${window.location.pathname}${query ? `?${query}` : ""}${window.location.hash}`;
    window.history.replaceState({}, "", next);
    toggleTorchFromExternal().catch(() => {});
  } catch {
    /* ignore */
  }
}

function initPwaWeatherTorchExperience() {
  navigator.serviceWorker?.addEventListener("message", (event) => {
    const data = event.data || {};
    if (data.type === "TORCH_TOGGLE") {
      toggleTorchFromExternal().catch(() => {});
    }
  });
  androidShadeAllowBtn?.addEventListener("click", async (event) => {
    event.preventDefault();
    const mode = await ensureNotificationPermission();
    renderNotifyPermissionStatus();
    if (mode === "granted") {
      hideAndroidShadePrompt();
      const shown = await publishWeatherStatusNotification();
      showInPageAlert(
        shown ? "已顯示在通知列" : "已允許系統通知",
        shown
          ? "請從手機頂端往下滑，即可看到目前天氣、溫度與手電筒。"
          : "已允許通知。請從手機頂端往下滑查看系統通知列。",
        { timeoutMs: 7000, variant: "subscription" }
      );
      return;
    }
    if (typeof Notification !== "undefined" && Notification.permission === "denied") {
      hideAndroidShadePrompt();
      showInPageAlert("通知權限已被拒絕", getNotifyPermissionExplain().detail || "請到系統設定允許此應用程式的通知。", {
        timeoutMs: 8000,
        variant: "not-open"
      });
    }
  });
  androidShadeLaterBtn?.addEventListener("click", (event) => {
    event.preventDefault();
    try {
      sessionStorage.setItem(ANDROID_SHADE_PROMPT_DISMISS_KEY, "1");
    } catch {
      /* ignore */
    }
    hideAndroidShadePrompt();
  });
  window.addEventListener("appinstalled", () => {
    pinAndroidWeatherStatusTray().catch(() => {});
  });
  window.matchMedia("(display-mode: standalone)").addEventListener("change", () => {
    pinAndroidWeatherStatusTray().catch(() => {});
  });
  window.addEventListener("pagehide", () => {
    if (!torchOn) {
      return;
    }
    torchOn = false;
    stopTorchStream();
    navigator.serviceWorker?.controller?.postMessage({
      type: "SET_TORCH_STATE",
      payload: { on: false }
    });
  });
  consumeTorchQuery();
  pinAndroidWeatherStatusTray().catch(() => {});
}

function isOfficialWarningCatalogLine(line) {
  return /資料提供\s*:|地震警報由中央氣象署發布|內容包含地震規模及各地方震度/.test(line);
}

function isDroppedNcdrAlertText(text) {
  return /【NCDR\s*示警】|地震警報由中央氣象署發布|內容包含地震規模及各地方震度/.test(String(text || ""));
}

function stripDroppedNcdrAlertText(text) {
  return String(text || "")
    .split(/\n+/)
    .map((line) => line.trim())
    .filter((line) => line && !isDroppedNcdrAlertText(line))
    .join("\n");
}

function parseOfficialWarningMarkdown(markdown, cityName, { sourceLabel, keyword, sourceUrl }) {
  const city = normalizeTaiwanPlaceText(cityName);
  const lines = String(markdown || "")
    .split(/\n+/)
    .map((line) => line.replace(/^#+\s*/, "").trim())
    .filter((line) => line && !line.startsWith("![") && line.length < 280 && !isOfficialWarningCatalogLine(line));
  const hits = lines.filter((line) => keyword.test(line));
  const cityHits = city
    ? hits.filter((line) => normalizeTaiwanPlaceText(line).includes(city) || /全[臺台]|各地(?!方)/.test(line))
    : hits;
  const picked = cityHits.slice(0, 4).map((line) => ({
    city: cityName,
    title: line.replace(/\s+/g, " ").slice(0, 140),
    source: sourceLabel,
    sourceUrl,
    fetchedAt: Date.now()
  }));
  return picked;
}

async function fetchCwaWarnings() {
  const cityName = citySelect?.value || "";
  try {
    const response = await fetch(CWA_WARNING_MIRROR, { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    appState.cwaWarnings = parseOfficialWarningMarkdown(await response.text(), cityName, {
      sourceLabel: "中央氣象署警特報",
      sourceUrl: CWA_WARNING_PAGE,
      keyword: /特報|警報|注意/
    });
  } catch (error) {
    appState.cwaWarnings = appState.cwaWarnings || [];
    console.warn("氣象署警特報讀取失敗：", error);
  }
  return appState.cwaWarnings;
}

function getSubscriptionCwaWarningMessage() {
  const locationLabel = getSubscriptionLocationLabel();
  const top = (appState.cwaWarnings || [])[0];
  if (!top) {
    return stampNotifySource("中央氣象署警特報", `【氣象署警特報】${locationLabel} 目前無縣市對應警特報`);
  }
  return stampNotifySource(top.source, `【氣象署警特報】${locationLabel}：${top.title}`);
}

function getNotificationSupport() {
  const secure = Boolean(window.isSecureContext);
  const apiAvailable = secure && "Notification" in window;
  const standalone = isStandaloneDisplay();
  const ios = isLikelyIosDevice();
  let reason = "ok";
  if (!secure) {
    reason = "insecure";
  } else if (!apiAvailable && ios && !standalone) {
    reason = "ios-home-screen";
  } else if (!apiAvailable) {
    reason = "unsupported";
  }
  return {
    secure,
    apiAvailable,
    isStandalone: standalone,
    isIos: ios,
    reason
  };
}

function updateNotificationHint(extraMessage = "") {
  // Keep text under「儲存訂閱」limited to subscription completion status.
  clearSubscriptionHint();
  if (extraMessage) {
    showInPageAlert("訂閱提醒", extraMessage, { timeoutMs: 7000, variant: "subscribe-tip" });
  }
}

let overlayScrollLockCount = 0;
let overlayLockedScrollY = 0;

function isOverlayScrollExempt(event) {
  const path = typeof event?.composedPath === "function" ? event.composedPath() : [event?.target];
  return path.some((node) =>
    node?.closest?.(
      ".in-page-alert, .in-page-alert-close, .eq-detail-sheet-panel, .eq-detail-sheet-body, .cctv-monitor-lightbox, .cctv-monitor-lightbox-panel"
    )
  );
}

function onOverlayBackgroundScroll(event) {
  if (isOverlayScrollExempt(event)) {
    return;
  }
  event.preventDefault();
}

function lockPageScrollForOverlay() {
  overlayScrollLockCount += 1;
  if (overlayScrollLockCount > 1) {
    return;
  }
  overlayLockedScrollY = window.scrollY || document.documentElement.scrollTop || 0;
  document.documentElement.classList.add("is-overlay-locked");
  document.body.classList.add("is-overlay-locked");
  document.body.style.top = `-${overlayLockedScrollY}px`;
  document.addEventListener("touchmove", onOverlayBackgroundScroll, { passive: false });
  document.addEventListener("wheel", onOverlayBackgroundScroll, { passive: false });
}

function unlockPageScrollForOverlay() {
  overlayScrollLockCount = Math.max(0, overlayScrollLockCount - 1);
  if (overlayScrollLockCount > 0) {
    return;
  }
  document.documentElement.classList.remove("is-overlay-locked");
  document.body.classList.remove("is-overlay-locked");
  document.body.style.top = "";
  document.removeEventListener("touchmove", onOverlayBackgroundScroll);
  document.removeEventListener("wheel", onOverlayBackgroundScroll);
  window.scrollTo(0, overlayLockedScrollY);
}

function getSubscriptionNotifyLineTone(line) {
  const text = String(line || "");
  const isClosureLift = /停班停課解除|已解除停班停課/.test(text);
  const isActiveClosure =
    /【停班停課】/.test(text) &&
    /停止上班|停止上課/.test(text) &&
    !/目前無停班停課|恢復正常上班/.test(text) &&
    !isClosureLift;
  if (isActiveClosure) {
    return "closure";
  }
  if (
    isClosureLift ||
    /解除|消退|已恢復|已解除/.test(text) ||
    /【(?:積淹水警戒|停電警戒|停水警戒|地震通報|颱風警報|國家緊急訊息)】/.test(text)
  ) {
    return "change";
  }
  return "status";
}

function showInPageAlert(title, body, { timeoutMs = 8000, fullscreen = false, variant = "" } = {}) {
  if (!inPageAlertHost) {
    return false;
  }
  const isReadableTip =
    variant === "subscribe-tip" ||
    variant === "not-open" ||
    variant === "refresh-done" ||
    variant === "subscription";
  const alert = document.createElement("article");
  alert.className = [
    "in-page-alert",
    fullscreen ? "in-page-alert-fullscreen" : "",
    variant === "locate-done" ? "in-page-alert-locate-done" : "",
    isReadableTip ? "in-page-alert-readable-tip" : "",
    variant === "subscribe-tip" ? "in-page-alert-subscribe-tip" : "",
    variant === "refresh-done" ? "in-page-alert-refresh-done" : "",
    variant === "not-open" ? "in-page-alert-not-open" : "",
    variant === "subscription" ? "in-page-alert-subscription" : ""
  ]
    .filter(Boolean)
    .join(" ");
  const titleTag = variant === "locate-done" ? "p" : "strong";
  alert.innerHTML = `
    <${titleTag} class="in-page-alert-title"></${titleTag}>
    <div class="in-page-alert-body"></div>
    <button type="button" class="in-page-alert-close">知道了</button>
  `;
  const titleEl = alert.querySelector(".in-page-alert-title");
  const bodyHost = alert.querySelector(".in-page-alert-body");
  if (titleEl) {
    titleEl.textContent = title;
  }
  const lines = (() => {
    const rows = String(body || "")
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);
    if (variant === "subscription") {
      return sortSubscriptionNoticeLines(mergeNotifyLinesByCategory(rows));
    }
    if (variant === "refresh-done") {
      return sortSubscriptionNoticeLines(rows);
    }
    return rows;
  })();
  (lines.length ? lines : [""]).forEach((line) => {
    const row = document.createElement("p");
    row.className = "in-page-alert-line";
    if (variant === "subscription" || variant === "refresh-done") {
      row.classList.add(`in-page-alert-line-${getSubscriptionNotifyLineTone(line)}`);
    }
    row.textContent = line;
    bodyHost?.append(row);
  });
  const fitAbort = new AbortController();
  let closed = false;
  const close = () => {
    if (closed) {
      return;
    }
    closed = true;
    fitAbort.abort();
    alert.remove();
    if (!inPageAlertHost.querySelector(".in-page-alert-fullscreen")) {
      inPageAlertHost.classList.remove("is-fullscreen-mode");
    }
    unlockPageScrollForOverlay();
  };
  alert._closeInPageAlert = close;
  if (variant === "subscription" || variant === "refresh-done") {
    [...(inPageAlertHost.querySelectorAll(`.in-page-alert-${variant}`) || [])].forEach((el) => {
      if (typeof el._closeInPageAlert === "function") {
        el._closeInPageAlert();
      } else {
        el.remove();
      }
    });
  }
  const closeBtn = alert.querySelector(".in-page-alert-close");
  closeBtn?.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    close();
  });
  closeBtn?.addEventListener("pointerup", (event) => {
    event.preventDefault();
    event.stopPropagation();
    close();
  });
  lockPageScrollForOverlay();
  if (fullscreen) {
    inPageAlertHost.classList.add("is-fullscreen-mode");
  }
  inPageAlertHost.append(alert);
  const useFullscreenFit = fullscreen && (variant === "refresh-done" || variant === "subscription");
  if (useFullscreenFit) {
    scheduleRefreshDoneAlertFit(alert);
    window.addEventListener(
      "resize",
      () => {
        scheduleRefreshDoneAlertFit(alert);
      },
      { passive: true, signal: fitAbort.signal }
    );
  } else if (isDesktopNotifyLayout()) {
    scheduleDesktopNotifyFit(alert);
    window.addEventListener(
      "resize",
      () => {
        if (isDesktopNotifyLayout()) {
          scheduleDesktopNotifyFit(alert);
        } else {
          clearDesktopNotifyFitStyles(alert);
        }
      },
      { passive: true, signal: fitAbort.signal }
    );
  } else if (!fullscreen && !isReadableTip) {
    // Readable tips use CSS wrapping sizes; shrink-to-fit made long notices unreadable.
    window.requestAnimationFrame(() => {
      const width = Math.floor(alert.getBoundingClientRect().width || 0);
      fitSingleLineText(titleEl, {
        maxPx: Math.min(28, Math.max(14, Math.floor(width * 0.08))),
        minPx: 11,
        fillRatio: 0.98
      });
      bodyHost?.querySelectorAll(".in-page-alert-line").forEach((lineEl) => {
        fitSingleLineText(lineEl, {
          maxPx: Math.min(22, Math.max(12, Math.floor(width * 0.065))),
          minPx: 10,
          fillRatio: 0.98
        });
      });
    });
  }
  if (timeoutMs > 0) {
    window.setTimeout(close, timeoutMs);
  }
  return true;
}

async function initServiceWorker() {
  if (!("serviceWorker" in navigator) || !window.isSecureContext) {
    return null;
  }
  try {
    notificationRegistration = await navigator.serviceWorker.register("./sw.js", { scope: "./" });
    await notificationRegistration.update();
    return notificationRegistration;
  } catch {
    return null;
  }
}

function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const raw = atob(base64);
  return Uint8Array.from(raw, (char) => char.charCodeAt(0));
}

function buildBackgroundSubscriptionPrefs(subscription = appState.subscription) {
  const location = getSubscriptionWeatherLocation();
  return {
    email: String(subscription?.email || "")
      .trim()
      .toLowerCase(),
    topics: Array.isArray(subscription?.topics) ? subscription.topics : [],
    city: subscription?.city || "",
    township: subscription?.township || "",
    label: location?.label || `${subscription?.city || ""}${subscription?.township || ""}`,
    lat: Number(location?.lat),
    lon: Number(location?.lon),
    notifyArmedByLocate: isForecastNotifyArmedByLocate(),
    recoveryState: loadRecoveryState(),
    updatedAt: new Date().toISOString()
  };
}

async function postToServiceWorker(message) {
  const registration = await getNotificationRegistration();
  const worker = registration?.active || registration?.waiting || registration?.installing;
  if (!worker) {
    return false;
  }
  worker.postMessage(message);
  return true;
}

async function persistSubscriptionForBackground(subscription = appState.subscription) {
  const prefs = buildBackgroundSubscriptionPrefs(subscription);
  await initServiceWorker();
  await postToServiceWorker({ type: "SAVE_SUBSCRIPTION_PREFS", payload: prefs });
  return prefs;
}

async function persistSubscriptionDigestForBackground(messages = []) {
  const lines = (messages || []).map((item) => String(item || "").trim()).filter(Boolean);
  await initServiceWorker();
  await postToServiceWorker({
    type: "SAVE_SUBSCRIPTION_DIGEST",
    payload: {
      digest: lines.join("\n"),
      messages: lines
    }
  });
  return lines;
}

const deviceNotifiedLinesThisRefresh = new Set();

function rememberDeviceNotifiedLine(text) {
  const line = String(text || "").trim();
  if (line) {
    deviceNotifiedLinesThisRefresh.add(line);
  }
}

function wasDeviceNotifiedThisRefresh(text) {
  return deviceNotifiedLinesThisRefresh.has(String(text || "").trim());
}

function clearDeviceNotifiedThisRefresh() {
  deviceNotifiedLinesThisRefresh.clear();
}

async function enableBackgroundNotifications(subscription = appState.subscription) {
  const registration = await initServiceWorker();
  if (!registration) {
    return { enabled: false, reason: "no-sw" };
  }
  await persistSubscriptionForBackground(subscription);
  const previewMessages = buildSubscriptionNotificationMessages();
  if (previewMessages.length) {
    await persistSubscriptionDigestForBackground(previewMessages);
  }

  let pushSubscribed = false;
  try {
    if (registration.pushManager && Notification.permission === "granted") {
      const existing = await registration.pushManager.getSubscription();
      const pushSubscription =
        existing ||
        (await registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY)
        }));
      pushSubscribed = Boolean(pushSubscription);
      await postToServiceWorker({
        type: "SAVE_SUBSCRIPTION_PREFS",
        payload: {
          ...buildBackgroundSubscriptionPrefs(subscription),
          pushSubscription: pushSubscription?.toJSON?.() || null
        }
      });
    }
  } catch {
    pushSubscribed = false;
  }

  let periodicSync = false;
  try {
    if ("periodicSync" in registration) {
      const status = await navigator.permissions?.query?.({ name: "periodic-background-sync" });
      if (!status || status.state === "granted") {
        await registration.periodicSync.register("jin-disaster-check", {
          minInterval: 15 * 60 * 1000
        });
        periodicSync = true;
      }
    }
  } catch {
    periodicSync = false;
  }

  try {
    if ("sync" in registration) {
      await registration.sync.register("jin-disaster-check-once");
    }
  } catch {
    /* one-off sync is best-effort */
  }

  return { enabled: true, pushSubscribed, periodicSync };
}

async function getNotificationRegistration() {
  if (notificationRegistration) {
    return notificationRegistration;
  }
  if (!("serviceWorker" in navigator) || !window.isSecureContext) {
    return null;
  }
  try {
    notificationRegistration = await navigator.serviceWorker.ready;
    return notificationRegistration;
  } catch {
    return null;
  }
}

async function notifySubscriptionMessagesToDevice(messages, { title = "預報訂閱通知", persist = false } = {}) {
  const lines = mergeNotifyLinesByCategory(
    (messages || []).map((item) => String(item || "").trim()).filter(Boolean)
  );
  if (!lines.length) {
    return false;
  }
  const stamp = Date.now();
  const body = lines.join("\n");
  await showWindowsSystemNotification(title, body, { tag: `subscription-bg-${stamp}` });
  if (persist) {
    await persistSubscriptionDigestForBackground(lines);
  }
  return true;
}

async function showWindowsSystemNotification(title, body, { tag } = {}) {
  if (!window.isSecureContext || typeof Notification === "undefined") {
    return false;
  }
  const text = String(body || "").trim();
  if (!text) {
    return false;
  }
  if (Notification.permission !== "granted") {
    return false;
  }
  const payload = {
    body: text,
    tag: tag || `jin-${Date.now()}`,
    renotify: true,
    silent: false,
    requireInteraction: true,
    icon: "./icons/icon-192.png",
    badge: "./icons/icon-192.png",
    data: { source: "subscription-device" }
  };
  let shown = false;
  try {
    await initServiceWorker();
    const registration = await getNotificationRegistration();
    if (registration?.showNotification) {
      await registration.showNotification(title, payload);
      shown = true;
    }
    const worker = registration?.active || registration?.waiting || registration?.installing;
    if (worker) {
      worker.postMessage({
        type: "SHOW_NOTIFICATION",
        title,
        body: text,
        tag: payload.tag,
        data: payload.data
      });
      shown = true;
    }
  } catch {
    /* fall through to Notification constructor */
  }
  if (!shown) {
    try {
      const notification = new Notification(title, payload);
      shown = Boolean(notification);
    } catch {
      return false;
    }
  }
  rememberDeviceNotifiedLine(text);
  return shown;
}

async function notifyAutoRefreshComplete() {
  const timeText = formatDateTime(Date.now());
  const intervalLabel = getAutoRefreshIntervalLabel();
  const title = "資料已更新";
  const intro = `已完成每 ${intervalLabel} 自動更新。更新時間：${timeText}`;
  const updates = getSubscriptionUpdateLines();
  const body = [intro, "訂閱更新：", ...updates].join("\n");
  showInPageAlert(title, body, {
    timeoutMs: Math.min(20000, 9000 + updates.length * 1200),
    fullscreen: true,
    variant: "refresh-done"
  });
  await showWindowsSystemNotification(title, body, { tag: "jin-auto-refresh-digest" });
  await persistSubscriptionDigestForBackground(updates);
  clearDeviceNotifiedThisRefresh();
}

function getSubscriptionUpdateLines() {
  const recoveryLines = (appState.lastRecoveryMessages || [])
    .map((item) => (typeof item === "string" ? item : item?.text))
    .map((text) => String(text || "").trim())
    .filter(Boolean);
  if (appState.subscription?.email && getSelectedSubscriptionTopics().length) {
    const messages = (Array.isArray(customMessages) && customMessages.length
    ? customMessages
    : buildSubscriptionNotificationMessages()
  )
    .map((text) => String(text || "").trim())
    .filter(Boolean);
    if (recoveryLines.length || messages.length) {
      return sortSubscriptionNoticeLines([...recoveryLines, ...messages]);
    }
  }
  if (recoveryLines.length) {
    return sortSubscriptionNoticeLines(recoveryLines);
  }
  const alerts = (appState.aiAlerts || []).map((item) => String(item || "").trim()).filter(Boolean);
  if (alerts.length) {
    return sortSubscriptionNoticeLines(alerts);
  }
  return ["目前未觸發重大災害提醒。"];
}

function armSystemNotificationPermission() {
  renderNotifyPermissionStatus();
}

async function showAppNotification(title, body, { tag, data, skipInPage = false, variant = "" } = {}) {
  const payload = {
    body,
    tag: tag || `jin-${Date.now()}`,
    renotify: true,
    requireInteraction: true,
    vibrate: [200, 100, 200, 100, 200],
    icon: "./icons/icon-192.png",
    badge: "./icons/icon-192.png",
    data: data || {}
  };

  let systemShown = false;
  try {
    await initServiceWorker();
    const registration = await getNotificationRegistration();
    if (registration?.showNotification && "Notification" in window && Notification.permission === "granted") {
      await registration.showNotification(title, payload);
      systemShown = true;
      rememberDeviceNotifiedLine(body);
      try {
        registration.active?.postMessage({
          type: "SHOW_NOTIFICATION",
          title,
          body,
          tag: payload.tag,
          data: payload.data
        });
      } catch {
        /* ignore */
      }
    } else if ("Notification" in window && Notification.permission === "granted") {
      new Notification(title, payload);
      systemShown = true;
    }
  } catch {
    systemShown = false;
  }

  if (!skipInPage) {
    showInPageAlert(title, body, {
      timeoutMs: systemShown ? 8000 : 15000,
      fullscreen: true,
      variant: variant || (title === "預報訂閱通知" ? "subscription" : "")
    });
  }
  return true;
}

function getNotificationDigest(messages) {
  return (messages || []).map((line) => notifyEventKey(line)).join("\n");
}

function shouldSendNotificationDigest(messages, { force = false } = {}) {
  if (force) {
    return true;
  }
  const digest = getNotificationDigest(messages);
  const previous = localStorage.getItem(NOTIFICATION_DIGEST_STORAGE_KEY);
  return previous !== digest;
}

async function ensureNotificationPermission() {
  const finish = (mode) => {
    renderNotifyPermissionStatus();
    updatePwaTestChecklist();
    return mode;
  };
  const support = getNotificationSupport();
  if (!support.apiAvailable) {
    updateNotificationHint();
    // Fallback mode: allow subscription alerts via in-page reminders.
    return finish("fallback");
  }
  if (Notification.permission === "granted") {
    await initServiceWorker();
    updateNotificationHint();
    return finish("granted");
  }
  if (Notification.permission === "denied") {
    updateNotificationHint();
    return finish("fallback");
  }
  try {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      await initServiceWorker();
      updateNotificationHint();
      return finish("granted");
    }
  } catch {
    updateNotificationHint("瀏覽器拒絕通知權限請求，已改用頁面內即時提醒。");
    return finish("fallback");
  }
  updateNotificationHint("尚未允許系統通知，已改用頁面內即時提醒。");
  return finish("fallback");
}

async function sendPwaTestNotification() {
  const permissionMode = await ensureNotificationPermission();
  renderNotifyPermissionStatus();
  updatePwaTestChecklist();
  const denied = typeof Notification !== "undefined" && Notification.permission === "denied";
  const city = citySelect?.value || appState.subscription?.city || "";
  const body = stampNotifySource("PWA 測試", `【測試通知】災防通報測試推播${city ? `｜${city}` : ""}`);
  const channel = denied ? "denied-in-page" : permissionMode === "granted" ? "system" : "in-page";
  recordNotifyHistory({
    source: "PWA 測試",
    sourceUrl: SITE_PUBLIC_URL,
    city,
    eventKey: notifyEventKey(body, city),
    title: "測試通知",
    body,
    channel
  });
  if (denied) {
    showInPageAlert("通知權限已被拒絕", "系統通知無法顯示，已改用頁面內提醒，並寫入推播歷程。", {
      timeoutMs: 7000,
      variant: "not-open"
    });
    showInPageAlert("測試通知", body, {
      timeoutMs: 8000,
      fullscreen: true,
      variant: "subscription"
    });
    renderSubscriptionStatus("通知權限已被拒絕，已改用頁面內提醒。");
    return "denied";
  }
  await showAppNotification("測試通知", body, {
    tag: `pwa-test-${Date.now()}`,
    variant: "subscription"
  });
  renderSubscriptionStatus("已發送測試通知，並寫入推播歷程。");
  return permissionMode;
}

function isForecastNotifyArmedByLocate() {
  try {
    return (
      sessionStorage.getItem(FORECAST_NOTIFY_ARM_KEY) === "1" ||
      localStorage.getItem(FORECAST_NOTIFY_ARM_KEY) === "1"
    );
  } catch {
    return false;
  }
}

function armForecastNotifyByDeviceLocate() {
  try {
    sessionStorage.setItem(FORECAST_NOTIFY_ARM_KEY, "1");
    localStorage.setItem(FORECAST_NOTIFY_ARM_KEY, "1");
  } catch {
    /* ignore */
  }
}

function getForecastNotifyGateMessage() {
  return "請先按「依設備定位選區」，定位完成後才會發布預報／警戒通知。";
}

function getSubscriptionCityName() {
  return appState.subscription?.city || citySelect.value || "";
}

function getSubscriptionTownshipName() {
  return townshipSelect?.value || appState.subscription?.township || "";
}

function getActiveWaterOutageScope() {
  // Utility water alerts follow the locator/selectors first (not the whole subscribed county).
  return {
    cityName: citySelect?.value || getSubscriptionCityName() || "",
    townshipName: townshipSelect?.value || appState.subscription?.township || ""
  };
}

function areaMentionsTownship(areaText, townshipName) {
  const area = normalizeTaiwanPlaceText(areaText);
  const town = normalizeTaiwanPlaceText(townshipName);
  if (!area || !town) {
    return false;
  }
  if (area.includes(town)) {
    return true;
  }
  const bare = town.replace(/(區|鄉|鎮|市)$/u, "");
  if (bare.length < 2) {
    return false;
  }
  // Match bare + common admin endings used in 台水 announcements.
  return [`${bare}區`, `${bare}鄉`, `${bare}鎮`, `${bare}市`].some((token) => area.includes(token));
}

function filterWaterOutagesForTownship(items = [], cityName = "", townshipName = "") {
  const town = String(townshipName || "").trim();
  if (!town) {
    return [];
  }
  return (items || []).filter((item) => {
    const haystack = `${item?.area || ""} ${item?.summary || ""} ${item?.reason || ""}`;
    return areaMentionsTownship(haystack, town);
  });
}

function getSubscriptionWeatherLocation() {
  const city = appState.subscription?.city || citySelect.value;
  const township = appState.subscription?.township || townshipSelect.value;
  if (city && township) {
    const townshipRecord = TOWNSHIP_LOCATIONS.find((item) => item.city === city && item.town === township);
    if (townshipRecord) {
      return {
        label: `${townshipRecord.city}${townshipRecord.town}`,
        cityName: townshipRecord.city,
        townName: townshipRecord.town,
        lat: townshipRecord.lat,
        lon: townshipRecord.lon
      };
    }
  }
  const cityRecord = CITY_LOCATIONS.find((item) => item.name === city);
  if (cityRecord) {
    return {
      label: cityRecord.name,
      cityName: cityRecord.name,
      townName: "",
      lat: cityRecord.lat,
      lon: cityRecord.lon
    };
  }
  return getActiveWeatherLocation();
}

function getSubscriptionLocationLabel() {
  return getSubscriptionWeatherLocation()?.label || "查詢區域";
}

function getNearbyPowerOutages(radiusKm = POWER_OUTAGE_NOTIFY_RADIUS_KM) {
  const location = getSubscriptionWeatherLocation();
  if (!location || !Number.isFinite(location.lat) || !Number.isFinite(location.lon)) {
    return [];
  }
  if (!appState.powerOutagePoints.length) {
    return [];
  }
  return appState.powerOutagePoints
    .map((point) => ({
      ...point,
      distanceKm: getDistanceKm(location.lat, location.lon, point.lat, point.lon)
    }))
    .filter((row) => row.distanceKm <= radiusKm)
    .sort((a, b) => {
      const typeOrder = { disaster: 0, planned: 1 };
      return (typeOrder[a.type] ?? 2) - (typeOrder[b.type] ?? 2) || a.distanceKm - b.distanceKm;
    });
}

function getSubscriptionClosureMessage() {
  const cityName = getSubscriptionCityName();
  const locationLabel = getSubscriptionLocationLabel();
  const closure = cityName ? appState.closureRows.find((row) => row.city === cityName) : null;
  if (!closure) {
    return stampNotifySource("行政院人事行政總處", `【停班停課】${locationLabel}：目前無停班停課狀態`);
  }
  const dateText = formatClosureDatesText(getClosureRowDates(closure));
  return stampNotifySource(
    "行政院人事行政總處",
    `【停班停課】${locationLabel}${dateText ? `（${dateText}）` : ""}：${closure.message}`
  );
}

function getSubscriptionPowerOutageMessage() {
  const locationLabel = getSubscriptionLocationLabel();
  const nearby = getNearbyPowerOutages();
  if (!nearby.length) {
    return stampNotifySource(
      "台電停電資訊",
      `【停電區域】${locationLabel} 半徑 ${POWER_OUTAGE_NOTIFY_RADIUS_KM} 公里內目前無停電通報。`
    );
  }
  const summaries = nearby.slice(0, 3).map((point) => {
    const typeLabel = point.type === "disaster" ? "災害性停電" : "計畫性停電";
    const place = point.label || point.area || "未提供區域";
    return `${place}（${typeLabel}，約 ${point.distanceKm.toFixed(1)} km）`;
  });
  const suffix = nearby.length > 3 ? `等共 ${nearby.length} 處` : `共 ${nearby.length} 處`;
  return stampNotifySource(
    "台電停電資訊",
    `【停電區域】${locationLabel} 半徑 ${POWER_OUTAGE_NOTIFY_RADIUS_KM} 公里內${suffix}：${summaries.join("；")}`
  );
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function getSelectedSubscriptionTopics() {
  const topics = new Set(appState.subscription?.topics ?? []);
  return SUBSCRIPTION_TOPIC_ORDER.filter((topic) => topics.has(topic));
}

function getSubscriptionFloodMessage() {
  const locationLabel = getSubscriptionLocationLabel();
  const location = getSubscriptionWeatherLocation();
  const nearbyFloods = location ? getNearbyFloodPoints(location, FLOOD_SUBSCRIPTION_RADIUS_KM) : [];
  const warningFloods = nearbyFloods.filter((point) => isFloodWarningDepth(point.depthCm));
  if (warningFloods.length) {
    const top = warningFloods[0];
    return stampNotifySource(
      "水利署積淹水",
      `【積淹水警示】${top.areaName} 距離約 ${top.distanceKm.toFixed(1)} km，水深 ${top.waterDepthCm} cm（等級 ${top.level}）。`
    );
  }
  if (nearbyFloods.length) {
    const top = nearbyFloods[0];
    return stampNotifySource(
      "水利署積淹水",
      `【積淹水監測】${locationLabel} 半徑 ${FLOOD_SUBSCRIPTION_RADIUS_KM} 公里內有 ${nearbyFloods.length} 處感測積水，最近 ${top.areaName} 水深 ${top.waterDepthCm} cm（未達警戒）。`
    );
  }
  return stampNotifySource(
    "水利署積淹水",
    `【積淹水監測】${locationLabel} 半徑 ${FLOOD_SUBSCRIPTION_RADIUS_KM} 公里內目前無積淹水警戒。`
  );
}

function getSubscriptionWeatherMessage() {
  const locationLabel = getSubscriptionLocationLabel();
  if (!appState.weather?.current) {
    return stampNotifySource("即時天氣", `【即時天氣】${locationLabel} 天氣資料暫時無法讀取。`);
  }
  return stampNotifySource(
    "即時天氣",
    `【即時天氣】${appState.weather.label} ${Math.round(appState.weather.current.temperature_2m)}°C，降雨機率 ${Math.round(appState.weather.rainProb ?? 0)}%。`
  );
}

function getTaipeiDateKey(date = new Date()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Taipei",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(date);
}

function buildDailyWeatherEmailBody() {
  const weather = appState.weather;
  const locationLabel = weather?.label || getSubscriptionLocationLabel();
  if (!weather?.current) {
    return `【每日天氣預報】${locationLabel}\n目前天氣資料暫時無法讀取，請稍後至平台查看：${SITE_PUBLIC_URL}`;
  }
  const current = weather.current;
  const rain8 = (weather.next8Hours || []).reduce((sum, row) => sum + Number(row.precipitation || 0), 0);
  const rainLines = (weather.next8Hours || [])
    .map((row) => `${row.time} 降雨機率 ${Math.round(row.probability)}%`)
    .join("\n");
  return [
    `【每日天氣預報】${locationLabel}`,
    `日期：${getTaipeiDateKey()}（台北時間）`,
    `天氣：${WEATHER_CODE_LABEL[current.weather_code] ?? "天氣狀態更新中"}`,
    `氣溫：${Math.round(current.temperature_2m)}°C（體感 ${Math.round(current.apparent_temperature)}°C）`,
    `濕度：${Math.round(current.relative_humidity_2m)}%`,
    `風速：${Math.round(current.wind_speed_10m)} km/h`,
    `雲量：${Math.round(current.cloud_cover)}%`,
    `目前降雨機率：${Math.round(weather.rainProb ?? 0)}%`,
    `未來 ${RAIN_FORECAST_HOURS} 小時累積降雨預估：${rain8.toFixed(1)} mm`,
    "",
    "未來 8 小時降雨機率：",
    rainLines || "（暫無預報資料）",
    "",
    `平台：${SITE_PUBLIC_URL}`,
    "本信為每日一次天氣預報。若要停止接收，請於網站取消「每日天氣預報」主題後重新儲存訂閱。"
  ].join("\n");
}

async function postFormSubmitMail(toEmail, fields) {
  const email = String(toEmail || "").trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error("Email 格式不正確");
  }
  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(email)}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      _template: "box",
      _captcha: "false",
      _honey: "",
      platform: SITE_PUBLIC_URL,
      ...fields
    })
  });
  const raw = await response.text();
  let payload = null;
  try {
    payload = JSON.parse(raw);
  } catch {
    payload = null;
  }
  const payloadMessage = String(payload?.message || "");
  if (!payload) {
    throw new Error("郵件服務暫時無法連線，請稍後再試");
  }
  if (!response.ok || payload.success === false || payload.success === "false") {
    throw new Error(payloadMessage || `郵件發送失敗（HTTP ${response.status}）`);
  }
  return payload;
}

async function sendEmailToInbox(toEmail, subject, message, extraFields = {}) {
  const email = String(toEmail || "").trim().toLowerCase();
  return postFormSubmitMail(email, {
    name: "停班停課＋即時災害通報平台",
    email,
    _replyto: email,
    _subject: subject,
    message: String(message || ""),
    ...extraFields
  });
}

function formatSubscriptionTopicLines(topics = []) {
  const values = Array.isArray(topics) ? topics : [];
  const lines = SUBSCRIPTION_TOPIC_ORDER.filter((topic) => values.includes(topic)).map(
    (topic) => `・${SUBSCRIPTION_TOPIC_LABELS[topic] || topic}`
  );
  return lines.length ? lines : ["・（未勾選主題）"];
}

function getSubscriptionConfirmLocation(record) {
  return `${record?.city || ""}${record?.township || ""}`.trim();
}

function buildSubscriptionConfirmSubject(record) {
  const location = getSubscriptionConfirmLocation(record);
  return location ? `【災防通報】訂閱確認｜${location}` : "【災防通報】訂閱確認";
}

function buildSubscriptionConfirmCtaBlock() {
  return [
    "請點選以下連結確認並返回通報平台：",
    "點此確認並返回通報平台",
    SITE_PUBLIC_URL
  ];
}

function buildSubscriptionSuccessEmailBody(record) {
  const location = getSubscriptionConfirmLocation(record) || "尚未指定地區";
  const lines = [
    "您好，",
    "",
    "感謝您訂閱「停班停課＋即時災害通報平台」。",
    "這封信是訂閱確認信，方便您核對訂閱內容並點選連結返回平台。",
    "",
    `訂閱信箱：${record.email}`,
    `訂閱地區：${location}`,
    "訂閱主題：",
    ...formatSubscriptionTopicLines(record.topics),
    "",
    ...buildSubscriptionConfirmCtaBlock(),
    "",
    "訂閱確認與災害警戒解除通知會立即發送；預報／警戒通知會在您完成「依設備定位選區」後持續發送。"
  ];
  if ((record.topics || []).includes("weather")) {
    lines.push("", "已同時啟用每日天氣預報 Email（每天一次）。", "", buildDailyWeatherEmailBody());
  }
  lines.push(
    "",
    "若要變更主題或取消訂閱，請回到通報平台調整後再次按下「儲存訂閱」。",
    SITE_PUBLIC_URL
  );
  return lines.join("\n");
}

function buildSubscriptionConfirmAutoresponse(record) {
  const location = getSubscriptionConfirmLocation(record) || "尚未指定地區";
  return [
    "您好，感謝您訂閱「停班停課＋即時災害通報平台」。",
    "這封信是訂閱確認信，請點選下方連結確認並返回通報平台。",
    "",
    `訂閱信箱：${record.email}`,
    `訂閱地區：${location}`,
    "訂閱主題：",
    ...formatSubscriptionTopicLines(record.topics),
    "",
    ...buildSubscriptionConfirmCtaBlock(),
    "",
    "若要變更主題或取消訂閱，請回到通報平台調整後再次按下「儲存訂閱」。"
  ].join("\n");
}

function buildSubscriberRecord(subscription = appState.subscription) {
  const location = getSubscriptionWeatherLocation();
  return {
    email: String(subscription?.email || "")
      .trim()
      .toLowerCase(),
    topics: Array.isArray(subscription?.topics) ? subscription.topics : [],
    city: subscription?.city || "",
    township: subscription?.township || "",
    lat: Number(location?.lat),
    lon: Number(location?.lon),
    updatedAt: new Date().toISOString()
  };
}

async function upsertSubscriberOnServer(record) {
  // Best-effort mirror to repo list used by the daily Actions job.
  // Requires public Contents API write token configured by the site owner.
  const token = String(window.JIN_SUBSCRIBE_GITHUB_TOKEN || "").trim();
  if (!token || !record?.email) {
    return { synced: false, reason: "no-token" };
  }
  const apiBase = "https://api.github.com/repos/jin358-cmd/weather/contents/data/subscribers.json";
  const currentResponse = await fetch(`${apiBase}?ref=main`, {
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`
    }
  });
  if (!currentResponse.ok) {
    throw new Error(`讀取訂閱名單失敗（HTTP ${currentResponse.status}）`);
  }
  const currentPayload = await currentResponse.json();
  const decoded = new TextDecoder().decode(
    Uint8Array.from(atob(String(currentPayload.content || "").replace(/\n/g, "")), (char) =>
      char.charCodeAt(0)
    )
  );
  let parsed;
  try {
    parsed = JSON.parse(decoded);
  } catch {
    parsed = { subscribers: [] };
  }
  const list = Array.isArray(parsed.subscribers) ? parsed.subscribers : [];
  const nextList = [
    ...list.filter((item) => String(item?.email || "").trim().toLowerCase() !== record.email),
    record
  ];
  const nextDoc = {
    updatedAt: new Date().toISOString(),
    subscribers: nextList
  };
  const encoded = btoa(unescape(encodeURIComponent(JSON.stringify(nextDoc, null, 2))));
  const saveResponse = await fetch(apiBase, {
    method: "PUT",
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: `chore: upsert weather subscriber ${record.email}`,
      content: encoded,
      sha: currentPayload.sha,
      branch: "main"
    })
  });
  if (!saveResponse.ok) {
    const raw = await saveResponse.text();
    throw new Error(`同步訂閱名單失敗（HTTP ${saveResponse.status}）${raw.slice(0, 120)}`);
  }
  return { synced: true };
}

async function notifyOwnerNewSubscriber(record, subscriberMessage = "") {
  try {
    await postFormSubmitMail(SUBSCRIBE_OWNER_INBOX, {
      name: record.email,
      email: record.email,
      _replyto: record.email,
      _subject: `【新訂閱】${record.email}`,
      _autoresponse: buildSubscriptionConfirmAutoresponse(record),
      確認動作: "點此確認並返回通報平台",
      確認連結: SITE_PUBLIC_URL,
      message: [
        "有新的即時訊息訂閱：",
        `Email：${record.email}`,
        `地區：${record.city || ""}${record.township || ""}`,
        `主題：${(record.topics || []).join(", ")}`,
        `座標：${record.lat}, ${record.lon}`,
        "",
        subscriberMessage || "已同步寄出訂閱確認信給訂閱者。"
      ].join("\n")
    });
  } catch {
    // Owner mirror is best-effort only.
  }
}

async function sendDailyWeatherEmail({ force = false } = {}) {
  const subscription = appState.subscription;
  const email = String(subscription?.email || "").trim();
  const topics = new Set(subscription?.topics || []);
  if (!email || !topics.has("weather")) {
    return { sent: false, reason: "not-subscribed" };
  }
  const today = getTaipeiDateKey();
  const lastSent = localStorage.getItem(DAILY_WEATHER_EMAIL_DATE_KEY);
  if (!force && lastSent === today) {
    return { sent: false, reason: "already-sent-today" };
  }
  if (!appState.weather?.current) {
    return { sent: false, reason: "no-weather" };
  }
  const locationLabel = appState.weather.label || getSubscriptionLocationLabel();
  const subject = `【每日天氣預報】${locationLabel}｜${today}`;
  await sendEmailToInbox(email, subject, buildDailyWeatherEmailBody());
  localStorage.setItem(DAILY_WEATHER_EMAIL_DATE_KEY, today);
  return { sent: true, date: today };
}

async function registerSubscriptionEmailDelivery(subscription) {
  const record = buildSubscriberRecord(subscription);
  const successBody = buildSubscriptionSuccessEmailBody(record);
  const confirmAutoresponse = buildSubscriptionConfirmAutoresponse(record);
  const results = {
    confirmationSent: false,
    dailySent: false,
    serverSynced: false,
    activationHint: false
  };
  try {
    await sendEmailToInbox(
      record.email,
      buildSubscriptionConfirmSubject(record),
      successBody,
      {
        _autoresponse: confirmAutoresponse,
        _next: SITE_PUBLIC_URL,
        確認動作: "點此確認並返回通報平台",
        確認連結: SITE_PUBLIC_URL
      }
    );
    results.confirmationSent = true;
    if ((record.topics || []).includes("weather")) {
      results.dailySent = true;
      localStorage.setItem(DAILY_WEATHER_EMAIL_DATE_KEY, getTaipeiDateKey());
    }
  } catch (error) {
    const message = String(error?.message || error);
    results.activationHint = /confirm|activation|驗證|確認|Make sure you confirm/i.test(message);
    if (!results.activationHint) {
      throw error;
    }
  }
  notifyOwnerNewSubscriber(record, successBody);
  try {
    const sync = await upsertSubscriberOnServer(record);
    results.serverSynced = Boolean(sync?.synced);
  } catch {
    results.serverSynced = false;
  }
  return results;
}

function getSubscriptionAirQualityMessage() {
  const locationLabel = getSubscriptionLocationLabel();
  if (!appState.airQuality) {
    return stampNotifySource("空氣品質", `【空氣品質】${locationLabel} 空氣品質資料暫時無法讀取。`);
  }
  return stampNotifySource(
    "空氣品質",
    `【空氣品質】${locationLabel} AQI ${Math.round(appState.airQuality.aqi)}，${getAqiLabel(appState.airQuality.aqi)}。`
  );
}

function inferNotifySource(message) {
  const stamped = String(message || "").match(/來源：([^｜|]+)[｜|]/);
  if (stamped) {
    return { source: stamped[1].trim(), url: "" };
  }
  if (/停班停課/.test(message)) {
    return { source: "行政院人事行政總處", url: CLOSURE_OFFICIAL_URL };
  }
  if (/氣象署警特報|特報/.test(message)) {
    return { source: "中央氣象署警特報", url: CWA_WARNING_PAGE };
  }
  if (/NCDR/.test(message)) {
    return { source: "NCDR 民生示警", url: NCDR_ALERT_PAGE };
  }
  if (/地震/.test(message)) {
    return { source: "中央氣象署地震", url: EARTHQUAKE_CWA_PAGE };
  }
  if (/積淹水/.test(message)) {
    return { source: "水利署積淹水", url: "" };
  }
  if (/停電/.test(message)) {
    return { source: "台電停電資訊", url: "" };
  }
  if (/停水/.test(message)) {
    return { source: "台水停水公告", url: "" };
  }
  if (/空氣/.test(message)) {
    return { source: "空氣品質", url: "" };
  }
  if (/天氣|降雨/.test(message)) {
    return { source: "即時天氣", url: "" };
  }
  return { source: "本機", url: SITE_PUBLIC_URL };
}

function recordNotifyHistoryForMessages(messages, { title = "災防通知", channel = "system" } = {}) {
  const city = citySelect?.value || appState.subscription?.city || "";
  (messages || []).forEach((body) => {
    const text = String(body || "").trim();
    if (!text) {
      return;
    }
    const inferred = inferNotifySource(text);
    recordNotifyHistory({
      source: inferred.source,
      sourceUrl: inferred.url,
      city,
      eventKey: notifyEventKey(text, city),
      title,
      body: text,
      channel
    });
  });
}

function buildSubscriptionNotificationMessages() {
  const topicBuilders = {
    closure: getSubscriptionClosureMessage,
    flood: getSubscriptionFloodMessage,
    "power-outage": getSubscriptionPowerOutageMessage,
    "water-outage": getSubscriptionWaterOutageMessage,
    weather: getSubscriptionWeatherMessage,
    air: getSubscriptionAirQualityMessage,
    earthquake: getSubscriptionEarthquakeMessage,
    "cwa-warning": getSubscriptionCwaWarningMessage
  };
  return getSelectedSubscriptionTopics()
    .map((topic) => topicBuilders[topic]?.())
    .map((text) => stripDroppedNcdrAlertText(text))
    .filter(Boolean);
}

async function sendRecoveryNotifications(messages) {
  if (!appState.subscription?.email) {
    return false;
  }
  const normalized = (messages || [])
    .map((item) => (typeof item === "string" ? { kind: "generic", text: item } : item))
    .filter((item) => item?.text);
  const unseen = filterUnsentRecoveryMessages(normalized);
  if (!unseen.length) {
    return false;
  }
  const permissionMode = await ensureNotificationPermission();
  if (!permissionMode) {
    return false;
  }

  const grouped = mergeNotifyItemsByCategory(unseen);
  const mergedLines = sortSubscriptionNoticeLines(grouped.flatMap((group) => group.lines));
  await showAppNotification(getMergedNotifyBatchTitle(mergedLines), mergedLines.join("\n"), {
    tag: `recovery-digest-${Date.now()}`,
    variant: "subscription"
  });

  const utilityCategories = new Set(["flood", "power", "water", "earthquake"]);
  const utilityLines = grouped
    .filter((group) => utilityCategories.has(group.category))
    .flatMap((group) => group.lines);
  if (utilityLines.length) {
    await queueUtilityAlertBurst(utilityLines.join("\n"), "utility-digest", { skipImmediate: true });
  }
  markRecoveryMessagesSent(unseen);
  recordNotifyHistoryForMessages(grouped.map((group) => group.lines.join("\n")), {
    title: "災害狀態更新",
    channel: permissionMode === "granted" ? "system" : "in-page"
  });
  return true;
}

function loadPendingUtilityAlerts() {
  try {
    const raw = JSON.parse(localStorage.getItem(PENDING_UTILITY_ALERT_STORAGE_KEY) || "[]");
    return Array.isArray(raw) ? raw : [];
  } catch {
    return [];
  }
}

function savePendingUtilityAlerts(items) {
  try {
    localStorage.setItem(PENDING_UTILITY_ALERT_STORAGE_KEY, JSON.stringify(items));
  } catch {
    /* ignore */
  }
}

function canDeliverSubscriptionAlerts() {
  return Boolean(appState.subscription?.email) || isForecastNotifyArmedByLocate();
}

async function queueUtilityAlertBurst(text, kind = "utility", { skipImmediate = false } = {}) {
  if (!canDeliverSubscriptionAlerts()) {
    return;
  }
  const now = Date.now();
  const burstId = `${kind}-${now}-${Math.random().toString(36).slice(2, 7)}`;
  const pending = loadPendingUtilityAlerts().filter((item) => item.dueAt > now - UTILITY_ALERT_REPEAT_MS);
  const start = skipImmediate ? 1 : 0;
  for (let i = start; i < UTILITY_ALERT_REPEAT_COUNT; i += 1) {
    pending.push({
      id: `${burstId}-${i + 1}`,
      kind,
      text,
      dueAt: now + i * UTILITY_ALERT_REPEAT_MS,
      sent: false
    });
  }
  savePendingUtilityAlerts(pending);
  await flushPendingUtilityAlerts();
}

async function flushPendingUtilityAlerts() {
  if (!canDeliverSubscriptionAlerts()) {
    return;
  }
  const now = Date.now();
  const pending = loadPendingUtilityAlerts();
  const due = pending.filter((item) => !item.sent && item.dueAt <= now);
  if (due.length) {
    const mergedLines = sortSubscriptionNoticeLines(
      mergeNotifyLinesByCategory(due.map((item) => String(item.text || "").trim()).filter(Boolean))
    );
    if (mergedLines.length) {
      const isRecovery = due.every((item) => isRecoveryNotificationKind(item.kind) || isRecoveryNotificationLine(item.text));
      await showAppNotification(
        isRecovery ? "災害警戒解除" : "公用事業警戒通報",
        `${mergedLines.join("\n")}\n（自動通報）`,
        {
          tag: `utility-digest-${now}`,
          variant: "subscription"
        }
      );
    }
    due.forEach((item) => {
      item.sent = true;
    });
  }
  const remaining = pending.filter((item) => !item.sent);
  savePendingUtilityAlerts(remaining);
  utilityAlertTimers.forEach((timer) => window.clearTimeout(timer));
  utilityAlertTimers = [];
  remaining.forEach((item) => {
    const delay = Math.max(0, item.dueAt - Date.now());
    const timer = window.setTimeout(() => {
      flushPendingUtilityAlerts().catch(() => {});
    }, delay + 50);
    utilityAlertTimers.push(timer);
  });
}

async function fetchWaterOutageData() {
  const { cityName, townshipName } = getActiveWaterOutageScope();
  if (!cityName) {
    appState.waterOutageItems = [];
    appState.waterOutageDataOk = true;
    appState.waterOutageMetaText = "";
    updateWaterOutageMapLayer();
    return [];
  }
  if (!townshipName) {
    appState.waterOutageItems = [];
    appState.waterOutageDataOk = true;
    appState.waterOutageMetaText = `${cityName}：請選定鄉鎮市區後顯示當區停水（不發全縣市通知）`;
    updateWaterOutageMapLayer();
    return [];
  }
  const encodedCity = encodeURIComponent(cityName);
  const endpoint = `https://r.jina.ai/https://web.water.gov.tw/wateroff/city/${encodedCity}/index.html`;
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const markdown = await response.text();
    const items = [];
    const cardPattern =
      /停水期間\s*起\s*([0-9/\s:]+)\s*迄\s*([0-9/\s:]+)\s*停水區域\s*([^\n]*?)\s*停水原因\s*([^\n]*?)\s*客服專線[\s\S]*?案件編號\s*([0-9]+)/g;
    let match;
    while ((match = cardPattern.exec(markdown)) && items.length < 40) {
      const area = String(match[3] || "").trim();
      const reason = String(match[4] || "").trim();
      const id = String(match[5] || "").trim();
      const start = String(match[1] || "").trim();
      const end = String(match[2] || "").trim();
      if (!id) {
        continue;
      }
      items.push({
        id,
        city: cityName,
        township: townshipName,
        area,
        reason,
        period: `${start}～${end}`,
        summary: `${area}${reason ? `（${reason.slice(0, 36)}）` : ""}`
      });
    }
    const localItems = filterWaterOutagesForTownship(items, cityName, townshipName);
    appState.waterOutageItems = localItems;
    appState.waterOutageDataOk = true;
    appState.waterOutageMetaText = `${cityName}${townshipName} 停水公告 ${localItems.length} 筆（僅本鄉鎮｜全市抓取 ${items.length} 筆）`;
    updateWaterOutageMapLayer();
    return localItems;
  } catch (error) {
    appState.waterOutageDataOk = false;
    appState.waterOutageMetaText = `停水資料暫時無法更新：${error.message}`;
    updateWaterOutageMapLayer();
    return appState.waterOutageItems || [];
  }
}

function getWaterOutageMapPoint() {
  const township = getSelectedTownship();
  if (township && Number.isFinite(Number(township.lat)) && Number.isFinite(Number(township.lon))) {
    return township;
  }
  const locate = getMapLocatePoint();
  if (locate && Number.isFinite(locate.lat) && Number.isFinite(locate.lon)) {
    return {
      lat: locate.lat,
      lon: locate.lon,
      city: citySelect?.value || "",
      town: townshipSelect?.value || ""
    };
  }
  const city = CITY_LOCATIONS.find((item) => item.name === citySelect?.value);
  if (city && Number.isFinite(city.lat) && Number.isFinite(city.lon)) {
    return {
      lat: city.lat,
      lon: city.lon,
      city: city.name,
      town: townshipSelect?.value || ""
    };
  }
  return null;
}

function updateWaterOutageMapLayer() {
  if (!warningMap) {
    return;
  }
  if (!mapWaterOutageLayer) {
    mapWaterOutageLayer = L.layerGroup();
  }
  mapWaterOutageLayer.clearLayers();
  mapLegendMarkers["water-outage"] = [];
  const items = appState.waterOutageItems || [];
  const point = items.length ? getWaterOutageMapPoint() : null;
  if (point) {
    const marker = L.circleMarker(
      [point.lat, point.lon],
      getMapCircleMarkerOptions({
        pane: "waterPane",
        radius: 8,
        color: "#115e59",
        fillColor: "#0f766e",
        fillOpacity: 0.88,
        weight: 2
      })
    );
    const lines = items
      .slice(0, 4)
      .map((item) => `<strong>${escapeMapLegendHtml(item.area || "停水公告")}</strong><br/>${escapeMapLegendHtml(item.period || "")}<br/>${escapeMapLegendHtml(item.reason || "")}`)
      .join("<hr/>");
    marker.bindPopup(
      `${lines}<br/>來源：台灣自來水公司停水公告`,
      getMapPopupOptions({ className: "disaster-map-popup" })
    );
    marker._legendPlace = `${point.city || ""}${point.town || ""}`.trim() || "停水公告";
    mapLegendMarkers["water-outage"].push(marker);
  }
  addVisibleLegendMarkers(mapWaterOutageLayer, ["water-outage"]);
  syncMapLayerVisibility("water-outage");
  syncMapLegendState();
}

function getSubscriptionWaterOutageMessage() {
  const { cityName, townshipName } = getActiveWaterOutageScope();
  const locationLabel = townshipName ? `${cityName}${townshipName}` : getSubscriptionLocationLabel();
  const items = appState.waterOutageItems || [];
  if (!townshipName) {
    return stampNotifySource(
      "台水停水公告",
      `【停水監測】${cityName || locationLabel}：請選定鄉鎮市區後再顯示當區停水（不發全縣市通知）。`
    );
  }
  if (!items.length) {
    return stampNotifySource("台水停水公告", `【停水監測】${locationLabel} 目前無本鄉鎮停水／降壓公告。`);
  }
  const top = items[0];
  return stampNotifySource(
    "台水停水公告",
    `【停水公告】${locationLabel}：${top.summary || top.area || "有停水案件"}（${top.period || "期間詳見台水"}）。`
  );
}

function getSubscriptionTyphoonMessage() {
  const locationLabel = getSubscriptionLocationLabel();
  const official = appState.typhoonOfficial;
  const typhoon = appState.typhoon;
  const name = official?.name ? `（${official.name}）` : "";
  if (official?.hasLandWarning) {
    return `【颱風警報】中央氣象署已發布陸上颱風警報${name}，${locationLabel} 請依地方政府指示防災。`;
  }
  if (official?.hasWarning) {
    return `【颱風警報】中央氣象署已發布颱風警報${name}，${locationLabel} 請持續留意路徑與風雨。`;
  }
  if (typhoon?.level === "高") {
    return `【颱風警戒】${locationLabel} 颱風風險指數 ${typhoon.score}（高），請預先備妥防災物資。`;
  }
  if (typhoon?.level === "中") {
    return `【颱風注意】${locationLabel} 颱風風險指數 ${typhoon.score}（中），請關注後續警戒資訊。`;
  }
  return `【颱風監測】${locationLabel} 目前無陸上颱風警報。`;
}

function hasActiveNationalEarthquake() {
  return (appState.earthquakes || []).some(
    (quake) =>
      isNationalEarthquakeAlert(quake) &&
      Date.now() - quake.timeMs <= EARTHQUAKE_RECENT_HOURS * 60 * 60 * 1000
  );
}

function hasActiveFloodWarningStatus() {
  const location = getSubscriptionWeatherLocation();
  const nearby = location ? getNearbyFloodPoints(location, FLOOD_SUBSCRIPTION_RADIUS_KM) : [];
  return nearby.some((point) => isFloodWarningDepth(point.depthCm));
}

function hasActiveClosureAlert() {
  const cityName = getSubscriptionCityName();
  const closure = cityName ? appState.closureRows.find((row) => row.city === cityName) : null;
  return Boolean(
    closure && (closure.message.includes("停止上班") || closure.message.includes("停止上課"))
  );
}

function hasActiveDisasterAlertStatus() {
  return (
    Boolean(appState.typhoonOfficial?.hasLandWarning || appState.typhoonOfficial?.hasWarning) ||
    hasActiveNationalEarthquake() ||
    hasActiveFloodWarningStatus() ||
    hasActiveClosureAlert()
  );
}

function hasActiveUtilityAlertStatus() {
  return getNearbyPowerOutages().length > 0 || (appState.waterOutageItems || []).length > 0;
}

function getSubscriptionNoticeLineRank(line) {
  const text = String(line || "");
  if (/【停班停課】/.test(text) && !/停班停課解除|已解除停班停課/.test(text)) {
    return 0;
  }
  if (/【積淹水警示】|【積淹水監測】|【積淹水警戒】/.test(text)) {
    return 1;
  }
  return 2;
}

function sortSubscriptionNoticeLines(lines = []) {
  return lines
    .map((line, index) => ({ line, index }))
    .sort((a, b) => getSubscriptionNoticeLineRank(a.line) - getSubscriptionNoticeLineRank(b.line) || a.index - b.index)
    .map((item) => item.line);
}

function buildAlertStatusDigestMessages() {
  const topics = new Set(getSelectedSubscriptionTopics());
  const disasterLines = [];
  if (topics.has("closure")) {
    disasterLines.push(getSubscriptionClosureMessage());
  }
  if (topics.has("flood")) {
    disasterLines.push(getSubscriptionFloodMessage());
  }
  disasterLines.push(getSubscriptionTyphoonMessage());
  if (topics.has("earthquake")) {
    disasterLines.push(getSubscriptionEarthquakeMessage());
  }

  const utilityLines = [];
  UTILITY_STATUS_TOPICS.forEach((topic) => {
    if (!topics.has(topic)) {
      return;
    }
    if (topic === "power-outage") {
      utilityLines.push(getSubscriptionPowerOutageMessage());
      return;
    }
    if (topic === "water-outage") {
      utilityLines.push(getSubscriptionWaterOutageMessage());
    }
  });
  if (!utilityLines.length) {
    utilityLines.push(getSubscriptionPowerOutageMessage(), getSubscriptionWaterOutageMessage());
  }

  const messages = [];
  if (!hasActiveDisasterAlertStatus()) {
    messages.push("【災害警戒】目前無災害警戒。");
  }
  messages.push(...disasterLines);
  if (!hasActiveUtilityAlertStatus()) {
    messages.push("【公有事業】目前恢復正常。");
  }
  messages.push(...utilityLines);
  return sortSubscriptionNoticeLines(messages.map((text) => String(text || "").trim()).filter(Boolean));
}

async function notifyManualRefreshAlertStatus() {
  const digest = buildAlertStatusDigestMessages();
  const extras = buildSubscriptionNotificationMessages().filter((line) => !digest.includes(line));
  return sendSubscriptionNotification({
    force: true,
    inPage: !document.hidden,
    messages: sortSubscriptionNoticeLines([...digest, ...extras]),
    title: "災害警戒通知狀態"
  });
}

async function publishSubscriptionSavedNotification({ mailStatus = "" } = {}) {
  if (!appState.subscription?.email) {
    return false;
  }
  await ensureNotificationPermission();
  const locationLabel = getSubscriptionLocationLabel();
  const topicLabels = getSelectedSubscriptionTopics().map(
    (topic) => SUBSCRIPTION_TOPIC_LABELS[topic] || topic
  );
  const locateArmed = isForecastNotifyArmedByLocate();
  const lines = [
    "您的即時訊息訂閱已儲存，通知已發布。",
    locationLabel ? `訂閱地區：${locationLabel}` : "",
    topicLabels.length ? `訂閱主題：${topicLabels.join("、")}` : "尚未勾選主題。",
    mailStatus,
    locateArmed
      ? "定位已完成，後續警戒與解除通知會持續發送。"
      : "完成「依設備定位選區」後，預報／警戒通知會持續發送；災害警戒解除時仍會立即通知。"
  ].filter(Boolean);
  await showAppNotification("訂閱通知已發布", lines.join("\n"), {
    tag: `subscription-saved-${Date.now()}`,
    variant: "subscription"
  });
  return true;
}

async function sendSubscriptionNotification({
  force = false,
  inPage = true,
  messages: customMessages,
  title = "預報訂閱通知"
} = {}) {
  if (!appState.subscription?.email) {
    renderSubscriptionStatus("請先輸入 Email 並儲存訂閱。");
    return false;
  }
  if (!isForecastNotifyArmedByLocate()) {
    renderSubscriptionStatus(getForecastNotifyGateMessage());
    updateNotificationHint(getForecastNotifyGateMessage());
    return false;
  }
  const permissionMode = await ensureNotificationPermission();
  renderNotifyPermissionStatus();
  if (!permissionMode) {
    return false;
  }
  const rawMessages = (Array.isArray(customMessages) && customMessages.length
    ? customMessages
    : buildSubscriptionNotificationMessages()
  )
    .map((text) => stripDroppedNcdrAlertText(text))
    .filter(Boolean);
  const orderedMessages = sortSubscriptionNoticeLines(mergeNotifyLinesByCategory(rawMessages));
  if (!orderedMessages.length) {
    renderSubscriptionStatus("請先勾選至少一項訂閱主題。");
    return false;
  }
  if (!force && Date.now() - appState.lastNotifiedAt < getAutoRefreshIntervalMs() - 5000) {
    return false;
  }
  const city = citySelect?.value || appState.subscription?.city || "";
  const messages = sortSubscriptionNoticeLines(filterCooldownMessages(orderedMessages, city, { force }));
  if (!messages.length) {
    return false;
  }
  if (!shouldSendNotificationDigest(messages, { force })) {
    return false;
  }

  const body = messages.join("\n");

  if (inPage) {
    showInPageAlert(title, body, {
      timeoutMs: Math.min(20000, 8000 + messages.length * 800),
      fullscreen: true,
      variant: "subscription"
    });
  }
  const deviceShown = await notifySubscriptionMessagesToDevice(messages, { title, persist: true });
  persistSubscriptionForBackground(appState.subscription).catch(() => {});
  recordNotifyHistoryForMessages(messages, {
    title,
    channel: permissionMode === "granted" && deviceShown ? "system" : "in-page"
  });

  localStorage.setItem(NOTIFICATION_DIGEST_STORAGE_KEY, getNotificationDigest(messages));
  appState.lastNotifiedAt = Date.now();
  const channelHint =
    permissionMode === "granted" && deviceShown ? "系統通知＋頁面提醒" : "頁面內即時提醒";
  renderSubscriptionStatus(`訂閱${messages.length}項通知(${channelHint})`);
  updateNotificationHint();
  return true;
}

async function maybeNotifySubscribers(triggerSource, recoveryMessages = [], options = {}) {
  if (triggerSource && typeof triggerSource === "object" && !Array.isArray(triggerSource)) {
    options = { ...triggerSource, ...options };
    triggerSource = options.triggerSource || "manual";
    if (Array.isArray(options.recoveryMessages)) {
      recoveryMessages = options.recoveryMessages;
    }
  }
  if (recoveryMessages.length) {
    await sendRecoveryNotifications(recoveryMessages);
  }
  if (!appState.subscription?.email) {
    return;
  }
  if (!isForecastNotifyArmedByLocate()) {
    return;
  }
  // Daily weather email: once per Taipei calendar day, independent of browser notifications.
  try {
    await sendDailyWeatherEmail({ force: false });
  } catch (error) {
    console.warn("每日天氣預報 Email 發送失敗：", error);
  }
  if (options.force) {
    await notifyManualRefreshAlertStatus();
  } else {
    await sendSubscriptionNotification({
      inPage: triggerSource !== "auto" && !document.hidden && !recoveryMessages.length
    });
  }
  const digestLines = [
    ...(recoveryMessages || []).map((item) => (typeof item === "string" ? item : item?.text)),
    ...(options.force ? buildAlertStatusDigestMessages() : buildSubscriptionNotificationMessages())
  ]
    .map((text) => String(text || "").trim())
    .filter(Boolean);
  if (digestLines.length) {
    persistSubscriptionDigestForBackground(digestLines).catch(() => {});
  }
  persistSubscriptionForBackground(appState.subscription).catch(() => {});
}

function getShelterFullAddress(shelter = {}) {
  return `${shelter.city || ""}${shelter.town || ""}${shelter.village || ""}${shelter.address || ""}`.trim();
}

function getGoogleMapsSearchUrl(lat, lon, name = "", address = "") {
  if (Number.isFinite(Number(lat)) && Number.isFinite(Number(lon))) {
    return `https://www.google.com/maps/search/?api=1&query=${Number(lat)},${Number(lon)}`;
  }
  const query = [name, address].map((part) => String(part || "").trim()).filter(Boolean).join(" ");
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query || "台灣")}`;
}

function buildShelterPopupHtml(shelter) {
  const mapsUrl = getGoogleMapsSearchUrl(shelter.lat, shelter.lon, shelter.name, getShelterFullAddress(shelter));
  const place = `${shelter.city || ""}${shelter.town || ""}${shelter.village || ""}`;
  const space = [
    shelter.indoor ? "室內" : "",
    shelter.outdoor ? "室外" : "",
    shelter.weaker ? "適合避難弱者" : ""
  ]
    .filter(Boolean)
    .join("／");
  return `
    <div class="shelter-map-popup">
      <strong>避難場所</strong>
      <p>${escapeMapLegendHtml(shelter.name)}</p>
      <p>${escapeMapLegendHtml(place)}</p>
      ${shelter.address ? `<p>${escapeMapLegendHtml(shelter.address)}</p>` : ""}
      ${shelter.disasters ? `<p>適用：${escapeMapLegendHtml(shelter.disasters)}</p>` : ""}
      ${shelter.capacity ? `<p>預計收容：${shelter.capacity} 人</p>` : ""}
      ${space ? `<p>${escapeMapLegendHtml(space)}</p>` : ""}
      ${shelter.phone ? `<p>聯絡：${escapeMapLegendHtml(shelter.phone)}</p>` : ""}
      <a class="map-gmaps-link" href="${mapsUrl}" target="_blank" rel="noopener noreferrer">Google 地圖</a>
      <p class="shelter-map-source">來源：內政部消防署／各縣市政府核定</p>
    </div>
  `;
}

function getShelterMapZoom() {
  const zoom = warningMap?.getZoom?.();
  return Number.isFinite(zoom) ? zoom : TAIWAN_MAP_ZOOM;
}

function getShelterMarkerRadius() {
  const zoom = getShelterMapZoom();
  if (zoom <= 7) {
    return 3;
  }
  if (zoom <= 9) {
    return 4;
  }
  if (zoom <= 11) {
    return 6;
  }
  return 7;
}

function getSheltersForMap() {
  return declutterMapItems(
    (shelterDataset?.shelters || []).filter(
      (shelter) => Number.isFinite(shelter.lat) && Number.isFinite(shelter.lon)
    ),
    (shelter) => ({ lat: shelter.lat, lon: shelter.lon })
  );
}

let shelterZoomTimer = 0;
let mapPopupHoldUntil = 0;
let mapPopupIsOpen = false;
let pendingAlertLayerRefresh = false;
function resizeShelterMarkers() {
  const icon = getShelterMarkerIcon();
  (mapLegendMarkers.shelter || []).forEach((marker) => {
    if (typeof marker.setIcon === "function") {
      marker.setIcon(icon);
    }
  });
}

function scheduleShelterLayerByZoom() {
  window.clearTimeout(shelterZoomTimer);
  shelterZoomTimer = window.setTimeout(() => {
    if (isMapPopupHoldActive()) {
      return;
    }
    if (mapLegendMarkers.shelter?.length) {
      resizeShelterMarkers();
      return;
    }
    if (shelterDataset?.shelters?.length) {
      updateShelterMapLayer();
    }
  }, 160);
}

function getShelterMarkerIcon() {
  return L.divIcon({
    className: "shelter-map-marker",
    html: '<span class="shelter-map-marker-dot" aria-hidden="true"></span>',
    iconSize: [18, 18],
    iconAnchor: [9, 9]
  });
}

function updateShelterMapLayer() {
  if (!warningMap) {
    return;
  }
  if (!mapShelterLayer) {
    mapShelterLayer = L.layerGroup();
  }
  mapShelterLayer.clearLayers();
  mapLegendMarkers.shelter = [];
  getSheltersForMap().forEach((shelter) => {
    if (!Number.isFinite(shelter.lat) || !Number.isFinite(shelter.lon)) {
      return;
    }
    const marker = L.marker([shelter.lat, shelter.lon], {
      pane: "shelterPane",
      keyboard: false,
      icon: getShelterMarkerIcon(),
      title: shelter.name || "避難場所",
      zIndexOffset: 120
    });
    marker.bindPopup(buildShelterPopupHtml(shelter), getMapPopupOptions({ className: "disaster-map-popup" }));
    marker._legendPlace = `${shelter.city || ""}${shelter.town || ""}`.trim() || shelter.name;
    mapLegendMarkers.shelter.push(marker);
  });
  addVisibleLegendMarkers(mapShelterLayer, ["shelter"]);
  syncMapLayerVisibility("shelter-points");
  syncMapLegendState();
}

async function loadShelterDataset() {
  if (shelterDataset?.shelters?.length) {
    updateShelterMapLayer();
    return shelterDataset;
  }
  const response = await fetch(SHELTER_DATA_URL);
  if (!response.ok) {
    throw new Error(`避難場所資料讀取失敗：${response.status}`);
  }
  shelterDataset = await response.json();
  updateShelterMapLayer();
  return shelterDataset;
}

function getMapLayerInstance(layerKey) {
  if (layerKey === "power-outage") {
    return mapPowerOutageLayer;
  }
  if (layerKey === "flood-warning") {
    return mapFloodLayer;
  }
  if (layerKey === "water-outage") {
    return mapWaterOutageLayer;
  }
  if (layerKey === "closure-points") {
    return mapClosureLayer;
  }
  if (layerKey === "earthquake-points") {
    return mapEarthquakeLayer;
  }
  if (layerKey === "shelter-points") {
    return mapShelterLayer;
  }
  if (layerKey === "cctv-points") {
    return mapCameraLayer;
  }
  if (layerKey === "city-focus") {
    return mapCityFocusLayer;
  }
  return null;
}

function applyMapLayerOrder() {
  if (!warningMap) {
    return;
  }
  mapLayerOrder.forEach((layerKey) => {
    const paneName = mapLayerConfig[layerKey]?.pane;
    if (!paneName) {
      return;
    }
    const pane = warningMap.getPane(paneName);
    if (pane) {
      pane.style.zIndex = String(MAP_PANE_ZINDEX[layerKey] || 650);
    }
  });
  const cameraPane = warningMap.getPane("cameraPane");
  if (cameraPane) {
    cameraPane.style.zIndex = String(MAP_PANE_ZINDEX["cctv-points"]);
    cameraPane.style.overflow = "visible";
  }
}

function syncMapLayerVisibility(layerKey) {
  if (!warningMap) {
    return;
  }
  const layer = getMapLayerInstance(layerKey);
  if (!layer) {
    return;
  }
  const shouldShow = Boolean(mapLayerVisibility[layerKey]);
  const hasLayer = warningMap.hasLayer(layer);
  if (shouldShow && !hasLayer) {
    layer.addTo(warningMap);
  }
  if (!shouldShow && hasLayer) {
    warningMap.removeLayer(layer);
  }
  updateMapLegendLocationPins();
}

function renderLayerControl() {
  if (!mapLayerList) {
    return;
  }
  mapLayerList.innerHTML = "";
  mapLayerOrder.forEach((layerKey) => {
    if (mapLayerConfig[layerKey]?.hiddenInControl) {
      return;
    }
    const item = document.createElement("li");
    item.className = "layer-item";
    item.dataset.layerKey = layerKey;
    item.innerHTML = `
      <label>${mapLayerConfig[layerKey].label}</label>
      <input type="checkbox" ${mapLayerVisibility[layerKey] ? "checked" : ""} aria-label="${mapLayerConfig[layerKey].label}" />
    `;

    const checkbox = item.querySelector("input");
    checkbox?.addEventListener("change", (event) => {
      mapLayerVisibility[layerKey] = Boolean(event.target.checked);
      syncMapLayerVisibility(layerKey);
    });
    mapLayerList.append(item);
  });
  applyMapLayerOrder();
}

function buildFloodPointStyle(depthCm) {
  const level = getFloodLevelByDepth(depthCm);
  if (level >= 4) {
    return { color: "#790000", fillColor: "#d00000", fillOpacity: 0.85, radius: 9, weight: 2 };
  }
  if (level === 3) {
    return { color: "#8a1c00", fillColor: "#e85d04", fillOpacity: 0.8, radius: 8, weight: 2 };
  }
  if (level === 2) {
    return { color: "#9c5800", fillColor: "#ffba08", fillOpacity: 0.78, radius: 7, weight: 2 };
  }
  return { color: "#616161", fillColor: "#ffd166", fillOpacity: 0.72, radius: 6, weight: 1 };
}

function updateFloodMapLayer() {
  if (!warningMap) {
    return;
  }
  if (mapFloodLayer && warningMap.hasLayer(mapFloodLayer)) {
    warningMap.removeLayer(mapFloodLayer);
  }
  mapFloodLayer = L.layerGroup();
  mapLegendMarkers["flood-4"] = [];
  mapLegendMarkers["flood-3"] = [];
  mapLegendMarkers["flood-2"] = [];
  mapLegendMarkers["flood-1"] = [];

  declutterMapItems(
    appState.floodLivePoints,
    (point) => ({
      lat: point.lat,
      lon: point.lon
    }),
    MAP_ALERT_LAYER_DECLUTTER
  ).forEach((point) => {
    const marker = L.circleMarker(
      [point.lat, point.lon],
      getMapCircleMarkerOptions({
        pane: "floodPane",
        ...buildFloodPointStyle(point.depthCm)
      })
    );
    marker.bindPopup(
      `
        <strong>${formatFloodStationLabel(point)}</strong><br/>
        ${point.county || ""}${point.town || ""}<br/>
        警示等級：${point.level}<br/>
        即時水深：${point.depthCm} cm<br/>
        更新時間：${point.updatedAt || "-"}<br/>
        來源：水利署 IoW 即時感測（智慧尺標）
      `,
      getMapPopupOptions()
    );
    marker._legendPlace = `${point.county || ""}${point.town || ""}`.trim();
    const level = Number(point.level) || getFloodLevelByDepth(point.depthCm);
    const key = `flood-${Math.min(4, Math.max(1, level))}`;
    mapLegendMarkers[key]?.push(marker);
  });
  addVisibleLegendMarkers(mapFloodLayer, ["flood-4", "flood-3", "flood-2", "flood-1"]);

  syncMapLayerVisibility("flood-warning");
  updateFloodLayerMetaText();
  syncMapLegendState();
}

function getFloodMarkersOnMap() {
  return ["flood-4", "flood-3", "flood-2", "flood-1"].flatMap((key) =>
    isMapCategoryVisible(key) ? mapLegendMarkers[key] || [] : []
  );
}

function updateFloodLayerMetaText() {
  const floodedCount = appState.floodLivePoints.length;
  const stationCount = appState.floodStations.length;
  appState.floodMetaText =
    floodedCount > 0
      ? `即時積水感測點 ${floodedCount} 處（測站總數 ${stationCount}）。`
      : `目前全台 IoW 測站未回報積水（測站總數 ${stationCount}）。`;

  const note = document.querySelector("#floodLayerMeta");
  if (note) {
    note.textContent = `${appState.floodMetaText} 顏色越深代表水深越高。`;
  }
  syncMapFloodCountBadge();
}

function syncMapFloodCountBadge() {
  /* 右下角即時感測點已改由圖層與圖例顯示 */
}

function focusAllFloodMarkers() {
  if (!warningMap) {
    return;
  }
  beginMapPopupHold(4000);
  const markers = getFloodMarkersOnMap();
  if (!markers.length) {
    return;
  }
  try {
    fitMapToMarkerLatLngs(getMarkersLatLngs(markers), { maxZoom: 12 });
  } catch {
    /* keep going so the popup can still open */
  }
  const target = markers[0];
  let opened = false;
  const open = () => {
    if (opened) {
      return;
    }
    opened = true;
    openMarkerPopupSafely(target);
  };
  warningMap.once("moveend", open);
  window.setTimeout(open, 360);
}

async function loadFloodStations() {
  const response = await fetch("./data/flood_stations.json");
  if (!response.ok) {
    throw new Error(`淹水測站資料讀取失敗：${response.status}`);
  }
  const payload = await response.json();
  appState.floodStations = (payload.stations ?? []).map((station) => ({
    ...station,
    name: decodeHtmlEntities(station?.name)
  }));
}

async function fetchLiveFloodData() {
  if (!appState.floodStations.length) {
    await loadFloodStations();
  }
  const response = await fetch(FLOOD_LATEST_API);
  if (!response.ok) {
    throw new Error(`即時淹水資料讀取失敗：${response.status}`);
  }
  const latestRows = await response.json();
  const stationMap = new Map(appState.floodStations.map((station) => [station.sensorid, station]));
  const livePoints = [];
  const freshnessLimitMs = 36 * 60 * 60 * 1000;
  const nowMs = Date.now();

  latestRows.forEach((row) => {
    const depthCm = Number(row.latestvalue ?? 0);
    if (!(depthCm > 0) || depthCm >= 500) {
      return;
    }
    const updatedMs = Date.parse(row.timestamp || "");
    if (Number.isFinite(updatedMs) && nowMs - updatedMs > freshnessLimitMs) {
      return;
    }
    const station = stationMap.get(row.sensorid);
    if (!station) {
      return;
    }
    livePoints.push({
      sensorid: row.sensorid,
      name: station.name,
      county: station.county,
      town: station.town,
      lat: station.lat,
      lon: station.lon,
      depthCm,
      level: getFloodLevelByDepth(depthCm),
      updatedAt: row.timestamp
    });
  });

  appState.floodLivePoints = livePoints.sort((a, b) => b.depthCm - a.depthCm);
  appState.floodFeatures = livePoints.map((point) => ({
    type: "Feature",
    properties: {
      areaName: formatFloodStationLabel(point),
      level: point.level,
      waterDepthCm: point.depthCm,
      updatedAt: point.updatedAt,
      note: "水利署 IoW 即時感測"
    },
    geometry: {
      type: "Point",
      coordinates: [point.lon, point.lat]
    }
  }));
  updateFloodMapLayer();
}

async function fetchTyphoonOfficial() {
  const [newsResponse, warnResponse] = await Promise.all([
    fetch(TYPHOON_NEWS_MIRROR),
    fetch(TYPHOON_WARN_MIRROR)
  ]);
  if (!newsResponse.ok || !warnResponse.ok) {
    throw new Error("中央氣象署颱風資料讀取失敗");
  }
  const newsMarkdown = await newsResponse.text();
  const warnMarkdown = await warnResponse.text();
  appState.typhoonOfficial = parseTyphoonOfficialText(newsMarkdown, warnMarkdown);
}

function fitMapToTaiwan(animate = false) {
  if (!warningMap) {
    return;
  }
  ignoreShelterZoomEvents += 1;
  warningMap.invalidateSize();
  warningMap.fitBounds(TAIWAN_MAP_BOUNDS, {
    padding: [18, 18],
    maxZoom: 8,
    animate
  });
  window.setTimeout(() => {
    ignoreShelterZoomEvents = Math.max(0, ignoreShelterZoomEvents - 1);
  }, 450);
}

function fitMapToLocateRange(animate = false) {
  const focus = getMapLocatePoint();
  if (!warningMap || !focus) {
    fitMapToTaiwan(animate);
    return;
  }
  ignoreShelterZoomEvents += 1;
  warningMap.invalidateSize();
  const bounds = L.latLng(focus.lat, focus.lon).toBounds(MAP_LOCATE_VIEW_DIAMETER_M);
  warningMap.fitBounds(bounds, {
    padding: [20, 20],
    maxZoom: 16,
    animate
  });
  window.setTimeout(() => {
    ignoreShelterZoomEvents = Math.max(0, ignoreShelterZoomEvents - 1);
  }, 450);
}

function scheduleFitMapToLocateRange({ animate = false, attempts = 3 } = {}) {
  if (!warningMap) {
    return;
  }
  window.clearTimeout(fitLocateRangeTimer);
  let left = Math.max(1, Number(attempts) || 1);
  const run = () => {
    if (!warningMap || left <= 0) {
      return;
    }
    warningMap.invalidateSize();
    fitMapToLocateRange(animate && left === Math.max(1, Number(attempts) || 1));
    left -= 1;
    const size = warningMap.getSize?.();
    if (size && size.x > 40 && size.y > 40 && left <= 0) {
      pendingMapLocateSync = false;
    }
    if (left > 0) {
      fitLocateRangeTimer = window.setTimeout(run, 280);
    }
  };
  run();
}

function isAlwaysOnMapCategory(key) {
  return ALWAYS_ON_MAP_CATEGORIES.has(key);
}

function isMapCategoryVisible(key) {
  if (isAlwaysOnMapCategory(key)) {
    return true;
  }
  return mapCategoryVisibility[key] !== false;
}

function getSelectedCityClosureRow() {
  const cityName = citySelect?.value || "";
  return (appState.closureRows || []).find((item) => item.city === cityName) || null;
}

function hasSelectedCityClosureAnnouncement() {
  const row = getSelectedCityClosureRow();
  return Boolean(row && isClosureStopMessage(row.message));
}

function isDisasterLegendActive(key) {
  if (key === "closure") {
    return hasSelectedCityClosureAnnouncement();
  }
  return (mapLegendMarkers[key] || []).length > 0;
}

const legendItemHomes = {};

function rememberLegendItemHome(item) {
  const key = item?.dataset?.legendKey;
  if (!key || legendItemHomes[key]) {
    return;
  }
  const row = item.closest("li");
  if (!row?.parentElement) {
    return;
  }
  legendItemHomes[key] = { list: row.parentElement };
}

function getLegendPromoteList(legend) {
  return legend.querySelector("#legendActiveList");
}

function syncLegendActivePlacement(legend) {
  const activeList = legend.querySelector("#legendActiveList");
  const activeBlock = legend.querySelector("#legendActiveBlock");
  if (!activeList) {
    return 0;
  }
  legend.querySelectorAll("[data-legend-key]").forEach((item) => {
    if (DISASTER_LEGEND_KEYS.includes(item.dataset.legendKey)) {
      rememberLegendItemHome(item);
    }
  });
  DISASTER_LEGEND_KEYS.forEach((key) => {
    const item = legend.querySelector(`[data-legend-key="${key}"]`);
    const row = item?.closest("li");
    if (!item || !row) {
      return;
    }
    const promoteList = getLegendPromoteList(legend);
    if (isDisasterLegendActive(key) && isMapCategoryVisible(key) && promoteList) {
      if (row.parentElement !== promoteList) {
        promoteList.append(row);
      }
      return;
    }
    const home = legendItemHomes[key];
    if (home?.list && row.parentElement !== home.list) {
      home.list.append(row);
    }
  });
  DISASTER_LEGEND_KEYS.forEach((key) => {
    const item = activeList.querySelector(`[data-legend-key="${key}"]`);
    const row = item?.closest("li");
    if (row) {
      activeList.append(row);
    }
  });
  if (activeBlock) {
    activeBlock.hidden = activeList.children.length === 0;
  }
  legend.querySelectorAll("#legendDisasterGroup .legend-group-label").forEach((label) => {
    const list = label.nextElementSibling;
    const hasRows = Boolean(list && list.matches("ul") && list.children.length);
    label.hidden = !hasRows;
    if (list?.matches("ul")) {
      list.hidden = !hasRows;
    }
  });
  return DISASTER_LEGEND_KEYS.filter((key) => isDisasterLegendActive(key) && isMapCategoryVisible(key)).length;
}

function applyAutoDisasterLayerVisibility() {
  DISASTER_LEGEND_KEYS.forEach((key) => {
    if (mapCategoryUserOff.has(key)) {
      mapCategoryVisibility[key] = false;
      return;
    }
    mapCategoryVisibility[key] = isDisasterLegendActive(key);
  });
  syncMapLayerVisibilityFromCategories();
}

function addVisibleLegendMarkers(layer, keys) {
  if (!layer) {
    return;
  }
  applyAutoDisasterLayerVisibility();
  keys.forEach((key) => {
    if (!isMapCategoryVisible(key)) {
      return;
    }
    (mapLegendMarkers[key] || []).forEach((marker) => {
      marker._legendKey = key;
      const popup = marker.getPopup?.();
      if (popup && marker._popupHtml == null) {
        marker._popupHtml = popup.getContent();
      }
      if (!layer.hasLayer(marker)) {
        layer.addLayer(marker);
      }
    });
  });
}

function unwrapLegendLayerSwitch(item) {
  const row = item?.parentElement?.classList.contains("legend-item-row")
    ? item.parentElement
    : item?.closest(".legend-item-row");
  if (!row || !item) {
    return;
  }
  const parent = row.parentElement;
  if (!parent) {
    return;
  }
  parent.insertBefore(item, row);
  row.remove();
}

function ensureLegendLayerSwitch(item) {
  const key = item?.dataset?.legendKey;
  if (!key) {
    return null;
  }
  if (isAlwaysOnMapCategory(key)) {
    unwrapLegendLayerSwitch(item);
    return null;
  }
  const host = item.parentElement;
  if (host?.classList.contains("legend-item-row")) {
    return host.querySelector("[data-legend-toggle]");
  }
  const row = document.createElement("div");
  row.className = "legend-item-row";
  const label = document.createElement("label");
  label.className = "legend-layer-switch";
  const input = document.createElement("input");
  input.type = "checkbox";
  input.dataset.legendToggle = key;
  input.checked = isMapCategoryVisible(key);
  const legendName = item.querySelector(".legend-label")?.textContent?.trim() || key;
  input.setAttribute("aria-label", `顯示${legendName}圖層`);
  const ui = document.createElement("span");
  ui.className = "legend-switch-ui";
  ui.setAttribute("aria-hidden", "true");
  label.append(input, ui);
  item.before(row);
  row.append(label, item);
  return input;
}

function getMapMessageMaxWidth(kind = "") {
  let mapWidth = 0;
  try {
    mapWidth = Number(warningMap?.getSize?.()?.x) || 0;
  } catch {
    mapWidth = 0;
  }
  if (!mapWidth) {
    mapWidth =
      Number(document.querySelector("#warningMap")?.clientWidth) ||
      Number(window.innerWidth) ||
      360;
  }
  if (kind === "earthquake") {
    const width = Math.floor(mapWidth * 0.3);
    return Math.max(96, Number.isFinite(width) ? width : 120);
  }
  const width = Math.floor(mapWidth * 0.8);
  return Math.max(140, Number.isFinite(width) ? width : 140);
}

function getMapPopupKind(className = "") {
  return /\beq-popup-wrap\b/.test(String(className)) ? "earthquake" : "";
}

function getMapPopupOptions(extra = {}) {
  const kind = getMapPopupKind(extra.className || "");
  return {
    autoPanPadding: kind === "earthquake" ? [12, 12] : [16, 16],
    className: "disaster-map-popup",
    autoPan: true,
    ...extra,
    maxWidth: extra.maxWidth ?? getMapMessageMaxWidth(kind)
  };
}

function getMapCircleMarkerOptions(style = {}) {
  return {
    bubblingMouseEvents: false,
    ...style
  };
}

function isMapPopupHoldActive() {
  return mapPopupIsOpen || Date.now() < mapPopupHoldUntil;
}

function beginMapPopupHold(ms = 2500) {
  holdMapPopupRefresh(ms);
}

function bindDisasterMapPopupHold() {
  if (!warningMap || warningMap._popupHoldBound) {
    return;
  }
  warningMap._popupHoldBound = true;
  warningMap.on("popupopen", (event) => {
    mapPopupIsOpen = true;
    holdMapPopupRefresh(60 * 1000);
    bindCctvPopupZoom(event?.popup);
  });
  warningMap.on("popupclose", () => {
    mapPopupIsOpen = false;
    mapPopupHoldUntil = Date.now() + 200;
  });
}

function bindCctvPopupZoom(popup) {
  const root = popup?.getElement?.();
  const camera = popup?._source?._cctvCamera;
  const button = root?.querySelector("[data-cctv-zoom]");
  if (!root || !camera || !button || button.dataset.bound === "1") {
    return;
  }
  button.dataset.bound = "1";
  button.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    openCctvMonitorLightbox(camera);
  });
}

function openCctvMonitorLightbox(camera) {
  const box = document.querySelector("#cctvMonitorLightbox");
  const title = document.querySelector("#cctvMonitorLightboxTitle");
  const media = document.querySelector("#cctvMonitorLightboxMedia");
  if (!box || !media) {
    return;
  }
  if (title) {
    title.textContent = formatCameraIntersectionShort(camera);
  }
  media.innerHTML = getCameraPreviewHtml(camera, "cctv-monitor-lightbox-frame");
  const frame = media.querySelector(".cctv-map-popup-frame");
  if (frame) {
    frame.classList.remove("cctv-map-popup-frame");
  }
  box.hidden = false;
  lockPageScrollForOverlay();
  document.querySelector("#cctvMonitorLightboxClose")?.focus();
}

function closeCctvMonitorLightbox() {
  const box = document.querySelector("#cctvMonitorLightbox");
  const media = document.querySelector("#cctvMonitorLightboxMedia");
  if (!box || box.hidden) {
    return;
  }
  box.hidden = true;
  if (media) {
    media.innerHTML = "";
  }
  unlockPageScrollForOverlay();
}

function initCctvMonitorLightbox() {
  const box = document.querySelector("#cctvMonitorLightbox");
  if (!box || box.dataset.bound === "1") {
    return;
  }
  box.dataset.bound = "1";
  box.addEventListener("click", (event) => {
    if (event.target === box) {
      closeCctvMonitorLightbox();
    }
  });
  document.querySelector("#cctvMonitorLightboxClose")?.addEventListener("click", () => {
    closeCctvMonitorLightbox();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeCctvMonitorLightbox();
    }
  });
}

function getMarkersLatLngs(markers = []) {
  return markers.map((marker) => getLeafletLatLng(marker)).filter(Boolean);
}

function fitMapToMarkerLatLngs(latlngs, { maxZoom = 14, animate = true } = {}) {
  if (!warningMap || !latlngs.length) {
    return;
  }
  if (latlngs.length === 1) {
    warningMap.setView(latlngs[0], Math.min(Math.max(warningMap.getZoom() || 12, 12), maxZoom), {
      animate
    });
    return;
  }
  const bounds = L.latLngBounds(latlngs);
  if (bounds.isValid()) {
    warningMap.fitBounds(bounds, { padding: [28, 28], maxZoom, animate });
  }
}

function ensureMarkerOnMap(marker) {
  if (!warningMap || !marker) {
    return false;
  }
  if (marker._map === warningMap) {
    return true;
  }
  const host =
    (marker._legendKey && getLegendLayerForKey(marker._legendKey)) ||
    mapFloodLayer ||
    mapPowerOutageLayer ||
    mapWaterOutageLayer ||
    mapClosureLayer ||
    mapEarthquakeLayer ||
    mapShelterLayer ||
    mapCameraLayer ||
    mapCityFocusLayer;
  try {
    if (host && typeof host.addLayer === "function" && !host.hasLayer(marker)) {
      host.addLayer(marker);
    }
    if (host && !warningMap.hasLayer(host)) {
      host.addTo(warningMap);
    }
    if (!marker._map) {
      marker.addTo(warningMap);
    }
    return Boolean(marker._map);
  } catch {
    return Boolean(marker._map);
  }
}

function getLegendLayerForKey(key) {
  if (String(key || "").startsWith("flood-")) {
    return mapFloodLayer;
  }
  if (key === "power-disaster" || key === "power-planned") {
    return mapPowerOutageLayer;
  }
  if (key === "water-outage") {
    return mapWaterOutageLayer;
  }
  if (key === "closure") {
    return mapClosureLayer;
  }
  if (key === "earthquake") {
    return mapEarthquakeLayer;
  }
  if (key === "shelter") {
    return mapShelterLayer;
  }
  if (key === "cctv") {
    return mapCameraLayer;
  }
  if (key === "city-focus") {
    return mapCityFocusLayer;
  }
  return null;
}

function holdMapPopupRefresh(ms = 900) {
  mapPopupHoldUntil = Math.max(mapPopupHoldUntil, Date.now() + ms);
}

function openMarkerPopupSafely(marker) {
  if (!warningMap || !marker) {
    return;
  }
  beginMapPopupHold(4000);
  const latlng = getLeafletLatLng(marker);
  const popup = typeof marker.getPopup === "function" ? marker.getPopup() : null;
  const quake = marker._earthquake;
  const reveal = () => {
    if (quake && isCompactEarthquakeMapView()) {
      openEarthquakeDetailSheet(quake);
      return;
    }
    try {
      ensureMarkerOnMap(marker);
      if (popup) {
        popup.options.maxWidth = getMapMessageMaxWidth(getMapPopupKind(popup.options?.className));
        if (latlng) {
          popup.setLatLng(latlng);
        }
        if (typeof marker.openPopup === "function" && marker._map) {
          marker.openPopup();
          return;
        }
        popup.openOn(warningMap);
        return;
      }
      const html = marker._popupHtml || marker.getPopup?.()?.getContent?.();
      if (latlng && html) {
        L.popup(getMapPopupOptions()).setLatLng(latlng).setContent(html).openOn(warningMap);
      }
    } catch {
      try {
        const html = popup?.getContent?.() || marker._popupHtml;
        if (latlng && html) {
          L.popup(getMapPopupOptions()).setLatLng(latlng).setContent(html).openOn(warningMap);
        }
      } catch {
        /* popup content could not be reconstructed */
      }
    }
  };
  reveal();
}

function refreshMapPopupMaxWidths() {
  Object.values(mapLegendMarkers).forEach((markers) => {
    (markers || []).forEach((marker) => {
      const popup = marker.getPopup?.();
      if (!popup) {
        return;
      }
      popup.options.maxWidth = getMapMessageMaxWidth(getMapPopupKind(popup.options?.className));
      if (popup.isOpen()) {
        popup.update();
      }
    });
  });
}

function syncMapLayerVisibilityFromCategories() {
  mapLayerVisibility["flood-warning"] = ["flood-4", "flood-3", "flood-2", "flood-1"].some((key) =>
    isMapCategoryVisible(key)
  );
  mapLayerVisibility["power-outage"] = ["power-disaster", "power-planned"].some((key) =>
    isMapCategoryVisible(key)
  );
  mapLayerVisibility["water-outage"] = isMapCategoryVisible("water-outage");
  mapLayerVisibility["closure-points"] = isMapCategoryVisible("closure");
  mapLayerVisibility["earthquake-points"] = isMapCategoryVisible("earthquake");
  mapLayerVisibility["shelter-points"] = isMapCategoryVisible("shelter");
  mapLayerVisibility["cctv-points"] = isMapCategoryVisible("cctv");
  mapLayerVisibility["city-focus"] = isMapCategoryVisible("city-focus");
}

function refreshDisasterMapLayers() {
  syncMapLayerVisibilityFromCategories();
  updateFloodMapLayer();
  updatePowerOutageMapLayer();
  updateWaterOutageMapLayer();
  updateClosureMapLayer();
  updateEarthquakeMapLayer();
  updateShelterMapLayer();
  updateCameraMapLayer();
  updateCityFocusLayer();
  renderMapCategoryFilters();
  syncMapLegendState();
}

function toggleMapCategory(key, nextValue) {
  if (!Object.prototype.hasOwnProperty.call(mapCategoryVisibility, key)) {
    return;
  }
  if (isAlwaysOnMapCategory(key)) {
    mapCategoryVisibility[key] = true;
    mapCategoryUserOff.delete(key);
    return;
  }
  const next = typeof nextValue === "boolean" ? nextValue : !isMapCategoryVisible(key);
  mapCategoryVisibility[key] = next;
  if (next) {
    mapCategoryUserOff.delete(key);
  } else {
    mapCategoryUserOff.add(key);
  }
  try {
    refreshDisasterMapLayers();
  } catch (error) {
    console.warn("圖層切換後重新繪製失敗：", error);
  }
  if (key === "earthquake" && isMapCategoryVisible("earthquake")) {
    fitMapToTaiwan(true);
  }
}

function renderMapCategoryFilters() {
  if (!mapCategoryFilters) {
    return;
  }
  mapCategoryFilters.replaceChildren();
  mapCategoryFilters.hidden = true;
}

function fitMapToFocusArea() {
  if (!warningMap || !mapCityFocusLayer) {
    return;
  }
  warningMap.invalidateSize();
  const location = getActiveWeatherLocation();
  if (!location || !Number.isFinite(location.lat) || !Number.isFinite(location.lon)) {
    return;
  }
  warningMap.setView([location.lat, location.lon], 10, { animate: false });
  const bounds = mapCityFocusLayer.getBounds?.();
  if (bounds?.isValid?.()) {
    warningMap.fitBounds(bounds, {
      padding: [10, 10],
      maxZoom: 12,
      animate: false
    });
  }
}

function resolveFocusRadiusMetersForMap() {
  if (!warningMap) {
    return MAP_FOCUS_CIRCLE_RADIUS_M;
  }
  warningMap.invalidateSize();
  const size = warningMap.getSize();
  if (!size || size.x < 40 || size.y < 40) {
    return MAP_FOCUS_CIRCLE_RADIUS_M;
  }
  const bounds = warningMap.getBounds();
  if (!bounds?.isValid?.()) {
    return MAP_FOCUS_CIRCLE_RADIUS_M;
  }
  const center = warningMap.getCenter();
  const north = L.latLng(bounds.getNorth(), center.lng);
  const halfHeightKm = getDistanceKm(center.lat, center.lng, north.lat, north.lng);
  const east = L.latLng(center.lat, bounds.getEast());
  const halfWidthKm = getDistanceKm(center.lat, center.lng, east.lat, east.lng);
  const radiusKm = Math.max(3, Math.min(halfHeightKm, halfWidthKm) * 0.92);
  return Math.round(radiusKm * 1000);
}

function updateCityFocusLayer() {
  if (!warningMap) {
    return;
  }
  const location = getMapLocatePoint();
  if (mapCityFocusLayer) {
    try {
      warningMap.removeLayer(mapCityFocusLayer);
    } catch {
      /* ignore */
    }
    mapCityFocusLayer = null;
  }
  if (!location || !Number.isFinite(location.lat) || !Number.isFinite(location.lon)) {
    mapLegendMarkers["city-focus"] = [];
    syncMapLegendState();
    return;
  }

  const radiusM = MAP_FOCUS_CIRCLE_RADIUS_M;
  const circleBounds = L.latLng(location.lat, location.lon).toBounds(radiusM * 2);
  mapCityFocusLayer = L.featureGroup();
  mapLegendMarkers["city-focus"] = [];
  const overlayPane = warningMap.getPane("overlayPane");
  if (overlayPane) {
    overlayPane.style.overflow = "visible";
  }
  const ringHalo = L.circle([location.lat, location.lon], {
    pane: "overlayPane",
    className: "leaflet-focus-circle-halo",
    radius: radiusM,
    color: "#ffffff",
    weight: 8,
    opacity: 0.7,
    fill: false,
    interactive: false
  });
  const ring = L.circle([location.lat, location.lon], {
    pane: "overlayPane",
    className: "leaflet-focus-circle",
    radius: radiusM,
    color: "#7af6ff",
    weight: 6,
    opacity: 1,
    fillColor: "#00d4ff",
    fillOpacity: 0.18,
    interactive: false
  });
  const north = circleBounds.getNorth();
  const label = L.marker([north, location.lon], {
    pane: "focusPane",
    interactive: false,
    keyboard: false,
    zIndexOffset: 860,
    icon: L.divIcon({
      className: "map-focus-range-label",
      html: '<span class="map-focus-range-label-text">定位範圍｜直徑 5 公里</span>',
      iconSize: [0, 0],
      iconAnchor: [0, 10]
    })
  });
  const center = L.marker([location.lat, location.lon], {
    pane: "focusPane",
    interactive: true,
    keyboard: false,
    zIndexOffset: 850,
    icon: L.divIcon({
      className: "map-focus-pulse",
      html: '<span class="map-focus-pulse-dot" aria-hidden="true"></span>',
      iconSize: [28, 28],
      iconAnchor: [14, 14]
    })
  });
  center.bindPopup(
    `定位點範圍（直徑 5 公里）<br/>${location.label || `${location.lat.toFixed(4)}, ${location.lon.toFixed(4)}`}`,
    getMapPopupOptions()
  );
  center._legendPlace = String(location.label || "").trim();
  center._legendKey = "city-focus";
  mapCityFocusLayer.addLayer(ringHalo);
  mapCityFocusLayer.addLayer(ring);
  mapCityFocusLayer.addLayer(label);
  mapCityFocusLayer.addLayer(center);
  mapLegendMarkers["city-focus"].push(center);

  mapCategoryVisibility["city-focus"] = true;
  mapCategoryUserOff.delete("city-focus");
  mapLayerVisibility["city-focus"] = true;
  mapCityFocusLayer.addTo(warningMap);
  syncMapLayerVisibility("city-focus");
  syncMapLegendState();
}

function getLiveCityCameraIds() {
  const primary = [...(cameraList?.querySelectorAll(".camera-item-live") || [])];
  const extras = [...(cameraListMore?.querySelectorAll(".camera-item-live") || [])];
  return new Set(
    [...primary, ...extras]
      .map((el) => el.dataset.cameraId)
      .filter(Boolean)
  );
}

function getCameraPreviewHtml(camera, className = "cctv-map-popup-media") {
  const streamUrl = String(camera?.html || "").trim();
  if (!streamUrl) {
    return `<span class="cctv-map-thumb-fallback" aria-hidden="true">路口</span>`;
  }
  const useImage = isLikelyDirectImageStream(streamUrl);
  const safeUrl = escapeMapLegendHtml(streamUrl);
  const alt = escapeMapLegendHtml(formatCameraIntersectionShort(camera));
  return useImage
    ? `<img class="${className}" src="${safeUrl}" alt="${alt}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />`
    : `<iframe class="${className} cctv-map-popup-frame" src="${safeUrl}" title="${alt}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
}

function getCctvMapRoadLabelHtml(camera) {
  const place = camera?.mapPlace || getCachedCameraPlace(camera);
  let roads = [];
  if (place?.type === "intersection" && Array.isArray(place.roads)) {
    roads = place.roads.map((name) => String(name || "").trim()).filter(Boolean).slice(0, 2);
  }
  if (roads.length < 2) {
    const [roadA, roadB] = getCameraDisplayRoads(camera);
    if (roadA && roadB) {
      roads = [roadA, roadB];
    }
  }
  if (roads.length >= 2) {
    return `<span class="cctv-map-road-label cctv-map-road-label-int"><span>${escapeMapLegendHtml(
      roads[0]
    )}</span><span>${escapeMapLegendHtml(roads[1])}</span></span>`;
  }
  const label = formatCameraIntersectionShort(camera);
  if (
    !label ||
    label === "路口" ||
    label === CCTV_MISSING_CROSS_LABEL ||
    label === CCTV_CROSS_LOOKUP_LABEL
  ) {
    return "";
  }
  return `<span class="cctv-map-road-label">${escapeMapLegendHtml(label)}</span>`;
}

function getCctvThumbIcon(camera) {
  const streamUrl = String(camera?.html || "").trim();
  const labelHtml = getCctvMapRoadLabelHtml(camera);
  if (!streamUrl) {
    return L.divIcon({
      className: "cctv-map-thumb-marker",
      html: `<span class="cctv-map-pin">${labelHtml}<span class="cctv-map-ring" aria-hidden="true"></span></span>`,
      iconSize: [16, 16],
      iconAnchor: [8, 8]
    });
  }
  const useImage = isLikelyDirectImageStream(streamUrl);
  const mediaClass = useImage ? "cctv-map-thumb-media" : "cctv-map-thumb-media cctv-map-thumb-frame";
  const thumbClass = useImage ? "cctv-map-thumb" : "cctv-map-thumb cctv-map-thumb--frame";
  return L.divIcon({
    className: "cctv-map-thumb-marker",
    html: `<span class="cctv-map-pin">${labelHtml}<span class="${thumbClass}">${getCameraPreviewHtml(
      camera,
      mediaClass
    )}</span></span>`,
    iconSize: [80, 60],
    iconAnchor: [40, 30]
  });
}

function buildCctvMapPopupHtml(camera) {
  const [cleanA, cleanB] = getCameraDisplayRoads(camera);
  const nameHtml =
    cleanA && cleanB
      ? `<p class="cctv-map-popup-road">${escapeMapLegendHtml(cleanA)}</p>
      <p class="cctv-map-popup-road">${escapeMapLegendHtml(cleanB)}</p>`
      : `<p class="cctv-map-popup-road">${escapeMapLegendHtml(
          cleanA || cleanB || formatCameraIntersectionShort(camera)
        )}</p>`;
  const cameraId = escapeMapLegendHtml(camera?.id || "");
  return `
    <div class="cctv-map-popup">
      ${nameHtml}
      <button type="button" class="cctv-map-popup-zoom" data-cctv-zoom="${cameraId}" aria-label="放大監控畫面">
        <div class="cctv-map-popup-preview">${getCameraPreviewHtml(camera)}</div>
        <span class="cctv-map-popup-zoom-hint">點擊放大監控</span>
      </button>
    </div>
  `;
}

function getCameraMarkerKey(camera) {
  return String(camera?.id || camera?.html || "").trim();
}

function updateCameraMapLayer() {
  if (!warningMap) {
    return;
  }
  if (!mapCameraLayer) {
    mapCameraLayer = L.layerGroup();
  }
  const camerasToPlot = getCityCamerasForDisasterMap();
  const keepKeys = new Set(camerasToPlot.map((camera) => getCameraMarkerKey(camera)).filter(Boolean));
  const existingByKey = new Map();
  (mapLegendMarkers.cctv || []).forEach((marker) => {
    const key = String(marker._cctvMarkerKey || getCameraMarkerKey(marker._cctvCamera) || "").trim();
    if (key) {
      existingByKey.set(key, marker);
    }
  });
  existingByKey.forEach((marker, key) => {
    if (!keepKeys.has(key)) {
      mapCameraLayer.removeLayer(marker);
      existingByKey.delete(key);
    }
  });
  const nextMarkers = [];
  camerasToPlot.forEach((camera) => {
    const lat = Number(camera.gisy);
    const lon = Number(camera.gisx);
    if (!Number.isFinite(lat) || !Number.isFinite(lon)) {
      return;
    }
    const key = getCameraMarkerKey(camera);
    const intersectionName = formatCameraIntersectionShort(camera);
    const streamUrl = String(camera?.html || "").trim();
    let marker = key ? existingByKey.get(key) : null;
    if (marker) {
      marker.setLatLng([lat, lon]);
      marker._legendPlace = intersectionName;
      marker._cctvNameOnly = true;
      marker._cctvCamera = camera;
      marker._cctvMarkerKey = key;
      if (marker.options) {
        marker.options.title = intersectionName;
      }
      if (String(marker._cctvStreamUrl || "") !== streamUrl) {
        marker.setIcon(getCctvThumbIcon(camera));
        marker._cctvStreamUrl = streamUrl;
      }
    } else {
      marker = L.marker([lat, lon], {
        pane: "cameraPane",
        keyboard: false,
        icon: getCctvThumbIcon(camera),
        title: intersectionName,
        zIndexOffset: 400
      });
      marker.bindPopup(buildCctvMapPopupHtml(camera), getMapPopupOptions({ className: "cctv-popup-wrap disaster-map-popup" }));
      marker._legendPlace = intersectionName;
      marker._cctvNameOnly = true;
      marker._cctvCamera = camera;
      marker._cctvMarkerKey = key;
      marker._cctvStreamUrl = streamUrl;
    }
    nextMarkers.push(marker);
    scheduleCameraMapPlaceEnrichment(camera);
  });
  mapLegendMarkers.cctv = nextMarkers;
  addVisibleLegendMarkers(mapCameraLayer, ["cctv"]);
  mapLayerVisibility["cctv-points"] = isMapCategoryVisible("cctv");
  syncMapLayerVisibility("cctv-points");
  syncMapLegendState();
}

function escapeMapLegendHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function getLeafletLatLng(layer) {
  if (!layer) {
    return null;
  }
  if (typeof layer.getLatLng === "function") {
    const latlng = layer.getLatLng();
    if (latlng && Number.isFinite(latlng.lat) && Number.isFinite(latlng.lng)) {
      return latlng;
    }
  }
  if (typeof layer.getBounds === "function") {
    try {
      const bounds = layer.getBounds();
      if (bounds?.isValid?.()) {
        return bounds.getCenter();
      }
    } catch {
      /* ignore */
    }
  }
  return null;
}

function formatTownshipPlace(lat, lon) {
  const township = findNearestTownship(lat, lon);
  if (!township) {
    return `${Number(lat).toFixed(3)}, ${Number(lon).toFixed(3)}`;
  }
  return `${township.city}${township.town}`;
}

function getLegendMarkerPlace(marker) {
  const metaPlace = String(marker?._legendPlace || "").trim();
  if (metaPlace) {
    return metaPlace;
  }
  const latlng = getLeafletLatLng(marker);
  return latlng ? formatTownshipPlace(latlng.lat, latlng.lng) : "位置未定";
}

function getLegendMarkersCentroid(markers) {
  const points = (markers || []).map(getLeafletLatLng).filter(Boolean);
  if (!points.length) {
    return null;
  }
  const lat = points.reduce((sum, point) => sum + point.lat, 0) / points.length;
  const lng = points.reduce((sum, point) => sum + point.lng, 0) / points.length;
  return L.latLng(lat, lng);
}

function describeLegendMarkerPlaces(markers) {
  const places = [];
  const seen = new Set();
  (markers || []).forEach((marker) => {
    const place = getLegendMarkerPlace(marker);
    if (!place || place === "位置未定" || seen.has(place)) {
      return;
    }
    seen.add(place);
    places.push(place);
  });
  if (!places.length) {
    const center = getLegendMarkersCentroid(markers);
    return center ? formatTownshipPlace(center.lat, center.lng) : "位置未定";
  }
  if (places.length <= 2) {
    return places.join("、");
  }
  return `${places.slice(0, 2).join("、")}等 ${places.length} 處`;
}

function ensureMapLegendLabelLayer() {
  if (!warningMap || typeof L === "undefined") {
    return null;
  }
  if (!warningMap.getPane("legendLabelPane")) {
    warningMap.createPane("legendLabelPane");
    const pane = warningMap.getPane("legendLabelPane");
    if (pane) {
      pane.style.zIndex = "690";
    }
  }
  if (!mapLegendLabelLayer) {
    mapLegendLabelLayer = L.layerGroup();
  }
  if (!warningMap.hasLayer(mapLegendLabelLayer)) {
    mapLegendLabelLayer.addTo(warningMap);
  }
  return mapLegendLabelLayer;
}

function openLegendSourceMarker(sourceMarker) {
  if (!warningMap || !sourceMarker) {
    return;
  }
  beginMapPopupHold(4000);
  const latlng = getLeafletLatLng(sourceMarker);
  if (latlng) {
    warningMap.setView(latlng, Math.max(warningMap.getZoom(), 13), { animate: true });
  }
  window.setTimeout(() => {
    openMarkerPopupSafely(sourceMarker);
  }, 220);
}

function updateMapLegendLocationPins() {
  const layer = ensureMapLegendLabelLayer();
  if (!layer) {
    return;
  }
  layer.clearLayers();
  if (!warningMap) {
    return;
  }
  const zoom = warningMap.getZoom();
  const pins = [];
  Object.keys(MAP_LEGEND_CALLOUT_CONFIG).forEach((key) => {
    const config = MAP_LEGEND_CALLOUT_CONFIG[key];
    if (config.layer && mapLayerVisibility[config.layer] === false) {
      return;
    }
    if (config.skipCallout || !isMapCategoryVisible(key)) {
      return;
    }
    const alwaysShow = Boolean(config.alwaysShow);
    if (!alwaysShow && zoom < 11) {
      return;
    }
    (mapLegendMarkers[key] || []).forEach((sourceMarker) => {
      const center = getLeafletLatLng(sourceMarker);
      if (!center) {
        return;
      }
      pins.push({
        key,
        config,
        center,
        sourceMarker,
        place: getLegendMarkerPlace(sourceMarker)
      });
    });
  });
  pins.sort((a, b) => b.center.lat - a.center.lat || a.center.lng - b.center.lng);
  pins.forEach((pin, index) => {
    pin.slot = 0;
    for (let i = 0; i < index; i += 1) {
      const other = pins[i];
      if (getDistanceKm(pin.center.lat, pin.center.lng, other.center.lat, other.center.lng) < 0.4) {
        pin.slot = Math.max(pin.slot, other.slot + 1);
      }
    }
  });
  pins.forEach((pin) => {
    const stack = pin.slot % 8;
    const cardMax = Math.min(240, getMapMessageMaxWidth());
    const flashClass = pin.config.flash ? " map-legend-callout-dot-flash" : "";
    const html = pin.config.nameOnly
      ? `
      <span class="map-legend-callout-dot${flashClass}" style="--legend-dot:${pin.config.color}"></span>
      <span class="map-legend-callout-card map-legend-callout-name-only" style="--callout-color:${pin.config.color}; max-width:${cardMax}px; transform: translateY(${stack * 22}px)">
        <span class="map-legend-callout-place">${escapeMapLegendHtml(pin.place)}</span>
      </span>
    `
      : `
      <span class="map-legend-callout-dot${flashClass}" style="--legend-dot:${pin.config.color}"></span>
      ${
        pin.config.flash
          ? ""
          : `<span class="map-legend-callout-card" style="--callout-color:${pin.config.color}; max-width:${cardMax}px; transform: translateY(${stack * 22}px)">
        <strong>${escapeMapLegendHtml(pin.config.title)}</strong>
        <span class="map-legend-callout-place">${escapeMapLegendHtml(pin.place)}</span>
      </span>`
      }
    `;
    const marker = L.marker(pin.center, {
      pane: pin.key === "cctv" ? "cameraPane" : "legendLabelPane",
      interactive: true,
      keyboard: false,
      zIndexOffset: 700 + stack,
      title: `${pin.config.title}｜${pin.place}`,
      icon: L.divIcon({
        className: "map-legend-callout",
        html,
        iconSize: [0, 0],
        iconAnchor: [0, 0]
      })
    });
    marker.on("click", () => openLegendSourceMarker(pin.sourceMarker));
    layer.addLayer(marker);
  });
}

function syncMapLegendState() {
  const legend = document.querySelector(".map-legend");
  if (!legend) {
    return;
  }
  applyAutoDisasterLayerVisibility();
  legend.querySelectorAll("[data-legend-key]").forEach((item) => {
    const key = item.dataset.legendKey;
    const markers = mapLegendMarkers[key] || [];
    const countEl = item.querySelector("[data-legend-count]");
    const placeEl = item.querySelector("[data-legend-place]");
    const isDisaster = DISASTER_LEGEND_KEYS.includes(key);
    const isActive = isDisaster ? isDisasterLegendActive(key) : markers.length > 0;
    const cityClosure = key === "closure" ? getSelectedCityClosureRow() : null;
    const cityClosureDates = cityClosure ? formatClosureDatesText(getClosureRowDates(cityClosure)) : "";
    const placeText =
      key === "shelter"
        ? markers.length
          ? "定位範圍內"
          : "定位範圍內無點位"
        : key === "closure"
          ? isActive
            ? cityClosureDates
              ? `${cityClosure.city}｜${cityClosureDates}`
              : cityClosure.city
            : "目前恢復正常上班上課"
          : markers.length
            ? describeLegendMarkerPlaces(markers)
            : "目前無點位";
    const alwaysShowRow = !isDisaster;
    if (countEl) {
      countEl.textContent = String(isActive || key !== "closure" ? markers.length : 0);
      countEl.removeAttribute("aria-hidden");
    }
    if (placeEl) {
      placeEl.textContent = placeText;
    }
    item.classList.toggle("legend-item-empty", isDisaster && !isActive);
    item.classList.toggle("legend-item-fixed", alwaysShowRow);
    item.classList.toggle("legend-item-locked", isAlwaysOnMapCategory(key));
    item.classList.toggle("is-category-hidden", !isMapCategoryVisible(key));
    const toggle = ensureLegendLayerSwitch(item);
    if (toggle) {
      toggle.checked = isMapCategoryVisible(key);
      toggle.disabled = isDisaster && !isActive && !isMapCategoryVisible(key);
    }
    item.setAttribute("aria-disabled", isDisaster && !isActive ? "true" : "false");
    const row = item.closest("li");
    if (row) {
      row.hidden = false;
    }
    item.hidden = false;
    const label = item.querySelector(".legend-label")?.textContent?.trim() || key;
    item.title = isActive ? `${label}｜位置：${placeText}` : `${label}｜${placeText}`;
    item.setAttribute(
      "aria-label",
      isActive ? `${label}，${markers.length} 處，位置 ${placeText}` : `${label}，${placeText}`
    );
  });
  const activeDisasterCount = syncLegendActivePlacement(legend);
  const disasterGroup = legend.querySelector("#legendDisasterGroup");
  const disasterSummary = legend.querySelector("#legendDisasterSummary");
  if (disasterGroup) {
    disasterGroup.hidden = false;
    disasterGroup.classList.toggle("is-empty", activeDisasterCount === 0);
    if (activeDisasterCount === 0) {
      disasterGroup.open = false;
    }
  }
  if (disasterSummary) {
    disasterSummary.textContent =
      activeDisasterCount > 0 ? `開啟中 ${activeDisasterCount} 類` : "目前無災害";
  }
  let emptyNote = legend.querySelector(".map-legend-empty");
  if (!emptyNote) {
    emptyNote = document.createElement("p");
    emptyNote.className = "map-legend-empty";
    legend.append(emptyNote);
  }
  emptyNote.textContent = "目前無災害點位，相關圖層已收入收合層。";
  emptyNote.hidden = activeDisasterCount > 0;
  mapLayerOrder.forEach((layerKey) => syncMapLayerVisibility(layerKey));
  syncMapFloodCountBadge(getFloodMarkersOnMap().length);
  syncMapAlertBadges();
  renderMapCategoryFilters();
  updateMapLegendLocationPins();
}

const ALERT_BADGE_CONFIG = [
  { key: "flood-4", label: "積水 等級4", bg: "#d00000" },
  { key: "flood-3", label: "積水 等級3", bg: "#e85d04" },
  { key: "flood-2", label: "積水 等級2", bg: "#ffba08", color: "#333" },
  { key: "flood-1", label: "積水 等級1", bg: "#ffd166", color: "#333" },
  { key: "power-disaster", label: "災害停電", bg: "#6d28d9" },
  { key: "power-planned", label: "計畫停電", bg: "#7c3aed" },
  { key: "water-outage", label: "停水公告", bg: "#0f766e" },
  { key: "closure", label: "停班停課", bg: "#b71c1c" },
  { key: "earthquake", label: "地震震央", bg: "#ffe600", color: "#3f3200" },
  { key: "shelter", label: "避難場所", bg: "#15803d" },
  { key: "cctv", label: "路口監控", bg: "#0096c7" },
  { key: "city-focus", label: "定位範圍", bg: "#e11d48" }
];
const MAP_ALERT_BADGE_LEFT_KEYS = ["shelter", "cctv", "city-focus"];
const MAP_ALERT_BADGE_RIGHT_KEYS = [
  "earthquake",
  "flood-4",
  "flood-3",
  "flood-2",
  "flood-1",
  "closure",
  "power-disaster",
  "power-planned",
  "water-outage"
];

function createMapAlertBadge({ key, label, bg, color }) {
  const count = (mapLegendMarkers[key] || []).length;
  if (!count || !isMapCategoryVisible(key)) {
    return null;
  }
  if (key === "closure" && !hasSelectedCityClosureAnnouncement()) {
    return null;
  }
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "map-alert-badge";
  btn.style.background = bg;
  if (color) btn.style.color = color;
  btn.dataset.empty = "false";
  const dateSummary =
    key === "closure"
      ? Array.from(
          new Set(
            (mapLegendMarkers.closure || []).flatMap((marker) =>
              (marker._closureDates || []).map((iso) => formatClosureDateShort(iso))
            )
          )
        ).join("、")
      : "";
  btn.textContent = key === "closure" && dateSummary ? `${label} ${dateSummary}` : `${label} ${count}`;
  btn.title = dateSummary ? `定位${label}點位｜適用 ${dateSummary}` : `定位${label}點位`;
  btn.addEventListener("click", () => focusMapLegendMarkers(key));
  return btn;
}

function syncMapAlertBadges() {
  const container = document.querySelector("#mapAlertBadges");
  if (!container) return;
  let leftCol = container.querySelector("#mapAlertBadgesLeft");
  let rightCol = container.querySelector("#mapAlertBadgesRight");
  if (!leftCol || !rightCol) {
    container.innerHTML = "";
    leftCol = document.createElement("div");
    leftCol.id = "mapAlertBadgesLeft";
    leftCol.className = "map-alert-badges-col map-alert-badges-left";
    rightCol = document.createElement("div");
    rightCol.id = "mapAlertBadgesRight";
    rightCol.className = "map-alert-badges-col map-alert-badges-right";
    container.append(leftCol, rightCol);
  }
  leftCol.innerHTML = "";
  rightCol.innerHTML = "";
  const byKey = new Map(ALERT_BADGE_CONFIG.map((item) => [item.key, item]));
  MAP_ALERT_BADGE_LEFT_KEYS.forEach((key) => {
    const badge = byKey.get(key) ? createMapAlertBadge(byKey.get(key)) : null;
    if (badge) {
      leftCol.append(badge);
    }
  });
  MAP_ALERT_BADGE_RIGHT_KEYS.forEach((key) => {
    const badge = byKey.get(key) ? createMapAlertBadge(byKey.get(key)) : null;
    if (badge) {
      rightCol.append(badge);
    }
  });
}

function focusMapLegendMarkers(legendKey) {
  if (!warningMap || !legendKey) {
    return;
  }
  beginMapPopupHold(4000);
  if (!isMapCategoryVisible(legendKey) && Object.prototype.hasOwnProperty.call(mapCategoryVisibility, legendKey)) {
    mapCategoryVisibility[legendKey] = true;
    mapCategoryUserOff.delete(legendKey);
    try {
      refreshDisasterMapLayers();
    } catch {
      /* still try to open any remaining marker popup */
    }
  }
  const markers = mapLegendMarkers[legendKey] || [];
  if (legendKey === "earthquake") {
    fitMapToTaiwan(true);
    return;
  }
  if (!markers.length) {
    return;
  }
  if (legendKey === "shelter" || legendKey === "city-focus") {
    fitMapToLocateRange(true);
    return;
  }
  try {
    fitMapToMarkerLatLngs(getMarkersLatLngs(markers), {
      maxZoom: legendKey === "closure" ? 8 : legendKey === "city-focus" ? 12 : 14
    });
  } catch {
    /* keep going so the popup can still open */
  }
  const target = markers[0];
  let opened = false;
  const open = () => {
    if (opened) {
      return;
    }
    opened = true;
    openMarkerPopupSafely(target);
  };
  warningMap.once("moveend", open);
  window.setTimeout(open, 360);
}

function initMapLegendInteractions() {
  const legend = document.querySelector(".map-legend");
  if (!legend || legend.dataset.bound === "1") {
    return;
  }
  legend.dataset.bound = "1";
  legend.addEventListener("change", (event) => {
    const toggle = event.target.closest("[data-legend-toggle]");
    if (!toggle) {
      return;
    }
    toggleMapCategory(toggle.dataset.legendToggle, Boolean(toggle.checked));
  });
  legend.addEventListener("click", (event) => {
    if (event.target.closest("[data-legend-toggle], .legend-layer-switch")) {
      return;
    }
    const item = event.target.closest("[data-legend-key]");
    if (!item || item.classList.contains("legend-item-empty")) {
      return;
    }
    focusMapLegendMarkers(item.dataset.legendKey);
  });
  legend.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }
    const item = event.target.closest("[data-legend-key]");
    if (!item || item.classList.contains("legend-item-empty")) {
      return;
    }
    event.preventDefault();
    focusMapLegendMarkers(item.dataset.legendKey);
  });
}

function updateMapForCityChange() {
  if (!warningMap) {
    return;
  }
  updateCityFocusLayer();
  updateCameraMapLayer();
  updateEarthquakeMapLayer();
  updateShelterMapLayer();
  updateWaterOutageMapLayer();
  updateClosureMapLayer();
  updateFloodMapLayer();
  updatePowerOutageMapLayer();
  fitMapToLocateRange(false);
}

function addDisasterMapBaseTiles(map) {
  // Disaster-oriented basemaps: dark canvas for overlays, Taiwan NLSC, and terrain topo.
  const darkTiles = L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
    maxZoom: 20,
    subdomains: "abcd",
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
  });
  const nlscTiles = L.tileLayer(
    "https://wmts.nlsc.gov.tw/wmts/EMAP/default/GoogleMapsCompatible/{z}/{y}/{x}",
    {
      maxZoom: 19,
      attribution: '圖資 &copy; <a href="https://maps.nlsc.gov.tw/">內政部國土測繪中心</a>'
    }
  );
  const topoTiles = L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
    maxZoom: 17,
    attribution:
      'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="https://opentopomap.org">OpenTopoMap</a> (CC-BY-SA)'
  });

  darkTiles.addTo(map);
}

function scheduleMapLayersByView({ includeAlertLayers = false } = {}) {
  if (includeAlertLayers) {
    pendingAlertLayerRefresh = true;
  }
  window.clearTimeout(shelterZoomTimer);
  shelterZoomTimer = window.setTimeout(() => {
    if (isMapPopupHoldActive()) {
      return;
    }
    if (ignoreShelterZoomEvents > 0) {
      pendingAlertLayerRefresh = false;
      return;
    }
    const refreshAlerts = pendingAlertLayerRefresh;
    pendingAlertLayerRefresh = false;
    updateShelterMapLayer();
    updateCameraMapLayer();
    updateMapLegendLocationPins();
    if (refreshAlerts) {
      updateFloodMapLayer();
      updatePowerOutageMapLayer();
      updateWaterOutageMapLayer();
      updateClosureMapLayer();
      updateEarthquakeMapLayer();
    }
  }, 160);
}

function initWarningMap() {
  const mapEl = document.querySelector("#warningMap");
  restoreMapLocateFocus();
  if (!mapEl || typeof L === "undefined") {
    loadFloodStations()
      .then(() => fetchLiveFloodData())
      .then(() => renderAiAlerts())
      .catch(() => {
        /* flood overlay is optional when the disaster map is hidden */
      });
    return;
  }
  warningMap = L.map("warningMap", {
    zoomControl: false,
    attributionControl: true
  }).setView(TAIWAN_MAP_CENTER, TAIWAN_MAP_ZOOM);
  L.control.zoom({ position: "bottomleft" }).addTo(warningMap);
  bindDisasterMapPopupHold();

  warningMap.createPane("outagePane");
  warningMap.createPane("floodPane");
  warningMap.createPane("waterPane");
  warningMap.createPane("closurePane");
  warningMap.createPane("earthquakePane");
  const earthquakePane = warningMap.getPane("earthquakePane");
  if (earthquakePane) {
    earthquakePane.style.overflow = "visible";
  }
  warningMap.createPane("shelterPane");
  warningMap.createPane("cameraPane");
  const cameraPane = warningMap.getPane("cameraPane");
  if (cameraPane) {
    cameraPane.style.overflow = "visible";
  }
  warningMap.createPane("focusPane");
  warningMap.createPane("legendLabelPane");
  const focusPane = warningMap.getPane("focusPane");
    if (focusPane) {
    focusPane.style.zIndex = String(MAP_PANE_ZINDEX["city-focus"]);
    focusPane.style.overflow = "visible";
  }
  const legendLabelPane = warningMap.getPane("legendLabelPane");
  if (legendLabelPane) {
    legendLabelPane.style.zIndex = "710";
  }

  addDisasterMapBaseTiles(warningMap);

  renderMapCategoryFilters();
  renderLayerControl();
  applyMapLayerOrder();
  initMapLegendInteractions();
  initCctvMonitorLightbox();
  syncMapLegendState();
  loadFloodStations()
    .then(() => fetchLiveFloodData())
    .then(() => renderAiAlerts())
    .catch((error) => {
      if (mapLayerList) {
        const warn = document.createElement("p");
        warn.className = "status-warn";
        warn.textContent = `積淹水即時圖層載入失敗：${error.message}`;
        mapLayerList.append(warn);
      }
    });
  updateCityFocusLayer();
  updateCameraMapLayer();
  updateWaterOutageMapLayer();
  updateClosureMapLayer();
  loadShelterDataset().catch((error) => {
    console.warn("避難場所圖層載入失敗：", error);
  });
  warningMap.on("zoomend", () => {
    scheduleMapLayersByView({ includeAlertLayers: true });
  });
  warningMap.on("moveend", () => {
    scheduleMapLayersByView();
  });
  warningMap.on("resize", () => {
    refreshMapPopupMaxWidths();
    updateMapLegendLocationPins();
  });
  warningMap.whenReady(() => {
    updateCityFocusLayer();
    fitMapToLocateRange(false);
  });
  requestAnimationFrame(() => {
    fitMapToLocateRange(false);
  });
  if (typeof IntersectionObserver === "function") {
    const mapVisibility = new IntersectionObserver(
      (entries) => {
        if (!warningMap || !entries.some((entry) => entry.isIntersecting)) {
          return;
        }
        warningMap.invalidateSize();
        if (pendingMapLocateSync) {
          scheduleFitMapToLocateRange({ animate: false });
          pendingMapLocateSync = false;
        }
      },
      { threshold: 0.15 }
    );
    mapVisibility.observe(mapEl);
  }
}

async function fetchRoadCameras() {
  try {
    const cityResponse = await fetch("./data/city_cctv.json");
    if (!cityResponse.ok) {
      throw new Error(`市區監控資料讀取失敗：${cityResponse.status}`);
    }
    cityCameraDataset = await cityResponse.json();
    enrichCityCameraCrossRoadsFromNeighbors();
    blackScreenCameraIds = loadBlackScreenCameraIds();
    updateCameraMapLayer();
  } catch (error) {
    if (cameraMeta) {
      cameraMeta.textContent = `市區監控資料暫時無法更新：${error.message}`;
    }
    showCityCameraListMessage("請稍後重試或改用來源網址查詢。");
  }
}

function setDualLabelText(element, fullText, shortText = fullText) {
  if (!element) {
    return;
  }
  const fullNode = element.querySelector(".text-full");
  const shortNode = element.querySelector(".text-short");
  if (fullNode && shortNode) {
    fullNode.textContent = fullText;
    shortNode.textContent = shortText;
    return;
  }
  element.textContent = fullText;
}

function setRefreshProgress(pct) {
  const value = Math.max(0, Math.min(100, Math.round(Number(pct) || 0)));
  if (refreshProgressPie) {
    refreshProgressPie.style.setProperty("--pct", String(value));
  }
  if (refreshProgressPct) {
    refreshProgressPct.textContent = `${value}%`;
  }
  if (refreshProgress) {
    refreshProgress.setAttribute("aria-valuenow", String(value));
  }
}

function showRefreshProgress() {
  window.clearTimeout(refreshProgressHideTimer);
  refreshProgressToken += 1;
  setRefreshProgress(4);
  if (refreshProgressHost) {
    refreshProgressHost.hidden = false;
    refreshProgressHost.setAttribute("aria-busy", "true");
  }
}

function setRefreshButtonLoading(isLoading) {
  if (!refreshBtn) {
    return;
  }
  refreshBtn.classList.toggle("is-refreshing", isLoading);
  const labelText = isLoading ? "更新中..." : "立即更新資料";
  if (refreshBtnLabel) {
    refreshBtnLabel.textContent = labelText;
  } else {
    refreshBtn.textContent = labelText;
  }
  if (isLoading) {
    refreshBtn.disabled = true;
    showRefreshProgress();
    return;
  }
  hideRefreshProgress();
}

function hideRefreshProgress() {
  const token = refreshProgressToken;
  setRefreshProgress(100);
  window.clearTimeout(refreshProgressHideTimer);
  refreshProgressHideTimer = window.setTimeout(() => {
    if (token !== refreshProgressToken) {
      return;
    }
    if (refreshProgressHost) {
      refreshProgressHost.hidden = true;
      refreshProgressHost.setAttribute("aria-busy", "false");
    }
    if (refreshBtn) {
      refreshBtn.disabled = false;
      refreshBtn.classList.remove("is-refreshing");
    }
    setRefreshProgress(0);
  }, 320);
}

async function runJobsWithRefreshProgress(jobs, { showProgress = false } = {}) {
  if (!showProgress) {
    await Promise.all(jobs.map((job) => job()));
    return;
  }
  let done = 0;
  const total = Math.max(1, jobs.length);
  await Promise.all(
    jobs.map(async (job) => {
      try {
        await job();
      } finally {
        done += 1;
        setRefreshProgress(Math.round((done / total) * 86) + 8);
      }
    })
  );
}

function getAutoRefreshIntervalMs() {
  return AUTO_REFRESH_OPTIONS[appState.autoRefreshIntervalMinutes]?.ms ?? AUTO_REFRESH_OPTIONS[15].ms;
}

function getAutoRefreshIntervalLabel() {
  return AUTO_REFRESH_OPTIONS[appState.autoRefreshIntervalMinutes]?.label ?? "15 分鐘";
}

function loadAutoRefreshIntervalPreference() {
  const saved = Number(localStorage.getItem(AUTO_REFRESH_STORAGE_KEY));
  if (AUTO_REFRESH_OPTIONS[saved]) {
    appState.autoRefreshIntervalMinutes = saved;
  } else {
    appState.autoRefreshIntervalMinutes = DEFAULT_AUTO_REFRESH_MINUTES;
    try {
      localStorage.setItem(AUTO_REFRESH_STORAGE_KEY, String(DEFAULT_AUTO_REFRESH_MINUTES));
    } catch {
      /* ignore storage errors */
    }
  }
  if (autoRefreshIntervalSelect) {
    autoRefreshIntervalSelect.value = String(appState.autoRefreshIntervalMinutes);
  }
}

function formatAutoRefreshCountdown(remainingMs) {
  const totalSeconds = Math.max(0, Math.ceil(remainingMs / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function scheduleNextAutoRefresh() {
  appState.nextAutoRefreshAt = Date.now() + getAutoRefreshIntervalMs();
}

function shouldRescheduleAutoRefresh() {
  return appState.autoRefreshEnabled && Date.now() >= Number(appState.nextAutoRefreshAt || 0) - 500;
}

function beginAutoRefreshCountdown() {
  appState.autoRefreshEnabled = true;
  scheduleNextAutoRefresh();
  updateAutoRefreshMeta();
  startAutoRefreshTick();
}

function updateAutoRefreshMeta() {
  if (!autoRefreshMeta) {
    return;
  }
  if (!appState.autoRefreshEnabled) {
    autoRefreshMeta.textContent = "更新倒數：已暫停";
    return;
  }
  const remainingMs = Math.max(0, appState.nextAutoRefreshAt - Date.now());
  autoRefreshMeta.textContent = `更新倒數 ${formatAutoRefreshCountdown(remainingMs)}`;
}

async function tickAutoRefreshCountdown() {
  updateAutoRefreshMeta();
  if (!appState.autoRefreshEnabled || appState.autoRefreshRunning) {
    return;
  }
  if (Date.now() < appState.nextAutoRefreshAt) {
    return;
  }
  appState.autoRefreshRunning = true;
  updateAutoRefreshMeta();
  try {
    const refreshed = await performFullRefresh("auto");
    if (refreshed) {
      await notifyAutoRefreshComplete();
    }
  } finally {
    appState.autoRefreshRunning = false;
    if (shouldRescheduleAutoRefresh()) {
      scheduleNextAutoRefresh();
    }
    updateAutoRefreshMeta();
  }
}

function startAutoRefreshTick() {
  if (autoRefreshTickTimer) {
    clearInterval(autoRefreshTickTimer);
  }
  autoRefreshTickTimer = setInterval(() => {
    tickAutoRefreshCountdown();
  }, 1000);
  tickAutoRefreshCountdown();
}

function restartAutoRefreshTimers() {
  beginAutoRefreshCountdown();
}

function startAutoRefreshTimers() {
  loadAutoRefreshIntervalPreference();
  armSystemNotificationPermission();
  restartAutoRefreshTimers();
}

async function performFullRefresh(triggerSource, options = {}) {
  clearDeviceNotifiedThisRefresh();
  const showProgress = triggerSource === "manual";
  if (showProgress) {
    setRefreshButtonLoading(true);
  }
  try {
    await runJobsWithRefreshProgress(
      [
        () => fetchWeather(),
        () => fetchClosureNotices(),
        () => fetchAirQuality(),
        () =>
          fetchTyphoonOfficial().catch(() => {
            appState.typhoonOfficial = null;
          }),
        () =>
          fetchLiveFloodData().catch((error) => {
            appState.floodMetaText = `即時淹水資料暫時無法更新：${error.message}`;
          }),
        () =>
          fetchPowerOutageData().catch((error) => {
            appState.powerOutageMetaText = `停電區域資料暫時無法更新：${error.message}`;
            if (powerOutageMeta) {
              powerOutageMeta.textContent = appState.powerOutageMetaText;
            }
          }),
        () =>
          fetchWaterOutageData().catch(() => {
            appState.waterOutageItems = appState.waterOutageItems || [];
          }),
        () =>
          fetchEarthquakeData().catch((error) => {
            appState.earthquakeMetaText = `地震資料暫時無法更新：${error.message}`;
            if (earthquakeMeta) {
              earthquakeMeta.textContent = appState.earthquakeMetaText;
            }
          }),
        () => fetchCwaWarnings()
      ],
      { showProgress }
    );
    if (showProgress) {
      setRefreshProgress(92);
    }
    renderTyphoonAnalysis();
    refreshWeatherStatusIcon();
    updateMapForCityChange();
    const recoveryMessages = updateRecoveryTrackingState();
    appState.lastRecoveryMessages = recoveryMessages;
    renderAiAlerts();
    persistSubscriptionForBackground(appState.subscription).catch(() => {});
    await flushPendingUtilityAlerts();
    await maybeNotifySubscribers(triggerSource, recoveryMessages, {
      force: Boolean(options.force)
    });
    if (showProgress) {
      setRefreshProgress(100);
    }
    lastUpdated.textContent = `資料更新時間：${formatDateTime(Date.now())}${triggerSource === "auto" ? "（自動）" : ""}`;
    if (shouldRescheduleAutoRefresh()) {
      scheduleNextAutoRefresh();
    }
    updateAutoRefreshMeta();
    return true;
  } catch (error) {
    lastUpdated.textContent = `更新失敗：${error.message}`;
    return false;
  } finally {
    if (showProgress) {
      setRefreshButtonLoading(false);
    }
  }
}

citySelect.addEventListener("change", () => {
  if (suppressRegionSelectEvents) {
    return;
  }
  fillTownshipSelect(citySelect.value);
  cctvLocateFocus = null;
  persistMapLocatePoint(getActiveWeatherLocation());
  saveRegionPreference();
  refreshCityCameraDistrictOptions();
  syncFreewayCameraScopeToLocator();
  performFullRefresh("manual");
  updateMapForCityChange();
});

townshipSelect.addEventListener("change", () => {
  if (suppressRegionSelectEvents) {
    return;
  }
  cctvLocateFocus = null;
  persistMapLocatePoint(getActiveWeatherLocation());
  saveRegionPreference();
  refreshCityCameraDistrictOptions();
  syncFreewayCameraScopeToLocator();
  performFullRefresh("manual");
  updateMapForCityChange();
});

locateBtn?.addEventListener("click", (event) => {
  event.preventDefault();
  // Keep this handler synchronous so the browser treats geolocation as a user gesture.
  locateByDevice();
});

windyLocateBtn?.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();
  // Keep this handler synchronous so the browser treats geolocation as a user gesture.
  locateWindyEmbed();
});

refreshBtn.addEventListener("click", () => {
  performFullRefresh("manual", { force: true }).catch(() => {
    setRefreshButtonLoading(false);
  });
});

cameraKeyword?.addEventListener("input", () => {
  syncCameraScopeToLocatorCityForKeyword();
  updateCameraMetaText();
  renderAllCameraLists();
  updateCameraMapLayer();
});

cameraRegionSelect?.addEventListener("change", () => {
  updateCameraMetaText();
  renderCameraList();
  updateCameraMapLayer();
});

cameraCitySelect?.addEventListener("change", () => {
  fillCameraDistrictSelect("");
  if (cameraRegionSelect) {
    cameraRegionSelect.value = CAMERA_DISTRICT_ALL_CITY;
  }
  updateCameraMetaText();
  renderAllCameraLists();
  updateCameraMapLayer();
});

freewayRegionSelect?.addEventListener("change", () => {
  const nearestPoint = getNearestFreewayMonitorName();
  fillFreewayInterchangeSelect(nearestPoint);
  renderFreewayCameraList();
});

freewayCitySelect?.addEventListener("change", () => {
  if (freewayCitySelect.value === "follow") {
    applyLocateDefaultFreewayRegion({ force: true });
  }
  const nearestPoint = getNearestFreewayMonitorName();
  fillFreewayInterchangeSelect(nearestPoint);
  renderFreewayCameraList();
});

freewayInterchangeSelect?.addEventListener("change", () => {
  renderFreewayCameraList();
});

subscriptionForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const checkedTopics = new Set(
    [...subscriptionForm.querySelectorAll("input[name='topic']:checked")].map((item) => item.value)
  );
  const topics = SUBSCRIPTION_TOPIC_ORDER.filter((topic) => checkedTopics.has(topic));
  appState.subscription = {
    email: subscriberEmail.value.trim(),
    topics,
    city: citySelect.value,
    township: townshipSelect.value
  };
  localStorage.setItem(SUBSCRIPTION_STORAGE_KEY, JSON.stringify(appState.subscription));
  await initServiceWorker();
  await ensureNotificationPermission();
  let mailStatus = "";
  try {
    if (topics.includes("weather") && !appState.weather?.current) {
      await fetchWeather();
    }
    const mail = await registerSubscriptionEmailDelivery(appState.subscription);
    if (mail.confirmationSent) {
      mailStatus = "已寄出中文訂閱確認信，請至信箱開啟確認信並點選「點此確認並返回通報平台」。";
    } else if (mail.activationHint) {
      mailStatus = "請至信箱開啟確認信並點選連結（若為首次收件需先啟用 FormSubmit）。";
    }
  } catch {
    mailStatus = "若未收到通知信，請查看垃圾郵件或再按一次儲存訂閱。";
  }
  try {
    await enableBackgroundNotifications(appState.subscription);
  } catch {
    /* ignore */
  }
  persistSubscriptionForBackground(appState.subscription).catch(() => {});
  recordSubscriberSnapshot(appState.subscription);
  await publishSubscriptionSavedNotification({ mailStatus });
  if (isForecastNotifyArmedByLocate()) {
    await sendSubscriptionNotification({ force: true, inPage: false });
    renderSubscriptionStatus(mailStatus ? `訂閱完成。${mailStatus}` : "訂閱完成。");
  } else {
    renderSubscriptionStatus(["訂閱已儲存，通知已發布。", mailStatus].filter(Boolean).join(""));
  }
  clearSubscriptionHint();
});

testNotificationBtn?.addEventListener("click", async () => {
  await sendPwaTestNotification();
  if (appState.subscription?.email && isForecastNotifyArmedByLocate()) {
    await sendSubscriptionNotification({ force: true });
  }
});

document.addEventListener("visibilitychange", () => {
  if (!document.hidden && appState.subscription?.email && appState.autoRefreshEnabled) {
    performFullRefresh("auto").catch(() => {});
  }
});

function applyAutoRefreshIntervalSelection() {
  if (!autoRefreshIntervalSelect) {
    return;
  }
  const minutes = Number(autoRefreshIntervalSelect.value);
  if (!AUTO_REFRESH_OPTIONS[minutes]) {
    return;
  }
  appState.autoRefreshIntervalMinutes = minutes;
  localStorage.setItem(AUTO_REFRESH_STORAGE_KEY, String(minutes));
  beginAutoRefreshCountdown();
}

autoRefreshIntervalSelect?.addEventListener("change", applyAutoRefreshIntervalSelection);

function syncNoticeDetailsOpen() {
  const noticeDetails = document.querySelector("#noticeDetails");
  if (!noticeDetails) {
    return;
  }
  noticeDetails.open = window.matchMedia("(min-width: 861px)").matches;
}

const DESKTOP_NOTIFY_MQ = "(min-width: 861px)";
const DESKTOP_NOTIFY_MIN_PX = 13;

function isDesktopNotifyLayout() {
  return window.matchMedia(DESKTOP_NOTIFY_MQ).matches;
}

function clearDesktopNotifyFitStyles(alert) {
  if (!alert) {
    return;
  }
  alert.classList.remove("is-notify-scroll");
  alert.style.fontSize = "";
  alert.style.overflow = "";
  alert.style.maxHeight = "";
  alert.style.height = "";
  alert
    .querySelectorAll(".in-page-alert-title, .in-page-alert-body, .in-page-alert-line, .in-page-alert-close")
    .forEach((el) => {
      el.style.fontSize = "";
      el.style.overflow = "";
      el.style.whiteSpace = "";
      el.style.textOverflow = "";
      el.style.lineHeight = "";
      el.style.gap = "";
    });
}

function scheduleDesktopNotifyFit(alert) {
  if (!alert) {
    return;
  }
  let tries = 0;
  const run = () => {
    if (!alert.isConnected) {
      return;
    }
    const fitted = fitDesktopNotifyBox(alert);
    tries += 1;
    if (!fitted && tries < 10) {
      window.requestAnimationFrame(run);
    }
  };
  window.requestAnimationFrame(run);
}

function fitDesktopNotifyBox(alert) {
  if (!alert || !isDesktopNotifyLayout()) {
    return false;
  }
  const titleEl = alert.querySelector(".in-page-alert-title");
  const bodyHost = alert.querySelector(".in-page-alert-body");
  const closeBtn = alert.querySelector(".in-page-alert-close");
  const lines = [...(bodyHost?.querySelectorAll(".in-page-alert-line") || [])];

  clearDesktopNotifyFitStyles(alert);

  const limit = Math.min(window.innerHeight * 0.88, 920);

  const titleStart = Math.round(parseFloat(getComputedStyle(titleEl || alert).fontSize) || 18);
  const bodyStart = Math.round(parseFloat(getComputedStyle(lines[0] || titleEl || alert).fontSize) || 15);
  const closeStart = Math.round(parseFloat(getComputedStyle(closeBtn || alert).fontSize) || 14);

  const applySizes = (titlePx, bodyPx, closePx) => {
    if (titleEl) {
      titleEl.style.fontSize = `${titlePx}px`;
    }
    lines.forEach((lineEl) => {
      lineEl.style.fontSize = `${bodyPx}px`;
    });
    if (closeBtn) {
      closeBtn.style.fontSize = `${closePx}px`;
    }
  };

  const fits = () => {
    if (!alert.clientWidth) {
      return false;
    }
    return alert.scrollHeight <= limit + 2;
  };

  if (!alert.clientWidth) {
    return false;
  }

  if (fits()) {
    return true;
  }

  let low = DESKTOP_NOTIFY_MIN_PX;
  let high = Math.max(DESKTOP_NOTIFY_MIN_PX, bodyStart);
  let best = DESKTOP_NOTIFY_MIN_PX;
  const titleRatio = titleStart / Math.max(bodyStart, 1);
  const closeRatio = closeStart / Math.max(bodyStart, 1);
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    applySizes(
      Math.max(DESKTOP_NOTIFY_MIN_PX, Math.min(titleStart, Math.round(mid * titleRatio))),
      mid,
      Math.max(DESKTOP_NOTIFY_MIN_PX, Math.min(closeStart, Math.round(mid * closeRatio)))
    );
    if (fits()) {
      best = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  applySizes(
    Math.max(DESKTOP_NOTIFY_MIN_PX, Math.min(titleStart, Math.round(best * titleRatio))),
    best,
    Math.max(DESKTOP_NOTIFY_MIN_PX, Math.min(closeStart, Math.round(best * closeRatio)))
  );

  if (!fits()) {
    alert.classList.add("is-notify-scroll");
    alert.style.overflow = "auto";
    if (bodyHost) {
      bodyHost.style.overflow = "auto";
    }
  }
  return true;
}

function refreshDoneAlertFits(alert, bodyHost) {
  const slack = 2;
  if (!alert.clientHeight) {
    return false;
  }
  if (alert.scrollHeight > alert.clientHeight + slack) {
    return false;
  }
  if (bodyHost) {
    if (!bodyHost.clientHeight) {
      return false;
    }
    if (bodyHost.scrollHeight > bodyHost.clientHeight + slack) {
      return false;
    }
  }
  return true;
}

function scheduleRefreshDoneAlertFit(alert) {
  if (!alert) {
    return;
  }
  let tries = 0;
  const run = () => {
    if (!alert.isConnected) {
      return;
    }
    const fitted = fitRefreshDoneAlertText(alert);
    tries += 1;
    if (!fitted && tries < 10) {
      window.requestAnimationFrame(run);
    }
  };
  window.requestAnimationFrame(run);
}

function fitRefreshDoneAlertText(alert) {
  if (!alert) {
    return false;
  }
  const titleEl = alert.querySelector(".in-page-alert-title");
  const bodyHost = alert.querySelector(".in-page-alert-body");
  const closeBtn = alert.querySelector(".in-page-alert-close");
  const lines = [...(bodyHost?.querySelectorAll(".in-page-alert-line") || [])];
  alert.style.overflow = "hidden";
  if (bodyHost) {
    bodyHost.style.overflow = "hidden";
    bodyHost.style.minHeight = "0";
  }
  const cardWidth = Math.floor(alert.clientWidth || alert.getBoundingClientRect().width || 0);
  const cardHeight = Math.floor(alert.clientHeight || alert.getBoundingClientRect().height || 0);
  if (!cardWidth || !cardHeight) {
    return false;
  }

  const applyTitle = (px) => {
    if (!titleEl) {
      return;
    }
    titleEl.style.whiteSpace = "nowrap";
    titleEl.style.overflow = "hidden";
    titleEl.style.lineHeight = "1.2";
    titleEl.style.fontSize = `${px}px`;
  };

  const applyBody = (px) => {
    const lineHeight = px < 13 ? "1.18" : px < 16 ? "1.25" : "1.35";
    const gap = px <= 12 ? 2 : px <= 14 ? 3 : px <= 18 ? 6 : 10;
    lines.forEach((lineEl) => {
      lineEl.style.whiteSpace = "normal";
      lineEl.style.overflow = "hidden";
      lineEl.style.lineHeight = lineHeight;
      lineEl.style.fontSize = `${px}px`;
    });
    if (bodyHost) {
      bodyHost.style.gap = `${gap}px`;
    }
  };

  const manyLines = lines.length >= 6;
  const titlePrefMax = Math.min(72, Math.max(28, Math.floor(cardWidth * 0.14)));
  const titleAbsMin = manyLines ? 16 : 18;
  const bodyPrefMax = Math.min(40, Math.max(manyLines ? 16 : 20, Math.floor(cardWidth * (manyLines ? 0.042 : 0.055))));
  const bodyPrefMin = manyLines ? 13 : 20;
  const bodyAbsMin = 10;

  if (titleEl) {
    const titleWidth = Math.floor(titleEl.getBoundingClientRect().width || cardWidth);
    fitSingleLineText(titleEl, {
      maxPx: titlePrefMax,
      minPx: titleAbsMin,
      fillRatio: 0.96,
      availablePx: titleWidth
    });
  }

  if (!bodyHost || !lines.length) {
    return true;
  }

  const tryBodySize = (minPx, maxPx) => {
    let low = minPx;
    let high = Math.max(minPx, maxPx);
    let best = minPx;
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      applyBody(mid);
      if (refreshDoneAlertFits(alert, bodyHost)) {
        best = mid;
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    applyBody(best);
    return refreshDoneAlertFits(alert, bodyHost);
  };

  if (tryBodySize(bodyPrefMin, bodyPrefMax)) {
    return true;
  }

  if (titleEl) {
    const currentTitle = Number.parseInt(titleEl.style.fontSize, 10) || titlePrefMax;
    let titleLow = titleAbsMin;
    let titleHigh = Math.max(titleAbsMin, currentTitle);
    let titleBest = titleAbsMin;
    while (titleLow <= titleHigh) {
      const mid = Math.floor((titleLow + titleHigh) / 2);
      applyTitle(mid);
      if (tryBodySize(bodyAbsMin, bodyPrefMax)) {
        titleBest = mid;
        titleLow = mid + 1;
      } else {
        titleHigh = mid - 1;
      }
    }
    applyTitle(titleBest);
    if (tryBodySize(bodyAbsMin, bodyPrefMax)) {
      return true;
    }
  } else if (tryBodySize(bodyAbsMin, bodyPrefMax)) {
    return true;
  }

  if (closeBtn) {
    closeBtn.style.minHeight = "36px";
    closeBtn.style.padding = "6px 10px";
    closeBtn.style.fontSize = "13px";
  }
  alert.style.gap = "6px";
  alert.style.padding = "10px 12px";
  applyTitle(titleAbsMin);
  tryBodySize(bodyAbsMin, bodyPrefMax);
  alert.style.overflow = "hidden";
  if (bodyHost) {
    bodyHost.style.overflow = "hidden";
  }
  return true;
}

function fitSingleLineText(element, { maxPx, minPx, fillRatio = 1, fillLine = false, availablePx } = {}) {
  if (!element) {
    return;
  }
  const parent = element.parentElement;
  if (!parent) {
    return;
  }
  element.style.whiteSpace = "nowrap";
  element.style.width = "100%";
  element.style.maxWidth = "100%";
  element.style.minWidth = "0";
  element.style.boxSizing = "border-box";
  element.style.letterSpacing = "";
  const parentWidth = Math.floor(parent.getBoundingClientRect().width);
  const selfWidth = Math.floor(element.getBoundingClientRect().width);
  const fullWidth =
    Number.isFinite(availablePx) && availablePx > 0
      ? Math.floor(availablePx)
      : Math.max(0, selfWidth || parentWidth);
  if (!fullWidth) {
    return;
  }
  const available = Math.max(1, Math.floor(fullWidth * Math.min(1, Math.max(0.9, fillRatio || 1))));
  const upper = Number.isFinite(maxPx) ? maxPx : Math.max(16, Math.floor(available * 0.12));
  const lower = Number.isFinite(minPx) ? minPx : 10;
  let low = lower;
  let high = Math.max(lower, upper);
  let best = lower;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    element.style.fontSize = `${mid}px`;
    if (element.scrollWidth <= available + 0.5) {
      best = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  element.style.fontSize = `${best}px`;

  const used = element.scrollWidth;
  const leftover = available - used;
  const textLength = Math.max(1, (element.textContent || "").trim().length);
  if (leftover <= 0.5 || textLength < 2) {
    return;
  }
  if (fillLine) {
    const gaps = Math.max(1, textLength - 1);
    let lowTrack = 0;
    let highTrack = leftover / gaps;
    let bestTrack = 0;
    for (let i = 0; i < 14; i += 1) {
      const mid = (lowTrack + highTrack) / 2;
      element.style.letterSpacing = `${mid}px`;
      if (element.scrollWidth <= available + 0.5) {
        bestTrack = mid;
        lowTrack = mid;
      } else {
        highTrack = mid;
      }
    }
    element.style.letterSpacing = bestTrack > 0.04 ? `${bestTrack.toFixed(3)}px` : "";
    return;
  }
  if (textLength > 8) {
    const tracking = Math.min(1.6, leftover / textLength);
    element.style.letterSpacing = `${tracking.toFixed(3)}px`;
    if (element.scrollWidth > available + 0.5) {
      element.style.letterSpacing = "";
    }
  }
}

function fitSubscriptionTopicTexts() {
  document.querySelectorAll(".topic-option .topic-option-text").forEach((element) => {
    clearFittedTextStyles(element);
  });
}

function clearFittedTextStyles(element) {
  if (!element) {
    return;
  }
  element.style.fontSize = "";
  element.style.letterSpacing = "";
  element.style.whiteSpace = "";
  element.style.width = "";
  element.style.maxWidth = "";
  element.style.minWidth = "";
}

function fitHeroTexts() {
  const title = document.querySelector(".hero h1");
  const subtitle = document.querySelector(".hero .subtitle.hero-fit-text");
  const riskBadge = document.querySelector("#typhoonRiskBadge.hero-fit-text");
  const content = document.querySelector(".hero-content");
  const width = Math.floor(content?.getBoundingClientRect().width || document.documentElement.clientWidth || 0);
  if (title) {
    clearFittedTextStyles(title);
  }
  fitSingleLineText(subtitle, {
    maxPx: Math.min(18, Math.floor(width * 0.038)),
    minPx: 9
  });
  const riskParentWidth = Math.floor(
    riskBadge?.parentElement?.getBoundingClientRect().width || document.documentElement.clientWidth || 0
  );
  fitSingleLineText(riskBadge, {
    maxPx: Math.min(44, Math.floor(riskParentWidth * 0.14)),
    minPx: 18
  });
  fitSubscriptionTopicTexts();
  fitClosureMetaLine();
  fitClosureEmptyMessage();
  fitWeeklyForecastSummary();
}

let heroFitRaf = 0;
function scheduleHeroTextFit() {
  window.cancelAnimationFrame(heroFitRaf);
  heroFitRaf = window.requestAnimationFrame(fitHeroTexts);
}

initRegionSelectors();
initWeatherIconThemePicker();
loadSubscription();
renderSubscriptionStatus();
updateNotificationHint();
restoreWindyLocateFocus();
updateWindyTrackEmbed();
syncNoticeDetailsOpen();
fitHeroTexts();
window.addEventListener("resize", () => {
  scheduleHeroTextFit();
  unlockWindyWrapSize();
  if (warningMap) {
    warningMap.invalidateSize();
  }
});
window.addEventListener("orientationchange", () => {
  scheduleHeroTextFit();
  unlockWindyWrapSize();
  window.setTimeout(() => {
    if (warningMap) {
      warningMap.invalidateSize();
    }
  }, 250);
});
if (document.fonts?.ready) {
  document.fonts.ready.then(scheduleHeroTextFit).catch(() => {});
}
window.matchMedia("(min-width: 861px)").addEventListener("change", syncNoticeDetailsOpen);
initPwaInstallExperience();
initPwaWeatherTorchExperience();
loadNotifyHistory();
renderNotifyHistory();
renderNotifyPermissionStatus();
updatePwaTestChecklist();
initServiceWorker()
  .then(async () => {
    renderNotifyPermissionStatus();
    updatePwaTestChecklist();
    updateNotificationHint();
    await pinAndroidWeatherStatusTray();
    if (appState.subscription?.email) {
      await enableBackgroundNotifications(appState.subscription).catch(() => {});
    }
    return flushPendingUtilityAlerts();
  })
  .catch(() => {
    updateNotificationHint();
    updatePwaTestChecklist();
  });
blackScreenCameraIds = loadBlackScreenCameraIds();
earthquakeDetailSheetClose?.addEventListener("click", () => {
  closeEarthquakeDetailSheet();
});
earthquakeDetailSheet
  ?.querySelector(".eq-detail-sheet-backdrop")
  ?.addEventListener("click", () => {
    closeEarthquakeDetailSheet();
  });
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeEarthquakeDetailSheet();
  }
});
document.querySelector("#airDetails")?.addEventListener("toggle", () => {
  syncAirDetailsSummaryLabel();
});
initVisitorCounter();
initLikeCounter();
performFullRefresh("manual");
fetchRoadCameras();
initWarningMap();
startAutoRefreshTimers();
