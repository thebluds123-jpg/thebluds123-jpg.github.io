{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 UnityModLoader.register(\{\
  id:"dev-controls",\
  onReady(\{overlay\})\{\
    const \{panel\}=overlay.createPanel("DevTools",\{top:"30px",left:"20px"\});\
    panel.innerHTML = `\
        <button id="hp">\uc0\u8734 \u8239 HP</button>\
        <button id="ammo">\uc0\u8734 \u8239 Ammo</button>\
    `;\
    panel.onclick = e=>\{\
      if(e.target.id==="hp")   SendMessage("GameManager","SetHealth","9999");\
      if(e.target.id==="ammo") SendMessage("WeaponManager","SetAmmo","999");\
    \};\
    console.log("DevControls active");\
  \}\
\});\
}