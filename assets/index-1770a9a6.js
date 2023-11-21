var ke=Object.defineProperty;var Oe=(e,t,s)=>t in e?ke(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var X=(e,t,s)=>(Oe(e,typeof t!="symbol"?t+"":t,s),s);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function s(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(i){if(i.ep)return;i.ep=!0;const r=s(i);fetch(i.href,r)}})();function H(){}function we(e){return e()}function pe(){return Object.create(null)}function z(e){e.forEach(we)}function _e(e){return typeof e=="function"}function $e(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let K;function se(e,t){return e===t?!0:(K||(K=document.createElement("a")),K.href=t,e===K.href)}function Ce(e){return Object.keys(e).length===0}function n(e,t){e.appendChild(t)}function j(e,t,s){e.insertBefore(t,s||null)}function _(e){e.parentNode&&e.parentNode.removeChild(e)}function xe(e,t){for(let s=0;s<e.length;s+=1)e[s]&&e[s].d(t)}function d(e){return document.createElement(e)}function Se(e){return document.createTextNode(e)}function p(){return Se(" ")}function a(e,t,s){s==null?e.removeAttribute(t):e.getAttribute(t)!==s&&e.setAttribute(t,s)}function Ae(e){return Array.from(e.childNodes)}let le;function I(e){le=e}const C=[],me=[];let S=[];const ge=[],Pe=Promise.resolve();let ee=!1;function Ne(){ee||(ee=!0,Pe.then(Le))}function te(e){S.push(e)}const Z=new Set;let O=0;function Le(){if(O!==0)return;const e=le;do{try{for(;O<C.length;){const t=C[O];O++,I(t),Ie(t.$$)}}catch(t){throw C.length=0,O=0,t}for(I(null),C.length=0,O=0;me.length;)me.pop()();for(let t=0;t<S.length;t+=1){const s=S[t];Z.has(s)||(Z.add(s),s())}S.length=0}while(C.length);for(;ge.length;)ge.pop()();ee=!1,Z.clear(),I(e)}function Ie(e){if(e.fragment!==null){e.update(),z(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(te)}}function Ve(e){const t=[],s=[];S.forEach(l=>e.indexOf(l)===-1?t.push(l):s.push(l)),s.forEach(l=>l()),S=t}const Y=new Set;let qe;function je(e,t){e&&e.i&&(Y.delete(e),e.i(t))}function Be(e,t,s,l){if(e&&e.o){if(Y.has(e))return;Y.add(e),qe.c.push(()=>{Y.delete(e),l&&(s&&e.d(1),l())}),e.o(t)}else l&&l()}function R(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function De(e){e&&e.c()}function Me(e,t,s){const{fragment:l,after_update:i}=e.$$;l&&l.m(t,s),te(()=>{const r=e.$$.on_mount.map(we).filter(_e);e.$$.on_destroy?e.$$.on_destroy.push(...r):z(r),e.$$.on_mount=[]}),i.forEach(te)}function He(e,t){const s=e.$$;s.fragment!==null&&(Ve(s.after_update),z(s.on_destroy),s.fragment&&s.fragment.d(t),s.on_destroy=s.fragment=null,s.ctx=[])}function Ue(e,t){e.$$.dirty[0]===-1&&(C.push(e),Ne(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Te(e,t,s,l,i,r,u=null,y=[-1]){const g=le;I(e);const f=e.$$={fragment:null,ctx:[],props:r,update:H,not_equal:i,bound:pe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(g?g.$$.context:[])),callbacks:pe(),dirty:y,skip_bound:!1,root:t.target||g.$$.root};u&&u(f.root);let x=!1;if(f.ctx=s?s(e,t.props||{},(m,$,...b)=>{const L=b.length?b[0]:$;return f.ctx&&i(f.ctx[m],f.ctx[m]=L)&&(!f.skip_bound&&f.bound[m]&&f.bound[m](L),x&&Ue(e,m)),$}):[],f.update(),x=!0,z(f.before_update),f.fragment=l?l(f.ctx):!1,t.target){if(t.hydrate){const m=Ae(t.target);f.fragment&&f.fragment.l(m),m.forEach(_)}else f.fragment&&f.fragment.c();t.intro&&je(e.$$.fragment),Me(e,t.target,t.anchor),Le()}I(g)}class Ee{constructor(){X(this,"$$");X(this,"$$set")}$destroy(){He(this,1),this.$destroy=H}$on(t,s){if(!_e(s))return H;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(s),()=>{const i=l.indexOf(s);i!==-1&&l.splice(i,1)}}$set(t){this.$$set&&!Ce(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Fe="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Fe);function Ge(e){let t,s,l;return{c(){t=d("header"),t.innerHTML='<div class="flex flex-none gap-1 items-center"><img src="/icons/logo.svg" alt="Logo" class="w-[38px]"/> <h1 class="h5 inline-block text-pirmary">喵立翰 Miao Li-Han</h1></div> <nav class="hidden lg:flex"><ul class="flex gap-1 items-center justify-between"><li class="flex-auto"><a href="#positions" class="block py-2 px-3 text-center"><img src="/icons/person.svg" alt="to positions info" class="md:hidden text-2xl mx-auto"/> <span class="text-[10px] md:text-sm">候選人主張</span></a></li> <li class="flex-auto"><a href="#events" class="block py-2 px-3 text-center"><img src="/icons/events.svg" alt="to events info" class="md:hidden text-2xl mx-auto"/> <span class="text-[10px] md:text-sm">最新活動</span></a></li> <li class="flex-auto"><a href="#policies" class="block py-2 px-3 text-center"><img src="/icons/issue.svg" alt="to policies info" class="md:hidden text-2xl mx-auto"/> <span class="text-[10px] md:text-sm">政策議題</span></a></li> <li class="flex-auto"><a href="#donate" class="block py-2 px-3 text-center"><img src="/icons/money.svg" alt="to donate" class="md:hidden text-2xl mx-auto"/> <span class="text-[10px] md:text-sm">小額捐款</span></a></li> <li class="flex-auto"><a href="#mail" class="block py-2 px-3 text-center"><img src="/icons/mail.svg" alt="to mail" class="md:hidden text-2xl mx-auto"/> <span class="text-[10px] md:text-sm">民眾服務信箱</span></a></li></ul></nav> <ul class="hidden md:flex gap-3"><li class="w-6 cursor-not-allowed"><img src="/icons/fb.svg" alt="fb icon"/></li> <li class="w-6 cursor-not-allowed"><img src="/icons/ig.svg" alt="ig icon"/></li> <li class="w-6 cursor-not-allowed"><img src="/icons/youtube.svg" alt="youtube icon"/></li></ul>',s=p(),l=d("nav"),l.innerHTML='<ul class="flex gap-1 items-center justify-around"><li class="flex-auto"><a href="#positions" class="block py-2 px-1 text-center"><img src="/icons/person.svg" alt="to positions info" class="text-2xl mx-auto"/> <span class="text-[10px] md:text-sm">候選人主張</span></a></li> <li class="flex-auto"><a href="#events" class="block py-2 px-1 text-center"><img src="/icons/events.svg" alt="to events info" class="text-2xl mx-auto"/> <span class="text-[10px] md:text-sm">最新活動</span></a></li> <li class="flex-auto"><a href="#policies" class="block py-2 px-1 text-center"><img src="/icons/issue.svg" alt="to policies info" class="text-2xl mx-auto"/> <span class="text-[10px] md:text-sm">政策議題</span></a></li> <li class="flex-auto"><a href="#donate" class="block py-2 px-1 text-center"><img src="/icons/money.svg" alt="to donate" class="text-2xl mx-auto"/> <span class="text-[10px] md:text-sm">小額捐款</span></a></li> <li class="flex-auto"><a href="#mail" class="block py-2 px-1 text-center"><img src="/icons/mail.svg" alt="to mail" class="text-2xl mx-auto"/> <span class="text-[10px] md:text-sm"><span class="hidden">民眾</span>服務信箱</span></a></li></ul>',a(t,"class","w-full md:fixed md:top-0 md:rounded-4 bg-white flex items-center justify-between py-3 px-4"),a(l,"class","lg:hidden w-full fixed bottom-0 bg-slate-50")},m(i,r){j(i,t,r),j(i,s,r),j(i,l,r)},p:H,i:H,o:H,d(i){i&&(_(t),_(s),_(l))}}}class Ke extends Ee{constructor(t){super(),Te(this,t,null,Ge,$e,{})}}function he(e,t,s){const l=e.slice();return l[2]=t[s].image,l[3]=t[s].title,l}function ve(e,t,s){const l=e.slice();return l[2]=t[s].image,l[6]=t[s].date,l[3]=t[s].title,l[7]=t[s].content,l}function ye(e){let t,s,l,i,r,u,y,g,f,x,m;return{c(){t=d("article"),s=d("div"),l=d("img"),r=p(),u=d("div"),y=d("span"),y.textContent=`${e[6]}`,g=p(),f=d("h4"),f.textContent=`${e[3]}`,x=p(),m=d("p"),m.textContent=`${e[7]}`,se(l.src,i="/images/events/"+e[2])||a(l,"src",i),a(l,"alt",e[2]),a(l,"class","w-[109px] object-fill object-center rounded-xl"),a(s,"class","flex-none"),a(y,"class","text-slate-500"),a(f,"class","h5 line-clamp-1"),a(m,"class","line-clamp-2"),a(u,"class","flex-auto space-y-2"),a(t,"class","flex mb-6 gap-2")},m($,b){j($,t,b),n(t,s),n(s,l),n(t,r),n(t,u),n(u,y),n(u,g),n(u,f),n(u,x),n(u,m)},p:H,d($){$&&_(t)}}}function be(e){let t,s,l=e[3]+"",i,r,u,y;return{c(){t=d("li"),s=d("h3"),i=p(),r=d("img"),y=p(),a(s,"class","h4 mb-4"),se(r.src,u="/images/policies/"+e[2])||a(r,"src",u),a(r,"alt",e[2]),a(r,"class","h-[267px] rounded-3xl object-cover"),a(t,"class","flex flex-col justify-between")},m(g,f){j(g,t,f),n(t,s),s.innerHTML=l,n(t,i),n(t,r),n(t,y)},p:H,d(g){g&&_(t)}}}function Re(e){let t,s,l,i,r,u,y,g,f,x,m,$,b,L,ne,ie,M,V,ae,q,ce,J,oe,Q,B,re,T,D,de,A,fe,U,ue,F,W,P,G;t=new Ke({});let E=R(e[0].slice(1)),h=[];for(let c=0;c<E.length;c+=1)h[c]=ye(ve(e,E,c));let k=R(e[1]),v=[];for(let c=0;c<k.length;c+=1)v[c]=be(he(e,k,c));return{c(){De(t.$$.fragment),s=p(),l=d("main"),i=d("section"),i.innerHTML='<h2 class="h0 text-center leading-[1.1]"><span>台灣的明天</span> <span>喵先鋪路</span></h2> <div class="flex flex-col text-center md:flex-row justify-center items-center py-4 px-4 rouned-4"><div class="tag">2024 立委參選人</div> <div class="flex h3 gap-3 justify-center items-center py-3 px-4 rounded-2xl shadow-sm"><span class="w-10 h-10 flex justify-center items-center bg-gradient text-white rounded-full">3</span> <span class="text-pirmary">喵立翰 Miao Li-Han</span></div></div> <img src="/images/banner-man.png" alt="Miao Li-Han" class="px-4 mx-auto"/>',r=p(),u=d("ul"),u.innerHTML='<li class="shrink-0">為喵星人，護台灣！</li> <li class="shrink-0">從喵的眼中，看見台灣</li> <li class="shrink-0">喵的未來，人的希望</li>',y=p(),g=d("section"),g.innerHTML='<div class="xl:max-w-7xl mx-auto flex flex-col xl:flex-row"><div class="xl:w-1/2 bg-white rounded-t-3xl xl:rounded-tr-none xl:rounded-l-3xl p-5 px-6 space-y-6"><div class="text-center"><span class="tag">ADVOCATE</span> <h2 class="h0">候選人主張</h2></div> <h3 class="h3">我堅信 ! 藉由推動更完善的<span class="text-pirmary">貓咪福利</span>和相關政策，更是間接地投資於<span class="text-pirmary">台灣的未來</span>。</h3> <p>畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的 GDP 經濟帶來巨大效益。因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。</p></div> <img src="/images/praying-man@3x.png" alt="praying Miao Li-Han" class="xl:w-1/2 rounded-b-3xl xl:rounded-bl-none xl:rounded-r-2xl"/></div>',f=p(),x=d("section"),m=d("div"),m.innerHTML='<span class="tag">LASTEST EVENTS</span> <h2 class="h0">最新活動</h2>',$=p(),b=d("article"),L=d("img"),ie=p(),M=d("div"),V=d("span"),V.textContent=`${e[0][0].date}`,ae=p(),q=d("h4"),q.textContent=`${e[0][0].title}`,ce=p(),J=d("p"),J.textContent=`${e[0][0].content}`,oe=p();for(let c=0;c<h.length;c+=1)h[c].c();Q=p(),B=d("button"),B.innerHTML=`查看更多
      <img src="/icons/arrow-right.svg" alt="arrow right" class="ml-4 text-8"/>`,re=p(),T=d("section"),D=d("div"),D.innerHTML='<span class="tag">POLICY ISSUES</span> <h2 class="h0">政策議題</h2>',de=p(),A=d("ul");for(let c=0;c<v.length;c+=1)v[c].c();fe=p(),U=d("section"),U.innerHTML=`<div class="xl:max-w-7xl mx-auto flex flex-col md:flex-row gap-6"><div id="donate" class="bg-pirmary py-5 px-6 rounded-[32px] space-y-4 md:scroll-mt-16"><h3 class="text-white font-black text-[40px]">小額支持喵喵</h3> <p class="text-white font-semibold text-xl">您的小筆捐款，是每隻毛孩未來的大大動力！</p> <div class="flex flex-nowrap gap-2 justify-between items-center"><div class="w-1/2"><button class="btn flex items-center">小額捐款
              <img src="/icons/arrow-right.svg" alt="arrow right" class="ml-4 text-8"/></button></div> <img src="/images/donate@3x.png" alt="donate" class="w-1/2"/></div></div> <div id="mail" class="bg-dark py-5 px-6 rounded-[32px] space-y-4 md:scroll-mt-16"><h3 class="text-white font-black text-[40px]">民眾服務信箱</h3> <p class="text-white font-semibold text-xl">親愛的鄉親，每一位市民的意見都是我們社區前進的原動力</p> <div class="flex flex-nowrap gap-2 justify-between items-center"><div class="w-1/2"><button class="btn flex items-center">填寫表單
              <img src="/icons/arrow-right.svg" alt="arrow right" class="ml-4 text-8"/></button></div> <img src="/images/envelope@3x.png" alt="donate" class="w-1/2"/></div></div></div>`,ue=p(),F=d("section"),F.innerHTML='<h2 class="h0 text-center py-10 leading-[1.1]"><span>台灣的明天</span> <span>喵先鋪路</span></h2> <div class="flex h4 gap-3 justify-center items-center mb-10"><span class="w-10 h-10 flex justify-center items-center bg-gradient text-white rounded-full">3</span> <span class="text-pirmary">喵立翰 Miao Li-Han</span></div>',W=p(),P=d("footer"),P.innerHTML=`<div class="space-y-4"><div class="flex h3 gap-3 items-center"><span class="w-10 h-10 flex justify-center items-center bg-gradient text-white rounded-full">3</span> <span class="text-pirmary h3">喵立翰 Miao Li-Han</span></div> <ul class="flex gap-2"><li class="w-12 h-12 flex justify-center items-center bg-white rounded-full cursor-not-allowed"><img src="/icons/fb.svg" alt="fb" class="w-[28px]"/></li> <li class="w-12 h-12 flex justify-center items-center bg-white rounded-full cursor-not-allowed"><img src="/icons/ig.svg" alt="ig" class="w-[28px]"/></li> <li class="w-12 h-12 flex justify-center items-center bg-white rounded-full cursor-not-allowed"><img src="/icons/youtube.svg" alt="youtube" class="w-[28px]"/></li></ul> <p class="text-sm">© 2023 喵立翰 Miao Li-Han 版權所有</p></div> <article class="space-y-4"><h4 class="h4">競選總部</h4> <p>辦公室地址：喵星區，毛茸茸大道88號，喵喵大樓3樓<br/>
      電話：(02) 888-5678<br/>
      電子郵件地址：meowoffice@linmeow.tw</p></article>`,a(u,"class","flex flex-nowrap gap-6 overflow-hidden text-[40px] xl:text-[64px] font-semibold text-white bg-pirmary"),a(g,"id","positions"),a(g,"class","bg-pirmary-light py-16 px-4"),a(m,"class","text-center mb-10"),se(L.src,ne="/images/events/"+e[0][0].image)||a(L,"src",ne),a(L,"alt",e[0][0].image),a(L,"class","w-full object-fill object-center rounded-2xl"),a(V,"class","text-slate-500"),a(q,"class","h5"),a(M,"class","mt-4 space-y-2"),a(b,"class","mb-6"),a(B,"class","btn flex items-center"),a(x,"id","events"),a(x,"class","xl:max-w-7xl mx-auto py-16 px-4"),a(D,"class","text-center mb-10"),a(A,"class","xl:max-w-7xl mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-y-16 md:space-x-6"),a(T,"id","policies"),a(T,"class","bg-light py-16 px-4"),a(U,"class","bg-light py-16 px-4"),a(F,"class","bg-light py-16 px-4"),a(l,"class","pt-[32px] md:pt-[100px]"),a(P,"class","pt-16 pb-32 md:pb-16 px-4 bg-pirmary-light space-y-6")},m(c,w){Me(t,c,w),j(c,s,w),j(c,l,w),n(l,i),n(l,r),n(l,u),n(l,y),n(l,g),n(l,f),n(l,x),n(x,m),n(x,$),n(x,b),n(b,L),n(b,ie),n(b,M),n(M,V),n(M,ae),n(M,q),n(M,ce),n(M,J),n(x,oe);for(let o=0;o<h.length;o+=1)h[o]&&h[o].m(x,null);n(x,Q),n(x,B),n(l,re),n(l,T),n(T,D),n(T,de),n(T,A);for(let o=0;o<v.length;o+=1)v[o]&&v[o].m(A,null);n(l,fe),n(l,U),n(l,ue),n(l,F),j(c,W,w),j(c,P,w),G=!0},p(c,[w]){if(w&1){E=R(c[0].slice(1));let o;for(o=0;o<E.length;o+=1){const N=ve(c,E,o);h[o]?h[o].p(N,w):(h[o]=ye(N),h[o].c(),h[o].m(x,Q))}for(;o<h.length;o+=1)h[o].d(1);h.length=E.length}if(w&2){k=R(c[1]);let o;for(o=0;o<k.length;o+=1){const N=he(c,k,o);v[o]?v[o].p(N,w):(v[o]=be(N),v[o].c(),v[o].m(A,null))}for(;o<v.length;o+=1)v[o].d(1);v.length=k.length}},i(c){G||(je(t.$$.fragment,c),G=!0)},o(c){Be(t.$$.fragment,c),G=!1},d(c){c&&(_(s),_(l),_(W),_(P)),He(t,c),xe(h,c),xe(v,c)}}}function Ye(e){return[[{image:"event-pirmary@3x.png",date:"2023/12/26",title:"參與台北寵物論壇，爭取貓咪友善環境",content:"炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。"},{image:"event20231224@3x.png",date:"2023/12/24",title:"掃街模式開啟！帶著你的貓耳，來和我一起走！",content:"街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！"},{image:"event20231220@3x.png",date:"2023/12/20",title:"收容所模特兒大比拼！",content:"今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！"},{image:"event20231226@3x.png",date:"2023/12/26",title:"參與台北寵物論壇，爭取貓咪友善環境",content:"炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。"}],[{image:"policy-health@3x.png",title:"為毛孩子謀福利！<br>推動寵物醫療保障方案"},{image:"policy-heaven@3x.png",title:"打造休閒天堂！<br>推廣寵物休閒與娛樂場所"},{image:"policy-teach@3x.png",title:"推廣寵物飼養教育，讓愛更加專業"}]]}class ze extends Ee{constructor(t){super(),Te(this,t,Ye,Re,$e,{})}}new ze({target:document.getElementById("app")});
