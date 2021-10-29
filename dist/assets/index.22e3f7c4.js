var q=Object.defineProperty,Y=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var R=(e,t,r)=>t in e?q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,h=(e,t)=>{for(var r in t||(t={}))S.call(t,r)&&R(e,r,t[r]);if(E)for(var r of E(t))I.call(t,r)&&R(e,r,t[r]);return e},C=(e,t)=>Y(e,K(t));var B=(e,t)=>{var r={};for(var i in e)S.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(e!=null&&E)for(var i of E(e))t.indexOf(i)<0&&I.call(e,i)&&(r[i]=e[i]);return r};import{s as l,j as u,r as s,A as z,I as A,a as o,L as J,h as Q,b as v,F as U,B as X,c as W,T as _,N as H,d as u4,u as e4,S as Z,R as k,e as t4,f as o4,g as r4,i as n4}from"./vendor.1510469d.js";const i4=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerpolicy&&(a.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?a.credentials="include":n.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}};i4();var a4="/deploy-gravity/assets/background.4161df45.png",l4="/deploy-gravity/assets/logo.a3b43e06.png";const d4=l.div`
  button {
    width: 100%;
    min-height: 50px;
    font-size: 22px;
    color: var(--mainTextColor);
    border: 1px solid var(--buttonBorderColor);
    border-radius: var(--buttonBorderRadius);
    background: transparent;
    transition: all 0.25s;
    cursor: pointer;
  }
  
  button:hover {
    background: var(--accentColor);
    border: 1px solid transparent;
  }
`,s4=r=>{var i=r,{children:e}=i,t=B(i,["children"]);return u(d4,{children:u("button",C(h({},t),{children:e}))})},{Option:p4}=z,c4=l.div`
  .ant-select {
    color: var(--white);
    width: 100%;
    background: transparent;
    
    &.form-select {
      .ant-select-arrow {
        top: 50%;
        transform: translateY(-50%);
      }
    }
    
    .ant-select-dropdown {
      color: white;
      background: #363636;
      box-shadow: none;
      
      .ant-select-item {
        color: var(--white);
        text-align: left;

        &-option-active,
        &-option-selected {
          background: #474746;
          border-radius: 4px;
        }
      }
    }
    
    .ant-select-selector {
      height: 42px;
      border: 1px solid var(--inputColor);
      border-radius: 5px;
      background: transparent;
      
      &:hover {
        border: 1px solid var(--white);
      }

      .ant-select-selection-item,
      .ant-select-selection-placeholder {
        display: flex;
        align-items: center;
      }
      
      .ant-select-selection-placeholder {
        color: var(--inputColor);
      }
    }
  }
  
  .ant-select-focused {
    .ant-select-selector {
      border: 1px solid var(--white)!important;
      outline: none!important;
    }
  }
`,p=e=>{const t=s.exports.useRef(null),[r,i]=s.exports.useState(null),n=r?u("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"7",viewBox:"0 0 10 7",fill:"none",children:u("path",{d:"M4.6038 0.514682C4.80395 0.254678 5.19605 0.254679 5.3962 0.514683L9.57646 5.945C9.82956 6.27379 9.59518 6.75 9.18026 6.75L0.819738 6.75C0.404818 6.75 0.170437 6.27379 0.423535 5.945L4.6038 0.514682Z",fill:"#F2F2F2"})}):u("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"7",viewBox:"0 0 10 7",fill:"none",children:u("path",{d:"M5.3962 6.48532C5.19605 6.74532 4.80395 6.74532 4.6038 6.48532L0.423536 1.055C0.170437 0.726213 0.404819 0.250001 0.819739 0.250001L9.18026 0.250001C9.59518 0.250001 9.82956 0.726214 9.57647 1.055L5.3962 6.48532Z",fill:"#F2F2F2"})});return u(c4,{ref:t,children:u(z,C(h({},e),{getPopupContainer:a=>document.querySelector(".ant-select")||document.body,suffixIcon:n,onDropdownVisibleChange:a=>{i(a)}}))})};p.Option=p4;const h4=l.div`
  .ant-input-affix-wrapper-focused {
    border: 1px solid var(--white);
    box-shadow: none;
  }
  
  .ant-input-password {
    height: 42px;
    border: 1px solid var(--inputColor);
    border-radius: 5px;
    background: transparent;
    
    &:hover {
      border: 1px solid var(--white);
    }

    input {
      font-size: 22px;
      background: inherit;
      margin-top: 0px!important;
      color: var(--white);
    }
    
    svg {
      color: var(--white);
    }
  }
`,g4=e=>u(h4,{children:u(A.Password,h({},e))}),x4=l.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-image: url(${a4});
`,f4=l.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  width: 420px;
  
  input {
    width: 100%;
    margin-top: 25px;
  }
  
  button {
    margin-top: 50px
  }
`,m4=({})=>o(x4,{children:[u("img",{src:l4,alt:"logo.png"}),o(f4,{children:[o(p,{style:{fontSize:22},placeholder:"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F",children:[u(p.Option,{value:"jack",children:"\u0410\u043D\u0442\u043E\u043D"}),u(p.Option,{value:"lucy",children:"\u0421\u0442\u0435\u043F\u0430\u043D"})]}),u(g4,{style:{marginTop:25},placeholder:"\u041F\u0430\u0440\u043E\u043B\u044C"}),u(J,{to:"/panel",children:u(s4,{children:"\u0412\u043E\u0439\u0442\u0438"})})]})]}),C4=()=>u("svg",{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",viewBox:"0 0 48 48",fill:"none",children:u("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.504074 23.0209C-0.168025 23.7 -0.168025 24.801 0.504074 25.4802C1.17617 26.1593 2.26586 26.1593 2.93796 25.4802L24 4.19827L45.062 25.4802C45.7341 26.1593 46.8238 26.1593 47.4959 25.4802C48.168 24.801 48.168 23.7 47.4959 23.0209L25.2169 0.509335C24.5448 -0.169779 23.4552 -0.169778 22.7831 0.509335L0.504074 23.0209ZM8.48041 26.2134C8.48041 25.4451 7.86399 24.8223 7.1036 24.8223C6.34321 24.8223 5.72679 25.4451 5.72679 26.2134V46.6088C5.72679 47.3771 6.34321 48 7.1036 48H18.5416C19.302 48 19.9184 47.3771 19.9184 46.6088V33.0434H27.9299V46.6088C27.9299 47.3771 28.5464 48 29.3068 48H40.7448C41.5051 48 42.1216 47.3771 42.1216 46.6088V26.2134C42.1216 25.4451 41.5051 24.8223 40.7448 24.8223C39.9844 24.8223 39.3679 25.4451 39.3679 26.2134V45.2176H30.6836V31.6522C30.6836 30.8839 30.0672 30.261 29.3068 30.261H18.5416C17.7812 30.261 17.1648 30.8839 17.1648 31.6522V45.2176H8.48041V26.2134Z",fill:"#F2F2F2"})}),b4=()=>u("svg",{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"49",viewBox:"0 0 48 49",fill:"none",children:u("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.9872 2.9043C17.9872 1.3866 19.2476 0.15625 20.8025 0.15625H27.3762C28.9311 0.15625 30.1915 1.3866 30.1915 2.9043V40.4812C30.1915 41.2401 29.5613 41.8552 28.7839 41.8552C28.0065 41.8552 27.3762 41.2401 27.3762 40.4812L27.3762 2.9043L20.8025 2.9043V40.4812C20.8025 41.2401 20.1722 41.8552 19.3948 41.8552C18.6174 41.8552 17.9872 41.2401 17.9872 40.4812V2.9043ZM33.2439 13.2149C33.2439 11.6972 34.5044 10.4668 36.0592 10.4668H42.633C44.1878 10.4668 45.4482 11.6972 45.4482 13.2149V40.4813C45.4482 41.2401 44.818 41.8553 44.0406 41.8553C43.2632 41.8553 42.633 41.2401 42.633 40.4813L42.633 13.2149L36.0592 13.2149V40.4813C36.0592 41.2401 35.429 41.8553 34.6515 41.8553C33.8741 41.8553 33.2439 41.2401 33.2439 40.4813V13.2149ZM2.92758 20.0883C2.92758 18.5706 4.18801 17.3403 5.74283 17.3403H12.3166C13.8714 17.3403 15.1319 18.5706 15.1319 20.0883V40.481C15.1319 41.2398 14.5017 41.855 13.7242 41.855C12.9468 41.855 12.3166 41.2398 12.3166 40.481L12.3166 20.0883H5.74283V40.481C5.74283 41.2398 5.11262 41.855 4.33521 41.855C3.5578 41.855 2.92758 41.2398 2.92758 40.481V20.0883ZM0 46.7822C0 46.0234 0.630215 45.4082 1.40762 45.4082H46.5924C47.3698 45.4082 48 46.0234 48 46.7822C48 47.5411 47.3698 48.1562 46.5924 48.1562H1.40762C0.630215 48.1562 0 47.5411 0 46.7822Z",fill:"#F2F2F2"})}),L=()=>u("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:u("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.5391 3.93102C10.8859 1.27783 6.58422 1.27783 3.93102 3.93102C1.27783 6.58422 1.27783 10.8859 3.93102 13.5391C6.58422 16.1923 10.8859 16.1923 13.5391 13.5391C16.1923 10.8859 16.1923 6.58422 13.5391 3.93102ZM2.55844 2.55844C5.9697 -0.852814 11.5004 -0.852814 14.9117 2.55844C18.0913 5.73807 18.3072 10.7591 15.5594 14.1888C15.5725 14.2006 15.5854 14.2128 15.598 14.2254L19.7157 18.3431C20.0948 18.7222 20.0948 19.3367 19.7157 19.7157C19.3367 20.0948 18.7222 20.0948 18.3431 19.7157L14.2254 15.598C14.2128 15.5854 14.2006 15.5725 14.1888 15.5594C10.7591 18.3072 5.73807 18.0913 2.55844 14.9117C-0.852814 11.5004 -0.852814 5.9697 2.55844 2.55844Z",fill:"#F2F2F2",fillOpacity:"0.5"})}),v4=({filled:e})=>e?u("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"26",viewBox:"0 0 20 26",fill:"none",children:u("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.42067 2.09911C7.44551 0.93557 8.39648 0 9.56598 0C10.7355 0 11.6864 0.935589 11.7113 2.09913C13.8345 2.53375 15.1693 3.61644 15.9804 4.87093C17.0061 6.45728 17.1345 8.22529 17.1345 9.0219V16.0529C17.1345 16.2393 17.2176 16.4159 17.3611 16.5348L18.4483 17.4351C19.8027 18.5567 19.0096 20.7579 17.2511 20.7579H9.56595H1.88082C0.122319 20.7579 -0.670791 18.5567 0.683579 17.4351L1.77076 16.5348C1.9143 16.4159 1.99738 16.2393 1.99738 16.0529V9.0219C1.99738 8.22529 2.12577 6.45728 3.15147 4.87093C3.96261 3.61643 5.29744 2.53372 7.42067 2.09911ZM9.56572 22.2551C9.56572 22.2551 9.56584 22.2552 9.56588 22.3554L9.56594 22.8808L9.56604 22.3044C9.56608 22.2551 9.56572 22.2551 9.56572 22.2551ZM9.56572 22.2551L9.56868 22.2552L9.57364 22.2552L9.59003 22.2553C9.60376 22.2554 9.62302 22.2557 9.64715 22.2563C9.69536 22.2574 9.76336 22.2595 9.84597 22.2638C10.0102 22.2722 10.2369 22.2891 10.4832 22.3235C10.7268 22.3575 11.0053 22.4108 11.2673 22.4967C11.5173 22.5787 11.8163 22.7105 12.0429 22.9383C12.3434 23.2405 12.407 23.6447 12.3621 23.9838C12.3167 24.3259 12.1586 24.6632 11.9277 24.9535C11.4575 25.5445 10.6422 26 9.56595 26C8.48975 26 7.67441 25.5445 7.2042 24.9535C6.97327 24.6632 6.81519 24.3259 6.76983 23.9838C6.72486 23.6447 6.78849 23.2405 7.08901 22.9383C7.31555 22.7105 7.61459 22.5787 7.86463 22.4967C8.12663 22.4108 8.40509 22.3575 8.64873 22.3235C8.89496 22.2891 9.12166 22.2722 9.28592 22.2638C9.36853 22.2595 9.43653 22.2574 9.48475 22.2563L9.52035 22.2556L9.54186 22.2553L9.55826 22.2552L9.56322 22.2552L9.56572 22.2551Z",fill:"#FFA724"})}):u(j,{}),w4=()=>u("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",children:u("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.2134 21.2018C20.4867 21.4751 20.9299 21.4751 21.2032 21.2018C21.4765 20.9285 21.4765 20.4853 21.2032 20.212L11.9489 10.9577L21.2018 1.70478C21.4752 1.43146 21.4751 0.988308 21.2018 0.714982C20.9285 0.441657 20.4853 0.441656 20.212 0.714982L10.9591 9.96792L1.19616 0.204994C0.922834 -0.0683314 0.479685 -0.0683313 0.20636 0.204994C-0.0669664 0.47832 -0.0669667 0.921469 0.206359 1.19479L9.96929 10.9577L0.204994 20.722C-0.0683315 20.9953 -0.0683313 21.4385 0.204994 21.7118C0.47832 21.9851 0.921469 21.9851 1.19479 21.7118L10.9591 11.9475L20.2134 21.2018Z",fill:"#F2F2F2"})}),j=()=>u("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"26",viewBox:"0 0 20 26",fill:"none",children:u("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.42067 2.09911C7.44551 0.93557 8.39648 0 9.56598 0C10.7355 0 11.6864 0.935589 11.7113 2.09913C13.8345 2.53375 15.1693 3.61644 15.9804 4.87093C17.0061 6.45728 17.1345 8.22529 17.1345 9.0219V16.0529C17.1345 16.2393 17.2176 16.4159 17.3611 16.5348L18.4483 17.4351C19.8027 18.5567 19.0096 20.7579 17.2511 20.7579H9.56595V19.5065H17.2511C17.8372 19.5065 18.1016 18.7728 17.6502 18.3989L16.563 17.4986C16.1324 17.142 15.8831 16.612 15.8831 16.0529V9.0219C15.8831 8.32243 15.7636 6.84025 14.9296 5.55041C14.1258 4.30736 12.5979 3.14719 9.56595 3.14719L9.56598 2.14581L9.56594 3.14719C6.53402 3.14719 5.00605 4.30736 4.20232 5.55041C3.36833 6.84025 3.24876 8.32243 3.24876 9.0219V16.0529C3.24876 16.612 2.99953 17.142 2.56892 17.4986L1.48174 18.3989C1.03028 18.7728 1.29465 19.5065 1.88082 19.5065H9.56594V20.7579H1.88082C0.122319 20.7579 -0.670791 18.5567 0.683579 17.4351L1.77076 16.5348C1.9143 16.4159 1.99738 16.2393 1.99738 16.0529V9.0219C1.99738 8.22529 2.12577 6.45728 3.15147 4.87093C3.96261 3.61643 5.29744 2.53372 7.42067 2.09911ZM9.56572 22.2551C9.56578 22.2551 9.56584 22.2552 9.56588 22.3554L9.56594 22.8808L9.56604 22.3044C9.56608 22.2551 9.56612 22.2551 9.56617 22.2551L9.56868 22.2552L9.57364 22.2552L9.59003 22.2553C9.60376 22.2554 9.62302 22.2557 9.64715 22.2563C9.69536 22.2574 9.76336 22.2595 9.84597 22.2638C10.0102 22.2722 10.2369 22.2891 10.4832 22.3235C10.7268 22.3575 11.0053 22.4108 11.2673 22.4967C11.5173 22.5787 11.8163 22.7105 12.0429 22.9383C12.3434 23.2405 12.407 23.6447 12.3621 23.9838C12.3167 24.3259 12.1586 24.6632 11.9277 24.9535C11.4575 25.5445 10.6422 26 9.56595 26V24.7486C10.2751 24.7486 10.7243 24.456 10.9484 24.1744C11.0646 24.0283 11.1111 23.8981 11.1215 23.8194C11.1228 23.8102 11.1235 23.8024 11.1238 23.7959C11.083 23.7685 11.0061 23.728 10.8774 23.6858C10.7116 23.6314 10.5128 23.5912 10.3101 23.5629C10.11 23.5349 9.92134 23.5207 9.78185 23.5135C9.71259 23.5099 9.65661 23.5082 9.61882 23.5073C9.59994 23.5069 9.58568 23.5067 9.57665 23.5066L9.56712 23.5065L9.56612 23.5065H9.56577L9.56477 23.5065L9.55525 23.5066C9.54621 23.5067 9.53195 23.5069 9.51308 23.5073C9.47528 23.5082 9.4193 23.5099 9.35004 23.5135C9.21055 23.5207 9.02192 23.5349 8.82182 23.5629C8.61913 23.5912 8.42027 23.6314 8.25454 23.6858C8.12584 23.728 8.04886 23.7685 8.00805 23.7959C8.00823 23.7989 8.00848 23.8022 8.00881 23.8058C8.0092 23.8099 8.0097 23.8144 8.01036 23.8194C8.02079 23.8981 8.06728 24.0283 8.18349 24.1744C8.40756 24.456 8.85683 24.7486 9.56594 24.7486V26C8.48974 26 7.67441 25.5445 7.2042 24.9535C6.97327 24.6632 6.81519 24.3259 6.76983 23.9838C6.72486 23.6447 6.78849 23.2405 7.08901 22.9383C7.31555 22.7105 7.61459 22.5787 7.86463 22.4967C8.12663 22.4108 8.40509 22.3575 8.64873 22.3235C8.89496 22.2891 9.12166 22.2722 9.28592 22.2638C9.36853 22.2595 9.43653 22.2574 9.48475 22.2563L9.52035 22.2556L9.54186 22.2553L9.55826 22.2552L9.56322 22.2552L9.56572 22.2551Z",fill:"#F2F2F2"})}),y4=()=>o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"23",height:"23",viewBox:"0 0 23 23",fill:"none",children:[u("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0.5 3C0.5 1.61929 1.61929 0.5 3 0.5H16C17.3807 0.5 18.5 1.61929 18.5 3V3.86364C18.5 4.13978 18.2761 4.36364 18 4.36364C17.7239 4.36364 17.5 4.13978 17.5 3.86364V3C17.5 2.17157 16.8284 1.5 16 1.5H3C2.17157 1.5 1.5 2.17157 1.5 3V20C1.5 20.8284 2.17157 21.5 3 21.5H16C16.8284 21.5 17.5 20.8284 17.5 20V19.1364C17.5 18.8602 17.7239 18.6364 18 18.6364C18.2761 18.6364 18.5 18.8602 18.5 19.1364V20C18.5 21.3807 17.3807 22.5 16 22.5H3C1.61929 22.5 0.5 21.3807 0.5 20V3Z",fill:"white"}),u("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M14.3617 15.6634C14.171 15.8632 13.8545 15.8705 13.6548 15.6799L9.65476 11.8617C9.55592 11.7673 9.5 11.6366 9.5 11.5C9.5 11.3634 9.55592 11.2327 9.65476 11.1383L13.6548 7.32013C13.8545 7.12946 14.171 7.13682 14.3617 7.33657C14.5523 7.53632 14.545 7.85282 14.3452 8.04349L11.2479 11L22 11C22.2761 11 22.5 11.2239 22.5 11.5C22.5 11.7761 22.2761 12 22 12L11.2479 12L14.3452 14.9565C14.545 15.1472 14.5523 15.4637 14.3617 15.6634Z",fill:"white"})]}),E4=l.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  color: var(--white);
  font-size: 28px;
  
  .header-info {
    display: flex;
  }
  .icon-bell-wrapper {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`,k4=({onBellClick:e,onLogOut:t,notifications:r})=>{const[i,n]=s.exports.useState(`${new Date().getHours()}:${new Date().getMinutes()}`);s.exports.useEffect(()=>{const c=setInterval(()=>{n(`${new Date().getHours()}:${new Date().getMinutes()}`)},1e3);return()=>clearInterval(c)});const a=()=>{t==null||t()};return o(E4,{children:[o("span",{className:"header-info",children:[u("span",{children:i}),u("span",{children:Q().format("D MMMM")}),u("span",{className:"icon-bell-wrapper",onClick:c=>{e==null||e()},children:u(v4,{filled:r})})]}),u("span",{style:{cursor:"pointer",margin:0},onClick:a,children:u(y4,{})})]})},F4=l.div`
    .ant-modal-mask {
      backdrop-filter: blur(2px);
    }
  
    .general-modal {
      
      .ant-modal-content {
        width: 490px;
        border-radius: var(--modalBorderRadius);
        background: var(--modalBg)!important;
        box-shadow: none;
        
        .ant-modal-body {
          padding: 50px;
          font-size: 28px;
          text-align: center;
          color: var(--white);
        }
        
        .ant-modal-footer {
          padding: 0 50px 40px 50px;
          border: 0;
        }
      }
    
      .ant-modal-close-x {
        display: none;
      }
    }
`,M=e=>{const t=s.exports.useRef(null);return u(F4,{ref:t,children:u(v,C(h({},e),{wrapClassName:"general-modal",closeIcon:u(U,{}),maskClosable:!1,getContainer:t==null?void 0:t.current}))})},D4=l.div`
    .ant-btn {
      border: 1px solid var(--white);
      border-radius: var(--buttonBorderRadius);
      font-size: 22px;
      color: var(--white);
      background: var(--buttonBg);
      
      &:hover {
        border: 1px solid var(--accentColor);
        background: var(--accentColor)!important;
      }
    }

  .ant-btn-primary {
    border: 1px solid var(--buttonAccentColor);
    letter-spacing: 1px;
    color: var(--buttonAccentColor);
    background: var(--buttonBg);
    
    &:hover {
      color: white;
      background: var(--accentColor);
    }
  }

  .ant-btn-ghost {
    display: flex;
    align-items: center;
    border-radius: 14px;
    border: 1px solid #5076D6;
    background: transparent;

    &:hover {
      background: rgba(80, 118, 214, 0.15)!important;
    }
  }
`,d=e=>u(D4,{children:u(X,h({},e))}),N=({className:e,carDirection:t="toLeft"})=>t==="toLeft"?o("svg",{width:"13%",viewBox:"0 0 291 151",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:e,children:[u("path",{d:"M5.7428 47.5135V87.4505H95.6129V5H36.1305L5.7428 47.5135Z",stroke:"#F2F2F2",strokeWidth:"10"}),u("path",{d:"M113.07 17.2387V87.4505H285.698V59.7523L243.026 17.2387H113.07Z",stroke:"#F2F2F2",strokeWidth:"10"}),u("path",{d:"M69.2768 124.811C69.2768 136.262 59.9541 145.577 48.4149 145.577C36.8756 145.577 27.553 136.262 27.553 124.811C27.553 113.36 36.8756 104.045 48.4149 104.045C59.9541 104.045 69.2768 113.36 69.2768 124.811Z",stroke:"#F2F2F2",strokeWidth:"10"}),u("path",{d:"M259.362 124.811C259.362 136.262 250.039 145.577 238.5 145.577C226.961 145.577 217.638 136.262 217.638 124.811C217.638 113.36 226.961 104.045 238.5 104.045C250.039 104.045 259.362 113.36 259.362 124.811Z",stroke:"#F2F2F2",strokeWidth:"10"}),u("path",{d:"M198.586 124.811C198.586 136.262 189.264 145.577 177.724 145.577C166.185 145.577 156.863 136.262 156.863 124.811C156.863 113.36 166.185 104.045 177.724 104.045C189.264 104.045 198.586 113.36 198.586 124.811Z",stroke:"#F2F2F2",strokeWidth:"10"}),u("path",{d:"M36.1305 108.063L24.4927 87.4504H237.853V106.131",stroke:"#F2F2F2",strokeWidth:"10"}),u("path",{d:"M177.724 106.131V87.4504",stroke:"#F2F2F2",strokeWidth:"10"}),u("path",{d:"M195.828 124.811H219.103",stroke:"#F2F2F2",strokeWidth:"10"}),u("path",{d:"M67.1648 124.811H158.328",stroke:"#F2F2F2",strokeWidth:"10"})]}):o("svg",{width:"13%",viewBox:"0 0 291 151",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:e,style:{transform:"rotateY(180deg)"},children:[u("path",{d:"M5.7428 47.5135V87.4505H95.6129V5H36.1305L5.7428 47.5135Z",stroke:"#F2F2F2",strokeWidth:"10"}),u("path",{d:"M113.07 17.2387V87.4505H285.698V59.7523L243.026 17.2387H113.07Z",stroke:"#F2F2F2",strokeWidth:"10"}),u("path",{d:"M69.2768 124.811C69.2768 136.262 59.9541 145.577 48.4149 145.577C36.8756 145.577 27.553 136.262 27.553 124.811C27.553 113.36 36.8756 104.045 48.4149 104.045C59.9541 104.045 69.2768 113.36 69.2768 124.811Z",stroke:"#F2F2F2",strokeWidth:"10"}),u("path",{d:"M259.362 124.811C259.362 136.262 250.039 145.577 238.5 145.577C226.961 145.577 217.638 136.262 217.638 124.811C217.638 113.36 226.961 104.045 238.5 104.045C250.039 104.045 259.362 113.36 259.362 124.811Z",stroke:"#F2F2F2",strokeWidth:"10"}),u("path",{d:"M198.586 124.811C198.586 136.262 189.264 145.577 177.724 145.577C166.185 145.577 156.863 136.262 156.863 124.811C156.863 113.36 166.185 104.045 177.724 104.045C189.264 104.045 198.586 113.36 198.586 124.811Z",stroke:"#F2F2F2",strokeWidth:"10"}),u("path",{d:"M36.1305 108.063L24.4927 87.4504H237.853V106.131",stroke:"#F2F2F2",strokeWidth:"10"}),u("path",{d:"M177.724 106.131V87.4504",stroke:"#F2F2F2",strokeWidth:"10"}),u("path",{d:"M195.828 124.811H219.103",stroke:"#F2F2F2",strokeWidth:"10"}),u("path",{d:"M67.1648 124.811H158.328",stroke:"#F2F2F2",strokeWidth:"10"})]}),B4=l.div`
  .road-body {
    position: relative;
    top: 10px;
    svg {
      height: fit-content;
    }
    .left-barrier {
      width: 1%;
      height: 100%;
      background: #797979;
      border-radius: 10px 10px 0 0;
      position: absolute;
      bottom: 20%;
      left: 34.5%;
      .left-barrier-relative {
        width: 100%;
        height: 100%;
        position: relative;
        .left-barrier-active-block {
          position: absolute;
          top: 5%;
          left: 20%;
          width: 300%;
          height: 20%;
          background: var(--white);
          border-radius: 10px;
          transition: 0.5s;
        }
        .opened-left {
          transform: rotate(-90deg);
          left: -99%;
          top: -25%;
        }
      }
    }
    .right-barrier {
      width: 1%;
      height: 100%;
      background: #797979;
      border-radius: 10px 10px 0 0;
      position: absolute;
      bottom: 20%;
      right: 33.5%;
      .right-barrier-relative {
        width: 100%;
        height: 100%;
        position: relative;
        .right-barrier-active-block {
          position: absolute;
          top: 5%;
          right: 20%;
          width: 300%;
          height: 20%;
          background: var(--white);
          border-radius: 10px;
          transition: 0.5s;
        }
        .opened-right {
          transform: rotate(90deg);
          right: -99%;
          top: -25%;
        }
      }
    }
    .car-center {
      position: absolute;
      bottom: 99%;
      left: 44%;
    }
    .car-left {
      position: absolute;
      bottom: 20%;
      left: 15%;
    }
    .car-right {
      position: absolute;
      bottom: 20%;
      right: 15%;
    }
  }
  .road-footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    padding: 0px 55px;
    .road-footer-left {
      width: 34%;
      display: flex;
      justify-content: space-between;
    }
    .road-footer-right {
      width: 58%;
      display: flex;
      justify-content: center;
    }
  }
`,O=({onModeChange:e,onOpen:t,openLeft:r,openRight:i,onClose:n,carPosition:a="right",carDirection:c="toLeft"})=>{const[x,g]=s.exports.useState("auto"),[f,F]=s.exports.useState("allClosed"),D=()=>{g(y=>(e(y==="auto"?"manual":"auto"),y==="auto"?"manual":"auto"))},w=y=>{t==null||t(y),F("allOpened")},m=()=>{F("allClosed")},P=W("left-barrier-active-block",{"opened-left":f==="left"||f==="allOpened"}),G=W("right-barrier-active-block",{"opened-right":f==="right"||f==="allOpened"});return o(B4,{className:"road",children:[o("div",{className:"road-body",children:[u(A4,{}),u("div",{className:"left-barrier",children:u("div",{className:"left-barrier-relative",children:u("div",{className:P})})}),u("div",{className:"right-barrier",children:u("div",{className:"right-barrier-relative",children:u("div",{className:G})})}),a==="center"&&u(N,{carDirection:c,className:"car-center"}),a==="left"&&u(N,{carDirection:c,className:"car-left"}),a==="right"&&u(N,{carDirection:c,className:"car-right"})]}),o("div",{className:"road-footer",children:[o("div",{className:"road-footer-left",children:[u(d,{onClick:D,style:{padding:"8px 28px",background:"none",height:"unset",borderRadius:14},children:x==="auto"?"\u0420\u0443\u0447\u043D\u043E\u0435 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435":"\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u043A\u0430"}),f==="allOpened"?u(d,{onClick:m,className:"primary-button",style:{padding:"8px 28px",background:"none",height:"unset",borderRadius:14},children:"\u0417\u0430\u043A\u0440\u044B\u0442\u044C"}):u(d,{onClick:()=>w("left"),style:{padding:"8px 28px",background:"none",height:"unset",borderRadius:14},children:"\u041E\u0442\u043A\u0440\u044B\u0442\u044C"})]}),u("div",{className:"road-footer-right",children:f==="allOpened"?u(d,{onClick:m,style:{padding:"8px 28px",background:"none",height:"unset",borderRadius:14},children:"\u0417\u0430\u043A\u0440\u044B\u0442\u044C"}):u(d,{onClick:()=>w("right"),style:{padding:"8px 28px",background:"none",height:"unset",borderRadius:14},children:"\u041E\u0442\u043A\u0440\u044B\u0442\u044C"})})]})]})},A4=e=>u("svg",{width:"100wv",height:"71",viewBox:"0 0 1920 71",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:u("path",{d:"M1924 65.3113H1250.6L1131.86 5.31132L806.382 5.31128L687.641 65.3112H-5",stroke:"#797979",strokeWidth:"10",strokeLinecap:"round",strokeLinejoin:"round"})}),L4=l.div`
    overflow: auto;
    height: 100%;
    max-height: 100%;

    * {
      letter-spacing: 1px;
    }
  
    .table-header {
      margin-bottom: 16px;
      font-size: 28px;
      text-align: center;
      color: var(--white);
    }
  
    table {
      font-family: 'Moulpali', sans-serif;
      letter-spacing: 1px!important;
      font-size: 16px;
      border-radius: 0;
      border-spacing:0 8px;
      background-color: #2F2F2F;
    }
    
    thead {
      tr th {
        padding:10px 20px;
        border-top: 1px solid rgba(242, 242, 242, .3);
        border-bottom: 1px solid rgba(242, 242, 242, .3);
        text-align: center;
        color: white;
        background: #2F2F2F;
    
        &::before {
          display: none;
        }
    
        &:first-of-type {
          border-left: 1px solid rgba(242, 242, 242, .3);
          border-top-left-radius:12px!important;
          border-bottom-left-radius:12px;
        }
    
        &:last-of-type {
          border-right: 1px solid rgba(242, 242, 242, .3);
          border-top-right-radius:12px!important;
          border-bottom-right-radius:12px;
        }
      }
    }
    
    tbody {
      color: white;
      background: rgba(47, 47, 47, 1);
      cursor: pointer;
    
      tr {
        &:hover td {
          background: ${e=>e.stripped?"#454545":"#4F4F4F"}!important;
        }

        &:nth-of-type(even) {
          &:hover td
          {
            background: ${e=>e.stripped?"#373737":"#4F4F4F"}!important;
          }
          
          td {
            background-color: #373737!important;
          }
        }

        td {
          height: 36px!important;
          max-height: 36px!important;
          padding:4px 20px;
          text-align: center;
          border: none;
          background: ${e=>e.stripped?"#454545":"#373737"}!important;

          &:hover td {
            background: ${e=>e.stripped?"#454545":"#373737"}!important;
          }
         
          &:first-of-type {
            border-top-left-radius:12px;
            border-bottom-left-radius:12px;
          }
          &:last-of-type {
            border-top-right-radius:12px;
            border-bottom-right-radius:12px;
          }
        }
      }
    }

  @media (max-width: 1200px) {
    .table-header {
      margin-bottom: 8px;
      font-size: 22px;
    }
    
    table {
      font-size: 14px;
      
      th,
      td {
        font-size:12px;
        padding:10px!important;
      }
    }
  }
`,$=i=>{var n=i,{tableHeader:e,stripped:t}=n,r=B(n,["tableHeader","stripped"]);return o(L4,{stripped:t,children:[e&&u("p",{className:"table-header",children:e}),u(_,h({},r))]})},M4=l.div`
  .mechanic-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 190px;
    padding-left: 200px;
    padding-right: 90px;
    .mechanic-block {
      display: flex;
      flex-direction: column;
      padding: 40px 80px;
      border-radius: 10px;
      background: #365DBE;
      span {
        text-align: left;
        line-height: 120%;
        color: #fff;
        letter-spacing: 1px;
        &:first-child {
          font-size: 36px;
          font-weight: 600;
        }
        &:last-child {
          margin-top: 30px;
          font-size: 30px;
          font-weight: 300;
        }
      }
    }
  }
  .content {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 100px;
  }
  .table-container {
    width: 100%;
    height: 400px;
    padding-right: 30px;
    padding-left: 200px;
    margin-top: 30px;
    .table {
      width: 100%;
      height: 100%;
      padding: 20px 30px;
      background: #2f2f2f;
      border-radius: 15px;
    }
  }
  .progress-container {
    width: 100%;
    height: 45px;
    padding-right: 30px;
    padding-left: 200px;
    margin-top: 30px;
    .progress-bar {
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: space-between;
      letter-spacing: 1px;
      span {
        font-size: 28px;
        color: #fff;
        margin-right: 30px;
      }
      .bar-field {
        width: fit-content;
        height: 100%;
        background: #373737;
        display: flex;
        align-items: center;
        border-radius: 10px;
        color: #f2f2f2;
        font-size: 20px;
        font-weight: 300;
        padding: 0 20px;
        margin-right: 30px;
        &:last-child {
          margin-right: 0;
        }
        p {
          margin-left: 10px;
          margin-bottom: 0;
          color: #fff;
          font-weight: 500;
        }
      }
      .num {
        p {
          text-transform: uppercase;
        }
      }
      .photoelements {
        flex-grow: 1;
        //width: 59%;
      }
    }
  }
  
  @media (max-width: 1550px) {        
    .progress-container {
      margin-top: 15px;
    }
    
    .progress-bar {
      & > span {
        display: flex;
        align-items: center;
        white-space: nowrap;
        text-align: center;
        font-size: 20px!important;
      }
      
      .bar-field {
        display: flex;
        width: fit-content!important;
        height: fit-content!important;
        white-space: nowrap;
        justify-content: flex-start;
        margin-top: 8px;
        padding: 8px!important;
        font-size: 16px!important;
        
        p{
          font-size: 16px!important;
        }

        .timer {
          width: fit-content!important;
        }
      }
    }
  }

  @media (max-width: 1200px) {
    .mechanic-container {
      .mechanic-block {
        display: flex;
        flex-direction: column;
        padding: 40px;
        border-radius: 10px;
        background: #365DBE;
        span {
          text-align: left;
          line-height: 120%;
          color: #fff;
          letter-spacing: 1px;
          &:first-child {
            text-align: center;
            font-size: 30px;
            font-weight: 600;
          }
          &:last-child {
            text-align: center;
            margin-top: 20px;
            font-size: 20px;
            font-weight: 300;
          }
        }
      }
    }
    
    .table {
      padding: 20px!important;
    }
    
    .progress-container {
      margin-top: 15px;
    }
    
    .progress-bar {
      & > span {
        display: flex;
        align-items: center;
        white-space: nowrap;
        text-align: center;
        font-size: 14px!important;
      }
      
      .bar-field {
        display: flex;
        width: fit-content!important;
        height: fit-content!important;
        white-space: nowrap;
        justify-content: flex-start;
        margin-top: 8px;
        padding: 8px!important;
        font-size: 12px!important;
        
        p{
          font-size: 12px!important;
        }

        .timer {
          width: fit-content!important;
        }
      }
    }
  }
`,N4=[{key:"1",ID:"12345",\u0412\u044A\u0435\u0437\u0434:"24.03.2021 / 10:25",\u0411\u0440\u0443\u0442\u0442\u043E:"12345",\u0422\u0430\u0440\u0430:"12345",\u041D\u0435\u0442\u0442\u043E:"12345",\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F:"\u0422\u041A\u041E-4","\u0413\u043E\u0441. \u043D\u043E\u043C\u0435\u0440":"\u0410102\u0412\u0412102",\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438:"\u041E\u0442\u0441\u0435\u0432"},{key:"2",ID:"12345",\u0412\u044A\u0435\u0437\u0434:"24.03.2021 / 10:25",\u0411\u0440\u0443\u0442\u0442\u043E:"12345",\u0422\u0430\u0440\u0430:"12345",\u041D\u0435\u0442\u0442\u043E:"12345",\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F:"\u0422\u041A\u041E-4","\u0413\u043E\u0441. \u043D\u043E\u043C\u0435\u0440":"\u0410102\u0412\u0412102",\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438:"\u041E\u0442\u0441\u0435\u0432"},{key:"3",ID:"12345",\u0412\u044A\u0435\u0437\u0434:"24.03.2021 / 10:25",\u0411\u0440\u0443\u0442\u0442\u043E:"12345",\u0422\u0430\u0440\u0430:"12345",\u041D\u0435\u0442\u0442\u043E:"12345",\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F:"\u0422\u041A\u041E-4","\u0413\u043E\u0441. \u043D\u043E\u043C\u0435\u0440":"\u0410102\u0412\u0412102",\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438:"\u041E\u0442\u0441\u0435\u0432"}],V4=[{title:"ID",dataIndex:"ID",key:"ID"},{title:"\u0412\u044A\u0435\u0437\u0434",dataIndex:"\u0412\u044A\u0435\u0437\u0434",key:"\u0412\u044A\u0435\u0437\u0434"},{title:"\u0411\u0440\u0443\u0442\u0442\u043E",dataIndex:"\u0411\u0440\u0443\u0442\u0442\u043E",key:"\u0411\u0440\u0443\u0442\u0442\u043E"},{title:"\u0422\u0430\u0440\u0430",dataIndex:"\u0422\u0430\u0440\u0430",key:"\u0422\u0430\u0440\u0430"},{title:"\u041D\u0435\u0442\u0442\u043E",dataIndex:"\u041D\u0435\u0442\u0442\u043E",key:"\u041D\u0435\u0442\u0442\u043E"},{title:"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F",dataIndex:"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F",key:"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F"},{title:"\u0413\u043E\u0441. \u043D\u043E\u043C\u0435\u0440",dataIndex:"\u0413\u043E\u0441. \u043D\u043E\u043C\u0435\u0440",key:"\u0413\u043E\u0441. \u043D\u043E\u043C\u0435\u0440"},{title:"\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438",dataIndex:"\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438",key:"\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438"}],S4=e=>{const[t,r]=s.exports.useState("auto"),[i,n]=s.exports.useState(!1),a=x=>{var g;(g=e.onBruttoChange)==null||g.call(e,!0),r(x)};return o(M4,{children:[t!=="auto"?o("div",{className:"content",children:[u("div",{children:u("div",{className:"mechanic-container",children:o("div",{className:"mechanic-block",children:[u("span",{children:"\u0420\u0435\u0436\u0438\u043C \u0440\u0443\u0447\u043D\u043E\u0433\u043E \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0448\u043B\u0430\u0433\u0431\u0430\u0443\u043C\u0430\u043C\u0438"}),o("span",{children:["\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435! \u0412 \u044D\u0442\u043E\u043C \u0440\u0435\u0436\u0438\u043C\u0435 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C \u0432\u0437\u0432\u0435\u0448\u0438\u0432\u0430\u043D\u0438\u044F \u043D\u0435 \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442 \u0438 \u043D\u0435 \u0438\u0434\u0435\u0442 \u043A \u0443\u0447\u0435\u0442\u0443! ",u("br",{})," \u0417\u0434\u0435\u0441\u044C \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0442\u044C \u0448\u043B\u0430\u0433\u0443\u0431\u0430\u0443\u043C\u044B \u0432\u0440\u0443\u0447\u043D\u0443\u044E. ",u("br",{})," \u0414\u043B\u044F \u0442\u043E\u0433\u043E \u0447\u0442\u043E\u0431\u044B \u043F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0440\u0435\u0436\u0438\u043C \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u043A\u043D\u043E\u043F\u043A\u0443 \u201C\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u201D."]})]})})}),u(O,{onModeChange:a})]}):o("div",{className:"content",children:[o("div",{children:[u("div",{className:"table-container",children:u("div",{className:"table",children:u($,{stripped:!1,tableHeader:"\u0422\u0435\u043A\u0443\u0449\u0438\u0435 \u0441\u043E\u0431\u044B\u0442\u0438\u044F",dataSource:N4,columns:V4,pagination:!1,onRow:x=>({onClick:g=>{n(!0)}})})})}),u("div",{className:"progress-container",children:o("div",{className:"progress-bar",children:[u("span",{children:"\u041F\u0440\u043E\u0446\u0435\u0441\u0441 \u0437\u0430\u0435\u0437\u0434\u0430"}),o("div",{style:{fontWeight:300},className:"bar-field num",children:["\u0413\u043E\u0441. \u043D\u043E\u043C\u0435\u0440: ",u("p",{children:"a102bb102"})]}),o("div",{className:"bar-field photoelements",children:["\u041F\u0440\u043E\u0433\u0440\u0435\u0441\u0441: ",u("p",{children:"\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 \u043F\u0435\u0440\u0435\u0441\u0435\u0447\u0435\u043D\u0438\u044F \u0444\u043E\u0442\u043E\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432"})]}),o("div",{className:"bar-field timer",children:["\u0422\u0430\u0439\u043C\u0435\u0440: ",u("p",{children:"210 \u0441"})]})]})})]}),u(O,{onModeChange:a,onOpen:x=>{var g;(g=e.onBruttoChange)==null||g.call(e,x)}})]}),u(M,{centered:!0,visible:i,footer:o("div",{style:{display:"flex",justifyContent:"center"},children:[u(d,{onClick:()=>n(!1),style:{marginRight:60,width:150,height:42},children:"\u041D\u0435\u0442"}),u(d,{onClick:x=>n(!1),style:{width:150,height:42},children:"\u0414\u0430"})]}),children:"\u0423\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0437\u0430\u043A\u0440\u044B\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C?"})]})},I4=l.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 54px;
  top: 50%;
  transform: translate(0, -50%);
  
  .nav-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 81px;
    height: 81px;
    border: 2px solid transparent;
    border-radius: 22px;
    transition: all .5s;
    
    &:first-of-type {
      margin-bottom: 40px;
    }
  }

  .nav-link-active {
    border: 2px solid #5076D6;
    border-radius: 22px,
  }
`,R4=()=>o(I4,{children:[u(H,{className:"nav-link",activeClassName:"nav-link-active",exact:!0,to:"/panel",style:{marginBottom:40},children:u(C4,{})}),u(H,{className:"nav-link",activeClassName:"nav-link-active",to:"/panel/stats",children:u(b4,{})})]}),z4=l.div`
    .ant-input {
      height: 42px;
      border: 1px solid var(--inputColor);
      border-radius: 5px;
      color: var(--white);
      background: transparent;
      box-shadow: none!important;
      
      &:hover {
        border: 1px solid var(--white);
      }
      
      input {
        background: inherit;
        color: inherit;
        
        &::placeholder {
          color: var(--inputColor);
        }
      }
    }

    .ant-input-affix-wrapper {
      border-radius: 5px;
      border: 1px solid var(--inputColor);
      background: transparent;
      color: rgba(242, 242, 242, 0.6);

      &:focus-within,
      &:focus,
      &:hover {
        border: 1px solid var(--white);
        box-shadow: none;
      }
      
      input {
        height: auto;
        border-radius: 0;
        border: 0;
        font-family: inherit;
        font-size: inherit;
        font-weight: inherit;
        color: var(--white);

        &::placeholder {
          color: rgba(242, 242, 242, 0.6);
        }
        &:hover {
          border: 0;
        }
      }
    }
`,b=e=>u(z4,{children:u(A,h({},e))}),W4=l.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  
  .ant-checkbox-wrapper {
    align-items: center;
    
    &:hover {
      .ant-checkbox-checked {
        border: 0!important;
      }
    }
    
    span:last-of-type {
      padding-top: 10px;
      font-size: 22px;
      line-height: normal;
      color: var(--white);
    }
    
    .ant-checkbox-inner {
      height: 30px;
      width: 30px;
      border: 2px solid var(--checkboxBorder);
      border-radius: 10px;
      background-color: var(--checkboxBg);
      
      &::after {
        left: 14px!important;
        border: 1px solid var(--checkboxBorder);
        border-top: 0;
        border-left: 0;
        transform: rotate(45deg) scale(1.5) translate(-70%, -10%);
      }
    }
  }
`,T=e=>u(W4,{children:u(u4.Group,h({},e))}),H4=l.div`
  .ant-modal-mask {
    backdrop-filter: blur(2px);
  }

  .brutto-modal {

    .ant-modal {
      width: fit-content !important;
    }

    .ant-modal-content {
      width: 690px;
      border-radius: var(--modalBorderRadius);
      background: var(--modalBg)!important;
      box-shadow: none;

      .ant-modal-body {
        padding: 30px 40px 40px 40px;
        font-size: 28px;
        text-align: center;
        color: var(--white);
        
        p {
          margin-bottom: 26px;
          line-height: normal;
        }
      }

      .ant-modal-footer {
        padding: 0 40px 40px 40px;
        border: 0;
      }
    }

    .ant-modal-close-x {
      display: none;
    }
  }
`,Z4=e=>{const t=s.exports.useRef(null),r=[{label:"\u041F\u043E\u043B\u043E\u043C\u043A\u0430",value:"1"},{label:"\u0414\u043B\u0438\u043D\u043D\u043E\u043C\u0435\u0440",value:"2"}];function i(n){}return u(H4,{ref:t,children:o(v,C(h({},e),{wrapClassName:"brutto-modal",maskClosable:!1,getContainer:t==null?void 0:t.current,centered:!0,children:[u("p",{children:"\u0412\u0437\u0432\u0435\u0448\u0438\u0432\u0430\u043D\u0438\u0435 \u0431\u0440\u0443\u0442\u0442\u043E"}),u(b,{style:{marginBottom:6,fontSize:20},placeholder:"\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"}),u(p,{style:{marginBottom:6,fontSize:20},placeholder:"\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442"}),u(p,{style:{marginBottom:6,fontSize:20},placeholder:"\u041F\u043B\u043E\u0449\u0430\u0434\u043A\u0430"}),u(p,{style:{marginBottom:6,fontSize:20},placeholder:"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F"}),u(p,{style:{marginBottom:6,fontSize:20},placeholder:"\u0412\u0438\u0434 \u0433\u0440\u0443\u0437\u0430"}),u(b,{style:{marginBottom:6,fontSize:20},placeholder:"\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"}),u("div",{style:{display:"flex",justifyContent:"flex-start",marginTop:21},children:u(T,{options:r,defaultValue:["Pear"],onChange:i})})]}))})},j4=l.div`
  * {
    letter-spacing: 1px;
    font-size: 20px!important;
  }
  
  .ant-modal-mask {
    backdrop-filter: blur(2px);
  }


  .ant-modal {
    width: fit-content !important;
  }

  .tara-modal {

    .ant-modal-content {
      width: 690px;
      border-radius: var(--modalBorderRadius);
      background: var(--modalBg)!important;
      box-shadow: none;

      .ant-modal-body {
        padding: 30px 40px 40px 40px;
        font-size: 28px;
        text-align: center;
        color: var(--white);
        
        p {
          letter-spacing: 1px;
          font-size: 28px!important;
          margin-bottom: 26px;
          line-height: normal;
        }
      }

      .ant-modal-footer {
        padding: 0 40px 40px 40px;
        border: 0;
      }
    }

    .ant-modal-close-x {
      display: none;
    }
  }
`,O4=e=>{const t=s.exports.useRef(null),r=[{label:"\u041F\u043E\u043B\u043E\u043C\u043A\u0430",value:"1"},{label:"\u0414\u043B\u0438\u043D\u043D\u043E\u043C\u0435\u0440",value:"2"}];function i(n){console.log("checked = ",n)}return u(j4,{ref:t,children:o(v,C(h({},e),{wrapClassName:"tara-modal",maskClosable:!1,getContainer:t==null?void 0:t.current,centered:!0,children:[u("p",{children:"\u0412\u0437\u0432\u0435\u0448\u0438\u0432\u0430\u043D\u0438\u0435 \u0442\u0430\u0440\u044B"}),o("div",{style:{display:"flex",marginBottom:10},children:[u("div",{style:{width:"50%",marginRight:"10px"},children:o(p,{className:"form-select",style:{marginBottom:6,marginRight:10},placeholder:"\u0413\u043E\u0441. \u043D\u043E\u043C\u0435\u0440",children:[u(p.Option,{value:"\u0410999\u0410\u0410702",children:"\u0410999\u0410\u0410702"}),u(p.Option,{value:"\u0410222\u0410\u0410702",children:"\u0410222\u0410\u0410702"})]})}),u("div",{style:{width:"50%"},children:u(d,{type:"primary",style:{width:"100%",height:42},children:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0430\u0432\u0442\u043E"})})]}),u(p,{className:"form-select",style:{marginBottom:10},placeholder:"\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"}),u("div",{style:{display:"flex",justifyContent:"flex-start"},children:u(T,{options:r,defaultValue:["Pear"],onChange:i})})]}))})},$4=l.div`
  .ant-modal-mask {
    backdrop-filter: blur(2px);
  }

  .stat-edit-modal {

    .ant-modal-content {
      width: 690px;
      border-radius: var(--modalBorderRadius);
      background: var(--modalBg)!important;
      box-shadow: none;

      .ant-modal-body {
        padding: 30px 40px 40px 40px;
        font-size: 28px;
        text-align: center;
        color: var(--white);
        
        p {
          margin-bottom: 26px;
          line-height: normal;
        }
      }

      .ant-modal-footer {
        padding: 0 40px 40px 40px;
        border: 0;
      }
    }

    .ant-modal-close-x {
      display: none;
    }
  }
`,T4=e=>{const t=s.exports.useRef(null);return u($4,{ref:t,children:o(v,C(h({},e),{wrapClassName:"stat-edit-modal",maskClosable:!1,getContainer:t==null?void 0:t.current,centered:!0,children:[u("p",{children:"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u043F\u0438\u0441\u0438"}),u(b,{style:{marginBottom:6,fontSize:20},placeholder:"\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"}),u(p,{style:{marginBottom:6,fontSize:20},placeholder:"\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442"}),u(p,{style:{marginBottom:6,fontSize:20},placeholder:"\u041F\u043B\u043E\u0449\u0430\u0434\u043A\u0430"}),u(p,{style:{marginBottom:6,fontSize:20},placeholder:"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F"}),u(p,{style:{marginBottom:6,fontSize:20},placeholder:"\u0412\u0438\u0434 \u0433\u0440\u0443\u0437\u0430"}),u(b,{style:{marginBottom:6,fontSize:20},placeholder:"\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"})]}))})},P4=l.div`
    textarea {
        font-family: 'Moul Pali', sans-serif;
        border: 1px solid rgba(242, 242, 242, 0.4);
        border-radius: 5px;
        letter-spacing: 2px;
        font-size: 20px;
        color: rgba(255, 255, 255, 0.5);
        background: transparent;

        &:hover,
        &:focus {
            border: 1px solid rgba(242, 242, 242, 0.4);
            outline: none;
            box-shadow: none;
        }
    }

`,G4=e=>u(P4,{children:u(A.TextArea,h({},e))}),q4=l.div`
  .ant-modal-mask {
    backdrop-filter: blur(2px);
  }

  .stat-edit-modal {

    .ant-modal-content {
      width: 690px;
      border-radius: var(--modalBorderRadius);
      background: var(--modalBg)!important;
      box-shadow: none;

      .ant-modal-body {
        padding: 30px 40px 40px 40px;
        font-size: 28px;
        text-align: center;
        color: var(--white);
        
        p {
          margin-bottom: 26px;
          line-height: normal;
        }
      }

      .ant-modal-footer {
        padding: 0 40px 40px 40px;
        border: 0;
      }
    }

    .ant-modal-close-x {
      display: none;
    }
  }
`,Y4=e=>{const t=s.exports.useRef(null);return u(q4,{ref:t,children:o(v,C(h({},e),{wrapClassName:"stat-edit-modal",maskClosable:!1,getContainer:t==null?void 0:t.current,centered:!0,children:[u("p",{children:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u043A \u0437\u0430\u043F\u0438\u0441\u0438"}),u(G4,{style:{height:132},defaultValue:"\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"})]}))})},K4=l.div`
  flex: 1;
  height: 100%;
  padding: 20px 20px 20px 0;
  color: white;
  
  .stats-content {
    height: inherit;
    padding: 20px 30px;
    margin-left: 200px;
    border-radius: 14px;
    background: #2F2F2F;
    
    &-header {
      margin: 0;
      margin-bottom: 42px;
      text-align: center;
      font-size: 28px;
      line-height: normal;
    }
    
    &-filter {
      display: flex;
      margin-bottom: 26px;
    }
    
    &-filter-item {
      margin-right: 20px;
    }

    &-filter-table {
      max-height: 600px;
    }
  }
  
  @media (max-width: 1200px) {
    .stats-content {
      padding: 20px!important;
    }
    
    .stats-content-header {
      margin-bottom: 32px;
      font-size: 22px;
    }
  }
`,J4=[{key:"1",ID:"12345","\u0413\u043E\u0441. \u043D\u043E\u043C\u0435\u0440":"\u0410102\u0412\u0412102",\u041F\u0435\u0440\u0435\u0432\u043E\u0437\u0447\u0438\u043A:"\u041E\u041E\u041E\u201D\u0410\u043B\u044C\u044F\u043D\u0441\u201D",\u0411\u0440\u0443\u0442\u0442\u043E:"12345",\u0422\u0430\u0440\u0430:"--",\u041D\u0435\u0442\u0442\u043E:"--",\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F:"\u0422\u041A\u041E-4","\u0412\u0438\u0434 \u0433\u0440\u0443\u0437\u0430":"\u041A\u0430\u0440\u0442\u043E\u043D","\u0414\u0430\u0442\u0430 \u0432\u044A\u0435\u0437\u0434\u0430":"24.03.2021 / 10:25","\u0414\u0430\u0442\u0430 \u0432\u044B\u0435\u0437\u0434\u0430":"24.03.2021 / 10:25",\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438:"\u041E\u0442\u0441\u0435\u0432"},{key:"2",ID:"12345","\u0413\u043E\u0441. \u043D\u043E\u043C\u0435\u0440":"\u0410102\u0412\u0412102",\u041F\u0435\u0440\u0435\u0432\u043E\u0437\u0447\u0438\u043A:"\u041E\u041E\u041E\u201D\u0410\u043B\u044C\u044F\u043D\u0441\u201D",\u0411\u0440\u0443\u0442\u0442\u043E:"12345",\u0422\u0430\u0440\u0430:"12345",\u041D\u0435\u0442\u0442\u043E:"12345",\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F:"\u0422\u041A\u041E-4","\u0412\u0438\u0434 \u0433\u0440\u0443\u0437\u0430":"\u041A\u0430\u0440\u0442\u043E\u043D","\u0414\u0430\u0442\u0430 \u0432\u044A\u0435\u0437\u0434\u0430":"24.03.2021 / 10:25","\u0414\u0430\u0442\u0430 \u0432\u044B\u0435\u0437\u0434\u0430":"24.03.2021 / 10:25",\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438:"\u041E\u0442\u0441\u0435\u0432"},{key:"3",ID:"12345","\u0413\u043E\u0441. \u043D\u043E\u043C\u0435\u0440":"\u0410102\u0412\u0412102",\u041F\u0435\u0440\u0435\u0432\u043E\u0437\u0447\u0438\u043A:"\u041E\u041E\u041E\u201D\u0410\u043B\u044C\u044F\u043D\u0441\u201D",\u0411\u0440\u0443\u0442\u0442\u043E:"12345",\u0422\u0430\u0440\u0430:"12345",\u041D\u0435\u0442\u0442\u043E:"12345",\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F:"\u0422\u041A\u041E-4","\u0412\u0438\u0434 \u0433\u0440\u0443\u0437\u0430":"\u041A\u0430\u0440\u0442\u043E\u043D","\u0414\u0430\u0442\u0430 \u0432\u044A\u0435\u0437\u0434\u0430":"24.03.2021 / 10:25","\u0414\u0430\u0442\u0430 \u0432\u044B\u0435\u0437\u0434\u0430":"24.03.2021 / 10:25",\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438:"\u041E\u0442\u0441\u0435\u0432"}],Q4=[{title:"ID",dataIndex:"ID",key:"ID"},{title:"\u0413\u043E\u0441. \u043D\u043E\u043C\u0435\u0440",dataIndex:"\u0413\u043E\u0441. \u043D\u043E\u043C\u0435\u0440",key:"\u0413\u043E\u0441. \u043D\u043E\u043C\u0435\u0440"},{title:"\u041F\u0435\u0440\u0435\u0432\u043E\u0437\u0447\u0438\u043A",dataIndex:"\u041F\u0435\u0440\u0435\u0432\u043E\u0437\u0447\u0438\u043A",key:"\u041F\u0435\u0440\u0435\u0432\u043E\u0437\u0447\u0438\u043A"},{title:"\u0411\u0440\u0443\u0442\u0442\u043E",dataIndex:"\u0411\u0440\u0443\u0442\u0442\u043E",key:"\u0411\u0440\u0443\u0442\u0442\u043E"},{title:"\u0422\u0430\u0440\u0430",dataIndex:"\u0422\u0430\u0440\u0430",key:"\u0422\u0430\u0440\u0430"},{title:"\u041D\u0435\u0442\u0442\u043E",dataIndex:"\u041D\u0435\u0442\u0442\u043E",key:"\u041D\u0435\u0442\u0442\u043E"},{title:"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F",dataIndex:"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F",key:"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F"},{title:"\u0412\u0438\u0434 \u0433\u0440\u0443\u0437\u0430",dataIndex:"\u0412\u0438\u0434 \u0433\u0440\u0443\u0437\u0430",key:"\u0412\u0438\u0434 \u0433\u0440\u0443\u0437\u0430"},{title:"\u0414\u0430\u0442\u0430 \u0432\u044A\u0435\u0437\u0434\u0430",dataIndex:"\u0414\u0430\u0442\u0430 \u0432\u044A\u0435\u0437\u0434\u0430",key:"\u0414\u0430\u0442\u0430 \u0432\u044A\u0435\u0437\u0434\u0430"},{title:"\u0414\u0430\u0442\u0430 \u0432\u044B\u0435\u0437\u0434\u0430",dataIndex:"\u0414\u0430\u0442\u0430 \u0432\u044B\u0435\u0437\u0434\u0430",key:"\u0414\u0430\u0442\u0430 \u0432\u044B\u0435\u0437\u0434\u0430"},{title:"\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438",dataIndex:"\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438",key:"\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438"}],U4=()=>{const[e,t]=s.exports.useState(null);return o(K4,{children:[u(Y4,{visible:(e==null?void 0:e.key)==="comment",footer:o("div",{style:{display:"flex",justifyContent:"space-between"},children:[u(d,{onClick:()=>t(null),style:{marginRight:60,width:280,height:42},children:"\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"}),u(d,{onClick:()=>t(null),style:{width:280,height:42},children:"\u041F\u0440\u0438\u043D\u044F\u0442\u044C"})]})}),u(T4,{visible:(e==null?void 0:e.key)==="edit",footer:o("div",{style:{display:"flex",justifyContent:"space-between"},children:[u(d,{onClick:()=>t(null),style:{marginRight:60,width:280,height:42},children:"\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"}),u(d,{onClick:()=>t(null),style:{width:280,height:42},children:"\u041F\u0440\u0438\u043D\u044F\u0442\u044C"})]})}),o("div",{className:"stats-content",children:[u("p",{className:"stats-content-header",children:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430"}),o("div",{className:"stats-content-filter",children:[u(p,{className:"stats-content-filter-item",style:{width:200,height:40,fontSize:20,fontWeight:300},placeholder:"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F"}),u(p,{className:"stats-content-filter-item",style:{width:200,height:40,fontSize:20,fontWeight:300},placeholder:"\u0412\u0438\u0434 \u0433\u0440\u0443\u0437\u0430"}),u(b,{className:"stats-content-filter-item",suffix:u(L,{}),placeholder:"\u0413\u043E\u0441. \u043D\u043E\u043C\u0435\u0440",style:{width:200,height:42,fontSize:20,fontWeight:300}}),u(b,{className:"stats-content-filter-item",suffix:u(L,{}),placeholder:"\u041F\u0435\u0440\u0435\u0432\u043E\u0437\u0447\u0438\u043A",style:{width:400,height:42,fontSize:20,fontWeight:300}}),u(b,{suffix:u(L,{}),placeholder:"\u0417\u0430\u0433\u043B\u0443\u0448\u043A\u0430 \u043F\u043E\u0434 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044C",style:{width:400,height:42,fontSize:20,fontWeight:300}}),u(d,{type:"ghost",style:{height:"100%",width:50,marginLeft:38,marginRight:20},children:u("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:u("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M16.6585 1.1364C16.2022 0.832964 15.6025 0.981856 15.3206 1.45631L7.57537 14.4902L2.57811 8.9648C2.19774 8.54422 1.56286 8.52892 1.16456 8.93196C0.757888 9.34348 0.744016 10.022 1.1325 10.4516L7.00779 16.9478C7.22249 17.1852 7.53115 17.3069 7.84484 17.2732C8.15832 17.2396 8.43628 17.0553 8.60062 16.7788L16.9898 2.66125C17.2956 2.14656 17.152 1.46447 16.6585 1.1364Z",fill:"#5076D6"})})}),u(d,{type:"ghost",style:{height:"100%",width:50},children:u("svg",{xmlns:"http://www.w3.org/2000/svg",width:"19",height:"20",viewBox:"0 0 19 20",fill:"none",children:u("path",{d:"M17.2635 19.5771C17.654 19.9677 18.2871 19.9677 18.6777 19.5771C19.0682 19.1866 19.0682 18.5535 18.6777 18.1629L10.8995 10.3848L18.6777 2.60658C19.0682 2.21606 19.0682 1.58289 18.6777 1.19237C18.2871 0.801844 17.654 0.801844 17.2635 1.19237L9.48528 8.97054L1.70711 1.19237C1.31658 0.801845 0.683418 0.801844 0.292893 1.19237C-0.0976313 1.58289 -0.0976309 2.21606 0.292893 2.60658L8.07107 10.3848L0.292894 18.1629C-0.0976305 18.5535 -0.0976313 19.1866 0.292893 19.5771C0.683418 19.9677 1.31658 19.9677 1.70711 19.5771L9.48528 11.799L17.2635 19.5771Z",fill:"#5076D6"})})})]}),u("div",{className:"stats-content-table",children:u($,{stripped:!0,dataSource:J4,columns:Q4,pagination:!1,onRow:r=>({onClick:()=>{r.\u0422\u0430\u0440\u0430==="--"&&r.\u041D\u0435\u0442\u0442\u043E==="--"?t({key:"edit",record:r}):t({key:"comment",record:r})}})})})]})]})},V="ant-modal",X4=l.div`
  .${V} {
    position:absolute;
    top: 23px;
    left: 450px;
  }
  
  .${V}-mask {
    backdrop-filter: blur(2px);
  }

  .${V}-content {
    position: relative;
    padding: 14px;
    background: var(--secondaryBg);
    border-radius: var(--modalBorderRadius);
    box-shadow: none;

    .modal-bell-icon {
      position: absolute;
      top: 10px;
      left: 14px;
    }
    
    .ant-modal-body {
      padding: 0;
      padding-top: 50px;
      color: white;
    }
    
    .modal-body-item {
      margin: 0px;
      font-size: 18px;
      font-weight: 300;
      
      &:first-of-type {
        .modal-body-splitter {
          display: none;
        }
      }
      
      .modal-body-splitter {
        margin: 8px 0px;
        height: 1px;
        background: #626262;
      }
      
    }
  }
`,_4=e=>{const t=s.exports.useRef(null);return u(X4,{ref:t,children:o(v,C(h({},e),{getContainer:t==null?void 0:t.current,closeIcon:u(w4,{}),footer:null,children:[u("span",{className:"modal-bell-icon",children:u(j,{})}),o("p",{className:"modal-body-item",children:[u("div",{className:"modal-body-splitter"}),"\u0423\u0442\u0435\u0440\u044F\u043D\u0430 \u0441\u0432\u044F\u0437\u044C \u0441 WServer"]}),o("p",{className:"modal-body-item",children:[u("div",{className:"modal-body-splitter"}),"\u0423\u0442\u0435\u0440\u044F\u043D\u0430 \u0441\u0432\u044F\u0437\u044C \u0441 \u0444\u043E\u0442\u043E\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u043C\u0438"]})]}))})},u0=l.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  max-width: 100vw;
  background: var(--mainBg);

  header {
    width: 100%;
    padding: 24px 31px 0 200px;

    span {
      margin-right: 30px;
    }
  }

  .footer {
    min-height: 400px;
    background: palegreen;
  }
`,e0=e=>{const[t,r]=s.exports.useState(!1);s.exports.useState(!1);const[i,n]=s.exports.useState(!1),[a,c]=s.exports.useState(!1),[x,g]=s.exports.useState(!1);let{path:f,url:F}=e4();const D=()=>{g(!0)},w=m=>{r(m)};return o(u0,{children:[u(k4,{notifications:!1,onBellClick:D,onLogOut:()=>w(!0)}),u(R4,{}),o(Z,{children:[u(k,{exact:!0,path:f,children:u(S4,{onBruttoChange:m=>{m==="right"&&n(!0),m==="left"&&c(!0)}})}),u(k,{path:`${f}/stats`,children:u(U4,{})})]}),u(_4,{visible:x,onCancel:m=>g(!1)}),u(M,{centered:!0,visible:t,footer:o("div",{style:{display:"flex",justifyContent:"center"},children:[u(d,{onClick:()=>w(!1),style:{marginRight:60,width:150,height:42},children:"\u041D\u0435\u0442"}),u(d,{onClick:m=>{window.location.href="/login"},style:{width:150,height:42},children:"\u0414\u0430"})]}),children:"\u0423\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0432\u044B\u0439\u0442\u0438?"}),u(M,{centered:!0,visible:!1,footer:o("div",{style:{display:"flex",justifyContent:"center"},children:[u(d,{style:{marginRight:60,width:150,height:42},children:"\u041D\u0435\u0442"}),u(d,{style:{width:150,height:42},children:"\u0414\u0430"})]}),children:"\u0423\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0437\u0430\u043A\u0440\u044B\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C?"}),u(Z4,{visible:i,footer:o("div",{style:{display:"flex",justifyContent:"space-between"},children:[u(d,{onClick:()=>n(!1),style:{marginRight:60,width:280,height:42},children:"\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"}),u(d,{onClick:()=>n(!1),style:{width:280,height:42},children:"\u041F\u0440\u0438\u043D\u044F\u0442\u044C"})]})}),u(O4,{visible:a,footer:o("div",{style:{display:"flex"},children:[u(d,{onClick:()=>c(!1),style:{marginRight:60,width:280,height:42},children:"\u041E\u0442\u043A\u043B\u043E\u043D\u0438\u0442\u044C"}),u(d,{onClick:()=>c(!1),style:{width:280,height:42},children:"\u041F\u0440\u0438\u043D\u044F\u0442\u044C"})]})})]})},t0=l.div`
  display: block;
  min-width: 100vw;
  min-height: 100vh;
`,o0=l.div`
  /* app */
  --white: #F2F2F2;
  --mainBg: #171717;
  --secondaryBg: #2F2F2F;
  --accentColor: #5076D6;
  
  
  /* input */
  --inputColor: rgba(242, 242, 242, 0.6);
  
  /* modal */
  --modalBg: #282828;
  --modalBorderRadius: 15px;
  
  /* button */
  --buttonAccentColor: #89A9F8;
  --buttonBg: var(--modalBg);
  --buttonBorderRadius: 14px;
  
  /* checkbox */
  --checkboxBorder: #7E7E7E;
  --checkboxBg: var(--modalBg);

  --mainTextColor: #F2F2F2;
  --headerPadding: 8px 24px;
  --buttonBorderColor: #F2F2F2;
  --buttonHoverBGColor: #393939;
  --buttonBorderRadius: 10px;
`;function r0(){return u(o0,{children:u(t0,{children:o(Z,{children:[u(k,{path:"/login",children:u(m4,{})}),u(k,{path:"/panel",children:u(e0,{})}),u(t4,{from:"/",to:"/login"})]})})})}o4.render(u(r4,{children:u(n4.StrictMode,{children:u(r0,{})})}),document.getElementById("root"));
