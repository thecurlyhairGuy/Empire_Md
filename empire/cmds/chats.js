const a0_0x2a104d=a0_0x556a;(function(_0x22f0ed,_0x4cc6d8){const _0x1fdda8=a0_0x556a,_0x2e99ce=_0x22f0ed();while(!![]){try{const _0x2c7685=parseInt(_0x1fdda8(0x15d))/0x1+parseInt(_0x1fdda8(0x157))/0x2+parseInt(_0x1fdda8(0x14f))/0x3*(parseInt(_0x1fdda8(0x13c))/0x4)+-parseInt(_0x1fdda8(0x14a))/0x5*(parseInt(_0x1fdda8(0x159))/0x6)+-parseInt(_0x1fdda8(0x137))/0x7+parseInt(_0x1fdda8(0x149))/0x8*(parseInt(_0x1fdda8(0x14c))/0x9)+parseInt(_0x1fdda8(0x156))/0xa*(parseInt(_0x1fdda8(0x150))/0xb);if(_0x2c7685===_0x4cc6d8)break;else _0x2e99ce['push'](_0x2e99ce['shift']());}catch(_0x2eb02a){_0x2e99ce['push'](_0x2e99ce['shift']());}}}(a0_0x2713,0x641ab));const config=require('../../config'),{cmd,commands}=require(a0_0x2a104d(0x15a)),{getBuffer,getGroupAdmins,getRandom,h2k,isUrl,Json,runtime,sleep,fetchJson,saveConfig,Catbox,monospace}=require(a0_0x2a104d(0x139));function a0_0x556a(_0x2c4cee,_0x543631){const _0x271325=a0_0x2713();return a0_0x556a=function(_0x556a3c,_0x48f6b9){_0x556a3c=_0x556a3c-0x134;let _0x32e172=_0x271325[_0x556a3c];return _0x32e172;},a0_0x556a(_0x2c4cee,_0x543631);}cmd({'pattern':a0_0x2a104d(0x13a),'desc':'Archive\x20a\x20chat','category':a0_0x2a104d(0x148),'react':'📦','filename':__filename},async(_0x25f619,_0x2741dc,_0x151972,{from:_0x34c968,isOwner:_0x225c7c,reply:_0x3ee032})=>{const _0x12a2c1=a0_0x2a104d;if(!_0x225c7c)return _0x3ee032(_0x12a2c1(0x143));try{await _0x25f619[_0x12a2c1(0x154)]({'archive':!![]},_0x34c968),_0x3ee032(_0x12a2c1(0x142));}catch(_0x3e3418){_0x3ee032(_0x12a2c1(0x136)+_0x3e3418['message']);}}),cmd({'pattern':a0_0x2a104d(0x15f),'desc':a0_0x2a104d(0x155),'category':'chats','react':'📌','filename':__filename},async(_0x161dae,_0x45163f,_0xf338f0,{from:_0x9b988d,isOwner:_0x2e4c38,reply:_0x8ad8ae})=>{const _0x6b785e=a0_0x2a104d;if(!_0x2e4c38)return _0x8ad8ae(_0x6b785e(0x143));try{await _0x161dae[_0x6b785e(0x154)]({'pin':!![]},_0x9b988d),_0x8ad8ae(_0x6b785e(0x135));}catch(_0x51ef3d){_0x8ad8ae('❌\x20Error\x20pinning\x20chat:\x20'+_0x51ef3d[_0x6b785e(0x145)]);}}),cmd({'pattern':a0_0x2a104d(0x134),'desc':'Clear\x20all\x20chats\x20from\x20the\x20bot.','category':a0_0x2a104d(0x148),'react':'🧹','filename':__filename},async(_0x4ca4de,_0x922adf,_0x583ed4,{from:_0x512de8,isOwner:_0x46787d,reply:_0x42d2ae})=>{const _0x3f67ef=a0_0x2a104d;if(!_0x46787d)return _0x42d2ae('❌\x20You\x20are\x20not\x20the\x20owner!');try{const _0x434e8b=_0x4ca4de[_0x3f67ef(0x148)][_0x3f67ef(0x15e)]();for(const _0x2b60a4 of _0x434e8b){await _0x4ca4de[_0x3f67ef(0x140)](_0x2b60a4['jid'],_0x3f67ef(0x141));}_0x42d2ae('🧹\x20All\x20chats\x20cleared\x20successfully!');}catch(_0x369558){_0x42d2ae('❌\x20Error\x20clearing\x20chats:\x20'+_0x369558[_0x3f67ef(0x145)]);}}),cmd({'pattern':a0_0x2a104d(0x153),'desc':a0_0x2a104d(0x14b),'category':a0_0x2a104d(0x148),'react':'✅','filename':__filename},async(_0x38a6d1,_0x6e27c7,_0x4e70da,{from:_0x5918a0,isOwner:_0x58ed58,reply:_0x3e4d9a})=>{const _0x496501=a0_0x2a104d;if(!_0x58ed58)return _0x3e4d9a('❌\x20You\x20are\x20not\x20the\x20owner!');try{await _0x38a6d1[_0x496501(0x154)]({'markRead':!![]},_0x5918a0),_0x3e4d9a(_0x496501(0x158));}catch(_0x3f8063){_0x3e4d9a(_0x496501(0x13f)+_0x3f8063[_0x496501(0x145)]);}}),cmd({'pattern':a0_0x2a104d(0x13b),'desc':a0_0x2a104d(0x138),'category':'chats','react':'🔔','filename':__filename},async(_0x12019f,_0x3df12f,_0x8036c7,{from:_0x2974e7,isOwner:_0x15ed89,reply:_0x33aba8})=>{const _0x38aca0=a0_0x2a104d;if(!_0x15ed89)return _0x33aba8(_0x38aca0(0x143));try{await _0x12019f['chatModify']({'markRead':![]},_0x2974e7),_0x33aba8('🔔\x20Chat\x20marked\x20as\x20unread!');}catch(_0x2cd530){_0x33aba8('❌\x20Error\x20marking\x20chat\x20as\x20unread:\x20'+_0x2cd530[_0x38aca0(0x145)]);}}),cmd({'pattern':a0_0x2a104d(0x152),'desc':a0_0x2a104d(0x147),'category':'chats','react':'📂','filename':__filename},async(_0x3a5df9,_0x36fdfb,_0x5cdc0a,{from:_0xe71841,isOwner:_0x6d43ce,reply:_0x53b4dc})=>{const _0x3c5cb9=a0_0x2a104d;if(!_0x6d43ce)return _0x53b4dc('❌\x20You\x20are\x20not\x20the\x20owner!');try{await _0x3a5df9[_0x3c5cb9(0x154)]({'archive':![]},_0xe71841),_0x53b4dc(_0x3c5cb9(0x13e));}catch(_0x52f998){_0x53b4dc(_0x3c5cb9(0x160)+_0x52f998[_0x3c5cb9(0x145)]);}}),cmd({'pattern':a0_0x2a104d(0x14e),'desc':a0_0x2a104d(0x15c),'category':a0_0x2a104d(0x148),'react':'🔊','filename':__filename},async(_0x1768dc,_0x23d218,_0x58930f,{from:_0x4c4d96,isOwner:_0x43035d,reply:_0x204c38})=>{const _0x395744=a0_0x2a104d;if(!_0x43035d)return _0x204c38('❌\x20You\x20are\x20not\x20the\x20owner!');try{await _0x1768dc[_0x395744(0x154)]({'mute':![]},_0x4c4d96),_0x204c38('🔊\x20Chat\x20unmuted\x20successfully!');}catch(_0x363fb3){_0x204c38(_0x395744(0x144)+_0x363fb3[_0x395744(0x145)]);}}),cmd({'pattern':a0_0x2a104d(0x13d),'desc':a0_0x2a104d(0x15b),'category':a0_0x2a104d(0x148),'react':'❌','filename':__filename},async(_0x3ae96c,_0x5dfaf7,_0x558b78,{from:_0x416bc7,isOwner:_0x518884,reply:_0x12db37})=>{const _0x250524=a0_0x2a104d;if(!_0x518884)return _0x12db37(_0x250524(0x143));try{await _0x3ae96c['chatModify']({'pin':![]},_0x416bc7),_0x12db37('❌\x20Chat\x20unpinned\x20successfully!');}catch(_0x3b4722){_0x12db37(_0x250524(0x14d)+_0x3b4722[_0x250524(0x145)]);}}),cmd({'pattern':a0_0x2a104d(0x151),'desc':a0_0x2a104d(0x155),'category':'chats','react':'📌','filename':__filename},async(_0x2881db,_0x4f0f8,_0x50b6df,{from:_0x279e8d,isOwner:_0x42cf44,reply:_0x415f33})=>{const _0x5e8680=a0_0x2a104d;if(!_0x42cf44)return _0x415f33('❌\x20You\x20are\x20not\x20the\x20owner!');try{await _0x2881db[_0x5e8680(0x154)]({'pin':!![]},_0x279e8d),_0x415f33(_0x5e8680(0x135));}catch(_0x368f68){_0x415f33(_0x5e8680(0x146)+_0x368f68[_0x5e8680(0x145)]);}});function a0_0x2713(){const _0x5f5349=['Unmute\x20a\x20chat','403019yaQroY','all','chatpin','❌\x20Error\x20unarchiving\x20chat:\x20','clear','📌\x20Chat\x20pinned\x20successfully!','❌\x20Error\x20archiving\x20chat:\x20','5141045UtZKTW','Mark\x20a\x20chat\x20as\x20unread','../funcs','archive','markunread','929644quYQOm','unpin','📂\x20Chat\x20unarchived\x20successfully!','❌\x20Error\x20marking\x20chat\x20as\x20read:\x20','modifyChat','delete','📦\x20Chat\x20archived\x20successfully!','❌\x20You\x20are\x20not\x20the\x20owner!','❌\x20Error\x20unmuting\x20chat:\x20','message','❌\x20Error\x20pinning\x20chat:\x20','Unarchive\x20a\x20chat','chats','328GJYtHh','25880VfaZZN','Mark\x20a\x20chat\x20as\x20read','45054KhojoW','❌\x20Error\x20unpinning\x20chat:\x20','unmutechat','3hQBLJG','11bzTdOI','pin','unarchive','markread','chatModify','Pin\x20a\x20Specific\x20Chat','5917080kWbSyu','128092tNTBlE','✅\x20Chat\x20marked\x20as\x20read!','408EfwhpX','../command','Unpin\x20a\x20Specific\x20Chat'];a0_0x2713=function(){return _0x5f5349;};return a0_0x2713();}