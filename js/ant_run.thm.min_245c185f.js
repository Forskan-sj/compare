function __extends(e,t){function n(){this.constructor=e}for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);n.prototype=t.prototype,e.prototype=new n}var egret=window.egret;window.generateEUI={},generateEUI.paths={},generateEUI.styles=void 0,generateEUI.skins={},generateEUI.paths["resource/eui_skins/view/ant_run/AntRunEndViewSkin.exml"]=window.AntRunEndViewSkin=function(e){function t(){e.call(this),this.skinParts=["coinLab","miLab","topHitLab","closeBtn","grpCenter"],this.height=1280,this.width=720,this.elementsContent=[this.grpCenter_i()]}__extends(t,e);var n=function(e){function t(){e.call(this),this.skinParts=["labelDisplay"],this.elementsContent=[this._Image1_i(),this._Image2_i(),this.labelDisplay_i()],this.states=[new eui.State("up",[]),new eui.State("down",[new eui.SetProperty("_Image1","source","panel_common_someBtn_json.panel_common_type3_1_png")]),new eui.State("disabled",[])]}__extends(t,e);var n=t.prototype;return n._Image1_i=function(){var e=new eui.Image;return this._Image1=e,e.percentHeight=100,e.source="panel_common_someBtn_json.panel_common_type3_0_png",e.percentWidth=100,e},n._Image2_i=function(){var e=new eui.Image;return e.horizontalCenter=0,e.scaleX=1.3,e.scaleY=1.3,e.source="panel_common_someBtn_json.panel_xiaoxixitong_common_font_type1_png",e.verticalCenter=0,e},n.labelDisplay_i=function(){var e=new eui.Label;return this.labelDisplay=e,e.horizontalCenter=0,e.verticalCenter=0,e},t}(eui.Skin),i=t.prototype;return i.grpCenter_i=function(){var e=new eui.Group;return this.grpCenter=e,e.height=726,e.horizontalCenter=0,e.verticalCenter=0,e.width=708,e.elementsContent=[this._Image1_i(),this.coinLab_i(),this._Image2_i(),this._Image3_i(),this.miLab_i(),this.topHitLab_i(),this.closeBtn_i()],e},i._Image1_i=function(){var e=new eui.Image;return e.height=726,e.source="mayikuaipao_end_panelBg_png",e.width=708,e.x=0,e.y=0,e},i.coinLab_i=function(){var e=new eui.Label;return this.coinLab=e,e.bold=!0,e.fontFamily="Microsoft YaHei",e.size=48,e.stroke=2,e.strokeColor=14124809,e.text="0",e.x=376,e.y=209,e},i._Image2_i=function(){var e=new eui.Image;return e.height=95,e.source="mayi_kuaipao_json.mayikuaipao_end_$_png",e.width=83,e.x=259,e.y=182,e},i._Image3_i=function(){var e=new eui.Image;return e.height=95,e.source="mayi_kuaipao_json.mayikuaipao_end_mi_png",e.width=83,e.x=259,e.y=306,e},i.miLab_i=function(){var e=new eui.Label;return this.miLab=e,e.bold=!0,e.fontFamily="Microsoft YaHei",e.size=48,e.stroke=2,e.strokeColor=14124809,e.text="0",e.x=376,e.y=333,e},i.topHitLab_i=function(){var e=new eui.Label;return this.topHitLab=e,e.fontFamily="Microsoft YaHei",e.horizontalCenter=0,e.size=48,e.text="最高连击: 0",e.textAlign="left",e.y=455,e},i.closeBtn_i=function(){var e=new viewTools.CustomBtn;return this.closeBtn=e,e.anchorOffsetX=90.76,e.anchorOffsetY=40.12,e.horizontalCenter=.5,e.label="",e.y=639.12,e.skinName=n,e},t}(eui.Skin),generateEUI.paths["resource/eui_skins/view/ant_run/AntRunPetListViewSkin.exml"]=window.AntRunPetListViewSkin=function(e){function t(){e.call(this),this.skinParts=["listGrp","scrollerView","textImg","headGrp","leftBtn","rightBtn","msgTop","getBtn","getAddMaiMiaoLab","keyNumLab","keyG","openBtn","backBtn","allGrp"],this.height=1280,this.width=720,this.elementsContent=[this.allGrp_i()]}__extends(t,e);var n=function(e){function t(){e.call(this),this.skinParts=["labelDisplay"],this.elementsContent=[this._Image1_i(),this.labelDisplay_i()],this.states=[new eui.State("up",[]),new eui.State("down",[new eui.SetProperty("_Image1","source","game_pet_tex_json.game_pet_btn_1_png")]),new eui.State("disabled",[new eui.SetProperty("_Image1","source","game_pet_tex_json.game_pet_btn_0_png")])]}__extends(t,e);var n=t.prototype;return n._Image1_i=function(){var e=new eui.Image;return this._Image1=e,e.percentHeight=100,e.source="game_pet_tex_json.game_pet_btn_1_png",e.percentWidth=100,e},n.labelDisplay_i=function(){var e=new eui.Label;return this.labelDisplay=e,e.horizontalCenter=0,e.verticalCenter=0,e},t}(eui.Skin),i=function(e){function t(){e.call(this),this.skinParts=["labelDisplay"],this.elementsContent=[this._Image1_i(),this.labelDisplay_i()],this.states=[new eui.State("up",[]),new eui.State("down",[new eui.SetProperty("_Image1","source","game_pet_tex_json.game_pet_btn_1_png")]),new eui.State("disabled",[new eui.SetProperty("_Image1","source","game_pet_tex_json.game_pet_btn_0_png")])]}__extends(t,e);var n=t.prototype;return n._Image1_i=function(){var e=new eui.Image;return this._Image1=e,e.percentHeight=100,e.source="game_pet_tex_json.game_pet_btn_1_png",e.percentWidth=100,e},n.labelDisplay_i=function(){var e=new eui.Label;return this.labelDisplay=e,e.horizontalCenter=0,e.verticalCenter=0,e},t}(eui.Skin),a=function(e){function t(){e.call(this),this.skinParts=["labelDisplay"],this.elementsContent=[this._Image1_i(),this.labelDisplay_i()],this.states=[new eui.State("up",[]),new eui.State("down",[new eui.SetProperty("_Image1","source","game_map_backbtn_png")]),new eui.State("disabled",[])]}__extends(t,e);var n=t.prototype;return n._Image1_i=function(){var e=new eui.Image;return this._Image1=e,e.percentHeight=100,e.source="game_map_backbtn_png",e.percentWidth=100,e},n.labelDisplay_i=function(){var e=new eui.Label;return this.labelDisplay=e,e.horizontalCenter=0,e.verticalCenter=0,e},t}(eui.Skin),r=t.prototype;return r.allGrp_i=function(){var e=new eui.Group;return this.allGrp=e,e.bottom=0,e.left=0,e.right=0,e.top=0,e.elementsContent=[this.scrollerView_i(),this.headGrp_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this.getBtn_i(),this._Group4_i(),this.keyG_i(),this.openBtn_i(),this.backBtn_i()],e},r.scrollerView_i=function(){var e=new eui.Scroller;return this.scrollerView=e,e.anchorOffsetX=0,e.anchorOffsetY=0,e.height=1e3,e.left=0,e.right=0,e.scrollPolicyH="off",e.scrollPolicyV="off",e.touchEnabled=!1,e.verticalCenter=0,e.viewport=this.listGrp_i(),e},r.listGrp_i=function(){var e=new eui.Group;return this.listGrp=e,e},r.headGrp_i=function(){var e=new eui.Group;return this.headGrp=e,e.height=230,e.horizontalCenter=0,e.top=0,e.width=335,e.elementsContent=[this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this.textImg_i()],e},r._Image1_i=function(){var e=new eui.Image;return e.source="panel_common_context_json.panel_common_shunzi_png",e.x=62.07,e.y=-6.83,e},r._Image2_i=function(){var e=new eui.Image;return e.source="panel_common_context_json.panel_common_shunzi_png",e.x=64.07,e.y=72.17,e},r._Image3_i=function(){var e=new eui.Image;return e.source="panel_common_context_json.panel_common_shunzi_png",e.x=244.78,e.y=-11.98,e},r._Image4_i=function(){var e=new eui.Image;return e.source="panel_common_context_json.panel_common_shunzi_png",e.x=246.78,e.y=67.02,e},r._Image5_i=function(){var e=new eui.Image;return e.bottom=0,e.horizontalCenter=0,e.source="game_pet_ban_text_png",e},r.textImg_i=function(){var e=new eui.Image;return this.textImg=e,e.bottom=41,e.horizontalCenter=0,e.source="game_pet_tex_json.game_pet_text_hafei_png",e},r._Group1_i=function(){var e=new eui.Group;return e.anchorOffsetX=0,e.anchorOffsetY=0,e.height=102,e.left=2,e.verticalCenter=0,e.width=100,e.elementsContent=[this.leftBtn_i()],e},r.leftBtn_i=function(){var e=new viewTools.CustomBtn;return this.leftBtn=e,e.anchorOffsetX=36.36,e.anchorOffsetY=42.42,e.enabled=!1,e.horizontalCenter=0,e.label="",e.verticalCenter=0,e.skinName=n,e},r._Group2_i=function(){var e=new eui.Group;return e.anchorOffsetX=0,e.anchorOffsetY=0,e.height=102,e.right=2,e.scaleX=-1,e.verticalCenter=0,e.width=100,e.elementsContent=[this.rightBtn_i()],e},r.rightBtn_i=function(){var e=new viewTools.CustomBtn;return this.rightBtn=e,e.anchorOffsetX=39.39,e.anchorOffsetY=39.39,e.horizontalCenter=0,e.label="",e.verticalCenter=0,e.x=702,e.y=9,e.skinName=i,e},r._Group3_i=function(){var e=new eui.Group;return e.height=83,e.horizontalCenter=-102,e.top=270,e.width=360,e.elementsContent=[this._Image6_i(),this.msgTop_i()],e},r._Image6_i=function(){var e=new eui.Image;return e.left=0,e.scaleX=1,e.scaleY=1,e.source="mayi_kuaipao_json.mayikuaipao_highest_png",e.top=0,e},r.msgTop_i=function(){var e=new eui.Label;return this.msgTop=e,e.left=79,e.text="msg",e.verticalCenter=-11,e},r.getBtn_i=function(){var e=new viewTools.CustomGrp;return this.getBtn=e,e.anchorOffsetX=96,e.anchorOffsetY=40,e.bottom=370,e.horizontalCenter=.5,e.elementsContent=[this._Image7_i(),this._Label1_i()],e},r._Image7_i=function(){var e=new eui.Image;return e.percentHeight=100,e.source="panel_common_someBtn_json.panel_common_type8_0_png",e.percentWidth=100,e},r._Label1_i=function(){var e=new eui.Label;return e.bold=!0,e.fontFamily="Microsoft YaHei",e.horizontalCenter=.5,e.text="去获得",e.textColor=16711422,e.verticalCenter=-6,e},r._Group4_i=function(){var e=new eui.Group;return e.bottom=279,e.height=72,e.horizontalCenter=.5,e.width=365,e.elementsContent=[this._Image8_i(),this.getAddMaiMiaoLab_i()],e},r._Image8_i=function(){var e=new eui.Image;return e.bottom=0,e.horizontalCenter=0,e.scaleX=1,e.scaleY=1,e.source="ant_run_pet_list_text_png",e.x=0,e.y=0,e},r.getAddMaiMiaoLab_i=function(){var e=new eui.Label;return this.getAddMaiMiaoLab=e,e.bold=!0,e.fontFamily="Microsoft YaHei",e.horizontalCenter=0,e.scaleX=1,e.scaleY=1,e.size=32,e.stroke=2,e.strokeColor=7685931,e.text="Label",e.textColor=16777215,e.verticalCenter=0,e},r.keyG_i=function(){var e=new eui.Group;return this.keyG=e,e.bottom=207,e.height=66,e.right=101,e.width=178,e.elementsContent=[this._Image9_i(),this.keyNumLab_i()],e},r._Image9_i=function(){var e=new eui.Image;return e.bottom=0,e.right=0,e.scaleX=1,e.scaleY=1,e.source="ant_run_pet_list_key_png",e.y=0,e},r.keyNumLab_i=function(){var e=new eui.Label;return this.keyNumLab=e,e.fontFamily="Microsoft YaHei",e.horizontalCenter=0,e.scaleX=1,e.scaleY=1,e.size=24,e.text="Label",e.textColor=8141068,e.verticalCenter=-5,e},r.openBtn_i=function(){var e=new viewTools.CustomGrp;return this.openBtn=e,e.anchorOffsetX=100,e.anchorOffsetY=90,e.bottom=42,e.height=200,e.horizontalCenter=0,e.touchChildren=!1,e.touchEnabled=!0,e.width=200,e.elementsContent=[this._Image10_i(),this._Image11_i(),this._Label2_i()],e},r._Image10_i=function(){var e=new eui.Image;return e.horizontalCenter=0,e.scaleX=1,e.scaleY=1,e.source="ant_run_pet_list_btn_png",e.verticalCenter=0,e},r._Image11_i=function(){var e=new eui.Image;return e.horizontalCenter=0,e.scaleX=1,e.scaleY=1,e.source="panel_common_icons_json.panel_icon_yaoshi_1_png",e.top=29,e},r._Label2_i=function(){var e=new eui.Label;return e.bottom=36,e.horizontalCenter=0,e.size=50,e.stroke=2,e.strokeColor=14434819,e.text="开启",e},r.backBtn_i=function(){var e=new viewTools.CustomBtn;return this.backBtn=e,e.anchorOffsetX=53,e.anchorOffsetY=51,e.bottom=23,e.label="",e.left=0,e.scaleX=1,e.scaleY=1,e.width=121,e.x=0,e.y=1005.0000000000001,e.skinName=a,e},t}(eui.Skin),generateEUI.paths["resource/eui_skins/view/ant_run/run_view/AntRunViewCombolSkin.exml"]=window.AntRunViewCombolSkin=function(e){function t(){e.call(this),this.skinParts=["cNum"],this.height=90,this.width=660,this.elementsContent=[this._BitmapLabel1_i(),this.cNum_i()]}__extends(t,e);var n=t.prototype;return n._BitmapLabel1_i=function(){var e=new eui.BitmapLabel;return e.font="mayikuaipao_font_fnt",e.left=0,e.right=0,e.text="C",e.verticalCenter=0,e},n.cNum_i=function(){var e=new eui.BitmapLabel;return this.cNum=e,e.anchorOffsetY=36.36,e.font="mayikuaipao_font_fnt",e.left=254,e.letterSpacing=-17,e.right=0,e.text="3",e.verticalCenter=0,e},t}(eui.Skin),generateEUI.paths["resource/eui_skins/view/ant_run/run_view/AntRunViewHeadSkin.exml"]=window.AntRunViewHeadSkin=function(e){function t(){e.call(this),this.skinParts=["goldText","miText","timeText","headGrp"],this.height=230,this.width=720,this.elementsContent=[this.headGrp_i()]}__extends(t,e);var n=t.prototype;return n.headGrp_i=function(){var e=new eui.Group;return this.headGrp=e,e.bottom=0,e.left=0,e.right=0,e.top=0,e.elementsContent=[this._Image1_i(),this._Image2_i(),this._Image3_i(),this.goldText_i(),this.miText_i(),this._Image4_i(),this.timeText_i()],e},n._Image1_i=function(){var e=new eui.Image;return e.horizontalCenter=0,e.scaleX=1,e.scaleY=1,e.source="mayikuaipao_top_bg_png",e.top=-116,e.x=-16,e.y=-116,e},n._Image2_i=function(){var e=new eui.Image;return e.name="goldIcon",e.scaleX=1,e.scaleY=1,e.source="mayi_kuaipao_json.mayikuaipao_end_$_png",e.x=88.00000000000001,e.y=16.18,e},n._Image3_i=function(){var e=new eui.Image;return e.scaleX=1,e.scaleY=1,e.source="mayi_kuaipao_json.mayikuaipao_end_mi_png",e.top=17,e.x=396.61,e.y=17,e},n.goldText_i=function(){var e=new eui.Label;return this.goldText=e,e.anchorOffsetX=0,e.anchorOffsetY=0,e.height=52.73,e.scaleX=1,e.scaleY=1,e.size=32,e.stroke=2,e.strokeColor=9392898,e.text="200",e.textAlign="left",e.top=39,e.verticalAlign="middle",e.width=117.94,e.x=187,e.y=39,e},n.miText_i=function(){var e=new eui.Label;return this.miText=e,e.anchorOffsetX=0,e.anchorOffsetY=0,e.height=52.73,e.scaleX=1,e.scaleY=1,e.size=32,e.stroke=2,e.strokeColor=9392898,e.text="200",e.textAlign="left",e.top=39,e.verticalAlign="middle",e.width=117.94,e.x=496,e.y=39,e},n._Image4_i=function(){var e=new eui.Image;return e.horizontalCenter=.5,e.scaleX=1,e.scaleY=1,e.source="mayi_kuaipao_json.mayikuaipao_timekuang_png",e.x=214,e.y=122.1,e},n.timeText_i=function(){var e=new eui.Label;return this.timeText=e,e.anchorOffsetX=0,e.anchorOffsetY=0,e.height=52.73,e.horizontalCenter=11,e.scaleX=1,e.scaleY=1,e.text="01:15",e.textAlign="center",e.textColor=13623885,e.verticalAlign="middle",e.width=117.94,e.x=312,e.y=138.1,e},t}(eui.Skin);