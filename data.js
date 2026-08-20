// 关西五日游攻略数据
export const trip = {
  title: "国庆关西五日游",
  subtitle: "大阪 · 京都 · 神户 · 琵琶湖",
  dates: "2026年10月1日 — 10月5日",
  season: "初秋红叶 · 五天四夜",
  heroImage: "https://assets.with.tencent.com/default/503fc023-2ea0-42b4-8942-2d9dbe8a9dc2/image_1787208126_3_1.jpg",
  days: [
    {
      day: 1,
      date: "10.1",
      weekday: "周四",
      theme: "抵达大阪 · 住难波酒店",
      city: "大阪",
      emoji: "🌃",
      color: "#C73E3A",
      summary: "落地关西机场，VJW 线上通关，南海电铁直达难波，一兰拉面宵夜，预约行李直送。",
      hotel: "难波酒店",
      activities: [
        {
          time: "20:00",
          title: "抵达关西机场",
          location: "关西国际机场",
          desc: "办理入境手续，VJW 线上通关，预留充足时间入关取行李。",
          fee: "",
          image: "https://assets.with.tencent.com/default/9ad34869-177f-409a-8d53-0e471aea368c/image_1787111350_1_1.jpg",
          tips: ["VJW 线上通关，预留 40–60 分钟入关取行李"]
        },
        {
          time: "21:00",
          title: "前往难波",
          location: "南海难波站",
          desc: "乘坐南海电铁特急 Rapi:tα，直达难波站。",
          fee: "1,450円",
          image: "",
          tips: ["车程约 34 分钟，直达难波站"]
        },
        {
          time: "21:35",
          title: "酒店办理入住",
          location: "难波酒店",
          desc: "步行前往酒店办理入住，稍作休整。",
          fee: "",
          image: "",
          tips: ["步行即可到达"]
        },
        {
          time: "22:00",
          title: "一兰拉面（难波御堂筋店）",
          location: "难波 · 一兰拉面",
          desc: "步行 5 分钟前往一兰拉面难波御堂筋店，来一碗地道豚骨拉面。",
          fee: "约1,000円",
          image: "https://assets.with.tencent.com/default/94f03f98-3646-4069-94b9-714f19ac28c2/image_1787196736_1_1.jpg",
          tips: ["门店 21:45 截止点单，注意时间"]
        },
        {
          time: "22:45",
          title: "办理行李直送预约",
          location: "酒店前台",
          desc: "酒店前台预约行李直送，配送至京都四条乌丸大和 ROYNET。",
          fee: "约1,000円",
          image: "",
          tips: ["配送至京都四条乌丸大和 ROYNET，10.2 13:00 前送达"]
        }
      ],
      transport: "关西机场 → 南海电铁 Rapi:tα（约34分钟）→ 难波",
      luggage: "22:45 酒店前台预约行李直送，配送至京都四条乌丸大和 ROYNET，10.2 13:00 前送达",
      food: ["一兰拉面"]
    },
    {
      day: 2,
      date: "10.2",
      weekday: "周五",
      theme: "难波 → 京都 · 古都巡礼",
      city: "京都",
      emoji: "⛩️",
      color: "#A3302D",
      summary: "上午逛黑门市场，乘近铁特急直达京都，下午清水寺、伏见稻荷，晚上四条乌丸晚餐。",
      hotel: "京都四条乌丸大和 ROYNET",
      activities: [
        {
          time: "09:30–11:00",
          title: "难波街区闲逛 + 早午餐（黑门市场）",
          location: "黑门市场",
          desc: "步行逛黑门市场，品尝海鲜丼、河豚鱼皮冻等大阪美食。",
          fee: "约2,000円",
          image: "https://assets.with.tencent.com/default/008ccc77-4cf1-4517-a25a-e15d7426126a/image_1787196727_1_1.jpg",
          tips: ["推荐海鲜丼、河豚鱼皮冻"]
        },
        {
          time: "11:30",
          title: "前往京都站",
          location: "难波 → 京都站",
          desc: "乘坐近铁特急「あをにより」，直达京都站。",
          fee: "820円",
          image: "",
          tips: ["车程约 45 分钟，直达无换乘"]
        },
        {
          time: "12:15",
          title: "京都站前往酒店办理入住",
          location: "京都四条乌丸大和 ROYNET",
          desc: "步行 15 分钟前往酒店，行李预先送达，可线上提前办理入住。",
          fee: "",
          image: "",
          tips: ["行李预先送达，可线上提前办理入住"]
        },
        {
          time: "13:00",
          title: "乌丸御池：新风馆·BAL + 蓝瓶子咖啡",
          location: "乌丸御池",
          desc: "逛新风馆·BAL 商圈，打卡蓝瓶子咖啡六角町屋店。",
          fee: "约800円",
          image: "https://assets.with.tencent.com/default/9f4d1dcc-4f18-49d5-94e2-a8014bdd31b1/image_1787196738_1_1.jpg",
          tips: ["蓝瓶子咖啡六角町屋店由町屋改造，适合拍照"]
        },
        {
          time: "14:00–15:30",
          title: "清水寺 + 三年坂二年坂",
          location: "清水寺 · 东山区",
          desc: "乘巴士前往清水寺，漫步三年坂二年坂石板古街，感受古都风情。",
          fee: "约1,500円",
          image: "https://assets.with.tencent.com/default/0e21aaea-fc9e-4c8a-b347-f0fac918c3f2/image_1787111331_3_3.jpg",
          tips: ["午餐可选汤豆腐定食「奥丹」", "京都巴士一日券 600 日元"]
        },
        {
          time: "16:00–17:30",
          title: "伏见稻荷大社",
          location: "伏见区",
          desc: "游览千本鸟居精华路段，朱红鸟居隧道蔚为壮观。",
          fee: "",
          image: "https://assets.with.tencent.com/default/77bd8cc1-6f63-40c3-a584-9b5423693933/image_1787111333_2_1.jpg",
          tips: ["仅游览千本鸟居精华路段，不登顶"]
        },
        {
          time: "18:00–19:30",
          title: "四条乌丸街区晚餐",
          location: "四条乌丸",
          desc: "步行 5 分钟到四条乌丸街区，享用京都晚餐。",
          fee: "约3,000円",
          image: "",
          tips: ["可选寿喜烧北斗、麺屋美鶴拉面"]
        },
        {
          time: "20:00",
          title: "返回酒店休息",
          location: "京都四条乌丸大和 ROYNET",
          desc: "步行返回酒店休息。",
          fee: "",
          image: "",
          tips: []
        }
      ],
      transport: "难波 → 近铁特急（约45分钟）→ 京都站 → 巴士/步行前往各景点",
      luggage: "行李预先送达京都四条乌丸大和 ROYNET，到店直接取，可线上提前办理入住",
      food: ["黑门市场海鲜丼", "奥丹汤豆腐", "寿喜烧北斗"]
    },
    {
      day: 3,
      date: "10.3",
      weekday: "周六",
      theme: "京都 → 琵琶湖 VALLEY · 直达大阪梅田",
      city: "琵琶湖 / 大阪",
      emoji: "🏔️",
      color: "#2E7D8A",
      summary: "清晨出发前往琵琶湖 VALLEY 乘缆车俯瞰琵琶湖全景，下午乘 JR 前往大阪梅田，傍晚空中庭园看日落。",
      hotel: "梅田酒店",
      activities: [
        {
          time: "09:30",
          title: "京都站前往志贺站",
          location: "京都站 → 志贺站",
          desc: "乘坐 JR 湖西线前往志贺站。",
          fee: "590円",
          image: "",
          tips: ["车程 36–40 分钟，直达"]
        },
        {
          time: "10:10",
          title: "志贺站前往琵琶湖 VALLEY 缆车站",
          location: "志贺站 → 琵琶湖 VALLEY",
          desc: "乘坐琵琶湖ハイ線巴士前往缆车站。",
          fee: "410円",
          image: "",
          tips: ["车程约 10 分钟，班次约每小时 2–3 班"]
        },
        {
          time: "10:25–11:30",
          title: "琵琶湖 VALLEY 缆车往返游览",
          location: "琵琶湖 VALLEY",
          desc: "乘两段式缆车上山，从山顶观景台俯瞰琵琶湖全景。",
          fee: "2,200円",
          image: "https://assets.with.tencent.com/default/ff8cd237-45cb-4c4d-9f43-dfe9bc74ed1c/image_1787196726_1_1.jpg",
          tips: ["两段式缆车，山顶观景台停留约 20 分钟"]
        },
        {
          time: "11:40",
          title: "缆车站返回志贺站",
          location: "琵琶湖 VALLEY → 志贺站",
          desc: "乘坐巴士返回志贺站。",
          fee: "410円",
          image: "",
          tips: ["巴士车程约 10 分钟"]
        },
        {
          time: "12:10",
          title: "志贺站简餐",
          location: "志贺站",
          desc: "在志贺站简单用餐，补充体力。",
          fee: "约1,200円",
          image: "",
          tips: ["可选车站便当琵琶湖鳗鱼饭"]
        },
        {
          time: "12:40",
          title: "志贺站前往大阪梅田",
          location: "志贺站 → 大阪梅田",
          desc: "乘坐 JR 前往大阪梅田。",
          fee: "1,520円",
          image: "",
          tips: ["车程约 70 分钟"]
        },
        {
          time: "13:50",
          title: "梅田酒店办理入住",
          location: "梅田酒店",
          desc: "步行前往酒店办理入住，行李预先送达。",
          fee: "",
          image: "",
          tips: ["行李预先送达酒店"]
        },
        {
          time: "18:30",
          title: "梅田蓝天大厦观景台",
          location: "梅田蓝天大厦",
          desc: "登上海拔 173 米的空中庭园展望台，观赏日落及城市夜景。",
          fee: "1,000円",
          image: "https://assets.with.tencent.com/default/4ad9afe6-bf43-488a-8f19-80aadaf90a9d/image_1787111335_1_1.jpg",
          tips: ["观赏日落及城市夜景"]
        }
      ],
      transport: "京都站 → JR湖西线（36-40分钟）→ 志贺站 → 巴士 → 琵琶湖VALLEY → JR（约70分钟）→ 大阪梅田",
      luggage: "行李预先送达梅田酒店，到店直接取",
      food: ["琵琶湖鳗鱼饭"]
    },
    {
      day: 4,
      date: "10.4",
      weekday: "周日",
      theme: "神户牛午餐 · 舞子公园 · 梅田收尾",
      city: "神户 / 大阪",
      emoji: "🐂",
      color: "#6B7BA8",
      summary: "上午前往神户三之宫品尝神户牛，下午到舞子公园眺望明石海峡大桥，傍晚返回梅田自由活动。",
      hotel: "梅田酒店",
      activities: [
        {
          time: "11:00",
          title: "梅田前往神户三之宫",
          location: "梅田 → 神户三之宫",
          desc: "乘坐 JR 神户线前往神户三之宫。",
          fee: "620円",
          image: "",
          tips: ["车程约 30 分钟"]
        },
        {
          time: "11:40–13:10",
          title: "三之宫神户牛肉午餐",
          location: "神户三之宫 · Mouriya",
          desc: "在神户牛铁板烧名店 Mouriya 三宫本店享用午市套餐。",
          fee: "约6,000円",
          image: "https://assets.with.tencent.com/default/10949d32-fbfb-4cae-88a3-f2d91d63f6c6/image_1787196741_2_1.jpg",
          tips: ["门店 Mouriya 三宫本店，午市 11:00–15:00，建议提前预约"]
        },
        {
          time: "13:30",
          title: "三之宫前往舞子站",
          location: "神户三之宫 → 舞子站",
          desc: "乘坐 JR 山阳本线前往舞子站。",
          fee: "320円",
          image: "",
          tips: ["车程约 22–25 分钟，直达无换乘"]
        },
        {
          time: "14:00–16:00",
          title: "舞子公园游览",
          location: "舞子公园 · 明石海峡大桥",
          desc: "出站步行 5 分钟入园，登上舞子海上散步走廊，眺望明石海峡大桥。",
          fee: "300円",
          image: "https://assets.with.tencent.com/default/bfd01113-b553-4c83-9b11-abb7d3a2670a/image_1787196735_2_1.jpg",
          tips: ["舞子海上散步走廊门票，眺望明石海峡大桥", "周日节假日票价"]
        },
        {
          time: "16:20",
          title: "舞子站返回大阪梅田",
          location: "舞子站 → 大阪梅田",
          desc: "乘坐 JR 神户线快速返回大阪梅田。",
          fee: "840円",
          image: "",
          tips: ["车程约 50 分钟，直达大阪站，步行连通梅田"]
        },
        {
          time: "17:20",
          title: "梅田自由活动、购物休整",
          location: "梅田 · 阪急百货",
          desc: "梅田商圈自由活动，可逛 HEP FIVE 摩天轮、阪急百货。",
          fee: "",
          image: "https://assets.with.tencent.com/default/bef81172-41df-43b8-99c9-0bc9c15dd7bf/image_1787111351_2_1.jpg",
          tips: ["可前往 HEP FIVE 摩天轮、阪急百货"]
        }
      ],
      transport: "梅田 → JR神户线（约30分钟）→ 神户三之宫 → JR山阳本线（约22-25分钟）→ 舞子站 → JR神户线快速（约50分钟）→ 梅田",
      luggage: "全程轻装，行李存放梅田酒店",
      food: ["Mouriya神户牛"]
    },
    {
      day: 5,
      date: "10.5",
      weekday: "周一",
      theme: "返程 · 关西机场",
      city: "大阪",
      emoji: "✈️",
      color: "#3A7D44",
      summary: "退房后乘坐 JR 关空快速直达关西机场，值机购物后返程。",
      hotel: "—",
      activities: [
        {
          time: "08:00",
          title: "梅田出发前往关西机场",
          location: "梅田 → 关西机场",
          desc: "乘坐 JR 关空快速前往关西机场。",
          fee: "1,180円",
          image: "",
          tips: ["车程约 64 分钟，经大阪站乘车"]
        },
        {
          time: "09:10",
          title: "抵达关西机场，办理值机",
          location: "关西国际机场",
          desc: "抵达机场办理值机手续。",
          fee: "",
          image: "",
          tips: ["国际航班预留 3 小时值机时间"]
        },
        {
          time: "09:10–12:30",
          title: "机场免税店购物",
          location: "关西国际机场",
          desc: "逛机场免税店购买伴手礼。",
          fee: "",
          image: "",
          tips: ["T1 南楼商铺齐全"]
        },
        {
          time: "13:30",
          title: "航班起飞",
          location: "关西国际机场",
          desc: "登机返程，结束愉快的关西五日游。",
          fee: "",
          image: "",
          tips: ["留意登机口变更广播"]
        }
      ],
      transport: "梅田 → JR关空快速（约64分钟）→ 关西国际机场",
      luggage: "随身行李直接携带登机",
      food: ["机场免税店伴手礼"]
    }
  ]
};

export const luggageGuide = {
  title: "行李托运全攻略 · airporter",
  desc: "本次行程核心省心技巧：全程使用 airporter 行李寄送服务，解放双手轻松游玩。",
  steps: [
    { title: "Day1 难波酒店", detail: "22:45 前台预约，配送至京都四条乌丸大和 ROYNET，10.2 13:00 前送达" },
    { title: "Day2 京都酒店", detail: "行李预先送达，可线上提前办理入住" },
    { title: "Day3 梅田酒店", detail: "行李预先送达梅田酒店，到店直接取" },
    { title: "Day5 梅田酒店", detail: "随身行李直接携带，乘 JR 关空快速前往机场" }
  ],
  tips: ["提前在官网或 App 预约，填写酒店地址", "每件行李约 1,000–2,500 日元，视距离而定", "贵重物品、护照、充电宝务必随身携带", "酒店前台通常可协助收发行李"]
};

export const transportGuide = [
  { name: "南海电铁 Rapi:tα", route: "关西机场 ↔ 难波", time: "约34分钟", note: "特急直达，1,450円", emoji: "🚄" },
  { name: "近铁特急", route: "难波 ↔ 京都", time: "约45分钟", note: "あをにより，直达无换乘，820円", emoji: "🚅" },
  { name: "JR 湖西线", route: "京都 ↔ 志贺站", time: "36-40分钟", note: "前往琵琶湖 VALLEY，590円", emoji: "🚂" },
  { name: "琵琶湖巴士 + 缆车", route: "志贺站 ↔ 琵琶湖VALLEY", time: "约10分钟", note: "巴士410円 + 缆车2,200円", emoji: "🚠" },
  { name: "JR 神户线", route: "大阪 ↔ 神户三之宫", time: "约30分钟", note: "快速直达，620円", emoji: "🚆" },
  { name: "JR 山阳本线", route: "三之宫 ↔ 舞子站", time: "22-25分钟", note: "前往舞子公园，320円", emoji: "🌉" },
  { name: "JR 关空快速", route: "大阪 ↔ 关西机场", time: "约64分钟", note: "返程首选，1,180円", emoji: "✈️" }
];

export const foodGuide = [
  { name: "一兰拉面", area: "大阪 · 难波", desc: "难波御堂筋店，豚骨汤底浓郁，宵夜首选", emoji: "🍜" },
  { name: "黑门市场海鲜丼", area: "大阪 · 黑门市场", desc: "新鲜海产现点现做，还有河豚鱼皮冻", emoji: "🍣" },
  { name: "奥丹汤豆腐", area: "京都 · 清水寺", desc: "老字号汤豆腐定食，古都传统料理", emoji: "🍲" },
  { name: "寿喜烧北斗", area: "京都 · 四条乌丸", desc: "京都风寿喜烧，晚餐首选之一", emoji: "🥘" },
  { name: "琵琶湖鳗鱼饭", area: "琵琶湖 · 志贺站", desc: "车站便当，滋贺特色鳗鱼饭", emoji: "🍱" },
  { name: "Mouriya 神户牛", area: "神户 · 三之宫", desc: "神户牛铁板烧名店，午市套餐更实惠", emoji: "🥩" }
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
  { item: "交通（含特急/巴士/缆车）", amount: "约 ¥800–1200", emoji: "🚄" },
  { item: "餐饮", amount: "约 ¥1200–2000", emoji: "🍱" },
  { item: "景点门票", amount: "约 ¥300–500", emoji: "🎫" },
  { item: "行李托运 airporter", amount: "约 ¥400–600", emoji: "🧳" }
];

export const reservationGuide = [
  {
    name: "舞子公园 · 明石海峡大桥",
    nameEn: "舞子海上散步走廊",
    category: "景点",
    categoryIcon: "🌉",
    platform: "Bokun 在线购票",
    desc: "登上舞子海上散步走廊，近距离眺望世界最长吊桥明石海峡大桥。建议提前在线购票，节省现场排队。",
    tip: "周日/节假日票价，出站步行 5 分钟入园",
    url: "https://widgets.bokun.io/online-sales/19601e4c-e423-4498-b375-c4260d252914/product-list/102540?page=1",
    image: "https://assets.with.tencent.com/default/bfd01113-b553-4c83-9b11-abb7d3a2670a/image_1787196735_2_1.jpg"
  },
  {
    name: "神户和牛 Mouriya 三宫本店",
    nameEn: "モーリヤ",
    category: "美食",
    categoryIcon: "🥩",
    platform: "官网预约",
    desc: "神户牛铁板烧名店，午市套餐更实惠，建议提前 1–2 周官网预约三宫本店座位。",
    tip: "午市 11:00–15:00，座位紧俏务必预约",
    url: "https://www.mouriya.co.jp/en/head",
    image: "https://assets.with.tencent.com/default/10949d32-fbfb-4cae-88a3-f2d91d63f6c6/image_1787196741_2_1.jpg"
  },
  {
    name: "神户石田屋（Ishida）本店",
    nameEn: "石田屋",
    category: "美食",
    categoryIcon: "🍖",
    platform: "官网预约",
    desc: "神户牛专门铁板烧餐厅，与 Mouriya 并列的神户牛代表名店，A5 和牛午餐性价比高。",
    tip: "作为 Mouriya 的备选，同样需提前预约",
    url: "https://kobe-ishidaya.com/access/ishidaya-main/",
    image: "https://assets.with.tencent.com/default/6f00323e-bc81-4285-9701-6b5cebe0960e/image_1787206914_2_1.jpg"
  },
  {
    name: "琵琶湖缆车（琵琶湖 VALLEY）",
    nameEn: "びわ湖バレイ",
    category: "交通 / 景点",
    categoryIcon: "🚠",
    platform: "KLOOK 购票",
    desc: "两段式缆车登顶俯瞰琵琶湖全景。可在 KLOOK 提前购买缆车往返票，通常比现场更划算。",
    tip: "建议购买含往返缆车的套票，出示电子凭证",
    url: "https://www.klook.cn/zh-CN/activity/47068-biwako-valley-ropeway-ticket",
    image: "https://assets.with.tencent.com/default/ff8cd237-45cb-4c4d-9f43-dfe9bc74ed1c/image_1787196726_1_1.jpg"
  }
];
