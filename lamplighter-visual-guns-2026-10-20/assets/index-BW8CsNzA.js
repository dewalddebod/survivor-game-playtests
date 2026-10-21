(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[`wick`,`flare`,`arc`,`mortar`,`halo`,`lance`,`firefly`],t=t=>e.includes(t),n=[4,8,12],r={Common:`#a7adb4`,Rare:`#4ea8ff`,Epic:`#b77cff`,Legendary:`#ffcf6a`},i={basic:50,common:30,rare:15,epic:5},a={wick:[`dmg`,`rate`,`count`,`pierce`],flare:[`dmg`,`rate`,`count`,`pierce`],arc:[`dmg`,`rate`,`count`],mortar:[`dmg`,`rate`,`count`,`size`],halo:[`dmg`,`rate`,`count`,`size`],lance:[`dmg`,`rate`,`count`,`size`],firefly:[`dmg`,`rate`,`count`,`pierce`]},o=()=>({picks:0,mods:{dmgPct:0,ratePct:0,pierce:0,count:0,sizePct:0},perks:[]});function s(e){let t=Math.max(0,Math.min(12,Math.floor(Number.isFinite(e)?e:0))),n=t<4?`Common`:t<8?`Rare`:t<12?`Epic`:`Legendary`,i=t===12,a=i?4:t%4;return{tier:n,color:r[n],done:a,blocks:a,span:4,max:i,label:i?`MAX`:`${a}/4`,next:i?null:(Math.floor(t/4)+1)*4}}function c(e){return n.filter(t=>e.picks>=t).slice(e.perks.length)}var l=e=>Number.isInteger(e)&&e>=0&&e<=10;function u(e,t){return!Number.isInteger(e)||e<0||e>12?!1:t===0?e===12:t===1?e<12:t===2&&e<=10}function d(e,t){let r=t===2?2:+(t===1),i=e.picks;return e.picks=Math.min(12,i+r),{from:i,to:e.picks,crossed:n.filter(t=>i<t&&e.picks>=t)}}function f(e){return d(e,1)}var p={double_volley:{id:`double_volley`,weapon:`wick`,slot:`A`,name:`Double Volley`,icon:`⁂`,desc:`Every volley is followed 0.1 s later by a second volley at 75% damage. Its hits count as normal hits.`},ember_ring:{id:`ember_ring`,weapon:`wick`,slot:`B`,name:`Ember Ring`,icon:`❈`,desc:`Every 10 hits, 8 embers burst outward from you for 35% damage each (no crits, at most one ring per 0.2 s).`},ricochet:{id:`ricochet`,weapon:`wick`,slot:`C`,name:`Ricochet`,icon:`↺`,desc:`When a bolt is spent on a hit, it bounces once to a new foe within 6 m (same damage, no crit).`},heavy_bolt:{id:`heavy_bolt`,weapon:`wick`,slot:`D`,name:`Heavy Bolt`,icon:`⬥`,desc:`Every 4th volley adds a heavy bolt: 3× damage, +2 pierce, 3× knockback (no crit).`},fork:{id:`fork`,weapon:`arc`,slot:`A`,name:`Forked Arc`,icon:`Ψ`,desc:`Each discharge forks to 2 more nearby foes it has not hit (full damage, no crit).`},static_pool:{id:`static_pool`,weapon:`arc`,slot:`B`,name:`Static Pool`,icon:`◍`,desc:`The first foe struck leaves a 1.5 m pool for 2 s that zaps foes inside for 20% damage every 0.5 s. Max 3 pools; overlapping pools do not stack.`},double_strike:{id:`double_strike`,weapon:`arc`,slot:`C`,name:`Double Strike`,icon:`ϟ`,desc:`A second bolt starts on a different foe and chains at 60% damage. Never hits the same foe twice per discharge.`},thunderclap:{id:`thunderclap`,weapon:`arc`,slot:`D`,name:`Thunderclap`,icon:`✷`,desc:`The last foe hit by the main chain bursts for 60% damage to everything within 1.8 m (no crit).`},twin_burst:{id:`twin_burst`,weapon:`flare`,slot:`A`,name:`Twin Burst`,icon:`perk-twin_burst`,line:`A second, weaker spray follows each shot.`,desc:`50% damage after 0.12 s.`,cls:`E`},backdraft:{id:`backdraft`,weapon:`flare`,slot:`B`,name:`Backdraft`,icon:`perk-backdraft`,line:`Every third spray blasts nearby foes.`,desc:`200% damage, 2.2 m radius, every third volley.`,cls:`S`},hot_coals:{id:`hot_coals`,weapon:`flare`,slot:`C`,name:`Hot Coals`,icon:`perk-hot_coals`,line:`Pellets leave foes burning.`,desc:`20% damage every 0.5 s for three ticks.`,cls:`D`},wide_sweep:{id:`wide_sweep`,weapon:`flare`,slot:`D`,name:`Wide Sweep`,icon:`perk-wide_sweep`,line:`Two extra pellets widen your spray.`,desc:`Two 50% damage edge pellets.`,cls:`S`},aftershock:{id:`aftershock`,weapon:`mortar`,slot:`A`,name:`Aftershock`,icon:`perk-aftershock`,line:`Each blast echoes in a smaller explosion.`,desc:`50% damage after 0.25 s, 60% radius.`,cls:`S`},shrapnel:{id:`shrapnel`,weapon:`mortar`,slot:`B`,name:`Shrapnel`,icon:`perk-shrapnel`,line:`Blasts throw fragments toward untouched foes.`,desc:`Six 30% damage fragments travel up to 11.2 m.`,cls:`S`},double_shell:{id:`double_shell`,weapon:`mortar`,slot:`C`,name:`Double Shell`,icon:`perk-double_shell`,line:`A smaller shell follows each volley.`,desc:`60% damage after 0.12 s.`,cls:`S`},scorched_ground:{id:`scorched_ground`,weapon:`mortar`,slot:`D`,name:`Scorched Ground`,icon:`perk-scorched_ground`,line:`Blasts leave a burning patch.`,desc:`20% damage each 0.5 s for 2 s; max three pools.`,cls:`D`},twin_orbit:{id:`twin_orbit`,weapon:`halo`,slot:`A`,name:`Twin Orbit`,icon:`perk-twin_orbit`,line:`One more ember circles you.`,desc:`Adds one primary orbiter; shared contact gate.`,cls:`P`},outer_ring:{id:`outer_ring`,weapon:`halo`,slot:`B`,name:`Outer Ring`,icon:`perk-outer_ring`,line:`Two embers circle farther out.`,desc:`Two 50% damage outer orbiters, 125% reach.`,cls:`S`},pulse_ring:{id:`pulse_ring`,weapon:`halo`,slot:`C`,name:`Pulse Ring`,icon:`perk-pulse_ring`,line:`A pulse scorches the space around you.`,desc:`60% damage every 2 seconds.`,cls:`S`},searing_touch:{id:`searing_touch`,weapon:`halo`,slot:`D`,name:`Searing Touch`,icon:`perk-searing_touch`,line:`Orbiting embers leave foes burning.`,desc:`20% damage every 0.5 s for three ticks.`,cls:`D`},split_ray:{id:`split_ray`,weapon:`lance`,slot:`A`,name:`Split Ray`,icon:`perk-split_ray`,line:`Two side rays fan out beside your beam.`,desc:`Two 60% damage rays at ±0.35 radians.`,cls:`S`},echo_beam:{id:`echo_beam`,weapon:`lance`,slot:`B`,name:`Echo Beam`,icon:`perk-echo_beam`,line:`A weaker beam follows the first.`,desc:`60% damage after 0.15 seconds.`,cls:`E`},broadside:{id:`broadside`,weapon:`lance`,slot:`C`,name:`Broadside`,icon:`perk-broadside`,line:`Your aimed beam grows wider and shoves harder.`,desc:`50% wider, up to 3.2 m; 20% more knockback.`,cls:`Pmod`},solar_burst:{id:`solar_burst`,weapon:`lance`,slot:`D`,name:`Solar Burst`,icon:`perk-solar_burst`,line:`The first foe struck erupts in sunlight.`,desc:`70% damage within 1.8 m.`,cls:`S`},twin_brood:{id:`twin_brood`,weapon:`firefly`,slot:`A`,name:`Twin Brood`,icon:`perk-twin_brood`,line:`One more firefly joins each swarm.`,desc:`Adds one primary fly, up to nine.`,cls:`P`},glowburst:{id:`glowburst`,weapon:`firefly`,slot:`B`,name:`Glowburst`,icon:`perk-glowburst`,line:`Spent fireflies burst on their final hit.`,desc:`50% damage within 1.5 m.`,cls:`S`},second_flight:{id:`second_flight`,weapon:`firefly`,slot:`C`,name:`Second Flight`,icon:`perk-second_flight`,line:`Spent fireflies hunt one untouched foe.`,desc:`60% damage, one extra flight, 8 m seek.`,cls:`S`},hive_pulse:{id:`hive_pulse`,weapon:`firefly`,slot:`D`,name:`Hive Pulse`,icon:`perk-hive_pulse`,line:`Every third swarm releases four tiny hunters.`,desc:`Four 40% damage flies lasting 1.6 s.`,cls:`S`}},m=(e,t)=>Object.values(p).find(n=>n.weapon===e&&n.slot===t).id;function h(e,t){let n=m(e,`A`),r=m(e,`B`),i=m(e,`C`),a=m(e,`D`);return t.length===0?[n,r]:t.length===1?[i,a]:t.length===2?[t.includes(n)?r:n,t.includes(i)?a:i]:[]}var g=Object.fromEntries(e.map(e=>[e,{dmgPct:4,ratePct:1.2,count:{wick:2,flare:4,arc:4,mortar:2,halo:3,lance:2,firefly:3}[e],pierce:{wick:3,flare:2,arc:0,mortar:0,halo:0,lance:0,firefly:2}[e],sizePct:e===`lance`?.6:e===`mortar`||e===`halo`?.4:0}])),_=[.1,.2,.3,.4],v=[.1,.15,.25,.3],y=[.1,.15,.2,.25],b={wick:{dmg:_,rate:v,count:[null,null,1,2],pierce:[1,1,2,3]},flare:{dmg:_,rate:v,count:[1,1,2,2],pierce:[1,1,1,2]},arc:{dmg:_,rate:v,count:[1,1,2,3]},mortar:{dmg:_,rate:v,count:[null,null,1,1],size:y},halo:{dmg:_,rate:v,count:[1,1,1,2],size:y},lance:{dmg:_,rate:v,count:[null,null,1,1],size:y},firefly:{dmg:_,rate:v,count:[1,1,1,2],pierce:[1,1,1,2]}},x={dmg:1,rate:.85,count:.65,pierce:.6,size:.6},S={basic:1,common:2,rare:3,epic:4},C=[`basic`,`common`,`rare`,`epic`],w={wick:{count:`+Bolt`},flare:{count:`+Pellets`},arc:{count:`+Chain`},mortar:{count:`+Shell`,size:`Bigger blast`},halo:{count:`+Orbiter`,size:`Wider reach`},lance:{count:`+Beam`,size:`Wider beam`},firefly:{count:`+Fly`}},T={dmg:`dmgPct`,rate:`ratePct`,count:`count`,pierce:`pierce`,size:`sizePct`},E=e=>T[e],D=(e,t,n)=>Math.max(0,g[e][T[n]]-t[T[n]]),O={wick:{dmg:10,cd:.4,minCd:.1,count:1,pierce:0,size:0,speed:26,range:15,knock:1.2},flare:{dmg:8,cd:1.25,minCd:.36,count:5,pierce:0,size:0,speed:20,range:9,knock:5.5},arc:{dmg:14,cd:1.5,minCd:.4,count:3,pierce:0,size:0,speed:0,range:12,knock:.6},mortar:{dmg:26,cd:2.4,minCd:.7,count:1,pierce:0,size:2.6,speed:0,range:16,knock:3},halo:{dmg:8,cd:.45,minCd:.13,count:2,pierce:0,size:2.6,speed:3.2,range:3,knock:2.5},lance:{dmg:22,cd:2.2,minCd:.65,count:1,pierce:99,size:.8,speed:0,range:18,knock:2},firefly:{dmg:10,cd:1.3,minCd:.38,count:2,pierce:0,size:0,speed:11,range:16,knock:1}},k={wick:6,flare:15,arc:10,mortar:4,halo:9,lance:4,firefly:9},A=(e,t)=>e===`flare`?2*t:e===`mortar`||e===`lance`?Math.floor(t/2):t;function j(e,t,n){let r=O[e],i=t.mods,a=e=>t.perks.includes(e),o=r.dmg*(1+i.dmgPct)*n.dmgMul,s=Math.max(r.minCd,r.cd/(1+i.ratePct)*n.cdMul),c=Math.min(k[e],r.count+i.count+A(e,n.extraProj)+(e===`halo`&&a(`twin_orbit`)||e===`firefly`&&a(`twin_brood`)?1:0)),l=r.size*(1+i.sizePct)*n.areaMul;return{id:e,dmg:o,cd:s,rate:1/s,count:c,pierce:e===`lance`?99:r.pierce+i.pierce,size:l,spin:e===`halo`?r.speed:0,speed:r.speed,range:r.range,knock:r.knock,life:e===`firefly`?3.2:0,critChance:n.critChance,critMult:n.critMult,critFactor:1+n.critChance*(n.critMult-1),aimedWidth:e===`lance`?Math.min(3.2,l*(a(`broadside`)?1.5:1)):0,aimedKnock:e===`lance`&&a(`broadside`)?2.4:r.knock}}function ee(e,t,n,r,i=D(e,t.mods,n)){if(i<=1e-9)return!1;let a={...t,mods:{...t.mods}};a.mods[T[n]]+=Math.min(i,D(e,t.mods,n));let o=j(e,t,r),s=j(e,a,r),c={dmg:`dmg`,rate:`cd`,count:`count`,pierce:`pierce`,size:`size`}[n];return Math.abs(o[c]-s[c])>1e-9}function M(e){throw Error(`Unhandled gun: ${e}`)}var te=.35,ne=.2,re=.42,ie=.75,ae=.1,oe=1.5,se=.5,ce=.2,le=.6,ue=.6,de=1.8,fe={wick:96,flare:64,arc:64,mortar:64,halo:64,lance:64,firefly:64};function pe(e,t){let n=e=>t.includes(e);if(e.id===`wick`){let t=n(`double_volley`),r=e.dmg*e.critFactor*e.count*e.rate*(1+(t?ie:0)),i=e.count*e.rate*(t?2:1),a=n(`ember_ring`)?Math.min(i/10,1/ne)*1*te*e.dmg:0,o=n(`heavy_bolt`)?e.rate/4*3*e.dmg:0;return r+a+o}let r=e.dmg,i=e.critFactor,a=e.rate,o=e.count,s=r*i*a;switch(e.id){case`arc`:return s+(n(`static_pool`)?.2*r:0)+(n(`thunderclap`)?.3*r*a:0);case`flare`:return .5*o*s*(n(`twin_burst`)?1.5:1)+(n(`hot_coals`)?.4*r*Math.min(1,1.5*a):0);case`mortar`:return s*(1+.75*(o-1))+(n(`aftershock`)?.5*r*a*.75*o:0)+(n(`double_shell`)?.6*r*a*.75:0)+(n(`scorched_ground`)?.2*r*Math.min(1,2*a):0);case`halo`:return .5*s+(n(`pulse_ring`)?.15*r:0)+(n(`searing_touch`)?.2*r:0);case`lance`:return s*(n(`echo_beam`)?1.6:1)+(n(`solar_burst`)?.7*r*a:0);case`firefly`:return .8*o*s+(n(`glowburst`)&&e.pierce===0?.4*o*r*a:0)+(n(`hive_pulse`)?1.6*.8*r*a/3:0);default:return M(e.id)}}function me(t,n){if(![`play`,`paused`].includes(t.mode)||t.build.roster!==`candidate`||!Array.isArray(n)||n.length<1||n.length>4||n.some(e=>!e||typeof e!=`object`)||new Set(n.map(e=>e.id)).size!==n.length)return!1;for(let t of n){if(!e.includes(t.id)||!Number.isInteger(t.picks)||t.picks<0||t.picks>12||!t.mods||!Array.isArray(t.perks)||t.perks.length!==Math.floor(t.picks/4))return!1;for(let e of Object.keys(g[t.id]))if(!Number.isFinite(t.mods[e])||t.mods[e]<0||t.mods[e]>g[t.id][e])return!1;let n=[];for(let e of t.perks){if(!h(t.id,n).includes(e))return!1;n.push(e)}}t.choices.close(),t.ui.hideChoices(),t.rewards.clear(),t.pendingChests=0,t.shots.clear(),t.procs.reset(),t.build.weapons=[],t.build.dealt.clear(),t.build.handSeq=0,t.build.unlocked.clear();for(let e of n)t.build.addWeapon(e.id),t.build.weapon(e.id).prog=structuredClone({picks:e.picks,mods:e.mods,perks:e.perks});return t.applyStats(),t.diag.log(t.time,`debug_loadout`,n.length),!0}function he(e,t,n=10,r=!1){if(e.director.enabled||!Number.isFinite(n)||n<=0||n>60||!me(e,t))return null;e.enemies.clear(),e.mode=`paused`;let i=e.player,a=[],o=t[0],s=j(o.id,e.build.weapon(o.id).prog,e.stats),c=o.id===`halo`?s.size:o.id===`flare`?2:6,l=r?Array.from({length:32},(e,t)=>({x:i.x+Math.sin(t*Math.PI/16)*(t%2?c:c*1.25),z:i.z+Math.cos(t*Math.PI/16)*(t%2?c:c*1.25)})):[{x:i.x+c,z:i.z}];for(let t of l){let n=e.enemies.spawn(`husk`,t.x,t.z,{hpMul:1,emerge:0,y:i.y});if(!n)throw Error(`Probe target pool full`);n.hp=n.maxHp=1e9,n.emerge=0,a.push({e:n,id:n.id})}e.enemies.rebuildHash();let u=e.time;for(let t=0;t<Math.ceil(n*60);t++){e.time+=1/60,e.shots.orbiters.length=0,e.weapons.update(1/60),e.procs.update(1/60),e.shots.update(1/60);for(let{e,id:t}of a)if(e.id!==t)throw Error(`Probe target recycled`)}return{label:`debug-assisted anchored combat-only`,seconds:e.time-u,estimate:t.reduce((t,n)=>t+pe(j(n.id,e.build.weapon(n.id).prog,e.stats),n.perks),0),damage:Object.fromEntries(e.build.dealt),procs:e.procs.snapshot(),primaryOrbiters:e.shots.orbiters.length,devices:e.rig.deviceIds}}var ge=1e3,_e=1001,ve=1002,ye=1003,be=1004,xe=1005,Se=1006,Ce=1007,we=1008,Te=1009,Ee=1010,N=1011,De=1012,Oe=1013,ke=1014,Ae=1015,je=1016,Me=1017,Ne=1018,Pe=1020,Fe=35902,P=35899,Ie=1021,F=1022,I=1023,Le=1026,Re=1027,ze=1028,Be=1029,Ve=1030,He=1031,Ue=1033,We=33776,Ge=33777,Ke=33778,qe=33779,Je=35840,Ye=35841,Xe=35842,Ze=35843,Qe=36196,$e=37492,et=37496,tt=37488,nt=37489,rt=37490,it=37491,at=37808,ot=37809,st=37810,ct=37811,lt=37812,ut=37813,dt=37814,ft=37815,pt=37816,mt=37817,ht=37818,gt=37819,_t=37820,vt=37821,yt=36492,bt=36494,xt=36495,St=36283,Ct=36284,wt=36285,Tt=36286,Et=2300,Dt=2301,Ot=2302,kt=2303,At=2400,jt=2401,Mt=2402,Nt=3200,Pt=`srgb`,Ft=`srgb-linear`,It=`linear`,Lt=`srgb`,Rt=7680,zt=35044,Bt=35048,Vt=2e3;function Ht(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ut(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Wt(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Gt(){let e=Wt(`canvas`);return e.style.display=`block`,e}var Kt={};function qt(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Jt(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function L(...e){e=Jt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function R(...e){e=Jt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Yt(...e){let t=e.join(` `);t in Kt||(Kt[t]=!0,L(...e))}function Xt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var Zt={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},Qt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},$t=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),en=Math.PI/180,tn=180/Math.PI;function nn(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return($t[e&255]+$t[e>>8&255]+$t[e>>16&255]+$t[e>>24&255]+`-`+$t[t&255]+$t[t>>8&255]+`-`+$t[t>>16&15|64]+$t[t>>24&255]+`-`+$t[n&63|128]+$t[n>>8&255]+`-`+$t[n>>16&255]+$t[n>>24&255]+$t[r&255]+$t[r>>8&255]+$t[r>>16&255]+$t[r>>24&255]).toLowerCase()}function z(e,t,n){return Math.max(t,Math.min(n,e))}function rn(e,t){return(e%t+t)%t}function an(e,t,n){return(1-n)*e+n*t}function on(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function sn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var B=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=z(this.x,e.x,t.x),this.y=z(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=z(this.x,e,t),this.y=z(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(z(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(z(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},cn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:L(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(z(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(un.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(un.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=z(this.x,e.x,t.x),this.y=z(this.y,e.y,t.y),this.z=z(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=z(this.x,e,t),this.y=z(this.y,e,t),this.z=z(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(z(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ln.copy(this).projectOnVector(e),this.sub(ln)}reflect(e){return this.sub(ln.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(z(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ln=new V,un=new cn,H=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Yt(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(dn.makeScale(e,t)),this}rotate(e){return Yt(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(dn.makeRotation(-e)),this}translate(e,t){return Yt(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(dn.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},dn=new H,fn=new H().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pn=new H().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mn(){let e={enabled:!0,workingColorSpace:Ft,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=gn(e.r),e.g=gn(e.g),e.b=gn(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=_n(e.r),e.g=_n(e.g),e.b=_n(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?It:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return Yt(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return Yt(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Ft]:{primaries:t,whitePoint:r,transfer:It,toXYZ:fn,fromXYZ:pn,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Pt},outputColorSpaceConfig:{drawingBufferColorSpace:Pt}},[Pt]:{primaries:t,whitePoint:r,transfer:Lt,toXYZ:fn,fromXYZ:pn,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Pt}}}),e}var hn=mn();function gn(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function _n(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var vn,yn=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{vn===void 0&&(vn=Wt(`canvas`)),vn.width=e.width,vn.height=e.height;let t=vn.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=vn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Wt(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=gn(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(gn(t[e]/255)*255):t[e]=gn(t[e]);return{data:t,width:e.width,height:e.height}}return L(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},bn=0,xn=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:bn++}),this.uuid=nn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Sn(r[t].image)):e.push(Sn(r[t]))}else e=Sn(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Sn(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?yn.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(L(`Texture: Unable to serialize Texture.`),{})}var Cn=0,wn=new V,Tn=class e extends Qt{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=_e,i=_e,a=Se,o=we,s=I,c=Te,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cn++}),this.uuid=nn(),this.name=``,this.source=new xn(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new B(0,0),this.repeat=new B(1,1),this.center=new B(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new H,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(wn).x}get height(){return this.source.getSize(wn).y}get depth(){return this.source.getSize(wn).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){L(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?L(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ge:e.x-=Math.floor(e.x);break;case _e:e.x=e.x<0?0:1;break;case ve:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case ge:e.y-=Math.floor(e.y);break;case _e:e.y=e.y<0?0:1;break;case ve:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Tn.DEFAULT_IMAGE=null,Tn.DEFAULT_MAPPING=300,Tn.DEFAULT_ANISOTROPY=1;var En=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=z(this.x,e.x,t.x),this.y=z(this.y,e.y,t.y),this.z=z(this.z,e.z,t.z),this.w=z(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=z(this.x,e,t),this.y=z(this.y,e,t),this.z=z(this.z,e,t),this.w=z(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(z(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Dn=class extends Qt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Se,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new En(0,0,e,t),this.scissorTest=!1,this.viewport=new En(0,0,e,t),this.textures=[];let r=new Tn({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Se,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new xn(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},On=class extends Dn{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},kn=class extends Tn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ye,this.minFilter=ye,this.wrapR=_e,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},An=class extends Tn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ye,this.minFilter=ye,this.wrapR=_e,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},jn=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Mn.setFromMatrixColumn(e,0).length(),i=1/Mn.setFromMatrixColumn(e,1).length(),a=1/Mn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pn,e,Fn)}lookAt(e,t,n){let r=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),In.crossVectors(n,Rn),In.lengthSq()===0&&(Math.abs(n.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),In.crossVectors(n,Rn)),In.normalize(),Ln.crossVectors(Rn,In),r[0]=In.x,r[4]=Ln.x,r[8]=Rn.x,r[1]=In.y,r[5]=Ln.y,r[9]=Rn.y,r[2]=In.z,r[6]=Ln.z,r[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],ee=r[14],M=r[3],te=r[7],ne=r[11],re=r[15];return i[0]=a*x+o*T+s*k+c*M,i[4]=a*S+o*E+s*A+c*te,i[8]=a*C+o*D+s*j+c*ne,i[12]=a*w+o*O+s*ee+c*re,i[1]=l*x+u*T+d*k+f*M,i[5]=l*S+u*E+d*A+f*te,i[9]=l*C+u*D+d*j+f*ne,i[13]=l*w+u*O+d*ee+f*re,i[2]=p*x+m*T+h*k+g*M,i[6]=p*S+m*E+h*A+g*te,i[10]=p*C+m*D+h*j+g*ne,i[14]=p*w+m*O+h*ee+g*re,i[3]=_*x+v*T+y*k+b*M,i[7]=_*S+v*E+y*A+b*te,i[11]=_*C+v*D+y*j+b*ne,i[15]=_*w+v*O+y*ee+b*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Mn.set(r[0],r[1],r[2]).length(),o=Mn.set(r[4],r[5],r[6]).length(),s=Mn.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Nn.copy(this);let c=1/a,l=1/o,u=1/s;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=l,Nn.elements[5]*=l,Nn.elements[6]*=l,Nn.elements[8]*=u,Nn.elements[9]*=u,Nn.elements[10]*=u,t.setFromRotationMatrix(Nn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Vt,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Vt,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Mn=new V,Nn=new jn,Pn=new V(0,0,0),Fn=new V(1,1,1),In=new V,Ln=new V,Rn=new V,zn=new jn,Bn=new cn,Vn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(z(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-z(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(z(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-z(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(z(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-z(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:L(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return zn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bn.setFromEuler(this),this.setFromQuaternion(Bn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Vn.DEFAULT_ORDER=`XYZ`;var Hn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Un=0,Wn=new V,Gn=new cn,Kn=new jn,qn=new V,Jn=new V,Yn=new V,Xn=new cn,Zn=new V(1,0,0),Qn=new V(0,1,0),$n=new V(0,0,1),er={type:`added`},tr={type:`removed`},nr={type:`childadded`,child:null},rr={type:`childremoved`,child:null},ir=class e extends Qt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Un++}),this.uuid=nn(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new V,n=new Vn,r=new cn,i=new V(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new jn},normalMatrix:{value:new H}}),this.matrix=new jn,this.matrixWorld=new jn,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gn.setFromAxisAngle(e,t),this.quaternion.multiply(Gn),this}rotateOnWorldAxis(e,t){return Gn.setFromAxisAngle(e,t),this.quaternion.premultiply(Gn),this}rotateX(e){return this.rotateOnAxis(Zn,e)}rotateY(e){return this.rotateOnAxis(Qn,e)}rotateZ(e){return this.rotateOnAxis($n,e)}translateOnAxis(e,t){return Wn.copy(e).applyQuaternion(this.quaternion),this.position.add(Wn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zn,e)}translateY(e){return this.translateOnAxis(Qn,e)}translateZ(e){return this.translateOnAxis($n,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qn.copy(e):qn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Jn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(Jn,qn,this.up):Kn.lookAt(qn,Jn,this.up),this.quaternion.setFromRotationMatrix(Kn),r&&(Kn.extractRotation(r.matrixWorld),Gn.setFromRotationMatrix(Kn),this.quaternion.premultiply(Gn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(R(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(er),nr.child=e,this.dispatchEvent(nr),nr.child=null):R(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(tr),rr.child=e,this.dispatchEvent(rr),rr.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(er),nr.child=e,this.dispatchEvent(nr),nr.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jn,e,Yn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jn,Xn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};ir.DEFAULT_UP=new V(0,1,0),ir.DEFAULT_MATRIX_AUTO_UPDATE=!0,ir.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var U=class extends ir{constructor(){super(),this.isGroup=!0,this.type=`Group`}},ar={type:`move`},or=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new U,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new U,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new U,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ar)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new U;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},sr={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cr={h:0,s:0,l:0},lr={h:0,s:0,l:0};function ur(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var W=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,hn.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=hn.workingColorSpace){return this.r=e,this.g=t,this.b=n,hn.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=hn.workingColorSpace){if(e=rn(e,1),t=z(t,0,1),n=z(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=ur(i,r,e+1/3),this.g=ur(i,r,e),this.b=ur(i,r,e-1/3)}return hn.colorSpaceToWorking(this,r),this}setStyle(e,t=Pt){function n(t){t!==void 0&&parseFloat(t)<1&&L(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:L(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);L(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pt){let n=sr[e.toLowerCase()];return n===void 0?L(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gn(e.r),this.g=gn(e.g),this.b=gn(e.b),this}copyLinearToSRGB(e){return this.r=_n(e.r),this.g=_n(e.g),this.b=_n(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return hn.workingToColorSpace(dr.copy(this),e),Math.round(z(dr.r*255,0,255))*65536+Math.round(z(dr.g*255,0,255))*256+Math.round(z(dr.b*255,0,255))}getHexString(e=Pt){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=hn.workingColorSpace){hn.workingToColorSpace(dr.copy(this),t);let n=dr.r,r=dr.g,i=dr.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=hn.workingColorSpace){return hn.workingToColorSpace(dr.copy(this),t),e.r=dr.r,e.g=dr.g,e.b=dr.b,e}getStyle(e=Pt){hn.workingToColorSpace(dr.copy(this),e);let t=dr.r,n=dr.g,r=dr.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(cr),this.setHSL(cr.h+e,cr.s+t,cr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(cr),e.getHSL(lr);let n=an(cr.h,lr.h,t),r=an(cr.s,lr.s,t),i=an(cr.l,lr.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},dr=new W;W.NAMES=sr;var fr=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new W(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},pr=class extends ir{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},mr=new V,hr=new V,gr=new V,_r=new V,vr=new V,yr=new V,br=new V,xr=new V,Sr=new V,Cr=new V,wr=new En,Tr=new En,Er=new En,Dr=class e{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),mr.subVectors(e,t),r.cross(mr);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){mr.subVectors(r,t),hr.subVectors(n,t),gr.subVectors(e,t);let a=mr.dot(mr),o=mr.dot(hr),s=mr.dot(gr),c=hr.dot(hr),l=hr.dot(gr),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,_r)!==null&&_r.x>=0&&_r.y>=0&&_r.x+_r.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,_r)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,_r.x),s.addScaledVector(a,_r.y),s.addScaledVector(o,_r.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return wr.setScalar(0),Tr.setScalar(0),Er.setScalar(0),wr.fromBufferAttribute(e,t),Tr.fromBufferAttribute(e,n),Er.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(wr,i.x),a.addScaledVector(Tr,i.y),a.addScaledVector(Er,i.z),a}static isFrontFacing(e,t,n,r){return mr.subVectors(n,t),hr.subVectors(e,t),mr.cross(hr).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mr.subVectors(this.c,this.b),hr.subVectors(this.a,this.b),mr.cross(hr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;vr.subVectors(r,n),yr.subVectors(i,n),xr.subVectors(e,n);let s=vr.dot(xr),c=yr.dot(xr);if(s<=0&&c<=0)return t.copy(n);Sr.subVectors(e,r);let l=vr.dot(Sr),u=yr.dot(Sr);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(vr,a);Cr.subVectors(e,i);let f=vr.dot(Cr),p=yr.dot(Cr);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(yr,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return br.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(br,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(vr,a).addScaledVector(yr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Or=class{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ar.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ar.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ar.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Ar):Ar.fromBufferAttribute(r,t),Ar.applyMatrix4(e.matrixWorld),this.expandByPoint(Ar);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),jr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),jr.copy(e.boundingBox)),jr.applyMatrix4(e.matrixWorld),this.union(jr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ar),Ar.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rr),zr.subVectors(this.max,Rr),Mr.subVectors(e.a,Rr),Nr.subVectors(e.b,Rr),Pr.subVectors(e.c,Rr),Fr.subVectors(Nr,Mr),Ir.subVectors(Pr,Nr),Lr.subVectors(Mr,Pr);let t=[0,-Fr.z,Fr.y,0,-Ir.z,Ir.y,0,-Lr.z,Lr.y,Fr.z,0,-Fr.x,Ir.z,0,-Ir.x,Lr.z,0,-Lr.x,-Fr.y,Fr.x,0,-Ir.y,Ir.x,0,-Lr.y,Lr.x,0];return!Hr(t,Mr,Nr,Pr,zr)||(t=[1,0,0,0,1,0,0,0,1],!Hr(t,Mr,Nr,Pr,zr))?!1:(Br.crossVectors(Fr,Ir),t=[Br.x,Br.y,Br.z],Hr(t,Mr,Nr,Pr,zr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ar).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ar).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(kr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kr)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},kr=[new V,new V,new V,new V,new V,new V,new V,new V],Ar=new V,jr=new Or,Mr=new V,Nr=new V,Pr=new V,Fr=new V,Ir=new V,Lr=new V,Rr=new V,zr=new V,Br=new V,Vr=new V;function Hr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Vr.fromArray(e,a);let o=i.x*Math.abs(Vr.x)+i.y*Math.abs(Vr.y)+i.z*Math.abs(Vr.z),s=t.dot(Vr),c=n.dot(Vr),l=r.dot(Vr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Ur=new V,Wr=new B,Gr=0,Kr=class extends Qt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=zt,this.updateRanges=[],this.gpuType=Ae,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Wr.fromBufferAttribute(this,t),Wr.applyMatrix3(e),this.setXY(t,Wr.x,Wr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ur.fromBufferAttribute(this,t),Ur.applyMatrix3(e),this.setXYZ(t,Ur.x,Ur.y,Ur.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ur.fromBufferAttribute(this,t),Ur.applyMatrix4(e),this.setXYZ(t,Ur.x,Ur.y,Ur.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ur.fromBufferAttribute(this,t),Ur.applyNormalMatrix(e),this.setXYZ(t,Ur.x,Ur.y,Ur.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ur.fromBufferAttribute(this,t),Ur.transformDirection(e),this.setXYZ(t,Ur.x,Ur.y,Ur.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=on(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=on(t,this.array)),t}setX(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=on(t,this.array)),t}setY(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=on(t,this.array)),t}setZ(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=on(t,this.array)),t}setW(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),n=sn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),n=sn(n,this.array),r=sn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),n=sn(n,this.array),r=sn(r,this.array),i=sn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},qr=class extends Kr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Jr=class extends Kr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},G=class extends Kr{constructor(e,t,n){super(new Float32Array(e),t,n)}},Yr=new Or,Xr=new V,Zr=new V,Qr=class{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Yr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xr.subVectors(e,this.center);let t=Xr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Xr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xr.copy(e.center).add(Zr)),this.expandByPoint(Xr.copy(e.center).sub(Zr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},$r=0,ei=new jn,ti=new ir,ni=new V,ri=new Or,ii=new Or,ai=new V,oi=class e extends Qt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$r++}),this.uuid=nn(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Ht(e)?Jr:qr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new H().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,t,n){return ei.makeTranslation(e,t,n),this.applyMatrix4(ei),this}scale(e,t,n){return ei.makeScale(e,t,n),this.applyMatrix4(ei),this}lookAt(e){return ti.lookAt(e),ti.updateMatrix(),this.applyMatrix4(ti.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ni).negate(),this.translate(ni.x,ni.y,ni.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new G(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&L(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Or);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)R(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];ri.setFromBufferAttribute(n),this.morphTargetsRelative?(ai.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(ai),ai.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(ai)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&R(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)R(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new V,1/0);else if(e){let n=this.boundingSphere.center;if(ri.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];ii.setFromBufferAttribute(n),this.morphTargetsRelative?(ai.addVectors(ri.min,ii.min),ri.expandByPoint(ai),ai.addVectors(ri.max,ii.max),ri.expandByPoint(ai)):(ri.expandByPoint(ii.min),ri.expandByPoint(ii.max))}ri.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)ai.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(ai));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)ai.fromBufferAttribute(a,t),o&&(ni.fromBufferAttribute(e,t),ai.add(ni)),r=Math.max(r,n.distanceToSquared(ai))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&R(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){R(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Kr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new V,s[e]=new V;let c=new V,l=new V,u=new V,d=new B,f=new B,p=new B,m=new V,h=new V;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new V,y=new V,b=new V,x=new V;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Kr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new V,i=new V,a=new V,o=new V,s=new V,c=new V,l=new V,u=new V;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ai.fromBufferAttribute(e,t),ai.normalize(),e.setXYZ(t,ai.x,ai.y,ai.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Kr(a,r,i)}if(this.index===null)return L(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},si=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=zt,this.updateRanges=[],this.version=0,this.uuid=nn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},ci=new V,li=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)ci.fromBufferAttribute(this,t),ci.applyMatrix4(e),this.setXYZ(t,ci.x,ci.y,ci.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ci.fromBufferAttribute(this,t),ci.applyNormalMatrix(e),this.setXYZ(t,ci.x,ci.y,ci.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ci.fromBufferAttribute(this,t),ci.transformDirection(e),this.setXYZ(t,ci.x,ci.y,ci.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=on(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=sn(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=sn(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=sn(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=sn(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=sn(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=on(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=on(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=on(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=on(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=sn(t,this.array),n=sn(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=sn(t,this.array),n=sn(n,this.array),r=sn(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=sn(t,this.array),n=sn(n,this.array),r=sn(r,this.array),i=sn(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){qt(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new Kr(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){qt(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ui=new V,di=new V,fi=new H,pi=class{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=ui.subVectors(n,t).cross(di.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(ui),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||fi.getNormalMatrix(e),r=this.coplanarPoint(ui).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},mi=0,hi=class extends Qt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mi++}),this.uuid=nn(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new W(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rt,this.stencilZFail=Rt,this.stencilZPass=Rt,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){L(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?L(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new W().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new pi().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new B().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new B().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},gi=class extends hi{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new W(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},_i,vi=new V,yi=new V,bi=new V,xi=new B,Si=new B,Ci=new jn,wi=new V,Ti=new V,Ei=new V,Di=new B,Oi=new B,ki=new B,Ai=class extends ir{constructor(e=new gi){if(super(),this.isSprite=!0,this.type=`Sprite`,_i===void 0){_i=new oi;let e=new si(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);_i.setIndex([0,1,2,0,2,3]),_i.setAttribute(`position`,new li(e,3,0,!1)),_i.setAttribute(`uv`,new li(e,2,3,!1))}this.geometry=_i,this.material=e,this.center=new B(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&R(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),yi.setFromMatrixScale(this.matrixWorld),Ci.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),bi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&yi.multiplyScalar(-bi.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;ji(wi.set(-.5,-.5,0),bi,a,yi,r,i),ji(Ti.set(.5,-.5,0),bi,a,yi,r,i),ji(Ei.set(.5,.5,0),bi,a,yi,r,i),Di.set(0,0),Oi.set(1,0),ki.set(1,1);let o=e.ray.intersectTriangle(wi,Ti,Ei,!1,vi);if(o===null&&(ji(Ti.set(-.5,.5,0),bi,a,yi,r,i),Oi.set(0,1),o=e.ray.intersectTriangle(wi,Ei,Ti,!1,vi),o===null))return;let s=e.ray.origin.distanceTo(vi);s<e.near||s>e.far||t.push({distance:s,point:vi.clone(),uv:Dr.getInterpolation(vi,wi,Ti,Ei,Di,Oi,ki,new B),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ji(e,t,n,r,i,a){xi.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?Si.copy(xi):(Si.x=a*xi.x-i*xi.y,Si.y=i*xi.x+a*xi.y),e.copy(t),e.x+=Si.x,e.y+=Si.y,e.applyMatrix4(Ci)}var Mi=new V,Ni=new V,Pi=new V,Fi=new V,Ii=class{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mi.copy(this.origin).addScaledVector(this.direction,t),Mi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ni.copy(e).add(t).multiplyScalar(.5),Pi.copy(t).sub(e).normalize(),Fi.copy(this.origin).sub(Ni);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Pi),o=Fi.dot(this.direction),s=-Fi.dot(Pi),c=Fi.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Ni).addScaledVector(Pi,d),f}intersectSphere(e,t){if(e.radius<0)return null;Mi.subVectors(e.center,this.origin);let n=Mi.dot(this.direction),r=Mi.dot(Mi)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Mi)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,ee,M;if(y>=b&&y>=x?(w=s,D=u,A=p,M=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,ee=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,ee=_)):b>=x?(w=c,D=d,A=m,M=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,ee=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,ee=v)):(w=l,D=f,A=h,M=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,ee=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,ee=g)),w===0)return null;let te=S/w,ne=C/w,re=1/w,ie=T-te*D,ae=E-ne*D,oe=O-te*A,se=k-ne*A,ce=j-te*M,le=ee-ne*M,ue=ce*se-le*oe,de=ie*le-ae*ce,fe=oe*ae-se*ie;if(r){if(ue<0||de<0||fe<0)return null}else if((ue<0||de<0||fe<0)&&(ue>0||de>0||fe>0))return null;let pe=ue+de+fe;if(pe===0)return null;let me=re*(ue*D+de*A+fe*M);return(pe>0?me<0:me>0)?null:this.at(me/pe,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Li=class extends hi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new W(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ri=new jn,zi=new Ii,Bi=new Qr,Vi=new V,Hi=new V,Ui=new V,Wi=new V,Gi=new V,Ki=new V,qi=new V,Ji=new V,K=class extends ir{constructor(e=new oi,t=new Li){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Ki.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Gi.fromBufferAttribute(s,e),a?Ki.addScaledVector(Gi,r):Ki.addScaledVector(Gi.sub(t),r))}t.add(Ki)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Bi.copy(n.boundingSphere),Bi.applyMatrix4(i),zi.copy(e.ray).recast(e.near),!(Bi.containsPoint(zi.origin)===!1&&(zi.intersectSphere(Bi,Vi)===null||zi.origin.distanceToSquared(Vi)>(e.far-e.near)**2))&&(Ri.copy(i).invert(),zi.copy(e.ray).applyMatrix4(Ri),(n.boundingBox===null||zi.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,zi)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Xi(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Xi(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Xi(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Xi(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Yi(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Ji.copy(s),Ji.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Ji);return l<n.near||l>n.far?null:{distance:l,point:Ji.clone(),object:e}}function Xi(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Hi),e.getVertexPosition(c,Ui),e.getVertexPosition(l,Wi);let u=Yi(e,t,n,r,Hi,Ui,Wi,qi);if(u){let e=new V;Dr.getBarycoord(qi,Hi,Ui,Wi,e),i&&(u.uv=Dr.getInterpolatedAttribute(i,s,c,l,e,new B)),a&&(u.uv1=Dr.getInterpolatedAttribute(a,s,c,l,e,new B)),o&&(u.normal=Dr.getInterpolatedAttribute(o,s,c,l,e,new V),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new V,materialIndex:0};Dr.getNormal(Hi,Ui,Wi,t.normal),u.face=t,u.barycoord=e}return u}var Zi=class extends Tn{constructor(e=null,t=1,n=1,r,i,a,o,s,c=ye,l=ye,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Qi=class extends Kr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},$i=new jn,ea=new jn,ta=[],na=new Or,ra=new jn,ia=new K,aa=new Qr,oa=class extends K{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Qi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,ra)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Or),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,$i),na.copy(e.boundingBox).applyMatrix4($i),this.boundingBox.union(na)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,$i),aa.copy(e.boundingSphere).applyMatrix4($i),this.boundingSphere.union(aa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(ia.geometry=this.geometry,ia.material=this.material,ia.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),aa.copy(this.boundingSphere),aa.applyMatrix4(n),e.ray.intersectsSphere(aa)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,$i),ea.multiplyMatrices(n,$i),ia.matrixWorld=ea,ia.raycast(e,ta);for(let e=0,n=ta.length;e<n;e++){let n=ta[e];n.instanceId=i,n.object=this,t.push(n)}ta.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Qi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Zi(new Float32Array(r*this.count),r,this.count,ze,Ae));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},sa=new Qr,ca=new B(.5,.5),la=new V,ua=class{constructor(e=new pi,t=new pi,n=new pi,r=new pi,i=new pi,a=new pi){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Vt,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),sa.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),sa.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(sa)}intersectsSprite(e){return sa.center.set(0,0,0),sa.radius=.7071067811865476+ca.distanceTo(e.center),sa.applyMatrix4(e.matrixWorld),this.intersectsSphere(sa)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(la.x=r.normal.x>0?e.max.x:e.min.x,la.y=r.normal.y>0?e.max.y:e.min.y,la.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(la)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},da=class extends hi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new W(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},fa=new V,pa=new V,ma=new jn,ha=new Ii,ga=new Qr,_a=new V,va=new V,ya=class extends ir{constructor(e=new oi,t=new da){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)fa.fromBufferAttribute(t,e-1),pa.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=fa.distanceTo(pa);e.setAttribute(`lineDistance`,new G(n,1))}else L(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(r),ga.radius+=i,e.ray.intersectsSphere(ga)===!1)return;ma.copy(r).invert(),ha.copy(e.ray).applyMatrix4(ma);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=ba(this,e,ha,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=ba(this,e,ha,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=ba(this,e,ha,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=ba(this,e,ha,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function ba(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(fa.fromBufferAttribute(s,i),pa.fromBufferAttribute(s,a),n.distanceSqToSegment(fa,pa,_a,va)>r)return;_a.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(_a);if(!(c<t.near||c>t.far))return{distance:c,point:va.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var xa=class extends hi{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new W(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Sa=new jn,Ca=new Ii,wa=new Qr,Ta=new V,Ea=class extends ir{constructor(e=new oi,t=new xa){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wa.copy(n.boundingSphere),wa.applyMatrix4(r),wa.radius+=i,e.ray.intersectsSphere(wa)===!1)return;Sa.copy(r).invert(),Ca.copy(e.ray).applyMatrix4(Sa);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Ta.fromBufferAttribute(l,n),Da(Ta,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Ta.fromBufferAttribute(l,a),Da(Ta,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Da(e,t,n,r,i,a,o){let s=Ca.distanceSqToPoint(e);if(s<n){let n=new V;Ca.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Oa=class extends Tn{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ka=class extends Tn{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Aa=class extends Tn{constructor(e,t,n=ke,r,i,a,o=ye,s=ye,c,l=Le,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new xn(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ja=class extends Aa{constructor(e,t=ke,n=301,r,i,a=ye,o=ye,s,c=Le){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ma=class extends Tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Na=class e extends oi{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new G(c,3)),this.setAttribute(`normal`,new G(l,3)),this.setAttribute(`uv`,new G(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new V;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Pa=class e extends oi{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new V,l=new B;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new G(a,3)),this.setAttribute(`normal`,new G(o,3)),this.setAttribute(`uv`,new G(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Fa=class e extends oi{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new G(u,3)),this.setAttribute(`normal`,new G(d,3)),this.setAttribute(`uv`,new G(f,2));function _(){let a=new V,_=new V,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new B,m=new V,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ia=class e extends Fa{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},La=class e extends oi{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new G(i,3)),this.setAttribute(`normal`,new G(i.slice(),3)),this.setAttribute(`uv`,new G(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new V,r=new V,i=new V;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new V;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new V;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new V,t=new V,n=new V,r=new V,o=new B,s=new B,c=new B;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Ra=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){L(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new B:new V);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new V,r=[],i=[],a=[],o=new V,s=new jn;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new V)}i[0]=new V,a[0]=new V;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(z(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(z(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},za=class extends Ra{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new B){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ba=class extends za{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function Va(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var Ha=new V,Ua=new V,Wa=new Va,Ga=new Va,Ka=new Va,qa=class extends Ra{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new V){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(Ua.subVectors(r[0],r[1]).add(r[0]),c=Ua);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(Ha.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=Ha),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Wa.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Ga.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),Ka.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(Wa.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Ga.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Ka.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Wa.calc(s),Ga.calc(s),Ka.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new V().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ja(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function Ya(e,t){let n=1-e;return n*n*t}function Xa(e,t){return 2*(1-e)*e*t}function Za(e,t){return e*e*t}function Qa(e,t,n,r){return Ya(e,t)+Xa(e,n)+Za(e,r)}function $a(e,t){let n=1-e;return n*n*n*t}function eo(e,t){let n=1-e;return 3*n*n*e*t}function to(e,t){return 3*(1-e)*e*e*t}function no(e,t){return e*e*e*t}function ro(e,t,n,r,i){return $a(e,t)+eo(e,n)+to(e,r)+no(e,i)}var io=class extends Ra{constructor(e=new B,t=new B,n=new B,r=new B){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new B){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(ro(e,r.x,i.x,a.x,o.x),ro(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ao=class extends Ra{constructor(e=new V,t=new V,n=new V,r=new V){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new V){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(ro(e,r.x,i.x,a.x,o.x),ro(e,r.y,i.y,a.y,o.y),ro(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},oo=class extends Ra{constructor(e=new B,t=new B){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new B){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},so=class extends Ra{constructor(e=new V,t=new V){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new V){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new V){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},co=class extends Ra{constructor(e=new B,t=new B,n=new B){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new B){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Qa(e,r.x,i.x,a.x),Qa(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},lo=class extends Ra{constructor(e=new V,t=new V,n=new V){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new V){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Qa(e,r.x,i.x,a.x),Qa(e,r.y,i.y,a.y),Qa(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},uo=Object.freeze({__proto__:null,ArcCurve:Ba,CatmullRomCurve3:qa,CubicBezierCurve:io,CubicBezierCurve3:ao,EllipseCurve:za,LineCurve:oo,LineCurve3:so,QuadraticBezierCurve:co,QuadraticBezierCurve3:lo,SplineCurve:class extends Ra{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new B){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Ja(o,s.x,c.x,l.x,u.x),Ja(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new B().fromArray(n))}return this}}}),fo=class e extends La{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},po=class e extends La{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},mo=class e extends oi{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new G(p,3)),this.setAttribute(`normal`,new G(m,3)),this.setAttribute(`uv`,new G(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},ho=class e extends oi{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new V,p=new B;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new G(s,3)),this.setAttribute(`normal`,new G(c,3)),this.setAttribute(`uv`,new G(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},go=class e extends oi{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new V,d=new V,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new G(p,3)),this.setAttribute(`normal`,new G(m,3)),this.setAttribute(`uv`,new G(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},_o=class e extends oi{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new V,f=new V,p=new V;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new G(c,3)),this.setAttribute(`normal`,new G(l,3)),this.setAttribute(`uv`,new G(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},vo=class e extends oi{constructor(e=new lo(new V(-1,-1,0),new V(-1,1,0),new V(1,1,0)),t=64,n=1,r=8,i=!1){super(),this.type=`TubeGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:i};let a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new V,s=new V,c=new B,l=new V,u=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute(`position`,new G(u,3)),this.setAttribute(`normal`,new G(d,3)),this.setAttribute(`uv`,new G(f,2));function m(){for(let e=0;e<t;e++)h(e);h(i===!1?t:0),_(),g()}function h(i){l=e.getPointAt(i/t,l);let c=a.normals[i],f=a.binormals[i];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,i=Math.sin(t),a=-Math.cos(t);s.x=a*c.x+i*f.x,s.y=a*c.y+i*f.y,s.z=a*c.z+i*f.z,s.normalize(),d.push(s.x,s.y,s.z),o.x=l.x+n*s.x,o.y=l.y+n*s.y,o.z=l.z+n*s.z,u.push(o.x,o.y,o.z)}}function g(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,o=(r+1)*(e-1)+t;p.push(n,i,o),p.push(i,a,o)}}function _(){for(let e=0;e<=t;e++)for(let n=0;n<=r;n++)c.x=e/t,c.y=n/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(t){return new e(new uo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function yo(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(xo(i))i.isRenderTargetTexture?(L(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(xo(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function bo(e){let t={};for(let n=0;n<e.length;n++){let r=yo(e[n]);for(let e in r)t[e]=r[e]}return t}function xo(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function So(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Co(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:hn.workingColorSpace}var wo={clone:yo,merge:bo},To=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Eo=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Do=class extends hi{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=To,this.fragmentShader=Eo,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yo(e.uniforms),this.uniformsGroups=So(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new W().setHex(r.value);break;case`v2`:this.uniforms[n].value=new B().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new V().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new En().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new H().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new jn().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Oo=class extends Do{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},ko=class extends hi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new W(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new W(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new B(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ao=class extends hi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Nt,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},jo=class extends hi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Mo(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function No(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Po=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Fo=class extends Po{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:At,endingEnd:At}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case jt:i=e,o=2*t-n;break;case Mt:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case jt:a=e,s=2*n-t;break;case Mt:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Io=class extends Po{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Lo=class extends Po{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Ro=class extends Po{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Vo(n,t,g,y,r);i[p]=zo(x,o,_,b,m)}return i}};function zo(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Bo(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Vo(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=zo(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Bo(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Ho=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Mo(t,this.TimeBufferType),this.values=Mo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Mo(e.times,Array),values:Mo(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),No(e.settings)&&(n.settings={inTangents:Mo(e.settings.inTangents,Array),outTangents:Mo(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Lo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Io(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Fo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ro(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Et:t=this.InterpolantFactoryMethodDiscrete;break;case Dt:t=this.InterpolantFactoryMethodLinear;break;case Ot:t=this.InterpolantFactoryMethodSmooth;break;case kt:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return L(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Et;case this.InterpolantFactoryMethodLinear:return Dt;case this.InterpolantFactoryMethodSmooth:return Ot;case this.InterpolantFactoryMethodBezier:return kt}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;No(this.settings)&&(Uo(this.settings.inTangents,e),Uo(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(R(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(R(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){R(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){R(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Ut(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){R(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ot,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,No(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Uo(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Ho.prototype.ValueTypeName=``,Ho.prototype.TimeBufferType=Float32Array,Ho.prototype.ValueBufferType=Float32Array,Ho.prototype.DefaultInterpolation=Dt;var Wo=class extends Ho{constructor(e,t,n){super(e,t,n)}};Wo.prototype.ValueTypeName=`bool`,Wo.prototype.ValueBufferType=Array,Wo.prototype.DefaultInterpolation=Et,Wo.prototype.InterpolantFactoryMethodLinear=void 0,Wo.prototype.InterpolantFactoryMethodSmooth=void 0;var Go=class extends Ho{constructor(e,t,n,r){super(e,t,n,r)}};Go.prototype.ValueTypeName=`color`;var Ko=class extends Ho{constructor(e,t,n,r){super(e,t,n,r)}};Ko.prototype.ValueTypeName=`number`;var qo=class extends Po{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)cn.slerpFlat(i,0,a,c-o,a,c,s);return i}},Jo=class extends Ho{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new qo(this.times,this.values,this.getValueSize(),e)}};Jo.prototype.ValueTypeName=`quaternion`,Jo.prototype.InterpolantFactoryMethodSmooth=void 0;var Yo=class extends Ho{constructor(e,t,n){super(e,t,n)}};Yo.prototype.ValueTypeName=`string`,Yo.prototype.ValueBufferType=Array,Yo.prototype.DefaultInterpolation=Et,Yo.prototype.InterpolantFactoryMethodLinear=void 0,Yo.prototype.InterpolantFactoryMethodSmooth=void 0;var Xo=class extends Ho{constructor(e,t,n,r){super(e,t,n,r)}};Xo.prototype.ValueTypeName=`vector`;var Zo=class extends ir{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new W(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Qo=class extends Zo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(ir.DEFAULT_UP),this.updateMatrix(),this.groundColor=new W(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},$o=new jn,es=new V,ts=new V,ns=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new B(512,512),this.mapType=Te,this.map=null,this.mapPass=null,this.matrix=new jn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ua,this._frameExtents=new B(1,1),this._viewportCount=1,this._viewports=[new En(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;es.setFromMatrixPosition(e.matrixWorld),t.position.copy(es),ts.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ts),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){$o.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix($o,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply($o)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},rs=new V,is=new cn,as=new V,os=class extends ir{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new jn,this.projectionMatrix=new jn,this.projectionMatrixInverse=new jn,this.coordinateSystem=Vt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(rs,is,as),as.x===1&&as.y===1&&as.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(rs,is,as.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(rs,is,as),as.x===1&&as.y===1&&as.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(rs,is,as.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ss=new V,cs=new B,ls=new B,us=class extends os{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=tn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(en*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tn*2*Math.atan(Math.tan(en*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ss.x,ss.y).multiplyScalar(-e/ss.z),ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ss.x,ss.y).multiplyScalar(-e/ss.z)}getViewSize(e,t){return this.getViewBounds(e,cs,ls),t.subVectors(ls,cs)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(en*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ds=class extends ns{constructor(){super(new us(90,1,.5,500)),this.isPointLightShadow=!0}},fs=class extends Zo{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new ds}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ps=class extends os{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ms=class extends ns{constructor(){super(new ps(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},hs=class extends Zo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(ir.DEFAULT_UP),this.updateMatrix(),this.target=new ir,this.shadow=new ms}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},gs=class extends Zo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type=`AmbientLight`}},_s=-90,vs=1,ys=class extends ir{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new us(_s,vs,e,t);r.layers=this.layers,this.add(r);let i=new us(_s,vs,e,t);i.layers=this.layers,this.add(i);let a=new us(_s,vs,e,t);a.layers=this.layers,this.add(a);let o=new us(_s,vs,e,t);o.layers=this.layers,this.add(o);let s=new us(_s,vs,e,t);s.layers=this.layers,this.add(s);let c=new us(_s,vs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},bs=class extends us{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},xs=`\\[\\]\\.:\\/`,Ss=RegExp(`[\\[\\]\\.:\\/]`,`g`),Cs=`[^\\[\\]\\.:\\/]`,ws=`[^`+xs.replace(`\\.`,``)+`]`,Ts=`((?:WC+[\\/:])*)`.replace(`WC`,Cs),Es=`(WCOD+)?`.replace(`WCOD`,ws),Ds=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Cs),Os=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Cs),ks=RegExp(`^`+Ts+Es+Ds+Os+`$`),As=[`material`,`materials`,`bones`,`map`],js=class{constructor(e,t,n){let r=n||Ms.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ms=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Ss,``)}static parseTrackName(e){let t=ks.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);As.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){L(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){R(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){R(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){R(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){R(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){R(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){R(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){R(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;R(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){R(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){R(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ms.Composite=js,Ms.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Ms.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Ms.prototype.GetterByBindingType=[Ms.prototype._getValue_direct,Ms.prototype._getValue_array,Ms.prototype._getValue_arrayElement,Ms.prototype._getValue_toArray],Ms.prototype.SetterByBindingTypeAndVersioning=[[Ms.prototype._setValue_direct,Ms.prototype._setValue_direct_setNeedsUpdate,Ms.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ms.prototype._setValue_array,Ms.prototype._setValue_array_setNeedsUpdate,Ms.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ms.prototype._setValue_arrayElement,Ms.prototype._setValue_arrayElement_setNeedsUpdate,Ms.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ms.prototype._setValue_fromArray,Ms.prototype._setValue_fromArray_setNeedsUpdate,Ms.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}};function Ns(e,t,n,r){let i=Ps(r);switch(n){case Ie:return e*t;case ze:return e*t/i.components*i.byteLength;case Be:return e*t/i.components*i.byteLength;case Ve:return e*t*2/i.components*i.byteLength;case He:return e*t*2/i.components*i.byteLength;case F:return e*t*3/i.components*i.byteLength;case I:return e*t*4/i.components*i.byteLength;case Ue:return e*t*4/i.components*i.byteLength;case We:case Ge:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ke:case qe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ye:case Ze:return Math.max(e,16)*Math.max(t,8)/4;case Je:case Xe:return Math.max(e,8)*Math.max(t,8)/2;case Qe:case $e:case tt:case nt:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case et:case rt:case it:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case at:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ot:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case st:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ct:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case lt:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case ut:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case dt:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ft:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case pt:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case mt:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case ht:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case gt:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case _t:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case vt:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case yt:case bt:case xt:return Math.ceil(e/4)*Math.ceil(t/4)*16;case St:case Ct:return Math.ceil(e/4)*Math.ceil(t/4)*8;case wt:case Tt:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Ps(e){switch(e){case Te:case Ee:return{byteLength:1,components:1};case De:case N:case je:return{byteLength:2,components:1};case Me:case Ne:return{byteLength:2,components:4};case ke:case Oe:case Ae:return{byteLength:4,components:1};case Fe:case P:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?L(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function Fs(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Is(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var q={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},J={common:{diffuse:{value:new W(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new H},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new H}},envmap:{envMap:{value:null},envMapRotation:{value:new H},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new H}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new H}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new H},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new H},normalScale:{value:new B(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new H},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new H}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new H}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new H}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new W(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new W(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0},uvTransform:{value:new H}},sprite:{diffuse:{value:new W(16777215)},opacity:{value:1},center:{value:new B(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new H},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0}}},Ls={basic:{uniforms:bo([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.fog]),vertexShader:q.meshbasic_vert,fragmentShader:q.meshbasic_frag},lambert:{uniforms:bo([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.fog,J.lights,{emissive:{value:new W(0)},envMapIntensity:{value:1}}]),vertexShader:q.meshlambert_vert,fragmentShader:q.meshlambert_frag},phong:{uniforms:bo([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.fog,J.lights,{emissive:{value:new W(0)},specular:{value:new W(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:q.meshphong_vert,fragmentShader:q.meshphong_frag},standard:{uniforms:bo([J.common,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.roughnessmap,J.metalnessmap,J.fog,J.lights,{emissive:{value:new W(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:q.meshphysical_vert,fragmentShader:q.meshphysical_frag},toon:{uniforms:bo([J.common,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.gradientmap,J.fog,J.lights,{emissive:{value:new W(0)}}]),vertexShader:q.meshtoon_vert,fragmentShader:q.meshtoon_frag},matcap:{uniforms:bo([J.common,J.bumpmap,J.normalmap,J.displacementmap,J.fog,{matcap:{value:null}}]),vertexShader:q.meshmatcap_vert,fragmentShader:q.meshmatcap_frag},points:{uniforms:bo([J.points,J.fog]),vertexShader:q.points_vert,fragmentShader:q.points_frag},dashed:{uniforms:bo([J.common,J.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:q.linedashed_vert,fragmentShader:q.linedashed_frag},depth:{uniforms:bo([J.common,J.displacementmap]),vertexShader:q.depth_vert,fragmentShader:q.depth_frag},normal:{uniforms:bo([J.common,J.bumpmap,J.normalmap,J.displacementmap,{opacity:{value:1}}]),vertexShader:q.meshnormal_vert,fragmentShader:q.meshnormal_frag},sprite:{uniforms:bo([J.sprite,J.fog]),vertexShader:q.sprite_vert,fragmentShader:q.sprite_frag},background:{uniforms:{uvTransform:{value:new H},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:q.background_vert,fragmentShader:q.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new H}},vertexShader:q.backgroundCube_vert,fragmentShader:q.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:q.cube_vert,fragmentShader:q.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:q.equirect_vert,fragmentShader:q.equirect_frag},distance:{uniforms:bo([J.common,J.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:q.distance_vert,fragmentShader:q.distance_frag},shadow:{uniforms:bo([J.lights,J.fog,{color:{value:new W(0)},opacity:{value:1}}]),vertexShader:q.shadow_vert,fragmentShader:q.shadow_frag}};Ls.physical={uniforms:bo([Ls.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new H},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new H},clearcoatNormalScale:{value:new B(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new H},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new H},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new H},sheen:{value:0},sheenColor:{value:new W(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new H},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new H},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new H},transmissionSamplerSize:{value:new B},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new H},attenuationDistance:{value:0},attenuationColor:{value:new W(0)},specularColor:{value:new W(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new H},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new H},anisotropyVector:{value:new B},anisotropyMap:{value:null},anisotropyMapTransform:{value:new H}}]),vertexShader:q.meshphysical_vert,fragmentShader:q.meshphysical_frag};var Rs={r:0,b:0,g:0},zs=new jn,Bs=new H;Bs.set(-1,0,0,0,1,0,0,0,1);function Vs(e,t,n,r,i,a){let o=new W(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new K(new Na(1,1,1),new Do({name:`BackgroundCubeMaterial`,uniforms:yo(Ls.backgroundCube.uniforms),vertexShader:Ls.backgroundCube.vertexShader,fragmentShader:Ls.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(zs.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Bs),l.material.toneMapped=hn.getTransfer(i.colorSpace)!==Lt,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new K(new mo(2,2),new Do({name:`BackgroundMaterial`,uniforms:yo(Ls.background.uniforms),vertexShader:Ls.background.vertexShader,fragmentShader:Ls.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=hn.getTransfer(i.colorSpace)!==Lt,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Rs,Co(e)),n.buffers.color.setClear(Rs.r,Rs.g,Rs.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Hs(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Us(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Ws(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(L(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&L(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Gs(e){let t=this,n=null,r=0,i=!1,a=!1,o=new pi,s=new H,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Ks=4,qs=6,Js=20,Ys=256,Xs=new ps,Zs=new W,Qs=null,$s=0,ec=0,tc=!1,nc=new V,rc=new V,ic=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=nc}=i;Qs=this._renderer.getRenderTarget(),$s=this._renderer.getActiveCubeFace(),ec=this._renderer.getActiveMipmapLevel(),tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Qs,$s,ec),this._renderer.xr.enabled=tc,e.scissorTest=!1,sc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qs=this._renderer.getRenderTarget(),$s=this._renderer.getActiveCubeFace(),ec=this._renderer.getActiveMipmapLevel(),tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Se,minFilter:Se,generateMipmaps:!1,type:je,format:I,colorSpace:Ft,depthBuffer:!1},r=oc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=oc(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ac(r)),this._blurMaterial=lc(r,e,t),this._ggxMaterial=cc(r,e,t)}return r}_compileMaterial(e){let t=new K(new oi,e);this._renderer.compile(t,Xs)}_sceneToCubeUV(e,t,n,r,i){let a=new us(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Zs),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new K(new Na,new Li({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Zs),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;sc(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=dc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uc());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;sc(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Xs)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Ks?n-d+Ks:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,sc(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Xs),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,sc(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Xs)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];sc(t,3*l*(r>this._lodMax-Ks?r-this._lodMax+Ks:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,Xs)}};function ac(e){let t=[],n=[],r=e,i=e-Ks+1+qs;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?rc.set(1,r,n):e===1?rc.set(-n,1,-r):e===2?rc.set(-n,r,1):e===3?rc.set(-1,r,-n):e===4?rc.set(-n,-1,r):rc.set(n,r,-1),rc.toArray(l,(e*6+t)*3)}}let u=new oi;u.setAttribute(`position`,new Kr(c,3)),u.setAttribute(`outputDirection`,new Kr(l,3)),n.push(new K(u,null)),r>Ks&&r--}return{lodMeshes:n,sizeLods:t}}function oc(e,t,n){let r=new On(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function sc(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function cc(e,t,n){return new Do({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Ys,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:fc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function lc(e,t,n){return new Do({name:`SphericalGaussianBlur`,defines:{SAMPLES:Js,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:fc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function uc(){return new Do({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function dc(){return new Do({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function fc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var pc=class extends On{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Oa(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Na(5,5,5),i=new Do({name:`CubemapFromEquirect`,uniforms:yo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new K(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=Se),new ys(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function mc(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new pc(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new ic(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new ic(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function hc(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Yt(`WebGLRenderer: `+e+` extension not supported.`),t}}}function gc(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Jr:qr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function _c(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function vc(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:R(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function yc(e,t,n){let r=new WeakMap,i=new En;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new kn(h,p,m,u);g.type=Ae,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new B(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function bc(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var xc={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Sc(e,t,n,r,i,a){let o=new On(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new oi;l.setAttribute(`position`,new G([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new G([0,2,0,0,2,0],2));let u=new Oo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new K(l,u),f=new ps(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new On(t,n,{type:je,depthBuffer:!1,stencilBuffer:!1}),c=new On(t,n,{type:je,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},hn.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=xc[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Cc=new Tn,wc=new Aa(1,1),Tc=new kn,Ec=new An,Dc=new Oa,Oc=[],kc=[],Ac=new Float32Array(16),jc=new Float32Array(9),Mc=new Float32Array(4);function Nc(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Oc[i];if(a===void 0&&(a=new Float32Array(i),Oc[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Pc(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Fc(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Ic(e,t){let n=kc[t];n===void 0&&(n=new Int32Array(t),kc[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Lc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Rc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Pc(n,t))return;e.uniform2fv(this.addr,t),Fc(n,t)}}function zc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Pc(n,t))return;e.uniform3fv(this.addr,t),Fc(n,t)}}function Bc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Pc(n,t))return;e.uniform4fv(this.addr,t),Fc(n,t)}}function Vc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Pc(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Fc(n,t)}else{if(Pc(n,r))return;Mc.set(r),e.uniformMatrix2fv(this.addr,!1,Mc),Fc(n,r)}}function Hc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Pc(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Fc(n,t)}else{if(Pc(n,r))return;jc.set(r),e.uniformMatrix3fv(this.addr,!1,jc),Fc(n,r)}}function Uc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Pc(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Fc(n,t)}else{if(Pc(n,r))return;Ac.set(r),e.uniformMatrix4fv(this.addr,!1,Ac),Fc(n,r)}}function Wc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Gc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Pc(n,t))return;e.uniform2iv(this.addr,t),Fc(n,t)}}function Kc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Pc(n,t))return;e.uniform3iv(this.addr,t),Fc(n,t)}}function qc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Pc(n,t))return;e.uniform4iv(this.addr,t),Fc(n,t)}}function Jc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Yc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Pc(n,t))return;e.uniform2uiv(this.addr,t),Fc(n,t)}}function Xc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Pc(n,t))return;e.uniform3uiv(this.addr,t),Fc(n,t)}}function Zc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Pc(n,t))return;e.uniform4uiv(this.addr,t),Fc(n,t)}}function Qc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(wc.compareFunction=n.isReversedDepthBuffer()?518:515,a=wc):a=Cc,n.setTexture2D(t||a,i)}function $c(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Ec,i)}function el(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Dc,i)}function tl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Tc,i)}function nl(e){switch(e){case 5126:return Lc;case 35664:return Rc;case 35665:return zc;case 35666:return Bc;case 35674:return Vc;case 35675:return Hc;case 35676:return Uc;case 5124:case 35670:return Wc;case 35667:case 35671:return Gc;case 35668:case 35672:return Kc;case 35669:case 35673:return qc;case 5125:return Jc;case 36294:return Yc;case 36295:return Xc;case 36296:return Zc;case 35678:case 36198:case 36298:case 36306:case 35682:return Qc;case 35679:case 36299:case 36307:return $c;case 35680:case 36300:case 36308:case 36293:return el;case 36289:case 36303:case 36311:case 36292:return tl}}function rl(e,t){e.uniform1fv(this.addr,t)}function il(e,t){let n=Nc(t,this.size,2);e.uniform2fv(this.addr,n)}function al(e,t){let n=Nc(t,this.size,3);e.uniform3fv(this.addr,n)}function ol(e,t){let n=Nc(t,this.size,4);e.uniform4fv(this.addr,n)}function sl(e,t){let n=Nc(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function cl(e,t){let n=Nc(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function ll(e,t){let n=Nc(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function ul(e,t){e.uniform1iv(this.addr,t)}function dl(e,t){e.uniform2iv(this.addr,t)}function fl(e,t){e.uniform3iv(this.addr,t)}function pl(e,t){e.uniform4iv(this.addr,t)}function ml(e,t){e.uniform1uiv(this.addr,t)}function hl(e,t){e.uniform2uiv(this.addr,t)}function gl(e,t){e.uniform3uiv(this.addr,t)}function _l(e,t){e.uniform4uiv(this.addr,t)}function vl(e,t,n){let r=this.cache,i=t.length,a=Ic(n,i);Pc(r,a)||(e.uniform1iv(this.addr,a),Fc(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?wc:Cc;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function yl(e,t,n){let r=this.cache,i=t.length,a=Ic(n,i);Pc(r,a)||(e.uniform1iv(this.addr,a),Fc(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Ec,a[e])}function bl(e,t,n){let r=this.cache,i=t.length,a=Ic(n,i);Pc(r,a)||(e.uniform1iv(this.addr,a),Fc(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Dc,a[e])}function xl(e,t,n){let r=this.cache,i=t.length,a=Ic(n,i);Pc(r,a)||(e.uniform1iv(this.addr,a),Fc(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Tc,a[e])}function Sl(e){switch(e){case 5126:return rl;case 35664:return il;case 35665:return al;case 35666:return ol;case 35674:return sl;case 35675:return cl;case 35676:return ll;case 5124:case 35670:return ul;case 35667:case 35671:return dl;case 35668:case 35672:return fl;case 35669:case 35673:return pl;case 5125:return ml;case 36294:return hl;case 36295:return gl;case 36296:return _l;case 35678:case 36198:case 36298:case 36306:case 35682:return vl;case 35679:case 36299:case 36307:return yl;case 35680:case 36300:case 36308:case 36293:return bl;case 36289:case 36303:case 36311:case 36292:return xl}}var Cl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=nl(t.type)}},wl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Sl(t.type)}},Tl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},El=/(\w+)(\])?(\[|\.)?/g;function Dl(e,t){e.seq.push(t),e.map[t.id]=t}function Ol(e,t,n){let r=e.name,i=r.length;for(El.lastIndex=0;;){let a=El.exec(r),o=El.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Dl(n,l===void 0?new Cl(s,e,t):new wl(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Tl(s),Dl(n,e)),n=e}}}var kl=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Ol(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Al(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var jl=37297,Ml=0;function Nl(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Pl=new H;function Fl(e){hn._getMatrix(Pl,hn.workingColorSpace,e);let t=`mat3( ${Pl.elements.map(e=>e.toFixed(4))} )`;switch(hn.getTransfer(e)){case It:return[t,`LinearTransferOETF`];case Lt:return[t,`sRGBTransferOETF`];default:return L(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Il(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Nl(e.getShaderSource(t),r)}return i}function Ll(e,t){let n=Fl(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Rl={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function zl(e,t){let n=Rl[t];return n===void 0?(L(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Bl=new V;function Vl(){return hn.getLuminanceCoefficients(Bl),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Bl.x.toFixed(4)}, ${Bl.y.toFixed(4)}, ${Bl.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Hl(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Gl).join(`
`)}function Ul(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Wl(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Gl(e){return e!==``}function Kl(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ql(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Jl=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yl(e){return e.replace(Jl,Zl)}var Xl=new Map;function Zl(e,t){let n=q[t];if(n===void 0){let e=Xl.get(t);if(e!==void 0)n=q[e],L(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Yl(n)}var Ql=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $l(e){return e.replace(Ql,eu)}function eu(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function tu(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var nu={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function ru(e){return nu[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var iu={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function au(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:iu[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var ou={302:`ENVMAP_MODE_REFRACTION`};function su(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:ou[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var cu={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function lu(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:cu[e.combine]||`ENVMAP_BLENDING_NONE`}function uu(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function du(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=ru(n),l=au(n),u=su(n),d=lu(n),f=uu(n),p=Hl(n),m=Ul(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Gl).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Gl).join(`
`),_.length>0&&(_+=`
`)):(g=[tu(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Gl).join(`
`),_=[tu(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:q.tonemapping_pars_fragment,n.toneMapping===0?``:zl(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,q.colorspace_pars_fragment,Ll(`linearToOutputTexel`,n.outputColorSpace),Vl(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Gl).join(`
`)),o=Yl(o),o=Kl(o,n),o=ql(o,n),s=Yl(s),s=Kl(s,n),s=ql(s,n),o=$l(o),s=$l(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Al(i,i.VERTEX_SHADER,y),S=Al(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Il(i,x,`vertex`),n=Il(i,S,`fragment`);R(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):L(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new kl(i,h),T=Wl(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,jl)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Ml++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var fu=0,pu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new mu(e),t.set(e,n)),n}},mu=class{constructor(e){this.id=fu++,this.code=e,this.usedTimes=0}};function hu(e){return e===1030||e===37490||e===36285}function gu(e,t,n,r,i,a){let o=new Hn,s=new pu,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&L(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=Ls[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),ee=e.state.buffers.depth.getReversed(),M=h.isInstancedMesh===!0,te=h.isBatchedMesh===!0,ne=!!i.map,re=!!i.matcap,ie=!!x,ae=!!i.aoMap,oe=!!i.lightMap,se=!!i.bumpMap&&i.wireframe===!1,ce=!!i.normalMap,le=!!i.displacementMap,ue=!!i.emissiveMap,de=!!i.metalnessMap,fe=!!i.roughnessMap,pe=i.anisotropy>0,me=i.clearcoat>0,he=i.dispersion>0,ge=i.retroreflectivity>0,_e=i.iridescence>0,ve=i.sheen>0,ye=i.transmission>0,be=pe&&!!i.anisotropyMap,xe=me&&!!i.clearcoatMap,Se=me&&!!i.clearcoatNormalMap,Ce=me&&!!i.clearcoatRoughnessMap,we=_e&&!!i.iridescenceMap,Te=_e&&!!i.iridescenceThicknessMap,Ee=ve&&!!i.sheenColorMap,N=ve&&!!i.sheenRoughnessMap,De=!!i.specularMap,Oe=!!i.specularColorMap,ke=!!i.specularIntensityMap,Ae=ye&&!!i.transmissionMap,je=ye&&!!i.thicknessMap,Me=!!i.gradientMap,Ne=!!i.alphaMap,Pe=i.alphaTest>0,Fe=!!i.alphaHash,P=!!i.extensions,Ie=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ie=e.toneMapping);let F={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:te,batchingColor:te&&h._colorsTexture!==null,instancing:M,instancingColor:M&&h.instanceColor!==null,instancingMorph:M&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:hn.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ne,matcap:re,envMap:ie,envMapMode:ie&&x.mapping,envMapCubeUVHeight:S,aoMap:ae,lightMap:oe,bumpMap:se,normalMap:ce,displacementMap:le,emissiveMap:ue,normalMapObjectSpace:ce&&i.normalMapType===1,normalMapTangentSpace:ce&&i.normalMapType===0,packedNormalMap:ce&&i.normalMapType===0&&hu(i.normalMap.format),metalnessMap:de,roughnessMap:fe,anisotropy:pe,anisotropyMap:be,clearcoat:me,clearcoatMap:xe,clearcoatNormalMap:Se,clearcoatRoughnessMap:Ce,dispersion:he,retroreflection:ge,iridescence:_e,iridescenceMap:we,iridescenceThicknessMap:Te,sheen:ve,sheenColorMap:Ee,sheenRoughnessMap:N,specularMap:De,specularColorMap:Oe,specularIntensityMap:ke,transmission:ye,transmissionMap:Ae,thicknessMap:je,gradientMap:Me,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Ne,alphaTest:Pe,alphaHash:Fe,combine:i.combine,mapUv:ne&&m(i.map.channel),aoMapUv:ae&&m(i.aoMap.channel),lightMapUv:oe&&m(i.lightMap.channel),bumpMapUv:se&&m(i.bumpMap.channel),normalMapUv:ce&&m(i.normalMap.channel),displacementMapUv:le&&m(i.displacementMap.channel),emissiveMapUv:ue&&m(i.emissiveMap.channel),metalnessMapUv:de&&m(i.metalnessMap.channel),roughnessMapUv:fe&&m(i.roughnessMap.channel),anisotropyMapUv:be&&m(i.anisotropyMap.channel),clearcoatMapUv:xe&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:Se&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:N&&m(i.sheenRoughnessMap.channel),specularMapUv:De&&m(i.specularMap.channel),specularColorMapUv:Oe&&m(i.specularColorMap.channel),specularIntensityMapUv:ke&&m(i.specularIntensityMap.channel),transmissionMapUv:Ae&&m(i.transmissionMap.channel),thicknessMapUv:je&&m(i.thicknessMap.channel),alphaMapUv:Ne&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(ce||pe),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(ne||Ne),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&ce===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ee,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ie,decodeVideoTexture:ne&&i.map.isVideoTexture===!0&&hn.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ue&&i.emissiveMap.isVideoTexture===!0&&hn.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:P&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(P&&i.extensions.multiDraw===!0||te)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return F.vertexUv1s=c.has(1),F.vertexUv2s=c.has(2),F.vertexUv3s=c.has(3),c.clear(),F}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Ls[t];n=wo.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new du(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function _u(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function vu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function yu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function bu(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||vu),r.length>1&&r.sort(t||yu),i.length>1&&i.sort(t||yu)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function xu(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new bu,e.set(t,[i])):n>=r.length?(i=new bu,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Su(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new V,color:new W};break;case`SpotLight`:n={position:new V,direction:new V,color:new W,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new V,color:new W,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new V,skyColor:new W,groundColor:new W};break;case`RectAreaLight`:n={color:new W,position:new V,halfWidth:new V,halfHeight:new V}}return e[t.id]=n,n}}}function Cu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var wu=0;function Tu(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Eu(e){let t=new Su,n=Cu(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new V);let i=new V,a=new jn,o=new jn;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Tu);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=J.LTC_FLOAT_1,r.rectAreaLTC2=J.LTC_FLOAT_2):(r.rectAreaLTC1=J.LTC_HALF_1,r.rectAreaLTC2=J.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=wu++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Du(e){let t=new Eu(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Ou(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Du(e),t.set(n,[a])):r>=i.length?(a=new Du(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var ku=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Au=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ju=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],Mu=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],Nu=new jn,Pu=new V,Fu=new V;function Iu(e,t,n){let r=new ua,i=new B,a=new B,o=new En,s=new Ao,c=new jo,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new Do({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new B},radius:{value:4}},vertexShader:ku,fragmentShader:Au}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new oi;m.setAttribute(`position`,new Kr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new K(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(L(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){L(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){L(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new On(i.x,i.y,{format:Ve,type:je,minFilter:Se,magFilter:Se,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Aa(i.x,i.y,Ae),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=Le,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=ye,d.map.depthTexture.magFilter=ye}else l.isPointLight?(d.map=new pc(i.x),d.map.depthTexture=new ja(i.x,ke)):(d.map=new On(i.x,i.y),d.map.depthTexture=new Aa(i.x,i.y,ke)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=Le,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=Se,d.map.depthTexture.magFilter=Se):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=ye,d.map.depthTexture.magFilter=ye);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Pu.setFromMatrixPosition(l.matrixWorld),e.position.copy(Pu),Fu.copy(e.position),Fu.add(ju[t]),e.up.copy(Mu[t]),e.lookAt(Fu),e.updateMatrixWorld(),n.makeTranslation(-Pu.x,-Pu.y,-Pu.z),Nu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Nu,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new On(i.x,i.y,{format:Ve,type:je}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Lu(e,t){function n(){let t=!1,n=new En,r=null,i=new En(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?de(e.DEPTH_TEST):fe(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Zt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?de(e.STENCIL_TEST):fe(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new W(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ee=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),M=!1,te=0,ne=e.getParameter(e.VERSION);ne.indexOf(`WebGL`)===-1?ne.indexOf(`OpenGL ES`)!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),M=te>=2):(te=parseFloat(/^WebGL (\d)/.exec(ne)[1]),M=te>=1);let re=null,ie={},ae=e.getParameter(e.SCISSOR_BOX),oe=e.getParameter(e.VIEWPORT),se=new En().fromArray(ae),ce=new En().fromArray(oe);function le(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ue={};ue[e.TEXTURE_2D]=le(e.TEXTURE_2D,e.TEXTURE_2D,1),ue[e.TEXTURE_CUBE_MAP]=le(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[e.TEXTURE_2D_ARRAY]=le(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ue[e.TEXTURE_3D]=le(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),de(e.DEPTH_TEST),o.setFunc(3),be(!1),xe(1),de(e.CULL_FACE),ve(0);function de(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function fe(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function pe(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function me(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function he(t){return h!==t&&(e.useProgram(t),h=t,!0)}let ge={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ge[103]=e.MIN,ge[104]=e.MAX;let _e={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ve(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(fe(e.BLEND),g=!1);else if(g===!1&&(de(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:R(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:R(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:R(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:R(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(ge[n],ge[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(_e[r],_e[i],_e[o],_e[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ye(t,n){t.side===2?fe(e.CULL_FACE):de(e.CULL_FACE);let r=t.side===1;n&&(r=!r),be(r),t.blending===1&&t.transparent===!1?ve(0):ve(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Ce(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?de(e.SAMPLE_ALPHA_TO_COVERAGE):fe(e.SAMPLE_ALPHA_TO_COVERAGE)}function be(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function xe(t){t===0?fe(e.CULL_FACE):(de(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function Se(t){t!==k&&(M&&e.lineWidth(t),k=t)}function Ce(t,n,r){t?(de(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):fe(e.POLYGON_OFFSET_FILL)}function we(t){t?de(e.SCISSOR_TEST):fe(e.SCISSOR_TEST)}function Te(t){t===void 0&&(t=e.TEXTURE0+ee-1),re!==t&&(e.activeTexture(t),re=t)}function Ee(t,n,r){r===void 0&&(r=re===null?e.TEXTURE0+ee-1:re);let i=ie[r];i===void 0&&(i={type:void 0,texture:void 0},ie[r]=i),(i.type!==t||i.texture!==n)&&(re!==r&&(e.activeTexture(r),re=r),e.bindTexture(t,n||ue[t]),i.type=t,i.texture=n)}function N(){let t=ie[re];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function De(){try{e.compressedTexImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Oe(){try{e.compressedTexImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function ke(){try{e.texSubImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ae(){try{e.texSubImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function je(){try{e.compressedTexSubImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Me(){try{e.compressedTexSubImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ne(){try{e.texStorage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Pe(){try{e.texStorage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Fe(){try{e.texImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function P(){try{e.texImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ie(t){return d[t]===void 0?e.getParameter(t):d[t]}function F(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function I(t){se.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),se.copy(t))}function Le(t){ce.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ce.copy(t))}function Re(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function ze(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Be(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},re=null,ie={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new W(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,se.set(0,0,e.canvas.width,e.canvas.height),ce.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:de,disable:fe,bindFramebuffer:pe,drawBuffers:me,useProgram:he,setBlending:ve,setMaterial:ye,setFlipSided:be,setCullFace:xe,setLineWidth:Se,setPolygonOffset:Ce,setScissorTest:we,activeTexture:Te,bindTexture:Ee,unbindTexture:N,compressedTexImage2D:De,compressedTexImage3D:Oe,texImage2D:Fe,texImage3D:P,pixelStorei:F,getParameter:Ie,updateUBOMapping:Re,uniformBlockBinding:ze,texStorage2D:Ne,texStorage3D:Pe,texSubImage2D:ke,texSubImage3D:Ae,compressedTexSubImage2D:je,compressedTexSubImage3D:Me,scissor:I,viewport:Le,reset:Be}}function Ru(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new B,u=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):Wt(`canvas`)}function g(e,t,n){let r=1,i=P(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),L(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&L(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function _(e){return e.generateMipmaps}function v(t){e.generateMipmap(t)}function y(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];L(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||L(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?It:hn.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function x(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,L(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function S(e,t){return _(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),T(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function w(e){let t=e.target;t.removeEventListener(`dispose`,w),D(t)}function T(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&E(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function E(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function D(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let O=0;function k(){O=0}function A(){return O}function j(e){O=e}function ee(){let e=O;return e>=i.maxTextures&&L(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),O+=1,e}function M(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function te(t,i){let a=r.get(t);if(t.isVideoTexture&&Pe(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)L(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)L(`WebGLRenderer: Texture marked for update but image is incomplete`);else{fe(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function ne(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?fe(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function re(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?fe(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function ie(t,i){let a=r.get(t);t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version?pe(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let ae={[ge]:e.REPEAT,[_e]:e.CLAMP_TO_EDGE,[ve]:e.MIRRORED_REPEAT},oe={[ye]:e.NEAREST,[be]:e.NEAREST_MIPMAP_NEAREST,[xe]:e.NEAREST_MIPMAP_LINEAR,[Se]:e.LINEAR,[Ce]:e.LINEAR_MIPMAP_NEAREST,[we]:e.LINEAR_MIPMAP_LINEAR},se={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ce(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&L(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,ae[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,ae[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,ae[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,oe[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,oe[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,se[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function le(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,C));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=M(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&E(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function ue(e,t,n){return Math.floor(Math.floor(e/n)/t)}function de(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=ue(n.start,r.width,4),c=ue(t.start,r.width,4);n.start<=i+1&&a===c&&ue(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function fe(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=le(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=hn.getPrimaries(hn.workingColorSpace),r=o.colorSpace===``?null:hn.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=g(o.image,!1,i.maxTextureSize);t=Fe(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=b(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);ce(c,o);let h,y=o.mipmaps,C=o.isVideoTexture!==!0,w=f.__version===void 0||l===!0,T=u.dataReady,E=S(o,t);if(o.isDepthTexture)m=x(o.format===Re,o.type),w&&(C?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(y.length>0){C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else C?(w&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&de(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){C&&w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,y[0].width,y[0].height,t.depth);for(let i=0,a=y.length;i<a;i++)if(h=y[i],o.format!==1023){if(r!==null){if(C){if(T){if(o.layerUpdates.size>0){let t=Ns(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else C?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],o.format===1023?C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):C?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(C){if(w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=Ns(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)C?(w&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(w){if(C)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(y.length>0){if(C&&w){let t=P(y[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(C){if(w){let r=P(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);_(o)&&v(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function pe(t,o,s){if(o.image.length!==6)return;let c=le(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=hn.getPrimaries(hn.workingColorSpace),r=o.colorSpace===``?null:hn.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=g(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=Fe(o,m[e]);let h=m[0],y=a.convert(o.format,o.colorSpace),x=a.convert(o.type),C=b(o.internalFormat,y,x,o.normalized,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=S(o,h);ce(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,y,x,i.data):y===null?L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=P(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,y,x,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,y,x,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,y,x,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,y,x,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,y,x,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,y,x,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,y,x,i.image[t])}}}_(o)&&v(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function me(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=b(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Ne(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Me(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function he(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=x(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Ne(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Me(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Me(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=b(o.internalFormat,c,l,o.normalized,o.colorSpace);Ne(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Me(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Me(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Te(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,C)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),ce(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else te(i.depthTexture,0);let u=l.__webglTexture,d=Me(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)Ne(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)Ne(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Ee(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)Te(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?Te(i.__webglFramebuffer[0],t,0):Te(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),he(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),he(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function N(t,n,i){let a=r.get(t);n!==void 0&&me(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&Ee(t)}function De(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,w);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&Ne(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=b(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Me(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),he(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),ce(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)me(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else me(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);_(i)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),ce(c,a),me(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),_(a)&&v(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),ce(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)me(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else me(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);_(i)&&v(r),n.unbindTexture()}t.depthBuffer&&Ee(t)}function Oe(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(_(a)){let t=y(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),v(t),n.unbindTexture()}}}let ke=[],Ae=[];function je(t){if(t.samples>0){if(Ne(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(ke.length=0,Ae.length=0,ke.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(ke.push(l),Ae.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ae)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ke))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Me(e){return Math.min(i.maxSamples,e.samples)}function Ne(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function Pe(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function Fe(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(hn.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&L(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):R(`WebGLTextures: Unsupported texture color space:`,n)),t}function P(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=ee,this.resetTextureUnits=k,this.getTextureUnits=A,this.setTextureUnits=j,this.setTexture2D=te,this.setTexture2DArray=ne,this.setTexture3D=re,this.setTextureCube=ie,this.rebindTextures=N,this.setupRenderTarget=De,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Ne,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function zu(e,t){function n(n,r=``){let i,a=hn.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Bu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vu=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Hu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ma(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Do({vertexShader:Bu,fragmentShader:Vu,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new K(new mo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Uu=class extends Qt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new Hu,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new B,C=null,w=null,T=new us;T.viewport=new En;let E=new us;E.viewport=new En;let D=[T,E],O=new bs,k=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new or,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new or,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new or,b[e]=t),t.getHandSpace()};function j(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ee(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,ee),r.removeEventListener(`inputsourceschange`,M);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}k=null,A=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,ce.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&L(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&L(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,ee),r.addEventListener(`inputsourceschange`,M),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?Re:Le,a=_.stencil?Pe:ke);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new On(d.textureWidth,d.textureHeight,{format:I,type:Te,depthTexture:new Aa(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new On(f.framebufferWidth,f.framebufferHeight,{format:I,type:Te,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),ce.setContext(r),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function M(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let te=new V,ne=new V;function re(e,t,n){te.setFromMatrixPosition(t.matrixWorld),ne.setFromMatrixPosition(n.matrixWorld);let r=te.distanceTo(ne),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ie(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(k!==O.near||A!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,A=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;ie(O,i);for(let e=0;e<a.length;e++)ie(a[e],i);a.length===2?re(O,T,E):O.projectionMatrix.copy(T.projectionMatrix),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),ae(e,O,i)};function ae(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=tn*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let oe=null;function se(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new us,o.layers.enable(n),o.viewport=new En,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Ma,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}oe&&oe(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let ce=new Fs;ce.setAnimationLoop(se),this.setAnimationLoop=function(e){oe=e},this.dispose=function(){}}},Wu=new jn,Gu=new H;Gu.set(-1,0,0,0,1,0,0,0,1);function Ku(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Co(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Wu.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Gu),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function qu(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return R(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?L(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):L(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Ju=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Yu=null;function Xu(){return Yu===null&&(Yu=new Zi(Ju,16,16,Ve,je),Yu.name=`DFG_LUT`,Yu.minFilter=Se,Yu.magFilter=Se,Yu.wrapS=_e,Yu.wrapT=_e,Yu.generateMipmaps=!1,Yu.needsUpdate=!0),Yu}var Zu=class{constructor(e={}){let{canvas:t=Gt(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Te}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([Ue,He,Be]),g=new Set([Te,ke,De,Pe,Me,Ne]),_=new Uint32Array(4),v=new Int32Array(4),y=new V,b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,k=null,A=null;this._outputColorSpace=Pt;let j=0,ee=0,M=null,te=-1,ne=null,re=new En,ie=new En,ae=null,oe=new W(0),se=0,ce=t.width,le=t.height,ue=1,de=null,fe=null,pe=new En(0,0,ce,le),me=new En(0,0,ce,le),he=!1,ge=new ua,_e=!1,ve=!1,ye=new jn,be=new V,xe=new En,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ce=!1;function Ee(){return M===null?ue:1}let N=n;function Oe(e,n){return t.getContext(e,n)}let Ae,Fe,P,Ie,F,I,Le,Re,ze,Ve,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,et,tt,nt;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,at,!1),t.addEventListener(`webglcontextrestored`,ot,!1),t.addEventListener(`webglcontextcreationerror`,st,!1),N===null){let t=`webgl2`;if(N=Oe(t,e),N===null)throw Oe(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}rt()}catch(e){throw t.removeEventListener(`webglcontextlost`,at,!1),t.removeEventListener(`webglcontextrestored`,ot,!1),t.removeEventListener(`webglcontextcreationerror`,st,!1),R(`WebGLRenderer: `+e.message),e}function rt(){Ae=new hc(N),Ae.init(),et=new zu(N,Ae),Fe=new Ws(N,Ae,e,et),P=new Lu(N,Ae),Fe.reversedDepthBuffer&&d&&P.buffers.depth.setReversed(!0),O=N.createFramebuffer(),k=N.createFramebuffer(),A=N.createFramebuffer(),Ie=new vc(N),F=new _u,I=new Ru(N,Ae,P,F,Fe,et,Ie),Le=new mc(T),Re=new Is(N),tt=new Hs(N,Re),ze=new gc(N,Re,Ie,tt),Ve=new bc(N,ze,Re,tt,Ie),Ze=new yc(N,Fe,I),Je=new Gs(F),We=new gu(T,Le,Ae,Fe,tt,Je),Ge=new Ku(T,F),Ke=new xu,qe=new Ou(Ae),Xe=new Vs(T,Le,P,Ve,p,s),Ye=new Iu(T,Ve,Fe),nt=new qu(N,Ie,Fe,P),Qe=new Us(N,Ae,Ie),$e=new _c(N,Ae,Ie),Ie.programs=We.programs,T.capabilities=Fe,T.extensions=Ae,T.properties=F,T.renderLists=Ke,T.shadowMap=Ye,T.state=P,T.info=Ie}m!==1009&&(w=new Sc(m,t.width,t.height,o,r,i));let it=new Uu(T,N);this.xr=it,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let e=Ae.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ae.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(e){e!==void 0&&(ue=e,this.setSize(ce,le,!1))},this.getSize=function(e){return e.set(ce,le)},this.setSize=function(e,n,r=!0){it.isPresenting?L(`WebGLRenderer: Can't change size while VR device is presenting.`):(ce=e,le=n,t.width=Math.floor(e*ue),t.height=Math.floor(n*ue),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(ce*ue,le*ue).floor()},this.setDrawingBufferSize=function(e,n,r){ce=e,le=n,ue=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)R(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){L(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(re)},this.getViewport=function(e){return e.copy(pe)},this.setViewport=function(e,t,n,r){e.isVector4?pe.set(e.x,e.y,e.z,e.w):pe.set(e,t,n,r),P.viewport(re.copy(pe).multiplyScalar(ue).round())},this.getScissor=function(e){return e.copy(me)},this.setScissor=function(e,t,n,r){e.isVector4?me.set(e.x,e.y,e.z,e.w):me.set(e,t,n,r),P.scissor(ie.copy(me).multiplyScalar(ue).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(e){P.setScissorTest(he=e)},this.setOpaqueSort=function(e){de=e},this.setTransparentSort=function(e){fe=e},this.getClearColor=function(e){return e.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor(...arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(M!==null){let t=M.texture.format;e=h.has(t)}if(e){let e=M.texture.type,t=g.has(e),n=Xe.getClearColor(),r=Xe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,N.clearBufferuiv(N.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,N.clearBufferiv(N.COLOR,0,v))}else r|=N.COLOR_BUFFER_BIT}t&&(r|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&N.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,at,!1),t.removeEventListener(`webglcontextrestored`,ot,!1),t.removeEventListener(`webglcontextcreationerror`,st,!1),Xe.dispose(),Ke.dispose(),qe.dispose(),F.dispose(),Le.dispose(),Ve.dispose(),tt.dispose(),nt.dispose(),We.dispose(),it.dispose(),it.removeEventListener(`sessionstart`,mt),it.removeEventListener(`sessionend`,ht),gt.stop()};function at(e){e.preventDefault(),qt(`WebGLRenderer: Context Lost.`),E=!0}function ot(){qt(`WebGLRenderer: Context Restored.`),E=!1;let e=Ie.autoReset,t=Ye.enabled,n=Ye.autoUpdate,r=Ye.needsUpdate,i=Ye.type;rt(),Ie.autoReset=e,Ye.enabled=t,Ye.autoUpdate=n,Ye.needsUpdate=r,Ye.type=i}function st(e){R(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ct(e){let t=e.target;t.removeEventListener(`dispose`,ct),lt(t)}function lt(e){ut(e),F.remove(e)}function ut(e){let t=F.get(e).programs;t!==void 0&&(t.forEach(function(e){We.releaseProgram(e)}),e.isShaderMaterial&&We.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Se);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Et(e,t,n,r,i);P.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=ze.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;tt.setup(i,r,s,n,c);let h,g=Qe;if(c!==null&&(h=Re.get(c),g=$e,g.setIndex(h)),i.isMesh)r.wireframe===!0?(P.setLineWidth(r.wireframeLinewidth*Ee()),g.setMode(N.LINES)):g.setMode(N.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),P.setLineWidth(e*Ee()),i.isLineSegments?g.setMode(N.LINES):i.isLineLoop?g.setMode(N.LINE_LOOP):g.setMode(N.LINE_STRIP)}else i.isPoints?g.setMode(N.POINTS):i.isSprite&&g.setMode(N.TRIANGLES);if(i.isBatchedMesh){if(Ae.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Re.get(c).bytesPerElement:1,o=F.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(N,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function dt(e,t,n,r){D!==null&&e.isNodeMaterial&&D.setObject(r,e),_e===!0&&Je.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,St(e,t,r),e.side=0,e.needsUpdate=!0,St(e,t,r),e.side=2):St(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),D!==null&&D.renderStart(e,t,n),x=qe.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),ve=this.localClippingEnabled,_e=Je.init(this.clippingPlanes,ve),_e===!0&&Je.setGlobalState(this.clippingPlanes,t),D!==null&&Ye.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];dt(o,n,t,e),r.add(o)}else dt(i,n,t,e),r.add(i)}}),x=C.pop(),D!==null&&D.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=F.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Ae.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let ft=null;function pt(e){ft&&ft(e)}function mt(){gt.stop()}function ht(){gt.start()}let gt=new Fs;gt.setAnimationLoop(pt),typeof self<`u`&&gt.setContext(self),this.setAnimationLoop=function(e){ft=e,it.setAnimationLoop(e),e===null?gt.stop():gt.start()},it.addEventListener(`sessionstart`,mt),it.addEventListener(`sessionend`,ht),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){R(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=it.enabled===!0&&it.isPresenting===!0,r=w!==null&&(M===null||n)&&w.begin(T,M);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(it.cameraAutoUpdate===!0&&it.updateCamera(t),t=it.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,M),x=qe.get(e,C.length),x.init(t),x.state.textureUnits=I.getTextureUnits(),C.push(x),ye.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),ge.setFromProjectionMatrix(ye,Vt,t.reversedDepth),ve=this.localClippingEnabled,_e=Je.init(this.clippingPlanes,ve),b=Ke.get(e,S.length),b.init(),S.push(b),it.enabled===!0&&it.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&_t(e,t,-1/0,T.sortObjects)}_t(e,t,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(de,fe),Ce=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,Ce&&Xe.addToRenderList(b,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),_e===!0&&Je.beginShadows();let i=x.state.shadowsArray;if(Ye.render(i,e,t),_e===!0&&Je.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];yt(n,r,e,a)}Ce&&Xe.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];vt(b,e,n,n.viewport)}}else r.length>0&&yt(n,r,e,t),Ce&&Xe.render(e),vt(b,e,t)}M!==null&&ee===0&&(I.updateMultisampleRenderTarget(M),I.updateRenderTargetMipmap(M)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),tt.resetDefaultState(),te=-1,ne=null,C.pop(),C.length>0?(x=C[C.length-1],I.setTextureUnits(x.state.textureUnits),_e===!0&&Je.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function _t(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)x.pushLightProbeGrid(e);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(ge)){r&&xe.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ye);let i=Ve.update(e),a=e.material;a.visible&&b.push(e,i,a,n,xe.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(ge))){let i=Ve.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),xe.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),xe.copy(e.boundingSphere.center)),xe.applyMatrix4(e.matrixWorld).applyMatrix4(ye)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,xe.z,s,t)}}else a.visible&&b.push(e,i,a,n,xe.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)_t(i[e],t,n,r)}function vt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),_e===!0&&Je.setGlobalState(T.clippingPlanes,n),r&&P.viewport(re.copy(r)),i.length>0&&bt(i,t,n),a.length>0&&bt(a,t,n),o.length>0&&bt(o,t,n),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function yt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=Ae.has(`EXT_color_buffer_half_float`)||Ae.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new On(1,1,{generateMipmaps:!0,type:e?je:Te,minFilter:we,samples:Math.max(4,Fe.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:hn.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||re;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(oe),se=T.getClearAlpha(),se<1&&T.setClearColor(16777215,.5),T.clear(),Ce&&Xe.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),_e===!0&&Je.setGlobalState(T.clippingPlanes,r),bt(e,n,r),I.updateMultisampleRenderTarget(a),I.updateRenderTargetMipmap(a),Ae.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,xt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(I.updateMultisampleRenderTarget(a),I.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(oe,se),d!==void 0&&(r.viewport=d),T.toneMapping=u}function bt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&xt(o,t,n,s,l,c)}}function xt(e,t,n,r,i,a){D!==null&&i.isNodeMaterial&&D.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function St(e,t,n){t.isScene!==!0&&(t=Se);let r=F.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=We.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=We.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Le.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ct),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return wt(e,s),d}else s.uniforms=We.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=We.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Je.uniform),wt(e,s),r.needsLights=Ot(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=x.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Ct(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=kl.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function wt(e,t){let n=F.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Tt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];y.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(y))return n}return null}function Et(e,t,n,r,i){t.isScene!==!0&&(t=Se),I.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=M===null?T.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:hn.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Le.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=F.get(r),y=x.state.lights;if(_e===!0&&(ve===!0||e!==ne)){let t=e===ne&&r.id===te;Je.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Je.numPlanes||v.numIntersection!==Je.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=x.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;b===!0&&(S=St(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,S,v));let C=!1,w=!1,E=!1,O=S.getUniforms(),k=v.uniforms;if(P.useProgram(S.program)&&(C=!0,w=!0,E=!0),r.id!==te&&(te=r.id,w=!0),v.needsLights){let e=Tt(x.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(C||ne!==e){P.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),O.setValue(N,`projectionMatrix`,e.projectionMatrix),O.setValue(N,`viewMatrix`,e.matrixWorldInverse);let t=O.map.cameraPosition;t!==void 0&&t.setValue(N,be.setFromMatrixPosition(e.matrixWorld)),Fe.logarithmicDepthBuffer&&O.setValue(N,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&O.setValue(N,`isOrthographic`,e.isOrthographicCamera===!0),ne!==e&&(ne=e,w=!0,E=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&O.setValue(N,`sunShadowMap`,y.state.sunShadowMap,I),y.state.directionalShadowMap.length>0&&O.setValue(N,`directionalShadowMap`,y.state.directionalShadowMap,I),y.state.spotShadowMap.length>0&&O.setValue(N,`spotShadowMap`,y.state.spotShadowMap,I),y.state.pointShadowMap.length>0&&O.setValue(N,`pointShadowMap`,y.state.pointShadowMap,I)),i.isSkinnedMesh){O.setOptional(N,i,`bindMatrix`),O.setOptional(N,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),O.setValue(N,`boneTexture`,e.boneTexture,I))}i.isBatchedMesh&&(O.setOptional(N,i,`batchingTexture`),O.setValue(N,`batchingTexture`,i._matricesTexture,I),O.setOptional(N,i,`batchingIdTexture`),O.setValue(N,`batchingIdTexture`,i._indirectTexture,I),O.setOptional(N,i,`batchingColorTexture`),i._colorsTexture!==null&&O.setValue(N,`batchingColorTexture`,i._colorsTexture,I));let A=n.morphAttributes;if((A.position!==void 0||A.normal!==void 0||A.color!==void 0)&&Ze.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,O.setValue(N,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(k.envMapIntensity.value=t.environmentIntensity),k.dfgLUT!==void 0&&(k.dfgLUT.value=Xu()),w){if(O.setValue(N,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&Dt(k,E),a&&r.fog===!0&&Ge.refreshFogUniforms(k,a),Ge.refreshMaterialUniforms(k,r,ue,le,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;k.probesSH.value=e.texture,k.probesMin.value.copy(e.boundingBox.min),k.probesMax.value.copy(e.boundingBox.max),k.probesResolution.value.copy(e.resolution)}kl.upload(N,Ct(v),k,I)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(kl.upload(N,Ct(v),k,I),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&O.setValue(N,`center`,i.center),O.setValue(N,`modelViewMatrix`,i.modelViewMatrix),O.setValue(N,`normalMatrix`,i.normalMatrix),O.setValue(N,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];nt.update(n,S),nt.bind(n,S)}}return S}function Dt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Ot(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(e,t,n){let r=F.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),F.get(e.texture).__webglTexture=t,F.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=F.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){M=e,j=t,ee=n;let r=null,i=!1,a=!1;if(e){let o=F.get(e);if(o.__useDefaultFramebuffer!==void 0){P.bindFramebuffer(N.FRAMEBUFFER,o.__webglFramebuffer),re.copy(e.viewport),ie.copy(e.scissor),ae=e.scissorTest,P.viewport(re),P.scissor(ie),P.setScissorTest(ae),te=-1;return}if(o.__webglFramebuffer===void 0)I.setupRenderTarget(e);else if(o.__hasExternalTextures)I.rebindTextures(e,F.get(e.texture).__webglTexture,F.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&F.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);I.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=F.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&I.useMultisampledRTT(e)===!1?F.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,re.copy(e.viewport),ie.copy(e.scissor),ae=e.scissorTest}else re.copy(pe).multiplyScalar(ue).floor(),ie.copy(me).multiplyScalar(ue).floor(),ae=he;if(n!==0&&(r=O),P.bindFramebuffer(N.FRAMEBUFFER,r)&&P.drawBuffers(e,r),P.viewport(re),P.scissor(ie),P.setScissorTest(ae),i){let r=F.get(e.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=F.get(e.textures[t]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=F.get(e.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,t.__webglTexture,n)}te=-1};function kt(e){let t=F.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Fe.textureFormatReadable(e.format),t.__typeReadable=Fe.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=F.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){P.bindFramebuffer(N.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+s);let u=kt(o);if(u.__formatReadable===!1){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&N.readPixels(t,n,r,i,et.convert(c),et.convert(l),a)}finally{let e=M===null?null:F.get(M).__webglFramebuffer;P.bindFramebuffer(N.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=F.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){P.bindFramebuffer(N.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+s);let d=kt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,f),N.bufferData(N.PIXEL_PACK_BUFFER,a.byteLength,N.STREAM_READ),N.readPixels(t,n,r,i,et.convert(l),et.convert(u),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let p=M===null?null:F.get(M).__webglFramebuffer;P.bindFramebuffer(N.FRAMEBUFFER,p);let m=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Xt(N,m,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,f),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,a),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(f),N.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;I.setTexture2D(e,0),N.copyTexSubImage2D(N.TEXTURE_2D,n,0,0,o,s,i,a),P.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=et.convert(t.format),_=et.convert(t.type),v;t.isData3DTexture?(I.setTexture3D(t,0),v=N.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(I.setTexture2DArray(t,0),v=N.TEXTURE_2D_ARRAY):(I.setTexture2D(t,0),v=N.TEXTURE_2D),P.activeTexture(N.TEXTURE0),P.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,t.flipY),P.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),P.pixelStorei(N.UNPACK_ALIGNMENT,t.unpackAlignment);let y=P.getParameter(N.UNPACK_ROW_LENGTH),b=P.getParameter(N.UNPACK_IMAGE_HEIGHT),x=P.getParameter(N.UNPACK_SKIP_PIXELS),S=P.getParameter(N.UNPACK_SKIP_ROWS),C=P.getParameter(N.UNPACK_SKIP_IMAGES);P.pixelStorei(N.UNPACK_ROW_LENGTH,h.width),P.pixelStorei(N.UNPACK_IMAGE_HEIGHT,h.height),P.pixelStorei(N.UNPACK_SKIP_PIXELS,l),P.pixelStorei(N.UNPACK_SKIP_ROWS,u),P.pixelStorei(N.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=F.get(e),r=F.get(t),h=F.get(n.__renderTarget),g=F.get(r.__renderTarget);P.bindFramebuffer(N.READ_FRAMEBUFFER,h.__webglFramebuffer),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,F.get(e).__webglTexture,i,d+n),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,F.get(t).__webglTexture,a,m+n)),N.blitFramebuffer(l,u,o,s,f,p,o,s,N.DEPTH_BUFFER_BIT,N.NEAREST);P.bindFramebuffer(N.READ_FRAMEBUFFER,null),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||F.has(e)){let n=F.get(e),r=F.get(t);P.bindFramebuffer(N.READ_FRAMEBUFFER,k),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,A);for(let e=0;e<c;e++)w?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,n.__webglTexture,i),T?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,r.__webglTexture,a),i===0?T?N.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):N.copyTexSubImage2D(v,a,f,p,l,u,o,s):N.blitFramebuffer(l,u,o,s,f,p,o,s,N.COLOR_BUFFER_BIT,N.NEAREST);P.bindFramebuffer(N.READ_FRAMEBUFFER,null),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?N.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?N.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):N.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):N.texSubImage2D(N.TEXTURE_2D,a,f,p,o,s,g,_,h);P.pixelStorei(N.UNPACK_ROW_LENGTH,y),P.pixelStorei(N.UNPACK_IMAGE_HEIGHT,b),P.pixelStorei(N.UNPACK_SKIP_PIXELS,x),P.pixelStorei(N.UNPACK_SKIP_ROWS,S),P.pixelStorei(N.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&N.generateMipmap(v),P.unbindTexture()},this.initRenderTarget=function(e){F.get(e).__webglFramebuffer===void 0&&I.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?I.setTextureCube(e,0):e.isData3DTexture?I.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?I.setTexture2DArray(e,0):I.setTexture2D(e,0),P.unbindTexture()},this.resetState=function(){j=0,ee=0,M=null,P.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Vt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=hn._getDrawingBufferColorSpace(e),t.unpackColorSpace=hn._getUnpackColorSpace()}},Y=(e,t,n,r,i,a,o)=>({dmg:e,cd:t,count:n,pierce:r,area:i,speed:a,note:o}),Qu={wick:{id:`wick`,name:`Wickshot`,icon:`✶`,color:`#ffd27a`,range:15,knock:1.2,blurb:`Rapid ember bolts at the nearest Hollow.`,evolvesWith:`lens`,evolvesInto:`comets`,levels:[Y(10,.4,1,0,1,26,`Ember bolts at the nearest foe`),Y(11,.38,1,1,1,27,`+Damage, bolts pierce 1`),Y(12,.34,2,1,1,28,`+1 bolt`),Y(15,.3,2,2,1,30,`+Damage, faster, pierce 2`),Y(18,.26,3,2,1,32,`+1 bolt, faster`)]},flare:{id:`flare`,name:`Flarecaster`,icon:`✺`,color:`#ff9a52`,range:9,knock:5.5,blurb:`Close-range spray with heavy knockback — shove foes off ledges.`,evolvesWith:`bellows`,evolvesInto:`dragon`,levels:[Y(8,1.25,5,0,1,20,`Spray of 5 sparks, big knockback`),Y(9,1.15,6,0,1,21,`+1 spark, faster`),Y(11,1.05,7,1,1,22,`+1 spark, pierce 1`),Y(13,.95,8,1,1,22,`+Damage, faster`),Y(16,.85,10,2,1,24,`+2 sparks, pierce 2`)]},arc:{id:`arc`,name:`Arc Lantern`,icon:`ϟ`,color:`#8fd8ff`,range:12,knock:.6,blurb:`Lightning that leaps between nearby foes.`,evolvesWith:`prism`,evolvesInto:`storm`,levels:[Y(14,1.5,3,0,1,0,`Chains through 3 foes`),Y(16,1.4,4,0,1,0,`+1 chain`),Y(19,1.25,5,0,1,0,`+1 chain, faster`),Y(22,1.15,6,0,1,0,`+1 chain, +damage`),Y(26,1,8,0,1,0,`+2 chains, faster`)]},mortar:{id:`mortar`,name:`Cinder Mortar`,icon:`☄`,color:`#ff7a3d`,range:16,knock:3,blurb:`Lobs shells into the thickest crowd. Big blasts.`,evolvesWith:`flask`,evolvesInto:`starfall`,levels:[Y(26,2.4,1,0,2.6,0,`Explosive shell at the densest crowd`),Y(30,2.2,1,0,3,0,`+Blast radius`),Y(34,2,2,0,3,0,`+1 shell`),Y(40,1.8,2,0,3.4,0,`+Damage, +radius`),Y(48,1.6,3,0,3.6,0,`+1 shell, faster`)]},halo:{id:`halo`,name:`Halo Embers`,icon:`◎`,color:`#ffb64a`,range:3,knock:2.5,blurb:`Embers orbit you, scorching anything they touch.`,evolvesWith:`hearthstone`,evolvesInto:`hearthwheel`,levels:[Y(8,.45,2,0,2.6,3.2,`2 orbiting embers`),Y(10,.42,3,0,2.8,3.4,`+1 ember`),Y(12,.4,3,0,3.2,3.8,`+Reach, faster spin`),Y(14,.38,4,0,3.4,4,`+1 ember`),Y(17,.34,5,0,3.6,4.4,`+1 ember, +damage`)]},lance:{id:`lance`,name:`Sunlance`,icon:`⟋`,color:`#fff3c4`,range:18,knock:2,blurb:`A piercing beam of light through every foe in a line.`,evolvesWith:`whetstone`,evolvesInto:`dawn`,levels:[Y(22,2.2,1,99,.5,0,`Piercing beam`),Y(27,2,1,99,.6,0,`+Damage, wider`),Y(32,1.8,2,99,.6,0,`+1 beam`),Y(38,1.6,2,99,.75,0,`+Damage, wider`),Y(46,1.4,3,99,.8,0,`+1 beam, faster`)]},firefly:{id:`firefly`,name:`Firefly Jar`,icon:`❋`,color:`#c8ff7a`,range:16,knock:1,blurb:`Homing fireflies that hunt foes on their own.`,evolvesWith:`lodestone`,evolvesInto:`swarm`,levels:[Y(10,1.3,2,0,1,11,`2 homing fireflies`),Y(12,1.2,3,0,1,12,`+1 firefly`),Y(14,1.1,3,1,1,13,`Fireflies pierce 1`),Y(16,1,4,1,1,14,`+1 firefly`),Y(19,.9,5,2,1,15,`+1 firefly, pierce 2`)]},comets:{id:`comets`,name:`Twin Comets`,icon:`☀`,color:`#ffe066`,range:17,knock:1.6,evolved:!0,blurb:`Twin barrels; critical hits burst into sparks.`,levels:[Y(24,.2,4,3,1.6,36,`Crits explode`)]},dragon:{id:`dragon`,name:`Dragon's Breath`,icon:`♨`,color:`#ff6a2a`,range:10,knock:6.5,evolved:!0,blurb:`A roaring cone of fire that sets foes alight.`,levels:[Y(14,.42,9,3,1.2,22,`Burns, huge knockback`)]},storm:{id:`storm`,name:`Stormcrown`,icon:`⚡`,color:`#b4e8ff`,range:15,knock:.8,evolved:!0,blurb:`Forking lightning that strikes twice.`,levels:[Y(30,.75,12,0,1,0,`Forks, strikes twice`)]},starfall:{id:`starfall`,name:`Starfall`,icon:`✸`,color:`#ff9e5e`,range:18,knock:4,evolved:!0,blurb:`A barrage of meteors across the crowd.`,levels:[Y(56,1.4,6,0,4.2,0,`Meteor barrage`)]},hearthwheel:{id:`hearthwheel`,name:`Hearthwheel`,icon:`❂`,color:`#ff9a3a`,range:4,knock:3.5,evolved:!0,blurb:`A blazing wheel; every kill warms you back to health.`,levels:[Y(24,.28,7,0,4.2,5.2,`Heals on kill`)]},dawn:{id:`dawn`,name:`Dawnbreaker`,icon:`☼`,color:`#fffbe0`,range:22,knock:3,evolved:!0,blurb:`Sweeping beams of morning light.`,levels:[Y(64,1.15,4,99,1.2,0,`Sweeping beams`)]},swarm:{id:`swarm`,name:`Lantern Swarm`,icon:`✺`,color:`#e0ff9a`,range:18,knock:1.2,evolved:!0,blurb:`A cloud of fireflies that also ferries embers to you.`,levels:[Y(22,.6,7,3,1,17,`Collects embers`)]}},$u=[`wick`,`flare`,`arc`,`mortar`,`halo`,`lance`,`firefly`],ed={bellows:{id:`bellows`,name:`Bellows`,icon:`≋`,max:5,blurb:`Fan the flames.`,per:`−8% weapon cooldowns`},lens:{id:`lens`,name:`Ground Lens`,icon:`◉`,max:5,blurb:`Focus every strike.`,per:`+6% crit chance, +15% crit damage`},whetstone:{id:`whetstone`,name:`Whetstone`,icon:`◆`,max:5,blurb:`Sharper edges.`,per:`+10% damage`},boots:{id:`boots`,name:`Wind Boots`,icon:`➶`,max:5,blurb:`Lighter feet.`,per:`+7% move speed, higher jumps`},lodestone:{id:`lodestone`,name:`Lodestone`,icon:`⊛`,max:5,blurb:`Embers come to you.`,per:`+30% pickup reach`},hearthstone:{id:`hearthstone`,name:`Hearthstone`,icon:`♥`,max:5,blurb:`A warm core.`,per:`+20 max health, +0.4 regen/s`},prism:{id:`prism`,name:`Prism Shard`,icon:`◇`,max:3,blurb:`Split the light.`,per:`+1 projectile / chain`},flask:{id:`flask`,name:`Oil Flask`,icon:`⚱`,max:5,blurb:`Bigger burns.`,per:`+12% area & blast size`}},td=Object.keys(ed),nd={skystep:{id:`skystep`,name:`Skystep Soles`,icon:`⇈`,blurb:`Double jump. Reach ledges and dodge shockwaves with ease.`},quake:{id:`quake`,name:`Quake Spurs`,icon:`⊚`,blurb:`Landing from a jump blasts nearby foes. Higher falls hit harder.`},phoenix:{id:`phoenix`,name:`Phoenix Wick`,icon:`♆`,blurb:`Once per run, rekindle at half health instead of falling.`},gilded:{id:`gilded`,name:`Gilded Lens`,icon:`✧`,blurb:`+10% crit chance. Crits deal +50% more damage.`},bell:{id:`bell`,name:`Gatherer’s Bell`,icon:`♫`,blurb:`Every 15s, all embers on the isles fly to you.`},reel:{id:`reel`,name:`Zip Reel`,icon:`⥂`,blurb:`Dash recharges 40% faster. On ziplines you fire twice as fast and take no damage.`}},rd=Object.keys(nd),id={murk:{kind:`murk`,name:`Murkling`,hp:11,speed:3.3,dmg:5,radius:.45,xp:1,mass:1,flyer:!1,climb:.45,height:.9},moth:{kind:`moth`,name:`Dusk Moth`,hp:8,speed:4.3,dmg:5,radius:.45,xp:1,mass:.7,flyer:!0,climb:1,height:.8},skitter:{kind:`skitter`,name:`Skitter`,hp:15,speed:4.5,dmg:5,radius:.5,xp:2,mass:.9,flyer:!1,climb:1.4,height:.7},husk:{kind:`husk`,name:`Husk`,hp:55,speed:2.25,dmg:8,radius:.75,xp:5,mass:3.2,flyer:!1,climb:.3,height:1.9},spitter:{kind:`spitter`,name:`Spitter`,hp:24,speed:2.6,dmg:10,radius:.55,xp:3,mass:1.4,flyer:!1,climb:.5,height:1.3}},ad=Object.keys(id);function od(e){return Math.round(5+e*4+e**1.7*1.1)}function sd(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new oi,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=cd(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=cd(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function cd(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new Kr(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}var ld=class{parts=[];add(e,t,n={}){let r=e.index?e.toNonIndexed():e.clone();r.deleteAttribute(`uv`);let i=new jn,a=new cn().setFromEuler(new Vn(...n.rot??[0,0,0])),o=typeof n.scale==`number`?[n.scale,n.scale,n.scale]:n.scale??[1,1,1];i.compose(new V(...n.pos??[0,0,0]),a,new V(o[0],o[1],o[2])),r.applyMatrix4(i);let s=r.attributes.position.count,c=new W(t),l=new Float32Array(s*3),u=new Float32Array(s).fill(n.glow??0);for(let e=0;e<s;e++)l[e*3]=c.r,l[e*3+1]=c.g,l[e*3+2]=c.b;return r.setAttribute(`color`,new Kr(l,3)),r.setAttribute(`aGlow`,new Kr(u,1)),this.parts.push(r),e.dispose(),this}build(){let e=sd(this.parts,!1);for(let e of this.parts)e.dispose();return this.parts=[],e.computeVertexNormals(),e.computeBoundingSphere(),e}},X=(e,t,n)=>new Na(e,t,n),Z=(e,t=1)=>new fo(e,t),Q=(e,t,n,r=7)=>new Fa(e,t,n,r),ud=(e,t,n=6)=>new Ia(e,t,n),dd={time:{value:0}};function fd(e,t){let n={value:0};return e.userData.uFlash=n,e.onBeforeCompile=e=>{e.uniforms.uFlash=n,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
        ${t.glow?`attribute float aGlow;`:``}
        ${t.flash?`attribute float aFlash;`:``}
        varying float vGlow;
        varying float vFlash;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
        vGlow = ${t.glow?`aGlow`:`0.0`};
        vFlash = ${t.flash?`aFlash`:`0.0`};`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
        varying float vGlow;
        varying float vFlash;
        uniform float uFlash;`).replace(`#include <opaque_fragment>`,`outgoingLight = mix(outgoingLight, diffuseColor.rgb * 1.35, vGlow);
        outgoingLight = mix(outgoingLight, vec3(1.0, 0.97, 0.9), clamp(vFlash + uFlash, 0.0, 1.0));
        #include <opaque_fragment>`)},e.customProgramCacheKey=()=>`lam-${+!!t.flash}${+!!t.glow}`,e}function pd(){return fd(new ko({vertexColors:!0}),{flash:!0,glow:!0})}function md(){return fd(new ko({vertexColors:!0}),{glow:!0})}function hd(e,t=1){return new Li({color:e,transparent:!0,opacity:t,blending:2,depthWrite:!1,fog:!1})}var gd=null;function _d(){if(gd)return gd;let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(32,32,0,32,32,32);return n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.35,`rgba(255,255,255,0.55)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64),gd=new ka(e),gd}function vd(e){e.traverse(e=>{let t=e;t.geometry&&!(e instanceof Ai)&&t.geometry.dispose();let n=t.material;Array.isArray(n)?n.forEach(e=>e.dispose()):n&&n.dispose()})}var yd=Math.PI*2;function bd(e,t,n){return e<t?t:e>n?n:e}function xd(e,t,n){return e+(t-e)*n}function Sd(e,t){return 1-Math.exp(-e*t)}function Cd(e){for(;e>Math.PI;)e-=yd;for(;e<-Math.PI;)e+=yd;return e}var wd=class{s;constructor(e=1){this.s=e>>>0||1}next(){let e=this.s+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}range(e,t){return e+(t-e)*this.next()}int(e,t){return Math.floor(this.range(e,t+1))}pick(e){return e[Math.floor(this.next()*e.length)]}chance(e){return this.next()<e}};function Td(e,t){let n=(e|0)*374761393+(t|0)*668265263;return n=(n^n>>>13)*1274126177,n^=n>>>16,(n>>>0)/4294967295}function Ed(e,t){let n=Math.floor(e),r=Math.floor(t),i=e-n,a=t-r,o=i*i*(3-2*i),s=a*a*(3-2*a),c=Td(n,r),l=Td(n+1,r),u=Td(n,r+1),d=Td(n+1,r+1);return xd(xd(c,l,o),xd(u,d,o),s)}function Dd(e,t,n=3){let r=.5,i=1,a=0,o=0;for(let s=0;s<n;s++)a+=Ed(e*i,t*i)*r,o+=r,r*=.5,i*=2;return a/o}function Od(e,t,n,r,i,a,o,s,c,l){let u=o-r,d=s-i,f=c-a,p=e-r,m=t-i,h=n-a,g=u*u+d*d+f*f,_=g>0?(p*u+m*d+h*f)/g:0;_=bd(_,0,1),l&&(l.t=_);let v=r+u*_-e,y=i+d*_-t,b=a+f*_-n;return Math.sqrt(v*v+y*y+b*b)}var kd=Object.freeze({cx:0,cz:0,floorY:0,roomR:11,floorR:13.5,rimH:2.2,spawn:Object.freeze({x:0,z:5}),bossSpawn:Object.freeze({x:0,z:-5})});function Ad(e,t,n,r){let i=t-e.cx,a=n-e.cz,o=Math.hypot(i,a),s=e.roomR-r;return o<=s?null:{x:e.cx+i*s/(o||1),z:e.cz+a*s/(o||1)}}function jd(e,t,n,r,i=kd.roomR){let a=e-kd.cx,o=t-kd.cz,s=a*n+o*r;return Math.max(0,-s+Math.sqrt(Math.max(0,s*s+i*i-a*a-o*o)))}var Md=56*Math.PI/180,Nd=.86,Pd=.8,Fd=Object.freeze(Array.from({length:64},(e,t)=>{let n=t*Math.PI/32;return[0,1.35,4.5].map(e=>({x:Math.sin(n)*(e===4.5?kd.roomR:kd.roomR+.6),y:e,z:Math.cos(n)*(e===4.5?kd.roomR:kd.roomR+.6)}))}).flat()),Id=new DataView(new ArrayBuffer(8));function Ld(e){return Id.setFloat64(0,e),Id.setBigUint64(0,Id.getBigUint64(0)+1n),Id.getFloat64(0)}function Rd(e,t){let n=Math.tan(e*Math.PI/360),r=Math.sin(Md),i=Math.cos(Md);return Ld(Math.max(...Fd.map(e=>{let a=e.y-.8;return a*r+e.z*i+Math.max(Math.abs(e.x)/(Nd*n*t),Math.abs(a*i-e.z*r)/(Pd*n),.5)})))}var zd=-1e3,Bd=function(e){return e[e.Void=0]=`Void`,e[e.Grass=1]=`Grass`,e[e.Stone=2]=`Stone`,e[e.Sand=3]=`Sand`,e[e.Wood=4]=`Wood`,e[e.Crumble=5]=`Crumble`,e[e.Vent=6]=`Vent`,e[e.Moss=7]=`Moss`,e}({}),Vd=function(e){return e[e.Solid=0]=`Solid`,e[e.Cracking=1]=`Cracking`,e[e.Fallen=2]=`Fallen`,e[e.Rising=3]=`Rising`,e}({}),Hd=class{finalDomain=null;setFinalDomain(e){this.finalDomain=e,this.dirty=!0}h=new Float32Array(14400).fill(zd);tile=new Uint8Array(14400);breakable=new Uint8Array(14400);island=new Uint8Array(14400);state=new Uint8Array(14400);timer=new Float32Array(14400);drop=new Float32Array(14400);shake=new Float32Array(14400);heat=new Float32Array(14400);dirty=!0;active=new Set;ziplines=[];rafts=[];vents=[];landmarks=[];lanterns=[];shrine={x:0,y:0,z:0};spawnPoint={x:0,y:0,z:6};crownSeat={x:0,y:0,z:-7.5};time=0;constructor(){Xd(this)}idx(e,t){return t*120+e}cellOf(e){return Math.floor(e+60)}inBounds(e,t){return e>=0&&t>=0&&e<120&&t<120}cellHeight(e,t){if(this.finalDomain){let n=this.finalDomain;return this.inBounds(e,t)&&Math.hypot(e-60+.5-n.cx,t-60+.5-n.cz)<=n.floorR?n.floorY:zd}if(e<0||t<0||e>=120||t>=120)return zd;let n=t*120+e,r=this.state[n];return r===2||r===3&&this.drop[n]>.02?zd:this.h[n]}heightAt(e,t){return this.cellHeight(Math.floor(e+60),Math.floor(t+60))}tileAt(e,t){if(this.finalDomain)return this.heightAt(e,t)>-999?2:0;let n=Math.floor(e+60),r=Math.floor(t+60);return this.inBounds(n,r)?this.tile[this.idx(n,r)]:0}isWalkable(e,t){return this.cellHeight(e,t)>-999}supportAt(e,t,n,r){let i=zd,a=Math.floor(e-n+60),o=Math.floor(e+n+60),s=Math.floor(t-n+60),c=Math.floor(t+n+60);for(let e=s;e<=c;e++)for(let t=a;t<=o;t++){let n=this.cellHeight(t,e);n<=r&&n>i&&(i=n)}for(let a of this.finalDomain?[]:this.rafts)Math.abs(e-a.x)<a.half+n&&Math.abs(t-a.z)<a.half+n&&a.y<=r+.05&&a.y>i&&(i=a.y);return i}maxHeightIn(e,t,n){let r=zd,i=Math.floor(e-n+60),a=Math.floor(e+n+60),o=Math.floor(t-n+60),s=Math.floor(t+n+60);for(let e=o;e<=s;e++)for(let t=i;t<=a;t++){let n=this.cellHeight(t,e);n>r&&(r=n)}return r}raftUnder(e,t,n,r){for(let i of this.finalDomain?[]:this.rafts)if(Math.abs(e-i.x)<i.half+r&&Math.abs(t-i.z)<i.half+r&&Math.abs(n-i.y)<.12)return i;return null}crack(e,t,n,r){if(this.finalDomain||!this.inBounds(e,t))return!1;let i=this.idx(e,t);return this.h[i]<=-999||this.state[i]!==0?!1:(this.state[i]=1,this.timer[i]=n,this.downTime.set(i,r),this.active.add(i),this.dirty=!0,!0)}downTime=new Map;touch(e,t){if(this.finalDomain)return;let n=this.cellOf(e),r=this.cellOf(t);for(let e=-1;e<=1;e++)for(let t=-1;t<=1;t++){let i=n+t,a=r+e;if(!this.inBounds(i,a))continue;let o=this.idx(i,a);this.tile[o]===5&&this.state[o]===0&&this.crack(i,a,.85+(Math.abs(t)+Math.abs(e))*.12,5.5)}}update(e){this.time+=e;for(let e of this.rafts){let t=e.x,n=e.y,r=e.z,i=((this.time/e.period+e.phase)%1+1)%1,a;a=i<.2?0:i<.5?Ud((i-.2)/.3):i<.7?1:1-Ud((i-.7)/.3),e.x=xd(e.ax,e.bx,a),e.y=xd(e.ay,e.by,a),e.z=xd(e.az,e.bz,a),e.dx=e.x-t,e.dy=e.y-n,e.dz=e.z-r}if(this.active.size!==0){for(let t of this.active){let n=this.state[t];this.timer[t]-=e,n===1?(this.shake[t]=bd(1-this.timer[t]/.9,.15,1),this.heat[t]=bd(.35+(1-this.timer[t]),.35,1),this.timer[t]<=0&&(this.state[t]=2,this.timer[t]=this.downTime.get(t)??6,this.shake[t]=0,this.heat[t]=0)):n===2?(this.drop[t]=Math.min(1,this.drop[t]+e*.9),this.timer[t]<=0&&(this.state[t]=3)):n===3&&(this.drop[t]=Math.max(0,this.drop[t]-e*1.6),this.drop[t]<=0&&(this.state[t]=0,this.active.delete(t),this.downTime.delete(t)))}this.dirty=!0}}resetDynamic(){for(let e of this.active)this.state[e]=0,this.drop[e]=0,this.shake[e]=0,this.heat[e]=0;this.active.clear(),this.downTime.clear(),this.time=0,this.update(0),this.dirty=!0}nearestWalkable(e,t,n=12,r=!1,i=!1){if(this.finalDomain){let n=this.finalDomain;return{...Ad(n,e,t,.34)??{x:e,z:t},y:n.floorY}}let a=this.cellOf(e),o=this.cellOf(t),s=null,c=1/0;for(let l=0;l<=n;l++){for(let n=-l;n<=l;n++)for(let u=-l;u<=l;u++){if(Math.max(Math.abs(u),Math.abs(n))!==l)continue;let d=a+u,f=o+n;if(!this.isWalkable(d,f))continue;let p=this.idx(d,f);if(this.tile[p]===5||this.tile[p]===6||i&&this.state[p]!==0||r&&this.edgeDistance(d,f)<2)continue;let m=d-60+.5,h=f-60+.5,g=(m-e)**2+(h-t)**2;g<c&&(c=g,s={x:m,z:h,y:this.h[p]})}if(s&&l>=1)return s}return s}edgeDistance(e,t){for(let n=1;n<=4;n++)for(let r=-n;r<=n;r++)for(let i=-n;i<=n;i++)if(Math.max(Math.abs(i),Math.abs(r))===n&&!this.isWalkable(e+i,t+r))return n;return 5}};function Ud(e){return e<.5?2*e*e:1-(-2*e+2)**2/2}function Wd(e,t,n,r,i,a){if(!e.inBounds(t,n))return;let o=e.idx(t,n);a.onlyOnGround&&e.h[o]<=-999||(a.tileOnly||(e.h[o]=r),e.tile[o]=i,a.breakable!==void 0&&(e.breakable[o]=+!!a.breakable),a.island!==void 0&&(e.island[o]=a.island))}function Gd(e,t,n,r,i,a,o={}){let s=o.jag??0,c=o.seed??0,l=Math.ceil(r+s+1);for(let u=e.cellOf(n)-l;u<=e.cellOf(n)+l;u++)for(let d=e.cellOf(t)-l;d<=e.cellOf(t)+l;d++){let l=d-60+.5,f=u-60+.5,p=l-t,m=f-n,h=Math.atan2(m,p),g=s>0?(Dd(Math.cos(h)*1.7+c,Math.sin(h)*1.7+c*.37,3)-.5)*2*s:0;Math.sqrt(p*p+m*m)<=r+g&&Wd(e,d,u,i,a,o)}}function Kd(e,t,n,r,i,a,o,s={}){for(let c=e.cellOf(Math.min(n,i));c<e.cellOf(Math.max(n,i));c++)for(let n=e.cellOf(Math.min(t,r));n<e.cellOf(Math.max(t,r));n++)Wd(e,n,c,a,o,s)}function qd(e,t,n,r,i,a,o,s,c,l={}){let u=Math.hypot(i-t,a-n),d=(i-t)/u,f=(a-n)/u,p=Math.min(t,i)-s,m=Math.max(t,i)+s,h=Math.min(n,a)-s,g=Math.max(n,a)+s;for(let i=e.cellOf(h);i<=e.cellOf(g);i++)for(let a=e.cellOf(p);a<=e.cellOf(m);a++){let p=a-60+.5,m=i-60+.5,h=p-t,g=m-n,_=h*d+g*f,v=Math.abs(-h*f+g*d);if(_<-.5||_>u+.5||v>s/2)continue;let y=bd(_/u,0,1),b=Math.round(xd(r,o,y)*4)/4,x=e.idx(a,i);e.h[x]>-999&&e.h[x]>=b-.01&&e.tile[x]!==0||Wd(e,a,i,b,c,l)}}function Jd(e,t,n,r,i,a=2.3){let o=e.heightAt(t,n),s=e.heightAt(r,i),c=o+a,l=s+a,u=Math.hypot(r-t,l-c,i-n);e.ziplines.push({ax:t,ay:c,az:n,bx:r,by:l,bz:i,sag:Math.min(1.6,u*.035),length:u})}function Yd(e,t,n,r){let[i,a,o,s]=t,[c,l,u,d]=n,f=Math.hypot(c-i,l-a),p=(c-i)/f,m=(l-a)/f,h=(t,n,r,i,a)=>{let o=a-4;for(;o<a+6&&e.heightAt(t+r*o,n+i*o)>-999;)o+=.25;return o},g=h(i,a,p,m,o),_=h(c,l,-p,-m,u),v=i+p*(g+2-.2),y=a+m*(g+2-.2),b=c-p*(_+2-.2),x=l-m*(_+2-.2),S=Math.hypot(b-v,x-y);e.rafts.push({ax:v,az:y,ay:s,bx:b,bz:x,by:d,half:2,period:S/3.6*2/.6,phase:r,x:v,y:s,z:y,dx:0,dy:0,dz:0})}function Xd(e){Gd(e,0,0,15.5,0,1,{jag:1.3,seed:1.3,breakable:!0,island:1}),Gd(e,0,0,6,0,2,{tileOnly:!0,onlyOnGround:!0}),Gd(e,0,0,1.6,1.2,2,{breakable:!1}),Gd(e,-8,7,2.6,.5,1,{jag:.6,seed:4,breakable:!1,onlyOnGround:!0}),Gd(e,9,-7,2.2,.5,1,{jag:.5,seed:7,breakable:!1,onlyOnGround:!0}),Kd(e,-3,-21,3,-13,0,2,{island:2}),Gd(e,0,-33,12,0,1,{jag:1.4,seed:2.1,island:2}),Gd(e,0,-36.5,7,5,7,{jag:.8,seed:3.3,island:2}),Gd(e,0,-37,2.2,5.5,2,{onlyOnGround:!0});for(let[t,n]of[[4.5,-27.5],[-4.5,-27.5]]){Kd(e,t-1,n-1,t+1,n+1,0,6);let r=0-t,i=-36.5-n,a=Math.hypot(r,i);e.vents.push({x:t,z:n,y:0,dx:r/a,dz:i/a})}qd(e,13,2,0,26,3,1.5,3.2,4,{island:3}),Gd(e,35,3,11,1.5,1,{jag:1.4,seed:5.2,island:3}),Gd(e,38,7,4,2,1,{jag:.8,seed:6.1,onlyOnGround:!0}),Gd(e,33,-3,2.6,2,1,{jag:.6,seed:8.1,onlyOnGround:!0}),qd(e,-13,-1,0,-26,-2,-1,3.2,4,{island:4}),Gd(e,-35,-3,11,-1,3,{jag:1.5,seed:9.4,island:4}),Gd(e,-39,-9,2,4,2,{}),Kd(e,-34,-6,-33,2,.5,2,{onlyOnGround:!0}),Kd(e,-31,4,-26,5,.5,2,{onlyOnGround:!0}),Kd(e,-42,2,-38,4,1.5,2,{onlyOnGround:!0}),Kd(e,-41,0,-39,2,.25,2,{onlyOnGround:!0});for(let[t,n]of[[-30,-8],[-37,6],[-28,0]])Kd(e,t,n,t+1,n+1,1.5,2,{onlyOnGround:!0});qd(e,1,14.5,0,2,27,.5,3,5,{island:5}),Gd(e,2,36,10,.5,1,{jag:1.2,seed:11.7,island:5}),Gd(e,6.5,40.5,1.8,6.5,2,{}),Kd(e,-4,31,0,33,1,4,{onlyOnGround:!0});for(let[t,n,r]of[[14.2,-30.5,.5],[18,-27.6,1],[21.4,-24.2,1.5]])Gd(e,t,n,1.5,r,2,{island:6});Gd(e,26,-19.5,3.3,2.5,7,{jag:.4,seed:13.3,island:6});for(let[t,n,r]of[[29.6,-14.2,2.25],[32.4,-10.6,2]])Gd(e,t,n,1.5,r,2,{island:6});e.shrine={x:26,y:2.5,z:-19.5};for(let t=0;t<14400;t++)e.tile[t]===5&&(e.breakable[t]=0);for(let t=0;t<8;t++){let n=t/8*Math.PI*2+Math.PI/8;e.lanterns.push({x:Math.cos(n)*6.6,z:Math.sin(n)*6.6})}for(let[t,n]of[[14,4],[24,5],[-14,-3],[-25,-4],[-1,15.5],[4,26],[-3.8,-19],[3.8,-19],[23.5,-17],[28.5,-21.5]])e.lanterns.push({x:t,z:n});for(let t of e.lanterns){let n=e.cellOf(t.x),r=e.cellOf(t.z);e.inBounds(n,r)&&(e.breakable[e.idx(n,r)]=0)}Jd(e,3.5,-38.5,27.5,-3.5),Jd(e,-3.5,-38.5,-27.5,-8.5),Jd(e,-39,-9,-5.5,-4.5),Jd(e,6.5,40.5,4.5,9.5),Yd(e,[-35,-3,11,-1],[2,36,10,.5],0),Yd(e,[35,3,11,1.5],[2,36,10,.5],.5),e.landmarks.push({name:`Hearth`,x:0,z:0},{name:`Bell Plateau`,x:0,z:-36},{name:`Orchard`,x:35,z:3},{name:`Sunken Ruins`,x:-35,z:-3},{name:`Lighthouse Docks`,x:2,z:36},{name:`Sky Shrine`,x:26,z:-19.5}),e.update(0)}function Zd(e,t,n){return n.x=xd(e.ax,e.bx,t),n.y=xd(e.ay,e.by,t)-Math.sin(Math.PI*t)*e.sag,n.z=xd(e.az,e.bz,t),n}var Qd=class{game;group=new U;body;maxHp;hp;x=0;y=0;z=0;yaw=0;dead=!1;deathT=0;phase=1;state=`enter`;stateT=0;flash=0;baseScale=1;entering=2;mat;waves=[];teles=[];constructor(e,t,n,r){this.game=e,this.maxHp=this.hp=t;let i={...id.husk,mass:999,radius:n,height:r,hp:t,xp:0};this.body={id:-Math.floor(Math.random()*1e6)-1,alive:!0,kind:`husk`,def:i,x:0,y:0,z:0,vy:0,kx:0,kz:0,hp:t,maxHp:t,dmg:0,speed:0,r:n,xp:0,elite:!1,flash:0,emerge:0,yaw:0,anim:0,falling:!1,climbing:!1,atkCd:0,windup:0,haloCd:0,burn:0,burnTick:0,lastGX:0,lastGY:0,lastGZ:0,scale:1,minion:!1,farTime:0,boss:this},this.mat=pd(),e.scene.add(this.group)}get invulnerable(){return this.entering>0||this.dead}get damageMul(){return 1}hit(e){if(this.invulnerable)return!1;if(this.hp-=e,this.body.hp=this.hp,this.flash=1,this.hp<=0&&!this.dead){this.hp=0,this.dead=!0,this.deathT=0,this.body.alive=!1;for(let e of this.teles)this.game.fx.cancelTelegraph(e);for(let e of this.waves)e.active=!1,e.mesh.visible=!1;return this.game.onBossDefeated(this),!0}let t=this.hp/this.maxHp,n=t<.33?3:t<.66?2:1;return n>this.phase&&(this.phase=n,this.onPhase(n)),!1}onPhase(e){}setState(e){this.state=e,this.stateT=0}tele(e,t,n,r,i,a,o,s){let c=this.game.fx.telegraph(e,t,n,r,i,a,o,s);return this.teles.push(c),this.teles.length>12&&this.teles.shift(),c}shockwave(e,t,n,r,i){let a=this.waves.find(e=>!e.active);if(!a){let e=new Fa(1,1,.7,64,1,!0);e.translate(0,.35,0);let t=new K(e,new Li({color:16732112,transparent:!0,opacity:.85,side:2,depthWrite:!1,blending:2})),n=new K(new Fa(1,1,.1,64,1,!0),new Li({color:16769270,side:2}));n.position.y=.72,t.add(n),t.renderOrder=4,this.game.scene.add(t),a={mesh:t,x:0,y:0,z:0,r:0,speed:0,max:0,hit:!1,active:!1},this.waves.push(a)}a.active=!0,a.hit=!1,a.x=e,a.y=t,a.z=n,a.r=1.5,a.speed=r,a.max=i,a.mesh.visible=!0,this.game.audio.sfx(`slam`,1),this.game.shake(.5)}updateWaves(e){let t=this.game.player;for(let n of this.waves)if(n.active){if(n.r+=n.speed*e,n.r>=n.max)n.active=!1,n.mesh.visible=!1;else if(n.mesh.position.set(n.x,n.y,n.z),n.mesh.scale.set(n.r,1+Math.sin(n.r*3)*.1,n.r),n.mesh.material.opacity=.85*(1-(n.r/n.max)**3),!n.hit){let e=Math.hypot(t.x-n.x,t.z-n.z),r=t.y-n.y;Math.abs(e-n.r)<.55&&r<.6&&r>-1.2&&t.state!==`zip`&&this.game.hurtPlayer(16+this.game.time*.02,`shockwave`)&&(n.hit=!0)}}}dangerNear(e,t,n){for(let t of this.waves){if(!t.active)continue;let r=Math.hypot(e-t.x,n-t.z);if(r-t.r>0&&r-t.r<1.6)return!0}return!1}contact(e,t,n){let r=this.game.player,i=r.x-this.x,a=r.z-this.z,o=Math.hypot(i,a);if(o<e+r.r&&r.y<this.y+t&&r.y+1.7>this.y&&(n>0&&this.game.hurtPlayer(n,`${this.id} body`),r.state!==`zip`)){let t=e+r.r-o,n=r.x+i/(o||1)*t,s=r.z+a/(o||1)*t;this.game.arena.heightAt(n,s)>-999&&(r.x=n,r.z=s)}}update(e){this.stateT+=e,this.flash=Math.max(0,this.flash-e*9),this.mat.userData.uFlash.value=this.flash*.2,this.entering>0&&(this.entering-=e),this.updateWaves(e),this.dead?(this.deathT+=e,this.dying(e)):(this.think(e),this.body.x=this.x,this.body.z=this.z,this.syncBodyY())}syncBodyY(){this.body.y=this.y}dying(e){let t=this.deathT;this.group.position.y-=e*.6,this.group.rotation.z+=e*.3,Math.random()<.6&&this.game.fx.burst(this.x+(Math.random()-.5)*3,this.y+Math.random()*3,this.z+(Math.random()-.5)*3,6,16765562,6,.6,.8);let n=Math.max(0,1-t/1.8);this.group.scale.setScalar(Math.max(.01,n*this.baseScale))}dispose(){this.game.scene.remove(this.group),vd(this.group);for(let e of this.waves)this.game.scene.remove(e.mesh),vd(e.mesh);for(let e of this.teles)this.game.fx.cancelTelegraph(e);this.teles.length=0}},$d=class extends Qd{id=`bellwether`;name=`The Bellwether`;title=`Shepherd of the Hollow`;legs=[];head=new U;bell=new U;cdx=0;cdz=0;chargeLeft=0;atk=0;walkT=0;stunned=0;leapFrom={x:0,y:0,z:0};leapTo={x:0,y:0,z:0};unreachable=0;get damageMul(){return this.stunned>0?1.5:1}constructor(e,t,n,r){super(e,t,1.6,2.9),this.x=n,this.z=r,this.y=e.arena.heightAt(n,r),this.build(),this.entering=2.2,this.tele(`circle`,n,this.y,r,2.6,0,0,2)}build(){let e=new K(new ld().add(Z(1.25,1),2826560,{pos:[0,1.75,-.2],scale:[1.05,.95,1.45]}).add(Z(1,1),3812437,{pos:[0,2.1,.6],scale:[1.1,1,1]}).add(X(.9,.12,2.2),16732112,{pos:[0,2.75,-.1],glow:.7}).add(ud(.25,.7,5),4864614,{pos:[0,2.9,-1.2],rot:[-.6,0,0]}).add(ud(.25,.7,5),4864614,{pos:[0,3,-.4],rot:[-.4,0,0]}).build(),this.mat);this.group.add(e),this.head.position.set(0,2,1.45);let t=new ld().add(X(.9,.8,.9),2366262,{pos:[0,0,.25]}).add(X(.7,.4,.5),13616306,{pos:[0,-.15,.7]}).add(X(.16,.1,.06),16732112,{pos:[-.25,.12,.72],glow:1}).add(X(.16,.1,.06),16732112,{pos:[.25,.12,.72],glow:1});for(let e of[-1,1])t.add(Q(.18,.24,.9,6),14208440,{pos:[e*.65,.35,0],rot:[0,0,e*1.1]}).add(Q(.12,.18,.8,6),14208440,{pos:[e*1.05,.65,.3],rot:[.9,0,e*.3]}).add(ud(.12,.5,6),14208440,{pos:[e*1.05,.55,.85],rot:[1.9,0,0]});this.head.add(new K(t.build(),this.mat)),this.group.add(this.head),this.bell.position.set(0,1.25,1.25);let n=new ld().add(Q(.25,.6,.75,10),13212234,{pos:[0,-.4,0]}).add(Z(.18,0),16770976,{pos:[0,-.8,0],glow:1}).add(X(.08,.3,.08),3811878,{pos:[0,.05,0]});this.bell.add(new K(n.build(),this.mat)),this.group.add(this.bell);for(let[e,t]of[[-.8,.9],[.8,.9],[-.8,-1.2],[.8,-1.2]]){let n=new U;n.position.set(e,1.4,t);let r=new ld().add(X(.45,1,.5),2826560,{pos:[0,-.5,0]}).add(X(.4,.5,.45),1840424,{pos:[0,-1.15,.05]});n.add(new K(r.build(),this.mat)),this.legs.push(n),this.group.add(n)}}onPhase(e){this.game.banner(e===2?`The Bellwether rings louder!`:`The Bellwether is frenzied!`,`warn`)}think(e){let t=this.game,n=t.player,r=t.arena,i=n.x-this.x,a=n.z-this.z,o=Math.hypot(i,a),s=Math.atan2(i,a),c=!1;if(this.entering>0){let e=1-this.entering/2.2;this.group.position.set(this.x,this.y-(1-e)*4,this.z),this.yaw=s,this.group.rotation.y=this.yaw,Math.random()<.5&&t.fx.inkBurst(this.x,this.y,this.z,2,2826560,4);return}if(this.stunned>0){this.stunned-=e,Math.random()<.3&&t.fx.burst(this.x,this.y+3.3,this.z,1,16773280,2,.5,.5,0,1),this.stunned<=0&&this.setState(`walk`),this.render(e,!1);return}let l=Math.abs(n.y-this.y)<1.2&&t.flow.distAt(this.x,this.z)<60;this.unreachable=l?0:this.unreachable+e;let u=this.phase===3?1.35:this.phase===2?1.15:1;switch(this.state){case`enter`:this.setState(`walk`);break;case`walk`:if(this.yaw+=Cd(s-this.yaw)*Math.min(1,e*4),o>3){let t=3.2*u,n=this.x+Math.sin(this.yaw)*t*e,i=this.z+Math.cos(this.yaw)*t*e,a=r.heightAt(n,i);a>-999&&Math.abs(a-this.y)<1.1&&(this.x=n,this.z=i,this.y=a,c=!0)}this.atk-=e,this.atk<=0&&(this.atk=this.phase===3?1.1:this.phase===2?1.5:1.9,this.unreachable>2.5||o>16?this.startLeap():o<7.5||Math.random()<.35?this.startSlam():this.startCharge());break;case`aim`:this.yaw+=Cd(Math.atan2(this.cdx,this.cdz)-this.yaw)*Math.min(1,e*10),Math.random()<.4&&t.fx.dust(this.x-this.cdx*1.5,this.y,this.z-this.cdz*1.5,1),this.stateT>(this.phase===3?.75:.95)&&(this.setState(`charge`),t.audio.sfx(`roar`,.8));break;case`charge`:{let n=23*u*e,i=this.x+this.cdx*n,a=this.z+this.cdz*n,o=r.heightAt(i+this.cdx*1.4,a+this.cdz*1.4);if(c=!0,o<=-999||o>this.y+1){this.stunned=1.8,t.fx.dust(this.x+this.cdx*1.5,this.y,this.z+this.cdz*1.5,14,14272432,5),t.shake(.35),t.audio.sfx(`thud`,1),this.setState(`walk`);break}this.x=i,this.z=a,this.y=Math.max(o,r.heightAt(i,a)),this.chargeLeft-=n,Math.random()<.8&&t.fx.dust(this.x,this.y,this.z,2),this.contact(1.7,3,22),this.chargeLeft<=0&&(this.phase>=2&&this.stateT<2.2&&Math.random()<.5?this.startCharge():this.setState(`walk`));break}case`rear`:this.group.rotation.x=-Math.min(.45,this.stateT*.6),this.stateT>.9&&(this.group.rotation.x=0,Math.hypot(n.x-this.x,n.z-this.z)<3.4&&n.y-this.y<1&&t.hurtPlayer(24+t.time*.02,`bell slam`),this.shockwave(this.x,this.y,this.z,10,18),t.fx.dust(this.x,this.y,this.z,30,14272432,8),t.fx.ring(this.x,this.y,this.z,1,4,.4,16770976),t.audio.sfx(`bell`,1),this.setState(this.phase>=2?`rear2`:`walk`));break;case`rear2`:this.stateT>.75&&(this.shockwave(this.x,this.y,this.z,12,18),t.audio.sfx(`bell`,1),this.setState(`walk`));break;case`leap`:{if(this.stateT<.45){this.group.position.y=this.y-this.stateT*.6;break}let r=bd((this.stateT-.45)/.85,0,1);this.x=this.leapFrom.x+(this.leapTo.x-this.leapFrom.x)*r,this.z=this.leapFrom.z+(this.leapTo.z-this.leapFrom.z)*r,this.y=this.leapFrom.y+(this.leapTo.y-this.leapFrom.y)*r+Math.sin(r*Math.PI)*7,r>=1&&(this.y=this.leapTo.y,Math.hypot(n.x-this.x,n.z-this.z)<3.4&&Math.abs(n.y-this.y)<1.5&&t.hurtPlayer(22,`leap`),this.shockwave(this.x,this.y,this.z,9,12),t.fx.dust(this.x,this.y,this.z,26,14272432,7),this.unreachable=0,this.setState(`walk`)),this.render(e,!1);return}}this.state!==`charge`&&this.contact(1.6,3,0),this.render(e,c)}startCharge(){let e=this.game.player,t=e.x-this.x,n=e.z-this.z,r=Math.hypot(t,n)||1;this.cdx=t/r,this.cdz=n/r,this.chargeLeft=Math.min(24,r+7),this.tele(`rect`,this.x,this.y,this.z,3.4,this.chargeLeft+1.5,Math.atan2(this.cdx,this.cdz),this.phase===3?.75:.95),this.setState(`aim`)}startSlam(){this.tele(`circle`,this.x,this.y,this.z,3.4,0,0,.9),this.setState(`rear`),this.game.audio.sfx(`rumble`,.7)}startLeap(){let e=this.game,t=e.player,n=Math.random()*Math.PI*2,r=t.x+Math.cos(n)*3,i=t.z+Math.sin(n)*3,a=e.arena.nearestWalkable(r,i,6,!0)??e.arena.nearestWalkable(t.x,t.z,8);a?(this.leapFrom={x:this.x,y:this.y,z:this.z},this.leapTo={x:a.x,y:a.y,z:a.z},this.tele(`circle`,a.x,a.y,a.z,3.4,0,0,1.3),this.setState(`leap`),e.audio.sfx(`roar`,.7)):this.startSlam()}render(e,t){this.walkT+=e*(t?this.state===`charge`?16:7:0),this.group.position.set(this.x,(this.state,this.y),this.z),this.group.rotation.y=this.yaw,this.legs.forEach((e,n)=>{e.rotation.x=Math.sin(this.walkT+(n%2==0?0:Math.PI)+(n>1?Math.PI:0))*(t?.6:0)}),this.head.rotation.x=this.state===`aim`?.35:this.stunned>0?Math.sin(this.stateT*8)*.2:0,this.bell.rotation.x=Math.sin(this.walkT*.5+this.stateT*3)*.3}},ef=class extends Qd{id=`matron`;name=`The Moth Matron`;title=`She Who Eats the Lamps`;wingL=new U;wingR=new U;orbitA=0;atk=2;volleys=0;volleyT=0;spin=0;diveFrom={x:0,y:0,z:0};diveTo={x:0,y:0,z:0};dives=0;hover=3.2;lastAttack=``;constructor(e,t,n,r){super(e,t,2,4.2),this.x=n,this.z=r,this.y=Math.max(0,e.arena.heightAt(n,r))+14,this.build(),this.baseScale=.72,this.group.scale.setScalar(this.baseScale),this.entering=2.4}syncBodyY(){this.body.y=this.y-2.6}build(){let e=new ld().add(Z(.7,1),4864874,{pos:[0,0,0],scale:[1,1,2]}).add(Z(.6,1),6113925,{pos:[0,.1,1.4]}).add(Z(.6,1),15260927,{pos:[0,.2,.95],scale:[1.2,.6,.6]}).add(Z(.16,1),16739032,{pos:[-.26,.28,1.9],glow:1}).add(Z(.16,1),16739032,{pos:[.26,.28,1.9],glow:1}).add(X(.06,.06,1.3),2826816,{pos:[-.3,.8,2.2],rot:[-.9,.35,0]}).add(X(.06,.06,1.3),2826816,{pos:[.3,.8,2.2],rot:[-.9,-.35,0]}).add(ud(.5,1.5,6),3812949,{pos:[0,-.2,-1.8],rot:[-Math.PI/2,0,0]}).add(X(.08,1.4,.08),2826816,{pos:[-.35,-1,.6],rot:[.2,0,.2]}).add(X(.08,1.4,.08),2826816,{pos:[.35,-1,.6],rot:[.2,0,-.2]}).add(X(.08,1.6,.08),2826816,{pos:[-.3,-1.1,0],rot:[-.1,0,.2]}).add(X(.08,1.6,.08),2826816,{pos:[.3,-1.1,0],rot:[-.1,0,-.2]});this.group.add(new K(e.build(),this.mat));for(let[e,t]of[[this.wingL,-1],[this.wingR,1]]){let n=new ld().add(X(3.4,.06,2.4),8876212,{pos:[t*1.8,0,.5]}).add(X(2.4,.07,1.6),6968722,{pos:[t*1.4,0,-1.3],rot:[0,t*.3,0]}).add(Q(.55,.55,.09,12),16756976,{pos:[t*2.2,.02,.6],glow:.9}).add(Q(.28,.28,.1,10),2826816,{pos:[t*2.2,.03,.6]}).add(Q(.3,.3,.09,10),16756976,{pos:[t*1.5,.02,-1.35],glow:.9});e.add(new K(n.build(),this.mat)),e.position.set(t*.4,.3,.3),this.group.add(e)}}onPhase(e){this.game.banner(e===2?`The Matron’s wings blaze!`:`The Matron is desperate!`,`warn`),this.spawnBrood(e===2?6:8)}spawnBrood(e){let t=this.game;for(let n=0;n<e;n++){let r=n/e*Math.PI*2;t.enemies.spawn(`moth`,this.x+Math.cos(r)*3,this.z+Math.sin(r)*3,{minion:!0,y:this.y-1,emerge:.2})}}think(e){let t=this.game,n=t.player,r=Math.max(n.y,t.arena.heightAt(this.x,this.z)>-1e3?t.arena.heightAt(this.x,this.z):n.y),i=Math.atan2(n.x-this.x,n.z-this.z);this.yaw+=Cd(i-this.yaw)*Math.min(1,e*3);let a=7;if(this.entering>0){this.y+=(r+this.hover-this.y)*Math.min(1,e*1.5),this.render(a);return}let o=this.phase===3?1.35:this.phase===2?1.15:1;switch(this.state){case`enter`:this.setState(`hover`);break;case`hover`:{this.orbitA+=e*.45*o;let i=n.x+Math.cos(this.orbitA)*9,a=n.z+Math.sin(this.orbitA)*9;if(this.x+=(i-this.x)*Math.min(1,e*1.2),this.z+=(a-this.z)*Math.min(1,e*1.2),this.y+=(r+this.hover+Math.sin(this.stateT*2)*.3-this.y)*Math.min(1,e*2),this.atk-=e*o,this.atk<=0){let e=[`volley`,`dive`,`volley`,`dive`],n=e[Math.floor(Math.random()*e.length)];n===this.lastAttack&&Math.random()<.7&&(n=n===`volley`?`dive`:`volley`),this.lastAttack=n,n===`volley`?(this.volleys=this.phase===1?3:4,this.volleyT=.75,this.spin=Math.random()*Math.PI,this.setState(`volley`),t.audio.sfx(`charge`,.7)):(this.dives=this.phase===3?2:1,this.beginDive())}break}case`volley`:if(this.flash=Math.max(this.flash,.25+.25*Math.sin(this.stateT*30)),this.volleyT-=e,a=3,this.volleyT<=0){let e=this.phase===1?12:16,r=n.y+.9;for(let n=0;n<e;n++){let i=this.spin+n/e*Math.PI*2;t.enemyShots.fire(this.x,this.y-1.2,this.z,Math.cos(i)*6.5,0,Math.sin(i)*6.5,14,{life:5,settleY:r})}this.spin+=Math.PI/e,this.volleys--,this.volleyT=.55,t.audio.sfx(`volley`,.8),this.volleys<=0&&(this.atk=2.4,this.setState(`hover`))}break;case`diveAim`:a=12,this.y+=(r+this.hover+2-this.y)*Math.min(1,e*3),this.stateT>1.05&&(this.diveFrom={x:this.x,y:this.y,z:this.z},this.setState(`dive`),t.audio.sfx(`roar`,.6));break;case`dive`:{let e=Math.min(1,this.stateT/.35);this.x=this.diveFrom.x+(this.diveTo.x-this.diveFrom.x)*e,this.z=this.diveFrom.z+(this.diveTo.z-this.diveFrom.z)*e,this.y=this.diveFrom.y+(this.diveTo.y+1.2-this.diveFrom.y)*e*e,e>=1&&(Math.hypot(n.x-this.diveTo.x,n.z-this.diveTo.z)<3.2&&Math.abs(n.y-this.diveTo.y)<2&&t.hurtPlayer(24,`dive`),t.fx.dust(this.x,this.diveTo.y,this.z,24,13220072,7),t.fx.ring(this.x,this.diveTo.y,this.z,.5,3.4,.4,16756976),t.shake(.35),t.audio.sfx(`thud`,1),this.dives--,this.setState(`rise`));break}case`rise`:this.stateT>.9&&(this.dives>0?this.beginDive():(this.atk=2,Math.random()<.35&&this.spawnBrood(4),this.setState(`hover`)))}this.render(a)}beginDive(){let e=this.game.player,t=this.game.arena.heightAt(e.x,e.z)>-999?{x:e.x,y:e.y,z:e.z}:this.game.arena.nearestWalkable(e.x,e.z,6)??{x:e.x,y:e.y,z:e.z};this.diveTo={x:t.x,y:t.y,z:t.z},this.tele(`circle`,t.x,t.y,t.z,3.2,0,0,1.05),this.setState(`diveAim`)}render(e){this.group.position.set(this.x,this.y,this.z),this.group.rotation.y=this.yaw;let t=Math.sin(this.stateT*e+this.deathT)*.55;this.wingL.rotation.z=t,this.wingR.rotation.z=-t}dying(e){this.y-=e*3,super.dying(e)}},tf=class extends Qd{id=`crown`;name=`The Hollow Crown`;title=`Last Night of the Drift`;armL=new U;armR=new U;crown=new U;atk=2.5;fists=[];sweepA=0;sweepDir=1;sweepHit=!1;sweepBeams=[];seq=0;summoned=new Set;constructor(e,t,n,r){super(e,t,2.6,7),this.x=n,this.z=r,this.y=e.arena.heightAt(n,r),this.build(),this.entering=3.2,this.tele(`circle`,n,this.y,r,3.4,0,0,3),this.crackRing(n,r,2.2,.4,3.4)}build(){let e=new ld().add(Q(1.5,2.6,4.2,9),2300467,{pos:[0,2.1,0]}).add(Z(1.6,1),3023684,{pos:[0,4.4,0],scale:[1.25,.9,1]}).add(Z(1,1),1708838,{pos:[0,5.5,.25]}).add(X(1.1,.75,.2),14077115,{pos:[0,5.45,1.1]}).add(X(.25,.14,.05),16732112,{pos:[-.28,5.55,1.22],glow:1}).add(X(.25,.14,.05),16732112,{pos:[.28,5.55,1.22],glow:1}).add(X(.5,.08,.05),16732112,{pos:[0,5.2,1.22],glow:.8}).add(X(.12,2,.12),16732112,{pos:[.6,2.4,1.6],rot:[-.35,0,.1],glow:.6}).add(X(.12,1.6,.12),16732112,{pos:[-.8,2,1.5],rot:[-.35,0,-.2],glow:.6});this.group.add(new K(e.build(),this.mat));let t=new ld().add(Q(.95,.85,.3,10),13212234,{pos:[0,0,0]});for(let e=0;e<7;e++){let n=e/7*Math.PI*2;t.add(ud(.18,.9,5),16765562,{pos:[Math.cos(n)*.85,.5,Math.sin(n)*.85],glow:.9})}this.crown.add(new K(t.build(),this.mat)),this.crown.position.set(0,6.4,.1),this.group.add(this.crown);for(let[e,t]of[[this.armL,-1],[this.armR,1]]){let n=new ld().add(Z(.8,1),3023684,{pos:[0,0,0]}).add(X(.8,2.6,.8),2300467,{pos:[t*.3,-1.3,.3],rot:[.3,0,t*.2]}).add(X(1.4,1.1,1.4),3023684,{pos:[t*.55,-2.8,.75]}).add(X(1.2,.2,1.2),16732112,{pos:[t*.55,-3.35,.75],glow:.7});e.add(new K(n.build(),this.mat)),e.position.set(t*2.3,4.6,0),this.group.add(e)}for(let e=0;e<2;e++){let e=new Na(1,1,1);e.translate(0,0,.5);let t=new K(e,new Li({color:16732112,transparent:!0,opacity:.9,blending:2,depthWrite:!1})),n=new K(e,new Li({color:16777215}));n.scale.set(.3,.3,1),t.add(n),t.visible=!1,t.renderOrder=4,this.game.scene.add(t),this.sweepBeams.push(t)}}crackRing(e,t,n,r,i){let a=this.game.arena,o=Math.ceil(n);for(let s=-o;s<=o;s++)for(let c=-o;c<=o;c++){let o=a.cellOf(e)+c,l=a.cellOf(t)+s,u=o-60+.5,d=l-60+.5;Math.hypot(u-e,d-t)>n||a.inBounds(o,l)&&a.breakable[a.idx(o,l)]&&a.crack(o,l,r+Math.random()*.15,i)}}onPhase(e){let t=this.game;if(t.banner(e===2?`The Crown summons its court!`:`The Crown cracks — the floor gives way!`,`warn`),!this.summoned.has(e)){this.summoned.add(e);for(let n=0;n<(e===2?6:8);n++){let e=Math.random()*Math.PI*2,r=t.arena.nearestWalkable(this.x+Math.cos(e)*9,this.z+Math.sin(e)*9,5);r&&t.enemies.spawn(n%3==0?`husk`:`skitter`,r.x,r.z,{minion:!0})}}}think(e){let t=this.game,n=t.player,r=Math.atan2(n.x-this.x,n.z-this.z);if(this.yaw+=Cd(r-this.yaw)*Math.min(1,e*1.5),this.entering>0){let e=1-this.entering/3.2;this.group.position.set(this.x,this.y-(1-e)*8,this.z),this.group.rotation.y=this.yaw,Math.random()<.6&&t.fx.inkBurst(this.x+(Math.random()-.5)*4,this.y,this.z+(Math.random()-.5)*4,2,2300467,5),t.shake(.08);return}this.contact(2.4,7,0);let i=this.phase===3?1.45:this.phase===2?1.2:1;for(let r=this.fists.length-1;r>=0;r--){let i=this.fists[r];i.t-=e,i.t<=0&&(Math.hypot(n.x-i.x,n.z-i.z)<i.r&&n.y-i.y<1.2&&n.y-i.y>-1.5&&t.hurtPlayer(26+t.time*.02,`fist`),t.fx.dust(i.x,i.y,i.z,26,14272432,8),t.fx.ring(i.x,i.y,i.z,.5,i.r+1,.45,16732112),t.shake(.55),t.audio.sfx(`slam`,1),this.fists.splice(r,1))}switch(this.state){case`enter`:this.setState(`idle`);break;case`idle`:if(this.atk-=e*i,this.atk<=0){let e=[`fist`,`sweep`,`fist`,`shards`,`fist`,`sweep`],t=e[this.seq++%e.length];t===`fist`?this.startFists():t===`sweep`?this.startSweep():this.fireShards()}break;case`fist`:this.stateT>1.5&&(this.atk=1.4,this.setState(`idle`));break;case`sweepAim`:this.armL.rotation.z=-.5,this.armR.rotation.z=.5,this.stateT>1.1&&(this.setState(`sweep`),this.sweepHit=!1,t.audio.sfx(`beam`,1));break;case`sweep`:{let r=this.phase===3?3.2:2.8,i=this.sweepA;this.sweepA+=this.sweepDir*Math.PI*2/r*e;let a=this.phase===3?2:1;for(let e=0;e<2;e++){let r=this.sweepBeams[e];if(r.visible=e<a,!r.visible)continue;let o=this.sweepA+e*Math.PI;r.position.set(this.x,this.y+.55,this.z),r.rotation.set(0,o,0),r.scale.set(.5,.75,15);let s=Math.atan2(n.x-this.x,n.z-this.z),c=Math.hypot(n.x-this.x,n.z-this.z),l=Cd(s-(i+e*Math.PI)),u=Cd(s-o),d=Math.sign(l)!==Math.sign(u)&&Math.abs(l)<1,f=n.y-this.y;if(!this.sweepHit&&d&&c<15&&c>2&&f<1&&f>-1.2&&t.hurtPlayer(22+t.time*.02,`sweep`)&&(this.sweepHit=!0),Math.random()<.5){let e=3+Math.random()*12;t.fx.burst(this.x+Math.sin(o)*e,this.y+.6,this.z+Math.cos(o)*e,1,16732112,2,.3,.5,0,1)}}if(this.stateT>r){for(let e of this.sweepBeams)e.visible=!1;this.atk=1.6,this.setState(`idle`)}break}}this.render(e)}dangerNear(e,t,n){if(super.dangerNear(e,t,n))return!0;if(this.state!==`sweep`)return!1;let r=Math.atan2(e-this.x,n-this.z),i=this.phase===3?2:1;for(let t=0;t<i;t++){let i=Cd(r-(this.sweepA+t*Math.PI))*this.sweepDir,a=Math.hypot(e-this.x,n-this.z);if(i>0&&i*a<4.5)return!0}return!1}startFists(){let e=this.game,t=e.player,n=[{x:t.x,z:t.z}];if(this.phase>=2&&n.push({x:t.x+t.vx*.9,z:t.z+t.vz*.9}),this.phase>=3){let e=Math.random()*Math.PI*2;n.push({x:t.x+Math.cos(e)*5,z:t.z+Math.sin(e)*5})}let r=1.35,i=this.phase===3?3.6:3.1;n.forEach((n,a)=>{let o=e.arena.heightAt(n.x,n.z),s=o>-999?o:t.y;this.tele(`circle`,n.x,s,n.z,i,0,0,r+a*.25),this.fists.push({x:n.x,z:n.z,y:s,t:r+a*.25,r:i,arm:a%2?this.armL:this.armR}),this.crackRing(n.x,n.z,i*.85,r+a*.25,this.phase===3?7:6)}),e.audio.sfx(`rumble`,.8),this.setState(`fist`)}startSweep(){let e=this.game.player;this.sweepDir=Math.random()<.5?1:-1,this.sweepA=Math.atan2(e.x-this.x,e.z-this.z)-this.sweepDir*Math.PI*.6;let t=this.phase===3?2:1;for(let e=0;e<t;e++)this.tele(`rect`,this.x,this.y,this.z,1,15,this.sweepA+e*Math.PI,1.1);this.game.banner(`Jump the sweeping beam!`,`hint`,1.6),this.setState(`sweepAim`)}fireShards(){let e=this.game,t=this.phase===1?5:7;for(let n=0;n<t;n++){let r=n/t*Math.PI*2;e.enemyShots.fire(this.x+Math.cos(r)*1.5,this.y+6.4,this.z+Math.sin(r)*1.5,Math.cos(r)*5,1.5,Math.sin(r)*5,12,{homing:.8,life:5,size:1.3,settleY:e.player.y+.9})}e.audio.sfx(`volley`,1),this.atk=2.2}render(e){let t=this.game.time;this.group.position.set(this.x,this.y+Math.sin(t*1.3)*.15,this.z),this.group.rotation.y=this.yaw,this.crown.rotation.y+=e*.6;let n=Math.sin(t*1.5)*.1,r=-Math.sin(t*1.5)*.1;for(let e of this.fists){let t=e.t>.25?-1.4:.6;e.arm===this.armL?n=t:r=t}this.armL.rotation.x+=(n-this.armL.rotation.x)*Math.min(1,e*10),this.armR.rotation.x+=(r-this.armR.rotation.x)*Math.min(1,e*10),this.state!==`sweepAim`&&(this.armL.rotation.z*=.9,this.armR.rotation.z*=.9)}dispose(){super.dispose();for(let e of this.sweepBeams)this.game.scene.remove(e),vd(e)}},nf=Math.PI/6,rf=Object.freeze({hp:15200,attackDmgMul:1,bossR:1.4,height:4.5,entryReady:1.75,seed:358957,rushDmg:22,slamDmg:26,boltDmg:14});function af(e,t,n,r,i,a){if(t>=kd.floorY+.6||Math.hypot(e-r,n-i)>9)return!1;let o=Math.atan2(e-r,n-i);return[0,1,2].some(e=>Math.abs(Cd(o-a-e*2*Math.PI/3))<=nf)}function of(e,t,n,r,i,a){let o=i-n,s=a-r,c=Math.max(0,Math.min(1,((e-n)*o+(t-r)*s)/(o*o+s*s||1)));return Math.hypot(e-n-c*o,t-r-c*s)}var sf=class extends Qd{encounterEpoch;id=`warden`;name=`The Last Warden`;title=`Keeper of the Final Lamp`;effPhase=1;combatStarted=!1;rng=new wd(rf.seed);attackCounts={rush:0,slam:0,volley:0};hitsTaken={rush:0,slam:0,volley:0,contact:0};boltsDropped=0;phaseRequests=[];nextAttack=0;dx=0;dz=1;rushLeft=0;rushHit=!1;slamAngle=0;gap=0;wavesLeft=0;rush={x:0,z:0,dx:0,dz:1,length:0,width:3.48};constructor(e,t=rf.hp,n=kd.bossSpawn.x,r=kd.bossSpawn.z,i=0){super(e,t,rf.bossR,rf.height),this.encounterEpoch=i,this.x=n,this.z=r,this.y=kd.floorY,this.entering=rf.entryReady;let a=(e,t,n,r,i)=>{let a=new K(e,new ko({color:t}));return a.position.set(n,r,i),this.group.add(a),a};a(new Fa(.7,1.3,2.8,7),3423817,0,1.5,0),a(new Na(1.15,1.1,.65),14208949,0,3.6,.15),a(new Na(.14,.65,.08),16761961,0,3.6,.51),a(new Ia(.85,.7,5),2370618,0,4.15,0),a(new Na(.35,2.5,.5),5531509,-1.15,2.2,0),a(new Na(.5,1.7,.8),7899793,1.1,2.7,0),a(new po(.52),16760151,.9,1.4,.75),a(new Fa(.035,.035,.8,4),11576705,.9,2,.75),this.group.position.set(n,-3,r),this.body.x=n,this.body.z=r,this.tele(`circle`,n,0,r,2.4,0,0,rf.entryReady)}debugSeed(e){this.rng=new wd(e)}epochOk(){return!this.dead&&this.encounterEpoch===this.game.final.encounterEpoch&&this.game.final.warden===this&&this.game.mode===`play`&&!this.game.combatStopped}onPhase(e){this.phaseRequests.push({requested:e,at:this.game.time})}think(e){if(!this.epochOk())return;if(this.entering>0){this.group.position.y=-3*Math.max(0,this.entering/rf.entryReady),this.contact(1.4,4.5,0);return}this.combatStarted||(this.combatStarted=!0,this.effPhase=this.phase,this.setState(`idle`),this.game.final.onCombatStart(this)),this.contact(1.4,4.5,0),this.runFsm(e);let t=Ad(kd,this.x,this.z,rf.bossR);t&&(this.x=t.x,this.z=t.z),this.group.position.set(this.x,this.y,this.z),this.group.rotation.y=this.yaw}recover(e){this.game.finalRoom?.clearTells(),this.recoverFor=e,this.setState(`recover`)}recoverFor=1.2;runFsm(e){let t=this.game,n=t.player;switch(this.state){case`idle`:{let r=n.x-this.x,i=n.z-this.z,a=Math.hypot(r,i);if(a>3&&(this.x+=r/a*1.2*e,this.z+=i/a*1.2*e),this.stateT<[1.4,1.1,.9][this.effPhase-1])break;let o=this.nextAttack++%3;if(o===0){this.attackCounts.rush++;let e=n.x-this.x,t=n.z-this.z,r=Math.hypot(e,t);this.dx=r?e/r:0,this.dz=r?t/r:1,this.yaw=Math.atan2(this.dx,this.dz),this.rushLeft=Math.min(10,jd(this.x,this.z,this.dx,this.dz,kd.roomR-rf.bossR)),this.rushHit=!1,Object.assign(this.rush,{x:this.x,z:this.z,dx:this.dx,dz:this.dz,length:this.rushLeft+rf.bossR,width:2*(rf.bossR+n.r)}),this.tele(`rect`,this.x,0,this.z,this.rush.width,this.rush.length,this.yaw,this.effPhase===3?.85:1),this.setState(`rushTell`)}else o===1?(this.attackCounts.slam++,this.slamAngle=this.rng.next()*Math.PI*2,t.finalRoom.showSectors(this.x,this.z,this.slamAngle),this.setState(`slamTell`)):(this.attackCounts.volley++,this.gap=Math.floor(this.rng.next()*16),this.wavesLeft=this.effPhase===1?1:2,t.finalRoom.showGap(this.x,this.z,this.gap),this.setState(`volleyTell`));break}case`rushTell`:this.stateT>=(this.effPhase===3?.85:1)&&this.setState(`rush`);break;case`rush`:{let r=Math.min(this.rushLeft,18*e),i=this.x,a=this.z;this.x+=this.dx*r,this.z+=this.dz*r,this.rushLeft-=r,!this.rushHit&&n.y<2&&of(n.x,n.z,i,a,this.x,this.z)<rf.bossR+n.r&&(this.rushHit=!0,t.hurtPlayer(rf.rushDmg*rf.attackDmgMul,`warden rush`)&&this.hitsTaken.rush++),this.rushLeft<=1e-9&&this.recover(1.2);break}case`slamTell`:this.stateT>=(this.effPhase===3?.9:1.1)&&(af(n.x,n.y,n.z,this.x,this.z,this.slamAngle)&&t.hurtPlayer(rf.slamDmg*rf.attackDmgMul,`warden slam`)&&this.hitsTaken.slam++,t.audio.sfx(`slam`),this.recover(1));break;case`volleyTell`:if(this.stateT>=.8){t.finalRoom.clearTells();let e=this.effPhase===3?7.5:6.5,n=t.enemyShots.countAlive();for(let n=0;n<16;n++){if((n-this.gap+16)%16<3)continue;let r=n*Math.PI/8;t.enemyShots.fire(this.x,1,this.z,Math.sin(r)*e,0,Math.cos(r)*e,rf.boltDmg*rf.attackDmgMul,{life:(kd.roomR+1)/e,size:.35/.32})}this.boltsDropped+=13-(t.enemyShots.countAlive()-n),this.wavesLeft--,this.setState(`volleyWait`)}break;case`volleyWait`:t.enemyShots.countAlive()===0&&(this.wavesLeft>0?(this.gap=(this.gap+5)%16,t.finalRoom.showGap(this.x,this.z,this.gap),this.setState(`volleyTell`)):this.recover(1.2));break;case`recover`:this.stateT>=this.recoverFor&&(this.effPhase=this.phase,this.setState(`idle`))}}dangerNear(e,t,n){return this.state===`slamTell`?af(e,t,n,this.x,this.z,this.slamAngle):this.state===`rushTell`||this.state===`rush`?of(e,n,this.rush.x,this.rush.z,this.rush.x+this.rush.dx*this.rush.length,this.rush.z+this.rush.dz*this.rush.length)<this.rush.width/2:!1}stopAttacks(){for(let e of this.teles)this.game.fx.cancelTelegraph(e);this.game.finalRoom?.clearTells(),this.game.enemyShots.clear()}dispose(){this.stopAttacks(),this.mat.dispose(),super.dispose()}snapshot(){return{hp:this.hp,maxHp:this.maxHp,effPhase:this.effPhase,state:this.state,stateT:this.stateT,combatStarted:this.combatStarted,attackCounts:{...this.attackCounts},hitsTaken:{...this.hitsTaken},boltsDropped:this.boltsDropped,phaseRequests:structuredClone(this.phaseRequests),rush:{...this.rush}}}},cf=e=>Math.max(345,e+30);function lf(e){if(e&&typeof e==`object`){Object.freeze(e);for(let t of Object.values(e))lf(t)}return e}var uf=class{g;phase=`none`;runEpoch=0;encounterEpoch=0;crownDeathAt=null;dueAt=null;warnedAt=null;dueReachedAt=null;transferredAt=null;combatStartedAt=null;endedAt=null;crownCheckpoint=null;transfer=null;warden=null;debugAssisted=!1;constructor(e){this.g=e}reset(){this.phase=`none`,this.runEpoch++,this.crownDeathAt=this.dueAt=this.warnedAt=this.dueReachedAt=this.transferredAt=this.combatStartedAt=this.endedAt=null,this.crownCheckpoint=null,this.transfer=null,this.warden=null,this.debugAssisted=!1}onCrownDefeated(e,t){this.phase===`none`&&(this.crownDeathAt=e,this.dueAt=cf(e),this.crownCheckpoint=lf(structuredClone(t)),this.phase=`survival`)}update(){this.phase===`survival`&&this.g.time>=this.dueAt-6&&(this.warnedAt=this.g.time,this.phase=`warned`,this.g.ui.banner(`The Last Warden stirs — gather your embers!`,`warn`,6),this.g.audio.sfx(`roar`,.6)),(this.phase===`survival`||this.phase===`warned`)&&this.g.time>=this.dueAt&&(this.warnedAt??=this.g.time,this.dueReachedAt=this.g.time,this.phase=`due`)}inRoom(){return[`entry`,`combat`,`won`,`lost`].includes(this.phase)}onCombatStart(e){e===this.warden&&e.encounterEpoch===this.encounterEpoch&&this.phase===`entry`&&(this.phase=`combat`,this.combatStartedAt=this.g.time)}onWardenDefeated(e){return e!==this.warden||e!==this.g.director.boss||e.encounterEpoch!==this.encounterEpoch||this.phase!==`combat`||this.g.mode!==`play`||this.g.combatStopped?!1:(this.phase=`won`,this.endedAt=this.g.time,e.stopAttacks(),!0)}onPlayerDefeated(){(this.phase===`entry`||this.phase===`combat`)&&(this.phase=`lost`,this.endedAt=this.g.time,this.warden?.stopAttacks())}tryTransfer(){let e=this.g,t=e.player;if(this.phase!==`due`||e.mode!==`play`||t.state===`dead`||t.hp<=0||e.combatStopped||e.choices.current||e.build.nextMilestone()||e.pendingChests||e.rewards.head()||e.ui.isRevealing||e.director.boss)return!1;let n=e.finalPreservedSnapshot(),r=t.hp;this.encounterEpoch++;let i=e.pickups.forfeitAll(),a=e.enemies.aliveCount,o=e.shots.countAlive(),s=e.enemyShots.countAlive();e.enemies.clear(),e.enemies.extra.length=0,e.shots.clear(),e.enemyShots.clear();let c=e.procs.spatialClear();e.fx.clear(),e.overlay.clear(),e.clearFinalSpatialRefs();let l=t.cancelTraversal(kd.spawn.x,kd.floorY,kd.spawn.z);e.input.clearEdges(),e.arena.setFinalDomain(kd),e.showFinalRoom(),e.flow.compute(t.x,t.z),e.resetFlowCell();let u=new sf(e,rf.hp,kd.bossSpawn.x,kd.bossSpawn.z,this.encounterEpoch);return this.warden=u,e.director.boss=u,e.enemies.extra.push(u.body),this.phase=`entry`,this.transferredAt=e.time,e.onBossSpawn(u),e.snapFinalCamera(),this.transfer=lf({at:e.time,hpBefore:r,hpAfter:t.hp,forfeited:i,clearedEnemies:a,clearedShots:o,clearedEnemyShots:s,...c,traversalCancelled:l,before:n,after:e.finalPreservedSnapshot()}),e.diag.log(e.time,`final_transfer`,i.xp,String(i.orbs)),!0}snapshot(){return structuredClone({phase:this.phase,runEpoch:this.runEpoch,encounterEpoch:this.encounterEpoch,crownDeathAt:this.crownDeathAt,dueAt:this.dueAt,warnedAt:this.warnedAt,dueReachedAt:this.dueReachedAt,transferredAt:this.transferredAt,combatStartedAt:this.combatStartedAt,endedAt:this.endedAt,crownCheckpoint:this.crownCheckpoint,transfer:this.transfer,warden:this.warden?.snapshot()??null,debugAssisted:this.debugAssisted})}debugEnter(){let e=this.g;return e.mode!==`play`||e.choices.current?!1:(this.debugAssisted=!0,e.director.boss?.dispose(),e.director.boss=null,this.phase=`due`,this.dueAt=e.time,this.dueReachedAt=e.time,this.tryTransfer())}},df=class{group=new U;sectors=[];gapMarkers=[];constructor(e){this.group.name=`Last Warden room`,e.add(this.group);let t=new K(new Pa(kd.floorR,64),new ko({color:3553092,side:2}));t.rotation.x=-Math.PI/2,t.position.y=-.01,this.group.add(t);let n=new K(new Fa(kd.roomR+.6,kd.roomR+.6,kd.rimH,64,1,!0),new Li({color:6340295,transparent:!0,opacity:.13,side:2,depthWrite:!1}));n.position.y=kd.rimH/2,this.group.add(n);let r=new K(new ho(kd.roomR-.08,kd.roomR+.08,64),new Li({color:15059349,side:2}));r.rotation.x=-Math.PI/2,r.position.y=.015,this.group.add(r);for(let e=0;e<8;e++){let t=e*Math.PI/4,n=Math.sin(t)*(kd.roomR+1.2),r=Math.cos(t)*(kd.roomR+1.2),i=new K(new Fa(.15,.25,1.8,6),new ko({color:4869208}));i.position.set(n,.9,r),this.group.add(i);let a=new K(new po(.28),new Li({color:16764778}));a.position.set(n,1.9,r),this.group.add(a)}for(let e=0;e<3;e++){let e=new oi;e.setAttribute(`position`,new Kr(new Float32Array(78),3));let t=[];for(let e=1;e<=24;e++)t.push(0,e,e+1);e.setIndex(t);let n=new K(e,new Li({color:16742488,transparent:!0,opacity:.45,depthWrite:!1,side:2}));n.visible=!1,n.frustumCulled=!1,this.sectors.push(n),this.group.add(n)}for(let e=0;e<2;e++){let e=new oi;e.setAttribute(`position`,new Kr(new Float32Array(6),3));let t=new ya(e,new da({color:12124133}));t.visible=!1,t.frustumCulled=!1,this.gapMarkers.push(t),this.group.add(t)}}show(){this.group.visible=!0}hide(){this.group.visible=!1,this.clearTells()}clearTells(){for(let e of[...this.sectors,...this.gapMarkers])e.visible=!1}showSectors(e,t,n){this.clearTells();for(let r=0;r<3;r++){let i=this.sectors[r],a=n+r*2*Math.PI/3,o=i.geometry.getAttribute(`position`);o.setXYZ(0,0,0,0);for(let n=0;n<=24;n++){let r=-nf+n*2*nf/24,i=Math.min(9,jd(e,t,Math.sin(r+a),Math.cos(r+a)));o.setXYZ(n+1,i*Math.sin(r),0,i*Math.cos(r))}o.needsUpdate=!0,i.position.set(e,.04,t),i.rotation.y=a,i.visible=!0,i.updateMatrixWorld(!0)}}showGap(e,t,n){this.clearTells();for(let r=0;r<2;r++){let i=(n+(r===0?-.5:2.5))*Math.PI/8,a=jd(e,t,Math.sin(i),Math.cos(i)),o=this.gapMarkers[r].geometry.getAttribute(`position`);o.setXYZ(0,e,.06,t),o.setXYZ(1,e+Math.sin(i)*a,.06,t+Math.cos(i)*a),o.needsUpdate=!0,this.gapMarkers[r].visible=!0}}dispose(){this.group.removeFromParent(),this.group.traverse(e=>{if(e instanceof K||e instanceof ya){e.geometry.dispose();for(let t of Array.isArray(e.material)?e.material:[e.material])t.dispose()}})}},ff=`Strength describes this offer. Effects suit different builds.`;function pf(e,t=0,n=100,r=0,i=0){return Object.freeze({hp:t,maxHp:n,invuln:r,time:i,stats:Object.freeze({...e.stats()})})}var mf=e=>e.toFixed(4).replace(/\.?0+$/,``),hf=e=>`+${mf(e*100)}%`,gf=e=>`Strength ${e} star${e>1?`s`:``}.`;function _f(e){return e.kind===`scored`?`<div class="strength-cue"><b>Strength ${e.strength}</b><span class="strength" aria-hidden="true">${`✦`.repeat(e.strength)}</span></div>`:e.reason===`no-immediate-gain`?`<div class="strength-cue none">No immediate equipped-weapon gain</div>`:``}function vf(e,t){let n=[];return(b[e][t]??[]).forEach((e,t)=>{e!==null&&!n.some(t=>t.value===e)&&n.push({value:e,strength:t+1})}),n.sort((e,t)=>e.value-t.value)}function yf(e,t,n){if(!(n>0))return null;let r=1;for(let i of vf(e,t))i.value<=n+1e-9&&(r=i.strength);return r}function bf(e,t){let n=t.weapon(e.id)?.prog??o(),r={...n,mods:{...n.mods},perks:[...n.perks]},i=t.stats();return r.mods[E(e.track)]+=e.amount,{before:j(e.id,n,i),after:j(e.id,r,i),modifier:e.amount}}var xf={dmg:`dmg`,rate:`cd`,count:`count`,pierce:`pierce`,size:`size`},Sf=()=>({kind:`unscored`,reason:`no-immediate-gain`});function Cf(e,t){let n=bf(e,t),r=xf[e.track];return!(e.amount>0)||Math.abs(n.after[r]-n.before[r])<=1e-9?Sf():{kind:`scored`,strength:yf(e.id,e.track,e.track===`count`?n.after.count-n.before.count:e.amount),basis:e.track===`count`?`resolved-count`:`amount`}}var wf={trinket:{lodestone:1,whetstone:2,bellows:2,lens:2,boots:2,flask:2,hearthstone:3,prism:3},relic:{skystep:3,quake:3,phoenix:3,gilded:3,bell:2,reel:3},heal:2,guard:2,surge:3,perk:3};function Tf(e){let t=e.stats();return e.weapons.flatMap(e=>{if(!e.prog)return[];let n=e.id,r=j(n,e.prog,t).count,i=j(n,e.prog,{...t,extraProj:t.extraProj+1}).count;return[{id:n,before:r,after:i,note:i===r?r>=k[n]?`cap ${k[n]}`:`every second Prism`:null}]})}function Ef(e){let t=e.stats(),n=[];for(let r of e.weapons){if(!r.prog){n.push(`legacy weapon area`);continue}let e=r.id,i=j(e,r.prog,t),a=j(e,r.prog,{...t,areaMul:t.areaMul+.12});if([`mortar`,`halo`,`lance`].includes(e)&&(n.push(`${Qu[e].name} ${e===`mortar`?`blast radius`:e===`halo`?`reach`:`beam width`} ${mf(i.size)} → ${mf(a.size)} m`),e===`lance`&&n.push(`Aimed width ${mf(i.aimedWidth)} → ${mf(a.aimedWidth)} m (cap 3.2 m)`),e===`mortar`))for(let e of[`aftershock`,`scorched_ground`,`double_shell`])r.prog.perks.includes(e)&&n.push(e.replaceAll(`_`,` `)+` inherits shell radius`);for(let[e,i]of[[`backdraft`,2.2],[`solar_burst`,1.8],[`glowburst`,1.5]])r.prog.perks.includes(e)&&n.push(`${e.replaceAll(`_`,` `)} ${mf(i*t.areaMul)} → ${mf(i*(t.areaMul+.12))} m`)}return n}function Df(e,t,n=pf(t)){switch(e.kind){case`upgrade`:return Cf(e,t);case`acquire`:return{kind:`unscored`,reason:`acquire`};case`weapon`:case`evolve`:return{kind:`unscored`,reason:`legacy`};case`trinket`:{let r=t.weapons.some(e=>!e.prog);return e.id===`prism`&&!r&&Tf(t).every(e=>e.after===e.before)||e.id===`flask`&&!Ef(t).length||e.id===`bellows`&&!r&&t.weapons.every(e=>{let t=e.id;return j(t,e.prog,n.stats).cd===O[t].minCd&&j(t,e.prog,{...n.stats,cdMul:n.stats.cdMul*.92}).cd===O[t].minCd})?Sf():{kind:`scored`,strength:wf.trinket[e.id],basis:`fixed`}}case`relic`:return{kind:`scored`,strength:wf.relic[e.id],basis:`fixed`};case`heal`:return Math.min(n.maxHp,n.hp+.4*n.maxHp)-n.hp<=1e-9?Sf():{kind:`scored`,strength:2,basis:`fixed`};case`guard`:return n.invuln>=2?Sf():{kind:`scored`,strength:2,basis:`fixed`};case`surge`:case`perk`:return{kind:`scored`,strength:3,basis:`fixed`};default:return M(e)}}function Of(e,t){let n=bf(e,t),r=Cf(e,t).kind===`unscored`;return e.track===`rate`?r?`No immediate equipped-weapon gain · fire-rate modifier ${hf(e.amount)} recorded (minimum cooldown reached)`:`Cooldown ${mf(n.before.cd)} → ${mf(n.after.cd)} s${n.after.cd===O[e.id].minCd?` (minimum cooldown reached)`:``}`:e.track===`count`?r?`No immediate equipped-weapon gain · count modifier +${mf(e.amount)} recorded (count cap reached)`:`Count modifier +${mf(e.amount)} · +${mf(n.after.count-n.before.count)} now · ${n.before.count} → ${n.after.count} (cap ${k[e.id]})`:e.track===`size`?`${e.id===`lance`?`Beam width`:`Radius`} ${mf(n.before.size)} → ${mf(n.after.size)} m`:``}function kf(e,t,n){let r=Df(e,t,n).kind===`unscored`,i=n.stats;switch(e.kind){case`trinket`:switch(e.id){case`lodestone`:return`Pickup reach +30% (base multiplier) · collection utility · ${mf(i.pickupMul)} → ${mf(i.pickupMul+.3)}×`;case`whetstone`:return`+10% damage (base multiplier) · all weapons · ${mf(i.dmgMul)} → ${mf(i.dmgMul+.1)}×`;case`bellows`:return r?`No immediate equipped-weapon gain · cooldown modifier −8% recorded (minimum cooldown reached)`:`−8% weapon cooldowns · all weapons · limited by each gun's minimum cooldown`;case`lens`:return`+6 percentage points crit chance, +0.15 crit multiplier · crit-eligible hits · ${mf(i.critChance*100)}% → ${mf((i.critChance+.06)*100)}%, ×${mf(i.critMult)} → ×${mf(i.critMult+.15)}`;case`boots`:return`+7% move speed, +4% jump`;case`flask`:return r?`No immediate equipped-weapon gain · area modifier +12% recorded`:`Area & reach +12% (radius/width) · supported area weapons/effects · ${Ef(t).join(` · `)}`;case`hearthstone`:return`+20 max health (current health +20 now) · +0.4 health/s`;case`prism`:return r?`No immediate equipped-weapon gain · extra-projectile modifier +1 recorded`:`+1 extra-projectile stat · ${Tf(t).map(e=>`${Qu[e.id].name} +${e.after-e.before} (${e.before} → ${e.after}${e.note?`; `+e.note:``})`).join(` · `)}`}break;case`heal`:return r?`No immediate gain · health already full`:`Restore up to 40% of max health (+${Math.round(Math.min(n.maxHp,n.hp+.4*n.maxHp)-n.hp)} now)`;case`guard`:return`At least 2 s of invulnerability; does not stack`+(r?` — current invulnerability already longer`:``);case`surge`:return`Blast within 9 m for ${Math.round(60+n.time*.4)} damage, then pull in all embers`;case`relic`:return nd[e.id].blurb+` · `+{skystep:`Double jump`,quake:`Landing impact, scales with fall height`,phoenix:`Once per run, revives at 50% health`,gilded:`Crit-eligible hits`,bell:`Pulls embers every 15 s (collection, not XP bonus)`,reel:`Dash cooldown ×0.6; double fire and immunity on ziplines`}[e.id]}return null}var Af=class{acquisitions=[];picks=[];perks=[];blocksPerCard={};ordinaryHands=0;rerolls=0;offered=0;passiveOffered=0;flexibleOffered=0;flexiblePassive=0;bonusEligibleOffered=0;bonusOffered=0;bonusIneligibleOffered=0;illegalBonusOffered=0;awardMismatch=0;awardMismatches=[];offeredHand(e,t){if(e.kind===`level`||e.kind===`cache`){this.offered+=e.offers.length,this.passiveOffered+=e.offers.filter(e=>e.kind===`trinket`).length,this.flexibleOffered+=Math.max(0,e.offers.length-e.lanes.length),this.flexiblePassive+=e.offers.filter(e=>e.kind===`trinket`).length;for(let n of e.offers)if(n.kind===`upgrade`){let e=t.weapon(n.id)?.prog;e&&l(e.picks)?(this.bonusEligibleOffered++,n.block===2&&this.bonusOffered++):(this.bonusIneligibleOffered++,n.block===2&&this.illegalBonusOffered++)}}}commit(e,t,n,r,i){if((e.kind===`level`||e.kind===`cache`)&&this.ordinaryHands++,t.kind===`upgrade`&&i){let e=i.to-i.from;this.blocksPerCard[e]=(this.blocksPerCard[e]??0)+1,this.picks.push({id:t.id,t:n,level:r,block:t.block,actual:e,picks:i.to}),e!==t.block&&(this.awardMismatch++,this.awardMismatches.length<8&&this.awardMismatches.push({id:t.id,block:t.block,actual:e,t:n}))}t.kind===`acquire`&&this.acquisitions.push({id:t.id,t:n,level:t.rewardLevel,slot:t.slot}),t.kind===`perk`&&this.perks.push({id:t.id,perk:t.perk,t:n,level:r})}snapshot(){return{botPolicy:`visual-v1`,offerPolicy:`weighted-flexible-candidate-progression-safeguard-v1`,acquisitions:structuredClone(this.acquisitions),upgradesByGun:Object.fromEntries(e.map(e=>[e,structuredClone(this.picks.filter(t=>t.id===e))])),perks:structuredClone(this.perks),blocksPerCard:{...this.blocksPerCard},laneGapMax:null,ordinaryHands:this.ordinaryHands,rerolls:this.rerolls,offered:this.offered,passiveOffered:this.passiveOffered,flexibleOffered:this.flexibleOffered,flexiblePassive:this.flexiblePassive,bonusEligibleOffered:this.bonusEligibleOffered,bonusOffered:this.bonusOffered,bonusIneligibleOffered:this.bonusIneligibleOffered,illegalBonusOffered:this.illegalBonusOffered,awardMismatch:this.awardMismatch,awardMismatches:structuredClone(this.awardMismatches)}}},jf=class{seq=0;items=[];pushLevel(e){let t=e===5?1:e===12?2:e===20?3:null;return this.push({src:`level`,level:e},t?{slot:t,level:e}:null)}pushCache(){return this.push({src:`cache`},null)}push(e,t){let n=Object.freeze({rid:++this.seq,arrival:this.seq,origin:Object.freeze({...e}),unlock:t?Object.freeze({...t}):null});return this.items.push(n),n}head(){return this.items[0]}consume(e){return this.head()?.rid===e&&(this.items.shift(),!0)}clear(){this.items.length=0}},Mf=[`whetstone`,`bellows`,`lens`,`prism`],Nf=class{roster;weapons=[];trinkets=new Map;relics=new Set;rerolls=2;dealt=new Map;handSeq=0;unlocked=new Set;constructor(e=`candidate`){this.roster=e,this.addWeapon(`wick`)}addWeapon(e,n=1){this.weapons.push({id:e,slot:this.weapons.length,lastLaned:-1/0,origin:this.weapons.length?`acquire`:`start`,acquiredLevel:n,level:1,timer:.2,spin:0,prog:this.roster===`candidate`&&t(e)?o():null})}weapon(e){return this.weapons.find(t=>t.id===e)}trinket(e){return this.trinkets.get(e)??0}legacyLevel(e){return e.level}hasPerk(e,t){return!!this.weapon(e)?.prog?.perks.includes(t)}grantPerk(e,t){let n=this.weapon(e)?.prog;return!n||!c(n).length||!h(e,n.perks).includes(t)?!1:(n.perks.push(t),!0)}nextMilestone(){for(let e of this.weapons){if(!e.prog)continue;let t=c(e.prog)[0];if(t)return{id:e.id,threshold:t}}return null}progressionSnapshot(){return this.weapons.flatMap(e=>e.prog?[{id:e.id,picks:e.prog.picks,tier:s(e.prog.picks).tier,pips:s(e.prog.picks).label,mods:{...e.prog.mods},perks:[...e.prog.perks],pending:c(e.prog)}]:[])}gunViews(){let e=this.stats();return this.weapons.flatMap(t=>{if(!t.prog)return[];let n=s(t.prog.picks),r=Qu[t.id];return[{id:t.id,name:r.name,icon:r.icon,color:r.color,picks:t.prog.picks,tier:n.tier,tierColor:n.color,label:n.label,max:n.max,done:n.done,span:n.span,perks:[...t.prog.perks],pending:c(t.prog),r:j(t.id,t.prog,e)}]})}gunSummaries(e){return this.gunViews().map(t=>{let n=e[t.id],r=n.primary+n.secondary+n.dot;return{id:t.id,name:t.name,icon:t.icon,color:t.color,picks:t.picks,tier:t.tier,label:t.label,perks:t.perks.map(e=>p[e].name),dealt:r,secondaryShare:(n.secondary+n.dot)/Math.max(1,r)}})}previewOffer(e){if(e.kind!==`upgrade`)return null;let t=this.weapon(e.id)?.prog;if(!t)return null;let n={picks:t.picks,mods:{...t.mods},perks:[...t.perks]},r=Rf(n,e),i=this.stats();return{before:j(e.id,t,i),after:j(e.id,n,i),picksBefore:t.picks,picksAfter:n.picks,award:r.to-r.from,crossed:r.crossed}}acquireOffers(t,n,r){let i=e.filter(e=>!this.weapon(e));for(let e=i.length-1;e>0;e--){let n=Math.floor(t.next()*(e+1));[i[e],i[n]]=[i[n],i[e]]}return i.slice(0,3).map(e=>({kind:`acquire`,id:e,slot:n,rewardLevel:r}))}flexiblePool(e=[]){let t=[],n=this.stats();for(let r of this.weapons){if(!r.prog)continue;let i=r.id,o=a[i].filter(t=>ee(i,r.prog,t,n)&&!e.some(e=>e.kind===`upgrade`&&e.id===i&&e.track===t)),s=o.reduce((e,t)=>e+x[t],0);for(let e of o)t.push({o:{kind:`upgrade`,id:i,track:e,rarity:`basic`,amount:0,block:+(r.prog.picks<12)},w:x[e]/s*(r.prog.picks===12?.5:1)})}for(let n of td){let r=this.trinket(n);r>=ed[n].max||!r&&this.trinkets.size>=4||e.some(e=>e.kind===`trinket`&&e.id===n)||t.push({o:{kind:`trinket`,id:n,level:r+1},w:r?1:.75})}return t}offers(e,t,n=3){if(this.roster===`legacy`)return this.legacyOffers(e,t,n);let r=[],i=t=>{if(!t.length)return null;let n=e.next()*t.reduce((e,t)=>e+t.w,0);for(let e of t)if(n-=e.w,n<=0)return e.o;return t[t.length-1].o},a=this.stats(),o=e=>e.kind===`upgrade`&&Ff(e,this.weapon(e.id)?.prog,a),s=null;for(;s===null&&r.length<n;){let t=i(this.flexiblePool(r));if(!t)break;r.length+1>=n?s=t:r.push(this.materialize(t,e))}if(s){if(!r.some(o)&&!o(s)){let e=i(this.flexiblePool(r).filter(e=>o(e.o)));e&&(s=e)}if(!r.some(Pf)&&!Pf(s)){let e=i(this.flexiblePool(r).filter(e=>Pf(e.o)));e&&(s=e)}r.push(this.materialize(s,e))}return Lf(r,n,[`heal`,`surge`,`guard`]),r}materialize(e,t){if(e.kind!==`upgrade`)return e;let n=this.weapon(e.id).prog,r=b[e.id][e.track],i=If(t,C.filter((e,t)=>r[t]!==null)),a=+Math.min(r[C.indexOf(i)],D(e.id,n.mods,e.track)).toFixed(6),o=n.picks>=12?0:l(n.picks)&&t.next()<.2?2:1;return{...e,rarity:i,amount:a,block:o}}stats(){let e=e=>this.trinket(e),t=this.relics.has(`gilded`);return{dmgMul:1+.1*e(`whetstone`),cdMul:.92**e(`bellows`),critChance:.06+.06*e(`lens`)+(t?.1:0),critMult:2+.15*e(`lens`)+(t?.5:0),moveMul:1+.07*e(`boots`),jumpMul:1+.04*e(`boots`),pickupMul:1+.3*e(`lodestone`),maxHpBonus:20*e(`hearthstone`),regen:.4*e(`hearthstone`),extraProj:e(`prism`),areaMul:1+.12*e(`flask`)}}singleTargetDps(){let e=this.stats(),t=1+e.critChance*(e.critMult-1),n=0;for(let r of this.weapons){if(r.prog){n+=pe(j(r.id,r.prog,e),r.prog.perks);continue}let i=Qu[r.id],a=i.levels[Math.min(i.levels.length-1,r.level-1)],o=a.cd*e.cdMul,s=a.count+e.extraProj,c;switch(r.id){case`wick`:case`comets`:case`mortar`:case`starfall`:c=s/o;break;case`flare`:case`dragon`:c=s*.5/o;break;case`arc`:case`lance`:c=1/o;break;case`storm`:c=2/o;break;case`dawn`:c=1.5/o;break;case`halo`:case`hearthwheel`:c=.5/o;break;default:c=s*.8/o}n+=a.dmg*e.dmgMul*t*c}return n}evolutions(){let e=[];if(this.roster===`candidate`)return e;for(let t of this.weapons){if(t.prog)continue;let n=Qu[t.id];!n.evolved&&n.evolvesInto&&n.evolvesWith&&t.level>=5&&this.trinket(n.evolvesWith)>0&&e.push({from:t.id,into:n.evolvesInto})}return e}candidates(e){let t=[],n=new Set(this.weapons.map(e=>e.id));for(let e of this.weapons)Qu[e.id].evolved||e.level>=5||t.push({o:{kind:`weapon`,id:e.id,level:e.level+1},w:1.35});if(this.weapons.length<4){let r=this.weapons.length<2?3:this.weapons.length<3&&e>=4?1.6:.9;for(let e of $u)n.has(e)||n.has(Qu[e].evolvesInto)||t.push({o:{kind:`weapon`,id:e,level:1},w:r/2})}for(let e of td){let n=this.trinket(e);if(n>=ed[e].max||n===0&&this.trinkets.size>=4)continue;let r=n>0?1:.75;this.weapons.some(t=>Qu[t.id].evolvesWith===e)&&(r+=.55),t.push({o:{kind:`trinket`,id:e,level:n+1},w:r})}return t}legacyOffers(e,t,n=3){let r=this.candidates(t),i=[];for(;i.length<n&&r.length>0;){let t=0;for(let e of r)t+=e.w;let n=e.next()*t,a=0;for(;a<r.length-1&&(n-=r[a].w,!(n<=0));a++);i.push(r[a].o),r.splice(a,1)}if(!i.some(e=>Pf(e))){let t=r.filter(e=>Pf(e.o));t.length>0&&i.length>0?i[i.length-1]=e.pick(t).o:t.length>0&&i.push(e.pick(t).o)}return Lf(i,n,[`heal`,`surge`,`guard`]),i}chestOffers(e){let t=this.evolutions().map(e=>({kind:`evolve`,from:e.from,into:e.into})),n=rd.filter(e=>!this.relics.has(e)),r=[...t.slice(0,2)],i=[...n];for(let t=i.length-1;t>0;t--){let n=Math.floor(e.next()*(t+1));[i[t],i[n]]=[i[n],i[t]]}for(let e of i){if(r.length>=3)break;r.push({kind:`relic`,id:e})}return Lf(r,3,[`surge`,`heal`,`guard`]),r}apply(e){if(e.kind===`upgrade`){let t=this.weapon(e.id)?.prog;if(!t)return{crossed:[],step:null};let n=Rf(t,e);return{crossed:n.crossed,step:n}}if(e.kind===`perk`)return this.grantPerk(e.id,e.perk),{crossed:[],step:null};switch(e.kind){case`acquire`:!this.weapon(e.id)&&this.weapons.length===e.slot&&e.slot<4&&(this.addWeapon(e.id,e.rewardLevel),this.unlocked.add(e.rewardLevel));break;case`weapon`:{let t=this.weapon(e.id);if(t?.prog){let e=f(t.prog);return{crossed:e.crossed,step:e}}t?t.level=Math.min(5,t.level+1):this.weapons.length<4&&this.addWeapon(e.id);break}case`trinket`:this.trinkets.set(e.id,Math.min(ed[e.id].max,this.trinket(e.id)+1));break;case`evolve`:{let t=this.weapon(e.from);t&&(t.prog=null,t.id=e.into,t.level=1,t.timer=0);break}case`relic`:this.relics.add(e.id)}return{crossed:[],step:null}}};function Pf(e){return e.kind===`upgrade`||e.kind===`weapon`||e.kind===`evolve`||e.kind===`trinket`&&Mf.includes(e.id)}function Ff(e,t,n){if(e.kind!==`upgrade`||!t||!u(t.picks,1)||!a[e.id].includes(e.track))return!1;let r=b[e.id][e.track],i=D(e.id,t.mods,e.track);if(!r)return!1;let o=!1;for(let a of r){if(a===null)continue;o=!0;let r=+Math.min(a,i).toFixed(6);if(!(r>0)||!ee(e.id,t,e.track,n,r))return!1}return o}function If(e,t){let n=e.next()*t.reduce((e,t)=>e+i[t],0);for(let e of t)if(n-=i[e],n<=0)return e;return t[t.length-1]}function Lf(e,t,n){for(let r of n)e.length<t&&!e.some(e=>e.kind===r)&&e.push({kind:r})}function Rf(e,t){let n=E(t.track);return!Number.isFinite(t.amount)||t.amount<=0?{from:e.picks,to:e.picks,crossed:[]}:(e.mods[n]=Math.min(g[t.id][n],e.mods[n]+t.amount),d(e,t.block))}function zf(e){switch(e.kind){case`weapon`:case`trinket`:return`${e.kind}:${e.id}:${e.level}`;case`evolve`:return`evolve:${e.from}>${e.into}`;case`relic`:return`relic:${e.id}`;case`upgrade`:return`up:${e.id}:${e.track}:${e.rarity}:${+e.amount.toFixed(2)}:${e.block}`;case`acquire`:return`acq:${e.id}:${e.slot}:${e.rewardLevel}`;case`perk`:return`perk:${e.id}:${e.threshold}:${e.perk}`;default:return e.kind}}var Bf=class{seq=0;current=null;accepted=0;rejected=0;open(e,t,n=null,r={}){let i=[],a=[];for(let e of t){let t=zf(e);i.includes(t)||(i.push(t),a.push(Object.freeze({...e})))}return this.current=Object.freeze({rewardId:r.rewardId??null,slot:r.slot??null,rewardLevel:r.rewardLevel??null,lanes:Object.freeze([...r.lanes??[]]),chestSeq:r.chestSeq??null,token:++this.seq,kind:e,offers:Object.freeze(a),keys:Object.freeze(i),milestone:n?Object.freeze({...n}):null}),this.current}lookup(e,t){let n=this.current;if(!n)return`closed`;if(e!==n.token)return`stale`;let r=n.keys.indexOf(t);return r<0?`unknown`:{offer:n.offers[r],session:n}}close(){this.current=null}reset(){this.current=null,this.accepted=0,this.rejected=0}},Vf=class{hits=0;pending=!1;cd=0;clamped=0;addHit(){this.pending?this.clamped++:++this.hits>=10&&(this.hits=0,this.pending=!0)}tick(e){return this.cd=Math.max(0,this.cd-e),this.pending&&this.cd<=0?(this.pending=!1,this.cd=ne,!0):!1}reset(){this.hits=0,this.pending=!1,this.cd=0,this.clamped=0}},Hf=class{pools=[];clock=0;replaced=0;ticks=0;last=new Map;dedupeDropped=0;get trackedTargets(){return this.last.size}spawn(e,t,n,r,i=oe){this.pools.length>=3&&(this.pools.shift(),this.replaced++),this.pools.push({x:e,y:t,z:n,life:2,tickT:0,dmg:r,r:i})}update(e,t){this.clock+=e;for(let[e,t]of this.last)this.clock-t>=.499999&&this.last.delete(e);for(let t=this.pools.length-1;t>=0;t--){let n=this.pools[t];n.life-=e,n.life<=0&&this.pools.splice(t,1)}for(let n of this.pools)n.tickT-=e,!(n.tickT>0)&&(n.tickT+=se,this.ticks++,t(n,e=>{let t=this.last.get(e);return t!==void 0&&this.clock-t<.499999?!1:t===void 0&&this.last.size>=512?(this.dedupeDropped++,!1):!0},e=>{this.last.set(e,this.clock)}))}clear(){this.pools.length=0,this.last.clear()}reset(){this.pools.length=0,this.clock=0,this.replaced=0,this.ticks=0,this.last.clear(),this.dedupeDropped=0}},Uf=()=>({acceptedPrimary:Object.fromEntries(e.map(e=>[e,0])),rejectedHits:0,volleys:0,extraVolleys:0,volleyDropped:0,ringBursts:0,ringDropped:0,heavyBolts:0,heavyDropped:0,ricochets:0,forks:0,doubleStrikes:0,thunderclaps:0,discharges:0,poolsSpawned:0,poolsSkipped:0,poolTicks:0,shotsDropped:0,ricochetDropped:0}),Wf=()=>Object.fromEntries(e.map(e=>[e,{primary:0,secondary:0,dot:0}])),Gf=class{items=[];dropped=0;add(e){return this.items.length>=64||[`double_volley`,`twin_burst`,`echo_beam`,`double_shell`].includes(e.effect)&&this.items.some(t=>t.gun===e.gun&&t.effect===e.effect)?(this.dropped++,!1):(this.items.push({...e,snap:Object.freeze({...e.snap})}),!0)}update(e,t,n=()=>!0){for(let t of this.items)t.t-=e;let r=this.items.filter(e=>e.t<=0);this.items=this.items.filter(e=>e.t>0);for(let e of r){if(!n())break;t(e)}}clear(){this.items.length=0}},Kf=class{clock=0;items=new Map;refreshes=0;ticks=0;rejected=0;dropped=0;apply(e,t,n){if(!e.alive)return;let r=`${e.id}|${t}`,i=this.items.get(r);i?(i.ticksLeft=3,i.dmg=Math.max(i.dmg,n),this.refreshes++):this.items.size>=512?this.dropped++:this.items.set(r,{e,id:e.id,gun:t,dmg:n,ticksLeft:3,nextT:this.clock+.5})}update(e,t,n=()=>!0){this.clock+=e;for(let[e,r]of this.items){if(!n())break;if(!r.e.alive||r.e.id!==r.id)this.items.delete(e);else{for(;r.nextT<=this.clock+1e-9&&r.ticksLeft>0&&n();)r.e.emerge>.25||r.e.falling||!t(r.e,r.dmg,r.gun)?this.rejected++:this.ticks++,r.ticksLeft--,r.nextT+=.5;r.ticksLeft<=0&&this.items.delete(e)}}}clear(){this.items.clear()}},qf=class{orbit=new Map;outer=new Map;ready(e,t,n){return(this[e].get(t)??-1)<=n}mark(e,t,n){this[e].set(t,n)}prune(e){for(let t of[this.orbit,this.outer])for(let[n,r]of t)r<=e&&t.delete(n)}clear(){this.orbit.clear(),this.outer.clear()}},Jf=class{game;ring=new Vf;pools=new Hf;mortarPools=new Hf;delays=new Gf;dots=new Kf;halo=new qf;pulseT=0;cycles=Object.fromEntries(e.map(e=>[e,0]));rootVolleys=Object.fromEntries(e.map(e=>[e,0]));effect=Object.fromEntries(Object.keys(p).map(e=>[e,0]));dropped={};liveSecondaryPeak=Object.fromEntries(e.map(e=>[e,0]));wick={volleyT:0,volleyPending:!1,cycles:0};arc={cycles:0};counters=Uf();dealtByKind=Wf();constructor(e){this.game=e}reset(){this.terminalStop(),this.dots=new Kf,this.delays=new Gf,this.dropped={};for(let t of e)this.cycles[t]=0,this.rootVolleys[t]=0,this.liveSecondaryPeak[t]=0;for(let e of Object.keys(p))this.effect[e]=0;this.ring.reset(),this.pools.reset(),this.mortarPools.reset(),this.wick={volleyT:0,volleyPending:!1,cycles:0},this.arc={cycles:0},this.counters=Uf(),this.dealtByKind=Wf()}onAccepted(e,t,n){this.dealtByKind[e][t]+=n,t===`primary`&&(this.counters.acceptedPrimary[e]++,!this.game.combatStopped&&e===`wick`&&this.game.build.hasPerk(`wick`,`ember_ring`)&&this.ring.addHit())}update(t){let n=this.game;if(!n.combatStopped){this.dots.update(t,(e,t,r)=>n.dealDamage(e,t,r,0,0,0,!1,`dot`,!0)!==0,()=>!n.combatStopped),this.halo.prune(n.time);for(let t of e)this.liveSecondaryPeak[t]=Math.max(this.liveSecondaryPeak[t],n.shots.countSecondary(t));this.ring.tick(t)&&n.build.hasPerk(`wick`,`ember_ring`)&&this.emitRing();for(let[e,r]of[[`arc`,this.pools],[`mortar`,this.mortarPools]])r.update(t,(t,r,i)=>{n.enemies.query(t.x,t.z,t.r,a=>{a.emerge>.25||a.falling||a.y<t.y-.6||a.y>t.y+1||!r(a.id)||n.dealDamage(a,t.dmg,e,0,0,0,!1,`dot`,!0)!==0&&(n.combatStopped||i(a.id),this.counters.poolTicks++)}),n.fx.ring(t.x,t.y+.05,t.z,.6,oe,.45,7327999,.7)})}}emitRing(){let e=this.game;if(!this.quota(`wick`,8,`ember_ring`)){this.counters.ringDropped++;return}let t=e.build.weapon(`wick`)?.prog;if(!t)return;let n=j(`wick`,t,e.stats),r=e.player;for(let t=0;t<8;t++){let i=t*Math.PI/4+this.counters.ringBursts*.39,a=e.shots.spawn(`bolt`,`wick`,r.x,r.y+1.25,r.z,Math.sin(i)*20,0,Math.cos(i)*20,n.dmg*te,0,re,n.knock,`#ffb347`,.28);a?(a.hitKind=`secondary`,a.noCrit=!0):this.counters.shotsDropped++}this.counters.ringBursts++,this.effect.ember_ring++,e.fx.ring(r.x,r.y+.3,r.z,.3,2.2,.25,16757575,.8)}spawnPool(e,t,n){if(this.game.combatStopped)return;let r=this.game,i=r.arena.heightAt(e,t);i<=-999?this.counters.poolsSkipped++:(this.pools.spawn(e,i,t,n),this.counters.poolsSpawned++,r.fx.ring(e,i+.05,t,.3,oe,.4,7327999,.9))}tryRicochet(e,t){let n=this.game;if(!this.quota(`wick`,1,`ricochet`))return this.counters.ricochetDropped++,!1;let r=n.enemies.nearest(t.x,t.y,t.z,6,new Set(e.hits));if(!r)return!1;let i=r.x-e.x,a=r.y+r.def.height*.5*r.scale-e.y,o=r.z-e.z,s=Math.hypot(i,a,o)||1,c=Math.hypot(e.vx,e.vy,e.vz)||1;return e.ricocheted=!0,e.hitKind=`secondary`,e.noCrit=!0,e.pierce=0,e.vx=i/s*c,e.vy=a/s*c,e.vz=o/s*c,e.life=s/c+.2,this.counters.ricochets++,this.effect.ricochet++,!0}spatialClear(){let e={clearedDelays:this.delays.items.length,clearedDots:this.dots.items.size,clearedPools:this.pools.pools.length+this.mortarPools.pools.length,clearedHaloMarks:this.halo.orbit.size+this.halo.outer.size};return this.delays.clear(),this.dots.clear(),this.pools.clear(),this.mortarPools.clear(),this.halo.clear(),e}snapshotCounters(){let e=e=>({clock:e.clock,replaced:e.replaced,ticks:e.ticks,dedupeDropped:e.dedupeDropped});return structuredClone({counters:this.counters,dealtByKind:this.dealtByKind,rootVolleys:this.rootVolleys,effect:this.effect,dropped:this.dropped,liveSecondaryPeak:this.liveSecondaryPeak,cycles:this.cycles,wick:{volleyT:this.wick.volleyT,cycles:this.wick.cycles},arc:this.arc,ring:{hits:this.ring.hits,cd:this.ring.cd,clamped:this.ring.clamped},pulseT:this.pulseT,dots:{clock:this.dots.clock,ticks:this.dots.ticks,refreshes:this.dots.refreshes,rejected:this.dots.rejected,dropped:this.dots.dropped},delays:{dropped:this.delays.dropped},pools:e(this.pools),mortarPools:e(this.mortarPools)})}terminalStop(){this.delays.clear(),this.dots.clear(),this.pools.clear(),this.mortarPools.clear(),this.halo.clear(),this.ring.hits=0,this.ring.pending=!1,this.ring.cd=0,this.wick.volleyPending=!1,this.pulseT=0}drop(e,t){let n=this.dropped[e]??(this.dropped[e]={});n[t]=(n[t]??0)+1}quota(e,t,n){return this.game.combatStopped?!1:this.game.shots.countSecondary(e)+t>fe[e]?(this.drop(n,`quota`),!1):this.game.shots.countSecondary()+t>288?(this.drop(n,`global`),!1):!0}delay(e){if(this.game.combatStopped)return!1;let t=this.delays.add(e);return t||this.drop(e.effect,`delay`),t}onShotAccepted(e,t){this.game.combatStopped||e.gun===`flare`&&(e.role===`main`||e.role===`echo`)&&this.game.build.hasPerk(`flare`,`hot_coals`)&&(this.dots.apply(t,`flare`,.2*e.dmgBase),this.effect.hot_coals++)}onSpent(e,t){let n=this.game;if(n.combatStopped)return!1;if(e.gun===`wick`&&e.hitKind===`primary`&&!e.ricocheted&&n.build.hasPerk(`wick`,`ricochet`))return this.tryRicochet(e,t);if(e.gun!==`firefly`||e.role!==`main`||(!e.burstDone&&n.build.hasPerk(`firefly`,`glowburst`)&&(e.burstDone=!0,this.effect.glowburst++,n.explode(t.x,t.y+.6,t.z,1.5*n.stats.areaMul,.5*e.dmgBase,1,`firefly`,e.color,`secondary`,!0)),n.combatStopped||!n.build.hasPerk(`firefly`,`second_flight`)||!this.quota(`firefly`,1,`second_flight`)))return!1;e.seek=8;let r=n.shots.seekTarget(e);return r?(e.role=`second`,e.hitKind=`secondary`,e.noCrit=!0,e.pierce=0,e.dmg=.6*e.dmgBase,e.life=Math.min(e.life,1.5),e.target=r,e.targetId=r.id,this.effect.second_flight++,!0):!1}onShellLanded(e,t){let n=this.game;if(!(n.combatStopped||e.role!==`main`)){if(n.build.hasPerk(`mortar`,`aftershock`)&&this.delay({gun:`mortar`,effect:`aftershock`,t:.25,snap:{x:e.tx,y:e.ty+.3,z:e.tz,size:.6*e.area,dmg:.5*e.dmgBase,knock:e.knock}}),n.build.hasPerk(`mortar`,`shrapnel`)&&this.quota(`mortar`,6,`shrapnel`)){this.effect.shrapnel++;for(let r=0;r<6;r++){let i=r*Math.PI/3+this.cycles.mortar*.5,a=n.shots.spawn(`fragment`,`mortar`,e.tx,e.ty+.6,e.tz,Math.sin(i)*16,0,Math.cos(i)*16,.3*e.dmgBase,0,.7,1.5,`#ffae68`);a?(a.hitKind=`secondary`,a.noCrit=!0,a.role=`fragment`,a.hits.push(...t)):this.drop(`shrapnel`,`pool700`)}}if(e.lead&&n.build.hasPerk(`mortar`,`scorched_ground`)){let t=n.arena.heightAt(e.tx,e.tz);t>-999?(this.mortarPools.spawn(e.tx,t,e.tz,.2*e.dmgBase,.6*e.area),this.effect.scorched_ground++):this.drop(`scorched_ground`,`void`)}}}snapshot(){return{...this.counters,acceptedPrimary:{...this.counters.acceptedPrimary},dealtByKind:structuredClone(this.dealtByKind),rootVolleys:{...this.rootVolleys},effect:{...this.effect},dropped:structuredClone(this.dropped),liveSecondaryPeak:{...this.liveSecondaryPeak},dotTicks:this.dots.ticks,dotRejected:this.dots.rejected,dotRefreshes:this.dots.refreshes,dotDropped:this.dots.dropped,delayDropped:this.delays.dropped,activeDots:this.dots.items.size,activeDelays:this.delays.items.length,activePools:this.pools.pools.length+this.mortarPools.pools.length,poolsReplaced:this.pools.replaced,poolDedupeDropped:this.pools.dedupeDropped,poolTrackedTargets:this.pools.trackedTargets,ringPending:this.ring.pending,ringClamped:this.ring.clamped,liveSecondary:this.game.shots.countSecondary()}}},Yf=14400,Xf=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,1.414],[1,-1,1.414],[-1,1,1.414],[-1,-1,1.414]],Zf=class e{arena;dist=new Float32Array(Yf);dirX=new Float32Array(Yf);dirZ=new Float32Array(Yf);targetCell=-1;heap=new Qf(Yf*4);constructor(e){this.arena=e}static stepCost(e,t){let n=t-e;return n>.6?2+n*2.2:0}compute(t,n){let r=this.arena,i=Math.floor(t+60),a=Math.floor(n+60);if(!r.isWalkable(i,a)){let e=r.nearestWalkable(t,n,10);if(!e)return;i=Math.floor(e.x+60),a=Math.floor(e.z+60)}let o=a*120+i;this.targetCell=o;let s=this.dist;s.fill(1/0),s[o]=0;let c=this.heap;for(c.clear(),c.push(o,0);c.size>0;){let t=c.popIndex(),n=c.lastKey;if(n>s[t])continue;let i=t%120,a=t/120|0,o=r.cellHeight(i,a);for(let t=0;t<8;t++){let l=Xf[t][0],u=Xf[t][1],d=i+l,f=a+u;if(d<0||f<0||d>=120||f>=120)continue;let p=r.cellHeight(d,f);if(p<-500)continue;if(t>=4){let e=r.cellHeight(i+l,a),t=r.cellHeight(i,a+u);if(e<-500||t<-500||Math.abs(e-o)>.6||Math.abs(t-o)>.6)continue}let m=n+Xf[t][2]+e.stepCost(p,o),h=f*120+d;m<s[h]&&(s[h]=m,c.push(h,m))}}for(let e=0;e<Yf;e++){this.dirX[e]=0,this.dirZ[e]=0;let t=s[e];if(t===1/0||t===0)continue;let n=e%120,r=e/120|0,i=t,a=0,o=0;for(let e=0;e<8;e++){let t=n+Xf[e][0],c=r+Xf[e][1];if(t<0||c<0||t>=120||c>=120)continue;let l=s[c*120+t];l<i&&(i=l,a=Xf[e][0],o=Xf[e][1])}let c=Math.hypot(a,o)||1;this.dirX[e]=a/c,this.dirZ[e]=o/c}}distAt(e,t){let n=Math.floor(e+60),r=Math.floor(t+60);return n<0||r<0||n>=120||r>=120?1/0:this.dist[r*120+n]}},Qf=class{keys;vals;size=0;lastKey=0;constructor(e){this.keys=new Float32Array(e),this.vals=new Int32Array(e)}clear(){this.size=0}push(e,t){if(this.size>=this.keys.length)return;let n=this.size++,r=this.keys,i=this.vals;for(;n>0;){let e=n-1>>1;if(r[e]<=t)break;r[n]=r[e],i[n]=i[e],n=e}r[n]=t,i[n]=e}popIndex(){let e=this.keys,t=this.vals,n=t[0];this.lastKey=e[0];let r=--this.size;if(r>0){let n=e[r],i=t[r],a=0;for(;;){let i=2*a+1;if(i>=r||(i+1<r&&e[i+1]<e[i]&&i++,e[i]>=n))break;e[a]=e[i],t[a]=t[i],a=i}e[a]=n,t[a]=i}return n}},$f={[Bd.Grass]:[.3,.5,.3],[Bd.Stone]:[.62,.52,.44],[Bd.Sand]:[.72,.58,.4],[Bd.Wood]:[.55,.36,.22],[Bd.Crumble]:[.5,.33,.24],[Bd.Vent]:[.3,.5,.58],[Bd.Moss]:[.26,.47,.36]},ep=class{arena;group=new U;cellTex;cellData;material;constructor(e){this.arena=e,this.cellData=new Uint8Array(57600),this.cellTex=new Zi(this.cellData,120,120,I,Te),this.cellTex.magFilter=ye,this.cellTex.minFilter=ye,this.cellTex.needsUpdate=!0,this.material=new ko({vertexColors:!0,side:2});let t={value:this.cellTex};this.material.onBeforeCompile=e=>{e.uniforms.uCellTex=t,e.uniforms.uTime=dd.time,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
          attribute vec2 aCell;
          uniform sampler2D uCellTex;
          uniform float uTime;
          varying float vHeat;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
          vec4 cs = texelFetch(uCellTex, ivec2(aCell), 0);
          float drop = cs.r * cs.r * 40.0;
          transformed.y -= drop;
          transformed.x += sin(uTime * 47.0 + aCell.x * 3.1) * cs.g * 0.09;
          transformed.z += cos(uTime * 53.0 + aCell.y * 2.7) * cs.g * 0.09;
          vHeat = cs.b;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
          uniform float uTime;
          varying float vHeat;`).replace(`#include <opaque_fragment>`,`outgoingLight = mix(outgoingLight, vec3(1.0, 0.36, 0.16), vHeat * (0.55 + 0.35 * sin(uTime * 16.0)));
          #include <opaque_fragment>`)},this.material.customProgramCacheKey=()=>`terrain`,this.group.add(this.buildSurface()),this.group.add(this.buildRims()),this.group.add(this.buildUndersides())}setFinalHidden(e){this.group.visible=!e}sync(){let e=this.arena;if(!e.dirty)return;e.dirty=!1;let t=this.cellData;for(let n=0;n<14400;n++)(e.state[n]!==Vd.Solid||t[n*4]!==0||t[n*4+1]!==0||t[n*4+2]!==0)&&(t[n*4]=Math.round(e.drop[n]*255),t[n*4+1]=Math.round(e.shake[n]*255),t[n*4+2]=Math.round(e.heat[n]*255));this.cellTex.needsUpdate=!0}buildSurface(){let e=this.arena,t=[],n=[],r=[],i=[],a=(e,a,o,s,c,l,u,d)=>{let f=Array.isArray(l[0])?l:[l,l,l,l],p=[e,a,o,e,o,s],m=[f[0],f[1],f[2],f[0],f[2],f[3]];for(let e=0;e<6;e++)t.push(p[e][0],p[e][1],p[e][2]),n.push(m[e][0],m[e][1],m[e][2]),i.push(c[0],c[1],c[2]),r.push(u,d)},o=t=>e.breakable[t]===1||e.tile[t]===Bd.Crumble;for(let s=0;s<120;s++)for(let c=0;c<120;c++){let l=e.idx(c,s),u=e.h[l];if(u<=-999)continue;let d=e.tile[l],f=c-60,p=f+1,m=s-60,h=m+1,g=$f[d]??$f[Bd.Grass],_=Dd(c*.18,s*.18,3),v=(c+s&1)*.008,y=(Td(c,s)-.5)*.025,b=g[0],x=g[1],S=g[2];if(d===Bd.Grass||d===Bd.Moss){let e=Dd(c*.07+11,s*.07-3,2);b+=(_-.5)*.12+(e-.5)*.22+y,x+=(_-.5)*.14+(e-.5)*.08+y,S+=(.5-_)*.06-(e-.5)*.06,Td(c*7,s*3)>.94&&(b+=.16,x+=.1,S-=.02)}else if(d===Bd.Wood||d===Bd.Crumble){let e=(c+s*3)%3==0?-.06:.02;b+=e+y,x+=e*.8+y,S+=e*.6}else if(d===Bd.Vent){let e=c+s&1?.08:-.02;b+=e,x+=e,S+=e*1.4}else b+=(_-.5)*.12+y,x+=(_-.5)*.12+y,S+=(_-.5)*.1+y;b+=v,x+=v,S+=v;let C=!1;for(let[t,n]of[[1,0],[-1,0],[0,1],[0,-1]])e.h[e.idx(c+t,s+n)]<=-999&&(C=!0);C&&d!==Bd.Wood&&d!==Bd.Crumble&&(b*=1.08,x*=1.06,S*=1);let w=[b,x,S],T=(t,n)=>{let r=0;for(let[i,a]of[[t-1,n-1],[t,n-1],[t-1,n],[t,n]]){let t=e.h[e.idx(c+i,s+a)];t>u+.3&&(r+=Math.min(1,(t-u)/2))}let i=1-Math.min(.45,r*.22);return[w[0]*i,w[1]*i,w[2]*i]};if(a([f,u,m],[f,u,h],[p,u,h],[p,u,m],[0,1,0],[T(0,0),T(0,1),T(1,1),T(1,0)],c,s),(d===Bd.Grass||d===Bd.Moss)&&Td(c*5+1,s*9+2)>.72){let e=f+.2+Td(c,s*2)*.6,a=m+.2+Td(c*2,s)*.6,o=.22+Td(c*3,s*7)*.22,l=[w[0]*.75,w[1]*1.02,w[2]*.7],d=[Math.min(1,w[0]*1.25+.06),Math.min(1,w[1]*1.25+.06),w[2]*.9],p=.14,h=[0,2.094,4.188].map(t=>[e+Math.cos(t)*p,u,a+Math.sin(t)*p]),g=[e+.03,u+o,a];for(let e=0;e<3;e++){let a=h[e],o=h[(e+1)%3],u=Math.cos((e+.5)*2.094),f=Math.sin((e+.5)*2.094);for(let[e,p]of[[a,l],[g,d],[o,l]])t.push(e[0],e[1],e[2]),n.push(p[0],p[1],p[2]),i.push(u*.6,.8,f*.6),r.push(c,s)}}let E=[[1,0,[p,0,h],[p,0,m],[1,0,0]],[-1,0,[f,0,m],[f,0,h],[-1,0,0]],[0,1,[f,0,h],[p,0,h],[0,0,1]],[0,-1,[p,0,m],[f,0,m],[0,0,-1]]],D=o(l);for(let[t,n,r,i,l]of E){let f=c+t,p=s+n,m=e.inBounds(f,p)?e.idx(f,p):-1,h=m>=0?e.h[m]:zd,g,_=u;if(h<=-999)g=u-(d===Bd.Wood||d===Bd.Crumble?.5:2.6+Td(c*3+t,s*5+n)*1.2);else if(h<u-.01)g=h,(D||o(m))&&(g=Math.min(g,u-1.4));else if(D||m>=0&&o(m))g=u-1.4,_=u-.04;else continue;if(g>=u)continue;let v=d===Bd.Wood||d===Bd.Crumble,y=v?[.45,.3,.2]:d===Bd.Sand?[.62,.5,.4]:[.5,.42,.42],b=v?[.3,.2,.14]:[.26,.2,.28],x=Math.min(.18,_-g),S=d===Bd.Grass||d===Bd.Moss?[w[0]*.8,w[1]*.85,w[2]*.8]:y;a([r[0],_,r[2]],[r[0],_-x,r[2]],[i[0],_-x,i[2]],[i[0],_,i[2]],l,S,c,s);let C=_-x-g;if(C<=.01)continue;let T=Math.max(1,Math.ceil(C/1.2));for(let e=0;e<T;e++){let t=_-x-C*e/T,n=_-x-C*(e+1)/T,o=e/T,u=(e+1)/T,d=(Math.floor(t*1.3)&1?.03:-.02)+(Td(c+e,s)-.5)*.04,f=[y[0]+(b[0]-y[0])*o+d,y[1]+(b[1]-y[1])*o+d,y[2]+(b[2]-y[2])*o+d],p=[y[0]+(b[0]-y[0])*u+d,y[1]+(b[1]-y[1])*u+d,y[2]+(b[2]-y[2])*u+d];a([r[0],t,r[2]],[r[0],n,r[2]],[i[0],n,i[2]],[i[0],t,i[2]],l,[f,p,p,f],c,s)}}}let s=new oi;s.setAttribute(`position`,new G(t,3)),s.setAttribute(`normal`,new G(i,3)),s.setAttribute(`color`,new G(n,3)),s.setAttribute(`aCell`,new G(r,2)),s.computeBoundingSphere();let c=new K(s,this.material);return c.name=`terrain`,c}buildRims(){let e=this.arena,t=[],n=[],r=.12;for(let i=0;i<120;i++)for(let a=0;a<120;a++){let o=e.idx(a,i),s=e.h[o];if(s<=-999||e.breakable[o]||e.tile[o]===Bd.Crumble)continue;let c=a-60,l=i-60,u=s+.03,d=(e,r,i,a,o,s)=>{t.push(e,u,r,e+o,u,r+s,i+o,u,a+s,e,u,r,i+o,u,a+s,i,u,a);for(let e=0;e<6;e++)n.push(1,.78,.45)};e.h[e.idx(a+1,i)]<=-999&&d(c+1,l,c+1,l+1,-.12,0),e.h[e.idx(a-1,i)]<=-999&&d(c,l+1,c,l,r,0),e.h[e.idx(a,i+1)]<=-999&&d(c+1,l+1,c,l+1,0,-.12),e.h[e.idx(a,i-1)]<=-999&&d(c,l,c+1,l,0,r)}let i=new oi;i.setAttribute(`position`,new G(t,3)),i.setAttribute(`color`,new G(n,3));let a=new K(i,new Li({vertexColors:!0,transparent:!0,opacity:.55,side:2,depthWrite:!1}));return a.renderOrder=1,a}buildUndersides(){let e=this.arena,t=new U,n=new ko({vertexColors:!0,flatShading:!0}),r=[];for(let t=0;t<120;t+=2)for(let n=0;n<120;n+=2){let i=e.idx(n,t),a=e.h[i];if(a<=-999)continue;let o=e.tile[i];if(o===Bd.Wood||o===Bd.Crumble)continue;let s=e.edgeDistance(n,t),c=Td(n*13,t*17);if(s<2&&c<.5)continue;let l=2.5+s*2.2+c*4,u=new Ia(.9+Math.min(s,4)*.35+Td(n,t*3)*.6,l,5,1);u.rotateX(Math.PI),u.rotateY(c*6);let d=Math.min(a,e.h[e.idx(n+1,t)]>-1e3?e.h[e.idx(n+1,t)]:a);u.translate(n-60+1,d-2.6-l/2+.6,t-60+1);let f=u.toNonIndexed(),p=f.attributes.position.count,m=new Float32Array(p*3),h=f.attributes.position;for(let e=0;e<p;e++){let t=h.getY(e),n=Math.min(1,Math.max(0,(d-2-t)/l));m[e*3]=.42-n*.22,m[e*3+1]=.33-n*.2,m[e*3+2]=.38-n*.12}f.setAttribute(`color`,new Kr(m,3)),f.deleteAttribute(`uv`),r.push(f),u.dispose()}let i=tp(r);return i&&t.add(new K(i,n)),t}};function tp(e){if(e.length===0)return null;let t=0;for(let n of e)t+=n.attributes.position.count;let n=new Float32Array(t*3),r=new Float32Array(t*3),i=0;for(let t of e)n.set(t.attributes.position.array,i*3),r.set(t.attributes.color.array,i*3),i+=t.attributes.position.count;let a=new oi;return a.setAttribute(`position`,new Kr(n,3)),a.setAttribute(`color`,new Kr(r,3)),a.computeVertexNormals(),a}var np=class{arena;scene;group=new U;hemi;sun;skyMat;seaMat;raftMeshes=[];beaconFlame;beaconGlow;beaconLight;ventSprites=[];zipStartMarkers=[];shrineBeam;lanternSprites=[];motes;setFinalHidden(e){for(let t of this.group.children)t instanceof Zo||(t.visible=!e)}dawn=0;beaconLevel=.25;constructor(e,t){this.arena=e,this.scene=t,t.fog=new fr(2760522,55,150),t.background=new W(1840440),this.hemi=new Qo(10129376,4860986,.95),this.sun=new hs(16761992,1.55),this.sun.position.set(-30,50,18),this.group.add(this.hemi,this.sun),this.group.add(new gs(6970010,.22)),this.skyMat=new Do({side:1,depthWrite:!1,fog:!1,uniforms:{uDawn:{value:0},uTime:dd.time},vertexShader:`varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,fragmentShader:`
        varying vec3 vDir; uniform float uDawn; uniform float uTime;
        float h(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
        void main(){
          float y = vDir.y;
          vec3 zen = mix(vec3(0.09,0.06,0.2), vec3(0.45,0.62,0.9), uDawn);
          vec3 hor = mix(vec3(0.78,0.36,0.46), vec3(1.0,0.78,0.5), uDawn);
          vec3 low = mix(vec3(0.17,0.1,0.28), vec3(0.6,0.5,0.62), uDawn);
          vec3 c = y > 0.0 ? mix(hor, zen, pow(clamp(y*1.6,0.0,1.0),0.6)) : mix(hor, low, clamp(-y*3.0,0.0,1.0));
          vec3 sd = normalize(vec3(-0.35, mix(0.02, 0.22, uDawn), -1.0));
          float s = max(dot(normalize(vDir), sd), 0.0);
          c += vec3(1.0,0.6,0.35) * pow(s, 400.0) * 2.0 + vec3(1.0,0.5,0.4) * pow(s, 12.0) * 0.35;
          // stars
          vec2 sp = floor(vDir.xz / (vDir.y + 1.2) * 180.0);
          float st = step(0.996, h(sp)) * smoothstep(0.1, 0.5, y) * (1.0 - uDawn);
          c += st * (0.6 + 0.4 * sin(uTime * 2.0 + h(sp + 3.0) * 30.0));
          gl_FragColor = vec4(c, 1.0);
        }`});let n=new K(new go(420,24,16),this.skyMat);n.renderOrder=-10,this.group.add(n),this.seaMat=new Do({fog:!1,transparent:!1,uniforms:{uTime:dd.time,uDawn:{value:0}},vertexShader:`varying vec2 vUv; varying vec3 vW; void main(){ vUv = uv; vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`
        varying vec2 vUv; varying vec3 vW; uniform float uTime; uniform float uDawn;
        float hash(vec2 p){ return fract(sin(dot(p, vec2(41.3,289.1)))*43758.5453); }
        float noise(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
          return mix(mix(hash(i),hash(i+vec2(1,0)),f.x), mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x), f.y); }
        float fbm(vec2 p){ float s=0.0, a=0.5; for(int i=0;i<5;i++){ s+=noise(p)*a; p*=2.03; a*=0.5; } return s; }
        void main(){
          vec2 p = vW.xz * 0.018;
          float n = fbm(p + vec2(uTime*0.012, uTime*0.006));
          float n2 = fbm(p*2.3 - vec2(uTime*0.02, 0.0));
          float c = smoothstep(0.35, 0.8, n * 0.7 + n2 * 0.45);
          vec3 deep = mix(vec3(0.1,0.06,0.2), vec3(0.42,0.38,0.6), uDawn);
          vec3 cloud = mix(vec3(0.5,0.28,0.48), vec3(1.0,0.82,0.66), uDawn);
          vec3 col = mix(deep, cloud, c * 0.75);
          float d = length(vW.xz) / 260.0;
          col = mix(col, mix(vec3(0.33,0.17,0.35), vec3(0.95,0.72,0.6), uDawn), clamp(d,0.0,1.0)*0.85);
          // warm underglow beneath the Hearth
          col += vec3(0.5,0.22,0.08) * exp(-length(vW.xz)*0.025) * 0.5;
          gl_FragColor = vec4(col, 1.0);
        }`});let r=new K(new mo(700,700,1,1),this.seaMat);r.rotation.x=-Math.PI/2,r.position.y=-55,this.group.add(r);let i=new Float32Array(1500);for(let e=0;e<500;e++)i[e*3]=(Td(e,1)-.5)*200,i[e*3+1]=-8-Td(e,2)*40,i[e*3+2]=(Td(e,3)-.5)*200;let a=new oi;a.setAttribute(`position`,new Kr(i,3)),this.motes=new Ea(a,new xa({size:.6,map:_d(),color:16757626,transparent:!0,opacity:.6,blending:2,depthWrite:!1,fog:!1})),this.group.add(this.motes),this.group.add(this.buildDistantRocks()),this.group.add(this.buildTrees()),this.group.add(this.buildLanterns());for(let t of e.ziplines)this.group.add(this.buildZipline(t));for(let t of e.vents)this.group.add(this.buildVent(t.x,t.y,t.z));for(let t of e.rafts){let e=this.buildRaft(t.half);this.raftMeshes.push(e),this.group.add(e)}let o=new U,s=new ld().add(Q(1,1.25,.5,8),7035474,{pos:[0,1.45,0]}).add(Q(1.25,.9,.45,8),9072472,{pos:[0,1.9,0]}).add(Q(1.1,1.1,.08,8),2759188,{pos:[0,2.12,0]});for(let e=0;e<4;e++){let t=e/4*Math.PI*2+.4;s.add(X(.18,1.2,.18),4864565,{pos:[Math.cos(t)*1.15,2.4,Math.sin(t)*1.15],rot:[Math.sin(t)*.25,0,-Math.cos(t)*.25]})}o.add(new K(s.build(),md())),this.beaconFlame=new K(new Ia(.7,1.6,7),hd(16752704,.9)),this.beaconFlame.position.y=2.9,o.add(this.beaconFlame),this.beaconGlow=new Ai(new gi({map:_d(),color:16751168,blending:2,depthWrite:!1,transparent:!0,fog:!1})),this.beaconGlow.position.y=3,this.beaconGlow.scale.setScalar(6),o.add(this.beaconGlow),this.beaconLight=new fs(16751184,30,26,1.6),this.beaconLight.position.y=4,o.add(this.beaconLight),this.group.add(o);let c=e.shrine,l=new K(new ld().add(X(1.6,.3,1.6),9143160,{pos:[0,.15,0]}).add(X(.3,2.4,.3),10261124,{pos:[-1.4,1.2,0]}).add(X(.3,2.4,.3),10261124,{pos:[1.4,1.2,0]}).add(X(3.4,.35,.45),11050123,{pos:[0,2.5,0]}).build(),md());l.position.set(c.x,c.y,c.z-1.2),this.group.add(l),this.shrineBeam=new K(new Fa(.5,.9,30,10,1,!0),hd(16773296,.18)),this.shrineBeam.position.set(c.x,c.y+15,c.z),this.group.add(this.shrineBeam),t.add(this.group)}setShrineActive(e){this.shrineBeam.visible=e}update(e,t,n){let r=this.arena;for(let e=0;e<r.rafts.length;e++){let n=r.rafts[e],i=this.raftMeshes[e];i.position.set(n.x,n.y,n.z),i.rotation.z=Math.sin(t*1.3+e)*.02,i.rotation.x=Math.cos(t*1.1+e)*.02}for(let e=0;e<this.ventSprites.length;e++){let n=this.ventSprites[e],r=(t*.9+e*.37)%1;n.position.y=n.userData.baseY+r*5,n.material.opacity=(1-r)*.35,n.scale.setScalar(.8+r*1.2)}for(let r of this.zipStartMarkers){let i=r.position.distanceTo(n);r.rotation.y+=e*1.5;let a=i<6?1:.4;r.material.opacity=a*(.6+.3*Math.sin(t*5))}for(let e=0;e<this.lanternSprites.length;e++){let n=this.lanternSprites[e];n.material.opacity=.45+.12*Math.sin(t*3+e*1.7)}let i=this.beaconLevel;this.beaconFlame.scale.set(.5+i,(.5+i*1.5)*(1+.08*Math.sin(t*9)),.5+i),this.beaconFlame.position.y=2.6+i*.8,this.beaconGlow.scale.setScalar(4+i*10),this.beaconLight.intensity=10+i*60,this.shrineBeam.rotation.y+=e*.4,this.shrineBeam.material.opacity=.14+.06*Math.sin(t*2.4);let a=this.motes.geometry.attributes.position;for(let t=0;t<a.count;t++){let n=a.getY(t)+e*(.6+t%7*.12);n>-6&&(n=-48),a.setY(t,n)}a.needsUpdate=!0,this.skyMat.uniforms.uDawn.value=this.dawn,this.seaMat.uniforms.uDawn.value=this.dawn;let o=this.scene.fog;o.color.setRGB(xd(.165,.85,this.dawn),xd(.12,.66,this.dawn),xd(.29,.62,this.dawn)),this.scene.background.copy(o.color),this.sun.intensity=xd(1.55,2.4,this.dawn),this.sun.color.setRGB(1,xd(.77,.9,this.dawn),xd(.53,.75,this.dawn)),this.hemi.intensity=xd(.95,1.4,this.dawn)}buildDistantRocks(){let e=new ld;for(let t=0;t<26;t++){let n=t/26*Math.PI*2+Td(t,9)*.2,r=95+Td(t,4)*80,i=-10-Td(t,5)*30,a=2+Td(t,6)*6;e.add(ud(a,a*2.2,5),3812424,{pos:[Math.cos(n)*r,i-a,Math.sin(n)*r],rot:[Math.PI,Td(t,7)*3,0]}),e.add(Q(a*1.05,a*.95,a*.4,6),Td(t,8)>.5?4872776:5917266,{pos:[Math.cos(n)*r,i+a*.15,Math.sin(n)*r]})}return new K(e.build(),md())}buildTrees(){let e=this.arena,t=new ld,n=[];for(let t=2;t<118;t+=2)for(let r=2;r<118;r+=2){let i=r-60+.5,a=t-60+.5,o=e.tileAt(i,a);if(o!==Bd.Grass&&o!==Bd.Moss)continue;let s=e.heightAt(i,a),c=e.cellOf(i),l=e.cellOf(a),u=e.edgeDistance(c,l),d=e.idx(c,l),f=e.island[d],p=Td(r*31,t*17);if(!(f===3?p>.82&&u>=2:f!==1&&f!==0&&p>.86&&u>=2&&u<=3)||e.breakable[d]&&Math.hypot(i,a)<11||Math.hypot(i-e.shrine.x,a-e.shrine.z)<4)continue;let m=!1;for(let t of e.ziplines)(Math.hypot(i-t.ax,a-t.az)<3||Math.hypot(i-t.bx,a-t.bz)<3)&&(m=!0);for(let t of e.vents)Math.hypot(i-t.x,a-t.z)<3&&(m=!0);m||s<=-999||n.push([i+(Td(r,t)-.5),s,a+(Td(t,r)-.5)])}for(let[e,r,i]of n){let n=.8+Td(e*10,i*10)*.5,a=Td(e*3,i*7),o=a>.6?14252106:a>.3?6265450:13214287,s=a>.6?12081726:a>.3?5079136:11043901;t.add(Q(.12*n,.2*n,1.6*n,5),5913902,{pos:[e,r+.8*n,i]}),t.add(Z(1*n,0),s,{pos:[e,r+2*n,i],scale:[1.1,.8,1.1]}),t.add(Z(.75*n,0),o,{pos:[e+.25*n,r+2.6*n,i-.15*n]});for(let a=0;a<3;a++){let o=Td(e+a,i)*Math.PI*2;t.add(Z(.11*n,0),16761690,{pos:[e+Math.cos(o)*.9*n,r+1.7*n,i+Math.sin(o)*.9*n],glow:1})}}return new K(t.build(),md())}buildLanterns(){let e=this.arena,t=new U,n=new ld;for(let{x:r,z:i}of e.lanterns){let a=e.heightAt(r,i);if(a<=-999)continue;n.add(Q(.18,.24,.25,6),7035474,{pos:[r,a+.12,i]}),n.add(Q(.06,.08,1.3,5),4864565,{pos:[r,a+.85,i]}),n.add(X(.34,.06,.34),9071162,{pos:[r,a+1.52,i]}),n.add(X(.26,.32,.26),16765562,{pos:[r,a+1.72,i],glow:1}),n.add(ud(.24,.22,4),9071162,{pos:[r,a+1.98,i],rot:[0,Math.PI/4,0]});let o=new Ai(new gi({map:_d(),color:16752720,blending:2,depthWrite:!1,transparent:!0}));o.position.set(r,a+1.72,i),o.scale.setScalar(1.7),this.lanternSprites.push(o),t.add(o)}return t.add(new K(n.build(),md())),t}buildZipline(e){let t=new U,n=[];for(let t=0;t<=24;t++){let r=t/24;n.push(rp(e,r,new V))}let r=new qa(n),i=new K(new vo(r,48,.045,5),new Li({color:2825496}));t.add(i);let a=new K(new vo(r,48,.1,5),hd(16760944,.22));t.add(a);let o=(e,n,r,i)=>{let a=n-2.3,o=new ld().add(Q(.12,.16,2.9,6),4863014,{pos:[e,a+1.45,r]}).add(X(.7,.14,.14),4863014,{pos:[e,n+.15,r]}).add(X(.24,.3,.24),i?10479871:16765562,{pos:[e,n+.5,r],glow:1});if(t.add(new K(o.build(),md())),i){let n=new K(new ho(1,1.25,24),hd(10479871,.7));n.rotation.x=-Math.PI/2,n.position.set(e,a+.06,r),n.material.side=2,this.zipStartMarkers.push(n),t.add(n)}};return o(e.ax,e.ay,e.az,!0),o(e.bx,e.by,e.bz,!1),t}buildVent(e,t,n){let r=new U,i=new ld;for(let r=0;r<6;r++){let a=r/6*Math.PI*2;i.add(X(.5,.3,.25),6123384,{pos:[e+Math.cos(a)*1.1,t+.15,n+Math.sin(a)*1.1],rot:[0,-a,0]})}i.add(Q(.75,.75,.05,10),5224656,{pos:[e,t+.03,n],glow:.6}),r.add(new K(i.build(),md()));for(let i=0;i<4;i++){let i=new Ai(new gi({map:_d(),color:10482943,blending:2,depthWrite:!1,transparent:!0}));i.position.set(e,t+.5,n),i.userData.baseY=t+.3,this.ventSprites.push(i),r.add(i)}return r}buildRaft(e){let t=new U,n=new ld,r=e*2;for(let t=0;t<5;t++){let i=-e+(t+.5)*(r/5);n.add(X(r/5-.05,.3,r),t%2?9067836:8015924,{pos:[i,-.15,0]})}return n.add(X(r,.2,.3),5913126,{pos:[0,-.35,-e+.5]}),n.add(X(r,.2,.3),5913126,{pos:[0,-.35,e-.5]}),n.add(Q(.05,.05,1.6,4),3811878,{pos:[e-.3,.8,e-.3]}),n.add(X(.25,.3,.25),16765562,{pos:[e-.3,1.7,e-.3],glow:1}),n.add(Z(.6,1),13004108,{pos:[-e+.4,3,-e+.4],scale:[1,1.2,1]}),n.add(Q(.02,.02,2.4,3),3811878,{pos:[-e+.4,1.5,-e+.4]}),t.add(new K(n.build(),md())),t}};function rp(e,t,n){return n.set(xd(e.ax,e.bx,t),xd(e.ay,e.by,t)-Math.sin(Math.PI*t)*e.sag,xd(e.az,e.bz,t))}var ip={wick:[.3,1.3,.55],arc:[-.36,1.05,.3],flare:[.3,1.62,.55],mortar:[0,2,-.1],halo:[0,.95,.22],lance:[-.3,1.62,.95],firefly:[.27,.95,.05]};function ap(e,t){let n=[`wick`,`flare`,`lance`].includes(e)?t.aimYaw??t.facing:t.facing,[r,i,a]=ip[e];return{x:t.x+r*Math.cos(n)+a*Math.sin(n),y:t.y+i,z:t.z-r*Math.sin(n)+a*Math.cos(n),yaw:n}}var op={coat:3107438,coatDark:2048328,shirt:15391677,scarf:15901498,skin:14855046,hat:3877696,band:13738062,pants:4930389,boots:3810848,brass:13213776},sp=class{deviceRoot=new U;devices=new Map;wickDevice=new U;deviceIds=[];setDevices(e){this.deviceIds=[...new Set(e)].slice(0,4),this.deviceRoot.clear();for(let e of this.deviceIds){let t=this.devices.get(e);t||(t=e===`wick`?this.wickDevice:this.makeDevice(e),this.devices.set(e,t)),this.deviceRoot.add(t)}}makeDevice(e){let t=new U,n=new ko({color:13212234}),r=new ko({color:5464430}),i=new Li({color:e===`arc`?9427199:e===`firefly`?13172602:16761952}),a=(e,n,r=0,i=0,a=0)=>{let o=new K(e,n);return o.position.set(r,i,a),t.add(o),o};if(e===`flare`){let e=a(new Fa(.16,.07,.45,8),n,0,0,-.2);e.rotation.x=Math.PI/2,a(new _o(.16,.025,6,8),i)}else if(e===`arc`){a(new Fa(.14,.14,.35,8),r,0,-.14,0),a(new go(.105,8,6),i,0,-.1,.04);for(let e of[-.14,.14])a(new Na(.035,.4,.04),n,e,-.14,0)}else if(e===`mortar`){let e=a(new Fa(.14,.18,.55,8),r,0,-.2,0);e.rotation.x=-.35,a(new Na(.45,.08,.3),n,0,-.48,0),a(new go(.1,8,6),i)}else if(e===`halo`){a(new _o(.18,.045,6,12),n);for(let e=0;e<6;e++){let t=e*Math.PI/3;a(new go(.04,6,4),i,Math.cos(t)*.18,Math.sin(t)*.18,0)}}else if(e===`lance`)a(new Na(.1,.1,.65),n,0,0,-.3),a(new go(.09,8,6),i),a(new _o(.14,.04,6,10),i,0,0,-.45);else if(e===`firefly`){a(new Fa(.13,.14,.27,8),r,0,-.1,0),a(new Fa(.16,.16,.05,8),n,0,.06,0);for(let[e,t]of[[-.06,-.06],[.05,-.14],[.02,-.02]])a(new go(.04,6,4),i,e,t,.13)}return t}updateDevices(e){for(let t of this.deviceIds){let n=this.devices.get(t),r=ap(t,e);n.position.set(r.x,r.y,r.z),n.rotation.set(0,r.yaw,0)}}root=new U;body=new U;pelvis=new U;chest=new U;head=new U;shL=new U;shR=new U;elL=new U;elR=new U;hipL=new U;hipR=new U;knL=new U;knR=new U;tail=new U;lantern=new U;handle;gunTip=new ir;material;silhouette;lanternGlow;phase=0;climbPhase=0;yaw=0;chestYaw=0;recoil=0;squash=0;squashV=0;lanternSwing=0;lanternV=0;cur={};scarfPts=[];scarfPrev=[];scarfGeo;scarfAnchor=new ir;tmp=new V;constructor(){this.material=fd(new ko({vertexColors:!0}),{glow:!0}),this.silhouette=new Li({color:16766874,depthFunc:6,depthWrite:!1,fog:!1}),this.silhouette.onBeforeCompile=e=>{e.fragmentShader=e.fragmentShader.replace(`void main() {`,`void main() {
  if (mod(floor(gl_FragCoord.x) + floor(gl_FragCoord.y), 2.0) < 1.0) discard;`)};let e=e=>{let t=new K(e,this.material);t.renderOrder=2;let n=new K(e,this.silhouette);return n.renderOrder=1,t.add(n),t};this.root.add(this.body),this.body.add(this.pelvis),this.pelvis.position.y=.98,this.pelvis.add(e(new ld().add(X(.36,.2,.22),op.pants,{pos:[0,-.02,0]}).add(X(.4,.07,.25),2759960,{pos:[0,.07,0]}).add(X(.08,.08,.04),op.brass,{pos:[0,.07,.13]}).build())),this.pelvis.add(this.chest),this.chest.position.y=.08,this.chest.add(e(new ld().add(X(.4,.46,.25),op.coat,{pos:[0,.26,0]}).add(X(.16,.38,.02),op.shirt,{pos:[0,.27,.125]}).add(X(.44,.1,.27),op.coatDark,{pos:[0,.47,0]}).add(X(.08,.38,.03),op.coatDark,{pos:[-.1,.27,.13]}).add(X(.08,.38,.03),op.coatDark,{pos:[.1,.27,.13]}).add(X(.03,.03,.03),op.brass,{pos:[.1,.36,.15]}).add(X(.03,.03,.03),op.brass,{pos:[.1,.22,.15]}).add(X(.05,.6,.27),5913126,{pos:[0,.27,0],rot:[0,0,.7]}).build())),this.pelvis.add(this.tail),this.tail.position.set(0,.06,-.11),this.tail.add(e(new ld().add(X(.38,.5,.04),op.coat,{pos:[0,-.25,0]}).add(X(.38,.05,.045),op.coatDark,{pos:[0,-.48,0]}).build())),this.chest.add(this.head),this.head.position.y=.56,this.head.add(e(new ld().add(Q(.06,.07,.1,6),op.skin,{pos:[0,.03,0]}).add(Z(.15,1),op.skin,{pos:[0,.18,.01],scale:[1,1.08,1]}).add(X(.04,.05,.05),13800048,{pos:[0,.17,.155]}).add(X(.035,.035,.02),1905952,{pos:[-.055,.21,.14]}).add(X(.035,.035,.02),1905952,{pos:[.055,.21,.14]}).add(Z(.155,1),4860448,{pos:[0,.22,-.03],scale:[1.02,.85,1]}).add(Q(.32,.32,.035,12),op.hat,{pos:[0,.31,0]}).add(Q(.15,.18,.2,10),op.hat,{pos:[0,.42,-.01],rot:[-.08,0,.04]}).add(Q(.183,.183,.05,10),op.band,{pos:[0,.35,-.005]}).add(X(.04,.12,.02),15913594,{pos:[.16,.4,0],rot:[0,0,-.3],glow:.5}).build())),this.chest.add(e(new ld().add(Q(.12,.14,.09,8),op.scarf,{pos:[0,.54,0]}).build())),this.chest.add(this.scarfAnchor),this.scarfAnchor.position.set(.05,.52,-.12);let t=(t,n,r)=>{this.chest.add(n),n.position.set(.25*t,.46,0),n.add(e(new ld().add(Z(.075,1),op.coatDark,{pos:[0,0,0]}).add(Q(.065,.055,.3,6),op.coat,{pos:[0,-.15,0]}).build())),n.add(r),r.position.y=-.3,r.add(e(new ld().add(Q(.055,.045,.26,6),op.coat,{pos:[0,-.13,0]}).add(Q(.06,.06,.05,6),op.coatDark,{pos:[0,-.24,0]}).add(Z(.05,0),op.skin,{pos:[0,-.3,0]}).build()))};t(-1,this.shL,this.elL),t(1,this.shR,this.elR),this.shR.rotation.order=`YXZ`;let n=e(new ld().add(X(.07,.3,.09),op.brass,{pos:[0,-.4,.03]}).add(Q(.05,.06,.12,6),5913126,{pos:[0,-.32,-.07],rot:[Math.PI/2,0,0]}).add(Q(.035,.035,.1,6),16765562,{pos:[0,-.56,.03],glow:1}).build());n.rotation.x=-Math.PI/2,n.position.set(0,-.03,-.56),this.wickDevice.add(n),this.wickDevice.add(this.gunTip),this.setDevices([`wick`]),this.handle=new K(new ld().add(X(.6,.05,.05),3811878,{pos:[0,0,0]}).add(Q(.09,.09,.06,8),op.brass,{pos:[0,.3,0],rot:[Math.PI/2,0,0]}).add(X(.03,.3,.03),3811878,{pos:[-.2,.15,0]}).add(X(.03,.3,.03),3811878,{pos:[.2,.15,0]}).build(),this.material),this.handle.visible=!1,this.root.add(this.handle);let r=(t,n,r)=>{this.pelvis.add(n),n.position.set(.1*t,-.06,0),n.add(e(new ld().add(Q(.085,.07,.44,6),op.pants,{pos:[0,-.22,0]}).build())),n.add(r),r.position.y=-.44,r.add(e(new ld().add(Q(.07,.06,.36,6),op.pants,{pos:[0,-.18,0]}).add(Q(.075,.08,.22,6),op.boots,{pos:[0,-.33,0]}).add(X(.11,.07,.24),op.boots,{pos:[0,-.44,.05]}).build()))};r(-1,this.hipL,this.knL),r(1,this.hipR,this.knR),this.pelvis.add(this.lantern),this.lantern.position.set(-.22,.02,.02),this.lantern.add(e(new ld().add(X(.02,.12,.02),3811878,{pos:[0,-.06,0]}).add(X(.13,.03,.13),op.brass,{pos:[0,-.13,0]}).add(X(.11,.14,.11),16765562,{pos:[0,-.21,0],glow:1}).add(X(.13,.03,.13),op.brass,{pos:[0,-.29,0]}).build())),this.lanternGlow=new Ai(new gi({map:_d(),color:16757594,blending:2,transparent:!0,depthWrite:!1,opacity:.8})),this.lanternGlow.scale.setScalar(.9),this.lanternGlow.position.y=-.21,this.lantern.add(this.lanternGlow);for(let e=0;e<8;e++)this.scarfPts.push(new V(0,1.5-e*.1,-.2-e*.05)),this.scarfPrev.push(this.scarfPts[e].clone());this.scarfGeo=new oi;let i=new Float32Array(48),a=[];for(let e=0;e<7;e++){let t=e*2,n=t+1,r=t+2,i=t+3;a.push(t,n,r,n,i,r)}this.scarfGeo.setAttribute(`position`,new Kr(i,3)),this.scarfGeo.setIndex(a);let o=new K(this.scarfGeo,new ko({color:op.scarf,side:2}));o.frustumCulled=!1,this.scarfMesh=o}scarfMesh;gunTipWorld(e){return this.gunTip.getWorldPosition(e)}resetPose(){this.cur={},this.yaw=0,this.chestYaw=0,this.body.rotation.set(0,0,0),this.root.rotation.set(0,0,0),this.root.updateMatrixWorld(!0),this.scarfAnchor.getWorldPosition(this.tmp);for(let e=0;e<this.scarfPts.length;e++)this.scarfPts[e].set(this.tmp.x,this.tmp.y-e*.1,this.tmp.z-e*.02),this.scarfPrev[e].copy(this.scarfPts[e])}j(e,t,n,r){let i=this.cur[e]??t,a=i+(t-i)*Sd(n,r);return this.cur[e]=a,a}update(e){let t=e.dt,n=(e.climbing,e.moveYaw);this.yaw+=Cd(n-this.yaw)*Sd(e.climbing||e.zipping?20:14,t),this.root.rotation.y=this.yaw;let r=bd(e.speed/Math.max(1,e.maxSpeed),0,1.3),i=!e.grounded&&!e.climbing&&!e.zipping;e.grounded&&(this.phase+=e.speed*t/2.5*Math.PI*2);let a=this.phase;e.climbing&&(this.climbPhase+=Math.abs(e.climbRate)*t*3.2),this.squashV+=(e.landImpact*14-this.squash*120-this.squashV*14)*t,this.squash+=this.squashV*t,this.recoil=Math.max(0,this.recoil-t*9),e.fired&&(this.recoil=1);let o=.98,s=0,c=0,l=0,u=0,d=0,f=.08,p=.08,m=.1,h=.1,g=-.12,_=.12,v=-.3,y=-.3,b=.15,x=0,S=0,C=e.aimYaw!==null&&!e.climbing&&e.dashing===0&&e.dead===0;if(e.dead>0)o=xd(.98,.25,e.dead),S=-1.45*e.dead,u=.3,d=-.2,f=.5,p=.3,m=-2.6*e.dead,h=-2.4*e.dead,v=-.2,y=-.2,C=!1;else if(e.zipping){let t=Math.sin(e.time*3.1)*.12;o=.98,m=-2.95,h=-2.95,g=.18,_=-.18,v=-.1,y=-.1,u=-.55+t,d=-.35+t,f=.5,p=.7,l=-.05,S=bd(-e.zipSpeed*.012,-.25,0)+t*.5,b=.8+Math.sin(e.time*9)*.1,C=!1}else if(e.climbing){let e=this.climbPhase;o=.98,S=.08,m=-2.5+Math.sin(e)*.5,h=-2.5-Math.sin(e)*.5,g=-.15,_=.15,v=-.6-Math.max(0,Math.cos(e))*.6,y=-.6-Math.max(0,-Math.cos(e))*.6,u=-.9-Math.sin(e)*.45,d=-.9+Math.sin(e)*.45,f=1.3+Math.sin(e)*.3,p=1.3-Math.sin(e)*.3,x=-.35,b=.05}else if(e.mantling>0){let t=e.mantling;o=.85,S=.5*(1-t),m=-1.6+t*1.4,h=-1.6+t*1.4,v=-.6,y=-.6,u=-1.4,d=-1,f=1.8,p=1.6}else if(e.dashing>0){let t=e.dashing;S=t*Math.PI*2,o=.98-Math.sin(t*Math.PI)*.45,u=-1.7,d=-1.6,f=2.1,p=2,m=-1.2,h=-1.2,v=-1.6,y=-1.6,b=1.2}else if(i){if(e.vy>1)u=-1.1,d=.25,f=1.4,p=.5,m=.6,h=-.5,g=-.5,_=.4,l=.15;else{let t=Math.sin(e.time*14)*.3;u=-.5,d=-.15,f=.6,p=.35,m=-1.8+t,h=-1.6-t,g=-.7,_=.7,v=-.4,y=-.4,l=-.05}b=bd(.4-e.vy*.06,0,1.4)}else if(r>.08){let e=Math.sin(a),t=Math.cos(a),n=.25+.75*Math.min(1,r);u=-e*.95*n,d=e*.95*n,f=.15+Math.max(0,t)*1.5*n+(e>0?.25*n:0),p=.15+Math.max(0,-t)*1.5*n+(e<0?.25*n:0),m=e*.85*n,h=-e*.85*n,v=-.5-n*.9,y=-.5-n*.9,o=.98-.05*n+Math.abs(t)*.07*n,c=e*.18*n,s=t*.04*n,l=.22*n,b=.25+n*.7+Math.sin(a*2)*.1}else{let t=Math.sin(e.time*2.2);o=.98+t*.008,l=-.02+t*.02,m=.05+t*.03,v=-.25,u=.04,d=-.06,f=.12,p=.06,s=.03,b=.08}e.hurt>0&&(l-=e.hurt*.35,x-=e.hurt*.3);let w=0;if(C&&e.aimYaw!==null){let t=Cd(e.aimYaw-this.yaw);w=bd(t,-1.1,1.1);let n=t-w;h=-1.5+this.recoil*.25,_=.05,y=-.05-this.recoil*.2,this.cur.shRy=bd(n,-.9,.9)}else this.cur.shRy=(this.cur.shRy??0)*(1-Sd(8,t));this.chestYaw+=Cd(w-this.chestYaw)*Sd(14,t);let T=e.dashing>0||e.grounded&&r>.08?26:16;this.pelvis.position.y=this.j(`py`,o,T,t)-.55-Math.max(-.05,this.squash)*.6,this.pelvis.rotation.set(this.j(`pp`,0,16,t),this.j(`pyaw`,c,T,t),this.j(`pr`,s,16,t)),this.body.rotation.x=e.dashing>0?S:this.j(`bp`,S,16,t),e.dashing>0&&(this.cur.bp=0),this.body.position.y=.55,this.chest.rotation.set(this.j(`cp`,l,16,t),this.chestYaw-this.pelvis.rotation.y,this.j(`cr`,0,16,t)),this.head.rotation.set(this.j(`hp`,x,16,t),-this.chestYaw*.3,0),this.hipL.rotation.x=this.j(`hl`,u,T,t),this.hipR.rotation.x=this.j(`hr`,d,T,t),this.knL.rotation.x=this.j(`kl`,f,T,t),this.knR.rotation.x=this.j(`kr`,p,T,t),this.shL.rotation.set(this.j(`sl`,m,T,t),0,this.j(`slz`,g,16,t)),this.shR.rotation.set(this.j(`sr`,h,C?30:T,t),this.cur.shRy,this.j(`srz`,_,C?30:16,t)),this.elL.rotation.x=this.j(`el`,v,T,t),this.elR.rotation.x=this.j(`er`,y,T,t),this.tail.rotation.x=this.j(`tail`,b,10,t);let E=bd(this.squash,-.2,.3);this.body.scale.set(1+E*.3,1-E*.5,1+E*.3);let D=e.grounded?Math.sin(a)*r*.6:-e.vy*.02;this.lanternV+=(D-this.lanternSwing*30-this.lanternV*4)*t*6,this.lanternSwing+=this.lanternV*t,this.lantern.rotation.x=bd(this.lanternSwing,-.9,.9),this.handle.visible=e.zipping,e.zipping&&this.handle.position.set(0,2.32,.02),this.material.userData.uFlash.value=e.hurt>0?e.hurt*.85:0,this.root.visible=!(e.invuln&&e.hurt===0&&Math.floor(e.time*20)%2==0&&e.dead===0),this.lanternGlow.material.opacity=.65+Math.sin(e.time*7)*.12,this.root.updateMatrixWorld(!0),this.updateScarf(t,e)}updateScarf(e,t){let n=this.scarfPts,r=this.scarfPrev;this.scarfAnchor.getWorldPosition(this.tmp),n[0].copy(this.tmp);let i=Math.min(e,1/30),a=.6+Math.sin(t.time*1.7)*.4;for(let e=1;e<n.length;e++){let o=n[e],s=r[e],c=(o.x-s.x)*.82,l=(o.y-s.y)*.82,u=(o.z-s.z)*.82;s.copy(o),o.x+=c+a*.4*i*i*10,o.y+=l-9*i*i,o.z+=u+Math.sin(t.time*3+e)*.002}for(let e=1;e<n.length;e++){let t=n[e-1],i=n[e],a=i.x-t.x,o=i.y-t.y,s=i.z-t.z,c=.11/(Math.sqrt(a*a+o*o+s*s)||1e-4),l=t.x+a*c,u=t.y+o*c,d=t.z+s*c;r[e].x+=(l-i.x)*.6,r[e].y+=(u-i.y)*.6,r[e].z+=(d-i.z)*.6,i.set(l,u,d)}let o=Math.sin(this.yaw),s=Math.cos(this.yaw);for(let e=1;e<n.length;e++){let t=n[e].x-this.tmp.x,r=n[e].z-this.tmp.z,i=t*o+r*s;i>-.05&&(n[e].x-=o*(i+.05),n[e].z-=s*(i+.05))}let c=this.scarfGeo.attributes.position,l=Math.cos(this.yaw),u=-Math.sin(this.yaw);for(let e=0;e<n.length;e++){let t=.075*(1-e/n.length*.4);c.setXYZ(e*2,n[e].x-l*t,n[e].y,n[e].z-u*t),c.setXYZ(e*2+1,n[e].x+l*t,n[e].y+.02,n[e].z+u*t)}c.needsUpdate=!0,this.scarfGeo.computeVertexNormals(),this.scarfGeo.computeBoundingSphere()}};function cp(){let e=new K(new ho(.55,.68,32),hd(16765562,.5));return e.rotation.x=-Math.PI/2,e.material.side=2,e}var lp=`
attribute float aSize;
attribute float aAlpha;
attribute vec3 aColor;
varying float vAlpha;
varying vec3 vColor;
uniform float uScale;
void main(){
  vAlpha = aAlpha;
  vColor = aColor;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = max(1.0, aSize * uScale / -mv.z);
  gl_Position = projectionMatrix * mv;
}`,up=`
varying float vAlpha; varying vec3 vColor;
void main(){
  vec2 c = gl_PointCoord - 0.5;
  float d = length(c);
  float a = smoothstep(0.5, 0.0, d);
  a = a * a;
  gl_FragColor = vec4(vColor * (a + smoothstep(0.18, 0.0, d) * 0.8), a * vAlpha);
}`,dp=`
varying float vAlpha; varying vec3 vColor;
void main(){
  vec2 c = gl_PointCoord - 0.5;
  float d = length(c);
  float a = smoothstep(0.5, 0.3, d) * 0.85;
  gl_FragColor = vec4(vColor, a * vAlpha);
}`,fp=class{cap;points;pos;col;size;alpha;vel;life;maxLife;grav;drag;size0;cursor=0;mat;constructor(e,t){this.cap=e,this.pos=new Float32Array(e*3),this.col=new Float32Array(e*3),this.size=new Float32Array(e),this.alpha=new Float32Array(e),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.grav=new Float32Array(e),this.drag=new Float32Array(e),this.size0=new Float32Array(e);let n=new oi;n.setAttribute(`position`,new Kr(this.pos,3).setUsage(Bt)),n.setAttribute(`aColor`,new Kr(this.col,3).setUsage(Bt)),n.setAttribute(`aSize`,new Kr(this.size,1).setUsage(Bt)),n.setAttribute(`aAlpha`,new Kr(this.alpha,1).setUsage(Bt)),this.mat=new Do({vertexShader:lp,fragmentShader:t?up:dp,uniforms:{uScale:{value:400}},transparent:!0,depthWrite:!1,blending:t?2:1}),this.points=new Ea(n,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=t?4:2}emit(e,t,n,r,i,a,o,s,c,l,u,d,f){let p=this.cursor;this.cursor=(this.cursor+1)%this.cap,this.pos[p*3]=e,this.pos[p*3+1]=t,this.pos[p*3+2]=n,this.vel[p*3]=r,this.vel[p*3+1]=i,this.vel[p*3+2]=a,this.col[p*3]=o,this.col[p*3+1]=s,this.col[p*3+2]=c,this.size[p]=l,this.size0[p]=l,this.life[p]=u,this.maxLife[p]=u,this.grav[p]=d,this.drag[p]=f,this.alpha[p]=1}update(e){for(let t=0;t<this.cap;t++){if(this.life[t]<=0){this.alpha[t]!==0&&(this.alpha[t]=0,this.size[t]=0);continue}this.life[t]-=e;let n=Math.max(0,this.life[t]/this.maxLife[t]),r=Math.exp(-this.drag[t]*e);this.vel[t*3]*=r,this.vel[t*3+1]=this.vel[t*3+1]*r-this.grav[t]*e,this.vel[t*3+2]*=r,this.pos[t*3]+=this.vel[t*3]*e,this.pos[t*3+1]+=this.vel[t*3+1]*e,this.pos[t*3+2]+=this.vel[t*3+2]*e,this.alpha[t]=Math.min(1,n*1.6),this.size[t]=this.size0[t]*(.4+.6*n)}let t=this.points.geometry;t.attributes.position.needsUpdate=!0,t.attributes.aColor.needsUpdate=!0,t.attributes.aSize.needsUpdate=!0,t.attributes.aAlpha.needsUpdate=!0}clear(){this.life.fill(0)}},pp=`varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,mp=`
varying vec2 vUv;
uniform vec3 uColor; uniform float uProgress; uniform float uShape; uniform float uTime; uniform float uAlpha;
void main(){
  vec2 p = vUv * 2.0 - 1.0;
  float a = 0.0;
  if (uShape < 0.5) {
    float d = length(p);
    if (d > 1.0) discard;
    float edge = smoothstep(0.86, 0.94, d) * (1.0 - smoothstep(0.97, 1.0, d));
    float fill = step(d, uProgress) * 0.4;
    float stripes = 0.12 * step(0.5, fract((p.x + p.y) * 4.0 - uTime * 2.0));
    a = edge * 1.0 + fill + stripes * (1.0 - uProgress);
  } else {
    // rectangle along +v (length) ; p.y from -1 (start) to 1 (end)
    float ex = 1.0 - smoothstep(0.82, 0.95, abs(p.x));
    float edge = (smoothstep(0.8, 0.95, abs(p.x)) * (1.0 - smoothstep(0.97, 1.0, abs(p.x))));
    float fill = step((p.y + 1.0) * 0.5, uProgress) * 0.4 * ex;
    float chev = 0.18 * step(0.6, fract(p.y * 5.0 - abs(p.x) * 1.2 - uTime * 3.0)) * ex;
    a = edge + fill + chev;
  }
  float pulse = 0.85 + 0.15 * sin(uTime * 18.0);
  gl_FragColor = vec4(uColor * pulse, clamp(a, 0.0, 1.0) * uAlpha);
}`,hp=500,gp=class{scene;glow=new fp(2600,!0);ink=new fp(1400,!1);rings=[];beamData=[];beamCursor=0;beamMesh;tmpO=new ir;tmpC=new W;teles=[];ringGeo=new ho(.88,1,56);beamGeo=new Na(1,1,1);teleGeo=new mo(1,1);tmpV=new V;time=0;constructor(e){this.scene=e,e.add(this.glow.points,this.ink.points),this.beamGeo.translate(0,0,.5),this.teleGeo.rotateX(-Math.PI/2);for(let e=0;e<hp;e++)this.beamData.push({ax:0,ay:0,az:0,bx:0,by:0,bz:1,w:0,t:1,dur:1,alpha:0,r:1,g:1,b:1});let t=this.beamGeo.clone();t.setAttribute(`aColor`,new Qi(new Float32Array(hp*3),3).setUsage(Bt)),t.setAttribute(`aAlpha`,new Qi(new Float32Array(hp),1).setUsage(Bt)),this.beamMesh=new oa(t,new Do({transparent:!0,depthWrite:!1,blending:2,vertexShader:`attribute vec3 aColor; attribute float aAlpha; varying vec3 vC; varying float vA;
        void main(){ vC = aColor; vA = aAlpha; gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position,1.0); }`,fragmentShader:`varying vec3 vC; varying float vA; void main(){ gl_FragColor = vec4(vC * vA, vA); }`}),hp),this.beamMesh.frustumCulled=!1,this.beamMesh.renderOrder=4,this.beamMesh.count=0,this.beamMesh.instanceMatrix.setUsage(Bt),e.add(this.beamMesh)}setPixelScale(e){this.glow.mat.uniforms.uScale.value=e,this.ink.mat.uniforms.uScale.value=e}burst(e,t,n,r,i,a=5,o=.5,s=.5,c=6,l=2){let u=new W(i);for(let i=0;i<r;i++){let r=Math.random()*Math.PI*2,i=(Math.random()-.3)*1.2,d=a*(.4+Math.random()*.8);this.glow.emit(e,t,n,Math.cos(r)*Math.cos(i)*d,Math.sin(i)*d+l,Math.sin(r)*Math.cos(i)*d,u.r,u.g,u.b,s*(.6+Math.random()*.8),o*(.6+Math.random()*.8),c,2.5)}}inkBurst(e,t,n,r,i,a=4,o=.55){let s=new W(i);for(let i=0;i<r;i++){let r=Math.random()*Math.PI*2,i=a*(.3+Math.random()*.9);this.ink.emit(e,t+Math.random()*.5,n,Math.cos(r)*i,1.5+Math.random()*3,Math.sin(r)*i,s.r,s.g,s.b,o*(.6+Math.random()*.8),.45+Math.random()*.35,9,3)}}trail(e,t,n,r,i=.3,a=.25){this.glow.emit(e,t,n,(Math.random()-.5)*.6,(Math.random()-.5)*.6,(Math.random()-.5)*.6,r.r,r.g,r.b,i,a,0,1)}dust(e,t,n,r,i=14272432,a=3){let o=new W(i);for(let i=0;i<r;i++){let r=Math.random()*Math.PI*2,i=a*(.5+Math.random()*.5);this.ink.emit(e+Math.cos(r)*.3,t+.1,n+Math.sin(r)*.3,Math.cos(r)*i,.6+Math.random(),Math.sin(r)*i,o.r,o.g,o.b,.28+Math.random()*.25,.3+Math.random()*.25,1,5)}}ring(e,t,n,r,i,a,o,s=.85){let c=this.rings.find(e=>!e.active);if(!c){let e=new K(this.ringGeo,hd(16777215,1));e.material.side=2,e.rotation.x=-Math.PI/2,e.renderOrder=3,this.scene.add(e),c={mesh:e,t:0,dur:1,r0:1,r1:1,active:!1,alpha:1},this.rings.push(c)}c.active=!0,c.t=0,c.dur=a,c.r0=r,c.r1=i,c.alpha=s,c.mesh.visible=!0,c.mesh.position.set(e,t+.08,n),c.mesh.material.color.set(o)}beam(e,t,n,r,i,a,o,s,c=.2,l=1){let u=this.beamData,d=-1;for(let e=0;e<hp;e++){let t=(this.beamCursor+e)%hp;if(u[t].t>=u[t].dur){d=t;break}}d<0&&(d=this.beamCursor),this.beamCursor=(d+1)%hp;let f=u[d];f.ax=e,f.ay=t,f.az=n,f.bx=r,f.by=i,f.bz=a,f.w=o,f.t=0,f.dur=c,f.alpha=l,this.tmpC.set(s),f.r=this.tmpC.r,f.g=this.tmpC.g,f.b=this.tmpC.b}updateBeams(e){let t=this.beamMesh,n=t.geometry.getAttribute(`aColor`),r=t.geometry.getAttribute(`aAlpha`),i=0;for(let a of this.beamData){if(a.t>=a.dur)continue;a.t+=e;let o=Math.min(1,a.t/a.dur),s=Math.hypot(a.bx-a.ax,a.by-a.ay,a.bz-a.az);this.tmpO.position.set(a.ax,a.ay,a.az),this.tmpV.set(a.bx,a.by,a.bz),this.tmpO.lookAt(this.tmpV),this.tmpO.scale.set(a.w,a.w*.5,Math.max(.001,s)),this.tmpO.updateMatrix(),t.setMatrixAt(i,this.tmpO.matrix),n.setXYZ(i,a.r,a.g,a.b),r.setX(i,a.alpha*(1-o*o)),i++}t.count=i,t.instanceMatrix.needsUpdate=!0,n.needsUpdate=!0,r.needsUpdate=!0}lightning(e,t,n=.12){for(let r=0;r<e.length-1;r++){let i=e[r],a=e[r+1],o=i.x,s=i.y,c=i.z;for(let e=1;e<=3;e++){let r=e/3,l=e===3?0:.5,u=i.x+(a.x-i.x)*r+(Math.random()-.5)*l,d=i.y+(a.y-i.y)*r+(Math.random()-.5)*l,f=i.z+(a.z-i.z)*r+(Math.random()-.5)*l;this.beam(o,s,c,u,d,f,n,t,.14),this.beam(o,s,c,u,d,f,n*3,t,.1,.25),o=u,s=d,c=f}}}telegraph(e,t,n,r,i,a,o,s,c=16734762){let l=this.teles.find(e=>!e.active);if(!l){let e=new Do({vertexShader:pp,fragmentShader:mp,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,uniforms:{uColor:{value:new W},uProgress:{value:0},uShape:{value:0},uTime:{value:0},uAlpha:{value:1}}}),t=new K(this.teleGeo,e);t.renderOrder=2,this.scene.add(t),l={mesh:t,mat:e,t:0,dur:1,linger:0,active:!1,shape:`circle`,x:0,z:0,r:0,sx:0,sz:0,yaw:0,l:0,w:0},this.teles.push(l)}return l.active=!0,l.t=0,l.dur=s,l.linger=.15,l.mesh.visible=!0,l.mat.uniforms.uColor.value.set(c),l.mat.uniforms.uShape.value=e===`circle`?0:1,l.mesh.rotation.set(0,o,0),l.shape=e,l.sx=t,l.sz=r,l.yaw=o,l.l=a,l.w=i,l.r=i,l.x=e===`circle`?t:t+Math.sin(o)*a/2,l.z=e===`circle`?r:r+Math.cos(o)*a/2,e===`circle`?(l.mesh.position.set(t,n+.06,r),l.mesh.scale.set(i*2,1,i*2)):(l.mesh.position.set(t+Math.sin(o)*a/2,n+.06,r+Math.cos(o)*a/2),l.mesh.scale.set(i,1,a)),l}update(e){this.time+=e,this.glow.update(e),this.ink.update(e);for(let t of this.rings){if(!t.active)continue;t.t+=e;let n=t.t/t.dur;if(n>=1){t.active=!1,t.mesh.visible=!1;continue}let r=t.r0+(t.r1-t.r0)*(1-(1-n)*(1-n));t.mesh.scale.set(r,r,r),t.mesh.material.opacity=t.alpha*(1-n)}this.updateBeams(e);for(let t of this.teles)if(t.active){if(t.t+=e,t.mat.uniforms.uTime.value=this.time,t.mat.uniforms.uProgress.value=Math.min(1,t.t/t.dur),t.t>t.dur){let e=(t.t-t.dur)/t.linger;t.mat.uniforms.uAlpha.value=Math.max(0,1-e),e>=1&&(t.active=!1,t.mesh.visible=!1)}else t.mat.uniforms.uAlpha.value=1}}activeTelegraphs(){let e=[];for(let t of this.teles)!t.active||t.t>t.dur||e.push({shape:t.shape,x:t.x,z:t.z,r:t.r,sx:t.sx,sz:t.sz,yaw:t.yaw,l:t.l,w:t.w,progress:t.t/t.dur});return e}cancelTelegraph(e){e.active=!1,e.mesh.visible=!1}clear(){this.glow.clear(),this.ink.clear();for(let e of this.rings)e.active=!1,e.mesh.visible=!1;for(let e of this.beamData)e.t=e.dur;for(let e of this.teles)e.active=!1,e.mesh.visible=!1}},_p=class{cap;mesh;alpha;n=0;m4=new jn;constructor(e,t=800){this.cap=t;let n=new mo(2,2);n.rotateX(-Math.PI/2),this.alpha=new Qi(new Float32Array(t),1),this.alpha.setUsage(Bt),n.setAttribute(`aAlpha`,this.alpha);let r=new Do({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,uniforms:{uTex:{value:_d()}},vertexShader:`attribute float aAlpha; varying float vA; varying vec2 vUv;
        void main(){ vA = aAlpha; vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position,1.0); }`,fragmentShader:`varying float vA; varying vec2 vUv;
        void main(){ float d = length(vUv*2.0-1.0); float a = smoothstep(1.0, 0.25, d); gl_FragColor = vec4(0.06,0.03,0.1, a * vA); }`});this.mesh=new oa(n,r,t),this.mesh.frustumCulled=!1,this.mesh.renderOrder=1,this.mesh.instanceMatrix.setUsage(Bt),e.add(this.mesh)}begin(){this.n=0}add(e,t,n,r,i){this.n>=this.cap||(this.m4.makeScale(r,1,r),this.m4.setPosition(e,t+.04,n),this.mesh.setMatrixAt(this.n,this.m4),this.alpha.array[this.n]=i,this.n++)}end(){this.mesh.count=this.n,this.mesh.instanceMatrix.needsUpdate=!0,this.alpha.needsUpdate=!0}},vp=7.2,yp=34,bp=44,xp=11.8,Sp=4.8,Cp=.3,wp=16,Tp=class{arena;x=0;y=0;z=0;vx=0;vy=0;vz=0;r=.34;state=`normal`;grounded=!0;facing=Math.PI;coyote=0;jumpBuffer=0;jumpCut=!1;airJumps=0;hasDoubleJump=!1;speedMul=1;jumpMul=1;dashCdMul=1;maxHp=100;hp=100;invuln=0;hurtFlash=0;dead=0;dashCd=0;dashT=0;dashDX=0;dashDZ=1;wallNX=0;wallNZ=0;climbRate=0;mantleT=0;mFrom={x:0,y:0,z:0};mTo={x:0,y:0,z:0};zip=null;zipT=0;zipSpeed=0;zipCooldown=0;lastZip=null;landImpact=0;fallPeak=0;lastSafe={x:0,y:0,z:6};safeTimer=0;stepDist=0;ventBoost=0;ventDX=0;ventDZ=0;falls=0;airTime=0;ev={};constructor(e){this.arena=e}reset(e,t,n){this.x=e,this.y=t,this.z=n,this.vx=this.vy=this.vz=0,this.state=`normal`,this.grounded=!0,this.hp=this.maxHp,this.invuln=0,this.dead=0,this.dashCd=0,this.dashT=0,this.zip=null,this.lastSafe={x:e,y:t,z:n},this.facing=Math.PI,this.falls=0}cancelTraversal(e,t,n){let r=[`zip`,`climb`,`mantle`,`dash`].includes(this.state)?this.state:null;return this.x=e,this.y=t,this.z=n,this.vx=this.vy=this.vz=0,this.state=`normal`,this.grounded=!0,this.coyote=0,this.jumpBuffer=0,this.jumpCut=!1,this.airJumps=+!!this.hasDoubleJump,this.dashT=0,this.dashDX=0,this.dashDZ=1,this.wallNX=this.wallNZ=this.climbRate=this.mantleT=0,this.mFrom={x:e,y:t,z:n},this.mTo={x:e,y:t,z:n},this.zip=null,this.lastZip=null,this.zipT=this.zipSpeed=this.zipCooldown=0,this.landImpact=0,this.fallPeak=t,this.lastSafe={x:e,y:t,z:n},this.safeTimer=.25,this.stepDist=0,this.ventBoost=this.ventDX=this.ventDZ=this.airTime=0,r}enforceFinalBounds(){let e=this.arena.finalDomain;if(!e)return;let t=Ad(e,this.x,this.z,this.r);if(t){this.x=t.x,this.z=t.z;let n=(t.x-e.cx)/(e.roomR-this.r),r=(t.z-e.cz)/(e.roomR-this.r),i=this.vx*n+this.vz*r;i>0&&(this.vx-=i*n,this.vz-=i*r)}this.y<e.floorY&&(this.y=e.floorY,this.vy=0,this.grounded=!0),this.lastSafe={x:this.x,y:e.floorY,z:this.z}}get speed(){return vp*this.speedMul}get dashing(){return this.state===`dash`}step(e,t){if(this.invuln=Math.max(0,this.invuln-e),this.hurtFlash=Math.max(0,this.hurtFlash-e*4),this.dashCd=Math.max(0,this.dashCd-e),this.zipCooldown=Math.max(0,this.zipCooldown-e),this.landImpact=0,this.ventBoost=Math.max(0,this.ventBoost-e),this.jumpBuffer=t.jump?.13:Math.max(0,this.jumpBuffer-e),this.state===`dead`)this.dead=Math.min(1,this.dead+e*2);else{switch(this.state){case`zip`:this.stepZip(e);break;case`climb`:this.stepClimb(e,t);break;case`mantle`:this.stepMantle(e);break;default:this.stepNormal(e,t)}if(this.y<-16){this.falls++;let e=this.lastSafe,t=this.arena.cellOf(e.x),n=this.arena.cellOf(e.z);this.arena.inBounds(t,n)&&this.arena.state[this.arena.idx(t,n)]===Vd.Solid&&this.arena.heightAt(e.x,e.z)>=e.y-.01||(e=this.arena.nearestWalkable(e.x,e.z,14,!0,!0)??this.arena.nearestWalkable(0,6,24,!1,!0)??e),this.x=e.x,this.y=this.arena.heightAt(e.x,e.z)+.05,this.z=e.z,this.vx=this.vy=this.vz=0,this.state=`normal`,this.grounded=!0,this.zip=null,this.invuln=Math.max(this.invuln,1.6),this.ev.fellOut?.()}}}stepNormal(e,t){let n=this.arena,r=Math.min(1,Math.hypot(t.mx,t.mz)),i=this.state===`dash`;if(t.dash&&this.dashCd<=0&&!i){let e=t.mx,n=t.mz;r<.2&&(e=Math.sin(this.facing),n=Math.cos(this.facing));let i=Math.hypot(e,n)||1;this.dashDX=e/i,this.dashDZ=n/i,this.state=`dash`,this.dashT=0,this.dashCd=1.1*this.dashCdMul,this.invuln=Math.max(this.invuln,.35),this.vy<0&&(this.vy*=.3),this.ev.dash?.()}if(this.grounded){let e=n.raftUnder(this.x,this.z,this.y,this.r);e&&(this.x+=e.dx,this.z+=e.dz,this.y=e.y)}if(this.state===`dash`){this.dashT+=e;let t=this.dashT/Cp,n=wp*Math.sqrt(this.speedMul)*(1-t*.45);this.vx=this.dashDX*n,this.vz=this.dashDZ*n,this.dashT>=Cp&&(this.state=`normal`,this.vx*=.45,this.vz*=.45)}else{let n=this.speed,r=this.ventBoost>.3?4:0,i=t.mx*n+this.ventDX*r,a=t.mz*n+this.ventDZ*r,o=this.grounded?70:this.ventBoost>0?40:26,s=i-this.vx,c=a-this.vz,l=Math.hypot(s,c),u=o*e;l>u?(this.vx+=s/l*u,this.vz+=c/l*u):(this.vx=i,this.vz=a)}if(this.grounded?(this.coyote=.1,this.airJumps=+!!this.hasDoubleJump,this.jumpCut=!1):this.coyote=Math.max(0,this.coyote-e),this.jumpBuffer>0&&this.state!==`dash`&&(this.grounded||this.coyote>0?(this.vy=xp*this.jumpMul,this.grounded=!1,this.coyote=0,this.jumpBuffer=0,this.jumpCut=!1,this.fallPeak=this.y,this.ev.jump?.(!1)):this.airJumps>0&&!this.tryZipGrab(!0)&&(this.airJumps--,this.vy=xp*.92*this.jumpMul,this.jumpBuffer=0,this.jumpCut=!1,this.fallPeak=this.y,this.ev.jump?.(!0))),!t.jumpHeld&&this.vy>3&&!this.jumpCut&&this.ventBoost<=0&&(this.vy*=.55,this.jumpCut=!0),this.tryZipGrab(!1))return;let a=this.grounded,o=this.y,s=this.x+this.vx*e,c=this.z+this.vz*e,l=r>.2||this.state===`dash`;this.grounded&&this.state!==`dash`&&r<.55&&n.supportAt(s,c,this.r*.5,o+.55)<o-1.2&&(s=this.x,c=this.z,this.vx=0,this.vz=0);let u=(e,r)=>{let i=e===`x`?r:this.x,a=e===`z`?r:this.z,s=n.maxHeightIn(i,a,this.r);if(s<=o+.55)return e===`x`?this.x=r:this.z=r,this.grounded&&s>o&&s<=o+.55&&(this.y=s),!0;let c=e===`x`?this.vx:this.vz,l=-Math.sign(c),u=e===`x`?t.mx*-l:t.mz*-l,d=s-o;return this.state!==`dash`&&u>.35&&d<=1.7&&(this.grounded||this.vy<4)?(this.beginMantle(i+(e===`x`?-l*.2:0),s,a+(e===`z`?-l*.2:0)),this.ev.vault?.(),!1):this.state!==`dash`&&u>.35&&d>1.7?(this.state=`climb`,this.wallNX=e===`x`?l:0,this.wallNZ=e===`z`?l:0,this.vx=this.vz=0,this.vy=0,this.facing=Math.atan2(-this.wallNX,-this.wallNZ),this.ev.climbStart?.(),!1):(e===`x`?this.vx=0:this.vz=0,!1)};if(u(`x`,s),(this.state===`normal`||this.state===`dash`)&&u(`z`,c),this.state===`mantle`||this.state===`climb`)return;let d=this.vy<0?bp:yp;this.state===`dash`&&!this.grounded?this.vy=Math.max(this.vy-d*.25*e,-2):this.vy-=d*e,this.vy=Math.max(this.vy,-38);let f=this.y+this.vy*e,p=n.supportAt(this.x,this.z,this.r*.55,Math.max(this.y,f)+.05);if(f<=p+.001&&this.vy<=0){if(f=p,!a){let e=Math.max(0,this.fallPeak-p);this.landImpact=bd(e/6,.15,1),this.ev.land?.(e)}this.vy=0,this.grounded=!0}else a&&this.vy<=0&&p>-1e3&&p>=this.y-.65&&p<this.y?(f=p,this.vy=0,this.grounded=!0):(this.grounded&&(this.fallPeak=this.y),this.grounded=!1);this.y=f,this.grounded?this.airTime=0:(this.fallPeak=Math.max(this.fallPeak,this.y),this.airTime+=e);let m=Math.hypot(this.vx,this.vz);if(m>.5&&l&&(this.facing=Math.atan2(this.vx,this.vz)),this.grounded){let t=n.tileAt(this.x,this.z);if(t===Bd.Crumble&&n.touch(this.x,this.z),t===Bd.Vent&&this.state!==`dash`){this.vy=22;let e=n.vents[0],t=1/0;for(let r of n.finalDomain?[]:n.vents){let n=Math.hypot(r.x-this.x,r.z-this.z);n<t&&(t=n,e=r)}e&&(this.ventDX=e.dx,this.ventDZ=e.dz),this.grounded=!1,this.ventBoost=1.2,this.jumpCut=!0,this.fallPeak=this.y,this.ev.vent?.()}if(this.stepDist+=m*e,this.stepDist>1.25&&(this.stepDist=0,this.ev.step?.()),this.safeTimer-=e,this.safeTimer<=0&&t!==Bd.Crumble&&t!==Bd.Vent&&!n.raftUnder(this.x,this.z,this.y,this.r)){let e=n.cellOf(this.x),t=n.cellOf(this.z);n.edgeDistance(e,t)>=2&&n.cellHeight(e,t)===this.y&&n.state[n.idx(e,t)]===Vd.Solid&&(this.lastSafe={x:this.x,y:this.y,z:this.z},this.safeTimer=.25)}}}beginMantle(e,t,n){this.state=`mantle`,this.mantleT=0,this.mFrom={x:this.x,y:this.y,z:this.z};let r=e-this.x,i=n-this.z,a=Math.hypot(r,i)||1,o=this.r+.25;this.mTo={x:this.x+r/a*o,y:t,z:this.z+i/a*o},this.vx=this.vz=this.vy=0}stepMantle(e){this.mantleT+=e/.2;let t=Math.min(1,this.mantleT),n=t*t*(3-2*t),r=Math.min(1,t*1.6);this.y=this.mFrom.y+(this.mTo.y-this.mFrom.y)*(r*r*(3-2*r))+Math.sin(t*Math.PI)*.15,this.x=this.mFrom.x+(this.mTo.x-this.mFrom.x)*n,this.z=this.mFrom.z+(this.mTo.z-this.mFrom.z)*n,t>=1&&(this.state=`normal`,this.grounded=!0,this.y=this.mTo.y,this.landImpact=.25)}stepClimb(e,t){let n=this.arena,r=-(t.mx*this.wallNX+t.mz*this.wallNZ),i=this.x-this.wallNX*(this.r+.2),a=this.z-this.wallNZ*(this.r+.2),o=n.maxHeightIn(i,a,.1);if(this.jumpBuffer>0){this.jumpBuffer=0,this.state=`normal`,this.vx=this.wallNX*6.5,this.vz=this.wallNZ*6.5,this.vy=xp*.85,this.facing=Math.atan2(this.wallNX,this.wallNZ),this.jumpCut=!0,this.fallPeak=this.y,this.ev.jump?.(!1);return}if(o<=this.y+.1){this.state=`normal`;return}if(r<-.3){this.state=`normal`,this.vx=this.wallNX*3,this.vz=this.wallNZ*3,this.vy=0;return}let s=-this.wallNZ,c=this.wallNX,l=t.mx*s+t.mz*c;if(Math.abs(l)>.3){let t=this.x+s*l*2.2*e,r=this.z+c*l*2.2*e;n.maxHeightIn(t-this.wallNX*(this.r+.2),r-this.wallNZ*(this.r+.2),.1)>this.y+.3&&n.maxHeightIn(t,r,this.r)<=this.y+.3&&(this.x=t,this.z=r)}this.climbRate=r>.3?Sp*this.speedMul**.5:-1.2,this.y+=this.climbRate*e;let u=n.supportAt(this.x,this.z,this.r*.55,this.y+.05);this.y<=u?(this.y=u,this.state=`normal`,this.grounded=!0):this.y>=o-.45&&this.beginMantle(i,o,a)}tryZipGrab(e){if(this.zipCooldown>0)return!1;let t=this.arena;for(let n of t.finalDomain?[]:t.ziplines){if(n===this.lastZip&&this.zipCooldown>0)continue;let t={t:0},r=this.y+2.2,i=Math.hypot(this.x-n.ax,this.z-n.az)<2&&Math.abs(this.y+2.3-n.ay)<1.6,a=Od(this.x,r,this.z,n.ax,n.ay-n.sag*.5,n.az,n.bx,n.by-n.sag*.5,n.bz,t),o=!this.grounded&&this.state!==`dash`;if(i&&(this.jumpBuffer>0||e||o)||o&&a<.9&&t.t<.94)return this.zip=n,this.zipT=i?Math.max(.01,t.t):t.t,this.zipSpeed=Math.max(6,Math.hypot(this.vx,this.vz)*.6),this.state=`zip`,this.grounded=!1,this.vy=0,this.jumpBuffer=0,this.ev.zipStart?.(),!0}return!1}stepZip(e){let t=this.zip,n=(t.ay-t.by)/t.length;this.zipSpeed=Math.min(21,this.zipSpeed+(8+n*30)*e),this.zipT+=this.zipSpeed*e/t.length;let r=Zd(t,Math.min(1,this.zipT),{x:0,y:0,z:0}),i=(t.bx-t.ax)/t.length,a=(t.bz-t.az)/t.length;this.vx=i*this.zipSpeed,this.vz=a*this.zipSpeed,this.x=r.x,this.y=r.y-2.35,this.z=r.z,this.facing=Math.atan2(i,a);let o=this.zipT>=1;(this.jumpBuffer>0||o)&&(this.jumpBuffer=0,this.state=`normal`,this.lastZip=t,this.zipCooldown=.5,this.vy=o?4:9,this.vx*=.55,this.vz*=.55,this.jumpCut=!0,this.fallPeak=this.y,this.zip=null,this.ev.zipEnd?.())}hurt(e,t=!1){return this.state===`dead`||!t&&(this.invuln>0||this.state===`dash`)?!1:(this.hp-=e,this.invuln=.7,this.hurtFlash=1,!0)}};function Ep(e){let t=new ld;switch(e){case`murk`:t.add(Z(.46,1),3023941,{pos:[0,.42,0],scale:[1,.88,1]}).add(Z(.3,1),4010080,{pos:[0,.33,.12],scale:[1,.7,1]}).add(ud(.16,.42,5),5783690,{pos:[.05,.92,-.08],rot:[-.4,0,.2]}).add(ud(.1,.3,5),5783690,{pos:[-.14,.85,-.02],rot:[-.2,0,-.4]}).add(Z(.085,0),16735432,{pos:[-.15,.5,.38],glow:1}).add(Z(.085,0),16735432,{pos:[.15,.5,.38],glow:1}).add(X(.22,.04,.05),1182746,{pos:[0,.32,.43]});break;case`moth`:t.add(Z(.2,1),4864874,{pos:[0,0,0],scale:[1,1,2]}).add(Z(.16,1),6048384,{pos:[0,.03,.36]}).add(Z(.05,0),16754418,{pos:[-.08,.08,.48],glow:1}).add(Z(.05,0),16754418,{pos:[.08,.08,.48],glow:1}).add(X(.02,.02,.3),2826816,{pos:[-.08,.2,.55],rot:[-.8,.3,0]}).add(X(.02,.02,.3),2826816,{pos:[.08,.2,.55],rot:[-.8,-.3,0]});for(let e of[-1,1])t.add(X(.75,.025,.62),8876212,{pos:[e*.52,.06,.06],rot:[0,0,e*.22]}).add(X(.5,.026,.4),6968722,{pos:[e*.42,.04,-.36],rot:[0,e*.3,e*.18]}).add(Q(.11,.11,.03,8),16756976,{pos:[e*.62,.1,.1],rot:[0,0,e*.22],glow:.85});break;case`skitter`:t.add(Z(.32,1),2300720,{pos:[0,.38,.12],scale:[1.1,.7,1.1]}).add(Z(.36,1),3155007,{pos:[0,.42,-.35],scale:[1,.85,1.2]}).add(Z(.06,0),11075402,{pos:[-.1,.5,.42],glow:1}).add(Z(.06,0),11075402,{pos:[.1,.5,.42],glow:1}).add(Z(.04,0),11075402,{pos:[-.18,.46,.36],glow:1}).add(Z(.04,0),11075402,{pos:[.18,.46,.36],glow:1}).add(X(.08,.05,.12),6961754,{pos:[0,.3,.5]});for(let e of[-1,1])for(let n=0;n<3;n++){let r=.3-n*.28;t.add(X(.55,.05,.05),1709092,{pos:[e*.4,.5,r],rot:[0,e*(n-1)*.35,e*-.6]}).add(X(.05,.45,.05),1709092,{pos:[e*.68,.22,r+e*0-(n-1)*.1],rot:[0,0,e*.25]})}break;case`husk`:t.add(X(.8,.9,.6),3813196,{pos:[0,1.05,-.05],rot:[.35,0,0]}).add(X(.9,.35,.55),2892608,{pos:[0,1.45,.05],rot:[.4,0,0]}).add(X(.55,.5,.45),2892608,{pos:[0,.45,-.05]}).add(Z(.27,1),14208443,{pos:[0,1.62,.42],scale:[1,1.1,.9]}).add(X(.09,.05,.03),7337215,{pos:[-.1,1.66,.66],glow:1}).add(X(.09,.05,.03),7337215,{pos:[.1,1.66,.66],glow:1}).add(ud(.08,.3,4),12563360,{pos:[-.2,1.88,.35],rot:[-.4,0,.5]}).add(ud(.08,.3,4),12563360,{pos:[.2,1.88,.35],rot:[-.4,0,-.5]});for(let e of[-1,1])t.add(X(.24,.9,.24),2892608,{pos:[e*.58,1,.25],rot:[.5,0,e*.12]}).add(X(.28,.5,.28),3813196,{pos:[e*.62,.42,.55],rot:[.2,0,0]}).add(X(.26,.45,.28),2366514,{pos:[e*.2,.18,0]});break;case`spitter`:t.add(Z(.55,1),3091006,{pos:[0,.55,0],scale:[1.1,.85,1]}).add(Z(.38,1),8257386,{pos:[0,.95,-.25],glow:.75}).add(Z(.18,1),12910512,{pos:[.12,1.08,-.2],glow:.9}).add(Q(.16,.22,.4,7),4142674,{pos:[0,.6,.55],rot:[Math.PI/2,0,0]}).add(Q(.11,.11,.05,7),8257386,{pos:[0,.6,.76],rot:[Math.PI/2,0,0],glow:1}).add(Z(.07,0),8257386,{pos:[-.25,.85,.42],glow:1}).add(Z(.07,0),8257386,{pos:[.25,.85,.42],glow:1});for(let e of[-1,1])t.add(X(.2,.35,.3),2367280,{pos:[e*.42,.17,.2]}).add(X(.2,.3,.3),2367280,{pos:[e*.42,.15,-.3]})}return t.build()}var Dp=460,Op=2.5,kp=Math.ceil(120/Op),Ap=class{game;list=[];free=[];nextId=1;aliveCount=0;extra=[];head=new Int32Array(kp*kp).fill(-1);next=new Int32Array(Dp);meshes=new Map;flashAttr=new Map;m4=new jn;q=new cn;e3=new Vn;v3=new V;s3=new V;col=new W;constructor(e,t){this.game=e;for(let e=0;e<Dp;e++){let e=jp();this.list.push(e)}this.free=[...this.list].reverse();for(let e of ad){let n=new oa(Ep(e),pd(),Dp),r=new Qi(new Float32Array(Dp),1);r.setUsage(Bt),n.geometry.setAttribute(`aFlash`,r),n.instanceMatrix.setUsage(Bt),n.instanceColor=new Qi(new Float32Array(Dp*3).fill(1),3),n.count=0,n.frustumCulled=!1,this.meshes.set(e,n),this.flashAttr.set(e,r),t.add(n)}}clear(){for(let e of this.list)e.alive=!1;this.free=[...this.list].reverse(),this.aliveCount=0,this.head.fill(-1)}spawn(e,t,n,r={}){let i=this.free.pop();if(!i)return null;let a=id[e],o=this.game,s=o.time,c=(1+s/120+(s/200)**2)*(r.hpMul??1),l=!!r.elite;i.id=this.nextId++,i.alive=!0,i.kind=e,i.def=a,i.x=t,i.z=n;let u=o.arena.heightAt(t,n);return i.y=r.y??(a.flyer?Math.max(u,0)+1.3:u),i.vy=0,i.kx=0,i.kz=0,i.maxHp=i.hp=a.hp*c*(l?9:1),i.dmg=a.dmg*(1+s/300)*(l?1.4:1),i.speed=a.speed*(l?.92:1)*(.92+Math.random()*.16),i.scale=l?1.5:1,i.r=a.radius*i.scale,i.xp=a.xp*(l?12:1),i.elite=l,i.flash=0,i.emerge=r.emerge??.6,i.yaw=Math.random()*Math.PI*2,i.anim=Math.random()*10,i.falling=!1,i.climbing=!1,i.atkCd=1.5+Math.random()*1.5,i.windup=0,i.haloCd=0,i.burn=0,i.burnTick=0,i.lastGX=t,i.lastGY=i.y,i.lastGZ=n,i.minion=!!r.minion,i.farTime=0,this.aliveCount++,i}kill(e){e.alive&&(e.alive=!1,this.aliveCount--,this.free.push(e))}rebuildHash(){this.head.fill(-1);for(let e=0;e<Dp;e++){let t=this.list[e];if(!t.alive||t.falling)continue;let n=bd(Math.floor((t.x+60)/Op),0,kp-1),r=bd(Math.floor((t.z+60)/Op),0,kp-1)*kp+n;this.next[e]=this.head[r],this.head[r]=e}}query(e,t,n,r){for(let i of this.extra){if(!i.alive)continue;let a=i.x-e,o=i.z-t,s=n+i.r;if(a*a+o*o<=s*s&&r(i)===!0)return}let i=bd(Math.floor((e-n-1+60)/Op),0,kp-1),a=bd(Math.floor((e+n+1+60)/Op),0,kp-1),o=bd(Math.floor((t-n-1+60)/Op),0,kp-1),s=bd(Math.floor((t+n+1+60)/Op),0,kp-1);for(let c=o;c<=s;c++)for(let o=i;o<=a;o++){let i=this.head[c*kp+o];for(;i>=0;){let a=this.list[i],o=a.x-e,s=a.z-t,c=n+a.r;if(a.alive&&o*o+s*s<=c*c&&r(a)===!0)return;i=this.next[i]}}}nearest(e,t,n,r,i){let a=null,o=r*r;return this.query(e,n,r,r=>{if(r.emerge>.25||i&&i.has(r.id))return;let s=r.boss?0:(r.y-t)*1.5,c=(r.x-e)**2+(r.z-n)**2+s*s;r.boss&&(c=Math.max(0,Math.sqrt(c)-r.r)**2*.3),c<o&&(o=c,a=r)}),a}densest(e,t,n){let r=null,i=-1,a=0;return this.query(e,t,n,e=>{if(e.emerge>.25||a++>40)return;let t=0;this.query(e.x,e.z,3,()=>{t++}),t>i&&(i=t,r=e)}),r}damage(e,t,n,r,i,a,o,s=`primary`){if(!e.alive||e.emerge>.25||!Number.isFinite(t)||t<=0)return 0;if(e.boss)return e.boss.invulnerable?0:(this.game.onEnemyHit(e,t,n,o,s),e.boss.hit(t)?2:1);e.hp-=t,e.flash=1;let c=e.def.mass*(e.elite?2.5:1),l=Math.hypot(r,i)||1;return e.kx+=r/l*(a/c)*3.2,e.kz+=i/l*(a/c)*3.2,this.game.onEnemyHit(e,t,n,o,s),e.hp<=0?(this.game.onEnemyKilled(e,o),this.kill(e),2):1}update(e){let t=this.game,n=t.arena,r=t.player,i=t.flow;this.rebuildHash();for(let a=0;a<Dp;a++){let o=this.list[a];if(!o.alive)continue;if(o.anim+=e,o.flash=Math.max(0,o.flash-e*7),o.emerge>0){o.emerge-=e;continue}if(o.burn>0&&!o.falling&&(o.burn-=e,o.burnTick-=e,o.burnTick<=0&&(o.burnTick=.4,this.damage(o,4+t.time*.02,!1,0,0,0,`dragon`)===2)))continue;if(o.falling){o.vy-=30*e,o.y+=o.vy*e,o.x+=o.kx*e,o.z+=o.kz*e,o.y<-22&&(t.onEnemyFell(o),this.kill(o));continue}let s=r.x-o.x,c=r.z-o.z,l=Math.hypot(s,c);if(l>46&&!o.elite){if(o.farTime+=e,o.farTime>4){t.director.recycle(o);continue}}else o.farTime=0;let u=0,d=0,f=o.speed;if(o.def.flyer){u=s/(l||1),d=c/(l||1);let e=Math.sin(o.anim*2.3+o.id)*.5,t=-d*e,n=u*e;u+=t,d+=n}else{let e=Math.floor(o.x+60),t=Math.floor(o.z+60),n=t*120+e,a=e>=0&&t>=0&&e<120&&t<120?i.dist[n]:1/0;l<4&&Math.abs(r.y-o.y)<1.2||a===1/0||a<1.5?(u=s/(l||1),d=c/(l||1)):(u=i.dirX[n],d=i.dirZ[n],u=u*.85+s/(l||1)*.15,d=d*.85+c/(l||1)*.15)}o.kind===`spitter`&&(o.atkCd-=e,o.windup>0?(o.windup-=e,f=0,o.flash=Math.max(o.flash,.35+.35*Math.sin(o.anim*30)),o.windup<=0&&(t.enemyShots.fireAt(o.x,o.y+.9,o.z,r.x+r.vx*.35,r.y+.9,r.z+r.vz*.35,9,o.dmg),o.atkCd=2.8+Math.random())):l<11&&o.atkCd<=0&&Math.abs(r.y-o.y)<6&&(o.windup=.75),l<6?(u=-u,d=-d,f*=.6):l<9&&(f*=.2));let p=Math.hypot(u,d)||1;u/=p,d/=p;let m=0,h=0,g=0;this.query(o.x,o.z,o.r+.6,e=>{if(e===o||g>6)return;let t=o.x-e.x,n=o.z-e.z,r=Math.hypot(t,n)||.01,i=o.r+e.r;r<i&&(m+=t/r*(i-r),h+=n/r*(i-r),g++)});let _=f*(o.climbing?o.def.climb:1),v=o.x+(u*_+o.kx)*e+m*.5,y=o.z+(d*_+o.kz)*e+h*.5,b=Math.exp(-7*e),x=Math.hypot(o.kx,o.kz);if(o.kx*=b,o.kz*=b,o.def.flyer){o.x=v,o.z=y;let t=n.heightAt(o.x,o.z),i=Math.max(t>-1e3?t:r.y,r.y)+.75+Math.sin(o.anim*3+o.id)*.2;o.y+=(i-o.y)*Math.min(1,e*3)}else{if(n.heightAt(v,y)<=-999){if(x>2.2||o.y-n.heightAt(o.x,o.z)>.5||n.heightAt(o.x,o.z)<=-999){o.x=v,o.z=y,o.falling=!0,o.vy=2;continue}v=o.x,y=o.z}let t=n.heightAt(v,y);t>o.y+.6?(o.climbing=!0,o.y=Math.min(t,o.y+3.2*o.def.climb*e),o.y<t-.05&&(v=o.x,y=o.z)):o.climbing=!1,o.x=v,o.z=y;let r=n.heightAt(o.x,o.z);if(r<=-999){o.falling=!0,o.vy=0;continue}o.climbing||(o.y>r+.02?(o.vy-=30*e,o.y=Math.max(r,o.y+o.vy*e)):(o.y=r,o.vy=0,o.lastGX=o.x,o.lastGY=o.y,o.lastGZ=o.z))}if(Math.abs(u)+Math.abs(d)>.01){let t=Math.atan2(o.kind===`spitter`?s:u,o.kind===`spitter`?c:d);o.yaw+=Cd(t-o.yaw)*Math.min(1,e*10)}let S=r.x-o.x,C=r.z-o.z,w=Math.hypot(S,C),T=o.r+r.r+.05;if(w<T&&r.y+1.6>o.y&&r.y<o.y+o.def.height){t.hurtPlayer(o.dmg,o.kind);let e=(T-w)*.6;o.x-=S/(w||1)*e,o.z-=C/(w||1)*e}}}render(e){let t=new Map;for(let e of ad)t.set(e,0);let n=this.game.blobs;for(let r=0;r<Dp;r++){let i=this.list[r];if(!i.alive)continue;let a=this.meshes.get(i.kind),o=t.get(i.kind);t.set(i.kind,o+1);let s=i.scale,c=i.scale,l=i.scale,u=i.y,d=0,f=i.anim;switch(i.kind){case`murk`:{let e=Math.abs(Math.sin(f*7+i.id));u+=e*.25,c*=.9+e*.2,s*=1.08-e*.12,l*=1.08-e*.12;break}case`moth`:s*=.55+Math.abs(Math.sin(f*16+i.id))*.6;break;case`skitter`:u+=Math.abs(Math.sin(f*18))*.05;break;case`husk`:d=Math.sin(f*3.5)*.06,u+=Math.abs(Math.sin(f*3.5))*.05;break;case`spitter`:{let e=i.windup>0?1+(.75-i.windup)*.35:1;s*=e,c*=e*(.95+Math.sin(f*4)*.05),l*=e;break}}if(i.climbing&&(d=-1),i.emerge>0){let e=1-bd(i.emerge/.6,0,1);c*=e,s*=.5+.5*e,l*=.5+.5*e}if(i.falling&&(d=e*6+i.id),this.e3.set(d,i.yaw,0,`YXZ`),this.q.setFromEuler(this.e3),this.v3.set(i.x,u,i.z),this.s3.set(s,c,l),this.m4.compose(this.v3,this.q,this.s3),a.setMatrixAt(o,this.m4),this.flashAttr.get(i.kind).array[o]=i.flash*.65,i.elite?this.col.setRGB(1.25,.95,.55):this.col.setRGB(1,1,1),a.setColorAt(o,this.col),!i.falling&&!i.def.flyer)n.add(i.x,i.y,i.z,i.r*1.25,.45);else if(i.def.flyer){let e=this.game.arena.heightAt(i.x,i.z);e>-1e3&&n.add(i.x,e,i.z,i.r*1.1,.3)}}for(let e of ad){let n=this.meshes.get(e);n.count=t.get(e),n.instanceMatrix.needsUpdate=!0,n.instanceColor&&(n.instanceColor.needsUpdate=!0),this.flashAttr.get(e).needsUpdate=!0}}};function jp(){return{id:0,alive:!1,kind:`murk`,def:id.murk,x:0,y:0,z:0,vy:0,kx:0,kz:0,hp:0,maxHp:0,dmg:0,speed:0,r:.4,xp:1,elite:!1,flash:0,emerge:0,yaw:0,anim:0,falling:!1,climbing:!1,atkCd:0,windup:0,haloCd:0,burn:0,burnTick:0,lastGX:0,lastGY:0,lastGZ:0,scale:1,minion:!1,farTime:0}}var Mp=700;function Np(){let e=new go(.11,8,6);e.scale(1,1,3.2);let t=new go(.22,8,6);t.scale(1,1,2.4);let n=[e.toNonIndexed(),t.toNonIndexed()],r=[],i=[];n.forEach((e,t)=>{let n=e.attributes.position;for(let e=0;e<n.count;e++){i.push(n.getX(e),n.getY(e),n.getZ(e));let a=t===0?1:.35;r.push(a,a,a)}});let a=new oi;return a.setAttribute(`position`,new G(i,3)),a.setAttribute(`color`,new G(r,3)),a}var Pp=class{game;list=[];mesh;obj=new ir;white=new W(1,1,1);orbiters=[];constructor(e,t){this.game=e;for(let e=0;e<Mp;e++)Fp(this.list);this.mesh=new oa(Np(),new Li({vertexColors:!0,transparent:!0,blending:2,depthWrite:!1,fog:!1}),764),this.mesh.instanceColor=new Qi(new Float32Array(2292),3),this.mesh.instanceMatrix.setUsage(Bt),this.mesh.frustumCulled=!1,this.mesh.renderOrder=4,t.add(this.mesh)}countAlive(){return this.list.reduce((e,t)=>e+ +!!t.alive,0)}clear(){for(let e of this.list)e.alive=!1;this.orbiters.length=0}spawn(e,n,r,i,a,o,s,c,l,u,d,f,p,m=.3){if(this.game.combatStopped)return null;let h=this.list.find(e=>!e.alive);return h?(h.role=`main`,h.gun=t(n)?n:null,h.lead=!1,h.burstDone=!1,h.dmgBase=l,h.seek=14,h.targetId=-1,h.age=0,h.vo={x:0,y:0,z:0},h.alive=!0,h.kind=e,h.weapon=n,h.x=r,h.y=i,h.z=a,h.vx=o,h.vy=s,h.vz=c,h.dmg=l,h.pierce=u,h.life=d,h.knock=f,h.color.set(p),h.hits.length=0,h.target=null,h.r=m,h.t=0,h.dur=1,h.area=0,h.burn=!1,h.hitKind=`primary`,h.noCrit=!1,h.ricocheted=!1,h):(t(n)&&this.game.procs.drop(n+`:allocation`,`pool700`),null)}countSecondary(e){let t=0;for(let n of this.list)n.alive&&n.hitKind!==`primary`&&(!e||n.gun===e)&&t++;return t}lob(e,t,n,r,i,a,o,s,c,l,u,d,f,p=`primary`,m=!1,h=`main`,g=!1){let _=this.spawn(e,t,n,r,i,0,0,0,l,0,c+.1,d,f,.4);return _?(_.sx=n,_.sy=r,_.sz=i,_.tx=a,_.ty=o,_.tz=s,_.dur=c,_.area=u,_.hitKind=p,_.noCrit=m,_.role=h,_.lead=g,_):null}update(e){let t=this.game,n=t.enemies,r=t.arena;for(let i of this.list){if(t.combatStopped)break;if(!i.alive)continue;if(i.age+=e,i.life-=e,i.life<=0){i.alive=!1;continue}if(i.kind===`shell`||i.kind===`meteor`){i.t+=e;let n=Math.min(1,i.t/i.dur),r=i.x,a=i.y,o=i.z;if(i.kind===`shell`?(i.x=i.sx+(i.tx-i.sx)*n,i.z=i.sz+(i.tz-i.sz)*n,i.y=i.sy+(i.ty-i.sy)*n+Math.sin(n*Math.PI)*5):(i.x=i.tx+(1-n)*4,i.z=i.tz-(1-n)*2,i.y=i.ty+(1-n)*18),i.vx=(i.x-r)/e,i.vy=(i.y-a)/e,i.vz=(i.z-o)/e,Math.random()<.7&&t.fx.trail(i.x,i.y,i.z,i.color,.6,.35),n>=1){let e=[];t.explode(i.tx,i.ty+.3,i.tz,i.area,i.dmg,i.knock,i.weapon,i.color,i.hitKind,i.noCrit,e),i.gun===`mortar`&&!t.combatStopped&&t.procs.onShellLanded(i,e),i.alive=!1}continue}if(i.kind===`firefly`){(!i.target||i.target.id!==i.targetId||!this.validTarget(i,i.target))&&(i.target=this.seekTarget(i),i.targetId=i.target?.id??-1);let n=Math.hypot(i.vx,i.vy,i.vz)||1;if(i.target){let t=i.target,r=t.x-i.x,a=t.y+t.def.height*.5*t.scale-i.y,o=t.z-i.z,s=Math.hypot(r,a,o)||1,c=Math.min(1,e*7);i.vx+=(r/s*n-i.vx)*c,i.vy+=(a/s*n-i.vy)*c,i.vz+=(o/s*n-i.vz)*c}else{let n=t.player;i.vx+=(n.x-i.x)*e*2+Math.sin(i.life*9)*e*20,i.vz+=(n.z-i.z)*e*2+Math.cos(i.life*7)*e*20,i.vy+=(n.y+1.6-i.y)*e*3}Math.random()<.5&&t.fx.trail(i.x,i.y,i.z,i.color,.35,.3)}i.x+=i.vx*e,i.y+=i.vy*e,i.z+=i.vz*e;let a=r.heightAt(i.x,i.z);if(a>-1e3&&i.y<a&&i.kind!==`firefly`){t.fx.burst(i.x,a+.1,i.z,3,i.color,2,.25,.3),i.alive=!1;continue}let o=!1,s=!1;n.query(i.x,i.z,i.r+.2,e=>{if(t.combatStopped||o||s||e.emerge>.25||e.falling||i.hits.includes(e.id))return;let n=e.y+e.def.height*e.scale+(e.boss?0:.2);if(i.y<e.y-.3||i.y>n)return;i.hits.push(e.id);let r=Math.hypot(i.vx,i.vz)||1,a=t.dealDamage(e,i.dmg,i.weapon,i.vx/r,i.vz/r,i.knock,i.burn,i.hitKind,i.noCrit);if(a!==0&&!t.combatStopped&&i.gun&&t.procs.onShotAccepted(i,e),i.pierce--<=0)return a!==0&&!t.combatStopped&&i.gun&&t.procs.onSpent(i,e)?(s=!0,!0):(o=!0,!0)}),o&&(t.fx.burst(i.x,i.y,i.z,4,i.color,3,.25,.35),i.alive=!1)}}validTarget(e,t){return t.alive&&!e.hits.includes(t.id)&&!t.falling&&t.emerge<=.25&&Math.hypot(t.x-e.x,t.z-e.z)<=e.seek&&Math.abs(t.y+t.def.height*.5*t.scale-e.y)<=5}seekTarget(e){let t=null,n=e.seek*e.seek;return this.game.enemies.query(e.x,e.z,e.seek,r=>{if(!this.validTarget(e,r))return;let i=r.boss?0:(r.y-e.y)*1.5,a=(r.x-e.x)**2+(r.z-e.z)**2+i*i;r.boss&&(a=Math.max(0,Math.sqrt(a)-r.r)**2*.3),a<n&&(t=r,n=a)}),t}render(){let e=0,t=this.obj;for(let n of this.list){if(!n.alive)continue;let r=Math.max(0,1-n.age/.12);t.position.set(n.x+n.vo.x*r,n.y+n.vo.y*r,n.z+n.vo.z*r);let i=Math.hypot(n.vx,n.vy,n.vz);i>.01&&t.lookAt(n.x+n.vx,n.y+n.vy,n.z+n.vz);let a=n.kind===`fragment`?.6:n.kind===`heavy`?1.8:n.kind===`shell`||n.kind===`meteor`?2.6:n.kind===`pellet`?.9:n.kind===`firefly`?.8:1,o=n.kind===`firefly`?1:Math.min(1.6,.6+i/30);t.scale.set(a,a,a*o),t.updateMatrix(),this.mesh.setMatrixAt(e,t.matrix),this.mesh.setColorAt(e,n.color),e++}for(let n of this.orbiters){if(e>=764)break;t.position.set(n.x,n.y,n.z),t.rotation.set(0,0,0),t.scale.set(n.s,n.s,n.s*.45),t.updateMatrix(),this.mesh.setMatrixAt(e,t.matrix),this.mesh.setColorAt(e,n.c??this.white),e++}this.mesh.count=e,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}};function Fp(e){e.push({role:`main`,gun:null,lead:!1,burstDone:!1,dmgBase:0,seek:14,targetId:-1,age:0,vo:{x:0,y:0,z:0},alive:!1,kind:`bolt`,weapon:`wick`,x:0,y:0,z:0,vx:0,vy:0,vz:0,dmg:0,pierce:0,r:.3,life:0,knock:0,color:new W,hits:[],target:null,sx:0,sy:0,sz:0,tx:0,ty:0,tz:0,t:0,dur:1,area:0,burn:!1,hitKind:`primary`,noCrit:!1,ricocheted:!1})}var Ip=360,Lp=class{game;list=[];outer;inner;m4=new jn;constructor(e,t){this.game=e;for(let e=0;e<Ip;e++)this.list.push({alive:!1,x:0,y:0,z:0,vx:0,vy:0,vz:0,dmg:0,r:.3,life:0,homing:0,size:1,settleY:null});this.outer=new oa(new fo(.42,1),new Li({color:2754086,fog:!1}),Ip),this.inner=new oa(new fo(.3,1),new Li({color:16732112,fog:!1}),Ip),this.outer.material.side=1;for(let e of[this.outer,this.inner])e.frustumCulled=!1,e.instanceMatrix.setUsage(Bt),e.count=0,e.renderOrder=5,t.add(e)}countAlive(){return this.list.reduce((e,t)=>e+ +!!t.alive,0)}clear(){for(let e of this.list)e.alive=!1}fire(e,t,n,r,i,a,o,s={}){let c=this.list.find(e=>!e.alive);c&&(c.alive=!0,c.x=e,c.y=t,c.z=n,c.vx=r,c.vy=i,c.vz=a,c.dmg=o,c.size=s.size??1,c.r=.32*c.size,c.life=s.life??6,c.homing=s.homing??0,c.settleY=s.settleY??null)}fireAt(e,t,n,r,i,a,o,s){let c=r-e,l=i-t,u=a-n,d=Math.hypot(c,l,u)||1;this.fire(e,t,n,c/d*o,l/d*o,u/d*o,s)}update(e){let t=this.game,n=t.player,r=t.arena;for(let i of this.list){if(!i.alive)continue;if(i.life-=e,i.life<=0){i.alive=!1;continue}if(i.homing>0){let t=n.x-i.x,r=n.y+.9-i.y,a=n.z-i.z,o=Math.hypot(t,r,a)||1,s=Math.hypot(i.vx,i.vy,i.vz),c=Math.min(1,e*i.homing);i.vx+=(t/o*s-i.vx)*c,i.vy+=(r/o*s-i.vy)*c,i.vz+=(a/o*s-i.vz)*c}i.settleY!==null&&(i.vy=(i.settleY-i.y)*3),i.x+=i.vx*e,i.y+=i.vy*e,i.z+=i.vz*e;let a=r.heightAt(i.x,i.z);if(a>-1e3&&i.y<a-.1){t.fx.burst(i.x,a+.1,i.z,5,16732112,2.5,.3,.4),i.alive=!1;continue}let o=n.x-i.x,s=n.y+.9-i.y,c=n.z-i.z;o*o+c*c<(i.r+n.r)**2&&Math.abs(s)<.9+i.r&&t.hurtPlayer(i.dmg,`pink shot`)&&(t.fx.burst(i.x,i.y,i.z,8,16732112,4,.35,.45),i.alive=!1)}}render(e){let t=0;for(let n of this.list){if(!n.alive)continue;let r=n.size*(1+Math.sin(e*18+t)*.08);this.m4.makeScale(r,r,r),this.m4.setPosition(n.x,n.y,n.z),this.outer.setMatrixAt(t,this.m4),this.inner.setMatrixAt(t,this.m4),t++}this.outer.count=t,this.inner.count=t,this.outer.instanceMatrix.needsUpdate=!0,this.inner.instanceMatrix.needsUpdate=!0}},Rp=class{game;fired=!1;aimX=0;aimZ=0;hasAim=!1;col=new W;constructor(e){this.game=e}levelStats(e){let t=Qu[e.id];return t.levels[Math.min(t.levels.length-1,e.level-1)]}update(e){let t=this.game,n=t.player,r=t.stats;if(this.fired=!1,t.shots.orbiters.length=0,n.state===`dead`)return;let i=n.state===`zip`&&t.build.relics.has(`reel`)?2:1,a=n.x,o=n.y+1.25,s=n.z,c=t.enemies.nearest(a,o,s,16);this.hasAim=!!c,c&&(this.aimX=c.x,this.aimZ=c.z),t.procs.delays.update(e*i,e=>this.fireDelayed(e),()=>!t.combatStopped);for(let c of t.build.weapons){if(t.combatStopped)break;if(c.prog){this.updateGun(c,e*i,e,a,o,s);continue}let l=Qu[c.id],u=this.levelStats(c),d=u.dmg*r.dmgMul,f=u.cd*r.cdMul,p=r.extraProj,m=u.area*r.areaMul;if(c.id===`halo`||c.id===`hearthwheel`){let r=u.count+p;c.spin+=e*u.speed;let i=m;this.col.set(l.color);for(let e=0;e<r;e++){let a=c.spin+e/r*Math.PI*2,o=n.x+Math.cos(a)*i,s=n.z+Math.sin(a)*i,u=n.y+.9;t.shots.orbiters.push({x:o,y:u,z:s,s:c.id===`hearthwheel`?2.2:1.6,c:this.col.clone()}),Math.random()<.4&&t.fx.trail(o,u,s,this.col,.45,.25),t.enemies.query(o,s,c.id===`hearthwheel`?.85:.6,e=>{if(e.emerge>.25||e.falling||u<e.y-.4||u>e.y+e.def.height*e.scale+.4||t.time<e.haloCd)return;e.haloCd=t.time+f;let r=e.x-n.x,i=e.z-n.z;t.dealDamage(e,d,c.id,r,i,l.knock,!1)})}}else if(c.timer-=e*i,!(c.timer>0))switch(c.id){case`wick`:case`comets`:{let e=t.enemies.nearest(a,o,s,l.range);if(!e){c.timer=.1;break}let n=u.count+p,r=e.y+e.def.height*.5*e.scale,i=Math.atan2(e.x-a,e.z-s),m=Math.hypot(e.x-a,e.z-s)||1,h=Math.atan2(r-o,m);for(let e=0;e<n;e++){let r=i+(e-(n-1)/2)*.09,f=u.speed,p=Math.cos(h);t.shots.spawn(`bolt`,c.id,a+Math.sin(r)*.4,o,s+Math.cos(r)*.4,Math.sin(r)*p*f,Math.sin(h)*f,Math.cos(r)*p*f,d,u.pierce,l.range/f+.15,l.knock,l.color,.28)}t.audio.sfx(`shoot`,.5),this.fired=!0,c.timer=f;break}case`flare`:case`dragon`:{let e=t.enemies.nearest(a,o,s,l.range);if(!e){c.timer=.1;break}let n=u.count+p*2,r=Math.atan2(e.x-a,e.z-s),i=c.id===`dragon`?.75:.6;for(let e=0;e<n;e++){let f=r+(n>1?(e/(n-1)-.5)*i:0)+(Math.random()-.5)*.08,p=u.speed*(.85+Math.random()*.3),m=t.shots.spawn(`pellet`,c.id,a,o-.2,s,Math.sin(f)*p,0,Math.cos(f)*p,d,u.pierce,l.range/p,l.knock,l.color,.32);m&&c.id===`dragon`&&(m.burn=!0)}t.fx.burst(a+Math.sin(r)*.7,o-.2,s+Math.cos(r)*.7,8,l.color,6,.2,.5,0,0),t.audio.sfx(`flare`,.7),t.shake(.08),this.fired=!0,c.timer=f;break}case`arc`:case`storm`:{let e=t.enemies.nearest(a,o,s,l.range);if(!e){c.timer=.12;break}let n=c.id===`storm`?2:1;for(let r=0;r<n;r++){let n=u.count+p,i=new Set,f=[{x:a,y:o,z:s}],m=r===0?e:t.enemies.nearest(a,o,s,l.range,new Set([e.id]));for(let e=0;e<n&&m;e++){i.add(m.id),f.push({x:m.x,y:m.y+m.def.height*.5*m.scale,z:m.z}),t.dealDamage(m,d,c.id,m.x-a,m.z-s,l.knock,!1);let e=m.x,n=m.y,r=m.z;m=t.enemies.nearest(e,n,r,6,i)}t.fx.lightning(f,c.id===`storm`?13234431:9427199,c.id===`storm`?.16:.12)}t.audio.sfx(`zap`,.6),this.fired=!0,c.timer=f;break}case`mortar`:case`starfall`:{let e=t.enemies.densest(n.x,n.z,l.range);if(!e){c.timer=.2;break}let r=u.count+Math.floor(p/2)+(c.id===`starfall`?p:0);for(let n=0;n<r;n++){let r=n===0?0:(Math.random()-.5)*5,i=n===0?0:(Math.random()-.5)*5,u=e.x+r,f=e.z+i,p=t.arena.heightAt(u,f),h=p>-100?p:e.y;c.id===`mortar`?t.shots.lob(`shell`,c.id,a,o+.3,s,u,h,f,.75+n*.08,d,m,l.knock,l.color):t.shots.lob(`meteor`,c.id,u+4,h+18,f-2,u,h,f,.55+n*.12,d,m,l.knock,l.color)}t.audio.sfx(`lob`,.6),this.fired=!0,c.timer=f;break}case`lance`:case`dawn`:{let e=t.enemies.nearest(a,o,s,l.range);if(!e){c.timer=.15;break}let r=u.count+Math.floor(p/2),i=Math.atan2(e.x-a,e.z-s)+(c.id===`dawn`?c.spin:0);c.id===`dawn`&&(c.spin+=.5);let h=m*1.6;for(let e=0;e<r;e++){let u=i+e/r*Math.PI*2,f=Math.sin(u),p=Math.cos(u),m=l.range,g=a+f*m,_=s+p*m;t.fx.beam(a,o-.1,s,g,o-.1,_,h*.8,c.id===`dawn`?`#ffd27a`:`#ffc860`,.22,.45),t.fx.beam(a,o-.1,s,g,o-.1,_,h*.22,16774876,.16,.9),t.enemies.query(a+f*m/2,s+p*m/2,m/2+1,e=>{if(e.emerge>.25||e.falling)return;let r=e.x-a,i=e.z-s,o=r*f+i*p;o<0||o>m||Math.abs(r*p-i*f)>h/2+e.r||Math.abs(e.y-n.y)>3.5||t.dealDamage(e,d,c.id,f,p,l.knock,!1)})}t.audio.sfx(`beam`,.7),t.shake(.1),this.fired=!0,c.timer=f;break}case`firefly`:case`swarm`:{let e=u.count+p;for(let n=0;n<e;n++){let e=Math.random()*Math.PI*2,n=u.speed;t.shots.spawn(`firefly`,c.id,a,o+.3,s,Math.cos(e)*n*.6,3,Math.sin(e)*n*.6,d,u.pierce,3.2,l.knock,l.color,.3)}t.audio.sfx(`firefly`,.4),c.timer=f;break}}}}visualOrigin(e){let t=this.game.player;return ap(e,{...t,aimYaw:this.hasAim?Math.atan2(this.aimX-t.x,this.aimZ-t.z):null})}dress(e,t,n=`main`,r){if(!e){this.game.procs.drop(n,`pool700`);return}e.role=n,e.dmgBase=r??e.dmg;let i=this.visualOrigin(t);e.vo={x:i.x-e.x,y:i.y-e.y,z:i.z-e.z},n!==`main`&&n!==`echo`&&(e.hitKind=`secondary`,e.noCrit=!0)}fireDelayed(e){let t=this.game,n=t.player,r=t.procs;if(t.combatStopped)return;let i=e.snap;switch(e.effect){case`double_volley`:{let i=t.build.weapon(`wick`)?.prog;if(!i)return;let a=j(`wick`,i,t.stats),o=t.enemies.nearest(n.x,n.y+1.25,n.z,a.range);o?(this.wickVolley(a,o,n.x,n.y+1.25,n.z,.75*a.dmg,`echo`),r.counters.extraVolleys++,r.effect.double_volley++):r.drop(e.effect,`noTarget`);break}case`twin_burst`:{let a=t.enemies.nearest(n.x,n.y+1.25,n.z,i.range);a?(this.flareVolley(i,Math.atan2(a.x-n.x,a.z-n.z),.5,`echo`),r.effect.twin_burst++):r.drop(e.effect,`noTarget`);break}case`echo_beam`:this.ray(i.angle,i.aimedWidth,.6*i.dmg,i.aimedKnock,new Set,`primary`),r.effect.echo_beam++;break;case`aftershock`:t.explode(i.x,i.y,i.z,i.size,i.dmg,i.knock,`mortar`,new W(`#ffa457`),`secondary`,!0),r.effect.aftershock++;break;case`double_shell`:{if(!r.quota(`mortar`,1,`double_shell`))break;let n=this.visualOrigin(`mortar`);t.shots.lob(`shell`,`mortar`,n.x,n.y,n.z,i.x,i.y,i.z,.75,.6*i.dmg,i.size,i.knock,Qu.mortar.color,`secondary`,!0,`double`)?r.effect.double_shell++:r.drop(e.effect,`pool700`);break}default:M(e.effect)}}updateGun(e,t,n,r,i,a){let o=this.game,s=o.procs,c=e.prog,l=e.id,u=j(l,c,o.stats),d=e=>c.perks.includes(e);if(l===`halo`){this.halo(e,u,n);return}if(e.timer-=t,e.timer>0||o.combatStopped)return;let f=l===`mortar`?o.enemies.densest(r,a,u.range):o.enemies.nearest(r,i,a,u.range);if(!f&&l!==`firefly`){e.timer=l===`mortar`?.2:l===`lance`?.15:l===`arc`?.12:.1;return}let p=f?Math.atan2(f.x-r,f.z-a):0;s.cycles[l]++,s.rootVolleys[l]++;let m=s.cycles[l];switch(l){case`wick`:this.wickVolley(u,f,r,i,a,u.dmg),s.wick.cycles=m,s.counters.volleys++,d(`double_volley`)&&s.delay({gun:l,effect:`double_volley`,t:ae,snap:{}}),!o.combatStopped&&d(`heavy_bolt`)&&m%4==0&&this.heavyBolt(u,f,r,i,a);break;case`arc`:this.arcDischarge(u,c.perks,f,r,i,a),s.arc.cycles=m,s.counters.discharges++;break;case`flare`:if(this.flareVolley(u,p),d(`twin_burst`)&&s.delay({gun:l,effect:`twin_burst`,t:.12,snap:{...u}}),!o.combatStopped&&d(`wide_sweep`)&&s.quota(l,2,`wide_sweep`)){for(let e of[-1,1]){let t=p+e*.42;this.dress(o.shots.spawn(`pellet`,l,r,i-.2,a,Math.sin(t)*20,0,Math.cos(t)*20,.5*u.dmg,0,u.range/20,u.knock,Qu[l].color,.32),l,`sweep`,u.dmg)}s.effect.wide_sweep++}!o.combatStopped&&d(`backdraft`)&&m%3==0&&(s.effect.backdraft++,o.explode(r+Math.sin(p)*1.2,o.player.y+.6,a+Math.cos(p)*1.2,2.2*o.stats.areaMul,2*u.dmg,8.25,l,new W(Qu[l].color),`secondary`,!0));break;case`mortar`:{let e=this.visualOrigin(l),t=0,n=0,r=0;for(let i=0;i<u.count&&!o.combatStopped;i++){t=f.x+(i?(Math.random()-.5)*5:0),r=f.z+(i?(Math.random()-.5)*5:0);let a=o.arena.heightAt(t,r);n=a>-100?a:f.y,o.shots.lob(`shell`,l,e.x,e.y,e.z,t,n,r,.75+i*.08,u.dmg,u.size,u.knock,Qu[l].color,`primary`,!1,`main`,i===0),i===0&&d(`double_shell`)&&s.delay({gun:l,effect:`double_shell`,t:.12,snap:{x:t+(Math.random()-.5)*2,y:n,z:r+(Math.random()-.5)*2,dmg:u.dmg,size:u.size,knock:u.knock}})}break}case`lance`:{let e=new Set;for(let t=0;t<u.count&&!o.combatStopped;t++){let n=this.ray(p+t/u.count*Math.PI*2,t===0?u.aimedWidth:u.size,u.dmg,t===0?u.aimedKnock:u.knock,e,`primary`);t===0&&n&&d(`solar_burst`)&&!o.combatStopped&&(s.effect.solar_burst++,o.explode(n.x,n.y,n.z,1.8*o.stats.areaMul,.7*u.dmg,2,l,new W(`#ffe997`),`secondary`,!0))}!o.combatStopped&&d(`split_ray`)&&(this.ray(p-.35,u.size,.6*u.dmg,u.knock,e,`secondary`),this.ray(p+.35,u.size,.6*u.dmg,u.knock,e,`secondary`),s.effect.split_ray++),d(`echo_beam`)&&s.delay({gun:l,effect:`echo_beam`,t:.15,snap:{angle:p,dmg:u.dmg,aimedWidth:u.aimedWidth,aimedKnock:u.aimedKnock}}),d(`broadside`)&&s.effect.broadside++;break}case`firefly`:this.flies(u,u.count,1,`main`,u.life),d(`twin_brood`)&&s.effect.twin_brood++,d(`hive_pulse`)&&m%3==0&&s.quota(l,4,`hive_pulse`)&&(this.flies(u,4,.4,`hive`,1.6),s.effect.hive_pulse++);break;default:M(l)}if(o.combatStopped)return;this.fired=!0,e.timer=u.cd;let h=this.visualOrigin(l);o.fx.burst(h.x,h.y,h.z,3,Qu[l].color,3,.15,.3),o.audio.sfx(l===`wick`?`shoot`:l===`arc`?`zap`:l===`mortar`?`lob`:l===`lance`?`beam`:l===`firefly`?`firefly`:`flare`,.5)}flareVolley(e,t,n=1,r=`main`){let i=this.game,a=i.player;for(let o=0;o<e.count&&!i.combatStopped;o++){let s=t+(e.count>1?(o/(e.count-1)-.5)*.6:0)+(Math.random()-.5)*.08,c=20*(.85+Math.random()*.3);this.dress(i.shots.spawn(`pellet`,`flare`,a.x,a.y+1.05,a.z,Math.sin(s)*c,0,Math.cos(s)*c,n*e.dmg,e.pierce,e.range/c,e.knock,Qu.flare.color,.32),`flare`,r,e.dmg)}}flies(e,t,n,r,i){let a=this.game,o=a.player;for(let s=0;s<t&&!a.combatStopped;s++){let t=Math.random()*Math.PI*2;this.dress(a.shots.spawn(`firefly`,`firefly`,o.x,o.y+1.55,o.z,Math.cos(t)*e.speed*.6,3,Math.sin(t)*e.speed*.6,n*e.dmg,r===`main`?e.pierce:0,i,e.knock,Qu.firefly.color,.3),`firefly`,r,e.dmg)}}ray(e,t,n,r,i,a){let o=this.game,s=o.player;if(o.combatStopped)return null;let c=Math.sin(e),l=Math.cos(e),u=this.visualOrigin(`lance`),d=[];o.fx.beam(u.x,u.y,u.z,s.x+c*18,s.y+1.15,s.z+l*18,t*.8,`#ffc860`,.22,.45),o.enemies.query(s.x+c*18/2,s.z+l*18/2,11,e=>{let n=e.x-s.x,r=e.z-s.z,a=n*c+r*l;!i.has(e.id)&&e.emerge<=.25&&!e.falling&&a>=0&&a<=18&&Math.abs(n*l-r*c)<=t/2+e.r&&Math.abs(e.y-s.y)<=3.5&&d.push({e,along:a})}),d.sort((e,t)=>e.along-t.along);let f=null;for(let{e}of d){if(o.combatStopped)break;let t={x:e.x,y:e.y+.6,z:e.z};o.dealDamage(e,n,`lance`,c,l,r,!1,a,a!==`primary`)!==0&&(i.add(e.id),f??=t)}return f}halo(e,t,n){let r=this.game,i=r.player,a=r.procs,o=t=>e.prog.perks.includes(t);e.spin+=n*t.spin;let s=(n,s,c)=>{for(let l=0;l<n&&!r.combatStopped;l++){let u=(c===`orbit`?e.spin:-e.spin)+l/n*Math.PI*2,d=i.x+Math.cos(u)*s,f=i.z+Math.sin(u)*s,p=i.y+.9;r.shots.orbiters.push({x:d,y:p,z:f,s:c===`orbit`?1.6:1.2,c:new W(c===`orbit`?`#ffb64a`:`#ffe7a0`)}),r.enemies.query(d,f,.6,e=>{r.combatStopped||e.emerge>.25||e.falling||p<e.y-.4||p>e.y+e.def.height*e.scale+.4||!a.halo.ready(c,e.id,r.time)||r.dealDamage(e,t.dmg*(c===`orbit`?1:.5),`halo`,e.x-i.x,e.z-i.z,t.knock,!1,c===`orbit`?`primary`:`secondary`,c===`outer`)!==0&&!r.combatStopped&&(a.halo.mark(c,e.id,r.time+t.cd),c===`outer`&&a.effect.outer_ring++,c===`orbit`&&o(`searing_touch`)&&(a.dots.apply(e,`halo`,.2*t.dmg),a.effect.searing_touch++))})}};s(t.count,t.size,`orbit`),o(`twin_orbit`)&&a.effect.twin_orbit++,o(`outer_ring`)&&s(2,1.25*t.size,`outer`),o(`pulse_ring`)&&(a.pulseT+=n,a.pulseT>=2&&!r.combatStopped&&(a.pulseT-=2,a.effect.pulse_ring++,r.explode(i.x,i.y+.9,i.z,t.size+.5,.6*t.dmg,1,`halo`,new W(`#ffb64a`),`secondary`,!0)))}wickVolley(e,t,n,r,i,a,o=`main`){let s=this.game,c=t.y+t.def.height*.5*t.scale,l=Math.atan2(t.x-n,t.z-i),u=Math.hypot(t.x-n,t.z-i)||1,d=Math.atan2(c-r,u);for(let t=0;t<e.count;t++){let c=l+(t-(e.count-1)/2)*.09,u=Math.cos(d);this.dress(s.shots.spawn(`bolt`,`wick`,n+Math.sin(c)*.4,r,i+Math.cos(c)*.4,Math.sin(c)*u*e.speed,Math.sin(d)*e.speed,Math.cos(c)*u*e.speed,a,e.pierce,e.range/e.speed+.15,e.knock,Qu.wick.color,.28),`wick`,o,e.dmg)}}heavyBolt(e,t,n,r,i){let a=this.game,o=a.procs.counters;if(!a.procs.quota(`wick`,1,`heavy_bolt`)){o.heavyDropped++;return}let s=t.x-n,c=t.y+t.def.height*.5*t.scale-r,l=t.z-i,u=Math.hypot(s,c,l)||1,d=a.shots.spawn(`heavy`,`wick`,n,r,i,s/u*e.speed,c/u*e.speed,l/u*e.speed,3*e.dmg,e.pierce+2,e.range/e.speed+.15,3*e.knock,`#fff0c0`,.45);d?(d.hitKind=`secondary`,d.noCrit=!0,o.heavyBolts++,a.procs.effect.heavy_bolt++):o.shotsDropped++}arcDischarge(e,t,n,r,i,a){let o=this.game,s=o.procs,c=e=>t.includes(e),l=new Set,u=this.visualOrigin(`arc`),d=[{x:u.x,y:u.y,z:u.z}],f=null,p=null,m=n;for(let t=0;t<e.count&&m&&!o.combatStopped;t++){l.add(m.id);let t=m.x,n=m.y+m.def.height*.5*m.scale,i=m.z,s=m.y;d.push({x:t,y:n,z:i}),o.dealDamage(m,e.dmg,`arc`,t-r,i-a,e.knock,!1,`primary`)!==0&&(f||={x:t,y:n,z:i},p={x:t,y:n,z:i}),m=o.enemies.nearest(t,s,i,6,l)}if(o.fx.lightning(d,9427199,.12),!o.combatStopped&&c(`fork`)&&f)for(let t=0;t<2&&!o.combatStopped;t++){let t=o.enemies.nearest(f.x,f.y,f.z,6,l);if(!t)break;l.add(t.id),o.fx.lightning([f,{x:t.x,y:t.y+t.def.height*.5*t.scale,z:t.z}],12577535,.09),o.dealDamage(t,e.dmg,`arc`,t.x-f.x,t.z-f.z,e.knock,!1,`secondary`,!0),s.counters.forks++,s.effect.fork++}if(!o.combatStopped&&c(`double_strike`)){let t=o.enemies.nearest(r,i,a,e.range,l);if(t){s.counters.doubleStrikes++,s.effect.double_strike++;let n=[d[0]];for(let i=0;i<e.count&&t&&!o.combatStopped;i++){l.add(t.id);let i=t.x,s=t.y,c=t.z;n.push({x:i,y:s+t.def.height*.5*t.scale,z:c}),o.dealDamage(t,e.dmg*le,`arc`,i-r,c-a,e.knock,!1,`secondary`,!0),t=o.enemies.nearest(i,s,c,6,l)}o.fx.lightning(n,13234431,.09)}}!o.combatStopped&&c(`thunderclap`)&&p&&(o.explode(p.x,p.y,p.z,de,e.dmg*ue,2,`arc`,new W(10479871),`secondary`,!0),s.counters.thunderclaps++,s.effect.thunderclap++),!o.combatStopped&&c(`static_pool`)&&f&&(s.spawnPool(f.x,f.z,e.dmg*ce),s.effect.static_pool++)}},zp=650,Bp=class{game;scene;orbs=[];items=[];mesh;halo;obj=new ir;c1=new W(16761946);c2=new W(7333631);c3=new W(15771903);combo=0;comboT=0;bellTimer=15;constructor(e,t){this.game=e,this.scene=t;for(let e=0;e<zp;e++)this.orbs.push({alive:!1,x:0,y:0,z:0,vx:0,vy:0,vz:0,value:1,magnet:!1,age:0,restY:0});let n=new po(.2,0);n.scale(1,1.5,1),this.mesh=new oa(n,new Li({color:16777215,fog:!1}),zp),this.mesh.instanceColor=new Qi(new Float32Array(zp*3),3),this.mesh.instanceMatrix.setUsage(Bt),this.mesh.frustumCulled=!1,this.mesh.count=0,t.add(this.mesh),this.halo=new oa(new fo(.42,1),new Li({color:16777215,transparent:!0,opacity:.28,blending:2,depthWrite:!1,fog:!1}),zp),this.halo.instanceColor=new Qi(new Float32Array(zp*3),3),this.halo.instanceMatrix.setUsage(Bt),this.halo.frustumCulled=!1,this.halo.count=0,t.add(this.halo)}forfeitAll(){let e={orbs:0,xp:0,tea:0,bell:0,chest:0,cache:0};for(let t of this.orbs)t.alive&&(e.orbs++,e.xp+=t.value);for(let t of this.items)e[t.kind]++;return this.clear(),e}clear(){for(let e of this.orbs)e.alive=!1;for(let e of this.items)this.scene.remove(e.obj),vd(e.obj);this.items.length=0,this.combo=0,this.bellTimer=15}dropXp(e,t,n,r){let i=r,a=0;for(;i>0&&a++<6;){let r=i>=25?25:i>=5?5:i;i-=r,this.spawnOrb(e,t,n,r)}}spawnOrb(e,t,n,r){let i=this.orbs.find(e=>!e.alive);if(!i){i=this.orbs.reduce((e,t)=>t.age>e.age?t:e),i.value+=r;return}let a=Math.random()*Math.PI*2,o=1.5+Math.random()*2;i.alive=!0,i.x=e,i.y=t+.5,i.z=n,i.vx=Math.cos(a)*o,i.vz=Math.sin(a)*o,i.vy=5,i.value=r,i.magnet=!1,i.age=0,i.restY=t}spawnItem(e,t,n,r){let i=this.game.arena,a=i.heightAt(t,n);if(a<=-999||i.edgeDistance(i.cellOf(t),i.cellOf(n))<2){let e=i.nearestWalkable(t,n,14,!0)??i.nearestWalkable(t,n,20);e?(t=e.x,n=e.z,a=e.y):a=r??0}let o=Vp(e);o.position.set(t,a,n),this.scene.add(o);let s={kind:e,x:t,y:a,z:n,obj:o,age:0,alive:!0};return this.items.push(s),s}vacuum(){for(let e of this.orbs)e.alive&&(e.magnet=!0)}update(e){let t=this.game,n=t.player,r=t.arena,i=3*t.stats.pickupMul*(t.build.weapon(`swarm`)?1.6:1);this.comboT-=e,this.comboT<=0&&(this.combo=0),t.build.relics.has(`bell`)&&(this.bellTimer-=e,this.bellTimer<=0&&(this.bellTimer=15,this.vacuum(),t.audio.sfx(`bell`,.6),t.fx.ring(n.x,n.y,n.z,1,14,.7,15782016,.6)));let a=n.x,o=n.y+.8,s=n.z;for(let n of this.orbs){if(!n.alive)continue;n.age+=e;let c=a-n.x,l=o-n.y,u=s-n.z,d=Math.hypot(c,l,u);if(!n.magnet&&d<i&&n.age>.25&&(n.magnet=!0),n.magnet){let r=9+n.age*2+(d<4?8:0);if(n.vx+=(c/d*r-n.vx)*Math.min(1,e*9),n.vy+=(l/d*r-n.vy)*Math.min(1,e*9),n.vz+=(u/d*r-n.vz)*Math.min(1,e*9),n.x+=n.vx*e,n.y+=n.vy*e,n.z+=n.vz*e,d<.7){n.alive=!1,this.combo++,this.comboT=.6,t.gainXp(n.value),t.audio.sfx(`pickup`,.35,Math.min(12,this.combo));continue}}else{n.vy-=20*e,n.vx*=Math.exp(-3*e),n.vz*=Math.exp(-3*e);let t=n.x+n.vx*e,i=n.z+n.vz*e;r.heightAt(t,i)>-999?(n.x=t,n.z=i):(n.vx=0,n.vz=0);let a=r.heightAt(n.x,n.z);if(n.y+=n.vy*e,a<=-999){let e=r.nearestWalkable(n.x,n.z,8);e&&(n.x=e.x,n.z=e.z,n.y=e.y+.5,n.vy=3)}else n.y<a+.35&&(n.y=a+.35,n.vy=Math.abs(n.vy)>2?-n.vy*.3:0)}}for(let i of this.items){if(!i.alive)continue;i.age+=e;let a=r.heightAt(i.x,i.z);if(a<=-999){let e=r.nearestWalkable(i.x,i.z,10,!0);e&&(i.x=e.x,i.z=e.z,i.y=e.y)}else i.y=a;i.obj.position.set(i.x,i.y+.35+Math.sin(i.age*3)*.12,i.z),i.obj.rotation.y+=e*1.2;let o=i.obj.userData.glow;o&&(o.material.opacity=.55+Math.sin(i.age*5)*.2),Math.hypot(n.x-i.x,n.z-i.z)<1.3&&Math.abs(n.y-i.y)<1.8&&n.state!==`dead`&&(i.alive=!1,this.scene.remove(i.obj),vd(i.obj),t.collectItem(i))}for(let e=this.items.length-1;e>=0;e--)this.items[e].alive||this.items.splice(e,1)}render(e){let t=0,n=this.obj;for(let r of this.orbs){if(!r.alive)continue;n.position.set(r.x,r.y+(r.magnet?0:Math.sin(e*4+r.age)*.06),r.z),n.rotation.set(0,e*3+r.age,0);let i=r.value>=25?1.8:r.value>=5?1.35:1;n.scale.setScalar(i),n.updateMatrix(),this.mesh.setMatrixAt(t,n.matrix);let a=r.value>=25?this.c3:r.value>=5?this.c2:this.c1;this.mesh.setColorAt(t,a),this.halo.setMatrixAt(t,n.matrix),this.halo.setColorAt(t,a),t++}this.mesh.count=t,this.halo.count=t,this.mesh.instanceMatrix.needsUpdate=!0,this.halo.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0),this.halo.instanceColor&&(this.halo.instanceColor.needsUpdate=!0)}};function Vp(e){let t=new U,n=new ld,r=16765562,i=!1;switch(e){case`tea`:n.add(Z(.32,1),14215392,{pos:[0,.32,0],scale:[1,.8,1]}).add(Q(.12,.16,.12,8),14215392,{pos:[0,.6,0]}).add(Z(.07,0),15227482,{pos:[0,.7,0]}).add(Q(.05,.07,.35,5),14215392,{pos:[.36,.42,0],rot:[0,0,-.9]}).add(X(.06,.25,.22),14215392,{pos:[-.36,.38,0]}).add(X(.4,.08,.05),16743034,{pos:[0,.32,.31],glow:1}).add(X(.08,.3,.05),16743034,{pos:[0,.32,.31],glow:1}),r=16747146;break;case`bell`:n.add(Q(.12,.38,.5,9),14263361,{pos:[0,.4,0]}).add(Z(.13,1),14263361,{pos:[0,.68,0]}).add(Z(.08,0),16773296,{pos:[0,.12,0],glow:1}).add(X(.05,.15,.05),5913126,{pos:[0,.82,0]}),r=16769162;break;case`chest`:case`cache`:{let t=e===`chest`?6962218:4872826,a=e===`chest`?15909198:12577023;n.add(X(1,.55,.7),t,{pos:[0,.3,0]}).add(X(1.04,.22,.74),t,{pos:[0,.68,0],rot:[0,0,0]}).add(X(1.06,.08,.1),a,{pos:[0,.3,.33]}).add(X(.1,.62,.76),a,{pos:[-.38,.45,0]}).add(X(.1,.62,.76),a,{pos:[.38,.45,0]}).add(X(.18,.2,.06),a,{pos:[0,.5,.37],glow:1}).add(X(.9,.04,.6),16774336,{pos:[0,.58,0],glow:1}),r=e===`chest`?16764762:10477823,i=!0;break}}let a=new K(n.build(),md());t.add(a);let o=new Ai(new gi({map:_d(),color:r,blending:2,transparent:!0,depthWrite:!1}));if(o.scale.setScalar(e===`chest`||e===`cache`?3.4:2.2),o.position.y=.45,t.add(o),t.userData.glow=o,i){let e=new K(new Fa(.35,.6,14,10,1,!0),hd(r,.2));e.position.y=7,t.add(e)}return t}var Hp=[{until:20,every:1.1,batch:[2,3],cap:26,mix:{murk:1}},{until:45,every:1,batch:[2,3],cap:45,mix:{murk:3,moth:1}},{until:70,every:.9,batch:[2,4],cap:60,mix:{murk:3,moth:1.4,skitter:.5}},{until:105,every:.8,batch:[3,4],cap:85,mix:{murk:3,moth:1.2,skitter:1.2,husk:.6}},{until:150,every:.65,batch:[3,5],cap:115,mix:{murk:2.5,moth:1.2,skitter:1.4,husk:.9,spitter:.7}},{until:200,every:.55,batch:[4,5],cap:145,mix:{murk:2.2,moth:1.1,skitter:1.5,husk:1.1,spitter:.9}},{until:250,every:.45,batch:[4,6],cap:175,mix:{murk:2,moth:1,skitter:1.7,husk:1.4,spitter:1.1}},{until:9999,every:.45,batch:[4,6],cap:190,mix:{murk:2,moth:1,skitter:1.7,husk:1.5,spitter:1.2}}],Up=[{at:75,id:`bellwether`},{at:165,id:`matron`},{at:255,id:`crown`}],Wp=[40,125,215],Gp=[100,140,195,235];function Kp(e){for(let t of Hp)if(e<t.until)return t;return Hp[Hp.length-1]}var qp=class{game;timer=.5;nextBoss=0;boss=null;bossesDefeated=0;surgeIdx=0;eliteIdx=0;dmgLog=[];warned=new Set;constructor(e){this.game=e}reset(){this.timer=.5,this.nextBoss=0,this.boss?.dispose(),this.boss=null,this.bossesDefeated=0,this.surgeIdx=0,this.eliteIdx=0,this.dmgLog=[],this.warned.clear(),this.enabled=!0}logDamage(e){let t=this.game.time,n=this.dmgLog[this.dmgLog.length-1];for(n&&t-n.t<.25?n.d+=e:this.dmgLog.push({t,d:e});this.dmgLog.length&&t-this.dmgLog[0].t>25;)this.dmgLog.shift()}recentDps(){let e=this.game.time,t=0;for(let e of this.dmgLog)t+=e.d;return t/Math.min(25,Math.max(5,e))}enabled=!0;update(e){if(this.game.final?.inRoom()||!this.enabled)return;let t=this.game,n=t.time,r=Kp(n),i=!!this.boss&&!this.boss.dead,a=Up[this.nextBoss];if(a&&!i&&(n>=a.at-6&&!this.warned.has(this.nextBoss)&&(this.warned.add(this.nextBoss),t.banner({bellwether:`A bell tolls in the dark…`,matron:`Wingbeats overhead…`,crown:`The Hearth trembles…`}[a.id],`warn`,3),t.audio.sfx(`rumble`,.8)),n>=a.at&&(this.spawnBoss(a.id),this.nextBoss++)),this.surgeIdx<Wp.length&&n>=Wp[this.surgeIdx]&&(this.surgeIdx++,i||this.surge(18+this.surgeIdx*6)),this.eliteIdx<Gp.length&&n>=Gp[this.eliteIdx]){this.eliteIdx++;let e=[`husk`,`skitter`,`spitter`,`husk`],n=this.findSpot(14,20,!1);n&&(t.enemies.spawn(e[(this.eliteIdx-1)%e.length],n.x,n.z,{elite:!0}),t.banner(`An elite Hollow carries a reliquary!`,`hint`,2.5))}if(this.timer-=e,this.timer<=0){let e=i?.35:1;this.timer=r.every/e;let n=i?Math.min(r.cap,60):r.cap;if(t.enemies.aliveCount<n){let e=r.batch[0]+Math.floor(Math.random()*(r.batch[1]-r.batch[0]+1)),n=this.pick(r.mix),i=n===`moth`,a=this.findSpot(17,25,i);if(a)for(let o=0;o<e;o++){let e=(Math.random()-.5)*3,s=(Math.random()-.5)*3,c=a.x+e,l=a.z+s;!i&&t.arena.heightAt(c,l)<=-999||t.enemies.spawn(o===0?n:this.pick(r.mix),c,l,i?{y:t.player.y+2}:{})}}}}pick(e){let t=0;for(let n in e)t+=e[n];let n=Math.random()*t;for(let t in e)if(n-=e[t],n<=0)return t;return`murk`}findSpot(e,t,n){let r=this.game,i=r.player;for(let a=0;a<16;a++){let a=Math.random()*Math.PI*2,o=e+Math.random()*(t-e),s=i.x+Math.cos(a)*o,c=i.z+Math.sin(a)*o;if(n||!(r.arena.heightAt(s,c)<=-999)&&!(r.flow.distAt(s,c)>80))return{x:s,z:c}}let a=Math.random()*Math.PI*2,o=r.arena.nearestWalkable(i.x+Math.cos(a)*e,i.z+Math.sin(a)*e,12);return o?{x:o.x,z:o.z}:null}surge(e){let t=this.game,n=t.player;t.banner(`The Hollow surge — break the ring!`,`warn`,2.5),t.audio.sfx(`rumble`,.8);for(let r=0;r<e;r++){let i=r/e*Math.PI*2,a=n.x+Math.cos(i)*13,o=n.z+Math.sin(i)*13;t.arena.heightAt(a,o)<=-999?t.enemies.spawn(`moth`,a,o,{y:n.y+1.5,emerge:.9}):t.enemies.spawn(`murk`,a,o,{emerge:.9})}}recycle(e){let t=this.findSpot(17,24,e.def.flyer);t&&(e.x=t.x,e.z=t.z,e.y=e.def.flyer?this.game.player.y+2:this.game.arena.heightAt(t.x,t.z),e.farTime=0,e.emerge=.6,e.kx=e.kz=0)}spawnBoss(e){let t=this.game,n=t.player,r=Math.max(15,t.build.singleTargetDps());this.boss?.dispose(),this.boss=null;let i;if(e===`bellwether`){let e=Jp(r*20,900,3200),a=this.findSpot(9,12,!1)??{x:n.x+8,z:n.z};i=new $d(t,e,a.x,a.z)}else if(e===`matron`)i=new ef(t,Jp(r*24,2200,9e3),n.x+6,n.z-10);else{let e=Jp(r*30,5e3,24e3),n=t.arena.crownSeat;i=new tf(t,e,n.x,n.z),t.banner(`Return to the Hearth — the Hollow Crown rises!`,`warn`,3.5)}this.boss=i,t.enemies.extra.length=0,t.enemies.extra.push(i.body),t.onBossSpawn(i)}};function Jp(e,t,n){return Math.max(t,Math.min(n,e))}var Yp=class{game;done=new Set;shown=new Set;t=0;scanT=0;constructor(e){this.game=e}reset(){this.done.clear(),this.shown.clear(),this.t=0}did(e){this.done.has(e)||(this.done.add(e),this.game.ui.hintShowing===e&&this.game.ui.clearHint(e))}has(e){return this.done.has(e)}k(e){let t=this.game.input.lastDevice;return t===`touch`?e===`jump`?`<b>JUMP</b>`:e===`dash`?`<b>DASH</b>`:`the left side of the screen`:t===`gamepad`?e===`jump`?`<kbd>A</kbd>`:e===`dash`?`<kbd>B</kbd>`:`the left stick`:e===`jump`?`<kbd>Space</kbd>`:e===`dash`?`<kbd>Shift</kbd>`:`<kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd>`}show(e,t,n=6){this.shown.has(e)||this.game.ui.hintShowing&&this.game.ui.hintShowing!==e||(this.shown.add(e),this.game.ui.hint(t,e,n))}update(e){let t=this.game;if(this.t+=e,!this.done.has(`move`)&&this.t>.6){this.show(`move`,`Run with ${this.k(`move`)} — your kindler <b>fires by itself</b>`,7);return}if(!this.done.has(`jump`)&&this.t>6?this.show(`jump`,`Press ${this.k(`jump`)} to jump — hold it to leap higher`,6):!this.done.has(`dash`)&&this.t>13?this.show(`dash`,`${this.k(`dash`)} rolls you through danger untouched`,6):this.t>22&&!this.shown.has(`embers`)&&this.show(`embers`,`Collect glowing <b>embers</b> to level up and grow your kit`,5),this.scanT-=e,this.scanT>0||this.t<8)return;this.scanT=.3;let n=t.player,r=t.arena;if(!this.done.has(`zip`)){for(let e of r.ziplines)if(Math.hypot(n.x-e.ax,n.z-e.az)<6){this.show(`zip`,`Zipline! Stand in the <span class="blue">blue ring</span> and press ${this.k(`jump`)} to ride`,6);break}}if(!this.done.has(`climb`)&&n.grounded){let e=r.cellOf(n.x),t=r.cellOf(n.z),i=!1;for(let a=-2;a<=2&&!i;a++)for(let o=-2;o<=2;o++)if(r.cellHeight(e+o,t+a)-n.y>1.8){i=!0;break}i&&this.show(`climb`,`Run straight into a tall wall to <b>climb</b> it`,5)}for(let e of r.vents)Math.hypot(n.x-e.x,n.z-e.z)<5&&this.show(`vent`,`Step on an <span class="blue">updraft vent</span> to soar onto the plateau`,5);(r.tileAt(n.x,n.z)===Bd.Crumble||r.tileAt(n.x,n.z+2)===Bd.Crumble)&&this.show(`crumble`,`This bridge <b>crumbles</b> behind you — keep moving!`,4);let i=r.cellOf(n.x),a=r.cellOf(n.z);n.grounded&&r.edgeDistance(i,a)<=1&&!this.shown.has(`edge`)&&this.show(`edge`,`The glowing rim marks a drop. Shove Hollow over it — but don’t follow them!`,5)}shrineAppeared(){this.shown.delete(`shrine`),this.show(`shrine`,`A <span class="blue">sky cache</span> glows on the Sky Shrine — hop the stepping stones north-east for a free upgrade`,7)}bossHint(e){let t=this.k(`jump`),n=this.k(`dash`),r={bellwether:`Sidestep its marked charge · ${t} over the shockwave rings · it gets dazed at ledges`,matron:`Weave through the gaps in her <span class="pink">pink spirals</span> · ${n} out of the marked dive`,crown:`Marked floor <b>collapses</b> — step off it · ${t} the sweeping beam`};this.game.ui.hint(r[e]??``,`boss-${e}`,7)}},Xp=class{game;policy=`reasonable`;enabled=!1;skill=1;jumpCd=0;wander=0;constructor(e){this.game=e}intent(e){let t=this.game,n=t.player,r=t.arena;this.jumpCd-=e,this.wander+=e*.3;let i=0,a=0,o=!1,s=!1;t.enemies.query(n.x,n.z,7,e=>{if(e.emerge>.3||e.falling)return;let t=n.x-e.x,r=n.z-e.z,o=Math.max(.3,t*t+r*r),s=(e.boss?14:e.elite?4:1.3)/o;i+=t*s,a+=r*s});for(let e of t.enemyShots.list){if(!e.alive)continue;let t=n.x-e.x,r=n.z-e.z,o=Math.hypot(t,r);if(o>5)continue;let c=Math.hypot(e.vx,e.vz)||1,l=-e.vz/c,u=e.vx/c,d=l*t+u*r>=0?1:-1;i+=l*d*6/(o+.5),a+=u*d*6/(o+.5),o<1.4&&this.skill>.5&&n.dashCd<=0&&(s=!0)}for(let e of t.fx.activeTelegraphs()){let t=n.x-e.x,r=n.z-e.z;if(e.shape===`circle`){let o=Math.hypot(t,r);o<e.r+1.5&&(i+=t/(o||1)*22,a+=r/(o||1)*22,o<e.r&&e.progress>.7&&n.dashCd<=0&&(s=!0))}else{let t=Math.sin(e.yaw),r=Math.cos(e.yaw),o=(n.x-e.sx)*t+(n.z-e.sz)*r,s=(n.x-e.sx)*r-(n.z-e.sz)*t;if(o>-1&&o<e.l+1&&Math.abs(s)<e.w/2+1.5&&e.w>2){let e=s>=0?1:-1;i+=r*e*10,a+=-t*e*10}}}let c=t.director.boss;if(c&&!c.dead){let e=n.x-c.x,t=n.z-c.z,r=Math.hypot(e,t)||1,s=(r-(c.id===`crown`?9:8))*-.4;i+=e/r*s,a+=t/r*s,i+=-t/r*.8,a+=e/r*.8,this.jumpCd<=0&&n.grounded&&c.dangerNear(n.x,n.y,n.z)&&(o=Math.random()<.6+this.skill*.4,this.jumpCd=.6)}let l=1e9,u=0,d=0;for(let e of t.pickups.orbs){if(!e.alive||e.magnet)continue;let t=(e.x-n.x)**2+(e.z-n.z)**2;t<l&&t<150&&(l=t,u=e.x,d=e.z)}for(let e of t.pickups.items){let t=(e.x-n.x)**2+(e.z-n.z)**2;(e.kind===`chest`||e.kind===`cache`||e.kind===`tea`&&n.hp<n.maxHp*.7||e.kind===`bell`)&&t*.2<l&&Math.abs(e.y-n.y)<2&&(l=t*.2,u=e.x,d=e.z)}if(l<1e9){let e=u-n.x,t=d-n.z,r=Math.hypot(e,t)||1;i+=e/r*1.1,a+=t/r*1.1}let f=Math.hypot(n.x,n.z);f>11&&(i-=n.x/f*(f-11)*.12,a-=n.z/f*(f-11)*.12),i+=Math.cos(this.wander)*.25,a+=Math.sin(this.wander*1.3)*.25;let p=Math.hypot(i,a);if(p<.05)return{mx:0,mz:0,jump:o,jumpHeld:o,dash:s};let m=i/p,h=a/p,g=-1/0,_=m,v=h;for(let e=0;e<16;e++){let t=e/16*Math.PI*2,i=Math.sin(t),a=Math.cos(t),o=i*m+a*h;for(let e of[.7,1.5,2.4]){let t=n.x+i*e,s=n.z+a*e,c=r.heightAt(t,s);if(c<=-999){o-=4/e;break}if(c<n.y-1.6){o-=.3;break}r.edgeDistance(r.cellOf(t),r.cellOf(s))<2&&(o-=.25),c>n.y+1.6&&(o-=.35)}o>g&&(g=o,_=i,v=a)}if(s){for(let e=.5;e<=5;e+=.5)if(r.heightAt(n.x+_*e,n.z+v*e)<=-999){s=!1;break}}return{mx:_,mz:v,jump:o,jumpHeld:o||!n.grounded&&n.vy>0,dash:s}}choose(e){let t=this.game,n=e=>{switch(e.kind){case`perk`:return 90+{A:6,B:4,C:3,D:5}[p[e.perk].slot];case`upgrade`:return{dmg:52,rate:48,count:50,pierce:38,size:44}[e.track]+{basic:0,common:4,rare:8,epic:12}[e.rarity]+(e.block?2:0);case`acquire`:return 70+{wick:0,flare:6,firefly:5,mortar:4,lance:3,halo:2,arc:1}[e.id];case`guard`:return t.player.hp<t.player.maxHp*.35?60:8;case`evolve`:return 100;case`relic`:return{phoenix:60,skystep:55,gilded:50,quake:45,reel:40,bell:35}[e.id]??30;case`weapon`:return t.build.weapons.length<3&&e.level===1?70:40+e.level*3;case`trinket`:return{whetstone:38,bellows:36,lens:34,prism:37,hearthstone:30,lodestone:24,boots:22,flask:26}[e.id]??20;case`heal`:return t.player.hp<t.player.maxHp*.5?80:5;case`surge`:return 10;default:return 0}};if(this.policy!==`reasonable`){let t=0,r=this.policy===`weak`?1/0:-1/0;return e.forEach((e,i)=>{let a=n(e)+(this.policy===`strong`&&(e.kind===`upgrade`&&[`dmg`,`rate`].includes(e.track)||e.kind===`trinket`&&[`whetstone`,`bellows`,`lens`,`prism`].includes(e.id))?20:0);(this.policy===`weak`?a<r:a>r)&&(r=a,t=i)}),t}let r=0,i=-1;return e.forEach((e,t)=>{let a=n(e)+Math.random()*6;a>i&&(i=a,r=t)}),r}},Zp={version:`1.2.0-visualguns.1`,commit:`0c6a771`,builtAt:`2026-10-21T12:38Z`},Qp=5,$p=new Set([`Error`,`TypeError`,`RangeError`,`ReferenceError`,`SyntaxError`,`EvalError`,`URIError`,`AggregateError`]),em=1/30,tm=class{capacity;slots;head=0;count=0;dropped=0;errors=0;runId=``;startedAt=0;outcome=null;frameBins=new Uint32Array(1001);frameP95Ms(){let e=0,t=Math.ceil(this.frames*.95);for(let n=0;n<this.frameBins.length;n++)if(e+=this.frameBins[n],e>=t)return n;return 0}frames=0;frameSum=0;slowFrames=0;worstFrame=0;constructor(e=200){this.capacity=e,this.slots=Array.from({length:e},()=>({t:0,kind:`run_start`,n:0,s:``}))}begin(e,t){this.runId=e,this.startedAt=t,this.head=this.count=this.dropped=this.errors=0,this.frameBins.fill(0),this.frames=this.frameSum=this.slowFrames=this.worstFrame=0,this.outcome=null}log(e,t,n=0,r=``){let i=this.slots[this.head];i.t=e,i.kind=t,i.n=n,i.s=r,this.head=(this.head+1)%this.capacity,this.count<this.capacity?this.count++:this.dropped++}error(e,t,n,r=`unknown`){this.errors++,this.errors<=Qp&&this.log(e,`error`,this.errors,`${t}:${nm(n)}:${r}`)}frame(e){e<=0||e>1||(this.frames++,this.frameBins[Math.min(1e3,Math.ceil(e*1e3))]++,this.frameSum+=e,e>em&&this.slowFrames++,e>this.worstFrame&&(this.worstFrame=e))}events(){let e=[],t=(this.head-this.count+this.capacity)%this.capacity;for(let n=0;n<this.count;n++){let r=this.slots[(t+n)%this.capacity],i={t:lm(r.t,2),e:r.kind};r.n&&(i.n=lm(r.n,2)),r.s&&(i.s=r.s),e.push(i)}return e}};function nm(e){return e==null?`unknown`:typeof DOMException<`u`&&e instanceof DOMException?`DOMException`:e instanceof Error?$p.has(e.name)?e.name:`Error`:`non-error`}function rm(e,t){if(!e)return`unknown`;try{return new URL(e).origin===t?`app`:`external`}catch{return`unknown`}}function im(){let e=new Uint8Array(6);if(globalThis.crypto?.getRandomValues)globalThis.crypto.getRandomValues(e);else for(let t=0;t<e.length;t++)e[t]=Math.floor(Math.random()*256);return Array.from(e,e=>e.toString(16).padStart(2,`0`)).join(``)}function am(e){let t=/iPhone|iPad|iPod/.test(e)?`iOS`:/Android/.test(e)?`Android`:/CrOS/.test(e)?`ChromeOS`:/Windows/.test(e)?`Windows`:/Macintosh|Mac OS X/.test(e)?`macOS`:/Linux/.test(e)?`Linux`:`other`;for(let[n,r]of[[`Edge`,/Edg(?:A|iOS)?\/(\d+)/],[`Opera`,/OPR\/(\d+)/],[`Samsung Internet`,/SamsungBrowser\/(\d+)/],[`Firefox`,/(?:Firefox|FxiOS)\/(\d+)/],[`Chrome`,/(?:Chrome|CriOS)\/(\d+)/],[`Safari`,/Version\/(\d+)[\d.]* .*Safari/]]){let i=r.exec(e);if(i)return{browser:`${n} ${i[1]}`,os:t}}return{browser:`other`,os:t}}function om(e,t,n,r){let{simTime:i,...a}=t,o=t.mode===`result`||t.mode===`dying`||t.mode===`victory`;return{schema:`lamplighter-diagnostics/2`,build:Zp,runId:e.runId,outcome:e.outcome??(t.mode===`victory`?`victory`:o?`defeat`:`in_progress`),elapsed:{runSec:lm(i,1),wallSec:lm(Math.max(0,r-e.startedAt)/1e3,1)},run:{...a,progression:t.progression.map(e=>({...e,mods:Object.fromEntries(Object.entries(e.mods).map(([e,t])=>[e,lm(t,2)]))})),procs:{...t.procs,...t.procs.dealtByKind?{dealtByKind:dm(t.procs.dealtByKind)}:{}},hp:Math.round(t.hp),dealt:um(t.dealt),taken:um(t.taken)},perf:{p95FrameMs:e.frameP95Ms(),frames:e.frames,avgFps:e.frameSum>0?lm(e.frames/e.frameSum,1):0,slowFramePct:e.frames>0?lm(e.slowFrames/e.frames*100,1):0,worstFrameMs:Math.round(e.worstFrame*1e3)},env:n,events:e.events(),eventsDropped:e.dropped,errors:e.errors}}function sm(e){let{browser:t,os:n}=am(navigator.userAgent);return{browser:t,os:n,input:matchMedia(`(pointer: coarse)`).matches?`touch`:`mouse`,viewport:`${window.innerWidth}x${window.innerHeight}`,dpr:lm(window.devicePixelRatio||1,2),renderScale:lm(e.renderScale,2),quality:e.quality,webgl:e.webgl2?`webgl2`:`webgl1`,sound:e.sound,music:e.music}}async function cm(e,t){try{if(!navigator.clipboard?.writeText)throw Error(`clipboard unavailable`);return await navigator.clipboard.writeText(e),`copied`}catch{let n=URL.createObjectURL(new Blob([e],{type:`application/json`})),r=document.createElement(`a`);return r.href=n,r.download=t,r.style.display=`none`,document.body.appendChild(r),r.click(),r.remove(),setTimeout(()=>URL.revokeObjectURL(n),2e3),`downloaded`}}function lm(e,t){let n=10**t;return Math.round(e*n)/n}function um(e){let t={};for(let n in e)t[n]=Math.round(e[n]);return t}function dm(e){return typeof e==`number`?Math.round(e):Array.isArray(e)?e.map(dm):e&&typeof e==`object`?Object.fromEntries(Object.entries(e).map(([e,t])=>[e,dm(t)])):e}var fm={shoot:.06,hit:.035,crit:.05,kill:.04,pickup:.03,zap:.08,firefly:.1,step:.12,explode:.06},pm=class{ctx=null;master;sfxBus;musicBus;noiseBuf;last=new Map;muted=!1;musicOn=!0;mood=`off`;nextStep=0;step=0;tempo=96;schedTimer=null;unlock(){if(this.ctx){this.ctx.state===`suspended`&&this.ctx.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=new e;this.ctx=t;let n=t.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=4,this.master=t.createGain(),this.master.gain.value=+!this.muted,this.sfxBus=t.createGain(),this.sfxBus.gain.value=1,this.musicBus=t.createGain(),this.musicBus.gain.value=.5,this.sfxBus.connect(n),this.musicBus.connect(n),n.connect(this.master),this.master.connect(t.destination);let r=t.sampleRate*1.5;this.noiseBuf=t.createBuffer(1,r,t.sampleRate);let i=this.noiseBuf.getChannelData(0);for(let e=0;e<r;e++)i[e]=Math.random()*2-1;this.schedTimer=window.setInterval(()=>this.schedule(),40)}setMuted(e){this.muted=e,this.ctx&&this.master.gain.setTargetAtTime(+!e,this.ctx.currentTime,.05)}setMusic(e){this.musicOn=e,this.ctx&&this.musicBus.gain.setTargetAtTime(e?.5:0,this.ctx.currentTime,.1)}setMood(e){e!==this.mood&&(this.mood=e,this.tempo=e===`boss`?118:e===`build`?104:e===`dawn`?84:96)}ok(e){if(!this.ctx||this.muted)return!1;let t=fm[e]??.02,n=this.ctx.currentTime;return n-(this.last.get(e)??-1)<t?!1:(this.last.set(e,n),!0)}tone(e,t,n,r,i,a=.005,o=0,s){let c=this.ctx,l=c.currentTime+o,u=c.createOscillator(),d=c.createGain();u.type=n,u.frequency.setValueAtTime(e,l),i&&u.frequency.exponentialRampToValueAtTime(Math.max(20,i),l+t),d.gain.setValueAtTime(1e-4,l),d.gain.exponentialRampToValueAtTime(r,l+a),d.gain.exponentialRampToValueAtTime(1e-4,l+t),u.connect(d),d.connect(s??this.sfxBus),u.start(l),u.stop(l+t+.02)}noise(e,t,n,r,i=`bandpass`,a,o=0,s){let c=this.ctx,l=c.currentTime+o,u=c.createBufferSource();u.buffer=this.noiseBuf;let d=c.createBiquadFilter();d.type=i,d.frequency.setValueAtTime(t,l),a&&d.frequency.exponentialRampToValueAtTime(a,l+e),d.Q.value=n;let f=c.createGain();f.gain.setValueAtTime(r,l),f.gain.exponentialRampToValueAtTime(1e-4,l+e),u.connect(d),d.connect(f),f.connect(s??this.sfxBus),u.start(l,Math.random()*.5),u.stop(l+e+.02)}sfx(e,t=1,n=0){if(!this.ok(e))return;let r=t,i=1+(Math.random()-.5)*.08;switch(e){case`shoot`:this.tone(880*i,.07,`square`,.05*r,440),this.noise(.05,3e3,1,.05*r,`highpass`);break;case`flare`:this.noise(.18,1800,.7,.22*r,`bandpass`,500),this.tone(160,.12,`sawtooth`,.08*r,60);break;case`zap`:for(let e=0;e<3;e++)this.tone(1200+Math.random()*1600,.05,`sawtooth`,.05*r,300,.002,e*.025);this.noise(.12,5e3,2,.08*r,`highpass`);break;case`lob`:this.tone(220*i,.18,`triangle`,.12*r,520);break;case`beam`:this.tone(520,.35,`sawtooth`,.07*r,1400,.01),this.tone(1040,.3,`sine`,.06*r,2e3,.01),this.noise(.3,2400,3,.07*r);break;case`firefly`:this.tone(1800*i,.08,`sine`,.04*r,2600);break;case`hit`:this.noise(.05,1400*i,1.5,.09*r),this.tone(300*i,.04,`square`,.03*r,150);break;case`crit`:this.tone(1500*i,.12,`triangle`,.1*r,2400),this.noise(.06,4e3,2,.08*r);break;case`kill`:this.tone(420*i,.12,`triangle`,.08*r,140),this.noise(.12,900,1,.08*r,`lowpass`,200);break;case`shove`:this.tone(500,.6,`sine`,.12*r,90);break;case`pickup`:{let e=[0,2,4,7,9,12,14,16,19,21,24,26,28],t=e[Math.min(e.length-1,n)];this.tone(660*2**(t/12),.09,`sine`,.07*r,void 0,.003);break}case`levelup`:[0,4,7,12,16].forEach((e,t)=>this.tone(523*2**(e/12),.35,`triangle`,.13*r,void 0,.01,t*.07)),this.noise(.6,6e3,1,.04*r,`highpass`,void 0,.2);break;case`hurt`:this.tone(180,.22,`sawtooth`,.16*r,70),this.noise(.15,600,1,.15*r,`lowpass`);break;case`jump`:this.tone(300*i,.12,`sine`,.09*r,620),this.noise(.08,2500,1,.03*r,`highpass`);break;case`djump`:this.tone(500,.16,`sine`,.09*r,1100),this.noise(.14,3500,2,.05*r);break;case`land`:this.noise(.1,500,1,.12*r,`lowpass`,120),this.tone(110,.08,`sine`,.1*r,60);break;case`step`:this.noise(.04,900*i,2,.025*r,`bandpass`);break;case`vault`:this.noise(.12,1200,1,.06*r,`bandpass`,600);break;case`climb`:this.noise(.1,1500,3,.05*r);break;case`zip`:this.noise(.9,1200,4,.07*r,`bandpass`,3800),this.tone(900,.5,`sine`,.03*r,1600);break;case`zipEnd`:this.tone(700,.15,`triangle`,.08*r,300);break;case`dash`:this.noise(.22,3e3,.8,.12*r,`bandpass`,700);break;case`vent`:this.noise(.7,600,.7,.16*r,`bandpass`,3500),this.tone(200,.5,`sine`,.08*r,700);break;case`fall`:this.tone(600,.9,`sine`,.12*r,80);break;case`bell`:[1,2.76,5.4].forEach((e,t)=>this.tone(220*e,1.6-t*.4,`sine`,.14/(t+1)*r,void 0,.004));break;case`slam`:this.tone(90,.5,`sine`,.3*r,35),this.noise(.5,400,.8,.25*r,`lowpass`,80);break;case`thud`:this.tone(70,.3,`sine`,.25*r,40),this.noise(.2,300,1,.15*r,`lowpass`);break;case`roar`:this.tone(110,.8,`sawtooth`,.1*r,60,.08),this.tone(116,.8,`sawtooth`,.08*r,55,.08),this.noise(.8,400,2,.12*r,`bandpass`,200);break;case`rumble`:this.noise(1.4,140,.6,.28*r,`lowpass`,60);break;case`charge`:this.tone(300,.7,`sawtooth`,.05*r,1200,.3);break;case`volley`:this.tone(760,.2,`square`,.05*r,380),this.noise(.18,2e3,2,.06*r);break;case`explode`:this.tone(120*i,.35,`sine`,.22*r,40),this.noise(.4,1200,.6,.22*r,`lowpass`,150);break;case`chest`:[0,7,12,16,19,24].forEach((e,t)=>this.tone(440*2**(e/12),.6,`triangle`,.09*r,void 0,.01,t*.06));break;case`relic`:[0,4,7,11,14].forEach((e,t)=>this.tone(392*2**(e/12),1.1,`sine`,.12*r,void 0,.02,t*.09));break;case`heal`:[0,5,9].forEach((e,t)=>this.tone(523*2**(e/12),.3,`sine`,.09*r,void 0,.01,t*.06));break;case`ui`:this.tone(660,.06,`triangle`,.08*r,880);break;case`banner`:this.tone(330,.4,`triangle`,.08*r,void 0,.02),this.tone(495,.4,`triangle`,.06*r,void 0,.02,.08)}}schedule(){let e=this.ctx;if(!e||this.mood===`off`)return;let t=60/this.tempo/4;for(this.nextStep<e.currentTime&&(this.nextStep=e.currentTime+.05);this.nextStep<e.currentTime+.15;)this.playStep(this.step,this.nextStep-e.currentTime,t),this.step=(this.step+1)%64,this.nextStep+=t}playStep(e,t,n){if(!this.musicOn||this.muted)return;let r=this.mood,i=Math.floor(e/16),a=e%16,o={title:[[57,60,64],[53,57,60],[48,52,55],[55,59,62]],calm:[[57,60,64],[53,57,60],[48,52,55],[55,59,62]],build:[[57,60,64],[53,57,60],[50,53,57],[52,56,59]],boss:[[57,60,64],[58,62,65],[57,60,64],[55,58,62]],dawn:[[48,52,55],[55,59,62],[57,60,64],[53,57,60]],defeat:[[57,60,64],[53,56,60],[50,53,56],[52,55,59]]},s=(o[r]??o.calm)[i],c=e=>440*2**((e-69)/12),l=this.musicBus;if(a===0)for(let e of s)this.padNote(c(e),n*16,t,r===`boss`?.035:.045);if((r===`title`?a%4==0:r===`defeat`?a%8==0:a%2==0)&&r!==`off`){let e=[0,1,2,1,2,0,1,2],i=e[a/2%e.length|0],o=r===`boss`?12:r===`dawn`?24:12;this.tone(c(s[i]+o),n*1.8,`triangle`,r===`title`?.035:.03,void 0,.004,t,l)}(r===`calm`||r===`build`||r===`boss`||r===`dawn`)&&(r===`boss`?a%2==0:r===`build`?a%4==0||a===6||a===14:a%8==0)&&this.tone(c(s[0]-24),n*(r===`boss`?1.6:3),`triangle`,.11,void 0,.006,t,l),r===`build`||r===`boss`?(a%4==0&&this.kick(t),a%4==2&&this.noise(.04,7e3,1,.025,`highpass`,void 0,t,l),r===`boss`&&(a===4||a===12)&&this.noise(.14,1800,.8,.07,`bandpass`,900,t,l)):r===`calm`?((a===0||a===10)&&this.kick(t,.5),a%4==2&&this.noise(.03,8e3,1,.012,`highpass`,void 0,t,l)):r===`dawn`&&a===0&&[0,7,12].forEach((e,n)=>this.tone(c(s[0]+24+e),1.6,`sine`,.04,void 0,.01,t+n*.12,l))}padNote(e,t,n,r){let i=this.ctx,a=i.currentTime+n,o=i.createGain(),s=i.createBiquadFilter();s.type=`lowpass`,s.frequency.value=900,o.gain.setValueAtTime(1e-4,a),o.gain.exponentialRampToValueAtTime(r,a+.5),o.gain.setValueAtTime(r,a+t*.7),o.gain.exponentialRampToValueAtTime(1e-4,a+t*1.05);for(let n of[-6,6]){let r=i.createOscillator();r.type=`sawtooth`,r.frequency.value=e,r.detune.value=n,r.connect(s),r.start(a),r.stop(a+t*1.1)}s.connect(o),o.connect(this.musicBus)}kick(e,t=1){let n=this.ctx,r=n.currentTime+e,i=n.createOscillator(),a=n.createGain();i.frequency.setValueAtTime(140,r),i.frequency.exponentialRampToValueAtTime(42,r+.12),a.gain.setValueAtTime(.22*t,r),a.gain.exponentialRampToValueAtTime(1e-4,r+.18),i.connect(a),a.connect(this.musicBus),i.start(r),i.stop(r+.2)}dispose(){this.schedTimer&&clearInterval(this.schedTimer)}},mm=class{keys=new Set;moveX=0;moveY=0;jumpHeld=!1;jumpQ=!1;dashQ=!1;pauseQ=!1;touchActive=!1;lastDevice=`keyboard`;stickId=null;stickOX=0;stickOY=0;stickX=0;stickY=0;jumpTouch=!1;padPrev=[];padFlick=new Set;menuOpen=!1;onAnyInput=null;stickBase=null;stickKnob=null;constructor(){typeof matchMedia<`u`&&matchMedia(`(pointer: coarse)`).matches&&this.markTouch(),window.addEventListener(`pointerdown`,e=>{e.pointerType===`touch`&&!this.touchActive&&this.markTouch()},{capture:!0}),window.addEventListener(`keydown`,e=>{e.repeat?[`Space`,`ArrowUp`,`ArrowDown`].includes(e.code)&&e.preventDefault():(e.isTrusted&&(this.lastDevice=`keyboard`),this.keys.add(e.code),e.code===`Space`&&(this.jumpQ=!0),(e.code===`ShiftLeft`||e.code===`ShiftRight`||e.code===`KeyJ`||e.code===`KeyL`)&&(this.dashQ=!0),(e.code===`Escape`||e.code===`KeyP`)&&(this.pauseQ=!0),[`Space`,`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`].includes(e.code)&&e.preventDefault(),this.onAnyInput?.())}),window.addEventListener(`keyup`,e=>this.keys.delete(e.code)),window.addEventListener(`blur`,()=>{this.keys.clear(),this.stickId=null,this.jumpTouch=!1,this.hideStick()})}bindTouch(e,t,n,r,i){this.stickBase=r,this.stickKnob=i,e.addEventListener(`pointerdown`,t=>{t.pointerType!==`mouse`&&(this.markTouch(),this.stickId===null&&(this.stickId=t.pointerId,this.stickOX=t.clientX,this.stickOY=t.clientY,this.stickX=this.stickY=0,e.setPointerCapture(t.pointerId),this.showStick(t.clientX,t.clientY),t.preventDefault()))}),e.addEventListener(`pointermove`,e=>{if(e.pointerId!==this.stickId)return;let t=e.clientX-this.stickOX,n=e.clientY-this.stickOY,r=Math.hypot(t,n);r>56&&(this.stickOX+=t/r*(r-56),this.stickOY+=n/r*(r-56),t=e.clientX-this.stickOX,n=e.clientY-this.stickOY,this.stickBase&&(this.stickBase.style.transform=`translate(${this.stickOX}px, ${this.stickOY}px)`)),this.stickX=t/56,this.stickY=-n/56,this.stickKnob&&(this.stickKnob.style.transform=`translate(${t}px, ${n}px)`),e.preventDefault()});let a=e=>{e.pointerId===this.stickId&&(this.stickId=null,this.stickX=this.stickY=0,this.hideStick())};e.addEventListener(`pointerup`,a),e.addEventListener(`pointercancel`,a);let o=(e,t,n)=>{e.addEventListener(`pointerdown`,n=>{this.markTouch(),t(),e.classList.add(`down`),e.setPointerCapture(n.pointerId),n.preventDefault(),n.stopPropagation()});let r=()=>{e.classList.remove(`down`),n?.()};e.addEventListener(`pointerup`,r),e.addEventListener(`pointercancel`,r)};o(t,()=>{this.jumpQ=!0,this.jumpTouch=!0},()=>{this.jumpTouch=!1}),o(n,()=>{this.dashQ=!0})}markTouch(){this.lastDevice=`touch`,this.touchActive||(this.touchActive=!0,document.body.classList.add(`touch`)),this.onAnyInput?.()}showStick(e,t){this.stickBase&&this.stickKnob&&(this.stickBase.style.display=`block`,this.stickBase.style.transform=`translate(${e}px, ${t}px)`,this.stickKnob.style.transform=`translate(0px, 0px)`)}hideStick(){this.stickBase&&(this.stickBase.style.display=`none`)}poll(){let e=0,t=0,n=this.keys;(n.has(`KeyA`)||n.has(`ArrowLeft`))&&--e,(n.has(`KeyD`)||n.has(`ArrowRight`))&&(e+=1),(n.has(`KeyW`)||n.has(`ArrowUp`))&&(t+=1),(n.has(`KeyS`)||n.has(`ArrowDown`))&&--t;let r=n.has(`Space`)||this.jumpTouch;this.stickId!==null&&(e+=this.stickX,t+=this.stickY);let i=typeof navigator<`u`&&navigator.getGamepads?navigator.getGamepads():[];for(let n of i){if(!n)continue;let i=n.axes[0]??0,a=n.axes[1]??0;Math.hypot(i,a)>.2&&(e+=i,t-=a,this.lastDevice=`gamepad`);let o=e=>!!n.buttons[e]?.pressed,s=e=>o(e)&&!this.padPrev[e];s(0)&&(this.jumpQ=!0,this.lastDevice=`gamepad`,this.onAnyInput?.(),this.menuKey(`Enter`));let c=(e,t)=>{t&&!this.padFlick.has(e)&&this.menuKey(e),t?this.padFlick.add(e):this.padFlick.delete(e)};c(`ArrowLeft`,o(14)||i<-.6),c(`ArrowRight`,o(15)||i>.6),c(`ArrowUp`,o(12)||a<-.6),c(`ArrowDown`,o(13)||a>.6),(s(1)||s(2)||s(5)||s(7))&&(this.dashQ=!0,this.lastDevice=`gamepad`),s(9)&&(this.pauseQ=!0),o(0)&&(r=!0),this.padPrev=n.buttons.map(e=>e.pressed);break}let a=Math.hypot(e,t);a>1&&(e/=a,t/=a),this.moveX=e,this.moveY=t,this.jumpHeld=r}menuKey(e){this.menuOpen&&(window.dispatchEvent(new KeyboardEvent(`keydown`,{code:e})),window.dispatchEvent(new KeyboardEvent(`keyup`,{code:e})))}consumeJump(){let e=this.jumpQ;return this.jumpQ=!1,e}consumeDash(){let e=this.dashQ;return this.dashQ=!1,e}consumePause(){let e=this.pauseQ;return this.pauseQ=!1,e}clearEdges(){this.jumpQ=this.dashQ=this.pauseQ=!1}isDown(e){return this.keys.has(e)}},hm={double_volley:`<path d="M5 12h29l-5-5m5 5-5 5M5 22h29l-5-5m5 5-5 5"/><path stroke="#ffcf6a" d="M14 33h27l-5-5m5 5-5 5"/>`,ember_ring:`<circle cx="24" cy="24" r="4"/><path d="M24 4v9m0 22v9M4 24h9m22 0h9M10 10l7 7m14 14 7 7M10 38l7-7m14-14 7-7"/><path stroke="#ffcf6a" d="M6 16A19 19 0 0 1 17 5"/>`,ricochet:`<circle cx="12" cy="32" r="7"/><circle cx="37" cy="12" r="7"/><path d="M3 8l9 24 25-20m-11 1 11-1-2 10"/>`,heavy_bolt:`<path d="M5 6v6m7-6v6m7-6v6"/><path stroke="#ffcf6a" stroke-width="6" d="M9 37 35 16"/><path d="m24 10 12 5 3 12M30 35l8-7m-3 14 8-7"/>`,fork:`<circle cx="24" cy="25" r="5"/><circle cx="8" cy="7" r="4"/><circle cx="40" cy="7" r="4"/><path d="M24 44V30m-3-9L10 10m17 11L38 10"/>`,static_pool:`<ellipse cx="24" cy="35" rx="20" ry="8"/><path d="m26 3-9 15h10l-5 13M7 34v4m11-3v5m12-5v5m11-6v4"/>`,double_strike:`<path d="m13 3-7 12h9l-6 13 11 14m15-39-7 12h9l-6 13 11 14"/><circle cx="20" cy="42" r="3"/><circle cx="42" cy="42" r="3"/>`,thunderclap:`<path d="m8 3 8 9-8 8 16 8"/><circle cx="29" cy="30" r="6"/><path d="M29 15v5m0 20v5M14 30h5m20 0h6M18 19l4 4m14 14 4 4m-22 0 4-4m14-14 4-4"/>`,twin_burst:`<path d="m5 24 25-19v38zm0 0 25-9m-25 9 25 9"/><path stroke="#ffcf6a" d="m18 24 25-15v30zm0 0h25"/>`,backdraft:`<path d="m4 6 8 4-8 4m13-8 8 4-8 4m13-8 8 4-8 4"/><circle cx="12" cy="33" r="9"/><path stroke="#ffcf6a" d="m12 33 31-13v26z"/>`,hot_coals:`<circle cx="24" cy="17" r="11"/><path stroke="#ffcf6a" d="M9 43q-6-6 1-13 0 6 4 7t-5 6M24 43q-6-6 1-13 0 6 4 7t-5 6M39 43q-6-6 1-13 0 6 4 7t-5 6"/>`,wide_sweep:`<path d="m5 24 35-10v20zm0 0h35"/><path stroke="#ffcf6a" stroke-dasharray="4 3" d="M5 24 40 3M5 24l35 21"/>`,aftershock:`<circle cx="24" cy="24" r="20"/><circle cx="24" cy="24" r="12" stroke="#ffcf6a" stroke-dasharray="4 3"/><path d="M21 6h6"/>`,shrapnel:`<path d="M24 5v12m0 14v12M7 14l10 6m14 8 10 6M7 34l10-6m14-8 10-6"/><circle cx="24" cy="24" r="5"/>`,double_shell:`<path d="M4 41Q9-12 36 17"/><circle cx="36" cy="17" r="5"/><path stroke="#ffcf6a" d="M12 43Q17 7 42 30"/><circle cx="42" cy="30" r="3"/>`,scorched_ground:`<path d="M4 24Q16-9 30 29"/><ellipse cx="26" cy="36" rx="18" ry="8"/><path stroke="#ffcf6a" d="m13 38 7-8m0 11 9-11m0 12 10-12"/>`,twin_orbit:`<ellipse cx="24" cy="24" rx="19" ry="16"/><circle cx="24" cy="24" r="3"/><circle cx="5" cy="24" r="4"/><circle cx="43" cy="24" r="5" fill="#ffcf6a"/>`,outer_ring:`<circle cx="24" cy="24" r="10"/><circle cx="24" cy="24" r="20"/><circle cx="24" cy="4" r="4" fill="#ffcf6a"/><circle cx="24" cy="44" r="4" fill="#ffcf6a"/>`,pulse_ring:`<circle cx="24" cy="24" r="17" stroke-width="5"/><circle cx="24" cy="24" r="4"/><path d="M17 1v7m14-7v7"/>`,searing_touch:`<circle cx="14" cy="24" r="9"/><circle cx="30" cy="24" r="8"/><path stroke="#ffcf6a" d="M34 6v7m7 5h5m-6 15 5 5"/>`,split_ray:`<path stroke-width="4" d="M5 24h39"/><path stroke="#ffcf6a" d="m5 24 37-14M5 24l37 14"/>`,echo_beam:`<path stroke-width="5" d="M5 16h38"/><path stroke="#ffcf6a" stroke-dasharray="6 3" d="M5 31h38"/><path d="m37 10 6 6-6 6"/>`,broadside:`<rect x="4" y="15" width="30" height="18" rx="2"/><path d="m37 13 7 11-7 11M10 5v7m16-7v7M10 36v7m16-7v7"/>`,solar_burst:`<path stroke-width="4" d="M3 24h24"/><circle cx="33" cy="24" r="6"/><path d="M33 9v5m0 20v5M18 24h5m20 0h4M23 14l3 3m14 14 4 4m-21 0 3-3m14-14 4-4"/>`,twin_brood:`<circle cx="11" cy="12" r="4"/><circle cx="29" cy="8" r="4"/><circle cx="19" cy="28" r="4"/><circle cx="8" cy="40" r="4"/><circle cx="37" cy="32" r="7" fill="#ffcf6a"/><path d="M31 22l6 4 6-4"/>`,glowburst:`<path d="M3 37Q5 3 28 22"/><circle cx="33" cy="27" r="6"/><path stroke="#ffcf6a" d="M33 12v5m0 20v7M18 27h5m20 0h4M23 17l3 3m14 14 5 5"/>`,second_flight:`<circle cx="9" cy="29" r="6"/><circle cx="39" cy="15" r="6"/><path d="M9 23Q19-1 38 9m-10-1 10 1-3 9"/><path stroke="#ffcf6a" d="M5 42q17 5 20-7"/>`,hive_pulse:`<path d="M5 4v7m8-7v7m8-7v7"/><path d="m24 16 10 7v12l-10 7-10-7V23z"/><circle cx="5" cy="23" r="3"/><circle cx="43" cy="23" r="3"/><circle cx="5" cy="40" r="3"/><circle cx="43" cy="40" r="3"/>`},gm=()=>Object.entries(hm).map(([e,t])=>`<symbol id="perk-${e}" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">${t}</g></symbol>`).join(``),_m=(e,t)=>`<svg class="perkart perkart--${t}${t===`chip`?` glyph`:``}" data-perk="${e}" viewBox="0 0 48 48" aria-hidden="true" focusable="false"><use href="#perk-${e}"/></svg>`,vm={double_volley:`Follow-up volley after 0.1 s at 75%; normal-hit behavior; requires available target`,ember_ring:`Every 10 hits, eight outward embers at 35%; no crit, max one ring/0.2 s`,ricochet:`Spent bolt bounces once to a new foe within 6 m; same damage, no crit`,heavy_bolt:`Every fourth volley adds 3× bolt, +2 pierce, 3× knockback; no crit`,fork:`Two more nearby untouched foes, full damage/no crit`,static_pool:`First struck foe leaves 1.5 m pool, 2 s, 20% each 0.5 s; max three, overlap nonstacking`,double_strike:`New starting foe, 60% chain; no foe twice per discharge`,thunderclap:`Last main-chain foe bursts 60% within 1.8 m; no crit`,twin_burst:`Follow-up spray at 50%, 0.12 s`,backdraft:`Every third spray creates nearby 200% blast, base 2.2 m radius`,hot_coals:`Pellets burn at 20% each 0.5 s for three ticks`,wide_sweep:`Two extra edge pellets, each 50%`,aftershock:`Echo blast, 50%, after 0.25 s at 60% radius`,shrapnel:`Six 30% fragments, up to 11.2 m; exclude blast-hit foes`,double_shell:`One follow-up shell per volley, 60%, 0.12 s`,scorched_ground:`Lead blast leaves burning patch, 20% each 0.5 s for 2 s; max three pools`,twin_orbit:`One primary orbiter; shared contact gate, count cap applies`,outer_ring:`Two outer orbiters at 50%, 125% reach`,pulse_ring:`60% pulse every 2 s`,searing_touch:`Primary orbit contacts burn at 20% each 0.5 s for three ticks`,split_ray:`Two 60% side rays at ±0.35 rad; shared target exclusion`,echo_beam:`Follow-up beam at 60%, 0.15 s`,broadside:`Aimed width +50% capped 3.2 m; knockback +20%`,solar_burst:`First struck foe bursts 70%, base 1.8 m`,twin_brood:`One primary fly, total cap nine`,glowburst:`Final/spent main-fly hit bursts 50%, base 1.5 m`,second_flight:`Spent main fly seeks one untouched foe, 60%, 8 m seek`,hive_pulse:`Every third swarm adds four 40% tiny hunters, life 1.6 s`},ym=e=>[p[e].line,vm[e]].filter(Boolean).join(` `),bm={wick:`<path fill="#c99a4a" d="M9 25h37v13H29l-5 18H12l5-21H9z"/><path fill="#ffd27a" d="M47 25q-8-9 4-20-1 8 7 13t-5 13z"/><path d="M13 29h26" stroke="#fff3c4"/>`,flare:`<path fill="#b5653a" d="M5 36l19-9 17-5 14-9v38L39 40l-15 1-9 13-8-5 9-13z"/><path fill="#ffd27a" d="M47 19h9v26h-9z"/>`,arc:`<path fill="#6f8aa0" d="M19 17l-4-9 9 4h16l9-4-4 9 6 9v24l-9 8H22l-9-8V26z"/><path fill="#8fd8ff" d="M34 20L23 37h10l-3 15 13-22H32z"/><path d="M18 24v26m28-26v26M14 24h36M16 49h32" stroke="#c99a4a"/>`,mortar:`<path fill="#5b4a52" d="M6 54h51v7H6zM15 48l-2-12L39 9l14 14-26 27z"/><path fill="#ff7a3d" d="M37 11l6-6 14 14-6 6z"/><path d="M13 25Q9 9 27 4" fill="none" stroke="#ffbd7a" stroke-dasharray="3 5"/>`,halo:`<g fill="#ffb64a"><circle cx="32" cy="9" r="7"/><circle cx="52" cy="20" r="7"/><circle cx="52" cy="44" r="7"/><circle cx="32" cy="55" r="7"/><circle cx="12" cy="44" r="7"/><circle cx="12" cy="20" r="7"/></g><circle cx="32" cy="32" r="14" fill="none" stroke="#ffd27a"/>`,lance:`<path fill="#fff3c4" d="M9 51L47 8l9 8-39 42z"/><path fill="#c99a4a" d="M43 13l8-9 9 8-9 9z"/><path stroke="#ffd27a" d="M15 31v-8m-8 14H1m29 11h9M24 53v9"/><circle cx="20" cy="42" r="10" fill="#ffcf6a"/>`,firefly:`<path fill="none" stroke="#c99a4a" d="M17 19V12Q32-3 47 12v7"/><path fill="#7fa36a" d="M17 22h30l6 10v21q-21 12-42 0V32z"/><path fill="#c99a4a" d="M14 15h36v10H14z"/><g fill="#c8ff7a"><circle cx="24" cy="36" r="4"/><circle cx="40" cy="40" r="5"/><circle cx="28" cy="51" r="3"/></g>`},xm=(e,t=``)=>`<svg class="art ${t}" viewBox="0 0 64 64" aria-hidden="true"><use href="#gun-${e}"/></svg>`,Sm=e=>_m(e,`chip`),Cm=`<svg aria-hidden="true" width="0" height="0" style="position:absolute;overflow:hidden"><defs>${e.map(e=>`<symbol id="gun-${e}" viewBox="0 0 64 64"><g stroke="#1b1226" stroke-width="3" stroke-linejoin="round">${bm[e]}</g></symbol>`).join(``)}${gm()}<symbol id="ui-lock" viewBox="0 0 24 24"><path d="M7.5 11V8a4.5 4.5 0 0 1 9 0v3" fill="none" stroke="#ffcf6a" stroke-width="2.6" stroke-linecap="round"/><rect x="4" y="10.5" width="16" height="11.5" rx="2.5" fill="#c99a4a" stroke="#1b1226" stroke-width="1.6"/><circle cx="12" cy="15.3" r="1.9" fill="#1b1226"/><path d="M12 16.5v2.6" stroke="#1b1226" stroke-width="2.2" stroke-linecap="round"/></symbol>
</defs></svg>`,wm={wick:`Rapid bolts at the nearest foe`,flare:`Close spray that shoves foes back`,arc:`Lightning that leaps between foes`,mortar:`Lobs blasts into crowds`,halo:`Embers orbit and scorch nearby foes`,lance:`A piercing beam through a line`,firefly:`Homing fireflies hunt on their own`},Tm=()=>`<svg class="lock" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><use href="#ui-lock"/></svg>`,Em=[r.Common,r.Rare,r.Epic,r.Legendary],Dm=[5,12,20],Om=e=>Math.max(0,Math.min(12,Math.floor(Number.isFinite(e)?e:0))),km=(e,t)=>Math.max(0,Math.min(t,Math.floor(Number.isFinite(e)?e:0)));function Am(e,t){let r=Om(e),i=n.filter(e=>r>=e).length,a=km(t,i),o=a<i,s={picks:r,perksEarned:i,perksChosen:a,pendingIndices:Object.freeze([])};if(o){let e=n[a],t=r-e;return Object.freeze({...s,filled:4,stage:e/4-1,perkOwed:!0,capped:!1,owedThreshold:e,beyond:t,carry:t>0?Object.freeze({stage:e/4,state:`filled`}):null})}return Object.freeze(r===12?{...s,filled:4,stage:3,perkOwed:!1,capped:!0,owedThreshold:null,beyond:0,carry:null}:{...s,filled:r%4,stage:Math.floor(r/4),perkOwed:!1,capped:!1,owedThreshold:null,beyond:0,carry:null})}function jm(e,t,r){let i=Om(e),a=Om(t),o=Am(i,r),s=Math.min(2,Math.max(0,a-i));if(!s)return Object.freeze({...o,pendingIndices:Object.freeze([]),carry:null,award:0,pending:0,pendingIndex:-1,crosses:null,cue:`stat-only`});let c=i%4,l=Math.min(s,4-c),u=Math.floor(i/4),d=Object.freeze(Array.from({length:l},(e,t)=>c+t)),f=s>l?Object.freeze({stage:u+1,state:`pending`}):null,p=n.find(e=>i<e&&a>=e)??null;return Object.freeze({...o,filled:c,stage:u,pendingIndices:d,carry:f,award:s,pending:s,pendingIndex:d[0]??-1,crosses:p,cue:a===12?`final`:p&&f?`carry`:p?`complete`:`gain`})}function Mm(){return Object.freeze({...Am(0,0),award:0,pending:0,pendingIndex:-1,crosses:null,cue:`acquire`})}function Nm(e){return[0,1,2].map(t=>t<e.perksChosen?`filled`:t<e.perksEarned?`owed`:`empty`)}function Pm(e,t,n){return[0,1,2,3].map(r=>r<e?`owned`:r===0?`empty`:t>=Dm[r-1]||n===r?`open`:`locked`)}function Fm(e,t){let n=[0,1,2,3].map(t=>`<i class="cell${t<e.filled?` on`:e.pendingIndices.includes(t)?` next`:``}"></i>`).join(``),r=e.carry?`<span class="wcarry wcarry--${t}" data-stage="${e.carry.stage}" data-carry="${e.carry.state}" style="--stage:${Em[e.carry.stage]}" aria-hidden="true"><i class="cell ${e.carry.state===`filled`?`on`:`next`}"></i></span>`:``;return`<span class="wstrip wstrip--${t}" data-stage="${e.stage}" data-filled="${e.filled}" data-pending="${e.pendingIndices.length}" data-carried="${+!!e.carry}" data-beyond="${e.beyond}"${`award`in e?` data-award="${e.award}"`:``}${e.perkOwed?` data-owed=""`:``}${e.capped?` data-capped=""`:``} style="--stage:${Em[e.stage]}" aria-hidden="true">${n}</span>${r}`}var Im=e=>e.capped?`<b class="wmax" aria-hidden="true">MAX</b>`:``;function Lm(e,t=[]){return`<span class="gt-perks" aria-hidden="true">${Nm(e).map((e,n)=>`<i class="perk${e===`empty`?``:` `+e}"${e===`filled`&&t[n]?` data-perk="${t[n]}"`:``}>${e===`filled`&&t[n]?_m(t[n],`chip`):``}</i>`).join(``)}</span>`}function Rm(e){return e.capped?`Upgrade strip complete, MAX. All perks chosen`:e.perkOwed&&e.filled===4?`All four upgrade blocks filled. A perk is ready to choose`+(e.beyond===1?`. One block already carried into the next strip`:e.beyond>1?`. ${e.beyond} more blocks already earned`:``):`${e.filled} of 4 upgrade blocks filled${e.perkOwed?`. A perk is ready to choose`:``}`}function zm(e){return e.beyond===0?``:e.beyond===1?`one block carries over`:`${e.beyond} more blocks already earned`}function Bm(e,t,n){if(t===`owned`&&n){let t=Am(n.picks,n.perks.length),r=n.perks.map(e=>p[e].name);return`<div class="gtile owned" role="listitem" data-slot="${e}" data-gun="${n.id}" data-stage="${t.stage}" style="--stage:${Em[t.stage]}"><span class="ll-sr">${n.name}. ${Rm(t)}. Perks: ${r.join(`, `)||`none`}.</span><span class="gt-inset" aria-hidden="true">${xm(n.id)}</span>${Lm(t,n.perks)}${Im(t)}${Fm(t,`hud`)}</div>`}if(t===`empty`||e===0)return`<div class="gtile empty" role="listitem" data-slot="${e}"><span class="ll-sr">Empty weapon slot.</span></div>`;let r=Dm[e-1];return t===`open`?`<div class="gtile open" role="listitem" data-slot="${e}" data-unlock="${r}"><span class="ll-sr">Empty weapon slot, open for a new weapon.</span><span class="gt-open" aria-hidden="true"></span><small class="unlock" aria-hidden="true">Open</small></div>`:`<div class="gtile locked" role="listitem" data-slot="${e}" data-unlock="${r}"><span class="ll-sr">Locked weapon slot. Unlocks at player level ${r}.</span>${Tm()}<small class="unlock" aria-hidden="true">Lv ${r}</small></div>`}function Vm(e){let t=Am(e.picks,e.perkCount);return`<div class="wlist-head" data-stage="${t.stage}">${xm(e.id)}<b>${e.name}</b>${Fm(t,`list`)}${Im(t)}<span class="ll-sr">${Rm(t)}.</span></div>`}function Hm(e,t){return`${xm(e)}<span class="wprog wprog--promo">${Fm(t,`card`)}</span><b>${Qu[e].name} empowered!</b><small>Tap to continue</small>`}var Um={dmg:`Damage`,rate:`Fire rate`,pierce:`Pierce`,count:`+Projectile`,size:`Wider`},Wm={wick:`bolts`,flare:`pellets`,arc:`chains`,mortar:`shells`,halo:`orbiters`,lance:`beams`,firefly:`flies`};function Gm(e){if(e.award===2)return e.cue===`final`?`+2 blocks · fills strip · final perk`:e.cue===`carry`?`+2 blocks · fills strip · perk · +1 carried`:e.cue===`complete`?`+2 blocks · fills strip · perk`:`+2 blocks`;switch(e.cue){case`carry`:return`+2 blocks · fills strip · perk · +1 carried`;case`gain`:return`+1 block`;case`complete`:return`+1 block · fills strip · perk`;case`final`:return`+1 block · fills strip · final perk`;case`stat-only`:return e.capped?`Stat boost only`:`Stat boost only · no block`;case`acquire`:return`Starts empty`}}function Km(e){if(e.award===2)return`${e.filled} of 4 upgrade blocks filled; choosing adds two blocks${e.cue===`gain`?`.`:e.cue===`final`?`, fills the strip and unlocks the final perk choice.`:`, fills the strip and unlocks a perk choice.`}${e.cue===`carry`?` One block carries into the next strip.`:``}`;switch(e.cue){case`carry`:return`One block carries into the next strip.`;case`gain`:return`${e.filled} of 4 upgrade blocks filled; choosing adds one block.`;case`complete`:return`${e.filled} of 4 upgrade blocks filled; choosing fills the strip and unlocks a perk choice.`;case`final`:return`${e.filled} of 4 upgrade blocks filled; choosing fills the strip and unlocks the final perk choice.`;case`stat-only`:return e.capped?`Upgrade strip complete, MAX. Stat boost only; adds no block and no perk.`:`Stat boost only; adds no block.`;case`acquire`:return`Starts with an empty upgrade strip.`}}function qm(e,t){switch(e.kind){case`upgrade`:{let n=t.weapon(e.id)?.prog,r=t.previewOffer(e),i=r?.picksBefore??n?.picks??0,a=jm(i,r?.picksAfter??i,n?.perks.length??0),o=w[e.id][e.track]??Um[e.track],s=[`dmg`,`rate`,`size`].includes(e.track)?`${hf(e.amount)}${e.track===`size`?` `+(e.id===`lance`?`width`:`radius`):``}`:`+${e.amount} ${e.track===`pierce`?`pierce`:Wm[e.id]}`,c=S[e.rarity],l=Qu[e.id].name,u=Df(e,t),d=Of(e,t);return{strength:u,strengthHtml:_f(u),icon:xm(e.id),color:`#e8dcff`,quality:c,kind:l,name:o,level:s,desc:`${d?`<span class="effect-detail">${d}</span>`:``}<span class="wprog" data-cue="${a.cue}" data-award="${a.award}">${Fm(a,`card`)}${Im(a)}<small class="wcue">${Gm(a)}</small></span>`,a11y:`${l} upgrade: ${o} ${s}. ${u.kind===`scored`?gf(u.strength):`No immediate equipped-weapon gain.`} ${Km(a)}`,cls:`up`}}case`acquire`:{let t=Mm(),n=Qu[e.id].name;return{strength:{kind:`unscored`,reason:`acquire`},strengthHtml:``,icon:xm(e.id),color:Em[0],kind:`New weapon`,name:n,level:`New!`,desc:`${wm[e.id]}<span class="wprog" data-cue="acquire">${Fm(t,`card`)}<small class="wcue">${Gm(t)}</small></span>`,a11y:`New weapon: ${n}. ${wm[e.id]}. ${Km(t)}`,cls:`acquire`}}case`perk`:{let n=p[e.perk],r=ym(e.perk),i=Qu[e.id].name,a=Df(e,t);return{strength:a,strengthHtml:_f(a),icon:_m(e.perk,`large`)+xm(e.id,`perk-weapon`),color:`#f4efe6`,kind:i,name:n.name,level:`Perk`,desc:r,a11y:`${i} perk: ${n.name}. ${gf(3)} ${r}`,cls:`perkc`}}}}var $=e=>document.getElementById(e),Jm=class{onStart=()=>{};onPick=()=>{};onReroll=()=>{};onResume=()=>{};onRestart=()=>{};onMenu=()=>{};onToggleSound=()=>{};onToggleMusic=()=>{};onToggleQuality=()=>{};onPause=()=>{};onDiagnostics=()=>({text:`{}`,filename:`diagnostics.json`});bannerTimer=0;hintTimer=0;hintKey=``;token=0;keys=[];cardCount=0;focus=-1;lastHp=-1;lastBoss=-1;loadoutKey=``;hudLevel=1;acquireSlot=null;openedAt=0;chooseOpen=!1;promoTimer=null;revealing=!1;get isRevealing(){return this.revealing}choiceContext=null;constructor(){document.body.insertAdjacentHTML(`beforeend`,Cm),$(`startbtn`).addEventListener(`click`,()=>this.onStart()),$(`resumebtn`).addEventListener(`click`,()=>this.onResume()),$(`restartbtn`).addEventListener(`click`,()=>this.onRestart()),$(`menubtn`).addEventListener(`click`,()=>this.onMenu()),$(`againbtn`).addEventListener(`click`,()=>this.onRestart()),$(`titlebtn`).addEventListener(`click`,()=>this.onMenu()),$(`pausebtn`).addEventListener(`click`,()=>this.onPause());for(let e of[`tgl-sound`,`p-sound`])$(e).addEventListener(`click`,()=>this.onToggleSound());for(let e of[`tgl-music`,`p-music`])$(e).addEventListener(`click`,()=>this.onToggleMusic());$(`tgl-quality`).addEventListener(`click`,()=>this.onToggleQuality());for(let e of[`p`,`r`])$(`${e}-diag`).addEventListener(`click`,()=>this.exportDiagnostics(e));window.addEventListener(`keydown`,e=>{if(e.repeat)return;if(this.revealing){e.preventDefault(),e.stopImmediatePropagation(),this.endReveal();return}if(!this.chooseOpen){(e.code===`Enter`||e.code===`NumpadEnter`)&&($(`title`).classList.contains(`hidden`)?$(`result`).classList.contains(`hidden`)?$(`pause`).classList.contains(`hidden`)||this.onResume():this.onRestart():this.onStart());return}if(performance.now()-this.openedAt<280)return;let t=this.cardCount;if(e.code.startsWith(`Digit`)){let n=parseInt(e.code.slice(5),10)-1;n>=0&&n<t&&this.onPick(this.token,this.keys[n])}else e.code===`ArrowRight`||e.code===`ArrowDown`||e.code===`KeyD`||e.code===`KeyS`?this.setFocus((this.focus+1+t)%t):e.code===`ArrowLeft`||e.code===`ArrowUp`||e.code===`KeyA`||e.code===`KeyW`?this.setFocus((this.focus-1+t)%t):e.code===`Enter`||e.code===`Space`?(e.preventDefault(),this.focus>=0?this.onPick(this.token,this.keys[this.focus]):this.setFocus(0)):e.code===`KeyR`&&this.onReroll(this.token)})}bootDone(){$(`boot`).classList.add(`hidden`)}show(e,t){t&&(e===`title`||e===`result`)&&this.endReveal(),$(e).classList.toggle(`hidden`,!t),e===`hud`&&$(`touch`).classList.toggle(`live`,t),t&&(e===`pause`||e===`result`)&&($(`${e[0]}-diag-status`).textContent=Ym)}async exportDiagnostics(e){let t=$(`${e}-diag-status`);try{let{text:e,filename:n}=this.onDiagnostics();t.textContent=await cm(e,n)===`copied`?`Copied — paste it into your bug report.`:`Clipboard unavailable — saved ${n}.`}catch{t.textContent=`Could not export diagnostics.`}}setToggles(e,t,n){for(let t of[`tgl-sound`,`p-sound`])$(t).textContent=`Sound: ${e?`On`:`Off`}`;for(let e of[`tgl-music`,`p-music`])$(e).textContent=`Music: ${t?`On`:`Off`}`;$(`tgl-quality`).textContent=`Quality: ${n}`}setBest(e){$(`best`).textContent=e}fade(e){$(`fade`).style.opacity=e?`1`:`0`}hud(e){let t=Math.max(0,e.hp/e.maxHp);$(`hpfill`).style.width=`${t*100}%`,Math.abs(this.lastHp-t)>.001&&($(`hpghost`).style.width=`${t*100}%`,this.lastHp=t),$(`hptext`).textContent=`${Math.ceil(Math.max(0,e.hp))} / ${e.maxHp}`,$(`xpfill`).style.width=`${Math.min(100,e.xp/e.xpNext*100)}%`,$(`lvl`).textContent=`LV ${e.level}`;let n=Math.floor(e.time/60),r=Math.floor(e.time%60);$(`timer`).textContent=`${n}:${r.toString().padStart(2,`0`)}`,$(`kills`).textContent=`${e.kills}`,$(`phase`).textContent=e.phase,$(`dashpip`).classList.toggle(`cool`,!e.dashReady),$(`vignette`).style.opacity=e.lowHp?`${.55+.25*Math.sin(performance.now()/180)}`:`0`,this.hudLevel=e.level,this.loadout(e.build)}hurtFlash(){let e=$(`vignette`);e.style.transition=`none`,e.style.opacity=`0.9`,requestAnimationFrame(()=>{e.style.transition=`opacity 0.35s`,e.style.opacity=`0`})}loadout(e){let t=Pm(e.weapons.filter(e=>e.prog).length,this.hudLevel,this.acquireSlot),n=e.weapons.map(e=>e.prog?`${e.id}r${e.prog.picks}m${Object.values(e.prog.mods).map(e=>+e.toFixed(2)).join(`:`)}p${e.prog.perks.join(`+`)}q${c(e.prog).join(``)}`:`${e.id}${e.level}`).join()+`|`+[...e.trinkets].map(([e,t])=>`${e}${t}`).join()+`|`+[...e.relics].join()+`|`+t.join(`,`);if(n===this.loadoutKey)return;this.loadoutKey=n;let r=e.gunViews();this.gunRow(e,r);let i=$(`loadout`);i.innerHTML=``,i.appendChild(this.slotRow(e)),$(`pause-build`).innerHTML=``,$(`pause-build`).appendChild(this.slotRow(e)),$(`pause-guns`).innerHTML=r.map(e=>`<div class="pause-gun" data-gun="${e.id}">${Vm({id:e.id,name:e.name,picks:e.picks,perkCount:e.perks.length})}<p>${e.r.dmg.toFixed(1)} damage · ${e.r.rate.toFixed(2)} shots/s · ${e.r.count} projectiles${e.r.size?` · `+e.r.size.toFixed(2)+` m reach`:``}</p>${e.perks.map(e=>`<p class="perk-line">${Sm(e)}<b>${p[e].name}</b> — ${ym(e)}</p>`).join(``)}</div>`).join(``)}gunRow(e,t=e.gunViews()){let n=$(`gunrow`),r=Pm(t.length,this.hudLevel,this.acquireSlot);n.setAttribute(`role`,`list`),n.innerHTML=r.map((e,n)=>Bm(n,e,t[n])).join(``),n.toggleAttribute(`inert`,this.chooseOpen),n.setAttribute(`aria-hidden`,String(this.chooseOpen))}slotRow(e){let t=document.createElement(`div`);t.style.display=`contents`;let n=document.createElement(`div`);n.className=`slotrow`;for(let t of e.weapons){if(e.roster===`candidate`)continue;let r=Qu[t.id],i=document.createElement(`div`);i.className=`slot`+(r.evolved?` evolved`:``),i.style.color=r.color,i.title=r.name,i.innerHTML=`${r.icon}<span class="lv">${r.evolved?`★`:t.level}</span>`,n.appendChild(i)}let r=document.createElement(`div`);r.className=`slotrow`;for(let[t,n]of e.trinkets){let e=document.createElement(`div`);e.className=`slot trinket`,e.title=ed[t].name,e.innerHTML=`${ed[t].icon}<span class="lv">${n}</span>`,r.appendChild(e)}for(let t of e.relics){let e=document.createElement(`div`);e.className=`slot relic`,e.title=nd[t].name,e.textContent=nd[t].icon,r.appendChild(e)}return t.appendChild(n),t.appendChild(r),t}boss(e,t=``,n=1){let r=$(`bossbar`);e?(r.classList.remove(`hidden`),r.querySelector(`.bossname b`).textContent=e,r.querySelector(`.bossname i`).textContent=t,r.querySelector(`.fill`).style.width=`${Math.max(0,n)*100}%`,Math.abs(n-this.lastBoss)>.002&&(r.querySelector(`.ghost`).style.width=`${Math.max(0,n)*100}%`,this.lastBoss=n)):(r.classList.add(`hidden`),this.lastBoss=-1)}banner(e,t=`good`,n=2.2){let r=$(`banner`);r.textContent=e,r.className=`show ${t}`,this.bannerTimer=n}hint(e,t,n=6){if(t===this.hintKey&&this.hintTimer>0)return;let r=$(`hint`);r.innerHTML=e,r.classList.add(`show`),this.hintTimer=n,this.hintKey=t}clearHint(e){e&&e!==this.hintKey||(this.hintTimer=0,$(`hint`).classList.remove(`show`))}get hintShowing(){return this.hintTimer>0?this.hintKey:``}tick(e){this.bannerTimer>0&&(this.bannerTimer-=e,this.bannerTimer<=0&&$(`banner`).classList.remove(`show`)),this.hintTimer>0&&(this.hintTimer-=e,this.hintTimer<=0&&$(`hint`).classList.remove(`show`))}showChoices(e,t,n,r,i,a=pf(r)){this.choiceContext=a,this.chooseOpen=!0,this.acquireSlot=e.kind===`acquire`?e.slot:null,$(`banner`).style.visibility=`hidden`;let o=e.offers;this.token=e.token,this.keys=[...e.keys],$(`choose`).classList.toggle(`chest`,e.kind===`chest`),$(`choose`).classList.toggle(`perk`,e.kind===`perk`),$(`choose-title`).textContent=t,$(`choose-sub`).textContent=n;let s=document.getElementById(`choose-help`);if(s||(s=document.createElement(`p`),s.id=`choose-help`,$(`choose-sub`).after(s)),s.textContent=e.kind===`acquire`?``:ff,document.getElementById(`perk-showcase`)?.remove(),e.kind===`perk`&&e.milestone){let t=r.gunViews().find(t=>t.id===e.milestone.id),n=document.createElement(`div`);n.id=`perk-showcase`,n.innerHTML=Hm(e.milestone.id,Am(t?.picks??e.milestone.threshold,t?.perks.length??0)).replace(`<small>Tap to continue</small>`,``),s.after(n)}let c=$(`cards`);c.innerHTML=``,o.forEach((t,n)=>{let i=document.createElement(`button`);i.className=`card`;let o=e.token,s=e.keys[n];i.dataset.token=String(o),i.dataset.key=s,i.classList.add(t.kind);let l=Qm(t,r,a);l.cls&&i.classList.add(l.cls),l.quality&&(i.dataset.quality=String(l.quality)),l.strength?.kind===`scored`?(i.dataset.strength=String(l.strength.strength),i.classList.add(`scored`)):i.classList.add(`unscored`),i.setAttribute(`aria-label`,l.a11y),i.innerHTML=`
        <span class="key">${n+1}</span>
        <div class="ico" style="color:${l.color}">${l.icon}</div>
        <div class="kind">${l.kind}</div>
        <div class="name">${l.name}</div>
        <div class="lvl">${l.level}</div>
        ${l.strengthHtml??``}<div class="desc">${l.desc}</div>
        ${l.syn?`<div class="syn ${l.synReady?`ready`:``}">${l.syn}</div>`:``}`;let u=i.querySelector(`.effect-detail`);u&&(u.id=`effect-${o}-${n}`,i.setAttribute(`aria-describedby`,u.id)),i.addEventListener(`click`,()=>{!this.revealing&&performance.now()-this.openedAt>=280&&this.onPick(o,s)}),i.addEventListener(`pointerenter`,()=>this.setFocus(n)),c.appendChild(i)}),this.cardCount=o.length,this.focus=-1,this.openedAt=performance.now();let l=$(`rerollbtn`);l.textContent=`Reroll (${i})`,l.disabled=i<=0,l.style.display=e.kind===`level`||e.kind===`cache`?``:`none`;let u=e.token;l.onclick=()=>{performance.now()-this.openedAt>=280&&this.onReroll(u)};let d=r.gunViews();if(this.show(`choose`,!0),this.gunRow(r,d),e.kind===`perk`&&e.milestone){let t=d.find(t=>t.id===e.milestone.id),r=zm(Am(t?.picks??e.milestone.threshold,t?.perks.length??0));r&&($(`choose-sub`).textContent=`${n} · ${r}`)}if(e.kind===`perk`&&e.milestone&&!matchMedia(`(prefers-reduced-motion: reduce)`).matches){this.revealing=!0,c.style.visibility=`hidden`;let t=$(`promo`),n=d.find(t=>t.id===e.milestone.id);t.innerHTML=Hm(e.milestone.id,Am(n?.picks??e.milestone.threshold,n?.perks.length??0)),t.classList.remove(`hidden`),t.onclick=e=>{e.stopPropagation(),this.endReveal()},this.promoTimer=setTimeout(()=>this.endReveal(),600)}}endReveal(){this.promoTimer&&clearTimeout(this.promoTimer),this.promoTimer=null,this.revealing=!1,$(`promo`).classList.add(`hidden`),$(`cards`).style.visibility=``,this.openedAt=performance.now()}resetHud(){this.endReveal(),document.getElementById(`perk-showcase`)?.remove(),this.loadoutKey=``,this.hudLevel=1,this.acquireSlot=null}hideChoices(){this.endReveal(),document.getElementById(`perk-showcase`)?.remove(),this.chooseOpen=!1,this.acquireSlot=null,$(`banner`).style.visibility=``,this.show(`choose`,!1);let e=$(`gunrow`);e.removeAttribute(`inert`),e.setAttribute(`aria-hidden`,`false`)}setFocus(e){this.focus=e;let t=$(`cards`).children;for(let n=0;n<t.length;n++)t[n].classList.toggle(`focus`,n===e)}showResult(e){$(`result`).classList.toggle(`lose`,!e.win),$(`result-title`).textContent=e.win?`Dawn breaks`:`The light goes out`,$(`result-sub`).textContent=e.win?`The Hearth blazes and the Hollow melt into morning. The Drift is safe — for today.`:e.bosses>0?`You felled ${e.bosses} night-terror${e.bosses>1?`s`:``} before the dark took you. The Hearth still flickers — try again.`:`The Hollow swallowed the last lamp. Rekindle and run again.`;let t=[[`${Math.floor(e.time/60)}:${Math.floor(e.time%60).toString().padStart(2,`0`)}`,e.best?`Time ★ best`:`Time`],[`${e.level}`,`Level`],[`${e.kills}`,`Hollow felled`],[`${e.bosses}/4`,`Night-terrors`],[`${e.shoved}`,`Shoved to the void`],[`${e.falls}`,`Your falls`]];$(`result-stats`).innerHTML=t.map(([e,t])=>`<div class="stat"><b>${e}</b><span>${t}</span></div>`).join(``);let n=Math.max(1,...e.dealt.map(e=>e.value));$(`result-guns`).innerHTML=e.guns.map(e=>`<div class="result-gun" data-gun="${e.id}">${Vm({id:e.id,name:e.name,picks:e.picks,perkCount:e.perks.length})}<p>${e.perks.map(e=>{let t=Object.values(p).find(t=>t.name===e);return(t?Sm(t.id):``)+e}).join(`, `)||`No perks`}</p><p>${Math.round(e.dealt)} damage · ${Math.round(e.secondaryShare*100)}% secondary/DoT</p></div>`).join(``),$(`result-weapons`).innerHTML=[...e.dealt].sort((e,t)=>t.value-e.value).map(e=>`<div class="wrow"><span class="wn" style="color:${e.color}">${e.icon} ${e.name}</span><span class="wb"><i style="width:${e.value/n*100}%"></i></span><span class="wv">${Math.round(e.value).toLocaleString()}</span></div>`).join(``),this.show(`result`,!0)}},Ym=`Run report for bug reports. Stays on this device; no personal info.`,Xm=(...e)=>e.filter(Boolean).map(e=>e.trim().replace(/\.+$/,``)).join(`. `)+`.`,Zm=[`whetstone`,`bellows`,`lens`,`prism`,`flask`];function Qm(e,t,n=pf(t)){let r=$m(e,t),i=Df(e,t,n);if(e.kind===`upgrade`||e.kind===`acquire`||e.kind===`perk`)return r;let a=kf(e,t,n);return a&&(r.desc=a+(e.kind===`trinket`?`<small class="allcue">Stats only · no weapon blocks</small>`:``),r.a11y=Xm(r.kind,r.name,r.level,a,e.kind===`trinket`?`Stats only, no weapon blocks`:void 0)),r.strength=i,r.strengthHtml=_f(i),i.kind===`scored`?r.a11y+=` `+gf(i.strength):i.reason===`no-immediate-gain`&&!r.a11y.includes(`No immediate`)&&(r.a11y+=` No immediate equipped-weapon gain.`),r}function $m(e,n){switch(e.kind){case`upgrade`:case`acquire`:case`perk`:return qm(e,n);case`guard`:return{icon:`⛨`,color:`#9fe0ff`,kind:`Comfort`,name:`Ember Guard`,level:`Instant`,desc:`Invulnerable for 2 s (refreshes to 2 s; does not stack).`,a11y:Xm(`Comfort`,`Ember Guard`,`Instant`,`Invulnerable for 2 s (refreshes to 2 s; does not stack)`)};case`weapon`:{let t=Qu[e.id],r=t.levels[e.level-1],i=t.evolvesWith?ed[t.evolvesWith]:null,a=i?n.trinket(i.id)>0:!1;return{icon:t.icon,color:t.color,kind:e.level===1?`New kindler`:`Kindler`,name:t.name,level:e.level===1?`New!`:`Level ${e.level-1} → ${e.level}${e.level===5?` (max)`:``}`,desc:e.level===1?t.blurb:r.note,syn:i?`Evolves with ${i.icon} ${i.name} at max level`:void 0,a11y:Xm(e.level===1?`New kindler`:`Kindler`,t.name,e.level===1?`New!`:`Level ${e.level-1} → ${e.level}${e.level===5?` (max)`:``}`,e.level===1?t.blurb:r.note,i?`Evolves with ${i.icon} ${i.name} at max level`:void 0),synReady:a,cls:e.level===1?`new`:void 0}}case`trinket`:{let r=ed[e.id],i=n.gunViews(),a=Zm.includes(e.id),o=Object.values(Qu).filter(r=>r.evolvesWith===e.id&&!(n.roster===`candidate`&&t(r.id))),s=o.find(e=>n.weapon(e.id));return{icon:Zm.includes(e.id)&&e.id!==`flask`?`<span class="all-art" data-n="${i.length}">${i.map(e=>xm(e.id)).join(``)}</span>`:r.icon,color:`#e8dcff`,kind:e.id===`flask`?`Area weapons/effects`:Zm.includes(e.id)?`All weapons`:e.level===1?`New trinket`:`Trinket`,name:r.name,level:e.level===1?`New!`:`Level ${e.level-1} → ${e.level}`,desc:`${r.per}. <i>${r.blurb}</i>${a?`<small class="allcue">Stats only · no weapon blocks</small>`:``}`,syn:o.length?`Evolves ${o[0].icon} ${o[0].name}`:void 0,a11y:Xm(Zm.includes(e.id)?`All weapons`:e.level===1?`New trinket`:`Trinket`,r.name,e.level===1?`New!`:`Level ${e.level-1} → ${e.level}`,r.per,r.blurb,a?`Stats only, no weapon blocks`:void 0,o.length?`Evolves ${o[0].icon} ${o[0].name}`:void 0),synReady:!!s,cls:e.level===1?`new`:void 0}}case`evolve`:{let t=Qu[e.into];return{icon:t.icon,color:t.color,kind:`Evolution`,name:t.name,level:`${Qu[e.from].name} transforms`,desc:t.blurb,cls:`evo`,a11y:Xm(`Evolution`,t.name,Qu[e.from].name+` transforms`,t.blurb)}}case`relic`:{let t=nd[e.id];return{icon:t.icon,color:`#ffcf6a`,kind:`Relic`,name:t.name,level:`Unique`,desc:t.blurb,cls:`relicc`,a11y:Xm(`Relic`,t.name,`Unique`,t.blurb)}}case`heal`:return{icon:`♨`,color:`#ff8a8a`,kind:`Comfort`,name:`Hearth Tea`,level:`Instant`,desc:`Restore 40% of your health.`,a11y:Xm(`Comfort`,`Hearth Tea`,`Instant`,`Restore 40% of your health`)};case`surge`:return{icon:`✹`,color:`#ffcf6a`,kind:`Power`,name:`Ember Surge`,level:`Instant`,desc:`A blast of flame scorches every Hollow nearby and pulls in all embers.`,a11y:Xm(`Power`,`Ember Surge`,`Instant`,`A blast of flame scorches every Hollow nearby and pulls in all embers`)}}}var eh=class{canvas;ctx;floaters=[];markers=[];bars=[];v=new V;w=1;h=1;dpr=1;constructor(e){this.canvas=e,this.ctx=e.getContext(`2d`)}resize(e,t,n){this.w=e,this.h=t,this.dpr=n,this.canvas.width=Math.round(e*n),this.canvas.height=Math.round(t*n)}clear(){this.floaters.length=0,this.markers.length=0,this.bars.length=0}number(e,t,n,r,i){this.floaters.length>140&&this.floaters.shift();let a=Math.round(r);this.floaters.push({x:e,y:t,z:n,text:i?`${a}!`:`${a}`,color:i?`#ffd84a`:`#fff6e6`,stroke:i?`#7a2a00`:`#2a1030`,size:i?21+Math.min(10,a/15):14+Math.min(5,a/20),life:i?.95:.7,max:i?.95:.7,vy:i?2.6:1.8,ox:(Math.random()-.5)*18})}text(e,t,n,r,i,a=18,o=1.2){this.floaters.push({x:e,y:t,z:n,text:r,color:i,stroke:`#1a0c24`,size:a,life:o,max:o,vy:1.4,ox:0})}update(e){for(let t of this.floaters)t.life-=e,t.y+=t.vy*e,t.vy*=Math.exp(-2.5*e);this.floaters=this.floaters.filter(e=>e.life>0)}draw(e){let t=this.ctx,n=this.dpr;t.setTransform(n,0,0,n,0,0),t.clearRect(0,0,this.w,this.h),t.textAlign=`center`,t.textBaseline=`middle`,t.lineJoin=`round`;for(let n of this.bars){let r=this.project(n.x,n.y,n.z,e);if(!r)continue;let i=n.w;t.fillStyle=`rgba(10,6,20,0.75)`,t.fillRect(r.x-i/2-1,r.y-1,i+2,6),t.fillStyle=n.color,t.fillRect(r.x-i/2,r.y,i*Math.max(0,n.frac),4)}for(let n of this.floaters){let r=this.project(n.x,n.y,n.z,e);if(!r)continue;let i=n.life/n.max,a=i>.85?1+(i-.85)*3:1;t.globalAlpha=Math.min(1,i*2.5),t.font=`800 ${Math.round(n.size*a)}px system-ui, -apple-system, Segoe UI, sans-serif`,t.lineWidth=4,t.strokeStyle=n.stroke,t.strokeText(n.text,r.x+n.ox,r.y),t.fillStyle=n.color,t.fillText(n.text,r.x+n.ox,r.y)}t.globalAlpha=1;for(let n of this.markers){this.v.set(n.x,n.y,n.z).project(e);let r=(this.v.x*.5+.5)*this.w,i=(-this.v.y*.5+.5)*this.h,a=this.v.z>1;if(!a&&r>34&&r<this.w-34&&i>96&&i<this.h-120)continue;a&&(r=this.w-r,i=this.h-i);let o=this.w/2,s=(96+this.h-120)/2,c=r-o,l=i-s,u=(this.h-120-96)/2,d=Math.min((this.w/2-34)/Math.abs(c||.001),u/Math.abs(l||.001)),f=o+c*d,p=s+l*d,m=Math.atan2(l,c);t.save(),t.translate(f,p),t.fillStyle=`rgba(20,12,40,0.85)`,t.strokeStyle=n.color,t.lineWidth=2,t.beginPath(),t.arc(0,0,17,0,Math.PI*2),t.fill(),t.stroke(),t.rotate(m),t.fillStyle=n.color,t.beginPath(),t.moveTo(25,0),t.lineTo(17,-7),t.lineTo(17,7),t.closePath(),t.fill(),t.restore(),t.fillStyle=n.color,t.font=`700 16px system-ui, sans-serif`,t.fillText(n.icon,f,p+1),n.label&&(t.font=`700 10px system-ui, sans-serif`,t.fillStyle=`rgba(255,243,214,0.9)`,t.fillText(n.label,f,p+(p>this.h/2?-26:28)))}}project(e,t,n,r){return this.v.set(e,t,n).project(r),this.v.z>1?null:{x:(this.v.x*.5+.5)*this.w,y:(-this.v.y*.5+.5)*this.h}}},th=1/60,nh=class{final=new uf(this);finalRoom=null;finalDist=0;resetFlowCell(){this.flowTimer=0,this.flowCell=-1}clearFinalSpatialRefs(){this.shrineItem=null,this.world.setShrineActive(!1)}showFinalRoom(){this.finalRoom??=new df(this.scene),this.finalRoom.show(),this.terrain.setFinalHidden(!0),this.world.setFinalHidden(!0)}debugReplayFinal(e,t=1){let n=structuredClone(e);this.startRun(),this.build.weapons=n.weapons,this.build.trinkets=new Map(n.trinkets),this.build.relics=new Set(n.relics),this.build.rerolls=n.rerolls,this.build.dealt=new Map(n.dealt),this.applyStats(),this.player.hp=n.hp,this.player.maxHp=n.maxHp,this.player.invuln=n.invuln,this.player.dashCd=n.dashCd,this.phoenixUsed=n.phoenixUsed,this.level=n.level,this.xp=n.xp,this.xpNext=n.xpNext,this.director.bossesDefeated=n.bossesDefeated;let r=this.final.debugEnter();return r&&this.final.warden.debugSeed(t),r}finalPreservedSnapshot(){return structuredClone({hp:this.player.hp,maxHp:this.player.maxHp,invuln:this.player.invuln,dashCd:this.player.dashCd,phoenixUsed:this.phoenixUsed,kills:this.kills,shoved:this.shoved,falls:this.player.falls,runStats:this.runStats,xp:this.xp,xpNext:this.xpNext,level:this.level,weapons:this.build.weapons,trinkets:[...this.build.trinkets],relics:[...this.build.relics],rerolls:this.build.rerolls,dealt:[...this.build.dealt],metrics:this.progressionMetrics.snapshot(),procCounters:this.procs.snapshotCounters(),bossesDefeated:this.director.bossesDefeated})}snapFinalCamera(){this.bossLean={x:0,z:0},this.updateCamera(0)}renderer;scene=new pr;camera=new us(45,1,.5,600);arena=new Hd;flow=new Zf(this.arena);terrain;world;player=new Tp(this.arena);rig=new sp;heroRing=cp();fx;blobs;enemies;shots;enemyShots;weapons;pickups;director;tutorial;bot;audio=new pm;input=new mm;ui=new Jm;overlay;build=new Nf;stats=this.build.stats();rng=new wd(Date.now()&65535);mode=`title`;time=0;level=1;xp=0;xpNext=od(1);kills=0;shoved=0;rewards=new jf;combatStopped=!0;combatEpoch=0;pendingChests=0;roster=`candidate`;choices=new Bf;procs=new Jf(this);resultSnapshot=null;acc=0;trauma=0;hitstop=0;camPos=new V(0,20,20);camLook=new V;bossLean={x:0,z:0};flowTimer=0;flowCell=-1;endT=0;phoenixUsed=!1;hurtSfxT=0;titleT=0;numberBudget=0;timeScale=1;camZoom=1;god=!1;settings={sound:!0,music:!0,quality:`Auto`};frameTimes=[];pixelRatio=1;lastFrame=performance.now();tmpV=new V;shrineReady=!0;shrineTimer=0;shrineItem=null;runStats={falls:0,maxCombo:0,taken:{}};diag=new tm;progressionMetrics=new Af;lastHurt=``;lastPhase=``;onFrame=null;constructor(e,t){this.renderer=new Zu({canvas:e,antialias:!0,powerPreference:`high-performance`}),this.renderer.outputColorSpace=Pt,this.renderer.toneMapping=4,this.renderer.toneMappingExposure=1,this.loadSettings(),this.terrain=new ep(this.arena),this.scene.add(this.terrain.group),this.world=new np(this.arena,this.scene),this.scene.add(this.rig.root,this.rig.scarfMesh,this.heroRing,this.rig.deviceRoot),this.fx=new gp(this.scene),this.blobs=new _p(this.scene),this.enemies=new Ap(this,this.scene),this.shots=new Pp(this,this.scene),this.enemyShots=new Lp(this,this.scene),this.weapons=new Rp(this),this.pickups=new Bp(this,this.scene),this.director=new qp(this),this.tutorial=new Yp(this),this.bot=new Xp(this),this.overlay=new eh(t),this.wirePlayerEvents(),this.wireUi();let n=e=>document.getElementById(e);this.input.bindTouch(n(`stickzone`),n(`btn-jump`),n(`btn-dash`),n(`stick-base`),n(`stick-knob`)),this.input.onAnyInput=()=>this.audio.unlock(),window.addEventListener(`pointerdown`,()=>this.audio.unlock(),{capture:!0}),window.addEventListener(`resize`,()=>this.resize()),window.visualViewport?.addEventListener(`resize`,()=>this.resize()),document.addEventListener(`visibilitychange`,()=>{document.hidden&&this.mode===`play`&&(this.diag.log(this.time,`hidden`),this.pause(!0))}),window.addEventListener(`error`,e=>this.diag.error(this.time,`uncaught`,e.error,rm(e.filename,location.origin))),window.addEventListener(`unhandledrejection`,e=>this.diag.error(this.time,`rejection`,e.reason)),this.resize(),this.resetRun(),this.player.x=0,this.player.z=4,this.toTitle(),this.ui.bootDone(),requestAnimationFrame(e=>this.frame(e))}loadSettings(){try{let e=JSON.parse(localStorage.getItem(`lamplighter.settings`)??`{}`);Object.assign(this.settings,e)}catch{}}saveSettings(){try{localStorage.setItem(`lamplighter.settings`,JSON.stringify(this.settings))}catch{}}wireUi(){let e=this.ui;e.onStart=()=>{this.audio.unlock(),this.audio.sfx(`ui`),this.startRun()},e.onPick=(e,t)=>{this.choose(e,t,`ui`)},e.onReroll=e=>{this.reroll(e)},e.onResume=()=>this.pause(!1),e.onRestart=()=>{this.audio.sfx(`ui`),this.ui.show(`pause`,!1),this.ui.show(`result`,!1),this.startRun()},e.onMenu=()=>{this.audio.sfx(`ui`),this.toTitle()},e.onPause=()=>this.pause(this.mode===`play`),e.onDiagnostics=()=>({text:JSON.stringify(this.diagnostics(),null,1),filename:`lamplighter-diagnostics-${this.diag.runId||`title`}.json`}),e.onToggleSound=()=>{this.settings.sound=!this.settings.sound,this.audio.setMuted(!this.settings.sound),this.applySettingsUi()},e.onToggleMusic=()=>{this.settings.music=!this.settings.music,this.audio.setMusic(this.settings.music),this.applySettingsUi()},e.onToggleQuality=()=>{let e=[`Auto`,`High`,`Low`];this.settings.quality=e[(e.indexOf(this.settings.quality)+1)%e.length],this.applySettingsUi(),this.resize()},this.audio.setMuted(!this.settings.sound),this.audio.setMusic(this.settings.music),this.applySettingsUi()}applySettingsUi(){this.ui.setToggles(this.settings.sound,this.settings.music,this.settings.quality),this.saveSettings()}wirePlayerEvents(){let e=this.player;e.ev={jump:t=>{this.audio.sfx(t?`djump`:`jump`,.8),this.fx.dust(e.x,e.y,e.z,t?4:6,15260872,2.5),t&&this.fx.ring(e.x,e.y,e.z,.3,1.4,.3,10479871,.7),this.tutorial.did(`jump`)},land:t=>{if(this.audio.sfx(`land`,bd(t/4,.3,1)),this.fx.dust(e.x,e.y,e.z,Math.round(4+t*2),15260872,2+t*.4),t>3&&this.shake(.12),this.build.relics.has(`quake`)&&t>1.2){let n=2.6+Math.min(4,t*.4);this.explode(e.x,e.y+.3,e.z,n,22+t*7+this.time*.05,5,`quake`,new W(16765562))}},vault:()=>this.audio.sfx(`vault`,.7),climbStart:()=>{this.audio.sfx(`climb`,.7),this.tutorial.did(`climb`)},zipStart:()=>{this.audio.sfx(`zip`,.9),this.tutorial.did(`zip`)},zipEnd:()=>this.audio.sfx(`zipEnd`,.7),dash:()=>{this.audio.sfx(`dash`,.8),this.fx.dust(e.x,e.y,e.z,6,12577023,3),this.tutorial.did(`dash`)},vent:()=>{this.audio.sfx(`vent`,.9),this.fx.burst(e.x,e.y+.3,e.z,16,10482943,6,.5,.5,-4,4)},fellOut:()=>{this.runStats.falls++,this.lastHurt=`void`,this.diag.log(this.time,`fall`,this.runStats.falls),this.audio.sfx(`fall`,.8);let t=this.god?0:Math.round(e.maxHp*.12);e.hp-=t,this.runStats.taken.void=(this.runStats.taken.void??0)+t,this.overlay.text(e.x,e.y+2.2,e.z,`-${t}`,`#ff6a8a`,20),this.ui.hurtFlash(),this.ui.banner(`The void bites — back to solid ground`,`warn`,1.8),this.tutorial.did(`fell`),this.fadeBlink(),this.checkDeath()},step:()=>this.audio.sfx(`step`,.6)}}resize(){let e=window.innerWidth,t=window.innerHeight,n=window.devicePixelRatio||1,r=/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)||`ontouchstart`in window,i;i=this.settings.quality===`High`?Math.min(n,2):this.settings.quality===`Low`?Math.min(n,1):this.pixelRatio>0&&this.frameTimes.length>0?this.pixelRatio:Math.min(n,r?1.5:2),this.pixelRatio=i,this.renderer.setPixelRatio(i),this.renderer.setSize(e,t,!1),this.overlay.resize(e,t,Math.min(n,2));let a=e/t;this.camera.aspect=a,this.camera.fov=a<1?56:45,this.camera.updateProjectionMatrix(),this.fx.setPixelScale(t*i/(2*Math.tan(this.camera.fov*Math.PI/360))/i)}camDistance(){let e=this.camera.aspect;return bd((e<1?8.5:13)/(Math.tan(this.camera.fov*Math.PI/360)*e),19,34)*this.camZoom}toTitle(){this.enterTerminal(),this.mode=`title`,this.ui.show(`hud`,!1),this.ui.show(`pause`,!1),this.ui.show(`result`,!1),this.ui.hideChoices(),this.ui.show(`title`,!0),this.ui.boss(null),this.audio.setMood(`title`),this.resetRun(),this.player.x=0,this.player.z=4,this.player.y=0,this.world.dawn=0,this.world.beaconLevel=.25;let e=this.loadBest();this.ui.setBest(e?`Best: ${e.win?`Dawn reached`:`Survived`} ${ih(e.time)} · level ${e.level}`:``)}resetRun(){this.progressionMetrics=new Af,this.director.reset(),this.enemies.clear(),this.enemies.extra.length=0,this.shots.clear(),this.combatEpoch++,this.combatStopped=!1,this.procs.reset(),this.enemyShots.clear(),this.pickups.clear(),this.fx.clear(),this.overlay.clear(),this.final.reset(),this.arena.setFinalDomain(null),this.finalRoom?.hide(),this.terrain.setFinalHidden(!1),this.world.setFinalHidden(!1),this.arena.resetDynamic(),this.build=new Nf(this.roster),this.choices.reset(),this.ui.hideChoices(),this.ui.resetHud(),this.resultSnapshot=null,this.stats=this.build.stats(),this.time=0,this.level=1,this.xp=0,this.xpNext=od(1),this.kills=0,this.shoved=0,this.rewards.clear(),this.pendingChests=0,this.trauma=0,this.hitstop=0,this.phoenixUsed=!1,this.runStats.falls=0,this.runStats.taken={},this.shrineReady=!0,this.shrineTimer=20,this.shrineItem=null,this.player.maxHp=100;let e=this.arena.spawnPoint;this.player.reset(e.x,e.y,e.z),this.applyStats(),this.rig.resetPose(),this.tutorial.reset(),this.flowCell=-1,this.world.dawn=0,this.world.beaconLevel=.25,this.world.setShrineActive(!1),this.lastPhase=``,this.lastHurt=``}startRun(){this.resetRun(),this.diag.begin(im(),performance.now()),this.diag.log(0,`run_start`),this.ui.show(`title`,!1),this.ui.show(`result`,!1),this.ui.show(`pause`,!1),this.ui.show(`hud`,!0),this.ui.boss(null),this.mode=`play`,this.acc=0,this.input.clearEdges(),this.audio.setMood(`calm`),this.ui.banner(`Keep the light alive until dawn`,`good`,2.6),this.camPos.set(this.player.x,this.player.y+30,this.player.z+24)}pause(e){e&&this.mode===`play`?(this.mode=`paused`,this.diag.log(this.time,`pause`),this.ui.show(`pause`,!0)):!e&&this.mode===`paused`&&(this.mode=`play`,this.diag.log(this.time,`resume`),this.ui.show(`pause`,!1),this.input.clearEdges(),this.acc=0)}frame(e){requestAnimationFrame(e=>this.frame(e));let t=(e-this.lastFrame)/1e3;this.lastFrame=e;let n=Math.min(.05,Math.max(0,t));if(this.trackPerformance(t),this.mode===`play`&&this.diag.frame(t),this.input.menuOpen=this.mode===`title`||this.mode===`choose`||this.mode===`paused`||this.mode===`result`,this.input.poll(),this.input.consumePause()&&(this.mode===`play`?this.pause(!0):this.mode===`paused`&&this.pause(!1)),this.mode===`play`){if(this.hitstop>0)this.hitstop-=n;else{this.acc+=n*this.timeScale;let e=0;for(;this.acc>=th&&e<8&&this.mode===`play`;)this.step(th),this.acc-=th,e++;e>=8&&(this.acc=0)}this.afterSteps()}else if(this.mode===`choose`&&this.bot.enabled)this.drainBot();else if(this.mode===`dying`||this.mode===`victory`){this.endT+=n;let e=this.mode===`dying`?.35:1;for(this.acc+=n*e;this.acc>=th;)this.step(th),this.acc-=th;this.updateEnding(n)}else this.mode===`title`&&(this.titleT+=n,this.arena.update(n));this.render(n),this.onFrame?.()}step(e){this.time+=this.mode===`play`?e:0;let t=this.player,n;n=this.bot.enabled&&this.mode===`play`?this.bot.intent(e):this.mode===`play`?{mx:this.input.moveX,mz:-this.input.moveY,jump:this.input.consumeJump(),jumpHeld:this.input.jumpHeld,dash:this.input.consumeDash()}:{mx:0,mz:0,jump:!1,jumpHeld:!1,dash:!1},Math.hypot(n.mx,n.mz)>.3&&this.tutorial.did(`move`),t.step(e,n),t.enforceFinalBounds(),this.arena.update(e),this.flowTimer-=e;let r=t.grounded?t:t.lastSafe,i=this.arena.cellOf(r.x)+this.arena.cellOf(r.z)*1e3;this.flowTimer<=0&&(i!==this.flowCell||this.arena.dirty)&&(this.flowTimer=.25,this.flowCell=i,this.flow.compute(r.x,r.z)),this.mode===`play`&&this.director.update(e),this.mode===`play`&&this.final.update(),this.enemies.update(e);let a=this.director.boss;a&&(a.update(e),a.dead&&a.deathT>2.2&&(a.dispose(),this.director.boss=null,this.enemies.extra.length=0)),this.mode===`play`&&(this.weapons.update(e),this.combatStopped||this.procs.update(e),this.combatStopped||this.shots.update(e)),this.enemyShots.update(e),this.pickups.update(e),t.state!==`dead`&&this.stats.regen>0&&(t.hp=Math.min(t.maxHp,t.hp+this.stats.regen*e)),this.mode===`play`&&(this.final.inRoom()||this.tutorial.update(e),this.updateShrine(e)),t.enforceFinalBounds()}openNext(){if(this.mode!==`play`)return!1;let e=this.build.nextMilestone();if(e)return this.openChoice(`perk`,e),!0;if(this.pendingChests>0)return this.openChoice(`chest`),!0;let t=this.rewards.head();if(t){let e=t.unlock,n=this.build.roster===`candidate`&&e&&this.build.weapons.length===e.slot&&!this.build.unlocked.has(e.level);return e&&!n&&this.diag.log(this.time,`acquire_skipped`,t.rid),this.openChoice(n?`acquire`:t.origin.src===`cache`?`cache`:`level`),!0}return!1}afterSteps(){this.openNext()?this.drainBot():this.maybeTransfer()}maybeTransfer(){this.mode===`play`&&this.final.phase===`due`&&this.final.tryTransfer()}openChoice(e,t=null){let n,r,i,a=this.rewards.head();if(e===`perk`&&t){let e=this.build.weapon(t.id);n=h(t.id,e.prog.perks).map(e=>({kind:`perk`,id:t.id,threshold:t.threshold,perk:e})),r=`${Qu[t.id].name} empowered!`,i=`All four blocks filled. Choose a perk`,this.audio.sfx(`relic`,.9)}else e===`acquire`&&a?.unlock?(n=this.build.acquireOffers(this.rng,a.unlock.slot,a.unlock.level),r=`Choose a weapon`,i=`New slot unlocked`):e===`chest`?(n=this.build.chestOffers(this.rng),this.diag.log(this.time,`reliquary`),r=`Reliquary opened!`,i=n.some(e=>e.kind===`evolve`)?`Your kindler is ready to evolve`:`Claim a relic`,this.audio.sfx(`chest`,1)):(n=this.build.offers(this.rng,this.level,3),r=e===`cache`?`Sky cache`:`Level ${a?.origin.src===`level`?a.origin.level:this.level}`,i=`Choose one upgrade`,this.audio.sfx(`levelup`,.9));let o=this.choices.open(e,n,t,{rewardId:[`level`,`cache`,`acquire`].includes(e)?a?.rid:null,slot:e===`acquire`?a?.unlock?.slot:null,rewardLevel:a?.origin.src===`level`?a.origin.level:null,chestSeq:e===`chest`?this.pendingChests:null});this.progressionMetrics.offeredHand(o,this.build),this.diag.log(this.time,`choice_open`,o.token,e),this.ui.showChoices(o,r,i,this.build,e===`level`||e===`cache`?this.build.rerolls:0,pf(this.build,this.player.hp,this.player.maxHp,this.player.invuln,this.time)),this.mode=`choose`,this.input.clearEdges()}choose(e,t,n=`ui`){let r=t=>(this.choices.rejected++,this.diag.log(this.time,`pick_reject`,e,t),t);if(this.mode!==`choose`)return r(`closed`);let i=this.choices.lookup(e,t);if(i===`closed`||i===`stale`||i===`unknown`)return r(i);let{offer:a,session:o}=i;if(!this.offerStillValid(a,o))return r(`invalid`);this.choices.close(),this.choices.accepted++,this.diag.log(this.time,`pick`,e,zf(a));let s=this.build.apply(a);this.progressionMetrics.commit(o,a,this.time,this.level,s.step);for(let e of s.crossed)this.diag.log(this.time,`milestone`,e,`id`in a?String(a.id):``);this.applyStats(),o.kind===`chest`?this.pendingChests=Math.max(0,this.pendingChests-1):o.rewardId!==null&&this.rewards.consume(o.rewardId),a.kind===`acquire`&&this.diag.log(this.time,`acquire`,a.rewardLevel,a.id),this.ui.hideChoices(),this.mode=`play`,this.input.clearEdges(),this.acc=0;let c=this.player;return a.kind===`heal`?(c.hp=Math.min(c.maxHp,c.hp+c.maxHp*.4),this.audio.sfx(`heal`)):a.kind===`surge`?this.emberSurge():a.kind===`guard`?(c.invuln=Math.max(c.invuln,2),this.audio.sfx(`relic`,.7),this.ui.banner(`Ember Guard — 2 s of safety`,`good`,1.6)):a.kind===`evolve`?(this.ui.banner(`${Qu[a.into].name} awakens!`,`good`,2.6),this.audio.sfx(`relic`,1)):a.kind===`perk`?(this.diag.log(this.time,`perk`,a.threshold,a.perk),this.ui.banner(`${p[a.perk].name} awakened`,`good`,2.2),this.audio.sfx(`relic`,1)):a.kind===`relic`?this.audio.sfx(`relic`,1):this.audio.sfx(`ui`,1),this.mode===`play`&&(this.levelFlare(),this.openNext(),this.mode===`play`&&!this.choices.current&&this.maybeTransfer()),`accepted`}pick(e,t){let n=this.choices.current;if(!n||this.mode!==`choose`)return this.choices.rejected++,this.diag.log(this.time,`pick_reject`,0,`closed`),`closed`;let r=n.keys[e];return r===void 0?(this.choices.rejected++,this.diag.log(this.time,`pick_reject`,n.token,`unknown`),`unknown`):this.choose(t,r,`debug`)}reroll(e){let t=this.choices.current;if(this.mode!==`choose`||!t||t.kind!==`level`&&t.kind!==`cache`||this.build.rerolls<=0||e!==t.token||this.rewards.head()?.rid!==t.rewardId||this.build.nextMilestone())return!1;this.build.rerolls--,this.progressionMetrics.rerolls++,this.diag.log(this.time,`reroll`,this.build.rerolls),this.audio.sfx(`ui`);let n=this.choices.open(t.kind,this.build.offers(this.rng,this.level,3),null,t);return this.progressionMetrics.offeredHand(n,this.build),this.diag.log(this.time,`choice_open`,n.token,`level`),this.ui.showChoices(n,`Level ${this.level}`,`The flame grows — choose a kindling`,this.build,this.build.rerolls,this.ui.choiceContext??pf(this.build,this.player.hp,this.player.maxHp,this.player.invuln,this.time)),this.input.clearEdges(),!0}currentOffers(){return this.choices.current?.offers??[]}currentChoice(){let e=this.choices.current;return e?{rewardId:e.rewardId,slot:e.slot,lanes:[...e.lanes],token:e.token,kind:e.kind,keys:[...e.keys],milestone:e.milestone?{...e.milestone}:null}:null}drainBot(){let e=0;for(;this.mode===`choose`&&this.bot.enabled&&this.choices.current;){if(e++>=16){this.diag.log(this.time,`bot_drain_cap`,e);return}let t=this.choices.current,n=Math.max(0,Math.min(t.offers.length-1,this.bot.choose(t.offers)));if(this.choose(t.token,t.keys[n],`bot`)!==`accepted`){this.diag.log(this.time,`bot_drain_cap`,e);return}}}offerStillValid(e,n){if([`level`,`cache`,`acquire`].includes(n.kind)&&this.rewards.head()?.rid!==n.rewardId||n.kind===`chest`&&this.pendingChests<=0)return!1;let r=this.build.nextMilestone();if(n.kind!==`perk`&&r)return!1;switch(e.kind){case`perk`:{let t=this.build.weapon(e.id)?.prog;return n.kind===`perk`&&!!t&&!!r&&n.milestone?.id===r.id&&n.milestone.threshold===r.threshold&&e.id===r.id&&e.threshold===r.threshold&&h(e.id,t.perks).includes(e.perk)&&!t.perks.includes(e.perk)}case`upgrade`:{let t=this.build.weapon(e.id)?.prog;return(n.kind===`level`||n.kind===`cache`)&&!!t&&a[e.id].includes(e.track)&&Number.isFinite(e.amount)&&e.amount>0&&e.amount<=D(e.id,t.mods,e.track)+1e-6&&u(t.picks,e.block)&&ee(e.id,t,e.track,this.stats,e.amount)}case`acquire`:{let r=this.rewards.head()?.unlock;return n.kind===`acquire`&&!!r&&t(e.id)&&!this.build.weapon(e.id)&&e.slot===n.slot&&e.slot===r.slot&&e.rewardLevel===r.level&&this.build.weapons.length===e.slot&&e.slot<4&&!this.build.unlocked.has(r.level)}case`weapon`:{if(n.kind!==`level`&&n.kind!==`cache`)return!1;let t=this.build.weapon(e.id),r=Qu[e.id];return t?!t.prog&&!r.evolved&&t.level<5&&e.level===t.level+1:this.build.roster===`legacy`&&$u.includes(e.id)&&e.level===1&&this.build.weapons.length<4&&!this.build.weapon(r.evolvesInto)}case`trinket`:{let t=this.build.trinket(e.id);return(n.kind===`level`||n.kind===`cache`)&&e.level===t+1&&t<ed[e.id].max&&(t>0||this.build.trinkets.size<4)}case`relic`:return n.kind===`chest`&&!this.build.relics.has(e.id);case`evolve`:return n.kind===`chest`&&this.build.evolutions().some(t=>t.from===e.from&&t.into===e.into);default:return n.kind!==`perk`&&n.kind!==`acquire`}}debugPicks(e,t){if(![`play`,`choose`,`paused`].includes(this.mode))return null;let n=this.build.weapon(e)?.prog;if(!n)return null;let r=0;for(let i=0;i<Math.min(12,Math.max(0,Math.floor(t)));i++){let t=a[e].find(t=>ee(e,n,t,this.stats));if(!t)break;let i=b[e][t],o=i.findIndex(e=>e!==null),s=Math.min(i[o],D(e,n.mods,t));this.build.apply({kind:`upgrade`,id:e,track:t,rarity:C[o],amount:s,block:+(n.picks<12)}),r++}return this.diag.log(this.time,`debug_pick`,r,e),this.applyStats(),this.mode===`choose`&&(this.choices.close(),this.ui.hideChoices(),this.mode=`play`),this.mode===`play`&&this.afterSteps(),{added:r}}enterTerminal(){this.combatStopped=!0,this.combatEpoch++,this.choices.close(),this.ui.hideChoices(),this.rewards.clear(),this.pendingChests=0,this.procs.terminalStop(),this.shots.clear()}applyStats(){this.stats=this.build.stats();let e=this.player;e.speedMul=this.stats.moveMul,e.jumpMul=this.stats.jumpMul;let n=100+this.stats.maxHpBonus;n>e.maxHp&&(e.hp+=n-e.maxHp),e.maxHp=n,e.hp=Math.min(e.hp,e.maxHp),e.hasDoubleJump=this.build.relics.has(`skystep`),e.dashCdMul=this.build.relics.has(`reel`)?.6:1,this.rig.setDevices(this.build.weapons.map(e=>e.id).filter(t))}levelFlare(){let e=this.player;this.fx.ring(e.x,e.y,e.z,.5,6,.5,16765562,.8),this.enemies.query(e.x,e.z,5,t=>{if(t.boss)return;let n=t.x-e.x,r=t.z-e.z,i=Math.hypot(n,r)||1;t.kx+=n/i*9/t.def.mass,t.kz+=r/i*9/t.def.mass})}emberSurge(){let e=this.player;this.explode(e.x,e.y+.5,e.z,9,60+this.time*.4,6,`surge`,new W(16764778)),this.pickups.vacuum()}shake(e){this.trauma=Math.min(1,this.trauma+e)}dealDamage(e,n,r,i,a,o,s=!1,c=`primary`,l=!1){if(this.combatStopped)return 0;let u=!l&&this.rng.next()<this.stats.critChance,d=n*(u?this.stats.critMult:1);e.boss&&(d*=e.boss.damageMul);let f=this.enemies.damage(e,d,u,i,a,o,r,c);if(f===0)return this.procs.counters.rejectedHits++,f;s&&f===1&&!e.boss&&(e.burn=2.5);let p=r;return this.build.dealt.set(p,(this.build.dealt.get(p)??0)+d),this.director.logDamage(d),t(r)&&this.procs.onAccepted(r,c,d),c===`primary`&&u&&r===`comets`&&this.explode(e.x,e.y+.6,e.z,1.8,d*.5,2,`comets`,new W(16769126),`secondary`),f}onEnemyHit(e,t,n,r,i=`primary`){let a=e.y+e.def.height*e.scale+.2;--this.numberBudget,(i===`dot`?this.numberBudget>0:n||e.boss||this.numberBudget>0)&&this.overlay.number(e.x,a,e.z,t,n),Math.random()<(i===`dot`?.25:.5)&&this.fx.burst(e.x,e.y+e.def.height*.5*e.scale,e.z,n?6:2,n?16769126:16763024,n?5:3,.25,n?.6:.4),i!==`dot`&&this.audio.sfx(n?`crit`:`hit`,n?.7:.45),n&&e.boss&&(this.hitstop=Math.max(this.hitstop,.025))}onEnemyKilled(e,t){if(e.boss)return;this.kills++;let n=e.y+.4*e.scale;if(this.fx.inkBurst(e.x,n,e.z,e.elite?22:5,e.kind===`spitter`?3824186:2760768,4,e.elite?.8:.42),this.fx.burst(e.x,n,e.z,e.elite?20:5,e.kind===`spitter`?10354554:e.kind===`skitter`?12124010:e.kind===`husk`?8385791:16743128,4,.4,.45),this.audio.sfx(`kill`,.5),e.falling?this.dropLoot(e,e.lastGX,e.lastGY,e.lastGZ):this.dropLoot(e,e.x,e.y,e.z),t===`hearthwheel`){let e=this.player;e.hp=Math.min(e.maxHp,e.hp+.6)}e.elite&&(this.shake(.3),this.hitstop=.05)}onEnemyFell(e){e.boss||(this.kills++,this.shoved++,this.audio.sfx(`shove`,.5),this.dropLoot(e,e.lastGX,e.lastGY,e.lastGZ),(this.shoved===1||this.shoved%15==0)&&this.overlay.text(e.lastGX,e.lastGY+1.5,e.lastGZ,this.shoved===1?`Into the Drift!`:`${this.shoved} shoved!`,`#9fe8ff`,18,1.4))}dropLoot(e,t,n,r){let i=this.player;if(this.pickups.dropXp(t,n,r,e.xp),e.elite){this.pickups.spawnItem(`chest`,t,r,n),this.ui.banner(this.build.roster===`candidate`?`A reliquary! Grab it for a relic`:`A reliquary! Grab it for a relic or evolution`,`good`,2.4);return}if(e.minion)return;let a=i.hp/i.maxHp<.5;this.rng.next()<(a?.035:.012)?this.pickups.spawnItem(`tea`,t,r,n):this.rng.next()<.004&&this.pickups.spawnItem(`bell`,t,r,n)}explode(e,t,n,r,i,a,o,s,c=`primary`,l=!1,u){this.fx.burst(e,t,n,Math.round(10+r*5),s,3+r*2,.45,.8),this.fx.ring(e,t-.2,n,.3,r,.35,s,.9),this.fx.dust(e,t-.3,n,6,3811888,r),this.audio.sfx(`explode`,.6),this.shake(.06+r*.02),this.enemies.query(e,n,r,s=>{s.emerge>.25||s.falling||Math.abs(s.y+s.def.height*.5-t)>r+1.5||this.dealDamage(s,i,o,s.x-e,s.z-n,a,!1,c,l)!==0&&u?.push(s.id)})}hurtPlayer(e,t){let n=this.player;return this.god||this.mode!==`play`||n.state===`zip`&&this.build.relics.has(`reel`)||!n.hurt(e)?!1:(this.overlay.text(n.x,n.y+2.3,n.z,`-${Math.round(e)}`,`#ff6a8a`,18,.8),this.ui.hurtFlash(),this.shake(.3),this.hurtSfxT<=0&&(this.audio.sfx(`hurt`,.9),this.hurtSfxT=.15),this.hitstop=Math.max(this.hitstop,.04),this.runStats.taken[t]=(this.runStats.taken[t]??0)+e,t===`pink shot`&&this.final.phase===`combat`&&this.final.warden&&this.final.warden.hitsTaken.volley++,this.lastHurt=t,this.checkDeath(),!0)}checkDeath(){let e=this.player;e.hp>0||![`play`,`choose`,`paused`].includes(this.mode)||(this.build.relics.has(`phoenix`)&&!this.phoenixUsed?(this.phoenixUsed=!0,this.diag.log(this.time,`phoenix`,0,this.lastHurt),e.hp=e.maxHp*.5,e.invuln=2.5,this.explode(e.x,e.y+.5,e.z,7,80,8,`surge`,new W(16751168)),this.ui.banner(`The Phoenix Wick rekindles you!`,`good`,2.4),this.audio.sfx(`relic`,1)):(e.hp=0,e.state=`dead`,this.enterTerminal(),this.mode=`dying`,this.final.onPlayerDefeated(),this.diag.log(this.time,`death`,this.level,this.lastHurt),this.endT=0,this.audio.setMood(`defeat`),this.audio.sfx(`fall`,1),this.ui.boss(null)))}collectItem(e){if(this.combatStopped)return;let t=this.player;switch(e.kind){case`tea`:{let e=Math.round(t.maxHp*.3);t.hp=Math.min(t.maxHp,t.hp+e),this.overlay.text(t.x,t.y+2.2,t.z,`+${e}`,`#8aff9a`,20),this.audio.sfx(`heal`,1),this.fx.burst(t.x,t.y+1,t.z,14,9109402,3,.6,.5,-2,2);break}case`bell`:this.pickups.vacuum(),this.audio.sfx(`bell`,1),this.fx.ring(t.x,t.y,t.z,1,20,.8,15782016,.7),this.ui.banner(`Gatherer’s chime — all embers come home`,`good`,2);break;case`chest`:this.pendingChests++,this.fx.burst(e.x,e.y+.8,e.z,30,16764762,7,.8,.7,2,4);break;case`cache`:this.rewards.pushCache(),t.hp=Math.min(t.maxHp,t.hp+20),this.fx.burst(e.x,e.y+.8,e.z,30,10477823,7,.8,.7,2,4),this.ui.banner(`Sky cache — a free kindling!`,`good`,2.2),this.shrineItem=null,this.shrineTimer=70,this.world.setShrineActive(!1),this.tutorial.did(`shrine`),this.diag.log(this.time,`cache`)}}gainXp(e){if([`play`,`choose`,`paused`].includes(this.mode))for(this.xp+=e;this.xp>=this.xpNext;){this.xp-=this.xpNext,this.level++,this.xpNext=od(this.level),this.rewards.pushLevel(this.level),this.diag.log(this.time,`level`,this.level);let e=this.player;e.state!==`dead`&&(e.hp=Math.min(e.maxHp,e.hp+e.maxHp*.08))}}updateShrine(e){if(!this.final.inRoom()&&!this.shrineItem&&(this.shrineTimer-=e,this.shrineTimer<=0)){let e=this.arena.shrine;this.shrineItem=this.pickups.spawnItem(`cache`,e.x,e.z,e.y),this.world.setShrineActive(!0),this.tutorial.has(`shrine`)||this.tutorial.shrineAppeared()}}onBossSpawn(e){this.diag.log(this.time,`boss_spawn`,this.level,e.id),this.ui.banner(e.name,`warn`,2.6),this.audio.setMood(`boss`),this.audio.sfx(`roar`,1),this.shake(.4),e.id===`warden`?this.ui.clearHint():this.tutorial.bossHint(e.id)}onBossDefeated(e){if(this.mode!==`dying`&&this.mode!==`result`){if(e.id===`warden`){if(!this.final.onWardenDefeated(e))return;this.director.bossesDefeated++,this.diag.log(this.time,`boss_down`,this.director.bossesDefeated,e.id),this.ui.boss(null),this.victory()}else!this.final.inRoom()&&e===this.director.boss&&[`play`,`choose`].includes(this.mode)&&(this.director.bossesDefeated++,this.diag.log(this.time,`boss_down`,this.director.bossesDefeated,e.id),this.shake(.8),this.hitstop=.12,this.audio.sfx(`roar`,.8),this.audio.sfx(`chest`,1),this.fx.burst(e.x,e.y+2,e.z,80,16765562,12,1.2,1.1,3,4),this.fx.ring(e.x,e.y,e.z,1,14,.9,16765562),this.pickups.dropXp(e.x,e.y,e.z,60+this.director.bossesDefeated*40),this.ui.boss(null),e.id===`crown`?(this.final.onCrownDefeated(this.time,{time:this.time,bossesDefeated:this.director.bossesDefeated,rng:this.rng.s,devices:[...this.rig.deviceIds],guns:this.build.gunViews(),relics:[...this.build.relics]}),this.ui.banner(`The Hollow Crown falls! Hold the light…`,`good`,2.6),this.audio.setMood(`build`),this.world.beaconLevel=.85):(this.ui.banner(`${e.name} falls!`,`good`,2.6),this.pickups.spawnItem(`chest`,e.x,e.z,e.y),this.audio.setMood(`build`),this.world.beaconLevel=.25+this.director.bossesDefeated*.2))}}victory(){this.enterTerminal(),this.mode=`victory`,this.endT=0,this.diag.log(this.time,`victory`,this.level),this.ui.banner(`Dawn breaks over the Drift!`,`good`,4),this.audio.setMood(`dawn`),this.audio.sfx(`relic`,1);for(let e of this.enemies.list)e.alive&&!e.boss&&(e.flash=1);this.enemyShots.clear()}updateEnding(e){if(this.mode===`victory`){this.world.dawn=Math.min(1,this.world.dawn+e*.3),this.world.beaconLevel=Math.min(1.2,this.world.beaconLevel+e*.4);let t=0;for(let n of this.enemies.list)!n.alive||n.boss||t>6||Math.random()<e*3&&(this.fx.burst(n.x,n.y+.5,n.z,6,16770976,3,.6,.5,-2,2),this.enemies.kill(n),t++);this.endT>5.5&&this.finish(!0)}else this.mode===`dying`&&this.endT>2.2&&this.finish(!1)}finish(e){if(this.mode===`result`)return;this.enterTerminal(),this.mode=`result`,this.diag.outcome=e?`victory`:`defeat`,this.diag.log(this.time,`result`,this.level,this.diag.outcome);let t=[...this.build.dealt.entries()].filter(([e])=>e in Qu).map(([e,t])=>({name:Qu[e].name,icon:Qu[e].icon,color:Qu[e].color,value:t})),n=this.loadBest(),r=!n||e&&!n.win||e===n.win&&(e?this.time<n.time:this.time>n.time);r&&this.saveBest({win:e,time:this.time,level:this.level}),this.ui.show(`hud`,!1),this.resultSnapshot=rh({win:e,time:this.time,level:this.level,kills:this.kills,shoved:this.shoved,finalReached:this.final.transferredAt!==null,finalSeconds:this.final.combatStartedAt===null?null:(this.final.endedAt??this.time)-this.final.combatStartedAt,bosses:this.director.bossesDefeated,falls:this.runStats.falls,dealt:t,best:r,guns:this.build.gunSummaries(this.procs.snapshot().dealtByKind)}),this.ui.showResult(this.resultSnapshot)}loadBest(){try{return JSON.parse(localStorage.getItem(`lamplighter.best`)??`null`)}catch{return null}}saveBest(e){try{localStorage.setItem(`lamplighter.best`,JSON.stringify(e))}catch{}}banner(e,t=`good`,n=2.2){this.ui.banner(e,t,n),t===`warn`&&this.audio.sfx(`banner`,.7)}fadeBlink(){this.ui.fade(!0),setTimeout(()=>this.ui.fade(!1),220)}render(e){dd.time.value+=e;let t=dd.time.value,n=this.player;this.hurtSfxT-=e,this.numberBudget=Math.min(6,this.numberBudget+e*40);let r=this.weapons.hasAim?Math.atan2(this.weapons.aimX-n.x,this.weapons.aimZ-n.z):null;this.rig.root.position.set(n.x,n.y,n.z),this.rig.update({dt:e,speed:Math.hypot(n.vx,n.vz),maxSpeed:n.speed,grounded:n.grounded||n.state===`mantle`,vy:n.vy,climbing:n.state===`climb`,climbRate:n.climbRate,zipping:n.state===`zip`,zipSpeed:n.zipSpeed,dashing:n.state===`dash`?Math.min(1,n.dashT/.3):0,mantling:n.state===`mantle`?Math.min(1,n.mantleT):0,moveYaw:n.facing,aimYaw:this.mode===`title`?null:r,fired:this.weapons.fired,hurt:n.hurtFlash,dead:n.dead,landImpact:n.landImpact,invuln:n.invuln>0&&n.state!==`dash`,time:t}),this.rig.updateDevices({...n,aimYaw:this.weapons.hasAim?Math.atan2(this.weapons.aimX-n.x,this.weapons.aimZ-n.z):null}),n.landImpact=0,this.weapons.fired=!1;let i=this.arena.supportAt(n.x,n.z,.2,n.y+.1);if(this.heroRing.visible=this.mode!==`title`&&i>-1e3,i>-1e3){this.heroRing.position.set(n.x,i+.05,n.z);let e=bd((n.y-i)/6,0,1);this.heroRing.scale.setScalar(1-e*.4)}this.blobs.begin(),i>-1e3&&this.blobs.add(n.x,i,n.z,.55*(1-bd((n.y-i)/10,0,.6)),.6),this.enemies.render(t);let a=this.director.boss;if(a&&!a.dead){let e=this.arena.heightAt(a.x,a.z);e>-1e3&&this.blobs.add(a.x,e,a.z,a.body.r*1.3,.55)}if(this.blobs.end(),this.shots.render(),this.enemyShots.render(t),this.pickups.render(t),this.fx.update(e),this.terrain.sync(),this.world.update(e,t,this.rig.root.position),this.ui.tick(e),this.updateCamera(e),this.overlay.markers.length=0,this.overlay.bars.length=0,this.mode===`play`||this.mode===`choose`||this.mode===`paused`){for(let e of this.pickups.items){let t=e.kind===`chest`?`#ffcf5a`:e.kind===`cache`?`#9fe0ff`:e.kind===`tea`?`#ff8a8a`:`#ffe08a`,n=e.kind===`chest`?`✦`:e.kind===`cache`?`❖`:e.kind===`tea`?`♨`:`♫`;this.overlay.markers.push({x:e.x,y:e.y+.6,z:e.z,color:t,icon:n,label:e.kind===`cache`?`Sky cache`:e.kind===`chest`?`Reliquary`:void 0})}a&&!a.dead&&a.id!==`warden`&&this.overlay.markers.push({x:a.x,y:a.y+2,z:a.z,color:`#ff4fd0`,icon:`☠`});for(let e of this.enemies.list)e.alive&&e.elite&&this.overlay.bars.push({x:e.x,y:e.y+e.def.height*e.scale+.6,z:e.z,frac:e.hp/e.maxHp,w:44,color:`#ffcf5a`})}if(this.overlay.update(e),this.overlay.draw(this.camera),this.mode===`play`||this.mode===`choose`||this.mode===`paused`||this.mode===`dying`||this.mode===`victory`){let e=this.phaseName();this.ui.hud({hp:n.hp,maxHp:n.maxHp,xp:this.xp,xpNext:this.xpNext,level:this.level,time:this.time,kills:this.kills,dashReady:n.dashCd<=0,phase:e,build:this.build,lowHp:n.hp/n.maxHp<.3&&n.state!==`dead`}),a&&!a.dead&&this.ui.boss(a.name,a.title,a.hp/a.maxHp),e!==this.lastPhase&&this.mode===`play`&&(this.lastPhase&&a===null&&this.audio.setMood(this.time>100?`build`:`calm`),this.lastPhase=e)}this.renderer.render(this.scene,this.camera)}phaseName(){if(this.mode===`victory`)return`Dawn`;if(this.final.inRoom())return`The Last Warden`;let e=this.director.boss;if(e&&!e.dead)return`Night-terror`;let t=Up[this.director.nextBoss];return t?t.at-this.time<15?`Something stirs`:[`Dusk`,`Gloaming`,`Deep night`][this.director.nextBoss]??`Night`:`Last dark`}updateCamera(e){let t=this.player,n=this.camDistance(),r=56*Math.PI/180,i,a,o;if(this.mode===`title`){let e=this.titleT*.06;i=Math.sin(e)*6,a=1,o=Math.cos(e)*6;let t=n*2.3;this.camPos.set(i+Math.sin(e)*t*.62,a+t*.58,o+Math.cos(e)*t*.62),this.camLook.set(i,a,o),this.camera.position.copy(this.camPos),this.camera.lookAt(this.camLook);return}if(this.arena.finalDomain&&[`play`,`choose`,`paused`].includes(this.mode)){this.finalDist=Rd(this.camera.fov,this.camera.aspect),this.camLook.set(kd.cx,kd.floorY+.8,kd.cz),this.camPos.set(kd.cx,this.camLook.y+Math.sin(Md)*this.finalDist,kd.cz+Math.cos(Md)*this.finalDist),this.trauma=Math.max(0,this.trauma-e*1.6);let t=this.trauma*this.trauma;this.tmpV.set((Math.random()-.5)*t*1.2,(Math.random()-.5)*t*1.2,(Math.random()-.5)*t*.6),this.camera.position.copy(this.camPos).add(this.tmpV),this.camera.lookAt(this.camLook),this.camera.updateMatrixWorld();return}let s=this.mode===`victory`?0:.28;i=t.x+t.vx*s,o=t.z+t.vz*s;let c=this.director.boss;if(c&&!c.dead&&this.mode===`play`){let n=c.x-t.x,r=c.z-t.z,i=Math.hypot(n,r);if(i<24&&i>.1){let t=Math.min(4.5,i*.3)*(r<0?1:.6);this.bossLean.x+=(n/i*t-this.bossLean.x)*Sd(2,e),this.bossLean.z+=(r/i*t-this.bossLean.z)*Sd(2,e)}}else this.bossLean.x*=1-Sd(2,e),this.bossLean.z*=1-Sd(2,e);i+=this.bossLean.x,o+=this.bossLean.z,a=t.state===`zip`?t.y:Math.max(t.y,this.arena.supportAt(t.x,t.z,.3,t.y+.1)),a<-4&&(a=-4);let l=n+(this.mode===`victory`?Math.min(1,this.endT/4)*8:0),u=Sd(this.mode===`victory`?2:7,e);this.camLook.x=xd(this.camLook.x,i,u),this.camLook.y=xd(this.camLook.y,a+.8,Sd(4,e)),this.camLook.z=xd(this.camLook.z,o,u),this.camPos.set(this.camLook.x,this.camLook.y+Math.sin(r)*l,this.camLook.z+Math.cos(r)*l),this.trauma=Math.max(0,this.trauma-e*1.6);let d=this.trauma*this.trauma;this.tmpV.set((Math.random()-.5)*d*1.2,(Math.random()-.5)*d*1.2,(Math.random()-.5)*d*.6),this.camera.position.copy(this.camPos).add(this.tmpV),this.camera.lookAt(this.camLook)}trackPerformance(e){if(this.settings.quality!==`Auto`||this.mode!==`play`||(this.frameTimes.push(e),this.frameTimes.length<90))return;let t=this.frameTimes.reduce((e,t)=>e+t,0)/this.frameTimes.length;this.frameTimes.length=0,t>.024&&this.pixelRatio>.75?(this.pixelRatio=Math.max(.75,this.pixelRatio-.25),this.diag.log(this.time,`quality`,this.pixelRatio),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight,!1)):t<.0135&&this.pixelRatio<Math.min(2,window.devicePixelRatio||1)&&(this.pixelRatio=Math.min(Math.min(2,window.devicePixelRatio||1),this.pixelRatio+.25),this.diag.log(this.time,`quality`,this.pixelRatio),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight,!1))}diagnostics(){let e=this.player;return om(this.diag,{final:this.final.snapshot(),metrics:this.progressionMetrics.snapshot(),rewards:this.rewards.items,guns:this.build.weapons.filter(e=>e.prog).map(e=>({id:e.id,slot:e.slot,picks:e.prog.picks,perks:e.prog.perks,mods:e.prog.mods,origin:e.origin,acquiredLevel:e.acquiredLevel})),mode:this.mode,simTime:this.time,level:this.level,kills:this.kills,shoved:this.shoved,falls:this.runStats.falls,bosses:this.director.bossesDefeated,hp:e.hp,maxHp:e.maxHp,weapons:this.build.weapons.map(e=>`${e.id}:${this.build.legacyLevel(e)}`),trinkets:[...this.build.trinkets].map(([e,t])=>`${e}:${t}`),relics:[...this.build.relics],dealt:Object.fromEntries(this.build.dealt),taken:this.runStats.taken,roster:this.build.roster,progression:this.build.progressionSnapshot(),choices:{accepted:this.choices.accepted,rejected:this.choices.rejected,open:this.choices.current?{token:this.choices.current.token,kind:this.choices.current.kind}:null},procs:this.procs.snapshot()},sm({renderScale:this.renderer.getPixelRatio(),quality:this.settings.quality,webgl2:this.renderer.capabilities.isWebGL2,sound:this.settings.sound,music:this.settings.music}),performance.now())}fastForward(e){let t=Math.round(e/th);for(let e=0;e<t&&(this.mode===`choose`&&this.bot.enabled&&this.drainBot(),this.mode===`play`||this.mode===`dying`||this.mode===`victory`);e++)this.step(th),this.mode===`play`&&this.afterSteps(),(this.mode===`dying`||this.mode===`victory`)&&(this.endT+=th,this.updateEnding(th))}};function rh(e){if(e&&typeof e==`object`&&!Object.isFrozen(e)){Object.freeze(e);for(let t of Object.values(e))rh(t)}return e}function ih(e){return`${Math.floor(e/60)}:${Math.floor(e%60).toString().padStart(2,`0`)}`}var ah=document.getElementById(`gl`),oh=document.getElementById(`overlay`);function sh(){let e;try{e=new nh(ah,oh)}catch(e){let t=document.getElementById(`boot`);throw t&&(t.textContent=`This browser could not start WebGL. Try a recent Chrome, Safari or Firefox.`),e}let n=new URLSearchParams(location.search);n.get(`roster`)===`legacy`&&(e.roster=`legacy`,e.resetRun());let r={game:e,loadout:t=>me(e,t),probe:(t,n=10,r=!1)=>he(e,t,n,r),finalDebug:{setBotPolicy:t=>{e.bot.policy=t},enter:()=>e.final.debugEnter(),forceDue:()=>{[`survival`,`warned`].includes(e.final.phase)&&(e.final.phase=`due`,e.final.dueAt=e.time,e.final.dueReachedAt=e.time)},snapshotBuild:()=>e.finalPreservedSnapshot(),replay:(t,n=1)=>e.debugReplayFinal(t,n)},start:()=>e.startRun(),state:()=>({mode:e.mode,devices:e.rig.deviceIds,rewards:e.rewards.items,guns:e.build.gunViews(),roster:e.build.roster,progression:e.build.progressionSnapshot(),choice:e.currentChoice(),choices:{accepted:e.choices.accepted,rejected:e.choices.rejected},procs:e.procs.snapshot(),invuln:e.player.invuln,pending:{levels:e.rewards.items.length,chests:e.pendingChests},time:e.time,level:e.level,hp:e.player.hp,maxHp:e.player.maxHp,kills:e.kills,shoved:e.shoved,enemies:e.enemies.aliveCount,boss:e.director.boss?{id:e.director.boss.id,hp:e.director.boss.hp,max:e.director.boss.maxHp,dead:e.director.boss.dead}:null,bossesDefeated:e.director.bossesDefeated,player:{x:e.player.x,y:e.player.y,z:e.player.z,state:e.player.state,grounded:e.player.grounded},weapons:e.build.weapons.map(t=>`${t.id}:${e.build.legacyLevel(t)}`),trinkets:[...e.build.trinkets.entries()].map(([e,t])=>`${e}:${t}`),relics:[...e.build.relics],falls:e.runStats.falls,taken:Object.fromEntries(Object.entries(e.runStats.taken).map(([e,t])=>[e,Math.round(t)])),final:e.final.snapshot()}),bot:(t=!0,n=1)=>{e.bot.enabled=t,e.bot.skill=n},god:(t=!0)=>{e.god=t},ff:t=>e.fastForward(t),timeScale:t=>{e.timeScale=t},give:n=>{if(!(n in Qu)||e.build.roster===`candidate`&&t(n)&&![`play`,`choose`,`paused`].includes(e.mode))return;let r=e.build.weapon(n);if(r?.prog)e.debugPicks(n,1);else{if(r)r.level=Math.min(5,r.level+1);else{if(e.build.weapons.length>=4||!t(n))return;e.build.addWeapon(n),e.diag.log(e.time,`debug_acquire`,e.level,n)}e.applyStats()}},xp:t=>e.gainXp(t),setTime:t=>{e.time=t},teleport:(t,n)=>{let r=e.arena.heightAt(t,n);e.player.x=t,e.player.z=n,e.player.y=r,e.player.vy=0,e.player.state=`normal`,e.player.lastSafe={x:t,y:r,z:n}},pick:(t,n)=>e.pick(t,n),picks:(t,n)=>e.debugPicks(t,n),choice:()=>e.currentChoice(),choose:(t,n)=>e.choose(t,n,`debug`),reroll:t=>e.reroll(t),roster:t=>{e.roster=t},peace:(t=!0)=>{e.director.enabled=!t,t&&e.enemies.clear()},h:(t,n)=>e.arena.heightAt(t,n),offers:()=>e.currentOffers(),diagnostics:()=>e.diagnostics()};window.__LL=r,n.has(`bot`)&&(r.bot(!0),e.startRun()),n.has(`autostart`)&&e.startRun()}sh();