(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(3486)}])},8045:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(6495).Z,o=i(2648).Z,r=i(1598).Z,a=i(7273).Z,s=r(i(7294)),l=o(i(5443)),c=i(2730),d=i(9309),u=i(9977);i(5086);var f=o(i(1479));let m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function g(e){return void 0!==e.default}function h(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function p(e,t,i,o,r,a,s){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===i&&a(!0),null==o?void 0:o.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,r=!1;o.current(n({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>r,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{r=!0,t.stopPropagation()}}))}(null==r?void 0:r.current)&&r.current(e)}})}let _=s.forwardRef((e,t)=>{var{imgAttributes:i,heightInt:o,widthInt:r,qualityInt:l,className:c,imgStyle:d,blurStyle:u,isLazy:f,fill:m,placeholder:g,loading:h,srcString:_,config:w,unoptimized:v,loader:b,onLoadRef:y,onLoadingCompleteRef:x,setBlurComplete:j,setShowAltText:E,onLoad:S,onError:C}=e,z=a(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return h=f?"lazy":h,s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},z,{loading:h,width:r,height:o,decoding:"async","data-nimg":m?"fill":"1",className:c,style:n({},d,u)},i,{ref:s.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(C&&(e.src=e.src),e.complete&&p(e,_,g,y,x,j,v))},[_,g,y,x,j,C,v,t]),onLoad:e=>{let t=e.currentTarget;p(t,_,g,y,x,j,v)},onError:e=>{E(!0),"blur"===g&&j(!0),C&&C(e)}})))}),w=s.forwardRef((e,t)=>{let i,o;var r,{src:p,sizes:w,unoptimized:v=!1,priority:b=!1,loading:y,className:x,quality:j,width:E,height:S,fill:C,style:z,onLoad:N,onLoadingComplete:O,placeholder:k="empty",blurDataURL:P,layout:I,objectFit:R,objectPosition:H,lazyBoundary:L,lazyRoot:A}=e,M=a(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let D=s.useContext(u.ImageConfigContext),F=s.useMemo(()=>{let e=m||D||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return n({},e,{allSizes:t,deviceSizes:i})},[D]),W=M,B=W.loader||f.default;delete W.loader;let T="__next_img_default"in B;if(T){if("custom"===F.loader)throw Error('Image with src "'.concat(p,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=B;B=t=>{let{config:i}=t,n=a(t,["config"]);return e(n)}}if(I){"fill"===I&&(C=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[I];e&&(z=n({},z,e));let t={responsive:"100vw",fill:"100vw"}[I];t&&!w&&(w=t)}let G="",q=h(E),U=h(S);if("object"==typeof(r=p)&&(g(r)||void 0!==r.src)){let e=g(p)?p.default:p;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(i=e.blurWidth,o=e.blurHeight,P=P||e.blurDataURL,G=e.src,!C){if(q||U){if(q&&!U){let t=q/e.width;U=Math.round(e.height*t)}else if(!q&&U){let t=U/e.height;q=Math.round(e.width*t)}}else q=e.width,U=e.height}}let V=!b&&("lazy"===y||void 0===y);((p="string"==typeof p?p:G).startsWith("data:")||p.startsWith("blob:"))&&(v=!0,V=!1),F.unoptimized&&(v=!0),T&&p.endsWith(".svg")&&!F.dangerouslyAllowSVG&&(v=!0);let[Z,Y]=s.useState(!1),[J,Q]=s.useState(!1),X=h(j),$=Object.assign(C?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:R,objectPosition:H}:{},J?{}:{color:"transparent"},z),K="blur"===k&&P&&!Z?{backgroundSize:$.objectFit||"cover",backgroundPosition:$.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:q,heightInt:U,blurWidth:i,blurHeight:o,blurDataURL:P,objectFit:$.objectFit}),'")')}:{},ee=function(e){let{config:t,src:i,unoptimized:n,width:o,quality:r,sizes:a,loader:s}=e;if(n)return{src:i,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,i){let{deviceSizes:n,allSizes:o}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(i);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let r=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:r,kind:"x"}}(t,o,a),d=l.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:l.map((e,n)=>"".concat(s({config:t,src:i,quality:r,width:e})," ").concat("w"===c?e:n+1).concat(c)).join(", "),src:s({config:t,src:i,quality:r,width:l[d]})}}({config:F,src:p,unoptimized:v,width:q,quality:X,sizes:w,loader:B}),et=p,ei={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:W.crossOrigin},en=s.useRef(N);s.useEffect(()=>{en.current=N},[N]);let eo=s.useRef(O);s.useEffect(()=>{eo.current=O},[O]);let er=n({isLazy:V,imgAttributes:ee,heightInt:U,widthInt:q,qualityInt:X,className:x,imgStyle:$,blurStyle:K,loading:y,config:F,fill:C,unoptimized:v,placeholder:k,loader:B,srcString:et,onLoadRef:en,onLoadingCompleteRef:eo,setBlurComplete:Y,setShowAltText:Q},W);return s.default.createElement(s.default.Fragment,null,s.default.createElement(_,Object.assign({},er,{ref:t})),b?s.default.createElement(l.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},ei))):null)});t.default=w,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2730:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:i,blurWidth:n,blurHeight:o,blurDataURL:r,objectFit:a}=e,s=n||t,l=o||i,c=r.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return s&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(s," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&o?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(r,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(r,"'/%3E%3C/svg%3E")}},1479:function(e,t){"use strict";function i(e){let{config:t,src:i,width:n,quality:o}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i.__next_img_default=!0,t.default=i},3486:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return d}});var n=i(5893),o=i(9008),r=i.n(o),a=i(5675),s=i.n(a),l=i(4265),c=i.n(l);function d(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r(),{children:[(0,n.jsx)("title",{children:"Oasse Learning Studio"}),(0,n.jsx)("meta",{name:"description",content:"Oasse Learning Studio"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsx)("main",{className:c().main,children:(0,n.jsxs)("div",{className:c().description,children:[(0,n.jsx)(s(),{src:"/banner.jpg",alt:"Oasse Logo",width:1200,height:400,className:c().banner}),(0,n.jsx)("script",{src:"https://apps.elfsight.com/p/platform.js",defer:!0}),(0,n.jsxs)("div",{className:c().info,style:{display:"flex",alignItems:"center",padding:"5px"},children:[(0,n.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/maCLnd7CSZI",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0,style:{padding:"10px"}}),(0,n.jsx)("div",{className:"elfsight-app-8cdb6430-9c70-48c0-becf-be53301f5346",style:{padding:"10px"}})]}),(0,n.jsxs)("div",{className:c().foot,children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{children:"Phone: +91 98188 45103"}),(0,n.jsx)("p",{children:"Email: oaaselearning@gmail.com"}),(0,n.jsx)("p",{style:{maxWidth:"390px"},children:"Address: Building No. 16, First Floor, Community Center, DDA Market, Panchsheel Park, New Delhi, Delhi 110017"})]}),(0,n.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.7372706107412!2d77.2114211!3d28.547615699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3a68698f841%3A0xdf22eb67e3ab418!2sOaase%20Learning%20Studio!5e0!3m2!1sen!2sin!4v1677860378969!5m2!1sen!2sin",width:400,height:250,allowfullscreen:"",loading:"lazy"})]})]})})]})}},4265:function(e){e.exports={main:"Home_main__EtNt2",foot:"Home_foot__N_f1v",banner:"Home_banner__Ehv0A",description:"Home_description__Qwq1f",code:"Home_code__aGV0U",info:"Home_info__Hcgf5",grid:"Home_grid__c_g6N",card:"Home_card__7oz7W",center:"Home_center__V0nxp",content:"Home_content___fOQz",vercelLogo:"Home_vercelLogo__lhIxO",logo:"Home_logo__80mSr",thirteen:"Home_thirteen__ocdUI",rotate:"Home_rotate__99GkW"}},9008:function(e,t,i){e.exports=i(5443)},5675:function(e,t,i){e.exports=i(8045)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);