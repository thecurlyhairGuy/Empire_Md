const a0_0x361afb=a0_0x1975;(function(_0x4baed6,_0x4adf43){const _0x210fef=a0_0x1975,_0x2c8964=_0x4baed6();while(!![]){try{const _0x346120=parseInt(_0x210fef(0x208))/0x1+parseInt(_0x210fef(0x201))/0x2+-parseInt(_0x210fef(0x222))/0x3+-parseInt(_0x210fef(0x207))/0x4*(-parseInt(_0x210fef(0x214))/0x5)+parseInt(_0x210fef(0x224))/0x6*(parseInt(_0x210fef(0x210))/0x7)+parseInt(_0x210fef(0x216))/0x8+-parseInt(_0x210fef(0x221))/0x9*(parseInt(_0x210fef(0x20a))/0xa);if(_0x346120===_0x4adf43)break;else _0x2c8964['push'](_0x2c8964['shift']());}catch(_0x3111ec){_0x2c8964['push'](_0x2c8964['shift']());}}}(a0_0x3ded,0x1b35a));const config=require(a0_0x361afb(0x1fe)),{cmd,commands}=require(a0_0x361afb(0x203)),{getBuffer,getGroupAdmins,getRandom,h2k,isUrl,Json,runtime,sleep,fetchJson,saveConfig,Catbox,monospace}=require(a0_0x361afb(0x20d));function a0_0x1975(_0x4d942,_0x52c6f6){const _0x3dedb3=a0_0x3ded();return a0_0x1975=function(_0x1975b9,_0x2578c5){_0x1975b9=_0x1975b9-0x1f3;let _0x3c76f8=_0x3dedb3[_0x1975b9];return _0x3c76f8;},a0_0x1975(_0x4d942,_0x52c6f6);}function a0_0x3ded(){const _0x1322c8=['emails','❌\x20No\x20temporary\x20email\x20found!','\x0a⏳\x20Expires\x20At:\x20','📩\x20*Temporary\x20Email\x20Created*\x0a\x0a📧\x20Email:\x20','sendMessage','status','chat','&id=','Generate\x20a\x20temporary\x20email','checkmail','length','../../config','\x0a📨\x20Sender:\x20','\x0a🔗\x20[Download\x20Email](','395416rlaALA','email','../command','\x0a📄\x20Message:\x20','fromAddr','slice','89948tVsUSo','36550AuwJPv','date','4390HVnkLW','downloadUrl','text','../funcs','email_id','Unknown','3584elpIpA','📭\x20No\x20new\x20emails!','delmail','🗑️\x20Temporary\x20email\x20deleted!','25hvmRLa','❌\x20Error:\x20','1682848VWzJxF','tempmail',')\x0a\x0a','expire_at','📩\x20*Email\x20','result','message','No\x20content','https://api.nexoracle.com/misc/temp-mail-inbox?apikey=','Delete\x20stored\x20temporary\x20email','❌\x20Failed\x20to\x20generate\x20temp\x20mail!','9927uicwEP','324978QsXmvy','error','1722TbckQd'];a0_0x3ded=function(){return _0x1322c8;};return a0_0x3ded();}cmd({'pattern':'tempmail','desc':a0_0x361afb(0x1fb),'category':a0_0x361afb(0x1f3),'filename':__filename},async(_0x470b05,_0xee3470,_0x4271eb,{from:_0x172a88,quoted:_0x37fcdf,body:_0xab2912,isCmd:_0x1c85f0,command:_0x553027,args:_0x5ecee4,q:_0x5e664d,isGroup:_0x373cb3,sender:_0x206467,senderNumber:_0x2ffb6c,botNumber2:_0x416636,botNumber:_0x2d03d6,pushname:_0x12d898,isMe:_0x5e8f4b,isOwner:_0x1c96e0,groupMetadata:_0x5af408,groupName:_0x2eb0d9,participants:_0x17fbe6,groupAdmins:_0x3fc5ee,isBotAdmins:_0x49c279,isAdmins:_0x17b8c6,reply:_0x55ab8b})=>{const _0x513a2e=a0_0x361afb;try{const _0x17adab='MepwBcqIM0jYN0okD',_0x45af0a='https://api.nexoracle.com/misc/temp-mail-gen?apikey='+_0x17adab,_0x276902=await fetchJson(_0x45af0a);if(_0x276902[_0x513a2e(0x1f8)]!==0xc8)return _0x55ab8b(_0x513a2e(0x220));return global[_0x513a2e(0x217)]={'email':_0x276902[_0x513a2e(0x21b)][_0x513a2e(0x202)],'email_id':_0x276902[_0x513a2e(0x21b)][_0x513a2e(0x20e)],'expire_at':_0x276902[_0x513a2e(0x21b)][_0x513a2e(0x219)]},_0x55ab8b(_0x513a2e(0x1f6)+global[_0x513a2e(0x217)][_0x513a2e(0x202)]+'\x0a🆔\x20Email\x20ID:\x20'+global['tempmail']['email_id']+_0x513a2e(0x1f5)+global['tempmail'][_0x513a2e(0x219)]);}catch(_0x1c7ba8){console['error'](_0x1c7ba8),_0x55ab8b(_0x513a2e(0x215)+_0x1c7ba8['message']);}}),cmd({'pattern':a0_0x361afb(0x1fc),'desc':'Check\x20inbox\x20of\x20temp\x20email','category':'emails','filename':__filename},async(_0x31167f,_0x42b5b0,_0xeea5e0,{from:_0x2a4856,q:_0x4e7c01,reply:_0x1e36b6})=>{const _0xc826d4=a0_0x361afb;try{if(!_0x4e7c01)return _0x1e36b6('❌\x20Provide\x20an\x20email\x20ID\x20to\x20check\x20messages!');const _0x2d2a14='MepwBcqIM0jYN0okD',_0x255c8c=_0xc826d4(0x21e)+_0x2d2a14+_0xc826d4(0x1fa)+_0x4e7c01,_0x435cfb=await fetchJson(_0x255c8c);if(_0x435cfb[_0xc826d4(0x1f8)]!==0xc8)return _0x1e36b6('❌\x20Failed\x20to\x20check\x20emails!');const _0x499e6f=_0x435cfb[_0xc826d4(0x21b)]?.[0x0]||[];if(!_0x499e6f[_0xc826d4(0x1fd)])return _0x1e36b6(_0xc826d4(0x211));const _0x4fd961='📬\x20*Inbox\x20for\x20Email\x20ID:*\x20'+_0x4e7c01+'\x0a\x0a';let _0x38735e=_0x499e6f['map']((_0x50b5c7,_0x1d2657)=>_0xc826d4(0x21a)+(_0x1d2657+0x1)+'*\x0a📝\x20Subject:\x20'+_0x50b5c7['headerSubject']+'\x0a📅\x20Date:\x20'+(_0x50b5c7[_0xc826d4(0x209)]||_0xc826d4(0x20f))+_0xc826d4(0x1ff)+_0x50b5c7[_0xc826d4(0x205)]+_0xc826d4(0x204)+(_0x50b5c7[_0xc826d4(0x20c)]?.[_0xc826d4(0x206)](0x0,0x1f4)||_0xc826d4(0x21d))+_0xc826d4(0x200)+_0x50b5c7[_0xc826d4(0x20b)]+_0xc826d4(0x218))['join']('');await _0x31167f['sendMessage'](_0x2a4856,_0x4fd961+_0x38735e,{'quoted':_0x42b5b0});}catch(_0x3d09c1){console[_0xc826d4(0x223)](_0x3d09c1),_0x1e36b6(_0xc826d4(0x215)+_0x3d09c1[_0xc826d4(0x21c)]);}}),cmd({'pattern':a0_0x361afb(0x212),'desc':a0_0x361afb(0x21f),'category':a0_0x361afb(0x1f3),'filename':__filename},async(_0x5ccf85,_0x41cae3,_0x1652de,{from:_0x5124be,quoted:_0x6a4d26,body:_0x2589d2,isCmd:_0x1ac2c6,command:_0x2fa7a1,args:_0x28941f,q:_0x2bc4f7,isGroup:_0x1b45d5,sender:_0xd67cc7,senderNumber:_0x5aa4c1,botNumber2:_0x1512a7,botNumber:_0x3b9495,pushname:_0x337763,isMe:_0xba627,isOwner:_0x3e3108,groupMetadata:_0x41faf9,groupName:_0x6e2ab2,participants:_0x592da5,groupAdmins:_0x49d17a,isBotAdmins:_0x37432c,isAdmins:_0x4b5a13,reply:_0x3bccf7})=>{const _0x323e7c=a0_0x361afb;try{if(!global[_0x323e7c(0x217)])return await _0x5ccf85[_0x323e7c(0x1f7)](_0x1652de[_0x323e7c(0x1f9)],{'text':_0x323e7c(0x1f4)},{'quoted':_0x41cae3});delete global['tempmail'],await _0x5ccf85[_0x323e7c(0x1f7)](_0x1652de[_0x323e7c(0x1f9)],{'text':_0x323e7c(0x213)},{'quoted':_0x41cae3});}catch(_0x3cda1f){console[_0x323e7c(0x223)](_0x3cda1f),_0x3bccf7(_0x323e7c(0x215)+_0x3cda1f[_0x323e7c(0x21c)]);}});