alert('GitHub')
setTimeout(function(){
$('body').append(`<style>
.wrapper,.nav{width:980px;border:none;margin-top:0;background:transparent}
.content{margin:0; padding:0;background:#000}
div.row{border:none;margin:0}
div.row-gray{border:none;cursor:default}
a,strong {text-decoration:none !important}
.buttons,a.cat{border:none;font-size:14px;font-weight:normal;line-height:22px}
a.cat:hover{background:#777}
div.ad{height:10px;background:#222}
div.item,div.row-gray{font-size:13px}
div.cal-wrap{border:none;padding:0;font-size:12px;margin:0}
a.col-4,a.col-3,a.col-2{padding-top:2px;padding-bottom:2px}
.left-bar{padding:0;margin:0;background:black;width:180px}

/*RIGHT-TABLE*/
#mini-league-table-container{width: 100% !important; height: 800px !important; white-space: nowrap}

/* ตารางคะแนน -> เลขลำดับ*/
div.tt.color.item{width: 34px !important; }
/* ตารางคะแนน FULL -> ชื่อทีม*/
div.team{width: 180px !important; ; padding: 2px 0 0 5px !important}

/*right-bar*/
.top,.date,.social-box,.ltable,.pts2{border:none !important}
#mini-league-table-container,.right-bar{width:250px;cursor:default;z-index:111;height:480px !important}
.league-name{font-size:12px;width:133px !important}
div.col-8.tleft{width:160px;padding-top:3px}
.name{width:145px}
.item>.col-2,.tt{width:35px}
.team,.pts{border-left:none !important}
.item,.title{border:none !important}
.item{line-height:22px !important}
.item:hover,.item.clear.even:hover,.row-gray:hover,.row-gray.even:hover{background:#9bb}

/*USER*/
.chMe{border:none;margin:0}
/*.chMe1{background:#234;padding:8px 5px 4px}
.chMe2{background:#235;padding:2px 4px}
.chMe1{background:#0d3474;padding:8px 2px 4px}
.chMe2{background:#26507b;padding:2px 4px}
*/
.chMe1{background:#26507b;padding:8px 2px 4px}
.chMe2{background:#26507b;padding:2px 4px}
.lfc{background:#600;color:#fff;padding:1px 12px;border:none;font-size:1.2em}
/*.lfc{background:#722 !important;color:#fff;padding:5px 12px;border:none;font-size:1.2em}*/
/* #801120	#7b091f*/

.curP{cursor:pointer}
.pad2{padding:2px}.padL10{padding-left:10px}
.dIlb{display:inline-block}
.cFFF{color:#fff}.tlC{text-align:center}

div.colX{float:left;line-height: 30px}
/*Clear floats after the columns */
.rowX:after{content:""; display:table; clear: both;}

.mydrop{display:inline-block}
.mydropbtn{font-size:20px;color:#aaa;cursor:pointer;margin:0;padding:0 8px;}
.mydrop-content{display:none;position:absolute;width:200px;border:1px dashed red;right:0;
  background:rgba(0,0,0,0.7);padding:5px 0px;z-index:1111;}
/*.mydrop-content .colX a{color:#fff;text-decoration:none;}
.mydrop-content .colX a:hover {color:#000;padding:0;}*/
.mydrop:hover .mydrop-content {display:block;}
.mydropbtn:hover {background:#3e8e41;color:#fff}
.btn-cmc{font-size:18px;cursor:pointer;display:block;white-space:nowrap}
.btn-cmc:hover{background:#eee; color:#000}

/* TYPICAL */
.bgLFC{background:#500 !important;}
.bgLFC:hover{background:#c00 !important}
.cFFF{color:#fff;}
.padTx{padding-top:3px !important}
</style>`)
},1500);
