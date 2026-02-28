export interface Sequence {
  level: number;
  name: string;
  description: string;
}

export interface Pathway {
  id: string;
  name: string;
  tarotCard: string;
  tarotName: string;
  color: string;
  sequences: Sequence[];
}

export const PATHWAYS: Pathway[] = [
  {
    id: "fool",
    name: "占卜家途径",
    tarotCard: "The Fool",
    tarotName: "愚者",
    color: "#4c1d95",
    sequences: [
      { level: 9, name: "占卜家", description: "拥有灵感，擅长各种占卜方式。" },
      { level: 8, name: "小丑", description: "身体协调性极佳，能精准控制表情和动作。" },
      { level: 7, name: "魔术师", description: "掌握多种超凡戏法。" },
      { level: 6, name: "无面人", description: "可以改变容貌、体型和声音。" },
      { level: 5, name: "秘偶大师", description: "操控灵体之线。" },
      { level: 4, name: "诡法师", description: "诡异的超凡能力。" },
      { level: 3, name: "诡秘侍者", description: "灵体之线的终极掌控者。" },
      { level: 2, name: "奇迹师", description: "制造真正的奇迹。" },
      { level: 1, name: "诡秘之神", description: "掌握诡秘的权柄。" },
      { level: 0, name: "愚者", description: "愚弄时空与命运。" }
    ]
  },
  {
    id: "magician",
    name: "学徒途径",
    tarotCard: "The Magician",
    tarotName: "魔术师",
    color: "#1e3a8a",
    sequences: [
      { level: 9, name: "学徒", description: "穿透墙壁，感应灵界。" },
      { level: 8, name: "戏法师", description: "掌握各种实用的超凡戏法。" },
      { level: 7, name: "占星人", description: "擅长占星术。" },
      { level: 6, name: "记录官", description: "记录并复现他人的能力。" },
      { level: 5, name: "旅行家", description: "灵界穿梭，瞬间移动。" },
      { level: 4, name: "秘法师", description: "掌握空间的奥秘。" },
      { level: 3, name: "漫游者", description: "星界漫游。" },
      { level: 2, name: "贤者", description: "知识的化身。" },
      { level: 1, name: "星之钥匙", description: "掌握所有门户的钥匙。" },
      { level: 0, name: "门", description: "万门之门。" }
    ]
  },
  {
    id: "high-priestess",
    name: "通识者途径",
    tarotCard: "The High Priestess",
    tarotName: "女祭司",
    color: "#065f46",
    sequences: [
      { level: 9, name: "通识者", description: "过目不忘，理解力极强。" },
      { level: 8, name: "考古学家", description: "擅长探索遗迹。" },
      { level: 7, name: "鉴定师", description: "鉴定各种物品。" },
      { level: 6, name: "机械专家", description: "制造各种机械装置。" },
      { level: 5, name: "炼金术士", description: "点石成金。" },
      { level: 4, name: "秘术导师", description: "掌握秘术的奥秘。" },
      { level: 3, name: "具现导师", description: "将知识具现化。" },
      { level: 2, name: "知识导师", description: "传播知识。" },
      { level: 1, name: "文明启蒙者", description: "推动文明进步。" },
      { level: 0, name: "完美者", description: "文明与秩序的真神。" }
    ]
  },
  {
    id: "empress",
    name: "耕种者途径",
    tarotCard: "The Empress",
    tarotName: "皇后",
    color: "#064e3b",
    sequences: [
      { level: 9, name: "耕种者", description: "擅长种植，力量极大。" },
      { level: 8, name: "养殖驯化者", description: "驯化各种生物。" },
      { level: 7, name: "丰收祭司", description: "带来丰收。" },
      { level: 6, name: "生物学家", description: "研究各种生物。" },
      { level: 5, name: "德鲁伊", description: "自然之友。" },
      { level: 4, name: "古代炼金师", description: "炼金术大师。" },
      { level: 3, name: "赋予者", description: "赋予生命力量。" },
      { level: 2, name: "荒芜主宰", description: "掌控荒芜与繁茂。" },
      { level: 1, name: "自然行者", description: "自然的化身。" },
      { level: 0, name: "母亲", description: "大地与生命的真神。" }
    ]
  },
  {
    id: "emperor",
    name: "律师途径",
    tarotCard: "The Emperor",
    tarotName: "皇帝",
    color: "#171717",
    sequences: [
      { level: 9, name: "律师", description: "擅长辩论，寻找规则漏洞。" },
      { level: 8, name: "野蛮人", description: "力量极大，无视规则。" },
      { level: 7, name: "贿赂者", description: "贿赂规则。" },
      { level: 6, name: "腐蚀者", description: "腐蚀人心。" },
      { level: 5, name: "混乱导师", description: "制造混乱。" },
      { level: 4, name: "堕落男爵", description: "扭曲规则。" },
      { level: 3, name: "狂乱至爵", description: "操控狂乱。" },
      { level: 2, name: "熵之公爵", description: "掌控熵增。" },
      { level: 1, name: "秩序之手", description: "秩序的终极掌控。" },
      { level: 0, name: "黑皇帝", description: "扭曲与秩序的真神。" }
    ]
  },
  {
    id: "hierophant",
    name: "阅读者途径",
    tarotCard: "The Hierophant",
    tarotName: "教皇",
    color: "#1e3a8a",
    sequences: [
      { level: 9, name: "阅读者", description: "博闻强识，分析力强。" },
      { level: 8, name: "推理学员", description: "逻辑推理能力极佳。" },
      { level: 7, name: "守知者", description: "守护知识。" },
      { level: 6, name: "博学者", description: "掌握大量非凡知识。" },
      { level: 5, name: "秘术导师", description: "掌握秘术。" },
      { level: 4, name: "预言家", description: "真正的预言能力。" },
      { level: 3, name: "洞察者", description: "洞悉世间真理。" },
      { level: 2, name: "智者", description: "智慧的化身。" },
      { level: 1, name: "全知之眼", description: "洞察一切秘密。" },
      { level: 0, name: "白塔", description: "全知全能的象征。" }
    ]
  },
  {
    id: "lovers",
    name: "偷盗者途径",
    tarotCard: "The Lovers",
    tarotName: "恋人",
    color: "#064e3b",
    sequences: [
      { level: 9, name: "偷盗者", description: "偷取财物、灵感或能力。" },
      { level: 8, name: "诈骗师", description: "擅长欺骗和误导。" },
      { level: 7, name: "解密学者", description: "洞察秘密，破解封印。" },
      { level: 6, name: "盗火者", description: "窃取他人的非凡能力。" },
      { level: 5, name: "窃梦家", description: "潜入梦境，窃取秘密。" },
      { level: 4, name: "寄生者", description: "寄生在他人体内。" },
      { level: 3, name: "导师", description: "引导他人走向错误。" },
      { level: 2, name: "命运木马", description: "操控命运的木马。" },
      { level: 1, name: "时之虫", description: "时间的窃贼。" },
      { level: 0, name: "错误", description: "规则的漏洞。" }
    ]
  },
  {
    id: "chariot",
    name: "猎人途径",
    tarotCard: "The Chariot",
    tarotName: "战车",
    color: "#7f1d1d",
    sequences: [
      { level: 9, name: "猎人", description: "擅长追踪、陷阱和格斗。" },
      { level: 8, name: "挑衅者", description: "言语能激怒他人。" },
      { level: 7, name: "纵火家", description: "操控火焰。" },
      { level: 6, name: "阴谋家", description: "擅长布局与阴谋。" },
      { level: 5, name: "收割者", description: "致命的攻击力。" },
      { level: 4, name: "铁血骑士", description: "统帅军队。" },
      { level: 3, name: "战争主教", description: "战争的组织者。" },
      { level: 2, name: "天气战神", description: "掌控天气的战神。" },
      { level: 1, name: "征服者", description: "征服一切。" },
      { level: 0, name: "红祭司", description: "战争与火焰的真神。" }
    ]
  },
  {
    id: "strength",
    name: "战士途径",
    tarotCard: "Strength",
    tarotName: "力量",
    color: "#451a03",
    sequences: [
      { level: 9, name: "战士", description: "身体素质极强，精通格斗。" },
      { level: 8, name: "格斗家", description: "掌握各种格斗技巧。" },
      { level: 7, name: "武器大师", description: "精通所有武器。" },
      { level: 6, name: "黎明骑士", description: "召唤黎明之光。" },
      { level: 5, name: "守护者", description: "极强的防御力。" },
      { level: 4, name: "银骑士", description: "银色的守护者。" },
      { level: 3, name: "惩戒骑士", description: "惩戒罪恶。" },
      { level: 2, name: "荣耀者", description: "荣耀的化身。" },
      { level: 1, name: "毁灭之手", description: "毁灭一切的手。" },
      { level: 0, name: "黄昏巨人", description: "战争与黄昏的真神。" }
    ]
  },
  {
    id: "hermit",
    name: "窥秘人途径",
    tarotCard: "The Hermit",
    tarotName: "隐者",
    color: "#1e1b4b",
    sequences: [
      { level: 9, name: "窥秘人", description: "洞察隐秘的知识。" },
      { level: 8, name: "格斗学者", description: "用知识指导格斗。" },
      { level: 7, name: "巫师", description: "掌握各种巫术。" },
      { level: 6, name: "卷轴教授", description: "制作各种卷轴。" },
      { level: 5, name: "星象师", description: "观测星辰。" },
      { level: 4, name: "神秘女王", description: "神秘学的主宰。" },
      { level: 3, name: "预言家", description: "预见未来。" },
      { level: 2, name: "贤者", description: "知识的化身。" },
      { level: 1, name: "知识受难者", description: "为知识而受难。" },
      { level: 0, name: "隐者", description: "隐秘与知识的真神。" }
    ]
  },
  {
    id: "wheel-of-fortune",
    name: "怪物途径",
    tarotCard: "Wheel of Fortune",
    tarotName: "命运之轮",
    color: "#1e3a8a",
    sequences: [
      { level: 9, name: "怪物", description: "灵感极高，能看到常人看不见的东西。" },
      { level: 8, name: "机器", description: "身体像机器一样精准。" },
      { level: 7, name: "幸运儿", description: "运气极好。" },
      { level: 6, name: "祸不单行", description: "带来厄运。" },
      { level: 5, name: "厄运法师", description: "操控厄运。" },
      { level: 4, name: "灾难主祭", description: "制造灾难。" },
      { level: 3, name: "混乱行者", description: "在混乱中行走。" },
      { level: 2, name: "概率之神", description: "掌控概率。" },
      { level: 1, name: "蛇", description: "命运的化身。" },
      { level: 0, name: "命运之轮", description: "命运的真神。" }
    ]
  },
  {
    id: "justice",
    name: "观众途径",
    tarotCard: "Justice",
    tarotName: "正义",
    color: "#78350f",
    sequences: [
      { level: 9, name: "观众", description: "洞察他人的情绪和意图。" },
      { level: 8, name: "读心者", description: "读取他人的浅层想法。" },
      { level: 7, name: "心理医生", description: "调节心理状态。" },
      { level: 6, name: "催眠师", description: "控制他人的行为。" },
      { level: 5, name: "梦境行者", description: "自由进出他人的梦境。" },
      { level: 4, name: "操纵师", description: "操纵人心。" },
      { level: 3, name: "织梦人", description: "梦境具现化。" },
      { level: 2, name: "洞察者", description: "洞察一切真理。" },
      { level: 1, name: "作家", description: "书写现实。" },
      { level: 0, name: "空想家", description: "空想具现化。" }
    ]
  },
  {
    id: "hanged-man",
    name: "秘祈人途径",
    tarotCard: "The Hanged Man",
    tarotName: "倒吊人",
    color: "#450a0a",
    sequences: [
      { level: 9, name: "秘祈人", description: "感应隐秘的存在。" },
      { level: 8, name: "倾听者", description: "听到神灵的低语。" },
      { level: 7, name: "隐修士", description: "阴影和诅咒的力量。" },
      { level: 6, name: "蔷薇主教", description: "操控血肉。" },
      { level: 5, name: "牧羊人", description: "放牧灵魂。" },
      { level: 4, name: "黑骑士", description: "阴影与堕落之力。" },
      { level: 3, name: "三首圣堂", description: "代表不同的权柄。" },
      { level: 2, name: "堕落咏者", description: "歌颂堕落。" },
      { level: 1, name: "神之孽子", description: "神灵的孽种。" },
      { level: 0, name: "倒吊人", description: "堕落与救赎的化身。" }
    ]
  },
  {
    id: "death",
    name: "收尸人途径",
    tarotCard: "Death",
    tarotName: "死神",
    color: "#171717",
    sequences: [
      { level: 9, name: "收尸人", description: "不惧尸毒，能感应死气。" },
      { level: 8, name: "掘墓人", description: "身体素质极强，擅长挖掘。" },
      { level: 7, name: "通灵者", description: "与死者沟通。" },
      { level: 6, name: "执政官", description: "执掌死灵。" },
      { level: 5, name: "看门人", description: "看守冥界之门。" },
      { level: 4, name: "不死者", description: "死而复生。" },
      { level: 3, name: "摆渡人", description: "引导灵魂前往冥界。" },
      { level: 2, name: "死亡执政官", description: "执掌死亡的律法。" },
      { level: 1, name: "苍白皇帝", description: "死亡的终极主宰。" },
      { level: 0, name: "死神", description: "万物终结的归宿。" }
    ]
  },
  {
    id: "temperance",
    name: "囚犯途径",
    tarotCard: "Temperance",
    tarotName: "节制",
    color: "#450a0a",
    sequences: [
      { level: 9, name: "囚犯", description: "身体素质极强，忍受痛苦。" },
      { level: 8, name: "疯子", description: "爆发力极强。" },
      { level: 7, name: "狼人", description: "变身为狼。" },
      { level: 6, name: "僵尸", description: "身体坚硬如铁。" },
      { level: 5, name: "怨魂", description: "灵体化。" },
      { level: 4, name: "诅咒者", description: "强大的诅咒。" },
      { level: 3, name: "沉默行者", description: "在沉默中行走。" },
      { level: 2, name: "古代邪物", description: "古老的邪恶存在。" },
      { level: 1, name: "恶神", description: "邪恶的神灵。" },
      { level: 0, name: "被缚者", description: "欲望与节制的真神。" }
    ]
  },
  {
    id: "devil",
    name: "罪犯途径",
    tarotCard: "The Devil",
    tarotName: "恶魔",
    color: "#450a0a",
    sequences: [
      { level: 9, name: "罪犯", description: "身体素质极强，擅长犯罪。" },
      { level: 8, name: "冷血者", description: "没有感情，极其冷静。" },
      { level: 7, name: "连环杀手", description: "擅长各种杀人技巧。" },
      { level: 6, name: "欲望使者", description: "传播欲望。" },
      { level: 5, name: "欲望主宰", description: "掌控欲望。" },
      { level: 4, name: "恶魔", description: "变身为恶魔。" },
      { level: 3, name: "恐惧男爵", description: "散播恐惧。" },
      { level: 2, name: "绝望夜妖", description: "散播绝望。" },
      { level: 1, name: "污秽之语", description: "污秽的语言。" },
      { level: 0, name: "深渊", description: "邪恶与欲望的真神。" }
    ]
  },
  {
    id: "tower",
    name: "水手途径",
    tarotCard: "The Tower",
    tarotName: "高塔",
    color: "#1e40af",
    sequences: [
      { level: 9, name: "水手", description: "擅长游泳，平衡感极佳。" },
      { level: 8, name: "愤怒者", description: "力量极大。" },
      { level: 7, name: "航海家", description: "能在大海中辨别方向。" },
      { level: 6, name: "风暴颂歌者", description: "歌颂风暴。" },
      { level: 5, name: "海洋歌者", description: "歌声能引发海啸。" },
      { level: 4, name: "灾难主祭", description: "制造灾难。" },
      { level: 3, name: "海王", description: "大海的主宰。" },
      { level: 2, name: "天灾", description: "天灾的化身。" },
      { level: 1, name: "雷神", description: "雷霆的终极掌控者。" },
      { level: 0, name: "暴君", description: "风暴与雷霆的真神。" }
    ]
  },
  {
    id: "star",
    name: "不眠者途径",
    tarotCard: "The Star",
    tarotName: "星星",
    color: "#020617",
    sequences: [
      { level: 9, name: "不眠者", description: "夜晚精力充沛，视力极佳。" },
      { level: 8, name: "午夜诗人", description: "诗歌具有安抚或诅咒力量。" },
      { level: 7, name: "梦魇", description: "能将他人拉入梦境。" },
      { level: 6, name: "安魂师", description: "安抚灵魂，驱散邪灵。" },
      { level: 5, name: "灵体牧道者", description: "引导灵体。" },
      { level: 4, name: "夜之复仇者", description: "黑夜的复仇者。" },
      { level: 3, name: "恐惧主教", description: "散播恐惧。" },
      { level: 2, name: "逐暗者", description: "追逐黑暗。" },
      { level: 1, name: "厄难骑士", description: "带来厄难。" },
      { level: 0, name: "黑暗", description: "隐秘与厄运的真神。" }
    ]
  },
  {
    id: "moon",
    name: "药师途径",
    tarotCard: "The Moon",
    tarotName: "月亮",
    color: "#1e1b4b",
    sequences: [
      { level: 9, name: "药师", description: "擅长调配各种药剂。" },
      { level: 8, name: "驯兽师", description: "驯服各种野兽。" },
      { level: 7, name: "吸血鬼", description: "拥有极强的恢复力。" },
      { level: 6, name: "生物学家", description: "研究生物。" },
      { level: 5, name: "深红学者", description: "研究红月。" },
      { level: 4, name: "巫王", description: "巫术之王。" },
      { level: 3, name: "召唤大师", description: "召唤强大的存在。" },
      { level: 2, name: "创生者", description: "创造生命。" },
      { level: 1, name: "始祖", description: "血族的始祖。" },
      { level: 0, name: "月亮", description: "红月的真神。" }
    ]
  },
  {
    id: "sun",
    name: "歌颂者途径",
    tarotCard: "The Sun",
    tarotName: "太阳",
    color: "#854d0e",
    sequences: [
      { level: 9, name: "歌颂者", description: "带来勇气和力量。" },
      { level: 8, name: "祈光者", description: "召唤圣光。" },
      { level: 7, name: "太阳神官", description: "制造圣水。" },
      { level: 6, name: "公证人", description: "公证契约。" },
      { level: 5, name: "光辉使者", description: "极强的净化力。" },
      { level: 4, name: "烈阳圣者", description: "圣洁的化身。" },
      { level: 3, name: "离神者", description: "背离神灵。" },
      { level: 2, name: "净化者", description: "净化一切。" },
      { level: 1, name: "赐光者", description: "赐予光明。" },
      { level: 0, name: "太阳", description: "永恒的烈阳。" }
    ]
  },
  {
    id: "judgement",
    name: "仲裁人途径",
    tarotCard: "Judgement",
    tarotName: "审判",
    color: "#1e3a8a",
    sequences: [
      { level: 9, name: "仲裁人", description: "极强的威慑力，维护秩序。" },
      { level: 8, name: "治安官", description: "擅长追踪和逮捕。" },
      { level: 7, name: "审讯者", description: "审讯罪恶。" },
      { level: 6, name: "判官", description: "判定罪行。" },
      { level: 5, name: "惩戒骑士", description: "惩戒违反规则者。" },
      { level: 4, name: "律令法师", description: "掌控律令。" },
      { level: 3, name: "混乱猎手", description: "在混乱中狩猎。" },
      { level: 2, name: "平衡者", description: "维护平衡。" },
      { level: 1, name: "秩序之手", description: "秩序的终极掌控。" },
      { level: 0, name: "审判者", description: "秩序与律法的真神。" }
    ]
  },
  {
    id: "world",
    name: "刺客途径",
    tarotCard: "The World",
    tarotName: "世界",
    color: "#312e81",
    sequences: [
      { level: 9, name: "刺客", description: "擅长潜伏与暗杀。" },
      { level: 8, name: "教唆者", description: "教唆他人犯罪。" },
      { level: 7, name: "女巫", description: "掌握各种诅咒和黑魔法。" },
      { level: 6, name: "欢愉魔女", description: "散播欢愉与痛苦。" },
      { level: 5, name: "痛苦魔女", description: "制造大范围的痛苦。" },
      { level: 4, name: "不老魔女", description: "青春永驻。" },
      { level: 3, name: "绝望魔女", description: "散播绝望与瘟疫。" },
      { level: 2, name: "灾难魔女", description: "制造各种灾难。" },
      { level: 1, name: "末日魔女", description: "终结的化身。" },
      { level: 0, name: "魔女", description: "灾难与痛苦的真神。" }
    ]
  }
];
