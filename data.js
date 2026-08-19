// 关西五日游攻略数据
export const trip = {
  title: "国庆关西五日游",
  subtitle: "大阪 · 京都 · 神户 · 天桥立",
  dates: "2026年10月1日 — 10月5日",
  season: "初秋红叶 · 五天四夜",
  heroImage: "https://assets.with.tencent.com/default/0e21aaea-fc9e-4c8a-b347-f0fac918c3f2/image_1787111331_3_3.jpg",
  days: [
    {
      day: 1,
      date: "10.1",
      weekday: "周四",
      theme: "抵达大阪 · 住难波酒店",
      city: "大阪",
      emoji: "🌃",
      color: "#C73E3A",
      summary: "落地关西机场，乘坐南海电铁直达难波，道顿堀吃一顿地道宵夜开启旅程。",
      hotel: "难波酒店",
      activities: [
        {
          time: "20:00",
          title: "关西机场落地",
          location: "关西国际机场",
          desc: "办理入境手续，机场内办理 airporter 行李托运，大件行李直送京都酒店，轻装去难波。",
          image: "https://assets.with.tencent.com/default/9ad34869-177f-409a-8d53-0e471aea368c/image_1787111350_1_1.jpg",
          tips: ["出关后先兑换交通卡 ICOCA / 购买南海电铁车票", "airporter 柜台在到达大厅，凭订单办理寄送"]
        },
        {
          time: "20:30",
          title: "南海电铁直达难波",
          location: "南海难波站",
          desc: "乘坐南海电铁空港线，38 分钟即可直达难波站，方便快捷。",
          image: "",
          tips: ["推荐购买「南海电铁特急 Rapi:t」对号入座，更舒适", "末班车约 23:30，时间充裕"]
        },
        {
          time: "21:30",
          title: "入住 + 道顿堀宵夜",
          location: "道顿堀 · 心斋桥",
          desc: "酒店办理入住后，步行至道顿堀觅食，打卡格力高跑男招牌，尝一碗金龙拉面或章鱼烧。",
          image: "https://assets.with.tencent.com/default/c3a55bed-831d-4cfc-ba24-3d783e8955cb/image_1787111327_1_3.jpg",
          tips: ["格力高招牌在道顿堀川旁，夜景最佳", "推荐宵夜：金龙拉面、元祖章鱼烧、蟹道乐"]
        }
      ],
      transport: "关西机场 → 南海电铁（38分钟）→ 难波",
  luggage: "23点前预约DAY2的大阪-京都行李airporter服务",
      food: ["金龙拉面", "元祖章鱼烧", "蟹道乐"]
    },
    {
      day: 2,
      date: "10.2",
      weekday: "周五",
      theme: "难波 → 京都 · 古都巡礼",
      city: "京都",
      emoji: "⛩️",
      color: "#A3302D",
      summary: "从难波转车前往京都，下午逛清水寺与伏见稻荷大社，感受古都的千年风韵。",
      hotel: "京都酒店",
      activities: [
        {
          time: "11:30",
          title: "难波出发前往京都",
          location: "难波 → 京都站",
          desc: "难波出发，梅田转乘 JR 新快速前往京都站，全程约 1 小时 10 分钟。",
          image: "",
          tips: ["JR 新快速比普通车更快，注意看站台信息", "沿途可欣赏大阪到京都的城市风景"]
        },
        {
          
          time: "14:00–16:30",
          title: "清水寺 + 三年坂二年坂",
          location: "清水寺 · 东山区",
          desc: "登上清水舞台俯瞰京都，漫步三年坂、二年坂的石板古街，感受最具京都风情的小巷。",
          image: "https://assets.with.tencent.com/default/0e21aaea-fc9e-4c8a-b347-f0fac918c3f2/image_1787111331_3_3.jpg",
          tips: ["清水寺门票约 400 日元", "三年坂二年坂沿途有抹茶甜品、和服租赁店", "傍晚光线柔和，适合拍照"]
        },
        {
          time: "17:00–18:30",
          title: "伏见稻荷大社",
          location: "伏见区",
          desc: "走进绵延山间的千本鸟居，朱红色鸟居隧道蔚为壮观，是京都最具代表性的风景。",
          image: "https://assets.with.tencent.com/default/77bd8cc1-6f63-40c3-a584-9b5423693933/image_1787111333_2_1.jpg",
          tips: ["免费参观，全年开放", "登上山顶「稻荷山」约需 2 小时，可量力而行", "傍晚游客渐少，光影更美"]
        },
        {
          time: "19:30",
          title: "回酒店 + 四条河原町晚餐",
          location: "四条河原町",
          desc: "返回酒店休息，前往四条河原町商圈用餐，这里是京都最繁华的购物与美食街。",
          image: "https://assets.with.tencent.com/default/b058c90e-a595-415a-a37d-06e3a7e76019/image_1787111329_2_3.jpg",
          tips: ["河原町商店街汇集众多居酒屋、寿司店", "可体验怀石料理或京都特色汤豆腐"]
        }
      ],
      transport: "难波 → 梅田 → JR新快速（1小时10分）→ 京都站 → 公交/地铁前往各景点",
      luggage: "airporter 将行李从难波酒店直送京都酒店，到店直接取",
      food: ["京都汤豆腐", "抹茶甜品", "怀石料理"]
    },
    {
      day: 3,
      date: "10.3",
      weekday: "周六",
      theme: "京都 → 天桥立 · 直达大阪梅田",
      city: "天桥立 / 大阪",
      emoji: "🌉",
      color: "#D4A24E",
      summary: "清晨出发探访「日本三景」之一的天桥立，傍晚乘高速巴士返回大阪梅田，夜观空中庭园。",
      hotel: "梅田酒店",
      activities: [
        {
          time: "08:00",
          title: "JR 特急桥立号出发",
          location: "京都站",
          desc: "从京都站乘坐 JR 特急「桥立号」前往天桥立站，车程约 2 小时 15 分钟。",
          image: "",
          tips: ["特急号需提前指定席，建议提前购票", "沿途可欣赏日本海方向的山野风光"]
        },
        {
          time: "10:15",
          title: "天桥立 · 沙洲 + 伞松公园",
          location: "天桥立",
          desc: "租单车骑行在沙洲之上，登上伞松公园缆车，从高处俯瞰「日本三景」的天桥立全景，形似飞龙升天。",
          image: "https://assets.with.tencent.com/default/03c34e49-e5b2-400a-9a05-302cbe794c3a/image_1787111334_1_1.jpg",
          tips: ["租单车约 400 日元，骑行全程约 1 小时", "伞松公园缆车往返约 680 日元", "「股のぞき」倒看天桥立是经典打卡姿势"]
        },
        {
          time: "15:30",
          title: "高速巴士返回大阪梅田",
          location: "天桥立站 → 阪急三番街",
          desc: "从天桥立站乘坐高速巴士（16:45 班次），19:28 抵达大阪梅田阪急三番街。",
          image: "",
          tips: ["巴士约 2 小时 40 分钟，途中可在车上休息", "建议提前在便利店备好零食和水"]
        },
        {
          time: "19:30–21:30",
          title: "梅田蓝天大厦 · 空中庭园",
          location: "梅田蓝天大厦",
          desc: "入住梅田酒店后，登上海拔 173 米的空中庭园展望台，俯瞰大阪璀璨夜景。",
          image: "https://assets.with.tencent.com/default/4ad9afe6-bf43-488a-8f19-80aadaf90a9d/image_1787111335_1_1.jpg",
          tips: ["展望台门票约 1500 日元，营业至 22:30", "透明观景电梯与空中回廊是拍照点", "夜景灯光亮至 23:00 左右"]
        }
      ],
      transport: "京都站 → JR特急桥立号（约2小时）→ 天桥立 → 高速巴士（2小时40分）→ 大阪梅田",
      luggage: "airporter 将行李从京都酒店直送梅田酒店，空手玩天桥立、坐巴士",
      food: ["天桥立海鲜丼", "大阪梅田居酒屋"]
    },
    {
      day: 4,
      date: "10.4",
      weekday: "周日",
      theme: "神户半日 · 大阪城 · 梅田收尾",
      city: "神户 / 大阪",
      emoji: "🐂",
      color: "#6B7BA8",
      summary: "上午前往神户逛异人馆街、品尝神户牛，下午游大阪城天守阁，晚上梅田商圈血拼收尾。",
      hotel: "梅田酒店",
      activities: [
        {
          time: "09:30",
          title: "梅田出发前往神户",
          location: "梅田 → 神户三宫",
          desc: "梅田出发，乘坐 JR 直达神户三宫站，车程仅约 30 分钟。",
          image: "",
          tips: ["JR 快速/新快速约 30 分钟即可到达", "神户三宫站是神户核心交通枢纽"]
        },
        {
          time: "10:00–11:30",
          title: "北野异人馆街",
          location: "神户北野町",
          desc: "漫步山坡上的欧式洋房群，参观「风见鸡之馆」「萌黄之馆」，感受神户的异国风情。",
          image: "https://assets.with.tencent.com/default/b3e3f86a-9d49-41ee-ab30-98cf2aaa6acf/image_1787111337_1_1.jpg",
          tips: ["风见鸡之馆是神户地标，门票约 550 日元", "通票可参观多馆，更划算", "山坡上有星巴克北野物语馆值得打卡"]
        },
        {
          time: "12:00–13:30",
          title: "石田屋午市 · 神户牛",
          location: "神户三宫 · 石田屋",
          desc: "在神户牛铁板烧专门店「石田屋」享用午市套餐，品尝入口即化的顶级神户和牛。",
          image: "https://assets.with.tencent.com/default/1112e410-6a2d-4567-970e-fd819560b1a1/image_1787111343_1_1.jpg",
          tips: ["午市套餐比晚市更实惠，建议提前预约", "主厨现场铁板烹制，体验感十足"]
        },
        {
          time: "14:00–17:00",
          title: "大阪城公园 + 天守阁",
          location: "大阪城",
          desc: "返回大阪，游览大阪城公园，登天守阁了解丰臣秀吉的历史，俯瞰护城河与城市景观。",
          image: "https://assets.with.tencent.com/default/c497efdb-3033-4371-bf71-6b90639b56b3/image_1787111341_1_1.jpg",
          tips: ["天守阁门票约 600 日元，可乘电梯登顶", "公园内护城河游船是特色体验", "梅林与西之丸庭园四季各有看点"]
        },
        {
          time: "18:00–21:00",
          title: "梅田商圈收尾",
          location: "梅田 · 阪急百货",
          desc: "逛阪急百货购物，登上 HEP FIVE 红色摩天轮，最后在梅田地下街品尝美食收尾。",
          image: "https://assets.with.tencent.com/default/bef81172-41df-43b8-99c9-0bc9c15dd7bf/image_1787111351_2_1.jpg",
          tips: ["HEP FIVE 摩天轮在商场 7 楼，营业至 22:00", "梅田地下街（Whity）美食种类繁多", "阪急百货地下一层甜点区值得一逛"]
        }
      ],
      transport: "梅田 → JR（30分钟）→ 神户三宫 → JR → 大阪城 → 地铁 → 梅田",
      luggage: "全程轻装，行李存放梅田酒店",
      food: ["神户牛铁板烧", "大阪城周边乌冬面", "梅田地下街小吃"]
    },
    {
      day: 5,
      date: "10.5",
      weekday: "周一",
      theme: "返程 · 关西机场",
      city: "大阪",
      emoji: "✈️",
      color: "#3A7D44",
      summary: "退房后乘坐 JR HARUKA 特急直达关西机场，值机购物后返程。",
      hotel: "—",
      activities: [
        {
          time: "09:00",
          title: "酒店退房出发",
          location: "梅田 · 大阪站",
          desc: "办理退房，前往大阪站乘坐 JR HARUKA 特急，45 分钟直达关西机场。",
          image: "",
          tips: ["HARUKA 指定席可提前购买，确保有座", "建议提前 3 小时出发以留足时间"]
        },
        {
          time: "10:00",
          title: "抵达机场 · 值机 + 免税店",
          location: "关西国际机场",
          desc: "抵达机场后办理值机手续，逛机场免税店购买伴手礼。",
          image: "",
          tips: ["白色恋人、东京香蕉、Royce 生巧是热门伴手礼", "免税店需在值机后进入安检区"]
        },
        {
          time: "13:00",
          title: "准时起飞返程",
          location: "关西国际机场",
          desc: "登机返程，结束愉快的关西五日游。",
          image: "",
          tips: ["留意登机口变更广播", "提前整理好随身携带物品"]
        }
      ],
      transport: "大阪站 → JR HARUKA特急（45分钟）→ 关西国际机场",
      luggage: "随身行李直接携带登机",
      food: ["机场免税店伴手礼"]
    }
  ]
};

export const luggageGuide = {
  title: "行李托运全攻略 · airporter",
  desc: "本次行程核心省心技巧：全程使用 airporter 行李寄送服务，解放双手轻松游玩。",
  steps: [
    { title: "Day1 关西机场", detail: "落地后机场办理，大件行李直送京都酒店" },
    { title: "Day2 难波酒店", detail: "行李从难波酒店直送京都酒店，到店直接取" },
    { title: "Day3 京都酒店", detail: "行李从京都酒店直送梅田酒店，空手玩天桥立" },
    { title: "Day5 梅田酒店", detail: "随身行李直接携带，乘 HARUKA 前往机场" }
  ],
  tips: ["提前在官网或 App 预约，填写酒店地址", "每件行李约 2000–2500 日元，视距离而定", "贵重物品、护照、充电宝务必随身携带", "酒店前台通常可协助收发行李"]
};

export const transportGuide = [
  { name: "南海电铁", route: "关西机场 ↔ 难波", time: "约38分钟", note: "空港线，特急 Rapi:t 更舒适", emoji: "🚄" },
  { name: "JR 新快速", route: "大阪 ↔ 京都", time: "约30分钟", note: "梅田转乘，比普通车更快", emoji: "🚅" },
  { name: "JR 特急桥立号", route: "京都 ↔ 天桥立", time: "约2小时", note: "需指定席，提前购票", emoji: "🚂" },
  { name: "高速巴士", route: "天桥立 ↔ 大阪梅田", time: "约2小时40分", note: "16:45班次，19:28到达", emoji: "🚌" },
  { name: "JR 神户线", route: "大阪 ↔ 神户三宫", time: "约30分钟", note: "快速直达，班次密集", emoji: "🚆" },
  { name: "JR HARUKA", route: "大阪 ↔ 关西机场", time: "约45分钟", note: "特急直达，返程首选", emoji: "✈️" }
];

export const foodGuide = [
  { name: "金龙拉面", area: "大阪 · 道顿堀", desc: "道顿堀招牌拉面，豚骨汤底浓郁，宵夜首选", emoji: "🍜" },
  { name: "元祖章鱼烧", area: "大阪 · 道顿堀", desc: "大阪章鱼烧鼻祖，外酥里嫩，排队也要吃", emoji: "🐙" },
  { name: "京都汤豆腐", area: "京都 · 河原町", desc: "古都传统料理，清淡鲜美，豆腐入口即化", emoji: "🍲" },
  { name: "抹茶甜品", area: "京都 · 三年坂", desc: "宇治抹茶冰淇淋、蕨饼，古街边逛边吃", emoji: "🍵" },
  { name: "神户牛铁板烧", area: "神户 · 石田屋", desc: "顶级和牛现场铁板烹制，油花分布均匀", emoji: "🥩" },
  { name: "海鲜丼", area: "天桥立", desc: "日本海新鲜海产，边看海景边享用", emoji: "🍣" }
];

export const packingList = [
  { cat: "证件财物", items: ["护照", "机票行程单", "现金日元", "信用卡", "ICOCA交通卡"] },
  { cat: "电子设备", items: ["手机", "充电宝", "转换插头", "移动WiFi/流量卡", "相机"] },
  { cat: "衣物", items: ["换洗衣物", "舒适步行鞋", "薄外套（10月早晚凉）", "一次性雨衣"] },
  { cat: "日用", items: ["洗漱用品", "常用药品", "防晒霜", "纸巾湿巾"] },
  { cat: "出行必备", items: ["airporter预约凭证", "酒店确认单", "景点预约凭证", "零钱包（硬币多）"] }
];

export const budget = [
  { item: "往返机票", amount: "约 ¥2500–4000", emoji: "✈️" },
  { item: "住宿（4晚）", amount: "约 ¥1500–2500", emoji: "🏨" },
  { item: "交通（含特急/巴士）", amount: "约 ¥800–1200", emoji: "🚄" },
  { item: "餐饮", amount: "约 ¥1200–2000", emoji: "🍱" },
  { item: "景点门票", amount: "约 ¥300–500", emoji: "🎫" },
  { item: "行李托运 airporter", amount: "约 ¥400–600", emoji: "🧳" }
];
