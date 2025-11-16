{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const loader = \{\
  mods: [],\
  register(mod) \{ this.mods.push(mod); \},\
  init() \{\
    this.mods.forEach(m => m.onReady?.(\{\
         overlay: this.overlay,\
         game: window.unityInstance\
    \}));\
  \},\
  overlay: \{\
    createPanel: (title,pos)=>\{\
      const wrap=document.createElement("div");\
      wrap.innerHTML=`<h4>$\{title\}</h4>`;\
      Object.assign(wrap.style,\
         \{position:"fixed",top:pos.top,left:pos.left,\
          background:"rgba(0,0,0,0.6)",color:"#0f0",\
          zIndex:99999,padding:"4px",fontFamily:"monospace"\});\
      document.body.appendChild(wrap);\
      return \{ panel:wrap \};\
    \}\
  \}\
\};\
window.UnityModLoader = loader;\
window.addEventListener("load",()=>loader.init());\
}