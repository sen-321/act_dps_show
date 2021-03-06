'use strict';
var jobNameCnToType={"占星术士":"Ast","吟游诗人":"Brd","黑魔法师":"Blm","暗黑骑士":"Drk","龙骑士":"Drg","机工士":"Mch","武僧":"Mnk","忍者":"Nin","骑士":"Pld","学者":"Sch","召唤师":"Smn","战士":"War","白魔法师":"Whm","赤魔法师":"Rdm","武士":"Sam","舞者":"Dnc","绝枪战士":"Gnb"};
var zoneList=[
    {
      "id": 2,
      "name": "Dungeons (Endgame)",
      "frozen": true,
      "encounters": [
        {
          "id": 4500,
          "name": "空中神域不获岛"
        },
        {
          "id": 4501,
          "name": "博物战舰无限回廊"
        },
        {
          "id": 4502,
          "name": "草木庭园圣茉夏娜植物园"
        },
        {
          "id": 4503,
          "name": "地脉灵灯天狼星灯塔"
        },
        {
          "id": 4504,
          "name": "星海空间颠倒塔"
        },
        {
          "id": 4505,
          "name": "神圣遗迹无限城市街古迹"
        },
        {
          "id": 4506,
          "name": "天龙宫殿忆罪宫"
        },
        {
          "id": 4507,
          "name": "黑涡传说破舰岛"
        },
        {
          "id": 4508,
          "name": "险峻峡谷塞尔法特尔溪谷"
        },
        {
          "id": 4509,
          "name": "秘本宝库迦巴勒幻想图书馆"
        }
      ],
      "brackets": {
        "min": 3,
        "max": 3.5,
        "bucket": 0.1,
        "type": "版本"
      }
    },
    {
      "id": 4,
      "name": "Trials (Extreme)",
      "frozen": true,
      "encounters": [
        {
          "id": 1027,
          "name": "俾斯麦"
        },
        {
          "id": 1028,
          "name": "罗波那"
        },
        {
          "id": 1029,
          "name": "骑神托尔丹"
        },
        {
          "id": 1031,
          "name": "萨菲洛特"
        },
        {
          "id": 1033,
          "name": "尼德霍格"
        },
        {
          "id": 1034,
          "name": "索菲娅"
        },
        {
          "id": 1035,
          "name": "祖尔宛"
        }
      ],
      "brackets": {
        "min": 3,
        "max": 3.5,
        "bucket": 0.1,
        "type": "版本"
      }
    },
    {
      "id": 5,
      "name": "Void Ark",
      "frozen": true,
      "encounters": [
        {
          "id": 2000,
          "name": "刻托"
        },
        {
          "id": 2001,
          "name": "天柱树"
        },
        {
          "id": 2002,
          "name": "丘库雷因"
        },
        {
          "id": 2003,
          "name": "艾奇德娜"
        }
      ],
      "brackets": {
        "min": 3,
        "max": 3.5,
        "bucket": 0.1,
        "type": "版本"
      }
    },
    {
      "id": 6,
      "name": "Alexander: Gordias (Story)",
      "frozen": true,
      "encounters": [
        {
          "id": 14,
          "name": "压迫者"
        },
        {
          "id": 15,
          "name": "戈耳狄俄斯之袖"
        },
        {
          "id": 16,
          "name": "有生命活水"
        },
        {
          "id": 17,
          "name": "操纵者"
        },
        {
          "id": 5000,
          "name": "浮士德"
        }
      ],
      "brackets": {
        "min": 3,
        "max": 3.5,
        "bucket": 0.1,
        "type": "版本"
      }
    },
    {
      "id": 7,
      "name": "Alexander: Gordias (Savage)",
      "frozen": true,
      "encounters": [
        {
          "id": 18,
          "name": "压迫者"
        },
        {
          "id": 19,
          "name": "戈耳狄俄斯之袖"
        },
        {
          "id": 20,
          "name": "有生命活水"
        },
        {
          "id": 21,
          "name": "操纵者"
        },
        {
          "id": 5001,
          "name": "浮士德"
        }
      ],
      "brackets": {
        "min": 3,
        "max": 3.5,
        "bucket": 0.1,
        "type": "版本"
      }
    },
    {
      "id": 8,
      "name": "The Weeping City of Mhach",
      "frozen": true,
      "encounters": [
        {
          "id": 2004,
          "name": "阿剌克涅"
        },
        {
          "id": 2005,
          "name": "弗加尔"
        },
        {
          "id": 2006,
          "name": "奥兹玛"
        },
        {
          "id": 2007,
          "name": "卡洛菲斯提莉"
        }
      ],
      "brackets": {
        "min": 3,
        "max": 3.5,
        "bucket": 0.1,
        "type": "版本"
      }
    },
    {
      "id": 9,
      "name": "Alexander: Midas (Story)",
      "frozen": true,
      "encounters": [
        {
          "id": 22,
          "name": "奇才 拉特芬克斯"
        },
        {
          "id": 23,
          "name": "环旋者"
        },
        {
          "id": 24,
          "name": "万事通 奎克辛克斯"
        },
        {
          "id": 25,
          "name": "残暴正义号"
        },
        {
          "id": 5002,
          "name": "新型浮士德"
        },
        {
          "id": 5003,
          "name": "爆破者"
        },
        {
          "id": 5004,
          "name": "争斗者"
        },
        {
          "id": 5005,
          "name": "欺诈者"
        }
      ],
      "brackets": {
        "min": 3,
        "max": 3.5,
        "bucket": 0.1,
        "type": "版本"
      }
    },
    {
      "id": 10,
      "name": "Alexander: Midas (Savage)",
      "frozen": true,
      "encounters": [
        {
          "id": 26,
          "name": "奇才 拉特芬克斯"
        },
        {
          "id": 27,
          "name": "弥达斯之袖"
        },
        {
          "id": 28,
          "name": "万事通 奎克辛克斯"
        },
        {
          "id": 29,
          "name": "残暴正义号"
        },
        {
          "id": 5006,
          "name": "新型浮士德"
        }
      ],
      "brackets": {
        "min": 3,
        "max": 3.5,
        "bucket": 0.1,
        "type": "版本"
      }
    },
    {
      "id": 12,
      "name": "Alexander: The Creator (Story)",
      "frozen": true,
      "encounters": [
        {
          "id": 30,
          "name": "废品翻新装置"
        },
        {
          "id": 31,
          "name": "佣兵雷姆普里克斯"
        },
        {
          "id": 32,
          "name": "巡航驱逐者"
        },
        {
          "id": 33,
          "name": "至尊亚历山大"
        },
        {
          "id": 5007,
          "name": "终极浮士德"
        }
      ],
      "brackets": {
        "min": 3,
        "max": 3.5,
        "bucket": 0.1,
        "type": "版本"
      },
      "partitions": [
        {
          "name": "标准阵容构成",
          "compact": "标准",
          "area": 1,
          "default": true
        },
        {
          "name": "非标准阵容构成",
          "compact": "非标准",
          "area": 1
        },
        {
          "name": "标准阵容构成 (3.55b+)",
          "compact": "标准 (3.55b+)"
        },
        {
          "name": "非标准阵容构成 (3.55b+)",
          "compact": "非标准 (3.55b+)"
        },
        {
          "name": "标准阵容构成 (超越之力)",
          "compact": "标准 (超越之力)"
        },
        {
          "name": "非标准阵容构成 (超越之力)",
          "compact": "非标准 (超越之力)"
        }
      ]
    },
    {
      "id": 13,
      "name": "Alexander: The Creator (Savage)",
      "frozen": true,
      "encounters": [
        {
          "id": 34,
          "name": "废品翻新装置"
        },
        {
          "id": 35,
          "name": "佣兵雷姆普里克斯"
        },
        {
          "id": 36,
          "name": "巡航驱逐者"
        },
        {
          "id": 37,
          "name": "至尊亚历山大"
        },
        {
          "id": 5008,
          "name": "终极浮士德"
        }
      ],
      "brackets": {
        "min": 3,
        "max": 3.5,
        "bucket": 0.1,
        "type": "版本"
      },
      "partitions": [
        {
          "name": "标准阵容构成",
          "compact": "标准",
          "area": 1,
          "default": true
        },
        {
          "name": "非标准阵容构成",
          "compact": "非标准",
          "area": 1
        },
        {
          "name": "标准阵容构成 (3.55b+)",
          "compact": "标准 (3.55b+)"
        },
        {
          "name": "非标准阵容构成 (3.55b+)",
          "compact": "非标准 (3.55b+)"
        },
        {
          "name": "标准阵容构成 (超越之力)",
          "compact": "标准 (超越之力)"
        },
        {
          "name": "非标准阵容构成 (超越之力)",
          "compact": "非标准 (超越之力)"
        }
      ]
    },
    {
      "id": 14,
      "name": "Dungeons (Endgame)",
      "frozen": true,
      "encounters": [
        {
          "id": 4510,
          "name": "鏖战红莲阿拉米格"
        },
        {
          "id": 4511,
          "name": "恶党孤城黄金阁"
        },
        {
          "id": 4512,
          "name": "修行古刹星导寺"
        },
        {
          "id": 4513,
          "name": "沉没神殿斯卡拉遗迹"
        },
        {
          "id": 4514,
          "name": "红玉火山狱之盖"
        },
        {
          "id": 4515,
          "name": "疯狂战舰无限回廊"
        },
        {
          "id": 4516,
          "name": "风水灵庙岩燕庙"
        },
        {
          "id": 4517,
          "name": "死亡大地终末焦土"
        },
        {
          "id": 4518,
          "name": "污染庭园圣茉夏娜植物园"
        },
        {
          "id": 4519,
          "name": "国境战线基姆利特暗区"
        }
      ],
      "brackets": {
        "min": 4,
        "max": 4.5,
        "bucket": 0.1,
        "type": "版本"
      },
      "partitions": [
        {
          "name": "default",
          "compact": "default",
          "default": true,
          "area": 1
        },
        {
          "name": "default",
          "compact": "default",
          "default": true,
          "area": 2
        },
        {
          "name": "default",
          "compact": "default",
          "default": true,
          "area": 3
        }
      ]
    },
    {
      "id": 15,
      "name": "Trials (Extreme)",
      "frozen": true,
      "encounters": [
        {
          "id": 1036,
          "name": "须佐之男"
        },
        {
          "id": 1037,
          "name": "吉祥天女"
        },
        {
          "id": 1038,
          "name": "神龙"
        },
        {
          "id": 1040,
          "name": "白虎"
        },
        {
          "id": 1041,
          "name": "月读"
        },
        {
          "id": 1043,
          "name": "朱雀"
        },
        {
          "id": 1044,
          "name": "青龙"
        }
      ],
      "brackets": {
        "min": 4,
        "max": 4.5,
        "bucket": 0.1,
        "type": "版本"
      },
      "partitions": [
        {
          "name": "标准阵容构成",
          "compact": "标准",
          "area": 1,
          "default": true
        },
        {
          "name": "非标准阵容构成",
          "compact": "非标准",
          "area": 1
        },
        {
          "name": "标准阵容构成",
          "compact": "标准",
          "default": true,
          "area": 2
        },
        {
          "name": "非标准阵容构成",
          "compact": "非标准",
          "area": 2
        },
        {
          "name": "标准阵容构成",
          "compact": "标准",
          "default": true,
          "area": 3
        },
        {
          "name": "非标准阵容构成",
          "compact": "非标准",
          "area": 3
        }
      ]
    },
    {
      "id": 16,
      "name": "Omega: Deltascape (Story)",
      "frozen": true,
      "encounters": [
        {
          "id": 38,
          "name": "老者"
        },
        {
          "id": 39,
          "name": "灾变者"
        },
        {
          "id": 40,
          "name": "哈利卡纳苏斯"
        },
        {
          "id": 41,
          "name": "艾克斯迪司"
        }
      ],
      "brackets": {
        "min": 4,
        "max": 4.5,
        "bucket": 0.1,
        "type": "版本"
      },
      "partitions": [
        {
          "name": "标准阵容构成",
          "compact": "标准",
          "area": 1,
          "default": true
        },
        {
          "name": "非标准阵容构成",
          "compact": "非标准",
          "area": 1
        }
      ]
    },
    {
      "id": 17,
      "name": "Omega: Deltascape (Savage)",
      "frozen": true,
      "encounters": [
        {
          "id": 42,
          "name": "老者"
        },
        {
          "id": 43,
          "name": "灾变者"
        },
        {
          "id": 44,
          "name": "哈利卡纳苏斯"
        },
        {
          "id": 45,
          "name": "艾克斯迪司"
        },
        {
          "id": 46,
          "name": "新生艾克斯迪司"
        }
      ],
      "brackets": {
        "min": 4,
        "max": 4.5,
        "bucket": 0.1,
        "type": "版本"
      },
      "partitions": [
        {
          "name": "标准阵容构成",
          "compact": "标准",
          "area": 1,
          "default": true
        },
        {
          "name": "非标准阵容构成",
          "compact": "非标准",
          "area": 1
        }
      ]
    },
    {
      "id": 18,
      "name": "The Royal City of Rabanastre",
      "frozen": true,
      "encounters": [
        {
          "id": 2008,
          "name": "背德皇帝马提乌斯"
        },
        {
          "id": 2009,
          "name": "统治者哈修马利姆"
        },
        {
          "id": 2010,
          "name": "人马王洛弗卡勒"
        },
        {
          "id": 2011,
          "name": "冷血剑阿加斯"
        }
      ],
      "brackets": {
        "min": 4,
        "max": 4.5,
        "bucket": 0.1,
        "type": "版本"
      },
      "partitions": [
        {
          "name": "default",
          "compact": "default",
          "default": true,
          "area": 1
        },
        {
          "name": "default",
          "compact": "default",
          "default": true,
          "area": 2
        },
        {
          "name": "default",
          "compact": "default",
          "default": true,
          "area": 3
        }
      ]
    },
    {
      "id": 19,
      "name": "The Unending Coil of Bahamut",
      "frozen": true,
      "encounters": [
        {
          "id": 1039,
          "name": "至尊巴哈姆特"
        }
      ],
      "brackets": {
        "min": 4,
        "max": 4.5,
        "bucket": 0.1,
        "type": "版本"
      },
      "partitions": [
        {
          "name": "标准阵容构成",
          "compact": "标准",
          "area": 1,
          "default": true
        },
        {
          "name": "非标准阵容构成",
          "compact": "非标准",
          "area": 1
        },
        {
          "name": "标准阵容构成",
          "compact": "标准",
          "default": true,
          "area": 2
        },
        {
          "name": "非标准阵容构成",
          "compact": "非标准",
          "area": 2
        },
        {
          "name": "标准阵容构成",
          "compact": "标准",
          "default": true,
          "area": 3
        },
        {
          "name": "非标准阵容构成",
          "compact": "非标准",
          "area": 3
        }
      ]
    },
    {
      "id": 20,
      "name": "Omega: Sigmascape (Story)",
      "frozen": true,
      "encounters": [
        {
          "id": 47,
          "name": "魔列车"
        },
        {
          "id": 48,
          "name": "恶魔查达奴克"
        },
        {
          "id": 49,
          "name": "守护者"
        },
        {
          "id": 50,
          "name": "凯夫卡"
        }
      ],
      "brackets": {
        "min": 4,
        "max": 4.5,
        "bucket": 0.1,
        "type": "版本"
      },
      "partitions": [
        {
          "name": "标准阵容构成",
          "compact": "标准",
          "area": 1,
          "default": true
        },
        {
          "name": "非标准阵容构成",
          "compact": "非标准",
          "area": 1
        }
      ]
    },
    {
      "id": 21,
      "name": "Omega: Sigmascape (Savage)",
      "frozen": true,
      "encounters": [
        {
          "id": 51,
          "name": "魔列车"
        },
        {
          "id": 52,
          "name": "恶魔查达奴克"
        },
        {
          "id": 53,
          "name": "守护者"
        },
        {
          "id": 54,
          "name": "凯夫卡"
        },
        {
          "id": 55,
          "name": "神圣凯夫卡"
        }
      ],
      "brackets": {
        "min": 4,
        "max": 4.5,
        "bucket": 0.1,
        "type": "版本"
      },
      "partitions": [
        {
          "name": "标准阵容构成",
          "compact": "标准",
          "area": 1,
          "default": true
        },
        {
          "name": "非标准阵容构成",
          "compact": "非标准",
          "area": 1
        }
      ]
    },
    {
      "id": 22,
      "name": "The Ridorana Lighthouse",
      "frozen": true,
      "encounters": [
        {
          "id": 2012,
          "name": "暗黑之云法姆弗里特"
        },
        {
          "id": 2013,
          "name": "魔人贝利亚斯"
        },
        {
          "id": 2014,
          "name": "劳动七号"
        },
        {
          "id": 2015,
          "name": "鬼龙雅兹玛特"
        }
      ],
      "brackets": {
        "min": 4,
        "max": 4.5,
        "bucket": 0.1,
        "type": "版本"
      },
      "partitions": [
        {
          "name": "default",
          "compact": "default",
          "default": true,
          "area": 1
        },
        {
          "name": "default",
          "compact": "default",
          "default": true,
          "area": 2
        },
        {
          "name": "default",
          "compact": "default",
          "default": true,
          "area": 3
        }
      ]
    },
    {
      "id": 23,
      "name": "The Weapon's Refrain",
      "frozen": true,
      "encounters": [
        {
          "id": 1042,
          "name": "究极神兵"
        }
      ],
      "brackets": {
        "min": 4,
        "max": 4.5,
        "bucket": 0.1,
        "type": "版本"
      },
      "partitions": [
        {
          "name": "标准阵容构成",
          "compact": "标准",
          "area": 1,
          "default": true
        },
        {
          "name": "非标准阵容构成",
          "compact": "非标准",
          "area": 1
        },
        {
          "name": "标准阵容构成",
          "compact": "标准",
          "default": true,
          "area": 2
        },
        {
          "name": "非标准阵容构成",
          "compact": "非标准",
          "area": 2
        },
        {
          "name": "标准阵容构成",
          "compact": "标准",
          "default": true,
          "area": 3
        },
        {
          "name": "非标准阵容构成",
          "compact": "非标准",
          "area": 3
        }
      ]
    },
    {
      "id": 24,
      "name": "Omega: Alphascape (Story)",
      "frozen": true,
      "encounters": [
        {
          "id": 56,
          "name": "卡奥斯"
        },
        {
          "id": 57,
          "name": "尘世幻龙"
        },
        {
          "id": 58,
          "name": "欧米茄"
        },
        {
          "id": 59,
          "name": "双生欧米茄"
        }
      ],
      "brackets": {
        "min": 4,
        "max": 4.5,
        "bucket": 0.1,
        "type": "版本"
      },
      "partitions": [
        {
          "name": "标准阵容构成",
          "compact": "标准",
          "area": 1,
          "default": true
        },
        {
          "name": "非标准阵容构成",
          "compact": "非标准",
          "area": 1
        },
        {
          "name": "标准阵容构成",
          "compact": "标准",
          "default": true,
          "area": 2
        },
        {
          "name": "非标准阵容构成",
          "compact": "非标准",
          "area": 2
        },
        {
          "name": "标准阵容构成",
          "compact": "标准",
          "default": true,
          "area": 3
        },
        {
          "name": "非标准阵容构成",
          "compact": "非标准",
          "area": 3
        }
      ]
    },
    {
      "id": 25,
      "name": "Omega: Alphascape (Savage)",
      "frozen": true,
      "encounters": [
        {
          "id": 60,
          "name": "卡奥斯"
        },
        {
          "id": 61,
          "name": "尘世幻龙"
        },
        {
          "id": 62,
          "name": "欧米茄"
        },
        {
          "id": 63,
          "name": "双生欧米茄"
        },
        {
          "id": 64,
          "name": "至尊欧米茄"
        }
      ],
      "brackets": {
        "min": 4,
        "max": 4.5,
        "bucket": 0.1,
        "type": "版本"
      },
      "partitions": [
        {
          "name": "标准阵容构成",
          "compact": "标准",
          "area": 1,
          "default": true
        },
        {
          "name": "非标准阵容构成",
          "compact": "非标准",
          "area": 1
        },
        {
          "name": "标准阵容构成",
          "compact": "标准",
          "default": true,
          "area": 2
        },
        {
          "name": "非标准阵容构成",
          "compact": "非标准",
          "area": 2
        },
        {
          "name": "标准阵容构成",
          "compact": "标准",
          "default": true,
          "area": 3
        },
        {
          "name": "非标准阵容构成",
          "compact": "非标准",
          "area": 3
        },
        {
          "name": "标准阵容构成 (超越之力)",
          "compact": "标准 (超越之力)",
          "area": 1
        },
        {
          "name": "非标准阵容构成 (超越之力)",
          "compact": "非标准 (超越之力)",
          "area": 1
        },
        {
          "name": "标准阵容构成 (超越之力)",
          "compact": "标准 (超越之力)",
          "area": 2
        },
        {
          "name": "非标准阵容构成 (超越之力)",
          "compact": "非标准 (超越之力)",
          "area": 2
        },
        {
          "name": "标准阵容构成 (超越之力)",
          "compact": "标准 (超越之力)",
          "area": 3
        },
        {
          "name": "非标准阵容构成 (超越之力)",
          "compact": "非标准 (超越之力)",
          "area": 3
        }
      ]
    },
    {
      "id": 26,
      "name": "The Orbonne Monastery",
      "frozen": true,
      "encounters": [
        {
          "id": 2016,
          "name": "机工士姆斯塔迪奥"
        },
        {
          "id": 2017,
          "name": "圣骑士阿格莉亚丝"
        },
        {
          "id": 2018,
          "name": "雷神西德"
        },
        {
          "id": 2019,
          "name": "圣天使阿尔蒂玛"
        }
      ],
      "brackets": {
        "min": 4,
        "max": 4.5,
        "bucket": 0.1,
        "type": "版本"
      },
      "partitions": [
        {
          "name": "default",
          "compact": "default",
          "default": true,
          "area": 1
        },
        {
          "name": "default",
          "compact": "default",
          "default": true,
          "area": 2
        },
        {
          "name": "default",
          "compact": "default",
          "default": true,
          "area": 3
        }
      ]
    },
    {
      "id": 27,
      "name": "Dungeons (Endgame)",
      "frozen": false,
      "encounters": [
        {
          "id": 4520,
          "name": "末日暗影亚马乌罗提"
        },
        {
          "id": 4521,
          "name": "异界遗构希尔科斯孪晶塔"
        },
        {
          "id": 4522,
          "name": "创造机构阿尼德罗学院"
        },
        {
          "id": 4523,
          "name": "魔法宫殿宇宙宫"
        },
        {
          "id": 4524,
          "name": "Anamnesis Anyder"
        }
      ],
      "brackets": {
        "min": 5,
        "max": 5.2,
        "bucket": 0.1,
        "type": "版本"
      },
      "partitions": [
        {
          "name": "default",
          "compact": "default",
          "default": true,
          "area": 1
        },
        {
          "name": "default",
          "compact": "default",
          "default": true,
          "area": 2
        },
        {
          "name": "default",
          "compact": "default",
          "default": true,
          "area": 3
        }
      ]
    },
    {
      "id": 28,
      "name": "Trials (Extreme)",
      "frozen": false,
      "encounters": [
        {
          "id": 1045,
          "name": "缇坦妮雅"
        },
        {
          "id": 1046,
          "name": "无瑕灵君"
        },
        {
          "id": 1049,
          "name": "哈迪斯"
        },
        {
          "id": 1051,
          "name": "红玉神兵1"
        },
        {
          "id": 1052,
          "name": "红玉神兵2"
        },
        {
          "id": 1053,
          "name": "Varis Yae Galvus"
        }
      ],
      "brackets": {
        "min": 5,
        "max": 5.2,
        "bucket": 0.1,
        "type": "版本"
      },
      "partitions": [
        {
          "name": "标准阵容构成 (5.0)",
          "compact": "标准 (5.0)",
          "area": 1
        },
        {
          "name": "非标准阵容构成 (5.0)",
          "compact": "非标准 (5.0)",
          "area": 1
        },
        {
          "name": "标准阵容构成",
          "compact": "标准",
          "area": 1,
          "default": true
        },
        {
          "name": "非标准阵容构成",
          "compact": "非标准",
          "area": 1
        },
        {
          "name": "标准阵容构成",
          "compact": "标准",
          "default": true,
          "area": 2
        },
        {
          "name": "非标准阵容构成",
          "compact": "非标准",
          "area": 2
        },
        {
          "name": "标准阵容构成",
          "compact": "标准",
          "default": true,
          "area": 3
        },
        {
          "name": "非标准阵容构成",
          "compact": "非标准",
          "area": 3
        }
      ]
    },
    {
      "id": 29,
      "name": "Eden's Gate",
      "frozen": false,
      "encounters": [
        {
          "id": 65,
          "name": "至尊伊甸"
        },
        {
          "id": 66,
          "name": "虚空行者"
        },
        {
          "id": 67,
          "name": "利维亚桑"
        },
        {
          "id": 68,
          "name": "泰坦"
        }
      ],
      "brackets": {
        "min": 5,
        "max": 5.2,
        "bucket": 0.1,
        "type": "版本"
      },
      "partitions": [
        {
          "name": "标准阵容构成 (5.0)",
          "compact": "标准 (5.0)",
          "area": 1
        },
        {
          "name": "非标准阵容构成 (5.0)",
          "compact": "非标准 (5.0)",
          "area": 1
        },
        {
          "name": "标准阵容构成",
          "compact": "标准",
          "area": 1,
          "default": true
        },
        {
          "name": "非标准阵容构成",
          "compact": "非标准",
          "area": 1
        },
        {
          "name": "标准阵容构成",
          "compact": "标准",
          "default": true,
          "area": 2
        },
        {
          "name": "非标准阵容构成",
          "compact": "非标准",
          "area": 2
        },
        {
          "name": "标准阵容构成",
          "compact": "标准",
          "default": true,
          "area": 3
        },
        {
          "name": "非标准阵容构成",
          "compact": "非标准",
          "area": 3
        }
      ]
    },
    {
      "id": 30,
      "name": "Ultimates (Stormblood)",
      "frozen": false,
      "encounters": [
        {
          "id": 1047,
          "name": "巴哈姆特绝境战"
        },
        {
          "id": 1048,
          "name": "究极神兵绝境战"
        }
      ],
      "brackets": {
        "min": 5,
        "max": 5.2,
        "bucket": 0.1,
        "type": "版本"
      },
      "partitions": [
        {
          "name": "标准阵容构成",
          "compact": "标准",
          "area": 1,
          "default": true
        },
        {
          "name": "非标准阵容构成",
          "compact": "非标准",
          "area": 1
        },
        {
          "name": "标准阵容构成",
          "compact": "标准",
          "default": true,
          "area": 2
        },
        {
          "name": "非标准阵容构成",
          "compact": "非标准",
          "area": 2
        },
        {
          "name": "标准阵容构成",
          "compact": "标准",
          "default": true,
          "area": 3
        },
        {
          "name": "非标准阵容构成",
          "compact": "非标准",
          "area": 3
        }
      ]
    },
    {
      "id": 31,
      "name": "The Copied Factory",
      "frozen": false,
      "encounters": [
        {
          "id": 2020,
          "name": "多关节型：司令机"
        },
        {
          "id": 2021,
          "name": "霍布斯"
        },
        {
          "id": 2022,
          "name": "昂格士"
        },
        {
          "id": 2023,
          "name": "9S：接入多脚战车"
        }
      ],
      "brackets": {
        "min": 5,
        "max": 5.2,
        "bucket": 0.1,
        "type": "版本"
      },
      "partitions": [
        {
          "name": "default",
          "compact": "default",
          "default": true,
          "area": 1
        },
        {
          "name": "default",
          "compact": "default",
          "default": true,
          "area": 2
        },
        {
          "name": "default",
          "compact": "default",
          "default": true,
          "area": 3
        }
      ]
    },
    {
      "id": 32,
      "name": "Ultimates",
      "frozen": false,
      "encounters": [
        {
          "id": 1050,
          "name": "亚历山大绝境战"
        }
      ],
      "brackets": {
        "min": 5,
        "max": 5.2,
        "bucket": 0.1,
        "type": "版本"
      },
      "partitions": [
        {
          "name": "标准阵容构成",
          "compact": "标准",
          "area": 1,
          "default": true
        },
        {
          "name": "非标准阵容构成",
          "compact": "非标准",
          "area": 1
        },
        {
          "name": "标准阵容构成",
          "compact": "标准",
          "default": true,
          "area": 2
        },
        {
          "name": "非标准阵容构成",
          "compact": "非标准",
          "area": 2
        },
        {
          "name": "标准阵容构成",
          "compact": "标准",
          "default": true,
          "area": 3
        },
        {
          "name": "非标准阵容构成",
          "compact": "非标准",
          "area": 3
        }
      ]
    },
    {
      "id": 33,
      "name": "Eden's Verse",
      "frozen": false,
      "encounters": [
        {
          "id": 69,
          "name": "拉姆"
        },
        {
          "id": 70,
          "name": "伊弗利特与迦楼罗"
        },
        {
          "id": 71,
          "name": "暗黑人偶"
        },
        {
          "id": 72,
          "name": "希瓦"
        }
      ],
      "brackets": {
        "min": 5,
        "max": 5.2,
        "bucket": 0.1,
        "type": "版本"
      },
      "partitions": [
        {
          "name": "标准阵容构成",
          "compact": "标准",
          "area": 1,
          "default": true
        },
        {
          "name": "非标准阵容构成",
          "compact": "非标准",
          "area": 1
        },
        {
          "name": "标准阵容构成",
          "compact": "标准",
          "default": true,
          "area": 2
        },
        {
          "name": "非标准阵容构成",
          "compact": "非标准",
          "area": 2
        },
        {
          "name": "标准阵容构成",
          "compact": "标准",
          "default": true,
          "area": 3
        },
        {
          "name": "非标准阵容构成",
          "compact": "非标准",
          "area": 3
        }
      ]
    }
  ];
var serverList=["红玉海","神意之地","拉诺西亚","幻影群岛","萌芽池","宇宙和音","沃仙曦染","晨曦王座",
                "白银乡","白金幻象","神拳痕","潮风亭","旅人栈桥","拂晓之间","龙巢神殿",
                "紫水栈桥","延夏","静语庄园","摩杜纳","海猫茶屋","柔风海湾","琥珀原"];
var zoneName={
    "2": "迷宫挑战(60级)",
    "4": "讨伐歼灭战：高难度(60级)",
    "5": "魔航船虚无方舟",
    "6": "亚历山大机神城：启动之章",
    "7": "亚历山大零式机神城：启动之章",
    "8": "禁忌城邦玛哈",
    "9": "亚历山大机神城：律动之章",
    "10": "亚历山大零式机神城：律动之章",
    "12": "亚历山大机神城：天动之章",
    "13": "亚历山大零式机神城：天动之章",
    "14": "迷宫挑战(70级)",
    "15": "讨伐歼灭战：高难度(70级)",
    "16": "欧米茄时空狭缝 德尔塔幻境",
    "17": "欧米茄零式时空狭缝 德尔塔幻境",
    "18": "失落之都拉巴纳斯塔",
    "19": "绝巴哈姆特",
    "20": "欧米茄时空狭缝 西格玛幻境",
    "21": "欧米茄零式时空狭缝 西格玛幻境",
    "22": "封闭圣塔黎铎拉纳大灯塔",
    "23": "绝究极神兵",
    "24": "欧米茄时空狭缝 阿尔法幻境",
    "25": "欧米茄零式时空狭缝 阿尔法幻境",
    "26": "乐欲之所瓯博讷修道院",
    "27": "迷宫挑战(80级)",
    "28": "讨伐歼灭战：高难度(80级)",
    "29": "伊甸希望乐园(零式) 觉醒之章",
    "30": "绝本 (红莲之狂潮)",
    "31": "复制工厂",
    "32": "绝本 (暗影之逆炎)",
    "33": "伊甸希望乐园(零式) 共鸣之章"
};