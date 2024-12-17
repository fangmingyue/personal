export const LANGUAGE = [
  {
    label: '繁體中文',
    value: 'tw'
  },
  {
    label: '簡體中文',
    value: 'cn'
  },
  {
    label: 'English',
    value: 'en'
  }
]

export const NAV = [
  {
    id:0,
    label: "about",
    icon:"material-symbols:person-outline",
    link:'/',
    style:'bg-primary-500 top-0  w-[140px] z-50'
  },
  {
    id:1,
    label: "project",
    icon:"eos-icons:project-outlined",
    link:'/project',
    style:'bg-primary-600 top-[32px] w-[172px] z-40'
  },
  {
    id:2,
    label: "cooperate",
    icon:"tdesign:cooperate",
    link:'/cooperate',
    style:'bg-primary-700 top-[64px] w-[204px] z-30'
  },
  {
    id:3,
    label: "download",
    icon:"material-symbols:shopping-cart-outline-sharp",
    link:'/download',
    style:'bg-primary-800 top-[96px] w-[236px] z-20'
  },
]

export const SKILL = [
  {
    label:"HTML5",
    icon:"html5.svg"
  },
  {
    label:"CSS3",
    icon:"css3.svg"
    }, 
  {
    label:"JavaScript",
    icon:"js.svg"
  },
  {
    label:"Jquery",
    icon:"jquery.svg"
  }, 
  {
    label:"Vue",
    icon:"vue.svg"
  },
  {
    label:"Nuxt3",
    icon:"nuxt.png"
  }, 
  {
    label:"Vite",
    icon:"vite.svg"
  }, 
  {
    label:"Pinia",
    icon:"pinia.svg"
  }, 
  {
    label:"Tailwind",
    icon:"tailwind.svg"
  }, 
  {
    label:"Pug",
    icon:"pug.png"
  }, 
  {
    label:"Element Plus",
    icon:"element-plus.svg"
  }, 
  {
    label:"Figma",
    icon:"figma.svg"
  }, 
  {
    label:"XD",
    icon:"xd.svg"
  }, 
  {
    label:"Photoshop",
    icon:"ps.svg"
  }, 
  {
    label:"Illustrator",
    icon:"ai.svg"
  }, 
  {
    label:"After Effects",
    icon:"ae.svg"
  }, 
  {
    label:"premiere",
    icon:"pr.svg"
  }, 
  {
    label:"Blender",
    icon:"blender.svg"
  }, 
  {
    label:"C4D",
    icon:"c4d.svg"
  },
]

export const EXP = [
  {
    date:'2024/03 - now',
    company:'雅典娜行銷廣告',
    job:'fronted-end',
    content:'content1'
  },
  {
    date:'2022/11 - 2024/01',
    company:'私人網頁工作室',
    job:'fronted-management',
    content:'content2'
  },
  {
    date:'2021/08 - 2022/08',
    company:'晶要科技有限公司',
    job:'fronted-end',
    content:'content3'
  },
  {
    date:'2020/03 - 2020/12',
    company:'微風科技有限公司',
    job:'fronted-end',
    content:'content4'
  },
  {
    date:'2018/06 - 2020/01',
    company:'無框印象廣告',
    job:'art-management',
    content:'content5'
  },
  {
    date:'2013/04 - 2018/05',
    company:'同樂創投有限公司',
    job:'art-staff',
    content:'content6'
  },
  {
    date:'2009/01 - 2010/12',
    company:'振宇五金有限公司',
    job:'marketing-planning',
    content:'content7'
  }
]

export const PROJECT1 = [
  {
    id: 1,
    title:'SuperHouse',
    short:'SuperHouse夜店形象網站',
    content:'六角形被譽為「 世界上最完美圖形 」，象徵Super House是為了超越所有亞洲頂尖娛樂夜店而誕生。 Super House集結了一群在夜生活娛樂圈深耕超過20年足跡遍及全球各大知名夜店的專業團隊所創立。 Super House的精髓來自精緻「服務」，奢華「珍餚美酒」，創新風格「聲光電」體驗，將理想的個人主義打造成藝術作品。 我們的誕生，將重新定義亞洲夜生活娛樂新指標。',
    smallpic:'/img/project/p1/superhouse.jpg',
    type:'p1',
    isOpen: true,
    image:[
      "/img/project/p1/superhouse/superhouse-1.jpg",
      "/img/project/p1/superhouse/superhouse-2.jpg",
      "/img/project/p1/superhouse/superhouse-3.jpg",
      "/img/project/p1/superhouse/superhouse-4.jpg",
      "/img/project/p1/superhouse/superhouse-5.jpg",
      "/img/project/p1/superhouse/superhouse-6.jpg",
    ],
    skill:['html5','css3','javascript','vue3','scss'],
    url:'https://www.super-house.club/'
  },
  {
    id: 2,
    title:'SoloLive',
    short:'Sololive餐酒館形象網站',
    content:'在這個節奏飛快的時代，科技為我們的生活帶來了無限的可能性，讓每個人心中的夢想種子有了萌芽的機會。然而，短影音的普及雖然為我們提供了展示自我的平台，卻也容易讓我們忽視夢想的初衷與本質。Solo Live想傳遞的理念，正是以「真實」為核心，主理人堅信，真正有價值的創作應當是誠實、透明的。因此，在保留科技優勢的同時，我們更加強調誠懇的包裝，將直播的即時魅力與現場舞台的真實性結合，為觀眾和表演者創造一個獨特而真摯的娛樂體驗。透過Solo Live，我們將為每一顆夢想種子提供成長的土壤。無論你是誰，都有機會在這裡綻放光芒，成為未來的明星。展演空間以創新回歸初心，堅持走出一條屬於我們的道路。',
    smallpic:'/img/project/p1/sololive.jpg',
    type:'p1',
    isOpen: true,
    image:[
      "/img/project/p1/sololive/sololive-1.jpg",
      "/img/project/p1/sololive/sololive-2.jpg",
    ],
    skill:['html5','css3','javascript','scss','nuxt3','element plus','vite','tailwind','pug'],
    url:'https://www.sololive1567.com/'
  },
  {
    id: 3,
    title:'尉寶建設股份有限公司',
    short:'建設公司形象網站',
    content:'台中建設公司｜尉寶建設，專注於建築與工藝的細緻，三好理念「好的地段」、「好的規劃設計」、「好宅」，厚工細緻，藴藏尉寶心藝。各種建材之間，協調出完美比例結合。融合自然共生與創新設計，打造精緻住家與商圈，為您帶來舒適與美學兼備的社區生活。',
    smallpic:'/img/project/p1/transgold.jpg',
    type:'p1',
    isOpen: false,
    image:[
      "/img/project/p1/transgold/transgold-1.jpg",
      "/img/project/p1/transgold/transgold-2.jpg",
      "/img/project/p1/transgold/transgold-3.jpg",
      "/img/project/p1/transgold/transgold-4.jpg",
      "/img/project/p1/transgold/transgold-5.jpg",
      "/img/project/p1/transgold/transgold-6.jpg",
    ],
    skill:['html5','css3','javascript','scss','nuxt3','element plus','vite','tailwind','pug'],
    url:'https://transgold.athenabeta.com.tw/'
  },
  {
    id: 4,
    title:'好日和',
    short:'好日和長照形象網站',
    content:'超高齡與少子化社會即將到來，扶老比急遽上升，長期照顧將是迫切面臨的課題。在職照顧者不僅要面對工作，還需兼顧長輩、幼兒照顧等多重責任，需尋求專業照顧的支援以紓解照顧的壓力，維持良好的生活品質。',
    smallpic:'/img/project/p1/gooddaycare.jpg',
    type:'p1',
    isOpen: true,
    image:[
      "/img/project/p1/gooddaycare/gooddaycare-1.jpg",
      "/img/project/p1/gooddaycare/gooddaycare-2.jpg",
      "/img/project/p1/gooddaycare/gooddaycare-3.jpg",
      "/img/project/p1/gooddaycare/gooddaycare-4.jpg",
      "/img/project/p1/gooddaycare/gooddaycare-5.jpg",
    ],
    skill:['html5','css3','javascript','scss','nuxt3','element plus','vite','tailwind','pug'],
    url:'https://goodcare.com.tw/'
  },
  {
    id: 5,
    title:'串門子',
    short:'串門子社會設計形象官網',
    content:'串門子社會設計登錄於經濟部社會創新平台。擅長爬梳議題，用設計思考與方案設計思維與關係人共創解方。對社會議題中的服務設計深深著迷，提供服務設計、地方設計及趨勢設計等服務項目，期盼用社會設計改變人的生活。',
    smallpic:'/img/project/p1/thelinkertw.jpg',
    type:'p1',
    isOpen: true,
    image:[
      "/img/project/p1/thelinkertw/thelinkertw-1.jpg",
      "/img/project/p1/thelinkertw/thelinkertw-2.jpg",
      "/img/project/p1/thelinkertw/thelinkertw-3.jpg",
      "/img/project/p1/thelinkertw/thelinkertw-4.jpg",
      "/img/project/p1/thelinkertw/thelinkertw-5.jpg",
      "/img/project/p1/thelinkertw/thelinkertw-6.jpg",
    ],
    skill:['html5','css3','javascript','scss','nuxt3','element plus','vite','tailwind','pug'],
    url:'https://thelinkertw.com/'
  },
  {
    id: 6,
    title:'雅典娜整合行銷',
    short:'雅典娜整合行銷形象官網',
    content:'雅典娜數位整合行銷，擁有從行銷到網頁製作一條龍的完整服務，並且在商模建置與行銷企劃中，擁有比其他行銷公司更敏銳的嗅覺，在SEO搜尋引擎優化這個區塊，擁有過人的操作熟練度，在各個行銷佈局與口碑行銷的操作上別於市場的執行手法，並在廣告代操的漏斗上別於其他行銷公司上架構。',
    smallpic:'/img/project/p1/athenaads.jpg',
    type:'p1',
    isOpen: true,
    image:[
      "/img/project/p1/athenaads/athenaads-1.jpg",
      "/img/project/p1/athenaads/athenaads-2.jpg",
      "/img/project/p1/athenaads/athenaads-3.jpg",
      "/img/project/p1/athenaads/athenaads-4.jpg",
      "/img/project/p1/athenaads/athenaads-5.jpg",
      "/img/project/p1/athenaads/athenaads-6.jpg",
    ],
    skill:['html5','css3','javascript','scss','nuxt3','element plus','vite','tailwind','pug'],
    url:''
  },
  {
    id: 7,
    title:'臣信不動產',
    short:'臣信不動產形象官網',
    content:'我們是一家致力於創新的公司，擁有豐富的歷史和獨特的價值觀，我們的目標是提供高品質的產品和服務並為客戶創造價值。',
    smallpic:'/img/project/p1/chenxin.jpg',
    type:'p1',
    isOpen: false,
    image:[],
    skill:['html5','css3','javascript','scss','nuxt3','element plus','vite','tailwind','pug'],
    url:''
  },
]

export const PROJECT2 = [
  {
    id: 1,
    title:'台中驗光師公會',
    short:'台中驗光師公會官網',
    content:'本會依據驗光人員法及人民團體法設立，名稱為臺中市驗光師公會。本會以發展驗光專業、協助政府建立完善醫療體系、提升全民健康，並促進會員權益為宗旨。本會以臺中市行政區域為組織區域，會址設於臺中市',
    smallpic:'/img/project/p2/tcoa.jpg',
    type:'p2',
    isOpen: true,
    image:[
      "/img/project/p2/tcoa/tcoa-1.jpg",
      "/img/project/p2/tcoa/tcoa-2.jpg",
      "/img/project/p2/tcoa/tcoa-3.jpg",
      "/img/project/p2/tcoa/tcoa-4.jpg",
      "/img/project/p2/tcoa/tcoa-5.jpg",
      "/img/project/p2/tcoa/tcoa-6.jpg",
      "/img/project/p2/tcoa/tcoa-7.jpg",
    ],
    skill:['html5','css3','javascript','nuxt3','element plus','vite','tailwind','pug'],
    url:'https://tcoa.org.tw/'
  },
  {
    id: 2,
    title:'台中驗光師公會(後台)',
    short:'台中驗光師公會後台管理系統',
    content:'台中驗光師公會後台管理系統',
    smallpic:'/img/project/p2/tcoa-bgm.jpg',
    type:'p2',
    isOpen: false,
    image:[
      "/img/project/p2/tcoa-bgm/tcoa-bgm-1.jpg",
      "/img/project/p2/tcoa-bgm/tcoa-bgm-2.jpg",
      "/img/project/p2/tcoa-bgm/tcoa-bgm-3.jpg",
      "/img/project/p2/tcoa-bgm/tcoa-bgm-4.jpg",
      "/img/project/p2/tcoa-bgm/tcoa-bgm-5.jpg",
      "/img/project/p2/tcoa-bgm/tcoa-bgm-6.jpg",
      "/img/project/p2/tcoa-bgm/tcoa-bgm-7.jpg",
    ],
    skill:['html5','css3','javascript','nuxt3','element plus','vite','tailwind','pug'],
    url:''
  },
  {
    id: 3,
    title:'瑜珈 - Fly High Yoga',
    short:'Fly HIGH Yoga官網',
    content:'運動是意志力的鍛鍊、是對身體的探險、是用｢心｣開拓社交圈的媒介，在Fly High Yoga，你能放下過去對未知體能訓練的不安與猜疑，在老師一步步帶領下對動作產生熟悉感，強化自身的生理和心理素質，重新建構並達到身心靈的平衡點。',
    smallpic:'/img/project/p2/yoga.jpg',
    type:'p2',
    isOpen: true,
    image:[
      "/img/project/p2/yoga/yoga-1.jpg",
      "/img/project/p2/yoga/yoga-2.jpg",
      "/img/project/p2/yoga/yoga-3.jpg",
      "/img/project/p2/yoga/yoga-4.jpg",
      "/img/project/p2/yoga/yoga-5.jpg",
      "/img/project/p2/yoga/yoga-6.jpg",
    ],
    skill:['html5','css3','javascript','nuxt3','element plus','vite','tailwind','pug'],
    url:'https://www.flyhighyoga.com.tw/'
  },
  {
    id: 4,
    title:'美家人力',
    short:'人力仲介網站',
    content:'總經理於 1999 年投入人力仲介產業，秉持著成為企業人力資源優質的合作夥伴，2012年創立了美家人力資源股份有限公司（以下簡稱美家人力）。自此，美家人力秉持著「創新」、「專業」、「人本」的理念，提供在同業間獨樹一格的服務。在國外，與越南、印尼、菲律賓及泰國當地訓練中心合作，依照移工所需要的專業知識、工作技能、生活知能…等多個面向，實施教育訓練及考核，確保優質人才；在台灣，建立移工人力銀行提供移工和雇主間的專業媒合平台，協助移工透過平台找到合適的工作，也讓雇主在尋找人才上能更加便利。',
    smallpic:'/img/project/p2/maygod.jpg',
    type:'p2',
    isOpen: true,
    image:[
      "/img/project/p2/maygod/maygod-1.jpg",
      "/img/project/p2/maygod/maygod-2.jpg",
      "/img/project/p2/maygod/maygod-3.jpg",
      "/img/project/p2/maygod/maygod-4.jpg",
      "/img/project/p2/maygod/maygod-5.jpg",
      "/img/project/p2/maygod/maygod-6.jpg",
    ],
    skill:['html5','css3','javascript','nuxt3','element plus','vite','tailwind','pug'],
    url:'https://may-god.com/'
  },
    {
    id: 5,
    title:'Library代碼庫',
    short:'客制快速產出代碼庫',
    content:'為了日常快速可以產出基本的樣式的代碼庫，並且統一協作人員的寫作統一風格。',
    smallpic:'/img/project/p2/library.jpg',
    type:'p2',
    isOpen: false,
    image:[
      "/img/project/p2/library/library-1.jpg",
      "/img/project/p2/library/library-2.jpg",
      "/img/project/p2/library/library-3.jpg",
      "/img/project/p2/library/library-4.jpg",
      "/img/project/p2/library/library-5.jpg",
    ],
    skill:['html5','css3','javascript','vue3','element plus','vite','vitepress','tailwind','pug'],
    url:''
  },
  // {
  //   id: 5,
  //   title:'奇吉科技',
  //   short:'this is short description',
  //   content:'this is description',
  //   smallpic:'/img/project/p2/superhouse.jpg',
  //   type:'p2',
  //   isOpen: true,
  //   image:[
  //     "https://picsum.photos/200/200",
  //     "https://picsum.photos/300/200",
  //     "https://picsum.photos/300/200",
  //     "https://picsum.photos/300/200",
  //     "https://picsum.photos/300/200",
  //   ],
  //   skill:['vue3','tailwind','pug'],
  //   url:'https://pltf.org.tw/'
  // },
  // {
  //   id: 6,
  //   title:'代碼開發庫',
  //   short:'快速產出網頁所需的代碼',
  //   content:'快速產出網頁所需的代碼',
  //   smallpic:'/img/project/p2/superhouse.jpg',
  //   type:'p2',
  //   isOpen: true,
  //   image:[
  //     "",
  //     "https://picsum.photos/300/200",
  //     "https://picsum.photos/300/200",
  //     "https://picsum.photos/300/200",
  //     "https://picsum.photos/300/200",
  //   ],
  //   skill:['vue3','tailwind','pug'],
  //   url:'https://pltf.org.tw/'
  // }    
]

export const PROJECT3 = [
  {
    id: 1,
    title:'鉅城娛樂',
    short:'線上娛樂城',
    content:'鉅城遊戲平台經營亞太區線上遊戲平台領域多年，擁有堅強的自主研發團隊、客戶服務團隊，提供全面可靠信任的網路遊戲平台',
    smallpic:'/img/project/p3/ofa177.jpg',
    type:'p3',
    isOpen: true,
    image:[
      "/img/project/p3/ofa77/ofa77-1.jpg",
      "/img/project/p3/ofa77/ofa77-2.jpg",
      "/img/project/p3/ofa77/ofa77-3.jpg",
      "/img/project/p3/ofa77/ofa77-4.jpg",
      "/img/project/p3/ofa77/ofa77-5.jpg",
      "/img/project/p3/ofa77/ofa77-6.jpg",
    ],
    skill:['html5','css3','javascript','vite','tailwind'],
    url:'https://www.ofa177.net/'
  },
  {
    id: 2,
    title:'LT娛樂城',
    short:'線上娛樂城',
    content:'LT遊戲平台經營亞太區線上遊戲平台領域多年，擁有堅強的自主研發團隊、客戶服務團隊，提供全面可靠信任的網路遊戲平台',
    smallpic:'/img/project/p3/lt1688.jpg',
    type:'p3',
    isOpen: true,
    image:[
      "/img/project/p3/lt1688/lt-1.jpg",
      "/img/project/p3/lt1688/lt-2.jpg",
      "/img/project/p3/lt1688/lt-3.jpg",
      "/img/project/p3/lt1688/lt-4.jpg",
      "/img/project/p3/lt1688/lt-5.jpg",
    ],
    skill:['html5','css3','javascript','vite','tailwind'],
    url:'https://www.lt1688.net/'
  },
  {
    id: 3,
    title:'帝遊娛樂城',
    short:'線上娛樂城',
    content:'帝遊遊戲平台經營亞太區線上遊戲平台領域多年，擁有堅強的自主研發團隊、客戶服務團隊，提供全面可靠信任的網路遊戲平台',
    smallpic:'/img/project/p3/dgamings.jpg',
    type:'p3',
    isOpen: true,
    image:[
      "/img/project/p3/dgamings/dgamings-1.jpg",
      "/img/project/p3/dgamings/dgamings-2.jpg",
      "/img/project/p3/dgamings/dgamings-3.jpg",
      "/img/project/p3/dgamings/dgamings-4.jpg",
      "/img/project/p3/dgamings/dgamings-5.jpg",
    ],
    skill:['html5','css3','javascript','vite','tailwind'],
    url:'https://www.dgamings.com/'
  },
  {
    id: 4,
    title:'OC娛樂城',
    short:'線上娛樂城',
    content:'OC遊戲平台經營亞太區線上遊戲平台領域多年，擁有堅強的自主研發團隊、客戶服務團隊，提供全面可靠信任的網路遊戲平台',
    smallpic:'/img/project/p3/oc178.jpg',
    type:'p3',
    isOpen: true,
    image:[

    ],
    skill:['html5','css3','javascript','vite','tailwind'],
    url:'https://www.oc178.net/'
  },
  {
    id: 5,
    title:'朕天下娛樂城',
    short:'線上娛樂城',
    content:'朕天下遊戲平台經營亞太區線上遊戲平台領域多年，擁有堅強的自主研發團隊、客戶服務團隊，提供全面可靠信任的網路遊戲平台',
    smallpic:'/img/project/p3/mw1688.jpg',
    type:'p3',
    isOpen: true,
    image:[

    ],
    skill:['html5','css3','javascript','vite','tailwind'],
    url:'https://www.mw1688.net/'
  },
  {
    id: 6,
    title:'0857娛樂城',
    short:'線上娛樂城',
    content:'0857遊戲平台經營亞太區線上遊戲平台領域多年，擁有堅強的自主研發團隊、客戶服務團隊，提供全面可靠信任的網路遊戲平台',
    smallpic:'/img/project/p3/0857.jpg',
    type:'p3',
    isOpen: true,
    image:[

    ],
    skill:['html5','css3','javascript','vite','tailwind'],
    url:'https://www.0857.games/'
  },
  {
    id: 7,
    title:'8方娛樂城',
    short:'線上娛樂城',
    content:'8方遊戲平台經營亞太區線上遊戲平台領域多年，擁有堅強的自主研發團隊、客戶服務團隊，提供全面可靠信任的網路遊戲平台',
    smallpic:'/img/project/p3/meta178.jpg',
    type:'p3',
    isOpen: true,
    image:[

    ],
    skill:['html5','css3','javascript','vite','tailwind'],
    url:'https://www.meta178.com/'
  },
  {
    id: 8,
    title:'富馬娛樂城',
    short:'線上娛樂城',
    content:'富馬遊戲平台經營亞太區線上遊戲平台領域多年，擁有堅強的自主研發團隊、客戶服務團隊，提供全面可靠信任的網路遊戲平台',
    smallpic:'/img/project/p3/fm888.jpg',
    type:'p3',
    isOpen: true,
    image:[

    ],
    skill:['html5','css3','javascript','vite','tailwind'],
    url:'https://www.fm888.net/'
  },
  {
    id: 9,
    title:'RM娛樂城',
    short:'線上娛樂城',
    content:'RM遊戲平台經營亞太區線上遊戲平台領域多年，擁有堅強的自主研發團隊、客戶服務團隊，提供全面可靠信任的網路遊戲平台',
    smallpic:'/img/project/p3/rm666.jpg',
    type:'p3',
    isOpen: true,
    image:[

    ],
    skill:['html5','css3','javascript','vite','tailwind'],
    url:'https://www.rm666.co/'
  },
  {
    id: 10,
    title:'滿天星娛樂城',
    short:'線上娛樂城',
    content:'滿天星遊戲平台經營亞太區線上遊戲平台領域多年，擁有堅強的自主研發團隊、客戶服務團隊，提供全面可靠信任的網路遊戲平台',
    smallpic:'/img/project/p3/star1688.jpg',
    type:'p3',
    isOpen: true,
    image:[

    ],
    skill:['html5','css3','javascript','vite','tailwind'],
    url:'https://www.star1688.tw/'
  },
  {
    id: 11,
    title:'雄厚娛樂城',
    short:'線上娛樂城',
    content:'雄厚遊戲平台經營亞太區線上遊戲平台領域多年，擁有堅強的自主研發團隊、客戶服務團隊，提供全面可靠信任的網路遊戲平台',
    smallpic:'/img/project/p3/ofa918.jpg',
    type:'p3',
    isOpen: true,
    image:[

    ],
    skill:['html5','css3','javascript','vite','tailwind'],
    url:'https://www.918ofa.net/'
  } 
]

export const SERVICE = [
  {
    title:'service1',
    list:['service1-1','service1-2','service1-3'],
    icon:'hugeicons:web-design-01'
  },  {
    title:'service2',
    list:['service2-1','service2-2','service2-3'],
    icon:'streamline:programming-browser-build-build-website-development-window-code-programming-web-backend-browser-dev'
  },
  {
    title:'service3',
    list:['service3-1','service3-2','service3-3'],
    icon:'material-symbols:imagesmode-outline-sharp'
  },
  {
    title:'service4',
    list:['service4-1','service4-2','service4-3'],
    icon:'material-symbols:video-call-outline-sharp'
  },
  {
    title:'service5',
    list:['service5-1','service5-2','service5-3'],
    icon:'material-symbols:3d-rotation-outline-rounded'
  },
  {
    title:'service6',
    list:['service6-1','service6-2','service6-3'],
    icon:'hugeicons:teacher'
  }
]

export const METHOD = [
  {
    title:'method-1',
    describe:'method-1-1',
    img:'/img/cooperate/hire.svg',
    info1: 'face',
    info2: 'month',
    content:['m-1-1', 'm-1-2', 'm-1-3']
  },
  {
    title:'method-2',
    describe:'method-2-1',
    img:'/img/cooperate/cooperate.svg',
    info1: 'face',
    info2: 'month',
    content:['m-2-1', 'm-2-2', 'm-2-3', 'm-2-4']
  },
  {
    title:'method-3',
    describe:'method-3-1',
    img:'/img/cooperate/case.svg',
    info1: '$5000',
    info2: 'every',
    content:['m-3-1', 'm-3-2', 'm-3-3', 'm-3-4']
  },
]