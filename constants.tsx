
import { VideoType, VideoProject } from './types';

// 通用劇照廊道 (保留定義供其他作品使用，若無其他作品使用可後續移除)
const SHARED_GALLERY = [
  'https://drive.google.com/uc?export=view&id=1h-LwcPHqRkqlZLjshjSQyjVSpFQfT7NG',
  'https://drive.google.com/uc?export=view&id=1f7D7qYwBSeI_Nbm9x16SLt2lcKQdNK1E',
  'https://drive.google.com/uc?export=view&id=10KbX8pDkBdxMDLuSNRRo_7vJTD-BBd6g',
  'https://drive.google.com/uc?export=view&id=1KA24FNJ2rb2ccZZYQQXMtu01BnNajjdi',
  'https://drive.google.com/uc?export=view&id=1XZ_QQCjNTWcFiNrCqOgjxERiIgWGd3RL',
  'https://drive.google.com/uc?export=view&id=1zPhpaUzhjc41mxjp22SMmEs7byZq3PMV',
  'https://drive.google.com/uc?export=view&id=1COQdLLomEd_HpTGlKhmTtVvV2HIJHAax'
];

export const PROJECTS: VideoProject[] = [
  // --- 直式影片 ---
  {
    id: 'v1',
    title: '《荒蕪之地》 公關營前導片 三部曲之一',
    year: '2025',
    type: VideoType.VERTICAL,
    thumbnail: 'https://img.youtube.com/vi/QOXlcig14iw/maxresdefault.jpg',
    ytUrl: 'https://youtube.com/shorts/QOXlcig14iw',
    descriptionCn: '原本和平的世界逐漸走向毀滅… 綠意被沙塵吞沒，文明即將終結。 荒原中，大喊：「快進來！這裡才安全！」 當變異者逼近，唯一的庇護所…',
    descriptionEn: "A realm of former serenity marches toward its doom... Nature is swallowed by the dunes, and the light of civilization flickers and fades. From the barren wilds, a guard’s voice rings clear: 'Enter, swiftly! For true safety resides only here!' As the monstrosities advance, the sole haven...",
    crew: [
      '出品方 Production Company ｜ 世新大學公共關係暨廣告學系',
      '指導老師 Advisor ｜ 湯宗翰',
      '導演 Director ｜ 哈維 HARVI @linharvi',
      '副導 Assistant Director ｜ 許又云 Yoyun',
      '製片 Producer ｜ 黃譯葶 Ting',
      '製片組 Production Team ｜ 蔡侑融 Yolong、吳柏諺 Albert、筆芝宇 Jasmin Lin',
      '場記 Script Supervisor ｜ 側拍：陳韻琪 Yunchi',
      '旁白撰稿 Narration Writer ｜ 賴紀瑄 Sharon',
      '攝影 Cinematographer ｜ 黃鼎超 AD',
      '攝助 Camera Assistants ｜ 李端宸 Handsome boy、羅喬煒 lonight',
      '燈光 Gaffer ｜ 莊正威 ZZWEI',
      '燈助 Lighting Assistant ｜ 方祺偉 vito',
      '美術 Art Director ｜ 張益晟 zyiicheng',
      '美術組 Art Team ｜ 朱德祐 Miles、張晏裴 Betty、張哲維 Wish',
      '造型指導 Head of Styling ｜ 李育妃 FiFi',
      '造型 Styling Team ｜ 王乙媗 hltuecooh、李宛言 Yan、林子馨 Jna、林祐華 Linuu、陳采霓 Lisin、嚴紹甄 Shao',
      '剪輯 Editor ｜ 哈維 HARVI、方祺偉 vito',
      '調光 Colorist ｜ 黃鼎超 AD',
      '片尾字卡設計 Title Designer ｜ 周珮鈺 Betty ZHOU',
      '━━━━━━━━━━━━━━',
      '主演 Main Cast',
      '謝羽柔 Yurou',
      '劉承韋 Leo',
      '劉映彤 Katty',
      '蘇字溱 Della',
      '━━━━━━━━━━━━━━',
      '特別感謝 Special Thanks',
      '臺北市政府警察局大安分局、臥龍街派出所、國立政治大學、世新大學、世新大學教學資源組'
    ],
    // gallery 已移除
    previewStart: 5,
    previewEnd: 10
  },
  {
    id: 'v2',
    title: '《生命之石》 公關營前導片 三部曲之二',
    year: '2025',
    type: VideoType.VERTICAL,
    thumbnail: 'https://img.youtube.com/vi/ylh84_v5hM8/maxresdefault.jpg',
    ytUrl: 'https://youtube.com/shorts/ylh84_v5hM8',
    descriptionCn: '當秩序崩解，人心開始分岔。有人選擇懷疑，也有人仍選擇相信。他們在荒原上並肩前行——尋找那顆從未被見過、卻被稱為「最後之光」的生命之石。',
    descriptionEn: "Chaos reigns, and loyalties are torn asunder. Some choose skepticism; others, hope. United, they march across the barren expanse— Hunting for the invisible, the Stone of Life, whispered of as the 'Last Light'.",
    crew: [
      '出品方 Production Company ｜ 世新大學公共關係暨廣告學系',
      '指導老師 Advisor ｜ 湯宗翰',
      '導演 Director ｜ 哈維 HARVI @linharvi',
      '副導 Assistant Director ｜ 許又云 Yoyun',
      '製片 Producer ｜ 黃譯葶 Ting',
      '製片組 Production Team ｜ 蔡侑融 Yolong、吳柏諺 Albert、林芝宇 Jasmin Lin',
      '場記 Script Supervisor ｜ 陳韻琪 Yunchi',
      '旁白撰稿 Narration Writer ｜ 賴紀瑄 Sharon',
      '攝影 Cinematographer ｜ 黃鼎超 AD',
      '攝助 Camera Assistants ｜ 李端宸 Handsome boy、羅喬煒 lonight',
      '燈光 Gaffer ｜ 莊正威 ZZWEI',
      '燈助 Lighting Assistant ｜ 方祺偉 vito',
      '美術 Art Director ｜ 張益晟 zyiicheng',
      '美術組 Art Team ｜ 朱德祐 Miles、張晏裴 Betty、張哲維 Wish',
      '造型指導 Head of Styling ｜ 李育妃 FiFi',
      '造型 Styling Team ｜ 王乙媗 hltuecooh、李宛言 Yan、林子馨 Jna、林祐華 Linuu、陳采霓 Lisin、嚴紹甄 Shao',
      '剪輯 Editor ｜ 哈維 HARVI、方祺偉 vito',
      '調光 Colorist ｜ 黃鼎超 AD',
      '片尾字卡設計 Title Designer ｜ 周珮鈺 Betty ZHOU',
      '━━━━━━━━━━━━━━',
      '主演 Main Cast',
      '謝羽柔 Yurou、劉承韋 Leo、劉映彤 Katty、蘇字溱 Della',
      '━━━━━━━━━━━━━━',
      '特別感謝 Special Thanks',
      '臺北市政府警察局大安分局、臥龍街派出所、國立政治大學、世新大學、世新大學教學資源組'
    ],
    // gallery 已移除
    previewStart: 20,
    previewEnd: 27
  },
  {
    id: 'v3',
    title: '《最終章》 公關營前導片 三部曲之三',
    year: '2025',
    type: VideoType.VERTICAL,
    thumbnail: 'https://img.youtube.com/vi/u8I6zC2rIQM/maxresdefault.jpg',
    ytUrl: 'https://youtube.com/shorts/u8I6zC2rIQM',
    descriptionCn: '沒人願意接下那張傳單… \n直到她把希望灑向天空—— 《代號：伊甸 Code Eden》\n正式啟動！ 末世已至，行動者集結。',
    descriptionEn: "Not a soul would accept the missive... Until she cast her hope to the winds— Operation: Code Eden — INITIATED! The Apocalypse is upon us. Operatives, mobilize.",
    crew: [
      '出品方 Production Company ｜ 世新大學公共關係暨廣告學系',
      '指導老師 Advisor ｜ 湯宗翰',
      '導演 Director ｜ 哈維 HARVI @linharvi',
      '副導 Assistant Director ｜ 許又云 Yoyun',
      '製片 Producer ｜ 黃譯葶 Ting',
      '製片組 Production Team ｜ 蔡侑融 Yolong、吳柏諺 Albert、林芝宇 Jasmin Lin',
      '場記 Script Supervisor ｜ 陳韻琪 Yunchi',
      '旁白撰稿 Narration Writer ｜ 賴紀瑄 Sharon',
      '攝影 Cinematographer ｜ 黃鼎超 AD',
      '攝助 Camera Assistants ｜ 李端宸 Handsome boy、羅喬煒 lonight',
      '燈光 Gaffer ｜ 莊正威 ZZWEI',
      '燈助 Lighting Assistant ｜ 方祺偉 vito',
      '美術 Art Director ｜ 張益晟 zyiicheng',
      '美術組 Art Team ｜ 朱德祐 Miles、張晏裴 Betty、張哲維 Wish',
      '造型指導 Head of Styling ｜ 李育妃 FiFi',
      '造型 Styling Team ｜ 王乙媗 hltuecooh、李宛言 Yan、林子馨 Jna、林祐華 Linuu、陳采霓 Lisin、嚴紹甄 Shao',
      '剪輯 Editor ｜ 哈維 HARVI、方祺偉 vito',
      '調光 Colorist ｜ 黃鼎超 AD',
      '片尾字卡設計 Title Designer ｜ 周珮鈺 Betty ZHOU',
      '━━━━━━━━━━━━━━',
      '主演 Main Cast',
      '謝羽柔 Yurou、劉承韋 Leo、劉映彤 Katty、蘇字溱 Della',
      '━━━━━━━━━━━━━━',
      '特別感謝 Special Thanks',
      '臺北市政府警察局大安分局、臥龍街派出所、國立政治大學、世新大學、世新大學教學資源組'
    ],
    // gallery 已移除
    previewStart: 20,
    previewEnd: 26
  },
  {
    id: 'v4',
    title: '《IBIZA INK CLUB 伊比薩刺青》',
    year: '2025',
    type: VideoType.VERTICAL,
    thumbnail: 'https://img.youtube.com/vi/AmSbROWWRSc/maxresdefault.jpg',
    ytUrl: 'https://youtube.com/shorts/AmSbROWWRSc',
    descriptionCn: '這裡集結了全世界的酷哥酷姊，是刺青界引以為傲活動。針頭不段刺進皮膚、針頭不段刺進皮膚、針頭不段刺進皮膚。',
    descriptionEn: "Here converges a global assembly of mavericks and muses, the crowning glory of the inked dominion. Steel pierces flesh. Steel pierces flesh. Steel pierces flesh.",
    crew: [
      '【現場影像動態紀錄】',
      '哈維 HARVI @linharvi',
      'AD @_ad_.photography_ @_ad_.0418_',
      '@yuanx.04',
      '━━━━━━━━━━━━━━',
      '【後期製作】',
      '哈維 HARVI @linharvi'
    ],
    previewStart: 26,
    previewEnd: 31
  },
  {
    id: 'v5',
    title: '《有禮貌的阿酸刺青工作室》',
    year: '2024',
    type: VideoType.VERTICAL,
    thumbnail: 'https://img.youtube.com/vi/lch_YTa7-XM/maxresdefault.jpg',
    ytUrl: 'https://youtube.com/shorts/lch_YTa7-XM?si=8RADe7r46m1EPpPM',
    descriptionCn: '刺青師阿酸是我的偶像，我很喜歡他的創作，但是我怕痛。能夠拍攝到偶像，那是無比幸運，喂 偷告白啊。',
    descriptionEn: "The tattooist known as 阿酸 is my paragon; I am thoroughly enamored with his craft. Yet, alas, I shrink from the needle's bite. To merely capture his likeness through my lens is a fortune beyond measure... Stay—is this a clandestine declaration of affection?",
    crew: [
      '刺青師 ｜ @radix9_ta2',
      '鏡中 Model ｜ @anderhasnofriend_',
      '攝影/燈光 ｜ 哈維 HARVI @linharvi 、 @_ad_.0418_',
      '剪輯 Editor ｜ 哈維 HARVI @linharvi',
      '調光 Colorist ｜ @_ad_.0418_',
      '平面照 ｜ @_ad_.0418_ Created by AD & 哈維 HARVI'
    ],
    previewStart: 0,
    previewEnd: 5
  },
  {
    id: 'v6',
    title: '《世新公廣優秀學生訪談01》',
    year: '2024',
    type: VideoType.VERTICAL,
    thumbnail: 'https://img.youtube.com/vi/6L1ZAPMjU_w/maxresdefault.jpg',
    ytUrl: 'https://youtube.com/shorts/6L1ZAPMjU_w?feature=share',
    descriptionCn: '世新大學公廣系優秀學生深度對談紀錄系列 01。',
    descriptionEn: "In-depth interview series featuring outstanding students from SHU PR & AD (Episode 01).",
    crew: [
      '攝影/燈光 ｜ 哈維 HARVI @linharvi 、 @_ad_.0418_',
      '剪輯 Editor ｜ 哈維 HARVI @linharvi',
      '調光 Colorist ｜ @_ad_.0418_'
    ]
  },
  {
    id: 'v7',
    title: '《世新公廣優秀學生訪談02》',
    year: '2024',
    type: VideoType.VERTICAL,
    thumbnail: 'https://img.youtube.com/vi/pgiMu-ZGZbQ/maxresdefault.jpg',
    ytUrl: 'https://youtube.com/shorts/pgiMu-ZGZbQ?feature=share',
    descriptionCn: '世新大學公廣系優秀學生深度對談紀錄系列 02。',
    descriptionEn: "In-depth interview series featuring outstanding students from SHU PR & AD (Episode 02).",
    crew: [
      '攝影/燈光 ｜ 哈維 HARVI @linharvi 、 @_ad_.0418_',
      '剪輯 Editor ｜ 哈維 HARVI @linharvi',
      '調光 Colorist ｜ @_ad_.0418_'
    ]
  },
  {
    id: 'v8',
    title: '《世新公廣優秀學生訪談03》',
    year: '2024',
    type: VideoType.VERTICAL,
    thumbnail: 'https://img.youtube.com/vi/UVhUhdsW-50/maxresdefault.jpg',
    ytUrl: 'https://youtube.com/shorts/UVhUhdsW-50?feature=share',
    descriptionCn: '世新大學公廣系優秀學生深度對談紀錄系列 03。',
    descriptionEn: "In-depth interview series featuring outstanding students from SHU PR & AD (Episode 03).",
    crew: [
      '攝影/燈光 ｜ 哈維 HARVI @linharvi 、 @_ad_.0418_',
      '剪輯 Editor ｜ 哈維 HARVI @linharvi',
      '調光 Colorist ｜ @_ad_.0418_'
    ]
  },
  {
    id: 'v9',
    title: '《世新公廣優秀學生訪談04》',
    year: '2024',
    type: VideoType.VERTICAL,
    thumbnail: 'https://img.youtube.com/vi/2C0ITwmy-m0/maxresdefault.jpg',
    ytUrl: 'https://youtube.com/shorts/2C0ITwmy-m0?feature=share',
    descriptionCn: '世新大學公廣系優秀學生深度對談紀錄系列 04。',
    descriptionEn: "In-depth interview series featuring outstanding students from SHU PR & AD (Episode 04).",
    crew: [
      '攝影/燈光 ｜ 哈維 HARVI @linharvi 、 @_ad_.0418_',
      '剪輯 Editor ｜ 哈維 HARVI @linharvi',
      '調光 Colorist ｜ @_ad_.0418_'
    ]
  },

  // --- 橫式影片 ---
  {
    id: 'h1',
    title: '《P seven 廣告片》',
    year: '2025',
    type: VideoType.HORIZONTAL,
    thumbnail: 'https://img.youtube.com/vi/FJPTyIc5hAY/maxresdefault.jpg',
    ytUrl: 'https://youtu.be/FJPTyIc5hAY',
    descriptionCn: '結合了香水前調、中調、尾調的氣味，將嗅覺轉為視覺，穿越回小時候的劇情。台灣也能有香水。',
    descriptionEn: "Interweaving the ephemeral top notes, the soulful heart, and the lingering base, this essence transmutes the olfactory into the visual. It is a vessel navigating us back to the cherished vignettes of childhood. Behold—Taiwan, too, weaves its own aromatic tapestry.",
    crew: [
      '劇組人員',
      '導演：哈維 HARVI',
      '製片：黃譯葶',
      '場記：許又云',
      '美術：洪聖傑',
      '攝影：黃鼎超',
      '燈光：李端宸',
      '後製：方祺偉、哈維 HARVI',
      '調光：AD黃鼎超',
      '演員：洪聖傑、林詮、林曄'
    ],
    previewStart: 42,
    previewEnd: 49
  },
  {
    id: 'h2',
    title: '《紅圈》',
    year: '2024',
    type: VideoType.HORIZONTAL,
    thumbnail: 'https://img.youtube.com/vi/cON_dzdhaCY/maxresdefault.jpg',
    ytUrl: 'https://youtu.be/cON_dzdhaCY',
    descriptionCn: '闡述了導演自導自演，對於自身缺陷的釋懷，以及過去承受的痛苦，化為視覺。',
    descriptionEn: "It elucidates the auteur’s journey in a self-directed performance: a cathartic reconciliation with personal imperfections, where the anguish of the past is transmuted into visual imagery.",
    crew: [
      '劇組人員',
      '導演：林宏奕',
      '副導：許又云',
      '製片：黃譯葶',
      '場記：張芮琪',
      '美術：梁靖儀',
      '三妝：黃譯葶',
      '攝影：黃鼎超',
      '燈光、調光：黃鼎超',
      '後製：林宏奕',
      '演員：林宏奕'
    ],
    previewStart: 131,
    previewEnd: 137
  },
  {
    id: 'h3',
    title: '《2025音習社成發》',
    year: '2025',
    type: VideoType.HORIZONTAL,
    thumbnail: 'https://img.youtube.com/vi/L8pMMgAykeY/maxresdefault.jpg',
    ytUrl: 'https://youtu.be/L8pMMgAykeY',
    descriptionCn: '看著大夥拿著樂器，瘋狂的彈奏，能夠有音樂是很幸福的事情啊！Linda! Linda! Linda!',
    descriptionEn: "Beholding the assembly clutching their instruments, striking chords in delirious abandon... Ah, what sublime fortune it is, simply to be graced by the presence of music! Linda! Linda! Linda!",
    crew: [
      '【現場影像動態紀錄】',
      '哈維 HARVI @linharvi 、AD @_ad_.photography_ 、 @_ad_.0418_ 、 @wish_o408、梁峻庭 @lian9t1n',
      '━━━━━━━━━━━━━━',
      '【後期製作】',
      '哈維 HARVI @linharvi 、調光 AD'
    ],
    previewStart: 2,
    previewEnd: 10
  },
  {
    id: 'h4',
    title: '《2025 TGF 第九屆傳續盃籃球賽 全國冠軍賽前導片》 系列影片',
    year: '2025',
    type: VideoType.HORIZONTAL,
    thumbnail: 'https://img.youtube.com/vi/lPRV-9iGNvo/maxresdefault.jpg',
    ytUrl: [
      'https://youtu.be/lPRV-9iGNvo',
      'https://youtu.be/p8PdnUuSo70',
      'https://youtu.be/MNofhkNTsXY',
      'https://youtu.be/EFPUe76byhs',
      'https://youtu.be/fu7hmnNs4Xo'
    ],
    descriptionCn: '充滿激情，那不為了汗水以及吶喊而已，充滿感性、友情。',
    descriptionEn: "Brimming with fervor, it transcends the mere shedding of sweat and the roar of voices. It is an overflow of profound sensibility and camaraderie.",
    crew: [
      '製作人 Producer ｜ 湯宗翰',
      '製作協調 Production Coordinator ｜ 周珮鈺',
      '導演 Director ｜ 哈維 HARVI @linharvi',
      '攝影 Cinematographers ｜ 哈維 HARVI、AD @_ad_.photography_ @_ad_.0418_、羅喬煒 @lcw.0429 @lo._.night',
      '剪輯 Editor ｜ 哈維 HARVI',
      '企劃 Planner ｜ Amber @aaaemb._o',
      '製片 Producer ｜ Sharon @sharon.cma'
    ],
    previewStart: 42,
    previewEnd: 50
  },
  {
    id: 'h5',
    title: '《2025 籃球聯盟明星賽》',
    year: '2025',
    type: VideoType.HORIZONTAL,
    thumbnail: 'https://img.youtube.com/vi/Mx9HDv9bS1k/maxresdefault.jpg',
    ytUrl: 'https://youtu.be/Mx9HDv9bS1k',
    descriptionCn: '一個球員很強，那沒什麼，但如果是一群很強的球員呢？',
    descriptionEn: "The prowess of a solitary champion is a mere trifle. But ponder this: What force is unleashed when a legion of titans converges?",
    crew: [
      '攝影 Cinematographers ｜ 哈維 HARVI @linharvi、@_ad_.0418_',
      '剪輯 Editor ｜ 哈維 HARVI @linharvi',
      '調光 Colorist ｜ @_ad_.0418_'
    ]
  },
  {
    id: 'h6',
    title: '《我的年下男 學生篇側拍紀錄片》',
    year: '2025',
    type: VideoType.HORIZONTAL,
    thumbnail: 'https://img.youtube.com/vi/rzgEO7DyFGU/maxresdefault.jpg',
    ytUrl: 'https://youtu.be/rzgEO7DyFGU',
    descriptionCn: '學生進入了大型劇組，是被扁還是看見了未來的光？',
    descriptionEn: "As the neophyte ventures into the belly of a cinematic leviathan, a question remains: Is this a brutal scourging, or the first glimpse of a luminous destiny?",
    crew: [
      '攝影：哈維 HARVI @linharvi',
      '剪輯：哈維 HARVI @linharvi',
      '調光：@_ad_.0418'
    ]
  },
  {
    id: 'h7',
    title: '《來！喝茶啊！》',
    year: '2024',
    type: VideoType.HORIZONTAL,
    thumbnail: 'https://img.youtube.com/vi/1R98hMCYSzA/maxresdefault.jpg',
    ytUrl: 'https://youtu.be/1R98hMCYSzA',
    descriptionCn: '影片紀錄隱藏於深坑炮子崙山區，與外界隔絕的「林家草厝」。這裡沒有對外道路，林念貞女士一家和山友們共同努力，將曾經寂靜無人的山居轉變為充滿生機的家園。林念貞女士以耕田種茶的自給自足生活方式，讓訪客體驗最純粹的山野生活。',
    descriptionEn: "This film chronicles the 'Lin Family Thatched Cottage,' ensconced deep within the Paozilun mountains of Shenkeng, a sanctuary severed from the outside world. Untethered by modern thoroughfares, this once-dormant abode has been breathed into vibrant existence through the collective toil of Ms. Lin Nian-zhen, her kin, and kindred spirits of the peaks. Through an agrarian rhythm of tilling the earth and cultivating tea, she invites sojourners to partake in the unadulterated essence of life in the wilds.",
    crew: [
      '參賽團隊：木柵公園',
      '━━━━━━━━━━━━━━',
      '團隊成員：',
      '導演：哈維 HARVI',
      '黃鼎超、張哲維、賴紀瑄、黃汶琪、莊羽潼、楊依瑄',
      '━━━━━━━━━━━━━━',
      '拍攝地區及對象：',
      '新北深坑／林家草厝林念貞及家人'
    ]
  },
  {
    id: 'h8',
    title: '《橫著看》',
    year: '2024',
    type: VideoType.HORIZONTAL,
    thumbnail: 'https://img.youtube.com/vi/RuGomtVbQWI/maxresdefault.jpg',
    ytUrl: 'https://youtu.be/RuGomtVbQWI?si=sfeONU5LD976awrR',
    descriptionCn: '大學的第一支片，有得獎，講起來有點害羞',
    descriptionEn: "My collegiate debut—an award-winner. I recount this achievement with a certain sheepishness.",
    crew: [
      '劇組人員：',
      '片中使用podcast：標準鳥生活 @standard_goblinmode',
      '編導/剪輯：林宏奕 @linharvi',
      '聲音藏鏡人：何晉宇 @dpokly',
      '製片：賴紀瑄 @sharon.cma',
      '攝影/燈光：黃鼎超、張哲維 @_ad_.0418_ @wish_o408',
      '特效/停格動畫製作：方祺偉 @_.fqw132._',
      '後期影片文字工作 ：劉利晟 @li_seng3',
      'Created by木柵公園'
    ]
  }
];
