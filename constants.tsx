
import { VideoType, VideoProject } from './types';

// 公用名單：荒蕪之地三部曲
const WASTELAND_CREW = [
  '出品方 Production Company ｜ 世新大學公共關係暨廣告學系',
  '指導老師 Advisor ｜ 湯宗翰',
  '導演 Director ｜ 哈維 @linharvi',
  '副導 Assistant Director ｜ 許又云 Yoyun',
  '製片 Producer ｜ 黃譯葶 Ting',
  '製片組 Production Team ｜ 蔡侑融 Yolong、吳柏諺 Albert、林芝宇 Jasmin Lin',
  '場記 Script Supervisor ｜ 陳韻琪 Yunchi',
  '旁白撰稿 Narration Writer ｜ 賴紀瑄 Sharon',
  '━━ 攝影組 ━━',
  '攝影 Cinematographer ｜ 黃鼎超 AD',
  '攝助 Camera Assistants ｜ 李端宸 Handsome boy、羅喬煒 lonight',
  '燈光 Gaffer ｜ 莊正威 ZZWEI',
  '燈助 Lighting Assistant ｜ 方祺偉 vito',
  '━━ 美術組 ━━',
  '美術 Art Director ｜ 張益晟 zyiicheng',
  '美術組 Art Team ｜ 朱德祐 Miles、張晏裴 Betty、張哲維 Wish',
  '━━ 造型組 ━━',
  '造型指導 Head of Styling ｜ 李育妃 FiFi',
  '造型 Styling Team ｜ 王乙媗 hltuecooh、李宛言 Yan、林子馨 Jna、林祐華 Linuu、陳采霓 Lisin、嚴紹甄 Shao',
  '━━ 後期 ━━',
  '剪輯 Editor ｜ 哈維、方祺偉 vito',
  '調光 Colorist ｜ 黃鼎超 AD',
  '片尾字卡設計 Title Designer ｜ 周珮鈺 Betty ZHOU',
  '━━ 主演 Main Cast ━━',
  '謝羽柔 Yurou',
  '劉承韋 Leo',
  '劉映彤 Katty',
  '蘇字溱 Della',
  '━━ 臨演 Supporting Cast ━━',
  '李宛臻 lewanjen、李宛言 Yan、林祐華 Linuu、劉子謙 Tzuchienliu、廖品淳 Irene、陳亭卉 TINGHUI、陳虹綺 Emma、莊智仁 Cody、黃郁婷 Kristin、黃詩婷 Shira、黃盈瑄 Hyiiing、楊上逸 Zac、嚴紹甄 Shao、蘇芊予 Chian、謝昕洋 Harris、周伯縉 Jæį、周珮鈺 Betty ZHOU',
  '（順序依姓名筆畫數排列）',
  '━━ 特別感謝 Special Thanks ━━',
  '臺北市政府警察局大安分局',
  '臺北市政府警察局大安分局臥龍街派出所',
  '國立政治大學',
  '世新大學',
  '世新大學教學資源組'
];

// 公用名單：訪談系列
const INTERVIEW_CREW = [
  '攝影/燈光 ｜ 哈維 @linharvi、@_ad_.0418_',
  '剪輯 Editor ｜ 哈維 @linharvi',
  '調光 Colorist ｜ @_ad_.0418_'
];

export const PROJECTS: VideoProject[] = [
  // --- 直式影片 ---
  {
    id: 'v1',
    title: '《荒蕪之地》 公關營前導片 三部曲之一',
    year: '2025',
    type: VideoType.VERTICAL,
    thumbnail: '',
    ytUrl: 'https://youtube.com/shorts/QOXlcig14iw',
    descriptionCn: '原本和平的世界逐漸走向毀滅… 綠意被沙塵吞沒，文明即將終結。 荒原中，大喊：「快進來！這裡才安全！」 當變異者逼近，唯一的庇護所…',
    descriptionEn: "A realm of former serenity marches toward its doom... Nature is swallowed by the dunes, and the light of civilization flickers and fades. From the barren wilds, a guard’s voice rings clear: 'Enter, swiftly! For true safety resides only here!' As the monstrosities advance, the sole haven...",
    crew: WASTELAND_CREW
  },
  {
    id: 'v2',
    title: '《生命之石》 公關營前導片 三部曲之二',
    year: '2025',
    type: VideoType.VERTICAL,
    thumbnail: '',
    ytUrl: 'https://youtube.com/shorts/ylh84_v5hM8',
    descriptionCn: '當秩序崩解，人心開始分岔。有人選擇懷疑，也有人仍選擇相信。他們在荒原上並肩前行——尋找那顆從未被見過、卻被稱為「最後之光」的生命之石。',
    descriptionEn: "Chaos reigns, and loyalties are torn asunder. Some choose skepticism; others, hope.",
    crew: WASTELAND_CREW
  },
  {
    id: 'v3',
    title: '《最終章》 公關營前導片 三部曲之三',
    year: '2025',
    type: VideoType.VERTICAL,
    thumbnail: '',
    ytUrl: 'https://youtube.com/shorts/u8I6zC2rIQM',
    descriptionCn: '沒人願意接下那張傳單… \n直到她把希望灑向天空—— 《代號：伊甸 Code Eden》\n正式啟動！',
    descriptionEn: "Not a soul would accept the missive... Until she cast her hope to the winds.",
    crew: WASTELAND_CREW
  },
  {
    id: 'v4',
    title: 'IBIZA INK CLUB 伊比薩刺青',
    year: '2025',
    type: VideoType.VERTICAL,
    thumbnail: '',
    ytUrl: 'https://youtube.com/shorts/AmSbROWWRSc',
    descriptionCn: '這裡集結了全世界的酷哥酷姊，是刺青界引以為傲活動。',
    descriptionEn: "Here converges a global assembly of mavericks and muses.",
    crew: [
      '━━ 現場影像動態紀錄 ━━',
      '哈維 @linharvi',
      'AD @_ad_.photography_ @_ad_.0418_',
      '@yuanx.04',
      '━━ 後期製作 ━━',
      '哈維 @linharvi'
    ]
  },
  {
    id: 'v5',
    title: '《有禮貌的阿酸刺青工作室》',
    year: '2024',
    type: VideoType.VERTICAL,
    thumbnail: '',
    ytUrl: 'https://youtube.com/shorts/lch_YTa7-XM?si=8RADe7r46m1EPpPM',
    descriptionCn: '刺青師阿酸是我的偶像，能夠拍攝到偶像，那是無比幸運。',
    descriptionEn: "The tattooist known as 阿酸 is my paragon.",
    crew: [
      '刺青師 Artist ｜ @radix9_ta2',
      '鏡中 model ｜ @anderhasnofriend_',
      '攝影/燈光 ｜ 哈維 @linharvi、@_ad_.0418_',
      '剪輯 Editor ｜ 哈維 @linharvi',
      '調光 Colorist ｜ @_ad_.0418_',
      '平面照 Still ｜ @_ad_.0418_ Created by AD & Harvi'
    ]
  },
  {
    id: 'v6',
    title: '《世新公廣優秀學生訪談01》',
    year: '2024',
    type: VideoType.VERTICAL,
    thumbnail: '',
    ytUrl: 'https://youtube.com/shorts/6L1ZAPMjU_w?feature=share',
    descriptionCn: '訪談紀錄系列 01。',
    descriptionEn: "Interview series 01.",
    crew: INTERVIEW_CREW
  },
  {
    id: 'v7',
    title: '《世新公廣優秀學生訪談02》',
    year: '2024',
    type: VideoType.VERTICAL,
    thumbnail: '',
    ytUrl: 'https://youtube.com/shorts/pgiMu-ZGZbQ?feature=share',
    descriptionCn: '訪談紀錄系列 02。',
    descriptionEn: "Interview series 02.",
    crew: INTERVIEW_CREW
  },
  {
    id: 'v8',
    title: '《世新公廣優秀學生訪談03》',
    year: '2024',
    type: VideoType.VERTICAL,
    thumbnail: '',
    ytUrl: 'https://youtube.com/shorts/UVhUhdsW-50?feature=share',
    descriptionCn: '訪談紀錄系列 03。',
    descriptionEn: "Interview series 03.",
    crew: INTERVIEW_CREW
  },
  {
    id: 'v9',
    title: '《世新公廣優秀學生訪談04》',
    year: '2024',
    type: VideoType.VERTICAL,
    thumbnail: '',
    ytUrl: 'https://youtube.com/shorts/2C0ITwmy-m0?feature=share',
    descriptionCn: '訪談紀錄系列 04。',
    descriptionEn: "Interview series 04.",
    crew: INTERVIEW_CREW
  },

  // --- 橫式影片 ---
  {
    id: 'h1',
    title: '《P seven 廣告片》',
    year: '2025',
    type: VideoType.HORIZONTAL,
    thumbnail: '',
    ytUrl: 'https://youtu.be/FJPTyIc5hAY',
    descriptionCn: '結合了香水氣味，將嗅覺轉為視覺。',
    descriptionEn: "Transmuting the olfactory into the visual.",
    crew: [
      '━━ 劇組人員 ━━',
      '導演 Director ｜ 林宏奕',
      '製片 Producer ｜ 黃譯葶',
      '場記 Script Supervisor ｜ 許又云',
      '美術 Art Director ｜ 洪聖傑',
      '攝影 Cinematographer ｜ 黃鼎超',
      '燈光 Gaffer ｜ 李端宸',
      '後製 Post-Production ｜ 方祺偉',
      '━━ 演員 Cast ━━',
      '洪聖傑、林詮、林曄'
    ]
  },
  {
    id: 'h2',
    title: '《紅圈》',
    year: '2024',
    type: VideoType.HORIZONTAL,
    thumbnail: '',
    ytUrl: 'https://youtu.be/cON_dzdhaCY',
    descriptionCn: '對於自身缺陷的釋懷，化為視覺。',
    descriptionEn: "Cathartic reconciliation with personal imperfections.",
    crew: [
      '━━ 劇組人員 ━━',
      '導演 Director ｜ 林宏奕',
      '副導 Assistant Director ｜ 許又云',
      '製片 Producer ｜ 黃譯葶',
      '場記 Script Supervisor ｜ 張芮琪',
      '美術 Art Director ｜ 梁靖儀',
      '三妝 Makeup/Hair ｜ 黃譯葶',
      '攝影 Cinematographer ｜ 黃鼎超',
      '燈光/調光 Gaffer/Colorist ｜ 黃鼎超',
      '後製 Post-Production ｜ 林宏奕',
      '━━ 演員 Cast ━━',
      '林宏奕'
    ]
  },
  {
    id: 'h3',
    title: '《2025音習社成發》',
    year: '2025',
    type: VideoType.HORIZONTAL,
    thumbnail: '',
    ytUrl: 'https://youtu.be/L8pMMgAykeY',
    descriptionCn: '能夠有音樂是很幸福的事情啊！',
    descriptionEn: "What sublime fortune it is to be graced by music!",
    crew: [
      '━━ 現場影像動態紀錄 ━━',
      '哈維 @linharvi',
      'AD @_ad_.photography_ @_ad_.0418_',
      'Wish @wish_o408',
      '梁峻庭 @lian9t1n',
      '━━ 後期製作 ━━',
      '哈維 @linharvi',
      '調光 Colorist ｜ AD'
    ]
  },
  {
    id: 'h4',
    title: '《2025 TGF 第九屆傳續盃籃球賽 全國冠軍賽前導片》 系列影片',
    year: '2025',
    type: VideoType.HORIZONTAL,
    thumbnail: '',
    ytUrl: [
      'https://youtu.be/lPRV-9iGNvo', 
      'https://youtu.be/p8PdnUuSo70?si=7ePRcZ2yMS_E_Y5V',
      'https://youtu.be/MNofhkNTsXY?si=4gmeHrc7NFWHitVG',
      'https://youtu.be/EFPUe76byhs?si=1pi7qC96HpNlSPSK',
      'https://youtu.be/fu7hmnNs4Xo?si=mWdlCbgmSGqq_QPj'
    ],
    descriptionCn: '充滿激情，那不為了汗水以及吶喊而已，充滿感性、友情。',
    descriptionEn: "Brimming with fervor, it transcends the mere shedding of sweat.",
    crew: [
      '製作人 Producer ｜ 湯宗翰',
      '製作協調 Production Coordinator ｜ 周珮鈺',
      '導演 Director ｜ 哈維 ＠linharvi',
      '攝影 Cinematographers ｜ 哈維、AD @_ad_.photography_ @_ad_.0418_、羅喬煒 @lcw.0429 @lo._.night',
      '剪輯 Editor ｜ 哈維',
      '企劃 Planning ｜ Amber @aaaemb._o',
      '製片 Producer ｜ Sharon @sharon.cma'
    ]
  },
  {
    id: 'h5',
    title: '《2025 籃球聯盟明星賽》',
    year: '2025',
    type: VideoType.HORIZONTAL,
    thumbnail: '',
    ytUrl: 'https://youtu.be/Mx9HDv9bS1k',
    descriptionCn: '一個球員很強，那沒什麼，但如果是一群很強的球員呢？',
    descriptionEn: "Prowess of titans converges.",
    crew: [
      '攝影 Cinematographer ｜ 哈維 @linharvi、@_ad_.0418_',
      '剪輯 Editor ｜ 哈維 @linharvi',
      '調光 Colorist ｜ @_ad_.0418_'
    ]
  },
  {
    id: 'h6',
    title: '《我的年下男 學生篇側拍紀錄片》',
    year: '2025',
    type: VideoType.HORIZONTAL,
    thumbnail: '',
    ytUrl: 'https://youtu.be/rzgEO7DyFGU',
    descriptionCn: '學生進入了大型劇組，是看見了未來的光？',
    descriptionEn: "As the neophyte ventures into the belly of a cinematic leviathan.",
    crew: [
      '攝影 Cinematographer ｜ 哈維 @linharvi',
      '剪輯 Editor ｜ 哈維 @linharvi',
      '調光 Colorist ｜ @_ad_.0418_'
    ]
  },
  {
    id: 'h7',
    title: '《來！喝茶啊！》',
    year: '2024',
    type: VideoType.HORIZONTAL,
    thumbnail: '',
    ytUrl: 'https://youtu.be/1R98hMCYSzA',
    descriptionCn: '紀錄與外界隔絕的「林家草厝」。',
    descriptionEn: "This film chronicles the 'Lin Family Thatched Cottage'.",
    crew: [
      '━━ 參賽團隊 ━━',
      '木柵公園',
      '━━ 團隊成員 ━━',
      '導演 Director ｜ Harvi',
      '組員 Members ｜ 黃鼎超、張哲維、賴紀瑄、黃汶琪、莊羽潼、楊依瑄',
      '━━ 拍攝地區及對象 ━━',
      '新北深坑 ／ 林家草厝林念貞及家人'
    ]
  },
  {
    id: 'h8',
    title: '《橫著看》',
    year: '2024',
    type: VideoType.HORIZONTAL,
    thumbnail: '',
    ytUrl: 'https://youtu.be/RuGomtVbQWI?si=sfeONU5LD976awrR',
    descriptionCn: '大學的第一支片，有得獎。',
    descriptionEn: "My collegiate debut—an award-winner.",
    crew: [
      '━━ 片中使用 podcast ━━',
      '標準鳥生活 @standard_goblinmode',
      '編導/剪輯 Writer/Director/Editor ｜ 林宏奕 @linharvi',
      '聲音藏鏡人 Voice ｜ 何晉宇 @dpokly',
      '製片 Producer ｜ 賴紀瑄 @sharon.cma',
      '攝影/燈光 Cam/Gaffer ｜ 黃鼎超、張哲維 @_ad_.0418_ @wish_o4o8',
      '特效/停格動畫製作 VFX/Stop-motion ｜ 方祺偉 @_.fqw132._',
      '後期影片文字工作 Typography ｜ 劉利晟 @li_seng3',
      '━━ Created by ━━',
      '木柵公園'
    ]
  }
];
