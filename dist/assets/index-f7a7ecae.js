import{K as v,d as W,r as g,H as G,e as o,o as _,y as S,w as t,h as e,g as q,i as u,D as b,j as J,n as r,t as k,f as z,x as V,F as N,L as h,_ as O}from"./index-167c0a10.js";const Q=(i,n)=>v.get(`/admin/product/list/${i}/${n}`),X=i=>v.get("/admin/product/onSale/"+i),Y=i=>v.get("/admin/product/cancelSale/"+i),Z=i=>v.get("/admin/product/getSkuInfo/"+i),ee=i=>v.delete("/admin/product/deleteSku/"+i),te=["src"],ae=q("h4",null,"查看商品的详情",-1),le=["src"],ne=W({__name:"index",setup(i){let n=g(1),x=g(10),D=g(0),C=g([]),y=g(!1),d=g({});G(()=>{m()});const m=async(p=1)=>{n.value=p;let l=await Q(n.value,x.value);l.code==200&&(D.value=l.data.total,C.value=l.data.records)},B=()=>{m()},U=async p=>{p.isSale==1?(await Y(p.id),h({type:"success",message:"下架成功"}),m(n.value)):(await X(p.id),h({type:"success",message:"上架成功"}),m(n.value))},$=()=>{h({type:"success",message:"程序员在努力的更新中...."})},A=async p=>{y.value=!0;let l=await Z(p.id);d.value=l.data},E=async p=>{(await ee(p)).code==200?(h({type:"success",message:"删除成功"}),m(C.value.length>1?n.value:n.value-1)):h({type:"error",message:"系统数据不能删除"})};return(p,l)=>{const c=o("el-table-column"),w=o("el-button"),F=o("el-popconfirm"),j=o("el-table"),M=o("el-pagination"),s=o("el-col"),f=o("el-row"),I=o("el-tag"),H=o("el-carousel-item"),R=o("el-carousel"),T=o("el-drawer"),K=o("el-card");return _(),S(K,null,{default:t(()=>[e(j,{border:"",style:{margin:"10px 0px"},data:u(C)},{default:t(()=>[e(c,{label:"序号",type:"index",align:"center",width:"80px"}),e(c,{label:"名称","show-overflow-tooltip":"",width:"150px",prop:"skuName"}),e(c,{label:"描述","show-overflow-tooltip":"",width:"150px",prop:"skuDesc"}),e(c,{label:"图片",width:"150px"},{default:t(({row:a,$index:P})=>[q("img",{src:a.skuDefaultImg,alt:"",style:{width:"100px",height:"100px"}},null,8,te)]),_:1}),e(c,{label:"重量",width:"150px",prop:"weight"}),e(c,{label:"价格",width:"150px",prop:"price"}),e(c,{label:"操作",width:"250px",fixed:"right"},{default:t(({row:a,$index:P})=>[e(w,{type:"primary",size:"small",icon:a.isSale==1?"Bottom":"Top",onClick:L=>U(a)},null,8,["icon","onClick"]),e(w,{type:"primary",size:"small",icon:"Edit",onClick:$}),e(w,{type:"primary",size:"small",icon:"InfoFilled",onClick:L=>A(a)},null,8,["onClick"]),e(F,{title:`你确定要删除${a.skuName}?`,width:"200px",onConfirm:L=>E(a.id)},{reference:t(()=>[e(w,{type:"primary",size:"small",icon:"Delete"})]),_:2},1032,["title","onConfirm"])]),_:1})]),_:1},8,["data"]),e(M,{"current-page":u(n),"onUpdate:currentPage":l[0]||(l[0]=a=>b(n)?n.value=a:n=a),"page-size":u(x),"onUpdate:pageSize":l[1]||(l[1]=a=>b(x)?x.value=a:x=a),"page-sizes":[10,20,30,40],background:!0,layout:"prev, pager, next, jumper,->,sizes,total",total:u(D),onCurrentChange:m,onSizeChange:B},null,8,["current-page","page-size","total"]),J(" 抽屉组件:展示商品详情 "),e(T,{modelValue:u(y),"onUpdate:modelValue":l[2]||(l[2]=a=>b(y)?y.value=a:y=a)},{header:t(()=>[ae]),default:t(()=>[e(f,{style:{margin:"10px 0px"}},{default:t(()=>[e(s,{span:6},{default:t(()=>[r("名称")]),_:1}),e(s,{span:18},{default:t(()=>[r(k(u(d).skuName),1)]),_:1})]),_:1}),e(f,{style:{margin:"10px 0px"}},{default:t(()=>[e(s,{span:6},{default:t(()=>[r("描述")]),_:1}),e(s,{span:18},{default:t(()=>[r(k(u(d).skuDesc),1)]),_:1})]),_:1}),e(f,{style:{margin:"10px 0px"}},{default:t(()=>[e(s,{span:6},{default:t(()=>[r("价格")]),_:1}),e(s,{span:18},{default:t(()=>[r(k(u(d).price),1)]),_:1})]),_:1}),e(f,{style:{margin:"10px 0px"}},{default:t(()=>[e(s,{span:6},{default:t(()=>[r("平台属性")]),_:1}),e(s,{span:18},{default:t(()=>[(_(!0),z(N,null,V(u(d).skuAttrValueList,a=>(_(),S(I,{style:{margin:"5px"},key:a.id},{default:t(()=>[r(k(a.valueName),1)]),_:2},1024))),128))]),_:1})]),_:1}),e(f,{style:{margin:"10px 0px"}},{default:t(()=>[e(s,{span:6},{default:t(()=>[r("销售属性")]),_:1}),e(s,{span:18},{default:t(()=>[(_(!0),z(N,null,V(u(d).skuSaleAttrValueList,a=>(_(),S(I,{style:{margin:"5px"},key:a.id},{default:t(()=>[r(k(a.saleAttrValueName),1)]),_:2},1024))),128))]),_:1})]),_:1}),e(f,{style:{margin:"10px 0px"}},{default:t(()=>[e(s,{span:6},{default:t(()=>[r("商品图片")]),_:1}),e(s,{span:18},{default:t(()=>[e(R,{interval:4e3,type:"card",height:"200px"},{default:t(()=>[(_(!0),z(N,null,V(u(d).skuImageList,a=>(_(),S(H,{key:a.id},{default:t(()=>[q("img",{src:a.imgUrl,alt:"",style:{width:"100%",height:"100%"}},null,8,le)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}}}),oe=O(ne,[["__file","C:/MyFile/Work/VUE/vue3_admin_template/project/src/views/product/sku/index.vue"]]);export{oe as default};
