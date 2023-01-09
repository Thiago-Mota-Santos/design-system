var c=Object.defineProperty;var a=(t,r)=>c(t,"name",{value:r,configurable:!0});import{s as n}from"./styled-components-macro.esm-e387ebc3.js";import{a as s,j as e}from"./jsx-runtime-fff760ec.js";import"./assert-6c20146e.js";import"./es.object.get-own-property-descriptor-e414535c.js";import"./web.url.constructor-0e073ed3.js";import"./iframe-67785b5a.js";import"./es.number.is-integer-9c095b38.js";import"./index-70cc1d38.js";const m=n.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background: #181a1b;
  border: 1px solid #3b4042;

  > header {
    display: flex;
    font-weight: 500;
    align-items: flex-start;
    flex-direction: column;

    > p {
      margin: 0 14px 9px 15px;
      font-size: 14px;
      color: #a8a095;
      letter-spacing: 0.1px;
    }
  }
`,u=n.h1`
  display: flex;
  align-items: center;
  line-height: 1em;
  padding: 30px 30px 12px 16px;
  font-size: 18px;
  font-weight: 500;
  color: #c3beb6;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,f=n.img`
  min-width: 100%;
  max-width: 100%;
  height: auto;
`,g=n.a`
  text-decoration: none;
  font-size: 14px;
  cursor: pointer;
  margin: 0 0 13px 14px;
  color: #ad60e9;
`,i=a(({img_url:t,title:r,subtitle:d,description:p,href:l})=>s(m,{children:[e(f,{src:t,alt:r}),e(u,{children:r}),s("header",{children:[e("p",{children:d}),e("p",{children:p}),e(g,{href:l,children:"Leia mais"})]})]}),"Card"),x=i;try{i.displayName="Card",i.__docgenInfo={description:"",displayName:"Card",props:{img_url:{defaultValue:null,description:"",name:"img_url",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Card/index.tsx#Card"]={docgenInfo:i.__docgenInfo,name:"Card",path:"src/components/Card/index.tsx#Card"})}catch{}const h=n.div`
  display:flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin-top: 16px;

  > div{
    margin-top: 8px;
    display: grid;
    grid-gap: 25px;

    grid-template-columns: 1fr;

    @media screen and (min-width:768px){
      grid-template-columns: 1fr 1fr;
    } 

    @media screen and (min-width: 1280px){
      grid-template-columns: 1fr 1fr 1fr;

    } 
  }
`;function o({children:t}){return e(h,{children:e("div",{children:t})})}a(o,"Content");try{o.displayName="Content",o.__docgenInfo={description:"",displayName:"Content",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Content/index.tsx#Content"]={docgenInfo:o.__docgenInfo,name:"Content",path:"src/components/Content/index.tsx#Content"})}catch{}const E={title:"Components/Content",component:o,args:{children:e(x,{img_url:"https://avatars.githubusercontent.com/u/22632046?s=280&v=4",title:"Conheça sobre o incrível StoryBook",subtitle:"Uma ferramenta que vem ganhando muita popularidade entre os devs",description:"O Storybook é uma ferramenta muito boa para gestão de componentes no react e no ecossistema javascript em si, ela vem ganhando muito espaço nos últimos tempos principalmente quando se trata de design system, ela tem se tornando algo que é indispensável para as empresas e tem integração com os diversos tipos de sistemas!!! Muito incrível mesmo",href:"/"})},argTypes:{children:{table:{disable:!0}}}},R={args:{}},q=["Default"];export{R as Default,q as __namedExportsOrder,E as default};
//# sourceMappingURL=Content.stories-e58295a9.js.map
