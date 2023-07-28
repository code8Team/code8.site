(window.webpackJsonpGUI=window.webpackJsonpGUI||[]).push([[27],{1586:function(t,o,e){(t.exports=e(9)(!1)).push([t.i,".blocklyEditableText > text {\n  fill: var(--editorTheme3-inputColor-text);\n}\n.blocklyHtmlInput {\n  background-color: var(--editorTheme3-inputColor);\n  color: var(--editorTheme3-inputColor-text);\n}\n\n.blocklyDropDownDiv .goog-menuitem-highlight,\n.blocklyDropDownDiv .goog-menuitem-hover,\n.sa-contextmenu-colored .blocklyContextMenu .goog-menuitem-highlight {\n  background-color: var(--editorTheme3-hoveredItem, rgba(0, 0, 0, 0.2));\n}\n\n.scratchCommentRect {\n  fill: var(--editorTheme3-commentColor);\n}\n.scratchCommentBody,\n.scratchCommentTextarea {\n  background-color: var(--editorTheme3-commentColor);\n}\n.scratchWorkspaceCommentBorder {\n  stroke: var(--editorTheme3-commentBorder);\n}\n.scratchCommentTextarea::placeholder {\n  color: var(--editorTheme3-commentTextTransparent);\n}\n.scratchCommentText {\n  fill: var(--editorTheme3-commentText);\n  color: var(--editorTheme3-commentText);\n}\n",""])},1587:function(t,o,e){(t.exports=e(9)(!1)).push([t.i,'@namespace xlink url("http://www.w3.org/1999/xlink");\n\n.scratchCategoryItemBubble::after {\n  /* block-palette-icons */\n  filter: brightness(0);\n}\n\n.blocklyEditableText > text {\n  fill: var(--editorTheme3-inputColor-blackText);\n}\n.blocklyHtmlInput {\n  color: var(--editorTheme3-inputColor-blackText);\n}\n\n[class*="blocks_blocks_"] image[xlink|href$="/rotate-left.svg"],\n[class*="blocks_blocks_"] image[xlink|href$="/rotate-right.svg"],\n[class*="blocks_blocks_"] image[xlink|href$="/repeat.svg"] {\n  filter: invert(1) hue-rotate(180deg);\n}\n\n.blocklyDropDownDiv .goog-menuitem,\n.sa-contextmenu-colored .blocklyContextMenu .goog-menuitem .goog-menuitem-content {\n  color: black;\n}\n.blocklyDropDownDiv .blocklyText {\n  fill: black;\n}\n\n/* Compatibility */\n\n.sa-block-color {\n  --sa-block-text: black;\n  --sa-block-gray-text: black;\n  --sa-block-colored-text: var(--sa-block-background-tertiary);\n  --sa-block-text-on-bright-background: black;\n}\n',""])},1588:function(t,o,e){(t.exports=e(9)(!1)).push([t.i,".scratchCategoryItemBubble::after {\n  /* block-palette-icons */\n  filter: brightness(0);\n  opacity: 0.6;\n}\n\n.u-dropdown-searchbar,\n.u-dropdown-searchbar:focus,\n.blocklyDropDownDiv .goog-menuitem,\n.sa-contextmenu-colored .blocklyContextMenu .goog-menuitem .goog-menuitem-content {\n  color: #575e75;\n}\n.u-dropdown-searchbar:focus {\n  background-color: var(--editorTheme3-hoveredItem);\n}\n\n.blocklyAngleDragHandle {\n  stroke: black;\n  stroke-opacity: 0.15;\n  paint-order: stroke fill;\n}\n\n.scratchCommentRect {\n  fill: #feffff;\n}\n.scratchCommentBody,\n.scratchCommentTextarea {\n  background-color: #ffffff;\n}\n.scratchWorkspaceCommentBorder {\n  stroke: var(--editorTheme3-commentColor);\n}\n.scratchCommentTextarea::placeholder {\n  color: rgba(0, 0, 0, 0.5);\n}\n.scratchCommentText {\n  fill: #575e75;\n  color: #575e75;\n}\n\n/* Compatibility */\n\n.sa-block-color {\n  --sa-block-colored-background: var(--sa-block-background-secondary);\n  --sa-block-colored-background-secondary: var(--sa-block-field-background);\n  --sa-block-bright-background: var(--sa-block-background-tertiary);\n  --sa-block-text: var(--sa-block-background-tertiary);\n  --sa-block-gray-text: #575e75;\n  --sa-block-colored-text: var(--sa-block-background-tertiary);\n  --sa-block-text-on-bright-background: white;\n}\n",""])},1589:function(t,o,e){(t.exports=e(9)(!1)).push([t.i,".u-dropdown-searchbar {\n  border-color: rgba(255, 255, 255, 0.15);\n}\n.u-dropdown-searchbar:focus {\n  background-color: var(--editorTheme3-hoveredItem);\n}\n.blocklyDropDownDiv .goog-menuitem-checkbox {\n  filter: brightness(0) invert(1);\n}\n\n.scratchCommentRect {\n  fill: #282828;\n}\n.scratchCommentBody,\n.scratchCommentTextarea {\n  background-color: #282828;\n}\n.scratchWorkspaceCommentBorder {\n  stroke: var(--editorTheme3-commentColor);\n}\n.scratchCommentTextarea::placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\n.scratchCommentText {\n  fill: #ffffff;\n  color: #ffffff;\n}\n\n/* Compatibility */\n\n.sa-block-color {\n  --sa-block-colored-background: var(--sa-block-background-secondary);\n  --sa-block-colored-background-secondary: var(--sa-block-field-background);\n  --sa-block-bright-background: var(--sa-block-background-tertiary);\n  --sa-block-text: var(--sa-block-background-tertiary);\n  --sa-block-gray-text: white;\n  --sa-block-colored-text: var(--sa-block-background-tertiary);\n  --sa-block-text-on-bright-background: white;\n}\n",""])},1660:function(t,o,e){"use strict";e.r(o),e.d(o,"resources",(function(){return m}));var r=e(1505);const n=new RegExp("^data:image/svg\\+xml;base64,([A-Za-z0-9+/=]*)$"),l={id:null,settingId:"Pen-color",colorId:"pen"},c={id:null,settingId:"tw-color",colorId:"tw"},i={settingId:"sa-color",colorId:"sa"},s=[{id:"motion",settingId:"motion-color",colorId:"motion"},{id:"looks",settingId:"looks-color",colorId:"looks"},{id:"sound",settingId:"sounds-color",colorId:"sounds"},{id:"events",settingId:"events-color",colorId:"event"},{id:"control",settingId:"control-color",colorId:"control"},{id:"sensing",settingId:"sensing-color",colorId:"sensing"},{id:"operators",settingId:"operators-color",colorId:"operators"},{id:"variables",settingId:"data-color",colorId:"data"},{id:"lists",settingId:"data-lists-color",colorId:"data_lists"},{id:"myBlocks",settingId:"custom-color",colorId:"more"},l,c,i];var a=e(1586),d=e.n(a),b=e(1587),g=e.n(b),h=e(1588),u=e.n(h),p=e(1589),k=e.n(p);const m={"theme3.js":async function(t){let{addon:o,console:e}=t;const a=await o.tab.traps.getBlockly(),d=JSON.parse(JSON.stringify(a.Colours));d.sa={primary:"#29beb8",secondary:"#3aa8a4",tertiary:"#3aa8a4"},d.tw={primary:"#ff4c4c",secondary:"#e64444",tertiary:"#e64444"};let b=o.settings.get("text");const g=()=>o.self.disabled?"white":b,h=()=>"colorOnWhite"===g()||"colorOnBlack"===g(),u=t=>o.self.disabled?d[t.colorId].primary:"colorOnWhite"===g()?"#feffff":"colorOnBlack"===g()?"#282828":o.settings.get(t.settingId),p=t=>o.self.disabled?d[t.colorId].secondary:h()?Object(r.a)(u(t),Object(r.d)(o.settings.get(t.settingId),{a:.15})):"black"===g()?Object(r.b)(o.settings.get(t.settingId),{r:.6,g:.6,b:.6}):Object(r.d)(o.settings.get(t.settingId),{r:.9,g:.9,b:.9}),k=t=>o.self.disabled?d[t.colorId].tertiary:h()?o.settings.get(t.settingId):"black"===g()?Object(r.d)(o.settings.get(t.settingId),{r:.65,g:.65,b:.65}):Object(r.d)(o.settings.get(t.settingId),{r:.8,g:.8,b:.8}),m=t=>{if(t instanceof a.Block||t instanceof a.Field){const o=t instanceof a.Block?t:t.sourceBlock_;if(h()||"black"===g()){let t;return t=o.isShadow()&&o.getParent()?o.getParent().getColour():o.getColour(),h()?Object(r.a)(t,Object(r.d)(o.getColourTertiary(),{a:.25})):Object(r.b)(t,{r:.4,g:.4,b:.4})}return o.getColourTertiary()}return h()?Object(r.a)(u(t),Object(r.d)(o.settings.get(t.settingId),{a:.25})):"black"===g()?Object(r.b)(u(t),{r:.4,g:.4,b:.4}):k(t)},f=t=>o.self.disabled||"white"===g()?"#ffffff":"black"===g()?"#000000":t?t.sourceBlock_.getColourTertiary():"#000000",y=()=>o.self.disabled?"#ffffff":{white:"#ffffff",black:"#575e75",colorOnWhite:"#575e75",colorOnBlack:"#ffffff"}[g],x=a.Block.prototype.makeColour_;a.Block.prototype.makeColour_=function(t){return"string"==typeof t&&/^#(?:[0-9A-Za-z]{2}){3,4}$/.test(t)?t:x(t)};const C=a.Toolbox.Category.prototype.createDom;a.Toolbox.Category.prototype.createDom=function(){if(this.iconURI_){if(o.self.disabled)return C.call(this);if(!["sa-blocks","videoSensing","text2speech"].includes(this.id_))return C.call(this);const t=n.exec(this.iconURI_);if(t){const o=atob(t[1]),e="sa-blocks"===this.id_?i:l,r=h?k(e):u(e);if(r){const t=o.replace(/#29beb8|#0ebd8c/gi,r);this.iconURI_="data:image/svg+xml;base64,".concat(btoa(t))}}}if(C.call(this),this.iconURI_)return;const t=s.find(t=>t.id===this.id_);t&&(this.bubble_.style.backgroundColor=h()?m(t):u(t),this.bubble_.style.borderColor=k(t))};const v=a.Block.prototype.setColour;a.Block.prototype.setColour=function(t,o,e){return t.toLowerCase()===d.pen.primary.toLowerCase()&&(t=u(l),o=p(l),e=k(l)),this.type.startsWith("tw_")&&(t=u(c),o=p(c),e=k(c)),v.call(this,t,o,e)};const I=a.BlockSvg.prototype.updateColour;a.BlockSvg.prototype.updateColour=function(){if(I.call(this),h())for(const t of this.inputList)t.outlinePath&&t.outlinePath.setAttribute("fill",m(this))};const _=a.BlockSvg.prototype.showContextMenu_;a.BlockSvg.prototype.showContextMenu_=function(t){return a.WidgetDiv.DIV.style.setProperty("--editorTheme3-hoveredItem",m(this)),_.call(this,t)};const w=a.FieldLabel.prototype.init;a.FieldLabel.prototype.init=function(){w.call(this),this.textElement_.style.fill=f(this)};const T=a.FieldTextInput.prototype.init;a.FieldTextInput.prototype.init=function(){T.call(this),this.sourceBlock_.isShadow()||this.box_.setAttribute("fill",m(this))};const D=a.FieldDropdown.prototype.init;a.FieldDropdown.prototype.init=function(){D.call(this),this.textElement_.style.setProperty("fill",f(this),"important"),"#ffffff"!==f(this)&&(this.arrow_.style.filter=Object(r.f)(f(this)))};const B=a.FieldDropdown.prototype.showEditor_;a.FieldDropdown.prototype.showEditor_=function(){let t;B.call(this),this.disableColourChange_||(this.sourceBlock_.isShadow()?this.sourceBlock_.setShadowColour(m(this)):this.box_&&this.box_.setAttribute("fill",m(this))),t=this.sourceBlock_.isShadow()&&this.sourceBlock_.getParent()?this.sourceBlock_.getParent().getColour():this.sourceBlock_.getColour(),a.DropDownDiv.DIV_.style.backgroundColor=Object(r.g)(t),h()?a.DropDownDiv.getContentDiv().style.setProperty("--editorTheme3-hoveredItem",m(this)):a.DropDownDiv.getContentDiv().style.removeProperty("--editorTheme3-hoveredItem")};const F=a.FieldVariable.prototype.init;a.FieldVariable.prototype.init=function(){F.call(this),this.textElement_.style.setProperty("fill",f(this),"important")};const O=a.FieldVariableGetter.prototype.init;a.FieldVariableGetter.prototype.init=function(){O.call(this),this.textElement_.style.fill=f(this)};const S=a.FieldMatrix.prototype.updateMatrix_;a.FieldMatrix.prototype.updateMatrix_=function(){S.call(this);for(let t=0;t<this.matrix_.length;t++)"0"!==this.matrix_[t]&&(this.fillMatrixNode_(this.ledButtons_,t,y()),this.fillMatrixNode_(this.ledThumbNodes_,t,y()))};const j=a.FieldMatrix.prototype.createButton_;a.FieldMatrix.prototype.createButton_=function(t){return"#FFFFFF"===t&&(t=y()),j.call(this,t)};const E=a.FieldVerticalSeparator.prototype.init;a.FieldVerticalSeparator.prototype.init=function(){E.call(this),"black"===g()&&this.lineElement_.setAttribute("stroke",this.sourceBlock_.getColourTertiary())};const M=()=>{const t=o.tab.traps.vm;b=o.settings.get("text");for(const t of s){const o="--editorTheme3-".concat(t.colorId);for(const[e,r]of Object.entries({primary:u(t),secondary:p(t),tertiary:k(t),field:m(t)}))document.documentElement.style.setProperty("".concat(o,"-").concat(e),r);a.Colours[t.colorId]&&(a.Colours[t.colorId].primary=u(t),a.Colours[t.colorId].secondary=p(t),a.Colours[t.colorId].tertiary=k(t))}var e,r;o.tab.setCustomBlockColor({color:u(i),secondaryColor:p(i),tertiaryColor:k(i)}),a.Colours.textField=(e="input-color",r="textField",o.self.disabled?d[r]:o.settings.get(e)),"#575e75"===y()?a.Colours.fieldShadow="rgba(0, 0, 0, 0.15)":a.Colours.fieldShadow=d.fieldShadow;const n=a.getMainWorkspace(),l=n.getFlyout(),c=n.getToolbox();t.editingTarget&&t.emitWorkspaceUpdate();const g=l.getWorkspace();a.Xml.clearWorkspaceAndLoadFromXml(a.Xml.workspaceToDom(g),g),c.populate_(n.options.languageTree),n.toolboxRefreshEnabled_=!0};M(),o.settings.addEventListener("change",M),o.self.addEventListener("disabled",M),o.self.addEventListener("reenabled",M)},"theme3.css":d.a,"black_text.css":g.a,"color_on_white.css":u.a,"color_on_black.css":k.a}}}]);