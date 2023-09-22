import{j as e}from"./jsx-runtime-ffb262ed.js";import{c as o}from"./index-e131923d.js";import{A as p}from"./AverageCard-ca1b407c.js";import{S as y}from"./SummaryCard-f262c6b9.js";const t=a=>{const{summaryList:s,totalScore:l,onContinue:i}=a,u=s.map(d=>d.score);return e.jsxs("div",{className:o("w-full flex flex-col items-center justify-center gap-8 bg-white font-hanken-grotesk","md:flex-row md:shadow-2xl md:rounded-3xl md:items-stretch md:max-w-3xl md:gap-4"),children:[e.jsx("div",{className:o("rounded-b-3xl w-full bg-gradient-to-b from-indigo-700 via-indigo-600 to-blue-700","md:rounded-3xl md:max-w-xs md:flex"),children:e.jsx(p,{title:"Your Result",scores:u,totalScore:l})}),e.jsx("div",{className:o("w-full px-4 mb-4","md:flex-1 md:p-8"),children:e.jsx(y,{title:"Summary",summaryList:s,onContinue:i})})]})};try{t.displayName="ResultsSummary",t.__docgenInfo={description:"",displayName:"ResultsSummary",props:{summaryList:{defaultValue:null,description:"",name:"summaryList",required:!0,type:{name:"Summary[]"}},totalScore:{defaultValue:null,description:"",name:"totalScore",required:!0,type:{name:"number"}},onContinue:{defaultValue:null,description:"",name:"onContinue",required:!0,type:{name:"() => void"}}}}}catch{}const g={component:t,args:{totalScore:100},argTypes:{onContinue:{action:"continue"}}},r={args:{summaryList:[{category:"Reaction",score:80},{category:"Memory",score:92},{category:"Verbal",score:61},{category:"Visual",score:72}]}};var n,m,c;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    summaryList: [{
      category: "Reaction",
      score: 80
    }, {
      category: "Memory",
      score: 92
    }, {
      category: "Verbal",
      score: 61
    }, {
      category: "Visual",
      score: 72
    }]
  }
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const x=["Basic"],j=Object.freeze(Object.defineProperty({__proto__:null,Basic:r,__namedExportsOrder:x,default:g},Symbol.toStringTag,{value:"Module"}));export{r as B,j as R};
//# sourceMappingURL=ResultsSummary.stories-49e21f8e.js.map
