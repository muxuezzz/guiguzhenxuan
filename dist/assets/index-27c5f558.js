import{d as R,N as L,r as b,c as W,A as G,I as H,e as c,o as y,f as N,h as e,i as n,w as t,F as h,O as K,k as A,C as I,g as z,n as p,x as X,j as Y,y as B,t as O,P as Z,L as _,B as S,Q as ee,_ as te}from"./index-167c0a10.js";const ae=["onClick"],le=R({__name:"index",setup(se){let f=L(),v=b([]),u=b(0),a=W({attrName:"",attrValueList:[],categoryId:"",categoryLevel:3}),x=b([]);G(()=>f.c3Id,()=>{v.value=[],f.c3Id&&V()});const V=async()=>{const{c1Id:r,c2Id:o,c3Id:g}=f;let l=await K(r,o,g);console.log("getAttr()"),console.log(l),l.code===200&&(v.value=l.data)},U=r=>{u.value=1,Object.assign(a,JSON.parse(JSON.stringify(r)))},w=async r=>{(await Z(r)).code==200?(_({type:"success",message:"删除成功"}),V()):_({type:"error",message:"删除失败"})},E=()=>{Object.assign(a,{attrName:"",attrValueList:[],categoryId:f.c3Id,categoryLevel:3}),S(()=>{x.value[a.attrValueList.length-1].focus()}),u.value=1},$=async()=>{(await ee(a)).code==200?(u.value=0,_({type:"success",message:a.id?"修改成功":"添加成功"}),V()):_({type:"error",message:a.id?"修改失败":"添加失败"})},j=()=>{u.value=0},D=()=>{a.attrValueList.push({valueName:"",flag:!0})},P=(r,o)=>{if(r.valueName.trim()==""){a.attrValueList.splice(o,1),_({type:"error",message:"属性值不能为空"});return}if(a.attrValueList.find(l=>{if(l!=r)return l.valueName===r.valueName})){a.attrValueList.splice(o,1),_({type:"error",message:"属性值不能重复"});return}r.flag=!1},q=(r,o)=>{r.flag=!0,S(()=>{x.value[o].focus()})};return H(()=>{L().$reset()}),(r,o)=>{const g=c("Category"),l=c("el-button"),d=c("el-table-column"),F=c("el-tag"),J=c("el-popconfirm"),C=c("el-table"),k=c("el-input"),M=c("el-form-item"),T=c("el-form"),Q=c("el-card");return y(),N(h,null,[e(g,{scene:n(u)},null,8,["scene"]),e(Q,{style:{margin:"10px 0px"}},{default:t(()=>[A(z("div",null,[e(l,{type:"primary",size:"default",icon:"Plus",disabled:!n(f).c3Id,onClick:E},{default:t(()=>[p(" 添加属性 ")]),_:1},8,["disabled"]),e(C,{border:"",style:{margin:"10px 0px"},data:n(v)},{default:t(()=>[e(d,{label:"序号",type:"index",align:"center",width:"80px"}),e(d,{label:"属性名称",width:"120px",prop:"attrName"}),e(d,{label:"属性值名称"},{default:t(({row:s,$index:m})=>[(y(!0),N(h,null,X(s.attrValueList,(i,re)=>(y(),B(F,{style:{margin:"5px"},key:i.id},{default:t(()=>[p(O(i.valueName),1)]),_:2},1024))),128))]),_:1}),e(d,{label:"操作",width:"120px"},{default:t(({row:s,$index:m})=>[Y(" 修改已有属性的按钮 "),e(l,{type:"primary",size:"small",icon:"Edit",onClick:i=>U(s)},null,8,["onClick"]),e(J,{title:`你确定删除${s.attrName}?`,width:"200px",onConfirm:i=>w(s.id)},{reference:t(()=>[e(l,{type:"primary",size:"small",icon:"Delete"})]),_:2},1032,["title","onConfirm"])]),_:1})]),_:1},8,["data"])],512),[[I,n(u)==0]]),A(z("div",null,[e(T,{inline:!0},{default:t(()=>[e(M,{label:"属性名称"},{default:t(()=>[e(k,{placeholder:"请你输入属性名称",modelValue:n(a).attrName,"onUpdate:modelValue":o[0]||(o[0]=s=>n(a).attrName=s)},null,8,["modelValue"])]),_:1})]),_:1}),e(l,{type:"primary",onClick:D,disabled:!n(a).attrName,size:"small",icon:"Plus"},{default:t(()=>[p(" 添加属性值 ")]),_:1},8,["disabled"]),e(l,{type:"primary",size:"small"},{default:t(()=>[p("取消")]),_:1}),e(C,{border:"",style:{margin:"10px 0px"},data:n(a).attrValueList},{default:t(()=>[e(d,{label:"序号",width:"80px",type:"index",align:"center"}),e(d,{label:"属性值名称"},{default:t(({row:s,$index:m})=>[s.flag?(y(),B(k,{key:0,ref:i=>n(x)[m]=i,onBlur:i=>P(s,m),size:"small",placeholder:"请你输入属性值名称",modelValue:s.valueName,"onUpdate:modelValue":i=>s.valueName=i},null,8,["onBlur","modelValue","onUpdate:modelValue"])):(y(),N("div",{key:1,onClick:i=>q(s,m)},O(s.valueName),9,ae))]),_:1}),e(d,{label:"属性值操作"},{default:t(({row:s,$index:m})=>[e(l,{type:"primary",size:"small",icon:"Delete",onClick:()=>n(a).attrValueList.splice(m,1)},null,8,["onClick"])]),_:1})]),_:1},8,["data"]),e(l,{type:"primary",size:"small",onClick:$},{default:t(()=>[p("保存")]),_:1}),e(l,{type:"primary",size:"small",onClick:j},{default:t(()=>[p("取消")]),_:1})],512),[[I,n(u)==1]])]),_:1})],64)}}}),oe=te(le,[["__file","C:/MyFile/Work/VUE/vue3_admin_template/project/src/views/product/attr/index.vue"]]);export{oe as default};
