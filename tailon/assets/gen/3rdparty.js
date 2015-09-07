(function(global,factory){if(typeof module==="object"&&typeof module.exports==="object"){module.exports=global.document?factory(global,true):function(w){if(!w.document){throw new Error("jQuery requires a window with a document");}
return factory(w);};}else{factory(global);}
}(typeof window!=="undefined"?window:this,function(window,noGlobal){


var arr=[];var slice=arr.slice;var concat=arr.concat;var push=arr.push;var indexOf=arr.indexOf;var class2type={};var toString=class2type.toString;var hasOwn=class2type.hasOwnProperty;var support={};var

document=window.document,version="2.1.4", jQuery=function(selector,context){return new jQuery.fn.init(selector,context);},
 rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, rmsPrefix=/^-ms-/,rdashAlpha=/-([\da-z])/gi,fcamelCase=function(all,letter){return letter.toUpperCase();};jQuery.fn=jQuery.prototype={ jquery:version,constructor:jQuery, selector:"", length:0,toArray:function(){return slice.call(this);},
 get:function(num){return num!=null?(num<0?this[num+this.length]:this[num]): slice.call(this);},
pushStack:function(elems){ var ret=jQuery.merge(this.constructor(),elems);ret.prevObject=this;ret.context=this.context; return ret;},
each:function(callback,args){return jQuery.each(this,callback,args);},map:function(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem);}));},slice:function(){return this.pushStack(slice.apply(this,arguments));},first:function(){return this.eq(0);},last:function(){return this.eq(-1);},eq:function(i){var len=this.length,j=+i+(i<0?len:0);return this.pushStack(j>=0&&j<len?[this[j]]:[]);},end:function(){return this.prevObject||this.constructor(null);},push:push,sort:arr.sort,splice:arr.splice};jQuery.extend=jQuery.fn.extend=function(){var options,name,src,copy,copyIsArray,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=false; if(typeof target==="boolean"){deep=target; target=arguments[i]||{};i++;}
if(typeof target!=="object"&&!jQuery.isFunction(target)){target={};} 
if(i===length){target=this;i--;}
for(;i<length;i++){ if((options=arguments[i])!=null){ for(name in options){src=target[name];copy=options[name]; if(target===copy){continue;} 
if(deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=jQuery.isArray(copy)))){if(copyIsArray){copyIsArray=false;clone=src&&jQuery.isArray(src)?src:[];}else{clone=src&&jQuery.isPlainObject(src)?src:{};} 
target[name]=jQuery.extend(deep,clone,copy);}else if(copy!==undefined){target[name]=copy;}}}} 
return target;};jQuery.extend({ expando:"jQuery"+(version+Math.random()).replace(/\D/g,""), isReady:true,error:function(msg){throw new Error(msg);},noop:function(){},isFunction:function(obj){return jQuery.type(obj)==="function";},isArray:Array.isArray,isWindow:function(obj){return obj!=null&&obj===obj.window;},isNumeric:function(obj){

return!jQuery.isArray(obj)&&(obj-parseFloat(obj)+1)>=0;},isPlainObject:function(obj){
 if(jQuery.type(obj)!=="object"||obj.nodeType||jQuery.isWindow(obj)){return false;}
if(obj.constructor&&!hasOwn.call(obj.constructor.prototype,"isPrototypeOf")){return false;}
 
return true;},isEmptyObject:function(obj){var name;for(name in obj){return false;}
return true;},type:function(obj){if(obj==null){return obj+"";}
return typeof obj==="object"||typeof obj==="function"?class2type[toString.call(obj)]||"object":typeof obj;}, globalEval:function(code){var script,indirect=eval;code=jQuery.trim(code);if(code){

if(code.indexOf("use strict")===1){script=document.createElement("script");script.text=code;document.head.appendChild(script).parentNode.removeChild(script);}else{
 indirect(code);}}},
camelCase:function(string){return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase);},nodeName:function(elem,name){return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase();}, each:function(obj,callback,args){var value,i=0,length=obj.length,isArray=isArraylike(obj);if(args){if(isArray){for(;i<length;i++){value=callback.apply(obj[i],args);if(value===false){break;}}}else{for(i in obj){value=callback.apply(obj[i],args);if(value===false){break;}}}
}else{if(isArray){for(;i<length;i++){value=callback.call(obj[i],i,obj[i]);if(value===false){break;}}}else{for(i in obj){value=callback.call(obj[i],i,obj[i]);if(value===false){break;}}}}
return obj;},  trim:function(text){return text==null?"":(text+"").replace(rtrim,"");}, makeArray:function(arr,results){var ret=results||[];if(arr!=null){if(isArraylike(Object(arr))){jQuery.merge(ret,typeof arr==="string"?[arr]:arr);}else{push.call(ret,arr);}}
return ret;},inArray:function(elem,arr,i){return arr==null?-1:indexOf.call(arr,elem,i);},merge:function(first,second){var len=+second.length,j=0,i=first.length;for(;j<len;j++){first[i++]=second[j];}
first.length=i;return first;},grep:function(elems,callback,invert){var callbackInverse,matches=[],i=0,length=elems.length,callbackExpect=!invert;
 for(;i<length;i++){callbackInverse=!callback(elems[i],i);if(callbackInverse!==callbackExpect){matches.push(elems[i]);}}
return matches;}, map:function(elems,callback,arg){var value,i=0,length=elems.length,isArray=isArraylike(elems),ret=[]; if(isArray){for(;i<length;i++){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}
}else{for(i in elems){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}} 
return concat.apply([],ret);}, guid:1,
proxy:function(fn,context){var tmp,args,proxy;if(typeof context==="string"){tmp=fn[context];context=fn;fn=tmp;}

if(!jQuery.isFunction(fn)){return undefined;} 
args=slice.call(arguments,2);proxy=function(){return fn.apply(context||this,args.concat(slice.call(arguments)));}; proxy.guid=fn.guid=fn.guid||jQuery.guid++;return proxy;},now:Date.now,
support:support});jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(i,name){class2type["[object "+name+"]"]=name.toLowerCase();});function isArraylike(obj){
 
var length="length"in obj&&obj.length,type=jQuery.type(obj);if(type==="function"||jQuery.isWindow(obj)){return false;}
if(obj.nodeType===1&&length){return true;}
return type==="array"||length===0||typeof length==="number"&&length>0&&(length-1)in obj;}
var Sizzle=(function(window){var i,support,Expr,getText,isXML,tokenize,compile,select,outermostContext,sortInput,hasDuplicate, setDocument,document,docElem,documentIsHTML,rbuggyQSA,rbuggyMatches,matches,contains, expando="sizzle"+1*new Date(),preferredDoc=window.document,dirruns=0,done=0,classCache=createCache(),tokenCache=createCache(),compilerCache=createCache(),sortOrder=function(a,b){if(a===b){hasDuplicate=true;}
return 0;},  MAX_NEGATIVE=1<<31,  hasOwn=({}).hasOwnProperty,arr=[],pop=arr.pop,push_native=arr.push,push=arr.push,slice=arr.slice,
 indexOf=function(list,elem){var i=0,len=list.length;for(;i<len;i++){if(list[i]===elem){return i;}}
return-1;},booleans="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
 whitespace="[\\x20\\t\\r\\n\\f]", characterEncoding="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

 identifier=characterEncoding.replace("w","w#"), attributes="\\["+whitespace+"*("+characterEncoding+")(?:"+whitespace+
"*([*^$|!~]?=)"+whitespace+
"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+identifier+"))|)"+whitespace+"*\\]",pseudos=":("+characterEncoding+")(?:\\(("+
"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|"+
"((?:\\\\.|[^\\\\()[\\]]|"+attributes+")*)|"+
".*"+")\\)|)", rwhitespace=new RegExp(whitespace+"+","g"),rtrim=new RegExp("^"+whitespace+"+|((?:^|[^\\\\])(?:\\\\.)*)"+whitespace+"+$","g"),rcomma=new RegExp("^"+whitespace+"*,"+whitespace+"*"),rcombinators=new RegExp("^"+whitespace+"*([>+~]|"+whitespace+")"+whitespace+"*"),rattributeQuotes=new RegExp("="+whitespace+"*([^\\]'\"]*?)"+whitespace+"*\\]","g"),rpseudo=new RegExp(pseudos),ridentifier=new RegExp("^"+identifier+"$"),matchExpr={"ID":new RegExp("^#("+characterEncoding+")"),"CLASS":new RegExp("^\\.("+characterEncoding+")"),"TAG":new RegExp("^("+characterEncoding.replace("w","w*")+")"),"ATTR":new RegExp("^"+attributes),"PSEUDO":new RegExp("^"+pseudos),"CHILD":new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+whitespace+"*(even|odd|(([+-]|)(\\d*)n|)"+whitespace+"*(?:([+-]|)"+whitespace+"*(\\d+)|))"+whitespace+"*\\)|)","i"),"bool":new RegExp("^(?:"+booleans+")$","i"),
"needsContext":new RegExp("^"+whitespace+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+
whitespace+"*((?:-\\d)?\\d*)"+whitespace+"*\\)|)(?=[^-]|$)","i")},rinputs=/^(?:input|select|textarea|button)$/i,rheader=/^h\d$/i,rnative=/^[^{]+\{\s*\[native \w/, rquickExpr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,rsibling=/[+~]/,rescape=/'|\\/g, runescape=new RegExp("\\\\([\\da-f]{1,6}"+whitespace+"?|("+whitespace+")|.)","ig"),funescape=function(_,escaped,escapedWhitespace){var high="0x"+escaped-0x10000;

return high!==high||escapedWhitespace?escaped:high<0? String.fromCharCode(high+0x10000):String.fromCharCode(high>>10|0xD800,high&0x3FF|0xDC00);},
 
unloadHandler=function(){setDocument();};try{push.apply((arr=slice.call(preferredDoc.childNodes)),preferredDoc.childNodes);
 arr[preferredDoc.childNodes.length].nodeType;}catch(e){push={apply:arr.length? function(target,els){push_native.apply(target,slice.call(els));}:
 function(target,els){var j=target.length,i=0; while((target[j++]=els[i++])){}
target.length=j-1;}};}
function Sizzle(selector,context,results,seed){var match,elem,m,nodeType, i,groups,old,nid,newContext,newSelector;if((context?context.ownerDocument||context:preferredDoc)!==document){setDocument(context);}
context=context||document;results=results||[];nodeType=context.nodeType;if(typeof selector!=="string"||!selector||nodeType!==1&&nodeType!==9&&nodeType!==11){return results;}
if(!seed&&documentIsHTML){if(nodeType!==11&&(match=rquickExpr.exec(selector))){if((m=match[1])){if(nodeType===9){elem=context.getElementById(m);
if(elem&&elem.parentNode){
 if(elem.id===m){results.push(elem);return results;}}else{return results;}}else{ if(context.ownerDocument&&(elem=context.ownerDocument.getElementById(m))&&contains(context,elem)&&elem.id===m){results.push(elem);return results;}}
}else if(match[2]){push.apply(results,context.getElementsByTagName(selector));return results;}else if((m=match[3])&&support.getElementsByClassName){push.apply(results,context.getElementsByClassName(m));return results;}} 
if(support.qsa&&(!rbuggyQSA||!rbuggyQSA.test(selector))){nid=old=expando;newContext=context;newSelector=nodeType!==1&&selector;

 
if(nodeType===1&&context.nodeName.toLowerCase()!=="object"){groups=tokenize(selector);if((old=context.getAttribute("id"))){nid=old.replace(rescape,"\\$&");}else{context.setAttribute("id",nid);}
nid="[id='"+nid+"'] ";i=groups.length;while(i--){groups[i]=nid+toSelector(groups[i]);}
newContext=rsibling.test(selector)&&testContext(context.parentNode)||context;newSelector=groups.join(",");}
if(newSelector){try{push.apply(results,newContext.querySelectorAll(newSelector));return results;}catch(qsaError){}finally{if(!old){context.removeAttribute("id");}}}}} 
return select(selector.replace(rtrim,"$1"),context,results,seed);}
function createCache(){var keys=[];function cache(key,value){if(keys.push(key+" ")>Expr.cacheLength){ delete cache[keys.shift()];}
return(cache[key+" "]=value);}
return cache;}
function markFunction(fn){fn[expando]=true;return fn;}
function assert(fn){var div=document.createElement("div");try{return!!fn(div);}catch(e){return false;}finally{ if(div.parentNode){div.parentNode.removeChild(div);} 
div=null;}}
function addHandle(attrs,handler){var arr=attrs.split("|"),i=attrs.length;while(i--){Expr.attrHandle[arr[i]]=handler;}}
function siblingCheck(a,b){var cur=b&&a,diff=cur&&a.nodeType===1&&b.nodeType===1&&(~b.sourceIndex||MAX_NEGATIVE)-
(~a.sourceIndex||MAX_NEGATIVE); if(diff){return diff;} 
if(cur){while((cur=cur.nextSibling)){if(cur===b){return-1;}}}
return a?1:-1;}
function createInputPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type===type;};}
function createButtonPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return(name==="input"||name==="button")&&elem.type===type;};}
function createPositionalPseudo(fn){return markFunction(function(argument){argument=+argument;return markFunction(function(seed,matches){var j,matchIndexes=fn([],seed.length,argument),i=matchIndexes.length; while(i--){if(seed[(j=matchIndexes[i])]){seed[j]=!(matches[j]=seed[j]);}}});});}
function testContext(context){return context&&typeof context.getElementsByTagName!=="undefined"&&context;}
support=Sizzle.support={};isXML=Sizzle.isXML=function(elem){
var documentElement=elem&&(elem.ownerDocument||elem).documentElement;return documentElement?documentElement.nodeName!=="HTML":false;};setDocument=Sizzle.setDocument=function(node){var hasCompare,parent,doc=node?node.ownerDocument||node:preferredDoc; if(doc===document||doc.nodeType!==9||!doc.documentElement){return document;} 
document=doc;docElem=doc.documentElement;parent=doc.defaultView;

 if(parent&&parent!==parent.top){ if(parent.addEventListener){parent.addEventListener("unload",unloadHandler,false);}else if(parent.attachEvent){parent.attachEvent("onunload",unloadHandler);}}
documentIsHTML=!isXML(doc);

support.attributes=assert(function(div){div.className="i";return!div.getAttribute("className");}); support.getElementsByTagName=assert(function(div){div.appendChild(doc.createComment(""));return!div.getElementsByTagName("*").length;}); support.getElementsByClassName=rnative.test(doc.getElementsByClassName);

 support.getById=assert(function(div){docElem.appendChild(div).id=expando;return!doc.getElementsByName||!doc.getElementsByName(expando).length;}); if(support.getById){Expr.find["ID"]=function(id,context){if(typeof context.getElementById!=="undefined"&&documentIsHTML){var m=context.getElementById(id);
 return m&&m.parentNode?[m]:[];}};Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){return elem.getAttribute("id")===attrId;};};}else{
 delete Expr.find["ID"];Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){var node=typeof elem.getAttributeNode!=="undefined"&&elem.getAttributeNode("id");return node&&node.value===attrId;};};} 
Expr.find["TAG"]=support.getElementsByTagName?function(tag,context){if(typeof context.getElementsByTagName!=="undefined"){return context.getElementsByTagName(tag);}else if(support.qsa){return context.querySelectorAll(tag);}}:function(tag,context){var elem,tmp=[],i=0, results=context.getElementsByTagName(tag); if(tag==="*"){while((elem=results[i++])){if(elem.nodeType===1){tmp.push(elem);}}
return tmp;}
return results;}; Expr.find["CLASS"]=support.getElementsByClassName&&function(className,context){if(documentIsHTML){return context.getElementsByClassName(className);}};
rbuggyMatches=[];


 
rbuggyQSA=[];if((support.qsa=rnative.test(doc.querySelectorAll))){
 assert(function(div){


 docElem.appendChild(div).innerHTML="<a id='"+expando+"'></a>"+"<select id='"+expando+"-\f]' msallowcapture=''>"+"<option selected=''></option></select>";

 if(div.querySelectorAll("[msallowcapture^='']").length){rbuggyQSA.push("[*^$]="+whitespace+"*(?:''|\"\")");}
 
if(!div.querySelectorAll("[selected]").length){rbuggyQSA.push("\\["+whitespace+"*(?:value|"+booleans+")");}
if(!div.querySelectorAll("[id~="+expando+"-]").length){rbuggyQSA.push("~=");}

 
if(!div.querySelectorAll(":checked").length){rbuggyQSA.push(":checked");}
 
if(!div.querySelectorAll("a#"+expando+"+*").length){rbuggyQSA.push(".#.+[+~]");}});assert(function(div){
 var input=doc.createElement("input");input.setAttribute("type","hidden");div.appendChild(input).setAttribute("name","D");
 if(div.querySelectorAll("[name=d]").length){rbuggyQSA.push("name"+whitespace+"*[*^$|!~]?=");} 
if(!div.querySelectorAll(":enabled").length){rbuggyQSA.push(":enabled",":disabled");} 
div.querySelectorAll("*,:x");rbuggyQSA.push(",.*:");});}
if((support.matchesSelector=rnative.test((matches=docElem.matches||docElem.webkitMatchesSelector||docElem.mozMatchesSelector||docElem.oMatchesSelector||docElem.msMatchesSelector)))){assert(function(div){
support.disconnectedMatch=matches.call(div,"div");
 matches.call(div,"[s!='']:x");rbuggyMatches.push("!=",pseudos);});}
rbuggyQSA=rbuggyQSA.length&&new RegExp(rbuggyQSA.join("|"));rbuggyMatches=rbuggyMatches.length&&new RegExp(rbuggyMatches.join("|"));hasCompare=rnative.test(docElem.compareDocumentPosition);

 contains=hasCompare||rnative.test(docElem.contains)?function(a,b){var adown=a.nodeType===9?a.documentElement:a,bup=b&&b.parentNode;return a===bup||!!(bup&&bup.nodeType===1&&(adown.contains?adown.contains(bup):a.compareDocumentPosition&&a.compareDocumentPosition(bup)&16));}:function(a,b){if(b){while((b=b.parentNode)){if(b===a){return true;}}}
return false;}; sortOrder=hasCompare?function(a,b){ if(a===b){hasDuplicate=true;return 0;} 
var compare=!a.compareDocumentPosition-!b.compareDocumentPosition;if(compare){return compare;} 
compare=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b): 1; if(compare&1||(!support.sortDetached&&b.compareDocumentPosition(a)===compare)){ if(a===doc||a.ownerDocument===preferredDoc&&contains(preferredDoc,a)){return-1;}
if(b===doc||b.ownerDocument===preferredDoc&&contains(preferredDoc,b)){return 1;} 
return sortInput?(indexOf(sortInput,a)-indexOf(sortInput,b)):0;}
return compare&4?-1:1;}:function(a,b){ if(a===b){hasDuplicate=true;return 0;}
var cur,i=0,aup=a.parentNode,bup=b.parentNode,ap=[a],bp=[b]; if(!aup||!bup){return a===doc?-1:b===doc?1:aup?-1:bup?1:sortInput?(indexOf(sortInput,a)-indexOf(sortInput,b)):0;}else if(aup===bup){return siblingCheck(a,b);} 
cur=a;while((cur=cur.parentNode)){ap.unshift(cur);}
cur=b;while((cur=cur.parentNode)){bp.unshift(cur);} 
while(ap[i]===bp[i]){i++;}
return i?  siblingCheck(ap[i],bp[i]): ap[i]===preferredDoc?-1:bp[i]===preferredDoc?1:0;};return doc;};Sizzle.matches=function(expr,elements){return Sizzle(expr,null,null,elements);};Sizzle.matchesSelector=function(elem,expr){ if((elem.ownerDocument||elem)!==document){setDocument(elem);} 
expr=expr.replace(rattributeQuotes,"='$1']");if(support.matchesSelector&&documentIsHTML&&(!rbuggyMatches||!rbuggyMatches.test(expr))&&(!rbuggyQSA||!rbuggyQSA.test(expr))){try{var ret=matches.call(elem,expr); if(ret||support.disconnectedMatch||
 elem.document&&elem.document.nodeType!==11){return ret;}}catch(e){}}
return Sizzle(expr,document,null,[elem]).length>0;};Sizzle.contains=function(context,elem){ if((context.ownerDocument||context)!==document){setDocument(context);}
return contains(context,elem);};Sizzle.attr=function(elem,name){ if((elem.ownerDocument||elem)!==document){setDocument(elem);}
var fn=Expr.attrHandle[name.toLowerCase()],val=fn&&hasOwn.call(Expr.attrHandle,name.toLowerCase())?fn(elem,name,!documentIsHTML):undefined;return val!==undefined?val:support.attributes||!documentIsHTML?elem.getAttribute(name):(val=elem.getAttributeNode(name))&&val.specified?val.value:null;};Sizzle.error=function(msg){throw new Error("Syntax error, unrecognized expression: "+msg);};Sizzle.uniqueSort=function(results){var elem,duplicates=[],j=0,i=0; hasDuplicate=!support.detectDuplicates;sortInput=!support.sortStable&&results.slice(0);results.sort(sortOrder);if(hasDuplicate){while((elem=results[i++])){if(elem===results[i]){j=duplicates.push(i);}}
while(j--){results.splice(duplicates[j],1);}}
 
sortInput=null;return results;};getText=Sizzle.getText=function(elem){var node,ret="",i=0,nodeType=elem.nodeType;if(!nodeType){ while((node=elem[i++])){ ret+=getText(node);}}else if(nodeType===1||nodeType===9||nodeType===11){
if(typeof elem.textContent==="string"){return elem.textContent;}else{ for(elem=elem.firstChild;elem;elem=elem.nextSibling){ret+=getText(elem);}}}else if(nodeType===3||nodeType===4){return elem.nodeValue;} 
return ret;};Expr=Sizzle.selectors={ cacheLength:50,createPseudo:markFunction,match:matchExpr,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{"ATTR":function(match){match[1]=match[1].replace(runescape,funescape); match[3]=(match[3]||match[4]||match[5]||"").replace(runescape,funescape);if(match[2]==="~="){match[3]=" "+match[3]+" ";}
return match.slice(0,4);},"CHILD":function(match){match[1]=match[1].toLowerCase();if(match[1].slice(0,3)==="nth"){ if(!match[3]){Sizzle.error(match[0]);}
 
match[4]=+(match[4]?match[5]+(match[6]||1):2*(match[3]==="even"||match[3]==="odd"));match[5]=+((match[7]+match[8])||match[3]==="odd");}else if(match[3]){Sizzle.error(match[0]);}
return match;},"PSEUDO":function(match){var excess,unquoted=!match[6]&&match[2];if(matchExpr["CHILD"].test(match[0])){return null;} 
if(match[3]){match[2]=match[4]||match[5]||"";}else if(unquoted&&rpseudo.test(unquoted)&&(excess=tokenize(unquoted,true))&&(excess=unquoted.indexOf(")",unquoted.length-excess)-unquoted.length)){ match[0]=match[0].slice(0,excess);match[2]=unquoted.slice(0,excess);}
return match.slice(0,3);}},filter:{"TAG":function(nodeNameSelector){var nodeName=nodeNameSelector.replace(runescape,funescape).toLowerCase();return nodeNameSelector==="*"?function(){return true;}:function(elem){return elem.nodeName&&elem.nodeName.toLowerCase()===nodeName;};},"CLASS":function(className){var pattern=classCache[className+" "];return pattern||(pattern=new RegExp("(^|"+whitespace+")"+className+"("+whitespace+"|$)"))&&classCache(className,function(elem){return pattern.test(typeof elem.className==="string"&&elem.className||typeof elem.getAttribute!=="undefined"&&elem.getAttribute("class")||"");});},"ATTR":function(name,operator,check){return function(elem){var result=Sizzle.attr(elem,name);if(result==null){return operator==="!=";}
if(!operator){return true;}
result+="";return operator==="="?result===check:operator==="!="?result!==check:operator==="^="?check&&result.indexOf(check)===0:operator==="*="?check&&result.indexOf(check)>-1:operator==="$="?check&&result.slice(-check.length)===check:operator==="~="?(" "+result.replace(rwhitespace," ")+" ").indexOf(check)>-1:operator==="|="?result===check||result.slice(0,check.length+1)===check+"-":false;};},"CHILD":function(type,what,argument,first,last){var simple=type.slice(0,3)!=="nth",forward=type.slice(-4)!=="last",ofType=what==="of-type";return first===1&&last===0?function(elem){return!!elem.parentNode;}:function(elem,context,xml){var cache,outerCache,node,diff,nodeIndex,start,dir=simple!==forward?"nextSibling":"previousSibling",parent=elem.parentNode,name=ofType&&elem.nodeName.toLowerCase(),useCache=!xml&&!ofType;if(parent){if(simple){while(dir){node=elem;while((node=node[dir])){if(ofType?node.nodeName.toLowerCase()===name:node.nodeType===1){return false;}}
start=dir=type==="only"&&!start&&"nextSibling";}
return true;}
start=[forward?parent.firstChild:parent.lastChild];if(forward&&useCache){ outerCache=parent[expando]||(parent[expando]={});cache=outerCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=cache[0]===dirruns&&cache[2];node=nodeIndex&&parent.childNodes[nodeIndex];while((node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop())){ if(node.nodeType===1&&++diff&&node===elem){outerCache[type]=[dirruns,nodeIndex,diff];break;}}
}else if(useCache&&(cache=(elem[expando]||(elem[expando]={}))[type])&&cache[0]===dirruns){diff=cache[1];}else{ while((node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop())){if((ofType?node.nodeName.toLowerCase()===name:node.nodeType===1)&&++diff){ if(useCache){(node[expando]||(node[expando]={}))[type]=[dirruns,diff];}
if(node===elem){break;}}}} 
diff-=last;return diff===first||(diff%first===0&&diff/first>=0);}};},"PSEUDO":function(pseudo,argument){


 var args,fn=Expr.pseudos[pseudo]||Expr.setFilters[pseudo.toLowerCase()]||Sizzle.error("unsupported pseudo: "+pseudo);

 if(fn[expando]){return fn(argument);} 
if(fn.length>1){args=[pseudo,pseudo,"",argument];return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?markFunction(function(seed,matches){var idx,matched=fn(seed,argument),i=matched.length;while(i--){idx=indexOf(seed,matched[i]);seed[idx]=!(matches[idx]=matched[i]);}}):function(elem){return fn(elem,0,args);};}
return fn;}},pseudos:{"not":markFunction(function(selector){

 var input=[],results=[],matcher=compile(selector.replace(rtrim,"$1"));return matcher[expando]?markFunction(function(seed,matches,context,xml){var elem,unmatched=matcher(seed,null,xml,[]),i=seed.length;while(i--){if((elem=unmatched[i])){seed[i]=!(matches[i]=elem);}}}):function(elem,context,xml){input[0]=elem;matcher(input,null,xml,results);input[0]=null;return!results.pop();};}),"has":markFunction(function(selector){return function(elem){return Sizzle(selector,elem).length>0;};}),"contains":markFunction(function(text){text=text.replace(runescape,funescape);return function(elem){return(elem.textContent||elem.innerText||getText(elem)).indexOf(text)>-1;};}),

"lang":markFunction(function(lang){ if(!ridentifier.test(lang||"")){Sizzle.error("unsupported lang: "+lang);}
lang=lang.replace(runescape,funescape).toLowerCase();return function(elem){var elemLang;do{if((elemLang=documentIsHTML?elem.lang:elem.getAttribute("xml:lang")||elem.getAttribute("lang"))){elemLang=elemLang.toLowerCase();return elemLang===lang||elemLang.indexOf(lang+"-")===0;}}while((elem=elem.parentNode)&&elem.nodeType===1);return false;};}),"target":function(elem){var hash=window.location&&window.location.hash;return hash&&hash.slice(1)===elem.id;},"root":function(elem){return elem===docElem;},"focus":function(elem){return elem===document.activeElement&&(!document.hasFocus||document.hasFocus())&&!!(elem.type||elem.href||~elem.tabIndex);},"enabled":function(elem){return elem.disabled===false;},"disabled":function(elem){return elem.disabled===true;},"checked":function(elem){
 var nodeName=elem.nodeName.toLowerCase();return(nodeName==="input"&&!!elem.checked)||(nodeName==="option"&&!!elem.selected);},"selected":function(elem){
 if(elem.parentNode){elem.parentNode.selectedIndex;}
return elem.selected===true;},"empty":function(elem){
 
for(elem=elem.firstChild;elem;elem=elem.nextSibling){if(elem.nodeType<6){return false;}}
return true;},"parent":function(elem){return!Expr.pseudos["empty"](elem);},"header":function(elem){return rheader.test(elem.nodeName);},"input":function(elem){return rinputs.test(elem.nodeName);},"button":function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type==="button"||name==="button";},"text":function(elem){var attr;return elem.nodeName.toLowerCase()==="input"&&elem.type==="text"&&
((attr=elem.getAttribute("type"))==null||attr.toLowerCase()==="text");},"first":createPositionalPseudo(function(){return[0];}),"last":createPositionalPseudo(function(matchIndexes,length){return[length-1];}),"eq":createPositionalPseudo(function(matchIndexes,length,argument){return[argument<0?argument+length:argument];}),"even":createPositionalPseudo(function(matchIndexes,length){var i=0;for(;i<length;i+=2){matchIndexes.push(i);}
return matchIndexes;}),"odd":createPositionalPseudo(function(matchIndexes,length){var i=1;for(;i<length;i+=2){matchIndexes.push(i);}
return matchIndexes;}),"lt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;--i>=0;){matchIndexes.push(i);}
return matchIndexes;}),"gt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;++i<length;){matchIndexes.push(i);}
return matchIndexes;})}};Expr.pseudos["nth"]=Expr.pseudos["eq"];for(i in{radio:true,checkbox:true,file:true,password:true,image:true}){Expr.pseudos[i]=createInputPseudo(i);}
for(i in{submit:true,reset:true}){Expr.pseudos[i]=createButtonPseudo(i);}
function setFilters(){}
setFilters.prototype=Expr.filters=Expr.pseudos;Expr.setFilters=new setFilters();tokenize=Sizzle.tokenize=function(selector,parseOnly){var matched,match,tokens,type,soFar,groups,preFilters,cached=tokenCache[selector+" "];if(cached){return parseOnly?0:cached.slice(0);}
soFar=selector;groups=[];preFilters=Expr.preFilter;while(soFar){ if(!matched||(match=rcomma.exec(soFar))){if(match){ soFar=soFar.slice(match[0].length)||soFar;}
groups.push((tokens=[]));}
matched=false; if((match=rcombinators.exec(soFar))){matched=match.shift();tokens.push({value:matched, type:match[0].replace(rtrim," ")});soFar=soFar.slice(matched.length);} 
for(type in Expr.filter){if((match=matchExpr[type].exec(soFar))&&(!preFilters[type]||(match=preFilters[type](match)))){matched=match.shift();tokens.push({value:matched,type:type,matches:match});soFar=soFar.slice(matched.length);}}
if(!matched){break;}}

 
return parseOnly?soFar.length:soFar?Sizzle.error(selector): tokenCache(selector,groups).slice(0);};function toSelector(tokens){var i=0,len=tokens.length,selector="";for(;i<len;i++){selector+=tokens[i].value;}
return selector;}
function addCombinator(matcher,combinator,base){var dir=combinator.dir,checkNonElements=base&&dir==="parentNode",doneName=done++;return combinator.first? function(elem,context,xml){while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){return matcher(elem,context,xml);}}}: function(elem,context,xml){var oldCache,outerCache,newCache=[dirruns,doneName]; if(xml){while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){if(matcher(elem,context,xml)){return true;}}}}else{while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){outerCache=elem[expando]||(elem[expando]={});if((oldCache=outerCache[dir])&&oldCache[0]===dirruns&&oldCache[1]===doneName){ return(newCache[2]=oldCache[2]);}else{ outerCache[dir]=newCache; if((newCache[2]=matcher(elem,context,xml))){return true;}}}}}};}
function elementMatcher(matchers){return matchers.length>1?function(elem,context,xml){var i=matchers.length;while(i--){if(!matchers[i](elem,context,xml)){return false;}}
return true;}:matchers[0];}
function multipleContexts(selector,contexts,results){var i=0,len=contexts.length;for(;i<len;i++){Sizzle(selector,contexts[i],results);}
return results;}
function condense(unmatched,map,filter,context,xml){var elem,newUnmatched=[],i=0,len=unmatched.length,mapped=map!=null;for(;i<len;i++){if((elem=unmatched[i])){if(!filter||filter(elem,context,xml)){newUnmatched.push(elem);if(mapped){map.push(i);}}}}
return newUnmatched;}
function setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector){if(postFilter&&!postFilter[expando]){postFilter=setMatcher(postFilter);}
if(postFinder&&!postFinder[expando]){postFinder=setMatcher(postFinder,postSelector);}
return markFunction(function(seed,results,context,xml){var temp,i,elem,preMap=[],postMap=[],preexisting=results.length, elems=seed||multipleContexts(selector||"*",context.nodeType?[context]:context,[]), matcherIn=preFilter&&(seed||!selector)?condense(elems,preMap,preFilter,context,xml):elems,matcherOut=matcher?postFinder||(seed?preFilter:preexisting||postFilter)?[]: results:matcherIn; if(matcher){matcher(matcherIn,matcherOut,context,xml);} 
if(postFilter){temp=condense(matcherOut,postMap);postFilter(temp,[],context,xml); i=temp.length;while(i--){if((elem=temp[i])){matcherOut[postMap[i]]=!(matcherIn[postMap[i]]=elem);}}}
if(seed){if(postFinder||preFilter){if(postFinder){ temp=[];i=matcherOut.length;while(i--){if((elem=matcherOut[i])){ temp.push((matcherIn[i]=elem));}}
postFinder(null,(matcherOut=[]),temp,xml);} 
i=matcherOut.length;while(i--){if((elem=matcherOut[i])&&(temp=postFinder?indexOf(seed,elem):preMap[i])>-1){seed[temp]=!(results[temp]=elem);}}}
}else{matcherOut=condense(matcherOut===results?matcherOut.splice(preexisting,matcherOut.length):matcherOut);if(postFinder){postFinder(null,results,matcherOut,xml);}else{push.apply(results,matcherOut);}}});}
function matcherFromTokens(tokens){var checkContext,matcher,j,len=tokens.length,leadingRelative=Expr.relative[tokens[0].type],implicitRelative=leadingRelative||Expr.relative[" "],i=leadingRelative?1:0,matchContext=addCombinator(function(elem){return elem===checkContext;},implicitRelative,true),matchAnyContext=addCombinator(function(elem){return indexOf(checkContext,elem)>-1;},implicitRelative,true),matchers=[function(elem,context,xml){var ret=(!leadingRelative&&(xml||context!==outermostContext))||((checkContext=context).nodeType?matchContext(elem,context,xml):matchAnyContext(elem,context,xml));checkContext=null;return ret;}];for(;i<len;i++){if((matcher=Expr.relative[tokens[i].type])){matchers=[addCombinator(elementMatcher(matchers),matcher)];}else{matcher=Expr.filter[tokens[i].type].apply(null,tokens[i].matches); if(matcher[expando]){ j=++i;for(;j<len;j++){if(Expr.relative[tokens[j].type]){break;}}
return setMatcher(i>1&&elementMatcher(matchers),i>1&&toSelector(tokens.slice(0,i-1).concat({value:tokens[i-2].type===" "?"*":""})).replace(rtrim,"$1"),matcher,i<j&&matcherFromTokens(tokens.slice(i,j)),j<len&&matcherFromTokens((tokens=tokens.slice(j))),j<len&&toSelector(tokens));}
matchers.push(matcher);}}
return elementMatcher(matchers);}
function matcherFromGroupMatchers(elementMatchers,setMatchers){var bySet=setMatchers.length>0,byElement=elementMatchers.length>0,superMatcher=function(seed,context,xml,results,outermost){var elem,j,matcher,matchedCount=0,i="0",unmatched=seed&&[],setMatched=[],contextBackup=outermostContext, elems=seed||byElement&&Expr.find["TAG"]("*",outermost), dirrunsUnique=(dirruns+=contextBackup==null?1:Math.random()||0.1),len=elems.length;if(outermost){outermostContext=context!==document&&context;}


 
for(;i!==len&&(elem=elems[i])!=null;i++){if(byElement&&elem){j=0;while((matcher=elementMatchers[j++])){if(matcher(elem,context,xml)){results.push(elem);break;}}
if(outermost){dirruns=dirrunsUnique;}} 
if(bySet){ if((elem=!matcher&&elem)){matchedCount--;} 
if(seed){unmatched.push(elem);}}} 
matchedCount+=i;if(bySet&&i!==matchedCount){j=0;while((matcher=setMatchers[j++])){matcher(unmatched,setMatched,context,xml);}
if(seed){ if(matchedCount>0){while(i--){if(!(unmatched[i]||setMatched[i])){setMatched[i]=pop.call(results);}}} 
setMatched=condense(setMatched);} 
push.apply(results,setMatched); if(outermost&&!seed&&setMatched.length>0&&(matchedCount+setMatchers.length)>1){Sizzle.uniqueSort(results);}} 
if(outermost){dirruns=dirrunsUnique;outermostContext=contextBackup;}
return unmatched;};return bySet?markFunction(superMatcher):superMatcher;}
compile=Sizzle.compile=function(selector,match ){var i,setMatchers=[],elementMatchers=[],cached=compilerCache[selector+" "];if(!cached){ if(!match){match=tokenize(selector);}
i=match.length;while(i--){cached=matcherFromTokens(match[i]);if(cached[expando]){setMatchers.push(cached);}else{elementMatchers.push(cached);}} 
cached=compilerCache(selector,matcherFromGroupMatchers(elementMatchers,setMatchers)); cached.selector=selector;}
return cached;};select=Sizzle.select=function(selector,context,results,seed){var i,tokens,token,type,find,compiled=typeof selector==="function"&&selector,match=!seed&&tokenize((selector=compiled.selector||selector));results=results||[]; if(match.length===1){ tokens=match[0]=match[0].slice(0);if(tokens.length>2&&(token=tokens[0]).type==="ID"&&support.getById&&context.nodeType===9&&documentIsHTML&&Expr.relative[tokens[1].type]){context=(Expr.find["ID"](token.matches[0].replace(runescape,funescape),context)||[])[0];if(!context){return results;}else if(compiled){context=context.parentNode;}
selector=selector.slice(tokens.shift().value.length);} 
i=matchExpr["needsContext"].test(selector)?0:tokens.length;while(i--){token=tokens[i]; if(Expr.relative[(type=token.type)]){break;}
if((find=Expr.find[type])){ if((seed=find(token.matches[0].replace(runescape,funescape),rsibling.test(tokens[0].type)&&testContext(context.parentNode)||context))){ tokens.splice(i,1);selector=seed.length&&toSelector(tokens);if(!selector){push.apply(results,seed);return results;}
break;}}}}

(compiled||compile(selector,match))(seed,context,!documentIsHTML,results,rsibling.test(selector)&&testContext(context.parentNode)||context);return results;};
support.sortStable=expando.split("").sort(sortOrder).join("")===expando;support.detectDuplicates=!!hasDuplicate;setDocument();
support.sortDetached=assert(function(div1){return div1.compareDocumentPosition(document.createElement("div"))&1;});
if(!assert(function(div){div.innerHTML="<a href='#'></a>";return div.firstChild.getAttribute("href")==="#";})){addHandle("type|href|height|width",function(elem,name,isXML){if(!isXML){return elem.getAttribute(name,name.toLowerCase()==="type"?1:2);}});}

if(!support.attributes||!assert(function(div){div.innerHTML="<input/>";div.firstChild.setAttribute("value","");return div.firstChild.getAttribute("value")==="";})){addHandle("value",function(elem,name,isXML){if(!isXML&&elem.nodeName.toLowerCase()==="input"){return elem.defaultValue;}});}

if(!assert(function(div){return div.getAttribute("disabled")==null;})){addHandle(booleans,function(elem,name,isXML){var val;if(!isXML){return elem[name]===true?name.toLowerCase():(val=elem.getAttributeNode(name))&&val.specified?val.value:null;}});}
return Sizzle;})(window);jQuery.find=Sizzle;jQuery.expr=Sizzle.selectors;jQuery.expr[":"]=jQuery.expr.pseudos;jQuery.unique=Sizzle.uniqueSort;jQuery.text=Sizzle.getText;jQuery.isXMLDoc=Sizzle.isXML;jQuery.contains=Sizzle.contains;var rneedsContext=jQuery.expr.match.needsContext;var rsingleTag=(/^<(\w+)\s*\/?>(?:<\/\1>|)$/);var risSimple=/^.[^:#\[\.,]*$/;function winnow(elements,qualifier,not){if(jQuery.isFunction(qualifier)){return jQuery.grep(elements,function(elem,i){return!!qualifier.call(elem,i,elem)!==not;});}
if(qualifier.nodeType){return jQuery.grep(elements,function(elem){return(elem===qualifier)!==not;});}
if(typeof qualifier==="string"){if(risSimple.test(qualifier)){return jQuery.filter(qualifier,elements,not);}
qualifier=jQuery.filter(qualifier,elements);}
return jQuery.grep(elements,function(elem){return(indexOf.call(qualifier,elem)>=0)!==not;});}
jQuery.filter=function(expr,elems,not){var elem=elems[0];if(not){expr=":not("+expr+")";}
return elems.length===1&&elem.nodeType===1?jQuery.find.matchesSelector(elem,expr)?[elem]:[]:jQuery.find.matches(expr,jQuery.grep(elems,function(elem){return elem.nodeType===1;}));};jQuery.fn.extend({find:function(selector){var i,len=this.length,ret=[],self=this;if(typeof selector!=="string"){return this.pushStack(jQuery(selector).filter(function(){for(i=0;i<len;i++){if(jQuery.contains(self[i],this)){return true;}}}));}
for(i=0;i<len;i++){jQuery.find(selector,self[i],ret);}
ret=this.pushStack(len>1?jQuery.unique(ret):ret);ret.selector=this.selector?this.selector+" "+selector:selector;return ret;},filter:function(selector){return this.pushStack(winnow(this,selector||[],false));},not:function(selector){return this.pushStack(winnow(this,selector||[],true));},is:function(selector){return!!winnow(this,
typeof selector==="string"&&rneedsContext.test(selector)?jQuery(selector):selector||[],false).length;}});
var rootjQuery,

rquickExpr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,init=jQuery.fn.init=function(selector,context){var match,elem;if(!selector){return this;} 
if(typeof selector==="string"){if(selector[0]==="<"&&selector[selector.length-1]===">"&&selector.length>=3){ match=[null,selector,null];}else{match=rquickExpr.exec(selector);} 
if(match&&(match[1]||!context)){if(match[1]){context=context instanceof jQuery?context[0]:context;
 jQuery.merge(this,jQuery.parseHTML(match[1],context&&context.nodeType?context.ownerDocument||context:document,true));if(rsingleTag.test(match[1])&&jQuery.isPlainObject(context)){for(match in context){ if(jQuery.isFunction(this[match])){this[match](context[match]);}else{this.attr(match,context[match]);}}}
return this;}else{elem=document.getElementById(match[2]);
if(elem&&elem.parentNode){ this.length=1;this[0]=elem;}
this.context=document;this.selector=selector;return this;}
}else if(!context||context.jquery){return(context||rootjQuery).find(selector);
}else{return this.constructor(context).find(selector);}
}else if(selector.nodeType){this.context=this[0]=selector;this.length=1;return this;
}else if(jQuery.isFunction(selector)){return typeof rootjQuery.ready!=="undefined"?rootjQuery.ready(selector): selector(jQuery);}
if(selector.selector!==undefined){this.selector=selector.selector;this.context=selector.context;}
return jQuery.makeArray(selector,this);};init.prototype=jQuery.fn;rootjQuery=jQuery(document);var rparentsprev=/^(?:parents|prev(?:Until|All))/, guaranteedUnique={children:true,contents:true,next:true,prev:true};jQuery.extend({dir:function(elem,dir,until){var matched=[],truncate=until!==undefined;while((elem=elem[dir])&&elem.nodeType!==9){if(elem.nodeType===1){if(truncate&&jQuery(elem).is(until)){break;}
matched.push(elem);}}
return matched;},sibling:function(n,elem){var matched=[];for(;n;n=n.nextSibling){if(n.nodeType===1&&n!==elem){matched.push(n);}}
return matched;}});jQuery.fn.extend({has:function(target){var targets=jQuery(target,this),l=targets.length;return this.filter(function(){var i=0;for(;i<l;i++){if(jQuery.contains(this,targets[i])){return true;}}});},closest:function(selectors,context){var cur,i=0,l=this.length,matched=[],pos=rneedsContext.test(selectors)||typeof selectors!=="string"?jQuery(selectors,context||this.context):0;for(;i<l;i++){for(cur=this[i];cur&&cur!==context;cur=cur.parentNode){ if(cur.nodeType<11&&(pos?pos.index(cur)>-1: cur.nodeType===1&&jQuery.find.matchesSelector(cur,selectors))){matched.push(cur);break;}}}
return this.pushStack(matched.length>1?jQuery.unique(matched):matched);}, index:function(elem){ if(!elem){return(this[0]&&this[0].parentNode)?this.first().prevAll().length:-1;} 
if(typeof elem==="string"){return indexOf.call(jQuery(elem),this[0]);} 
return indexOf.call(this, elem.jquery?elem[0]:elem);},add:function(selector,context){return this.pushStack(jQuery.unique(jQuery.merge(this.get(),jQuery(selector,context))));},addBack:function(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector));}});function sibling(cur,dir){while((cur=cur[dir])&&cur.nodeType!==1){}
return cur;}
jQuery.each({parent:function(elem){var parent=elem.parentNode;return parent&&parent.nodeType!==11?parent:null;},parents:function(elem){return jQuery.dir(elem,"parentNode");},parentsUntil:function(elem,i,until){return jQuery.dir(elem,"parentNode",until);},next:function(elem){return sibling(elem,"nextSibling");},prev:function(elem){return sibling(elem,"previousSibling");},nextAll:function(elem){return jQuery.dir(elem,"nextSibling");},prevAll:function(elem){return jQuery.dir(elem,"previousSibling");},nextUntil:function(elem,i,until){return jQuery.dir(elem,"nextSibling",until);},prevUntil:function(elem,i,until){return jQuery.dir(elem,"previousSibling",until);},siblings:function(elem){return jQuery.sibling((elem.parentNode||{}).firstChild,elem);},children:function(elem){return jQuery.sibling(elem.firstChild);},contents:function(elem){return elem.contentDocument||jQuery.merge([],elem.childNodes);}},function(name,fn){jQuery.fn[name]=function(until,selector){var matched=jQuery.map(this,fn,until);if(name.slice(-5)!=="Until"){selector=until;}
if(selector&&typeof selector==="string"){matched=jQuery.filter(selector,matched);}
if(this.length>1){ if(!guaranteedUnique[name]){jQuery.unique(matched);} 
if(rparentsprev.test(name)){matched.reverse();}}
return this.pushStack(matched);};});var rnotwhite=(/\S+/g);var optionsCache={};function createOptions(options){var object=optionsCache[options]={};jQuery.each(options.match(rnotwhite)||[],function(_,flag){object[flag]=true;});return object;}
jQuery.Callbacks=function(options){
options=typeof options==="string"?(optionsCache[options]||createOptions(options)):jQuery.extend({},options);var
memory, fired, firing,firingStart, firingLength,firingIndex, list=[], stack=!options.once&&[], fire=function(data){memory=options.memory&&data;fired=true;firingIndex=firingStart||0;firingStart=0;firingLength=list.length;firing=true;for(;list&&firingIndex<firingLength;firingIndex++){if(list[firingIndex].apply(data[0],data[1])===false&&options.stopOnFalse){memory=false; break;}}
firing=false;if(list){if(stack){if(stack.length){fire(stack.shift());}}else if(memory){list=[];}else{self.disable();}}}, self={ add:function(){if(list){ var start=list.length;(function add(args){jQuery.each(args,function(_,arg){var type=jQuery.type(arg);if(type==="function"){if(!options.unique||!self.has(arg)){list.push(arg);}}else if(arg&&arg.length&&type!=="string"){ add(arg);}});})(arguments);
if(firing){firingLength=list.length;
}else if(memory){firingStart=start;fire(memory);}}
return this;}, remove:function(){if(list){jQuery.each(arguments,function(_,arg){var index;while((index=jQuery.inArray(arg,list,index))>-1){list.splice(index,1); if(firing){if(index<=firingLength){firingLength--;}
if(index<=firingIndex){firingIndex--;}}}});}
return this;},has:function(fn){return fn?jQuery.inArray(fn,list)>-1:!!(list&&list.length);}, empty:function(){list=[];firingLength=0;return this;}, disable:function(){list=stack=memory=undefined;return this;},disabled:function(){return!list;}, lock:function(){stack=undefined;if(!memory){self.disable();}
return this;},locked:function(){return!stack;}, fireWith:function(context,args){if(list&&(!fired||stack)){args=args||[];args=[context,args.slice?args.slice():args];if(firing){stack.push(args);}else{fire(args);}}
return this;}, fire:function(){self.fireWith(this,arguments);return this;}, fired:function(){return!!fired;}};return self;};jQuery.extend({Deferred:function(func){var tuples=[["resolve","done",jQuery.Callbacks("once memory"),"resolved"],["reject","fail",jQuery.Callbacks("once memory"),"rejected"],["notify","progress",jQuery.Callbacks("memory")]],state="pending",promise={state:function(){return state;},always:function(){deferred.done(arguments).fail(arguments);return this;},then:function(){var fns=arguments;return jQuery.Deferred(function(newDefer){jQuery.each(tuples,function(i,tuple){var fn=jQuery.isFunction(fns[i])&&fns[i]; deferred[tuple[1]](function(){var returned=fn&&fn.apply(this,arguments);if(returned&&jQuery.isFunction(returned.promise)){returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify);}else{newDefer[tuple[0]+"With"](this===promise?newDefer.promise():this,fn?[returned]:arguments);}});});fns=null;}).promise();},
 promise:function(obj){return obj!=null?jQuery.extend(obj,promise):promise;}},deferred={}; promise.pipe=promise.then; jQuery.each(tuples,function(i,tuple){var list=tuple[2],stateString=tuple[3]; promise[tuple[1]]=list.add; if(stateString){list.add(function(){state=stateString;},tuples[i^1][2].disable,tuples[2][2].lock);}
deferred[tuple[0]]=function(){deferred[tuple[0]+"With"](this===deferred?promise:this,arguments);return this;};deferred[tuple[0]+"With"]=list.fireWith;}); promise.promise(deferred); if(func){func.call(deferred,deferred);}
return deferred;}, when:function(subordinate ){var i=0,resolveValues=slice.call(arguments),length=resolveValues.length, remaining=length!==1||(subordinate&&jQuery.isFunction(subordinate.promise))?length:0,deferred=remaining===1?subordinate:jQuery.Deferred(), updateFunc=function(i,contexts,values){return function(value){contexts[i]=this;values[i]=arguments.length>1?slice.call(arguments):value;if(values===progressValues){deferred.notifyWith(contexts,values);}else if(!(--remaining)){deferred.resolveWith(contexts,values);}};},progressValues,progressContexts,resolveContexts; if(length>1){progressValues=new Array(length);progressContexts=new Array(length);resolveContexts=new Array(length);for(;i<length;i++){if(resolveValues[i]&&jQuery.isFunction(resolveValues[i].promise)){resolveValues[i].promise().done(updateFunc(i,resolveContexts,resolveValues)).fail(deferred.reject).progress(updateFunc(i,progressContexts,progressValues));}else{--remaining;}}} 
if(!remaining){deferred.resolveWith(resolveContexts,resolveValues);}
return deferred.promise();}});var readyList;jQuery.fn.ready=function(fn){ jQuery.ready.promise().done(fn);return this;};jQuery.extend({isReady:false,
 readyWait:1, holdReady:function(hold){if(hold){jQuery.readyWait++;}else{jQuery.ready(true);}}, ready:function(wait){ if(wait===true?--jQuery.readyWait:jQuery.isReady){return;} 
jQuery.isReady=true; if(wait!==true&&--jQuery.readyWait>0){return;} 
readyList.resolveWith(document,[jQuery]); if(jQuery.fn.triggerHandler){jQuery(document).triggerHandler("ready");jQuery(document).off("ready");}}});function completed(){document.removeEventListener("DOMContentLoaded",completed,false);window.removeEventListener("load",completed,false);jQuery.ready();}
jQuery.ready.promise=function(obj){if(!readyList){readyList=jQuery.Deferred();
 if(document.readyState==="complete"){ setTimeout(jQuery.ready);}else{ document.addEventListener("DOMContentLoaded",completed,false); window.addEventListener("load",completed,false);}}
return readyList.promise(obj);};jQuery.ready.promise();
var access=jQuery.access=function(elems,fn,key,value,chainable,emptyGet,raw){var i=0,len=elems.length,bulk=key==null; if(jQuery.type(key)==="object"){chainable=true;for(i in key){jQuery.access(elems,fn,i,key[i],true,emptyGet,raw);}
}else if(value!==undefined){chainable=true;if(!jQuery.isFunction(value)){raw=true;}
if(bulk){ if(raw){fn.call(elems,value);fn=null;}else{bulk=fn;fn=function(elem,key,value){return bulk.call(jQuery(elem),value);};}}
if(fn){for(;i<len;i++){fn(elems[i],key,raw?value:value.call(elems[i],i,fn(elems[i],key)));}}}
return chainable?elems: bulk?fn.call(elems):len?fn(elems[0],key):emptyGet;};jQuery.acceptData=function(owner){



 return owner.nodeType===1||owner.nodeType===9||!(+owner.nodeType);};function Data(){ Object.defineProperty(this.cache={},0,{get:function(){return{};}});this.expando=jQuery.expando+Data.uid++;}
Data.uid=1;Data.accepts=jQuery.acceptData;Data.prototype={key:function(owner){if(!Data.accepts(owner)){return 0;}
var descriptor={}, unlock=owner[this.expando]; if(!unlock){unlock=Data.uid++; try{descriptor[this.expando]={value:unlock};Object.defineProperties(owner,descriptor);
}catch(e){descriptor[this.expando]=unlock;jQuery.extend(owner,descriptor);}} 
if(!this.cache[unlock]){this.cache[unlock]={};}
return unlock;},set:function(owner,data,value){var prop,
 unlock=this.key(owner),cache=this.cache[unlock]; if(typeof data==="string"){cache[data]=value;}else{ if(jQuery.isEmptyObject(cache)){jQuery.extend(this.cache[unlock],data);}else{for(prop in data){cache[prop]=data[prop];}}}
return cache;},get:function(owner,key){
var cache=this.cache[this.key(owner)];return key===undefined?cache:cache[key];},access:function(owner,key,value){var stored;




if(key===undefined||((key&&typeof key==="string")&&value===undefined)){stored=this.get(owner,key);return stored!==undefined?stored:this.get(owner,jQuery.camelCase(key));}



this.set(owner,key,value);
return value!==undefined?value:key;},remove:function(owner,key){var i,name,camel,unlock=this.key(owner),cache=this.cache[unlock];if(key===undefined){this.cache[unlock]={};}else{ if(jQuery.isArray(key)){

name=key.concat(key.map(jQuery.camelCase));}else{camel=jQuery.camelCase(key); if(key in cache){name=[key,camel];}else{ name=camel;name=name in cache?[name]:(name.match(rnotwhite)||[]);}}
i=name.length;while(i--){delete cache[name[i]];}}},hasData:function(owner){return!jQuery.isEmptyObject(this.cache[owner[this.expando]]||{});},discard:function(owner){if(owner[this.expando]){delete this.cache[owner[this.expando]];}}};var data_priv=new Data();var data_user=new Data();



var rbrace=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,rmultiDash=/([A-Z])/g;function dataAttr(elem,key,data){var name;
 if(data===undefined&&elem.nodeType===1){name="data-"+key.replace(rmultiDash,"-$1").toLowerCase();data=elem.getAttribute(name);if(typeof data==="string"){try{data=data==="true"?true:data==="false"?false:data==="null"?null:+data+""===data?+data:rbrace.test(data)?jQuery.parseJSON(data):data;}catch(e){} 
data_user.set(elem,key,data);}else{data=undefined;}}
return data;}
jQuery.extend({hasData:function(elem){return data_user.hasData(elem)||data_priv.hasData(elem);},data:function(elem,name,data){return data_user.access(elem,name,data);},removeData:function(elem,name){data_user.remove(elem,name);},
_data:function(elem,name,data){return data_priv.access(elem,name,data);},_removeData:function(elem,name){data_priv.remove(elem,name);}});jQuery.fn.extend({data:function(key,value){var i,name,data,elem=this[0],attrs=elem&&elem.attributes; if(key===undefined){if(this.length){data=data_user.get(elem);if(elem.nodeType===1&&!data_priv.get(elem,"hasDataAttrs")){i=attrs.length;while(i--){if(attrs[i]){name=attrs[i].name;if(name.indexOf("data-")===0){name=jQuery.camelCase(name.slice(5));dataAttr(elem,name,data[name]);}}}
data_priv.set(elem,"hasDataAttrs",true);}}
return data;} 
if(typeof key==="object"){return this.each(function(){data_user.set(this,key);});}
return access(this,function(value){var data,camelKey=jQuery.camelCase(key);



if(elem&&value===undefined){
 data=data_user.get(elem,key);if(data!==undefined){return data;}
 
data=data_user.get(elem,camelKey);if(data!==undefined){return data;}
 
data=dataAttr(elem,camelKey,undefined);if(data!==undefined){return data;}
return;}
this.each(function(){
var data=data_user.get(this,camelKey);
data_user.set(this,camelKey,value);

if(key.indexOf("-")!==-1&&data!==undefined){data_user.set(this,key,value);}});},null,value,arguments.length>1,null,true);},removeData:function(key){return this.each(function(){data_user.remove(this,key);});}});jQuery.extend({queue:function(elem,type,data){var queue;if(elem){type=(type||"fx")+"queue";queue=data_priv.get(elem,type); if(data){if(!queue||jQuery.isArray(data)){queue=data_priv.access(elem,type,jQuery.makeArray(data));}else{queue.push(data);}}
return queue||[];}},dequeue:function(elem,type){type=type||"fx";var queue=jQuery.queue(elem,type),startLength=queue.length,fn=queue.shift(),hooks=jQuery._queueHooks(elem,type),next=function(){jQuery.dequeue(elem,type);}; if(fn==="inprogress"){fn=queue.shift();startLength--;}
if(fn){
 if(type==="fx"){queue.unshift("inprogress");} 
delete hooks.stop;fn.call(elem,next,hooks);}
if(!startLength&&hooks){hooks.empty.fire();}}, _queueHooks:function(elem,type){var key=type+"queueHooks";return data_priv.get(elem,key)||data_priv.access(elem,key,{empty:jQuery.Callbacks("once memory").add(function(){data_priv.remove(elem,[type+"queue",key]);})});}});jQuery.fn.extend({queue:function(type,data){var setter=2;if(typeof type!=="string"){data=type;type="fx";setter--;}
if(arguments.length<setter){return jQuery.queue(this[0],type);}
return data===undefined?this:this.each(function(){var queue=jQuery.queue(this,type,data); jQuery._queueHooks(this,type);if(type==="fx"&&queue[0]!=="inprogress"){jQuery.dequeue(this,type);}});},dequeue:function(type){return this.each(function(){jQuery.dequeue(this,type);});},clearQueue:function(type){return this.queue(type||"fx",[]);},
promise:function(type,obj){var tmp,count=1,defer=jQuery.Deferred(),elements=this,i=this.length,resolve=function(){if(!(--count)){defer.resolveWith(elements,[elements]);}};if(typeof type!=="string"){obj=type;type=undefined;}
type=type||"fx";while(i--){tmp=data_priv.get(elements[i],type+"queueHooks");if(tmp&&tmp.empty){count++;tmp.empty.add(resolve);}}
resolve();return defer.promise(obj);}});var pnum=(/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;var cssExpand=["Top","Right","Bottom","Left"];var isHidden=function(elem,el){ elem=el||elem;return jQuery.css(elem,"display")==="none"||!jQuery.contains(elem.ownerDocument,elem);};var rcheckableType=(/^(?:checkbox|radio)$/i);(function(){var fragment=document.createDocumentFragment(),div=fragment.appendChild(document.createElement("div")),input=document.createElement("input");

input.setAttribute("type","radio");input.setAttribute("checked","checked");input.setAttribute("name","t");div.appendChild(input);
 support.checkClone=div.cloneNode(true).cloneNode(true).lastChild.checked; div.innerHTML="<textarea>x</textarea>";support.noCloneChecked=!!div.cloneNode(true).lastChild.defaultValue;})();var strundefined=typeof undefined;support.focusinBubbles="onfocusin"in window;var
rkeyEvent=/^key/,rmouseEvent=/^(?:mouse|pointer|contextmenu)|click/,rfocusMorph=/^(?:focusinfocus|focusoutblur)$/,rtypenamespace=/^([^.]*)(?:\.(.+)|)$/;function returnTrue(){return true;}
function returnFalse(){return false;}
function safeActiveElement(){try{return document.activeElement;}catch(err){}}
jQuery.event={global:{},add:function(elem,types,handler,data,selector){var handleObjIn,eventHandle,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=data_priv.get(elem);if(!elemData){return;} 
if(handler.handler){handleObjIn=handler;handler=handleObjIn.handler;selector=handleObjIn.selector;} 
if(!handler.guid){handler.guid=jQuery.guid++;} 
if(!(events=elemData.events)){events=elemData.events={};}
if(!(eventHandle=elemData.handle)){eventHandle=elemData.handle=function(e){
 return typeof jQuery!==strundefined&&jQuery.event.triggered!==e.type?jQuery.event.dispatch.apply(elem,arguments):undefined;};} 
types=(types||"").match(rnotwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort(); if(!type){continue;} 
special=jQuery.event.special[type]||{}; type=(selector?special.delegateType:special.bindType)||type; special=jQuery.event.special[type]||{}; handleObj=jQuery.extend({type:type,origType:origType,data:data,handler:handler,guid:handler.guid,selector:selector,needsContext:selector&&jQuery.expr.match.needsContext.test(selector),namespace:namespaces.join(".")},handleObjIn); if(!(handlers=events[type])){handlers=events[type]=[];handlers.delegateCount=0; if(!special.setup||special.setup.call(elem,data,namespaces,eventHandle)===false){if(elem.addEventListener){elem.addEventListener(type,eventHandle,false);}}}
if(special.add){special.add.call(elem,handleObj);if(!handleObj.handler.guid){handleObj.handler.guid=handler.guid;}} 
if(selector){handlers.splice(handlers.delegateCount++,0,handleObj);}else{handlers.push(handleObj);} 
jQuery.event.global[type]=true;}}, remove:function(elem,types,handler,selector,mappedTypes){var j,origCount,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=data_priv.hasData(elem)&&data_priv.get(elem);if(!elemData||!(events=elemData.events)){return;} 
types=(types||"").match(rnotwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort(); if(!type){for(type in events){jQuery.event.remove(elem,type+types[t],handler,selector,true);}
continue;}
special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;handlers=events[type]||[];tmp=tmp[2]&&new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"); origCount=j=handlers.length;while(j--){handleObj=handlers[j];if((mappedTypes||origType===handleObj.origType)&&(!handler||handler.guid===handleObj.guid)&&(!tmp||tmp.test(handleObj.namespace))&&(!selector||selector===handleObj.selector||selector==="**"&&handleObj.selector)){handlers.splice(j,1);if(handleObj.selector){handlers.delegateCount--;}
if(special.remove){special.remove.call(elem,handleObj);}}}

if(origCount&&!handlers.length){if(!special.teardown||special.teardown.call(elem,namespaces,elemData.handle)===false){jQuery.removeEvent(elem,type,elemData.handle);}
delete events[type];}} 
if(jQuery.isEmptyObject(events)){delete elemData.handle;data_priv.remove(elem,"events");}},trigger:function(event,data,elem,onlyHandlers){var i,cur,tmp,bubbleType,ontype,handle,special,eventPath=[elem||document],type=hasOwn.call(event,"type")?event.type:event,namespaces=hasOwn.call(event,"namespace")?event.namespace.split("."):[];cur=tmp=elem=elem||document; if(elem.nodeType===3||elem.nodeType===8){return;} 
if(rfocusMorph.test(type+jQuery.event.triggered)){return;}
if(type.indexOf(".")>=0){namespaces=type.split(".");type=namespaces.shift();namespaces.sort();}
ontype=type.indexOf(":")<0&&"on"+type; event=event[jQuery.expando]?event:new jQuery.Event(type,typeof event==="object"&&event);event.isTrigger=onlyHandlers?2:3;event.namespace=namespaces.join(".");event.namespace_re=event.namespace?new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"):null; event.result=undefined;if(!event.target){event.target=elem;} 
data=data==null?[event]:jQuery.makeArray(data,[event]); special=jQuery.event.special[type]||{};if(!onlyHandlers&&special.trigger&&special.trigger.apply(elem,data)===false){return;} 
if(!onlyHandlers&&!special.noBubble&&!jQuery.isWindow(elem)){bubbleType=special.delegateType||type;if(!rfocusMorph.test(bubbleType+type)){cur=cur.parentNode;}
for(;cur;cur=cur.parentNode){eventPath.push(cur);tmp=cur;}
if(tmp===(elem.ownerDocument||document)){eventPath.push(tmp.defaultView||tmp.parentWindow||window);}} 
i=0;while((cur=eventPath[i++])&&!event.isPropagationStopped()){event.type=i>1?bubbleType:special.bindType||type; handle=(data_priv.get(cur,"events")||{})[event.type]&&data_priv.get(cur,"handle");if(handle){handle.apply(cur,data);} 
handle=ontype&&cur[ontype];if(handle&&handle.apply&&jQuery.acceptData(cur)){event.result=handle.apply(cur,data);if(event.result===false){event.preventDefault();}}}
event.type=type; if(!onlyHandlers&&!event.isDefaultPrevented()){if((!special._default||special._default.apply(eventPath.pop(),data)===false)&&jQuery.acceptData(elem)){if(ontype&&jQuery.isFunction(elem[type])&&!jQuery.isWindow(elem)){ tmp=elem[ontype];if(tmp){elem[ontype]=null;} 
jQuery.event.triggered=type;elem[type]();jQuery.event.triggered=undefined;if(tmp){elem[ontype]=tmp;}}}}
return event.result;},dispatch:function(event){ event=jQuery.event.fix(event);var i,j,ret,matched,handleObj,handlerQueue=[],args=slice.call(arguments),handlers=(data_priv.get(this,"events")||{})[event.type]||[],special=jQuery.event.special[event.type]||{}; args[0]=event;event.delegateTarget=this; if(special.preDispatch&&special.preDispatch.call(this,event)===false){return;} 
handlerQueue=jQuery.event.handlers.call(this,event,handlers); i=0;while((matched=handlerQueue[i++])&&!event.isPropagationStopped()){event.currentTarget=matched.elem;j=0;while((handleObj=matched.handlers[j++])&&!event.isImmediatePropagationStopped()){
if(!event.namespace_re||event.namespace_re.test(handleObj.namespace)){event.handleObj=handleObj;event.data=handleObj.data;ret=((jQuery.event.special[handleObj.origType]||{}).handle||handleObj.handler).apply(matched.elem,args);if(ret!==undefined){if((event.result=ret)===false){event.preventDefault();event.stopPropagation();}}}}} 
if(special.postDispatch){special.postDispatch.call(this,event);}
return event.result;},handlers:function(event,handlers){var i,matches,sel,handleObj,handlerQueue=[],delegateCount=handlers.delegateCount,cur=event.target;

if(delegateCount&&cur.nodeType&&(!event.button||event.type!=="click")){for(;cur!==this;cur=cur.parentNode||this){if(cur.disabled!==true||event.type!=="click"){matches=[];for(i=0;i<delegateCount;i++){handleObj=handlers[i];sel=handleObj.selector+" ";if(matches[sel]===undefined){matches[sel]=handleObj.needsContext?jQuery(sel,this).index(cur)>=0:jQuery.find(sel,this,null,[cur]).length;}
if(matches[sel]){matches.push(handleObj);}}
if(matches.length){handlerQueue.push({elem:cur,handlers:matches});}}}} 
if(delegateCount<handlers.length){handlerQueue.push({elem:this,handlers:handlers.slice(delegateCount)});}
return handlerQueue;}, props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(event,original){ if(event.which==null){event.which=original.charCode!=null?original.charCode:original.keyCode;}
return event;}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(event,original){var eventDoc,doc,body,button=original.button; if(event.pageX==null&&original.clientX!=null){eventDoc=event.target.ownerDocument||document;doc=eventDoc.documentElement;body=eventDoc.body;event.pageX=original.clientX+(doc&&doc.scrollLeft||body&&body.scrollLeft||0)-(doc&&doc.clientLeft||body&&body.clientLeft||0);event.pageY=original.clientY+(doc&&doc.scrollTop||body&&body.scrollTop||0)-(doc&&doc.clientTop||body&&body.clientTop||0);}
 
if(!event.which&&button!==undefined){event.which=(button&1?1:(button&2?3:(button&4?2:0)));}
return event;}},fix:function(event){if(event[jQuery.expando]){return event;} 
var i,prop,copy,type=event.type,originalEvent=event,fixHook=this.fixHooks[type];if(!fixHook){this.fixHooks[type]=fixHook=rmouseEvent.test(type)?this.mouseHooks:rkeyEvent.test(type)?this.keyHooks:{};}
copy=fixHook.props?this.props.concat(fixHook.props):this.props;event=new jQuery.Event(originalEvent);i=copy.length;while(i--){prop=copy[i];event[prop]=originalEvent[prop];} 
if(!event.target){event.target=document;}

if(event.target.nodeType===3){event.target=event.target.parentNode;}
return fixHook.filter?fixHook.filter(event,originalEvent):event;},special:{load:{ noBubble:true},focus:{ trigger:function(){if(this!==safeActiveElement()&&this.focus){this.focus();return false;}},delegateType:"focusin"},blur:{trigger:function(){if(this===safeActiveElement()&&this.blur){this.blur();return false;}},delegateType:"focusout"},click:{ trigger:function(){if(this.type==="checkbox"&&this.click&&jQuery.nodeName(this,"input")){this.click();return false;}}, _default:function(event){return jQuery.nodeName(event.target,"a");}},beforeunload:{postDispatch:function(event){if(event.result!==undefined&&event.originalEvent){event.originalEvent.returnValue=event.result;}}}},simulate:function(type,elem,event,bubble){
var e=jQuery.extend(new jQuery.Event(),event,{type:type,isSimulated:true,originalEvent:{}});if(bubble){jQuery.event.trigger(e,null,elem);}else{jQuery.event.dispatch.call(elem,e);}
if(e.isDefaultPrevented()){event.preventDefault();}}};jQuery.removeEvent=function(elem,type,handle){if(elem.removeEventListener){elem.removeEventListener(type,handle,false);}};jQuery.Event=function(src,props){ if(!(this instanceof jQuery.Event)){return new jQuery.Event(src,props);} 
if(src&&src.type){this.originalEvent=src;this.type=src.type;
this.isDefaultPrevented=src.defaultPrevented||src.defaultPrevented===undefined&& src.returnValue===false?returnTrue:returnFalse;}else{this.type=src;} 
if(props){jQuery.extend(this,props);} 
this.timeStamp=src&&src.timeStamp||jQuery.now(); this[jQuery.expando]=true;};
jQuery.Event.prototype={isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=returnTrue;if(e&&e.preventDefault){e.preventDefault();}},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=returnTrue;if(e&&e.stopPropagation){e.stopPropagation();}},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=returnTrue;if(e&&e.stopImmediatePropagation){e.stopImmediatePropagation();}
this.stopPropagation();}};
jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(orig,fix){jQuery.event.special[orig]={delegateType:fix,bindType:fix,handle:function(event){var ret,target=this,related=event.relatedTarget,handleObj=event.handleObj; if(!related||(related!==target&&!jQuery.contains(target,related))){event.type=handleObj.origType;ret=handleObj.handler.apply(this,arguments);event.type=fix;}
return ret;}};});
if(!support.focusinBubbles){jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){ var handler=function(event){jQuery.event.simulate(fix,event.target,jQuery.event.fix(event),true);};jQuery.event.special[fix]={setup:function(){var doc=this.ownerDocument||this,attaches=data_priv.access(doc,fix);if(!attaches){doc.addEventListener(orig,handler,true);}
data_priv.access(doc,fix,(attaches||0)+1);},teardown:function(){var doc=this.ownerDocument||this,attaches=data_priv.access(doc,fix)-1;if(!attaches){doc.removeEventListener(orig,handler,true);data_priv.remove(doc,fix);}else{data_priv.access(doc,fix,attaches);}}};});}
jQuery.fn.extend({on:function(types,selector,data,fn,one){var origFn,type; if(typeof types==="object"){if(typeof selector!=="string"){data=data||selector;selector=undefined;}
for(type in types){this.on(type,selector,data,types[type],one);}
return this;}
if(data==null&&fn==null){fn=selector;data=selector=undefined;}else if(fn==null){if(typeof selector==="string"){fn=data;data=undefined;}else{fn=data;data=selector;selector=undefined;}}
if(fn===false){fn=returnFalse;}else if(!fn){return this;}
if(one===1){origFn=fn;fn=function(event){ jQuery().off(event);return origFn.apply(this,arguments);}; fn.guid=origFn.guid||(origFn.guid=jQuery.guid++);}
return this.each(function(){jQuery.event.add(this,types,fn,data,selector);});},one:function(types,selector,data,fn){return this.on(types,selector,data,fn,1);},off:function(types,selector,fn){var handleObj,type;if(types&&types.preventDefault&&types.handleObj){ handleObj=types.handleObj;jQuery(types.delegateTarget).off(handleObj.namespace?handleObj.origType+"."+handleObj.namespace:handleObj.origType,handleObj.selector,handleObj.handler);return this;}
if(typeof types==="object"){for(type in types){this.off(type,selector,types[type]);}
return this;}
if(selector===false||typeof selector==="function"){fn=selector;selector=undefined;}
if(fn===false){fn=returnFalse;}
return this.each(function(){jQuery.event.remove(this,types,fn,selector);});},trigger:function(type,data){return this.each(function(){jQuery.event.trigger(type,data,this);});},triggerHandler:function(type,data){var elem=this[0];if(elem){return jQuery.event.trigger(type,data,elem,true);}}});var
rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,rtagName=/<([\w:]+)/,rhtml=/<|&#?\w+;/,rnoInnerhtml=/<(?:script|style|link)/i, rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rscriptType=/^$|\/(?:java|ecma)script/i,rscriptTypeMasked=/^true\/(.*)/,rcleanScript=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,wrapMap={ option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};wrapMap.optgroup=wrapMap.option;wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;wrapMap.th=wrapMap.td;
function manipulationTarget(elem,content){return jQuery.nodeName(elem,"table")&&jQuery.nodeName(content.nodeType!==11?content:content.firstChild,"tr")?elem.getElementsByTagName("tbody")[0]||elem.appendChild(elem.ownerDocument.createElement("tbody")):elem;}
function disableScript(elem){elem.type=(elem.getAttribute("type")!==null)+"/"+elem.type;return elem;}
function restoreScript(elem){var match=rscriptTypeMasked.exec(elem.type);if(match){elem.type=match[1];}else{elem.removeAttribute("type");}
return elem;}
function setGlobalEval(elems,refElements){var i=0,l=elems.length;for(;i<l;i++){data_priv.set(elems[i],"globalEval",!refElements||data_priv.get(refElements[i],"globalEval"));}}
function cloneCopyEvent(src,dest){var i,l,type,pdataOld,pdataCur,udataOld,udataCur,events;if(dest.nodeType!==1){return;}
if(data_priv.hasData(src)){pdataOld=data_priv.access(src);pdataCur=data_priv.set(dest,pdataOld);events=pdataOld.events;if(events){delete pdataCur.handle;pdataCur.events={};for(type in events){for(i=0,l=events[type].length;i<l;i++){jQuery.event.add(dest,type,events[type][i]);}}}} 
if(data_user.hasData(src)){udataOld=data_user.access(src);udataCur=jQuery.extend({},udataOld);data_user.set(dest,udataCur);}}
function getAll(context,tag){var ret=context.getElementsByTagName?context.getElementsByTagName(tag||"*"):context.querySelectorAll?context.querySelectorAll(tag||"*"):[];return tag===undefined||tag&&jQuery.nodeName(context,tag)?jQuery.merge([context],ret):ret;}
function fixInput(src,dest){var nodeName=dest.nodeName.toLowerCase();if(nodeName==="input"&&rcheckableType.test(src.type)){dest.checked=src.checked;}else if(nodeName==="input"||nodeName==="textarea"){dest.defaultValue=src.defaultValue;}}
jQuery.extend({clone:function(elem,dataAndEvents,deepDataAndEvents){var i,l,srcElements,destElements,clone=elem.cloneNode(true),inPage=jQuery.contains(elem.ownerDocument,elem); if(!support.noCloneChecked&&(elem.nodeType===1||elem.nodeType===11)&&!jQuery.isXMLDoc(elem)){ destElements=getAll(clone);srcElements=getAll(elem);for(i=0,l=srcElements.length;i<l;i++){fixInput(srcElements[i],destElements[i]);}} 
if(dataAndEvents){if(deepDataAndEvents){srcElements=srcElements||getAll(elem);destElements=destElements||getAll(clone);for(i=0,l=srcElements.length;i<l;i++){cloneCopyEvent(srcElements[i],destElements[i]);}}else{cloneCopyEvent(elem,clone);}} 
destElements=getAll(clone,"script");if(destElements.length>0){setGlobalEval(destElements,!inPage&&getAll(elem,"script"));} 
return clone;},buildFragment:function(elems,context,scripts,selection){var elem,tmp,tag,wrap,contains,j,fragment=context.createDocumentFragment(),nodes=[],i=0,l=elems.length;for(;i<l;i++){elem=elems[i];if(elem||elem===0){ if(jQuery.type(elem)==="object"){
 jQuery.merge(nodes,elem.nodeType?[elem]:elem);}else if(!rhtml.test(elem)){nodes.push(context.createTextNode(elem));}else{tmp=tmp||fragment.appendChild(context.createElement("div")); tag=(rtagName.exec(elem)||["",""])[1].toLowerCase();wrap=wrapMap[tag]||wrapMap._default;tmp.innerHTML=wrap[1]+elem.replace(rxhtmlTag,"<$1></$2>")+wrap[2]; j=wrap[0];while(j--){tmp=tmp.lastChild;}
 
jQuery.merge(nodes,tmp.childNodes); tmp=fragment.firstChild;tmp.textContent="";}}} 
fragment.textContent="";i=0;while((elem=nodes[i++])){
 if(selection&&jQuery.inArray(elem,selection)!==-1){continue;}
contains=jQuery.contains(elem.ownerDocument,elem); tmp=getAll(fragment.appendChild(elem),"script"); if(contains){setGlobalEval(tmp);} 
if(scripts){j=0;while((elem=tmp[j++])){if(rscriptType.test(elem.type||"")){scripts.push(elem);}}}}
return fragment;},cleanData:function(elems){var data,elem,type,key,special=jQuery.event.special,i=0;for(;(elem=elems[i])!==undefined;i++){if(jQuery.acceptData(elem)){key=elem[data_priv.expando];if(key&&(data=data_priv.cache[key])){if(data.events){for(type in data.events){if(special[type]){jQuery.event.remove(elem,type);}else{jQuery.removeEvent(elem,type,data.handle);}}}
if(data_priv.cache[key]){ delete data_priv.cache[key];}}} 
delete data_user.cache[elem[data_user.expando]];}}});jQuery.fn.extend({text:function(value){return access(this,function(value){return value===undefined?jQuery.text(this):this.empty().each(function(){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){this.textContent=value;}});},null,value,arguments.length);},append:function(){return this.domManip(arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.appendChild(elem);}});},prepend:function(){return this.domManip(arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.insertBefore(elem,target.firstChild);}});},before:function(){return this.domManip(arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this);}});},after:function(){return this.domManip(arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this.nextSibling);}});},remove:function(selector,keepData ){var elem,elems=selector?jQuery.filter(selector,this):this,i=0;for(;(elem=elems[i])!=null;i++){if(!keepData&&elem.nodeType===1){jQuery.cleanData(getAll(elem));}
if(elem.parentNode){if(keepData&&jQuery.contains(elem.ownerDocument,elem)){setGlobalEval(getAll(elem,"script"));}
elem.parentNode.removeChild(elem);}}
return this;},empty:function(){var elem,i=0;for(;(elem=this[i])!=null;i++){if(elem.nodeType===1){ jQuery.cleanData(getAll(elem,false)); elem.textContent="";}}
return this;},clone:function(dataAndEvents,deepDataAndEvents){dataAndEvents=dataAndEvents==null?false:dataAndEvents;deepDataAndEvents=deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;return this.map(function(){return jQuery.clone(this,dataAndEvents,deepDataAndEvents);});},html:function(value){return access(this,function(value){var elem=this[0]||{},i=0,l=this.length;if(value===undefined&&elem.nodeType===1){return elem.innerHTML;} 
if(typeof value==="string"&&!rnoInnerhtml.test(value)&&!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){value=value.replace(rxhtmlTag,"<$1></$2>");try{for(;i<l;i++){elem=this[i]||{}; if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));elem.innerHTML=value;}}
elem=0;}catch(e){}}
if(elem){this.empty().append(value);}},null,value,arguments.length);},replaceWith:function(){var arg=arguments[0]; this.domManip(arguments,function(elem){arg=this.parentNode;jQuery.cleanData(getAll(this));if(arg){arg.replaceChild(elem,this);}});return arg&&(arg.length||arg.nodeType)?this:this.remove();},detach:function(selector){return this.remove(selector,true);},domManip:function(args,callback){ args=concat.apply([],args);var fragment,first,scripts,hasScripts,node,doc,i=0,l=this.length,set=this,iNoClone=l-1,value=args[0],isFunction=jQuery.isFunction(value); if(isFunction||(l>1&&typeof value==="string"&&!support.checkClone&&rchecked.test(value))){return this.each(function(index){var self=set.eq(index);if(isFunction){args[0]=value.call(this,index,self.html());}
self.domManip(args,callback);});}
if(l){fragment=jQuery.buildFragment(args,this[0].ownerDocument,false,this);first=fragment.firstChild;if(fragment.childNodes.length===1){fragment=first;}
if(first){scripts=jQuery.map(getAll(fragment,"script"),disableScript);hasScripts=scripts.length;
for(;i<l;i++){node=fragment;if(i!==iNoClone){node=jQuery.clone(node,true,true); if(hasScripts){
 jQuery.merge(scripts,getAll(node,"script"));}}
callback.call(this[i],node,i);}
if(hasScripts){doc=scripts[scripts.length-1].ownerDocument; jQuery.map(scripts,restoreScript); for(i=0;i<hasScripts;i++){node=scripts[i];if(rscriptType.test(node.type||"")&&!data_priv.access(node,"globalEval")&&jQuery.contains(doc,node)){if(node.src){ if(jQuery._evalUrl){jQuery._evalUrl(node.src);}}else{jQuery.globalEval(node.textContent.replace(rcleanScript,""));}}}}}}
return this;}});jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(selector){var elems,ret=[],insert=jQuery(selector),last=insert.length-1,i=0;for(;i<=last;i++){elems=i===last?this:this.clone(true);jQuery(insert[i])[original](elems);
 push.apply(ret,elems.get());}
return this.pushStack(ret);};});var iframe,elemdisplay={};function actualDisplay(name,doc){var style,elem=jQuery(doc.createElement(name)).appendTo(doc.body), display=window.getDefaultComputedStyle&&(style=window.getDefaultComputedStyle(elem[0]))? style.display:jQuery.css(elem[0],"display"); elem.detach();return display;}
function defaultDisplay(nodeName){var doc=document,display=elemdisplay[nodeName];if(!display){display=actualDisplay(nodeName,doc); if(display==="none"||!display){ iframe=(iframe||jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement); doc=iframe[0].contentDocument; doc.write();doc.close();display=actualDisplay(nodeName,doc);iframe.detach();} 
elemdisplay[nodeName]=display;}
return display;}
var rmargin=(/^margin/);var rnumnonpx=new RegExp("^("+pnum+")(?!px)[a-z%]+$","i");var getStyles=function(elem){

if(elem.ownerDocument.defaultView.opener){return elem.ownerDocument.defaultView.getComputedStyle(elem,null);}
return window.getComputedStyle(elem,null);};function curCSS(elem,name,computed){var width,minWidth,maxWidth,ret,style=elem.style;computed=computed||getStyles(elem);
if(computed){ret=computed.getPropertyValue(name)||computed[name];}
if(computed){if(ret===""&&!jQuery.contains(elem.ownerDocument,elem)){ret=jQuery.style(elem,name);}

 
if(rnumnonpx.test(ret)&&rmargin.test(name)){ width=style.width;minWidth=style.minWidth;maxWidth=style.maxWidth; style.minWidth=style.maxWidth=style.width=ret;ret=computed.width; style.width=width;style.minWidth=minWidth;style.maxWidth=maxWidth;}}
return ret!==undefined?
ret+"":ret;}
function addGetHookIf(conditionFn,hookFn){return{get:function(){if(conditionFn()){
delete this.get;return;}
return(this.get=hookFn).apply(this,arguments);}};}
(function(){var pixelPositionVal,boxSizingReliableVal,docElem=document.documentElement,container=document.createElement("div"),div=document.createElement("div");if(!div.style){return;} 
div.style.backgroundClip="content-box";div.cloneNode(true).style.backgroundClip="";support.clearCloneStyle=div.style.backgroundClip==="content-box";container.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;"+"position:absolute";container.appendChild(div);
function computePixelPositionAndBoxSizingReliable(){div.style.cssText=
"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;"+"box-sizing:border-box;display:block;margin-top:1%;top:1%;"+"border:1px;padding:1px;width:4px;position:absolute";div.innerHTML="";docElem.appendChild(container);var divStyle=window.getComputedStyle(div,null);pixelPositionVal=divStyle.top!=="1%";boxSizingReliableVal=divStyle.width==="4px";docElem.removeChild(container);}
 
if(window.getComputedStyle){jQuery.extend(support,{pixelPosition:function(){
computePixelPositionAndBoxSizingReliable();return pixelPositionVal;},boxSizingReliable:function(){if(boxSizingReliableVal==null){computePixelPositionAndBoxSizingReliable();}
return boxSizingReliableVal;},reliableMarginRight:function(){



var ret,marginDiv=div.appendChild(document.createElement("div")); marginDiv.style.cssText=div.style.cssText=
"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;"+"box-sizing:content-box;display:block;margin:0;border:0;padding:0";marginDiv.style.marginRight=marginDiv.style.width="0";div.style.width="1px";docElem.appendChild(container);ret=!parseFloat(window.getComputedStyle(marginDiv,null).marginRight);docElem.removeChild(container);div.removeChild(marginDiv);return ret;}});}})();jQuery.swap=function(elem,options,callback,args){var ret,name,old={}; for(name in options){old[name]=elem.style[name];elem.style[name]=options[name];}
ret=callback.apply(elem,args||[]); for(name in options){elem.style[name]=old[name];}
return ret;};var
 
rdisplayswap=/^(none|table(?!-c[ea]).+)/,rnumsplit=new RegExp("^("+pnum+")(.*)$","i"),rrelNum=new RegExp("^([+-])=("+pnum+")","i"),cssShow={position:"absolute",visibility:"hidden",display:"block"},cssNormalTransform={letterSpacing:"0",fontWeight:"400"},cssPrefixes=["Webkit","O","Moz","ms"];function vendorPropName(style,name){ if(name in style){return name;} 
var capName=name[0].toUpperCase()+name.slice(1),origName=name,i=cssPrefixes.length;while(i--){name=cssPrefixes[i]+capName;if(name in style){return name;}}
return origName;}
function setPositiveNumber(elem,value,subtract){var matches=rnumsplit.exec(value);return matches? Math.max(0,matches[1]-(subtract||0))+(matches[2]||"px"):value;}
function augmentWidthOrHeight(elem,name,extra,isBorderBox,styles){var i=extra===(isBorderBox?"border":"content")? 4: name==="width"?1:0,val=0;for(;i<4;i+=2){ if(extra==="margin"){val+=jQuery.css(elem,extra+cssExpand[i],true,styles);}
if(isBorderBox){ if(extra==="content"){val-=jQuery.css(elem,"padding"+cssExpand[i],true,styles);} 
if(extra!=="margin"){val-=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}else{ val+=jQuery.css(elem,"padding"+cssExpand[i],true,styles); if(extra!=="padding"){val+=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}}
return val;}
function getWidthOrHeight(elem,name,extra){ var valueIsBorderBox=true,val=name==="width"?elem.offsetWidth:elem.offsetHeight,styles=getStyles(elem),isBorderBox=jQuery.css(elem,"boxSizing",false,styles)==="border-box";

 if(val<=0||val==null){ val=curCSS(elem,name,styles);if(val<0||val==null){val=elem.style[name];}
if(rnumnonpx.test(val)){return val;} 
 
valueIsBorderBox=isBorderBox&&(support.boxSizingReliable()||val===elem.style[name]); val=parseFloat(val)||0;} 
return(val+
augmentWidthOrHeight(elem,name,extra||(isBorderBox?"border":"content"),valueIsBorderBox,styles))+"px";}
function showHide(elements,show){var display,elem,hidden,values=[],index=0,length=elements.length;for(;index<length;index++){elem=elements[index];if(!elem.style){continue;}
values[index]=data_priv.get(elem,"olddisplay");display=elem.style.display;if(show){
 if(!values[index]&&display==="none"){elem.style.display="";}

 
if(elem.style.display===""&&isHidden(elem)){values[index]=data_priv.access(elem,"olddisplay",defaultDisplay(elem.nodeName));}}else{hidden=isHidden(elem);if(display!=="none"||!hidden){data_priv.set(elem,"olddisplay",hidden?display:jQuery.css(elem,"display"));}}}
 
for(index=0;index<length;index++){elem=elements[index];if(!elem.style){continue;}
if(!show||elem.style.display==="none"||elem.style.display===""){elem.style.display=show?values[index]||"":"none";}}
return elements;}
jQuery.extend({
 cssHooks:{opacity:{get:function(elem,computed){if(computed){ var ret=curCSS(elem,"opacity");return ret===""?"1":ret;}}}}, cssNumber:{"columnCount":true,"fillOpacity":true,"flexGrow":true,"flexShrink":true,"fontWeight":true,"lineHeight":true,"opacity":true,"order":true,"orphans":true,"widows":true,"zIndex":true,"zoom":true},
 cssProps:{"float":"cssFloat"}, style:function(elem,name,value,extra){ if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){return;} 
var ret,type,hooks,origName=jQuery.camelCase(name),style=elem.style;name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(style,origName)); hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName]; if(value!==undefined){type=typeof value;if(type==="string"&&(ret=rrelNum.exec(value))){value=(ret[1]+1)*ret[2]+parseFloat(jQuery.css(elem,name)); type="number";}
if(value==null||value!==value){return;}
if(type==="number"&&!jQuery.cssNumber[origName]){value+="px";} 
if(!support.clearCloneStyle&&value===""&&name.indexOf("background")===0){style[name]="inherit";} 
if(!hooks||!("set"in hooks)||(value=hooks.set(elem,value,extra))!==undefined){style[name]=value;}}else{ if(hooks&&"get"in hooks&&(ret=hooks.get(elem,false,extra))!==undefined){return ret;} 
return style[name];}},css:function(elem,name,extra,styles){var val,num,hooks,origName=jQuery.camelCase(name); name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(elem.style,origName)); hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName]; if(hooks&&"get"in hooks){val=hooks.get(elem,true,extra);} 
if(val===undefined){val=curCSS(elem,name,styles);} 
if(val==="normal"&&name in cssNormalTransform){val=cssNormalTransform[name];} 
if(extra===""||extra){num=parseFloat(val);return extra===true||jQuery.isNumeric(num)?num||0:val;}
return val;}});jQuery.each(["height","width"],function(i,name){jQuery.cssHooks[name]={get:function(elem,computed,extra){if(computed){
 return rdisplayswap.test(jQuery.css(elem,"display"))&&elem.offsetWidth===0?jQuery.swap(elem,cssShow,function(){return getWidthOrHeight(elem,name,extra);}):getWidthOrHeight(elem,name,extra);}},set:function(elem,value,extra){var styles=extra&&getStyles(elem);return setPositiveNumber(elem,value,extra?augmentWidthOrHeight(elem,name,extra,jQuery.css(elem,"boxSizing",false,styles)==="border-box",styles):0);}};});jQuery.cssHooks.marginRight=addGetHookIf(support.reliableMarginRight,function(elem,computed){if(computed){return jQuery.swap(elem,{"display":"inline-block"},curCSS,[elem,"marginRight"]);}});jQuery.each({margin:"",padding:"",border:"Width"},function(prefix,suffix){jQuery.cssHooks[prefix+suffix]={expand:function(value){var i=0,expanded={}, parts=typeof value==="string"?value.split(" "):[value];for(;i<4;i++){expanded[prefix+cssExpand[i]+suffix]=parts[i]||parts[i-2]||parts[0];}
return expanded;}};if(!rmargin.test(prefix)){jQuery.cssHooks[prefix+suffix].set=setPositiveNumber;}});jQuery.fn.extend({css:function(name,value){return access(this,function(elem,name,value){var styles,len,map={},i=0;if(jQuery.isArray(name)){styles=getStyles(elem);len=name.length;for(;i<len;i++){map[name[i]]=jQuery.css(elem,name[i],false,styles);}
return map;}
return value!==undefined?jQuery.style(elem,name,value):jQuery.css(elem,name);},name,value,arguments.length>1);},show:function(){return showHide(this,true);},hide:function(){return showHide(this);},toggle:function(state){if(typeof state==="boolean"){return state?this.show():this.hide();}
return this.each(function(){if(isHidden(this)){jQuery(this).show();}else{jQuery(this).hide();}});}});function Tween(elem,options,prop,end,easing){return new Tween.prototype.init(elem,options,prop,end,easing);}
jQuery.Tween=Tween;Tween.prototype={constructor:Tween,init:function(elem,options,prop,end,easing,unit){this.elem=elem;this.prop=prop;this.easing=easing||"swing";this.options=options;this.start=this.now=this.cur();this.end=end;this.unit=unit||(jQuery.cssNumber[prop]?"":"px");},cur:function(){var hooks=Tween.propHooks[this.prop];return hooks&&hooks.get?hooks.get(this):Tween.propHooks._default.get(this);},run:function(percent){var eased,hooks=Tween.propHooks[this.prop];if(this.options.duration){this.pos=eased=jQuery.easing[this.easing](percent,this.options.duration*percent,0,1,this.options.duration);}else{this.pos=eased=percent;}
this.now=(this.end-this.start)*eased+this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this);}
if(hooks&&hooks.set){hooks.set(this);}else{Tween.propHooks._default.set(this);}
return this;}};Tween.prototype.init.prototype=Tween.prototype;Tween.propHooks={_default:{get:function(tween){var result;if(tween.elem[tween.prop]!=null&&(!tween.elem.style||tween.elem.style[tween.prop]==null)){return tween.elem[tween.prop];}

result=jQuery.css(tween.elem,tween.prop,"");return!result||result==="auto"?0:result;},set:function(tween){if(jQuery.fx.step[tween.prop]){jQuery.fx.step[tween.prop](tween);}else if(tween.elem.style&&(tween.elem.style[jQuery.cssProps[tween.prop]]!=null||jQuery.cssHooks[tween.prop])){jQuery.style(tween.elem,tween.prop,tween.now+tween.unit);}else{tween.elem[tween.prop]=tween.now;}}}};
Tween.propHooks.scrollTop=Tween.propHooks.scrollLeft={set:function(tween){if(tween.elem.nodeType&&tween.elem.parentNode){tween.elem[tween.prop]=tween.now;}}};jQuery.easing={linear:function(p){return p;},swing:function(p){return 0.5-Math.cos(p*Math.PI)/2;}};jQuery.fx=Tween.prototype.init;jQuery.fx.step={};var
fxNow,timerId,rfxtypes=/^(?:toggle|show|hide)$/,rfxnum=new RegExp("^(?:([+-])=|)("+pnum+")([a-z%]*)$","i"),rrun=/queueHooks$/,animationPrefilters=[defaultPrefilter],tweeners={"*":[function(prop,value){var tween=this.createTween(prop,value),target=tween.cur(),parts=rfxnum.exec(value),unit=parts&&parts[3]||(jQuery.cssNumber[prop]?"":"px"), start=(jQuery.cssNumber[prop]||unit!=="px"&&+target)&&rfxnum.exec(jQuery.css(tween.elem,prop)),scale=1,maxIterations=20;if(start&&start[3]!==unit){ unit=unit||start[3]; parts=parts||[]; start=+target||1;do{ scale=scale||".5"; start=start/scale;jQuery.style(tween.elem,prop,start+unit);}while(scale!==(scale=tween.cur()/target)&&scale!==1&&--maxIterations);} 
if(parts){start=tween.start=+start||+target||0;tween.unit=unit; tween.end=parts[1]?start+(parts[1]+1)*parts[2]:+parts[2];}
return tween;}]};function createFxNow(){setTimeout(function(){fxNow=undefined;});return(fxNow=jQuery.now());}
function genFx(type,includeWidth){var which,i=0,attrs={height:type}; includeWidth=includeWidth?1:0;for(;i<4;i+=2-includeWidth){which=cssExpand[i];attrs["margin"+which]=attrs["padding"+which]=type;}
if(includeWidth){attrs.opacity=attrs.width=type;}
return attrs;}
function createTween(value,prop,animation){var tween,collection=(tweeners[prop]||[]).concat(tweeners["*"]),index=0,length=collection.length;for(;index<length;index++){if((tween=collection[index].call(animation,prop,value))){ return tween;}}}
function defaultPrefilter(elem,props,opts){var prop,value,toggle,tween,hooks,oldfire,display,checkDisplay,anim=this,orig={},style=elem.style,hidden=elem.nodeType&&isHidden(elem),dataShow=data_priv.get(elem,"fxshow"); if(!opts.queue){hooks=jQuery._queueHooks(elem,"fx");if(hooks.unqueued==null){hooks.unqueued=0;oldfire=hooks.empty.fire;hooks.empty.fire=function(){if(!hooks.unqueued){oldfire();}};}
hooks.unqueued++;anim.always(function(){ anim.always(function(){hooks.unqueued--;if(!jQuery.queue(elem,"fx").length){hooks.empty.fire();}});});} 
if(elem.nodeType===1&&("height"in props||"width"in props)){


 opts.overflow=[style.overflow,style.overflowX,style.overflowY];
 display=jQuery.css(elem,"display");checkDisplay=display==="none"?data_priv.get(elem,"olddisplay")||defaultDisplay(elem.nodeName):display;if(checkDisplay==="inline"&&jQuery.css(elem,"float")==="none"){style.display="inline-block";}}
if(opts.overflow){style.overflow="hidden";anim.always(function(){style.overflow=opts.overflow[0];style.overflowX=opts.overflow[1];style.overflowY=opts.overflow[2];});} 
for(prop in props){value=props[prop];if(rfxtypes.exec(value)){delete props[prop];toggle=toggle||value==="toggle";if(value===(hidden?"hide":"show")){ if(value==="show"&&dataShow&&dataShow[prop]!==undefined){hidden=true;}else{continue;}}
orig[prop]=dataShow&&dataShow[prop]||jQuery.style(elem,prop);}else{display=undefined;}}
if(!jQuery.isEmptyObject(orig)){if(dataShow){if("hidden"in dataShow){hidden=dataShow.hidden;}}else{dataShow=data_priv.access(elem,"fxshow",{});}
if(toggle){dataShow.hidden=!hidden;}
if(hidden){jQuery(elem).show();}else{anim.done(function(){jQuery(elem).hide();});}
anim.done(function(){var prop;data_priv.remove(elem,"fxshow");for(prop in orig){jQuery.style(elem,prop,orig[prop]);}});for(prop in orig){tween=createTween(hidden?dataShow[prop]:0,prop,anim);if(!(prop in dataShow)){dataShow[prop]=tween.start;if(hidden){tween.end=tween.start;tween.start=prop==="width"||prop==="height"?1:0;}}}
}else if((display==="none"?defaultDisplay(elem.nodeName):display)==="inline"){style.display=display;}}
function propFilter(props,specialEasing){var index,name,easing,value,hooks; for(index in props){name=jQuery.camelCase(index);easing=specialEasing[name];value=props[index];if(jQuery.isArray(value)){easing=value[1];value=props[index]=value[0];}
if(index!==name){props[name]=value;delete props[index];}
hooks=jQuery.cssHooks[name];if(hooks&&"expand"in hooks){value=hooks.expand(value);delete props[name];for(index in value){if(!(index in props)){props[index]=value[index];specialEasing[index]=easing;}}}else{specialEasing[name]=easing;}}}
function Animation(elem,properties,options){var result,stopped,index=0,length=animationPrefilters.length,deferred=jQuery.Deferred().always(function(){ delete tick.elem;}),tick=function(){if(stopped){return false;}
var currentTime=fxNow||createFxNow(),remaining=Math.max(0,animation.startTime+animation.duration-currentTime),
temp=remaining/animation.duration||0,percent=1-temp,index=0,length=animation.tweens.length;for(;index<length;index++){animation.tweens[index].run(percent);}
deferred.notifyWith(elem,[animation,percent,remaining]);if(percent<1&&length){return remaining;}else{deferred.resolveWith(elem,[animation]);return false;}},animation=deferred.promise({elem:elem,props:jQuery.extend({},properties),opts:jQuery.extend(true,{specialEasing:{}},options),originalProperties:properties,originalOptions:options,startTime:fxNow||createFxNow(),duration:options.duration,tweens:[],createTween:function(prop,end){var tween=jQuery.Tween(elem,animation.opts,prop,end,animation.opts.specialEasing[prop]||animation.opts.easing);animation.tweens.push(tween);return tween;},stop:function(gotoEnd){var index=0,
 length=gotoEnd?animation.tweens.length:0;if(stopped){return this;}
stopped=true;for(;index<length;index++){animation.tweens[index].run(1);} 
if(gotoEnd){deferred.resolveWith(elem,[animation,gotoEnd]);}else{deferred.rejectWith(elem,[animation,gotoEnd]);}
return this;}}),props=animation.props;propFilter(props,animation.opts.specialEasing);for(;index<length;index++){result=animationPrefilters[index].call(animation,elem,props,animation.opts);if(result){return result;}}
jQuery.map(props,createTween,animation);if(jQuery.isFunction(animation.opts.start)){animation.opts.start.call(elem,animation);}
jQuery.fx.timer(jQuery.extend(tick,{elem:elem,anim:animation,queue:animation.opts.queue})); return animation.progress(animation.opts.progress).done(animation.opts.done,animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);}
jQuery.Animation=jQuery.extend(Animation,{tweener:function(props,callback){if(jQuery.isFunction(props)){callback=props;props=["*"];}else{props=props.split(" ");}
var prop,index=0,length=props.length;for(;index<length;index++){prop=props[index];tweeners[prop]=tweeners[prop]||[];tweeners[prop].unshift(callback);}},prefilter:function(callback,prepend){if(prepend){animationPrefilters.unshift(callback);}else{animationPrefilters.push(callback);}}});jQuery.speed=function(speed,easing,fn){var opt=speed&&typeof speed==="object"?jQuery.extend({},speed):{complete:fn||!fn&&easing||jQuery.isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&!jQuery.isFunction(easing)&&easing};opt.duration=jQuery.fx.off?0:typeof opt.duration==="number"?opt.duration:opt.duration in jQuery.fx.speeds?jQuery.fx.speeds[opt.duration]:jQuery.fx.speeds._default;if(opt.queue==null||opt.queue===true){opt.queue="fx";} 
opt.old=opt.complete;opt.complete=function(){if(jQuery.isFunction(opt.old)){opt.old.call(this);}
if(opt.queue){jQuery.dequeue(this,opt.queue);}};return opt;};jQuery.fn.extend({fadeTo:function(speed,to,easing,callback){ return this.filter(isHidden).css("opacity",0).show()
.end().animate({opacity:to},speed,easing,callback);},animate:function(prop,speed,easing,callback){var empty=jQuery.isEmptyObject(prop),optall=jQuery.speed(speed,easing,callback),doAnimation=function(){ var anim=Animation(this,jQuery.extend({},prop),optall); if(empty||data_priv.get(this,"finish")){anim.stop(true);}};doAnimation.finish=doAnimation;return empty||optall.queue===false?this.each(doAnimation):this.queue(optall.queue,doAnimation);},stop:function(type,clearQueue,gotoEnd){var stopQueue=function(hooks){var stop=hooks.stop;delete hooks.stop;stop(gotoEnd);};if(typeof type!=="string"){gotoEnd=clearQueue;clearQueue=type;type=undefined;}
if(clearQueue&&type!==false){this.queue(type||"fx",[]);}
return this.each(function(){var dequeue=true,index=type!=null&&type+"queueHooks",timers=jQuery.timers,data=data_priv.get(this);if(index){if(data[index]&&data[index].stop){stopQueue(data[index]);}}else{for(index in data){if(data[index]&&data[index].stop&&rrun.test(index)){stopQueue(data[index]);}}}
for(index=timers.length;index--;){if(timers[index].elem===this&&(type==null||timers[index].queue===type)){timers[index].anim.stop(gotoEnd);dequeue=false;timers.splice(index,1);}}

if(dequeue||!gotoEnd){jQuery.dequeue(this,type);}});},finish:function(type){if(type!==false){type=type||"fx";}
return this.each(function(){var index,data=data_priv.get(this),queue=data[type+"queue"],hooks=data[type+"queueHooks"],timers=jQuery.timers,length=queue?queue.length:0; data.finish=true; jQuery.queue(this,type,[]);if(hooks&&hooks.stop){hooks.stop.call(this,true);} 
for(index=timers.length;index--;){if(timers[index].elem===this&&timers[index].queue===type){timers[index].anim.stop(true);timers.splice(index,1);}} 
for(index=0;index<length;index++){if(queue[index]&&queue[index].finish){queue[index].finish.call(this);}} 
delete data.finish;});}});jQuery.each(["toggle","show","hide"],function(i,name){var cssFn=jQuery.fn[name];jQuery.fn[name]=function(speed,easing,callback){return speed==null||typeof speed==="boolean"?cssFn.apply(this,arguments):this.animate(genFx(name,true),speed,easing,callback);};});jQuery.each({slideDown:genFx("show"),slideUp:genFx("hide"),slideToggle:genFx("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(name,props){jQuery.fn[name]=function(speed,easing,callback){return this.animate(props,speed,easing,callback);};});jQuery.timers=[];jQuery.fx.tick=function(){var timer,i=0,timers=jQuery.timers;fxNow=jQuery.now();for(;i<timers.length;i++){timer=timers[i]; if(!timer()&&timers[i]===timer){timers.splice(i--,1);}}
if(!timers.length){jQuery.fx.stop();}
fxNow=undefined;};jQuery.fx.timer=function(timer){jQuery.timers.push(timer);if(timer()){jQuery.fx.start();}else{jQuery.timers.pop();}};jQuery.fx.interval=13;jQuery.fx.start=function(){if(!timerId){timerId=setInterval(jQuery.fx.tick,jQuery.fx.interval);}};jQuery.fx.stop=function(){clearInterval(timerId);timerId=null;};jQuery.fx.speeds={slow:600,fast:200, _default:400};jQuery.fn.delay=function(time,type){time=jQuery.fx?jQuery.fx.speeds[time]||time:time;type=type||"fx";return this.queue(type,function(next,hooks){var timeout=setTimeout(next,time);hooks.stop=function(){clearTimeout(timeout);};});};(function(){var input=document.createElement("input"),select=document.createElement("select"),opt=select.appendChild(document.createElement("option"));input.type="checkbox";support.checkOn=input.value!==""; support.optSelected=opt.selected;
 select.disabled=true;support.optDisabled=!opt.disabled; input=document.createElement("input");input.value="t";input.type="radio";support.radioValue=input.value==="t";})();var nodeHook,boolHook,attrHandle=jQuery.expr.attrHandle;jQuery.fn.extend({attr:function(name,value){return access(this,jQuery.attr,name,value,arguments.length>1);},removeAttr:function(name){return this.each(function(){jQuery.removeAttr(this,name);});}});jQuery.extend({attr:function(elem,name,value){var hooks,ret,nType=elem.nodeType; if(!elem||nType===3||nType===8||nType===2){return;} 
if(typeof elem.getAttribute===strundefined){return jQuery.prop(elem,name,value);}
 
if(nType!==1||!jQuery.isXMLDoc(elem)){name=name.toLowerCase();hooks=jQuery.attrHooks[name]||(jQuery.expr.match.bool.test(name)?boolHook:nodeHook);}
if(value!==undefined){if(value===null){jQuery.removeAttr(elem,name);}else if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}else{elem.setAttribute(name,value+"");return value;}}else if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}else{ret=jQuery.find.attr(elem,name); return ret==null?undefined:ret;}},removeAttr:function(elem,value){var name,propName,i=0,attrNames=value&&value.match(rnotwhite);if(attrNames&&elem.nodeType===1){while((name=attrNames[i++])){propName=jQuery.propFix[name]||name;if(jQuery.expr.match.bool.test(name)){ elem[propName]=false;}
elem.removeAttribute(name);}}},attrHooks:{type:{set:function(elem,value){if(!support.radioValue&&value==="radio"&&jQuery.nodeName(elem,"input")){var val=elem.value;elem.setAttribute("type",value);if(val){elem.value=val;}
return value;}}}}});boolHook={set:function(elem,value,name){if(value===false){ jQuery.removeAttr(elem,name);}else{elem.setAttribute(name,name);}
return name;}};jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g),function(i,name){var getter=attrHandle[name]||jQuery.find.attr;attrHandle[name]=function(elem,name,isXML){var ret,handle;if(!isXML){ handle=attrHandle[name];attrHandle[name]=ret;ret=getter(elem,name,isXML)!=null?name.toLowerCase():null;attrHandle[name]=handle;}
return ret;};});var rfocusable=/^(?:input|select|textarea|button)$/i;jQuery.fn.extend({prop:function(name,value){return access(this,jQuery.prop,name,value,arguments.length>1);},removeProp:function(name){return this.each(function(){delete this[jQuery.propFix[name]||name];});}});jQuery.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(elem,name,value){var ret,hooks,notxml,nType=elem.nodeType; if(!elem||nType===3||nType===8||nType===2){return;}
notxml=nType!==1||!jQuery.isXMLDoc(elem);if(notxml){ name=jQuery.propFix[name]||name;hooks=jQuery.propHooks[name];}
if(value!==undefined){return hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined?ret:(elem[name]=value);}else{return hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null?ret:elem[name];}},propHooks:{tabIndex:{get:function(elem){return elem.hasAttribute("tabindex")||rfocusable.test(elem.nodeName)||elem.href?elem.tabIndex:-1;}}}});if(!support.optSelected){jQuery.propHooks.selected={get:function(elem){var parent=elem.parentNode;if(parent&&parent.parentNode){parent.parentNode.selectedIndex;}
return null;}};}
jQuery.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){jQuery.propFix[this.toLowerCase()]=this;});var rclass=/[\t\r\n\f]/g;jQuery.fn.extend({addClass:function(value){var classes,elem,cur,clazz,j,finalValue,proceed=typeof value==="string"&&value,i=0,len=this.length;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).addClass(value.call(this,j,this.className));});}
if(proceed){classes=(value||"").match(rnotwhite)||[];for(;i<len;i++){elem=this[i];cur=elem.nodeType===1&&(elem.className?(" "+elem.className+" ").replace(rclass," "):" ");if(cur){j=0;while((clazz=classes[j++])){if(cur.indexOf(" "+clazz+" ")<0){cur+=clazz+" ";}}
finalValue=jQuery.trim(cur);if(elem.className!==finalValue){elem.className=finalValue;}}}}
return this;},removeClass:function(value){var classes,elem,cur,clazz,j,finalValue,proceed=arguments.length===0||typeof value==="string"&&value,i=0,len=this.length;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).removeClass(value.call(this,j,this.className));});}
if(proceed){classes=(value||"").match(rnotwhite)||[];for(;i<len;i++){elem=this[i];cur=elem.nodeType===1&&(elem.className?(" "+elem.className+" ").replace(rclass," "):"");if(cur){j=0;while((clazz=classes[j++])){ while(cur.indexOf(" "+clazz+" ")>=0){cur=cur.replace(" "+clazz+" "," ");}}
finalValue=value?jQuery.trim(cur):"";if(elem.className!==finalValue){elem.className=finalValue;}}}}
return this;},toggleClass:function(value,stateVal){var type=typeof value;if(typeof stateVal==="boolean"&&type==="string"){return stateVal?this.addClass(value):this.removeClass(value);}
if(jQuery.isFunction(value)){return this.each(function(i){jQuery(this).toggleClass(value.call(this,i,this.className,stateVal),stateVal);});}
return this.each(function(){if(type==="string"){ var className,i=0,self=jQuery(this),classNames=value.match(rnotwhite)||[];while((className=classNames[i++])){ if(self.hasClass(className)){self.removeClass(className);}else{self.addClass(className);}}
}else if(type===strundefined||type==="boolean"){if(this.className){ data_priv.set(this,"__className__",this.className);}
this.className=this.className||value===false?"":data_priv.get(this,"__className__")||"";}});},hasClass:function(selector){var className=" "+selector+" ",i=0,l=this.length;for(;i<l;i++){if(this[i].nodeType===1&&(" "+this[i].className+" ").replace(rclass," ").indexOf(className)>=0){return true;}}
return false;}});var rreturn=/\r/g;jQuery.fn.extend({val:function(value){var hooks,ret,isFunction,elem=this[0];if(!arguments.length){if(elem){hooks=jQuery.valHooks[elem.type]||jQuery.valHooks[elem.nodeName.toLowerCase()];if(hooks&&"get"in hooks&&(ret=hooks.get(elem,"value"))!==undefined){return ret;}
ret=elem.value;return typeof ret==="string"? ret.replace(rreturn,""): ret==null?"":ret;}
return;}
isFunction=jQuery.isFunction(value);return this.each(function(i){var val;if(this.nodeType!==1){return;}
if(isFunction){val=value.call(this,i,jQuery(this).val());}else{val=value;} 
if(val==null){val="";}else if(typeof val==="number"){val+="";}else if(jQuery.isArray(val)){val=jQuery.map(val,function(value){return value==null?"":value+"";});}
hooks=jQuery.valHooks[this.type]||jQuery.valHooks[this.nodeName.toLowerCase()]; if(!hooks||!("set"in hooks)||hooks.set(this,val,"value")===undefined){this.value=val;}});}});jQuery.extend({valHooks:{option:{get:function(elem){var val=jQuery.find.attr(elem,"value");return val!=null?val:jQuery.trim(jQuery.text(elem));}},select:{get:function(elem){var value,option,options=elem.options,index=elem.selectedIndex,one=elem.type==="select-one"||index<0,values=one?null:[],max=one?index+1:options.length,i=index<0?max:one?index:0; for(;i<max;i++){option=options[i];if((option.selected||i===index)&&(support.optDisabled?!option.disabled:option.getAttribute("disabled")===null)&&(!option.parentNode.disabled||!jQuery.nodeName(option.parentNode,"optgroup"))){ value=jQuery(option).val(); if(one){return value;} 
values.push(value);}}
return values;},set:function(elem,value){var optionSet,option,options=elem.options,values=jQuery.makeArray(value),i=options.length;while(i--){option=options[i];if((option.selected=jQuery.inArray(option.value,values)>=0)){optionSet=true;}} 
if(!optionSet){elem.selectedIndex=-1;}
return values;}}}});jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]={set:function(elem,value){if(jQuery.isArray(value)){return(elem.checked=jQuery.inArray(jQuery(elem).val(),value)>=0);}}};if(!support.checkOn){jQuery.valHooks[this].get=function(elem){return elem.getAttribute("value")===null?"on":elem.value;};}});jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup error contextmenu").split(" "),function(i,name){ jQuery.fn[name]=function(data,fn){return arguments.length>0?this.on(name,null,data,fn):this.trigger(name);};});jQuery.fn.extend({hover:function(fnOver,fnOut){return this.mouseenter(fnOver).mouseleave(fnOut||fnOver);},bind:function(types,data,fn){return this.on(types,null,data,fn);},unbind:function(types,fn){return this.off(types,null,fn);},delegate:function(selector,types,data,fn){return this.on(types,selector,data,fn);},undelegate:function(selector,types,fn){return arguments.length===1?this.off(selector,"**"):this.off(types,selector||"**",fn);}});var nonce=jQuery.now();var rquery=(/\?/);
jQuery.parseJSON=function(data){return JSON.parse(data+"");};jQuery.parseXML=function(data){var xml,tmp;if(!data||typeof data!=="string"){return null;} 
try{tmp=new DOMParser();xml=tmp.parseFromString(data,"text/xml");}catch(e){xml=undefined;}
if(!xml||xml.getElementsByTagName("parsererror").length){jQuery.error("Invalid XML: "+data);}
return xml;};var
rhash=/#.*$/,rts=/([?&])_=[^&]*/,rheaders=/^(.*?):[ \t]*([^\r\n]*)$/mg, rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//,rurl=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,prefilters={},transports={}, allTypes="*/".concat("*"), ajaxLocation=window.location.href, ajaxLocParts=rurl.exec(ajaxLocation.toLowerCase())||[];function addToPrefiltersOrTransports(structure){return function(dataTypeExpression,func){if(typeof dataTypeExpression!=="string"){func=dataTypeExpression;dataTypeExpression="*";}
var dataType,i=0,dataTypes=dataTypeExpression.toLowerCase().match(rnotwhite)||[];if(jQuery.isFunction(func)){ while((dataType=dataTypes[i++])){ if(dataType[0]==="+"){dataType=dataType.slice(1)||"*";(structure[dataType]=structure[dataType]||[]).unshift(func);}else{(structure[dataType]=structure[dataType]||[]).push(func);}}}};}
function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR){var inspected={},seekingTransport=(structure===transports);function inspect(dataType){var selected;inspected[dataType]=true;jQuery.each(structure[dataType]||[],function(_,prefilterOrFactory){var dataTypeOrTransport=prefilterOrFactory(options,originalOptions,jqXHR);if(typeof dataTypeOrTransport==="string"&&!seekingTransport&&!inspected[dataTypeOrTransport]){options.dataTypes.unshift(dataTypeOrTransport);inspect(dataTypeOrTransport);return false;}else if(seekingTransport){return!(selected=dataTypeOrTransport);}});return selected;}
return inspect(options.dataTypes[0])||!inspected["*"]&&inspect("*");}

function ajaxExtend(target,src){var key,deep,flatOptions=jQuery.ajaxSettings.flatOptions||{};for(key in src){if(src[key]!==undefined){(flatOptions[key]?target:(deep||(deep={})))[key]=src[key];}}
if(deep){jQuery.extend(true,target,deep);}
return target;}
function ajaxHandleResponses(s,jqXHR,responses){var ct,type,finalDataType,firstDataType,contents=s.contents,dataTypes=s.dataTypes; while(dataTypes[0]==="*"){dataTypes.shift();if(ct===undefined){ct=s.mimeType||jqXHR.getResponseHeader("Content-Type");}} 
if(ct){for(type in contents){if(contents[type]&&contents[type].test(ct)){dataTypes.unshift(type);break;}}} 
if(dataTypes[0]in responses){finalDataType=dataTypes[0];}else{ for(type in responses){if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){finalDataType=type;break;}
if(!firstDataType){firstDataType=type;}} 
finalDataType=finalDataType||firstDataType;}

 
if(finalDataType){if(finalDataType!==dataTypes[0]){dataTypes.unshift(finalDataType);}
return responses[finalDataType];}}
function ajaxConvert(s,response,jqXHR,isSuccess){var conv2,current,conv,tmp,prev,converters={}, dataTypes=s.dataTypes.slice(); if(dataTypes[1]){for(conv in s.converters){converters[conv.toLowerCase()]=s.converters[conv];}}
current=dataTypes.shift(); while(current){if(s.responseFields[current]){jqXHR[s.responseFields[current]]=response;} 
if(!prev&&isSuccess&&s.dataFilter){response=s.dataFilter(response,s.dataType);}
prev=current;current=dataTypes.shift();if(current){ if(current==="*"){current=prev;}else if(prev!=="*"&&prev!==current){ conv=converters[prev+" "+current]||converters["* "+current]; if(!conv){for(conv2 in converters){ tmp=conv2.split(" ");if(tmp[1]===current){ conv=converters[prev+" "+tmp[0]]||converters["* "+tmp[0]];if(conv){ if(conv===true){conv=converters[conv2];}else if(converters[conv2]!==true){current=tmp[0];dataTypes.unshift(tmp[1]);}
break;}}}}
if(conv!==true){ if(conv&&s["throws"]){response=conv(response);}else{try{response=conv(response);}catch(e){return{state:"parsererror",error:conv?e:"No conversion from "+prev+" to "+current};}}}}}}
return{state:"success",data:response};}
jQuery.extend({ active:0, lastModified:{},etag:{},ajaxSettings:{url:ajaxLocation,type:"GET",isLocal:rlocalProtocol.test(ajaxLocParts[1]),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":allTypes,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},
 converters:{"* text":String,"text html":true,"text json":jQuery.parseJSON,"text xml":jQuery.parseXML},

flatOptions:{url:true,context:true}},
ajaxSetup:function(target,settings){return settings? ajaxExtend(ajaxExtend(target,jQuery.ajaxSettings),settings): ajaxExtend(jQuery.ajaxSettings,target);},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports), ajax:function(url,options){ if(typeof url==="object"){options=url;url=undefined;} 
options=options||{};var transport, cacheURL, responseHeadersString,responseHeaders, timeoutTimer, parts, fireGlobals, i, s=jQuery.ajaxSetup({},options), callbackContext=s.context||s, globalEventContext=s.context&&(callbackContext.nodeType||callbackContext.jquery)?jQuery(callbackContext):jQuery.event, deferred=jQuery.Deferred(),completeDeferred=jQuery.Callbacks("once memory"), statusCode=s.statusCode||{},requestHeaders={},requestHeadersNames={}, state=0, strAbort="canceled", jqXHR={readyState:0, getResponseHeader:function(key){var match;if(state===2){if(!responseHeaders){responseHeaders={};while((match=rheaders.exec(responseHeadersString))){responseHeaders[match[1].toLowerCase()]=match[2];}}
match=responseHeaders[key.toLowerCase()];}
return match==null?null:match;}, getAllResponseHeaders:function(){return state===2?responseHeadersString:null;}, setRequestHeader:function(name,value){var lname=name.toLowerCase();if(!state){name=requestHeadersNames[lname]=requestHeadersNames[lname]||name;requestHeaders[name]=value;}
return this;}, overrideMimeType:function(type){if(!state){s.mimeType=type;}
return this;}, statusCode:function(map){var code;if(map){if(state<2){for(code in map){ statusCode[code]=[statusCode[code],map[code]];}}else{ jqXHR.always(map[jqXHR.status]);}}
return this;}, abort:function(statusText){var finalText=statusText||strAbort;if(transport){transport.abort(finalText);}
done(0,finalText);return this;}}; deferred.promise(jqXHR).complete=completeDeferred.add;jqXHR.success=jqXHR.done;jqXHR.error=jqXHR.fail; 
s.url=((url||s.url||ajaxLocation)+"").replace(rhash,"").replace(rprotocol,ajaxLocParts[1]+"//"); s.type=options.method||options.type||s.method||s.type; s.dataTypes=jQuery.trim(s.dataType||"*").toLowerCase().match(rnotwhite)||[""]; if(s.crossDomain==null){parts=rurl.exec(s.url.toLowerCase());s.crossDomain=!!(parts&&(parts[1]!==ajaxLocParts[1]||parts[2]!==ajaxLocParts[2]||(parts[3]||(parts[1]==="http:"?"80":"443"))!==(ajaxLocParts[3]||(ajaxLocParts[1]==="http:"?"80":"443"))));} 
if(s.data&&s.processData&&typeof s.data!=="string"){s.data=jQuery.param(s.data,s.traditional);} 
inspectPrefiltersOrTransports(prefilters,s,options,jqXHR); if(state===2){return jqXHR;} 

fireGlobals=jQuery.event&&s.global; if(fireGlobals&&jQuery.active++===0){jQuery.event.trigger("ajaxStart");} 
s.type=s.type.toUpperCase(); s.hasContent=!rnoContent.test(s.type);
 cacheURL=s.url; if(!s.hasContent){ if(s.data){cacheURL=(s.url+=(rquery.test(cacheURL)?"&":"?")+s.data); delete s.data;} 
if(s.cache===false){s.url=rts.test(cacheURL)? cacheURL.replace(rts,"$1_="+nonce++): cacheURL+(rquery.test(cacheURL)?"&":"?")+"_="+nonce++;}}
if(s.ifModified){if(jQuery.lastModified[cacheURL]){jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[cacheURL]);}
if(jQuery.etag[cacheURL]){jqXHR.setRequestHeader("If-None-Match",jQuery.etag[cacheURL]);}} 
if(s.data&&s.hasContent&&s.contentType!==false||options.contentType){jqXHR.setRequestHeader("Content-Type",s.contentType);} 
jqXHR.setRequestHeader("Accept",s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]]+(s.dataTypes[0]!=="*"?", "+allTypes+"; q=0.01":""):s.accepts["*"]); for(i in s.headers){jqXHR.setRequestHeader(i,s.headers[i]);} 
if(s.beforeSend&&(s.beforeSend.call(callbackContext,jqXHR,s)===false||state===2)){ return jqXHR.abort();} 
strAbort="abort"; for(i in{success:1,error:1,complete:1}){jqXHR[i](s[i]);} 
transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR); if(!transport){done(-1,"No Transport");}else{jqXHR.readyState=1; if(fireGlobals){globalEventContext.trigger("ajaxSend",[jqXHR,s]);} 
if(s.async&&s.timeout>0){timeoutTimer=setTimeout(function(){jqXHR.abort("timeout");},s.timeout);}
try{state=1;transport.send(requestHeaders,done);}catch(e){ if(state<2){done(-1,e);}else{throw e;}}} 
function done(status,nativeStatusText,responses,headers){var isSuccess,success,error,response,modified,statusText=nativeStatusText; if(state===2){return;} 
state=2; if(timeoutTimer){clearTimeout(timeoutTimer);}

transport=undefined; responseHeadersString=headers||""; jqXHR.readyState=status>0?4:0; isSuccess=status>=200&&status<300||status===304; if(responses){response=ajaxHandleResponses(s,jqXHR,responses);}
response=ajaxConvert(s,response,jqXHR,isSuccess); if(isSuccess){if(s.ifModified){modified=jqXHR.getResponseHeader("Last-Modified");if(modified){jQuery.lastModified[cacheURL]=modified;}
modified=jqXHR.getResponseHeader("etag");if(modified){jQuery.etag[cacheURL]=modified;}} 
if(status===204||s.type==="HEAD"){statusText="nocontent";}else if(status===304){statusText="notmodified";}else{statusText=response.state;success=response.data;error=response.error;isSuccess=!error;}}else{ error=statusText;if(status||!statusText){statusText="error";if(status<0){status=0;}}} 
jqXHR.status=status;jqXHR.statusText=(nativeStatusText||statusText)+""; if(isSuccess){deferred.resolveWith(callbackContext,[success,statusText,jqXHR]);}else{deferred.rejectWith(callbackContext,[jqXHR,statusText,error]);} 
jqXHR.statusCode(statusCode);statusCode=undefined;if(fireGlobals){globalEventContext.trigger(isSuccess?"ajaxSuccess":"ajaxError",[jqXHR,s,isSuccess?success:error]);} 
completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);if(fireGlobals){globalEventContext.trigger("ajaxComplete",[jqXHR,s]); if(!(--jQuery.active)){jQuery.event.trigger("ajaxStop");}}}
return jqXHR;},getJSON:function(url,data,callback){return jQuery.get(url,data,callback,"json");},getScript:function(url,callback){return jQuery.get(url,undefined,callback,"script");}});jQuery.each(["get","post"],function(i,method){jQuery[method]=function(url,data,callback,type){ if(jQuery.isFunction(data)){type=type||callback;callback=data;data=undefined;}
return jQuery.ajax({url:url,type:method,dataType:type,data:data,success:callback});};});jQuery._evalUrl=function(url){return jQuery.ajax({url:url,type:"GET",dataType:"script",async:false,global:false,"throws":true});};jQuery.fn.extend({wrapAll:function(html){var wrap;if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapAll(html.call(this,i));});}
if(this[0]){ wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){wrap.insertBefore(this[0]);}
wrap.map(function(){var elem=this;while(elem.firstElementChild){elem=elem.firstElementChild;}
return elem;}).append(this);}
return this;},wrapInner:function(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapInner(html.call(this,i));});}
return this.each(function(){var self=jQuery(this),contents=self.contents();if(contents.length){contents.wrapAll(html);}else{self.append(html);}});},wrap:function(html){var isFunction=jQuery.isFunction(html);return this.each(function(i){jQuery(this).wrapAll(isFunction?html.call(this,i):html);});},unwrap:function(){return this.parent().each(function(){if(!jQuery.nodeName(this,"body")){jQuery(this).replaceWith(this.childNodes);}}).end();}});jQuery.expr.filters.hidden=function(elem){
 return elem.offsetWidth<=0&&elem.offsetHeight<=0;};jQuery.expr.filters.visible=function(elem){return!jQuery.expr.filters.hidden(elem);};var r20=/%20/g,rbracket=/\[\]$/,rCRLF=/\r?\n/g,rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,rsubmittable=/^(?:input|select|textarea|keygen)/i;function buildParams(prefix,obj,traditional,add){var name;if(jQuery.isArray(obj)){jQuery.each(obj,function(i,v){if(traditional||rbracket.test(prefix)){add(prefix,v);}else{buildParams(prefix+"["+(typeof v==="object"?i:"")+"]",v,traditional,add);}});}else if(!traditional&&jQuery.type(obj)==="object"){for(name in obj){buildParams(prefix+"["+name+"]",obj[name],traditional,add);}}else{add(prefix,obj);}}

jQuery.param=function(a,traditional){var prefix,s=[],add=function(key,value){ value=jQuery.isFunction(value)?value():(value==null?"":value);s[s.length]=encodeURIComponent(key)+"="+encodeURIComponent(value);};if(traditional===undefined){traditional=jQuery.ajaxSettings&&jQuery.ajaxSettings.traditional;}
if(jQuery.isArray(a)||(a.jquery&&!jQuery.isPlainObject(a))){ jQuery.each(a,function(){add(this.name,this.value);});}else{
for(prefix in a){buildParams(prefix,a[prefix],traditional,add);}} 
return s.join("&").replace(r20,"+");};jQuery.fn.extend({serialize:function(){return jQuery.param(this.serializeArray());},serializeArray:function(){return this.map(function(){ var elements=jQuery.prop(this,"elements");return elements?jQuery.makeArray(elements):this;}).filter(function(){var type=this.type; return this.name&&!jQuery(this).is(":disabled")&&rsubmittable.test(this.nodeName)&&!rsubmitterTypes.test(type)&&(this.checked||!rcheckableType.test(type));}).map(function(i,elem){var val=jQuery(this).val();return val==null?null:jQuery.isArray(val)?jQuery.map(val,function(val){return{name:elem.name,value:val.replace(rCRLF,"\r\n")};}):{name:elem.name,value:val.replace(rCRLF,"\r\n")};}).get();}});jQuery.ajaxSettings.xhr=function(){try{return new XMLHttpRequest();}catch(e){}};var xhrId=0,xhrCallbacks={},xhrSuccessStatus={ 0:200,
 1223:204},xhrSupported=jQuery.ajaxSettings.xhr();

if(window.attachEvent){window.attachEvent("onunload",function(){for(var key in xhrCallbacks){xhrCallbacks[key]();}});}
support.cors=!!xhrSupported&&("withCredentials"in xhrSupported);support.ajax=xhrSupported=!!xhrSupported;jQuery.ajaxTransport(function(options){var callback; if(support.cors||xhrSupported&&!options.crossDomain){return{send:function(headers,complete){var i,xhr=options.xhr(),id=++xhrId;xhr.open(options.type,options.url,options.async,options.username,options.password); if(options.xhrFields){for(i in options.xhrFields){xhr[i]=options.xhrFields[i];}} 
if(options.mimeType&&xhr.overrideMimeType){xhr.overrideMimeType(options.mimeType);}


if(!options.crossDomain&&!headers["X-Requested-With"]){headers["X-Requested-With"]="XMLHttpRequest";} 
for(i in headers){xhr.setRequestHeader(i,headers[i]);} 
callback=function(type){return function(){if(callback){delete xhrCallbacks[id];callback=xhr.onload=xhr.onerror=null;if(type==="abort"){xhr.abort();}else if(type==="error"){complete( xhr.status,xhr.statusText);}else{complete(xhrSuccessStatus[xhr.status]||xhr.status,xhr.statusText,

typeof xhr.responseText==="string"?{text:xhr.responseText}:undefined,xhr.getAllResponseHeaders());}}};}; xhr.onload=callback();xhr.onerror=callback("error"); callback=xhrCallbacks[id]=callback("abort");try{xhr.send(options.hasContent&&options.data||null);}catch(e){ if(callback){throw e;}}},abort:function(){if(callback){callback();}}};}});jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(text){jQuery.globalEval(text);return text;}}});jQuery.ajaxPrefilter("script",function(s){if(s.cache===undefined){s.cache=false;}
if(s.crossDomain){s.type="GET";}});jQuery.ajaxTransport("script",function(s){ if(s.crossDomain){var script,callback;return{send:function(_,complete){script=jQuery("<script>").prop({async:true,charset:s.scriptCharset,src:s.url}).on("load error",callback=function(evt){script.remove();callback=null;if(evt){complete(evt.type==="error"?404:200,evt.type);}});document.head.appendChild(script[0]);},abort:function(){if(callback){callback();}}};}});var oldCallbacks=[],rjsonp=/(=)\?(?=&|$)|\?\?/;jQuery.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var callback=oldCallbacks.pop()||(jQuery.expando+"_"+(nonce++));this[callback]=true;return callback;}});jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){var callbackName,overwritten,responseContainer,jsonProp=s.jsonp!==false&&(rjsonp.test(s.url)?"url":typeof s.data==="string"&&!(s.contentType||"").indexOf("application/x-www-form-urlencoded")&&rjsonp.test(s.data)&&"data"); if(jsonProp||s.dataTypes[0]==="jsonp"){ callbackName=s.jsonpCallback=jQuery.isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback; if(jsonProp){s[jsonProp]=s[jsonProp].replace(rjsonp,"$1"+callbackName);}else if(s.jsonp!==false){s.url+=(rquery.test(s.url)?"&":"?")+s.jsonp+"="+callbackName;} 
s.converters["script json"]=function(){if(!responseContainer){jQuery.error(callbackName+" was not called");}
return responseContainer[0];}; s.dataTypes[0]="json"; overwritten=window[callbackName];window[callbackName]=function(){responseContainer=arguments;};jqXHR.always(function(){ window[callbackName]=overwritten; if(s[callbackName]){ s.jsonpCallback=originalSettings.jsonpCallback; oldCallbacks.push(callbackName);} 
if(responseContainer&&jQuery.isFunction(overwritten)){overwritten(responseContainer[0]);}
responseContainer=overwritten=undefined;}); return"script";}});

jQuery.parseHTML=function(data,context,keepScripts){if(!data||typeof data!=="string"){return null;}
if(typeof context==="boolean"){keepScripts=context;context=false;}
context=context||document;var parsed=rsingleTag.exec(data),scripts=!keepScripts&&[]; if(parsed){return[context.createElement(parsed[1])];}
parsed=jQuery.buildFragment([data],context,scripts);if(scripts&&scripts.length){jQuery(scripts).remove();}
return jQuery.merge([],parsed.childNodes);};var _load=jQuery.fn.load;jQuery.fn.load=function(url,params,callback){if(typeof url!=="string"&&_load){return _load.apply(this,arguments);}
var selector,type,response,self=this,off=url.indexOf(" ");if(off>=0){selector=jQuery.trim(url.slice(off));url=url.slice(0,off);} 
if(jQuery.isFunction(params)){ callback=params;params=undefined;}else if(params&&typeof params==="object"){type="POST";} 
if(self.length>0){jQuery.ajax({url:url, type:type,dataType:"html",data:params}).done(function(responseText){ response=arguments;self.html(selector?
 jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector): responseText);}).complete(callback&&function(jqXHR,status){self.each(callback,response||[jqXHR.responseText,status,jqXHR]);});}
return this;};jQuery.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(i,type){jQuery.fn[type]=function(fn){return this.on(type,fn);};});jQuery.expr.filters.animated=function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem===fn.elem;}).length;};var docElem=window.document.documentElement;function getWindow(elem){return jQuery.isWindow(elem)?elem:elem.nodeType===9&&elem.defaultView;}
jQuery.offset={setOffset:function(elem,options,i){var curPosition,curLeft,curCSSTop,curTop,curOffset,curCSSLeft,calculatePosition,position=jQuery.css(elem,"position"),curElem=jQuery(elem),props={}; if(position==="static"){elem.style.position="relative";}
curOffset=curElem.offset();curCSSTop=jQuery.css(elem,"top");curCSSLeft=jQuery.css(elem,"left");calculatePosition=(position==="absolute"||position==="fixed")&&(curCSSTop+curCSSLeft).indexOf("auto")>-1;
 if(calculatePosition){curPosition=curElem.position();curTop=curPosition.top;curLeft=curPosition.left;}else{curTop=parseFloat(curCSSTop)||0;curLeft=parseFloat(curCSSLeft)||0;}
if(jQuery.isFunction(options)){options=options.call(elem,i,curOffset);}
if(options.top!=null){props.top=(options.top-curOffset.top)+curTop;}
if(options.left!=null){props.left=(options.left-curOffset.left)+curLeft;}
if("using"in options){options.using.call(elem,props);}else{curElem.css(props);}}};jQuery.fn.extend({offset:function(options){if(arguments.length){return options===undefined?this:this.each(function(i){jQuery.offset.setOffset(this,options,i);});}
var docElem,win,elem=this[0],box={top:0,left:0},doc=elem&&elem.ownerDocument;if(!doc){return;}
docElem=doc.documentElement; if(!jQuery.contains(docElem,elem)){return box;}  
if(typeof elem.getBoundingClientRect!==strundefined){box=elem.getBoundingClientRect();}
win=getWindow(doc);return{top:box.top+win.pageYOffset-docElem.clientTop,left:box.left+win.pageXOffset-docElem.clientLeft};},position:function(){if(!this[0]){return;}
var offsetParent,offset,elem=this[0],parentOffset={top:0,left:0}; if(jQuery.css(elem,"position")==="fixed"){ offset=elem.getBoundingClientRect();}else{ offsetParent=this.offsetParent(); offset=this.offset();if(!jQuery.nodeName(offsetParent[0],"html")){parentOffset=offsetParent.offset();} 
parentOffset.top+=jQuery.css(offsetParent[0],"borderTopWidth",true);parentOffset.left+=jQuery.css(offsetParent[0],"borderLeftWidth",true);} 
return{top:offset.top-parentOffset.top-jQuery.css(elem,"marginTop",true),left:offset.left-parentOffset.left-jQuery.css(elem,"marginLeft",true)};},offsetParent:function(){return this.map(function(){var offsetParent=this.offsetParent||docElem;while(offsetParent&&(!jQuery.nodeName(offsetParent,"html")&&jQuery.css(offsetParent,"position")==="static")){offsetParent=offsetParent.offsetParent;}
return offsetParent||docElem;});}});jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(method,prop){var top="pageYOffset"===prop;jQuery.fn[method]=function(val){return access(this,function(elem,method,val){var win=getWindow(elem);if(val===undefined){return win?win[prop]:elem[method];}
if(win){win.scrollTo(!top?val:window.pageXOffset,top?val:window.pageYOffset);}else{elem[method]=val;}},method,val,arguments.length,null);};});


jQuery.each(["top","left"],function(i,prop){jQuery.cssHooks[prop]=addGetHookIf(support.pixelPosition,function(elem,computed){if(computed){computed=curCSS(elem,prop); return rnumnonpx.test(computed)?jQuery(elem).position()[prop]+"px":computed;}});});jQuery.each({Height:"height",Width:"width"},function(name,type){jQuery.each({padding:"inner"+name,content:type,"":"outer"+name},function(defaultExtra,funcName){ jQuery.fn[funcName]=function(margin,value){var chainable=arguments.length&&(defaultExtra||typeof margin!=="boolean"),extra=defaultExtra||(margin===true||value===true?"margin":"border");return access(this,function(elem,type,value){var doc;if(jQuery.isWindow(elem)){
 return elem.document.documentElement["client"+name];} 
if(elem.nodeType===9){doc=elem.documentElement; return Math.max(elem.body["scroll"+name],doc["scroll"+name],elem.body["offset"+name],doc["offset"+name],doc["client"+name]);}
return value===undefined? jQuery.css(elem,type,extra): jQuery.style(elem,type,value,extra);},type,chainable?margin:undefined,chainable,null);};});});jQuery.fn.size=function(){return this.length;};jQuery.fn.andSelf=jQuery.fn.addBack;








if(typeof define==="function"&&define.amd){define("jquery",[],function(){return jQuery;});}
var
 
_jQuery=window.jQuery, _$=window.$;jQuery.noConflict=function(deep){if(window.$===jQuery){window.$=_$;}
if(deep&&window.jQuery===jQuery){window.jQuery=_jQuery;}
return jQuery;};

if(typeof noGlobal===strundefined){window.jQuery=window.$=jQuery;}
return jQuery;}));


(function(){
var root=this;var previousUnderscore=root._;var ArrayProto=Array.prototype,ObjProto=Object.prototype,FuncProto=Function.prototype;var
push=ArrayProto.push,slice=ArrayProto.slice,toString=ObjProto.toString,hasOwnProperty=ObjProto.hasOwnProperty;
var
nativeIsArray=Array.isArray,nativeKeys=Object.keys,nativeBind=FuncProto.bind,nativeCreate=Object.create;var Ctor=function(){};var _=function(obj){if(obj instanceof _)return obj;if(!(this instanceof _))return new _(obj);this._wrapped=obj;};

if(typeof exports!=='undefined'){if(typeof module!=='undefined'&&module.exports){exports=module.exports=_;}
exports._=_;}else{root._=_;}
_.VERSION='1.8.3';

var optimizeCb=function(func,context,argCount){if(context===void 0)return func;switch(argCount==null?3:argCount){case 1:return function(value){return func.call(context,value);};case 2:return function(value,other){return func.call(context,value,other);};case 3:return function(value,index,collection){return func.call(context,value,index,collection);};case 4:return function(accumulator,value,index,collection){return func.call(context,accumulator,value,index,collection);};}
return function(){return func.apply(context,arguments);};};

var cb=function(value,context,argCount){if(value==null)return _.identity;if(_.isFunction(value))return optimizeCb(value,context,argCount);if(_.isObject(value))return _.matcher(value);return _.property(value);};_.iteratee=function(value,context){return cb(value,context,Infinity);};var createAssigner=function(keysFunc,undefinedOnly){return function(obj){var length=arguments.length;if(length<2||obj==null)return obj;for(var index=1;index<length;index++){var source=arguments[index],keys=keysFunc(source),l=keys.length;for(var i=0;i<l;i++){var key=keys[i];if(!undefinedOnly||obj[key]===void 0)obj[key]=source[key];}}
return obj;};}; var baseCreate=function(prototype){if(!_.isObject(prototype))return{};if(nativeCreate)return nativeCreate(prototype);Ctor.prototype=prototype;var result=new Ctor;Ctor.prototype=null;return result;};var property=function(key){return function(obj){return obj==null?void 0:obj[key];};};


 var MAX_ARRAY_INDEX=Math.pow(2,53)-1;var getLength=property('length');var isArrayLike=function(collection){var length=getLength(collection);return typeof length=='number'&&length>=0&&length<=MAX_ARRAY_INDEX;};

_.each=_.forEach=function(obj,iteratee,context){iteratee=optimizeCb(iteratee,context);var i,length;if(isArrayLike(obj)){for(i=0,length=obj.length;i<length;i++){iteratee(obj[i],i,obj);}}else{var keys=_.keys(obj);for(i=0,length=keys.length;i<length;i++){iteratee(obj[keys[i]],keys[i],obj);}}
return obj;}; _.map=_.collect=function(obj,iteratee,context){iteratee=cb(iteratee,context);var keys=!isArrayLike(obj)&&_.keys(obj),length=(keys||obj).length,results=Array(length);for(var index=0;index<length;index++){var currentKey=keys?keys[index]:index;results[index]=iteratee(obj[currentKey],currentKey,obj);}
return results;};function createReduce(dir){
function iterator(obj,iteratee,memo,keys,index,length){for(;index>=0&&index<length;index+=dir){var currentKey=keys?keys[index]:index;memo=iteratee(memo,obj[currentKey],currentKey,obj);}
return memo;}
return function(obj,iteratee,memo,context){iteratee=optimizeCb(iteratee,context,4);var keys=!isArrayLike(obj)&&_.keys(obj),length=(keys||obj).length,index=dir>0?0:length-1;if(arguments.length<3){memo=obj[keys?keys[index]:index];index+=dir;}
return iterator(obj,iteratee,memo,keys,index,length);};}
_.reduce=_.foldl=_.inject=createReduce(1);_.reduceRight=_.foldr=createReduce(-1);_.find=_.detect=function(obj,predicate,context){var key;if(isArrayLike(obj)){key=_.findIndex(obj,predicate,context);}else{key=_.findKey(obj,predicate,context);}
if(key!==void 0&&key!==-1)return obj[key];};_.filter=_.select=function(obj,predicate,context){var results=[];predicate=cb(predicate,context);_.each(obj,function(value,index,list){if(predicate(value,index,list))results.push(value);});return results;};_.reject=function(obj,predicate,context){return _.filter(obj,_.negate(cb(predicate)),context);};_.every=_.all=function(obj,predicate,context){predicate=cb(predicate,context);var keys=!isArrayLike(obj)&&_.keys(obj),length=(keys||obj).length;for(var index=0;index<length;index++){var currentKey=keys?keys[index]:index;if(!predicate(obj[currentKey],currentKey,obj))return false;}
return true;};_.some=_.any=function(obj,predicate,context){predicate=cb(predicate,context);var keys=!isArrayLike(obj)&&_.keys(obj),length=(keys||obj).length;for(var index=0;index<length;index++){var currentKey=keys?keys[index]:index;if(predicate(obj[currentKey],currentKey,obj))return true;}
return false;};_.contains=_.includes=_.include=function(obj,item,fromIndex,guard){if(!isArrayLike(obj))obj=_.values(obj);if(typeof fromIndex!='number'||guard)fromIndex=0;return _.indexOf(obj,item,fromIndex)>=0;};_.invoke=function(obj,method){var args=slice.call(arguments,2);var isFunc=_.isFunction(method);return _.map(obj,function(value){var func=isFunc?method:value[method];return func==null?func:func.apply(value,args);});};_.pluck=function(obj,key){return _.map(obj,_.property(key));};
_.where=function(obj,attrs){return _.filter(obj,_.matcher(attrs));};
_.findWhere=function(obj,attrs){return _.find(obj,_.matcher(attrs));};_.max=function(obj,iteratee,context){var result=-Infinity,lastComputed=-Infinity,value,computed;if(iteratee==null&&obj!=null){obj=isArrayLike(obj)?obj:_.values(obj);for(var i=0,length=obj.length;i<length;i++){value=obj[i];if(value>result){result=value;}}}else{iteratee=cb(iteratee,context);_.each(obj,function(value,index,list){computed=iteratee(value,index,list);if(computed>lastComputed||computed===-Infinity&&result===-Infinity){result=value;lastComputed=computed;}});}
return result;};_.min=function(obj,iteratee,context){var result=Infinity,lastComputed=Infinity,value,computed;if(iteratee==null&&obj!=null){obj=isArrayLike(obj)?obj:_.values(obj);for(var i=0,length=obj.length;i<length;i++){value=obj[i];if(value<result){result=value;}}}else{iteratee=cb(iteratee,context);_.each(obj,function(value,index,list){computed=iteratee(value,index,list);if(computed<lastComputed||computed===Infinity&&result===Infinity){result=value;lastComputed=computed;}});}
return result;};
_.shuffle=function(obj){var set=isArrayLike(obj)?obj:_.values(obj);var length=set.length;var shuffled=Array(length);for(var index=0,rand;index<length;index++){rand=_.random(0,index);if(rand!==index)shuffled[index]=shuffled[rand];shuffled[rand]=set[index];}
return shuffled;};_.sample=function(obj,n,guard){if(n==null||guard){if(!isArrayLike(obj))obj=_.values(obj);return obj[_.random(obj.length-1)];}
return _.shuffle(obj).slice(0,Math.max(0,n));};_.sortBy=function(obj,iteratee,context){iteratee=cb(iteratee,context);return _.pluck(_.map(obj,function(value,index,list){return{value:value,index:index,criteria:iteratee(value,index,list)};}).sort(function(left,right){var a=left.criteria;var b=right.criteria;if(a!==b){if(a>b||a===void 0)return 1;if(a<b||b===void 0)return-1;}
return left.index-right.index;}),'value');};var group=function(behavior){return function(obj,iteratee,context){var result={};iteratee=cb(iteratee,context);_.each(obj,function(value,index){var key=iteratee(value,index,obj);behavior(result,value,key);});return result;};};
_.groupBy=group(function(result,value,key){if(_.has(result,key))result[key].push(value);else result[key]=[value];});
_.indexBy=group(function(result,value,key){result[key]=value;});

_.countBy=group(function(result,value,key){if(_.has(result,key))result[key]++;else result[key]=1;});_.toArray=function(obj){if(!obj)return[];if(_.isArray(obj))return slice.call(obj);if(isArrayLike(obj))return _.map(obj,_.identity);return _.values(obj);};_.size=function(obj){if(obj==null)return 0;return isArrayLike(obj)?obj.length:_.keys(obj).length;};
_.partition=function(obj,predicate,context){predicate=cb(predicate,context);var pass=[],fail=[];_.each(obj,function(value,key,obj){(predicate(value,key,obj)?pass:fail).push(value);});return[pass,fail];};  
  
 
_.first=_.head=_.take=function(array,n,guard){if(array==null)return void 0;if(n==null||guard)return array[0];return _.initial(array,array.length-n);};

_.initial=function(array,n,guard){return slice.call(array,0,Math.max(0,array.length-(n==null||guard?1:n)));};
_.last=function(array,n,guard){if(array==null)return void 0;if(n==null||guard)return array[array.length-1];return _.rest(array,Math.max(0,array.length-n));};
_.rest=_.tail=_.drop=function(array,n,guard){return slice.call(array,n==null||guard?1:n);};_.compact=function(array){return _.filter(array,_.identity);};var flatten=function(input,shallow,strict,startIndex){var output=[],idx=0;for(var i=startIndex||0,length=getLength(input);i<length;i++){var value=input[i];if(isArrayLike(value)&&(_.isArray(value)||_.isArguments(value))){ if(!shallow)value=flatten(value,shallow,strict);var j=0,len=value.length;output.length+=len;while(j<len){output[idx++]=value[j++];}}else if(!strict){output[idx++]=value;}}
return output;};_.flatten=function(array,shallow){return flatten(array,shallow,false);};_.without=function(array){return _.difference(array,slice.call(arguments,1));};
_.uniq=_.unique=function(array,isSorted,iteratee,context){if(!_.isBoolean(isSorted)){context=iteratee;iteratee=isSorted;isSorted=false;}
if(iteratee!=null)iteratee=cb(iteratee,context);var result=[];var seen=[];for(var i=0,length=getLength(array);i<length;i++){var value=array[i],computed=iteratee?iteratee(value,i,array):value;if(isSorted){if(!i||seen!==computed)result.push(value);seen=computed;}else if(iteratee){if(!_.contains(seen,computed)){seen.push(computed);result.push(value);}}else if(!_.contains(result,value)){result.push(value);}}
return result;};
_.union=function(){return _.uniq(flatten(arguments,true,true));};
_.intersection=function(array){var result=[];var argsLength=arguments.length;for(var i=0,length=getLength(array);i<length;i++){var item=array[i];if(_.contains(result,item))continue;for(var j=1;j<argsLength;j++){if(!_.contains(arguments[j],item))break;}
if(j===argsLength)result.push(item);}
return result;};_.difference=function(array){var rest=flatten(arguments,true,true,1);return _.filter(array,function(value){return!_.contains(rest,value);});};
_.zip=function(){return _.unzip(arguments);};
 _.unzip=function(array){var length=array&&_.max(array,getLength).length||0;var result=Array(length);for(var index=0;index<length;index++){result[index]=_.pluck(array,index);}
return result;};
_.object=function(list,values){var result={};for(var i=0,length=getLength(list);i<length;i++){if(values){result[list[i]]=values[i];}else{result[list[i][0]]=list[i][1];}}
return result;}; function createPredicateIndexFinder(dir){return function(array,predicate,context){predicate=cb(predicate,context);var length=getLength(array);var index=dir>0?0:length-1;for(;index>=0&&index<length;index+=dir){if(predicate(array[index],index,array))return index;}
return-1;};} 
_.findIndex=createPredicateIndexFinder(1);_.findLastIndex=createPredicateIndexFinder(-1);
_.sortedIndex=function(array,obj,iteratee,context){iteratee=cb(iteratee,context,1);var value=iteratee(obj);var low=0,high=getLength(array);while(low<high){var mid=Math.floor((low+high)/2);if(iteratee(array[mid])<value)low=mid+1;else high=mid;}
return low;};  function createIndexFinder(dir,predicateFind,sortedIndex){return function(array,item,idx){var i=0,length=getLength(array);if(typeof idx=='number'){if(dir>0){i=idx>=0?idx:Math.max(idx+length,i);}else{length=idx>=0?Math.min(idx+1,length):idx+length+1;}}else if(sortedIndex&&idx&&length){idx=sortedIndex(array,item);return array[idx]===item?idx:-1;}
if(item!==item){idx=predicateFind(slice.call(array,i,length),_.isNaN);return idx>=0?idx+i:-1;}
for(idx=dir>0?i:length-1;idx>=0&&idx<length;idx+=dir){if(array[idx]===item)return idx;}
return-1;};}   
_.indexOf=createIndexFinder(1,_.findIndex,_.sortedIndex);_.lastIndexOf=createIndexFinder(-1,_.findLastIndex);

_.range=function(start,stop,step){if(stop==null){stop=start||0;start=0;}
step=step||1;var length=Math.max(Math.ceil((stop-start)/step),0);var range=Array(length);for(var idx=0;idx<length;idx++,start+=step){range[idx]=start;}
return range;};

 var executeBound=function(sourceFunc,boundFunc,context,callingContext,args){if(!(callingContext instanceof boundFunc))return sourceFunc.apply(context,args);var self=baseCreate(sourceFunc.prototype);var result=sourceFunc.apply(self,args);if(_.isObject(result))return result;return self;};
_.bind=function(func,context){if(nativeBind&&func.bind===nativeBind)return nativeBind.apply(func,slice.call(arguments,1));if(!_.isFunction(func))throw new TypeError('Bind must be called on a function');var args=slice.call(arguments,2);var bound=function(){return executeBound(func,bound,context,this,args.concat(slice.call(arguments)));};return bound;};

_.partial=function(func){var boundArgs=slice.call(arguments,1);var bound=function(){var position=0,length=boundArgs.length;var args=Array(length);for(var i=0;i<length;i++){args[i]=boundArgs[i]===_?arguments[position++]:boundArgs[i];}
while(position<arguments.length)args.push(arguments[position++]);return executeBound(func,bound,this,this,args);};return bound;};

_.bindAll=function(obj){var i,length=arguments.length,key;if(length<=1)throw new Error('bindAll must be passed function names');for(i=1;i<length;i++){key=arguments[i];obj[key]=_.bind(obj[key],obj);}
return obj;}; _.memoize=function(func,hasher){var memoize=function(key){var cache=memoize.cache;var address=''+(hasher?hasher.apply(this,arguments):key);if(!_.has(cache,address))cache[address]=func.apply(this,arguments);return cache[address];};memoize.cache={};return memoize;};
_.delay=function(func,wait){var args=slice.call(arguments,2);return setTimeout(function(){return func.apply(null,args);},wait);};
_.defer=_.partial(_.delay,_,1);


_.throttle=function(func,wait,options){var context,args,result;var timeout=null;var previous=0;if(!options)options={};var later=function(){previous=options.leading===false?0:_.now();timeout=null;result=func.apply(context,args);if(!timeout)context=args=null;};return function(){var now=_.now();if(!previous&&options.leading===false)previous=now;var remaining=wait-(now-previous);context=this;args=arguments;if(remaining<=0||remaining>wait){if(timeout){clearTimeout(timeout);timeout=null;}
previous=now;result=func.apply(context,args);if(!timeout)context=args=null;}else if(!timeout&&options.trailing!==false){timeout=setTimeout(later,remaining);}
return result;};};


_.debounce=function(func,wait,immediate){var timeout,args,context,timestamp,result;var later=function(){var last=_.now()-timestamp;if(last<wait&&last>=0){timeout=setTimeout(later,wait-last);}else{timeout=null;if(!immediate){result=func.apply(context,args);if(!timeout)context=args=null;}}};return function(){context=this;args=arguments;timestamp=_.now();var callNow=immediate&&!timeout;if(!timeout)timeout=setTimeout(later,wait);if(callNow){result=func.apply(context,args);context=args=null;}
return result;};};
_.wrap=function(func,wrapper){return _.partial(wrapper,func);};_.negate=function(predicate){return function(){return!predicate.apply(this,arguments);};};
_.compose=function(){var args=arguments;var start=args.length-1;return function(){var i=start;var result=args[start].apply(this,arguments);while(i--)result=args[i].call(this,result);return result;};};_.after=function(times,func){return function(){if(--times<1){return func.apply(this,arguments);}};};_.before=function(times,func){var memo;return function(){if(--times>0){memo=func.apply(this,arguments);}
if(times<=1)func=null;return memo;};};
_.once=_.partial(_.before,2);
var hasEnumBug=!{toString:null}.propertyIsEnumerable('toString');var nonEnumerableProps=['valueOf','isPrototypeOf','toString','propertyIsEnumerable','hasOwnProperty','toLocaleString'];function collectNonEnumProps(obj,keys){var nonEnumIdx=nonEnumerableProps.length;var constructor=obj.constructor;var proto=(_.isFunction(constructor)&&constructor.prototype)||ObjProto;var prop='constructor';if(_.has(obj,prop)&&!_.contains(keys,prop))keys.push(prop);while(nonEnumIdx--){prop=nonEnumerableProps[nonEnumIdx];if(prop in obj&&obj[prop]!==proto[prop]&&!_.contains(keys,prop)){keys.push(prop);}}}
_.keys=function(obj){if(!_.isObject(obj))return[];if(nativeKeys)return nativeKeys(obj);var keys=[];for(var key in obj)if(_.has(obj,key))keys.push(key);if(hasEnumBug)collectNonEnumProps(obj,keys);return keys;};_.allKeys=function(obj){if(!_.isObject(obj))return[];var keys=[];for(var key in obj)keys.push(key);if(hasEnumBug)collectNonEnumProps(obj,keys);return keys;};_.values=function(obj){var keys=_.keys(obj);var length=keys.length;var values=Array(length);for(var i=0;i<length;i++){values[i]=obj[keys[i]];}
return values;};
 _.mapObject=function(obj,iteratee,context){iteratee=cb(iteratee,context);var keys=_.keys(obj),length=keys.length,results={},currentKey;for(var index=0;index<length;index++){currentKey=keys[index];results[currentKey]=iteratee(obj[currentKey],currentKey,obj);}
return results;};_.pairs=function(obj){var keys=_.keys(obj);var length=keys.length;var pairs=Array(length);for(var i=0;i<length;i++){pairs[i]=[keys[i],obj[keys[i]]];}
return pairs;};_.invert=function(obj){var result={};var keys=_.keys(obj);for(var i=0,length=keys.length;i<length;i++){result[obj[keys[i]]]=keys[i];}
return result;};_.functions=_.methods=function(obj){var names=[];for(var key in obj){if(_.isFunction(obj[key]))names.push(key);}
return names.sort();};_.extend=createAssigner(_.allKeys);
_.extendOwn=_.assign=createAssigner(_.keys); _.findKey=function(obj,predicate,context){predicate=cb(predicate,context);var keys=_.keys(obj),key;for(var i=0,length=keys.length;i<length;i++){key=keys[i];if(predicate(obj[key],key,obj))return key;}};_.pick=function(object,oiteratee,context){var result={},obj=object,iteratee,keys;if(obj==null)return result;if(_.isFunction(oiteratee)){keys=_.allKeys(obj);iteratee=optimizeCb(oiteratee,context);}else{keys=flatten(arguments,false,false,1);iteratee=function(value,key,obj){return key in obj;};obj=Object(obj);}
for(var i=0,length=keys.length;i<length;i++){var key=keys[i];var value=obj[key];if(iteratee(value,key,obj))result[key]=value;}
return result;};_.omit=function(obj,iteratee,context){if(_.isFunction(iteratee)){iteratee=_.negate(iteratee);}else{var keys=_.map(flatten(arguments,false,false,1),String);iteratee=function(value,key){return!_.contains(keys,key);};}
return _.pick(obj,iteratee,context);};_.defaults=createAssigner(_.allKeys,true);
_.create=function(prototype,props){var result=baseCreate(prototype);if(props)_.extendOwn(result,props);return result;};_.clone=function(obj){if(!_.isObject(obj))return obj;return _.isArray(obj)?obj.slice():_.extend({},obj);};
_.tap=function(obj,interceptor){interceptor(obj);return obj;}; _.isMatch=function(object,attrs){var keys=_.keys(attrs),length=keys.length;if(object==null)return!length;var obj=Object(object);for(var i=0;i<length;i++){var key=keys[i];if(attrs[key]!==obj[key]||!(key in obj))return false;}
return true;};var eq=function(a,b,aStack,bStack){if(a===b)return a!==0||1 / a === 1 /b; if(a==null||b==null)return a===b; if(a instanceof _)a=a._wrapped;if(b instanceof _)b=b._wrapped;var className=toString.call(a);if(className!==toString.call(b))return false;switch(className){case'[object RegExp]':case'[object String]':
return''+a===''+b;case'[object Number]': if(+a!==+a)return+b!==+b; return+a===0?1 / +a === 1 /b:+a===+b;case'[object Date]':case'[object Boolean]':

return+a===+b;}
var areArrays=className==='[object Array]';if(!areArrays){if(typeof a!='object'||typeof b!='object')return false;
var aCtor=a.constructor,bCtor=b.constructor;if(aCtor!==bCtor&&!(_.isFunction(aCtor)&&aCtor instanceof aCtor&&_.isFunction(bCtor)&&bCtor instanceof bCtor)&&('constructor'in a&&'constructor'in b)){return false;}}

aStack=aStack||[];bStack=bStack||[];var length=aStack.length;while(length--){
if(aStack[length]===a)return bStack[length]===b;}
aStack.push(a);bStack.push(b);if(areArrays){length=a.length;if(length!==b.length)return false;while(length--){if(!eq(a[length],b[length],aStack,bStack))return false;}}else{var keys=_.keys(a),key;length=keys.length;if(_.keys(b).length!==length)return false;while(length--){ key=keys[length];if(!(_.has(b,key)&&eq(a[key],b[key],aStack,bStack)))return false;}}
aStack.pop();bStack.pop();return true;};_.isEqual=function(a,b){return eq(a,b);};_.isEmpty=function(obj){if(obj==null)return true;if(isArrayLike(obj)&&(_.isArray(obj)||_.isString(obj)||_.isArguments(obj)))return obj.length===0;return _.keys(obj).length===0;};_.isElement=function(obj){return!!(obj&&obj.nodeType===1);}; _.isArray=nativeIsArray||function(obj){return toString.call(obj)==='[object Array]';};_.isObject=function(obj){var type=typeof obj;return type==='function'||type==='object'&&!!obj;};_.each(['Arguments','Function','String','Number','Date','RegExp','Error'],function(name){_['is'+name]=function(obj){return toString.call(obj)==='[object '+name+']';};});
if(!_.isArguments(arguments)){_.isArguments=function(obj){return _.has(obj,'callee');};} 
if(typeof/./!='function'&&typeof Int8Array!='object'){_.isFunction=function(obj){return typeof obj=='function'||false;};}
_.isFinite=function(obj){return isFinite(obj)&&!isNaN(parseFloat(obj));};_.isNaN=function(obj){return _.isNumber(obj)&&obj!==+obj;};_.isBoolean=function(obj){return obj===true||obj===false||toString.call(obj)==='[object Boolean]';};_.isNull=function(obj){return obj===null;};_.isUndefined=function(obj){return obj===void 0;};  
_.has=function(obj,key){return obj!=null&&hasOwnProperty.call(obj,key);};

_.noConflict=function(){root._=previousUnderscore;return this;};_.identity=function(value){return value;};_.constant=function(value){return function(){return value;};};_.noop=function(){};_.property=property;_.propertyOf=function(obj){return obj==null?function(){}:function(key){return obj[key];};};
_.matcher=_.matches=function(attrs){attrs=_.extendOwn({},attrs);return function(obj){return _.isMatch(obj,attrs);};};_.times=function(n,iteratee,context){var accum=Array(Math.max(0,n));iteratee=optimizeCb(iteratee,context,1);for(var i=0;i<n;i++)accum[i]=iteratee(i);return accum;};_.random=function(min,max){if(max==null){max=min;min=0;}
return min+Math.floor(Math.random()*(max-min+1));};_.now=Date.now||function(){return new Date().getTime();};var escapeMap={'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#x27;','`':'&#x60;'};var unescapeMap=_.invert(escapeMap);var createEscaper=function(map){var escaper=function(match){return map[match];}; var source='(?:'+_.keys(map).join('|')+')';var testRegexp=RegExp(source);var replaceRegexp=RegExp(source,'g');return function(string){string=string==null?'':''+string;return testRegexp.test(string)?string.replace(replaceRegexp,escaper):string;};};_.escape=createEscaper(escapeMap);_.unescape=createEscaper(unescapeMap);
_.result=function(object,property,fallback){var value=object==null?void 0:object[property];if(value===void 0){value=fallback;}
return _.isFunction(value)?value.call(object):value;};var idCounter=0;_.uniqueId=function(prefix){var id=++idCounter+'';return prefix?prefix+id:id;};
_.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};

var noMatch=/(.)^/;
var escapes={"'":"'",'\\':'\\','\r':'r','\n':'n','\u2028':'u2028','\u2029':'u2029'};var escaper=/\\|'|\r|\n|\u2028|\u2029/g;var escapeChar=function(match){return'\\'+escapes[match];};_.template=function(text,settings,oldSettings){if(!settings&&oldSettings)settings=oldSettings;settings=_.defaults({},settings,_.templateSettings);var matcher=RegExp([(settings.escape||noMatch).source,(settings.interpolate||noMatch).source,(settings.evaluate||noMatch).source].join('|')+'|$','g');var index=0;var source="__p+='";text.replace(matcher,function(match,escape,interpolate,evaluate,offset){source+=text.slice(index,offset).replace(escaper,escapeChar);index=offset+match.length;if(escape){source+="'+\n((__t=("+escape+"))==null?'':_.escape(__t))+\n'";}else if(interpolate){source+="'+\n((__t=("+interpolate+"))==null?'':__t)+\n'";}else if(evaluate){source+="';\n"+evaluate+"\n__p+='";}
return match;});source+="';\n";if(!settings.variable)source='with(obj||{}){\n'+source+'}\n';source="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+
source+'return __p;\n';try{var render=new Function(settings.variable||'obj','_',source);}catch(e){e.source=source;throw e;}
var template=function(data){return render.call(this,data,_);};var argument=settings.variable||'obj';template.source='function('+argument+'){\n'+source+'}';return template;};_.chain=function(obj){var instance=_(obj);instance._chain=true;return instance;};


var result=function(instance,obj){return instance._chain?_(obj).chain():obj;};_.mixin=function(obj){_.each(_.functions(obj),function(name){var func=_[name]=obj[name];_.prototype[name]=function(){var args=[this._wrapped];push.apply(args,arguments);return result(this,func.apply(_,args));};});};_.mixin(_);_.each(['pop','push','reverse','shift','sort','splice','unshift'],function(name){var method=ArrayProto[name];_.prototype[name]=function(){var obj=this._wrapped;method.apply(obj,arguments);if((name==='shift'||name==='splice')&&obj.length===0)delete obj[0];return result(this,obj);};});_.each(['concat','join','slice'],function(name){var method=ArrayProto[name];_.prototype[name]=function(){return result(this,method.apply(this._wrapped,arguments));};});_.prototype.value=function(){return this._wrapped;};
_.prototype.valueOf=_.prototype.toJSON=_.prototype.value;_.prototype.toString=function(){return''+this._wrapped;};





if(typeof define==='function'&&define.amd){define('underscore',[],function(){return _;});}}.call(this));(function(root,factory){if(typeof define==='function'&&define.amd){define(factory);}else if(typeof exports==='object'){module.exports=factory();}else{root.MicroPlugin=factory();}}(this,function(){var MicroPlugin={};MicroPlugin.mixin=function(Interface){Interface.plugins={};Interface.prototype.initializePlugins=function(plugins){var i,n,key;var self=this;var queue=[];self.plugins={names:[],settings:{},requested:{},loaded:{}};if(utils.isArray(plugins)){for(i=0,n=plugins.length;i<n;i++){if(typeof plugins[i]==='string'){queue.push(plugins[i]);}else{self.plugins.settings[plugins[i].name]=plugins[i].options;queue.push(plugins[i].name);}}}else if(plugins){for(key in plugins){if(plugins.hasOwnProperty(key)){self.plugins.settings[key]=plugins[key];queue.push(key);}}}
while(queue.length){self.require(queue.shift());}};Interface.prototype.loadPlugin=function(name){var self=this;var plugins=self.plugins;var plugin=Interface.plugins[name];if(!Interface.plugins.hasOwnProperty(name)){throw new Error('Unable to find "'+name+'" plugin');}
plugins.requested[name]=true;plugins.loaded[name]=plugin.fn.apply(self,[self.plugins.settings[name]||{}]);plugins.names.push(name);};Interface.prototype.require=function(name){var self=this;var plugins=self.plugins;if(!self.plugins.loaded.hasOwnProperty(name)){if(plugins.requested[name]){throw new Error('Plugin has circular dependency ("'+name+'")');}
self.loadPlugin(name);}
return plugins.loaded[name];};Interface.define=function(name,fn){Interface.plugins[name]={'name':name,'fn':fn};};};var utils={isArray:Array.isArray||function(vArg){return Object.prototype.toString.call(vArg)==='[object Array]';}};return MicroPlugin;}));(function(root,factory){if(typeof define==='function'&&define.amd){define(factory);}else if(typeof exports==='object'){module.exports=factory();}else{root.Sifter=factory();}}(this,function(){var Sifter=function(items,settings){this.items=items;this.settings=settings||{diacritics:true};};Sifter.prototype.tokenize=function(query){query=trim(String(query||'').toLowerCase());if(!query||!query.length)return[];var i,n,regex,letter;var tokens=[];var words=query.split(/ +/);for(i=0,n=words.length;i<n;i++){regex=escape_regex(words[i]);if(this.settings.diacritics){for(letter in DIACRITICS){if(DIACRITICS.hasOwnProperty(letter)){regex=regex.replace(new RegExp(letter,'g'),DIACRITICS[letter]);}}}
tokens.push({string:words[i],regex:new RegExp(regex,'i')});}
return tokens;};Sifter.prototype.iterator=function(object,callback){var iterator;if(is_array(object)){iterator=Array.prototype.forEach||function(callback){for(var i=0,n=this.length;i<n;i++){callback(this[i],i,this);}};}else{iterator=function(callback){for(var key in this){if(this.hasOwnProperty(key)){callback(this[key],key,this);}}};}
iterator.apply(object,[callback]);};Sifter.prototype.getScoreFunction=function(search,options){var self,fields,tokens,token_count;self=this;search=self.prepareSearch(search,options);tokens=search.tokens;fields=search.options.fields;token_count=tokens.length;var scoreValue=function(value,token){var score,pos;if(!value)return 0;value=String(value||'');pos=value.search(token.regex);if(pos===-1)return 0;score=token.string.length/value.length;if(pos===0)score+=0.5;return score;};var scoreObject=(function(){var field_count=fields.length;if(!field_count){return function(){return 0;};}
if(field_count===1){return function(token,data){return scoreValue(data[fields[0]],token);};}
return function(token,data){for(var i=0,sum=0;i<field_count;i++){sum+=scoreValue(data[fields[i]],token);}
return sum/field_count;};})();if(!token_count){return function(){return 0;};}
if(token_count===1){return function(data){return scoreObject(tokens[0],data);};}
if(search.options.conjunction==='and'){return function(data){var score;for(var i=0,sum=0;i<token_count;i++){score=scoreObject(tokens[i],data);if(score<=0)return 0;sum+=score;}
return sum/token_count;};}else{return function(data){for(var i=0,sum=0;i<token_count;i++){sum+=scoreObject(tokens[i],data);}
return sum/token_count;};}};Sifter.prototype.getSortFunction=function(search,options){var i,n,self,field,fields,fields_count,multiplier,multipliers,get_field,implicit_score,sort;self=this;search=self.prepareSearch(search,options);sort=(!search.query&&options.sort_empty)||options.sort;get_field=function(name,result){if(name==='$score')return result.score;return self.items[result.id][name];}; fields=[];if(sort){for(i=0,n=sort.length;i<n;i++){if(search.query||sort[i].field!=='$score'){fields.push(sort[i]);}}}
 
if(search.query){implicit_score=true;for(i=0,n=fields.length;i<n;i++){if(fields[i].field==='$score'){implicit_score=false;break;}}
if(implicit_score){fields.unshift({field:'$score',direction:'desc'});}}else{for(i=0,n=fields.length;i<n;i++){if(fields[i].field==='$score'){fields.splice(i,1);break;}}}
multipliers=[];for(i=0,n=fields.length;i<n;i++){multipliers.push(fields[i].direction==='desc'?-1:1);} 
fields_count=fields.length;if(!fields_count){return null;}else if(fields_count===1){field=fields[0].field;multiplier=multipliers[0];return function(a,b){return multiplier*cmp(get_field(field,a),get_field(field,b));};}else{return function(a,b){var i,result,a_value,b_value,field;for(i=0;i<fields_count;i++){field=fields[i].field;result=multipliers[i]*cmp(get_field(field,a),get_field(field,b));if(result)return result;}
return 0;};}}; Sifter.prototype.prepareSearch=function(query,options){if(typeof query==='object')return query;options=extend({},options);var option_fields=options.fields;var option_sort=options.sort;var option_sort_empty=options.sort_empty;if(option_fields&&!is_array(option_fields))options.fields=[option_fields];if(option_sort&&!is_array(option_sort))options.sort=[option_sort];if(option_sort_empty&&!is_array(option_sort_empty))options.sort_empty=[option_sort_empty];return{options:options,query:String(query||'').toLowerCase(),tokens:this.tokenize(query),total:0,items:[]};};Sifter.prototype.search=function(query,options){var self=this,value,score,search,calculateScore;var fn_sort;var fn_score;search=this.prepareSearch(query,options);options=search.options;query=search.query; fn_score=options.score||self.getScoreFunction(search); if(query.length){self.iterator(self.items,function(item,id){score=fn_score(item);if(options.filter===false||score>0){search.items.push({'score':score,'id':id});}});}else{self.iterator(self.items,function(item,id){search.items.push({'score':1,'id':id});});}
fn_sort=self.getSortFunction(search,options);if(fn_sort)search.items.sort(fn_sort); search.total=search.items.length;if(typeof options.limit==='number'){search.items=search.items.slice(0,options.limit);}
return search;};
var cmp=function(a,b){if(typeof a==='number'&&typeof b==='number'){return a>b?1:(a<b?-1:0);}
a=asciifold(String(a||''));b=asciifold(String(b||''));if(a>b)return 1;if(b>a)return-1;return 0;};var extend=function(a,b){var i,n,k,object;for(i=1,n=arguments.length;i<n;i++){object=arguments[i];if(!object)continue;for(k in object){if(object.hasOwnProperty(k)){a[k]=object[k];}}}
return a;};var trim=function(str){return(str+'').replace(/^\s+|\s+$|/g,'');};var escape_regex=function(str){return(str+'').replace(/([.?*+^$[\]\\(){}|-])/g,'\\$1');};var is_array=Array.isArray||($&&$.isArray)||function(object){return Object.prototype.toString.call(object)==='[object Array]';};var DIACRITICS={'a':'[aÀÁÂÃÄÅàáâãäåĀāąĄ]','c':'[cÇçćĆčČ]','d':'[dđĐďĎ]','e':'[eÈÉÊËèéêëěĚĒēęĘ]','i':'[iÌÍÎÏìíîïĪī]','l':'[lłŁ]','n':'[nÑñňŇńŃ]','o':'[oÒÓÔÕÕÖØòóôõöøŌō]','r':'[rřŘ]','s':'[sŠšśŚ]','t':'[tťŤ]','u':'[uÙÚÛÜùúûüůŮŪū]','y':'[yŸÿýÝ]','z':'[zŽžżŻźŹ]'};var asciifold=(function(){var i,n,k,chunk;var foreignletters='';var lookup={};for(k in DIACRITICS){if(DIACRITICS.hasOwnProperty(k)){chunk=DIACRITICS[k].substring(2,DIACRITICS[k].length-1);foreignletters+=chunk;for(i=0,n=chunk.length;i<n;i++){lookup[chunk.charAt(i)]=k;}}}
var regexp=new RegExp('['+foreignletters+']','g');return function(str){return str.replace(regexp,function(foreignletter){return lookup[foreignletter];}).toLowerCase();};})();
return Sifter;}));(function(root,factory){if(typeof define==='function'&&define.amd){define(['jquery','sifter','microplugin'],factory);}else if(typeof exports==='object'){module.exports=factory(require('jquery'),require('sifter'),require('microplugin'));}else{root.Selectize=factory(root.jQuery,root.Sifter,root.MicroPlugin);}}(this,function($,Sifter,MicroPlugin){'use strict';var highlight=function($element,pattern){if(typeof pattern==='string'&&!pattern.length)return;var regex=(typeof pattern==='string')?new RegExp(pattern,'i'):pattern;var highlight=function(node){var skip=0;if(node.nodeType===3){var pos=node.data.search(regex);if(pos>=0&&node.data.length>0){var match=node.data.match(regex);var spannode=document.createElement('span');spannode.className='highlight';var middlebit=node.splitText(pos);var endbit=middlebit.splitText(match[0].length);var middleclone=middlebit.cloneNode(true);spannode.appendChild(middleclone);middlebit.parentNode.replaceChild(spannode,middlebit);skip=1;}}else if(node.nodeType===1&&node.childNodes&&!/(script|style)/i.test(node.tagName)){for(var i=0;i<node.childNodes.length;++i){i+=highlight(node.childNodes[i]);}}
return skip;};return $element.each(function(){highlight(this);});};var MicroEvent=function(){};MicroEvent.prototype={on:function(event,fct){this._events=this._events||{};this._events[event]=this._events[event]||[];this._events[event].push(fct);},off:function(event,fct){var n=arguments.length;if(n===0)return delete this._events;if(n===1)return delete this._events[event];this._events=this._events||{};if(event in this._events===false)return;this._events[event].splice(this._events[event].indexOf(fct),1);},trigger:function(event ){this._events=this._events||{};if(event in this._events===false)return;for(var i=0;i<this._events[event].length;i++){this._events[event][i].apply(this,Array.prototype.slice.call(arguments,1));}}};MicroEvent.mixin=function(destObject){var props=['on','off','trigger'];for(var i=0;i<props.length;i++){destObject.prototype[props[i]]=MicroEvent.prototype[props[i]];}};var IS_MAC=/Mac/.test(navigator.userAgent);var KEY_A=65;var KEY_COMMA=188;var KEY_RETURN=13;var KEY_ESC=27;var KEY_LEFT=37;var KEY_UP=38;var KEY_P=80;var KEY_RIGHT=39;var KEY_DOWN=40;var KEY_N=78;var KEY_BACKSPACE=8;var KEY_DELETE=46;var KEY_SHIFT=16;var KEY_CMD=IS_MAC?91:17;var KEY_CTRL=IS_MAC?18:17;var KEY_TAB=9;var TAG_SELECT=1;var TAG_INPUT=2; var SUPPORTS_VALIDITY_API=!/android/i.test(window.navigator.userAgent)&&!!document.createElement('form').validity;var isset=function(object){return typeof object!=='undefined';};var hash_key=function(value){if(typeof value==='undefined'||value===null)return null;if(typeof value==='boolean')return value?'1':'0';return value+'';};var escape_html=function(str){return(str+'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');};var escape_replace=function(str){return(str+'').replace(/\$/g,'$$$$');};var hook={};hook.before=function(self,method,fn){var original=self[method];self[method]=function(){fn.apply(self,arguments);return original.apply(self,arguments);};};hook.after=function(self,method,fn){var original=self[method];self[method]=function(){var result=original.apply(self,arguments);fn.apply(self,arguments);return result;};};var once=function(fn){var called=false;return function(){if(called)return;called=true;fn.apply(this,arguments);};};var debounce=function(fn,delay){var timeout;return function(){var self=this;var args=arguments;window.clearTimeout(timeout);timeout=window.setTimeout(function(){fn.apply(self,args);},delay);};};var debounce_events=function(self,types,fn){var type;var trigger=self.trigger;var event_args={}; self.trigger=function(){var type=arguments[0];if(types.indexOf(type)!==-1){event_args[type]=arguments;}else{return trigger.apply(self,arguments);}}; fn.apply(self,[]);self.trigger=trigger; for(type in event_args){if(event_args.hasOwnProperty(type)){trigger.apply(self,event_args[type]);}}};var watchChildEvent=function($parent,event,selector,fn){$parent.on(event,selector,function(e){var child=e.target;while(child&&child.parentNode!==$parent[0]){child=child.parentNode;}
e.currentTarget=child;return fn.apply(this,[e]);});};var getSelection=function(input){var result={};if('selectionStart'in input){result.start=input.selectionStart;result.length=input.selectionEnd-result.start;}else if(document.selection){input.focus();var sel=document.selection.createRange();var selLen=document.selection.createRange().text.length;sel.moveStart('character',-input.value.length);result.start=sel.text.length-selLen;result.length=selLen;}
return result;};var transferStyles=function($from,$to,properties){var i,n,styles={};if(properties){for(i=0,n=properties.length;i<n;i++){styles[properties[i]]=$from.css(properties[i]);}}else{styles=$from.css();}
$to.css(styles);};var measureString=function(str,$parent){if(!str){return 0;}
var $test=$('<test>').css({position:'absolute',top:-99999,left:-99999,width:'auto',padding:0,whiteSpace:'pre'}).text(str).appendTo('body');transferStyles($parent,$test,['letterSpacing','fontSize','fontFamily','fontWeight','textTransform']);var width=$test.width();$test.remove();return width;};var autoGrow=function($input){var currentWidth=null;var update=function(e,options){var value,keyCode,printable,placeholder,width;var shift,character,selection;e=e||window.event||{};options=options||{};if(e.metaKey||e.altKey)return;if(!options.force&&$input.data('grow')===false)return;value=$input.val();if(e.type&&e.type.toLowerCase()==='keydown'){keyCode=e.keyCode;printable=((keyCode>=97&&keyCode<=122)||(keyCode>=65&&keyCode<=90)||(keyCode>=48&&keyCode<=57)|| keyCode===32
);if(keyCode===KEY_DELETE||keyCode===KEY_BACKSPACE){selection=getSelection($input[0]);if(selection.length){value=value.substring(0,selection.start)+value.substring(selection.start+selection.length);}else if(keyCode===KEY_BACKSPACE&&selection.start){value=value.substring(0,selection.start-1)+value.substring(selection.start+1);}else if(keyCode===KEY_DELETE&&typeof selection.start!=='undefined'){value=value.substring(0,selection.start)+value.substring(selection.start+1);}}else if(printable){shift=e.shiftKey;character=String.fromCharCode(e.keyCode);if(shift)character=character.toUpperCase();else character=character.toLowerCase();value+=character;}}
placeholder=$input.attr('placeholder');if(!value&&placeholder){value=placeholder;}
width=measureString(value,$input)+4;if(width!==currentWidth){currentWidth=width;$input.width(width);$input.triggerHandler('resize');}};$input.on('keydown keyup update blur',update);update();};var Selectize=function($input,settings){var key,i,n,dir,input,self=this;input=$input[0];input.selectize=self; var computedStyle=window.getComputedStyle&&window.getComputedStyle(input,null);dir=computedStyle?computedStyle.getPropertyValue('direction'):input.currentStyle&&input.currentStyle.direction;dir=dir||$input.parents('[dir]:first').attr('dir')||''; $.extend(self,{order:0,settings:settings,$input:$input,tabIndex:$input.attr('tabindex')||'',tagType:input.tagName.toLowerCase()==='select'?TAG_SELECT:TAG_INPUT,rtl:/rtl/i.test(dir),eventNS:'.selectize'+(++Selectize.count),highlightedValue:null,isOpen:false,isDisabled:false,isRequired:$input.is('[required]'),isInvalid:false,isLocked:false,isFocused:false,isInputHidden:false,isSetup:false,isShiftDown:false,isCmdDown:false,isCtrlDown:false,ignoreFocus:false,ignoreBlur:false,ignoreHover:false,hasOptions:false,currentResults:null,lastValue:'',caretPos:0,loading:0,loadedSearches:{},$activeOption:null,$activeItems:[],optgroups:{},options:{},userOptions:{},items:[],renderCache:{},onSearchChange:settings.loadThrottle===null?self.onSearchChange:debounce(self.onSearchChange,settings.loadThrottle)}); self.sifter=new Sifter(this.options,{diacritics:settings.diacritics}); if(self.settings.options){for(i=0,n=self.settings.options.length;i<n;i++){self.registerOption(self.settings.options[i]);}
delete self.settings.options;} 
if(self.settings.optgroups){for(i=0,n=self.settings.optgroups.length;i<n;i++){self.registerOptionGroup(self.settings.optgroups[i]);}
delete self.settings.optgroups;} 
self.settings.mode=self.settings.mode||(self.settings.maxItems===1?'single':'multi');if(typeof self.settings.hideSelected!=='boolean'){self.settings.hideSelected=self.settings.mode==='multi';}
self.initializePlugins(self.settings.plugins);self.setupCallbacks();self.setupTemplates();self.setup();};

MicroEvent.mixin(Selectize);MicroPlugin.mixin(Selectize);

$.extend(Selectize.prototype,{setup:function(){var self=this;var settings=self.settings;var eventNS=self.eventNS;var $window=$(window);var $document=$(document);var $input=self.$input;var $wrapper;var $control;var $control_input;var $dropdown;var $dropdown_content;var $dropdown_parent;var inputMode;var timeout_blur;var timeout_focus;var classes;var classes_plugins;inputMode=self.settings.mode;classes=$input.attr('class')||'';$wrapper=$('<div>').addClass(settings.wrapperClass).addClass(classes).addClass(inputMode);$control=$('<div>').addClass(settings.inputClass).addClass('items').appendTo($wrapper);$control_input=$('<input type="text" autocomplete="off" />').appendTo($control).attr('tabindex',$input.is(':disabled')?'-1':self.tabIndex);$dropdown_parent=$(settings.dropdownParent||$wrapper);$dropdown=$('<div>').addClass(settings.dropdownClass).addClass(inputMode).hide().appendTo($dropdown_parent);$dropdown_content=$('<div>').addClass(settings.dropdownContentClass).appendTo($dropdown);if(self.settings.copyClassesToDropdown){$dropdown.addClass(classes);}
$wrapper.css({width:$input[0].style.width});if(self.plugins.names.length){classes_plugins='plugin-'+self.plugins.names.join(' plugin-');$wrapper.addClass(classes_plugins);$dropdown.addClass(classes_plugins);}
if((settings.maxItems===null||settings.maxItems>1)&&self.tagType===TAG_SELECT){$input.attr('multiple','multiple');}
if(self.settings.placeholder){$control_input.attr('placeholder',settings.placeholder);} 
if(!self.settings.splitOn&&self.settings.delimiter){var delimiterEscaped=self.settings.delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g,'\\$&');self.settings.splitOn=new RegExp('\\s*'+delimiterEscaped+'+\\s*');}
if($input.attr('autocorrect')){$control_input.attr('autocorrect',$input.attr('autocorrect'));}
if($input.attr('autocapitalize')){$control_input.attr('autocapitalize',$input.attr('autocapitalize'));}
self.$wrapper=$wrapper;self.$control=$control;self.$control_input=$control_input;self.$dropdown=$dropdown;self.$dropdown_content=$dropdown_content;$dropdown.on('mouseenter','[data-selectable]',function(){return self.onOptionHover.apply(self,arguments);});$dropdown.on('mousedown click','[data-selectable]',function(){return self.onOptionSelect.apply(self,arguments);});watchChildEvent($control,'mousedown','*:not(input)',function(){return self.onItemSelect.apply(self,arguments);});autoGrow($control_input);$control.on({mousedown:function(){return self.onMouseDown.apply(self,arguments);},click:function(){return self.onClick.apply(self,arguments);}});$control_input.on({mousedown:function(e){e.stopPropagation();},keydown:function(){return self.onKeyDown.apply(self,arguments);},keyup:function(){return self.onKeyUp.apply(self,arguments);},keypress:function(){return self.onKeyPress.apply(self,arguments);},resize:function(){self.positionDropdown.apply(self,[]);},blur:function(){return self.onBlur.apply(self,arguments);},focus:function(){self.ignoreBlur=false;return self.onFocus.apply(self,arguments);},paste:function(){return self.onPaste.apply(self,arguments);}});$document.on('keydown'+eventNS,function(e){self.isCmdDown=e[IS_MAC?'metaKey':'ctrlKey'];self.isCtrlDown=e[IS_MAC?'altKey':'ctrlKey'];self.isShiftDown=e.shiftKey;});$document.on('keyup'+eventNS,function(e){if(e.keyCode===KEY_CTRL)self.isCtrlDown=false;if(e.keyCode===KEY_SHIFT)self.isShiftDown=false;if(e.keyCode===KEY_CMD)self.isCmdDown=false;});$document.on('mousedown'+eventNS,function(e){if(self.isFocused){ if(e.target===self.$dropdown[0]||e.target.parentNode===self.$dropdown[0]){return false;} 
if(!self.$control.has(e.target).length&&e.target!==self.$control[0]){self.blur(e.target);}}});$window.on(['scroll'+eventNS,'resize'+eventNS].join(' '),function(){if(self.isOpen){self.positionDropdown.apply(self,arguments);}});$window.on('mousemove'+eventNS,function(){self.ignoreHover=false;});
this.revertSettings={$children:$input.children().detach(),tabindex:$input.attr('tabindex')};$input.attr('tabindex',-1).hide().after(self.$wrapper);if($.isArray(settings.items)){self.setValue(settings.items);delete settings.items;} 
if(SUPPORTS_VALIDITY_API){$input.on('invalid'+eventNS,function(e){e.preventDefault();self.isInvalid=true;self.refreshState();});}
self.updateOriginalInput();self.refreshItems();self.refreshState();self.updatePlaceholder();self.isSetup=true;if($input.is(':disabled')){self.disable();}
self.on('change',this.onChange);$input.data('selectize',self);$input.addClass('selectized');self.trigger('initialize'); if(settings.preload===true){self.onSearchChange('');}},setupTemplates:function(){var self=this;var field_label=self.settings.labelField;var field_optgroup=self.settings.optgroupLabelField;var templates={'optgroup':function(data){return'<div class="optgroup">'+data.html+'</div>';},'optgroup_header':function(data,escape){return'<div class="optgroup-header">'+escape(data[field_optgroup])+'</div>';},'option':function(data,escape){return'<div class="option">'+escape(data[field_label])+'</div>';},'item':function(data,escape){return'<div class="item">'+escape(data[field_label])+'</div>';},'option_create':function(data,escape){return'<div class="create">Add <strong>'+escape(data.input)+'</strong>&hellip;</div>';}};self.settings.render=$.extend({},templates,self.settings.render);},setupCallbacks:function(){var key,fn,callbacks={'initialize':'onInitialize','change':'onChange','item_add':'onItemAdd','item_remove':'onItemRemove','clear':'onClear','option_add':'onOptionAdd','option_remove':'onOptionRemove','option_clear':'onOptionClear','optgroup_add':'onOptionGroupAdd','optgroup_remove':'onOptionGroupRemove','optgroup_clear':'onOptionGroupClear','dropdown_open':'onDropdownOpen','dropdown_close':'onDropdownClose','type':'onType','load':'onLoad','focus':'onFocus','blur':'onBlur'};for(key in callbacks){if(callbacks.hasOwnProperty(key)){fn=this.settings[callbacks[key]];if(fn)this.on(key,fn);}}},onClick:function(e){var self=this;
if(!self.isFocused){self.focus();e.preventDefault();}},onMouseDown:function(e){var self=this;var defaultPrevented=e.isDefaultPrevented();var $target=$(e.target);if(self.isFocused){
if(e.target!==self.$control_input[0]){if(self.settings.mode==='single'){ self.isOpen?self.close():self.open();}else if(!defaultPrevented){self.setActiveItem(null);}
return false;}}else{ if(!defaultPrevented){window.setTimeout(function(){self.focus();},0);}}},onChange:function(){this.$input.trigger('change');},onPaste:function(e){var self=this;if(self.isFull()||self.isInputHidden||self.isLocked){e.preventDefault();}else{
 if(self.settings.splitOn){setTimeout(function(){var splitInput=$.trim(self.$control_input.val()||'').split(self.settings.splitOn);for(var i=0,n=splitInput.length;i<n;i++){self.createItem(splitInput[i]);}},0);}}},onKeyPress:function(e){if(this.isLocked)return e&&e.preventDefault();var character=String.fromCharCode(e.keyCode||e.which);if(this.settings.create&&this.settings.mode==='multi'&&character===this.settings.delimiter){this.createItem();e.preventDefault();return false;}},onKeyDown:function(e){var isInput=e.target===this.$control_input[0];var self=this;if(self.isLocked){if(e.keyCode!==KEY_TAB){e.preventDefault();}
return;}
switch(e.keyCode){case KEY_A:if(self.isCmdDown){self.selectAll();return;}
break;case KEY_ESC:if(self.isOpen){e.preventDefault();e.stopPropagation();self.close();}
return;case KEY_N:if(!e.ctrlKey||e.altKey)break;case KEY_DOWN:if(!self.isOpen&&self.hasOptions){self.open();}else if(self.$activeOption){self.ignoreHover=true;var $next=self.getAdjacentOption(self.$activeOption,1);if($next.length)self.setActiveOption($next,true,true);}
e.preventDefault();return;case KEY_P:if(!e.ctrlKey||e.altKey)break;case KEY_UP:if(self.$activeOption){self.ignoreHover=true;var $prev=self.getAdjacentOption(self.$activeOption,-1);if($prev.length)self.setActiveOption($prev,true,true);}
e.preventDefault();return;case KEY_RETURN:if(self.isOpen&&self.$activeOption){self.onOptionSelect({currentTarget:self.$activeOption});e.preventDefault();}
return;case KEY_LEFT:self.advanceSelection(-1,e);return;case KEY_RIGHT:self.advanceSelection(1,e);return;case KEY_TAB:if(self.settings.selectOnTab&&self.isOpen&&self.$activeOption){self.onOptionSelect({currentTarget:self.$activeOption});
 if(!self.isFull()){e.preventDefault();}}
if(self.settings.create&&self.createItem()){e.preventDefault();}
return;case KEY_BACKSPACE:case KEY_DELETE:self.deleteSelection(e);return;}
if((self.isFull()||self.isInputHidden)&&!(IS_MAC?e.metaKey:e.ctrlKey)){e.preventDefault();return;}}, onKeyUp:function(e){var self=this;if(self.isLocked)return e&&e.preventDefault();var value=self.$control_input.val()||'';if(self.lastValue!==value){self.lastValue=value;self.onSearchChange(value);self.refreshOptions();self.trigger('type',value);}},onSearchChange:function(value){var self=this;var fn=self.settings.load;if(!fn)return;if(self.loadedSearches.hasOwnProperty(value))return;self.loadedSearches[value]=true;self.load(function(callback){fn.apply(self,[value,callback]);});},onFocus:function(e){var self=this;var wasFocused=self.isFocused;if(self.isDisabled){self.blur();e&&e.preventDefault();return false;}
if(self.ignoreFocus)return;self.isFocused=true;if(self.settings.preload==='focus')self.onSearchChange('');if(!wasFocused)self.trigger('focus');if(!self.$activeItems.length){self.showInput();self.setActiveItem(null);self.refreshOptions(!!self.settings.openOnFocus);}
self.refreshState();},onBlur:function(e,dest){var self=this;if(!self.isFocused)return;self.isFocused=false;if(self.ignoreFocus){return;}else if(!self.ignoreBlur&&document.activeElement===self.$dropdown_content[0]){ self.ignoreBlur=true;self.onFocus(e);return;}
var deactivate=function(){self.close();self.setTextboxValue('');self.setActiveItem(null);self.setActiveOption(null);self.setCaret(self.items.length);self.refreshState();(dest||document.body).focus();self.ignoreFocus=false;self.trigger('blur');};self.ignoreFocus=true;if(self.settings.create&&self.settings.createOnBlur){self.createItem(null,false,deactivate);}else{deactivate();}},onOptionHover:function(e){if(this.ignoreHover)return;this.setActiveOption(e.currentTarget,false);},onOptionSelect:function(e){var value,$target,$option,self=this;if(e.preventDefault){e.preventDefault();e.stopPropagation();}
$target=$(e.currentTarget);if($target.hasClass('create')){self.createItem(null,function(){if(self.settings.closeAfterSelect){self.close();}});}else{value=$target.attr('data-value');if(typeof value!=='undefined'){self.lastQuery=null;self.setTextboxValue('');self.addItem(value);if(self.settings.closeAfterSelect){self.close();}else if(!self.settings.hideSelected&&e.type&&/mouse/.test(e.type)){self.setActiveOption(self.getOption(value));}}}},onItemSelect:function(e){var self=this;if(self.isLocked)return;if(self.settings.mode==='multi'){e.preventDefault();self.setActiveItem(e.currentTarget,e);}},load:function(fn){var self=this;var $wrapper=self.$wrapper.addClass(self.settings.loadingClass);self.loading++;fn.apply(self,[function(results){self.loading=Math.max(self.loading-1,0);if(results&&results.length){self.addOption(results);self.refreshOptions(self.isFocused&&!self.isInputHidden);}
if(!self.loading){$wrapper.removeClass(self.settings.loadingClass);}
self.trigger('load',results);}]);},setTextboxValue:function(value){var $input=this.$control_input;var changed=$input.val()!==value;if(changed){$input.val(value).triggerHandler('update');this.lastValue=value;}},getValue:function(){if(this.tagType===TAG_SELECT&&this.$input.attr('multiple')){return this.items;}else{return this.items.join(this.settings.delimiter);}},setValue:function(value,silent){var events=silent?[]:['change'];debounce_events(this,events,function(){this.clear(silent);this.addItems(value,silent);});},setActiveItem:function($item,e){var self=this;var eventName;var i,idx,begin,end,item,swap;var $last;if(self.settings.mode==='single')return;$item=$($item); if(!$item.length){$(self.$activeItems).removeClass('active');self.$activeItems=[];if(self.isFocused){self.showInput();}
return;} 
eventName=e&&e.type.toLowerCase();if(eventName==='mousedown'&&self.isShiftDown&&self.$activeItems.length){$last=self.$control.children('.active:last');begin=Array.prototype.indexOf.apply(self.$control[0].childNodes,[$last[0]]);end=Array.prototype.indexOf.apply(self.$control[0].childNodes,[$item[0]]);if(begin>end){swap=begin;begin=end;end=swap;}
for(i=begin;i<=end;i++){item=self.$control[0].childNodes[i];if(self.$activeItems.indexOf(item)===-1){$(item).addClass('active');self.$activeItems.push(item);}}
e.preventDefault();}else if((eventName==='mousedown'&&self.isCtrlDown)||(eventName==='keydown'&&this.isShiftDown)){if($item.hasClass('active')){idx=self.$activeItems.indexOf($item[0]);self.$activeItems.splice(idx,1);$item.removeClass('active');}else{self.$activeItems.push($item.addClass('active')[0]);}}else{$(self.$activeItems).removeClass('active');self.$activeItems=[$item.addClass('active')[0]];} 
self.hideInput();if(!this.isFocused){self.focus();}},setActiveOption:function($option,scroll,animate){var height_menu,height_item,y;var scroll_top,scroll_bottom;var self=this;if(self.$activeOption)self.$activeOption.removeClass('active');self.$activeOption=null;$option=$($option);if(!$option.length)return;self.$activeOption=$option.addClass('active');if(scroll||!isset(scroll)){height_menu=self.$dropdown_content.height();height_item=self.$activeOption.outerHeight(true);scroll=self.$dropdown_content.scrollTop()||0;y=self.$activeOption.offset().top-self.$dropdown_content.offset().top+scroll;scroll_top=y;scroll_bottom=y-height_menu+height_item;if(y+height_item>height_menu+scroll){self.$dropdown_content.stop().animate({scrollTop:scroll_bottom},animate?self.settings.scrollDuration:0);}else if(y<scroll){self.$dropdown_content.stop().animate({scrollTop:scroll_top},animate?self.settings.scrollDuration:0);}}},selectAll:function(){var self=this;if(self.settings.mode==='single')return;self.$activeItems=Array.prototype.slice.apply(self.$control.children(':not(input)').addClass('active'));if(self.$activeItems.length){self.hideInput();self.close();}
self.focus();},hideInput:function(){var self=this;self.setTextboxValue('');self.$control_input.css({opacity:0,position:'absolute',left:self.rtl?10000:-10000});self.isInputHidden=true;},showInput:function(){this.$control_input.css({opacity:1,position:'relative',left:0});this.isInputHidden=false;},focus:function(){var self=this;if(self.isDisabled)return;self.ignoreFocus=true;self.$control_input[0].focus();window.setTimeout(function(){self.ignoreFocus=false;self.onFocus();},0);},blur:function(dest){this.$control_input[0].blur();this.onBlur(null,dest);},getScoreFunction:function(query){return this.sifter.getScoreFunction(query,this.getSearchOptions());},getSearchOptions:function(){var settings=this.settings;var sort=settings.sortField;if(typeof sort==='string'){sort=[{field:sort}];}
return{fields:settings.searchField,conjunction:settings.searchConjunction,sort:sort};},search:function(query){var i,value,score,result,calculateScore;var self=this;var settings=self.settings;var options=this.getSearchOptions(); if(settings.score){calculateScore=self.settings.score.apply(this,[query]);if(typeof calculateScore!=='function'){throw new Error('Selectize "score" setting must be a function that returns a function');}} 
if(query!==self.lastQuery){self.lastQuery=query;result=self.sifter.search(query,$.extend(options,{score:calculateScore}));self.currentResults=result;}else{result=$.extend(true,{},self.currentResults);} 
if(settings.hideSelected){for(i=result.items.length-1;i>=0;i--){if(self.items.indexOf(hash_key(result.items[i].id))!==-1){result.items.splice(i,1);}}}
return result;},refreshOptions:function(triggerDropdown){var i,j,k,n,groups,groups_order,option,option_html,optgroup,optgroups,html,html_children,has_create_option;var $active,$active_before,$create;if(typeof triggerDropdown==='undefined'){triggerDropdown=true;}
var self=this;var query=$.trim(self.$control_input.val());var results=self.search(query);var $dropdown_content=self.$dropdown_content;var active_before=self.$activeOption&&hash_key(self.$activeOption.attr('data-value')); n=results.items.length;if(typeof self.settings.maxOptions==='number'){n=Math.min(n,self.settings.maxOptions);} 
groups={};groups_order=[];for(i=0;i<n;i++){option=self.options[results.items[i].id];option_html=self.render('option',option);optgroup=option[self.settings.optgroupField]||'';optgroups=$.isArray(optgroup)?optgroup:[optgroup];for(j=0,k=optgroups&&optgroups.length;j<k;j++){optgroup=optgroups[j];if(!self.optgroups.hasOwnProperty(optgroup)){optgroup='';}
if(!groups.hasOwnProperty(optgroup)){groups[optgroup]=[];groups_order.push(optgroup);}
groups[optgroup].push(option_html);}} 
if(this.settings.lockOptgroupOrder){groups_order.sort(function(a,b){var a_order=self.optgroups[a].$order||0;var b_order=self.optgroups[b].$order||0;return a_order-b_order;});} 
html=[];for(i=0,n=groups_order.length;i<n;i++){optgroup=groups_order[i];if(self.optgroups.hasOwnProperty(optgroup)&&groups[optgroup].length){ html_children=self.render('optgroup_header',self.optgroups[optgroup])||'';html_children+=groups[optgroup].join('');html.push(self.render('optgroup',$.extend({},self.optgroups[optgroup],{html:html_children})));}else{html.push(groups[optgroup].join(''));}}
$dropdown_content.html(html.join('')); if(self.settings.highlight&&results.query.length&&results.tokens.length){for(i=0,n=results.tokens.length;i<n;i++){highlight($dropdown_content,results.tokens[i].regex);}} 
if(!self.settings.hideSelected){for(i=0,n=self.items.length;i<n;i++){self.getOption(self.items[i]).addClass('selected');}} 
has_create_option=self.canCreate(query);if(has_create_option){$dropdown_content.prepend(self.render('option_create',{input:query}));$create=$($dropdown_content[0].childNodes[0]);} 
self.hasOptions=results.items.length>0||has_create_option;if(self.hasOptions){if(results.items.length>0){$active_before=active_before&&self.getOption(active_before);if($active_before&&$active_before.length){$active=$active_before;}else if(self.settings.mode==='single'&&self.items.length){$active=self.getOption(self.items[0]);}
if(!$active||!$active.length){if($create&&!self.settings.addPrecedence){$active=self.getAdjacentOption($create,1);}else{$active=$dropdown_content.find('[data-selectable]:first');}}}else{$active=$create;}
self.setActiveOption($active);if(triggerDropdown&&!self.isOpen){self.open();}}else{self.setActiveOption(null);if(triggerDropdown&&self.isOpen){self.close();}}},addOption:function(data){var i,n,value,self=this;if($.isArray(data)){for(i=0,n=data.length;i<n;i++){self.addOption(data[i]);}
return;}
if(value=self.registerOption(data)){self.userOptions[value]=true;self.lastQuery=null;self.trigger('option_add',value,data);}},registerOption:function(data){var key=hash_key(data[this.settings.valueField]);if(!key||this.options.hasOwnProperty(key))return false;data.$order=data.$order||++this.order;this.options[key]=data;return key;},registerOptionGroup:function(data){var key=hash_key(data[this.settings.optgroupValueField]);if(!key)return false;data.$order=data.$order||++this.order;this.optgroups[key]=data;return key;},addOptionGroup:function(id,data){data[this.settings.optgroupValueField]=id;if(id=this.registerOptionGroup(data)){this.trigger('optgroup_add',id,data);}},removeOptionGroup:function(id){if(this.optgroups.hasOwnProperty(id)){delete this.optgroups[id];this.renderCache={};this.trigger('optgroup_remove',id);}},clearOptionGroups:function(){this.optgroups={};this.renderCache={};this.trigger('optgroup_clear');},updateOption:function(value,data){var self=this;var $item,$item_new;var value_new,index_item,cache_items,cache_options,order_old;value=hash_key(value);value_new=hash_key(data[self.settings.valueField]); if(value===null)return;if(!self.options.hasOwnProperty(value))return;if(typeof value_new!=='string')throw new Error('Value must be set in option data');order_old=self.options[value].$order; if(value_new!==value){delete self.options[value];index_item=self.items.indexOf(value);if(index_item!==-1){self.items.splice(index_item,1,value_new);}}
data.$order=data.$order||order_old;self.options[value_new]=data; cache_items=self.renderCache['item'];cache_options=self.renderCache['option'];if(cache_items){delete cache_items[value];delete cache_items[value_new];}
if(cache_options){delete cache_options[value];delete cache_options[value_new];} 
if(self.items.indexOf(value_new)!==-1){$item=self.getItem(value);$item_new=$(self.render('item',data));if($item.hasClass('active'))$item_new.addClass('active');$item.replaceWith($item_new);} 
self.lastQuery=null; if(self.isOpen){self.refreshOptions(false);}},removeOption:function(value,silent){var self=this;value=hash_key(value);var cache_items=self.renderCache['item'];var cache_options=self.renderCache['option'];if(cache_items)delete cache_items[value];if(cache_options)delete cache_options[value];delete self.userOptions[value];delete self.options[value];self.lastQuery=null;self.trigger('option_remove',value);self.removeItem(value,silent);},clearOptions:function(){var self=this;self.loadedSearches={};self.userOptions={};self.renderCache={};self.options=self.sifter.items={};self.lastQuery=null;self.trigger('option_clear');self.clear();},getOption:function(value){return this.getElementWithValue(value,this.$dropdown_content.find('[data-selectable]'));},getAdjacentOption:function($option,direction){var $options=this.$dropdown.find('[data-selectable]');var index=$options.index($option)+direction;return index>=0&&index<$options.length?$options.eq(index):$();},getElementWithValue:function(value,$els){value=hash_key(value);if(typeof value!=='undefined'&&value!==null){for(var i=0,n=$els.length;i<n;i++){if($els[i].getAttribute('data-value')===value){return $($els[i]);}}}
return $();}, getItem:function(value){return this.getElementWithValue(value,this.$control.children());},addItems:function(values,silent){var items=$.isArray(values)?values:[values];for(var i=0,n=items.length;i<n;i++){this.isPending=(i<n-1);this.addItem(items[i],silent);}},addItem:function(value,silent){var events=silent?[]:['change'];debounce_events(this,events,function(){var $item,$option,$options;var self=this;var inputMode=self.settings.mode;var i,active,value_next,wasFull;value=hash_key(value);if(self.items.indexOf(value)!==-1){if(inputMode==='single')self.close();return;}
if(!self.options.hasOwnProperty(value))return;if(inputMode==='single')self.clear(silent);if(inputMode==='multi'&&self.isFull())return;$item=$(self.render('item',self.options[value]));wasFull=self.isFull();self.items.splice(self.caretPos,0,value);self.insertAtCaret($item);if(!self.isPending||(!wasFull&&self.isFull())){self.refreshState();}
if(self.isSetup){$options=self.$dropdown_content.find('[data-selectable]');if(!self.isPending){$option=self.getOption(value);value_next=self.getAdjacentOption($option,1).attr('data-value');self.refreshOptions(self.isFocused&&inputMode!=='single');if(value_next){self.setActiveOption(self.getOption(value_next));}} 
if(!$options.length||self.isFull()){self.close();}else{self.positionDropdown();}
self.updatePlaceholder();self.trigger('item_add',value,$item);self.updateOriginalInput({silent:silent});}});},removeItem:function(value,silent){var self=this;var $item,i,idx;$item=(typeof value==='object')?value:self.getItem(value);value=hash_key($item.attr('data-value'));i=self.items.indexOf(value);if(i!==-1){$item.remove();if($item.hasClass('active')){idx=self.$activeItems.indexOf($item[0]);self.$activeItems.splice(idx,1);}
self.items.splice(i,1);self.lastQuery=null;if(!self.settings.persist&&self.userOptions.hasOwnProperty(value)){self.removeOption(value,silent);}
if(i<self.caretPos){self.setCaret(self.caretPos-1);}
self.refreshState();self.updatePlaceholder();self.updateOriginalInput({silent:silent});self.positionDropdown();self.trigger('item_remove',value,$item);}},createItem:function(input,triggerDropdown){var self=this;var caret=self.caretPos;input=input||$.trim(self.$control_input.val()||'');var callback=arguments[arguments.length-1];if(typeof callback!=='function')callback=function(){};if(typeof triggerDropdown!=='boolean'){triggerDropdown=true;}
if(!self.canCreate(input)){callback();return false;}
self.lock();var setup=(typeof self.settings.create==='function')?this.settings.create:function(input){var data={};data[self.settings.labelField]=input;data[self.settings.valueField]=input;return data;};var create=once(function(data){self.unlock();if(!data||typeof data!=='object')return callback();var value=hash_key(data[self.settings.valueField]);if(typeof value!=='string')return callback();self.setTextboxValue('');self.addOption(data);self.setCaret(caret);self.addItem(value);self.refreshOptions(triggerDropdown&&self.settings.mode!=='single');callback(data);});var output=setup.apply(this,[input,create]);if(typeof output!=='undefined'){create(output);}
return true;},refreshItems:function(){this.lastQuery=null;if(this.isSetup){this.addItem(this.items);}
this.refreshState();this.updateOriginalInput();},refreshState:function(){var invalid,self=this;if(self.isRequired){if(self.items.length)self.isInvalid=false;self.$control_input.prop('required',invalid);}
self.refreshClasses();},refreshClasses:function(){var self=this;var isFull=self.isFull();var isLocked=self.isLocked;self.$wrapper.toggleClass('rtl',self.rtl);self.$control.toggleClass('focus',self.isFocused).toggleClass('disabled',self.isDisabled).toggleClass('required',self.isRequired).toggleClass('invalid',self.isInvalid).toggleClass('locked',isLocked).toggleClass('full',isFull).toggleClass('not-full',!isFull).toggleClass('input-active',self.isFocused&&!self.isInputHidden).toggleClass('dropdown-active',self.isOpen).toggleClass('has-options',!$.isEmptyObject(self.options)).toggleClass('has-items',self.items.length>0);self.$control_input.data('grow',!isFull&&!isLocked);},isFull:function(){return this.settings.maxItems!==null&&this.items.length>=this.settings.maxItems;},updateOriginalInput:function(opts){var i,n,options,label,self=this;opts=opts||{};if(self.tagType===TAG_SELECT){options=[];for(i=0,n=self.items.length;i<n;i++){label=self.options[self.items[i]][self.settings.labelField]||'';options.push('<option value="'+escape_html(self.items[i])+'" selected="selected">'+escape_html(label)+'</option>');}
if(!options.length&&!this.$input.attr('multiple')){options.push('<option value="" selected="selected"></option>');}
self.$input.html(options.join(''));}else{self.$input.val(self.getValue());self.$input.attr('value',self.$input.val());}
if(self.isSetup){if(!opts.silent){self.trigger('change',self.$input.val());}}},updatePlaceholder:function(){if(!this.settings.placeholder)return;var $input=this.$control_input;if(this.items.length){$input.removeAttr('placeholder');}else{$input.attr('placeholder',this.settings.placeholder);}
$input.triggerHandler('update',{force:true});},open:function(){var self=this;if(self.isLocked||self.isOpen||(self.settings.mode==='multi'&&self.isFull()))return;self.focus();self.isOpen=true;self.refreshState();self.$dropdown.css({visibility:'hidden',display:'block'});self.positionDropdown();self.$dropdown.css({visibility:'visible'});self.trigger('dropdown_open',self.$dropdown);},close:function(){var self=this;var trigger=self.isOpen;if(self.settings.mode==='single'&&self.items.length){self.hideInput();}
self.isOpen=false;self.$dropdown.hide();self.setActiveOption(null);self.refreshState();if(trigger)self.trigger('dropdown_close',self.$dropdown);},positionDropdown:function(){var $control=this.$control;var offset=this.settings.dropdownParent==='body'?$control.offset():$control.position();offset.top+=$control.outerHeight(true);this.$dropdown.css({width:$control.outerWidth(),top:offset.top,left:offset.left});},clear:function(silent){var self=this;if(!self.items.length)return;self.$control.children(':not(input)').remove();self.items=[];self.lastQuery=null;self.setCaret(0);self.setActiveItem(null);self.updatePlaceholder();self.updateOriginalInput({silent:silent});self.refreshState();self.showInput();self.trigger('clear');},insertAtCaret:function($el){var caret=Math.min(this.caretPos,this.items.length);if(caret===0){this.$control.prepend($el);}else{$(this.$control[0].childNodes[caret]).before($el);}
this.setCaret(caret+1);},deleteSelection:function(e){var i,n,direction,selection,values,caret,option_select,$option_select,$tail;var self=this;direction=(e&&e.keyCode===KEY_BACKSPACE)?-1:1;selection=getSelection(self.$control_input[0]);if(self.$activeOption&&!self.settings.hideSelected){option_select=self.getAdjacentOption(self.$activeOption,-1).attr('data-value');} 
values=[];if(self.$activeItems.length){$tail=self.$control.children('.active:'+(direction>0?'last':'first'));caret=self.$control.children(':not(input)').index($tail);if(direction>0){caret++;}
for(i=0,n=self.$activeItems.length;i<n;i++){values.push($(self.$activeItems[i]).attr('data-value'));}
if(e){e.preventDefault();e.stopPropagation();}}else if((self.isFocused||self.settings.mode==='single')&&self.items.length){if(direction<0&&selection.start===0&&selection.length===0){values.push(self.items[self.caretPos-1]);}else if(direction>0&&selection.start===self.$control_input.val().length){values.push(self.items[self.caretPos]);}} 
if(!values.length||(typeof self.settings.onDelete==='function'&&self.settings.onDelete.apply(self,[values])===false)){return false;} 
if(typeof caret!=='undefined'){self.setCaret(caret);}
while(values.length){self.removeItem(values.pop());}
self.showInput();self.positionDropdown();self.refreshOptions(true); if(option_select){$option_select=self.getOption(option_select);if($option_select.length){self.setActiveOption($option_select);}}
return true;},advanceSelection:function(direction,e){var tail,selection,idx,valueLength,cursorAtEdge,$tail;var self=this;if(direction===0)return;if(self.rtl)direction*=-1;tail=direction>0?'last':'first';selection=getSelection(self.$control_input[0]);if(self.isFocused&&!self.isInputHidden){valueLength=self.$control_input.val().length;cursorAtEdge=direction<0?selection.start===0&&selection.length===0:selection.start===valueLength;if(cursorAtEdge&&!valueLength){self.advanceCaret(direction,e);}}else{$tail=self.$control.children('.active:'+tail);if($tail.length){idx=self.$control.children(':not(input)').index($tail);self.setActiveItem(null);self.setCaret(direction>0?idx+1:idx);}}},advanceCaret:function(direction,e){var self=this,fn,$adj;if(direction===0)return;fn=direction>0?'next':'prev';if(self.isShiftDown){$adj=self.$control_input[fn]();if($adj.length){self.hideInput();self.setActiveItem($adj);e&&e.preventDefault();}}else{self.setCaret(self.caretPos+direction);}},setCaret:function(i){var self=this;if(self.settings.mode==='single'){i=self.items.length;}else{i=Math.max(0,Math.min(self.items.length,i));}
if(!self.isPending){

 var j,n,fn,$children,$child;$children=self.$control.children(':not(input)');for(j=0,n=$children.length;j<n;j++){$child=$($children[j]).detach();if(j<i){self.$control_input.before($child);}else{self.$control.append($child);}}}
self.caretPos=i;},lock:function(){this.close();this.isLocked=true;this.refreshState();},unlock:function(){this.isLocked=false;this.refreshState();},disable:function(){var self=this;self.$input.prop('disabled',true);self.$control_input.prop('disabled',true).prop('tabindex',-1);self.isDisabled=true;self.lock();},enable:function(){var self=this;self.$input.prop('disabled',false);self.$control_input.prop('disabled',false).prop('tabindex',self.tabIndex);self.isDisabled=false;self.unlock();},destroy:function(){var self=this;var eventNS=self.eventNS;var revertSettings=self.revertSettings;self.trigger('destroy');self.off();self.$wrapper.remove();self.$dropdown.remove();self.$input.html('').append(revertSettings.$children).removeAttr('tabindex').removeClass('selectized').attr({tabindex:revertSettings.tabindex}).show();self.$control_input.removeData('grow');self.$input.removeData('selectize');$(window).off(eventNS);$(document).off(eventNS);$(document.body).off(eventNS);delete self.$input[0].selectize;},render:function(templateName,data){var value,id,label;var html='';var cache=false;var self=this;var regex_tag=/^[\t \r\n]*<([a-z][a-z0-9\-_]*(?:\:[a-z][a-z0-9\-_]*)?)/i;if(templateName==='option'||templateName==='item'){value=hash_key(data[self.settings.valueField]);cache=!!value;} 
if(cache){if(!isset(self.renderCache[templateName])){self.renderCache[templateName]={};}
if(self.renderCache[templateName].hasOwnProperty(value)){return self.renderCache[templateName][value];}} 
html=self.settings.render[templateName].apply(this,[data,escape_html]); if(templateName==='option'||templateName==='option_create'){html=html.replace(regex_tag,'<$1 data-selectable');}
if(templateName==='optgroup'){id=data[self.settings.optgroupValueField]||'';html=html.replace(regex_tag,'<$1 data-group="'+escape_replace(escape_html(id))+'"');}
if(templateName==='option'||templateName==='item'){html=html.replace(regex_tag,'<$1 data-value="'+escape_replace(escape_html(value||''))+'"');} 
if(cache){self.renderCache[templateName][value]=html;}
return html;},clearCache:function(templateName){var self=this;if(typeof templateName==='undefined'){self.renderCache={};}else{delete self.renderCache[templateName];}},canCreate:function(input){var self=this;if(!self.settings.create)return false;var filter=self.settings.createFilter;return input.length&&(typeof filter!=='function'||filter.apply(self,[input]))&&(typeof filter!=='string'||new RegExp(filter).test(input))&&(!(filter instanceof RegExp)||filter.test(input));}});Selectize.count=0;Selectize.defaults={options:[],optgroups:[],plugins:[],delimiter:',',splitOn:null, persist:true,diacritics:true,create:false,createOnBlur:false,createFilter:null,highlight:true,openOnFocus:true,maxOptions:1000,maxItems:null,hideSelected:null,addPrecedence:false,selectOnTab:false,preload:false,allowEmptyOption:false,closeAfterSelect:false,scrollDuration:60,loadThrottle:300,loadingClass:'loading',dataAttr:'data-data',optgroupField:'optgroup',valueField:'value',labelField:'text',optgroupLabelField:'label',optgroupValueField:'value',lockOptgroupOrder:false,sortField:'$order',searchField:['text'],searchConjunction:'and',mode:null,wrapperClass:'selectize-control',inputClass:'selectize-input',dropdownClass:'selectize-dropdown',dropdownContentClass:'selectize-dropdown-content',dropdownParent:null,copyClassesToDropdown:true,render:{}};$.fn.selectize=function(settings_user){var defaults=$.fn.selectize.defaults;var settings=$.extend({},defaults,settings_user);var attr_data=settings.dataAttr;var field_label=settings.labelField;var field_value=settings.valueField;var field_optgroup=settings.optgroupField;var field_optgroup_label=settings.optgroupLabelField;var field_optgroup_value=settings.optgroupValueField;var init_textbox=function($input,settings_element){var i,n,values,option;var data_raw=$input.attr(attr_data);if(!data_raw){var value=$.trim($input.val()||'');if(!settings.allowEmptyOption&&!value.length)return;values=value.split(settings.delimiter);for(i=0,n=values.length;i<n;i++){option={};option[field_label]=values[i];option[field_value]=values[i];settings_element.options.push(option);}
settings_element.items=values;}else{settings_element.options=JSON.parse(data_raw);for(i=0,n=settings_element.options.length;i<n;i++){settings_element.items.push(settings_element.options[i][field_value]);}}};var init_select=function($input,settings_element){var i,n,tagName,$children,order=0;var options=settings_element.options;var optionsMap={};var readData=function($el){var data=attr_data&&$el.attr(attr_data);if(typeof data==='string'&&data.length){return JSON.parse(data);}
return null;};var addOption=function($option,group){$option=$($option);var value=hash_key($option.attr('value'));if(!value&&!settings.allowEmptyOption)return;  
 
 
if(optionsMap.hasOwnProperty(value)){if(group){var arr=optionsMap[value][field_optgroup];if(!arr){optionsMap[value][field_optgroup]=group;}else if(!$.isArray(arr)){optionsMap[value][field_optgroup]=[arr,group];}else{arr.push(group);}}
return;}
var option=readData($option)||{};option[field_label]=option[field_label]||$option.text();option[field_value]=option[field_value]||value;option[field_optgroup]=option[field_optgroup]||group;optionsMap[value]=option;options.push(option);if($option.is(':selected')){settings_element.items.push(value);}};var addGroup=function($optgroup){var i,n,id,optgroup,$options;$optgroup=$($optgroup);id=$optgroup.attr('label');if(id){optgroup=readData($optgroup)||{};optgroup[field_optgroup_label]=id;optgroup[field_optgroup_value]=id;settings_element.optgroups.push(optgroup);}
$options=$('option',$optgroup);for(i=0,n=$options.length;i<n;i++){addOption($options[i],id);}};settings_element.maxItems=$input.attr('multiple')?null:1;$children=$input.children();for(i=0,n=$children.length;i<n;i++){tagName=$children[i].tagName.toLowerCase();if(tagName==='optgroup'){addGroup($children[i]);}else if(tagName==='option'){addOption($children[i]);}}};return this.each(function(){if(this.selectize)return;var instance;var $input=$(this);var tag_name=this.tagName.toLowerCase();var placeholder=$input.attr('placeholder')||$input.attr('data-placeholder');if(!placeholder&&!settings.allowEmptyOption){placeholder=$input.children('option[value=""]').text();}
var settings_element={'placeholder':placeholder,'options':[],'optgroups':[],'items':[]};if(tag_name==='select'){init_select($input,settings_element);}else{init_textbox($input,settings_element);}
instance=new Selectize($input,$.extend(true,{},defaults,settings_element,settings_user));});};$.fn.selectize.defaults=Selectize.defaults;$.fn.selectize.support={validity:SUPPORTS_VALIDITY_API};Selectize.define('drag_drop',function(options){if(!$.fn.sortable)throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".');if(this.settings.mode!=='multi')return;var self=this;self.lock=(function(){var original=self.lock;return function(){var sortable=self.$control.data('sortable');if(sortable)sortable.disable();return original.apply(self,arguments);};})();self.unlock=(function(){var original=self.unlock;return function(){var sortable=self.$control.data('sortable');if(sortable)sortable.enable();return original.apply(self,arguments);};})();self.setup=(function(){var original=self.setup;return function(){original.apply(this,arguments);var $control=self.$control.sortable({items:'[data-value]',forcePlaceholderSize:true,disabled:self.isLocked,start:function(e,ui){ui.placeholder.css('width',ui.helper.css('width'));$control.css({overflow:'visible'});},stop:function(){$control.css({overflow:'hidden'});var active=self.$activeItems?self.$activeItems.slice():null;var values=[];$control.children('[data-value]').each(function(){values.push($(this).attr('data-value'));});self.setValue(values);self.setActiveItem(active);}});};})();});Selectize.define('dropdown_header',function(options){var self=this;options=$.extend({title:'Untitled',headerClass:'selectize-dropdown-header',titleRowClass:'selectize-dropdown-header-title',labelClass:'selectize-dropdown-header-label',closeClass:'selectize-dropdown-header-close',html:function(data){return('<div class="'+data.headerClass+'">'+'<div class="'+data.titleRowClass+'">'+'<span class="'+data.labelClass+'">'+data.title+'</span>'+'<a href="javascript:void(0)" class="'+data.closeClass+'">&times;</a>'+'</div>'+'</div>');}},options);self.setup=(function(){var original=self.setup;return function(){original.apply(self,arguments);self.$dropdown_header=$(options.html(options));self.$dropdown.prepend(self.$dropdown_header);};})();});Selectize.define('optgroup_columns',function(options){var self=this;options=$.extend({equalizeWidth:true,equalizeHeight:true},options);this.getAdjacentOption=function($option,direction){var $options=$option.closest('[data-group]').find('[data-selectable]');var index=$options.index($option)+direction;return index>=0&&index<$options.length?$options.eq(index):$();};this.onKeyDown=(function(){var original=self.onKeyDown;return function(e){var index,$option,$options,$optgroup;if(this.isOpen&&(e.keyCode===KEY_LEFT||e.keyCode===KEY_RIGHT)){self.ignoreHover=true;$optgroup=this.$activeOption.closest('[data-group]');index=$optgroup.find('[data-selectable]').index(this.$activeOption);if(e.keyCode===KEY_LEFT){$optgroup=$optgroup.prev('[data-group]');}else{$optgroup=$optgroup.next('[data-group]');}
$options=$optgroup.find('[data-selectable]');$option=$options.eq(Math.min($options.length-1,index));if($option.length){this.setActiveOption($option);}
return;}
return original.apply(this,arguments);};})();var getScrollbarWidth=function(){var div;var width=getScrollbarWidth.width;var doc=document;if(typeof width==='undefined'){div=doc.createElement('div');div.innerHTML='<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>';div=div.firstChild;doc.body.appendChild(div);width=getScrollbarWidth.width=div.offsetWidth-div.clientWidth;doc.body.removeChild(div);}
return width;};var equalizeSizes=function(){var i,n,height_max,width,width_last,width_parent,$optgroups;$optgroups=$('[data-group]',self.$dropdown_content);n=$optgroups.length;if(!n||!self.$dropdown_content.width())return;if(options.equalizeHeight){height_max=0;for(i=0;i<n;i++){height_max=Math.max(height_max,$optgroups.eq(i).height());}
$optgroups.css({height:height_max});}
if(options.equalizeWidth){width_parent=self.$dropdown_content.innerWidth()-getScrollbarWidth();width=Math.round(width_parent/n);$optgroups.css({width:width});if(n>1){width_last=width_parent-width*(n-1);$optgroups.eq(n-1).css({width:width_last});}}};if(options.equalizeHeight||options.equalizeWidth){hook.after(this,'positionDropdown',equalizeSizes);hook.after(this,'refreshOptions',equalizeSizes);}});Selectize.define('remove_button',function(options){if(this.settings.mode==='single')return;options=$.extend({label:'&times;',title:'Remove',className:'remove',append:true},options);var self=this;var html='<a href="javascript:void(0)" class="'+options.className+'" tabindex="-1" title="'+escape_html(options.title)+'">'+options.label+'</a>';var append=function(html_container,html_element){var pos=html_container.search(/(<\/[^>]+>\s*)$/);return html_container.substring(0,pos)+html_element+html_container.substring(pos);};this.setup=(function(){var original=self.setup;return function(){ if(options.append){var render_item=self.settings.render.item;self.settings.render.item=function(data){return append(render_item.apply(this,arguments),html);};}
original.apply(this,arguments); this.$control.on('click','.'+options.className,function(e){e.preventDefault();if(self.isLocked)return;var $item=$(e.currentTarget).parent();self.setActiveItem($item);if(self.deleteSelection()){self.setCaret(self.items.length);}});};})();});Selectize.define('restore_on_backspace',function(options){var self=this;options.text=options.text||function(option){return option[this.settings.labelField];};this.onKeyDown=(function(){var original=self.onKeyDown;return function(e){var index,option;if(e.keyCode===KEY_BACKSPACE&&this.$control_input.val()===''&&!this.$activeItems.length){index=this.caretPos-1;if(index>=0&&index<this.items.length){option=this.options[this.items[index]];if(this.deleteSelection(e)){this.setTextboxValue(options.text.apply(this,[option]));this.refreshOptions(true);}
e.preventDefault();return;}}
return original.apply(this,arguments);};})();});return Selectize;}));



(function(global,factory){typeof exports==='object'&&typeof module!=='undefined'?module.exports=factory():typeof define==='function'&&define.amd?define(factory):global.moment=factory()}(this,function(){'use strict';var hookCallback;function utils_hooks__hooks(){return hookCallback.apply(null,arguments);}
function setHookCallback(callback){hookCallback=callback;}
function isArray(input){return Object.prototype.toString.call(input)==='[object Array]';}
function isDate(input){return input instanceof Date||Object.prototype.toString.call(input)==='[object Date]';}
function map(arr,fn){var res=[],i;for(i=0;i<arr.length;++i){res.push(fn(arr[i],i));}
return res;}
function hasOwnProp(a,b){return Object.prototype.hasOwnProperty.call(a,b);}
function extend(a,b){for(var i in b){if(hasOwnProp(b,i)){a[i]=b[i];}}
if(hasOwnProp(b,'toString')){a.toString=b.toString;}
if(hasOwnProp(b,'valueOf')){a.valueOf=b.valueOf;}
return a;}
function create_utc__createUTC(input,format,locale,strict){return createLocalOrUTC(input,format,locale,strict,true).utc();}
function defaultParsingFlags(){return{empty:false,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:false,invalidMonth:null,invalidFormat:false,userInvalidated:false,iso:false};}
function getParsingFlags(m){if(m._pf==null){m._pf=defaultParsingFlags();}
return m._pf;}
function valid__isValid(m){if(m._isValid==null){var flags=getParsingFlags(m);m._isValid=!isNaN(m._d.getTime())&&flags.overflow<0&&!flags.empty&&!flags.invalidMonth&&!flags.invalidWeekday&&!flags.nullInput&&!flags.invalidFormat&&!flags.userInvalidated;if(m._strict){m._isValid=m._isValid&&flags.charsLeftOver===0&&flags.unusedTokens.length===0&&flags.bigHour===undefined;}}
return m._isValid;}
function valid__createInvalid(flags){var m=create_utc__createUTC(NaN);if(flags!=null){extend(getParsingFlags(m),flags);}
else{getParsingFlags(m).userInvalidated=true;}
return m;}
var momentProperties=utils_hooks__hooks.momentProperties=[];function copyConfig(to,from){var i,prop,val;if(typeof from._isAMomentObject!=='undefined'){to._isAMomentObject=from._isAMomentObject;}
if(typeof from._i!=='undefined'){to._i=from._i;}
if(typeof from._f!=='undefined'){to._f=from._f;}
if(typeof from._l!=='undefined'){to._l=from._l;}
if(typeof from._strict!=='undefined'){to._strict=from._strict;}
if(typeof from._tzm!=='undefined'){to._tzm=from._tzm;}
if(typeof from._isUTC!=='undefined'){to._isUTC=from._isUTC;}
if(typeof from._offset!=='undefined'){to._offset=from._offset;}
if(typeof from._pf!=='undefined'){to._pf=getParsingFlags(from);}
if(typeof from._locale!=='undefined'){to._locale=from._locale;}
if(momentProperties.length>0){for(i in momentProperties){prop=momentProperties[i];val=from[prop];if(typeof val!=='undefined'){to[prop]=val;}}}
return to;}
var updateInProgress=false; function Moment(config){copyConfig(this,config);this._d=new Date(config._d!=null?config._d.getTime():NaN);
if(updateInProgress===false){updateInProgress=true;utils_hooks__hooks.updateOffset(this);updateInProgress=false;}}
function isMoment(obj){return obj instanceof Moment||(obj!=null&&obj._isAMomentObject!=null);}
function absFloor(number){if(number<0){return Math.ceil(number);}else{return Math.floor(number);}}
function toInt(argumentForCoercion){var coercedNumber=+argumentForCoercion,value=0;if(coercedNumber!==0&&isFinite(coercedNumber)){value=absFloor(coercedNumber);}
return value;}
function compareArrays(array1,array2,dontConvert){var len=Math.min(array1.length,array2.length),lengthDiff=Math.abs(array1.length-array2.length),diffs=0,i;for(i=0;i<len;i++){if((dontConvert&&array1[i]!==array2[i])||(!dontConvert&&toInt(array1[i])!==toInt(array2[i]))){diffs++;}}
return diffs+lengthDiff;}
function Locale(){}
var locales={};var globalLocale;function normalizeLocale(key){return key?key.toLowerCase().replace('_','-'):key;}

 
function chooseLocale(names){var i=0,j,next,locale,split;while(i<names.length){split=normalizeLocale(names[i]).split('-');j=split.length;next=normalizeLocale(names[i+1]);next=next?next.split('-'):null;while(j>0){locale=loadLocale(split.slice(0,j).join('-'));if(locale){return locale;}
if(next&&next.length>=j&&compareArrays(split,next,true)>=j-1){ break;}
j--;}
i++;}
return null;}
function loadLocale(name){var oldLocale=null; if(!locales[name]&&typeof module!=='undefined'&&module&&module.exports){try{oldLocale=globalLocale._abbr;require('./locale/'+name);
 locale_locales__getSetGlobalLocale(oldLocale);}catch(e){}}
return locales[name];}


function locale_locales__getSetGlobalLocale(key,values){var data;if(key){if(typeof values==='undefined'){data=locale_locales__getLocale(key);}
else{data=defineLocale(key,values);}
if(data){globalLocale=data;}}
return globalLocale._abbr;}
function defineLocale(name,values){if(values!==null){values.abbr=name;locales[name]=locales[name]||new Locale();locales[name].set(values); locale_locales__getSetGlobalLocale(name);return locales[name];}else{ delete locales[name];return null;}} 
function locale_locales__getLocale(key){var locale;if(key&&key._locale&&key._locale._abbr){key=key._locale._abbr;}
if(!key){return globalLocale;}
if(!isArray(key)){ locale=loadLocale(key);if(locale){return locale;}
key=[key];}
return chooseLocale(key);}
var aliases={};function addUnitAlias(unit,shorthand){var lowerCase=unit.toLowerCase();aliases[lowerCase]=aliases[lowerCase+'s']=aliases[shorthand]=unit;}
function normalizeUnits(units){return typeof units==='string'?aliases[units]||aliases[units.toLowerCase()]:undefined;}
function normalizeObjectUnits(inputObject){var normalizedInput={},normalizedProp,prop;for(prop in inputObject){if(hasOwnProp(inputObject,prop)){normalizedProp=normalizeUnits(prop);if(normalizedProp){normalizedInput[normalizedProp]=inputObject[prop];}}}
return normalizedInput;}
function makeGetSet(unit,keepTime){return function(value){if(value!=null){get_set__set(this,unit,value);utils_hooks__hooks.updateOffset(this,keepTime);return this;}else{return get_set__get(this,unit);}};}
function get_set__get(mom,unit){return mom._d['get'+(mom._isUTC?'UTC':'')+unit]();}
function get_set__set(mom,unit,value){return mom._d['set'+(mom._isUTC?'UTC':'')+unit](value);} 
function getSet(units,value){var unit;if(typeof units==='object'){for(unit in units){this.set(unit,units[unit]);}}else{units=normalizeUnits(units);if(typeof this[units]==='function'){return this[units](value);}}
return this;}
function zeroFill(number,targetLength,forceSign){var absNumber=''+Math.abs(number),zerosToFill=targetLength-absNumber.length,sign=number>=0;return(sign?(forceSign?'+':''):'-')+
Math.pow(10,Math.max(0,zerosToFill)).toString().substr(1)+absNumber;}
var formattingTokens=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;var localFormattingTokens=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;var formatFunctions={};var formatTokenFunctions={};
function addFormatToken(token,padded,ordinal,callback){var func=callback;if(typeof callback==='string'){func=function(){return this[callback]();};}
if(token){formatTokenFunctions[token]=func;}
if(padded){formatTokenFunctions[padded[0]]=function(){return zeroFill(func.apply(this,arguments),padded[1],padded[2]);};}
if(ordinal){formatTokenFunctions[ordinal]=function(){return this.localeData().ordinal(func.apply(this,arguments),token);};}}
function removeFormattingTokens(input){if(input.match(/\[[\s\S]/)){return input.replace(/^\[|\]$/g,'');}
return input.replace(/\\/g,'');}
function makeFormatFunction(format){var array=format.match(formattingTokens),i,length;for(i=0,length=array.length;i<length;i++){if(formatTokenFunctions[array[i]]){array[i]=formatTokenFunctions[array[i]];}else{array[i]=removeFormattingTokens(array[i]);}}
return function(mom){var output='';for(i=0;i<length;i++){output+=array[i]instanceof Function?array[i].call(mom,format):array[i];}
return output;};} 
function formatMoment(m,format){if(!m.isValid()){return m.localeData().invalidDate();}
format=expandFormat(format,m.localeData());formatFunctions[format]=formatFunctions[format]||makeFormatFunction(format);return formatFunctions[format](m);}
function expandFormat(format,locale){var i=5;function replaceLongDateFormatTokens(input){return locale.longDateFormat(input)||input;}
localFormattingTokens.lastIndex=0;while(i>=0&&localFormattingTokens.test(format)){format=format.replace(localFormattingTokens,replaceLongDateFormatTokens);localFormattingTokens.lastIndex=0;i-=1;}
return format;}
var match1=/\d/; var match2=/\d\d/; var match3=/\d{3}/; var match4=/\d{4}/; var match6=/[+-]?\d{6}/; var match1to2=/\d\d?/; var match1to3=/\d{1,3}/; var match1to4=/\d{1,4}/; var match1to6=/[+-]?\d{1,6}/; var matchUnsigned=/\d+/; var matchSigned=/[+-]?\d+/; var matchOffset=/Z|[+-]\d\d:?\d\d/gi; var matchTimestamp=/[+-]?\d+(\.\d{1,3})?/;
var matchWord=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;var regexes={};function isFunction(sth){ return typeof sth==='function'&&Object.prototype.toString.call(sth)==='[object Function]';}
function addRegexToken(token,regex,strictRegex){regexes[token]=isFunction(regex)?regex:function(isStrict){return(isStrict&&strictRegex)?strictRegex:regex;};}
function getParseRegexForToken(token,config){if(!hasOwnProp(regexes,token)){return new RegExp(unescapeFormat(token));}
return regexes[token](config._strict,config._locale);} 
function unescapeFormat(s){return s.replace('\\','').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(matched,p1,p2,p3,p4){return p1||p2||p3||p4;}).replace(/[-\/\\^$*+?.()|[\]{}]/g,'\\$&');}
var tokens={};function addParseToken(token,callback){var i,func=callback;if(typeof token==='string'){token=[token];}
if(typeof callback==='number'){func=function(input,array){array[callback]=toInt(input);};}
for(i=0;i<token.length;i++){tokens[token[i]]=func;}}
function addWeekParseToken(token,callback){addParseToken(token,function(input,array,config,token){config._w=config._w||{};callback(input,config._w,config,token);});}
function addTimeToArrayFromToken(token,input,config){if(input!=null&&hasOwnProp(tokens,token)){tokens[token](input,config._a,config,token);}}
var YEAR=0;var MONTH=1;var DATE=2;var HOUR=3;var MINUTE=4;var SECOND=5;var MILLISECOND=6;function daysInMonth(year,month){return new Date(Date.UTC(year,month+1,0)).getUTCDate();} 
addFormatToken('M',['MM',2],'Mo',function(){return this.month()+1;});addFormatToken('MMM',0,0,function(format){return this.localeData().monthsShort(this,format);});addFormatToken('MMMM',0,0,function(format){return this.localeData().months(this,format);}); addUnitAlias('month','M'); addRegexToken('M',match1to2);addRegexToken('MM',match1to2,match2);addRegexToken('MMM',matchWord);addRegexToken('MMMM',matchWord);addParseToken(['M','MM'],function(input,array){array[MONTH]=toInt(input)-1;});addParseToken(['MMM','MMMM'],function(input,array,config,token){var month=config._locale.monthsParse(input,token,config._strict);if(month!=null){array[MONTH]=month;}else{getParsingFlags(config).invalidMonth=input;}}); var defaultLocaleMonths='January_February_March_April_May_June_July_August_September_October_November_December'.split('_');function localeMonths(m){return this._months[m.month()];}
var defaultLocaleMonthsShort='Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');function localeMonthsShort(m){return this._monthsShort[m.month()];}
function localeMonthsParse(monthName,format,strict){var i,mom,regex;if(!this._monthsParse){this._monthsParse=[];this._longMonthsParse=[];this._shortMonthsParse=[];}
for(i=0;i<12;i++){ mom=create_utc__createUTC([2000,i]);if(strict&&!this._longMonthsParse[i]){this._longMonthsParse[i]=new RegExp('^'+this.months(mom,'').replace('.','')+'$','i');this._shortMonthsParse[i]=new RegExp('^'+this.monthsShort(mom,'').replace('.','')+'$','i');}
if(!strict&&!this._monthsParse[i]){regex='^'+this.months(mom,'')+'|^'+this.monthsShort(mom,'');this._monthsParse[i]=new RegExp(regex.replace('.',''),'i');} 
if(strict&&format==='MMMM'&&this._longMonthsParse[i].test(monthName)){return i;}else if(strict&&format==='MMM'&&this._shortMonthsParse[i].test(monthName)){return i;}else if(!strict&&this._monthsParse[i].test(monthName)){return i;}}} 
function setMonth(mom,value){var dayOfMonth;if(typeof value==='string'){value=mom.localeData().monthsParse(value);if(typeof value!=='number'){return mom;}}
dayOfMonth=Math.min(mom.date(),daysInMonth(mom.year(),value));mom._d['set'+(mom._isUTC?'UTC':'')+'Month'](value,dayOfMonth);return mom;}
function getSetMonth(value){if(value!=null){setMonth(this,value);utils_hooks__hooks.updateOffset(this,true);return this;}else{return get_set__get(this,'Month');}}
function getDaysInMonth(){return daysInMonth(this.year(),this.month());}
function checkOverflow(m){var overflow;var a=m._a;if(a&&getParsingFlags(m).overflow===-2){overflow=a[MONTH]<0||a[MONTH]>11?MONTH:a[DATE]<1||a[DATE]>daysInMonth(a[YEAR],a[MONTH])?DATE:a[HOUR]<0||a[HOUR]>24||(a[HOUR]===24&&(a[MINUTE]!==0||a[SECOND]!==0||a[MILLISECOND]!==0))?HOUR:a[MINUTE]<0||a[MINUTE]>59?MINUTE:a[SECOND]<0||a[SECOND]>59?SECOND:a[MILLISECOND]<0||a[MILLISECOND]>999?MILLISECOND:-1;if(getParsingFlags(m)._overflowDayOfYear&&(overflow<YEAR||overflow>DATE)){overflow=DATE;}
getParsingFlags(m).overflow=overflow;}
return m;}
function warn(msg){if(utils_hooks__hooks.suppressDeprecationWarnings===false&&typeof console!=='undefined'&&console.warn){console.warn('Deprecation warning: '+msg);}}
function deprecate(msg,fn){var firstTime=true;return extend(function(){if(firstTime){warn(msg+'\n'+(new Error()).stack);firstTime=false;}
return fn.apply(this,arguments);},fn);}
var deprecations={};function deprecateSimple(name,msg){if(!deprecations[name]){warn(msg);deprecations[name]=true;}}
utils_hooks__hooks.suppressDeprecationWarnings=false;var from_string__isoRegex=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;var isoDates=[['YYYYYY-MM-DD',/[+-]\d{6}-\d{2}-\d{2}/],['YYYY-MM-DD',/\d{4}-\d{2}-\d{2}/],['GGGG-[W]WW-E',/\d{4}-W\d{2}-\d/],['GGGG-[W]WW',/\d{4}-W\d{2}/],['YYYY-DDD',/\d{4}-\d{3}/]]; var isoTimes=[['HH:mm:ss.SSSS',/(T| )\d\d:\d\d:\d\d\.\d+/],['HH:mm:ss',/(T| )\d\d:\d\d:\d\d/],['HH:mm',/(T| )\d\d:\d\d/],['HH',/(T| )\d\d/]];var aspNetJsonRegex=/^\/?Date\((\-?\d+)/i; function configFromISO(config){var i,l,string=config._i,match=from_string__isoRegex.exec(string);if(match){getParsingFlags(config).iso=true;for(i=0,l=isoDates.length;i<l;i++){if(isoDates[i][1].exec(string)){config._f=isoDates[i][0];break;}}
for(i=0,l=isoTimes.length;i<l;i++){if(isoTimes[i][1].exec(string)){ config._f+=(match[6]||' ')+isoTimes[i][0];break;}}
if(string.match(matchOffset)){config._f+='Z';}
configFromStringAndFormat(config);}else{config._isValid=false;}} 
function configFromString(config){var matched=aspNetJsonRegex.exec(config._i);if(matched!==null){config._d=new Date(+matched[1]);return;}
configFromISO(config);if(config._isValid===false){delete config._isValid;utils_hooks__hooks.createFromInputFallback(config);}}
utils_hooks__hooks.createFromInputFallback=deprecate('moment construction falls back to js Date. This is '+'discouraged and will be removed in upcoming major '+'release. Please refer to '+'https://github.com/moment/moment/issues/1407 for more info.',function(config){config._d=new Date(config._i+(config._useUTC?' UTC':''));});function createDate(y,m,d,h,M,s,ms){ var date=new Date(y,m,d,h,M,s,ms); if(y<1970){date.setFullYear(y);}
return date;}
function createUTCDate(y){var date=new Date(Date.UTC.apply(null,arguments));if(y<1970){date.setUTCFullYear(y);}
return date;}
addFormatToken(0,['YY',2],0,function(){return this.year()%100;});addFormatToken(0,['YYYY',4],0,'year');addFormatToken(0,['YYYYY',5],0,'year');addFormatToken(0,['YYYYYY',6,true],0,'year'); addUnitAlias('year','y'); addRegexToken('Y',matchSigned);addRegexToken('YY',match1to2,match2);addRegexToken('YYYY',match1to4,match4);addRegexToken('YYYYY',match1to6,match6);addRegexToken('YYYYYY',match1to6,match6);addParseToken(['YYYYY','YYYYYY'],YEAR);addParseToken('YYYY',function(input,array){array[YEAR]=input.length===2?utils_hooks__hooks.parseTwoDigitYear(input):toInt(input);});addParseToken('YY',function(input,array){array[YEAR]=utils_hooks__hooks.parseTwoDigitYear(input);}); function daysInYear(year){return isLeapYear(year)?366:365;}
function isLeapYear(year){return(year%4===0&&year%100!==0)||year%400===0;} 
utils_hooks__hooks.parseTwoDigitYear=function(input){return toInt(input)+(toInt(input)>68?1900:2000);}; var getSetYear=makeGetSet('FullYear',false);function getIsLeapYear(){return isLeapYear(this.year());}
addFormatToken('w',['ww',2],'wo','week');addFormatToken('W',['WW',2],'Wo','isoWeek'); addUnitAlias('week','w');addUnitAlias('isoWeek','W'); addRegexToken('w',match1to2);addRegexToken('ww',match1to2,match2);addRegexToken('W',match1to2);addRegexToken('WW',match1to2,match2);addWeekParseToken(['w','ww','W','WW'],function(input,week,config,token){week[token.substr(0,1)]=toInt(input);});






function weekOfYear(mom,firstDayOfWeek,firstDayOfWeekOfYear){var end=firstDayOfWeekOfYear-firstDayOfWeek,daysToDayOfWeek=firstDayOfWeekOfYear-mom.day(),adjustedMoment;if(daysToDayOfWeek>end){daysToDayOfWeek-=7;}
if(daysToDayOfWeek<end-7){daysToDayOfWeek+=7;}
adjustedMoment=local__createLocal(mom).add(daysToDayOfWeek,'d');return{week:Math.ceil(adjustedMoment.dayOfYear()/7),year:adjustedMoment.year()};} 
function localeWeek(mom){return weekOfYear(mom,this._week.dow,this._week.doy).week;}
var defaultLocaleWeek={dow:0,doy:6
};function localeFirstDayOfWeek(){return this._week.dow;}
function localeFirstDayOfYear(){return this._week.doy;} 
function getSetWeek(input){var week=this.localeData().week(this);return input==null?week:this.add((input-week)*7,'d');}
function getSetISOWeek(input){var week=weekOfYear(this,1,4).week;return input==null?week:this.add((input-week)*7,'d');}
addFormatToken('DDD',['DDDD',3],'DDDo','dayOfYear'); addUnitAlias('dayOfYear','DDD'); addRegexToken('DDD',match1to3);addRegexToken('DDDD',match3);addParseToken(['DDD','DDDD'],function(input,array,config){config._dayOfYear=toInt(input);});
 function dayOfYearFromWeeks(year,week,weekday,firstDayOfWeekOfYear,firstDayOfWeek){var week1Jan=6+firstDayOfWeek-firstDayOfWeekOfYear,janX=createUTCDate(year,0,1+week1Jan),d=janX.getUTCDay(),dayOfYear;if(d<firstDayOfWeek){d+=7;}
weekday=weekday!=null?1*weekday:firstDayOfWeek;dayOfYear=1+week1Jan+7*(week-1)-d+weekday;return{year:dayOfYear>0?year:year-1,dayOfYear:dayOfYear>0?dayOfYear:daysInYear(year-1)+dayOfYear};} 
function getSetDayOfYear(input){var dayOfYear=Math.round((this.clone().startOf('day')-this.clone().startOf('year'))/864e5)+1;return input==null?dayOfYear:this.add((input-dayOfYear),'d');}
function defaults(a,b,c){if(a!=null){return a;}
if(b!=null){return b;}
return c;}
function currentDateArray(config){var now=new Date();if(config._useUTC){return[now.getUTCFullYear(),now.getUTCMonth(),now.getUTCDate()];}
return[now.getFullYear(),now.getMonth(),now.getDate()];}

function configFromArray(config){var i,date,input=[],currentDate,yearToUse;if(config._d){return;}
currentDate=currentDateArray(config); if(config._w&&config._a[DATE]==null&&config._a[MONTH]==null){dayOfYearFromWeekInfo(config);} 
if(config._dayOfYear){yearToUse=defaults(config._a[YEAR],currentDate[YEAR]);if(config._dayOfYear>daysInYear(yearToUse)){getParsingFlags(config)._overflowDayOfYear=true;}
date=createUTCDate(yearToUse,0,config._dayOfYear);config._a[MONTH]=date.getUTCMonth();config._a[DATE]=date.getUTCDate();}


 
for(i=0;i<3&&config._a[i]==null;++i){config._a[i]=input[i]=currentDate[i];} 
for(;i<7;i++){config._a[i]=input[i]=(config._a[i]==null)?(i===2?1:0):config._a[i];} 
if(config._a[HOUR]===24&&config._a[MINUTE]===0&&config._a[SECOND]===0&&config._a[MILLISECOND]===0){config._nextDay=true;config._a[HOUR]=0;}
config._d=(config._useUTC?createUTCDate:createDate).apply(null,input);
if(config._tzm!=null){config._d.setUTCMinutes(config._d.getUTCMinutes()-config._tzm);}
if(config._nextDay){config._a[HOUR]=24;}}
function dayOfYearFromWeekInfo(config){var w,weekYear,week,weekday,dow,doy,temp;w=config._w;if(w.GG!=null||w.W!=null||w.E!=null){dow=1;doy=4;


weekYear=defaults(w.GG,config._a[YEAR],weekOfYear(local__createLocal(),1,4).year);week=defaults(w.W,1);weekday=defaults(w.E,1);}else{dow=config._locale._week.dow;doy=config._locale._week.doy;weekYear=defaults(w.gg,config._a[YEAR],weekOfYear(local__createLocal(),dow,doy).year);week=defaults(w.w,1);if(w.d!=null){ weekday=w.d;if(weekday<dow){++week;}}else if(w.e!=null){ weekday=w.e+dow;}else{ weekday=dow;}}
temp=dayOfYearFromWeeks(weekYear,week,weekday,doy,dow);config._a[YEAR]=temp.year;config._dayOfYear=temp.dayOfYear;}
utils_hooks__hooks.ISO_8601=function(){}; function configFromStringAndFormat(config){ if(config._f===utils_hooks__hooks.ISO_8601){configFromISO(config);return;}
config._a=[];getParsingFlags(config).empty=true;var string=''+config._i,i,parsedInput,tokens,token,skipped,stringLength=string.length,totalParsedInputLength=0;tokens=expandFormat(config._f,config._locale).match(formattingTokens)||[];for(i=0;i<tokens.length;i++){token=tokens[i];parsedInput=(string.match(getParseRegexForToken(token,config))||[])[0];if(parsedInput){skipped=string.substr(0,string.indexOf(parsedInput));if(skipped.length>0){getParsingFlags(config).unusedInput.push(skipped);}
string=string.slice(string.indexOf(parsedInput)+parsedInput.length);totalParsedInputLength+=parsedInput.length;} 
if(formatTokenFunctions[token]){if(parsedInput){getParsingFlags(config).empty=false;}
else{getParsingFlags(config).unusedTokens.push(token);}
addTimeToArrayFromToken(token,parsedInput,config);}
else if(config._strict&&!parsedInput){getParsingFlags(config).unusedTokens.push(token);}} 
getParsingFlags(config).charsLeftOver=stringLength-totalParsedInputLength;if(string.length>0){getParsingFlags(config).unusedInput.push(string);} 
if(getParsingFlags(config).bigHour===true&&config._a[HOUR]<=12&&config._a[HOUR]>0){getParsingFlags(config).bigHour=undefined;} 
config._a[HOUR]=meridiemFixWrap(config._locale,config._a[HOUR],config._meridiem);configFromArray(config);checkOverflow(config);}
function meridiemFixWrap(locale,hour,meridiem){var isPm;if(meridiem==null){ return hour;}
if(locale.meridiemHour!=null){return locale.meridiemHour(hour,meridiem);}else if(locale.isPM!=null){ isPm=locale.isPM(meridiem);if(isPm&&hour<12){hour+=12;}
if(!isPm&&hour===12){hour=0;}
return hour;}else{ return hour;}}
function configFromStringAndArray(config){var tempConfig,bestMoment,scoreToBeat,i,currentScore;if(config._f.length===0){getParsingFlags(config).invalidFormat=true;config._d=new Date(NaN);return;}
for(i=0;i<config._f.length;i++){currentScore=0;tempConfig=copyConfig({},config);if(config._useUTC!=null){tempConfig._useUTC=config._useUTC;}
tempConfig._f=config._f[i];configFromStringAndFormat(tempConfig);if(!valid__isValid(tempConfig)){continue;} 
currentScore+=getParsingFlags(tempConfig).charsLeftOver; currentScore+=getParsingFlags(tempConfig).unusedTokens.length*10;getParsingFlags(tempConfig).score=currentScore;if(scoreToBeat==null||currentScore<scoreToBeat){scoreToBeat=currentScore;bestMoment=tempConfig;}}
extend(config,bestMoment||tempConfig);}
function configFromObject(config){if(config._d){return;}
var i=normalizeObjectUnits(config._i);config._a=[i.year,i.month,i.day||i.date,i.hour,i.minute,i.second,i.millisecond];configFromArray(config);}
function createFromConfig(config){var res=new Moment(checkOverflow(prepareConfig(config)));if(res._nextDay){ res.add(1,'d');res._nextDay=undefined;}
return res;}
function prepareConfig(config){var input=config._i,format=config._f;config._locale=config._locale||locale_locales__getLocale(config._l);if(input===null||(format===undefined&&input==='')){return valid__createInvalid({nullInput:true});}
if(typeof input==='string'){config._i=input=config._locale.preparse(input);}
if(isMoment(input)){return new Moment(checkOverflow(input));}else if(isArray(format)){configFromStringAndArray(config);}else if(format){configFromStringAndFormat(config);}else if(isDate(input)){config._d=input;}else{configFromInput(config);}
return config;}
function configFromInput(config){var input=config._i;if(input===undefined){config._d=new Date();}else if(isDate(input)){config._d=new Date(+input);}else if(typeof input==='string'){configFromString(config);}else if(isArray(input)){config._a=map(input.slice(0),function(obj){return parseInt(obj,10);});configFromArray(config);}else if(typeof(input)==='object'){configFromObject(config);}else if(typeof(input)==='number'){ config._d=new Date(input);}else{utils_hooks__hooks.createFromInputFallback(config);}}
function createLocalOrUTC(input,format,locale,strict,isUTC){var c={};if(typeof(locale)==='boolean'){strict=locale;locale=undefined;} 
c._isAMomentObject=true;c._useUTC=c._isUTC=isUTC;c._l=locale;c._i=input;c._f=format;c._strict=strict;return createFromConfig(c);}
function local__createLocal(input,format,locale,strict){return createLocalOrUTC(input,format,locale,strict,false);}
var prototypeMin=deprecate('moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548',function(){var other=local__createLocal.apply(null,arguments);return other<this?this:other;});var prototypeMax=deprecate('moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548',function(){var other=local__createLocal.apply(null,arguments);return other>this?this:other;});

function pickBy(fn,moments){var res,i;if(moments.length===1&&isArray(moments[0])){moments=moments[0];}
if(!moments.length){return local__createLocal();}
res=moments[0];for(i=1;i<moments.length;++i){if(!moments[i].isValid()||moments[i][fn](res)){res=moments[i];}}
return res;}
function min(){var args=[].slice.call(arguments,0);return pickBy('isBefore',args);}
function max(){var args=[].slice.call(arguments,0);return pickBy('isAfter',args);}
function Duration(duration){var normalizedInput=normalizeObjectUnits(duration),years=normalizedInput.year||0,quarters=normalizedInput.quarter||0,months=normalizedInput.month||0,weeks=normalizedInput.week||0,days=normalizedInput.day||0,hours=normalizedInput.hour||0,minutes=normalizedInput.minute||0,seconds=normalizedInput.second||0,milliseconds=normalizedInput.millisecond||0; this._milliseconds=+milliseconds+
seconds*1e3+ minutes*6e4+ hours*36e5;

 this._days=+days+
weeks*7;

this._months=+months+
quarters*3+
years*12;this._data={};this._locale=locale_locales__getLocale();this._bubble();}
function isDuration(obj){return obj instanceof Duration;}
function offset(token,separator){addFormatToken(token,0,0,function(){var offset=this.utcOffset();var sign='+';if(offset<0){offset=-offset;sign='-';}
return sign+zeroFill(~~(offset/60),2)+separator+zeroFill(~~(offset)%60,2);});}
offset('Z',':');offset('ZZ',''); addRegexToken('Z',matchOffset);addRegexToken('ZZ',matchOffset);addParseToken(['Z','ZZ'],function(input,array,config){config._useUTC=true;config._tzm=offsetFromString(input);});


var chunkOffset=/([\+\-]|\d\d)/gi;function offsetFromString(string){var matches=((string||'').match(matchOffset)||[]);var chunk=matches[matches.length-1]||[];var parts=(chunk+'').match(chunkOffset)||['-',0,0];var minutes=+(parts[1]*60)+toInt(parts[2]);return parts[0]==='+'?minutes:-minutes;}
function cloneWithOffset(input,model){var res,diff;if(model._isUTC){res=model.clone();diff=(isMoment(input)||isDate(input)?+input:+local__createLocal(input))-(+res);res._d.setTime(+res._d+diff);utils_hooks__hooks.updateOffset(res,false);return res;}else{return local__createLocal(input).local();}}
function getDateOffset(m){ return-Math.round(m._d.getTimezoneOffset()/15)*15;}

utils_hooks__hooks.updateOffset=function(){};






function getSetOffset(input,keepLocalTime){var offset=this._offset||0,localAdjust;if(input!=null){if(typeof input==='string'){input=offsetFromString(input);}
if(Math.abs(input)<16){input=input*60;}
if(!this._isUTC&&keepLocalTime){localAdjust=getDateOffset(this);}
this._offset=input;this._isUTC=true;if(localAdjust!=null){this.add(localAdjust,'m');}
if(offset!==input){if(!keepLocalTime||this._changeInProgress){add_subtract__addSubtract(this,create__createDuration(input-offset,'m'),1,false);}else if(!this._changeInProgress){this._changeInProgress=true;utils_hooks__hooks.updateOffset(this,true);this._changeInProgress=null;}}
return this;}else{return this._isUTC?offset:getDateOffset(this);}}
function getSetZone(input,keepLocalTime){if(input!=null){if(typeof input!=='string'){input=-input;}
this.utcOffset(input,keepLocalTime);return this;}else{return-this.utcOffset();}}
function setOffsetToUTC(keepLocalTime){return this.utcOffset(0,keepLocalTime);}
function setOffsetToLocal(keepLocalTime){if(this._isUTC){this.utcOffset(0,keepLocalTime);this._isUTC=false;if(keepLocalTime){this.subtract(getDateOffset(this),'m');}}
return this;}
function setOffsetToParsedOffset(){if(this._tzm){this.utcOffset(this._tzm);}else if(typeof this._i==='string'){this.utcOffset(offsetFromString(this._i));}
return this;}
function hasAlignedHourOffset(input){input=input?local__createLocal(input).utcOffset():0;return(this.utcOffset()-input)%60===0;}
function isDaylightSavingTime(){return(this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset());}
function isDaylightSavingTimeShifted(){if(typeof this._isDSTShifted!=='undefined'){return this._isDSTShifted;}
var c={};copyConfig(c,this);c=prepareConfig(c);if(c._a){var other=c._isUTC?create_utc__createUTC(c._a):local__createLocal(c._a);this._isDSTShifted=this.isValid()&&compareArrays(c._a,other.toArray())>0;}else{this._isDSTShifted=false;}
return this._isDSTShifted;}
function isLocal(){return!this._isUTC;}
function isUtcOffset(){return this._isUTC;}
function isUtc(){return this._isUTC&&this._offset===0;}
var aspNetRegex=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/;
 var create__isoRegex=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;function create__createDuration(input,key){var duration=input, match=null,sign,ret,diffRes;if(isDuration(input)){duration={ms:input._milliseconds,d:input._days,M:input._months};}else if(typeof input==='number'){duration={};if(key){duration[key]=input;}else{duration.milliseconds=input;}}else if(!!(match=aspNetRegex.exec(input))){sign=(match[1]==='-')?-1:1;duration={y:0,d:toInt(match[DATE])*sign,h:toInt(match[HOUR])*sign,m:toInt(match[MINUTE])*sign,s:toInt(match[SECOND])*sign,ms:toInt(match[MILLISECOND])*sign};}else if(!!(match=create__isoRegex.exec(input))){sign=(match[1]==='-')?-1:1;duration={y:parseIso(match[2],sign),M:parseIso(match[3],sign),d:parseIso(match[4],sign),h:parseIso(match[5],sign),m:parseIso(match[6],sign),s:parseIso(match[7],sign),w:parseIso(match[8],sign)};}else if(duration==null){ duration={};}else if(typeof duration==='object'&&('from'in duration||'to'in duration)){diffRes=momentsDifference(local__createLocal(duration.from),local__createLocal(duration.to));duration={};duration.ms=diffRes.milliseconds;duration.M=diffRes.months;}
ret=new Duration(duration);if(isDuration(input)&&hasOwnProp(input,'_locale')){ret._locale=input._locale;}
return ret;}
create__createDuration.fn=Duration.prototype;function parseIso(inp,sign){
var res=inp&&parseFloat(inp.replace(',','.')); return(isNaN(res)?0:res)*sign;}
function positiveMomentsDifference(base,other){var res={milliseconds:0,months:0};res.months=other.month()-base.month()+
(other.year()-base.year())*12;if(base.clone().add(res.months,'M').isAfter(other)){--res.months;}
res.milliseconds=+other-+(base.clone().add(res.months,'M'));return res;}
function momentsDifference(base,other){var res;other=cloneWithOffset(other,base);if(base.isBefore(other)){res=positiveMomentsDifference(base,other);}else{res=positiveMomentsDifference(other,base);res.milliseconds=-res.milliseconds;res.months=-res.months;}
return res;}
function createAdder(direction,name){return function(val,period){var dur,tmp; if(period!==null&&!isNaN(+period)){deprecateSimple(name,'moment().'+name+'(period, number) is deprecated. Please use moment().'+name+'(number, period).');tmp=val;val=period;period=tmp;}
val=typeof val==='string'?+val:val;dur=create__createDuration(val,period);add_subtract__addSubtract(this,dur,direction);return this;};}
function add_subtract__addSubtract(mom,duration,isAdding,updateOffset){var milliseconds=duration._milliseconds,days=duration._days,months=duration._months;updateOffset=updateOffset==null?true:updateOffset;if(milliseconds){mom._d.setTime(+mom._d+milliseconds*isAdding);}
if(days){get_set__set(mom,'Date',get_set__get(mom,'Date')+days*isAdding);}
if(months){setMonth(mom,get_set__get(mom,'Month')+months*isAdding);}
if(updateOffset){utils_hooks__hooks.updateOffset(mom,days||months);}}
var add_subtract__add=createAdder(1,'add');var add_subtract__subtract=createAdder(-1,'subtract');function moment_calendar__calendar(time,formats){var now=time||local__createLocal(),sod=cloneWithOffset(now,this).startOf('day'),diff=this.diff(sod,'days',true),format=diff<-6?'sameElse':diff<-1?'lastWeek':diff<0?'lastDay':diff<1?'sameDay':diff<2?'nextDay':diff<7?'nextWeek':'sameElse';return this.format(formats&&formats[format]||this.localeData().calendar(format,this,local__createLocal(now)));}
function clone(){return new Moment(this);}
function isAfter(input,units){var inputMs;units=normalizeUnits(typeof units!=='undefined'?units:'millisecond');if(units==='millisecond'){input=isMoment(input)?input:local__createLocal(input);return+this>+input;}else{inputMs=isMoment(input)?+input:+local__createLocal(input);return inputMs<+this.clone().startOf(units);}}
function isBefore(input,units){var inputMs;units=normalizeUnits(typeof units!=='undefined'?units:'millisecond');if(units==='millisecond'){input=isMoment(input)?input:local__createLocal(input);return+this<+input;}else{inputMs=isMoment(input)?+input:+local__createLocal(input);return+this.clone().endOf(units)<inputMs;}}
function isBetween(from,to,units){return this.isAfter(from,units)&&this.isBefore(to,units);}
function isSame(input,units){var inputMs;units=normalizeUnits(units||'millisecond');if(units==='millisecond'){input=isMoment(input)?input:local__createLocal(input);return+this===+input;}else{inputMs=+local__createLocal(input);return+(this.clone().startOf(units))<=inputMs&&inputMs<=+(this.clone().endOf(units));}}
function diff(input,units,asFloat){var that=cloneWithOffset(input,this),zoneDelta=(that.utcOffset()-this.utcOffset())*6e4,delta,output;units=normalizeUnits(units);if(units==='year'||units==='month'||units==='quarter'){output=monthDiff(this,that);if(units==='quarter'){output=output/3;}else if(units==='year'){output=output/12;}}else{delta=this-that;output=units==='second'?delta/1e3: units==='minute'?delta/6e4: units==='hour'?delta/36e5: units==='day'?(delta-zoneDelta)/864e5: units==='week'?(delta-zoneDelta)/6048e5: delta;}
return asFloat?output:absFloor(output);}
function monthDiff(a,b){ var wholeMonthDiff=((b.year()-a.year())*12)+(b.month()-a.month()),anchor=a.clone().add(wholeMonthDiff,'months'),anchor2,adjust;if(b-anchor<0){anchor2=a.clone().add(wholeMonthDiff-1,'months'); adjust=(b-anchor)/(anchor-anchor2);}else{anchor2=a.clone().add(wholeMonthDiff+1,'months'); adjust=(b-anchor)/(anchor2-anchor);}
return-(wholeMonthDiff+adjust);}
utils_hooks__hooks.defaultFormat='YYYY-MM-DDTHH:mm:ssZ';function toString(){return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');}
function moment_format__toISOString(){var m=this.clone().utc();if(0<m.year()&&m.year()<=9999){if('function'===typeof Date.prototype.toISOString){ return this.toDate().toISOString();}else{return formatMoment(m,'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');}}else{return formatMoment(m,'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');}}
function format(inputString){var output=formatMoment(this,inputString||utils_hooks__hooks.defaultFormat);return this.localeData().postformat(output);}
function from(time,withoutSuffix){if(!this.isValid()){return this.localeData().invalidDate();}
return create__createDuration({to:this,from:time}).locale(this.locale()).humanize(!withoutSuffix);}
function fromNow(withoutSuffix){return this.from(local__createLocal(),withoutSuffix);}
function to(time,withoutSuffix){if(!this.isValid()){return this.localeData().invalidDate();}
return create__createDuration({from:this,to:time}).locale(this.locale()).humanize(!withoutSuffix);}
function toNow(withoutSuffix){return this.to(local__createLocal(),withoutSuffix);}
function locale(key){var newLocaleData;if(key===undefined){return this._locale._abbr;}else{newLocaleData=locale_locales__getLocale(key);if(newLocaleData!=null){this._locale=newLocaleData;}
return this;}}
var lang=deprecate('moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',function(key){if(key===undefined){return this.localeData();}else{return this.locale(key);}});function localeData(){return this._locale;}
function startOf(units){units=normalizeUnits(units);
switch(units){case'year':this.month(0);case'quarter':case'month':this.date(1);case'week':case'isoWeek':case'day':this.hours(0);case'hour':this.minutes(0);case'minute':this.seconds(0);case'second':this.milliseconds(0);} 
if(units==='week'){this.weekday(0);}
if(units==='isoWeek'){this.isoWeekday(1);} 
if(units==='quarter'){this.month(Math.floor(this.month()/3)*3);}
return this;}
function endOf(units){units=normalizeUnits(units);if(units===undefined||units==='millisecond'){return this;}
return this.startOf(units).add(1,(units==='isoWeek'?'week':units)).subtract(1,'ms');}
function to_type__valueOf(){return+this._d-((this._offset||0)*60000);}
function unix(){return Math.floor(+this/1000);}
function toDate(){return this._offset?new Date(+this):this._d;}
function toArray(){var m=this;return[m.year(),m.month(),m.date(),m.hour(),m.minute(),m.second(),m.millisecond()];}
function toObject(){var m=this;return{years:m.year(),months:m.month(),date:m.date(),hours:m.hours(),minutes:m.minutes(),seconds:m.seconds(),milliseconds:m.milliseconds()};}
function moment_valid__isValid(){return valid__isValid(this);}
function parsingFlags(){return extend({},getParsingFlags(this));}
function invalidAt(){return getParsingFlags(this).overflow;}
addFormatToken(0,['gg',2],0,function(){return this.weekYear()%100;});addFormatToken(0,['GG',2],0,function(){return this.isoWeekYear()%100;});function addWeekYearFormatToken(token,getter){addFormatToken(0,[token,token.length],0,getter);}
addWeekYearFormatToken('gggg','weekYear');addWeekYearFormatToken('ggggg','weekYear');addWeekYearFormatToken('GGGG','isoWeekYear');addWeekYearFormatToken('GGGGG','isoWeekYear'); addUnitAlias('weekYear','gg');addUnitAlias('isoWeekYear','GG'); addRegexToken('G',matchSigned);addRegexToken('g',matchSigned);addRegexToken('GG',match1to2,match2);addRegexToken('gg',match1to2,match2);addRegexToken('GGGG',match1to4,match4);addRegexToken('gggg',match1to4,match4);addRegexToken('GGGGG',match1to6,match6);addRegexToken('ggggg',match1to6,match6);addWeekParseToken(['gggg','ggggg','GGGG','GGGGG'],function(input,week,config,token){week[token.substr(0,2)]=toInt(input);});addWeekParseToken(['gg','GG'],function(input,week,config,token){week[token]=utils_hooks__hooks.parseTwoDigitYear(input);}); function weeksInYear(year,dow,doy){return weekOfYear(local__createLocal([year,11,31+dow-doy]),dow,doy).week;} 
function getSetWeekYear(input){var year=weekOfYear(this,this.localeData()._week.dow,this.localeData()._week.doy).year;return input==null?year:this.add((input-year),'y');}
function getSetISOWeekYear(input){var year=weekOfYear(this,1,4).year;return input==null?year:this.add((input-year),'y');}
function getISOWeeksInYear(){return weeksInYear(this.year(),1,4);}
function getWeeksInYear(){var weekInfo=this.localeData()._week;return weeksInYear(this.year(),weekInfo.dow,weekInfo.doy);}
addFormatToken('Q',0,0,'quarter'); addUnitAlias('quarter','Q'); addRegexToken('Q',match1);addParseToken('Q',function(input,array){array[MONTH]=(toInt(input)-1)*3;}); function getSetQuarter(input){return input==null?Math.ceil((this.month()+1)/3):this.month((input-1)*3+this.month()%3);}
addFormatToken('D',['DD',2],'Do','date'); addUnitAlias('date','D'); addRegexToken('D',match1to2);addRegexToken('DD',match1to2,match2);addRegexToken('Do',function(isStrict,locale){return isStrict?locale._ordinalParse:locale._ordinalParseLenient;});addParseToken(['D','DD'],DATE);addParseToken('Do',function(input,array){array[DATE]=toInt(input.match(match1to2)[0],10);}); var getSetDayOfMonth=makeGetSet('Date',true);addFormatToken('d',0,'do','day');addFormatToken('dd',0,0,function(format){return this.localeData().weekdaysMin(this,format);});addFormatToken('ddd',0,0,function(format){return this.localeData().weekdaysShort(this,format);});addFormatToken('dddd',0,0,function(format){return this.localeData().weekdays(this,format);});addFormatToken('e',0,0,'weekday');addFormatToken('E',0,0,'isoWeekday'); addUnitAlias('day','d');addUnitAlias('weekday','e');addUnitAlias('isoWeekday','E'); addRegexToken('d',match1to2);addRegexToken('e',match1to2);addRegexToken('E',match1to2);addRegexToken('dd',matchWord);addRegexToken('ddd',matchWord);addRegexToken('dddd',matchWord);addWeekParseToken(['dd','ddd','dddd'],function(input,week,config){var weekday=config._locale.weekdaysParse(input); if(weekday!=null){week.d=weekday;}else{getParsingFlags(config).invalidWeekday=input;}});addWeekParseToken(['d','e','E'],function(input,week,config,token){week[token]=toInt(input);}); function parseWeekday(input,locale){if(typeof input!=='string'){return input;}
if(!isNaN(input)){return parseInt(input,10);}
input=locale.weekdaysParse(input);if(typeof input==='number'){return input;}
return null;} 
var defaultLocaleWeekdays='Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');function localeWeekdays(m){return this._weekdays[m.day()];}
var defaultLocaleWeekdaysShort='Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');function localeWeekdaysShort(m){return this._weekdaysShort[m.day()];}
var defaultLocaleWeekdaysMin='Su_Mo_Tu_We_Th_Fr_Sa'.split('_');function localeWeekdaysMin(m){return this._weekdaysMin[m.day()];}
function localeWeekdaysParse(weekdayName){var i,mom,regex;this._weekdaysParse=this._weekdaysParse||[];for(i=0;i<7;i++){ if(!this._weekdaysParse[i]){mom=local__createLocal([2000,1]).day(i);regex='^'+this.weekdays(mom,'')+'|^'+this.weekdaysShort(mom,'')+'|^'+this.weekdaysMin(mom,'');this._weekdaysParse[i]=new RegExp(regex.replace('.',''),'i');} 
if(this._weekdaysParse[i].test(weekdayName)){return i;}}} 
function getSetDayOfWeek(input){var day=this._isUTC?this._d.getUTCDay():this._d.getDay();if(input!=null){input=parseWeekday(input,this.localeData());return this.add(input-day,'d');}else{return day;}}
function getSetLocaleDayOfWeek(input){var weekday=(this.day()+7-this.localeData()._week.dow)%7;return input==null?weekday:this.add(input-weekday,'d');}
function getSetISODayOfWeek(input){

return input==null?this.day()||7:this.day(this.day()%7?input:input-7);}
addFormatToken('H',['HH',2],0,'hour');addFormatToken('h',['hh',2],0,function(){return this.hours()%12||12;});function meridiem(token,lowercase){addFormatToken(token,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),lowercase);});}
meridiem('a',true);meridiem('A',false); addUnitAlias('hour','h'); function matchMeridiem(isStrict,locale){return locale._meridiemParse;}
addRegexToken('a',matchMeridiem);addRegexToken('A',matchMeridiem);addRegexToken('H',match1to2);addRegexToken('h',match1to2);addRegexToken('HH',match1to2,match2);addRegexToken('hh',match1to2,match2);addParseToken(['H','HH'],HOUR);addParseToken(['a','A'],function(input,array,config){config._isPm=config._locale.isPM(input);config._meridiem=input;});addParseToken(['h','hh'],function(input,array,config){array[HOUR]=toInt(input);getParsingFlags(config).bigHour=true;}); function localeIsPM(input){
return((input+'').toLowerCase().charAt(0)==='p');}
var defaultLocaleMeridiemParse=/[ap]\.?m?\.?/i;function localeMeridiem(hours,minutes,isLower){if(hours>11){return isLower?'pm':'PM';}else{return isLower?'am':'AM';}}




var getSetHour=makeGetSet('Hours',true);addFormatToken('m',['mm',2],0,'minute'); addUnitAlias('minute','m'); addRegexToken('m',match1to2);addRegexToken('mm',match1to2,match2);addParseToken(['m','mm'],MINUTE); var getSetMinute=makeGetSet('Minutes',false);addFormatToken('s',['ss',2],0,'second'); addUnitAlias('second','s'); addRegexToken('s',match1to2);addRegexToken('ss',match1to2,match2);addParseToken(['s','ss'],SECOND); var getSetSecond=makeGetSet('Seconds',false);addFormatToken('S',0,0,function(){return~~(this.millisecond()/100);});addFormatToken(0,['SS',2],0,function(){return~~(this.millisecond()/10);});addFormatToken(0,['SSS',3],0,'millisecond');addFormatToken(0,['SSSS',4],0,function(){return this.millisecond()*10;});addFormatToken(0,['SSSSS',5],0,function(){return this.millisecond()*100;});addFormatToken(0,['SSSSSS',6],0,function(){return this.millisecond()*1000;});addFormatToken(0,['SSSSSSS',7],0,function(){return this.millisecond()*10000;});addFormatToken(0,['SSSSSSSS',8],0,function(){return this.millisecond()*100000;});addFormatToken(0,['SSSSSSSSS',9],0,function(){return this.millisecond()*1000000;}); addUnitAlias('millisecond','ms'); addRegexToken('S',match1to3,match1);addRegexToken('SS',match1to3,match2);addRegexToken('SSS',match1to3,match3);var token;for(token='SSSS';token.length<=9;token+='S'){addRegexToken(token,matchUnsigned);}
function parseMs(input,array){array[MILLISECOND]=toInt(('0.'+input)*1000);}
for(token='S';token.length<=9;token+='S'){addParseToken(token,parseMs);} 
var getSetMillisecond=makeGetSet('Milliseconds',false);addFormatToken('z',0,0,'zoneAbbr');addFormatToken('zz',0,0,'zoneName'); function getZoneAbbr(){return this._isUTC?'UTC':'';}
function getZoneName(){return this._isUTC?'Coordinated Universal Time':'';}
var momentPrototype__proto=Moment.prototype;momentPrototype__proto.add=add_subtract__add;momentPrototype__proto.calendar=moment_calendar__calendar;momentPrototype__proto.clone=clone;momentPrototype__proto.diff=diff;momentPrototype__proto.endOf=endOf;momentPrototype__proto.format=format;momentPrototype__proto.from=from;momentPrototype__proto.fromNow=fromNow;momentPrototype__proto.to=to;momentPrototype__proto.toNow=toNow;momentPrototype__proto.get=getSet;momentPrototype__proto.invalidAt=invalidAt;momentPrototype__proto.isAfter=isAfter;momentPrototype__proto.isBefore=isBefore;momentPrototype__proto.isBetween=isBetween;momentPrototype__proto.isSame=isSame;momentPrototype__proto.isValid=moment_valid__isValid;momentPrototype__proto.lang=lang;momentPrototype__proto.locale=locale;momentPrototype__proto.localeData=localeData;momentPrototype__proto.max=prototypeMax;momentPrototype__proto.min=prototypeMin;momentPrototype__proto.parsingFlags=parsingFlags;momentPrototype__proto.set=getSet;momentPrototype__proto.startOf=startOf;momentPrototype__proto.subtract=add_subtract__subtract;momentPrototype__proto.toArray=toArray;momentPrototype__proto.toObject=toObject;momentPrototype__proto.toDate=toDate;momentPrototype__proto.toISOString=moment_format__toISOString;momentPrototype__proto.toJSON=moment_format__toISOString;momentPrototype__proto.toString=toString;momentPrototype__proto.unix=unix;momentPrototype__proto.valueOf=to_type__valueOf; momentPrototype__proto.year=getSetYear;momentPrototype__proto.isLeapYear=getIsLeapYear; momentPrototype__proto.weekYear=getSetWeekYear;momentPrototype__proto.isoWeekYear=getSetISOWeekYear; momentPrototype__proto.quarter=momentPrototype__proto.quarters=getSetQuarter; momentPrototype__proto.month=getSetMonth;momentPrototype__proto.daysInMonth=getDaysInMonth; momentPrototype__proto.week=momentPrototype__proto.weeks=getSetWeek;momentPrototype__proto.isoWeek=momentPrototype__proto.isoWeeks=getSetISOWeek;momentPrototype__proto.weeksInYear=getWeeksInYear;momentPrototype__proto.isoWeeksInYear=getISOWeeksInYear; momentPrototype__proto.date=getSetDayOfMonth;momentPrototype__proto.day=momentPrototype__proto.days=getSetDayOfWeek;momentPrototype__proto.weekday=getSetLocaleDayOfWeek;momentPrototype__proto.isoWeekday=getSetISODayOfWeek;momentPrototype__proto.dayOfYear=getSetDayOfYear; momentPrototype__proto.hour=momentPrototype__proto.hours=getSetHour; momentPrototype__proto.minute=momentPrototype__proto.minutes=getSetMinute; momentPrototype__proto.second=momentPrototype__proto.seconds=getSetSecond; momentPrototype__proto.millisecond=momentPrototype__proto.milliseconds=getSetMillisecond; momentPrototype__proto.utcOffset=getSetOffset;momentPrototype__proto.utc=setOffsetToUTC;momentPrototype__proto.local=setOffsetToLocal;momentPrototype__proto.parseZone=setOffsetToParsedOffset;momentPrototype__proto.hasAlignedHourOffset=hasAlignedHourOffset;momentPrototype__proto.isDST=isDaylightSavingTime;momentPrototype__proto.isDSTShifted=isDaylightSavingTimeShifted;momentPrototype__proto.isLocal=isLocal;momentPrototype__proto.isUtcOffset=isUtcOffset;momentPrototype__proto.isUtc=isUtc;momentPrototype__proto.isUTC=isUtc; momentPrototype__proto.zoneAbbr=getZoneAbbr;momentPrototype__proto.zoneName=getZoneName; momentPrototype__proto.dates=deprecate('dates accessor is deprecated. Use date instead.',getSetDayOfMonth);momentPrototype__proto.months=deprecate('months accessor is deprecated. Use month instead',getSetMonth);momentPrototype__proto.years=deprecate('years accessor is deprecated. Use year instead',getSetYear);momentPrototype__proto.zone=deprecate('moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779',getSetZone);var momentPrototype=momentPrototype__proto;function moment__createUnix(input){return local__createLocal(input*1000);}
function moment__createInZone(){return local__createLocal.apply(null,arguments).parseZone();}
var defaultCalendar={sameDay:'[Today at] LT',nextDay:'[Tomorrow at] LT',nextWeek:'dddd [at] LT',lastDay:'[Yesterday at] LT',lastWeek:'[Last] dddd [at] LT',sameElse:'L'};function locale_calendar__calendar(key,mom,now){var output=this._calendar[key];return typeof output==='function'?output.call(mom,now):output;}
var defaultLongDateFormat={LTS:'h:mm:ss A',LT:'h:mm A',L:'MM/DD/YYYY',LL:'MMMM D, YYYY',LLL:'MMMM D, YYYY h:mm A',LLLL:'dddd, MMMM D, YYYY h:mm A'};function longDateFormat(key){var format=this._longDateFormat[key],formatUpper=this._longDateFormat[key.toUpperCase()];if(format||!formatUpper){return format;}
this._longDateFormat[key]=formatUpper.replace(/MMMM|MM|DD|dddd/g,function(val){return val.slice(1);});return this._longDateFormat[key];}
var defaultInvalidDate='Invalid date';function invalidDate(){return this._invalidDate;}
var defaultOrdinal='%d';var defaultOrdinalParse=/\d{1,2}/;function ordinal(number){return this._ordinal.replace('%d',number);}
function preParsePostFormat(string){return string;}
var defaultRelativeTime={future:'in %s',past:'%s ago',s:'a few seconds',m:'a minute',mm:'%d minutes',h:'an hour',hh:'%d hours',d:'a day',dd:'%d days',M:'a month',MM:'%d months',y:'a year',yy:'%d years'};function relative__relativeTime(number,withoutSuffix,string,isFuture){var output=this._relativeTime[string];return(typeof output==='function')?output(number,withoutSuffix,string,isFuture):output.replace(/%d/i,number);}
function pastFuture(diff,output){var format=this._relativeTime[diff>0?'future':'past'];return typeof format==='function'?format(output):format.replace(/%s/i,output);}
function locale_set__set(config){var prop,i;for(i in config){prop=config[i];if(typeof prop==='function'){this[i]=prop;}else{this['_'+i]=prop;}}

this._ordinalParseLenient=new RegExp(this._ordinalParse.source+'|'+(/\d{1,2}/).source);}
var prototype__proto=Locale.prototype;prototype__proto._calendar=defaultCalendar;prototype__proto.calendar=locale_calendar__calendar;prototype__proto._longDateFormat=defaultLongDateFormat;prototype__proto.longDateFormat=longDateFormat;prototype__proto._invalidDate=defaultInvalidDate;prototype__proto.invalidDate=invalidDate;prototype__proto._ordinal=defaultOrdinal;prototype__proto.ordinal=ordinal;prototype__proto._ordinalParse=defaultOrdinalParse;prototype__proto.preparse=preParsePostFormat;prototype__proto.postformat=preParsePostFormat;prototype__proto._relativeTime=defaultRelativeTime;prototype__proto.relativeTime=relative__relativeTime;prototype__proto.pastFuture=pastFuture;prototype__proto.set=locale_set__set; prototype__proto.months=localeMonths;prototype__proto._months=defaultLocaleMonths;prototype__proto.monthsShort=localeMonthsShort;prototype__proto._monthsShort=defaultLocaleMonthsShort;prototype__proto.monthsParse=localeMonthsParse; prototype__proto.week=localeWeek;prototype__proto._week=defaultLocaleWeek;prototype__proto.firstDayOfYear=localeFirstDayOfYear;prototype__proto.firstDayOfWeek=localeFirstDayOfWeek; prototype__proto.weekdays=localeWeekdays;prototype__proto._weekdays=defaultLocaleWeekdays;prototype__proto.weekdaysMin=localeWeekdaysMin;prototype__proto._weekdaysMin=defaultLocaleWeekdaysMin;prototype__proto.weekdaysShort=localeWeekdaysShort;prototype__proto._weekdaysShort=defaultLocaleWeekdaysShort;prototype__proto.weekdaysParse=localeWeekdaysParse; prototype__proto.isPM=localeIsPM;prototype__proto._meridiemParse=defaultLocaleMeridiemParse;prototype__proto.meridiem=localeMeridiem;function lists__get(format,index,field,setter){var locale=locale_locales__getLocale();var utc=create_utc__createUTC().set(setter,index);return locale[field](utc,format);}
function list(format,index,field,count,setter){if(typeof format==='number'){index=format;format=undefined;}
format=format||'';if(index!=null){return lists__get(format,index,field,setter);}
var i;var out=[];for(i=0;i<count;i++){out[i]=lists__get(format,i,field,setter);}
return out;}
function lists__listMonths(format,index){return list(format,index,'months',12,'month');}
function lists__listMonthsShort(format,index){return list(format,index,'monthsShort',12,'month');}
function lists__listWeekdays(format,index){return list(format,index,'weekdays',7,'day');}
function lists__listWeekdaysShort(format,index){return list(format,index,'weekdaysShort',7,'day');}
function lists__listWeekdaysMin(format,index){return list(format,index,'weekdaysMin',7,'day');}
locale_locales__getSetGlobalLocale('en',{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(number){var b=number%10,output=(toInt(number%100/10)===1)?'th':(b===1)?'st':(b===2)?'nd':(b===3)?'rd':'th';return number+output;}}); utils_hooks__hooks.lang=deprecate('moment.lang is deprecated. Use moment.locale instead.',locale_locales__getSetGlobalLocale);utils_hooks__hooks.langData=deprecate('moment.langData is deprecated. Use moment.localeData instead.',locale_locales__getLocale);var mathAbs=Math.abs;function duration_abs__abs(){var data=this._data;this._milliseconds=mathAbs(this._milliseconds);this._days=mathAbs(this._days);this._months=mathAbs(this._months);data.milliseconds=mathAbs(data.milliseconds);data.seconds=mathAbs(data.seconds);data.minutes=mathAbs(data.minutes);data.hours=mathAbs(data.hours);data.months=mathAbs(data.months);data.years=mathAbs(data.years);return this;}
function duration_add_subtract__addSubtract(duration,input,value,direction){var other=create__createDuration(input,value);duration._milliseconds+=direction*other._milliseconds;duration._days+=direction*other._days;duration._months+=direction*other._months;return duration._bubble();}
function duration_add_subtract__add(input,value){return duration_add_subtract__addSubtract(this,input,value,1);}
function duration_add_subtract__subtract(input,value){return duration_add_subtract__addSubtract(this,input,value,-1);}
function absCeil(number){if(number<0){return Math.floor(number);}else{return Math.ceil(number);}}
function bubble(){var milliseconds=this._milliseconds;var days=this._days;var months=this._months;var data=this._data;var seconds,minutes,hours,years,monthsFromDays;
 if(!((milliseconds>=0&&days>=0&&months>=0)||(milliseconds<=0&&days<=0&&months<=0))){milliseconds+=absCeil(monthsToDays(months)+days)*864e5;days=0;months=0;}

data.milliseconds=milliseconds%1000;seconds=absFloor(milliseconds/1000);data.seconds=seconds%60;minutes=absFloor(seconds/60);data.minutes=minutes%60;hours=absFloor(minutes/60);data.hours=hours%24;days+=absFloor(hours/24); monthsFromDays=absFloor(daysToMonths(days));months+=monthsFromDays;days-=absCeil(monthsToDays(monthsFromDays)); years=absFloor(months/12);months%=12;data.days=days;data.months=months;data.years=years;return this;}
function daysToMonths(days){ 
return days*4800 / 146097;
    }

    function monthsToDays (months) {
        // the reverse of daysToMonths
        return months * 146097 /4800;}
function as(units){var days;var months;var milliseconds=this._milliseconds;units=normalizeUnits(units);if(units==='month'||units==='year'){days=this._days+milliseconds/864e5;months=this._months+daysToMonths(days);return units==='month'?months:months/12;}else{days=this._days+Math.round(monthsToDays(this._months));switch(units){case'week':return days / 7     + milliseconds /6048e5;case'day':return days+milliseconds/864e5;case'hour':return days*24+milliseconds/36e5;case'minute':return days*1440+milliseconds/6e4;case'second':return days*86400+milliseconds/1000; case'millisecond':return Math.floor(days*864e5)+milliseconds;default:throw new Error('Unknown unit '+units);}}}
function duration_as__valueOf(){return(this._milliseconds+
this._days*864e5+
(this._months%12)*2592e6+
toInt(this._months/12)*31536e6);}
function makeAs(alias){return function(){return this.as(alias);};}
var asMilliseconds=makeAs('ms');var asSeconds=makeAs('s');var asMinutes=makeAs('m');var asHours=makeAs('h');var asDays=makeAs('d');var asWeeks=makeAs('w');var asMonths=makeAs('M');var asYears=makeAs('y');function duration_get__get(units){units=normalizeUnits(units);return this[units+'s']();}
function makeGetter(name){return function(){return this._data[name];};}
var milliseconds=makeGetter('milliseconds');var seconds=makeGetter('seconds');var minutes=makeGetter('minutes');var hours=makeGetter('hours');var days=makeGetter('days');var months=makeGetter('months');var years=makeGetter('years');function weeks(){return absFloor(this.days()/7);}
var round=Math.round;var thresholds={s:45, m:45, h:22, d:26, M:11
}; function substituteTimeAgo(string,number,withoutSuffix,isFuture,locale){return locale.relativeTime(number||1,!!withoutSuffix,string,isFuture);}
function duration_humanize__relativeTime(posNegDuration,withoutSuffix,locale){var duration=create__createDuration(posNegDuration).abs();var seconds=round(duration.as('s'));var minutes=round(duration.as('m'));var hours=round(duration.as('h'));var days=round(duration.as('d'));var months=round(duration.as('M'));var years=round(duration.as('y'));var a=seconds<thresholds.s&&['s',seconds]||minutes===1&&['m']||minutes<thresholds.m&&['mm',minutes]||hours===1&&['h']||hours<thresholds.h&&['hh',hours]||days===1&&['d']||days<thresholds.d&&['dd',days]||months===1&&['M']||months<thresholds.M&&['MM',months]||years===1&&['y']||['yy',years];a[2]=withoutSuffix;a[3]=+posNegDuration>0;a[4]=locale;return substituteTimeAgo.apply(null,a);} 
function duration_humanize__getSetRelativeTimeThreshold(threshold,limit){if(thresholds[threshold]===undefined){return false;}
if(limit===undefined){return thresholds[threshold];}
thresholds[threshold]=limit;return true;}
function humanize(withSuffix){var locale=this.localeData();var output=duration_humanize__relativeTime(this,!withSuffix,locale);if(withSuffix){output=locale.pastFuture(+this,output);}
return locale.postformat(output);}
var iso_string__abs=Math.abs;function iso_string__toISOString(){




var seconds=iso_string__abs(this._milliseconds)/1000;var days=iso_string__abs(this._days);var months=iso_string__abs(this._months);var minutes,hours,years; minutes=absFloor(seconds/60);hours=absFloor(minutes/60);seconds%=60;minutes%=60; years=absFloor(months/12);months%=12; var Y=years;var M=months;var D=days;var h=hours;var m=minutes;var s=seconds;var total=this.asSeconds();if(!total){return'P0D';}
return(total<0?'-':'')+'P'+
(Y?Y+'Y':'')+
(M?M+'M':'')+
(D?D+'D':'')+
((h||m||s)?'T':'')+
(h?h+'H':'')+
(m?m+'M':'')+
(s?s+'S':'');}
var duration_prototype__proto=Duration.prototype;duration_prototype__proto.abs=duration_abs__abs;duration_prototype__proto.add=duration_add_subtract__add;duration_prototype__proto.subtract=duration_add_subtract__subtract;duration_prototype__proto.as=as;duration_prototype__proto.asMilliseconds=asMilliseconds;duration_prototype__proto.asSeconds=asSeconds;duration_prototype__proto.asMinutes=asMinutes;duration_prototype__proto.asHours=asHours;duration_prototype__proto.asDays=asDays;duration_prototype__proto.asWeeks=asWeeks;duration_prototype__proto.asMonths=asMonths;duration_prototype__proto.asYears=asYears;duration_prototype__proto.valueOf=duration_as__valueOf;duration_prototype__proto._bubble=bubble;duration_prototype__proto.get=duration_get__get;duration_prototype__proto.milliseconds=milliseconds;duration_prototype__proto.seconds=seconds;duration_prototype__proto.minutes=minutes;duration_prototype__proto.hours=hours;duration_prototype__proto.days=days;duration_prototype__proto.weeks=weeks;duration_prototype__proto.months=months;duration_prototype__proto.years=years;duration_prototype__proto.humanize=humanize;duration_prototype__proto.toISOString=iso_string__toISOString;duration_prototype__proto.toString=iso_string__toISOString;duration_prototype__proto.toJSON=iso_string__toISOString;duration_prototype__proto.locale=locale;duration_prototype__proto.localeData=localeData; duration_prototype__proto.toIsoString=deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',iso_string__toISOString);duration_prototype__proto.lang=lang; addFormatToken('X',0,0,'unix');addFormatToken('x',0,0,'valueOf'); addRegexToken('x',matchSigned);addRegexToken('X',matchTimestamp);addParseToken('X',function(input,array,config){config._d=new Date(parseFloat(input,10)*1000);});addParseToken('x',function(input,array,config){config._d=new Date(toInt(input));}); utils_hooks__hooks.version='2.10.6';setHookCallback(local__createLocal);utils_hooks__hooks.fn=momentPrototype;utils_hooks__hooks.min=min;utils_hooks__hooks.max=max;utils_hooks__hooks.utc=create_utc__createUTC;utils_hooks__hooks.unix=moment__createUnix;utils_hooks__hooks.months=lists__listMonths;utils_hooks__hooks.isDate=isDate;utils_hooks__hooks.locale=locale_locales__getSetGlobalLocale;utils_hooks__hooks.invalid=valid__createInvalid;utils_hooks__hooks.duration=create__createDuration;utils_hooks__hooks.isMoment=isMoment;utils_hooks__hooks.weekdays=lists__listWeekdays;utils_hooks__hooks.parseZone=moment__createInZone;utils_hooks__hooks.localeData=locale_locales__getLocale;utils_hooks__hooks.isDuration=isDuration;utils_hooks__hooks.monthsShort=lists__listMonthsShort;utils_hooks__hooks.weekdaysMin=lists__listWeekdaysMin;utils_hooks__hooks.defineLocale=defineLocale;utils_hooks__hooks.weekdaysShort=lists__listWeekdaysShort;utils_hooks__hooks.normalizeUnits=normalizeUnits;utils_hooks__hooks.relativeTimeThreshold=duration_humanize__getSetRelativeTimeThreshold;var _moment=utils_hooks__hooks;return _moment;}));

(function(factory){var root=(typeof self=='object'&&self.self==self&&self)||(typeof global=='object'&&global.global==global&&global);if(typeof define==='function'&&define.amd){define(['underscore','jquery','exports'],function(_,$,exports){
root.Backbone=factory(root,exports,_,$);});}else if(typeof exports!=='undefined'){var _=require('underscore'),$;try{$=require('jquery');}catch(e){}
factory(root,exports,_,$);}else{root.Backbone=factory(root,{},root._,(root.jQuery||root.Zepto||root.ender||root.$));}}(function(root,Backbone,_,$){

var previousBackbone=root.Backbone;var slice=Array.prototype.slice;Backbone.VERSION='1.2.3';
Backbone.$=$;
Backbone.noConflict=function(){root.Backbone=previousBackbone;return this;};

Backbone.emulateHTTP=false;


Backbone.emulateJSON=false;
var addMethod=function(length,method,attribute){switch(length){case 1:return function(){return _[method](this[attribute]);};case 2:return function(value){return _[method](this[attribute],value);};case 3:return function(iteratee,context){return _[method](this[attribute],cb(iteratee,this),context);};case 4:return function(iteratee,defaultVal,context){return _[method](this[attribute],cb(iteratee,this),defaultVal,context);};default:return function(){var args=slice.call(arguments);args.unshift(this[attribute]);return _[method].apply(_,args);};}};var addUnderscoreMethods=function(Class,methods,attribute){_.each(methods,function(length,method){if(_[method])Class.prototype[method]=addMethod(length,method,attribute);});};var cb=function(iteratee,instance){if(_.isFunction(iteratee))return iteratee;if(_.isObject(iteratee)&&!instance._isModel(iteratee))return modelMatcher(iteratee);if(_.isString(iteratee))return function(model){return model.get(iteratee);};return iteratee;};var modelMatcher=function(attrs){var matcher=_.matches(attrs);return function(model){return matcher(model.attributes);};};



var Events=Backbone.Events={};var eventSplitter=/\s+/;

var eventsApi=function(iteratee,events,name,callback,opts){var i=0,names;if(name&&typeof name==='object'){if(callback!==void 0&&'context'in opts&&opts.context===void 0)opts.context=callback;for(names=_.keys(name);i<names.length;i++){events=eventsApi(iteratee,events,names[i],name[names[i]],opts);}}else if(name&&eventSplitter.test(name)){for(names=name.split(eventSplitter);i<names.length;i++){events=iteratee(events,names[i],callback,opts);}}else{events=iteratee(events,name,callback,opts);}
return events;};
Events.on=function(name,callback,context){return internalOn(this,name,callback,context);};var internalOn=function(obj,name,callback,context,listening){obj._events=eventsApi(onApi,obj._events||{},name,callback,{context:context,ctx:obj,listening:listening});if(listening){var listeners=obj._listeners||(obj._listeners={});listeners[listening.id]=listening;}
return obj;};  
 
Events.listenTo=function(obj,name,callback){if(!obj)return this;var id=obj._listenId||(obj._listenId=_.uniqueId('l'));var listeningTo=this._listeningTo||(this._listeningTo={});var listening=listeningTo[id];if(!listening){var thisId=this._listenId||(this._listenId=_.uniqueId('l'));listening=listeningTo[id]={obj:obj,objId:id,id:thisId,listeningTo:listeningTo,count:0};}
internalOn(obj,name,callback,this,listening);return this;};var onApi=function(events,name,callback,options){if(callback){var handlers=events[name]||(events[name]=[]);var context=options.context,ctx=options.ctx,listening=options.listening;if(listening)listening.count++;handlers.push({callback:callback,context:context,ctx:context||ctx,listening:listening});}
return events;};


Events.off=function(name,callback,context){if(!this._events)return this;this._events=eventsApi(offApi,this._events,name,callback,{context:context,listeners:this._listeners});return this;};
Events.stopListening=function(obj,name,callback){var listeningTo=this._listeningTo;if(!listeningTo)return this;var ids=obj?[obj._listenId]:_.keys(listeningTo);for(var i=0;i<ids.length;i++){var listening=listeningTo[ids[i]];
if(!listening)break;listening.obj.off(name,callback,this);}
if(_.isEmpty(listeningTo))this._listeningTo=void 0;return this;};var offApi=function(events,name,callback,options){if(!events)return;var i=0,listening;var context=options.context,listeners=options.listeners;if(!name&&!callback&&!context){var ids=_.keys(listeners);for(;i<ids.length;i++){listening=listeners[ids[i]];delete listeners[listening.id];delete listening.listeningTo[listening.objId];}
return;}
var names=name?[name]:_.keys(events);for(;i<names.length;i++){name=names[i];var handlers=events[name];if(!handlers)break;var remaining=[];for(var j=0;j<handlers.length;j++){var handler=handlers[j];if(callback&&callback!==handler.callback&&callback!==handler.callback._callback||context&&context!==handler.context){remaining.push(handler);}else{listening=handler.listening;if(listening&&--listening.count===0){delete listeners[listening.id];delete listening.listeningTo[listening.objId];}}}
if(remaining.length){events[name]=remaining;}else{delete events[name];}}
if(_.size(events))return events;};


Events.once=function(name,callback,context){var events=eventsApi(onceMap,{},name,callback,_.bind(this.off,this));return this.on(events,void 0,context);};Events.listenToOnce=function(obj,name,callback){var events=eventsApi(onceMap,{},name,callback,_.bind(this.stopListening,this,obj));return this.listenTo(obj,events);};var onceMap=function(map,name,callback,offer){if(callback){var once=map[name]=_.once(function(){offer(name,once);callback.apply(this,arguments);});once._callback=callback;}
return map;};  
 
 
Events.trigger=function(name){if(!this._events)return this;var length=Math.max(0,arguments.length-1);var args=Array(length);for(var i=0;i<length;i++)args[i]=arguments[i+1];eventsApi(triggerApi,this._events,name,void 0,args);return this;};var triggerApi=function(objEvents,name,cb,args){if(objEvents){var events=objEvents[name];var allEvents=objEvents.all;if(events&&allEvents)allEvents=allEvents.slice();if(events)triggerEvents(events,args);if(allEvents)triggerEvents(allEvents,[name].concat(args));}
return objEvents;};

var triggerEvents=function(events,args){var ev,i=-1,l=events.length,a1=args[0],a2=args[1],a3=args[2];switch(args.length){case 0:while(++i<l)(ev=events[i]).callback.call(ev.ctx);return;case 1:while(++i<l)(ev=events[i]).callback.call(ev.ctx,a1);return;case 2:while(++i<l)(ev=events[i]).callback.call(ev.ctx,a1,a2);return;case 3:while(++i<l)(ev=events[i]).callback.call(ev.ctx,a1,a2,a3);return;default:while(++i<l)(ev=events[i]).callback.apply(ev.ctx,args);return;}}; Events.bind=Events.on;Events.unbind=Events.off;
_.extend(Backbone,Events);


var Model=Backbone.Model=function(attributes,options){var attrs=attributes||{};options||(options={});this.cid=_.uniqueId(this.cidPrefix);this.attributes={};if(options.collection)this.collection=options.collection;if(options.parse)attrs=this.parse(attrs,options)||{};attrs=_.defaults({},attrs,_.result(this,'defaults'));this.set(attrs,options);this.changed={};this.initialize.apply(this,arguments);};_.extend(Model.prototype,Events,{changed:null,validationError:null,
idAttribute:'id',cidPrefix:'c',
initialize:function(){},toJSON:function(options){return _.clone(this.attributes);},
sync:function(){return Backbone.sync.apply(this,arguments);},get:function(attr){return this.attributes[attr];},escape:function(attr){return _.escape(this.get(attr));},
has:function(attr){return this.get(attr)!=null;},matches:function(attrs){return!!_.iteratee(attrs,this)(this.attributes);},

set:function(key,val,options){if(key==null)return this;var attrs;if(typeof key==='object'){attrs=key;options=val;}else{(attrs={})[key]=val;}
options||(options={});if(!this._validate(attrs,options))return false;var unset=options.unset;var silent=options.silent;var changes=[];var changing=this._changing;this._changing=true;if(!changing){this._previousAttributes=_.clone(this.attributes);this.changed={};}
var current=this.attributes;var changed=this.changed;var prev=this._previousAttributes;for(var attr in attrs){val=attrs[attr];if(!_.isEqual(current[attr],val))changes.push(attr);if(!_.isEqual(prev[attr],val)){changed[attr]=val;}else{delete changed[attr];}
unset?delete current[attr]:current[attr]=val;}
this.id=this.get(this.idAttribute);if(!silent){if(changes.length)this._pending=options;for(var i=0;i<changes.length;i++){this.trigger('change:'+changes[i],this,current[changes[i]],options);}}

if(changing)return this;if(!silent){while(this._pending){options=this._pending;this._pending=false;this.trigger('change',this,options);}}
this._pending=false;this._changing=false;return this;},
unset:function(attr,options){return this.set(attr,void 0,_.extend({},options,{unset:true}));},clear:function(options){var attrs={};for(var key in this.attributes)attrs[key]=void 0;return this.set(attrs,_.extend({},options,{unset:true}));},hasChanged:function(attr){if(attr==null)return!_.isEmpty(this.changed);return _.has(this.changed,attr);},


changedAttributes:function(diff){if(!diff)return this.hasChanged()?_.clone(this.changed):false;var old=this._changing?this._previousAttributes:this.attributes;var changed={};for(var attr in diff){var val=diff[attr];if(_.isEqual(old[attr],val))continue;changed[attr]=val;}
return _.size(changed)?changed:false;},
previous:function(attr){if(attr==null||!this._previousAttributes)return null;return this._previousAttributes[attr];},
previousAttributes:function(){return _.clone(this._previousAttributes);},
fetch:function(options){options=_.extend({parse:true},options);var model=this;var success=options.success;options.success=function(resp){var serverAttrs=options.parse?model.parse(resp,options):resp;if(!model.set(serverAttrs,options))return false;if(success)success.call(options.context,model,resp,options);model.trigger('sync',model,resp,options);};wrapError(this,options);return this.sync('read',this,options);},
save:function(key,val,options){var attrs;if(key==null||typeof key==='object'){attrs=key;options=val;}else{(attrs={})[key]=val;}
options=_.extend({validate:true,parse:true},options);var wait=options.wait;

if(attrs&&!wait){if(!this.set(attrs,options))return false;}else{if(!this._validate(attrs,options))return false;}
var model=this;var success=options.success;var attributes=this.attributes;options.success=function(resp){model.attributes=attributes;var serverAttrs=options.parse?model.parse(resp,options):resp;if(wait)serverAttrs=_.extend({},attrs,serverAttrs);if(serverAttrs&&!model.set(serverAttrs,options))return false;if(success)success.call(options.context,model,resp,options);model.trigger('sync',model,resp,options);};wrapError(this,options);if(attrs&&wait)this.attributes=_.extend({},attributes,attrs);var method=this.isNew()?'create':(options.patch?'patch':'update');if(method==='patch'&&!options.attrs)options.attrs=attrs;var xhr=this.sync(method,this,options);this.attributes=attributes;return xhr;},destroy:function(options){options=options?_.clone(options):{};var model=this;var success=options.success;var wait=options.wait;var destroy=function(){model.stopListening();model.trigger('destroy',model,model.collection,options);};options.success=function(resp){if(wait)destroy();if(success)success.call(options.context,model,resp,options);if(!model.isNew())model.trigger('sync',model,resp,options);};var xhr=false;if(this.isNew()){_.defer(options.success);}else{wrapError(this,options);xhr=this.sync('delete',this,options);}
if(!wait)destroy();return xhr;},

url:function(){var base=_.result(this,'urlRoot')||_.result(this.collection,'url')||urlError();if(this.isNew())return base;var id=this.get(this.idAttribute);return base.replace(/[^\/]$/,'$&/')+encodeURIComponent(id);},
parse:function(resp,options){return resp;},clone:function(){return new this.constructor(this.attributes);},isNew:function(){return!this.has(this.idAttribute);},isValid:function(options){return this._validate({},_.defaults({validate:true},options));},_validate:function(attrs,options){if(!options.validate||!this.validate)return true;attrs=_.extend({},this.attributes,attrs);var error=this.validationError=this.validate(attrs,options)||null;if(!error)return true;this.trigger('invalid',this,error,_.extend(options,{validationError:error}));return false;}});
var modelMethods={keys:1,values:1,pairs:1,invert:1,pick:0,omit:0,chain:1,isEmpty:1};addUnderscoreMethods(Model,modelMethods,'attributes');






var Collection=Backbone.Collection=function(models,options){options||(options={});if(options.model)this.model=options.model;if(options.comparator!==void 0)this.comparator=options.comparator;this._reset();this.initialize.apply(this,arguments);if(models)this.reset(models,_.extend({silent:true},options));};var setOptions={add:true,remove:true,merge:true};var addOptions={add:true,remove:false};var splice=function(array,insert,at){at=Math.min(Math.max(at,0),array.length);var tail=Array(array.length-at);var length=insert.length;for(var i=0;i<tail.length;i++)tail[i]=array[i+at];for(i=0;i<length;i++)array[i+at]=insert[i];for(i=0;i<tail.length;i++)array[i+length+at]=tail[i];};_.extend(Collection.prototype,Events,{model:Model,
initialize:function(){},
toJSON:function(options){return this.map(function(model){return model.toJSON(options);});},sync:function(){return Backbone.sync.apply(this,arguments);},

add:function(models,options){return this.set(models,_.extend({merge:false},options,addOptions));},remove:function(models,options){options=_.extend({},options);var singular=!_.isArray(models);models=singular?[models]:_.clone(models);var removed=this._removeModels(models,options);if(!options.silent&&removed)this.trigger('update',this,options);return singular?removed[0]:removed;},
set:function(models,options){if(models==null)return;options=_.defaults({},options,setOptions);if(options.parse&&!this._isModel(models))models=this.parse(models,options);var singular=!_.isArray(models);models=singular?[models]:models.slice();var at=options.at;if(at!=null)at=+at;if(at<0)at+=this.length+1;var set=[];var toAdd=[];var toRemove=[];var modelMap={};var add=options.add;var merge=options.merge;var remove=options.remove;var sort=false;var sortable=this.comparator&&(at==null)&&options.sort!==false;var sortAttr=_.isString(this.comparator)?this.comparator:null;
var model;for(var i=0;i<models.length;i++){model=models[i];
var existing=this.get(model);if(existing){if(merge&&model!==existing){var attrs=this._isModel(model)?model.attributes:model;if(options.parse)attrs=existing.parse(attrs,options);existing.set(attrs,options);if(sortable&&!sort)sort=existing.hasChanged(sortAttr);}
if(!modelMap[existing.cid]){modelMap[existing.cid]=true;set.push(existing);}
models[i]=existing;}else if(add){model=models[i]=this._prepareModel(model,options);if(model){toAdd.push(model);this._addReference(model,options);modelMap[model.cid]=true;set.push(model);}}}
if(remove){for(i=0;i<this.length;i++){model=this.models[i];if(!modelMap[model.cid])toRemove.push(model);}
if(toRemove.length)this._removeModels(toRemove,options);}
var orderChanged=false;var replace=!sortable&&add&&remove;if(set.length&&replace){orderChanged=this.length!=set.length||_.some(this.models,function(model,index){return model!==set[index];});this.models.length=0;splice(this.models,set,0);this.length=this.models.length;}else if(toAdd.length){if(sortable)sort=true;splice(this.models,toAdd,at==null?this.length:at);this.length=this.models.length;}
if(sort)this.sort({silent:true});if(!options.silent){for(i=0;i<toAdd.length;i++){if(at!=null)options.index=at+i;model=toAdd[i];model.trigger('add',model,this,options);}
if(sort||orderChanged)this.trigger('sort',this,options);if(toAdd.length||toRemove.length)this.trigger('update',this,options);}
return singular?models[0]:models;},
reset:function(models,options){options=options?_.clone(options):{};for(var i=0;i<this.models.length;i++){this._removeReference(this.models[i],options);}
options.previousModels=this.models;this._reset();models=this.add(models,_.extend({silent:true},options));if(!options.silent)this.trigger('reset',this,options);return models;},push:function(model,options){return this.add(model,_.extend({at:this.length},options));},pop:function(options){var model=this.at(this.length-1);return this.remove(model,options);},unshift:function(model,options){return this.add(model,_.extend({at:0},options));},shift:function(options){var model=this.at(0);return this.remove(model,options);},slice:function(){return slice.apply(this.models,arguments);},get:function(obj){if(obj==null)return void 0;var id=this.modelId(this._isModel(obj)?obj.attributes:obj);return this._byId[obj]||this._byId[id]||this._byId[obj.cid];},at:function(index){if(index<0)index+=this.length;return this.models[index];},
where:function(attrs,first){return this[first?'find':'filter'](attrs);},
findWhere:function(attrs){return this.where(attrs,true);},

sort:function(options){var comparator=this.comparator;if(!comparator)throw new Error('Cannot sort a set without a comparator');options||(options={});var length=comparator.length;if(_.isFunction(comparator))comparator=_.bind(comparator,this);if(length===1||_.isString(comparator)){this.models=this.sortBy(comparator);}else{this.models.sort(comparator);}
if(!options.silent)this.trigger('sort',this,options);return this;},pluck:function(attr){return _.invoke(this.models,'get',attr);},

fetch:function(options){options=_.extend({parse:true},options);var success=options.success;var collection=this;options.success=function(resp){var method=options.reset?'reset':'set';collection[method](resp,options);if(success)success.call(options.context,collection,resp,options);collection.trigger('sync',collection,resp,options);};wrapError(this,options);return this.sync('read',this,options);},

create:function(model,options){options=options?_.clone(options):{};var wait=options.wait;model=this._prepareModel(model,options);if(!model)return false;if(!wait)this.add(model,options);var collection=this;var success=options.success;options.success=function(model,resp,callbackOpts){if(wait)collection.add(model,callbackOpts);if(success)success.call(callbackOpts.context,model,resp,callbackOpts);};model.save(null,options);return model;},
parse:function(resp,options){return resp;},clone:function(){return new this.constructor(this.models,{model:this.model,comparator:this.comparator});},modelId:function(attrs){return attrs[this.model.prototype.idAttribute||'id'];},
_reset:function(){this.length=0;this.models=[];this._byId={};},
_prepareModel:function(attrs,options){if(this._isModel(attrs)){if(!attrs.collection)attrs.collection=this;return attrs;}
options=options?_.clone(options):{};options.collection=this;var model=new this.model(attrs,options);if(!model.validationError)return model;this.trigger('invalid',this,model.validationError,options);return false;},_removeModels:function(models,options){var removed=[];for(var i=0;i<models.length;i++){var model=this.get(models[i]);if(!model)continue;var index=this.indexOf(model);this.models.splice(index,1);this.length--;if(!options.silent){options.index=index;model.trigger('remove',model,this,options);}
removed.push(model);this._removeReference(model,options);}
return removed.length?removed:false;},
_isModel:function(model){return model instanceof Model;},_addReference:function(model,options){this._byId[model.cid]=model;var id=this.modelId(model.attributes);if(id!=null)this._byId[id]=model;model.on('all',this._onModelEvent,this);},_removeReference:function(model,options){delete this._byId[model.cid];var id=this.modelId(model.attributes);if(id!=null)delete this._byId[id];if(this===model.collection)delete model.collection;model.off('all',this._onModelEvent,this);},

_onModelEvent:function(event,model,collection,options){if((event==='add'||event==='remove')&&collection!==this)return;if(event==='destroy')this.remove(model,options);if(event==='change'){var prevId=this.modelId(model.previousAttributes());var id=this.modelId(model.attributes);if(prevId!==id){if(prevId!=null)delete this._byId[prevId];if(id!=null)this._byId[id]=model;}}
this.trigger.apply(this,arguments);}});
var collectionMethods={forEach:3,each:3,map:3,collect:3,reduce:4,foldl:4,inject:4,reduceRight:4,foldr:4,find:3,detect:3,filter:3,select:3,reject:3,every:3,all:3,some:3,any:3,include:3,includes:3,contains:3,invoke:0,max:3,min:3,toArray:1,size:1,first:3,head:3,take:3,initial:3,rest:3,tail:3,drop:3,last:3,without:0,difference:0,indexOf:3,shuffle:1,lastIndexOf:3,isEmpty:1,chain:1,sample:3,partition:3,groupBy:3,countBy:3,sortBy:3,indexBy:3};addUnderscoreMethods(Collection,collectionMethods,'models');






var View=Backbone.View=function(options){this.cid=_.uniqueId('view');_.extend(this,_.pick(options,viewOptions));this._ensureElement();this.initialize.apply(this,arguments);};var delegateEventSplitter=/^(\S+)\s*(.*)$/;var viewOptions=['model','collection','el','id','attributes','className','tagName','events'];_.extend(View.prototype,Events,{tagName:'div',
$:function(selector){return this.$el.find(selector);},
initialize:function(){},

render:function(){return this;},
remove:function(){this._removeElement();this.stopListening();return this;},

_removeElement:function(){this.$el.remove();},
setElement:function(element){this.undelegateEvents();this._setElement(element);this.delegateEvents();return this;},



_setElement:function(el){this.$el=el instanceof Backbone.$?el:Backbone.$(el);this.el=this.$el[0];},

delegateEvents:function(events){events||(events=_.result(this,'events'));if(!events)return this;this.undelegateEvents();for(var key in events){var method=events[key];if(!_.isFunction(method))method=this[method];if(!method)continue;var match=key.match(delegateEventSplitter);this.delegate(match[1],match[2],_.bind(method,this));}
return this;},
delegate:function(eventName,selector,listener){this.$el.on(eventName+'.delegateEvents'+this.cid,selector,listener);return this;},
undelegateEvents:function(){if(this.$el)this.$el.off('.delegateEvents'+this.cid);return this;},undelegate:function(eventName,selector,listener){this.$el.off(eventName+'.delegateEvents'+this.cid,selector,listener);return this;},
_createElement:function(tagName){return document.createElement(tagName);},

_ensureElement:function(){if(!this.el){var attrs=_.extend({},_.result(this,'attributes'));if(this.id)attrs.id=_.result(this,'id');if(this.className)attrs['class']=_.result(this,'className');this.setElement(this._createElement(_.result(this,'tagName')));this._setAttributes(attrs);}else{this.setElement(_.result(this,'el'));}},
_setAttributes:function(attributes){this.$el.attr(attributes);}});





Backbone.sync=function(method,model,options){var type=methodMap[method];_.defaults(options||(options={}),{emulateHTTP:Backbone.emulateHTTP,emulateJSON:Backbone.emulateJSON});var params={type:type,dataType:'json'};if(!options.url){params.url=_.result(model,'url')||urlError();}
if(options.data==null&&model&&(method==='create'||method==='update'||method==='patch')){params.contentType='application/json';params.data=JSON.stringify(options.attrs||model.toJSON(options));}
if(options.emulateJSON){params.contentType='application/x-www-form-urlencoded';params.data=params.data?{model:params.data}:{};}
if(options.emulateHTTP&&(type==='PUT'||type==='DELETE'||type==='PATCH')){params.type='POST';if(options.emulateJSON)params.data._method=type;var beforeSend=options.beforeSend;options.beforeSend=function(xhr){xhr.setRequestHeader('X-HTTP-Method-Override',type);if(beforeSend)return beforeSend.apply(this,arguments);};}
if(params.type!=='GET'&&!options.emulateJSON){params.processData=false;}
var error=options.error;options.error=function(xhr,textStatus,errorThrown){options.textStatus=textStatus;options.errorThrown=errorThrown;if(error)error.call(options.context,xhr,textStatus,errorThrown);};var xhr=options.xhr=Backbone.ajax(_.extend(params,options));model.trigger('request',model,xhr,options);return xhr;};var methodMap={'create':'POST','update':'PUT','patch':'PATCH','delete':'DELETE','read':'GET'};Backbone.ajax=function(){return Backbone.$.ajax.apply(Backbone.$,arguments);};

var Router=Backbone.Router=function(options){options||(options={});if(options.routes)this.routes=options.routes;this._bindRoutes();this.initialize.apply(this,arguments);};
var optionalParam=/\((.*?)\)/g;var namedParam=/(\(\?)?:\w+/g;var splatParam=/\*\w+/g;var escapeRegExp=/[\-{}\[\]+?.,\\\^$|#\s]/g;_.extend(Router.prototype,Events,{
initialize:function(){},route:function(route,name,callback){if(!_.isRegExp(route))route=this._routeToRegExp(route);if(_.isFunction(name)){callback=name;name='';}
if(!callback)callback=this[name];var router=this;Backbone.history.route(route,function(fragment){var args=router._extractParameters(route,fragment);if(router.execute(callback,args,name)!==false){router.trigger.apply(router,['route:'+name].concat(args));router.trigger('route',name,args);Backbone.history.trigger('route',router,name,args);}});return this;},
execute:function(callback,args,name){if(callback)callback.apply(this,args);},navigate:function(fragment,options){Backbone.history.navigate(fragment,options);return this;},

_bindRoutes:function(){if(!this.routes)return;this.routes=_.result(this,'routes');var route,routes=_.keys(this.routes);while((route=routes.pop())!=null){this.route(route,this.routes[route]);}},
_routeToRegExp:function(route){route=route.replace(escapeRegExp,'\\$&').replace(optionalParam,'(?:$1)?').replace(namedParam,function(match,optional){return optional?match:'([^/?]+)';}).replace(splatParam,'([^?]*?)');return new RegExp('^'+route+'(?:\\?([\\s\\S]*))?$');},

_extractParameters:function(route,fragment){var params=route.exec(fragment).slice(1);return _.map(params,function(param,i){if(i===params.length-1)return param||null;return param?decodeURIComponent(param):null;});}});



var History=Backbone.History=function(){this.handlers=[];this.checkUrl=_.bind(this.checkUrl,this);if(typeof window!=='undefined'){this.location=window.location;this.history=window.history;}};var routeStripper=/^[#\/]|\s+$/g;var rootStripper=/^\/+|\/+$/g;var pathStripper=/#.*$/;History.started=false;_.extend(History.prototype,Events,{
interval:50,atRoot:function(){var path=this.location.pathname.replace(/[^\/]$/,'$&/');return path===this.root&&!this.getSearch();},matchRoot:function(){var path=this.decodeFragment(this.location.pathname);var root=path.slice(0,this.root.length-1)+'/';return root===this.root;},

decodeFragment:function(fragment){return decodeURI(fragment.replace(/%25/g,'%2525'));},
getSearch:function(){var match=this.location.href.replace(/#.*/,'').match(/\?.+/);return match?match[0]:'';},
getHash:function(window){var match=(window||this).location.href.match(/#(.*)$/);return match?match[1]:'';},getPath:function(){var path=this.decodeFragment(this.location.pathname+this.getSearch()).slice(this.root.length-1);return path.charAt(0)==='/'?path.slice(1):path;},getFragment:function(fragment){if(fragment==null){if(this._usePushState||!this._wantsHashChange){fragment=this.getPath();}else{fragment=this.getHash();}}
return fragment.replace(routeStripper,'');},
start:function(options){if(History.started)throw new Error('Backbone.history has already been started');History.started=true;this.options=_.extend({root:'/'},this.options,options);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._hasHashChange='onhashchange'in window&&(document.documentMode===void 0||document.documentMode>7);this._useHashChange=this._wantsHashChange&&this._hasHashChange;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.history&&this.history.pushState);this._usePushState=this._wantsPushState&&this._hasPushState;this.fragment=this.getFragment();this.root=('/'+this.root+'/').replace(rootStripper,'/');
if(this._wantsHashChange&&this._wantsPushState){
if(!this._hasPushState&&!this.atRoot()){var root=this.root.slice(0,-1)||'/';this.location.replace(root+'#'+this.getPath()); return true;
}else if(this._hasPushState&&this.atRoot()){this.navigate(this.getHash(),{replace:true});}}


if(!this._hasHashChange&&this._wantsHashChange&&!this._usePushState){this.iframe=document.createElement('iframe');this.iframe.src='javascript:0';this.iframe.style.display='none';this.iframe.tabIndex=-1;var body=document.body;var iWindow=body.insertBefore(this.iframe,body.firstChild).contentWindow;iWindow.document.open();iWindow.document.close();iWindow.location.hash='#'+this.fragment;}
var addEventListener=window.addEventListener||function(eventName,listener){return attachEvent('on'+eventName,listener);};
if(this._usePushState){addEventListener('popstate',this.checkUrl,false);}else if(this._useHashChange&&!this.iframe){addEventListener('hashchange',this.checkUrl,false);}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval);}
if(!this.options.silent)return this.loadUrl();},stop:function(){var removeEventListener=window.removeEventListener||function(eventName,listener){return detachEvent('on'+eventName,listener);};if(this._usePushState){removeEventListener('popstate',this.checkUrl,false);}else if(this._useHashChange&&!this.iframe){removeEventListener('hashchange',this.checkUrl,false);}
if(this.iframe){document.body.removeChild(this.iframe);this.iframe=null;}
if(this._checkUrlInterval)clearInterval(this._checkUrlInterval);History.started=false;},
route:function(route,callback){this.handlers.unshift({route:route,callback:callback});},checkUrl:function(e){var current=this.getFragment();
if(current===this.fragment&&this.iframe){current=this.getHash(this.iframe.contentWindow);}
if(current===this.fragment)return false;if(this.iframe)this.navigate(current);this.loadUrl();},
loadUrl:function(fragment){if(!this.matchRoot())return false;fragment=this.fragment=this.getFragment(fragment);return _.some(this.handlers,function(handler){if(handler.route.test(fragment)){handler.callback(fragment);return true;}});},



navigate:function(fragment,options){if(!History.started)return false;if(!options||options===true)options={trigger:!!options};fragment=this.getFragment(fragment||'');var root=this.root;if(fragment===''||fragment.charAt(0)==='?'){root=root.slice(0,-1)||'/';}
var url=root+fragment;fragment=this.decodeFragment(fragment.replace(pathStripper,''));if(this.fragment===fragment)return;this.fragment=fragment;if(this._usePushState){this.history[options.replace?'replaceState':'pushState']({},document.title,url);
}else if(this._wantsHashChange){this._updateHash(this.location,fragment,options.replace);if(this.iframe&&(fragment!==this.getHash(this.iframe.contentWindow))){var iWindow=this.iframe.contentWindow;

if(!options.replace){iWindow.document.open();iWindow.document.close();}
this._updateHash(iWindow.location,fragment,options.replace);}
}else{return this.location.assign(url);}
if(options.trigger)return this.loadUrl(fragment);},
_updateHash:function(location,fragment,replace){if(replace){var href=location.href.replace(/(javascript:|#).*$/,'');location.replace(href+'#'+fragment);}else{location.hash='#'+fragment;}}});Backbone.history=new History;

var extend=function(protoProps,staticProps){var parent=this;var child;

if(protoProps&&_.has(protoProps,'constructor')){child=protoProps.constructor;}else{child=function(){return parent.apply(this,arguments);};}
_.extend(child,parent,staticProps);
var Surrogate=function(){this.constructor=child;};Surrogate.prototype=parent.prototype;child.prototype=new Surrogate;if(protoProps)_.extend(child.prototype,protoProps);
child.__super__=parent.prototype;return child;}; Model.extend=Collection.extend=Router.extend=View.extend=History.extend=extend;var urlError=function(){throw new Error('A "url" property or function must be specified');};var wrapError=function(model,options){var error=options.error;options.error=function(resp){if(error)error.call(options.context,model,resp,options);model.trigger('error',model,resp,options);};};return Backbone;}));!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.SockJS=e()}}(function(){var define,module,exports;return(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){(function(global){'use strict';var transportList=require('./transport-list');module.exports=require('./main')(transportList);if('_sockjs_onload'in global){setTimeout(global._sockjs_onload,1);}}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})
},{"./main":14,"./transport-list":16}],2:[function(require,module,exports){'use strict';var inherits=require('inherits'),Event=require('./event');function CloseEvent(){Event.call(this);this.initEvent('close',false,false);this.wasClean=false;this.code=0;this.reason='';}
inherits(CloseEvent,Event);module.exports=CloseEvent;},{"./event":4,"inherits":57}],3:[function(require,module,exports){'use strict';var inherits=require('inherits'),EventTarget=require('./eventtarget');function EventEmitter(){EventTarget.call(this);}
inherits(EventEmitter,EventTarget);EventEmitter.prototype.removeAllListeners=function(type){if(type){delete this._listeners[type];}else{this._listeners={};}};EventEmitter.prototype.once=function(type,listener){var self=this,fired=false;function g(){self.removeListener(type,g);if(!fired){fired=true;listener.apply(this,arguments);}}
this.on(type,g);};EventEmitter.prototype.emit=function(type){var listeners=this._listeners[type];if(!listeners){return;}
var args=Array.prototype.slice.call(arguments,1);for(var i=0;i<listeners.length;i++){listeners[i].apply(this,args);}};EventEmitter.prototype.on=EventEmitter.prototype.addListener=EventTarget.prototype.addEventListener;EventEmitter.prototype.removeListener=EventTarget.prototype.removeEventListener;module.exports.EventEmitter=EventEmitter;},{"./eventtarget":5,"inherits":57}],4:[function(require,module,exports){'use strict';function Event(eventType){this.type=eventType;}
Event.prototype.initEvent=function(eventType,canBubble,cancelable){this.type=eventType;this.bubbles=canBubble;this.cancelable=cancelable;this.timeStamp=+new Date();return this;};Event.prototype.stopPropagation=function(){};Event.prototype.preventDefault=function(){};Event.CAPTURING_PHASE=1;Event.AT_TARGET=2;Event.BUBBLING_PHASE=3;module.exports=Event;},{}],5:[function(require,module,exports){'use strict';function EventTarget(){this._listeners={};}
EventTarget.prototype.addEventListener=function(eventType,listener){if(!(eventType in this._listeners)){this._listeners[eventType]=[];}
var arr=this._listeners[eventType]; if(arr.indexOf(listener)===-1){arr=arr.concat([listener]);}
this._listeners[eventType]=arr;};EventTarget.prototype.removeEventListener=function(eventType,listener){var arr=this._listeners[eventType];if(!arr){return;}
var idx=arr.indexOf(listener);if(idx!==-1){if(arr.length>1){this._listeners[eventType]=arr.slice(0,idx).concat(arr.slice(idx+1));}else{delete this._listeners[eventType];}
return;}};EventTarget.prototype.dispatchEvent=function(event){var t=event.type;var args=Array.prototype.slice.call(arguments,0);


if(this['on'+t]){this['on'+t].apply(this,args);}
if(t in this._listeners){var listeners=this._listeners[t];for(var i=0;i<listeners.length;i++){listeners[i].apply(this,args);}}};module.exports=EventTarget;},{}],6:[function(require,module,exports){'use strict';var inherits=require('inherits'),Event=require('./event');function TransportMessageEvent(data){Event.call(this);this.initEvent('message',false,false);this.data=data;}
inherits(TransportMessageEvent,Event);module.exports=TransportMessageEvent;},{"./event":4,"inherits":57}],7:[function(require,module,exports){'use strict';var JSON3=require('json3'),iframeUtils=require('./utils/iframe');function FacadeJS(transport){this._transport=transport;transport.on('message',this._transportMessage.bind(this));transport.on('close',this._transportClose.bind(this));}
FacadeJS.prototype._transportClose=function(code,reason){iframeUtils.postMessage('c',JSON3.stringify([code,reason]));};FacadeJS.prototype._transportMessage=function(frame){iframeUtils.postMessage('t',frame);};FacadeJS.prototype._send=function(data){this._transport.send(data);};FacadeJS.prototype._close=function(){this._transport.close();this._transport.removeAllListeners();};module.exports=FacadeJS;},{"./utils/iframe":47,"json3":58}],8:[function(require,module,exports){(function(process){'use strict';var urlUtils=require('./utils/url'),eventUtils=require('./utils/event'),JSON3=require('json3'),FacadeJS=require('./facade'),InfoIframeReceiver=require('./info-iframe-receiver'),iframeUtils=require('./utils/iframe'),loc=require('./location');var debug=function(){};if(process.env.NODE_ENV!=='production'){debug=require('debug')('sockjs-client:iframe-bootstrap');}
module.exports=function(SockJS,availableTransports){var transportMap={};availableTransports.forEach(function(at){if(at.facadeTransport){transportMap[at.facadeTransport.transportName]=at.facadeTransport;}});
 transportMap[InfoIframeReceiver.transportName]=InfoIframeReceiver;var parentOrigin;SockJS.bootstrap_iframe=function(){var facade;iframeUtils.currentWindowId=loc.hash.slice(1);var onMessage=function(e){if(e.source!==parent){return;}
if(typeof parentOrigin==='undefined'){parentOrigin=e.origin;}
if(e.origin!==parentOrigin){return;}
var iframeMessage;try{iframeMessage=JSON3.parse(e.data);}catch(ignored){debug('bad json',e.data);return;}
if(iframeMessage.windowId!==iframeUtils.currentWindowId){return;}
switch(iframeMessage.type){case's':var p;try{p=JSON3.parse(iframeMessage.data);}catch(ignored){debug('bad json',iframeMessage.data);break;}
var version=p[0];var transport=p[1];var transUrl=p[2];var baseUrl=p[3];debug(version,transport,transUrl,baseUrl); if(version!==SockJS.version){throw new Error('Incompatibile SockJS! Main site uses:'+' "'+version+'", the iframe:'+' "'+SockJS.version+'".');}
if(!urlUtils.isOriginEqual(transUrl,loc.href)||!urlUtils.isOriginEqual(baseUrl,loc.href)){throw new Error('Can\'t connect to different domain from within an '+'iframe. ('+loc.href+', '+transUrl+', '+baseUrl+')');}
facade=new FacadeJS(new transportMap[transport](transUrl,baseUrl));break;case'm':facade._send(iframeMessage.data);break;case'c':if(facade){facade._close();}
facade=null;break;}};eventUtils.attachEvent('message',onMessage); iframeUtils.postMessage('s');};};}).call(this,{env:{}})
},{"./facade":7,"./info-iframe-receiver":10,"./location":13,"./utils/event":46,"./utils/iframe":47,"./utils/url":52,"debug":54,"json3":58}],9:[function(require,module,exports){(function(process){'use strict';var EventEmitter=require('events').EventEmitter,inherits=require('inherits'),JSON3=require('json3'),objectUtils=require('./utils/object');var debug=function(){};if(process.env.NODE_ENV!=='production'){debug=require('debug')('sockjs-client:info-ajax');}
function InfoAjax(url,AjaxObject){EventEmitter.call(this);var self=this;var t0=+new Date();this.xo=new AjaxObject('GET',url);this.xo.once('finish',function(status,text){var info,rtt;if(status===200){rtt=(+new Date())-t0;if(text){try{info=JSON3.parse(text);}catch(e){debug('bad json',text);}}
if(!objectUtils.isObject(info)){info={};}}
self.emit('finish',info,rtt);self.removeAllListeners();});}
inherits(InfoAjax,EventEmitter);InfoAjax.prototype.close=function(){this.removeAllListeners();this.xo.close();};module.exports=InfoAjax;}).call(this,{env:{}})
},{"./utils/object":49,"debug":54,"events":3,"inherits":57,"json3":58}],10:[function(require,module,exports){'use strict';var inherits=require('inherits'),EventEmitter=require('events').EventEmitter,JSON3=require('json3'),XHRLocalObject=require('./transport/sender/xhr-local'),InfoAjax=require('./info-ajax');function InfoReceiverIframe(transUrl){var self=this;EventEmitter.call(this);this.ir=new InfoAjax(transUrl,XHRLocalObject);this.ir.once('finish',function(info,rtt){self.ir=null;self.emit('message',JSON3.stringify([info,rtt]));});}
inherits(InfoReceiverIframe,EventEmitter);InfoReceiverIframe.transportName='iframe-info-receiver';InfoReceiverIframe.prototype.close=function(){if(this.ir){this.ir.close();this.ir=null;}
this.removeAllListeners();};module.exports=InfoReceiverIframe;},{"./info-ajax":9,"./transport/sender/xhr-local":37,"events":3,"inherits":57,"json3":58}],11:[function(require,module,exports){(function(process,global){'use strict';var EventEmitter=require('events').EventEmitter,inherits=require('inherits'),JSON3=require('json3'),utils=require('./utils/event'),IframeTransport=require('./transport/iframe'),InfoReceiverIframe=require('./info-iframe-receiver');var debug=function(){};if(process.env.NODE_ENV!=='production'){debug=require('debug')('sockjs-client:info-iframe');}
function InfoIframe(baseUrl,url){var self=this;EventEmitter.call(this);var go=function(){var ifr=self.ifr=new IframeTransport(InfoReceiverIframe.transportName,url,baseUrl);ifr.once('message',function(msg){if(msg){var d;try{d=JSON3.parse(msg);}catch(e){debug('bad json',msg);self.emit('finish');self.close();return;}
var info=d[0],rtt=d[1];self.emit('finish',info,rtt);}
self.close();});ifr.once('close',function(){self.emit('finish');self.close();});}; if(!global.document.body){utils.attachEvent('load',go);}else{go();}}
inherits(InfoIframe,EventEmitter);InfoIframe.enabled=function(){return IframeTransport.enabled();};InfoIframe.prototype.close=function(){if(this.ifr){this.ifr.close();}
this.removeAllListeners();this.ifr=null;};module.exports=InfoIframe;}).call(this,{env:{}},typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})
},{"./info-iframe-receiver":10,"./transport/iframe":22,"./utils/event":46,"debug":54,"events":3,"inherits":57,"json3":58}],12:[function(require,module,exports){(function(process){'use strict';var EventEmitter=require('events').EventEmitter,inherits=require('inherits'),urlUtils=require('./utils/url'),XDR=require('./transport/sender/xdr'),XHRCors=require('./transport/sender/xhr-cors'),XHRLocal=require('./transport/sender/xhr-local'),XHRFake=require('./transport/sender/xhr-fake'),InfoIframe=require('./info-iframe'),InfoAjax=require('./info-ajax');var debug=function(){};if(process.env.NODE_ENV!=='production'){debug=require('debug')('sockjs-client:info-receiver');}
function InfoReceiver(baseUrl,urlInfo){debug(baseUrl);var self=this;EventEmitter.call(this);setTimeout(function(){self.doXhr(baseUrl,urlInfo);},0);}
inherits(InfoReceiver,EventEmitter);InfoReceiver._getReceiver=function(baseUrl,url,urlInfo){if(urlInfo.sameOrigin){return new InfoAjax(url,XHRLocal);}
if(XHRCors.enabled){return new InfoAjax(url,XHRCors);}
if(XDR.enabled&&urlInfo.sameScheme){return new InfoAjax(url,XDR);}
if(InfoIframe.enabled()){return new InfoIframe(baseUrl,url);}
return new InfoAjax(url,XHRFake);};InfoReceiver.prototype.doXhr=function(baseUrl,urlInfo){var self=this,url=urlUtils.addPath(baseUrl,'/info');debug('doXhr',url);this.xo=InfoReceiver._getReceiver(baseUrl,url,urlInfo);this.timeoutRef=setTimeout(function(){debug('timeout');self._cleanup(false);self.emit('finish');},InfoReceiver.timeout);this.xo.once('finish',function(info,rtt){debug('finish',info,rtt);self._cleanup(true);self.emit('finish',info,rtt);});};InfoReceiver.prototype._cleanup=function(wasClean){debug('_cleanup');clearTimeout(this.timeoutRef);this.timeoutRef=null;if(!wasClean&&this.xo){this.xo.close();}
this.xo=null;};InfoReceiver.prototype.close=function(){debug('close');this.removeAllListeners();this._cleanup(false);};InfoReceiver.timeout=8000;module.exports=InfoReceiver;}).call(this,{env:{}})
},{"./info-ajax":9,"./info-iframe":11,"./transport/sender/xdr":34,"./transport/sender/xhr-cors":35,"./transport/sender/xhr-fake":36,"./transport/sender/xhr-local":37,"./utils/url":52,"debug":54,"events":3,"inherits":57}],13:[function(require,module,exports){(function(global){'use strict';module.exports=global.location||{origin:'http://localhost:80',protocol:'http',host:'localhost',port:80,href:'http://localhost/',hash:''};}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})
},{}],14:[function(require,module,exports){(function(process,global){'use strict';require('./shims');var URL=require('url-parse'),inherits=require('inherits'),JSON3=require('json3'),random=require('./utils/random'),escape=require('./utils/escape'),urlUtils=require('./utils/url'),eventUtils=require('./utils/event'),transport=require('./utils/transport'),objectUtils=require('./utils/object'),browser=require('./utils/browser'),log=require('./utils/log'),Event=require('./event/event'),EventTarget=require('./event/eventtarget'),loc=require('./location'),CloseEvent=require('./event/close'),TransportMessageEvent=require('./event/trans-message'),InfoReceiver=require('./info-receiver');var debug=function(){};if(process.env.NODE_ENV!=='production'){ global.dbg=require('debug');debug=global.dbg('sockjs-client:main');}
var transports;function SockJS(url,protocols,options){if(!(this instanceof SockJS)){return new SockJS(url,protocols,options);}
if(arguments.length<1){throw new TypeError("Failed to construct 'SockJS: 1 argument required, but only 0 present");}
EventTarget.call(this);this.readyState=SockJS.CONNECTING;this.extensions='';this.protocol=''; options=options||{};if(options.protocols_whitelist){log.warn("'protocols_whitelist' is DEPRECATED. Use 'transports' instead.");}
this._transportsWhitelist=options.transports;var sessionId=options.sessionId||8;if(typeof sessionId==='function'){this._generateSessionId=sessionId;}else if(typeof sessionId==='number'){this._generateSessionId=function(){return random.string(sessionId);};}else{throw new TypeError("If sessionId is used in the options, it needs to be a number or a function.");}
this._server=options.server||random.numberString(1000); var parsedUrl=new URL(url);if(!parsedUrl.host||!parsedUrl.protocol){throw new SyntaxError("The URL '"+url+"' is invalid");}else if(parsedUrl.hash){throw new SyntaxError('The URL must not contain a fragment');}else if(parsedUrl.protocol!=='http:'&&parsedUrl.protocol!=='https:'){throw new SyntaxError("The URL's scheme must be either 'http:' or 'https:'. '"+parsedUrl.protocol+"' is not allowed.");}
var secure=parsedUrl.protocol==='https:'; if(loc.protocol==='https'&&!secure){throw new Error('SecurityError: An insecure SockJS connection may not be initiated from a page loaded over HTTPS');}
 
if(!protocols){protocols=[];}else if(!Array.isArray(protocols)){protocols=[protocols];} 
var sortedProtocols=protocols.sort();sortedProtocols.forEach(function(proto,i){if(!proto){throw new SyntaxError("The protocols entry '"+proto+"' is invalid.");}
if(i<(sortedProtocols.length-1)&&proto===sortedProtocols[i+1]){throw new SyntaxError("The protocols entry '"+proto+"' is duplicated.");}}); var o=urlUtils.getOrigin(loc.href);this._origin=o?o.toLowerCase():null; parsedUrl.set('pathname',parsedUrl.pathname.replace(/\/+$/,'')); this.url=parsedUrl.href;debug('using url',this.url);

 this._urlInfo={nullOrigin:!browser.hasDomain(),sameOrigin:urlUtils.isOriginEqual(this.url,loc.href),sameScheme:urlUtils.isSchemeEqual(this.url,loc.href)};this._ir=new InfoReceiver(this.url,this._urlInfo);this._ir.once('finish',this._receiveInfo.bind(this));}
inherits(SockJS,EventTarget);function userSetCode(code){return code===1000||(code>=3000&&code<=4999);}
SockJS.prototype.close=function(code,reason){ if(code&&!userSetCode(code)){throw new Error('InvalidAccessError: Invalid code');} 
if(reason&&reason.length>123){throw new SyntaxError('reason argument has an invalid length');} 
if(this.readyState===SockJS.CLOSING||this.readyState===SockJS.CLOSED){return;} 
var wasClean=true;this._close(code||1000,reason||'Normal closure',wasClean);};SockJS.prototype.send=function(data){
if(typeof data!=='string'){data=''+data;}
if(this.readyState===SockJS.CONNECTING){throw new Error('InvalidStateError: The connection has not been established yet');}
if(this.readyState!==SockJS.OPEN){return;}
this._transport.send(escape.quote(data));};SockJS.version=require('./version');SockJS.CONNECTING=0;SockJS.OPEN=1;SockJS.CLOSING=2;SockJS.CLOSED=3;SockJS.prototype._receiveInfo=function(info,rtt){debug('_receiveInfo',rtt);this._ir=null;if(!info){this._close(1002,'Cannot connect to server');return;} 

this._rto=this.countRTO(rtt); this._transUrl=info.base_url?info.base_url:this.url;info=objectUtils.extend(info,this._urlInfo);debug('info',info); var enabledTransports=transports.filterToEnabled(this._transportsWhitelist,info);this._transports=enabledTransports.main;debug(this._transports.length+' enabled transports');this._connect();};SockJS.prototype._connect=function(){for(var Transport=this._transports.shift();Transport;Transport=this._transports.shift()){debug('attempt',Transport.transportName);if(Transport.needBody){if(!global.document.body||(typeof global.document.readyState!=='undefined'&&global.document.readyState!=='complete'&&global.document.readyState!=='interactive')){debug('waiting for body');this._transports.unshift(Transport);eventUtils.attachEvent('load',this._connect.bind(this));return;}} 
var timeoutMs=(this._rto*Transport.roundTrips)||5000;this._transportTimeoutId=setTimeout(this._transportTimeout.bind(this),timeoutMs);debug('using timeout',timeoutMs);var transportUrl=urlUtils.addPath(this._transUrl,'/'+this._server+'/'+this._generateSessionId());debug('transport url',transportUrl);var transportObj=new Transport(transportUrl,this._transUrl);transportObj.on('message',this._transportMessage.bind(this));transportObj.once('close',this._transportClose.bind(this));transportObj.transportName=Transport.transportName;this._transport=transportObj;return;}
this._close(2000,'All transports failed',false);};SockJS.prototype._transportTimeout=function(){debug('_transportTimeout');if(this.readyState===SockJS.CONNECTING){this._transportClose(2007,'Transport timed out');}};SockJS.prototype._transportMessage=function(msg){debug('_transportMessage',msg);var self=this,type=msg.slice(0,1),content=msg.slice(1),payload; switch(type){case'o':this._open();return;case'h':this.dispatchEvent(new Event('heartbeat'));debug('heartbeat',this.transport);return;}
if(content){try{payload=JSON3.parse(content);}catch(e){debug('bad json',content);}}
if(typeof payload==='undefined'){debug('empty payload',content);return;}
switch(type){case'a':if(Array.isArray(payload)){payload.forEach(function(p){debug('message',self.transport,p);self.dispatchEvent(new TransportMessageEvent(p));});}
break;case'm':debug('message',this.transport,payload);this.dispatchEvent(new TransportMessageEvent(payload));break;case'c':if(Array.isArray(payload)&&payload.length===2){this._close(payload[0],payload[1],true);}
break;}};SockJS.prototype._transportClose=function(code,reason){debug('_transportClose',this.transport,code,reason);if(this._transport){this._transport.removeAllListeners();this._transport=null;this.transport=null;}
if(!userSetCode(code)&&code!==2000&&this.readyState===SockJS.CONNECTING){this._connect();return;}
this._close(code,reason);};SockJS.prototype._open=function(){debug('_open',this._transport.transportName,this.readyState);if(this.readyState===SockJS.CONNECTING){if(this._transportTimeoutId){clearTimeout(this._transportTimeoutId);this._transportTimeoutId=null;}
this.readyState=SockJS.OPEN;this.transport=this._transport.transportName;this.dispatchEvent(new Event('open'));debug('connected',this.transport);}else{
this._close(1006,'Server lost session');}};SockJS.prototype._close=function(code,reason,wasClean){debug('_close',this.transport,code,reason,wasClean,this.readyState);var forceFail=false;if(this._ir){forceFail=true;this._ir.close();this._ir=null;}
if(this._transport){this._transport.close();this._transport=null;this.transport=null;}
if(this.readyState===SockJS.CLOSED){throw new Error('InvalidStateError: SockJS has already been closed');}
this.readyState=SockJS.CLOSING;setTimeout(function(){this.readyState=SockJS.CLOSED;if(forceFail){this.dispatchEvent(new Event('error'));}
var e=new CloseEvent('close');e.wasClean=wasClean||false;e.code=code||1000;e.reason=reason;this.dispatchEvent(e);this.onmessage=this.onclose=this.onerror=null;debug('disconnected');}.bind(this),0);};SockJS.prototype.countRTO=function(rtt){



if(rtt>100){return 4*rtt;}
return 300+rtt;};module.exports=function(availableTransports){transports=transport(availableTransports);require('./iframe-bootstrap')(SockJS,availableTransports);return SockJS;};}).call(this,{env:{}},typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})
},{"./event/close":2,"./event/event":4,"./event/eventtarget":5,"./event/trans-message":6,"./iframe-bootstrap":8,"./info-receiver":12,"./location":13,"./shims":15,"./utils/browser":44,"./utils/escape":45,"./utils/event":46,"./utils/log":48,"./utils/object":49,"./utils/random":50,"./utils/transport":51,"./utils/url":52,"./version":53,"debug":54,"inherits":57,"json3":58,"url-parse":59}],15:[function(require,module,exports){'use strict';var ArrayPrototype=Array.prototype;var ObjectPrototype=Object.prototype;var FunctionPrototype=Function.prototype;var StringPrototype=String.prototype;var array_slice=ArrayPrototype.slice;var _toString=ObjectPrototype.toString;var isFunction=function(val){return ObjectPrototype.toString.call(val)==='[object Function]';};var isArray=function isArray(obj){return _toString.call(obj)==='[object Array]';};var isString=function isString(obj){return _toString.call(obj)==='[object String]';};var supportsDescriptors=Object.defineProperty&&(function(){try{Object.defineProperty({},'x',{});return true;}catch(e){return false;}}());
var defineProperty;if(supportsDescriptors){defineProperty=function(object,name,method,forceAssign){if(!forceAssign&&(name in object)){return;}
Object.defineProperty(object,name,{configurable:true,enumerable:false,writable:true,value:method});};}else{defineProperty=function(object,name,method,forceAssign){if(!forceAssign&&(name in object)){return;}
object[name]=method;};}
var defineProperties=function(object,map,forceAssign){for(var name in map){if(ObjectPrototype.hasOwnProperty.call(map,name)){defineProperty(object,name,map[name],forceAssign);}}};var toObject=function(o){if(o==null){ throw new TypeError("can't convert "+o+' to object');}
return Object(o);};


function toInteger(num){var n=+num;if(n!==n){ n=0;}else if(n!==0&&n!==(1/0)&&n!==-(1/0)){n=(n>0||-1)*Math.floor(Math.abs(n));}
return n;}
function ToUint32(x){return x>>>0;}


function Empty(){}
defineProperties(FunctionPrototype,{bind:function bind(that){
var target=this;if(!isFunction(target)){throw new TypeError('Function.prototype.bind called on incompatible '+target);}
 
var args=array_slice.call(arguments,1);




var binder=function(){if(this instanceof bound){






var result=target.apply(this,args.concat(array_slice.call(arguments)));if(Object(result)===result){return result;}
return this;}else{









return target.apply(that,args.concat(array_slice.call(arguments)));}};

var boundLength=Math.max(0,target.length-args.length);
var boundArgs=[];for(var i=0;i<boundLength;i++){boundArgs.push('$'+i);}


var bound=Function('binder','return function ('+boundArgs.join(',')+'){ return binder.apply(this, arguments); }')(binder);if(target.prototype){Empty.prototype=target.prototype;bound.prototype=new Empty();Empty.prototype=null;}








return bound;}});


defineProperties(Array,{isArray:isArray});var boxedString=Object('a');var splitString=boxedString[0]!=='a'||!(0 in boxedString);var properlyBoxesContext=function properlyBoxed(method){ var properlyBoxesNonStrict=true;var properlyBoxesStrict=true;if(method){method.call('foo',function(_,__,context){if(typeof context!=='object'){properlyBoxesNonStrict=false;}});method.call([1],function(){'use strict';properlyBoxesStrict=typeof this==='string';},'x');}
return!!method&&properlyBoxesNonStrict&&properlyBoxesStrict;};defineProperties(ArrayPrototype,{forEach:function forEach(fun ){var object=toObject(this),self=splitString&&isString(this)?this.split(''):object,thisp=arguments[1],i=-1,length=self.length>>>0; if(!isFunction(fun)){throw new TypeError();}
while(++i<length){if(i in self){
 fun.call(thisp,self[i],i,object);}}}},!properlyBoxesContext(ArrayPrototype.forEach));

var hasFirefox2IndexOfBug=Array.prototype.indexOf&&[0,1].indexOf(1,2)!==-1;defineProperties(ArrayPrototype,{indexOf:function indexOf(sought ){var self=splitString&&isString(this)?this.split(''):toObject(this),length=self.length>>>0;if(!length){return-1;}
var i=0;if(arguments.length>1){i=toInteger(arguments[1]);} 
i=i>=0?i:Math.max(0,length+i);for(;i<length;i++){if(i in self&&self[i]===sought){return i;}}
return-1;}},hasFirefox2IndexOfBug);






var string_split=StringPrototype.split;if('ab'.split(/(?:ab)*/).length!==2||'.'.split(/(.?)(.?)/).length!==4||'tesst'.split(/(s)*/)[1]==='t'||'test'.split(/(?:)/,-1).length!==4||''.split(/.?/).length||'.'.split(/()()/).length>1){(function(){var compliantExecNpcg=/()??/.exec('')[1]===void 0; StringPrototype.split=function(separator,limit){var string=this;if(separator===void 0&&limit===0){return[];} 
if(_toString.call(separator)!=='[object RegExp]'){return string_split.call(this,separator,limit);}
var output=[],flags=(separator.ignoreCase?'i':'')+
(separator.multiline?'m':'')+
(separator.extended?'x':'')+(separator.sticky?'y':''),lastLastIndex=0, separator2,match,lastIndex,lastLength;separator=new RegExp(separator.source,flags+'g');string+=''; if(!compliantExecNpcg){ separator2=new RegExp('^'+separator.source+'$(?!\\s)',flags);}
limit=limit===void 0?-1>>>0: ToUint32(limit);while(match=separator.exec(string)){ lastIndex=match.index+match[0].length;if(lastIndex>lastLastIndex){output.push(string.slice(lastLastIndex,match.index));
 if(!compliantExecNpcg&&match.length>1){match[0].replace(separator2,function(){for(var i=1;i<arguments.length-2;i++){if(arguments[i]===void 0){match[i]=void 0;}}});}
if(match.length>1&&match.index<string.length){ArrayPrototype.push.apply(output,match.slice(1));}
lastLength=match[0].length;lastLastIndex=lastIndex;if(output.length>=limit){break;}}
if(separator.lastIndex===match.index){separator.lastIndex++;}}
if(lastLastIndex===string.length){if(lastLength||!separator.test('')){output.push('');}}else{output.push(string.slice(lastLastIndex));}
return output.length>limit?output.slice(0,limit):output;};}());

}else if('0'.split(void 0,0).length){StringPrototype.split=function split(separator,limit){if(separator===void 0&&limit===0){return[];}
return string_split.call(this,separator,limit);};}

var ws='\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003'+'\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028'+'\u2029\uFEFF';var zeroWidth='\u200b';var wsRegexChars='['+ws+']';var trimBeginRegexp=new RegExp('^'+wsRegexChars+wsRegexChars+'*');var trimEndRegexp=new RegExp(wsRegexChars+wsRegexChars+'*$');var hasTrimWhitespaceBug=StringPrototype.trim&&(ws.trim()||!zeroWidth.trim());defineProperties(StringPrototype,{
trim:function trim(){if(this===void 0||this===null){throw new TypeError("can't convert "+this+' to object');}
return String(this).replace(trimBeginRegexp,'').replace(trimEndRegexp,'');}},hasTrimWhitespaceBug);



var string_substr=StringPrototype.substr;var hasNegativeSubstrBug=''.substr&&'0b'.substr(-1)!=='b';defineProperties(StringPrototype,{substr:function substr(start,length){return string_substr.call(this,start<0?((start=this.length+start)<0?0:start):start,length);}},hasNegativeSubstrBug);},{}],16:[function(require,module,exports){'use strict';module.exports=[ require('./transport/websocket'),require('./transport/xhr-streaming'),require('./transport/xdr-streaming'),require('./transport/eventsource'),require('./transport/lib/iframe-wrap')(require('./transport/eventsource'))
,require('./transport/htmlfile'),require('./transport/lib/iframe-wrap')(require('./transport/htmlfile')),require('./transport/xhr-polling'),require('./transport/xdr-polling'),require('./transport/lib/iframe-wrap')(require('./transport/xhr-polling')),require('./transport/jsonp-polling')];},{"./transport/eventsource":20,"./transport/htmlfile":21,"./transport/jsonp-polling":23,"./transport/lib/iframe-wrap":26,"./transport/websocket":38,"./transport/xdr-polling":39,"./transport/xdr-streaming":40,"./transport/xhr-polling":41,"./transport/xhr-streaming":42}],17:[function(require,module,exports){(function(process,global){'use strict';var EventEmitter=require('events').EventEmitter,inherits=require('inherits'),utils=require('../../utils/event'),urlUtils=require('../../utils/url'),XHR=global.XMLHttpRequest;var debug=function(){};if(process.env.NODE_ENV!=='production'){debug=require('debug')('sockjs-client:browser:xhr');}
function AbstractXHRObject(method,url,payload,opts){debug(method,url);var self=this;EventEmitter.call(this);setTimeout(function(){self._start(method,url,payload,opts);},0);}
inherits(AbstractXHRObject,EventEmitter);AbstractXHRObject.prototype._start=function(method,url,payload,opts){var self=this;try{this.xhr=new XHR();}catch(x){}
if(!this.xhr){debug('no xhr');this.emit('finish',0,'no xhr support');this._cleanup();return;} 
url=urlUtils.addQuery(url,'t='+(+new Date()));
 this.unloadRef=utils.unloadAdd(function(){debug('unload cleanup');self._cleanup(true);});try{this.xhr.open(method,url,true);if(this.timeout&&'timeout'in this.xhr){this.xhr.timeout=this.timeout;this.xhr.ontimeout=function(){debug('xhr timeout');self.emit('finish',0,'');self._cleanup(false);};}}catch(e){debug('exception',e);this.emit('finish',0,'');this._cleanup(false);return;}
if((!opts||!opts.noCredentials)&&AbstractXHRObject.supportsCORS){debug('withCredentials');this.xhr.withCredentials='true';}
if(opts&&opts.headers){for(var key in opts.headers){this.xhr.setRequestHeader(key,opts.headers[key]);}}
this.xhr.onreadystatechange=function(){if(self.xhr){var x=self.xhr;var text,status;debug('readyState',x.readyState);switch(x.readyState){case 3:
 try{status=x.status;text=x.responseText;}catch(e){}
debug('status',status); if(status===1223){status=204;}
if(status===200&&text&&text.length>0){debug('chunk');self.emit('chunk',status,text);}
break;case 4:status=x.status;debug('status',status); if(status===1223){status=204;}
 
if(status===12005||status===12029){status=0;}
debug('finish',status,x.responseText);self.emit('finish',status,x.responseText);self._cleanup(false);break;}}};try{self.xhr.send(payload);}catch(e){self.emit('finish',0,'');self._cleanup(false);}};AbstractXHRObject.prototype._cleanup=function(abort){debug('cleanup');if(!this.xhr){return;}
this.removeAllListeners();utils.unloadDel(this.unloadRef); this.xhr.onreadystatechange=function(){};if(this.xhr.ontimeout){this.xhr.ontimeout=null;}
if(abort){try{this.xhr.abort();}catch(x){}}
this.unloadRef=this.xhr=null;};AbstractXHRObject.prototype.close=function(){debug('close');this._cleanup(true);};AbstractXHRObject.enabled=!!XHR;
var axo=['Active'].concat('Object').join('X');if(!AbstractXHRObject.enabled&&(axo in global)){debug('overriding xmlhttprequest');XHR=function(){try{return new global[axo]('Microsoft.XMLHTTP');}catch(e){return null;}};AbstractXHRObject.enabled=!!new XHR();}
var cors=false;try{cors='withCredentials'in new XHR();}catch(ignored){}
AbstractXHRObject.supportsCORS=cors;module.exports=AbstractXHRObject;}).call(this,{env:{}},typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})
},{"../../utils/event":46,"../../utils/url":52,"debug":54,"events":3,"inherits":57}],18:[function(require,module,exports){(function(global){module.exports=global.EventSource;}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})
},{}],19:[function(require,module,exports){(function(global){module.exports=global.WebSocket||global.MozWebSocket;}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})
},{}],20:[function(require,module,exports){'use strict';var inherits=require('inherits'),AjaxBasedTransport=require('./lib/ajax-based'),EventSourceReceiver=require('./receiver/eventsource'),XHRCorsObject=require('./sender/xhr-cors'),EventSourceDriver=require('eventsource');function EventSourceTransport(transUrl){if(!EventSourceTransport.enabled()){throw new Error('Transport created when disabled');}
AjaxBasedTransport.call(this,transUrl,'/eventsource',EventSourceReceiver,XHRCorsObject);}
inherits(EventSourceTransport,AjaxBasedTransport);EventSourceTransport.enabled=function(){return!!EventSourceDriver;};EventSourceTransport.transportName='eventsource';EventSourceTransport.roundTrips=2;module.exports=EventSourceTransport;},{"./lib/ajax-based":24,"./receiver/eventsource":29,"./sender/xhr-cors":35,"eventsource":18,"inherits":57}],21:[function(require,module,exports){'use strict';var inherits=require('inherits'),HtmlfileReceiver=require('./receiver/htmlfile'),XHRLocalObject=require('./sender/xhr-local'),AjaxBasedTransport=require('./lib/ajax-based');function HtmlFileTransport(transUrl){if(!HtmlfileReceiver.enabled){throw new Error('Transport created when disabled');}
AjaxBasedTransport.call(this,transUrl,'/htmlfile',HtmlfileReceiver,XHRLocalObject);}
inherits(HtmlFileTransport,AjaxBasedTransport);HtmlFileTransport.enabled=function(info){return HtmlfileReceiver.enabled&&info.sameOrigin;};HtmlFileTransport.transportName='htmlfile';HtmlFileTransport.roundTrips=2;module.exports=HtmlFileTransport;},{"./lib/ajax-based":24,"./receiver/htmlfile":30,"./sender/xhr-local":37,"inherits":57}],22:[function(require,module,exports){(function(process){'use strict';




var inherits=require('inherits'),JSON3=require('json3'),EventEmitter=require('events').EventEmitter,version=require('../version'),urlUtils=require('../utils/url'),iframeUtils=require('../utils/iframe'),eventUtils=require('../utils/event'),random=require('../utils/random');var debug=function(){};if(process.env.NODE_ENV!=='production'){debug=require('debug')('sockjs-client:transport:iframe');}
function IframeTransport(transport,transUrl,baseUrl){if(!IframeTransport.enabled()){throw new Error('Transport created when disabled');}
EventEmitter.call(this);var self=this;this.origin=urlUtils.getOrigin(baseUrl);this.baseUrl=baseUrl;this.transUrl=transUrl;this.transport=transport;this.windowId=random.string(8);var iframeUrl=urlUtils.addPath(baseUrl,'/iframe.html')+'#'+this.windowId;debug(transport,transUrl,iframeUrl);this.iframeObj=iframeUtils.createIframe(iframeUrl,function(r){debug('err callback');self.emit('close',1006,'Unable to load an iframe ('+r+')');self.close();});this.onmessageCallback=this._message.bind(this);eventUtils.attachEvent('message',this.onmessageCallback);}
inherits(IframeTransport,EventEmitter);IframeTransport.prototype.close=function(){debug('close');this.removeAllListeners();if(this.iframeObj){eventUtils.detachEvent('message',this.onmessageCallback);try{
this.postMessage('c');}catch(x){}
this.iframeObj.cleanup();this.iframeObj=null;this.onmessageCallback=this.iframeObj=null;}};IframeTransport.prototype._message=function(e){debug('message',e.data);if(!urlUtils.isOriginEqual(e.origin,this.origin)){debug('not same origin',e.origin,this.origin);return;}
var iframeMessage;try{iframeMessage=JSON3.parse(e.data);}catch(ignored){debug('bad json',e.data);return;}
if(iframeMessage.windowId!==this.windowId){debug('mismatched window id',iframeMessage.windowId,this.windowId);return;}
switch(iframeMessage.type){case's':this.iframeObj.loaded(); this.postMessage('s',JSON3.stringify([version,this.transport,this.transUrl,this.baseUrl]));break;case't':this.emit('message',iframeMessage.data);break;case'c':var cdata;try{cdata=JSON3.parse(iframeMessage.data);}catch(ignored){debug('bad json',iframeMessage.data);return;}
this.emit('close',cdata[0],cdata[1]);this.close();break;}};IframeTransport.prototype.postMessage=function(type,data){debug('postMessage',type,data);this.iframeObj.post(JSON3.stringify({windowId:this.windowId,type:type,data:data||''}),this.origin);};IframeTransport.prototype.send=function(message){debug('send',message);this.postMessage('m',message);};IframeTransport.enabled=function(){return iframeUtils.iframeEnabled;};IframeTransport.transportName='iframe';IframeTransport.roundTrips=2;module.exports=IframeTransport;}).call(this,{env:{}})
},{"../utils/event":46,"../utils/iframe":47,"../utils/random":50,"../utils/url":52,"../version":53,"debug":54,"events":3,"inherits":57,"json3":58}],23:[function(require,module,exports){(function(global){'use strict';



var inherits=require('inherits'),SenderReceiver=require('./lib/sender-receiver'),JsonpReceiver=require('./receiver/jsonp'),jsonpSender=require('./sender/jsonp');function JsonPTransport(transUrl){if(!JsonPTransport.enabled()){throw new Error('Transport created when disabled');}
SenderReceiver.call(this,transUrl,'/jsonp',jsonpSender,JsonpReceiver);}
inherits(JsonPTransport,SenderReceiver);JsonPTransport.enabled=function(){return!!global.document;};JsonPTransport.transportName='jsonp-polling';JsonPTransport.roundTrips=1;JsonPTransport.needBody=true;module.exports=JsonPTransport;}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})
},{"./lib/sender-receiver":28,"./receiver/jsonp":31,"./sender/jsonp":33,"inherits":57}],24:[function(require,module,exports){(function(process){'use strict';var inherits=require('inherits'),urlUtils=require('../../utils/url'),SenderReceiver=require('./sender-receiver');var debug=function(){};if(process.env.NODE_ENV!=='production'){debug=require('debug')('sockjs-client:ajax-based');}
function createAjaxSender(AjaxObject){return function(url,payload,callback){debug('create ajax sender',url,payload);var opt={};if(typeof payload==='string'){opt.headers={'Content-type':'text/plain'};}
var ajaxUrl=urlUtils.addPath(url,'/xhr_send');var xo=new AjaxObject('POST',ajaxUrl,payload,opt);xo.once('finish',function(status){debug('finish',status);xo=null;if(status!==200&&status!==204){return callback(new Error('http status '+status));}
callback();});return function(){debug('abort');xo.close();xo=null;var err=new Error('Aborted');err.code=1000;callback(err);};};}
function AjaxBasedTransport(transUrl,urlSuffix,Receiver,AjaxObject){SenderReceiver.call(this,transUrl,urlSuffix,createAjaxSender(AjaxObject),Receiver,AjaxObject);}
inherits(AjaxBasedTransport,SenderReceiver);module.exports=AjaxBasedTransport;}).call(this,{env:{}})
},{"../../utils/url":52,"./sender-receiver":28,"debug":54,"inherits":57}],25:[function(require,module,exports){(function(process){'use strict';var inherits=require('inherits'),EventEmitter=require('events').EventEmitter;var debug=function(){};if(process.env.NODE_ENV!=='production'){debug=require('debug')('sockjs-client:buffered-sender');}
function BufferedSender(url,sender){debug(url);EventEmitter.call(this);this.sendBuffer=[];this.sender=sender;this.url=url;}
inherits(BufferedSender,EventEmitter);BufferedSender.prototype.send=function(message){debug('send',message);this.sendBuffer.push(message);if(!this.sendStop){this.sendSchedule();}};





BufferedSender.prototype.sendScheduleWait=function(){debug('sendScheduleWait');var self=this;var tref;this.sendStop=function(){debug('sendStop');self.sendStop=null;clearTimeout(tref);};tref=setTimeout(function(){debug('timeout');self.sendStop=null;self.sendSchedule();},25);};BufferedSender.prototype.sendSchedule=function(){debug('sendSchedule',this.sendBuffer.length);var self=this;if(this.sendBuffer.length>0){var payload='['+this.sendBuffer.join(',')+']';this.sendStop=this.sender(this.url,payload,function(err){self.sendStop=null;if(err){debug('error',err);self.emit('close',err.code||1006,'Sending error: '+err);self._cleanup();}else{self.sendScheduleWait();}});this.sendBuffer=[];}};BufferedSender.prototype._cleanup=function(){debug('_cleanup');this.removeAllListeners();};BufferedSender.prototype.stop=function(){debug('stop');this._cleanup();if(this.sendStop){this.sendStop();this.sendStop=null;}};module.exports=BufferedSender;}).call(this,{env:{}})
},{"debug":54,"events":3,"inherits":57}],26:[function(require,module,exports){(function(global){'use strict';var inherits=require('inherits'),IframeTransport=require('../iframe'),objectUtils=require('../../utils/object');module.exports=function(transport){function IframeWrapTransport(transUrl,baseUrl){IframeTransport.call(this,transport.transportName,transUrl,baseUrl);}
inherits(IframeWrapTransport,IframeTransport);IframeWrapTransport.enabled=function(url,info){if(!global.document){return false;}
var iframeInfo=objectUtils.extend({},info);iframeInfo.sameOrigin=true;return transport.enabled(iframeInfo)&&IframeTransport.enabled();};IframeWrapTransport.transportName='iframe-'+transport.transportName;IframeWrapTransport.needBody=true;IframeWrapTransport.roundTrips=IframeTransport.roundTrips+transport.roundTrips-1;IframeWrapTransport.facadeTransport=transport;return IframeWrapTransport;};}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})
},{"../../utils/object":49,"../iframe":22,"inherits":57}],27:[function(require,module,exports){(function(process){'use strict';var inherits=require('inherits'),EventEmitter=require('events').EventEmitter;var debug=function(){};if(process.env.NODE_ENV!=='production'){debug=require('debug')('sockjs-client:polling');}
function Polling(Receiver,receiveUrl,AjaxObject){debug(receiveUrl);EventEmitter.call(this);this.Receiver=Receiver;this.receiveUrl=receiveUrl;this.AjaxObject=AjaxObject;this._scheduleReceiver();}
inherits(Polling,EventEmitter);Polling.prototype._scheduleReceiver=function(){debug('_scheduleReceiver');var self=this;var poll=this.poll=new this.Receiver(this.receiveUrl,this.AjaxObject);poll.on('message',function(msg){debug('message',msg);self.emit('message',msg);});poll.once('close',function(code,reason){debug('close',code,reason,self.pollIsClosing);self.poll=poll=null;if(!self.pollIsClosing){if(reason==='network'){self._scheduleReceiver();}else{self.emit('close',code||1006,reason);self.removeAllListeners();}}});};Polling.prototype.abort=function(){debug('abort');this.removeAllListeners();this.pollIsClosing=true;if(this.poll){this.poll.abort();}};module.exports=Polling;}).call(this,{env:{}})
},{"debug":54,"events":3,"inherits":57}],28:[function(require,module,exports){(function(process){'use strict';var inherits=require('inherits'),urlUtils=require('../../utils/url'),BufferedSender=require('./buffered-sender'),Polling=require('./polling');var debug=function(){};if(process.env.NODE_ENV!=='production'){debug=require('debug')('sockjs-client:sender-receiver');}
function SenderReceiver(transUrl,urlSuffix,senderFunc,Receiver,AjaxObject){var pollUrl=urlUtils.addPath(transUrl,urlSuffix);debug(pollUrl);var self=this;BufferedSender.call(this,transUrl,senderFunc);this.poll=new Polling(Receiver,pollUrl,AjaxObject);this.poll.on('message',function(msg){debug('poll message',msg);self.emit('message',msg);});this.poll.once('close',function(code,reason){debug('poll close',code,reason);self.poll=null;self.emit('close',code,reason);self.close();});}
inherits(SenderReceiver,BufferedSender);SenderReceiver.prototype.close=function(){debug('close');this.removeAllListeners();if(this.poll){this.poll.abort();this.poll=null;}
this.stop();};module.exports=SenderReceiver;}).call(this,{env:{}})
},{"../../utils/url":52,"./buffered-sender":25,"./polling":27,"debug":54,"inherits":57}],29:[function(require,module,exports){(function(process){'use strict';var inherits=require('inherits'),EventEmitter=require('events').EventEmitter,EventSourceDriver=require('eventsource');var debug=function(){};if(process.env.NODE_ENV!=='production'){debug=require('debug')('sockjs-client:receiver:eventsource');}
function EventSourceReceiver(url){debug(url);EventEmitter.call(this);var self=this;var es=this.es=new EventSourceDriver(url);es.onmessage=function(e){debug('message',e.data);self.emit('message',decodeURI(e.data));};es.onerror=function(e){debug('error',es.readyState,e); var reason=(es.readyState!==2?'network':'permanent');self._cleanup();self._close(reason);};}
inherits(EventSourceReceiver,EventEmitter);EventSourceReceiver.prototype.abort=function(){debug('abort');this._cleanup();this._close('user');};EventSourceReceiver.prototype._cleanup=function(){debug('cleanup');var es=this.es;if(es){es.onmessage=es.onerror=null;es.close();this.es=null;}};EventSourceReceiver.prototype._close=function(reason){debug('close',reason);var self=this;
 setTimeout(function(){self.emit('close',null,reason);self.removeAllListeners();},200);};module.exports=EventSourceReceiver;}).call(this,{env:{}})
},{"debug":54,"events":3,"eventsource":18,"inherits":57}],30:[function(require,module,exports){(function(process,global){'use strict';var inherits=require('inherits'),iframeUtils=require('../../utils/iframe'),urlUtils=require('../../utils/url'),EventEmitter=require('events').EventEmitter,random=require('../../utils/random');var debug=function(){};if(process.env.NODE_ENV!=='production'){debug=require('debug')('sockjs-client:receiver:htmlfile');}
function HtmlfileReceiver(url){debug(url);EventEmitter.call(this);var self=this;iframeUtils.polluteGlobalNamespace();this.id='a'+random.string(6);url=urlUtils.addQuery(url,'c='+decodeURIComponent(iframeUtils.WPrefix+'.'+this.id));debug('using htmlfile',HtmlfileReceiver.htmlfileEnabled);var constructFunc=HtmlfileReceiver.htmlfileEnabled?iframeUtils.createHtmlfile:iframeUtils.createIframe;global[iframeUtils.WPrefix][this.id]={start:function(){debug('start');self.iframeObj.loaded();},message:function(data){debug('message',data);self.emit('message',data);},stop:function(){debug('stop');self._cleanup();self._close('network');}};this.iframeObj=constructFunc(url,function(){debug('callback');self._cleanup();self._close('permanent');});}
inherits(HtmlfileReceiver,EventEmitter);HtmlfileReceiver.prototype.abort=function(){debug('abort');this._cleanup();this._close('user');};HtmlfileReceiver.prototype._cleanup=function(){debug('_cleanup');if(this.iframeObj){this.iframeObj.cleanup();this.iframeObj=null;}
delete global[iframeUtils.WPrefix][this.id];};HtmlfileReceiver.prototype._close=function(reason){debug('_close',reason);this.emit('close',null,reason);this.removeAllListeners();};HtmlfileReceiver.htmlfileEnabled=false;var axo=['Active'].concat('Object').join('X');if(axo in global){try{HtmlfileReceiver.htmlfileEnabled=!!new global[axo]('htmlfile');}catch(x){}}
HtmlfileReceiver.enabled=HtmlfileReceiver.htmlfileEnabled||iframeUtils.iframeEnabled;module.exports=HtmlfileReceiver;}).call(this,{env:{}},typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})
},{"../../utils/iframe":47,"../../utils/random":50,"../../utils/url":52,"debug":54,"events":3,"inherits":57}],31:[function(require,module,exports){(function(process,global){'use strict';var utils=require('../../utils/iframe'),random=require('../../utils/random'),browser=require('../../utils/browser'),urlUtils=require('../../utils/url'),inherits=require('inherits'),EventEmitter=require('events').EventEmitter;var debug=function(){};if(process.env.NODE_ENV!=='production'){debug=require('debug')('sockjs-client:receiver:jsonp');}
function JsonpReceiver(url){debug(url);var self=this;EventEmitter.call(this);utils.polluteGlobalNamespace();this.id='a'+random.string(6);var urlWithId=urlUtils.addQuery(url,'c='+encodeURIComponent(utils.WPrefix+'.'+this.id));global[utils.WPrefix][this.id]=this._callback.bind(this);this._createScript(urlWithId);this.timeoutId=setTimeout(function(){debug('timeout');self._abort(new Error('JSONP script loaded abnormally (timeout)'));},JsonpReceiver.timeout);}
inherits(JsonpReceiver,EventEmitter);JsonpReceiver.prototype.abort=function(){debug('abort');if(global[utils.WPrefix][this.id]){var err=new Error('JSONP user aborted read');err.code=1000;this._abort(err);}};JsonpReceiver.timeout=35000;JsonpReceiver.scriptErrorTimeout=1000;JsonpReceiver.prototype._callback=function(data){debug('_callback',data);this._cleanup();if(this.aborting){return;}
if(data){debug('message',data);this.emit('message',data);}
this.emit('close',null,'network');this.removeAllListeners();};JsonpReceiver.prototype._abort=function(err){debug('_abort',err);this._cleanup();this.aborting=true;this.emit('close',err.code,err.message);this.removeAllListeners();};JsonpReceiver.prototype._cleanup=function(){debug('_cleanup');clearTimeout(this.timeoutId);if(this.script2){this.script2.parentNode.removeChild(this.script2);this.script2=null;}
if(this.script){var script=this.script;
script.parentNode.removeChild(script);script.onreadystatechange=script.onerror=script.onload=script.onclick=null;this.script=null;}
delete global[utils.WPrefix][this.id];};JsonpReceiver.prototype._scriptError=function(){debug('_scriptError');var self=this;if(this.errorTimer){return;}
this.errorTimer=setTimeout(function(){if(!self.loadedOkay){self._abort(new Error('JSONP script loaded abnormally (onerror)'));}},JsonpReceiver.scriptErrorTimeout);};JsonpReceiver.prototype._createScript=function(url){debug('_createScript',url);var self=this;var script=this.script=global.document.createElement('script');var script2;script.id='a'+random.string(8);script.src=url;script.type='text/javascript';script.charset='UTF-8';script.onerror=this._scriptError.bind(this);script.onload=function(){debug('onload');self._abort(new Error('JSONP script loaded abnormally (onload)'));}; script.onreadystatechange=function(){debug('onreadystatechange',script.readyState);if(/loaded|closed/.test(script.readyState)){if(script&&script.htmlFor&&script.onclick){self.loadedOkay=true;try{script.onclick();}catch(x){}}
if(script){self._abort(new Error('JSONP script loaded abnormally (onreadystatechange)'));}}};




 if(typeof script.async==='undefined'&&global.document.attachEvent){
 if(!browser.isOpera()){ try{script.htmlFor=script.id;script.event='onclick';}catch(x){}
script.async=true;}else{ script2=this.script2=global.document.createElement('script');script2.text="try{var a = document.getElementById('"+script.id+"'); if(a)a.onerror();}catch(x){};";script.async=script2.async=false;}}
if(typeof script.async!=='undefined'){script.async=true;}
var head=global.document.getElementsByTagName('head')[0];head.insertBefore(script,head.firstChild);if(script2){head.insertBefore(script2,head.firstChild);}};module.exports=JsonpReceiver;}).call(this,{env:{}},typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})
},{"../../utils/browser":44,"../../utils/iframe":47,"../../utils/random":50,"../../utils/url":52,"debug":54,"events":3,"inherits":57}],32:[function(require,module,exports){(function(process){'use strict';var inherits=require('inherits'),EventEmitter=require('events').EventEmitter;var debug=function(){};if(process.env.NODE_ENV!=='production'){debug=require('debug')('sockjs-client:receiver:xhr');}
function XhrReceiver(url,AjaxObject){debug(url);EventEmitter.call(this);var self=this;this.bufferPosition=0;this.xo=new AjaxObject('POST',url,null);this.xo.on('chunk',this._chunkHandler.bind(this));this.xo.once('finish',function(status,text){debug('finish',status,text);self._chunkHandler(status,text);self.xo=null;var reason=status===200?'network':'permanent';debug('close',reason);self.emit('close',null,reason);self._cleanup();});}
inherits(XhrReceiver,EventEmitter);XhrReceiver.prototype._chunkHandler=function(status,text){debug('_chunkHandler',status);if(status!==200||!text){return;}
for(var idx=-1;;this.bufferPosition+=idx+1){var buf=text.slice(this.bufferPosition);idx=buf.indexOf('\n');if(idx===-1){break;}
var msg=buf.slice(0,idx);if(msg){debug('message',msg);this.emit('message',msg);}}};XhrReceiver.prototype._cleanup=function(){debug('_cleanup');this.removeAllListeners();};XhrReceiver.prototype.abort=function(){debug('abort');if(this.xo){this.xo.close();debug('close');this.emit('close',null,'user');this.xo=null;}
this._cleanup();};module.exports=XhrReceiver;}).call(this,{env:{}})
},{"debug":54,"events":3,"inherits":57}],33:[function(require,module,exports){(function(process,global){'use strict';var random=require('../../utils/random'),urlUtils=require('../../utils/url');var debug=function(){};if(process.env.NODE_ENV!=='production'){debug=require('debug')('sockjs-client:sender:jsonp');}
var form,area;function createIframe(id){debug('createIframe',id);try{return global.document.createElement('<iframe name="'+id+'">');}catch(x){var iframe=global.document.createElement('iframe');iframe.name=id;return iframe;}}
function createForm(){debug('createForm');form=global.document.createElement('form');form.style.display='none';form.style.position='absolute';form.method='POST';form.enctype='application/x-www-form-urlencoded';form.acceptCharset='UTF-8';area=global.document.createElement('textarea');area.name='d';form.appendChild(area);global.document.body.appendChild(form);}
module.exports=function(url,payload,callback){debug(url,payload);if(!form){createForm();}
var id='a'+random.string(8);form.target=id;form.action=urlUtils.addQuery(urlUtils.addPath(url,'/jsonp_send'),'i='+id);var iframe=createIframe(id);iframe.id=id;iframe.style.display='none';form.appendChild(iframe);try{area.value=payload;}catch(e){}
form.submit();var completed=function(err){debug('completed',id,err);if(!iframe.onerror){return;}
iframe.onreadystatechange=iframe.onerror=iframe.onload=null;
setTimeout(function(){debug('cleaning up',id);iframe.parentNode.removeChild(iframe);iframe=null;},500);area.value='';
callback(err);};iframe.onerror=function(){debug('onerror',id);completed();};iframe.onload=function(){debug('onload',id);completed();};iframe.onreadystatechange=function(e){debug('onreadystatechange',id,iframe.readyState,e);if(iframe.readyState==='complete'){completed();}};return function(){debug('aborted',id);completed(new Error('Aborted'));};};}).call(this,{env:{}},typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})
},{"../../utils/random":50,"../../utils/url":52,"debug":54}],34:[function(require,module,exports){(function(process,global){'use strict';var EventEmitter=require('events').EventEmitter,inherits=require('inherits'),eventUtils=require('../../utils/event'),browser=require('../../utils/browser'),urlUtils=require('../../utils/url');var debug=function(){};if(process.env.NODE_ENV!=='production'){debug=require('debug')('sockjs-client:sender:xdr');}

function XDRObject(method,url,payload){debug(method,url);var self=this;EventEmitter.call(this);setTimeout(function(){self._start(method,url,payload);},0);}
inherits(XDRObject,EventEmitter);XDRObject.prototype._start=function(method,url,payload){debug('_start');var self=this;var xdr=new global.XDomainRequest(); url=urlUtils.addQuery(url,'t='+(+new Date()));xdr.onerror=function(){debug('onerror');self._error();};xdr.ontimeout=function(){debug('ontimeout');self._error();};xdr.onprogress=function(){debug('progress',xdr.responseText);self.emit('chunk',200,xdr.responseText);};xdr.onload=function(){debug('load');self.emit('finish',200,xdr.responseText);self._cleanup(false);};this.xdr=xdr;this.unloadRef=eventUtils.unloadAdd(function(){self._cleanup(true);});try{ this.xdr.open(method,url);if(this.timeout){this.xdr.timeout=this.timeout;}
this.xdr.send(payload);}catch(x){this._error();}};XDRObject.prototype._error=function(){this.emit('finish',0,'');this._cleanup(false);};XDRObject.prototype._cleanup=function(abort){debug('cleanup',abort);if(!this.xdr){return;}
this.removeAllListeners();eventUtils.unloadDel(this.unloadRef);this.xdr.ontimeout=this.xdr.onerror=this.xdr.onprogress=this.xdr.onload=null;if(abort){try{this.xdr.abort();}catch(x){}}
this.unloadRef=this.xdr=null;};XDRObject.prototype.close=function(){debug('close');this._cleanup(true);};XDRObject.enabled=!!(global.XDomainRequest&&browser.hasDomain());module.exports=XDRObject;}).call(this,{env:{}},typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})
},{"../../utils/browser":44,"../../utils/event":46,"../../utils/url":52,"debug":54,"events":3,"inherits":57}],35:[function(require,module,exports){'use strict';var inherits=require('inherits'),XhrDriver=require('../driver/xhr');function XHRCorsObject(method,url,payload,opts){XhrDriver.call(this,method,url,payload,opts);}
inherits(XHRCorsObject,XhrDriver);XHRCorsObject.enabled=XhrDriver.enabled&&XhrDriver.supportsCORS;module.exports=XHRCorsObject;},{"../driver/xhr":17,"inherits":57}],36:[function(require,module,exports){'use strict';var EventEmitter=require('events').EventEmitter,inherits=require('inherits');function XHRFake(){var self=this;EventEmitter.call(this);this.to=setTimeout(function(){self.emit('finish',200,'{}');},XHRFake.timeout);}
inherits(XHRFake,EventEmitter);XHRFake.prototype.close=function(){clearTimeout(this.to);};XHRFake.timeout=2000;module.exports=XHRFake;},{"events":3,"inherits":57}],37:[function(require,module,exports){'use strict';var inherits=require('inherits'),XhrDriver=require('../driver/xhr');function XHRLocalObject(method,url,payload ){XhrDriver.call(this,method,url,payload,{noCredentials:true});}
inherits(XHRLocalObject,XhrDriver);XHRLocalObject.enabled=XhrDriver.enabled;module.exports=XHRLocalObject;},{"../driver/xhr":17,"inherits":57}],38:[function(require,module,exports){(function(process){'use strict';var utils=require('../utils/event'),urlUtils=require('../utils/url'),inherits=require('inherits'),EventEmitter=require('events').EventEmitter,WebsocketDriver=require('./driver/websocket');var debug=function(){};if(process.env.NODE_ENV!=='production'){debug=require('debug')('sockjs-client:websocket');}
function WebSocketTransport(transUrl){if(!WebSocketTransport.enabled()){throw new Error('Transport created when disabled');}
EventEmitter.call(this);debug('constructor',transUrl);var self=this;var url=urlUtils.addPath(transUrl,'/websocket');if(url.slice(0,5)==='https'){url='wss'+url.slice(5);}else{url='ws'+url.slice(4);}
this.url=url;this.ws=new WebsocketDriver(this.url);this.ws.onmessage=function(e){debug('message event',e.data);self.emit('message',e.data);};


 this.unloadRef=utils.unloadAdd(function(){debug('unload');self.ws.close();});this.ws.onclose=function(e){debug('close event',e.code,e.reason);self.emit('close',e.code,e.reason);self._cleanup();};this.ws.onerror=function(e){debug('error event',e);self.emit('close',1006,'WebSocket connection broken');self._cleanup();};}
inherits(WebSocketTransport,EventEmitter);WebSocketTransport.prototype.send=function(data){var msg='['+data+']';debug('send',msg);this.ws.send(msg);};WebSocketTransport.prototype.close=function(){debug('close');if(this.ws){this.ws.close();}
this._cleanup();};WebSocketTransport.prototype._cleanup=function(){debug('_cleanup');var ws=this.ws;if(ws){ws.onmessage=ws.onclose=ws.onerror=null;}
utils.unloadDel(this.unloadRef);this.unloadRef=this.ws=null;this.removeAllListeners();};WebSocketTransport.enabled=function(){debug('enabled');return!!WebsocketDriver;};WebSocketTransport.transportName='websocket';


WebSocketTransport.roundTrips=2;module.exports=WebSocketTransport;}).call(this,{env:{}})
},{"../utils/event":46,"../utils/url":52,"./driver/websocket":19,"debug":54,"events":3,"inherits":57}],39:[function(require,module,exports){'use strict';var inherits=require('inherits'),AjaxBasedTransport=require('./lib/ajax-based'),XdrStreamingTransport=require('./xdr-streaming'),XhrReceiver=require('./receiver/xhr'),XDRObject=require('./sender/xdr');function XdrPollingTransport(transUrl){if(!XDRObject.enabled){throw new Error('Transport created when disabled');}
AjaxBasedTransport.call(this,transUrl,'/xhr',XhrReceiver,XDRObject);}
inherits(XdrPollingTransport,AjaxBasedTransport);XdrPollingTransport.enabled=XdrStreamingTransport.enabled;XdrPollingTransport.transportName='xdr-polling';XdrPollingTransport.roundTrips=2;module.exports=XdrPollingTransport;},{"./lib/ajax-based":24,"./receiver/xhr":32,"./sender/xdr":34,"./xdr-streaming":40,"inherits":57}],40:[function(require,module,exports){'use strict';var inherits=require('inherits'),AjaxBasedTransport=require('./lib/ajax-based'),XhrReceiver=require('./receiver/xhr'),XDRObject=require('./sender/xdr');
function XdrStreamingTransport(transUrl){if(!XDRObject.enabled){throw new Error('Transport created when disabled');}
AjaxBasedTransport.call(this,transUrl,'/xhr_streaming',XhrReceiver,XDRObject);}
inherits(XdrStreamingTransport,AjaxBasedTransport);XdrStreamingTransport.enabled=function(info){if(info.cookie_needed||info.nullOrigin){return false;}
return XDRObject.enabled&&info.sameScheme;};XdrStreamingTransport.transportName='xdr-streaming';XdrStreamingTransport.roundTrips=2;module.exports=XdrStreamingTransport;},{"./lib/ajax-based":24,"./receiver/xhr":32,"./sender/xdr":34,"inherits":57}],41:[function(require,module,exports){'use strict';var inherits=require('inherits'),AjaxBasedTransport=require('./lib/ajax-based'),XhrReceiver=require('./receiver/xhr'),XHRCorsObject=require('./sender/xhr-cors'),XHRLocalObject=require('./sender/xhr-local');function XhrPollingTransport(transUrl){if(!XHRLocalObject.enabled&&!XHRCorsObject.enabled){throw new Error('Transport created when disabled');}
AjaxBasedTransport.call(this,transUrl,'/xhr',XhrReceiver,XHRCorsObject);}
inherits(XhrPollingTransport,AjaxBasedTransport);XhrPollingTransport.enabled=function(info){if(info.nullOrigin){return false;}
if(XHRLocalObject.enabled&&info.sameOrigin){return true;}
return XHRCorsObject.enabled;};XhrPollingTransport.transportName='xhr-polling';XhrPollingTransport.roundTrips=2;module.exports=XhrPollingTransport;},{"./lib/ajax-based":24,"./receiver/xhr":32,"./sender/xhr-cors":35,"./sender/xhr-local":37,"inherits":57}],42:[function(require,module,exports){(function(global){'use strict';var inherits=require('inherits'),AjaxBasedTransport=require('./lib/ajax-based'),XhrReceiver=require('./receiver/xhr'),XHRCorsObject=require('./sender/xhr-cors'),XHRLocalObject=require('./sender/xhr-local'),browser=require('../utils/browser');function XhrStreamingTransport(transUrl){if(!XHRLocalObject.enabled&&!XHRCorsObject.enabled){throw new Error('Transport created when disabled');}
AjaxBasedTransport.call(this,transUrl,'/xhr_streaming',XhrReceiver,XHRCorsObject);}
inherits(XhrStreamingTransport,AjaxBasedTransport);XhrStreamingTransport.enabled=function(info){if(info.nullOrigin){return false;}
 
if(browser.isOpera()){return false;}
return XHRCorsObject.enabled;};XhrStreamingTransport.transportName='xhr-streaming';XhrStreamingTransport.roundTrips=2;

XhrStreamingTransport.needBody=!!global.document;module.exports=XhrStreamingTransport;}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})
},{"../utils/browser":44,"./lib/ajax-based":24,"./receiver/xhr":32,"./sender/xhr-cors":35,"./sender/xhr-local":37,"inherits":57}],43:[function(require,module,exports){(function(global){'use strict';if(global.crypto&&global.crypto.getRandomValues){module.exports.randomBytes=function(length){var bytes=new Uint8Array(length);global.crypto.getRandomValues(bytes);return bytes;};}else{module.exports.randomBytes=function(length){var bytes=new Array(length);for(var i=0;i<length;i++){bytes[i]=Math.floor(Math.random()*256);}
return bytes;};}}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})
},{}],44:[function(require,module,exports){(function(global){'use strict';module.exports={isOpera:function(){return global.navigator&&/opera/i.test(global.navigator.userAgent);},isKonqueror:function(){return global.navigator&&/konqueror/i.test(global.navigator.userAgent);}
,hasDomain:function(){ if(!global.document){return true;}
try{return!!global.document.domain;}catch(e){return false;}}};}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})
},{}],45:[function(require,module,exports){'use strict';var JSON3=require('json3');
var extraEscapable=/[\x00-\x1f\ud800-\udfff\ufffe\uffff\u0300-\u0333\u033d-\u0346\u034a-\u034c\u0350-\u0352\u0357-\u0358\u035c-\u0362\u0374\u037e\u0387\u0591-\u05af\u05c4\u0610-\u0617\u0653-\u0654\u0657-\u065b\u065d-\u065e\u06df-\u06e2\u06eb-\u06ec\u0730\u0732-\u0733\u0735-\u0736\u073a\u073d\u073f-\u0741\u0743\u0745\u0747\u07eb-\u07f1\u0951\u0958-\u095f\u09dc-\u09dd\u09df\u0a33\u0a36\u0a59-\u0a5b\u0a5e\u0b5c-\u0b5d\u0e38-\u0e39\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69\u0f72-\u0f76\u0f78\u0f80-\u0f83\u0f93\u0f9d\u0fa2\u0fa7\u0fac\u0fb9\u1939-\u193a\u1a17\u1b6b\u1cda-\u1cdb\u1dc0-\u1dcf\u1dfc\u1dfe\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d\u1fbb\u1fbe\u1fc9\u1fcb\u1fd3\u1fdb\u1fe3\u1feb\u1fee-\u1fef\u1ff9\u1ffb\u1ffd\u2000-\u2001\u20d0-\u20d1\u20d4-\u20d7\u20e7-\u20e9\u2126\u212a-\u212b\u2329-\u232a\u2adc\u302b-\u302c\uaab2-\uaab3\uf900-\ufa0d\ufa10\ufa12\ufa15-\ufa1e\ufa20\ufa22\ufa25-\ufa26\ufa2a-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4e\ufff0-\uffff]/g,extraLookup;
var unrollLookup=function(escapable){var i;var unrolled={};var c=[];for(i=0;i<65536;i++){c.push(String.fromCharCode(i));}
escapable.lastIndex=0;c.join('').replace(escapable,function(a){unrolled[a]='\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);return'';});escapable.lastIndex=0;return unrolled;};
module.exports={quote:function(string){var quoted=JSON3.stringify(string);extraEscapable.lastIndex=0;if(!extraEscapable.test(quoted)){return quoted;}
if(!extraLookup){extraLookup=unrollLookup(extraEscapable);}
return quoted.replace(extraEscapable,function(a){return extraLookup[a];});}};},{"json3":58}],46:[function(require,module,exports){(function(global){'use strict';var random=require('./random');var onUnload={},afterUnload=false

,isChromePackagedApp=global.chrome&&global.chrome.app&&global.chrome.app.runtime;module.exports={attachEvent:function(event,listener){if(typeof global.addEventListener!=='undefined'){global.addEventListener(event,listener,false);}else if(global.document&&global.attachEvent){
global.document.attachEvent('on'+event,listener);global.attachEvent('on'+event,listener);}},detachEvent:function(event,listener){if(typeof global.addEventListener!=='undefined'){global.removeEventListener(event,listener,false);}else if(global.document&&global.detachEvent){global.document.detachEvent('on'+event,listener);global.detachEvent('on'+event,listener);}},unloadAdd:function(listener){if(isChromePackagedApp){return null;}
var ref=random.string(8);onUnload[ref]=listener;if(afterUnload){setTimeout(this.triggerUnloadCallbacks,0);}
return ref;},unloadDel:function(ref){if(ref in onUnload){delete onUnload[ref];}},triggerUnloadCallbacks:function(){for(var ref in onUnload){onUnload[ref]();delete onUnload[ref];}}};var unloadTriggered=function(){if(afterUnload){return;}
afterUnload=true;module.exports.triggerUnloadCallbacks();};
if(!isChromePackagedApp){module.exports.attachEvent('unload',unloadTriggered);}}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})
},{"./random":50}],47:[function(require,module,exports){(function(process,global){'use strict';var eventUtils=require('./event'),JSON3=require('json3'),browser=require('./browser');var debug=function(){};if(process.env.NODE_ENV!=='production'){debug=require('debug')('sockjs-client:utils:iframe');}
module.exports={WPrefix:'_jp',currentWindowId:null,polluteGlobalNamespace:function(){if(!(module.exports.WPrefix in global)){global[module.exports.WPrefix]={};}},postMessage:function(type,data){if(global.parent!==global){global.parent.postMessage(JSON3.stringify({windowId:module.exports.currentWindowId,type:type,data:data||''}),'*');}else{debug('Cannot postMessage, no parent window.',type,data);}},createIframe:function(iframeUrl,errorCallback){var iframe=global.document.createElement('iframe');var tref,unloadRef;var unattach=function(){debug('unattach');clearTimeout(tref);try{iframe.onload=null;}catch(x){}
iframe.onerror=null;};var cleanup=function(){debug('cleanup');if(iframe){unattach();

setTimeout(function(){if(iframe){iframe.parentNode.removeChild(iframe);}
iframe=null;},0);eventUtils.unloadDel(unloadRef);}};var onerror=function(err){debug('onerror',err);if(iframe){cleanup();errorCallback(err);}};var post=function(msg,origin){debug('post',msg,origin);try{
setTimeout(function(){if(iframe&&iframe.contentWindow){iframe.contentWindow.postMessage(msg,origin);}},0);}catch(x){}};iframe.src=iframeUrl;iframe.style.display='none';iframe.style.position='absolute';iframe.onerror=function(){onerror('onerror');};iframe.onload=function(){debug('onload');
clearTimeout(tref);tref=setTimeout(function(){onerror('onload timeout');},2000);};global.document.body.appendChild(iframe);tref=setTimeout(function(){onerror('timeout');},15000);unloadRef=eventUtils.unloadAdd(cleanup);return{post:post,cleanup:cleanup,loaded:unattach};}
,createHtmlfile:function(iframeUrl,errorCallback){var axo=['Active'].concat('Object').join('X');var doc=new global[axo]('htmlfile');var tref,unloadRef;var iframe;var unattach=function(){clearTimeout(tref);iframe.onerror=null;};var cleanup=function(){if(doc){unattach();eventUtils.unloadDel(unloadRef);iframe.parentNode.removeChild(iframe);iframe=doc=null;CollectGarbage();}};var onerror=function(r){debug('onerror',r);if(doc){cleanup();errorCallback(r);}};var post=function(msg,origin){try{
setTimeout(function(){if(iframe&&iframe.contentWindow){iframe.contentWindow.postMessage(msg,origin);}},0);}catch(x){}};doc.open();doc.write('<html><s'+'cript>'+'document.domain="'+global.document.domain+'";'+'</s'+'cript></html>');doc.close();doc.parentWindow[module.exports.WPrefix]=global[module.exports.WPrefix];var c=doc.createElement('div');doc.body.appendChild(c);iframe=doc.createElement('iframe');c.appendChild(iframe);iframe.src=iframeUrl;iframe.onerror=function(){onerror('onerror');};tref=setTimeout(function(){onerror('timeout');},15000);unloadRef=eventUtils.unloadAdd(cleanup);return{post:post,cleanup:cleanup,loaded:unattach};}};module.exports.iframeEnabled=false;if(global.document){
module.exports.iframeEnabled=(typeof global.postMessage==='function'||typeof global.postMessage==='object')&&(!browser.isKonqueror());}}).call(this,{env:{}},typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})
},{"./browser":44,"./event":46,"debug":54,"json3":58}],48:[function(require,module,exports){(function(global){'use strict';var logObject={};['log','debug','warn'].forEach(function(level){var levelExists=global.console&&global.console[level]&&global.console[level].apply;logObject[level]=levelExists?function(){return global.console[level].apply(global.console,arguments);}:(level==='log'?function(){}:logObject.log);});module.exports=logObject;}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})
},{}],49:[function(require,module,exports){'use strict';module.exports={isObject:function(obj){var type=typeof obj;return type==='function'||type==='object'&&!!obj;},extend:function(obj){if(!this.isObject(obj)){return obj;}
var source,prop;for(var i=1,length=arguments.length;i<length;i++){source=arguments[i];for(prop in source){if(Object.prototype.hasOwnProperty.call(source,prop)){obj[prop]=source[prop];}}}
return obj;}};},{}],50:[function(require,module,exports){'use strict';var crypto=require('crypto');
var _randomStringChars='abcdefghijklmnopqrstuvwxyz012345';module.exports={string:function(length){var max=_randomStringChars.length;var bytes=crypto.randomBytes(length);var ret=[];for(var i=0;i<length;i++){ret.push(_randomStringChars.substr(bytes[i]%max,1));}
return ret.join('');},number:function(max){return Math.floor(Math.random()*max);},numberString:function(max){var t=(''+(max-1)).length;var p=new Array(t+1).join('0');return(p+this.number(max)).slice(-t);}};},{"crypto":43}],51:[function(require,module,exports){(function(process){'use strict';var debug=function(){};if(process.env.NODE_ENV!=='production'){debug=require('debug')('sockjs-client:utils:transport');}
module.exports=function(availableTransports){return{filterToEnabled:function(transportsWhitelist,info){var transports={main:[],facade:[]};if(!transportsWhitelist){transportsWhitelist=[];}else if(typeof transportsWhitelist==='string'){transportsWhitelist=[transportsWhitelist];}
availableTransports.forEach(function(trans){if(!trans){return;}
if(trans.transportName==='websocket'&&info.websocket===false){debug('disabled from server','websocket');return;}
if(transportsWhitelist.length&&transportsWhitelist.indexOf(trans.transportName)===-1){debug('not in whitelist',trans.transportName);return;}
if(trans.enabled(info)){debug('enabled',trans.transportName);transports.main.push(trans);if(trans.facadeTransport){transports.facade.push(trans.facadeTransport);}}else{debug('disabled',trans.transportName);}});return transports;}};};}).call(this,{env:{}})
},{"debug":54}],52:[function(require,module,exports){(function(process){'use strict';var URL=require('url-parse');var debug=function(){};if(process.env.NODE_ENV!=='production'){debug=require('debug')('sockjs-client:utils:url');}
module.exports={getOrigin:function(url){if(!url){return null;}
var p=new URL(url);if(p.protocol==='file:'){return null;}
var port=p.port;if(!port){port=(p.protocol==='https:')?'443':'80';}
return p.protocol+'//'+p.hostname+':'+port;},isOriginEqual:function(a,b){var res=this.getOrigin(a)===this.getOrigin(b);debug('same',a,b,res);return res;},isSchemeEqual:function(a,b){return(a.split(':')[0]===b.split(':')[0]);},addPath:function(url,path){var qs=url.split('?');return qs[0]+path+(qs[1]?'?'+qs[1]:'');},addQuery:function(url,q){return url+(url.indexOf('?')===-1?('?'+q):('&'+q));}};}).call(this,{env:{}})
},{"debug":54,"url-parse":59}],53:[function(require,module,exports){module.exports='1.0.3';},{}],54:[function(require,module,exports){exports=module.exports=require('./debug');exports.log=log;exports.formatArgs=formatArgs;exports.save=save;exports.load=load;exports.useColors=useColors;var storage;if(typeof chrome!=='undefined'&&typeof chrome.storage!=='undefined')
storage=chrome.storage.local;else
storage=localstorage();exports.colors=['lightseagreen','forestgreen','goldenrod','dodgerblue','darkorchid','crimson'];function useColors(){ return('WebkitAppearance'in document.documentElement.style)||(window.console&&(console.firebug||(console.exception&&console.table)))||(navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31);}
exports.formatters.j=function(v){return JSON.stringify(v);};function formatArgs(){var args=arguments;var useColors=this.useColors;args[0]=(useColors?'%c':'')
+this.namespace
+(useColors?' %c':' ')
+args[0]
+(useColors?'%c ':' ')
+'+'+exports.humanize(this.diff);if(!useColors)return args;var c='color: '+this.color;args=[args[0],c,'color: inherit'].concat(Array.prototype.slice.call(args,1));

 var index=0;var lastC=0;args[0].replace(/%[a-z%]/g,function(match){if('%%'===match)return;index++;if('%c'===match){
lastC=index;}});args.splice(lastC,0,c);return args;}
function log(){
return'object'===typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments);}
function save(namespaces){try{if(null==namespaces){storage.removeItem('debug');}else{storage.debug=namespaces;}}catch(e){}}
function load(){var r;try{r=storage.debug;}catch(e){}
return r;}
exports.enable(load());function localstorage(){try{return window.localStorage;}catch(e){}}},{"./debug":55}],55:[function(require,module,exports){exports=module.exports=debug;exports.coerce=coerce;exports.disable=disable;exports.enable=enable;exports.enabled=enabled;exports.humanize=require('ms');exports.names=[];exports.skips=[];exports.formatters={};var prevColor=0;var prevTime;function selectColor(){return exports.colors[prevColor++%exports.colors.length];}
function debug(namespace){ function disabled(){}
disabled.enabled=false; function enabled(){var self=enabled; var curr=+new Date();var ms=curr-(prevTime||curr);self.diff=ms;self.prev=prevTime;self.curr=curr;prevTime=curr; if(null==self.useColors)self.useColors=exports.useColors();if(null==self.color&&self.useColors)self.color=selectColor();var args=Array.prototype.slice.call(arguments);args[0]=exports.coerce(args[0]);if('string'!==typeof args[0]){ args=['%o'].concat(args);} 
var index=0;args[0]=args[0].replace(/%([a-z%])/g,function(match,format){ if(match==='%%')return match;index++;var formatter=exports.formatters[format];if('function'===typeof formatter){var val=args[index];match=formatter.call(self,val);args.splice(index,1);index--;}
return match;});if('function'===typeof exports.formatArgs){args=exports.formatArgs.apply(self,args);}
var logFn=enabled.log||exports.log||console.log.bind(console);logFn.apply(self,args);}
enabled.enabled=true;var fn=exports.enabled(namespace)?enabled:disabled;fn.namespace=namespace;return fn;}
function enable(namespaces){exports.save(namespaces);var split=(namespaces||'').split(/[\s,]+/);var len=split.length;for(var i=0;i<len;i++){if(!split[i])continue; namespaces=split[i].replace(/\*/g,'.*?');if(namespaces[0]==='-'){exports.skips.push(new RegExp('^'+namespaces.substr(1)+'$'));}else{exports.names.push(new RegExp('^'+namespaces+'$'));}}}
function disable(){exports.enable('');}
function enabled(name){var i,len;for(i=0,len=exports.skips.length;i<len;i++){if(exports.skips[i].test(name)){return false;}}
for(i=0,len=exports.names.length;i<len;i++){if(exports.names[i].test(name)){return true;}}
return false;}
function coerce(val){if(val instanceof Error)return val.stack||val.message;return val;}},{"ms":56}],56:[function(require,module,exports){var s=1000;var m=s*60;var h=m*60;var d=h*24;var y=d*365.25;module.exports=function(val,options){options=options||{};if('string'==typeof val)return parse(val);return options.long?long(val):short(val);};function parse(str){var match=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);if(!match)return;var n=parseFloat(match[1]);var type=(match[2]||'ms').toLowerCase();switch(type){case'years':case'year':case'yrs':case'yr':case'y':return n*y;case'days':case'day':case'd':return n*d;case'hours':case'hour':case'hrs':case'hr':case'h':return n*h;case'minutes':case'minute':case'mins':case'min':case'm':return n*m;case'seconds':case'second':case'secs':case'sec':case's':return n*s;case'milliseconds':case'millisecond':case'msecs':case'msec':case'ms':return n;}}
function short(ms){if(ms>=d)return Math.round(ms/d)+'d';if(ms>=h)return Math.round(ms/h)+'h';if(ms>=m)return Math.round(ms/m)+'m';if(ms>=s)return Math.round(ms/s)+'s';return ms+'ms';}
function long(ms){return plural(ms,d,'day')||plural(ms,h,'hour')||plural(ms,m,'minute')||plural(ms,s,'second')||ms+' ms';}
function plural(ms,n,name){if(ms<n)return;if(ms<n*1.5)return Math.floor(ms/n)+' '+name;return Math.ceil(ms/n)+' '+name+'s';}},{}],57:[function(require,module,exports){if(typeof Object.create==='function'){ module.exports=function inherits(ctor,superCtor){ctor.super_=superCtor
ctor.prototype=Object.create(superCtor.prototype,{constructor:{value:ctor,enumerable:false,writable:true,configurable:true}});};}else{ module.exports=function inherits(ctor,superCtor){ctor.super_=superCtor
var TempCtor=function(){}
TempCtor.prototype=superCtor.prototype
ctor.prototype=new TempCtor()
ctor.prototype.constructor=ctor}}},{}],58:[function(require,module,exports){(function(global){;(function(){
var isLoader=typeof define==="function"&&define.amd;var objectTypes={"function":true,"object":true};var freeExports=objectTypes[typeof exports]&&exports&&!exports.nodeType&&exports;

var root=objectTypes[typeof window]&&window||this,freeGlobal=freeExports&&objectTypes[typeof module]&&module&&!module.nodeType&&typeof global=="object"&&global;if(freeGlobal&&(freeGlobal["global"]===freeGlobal||freeGlobal["window"]===freeGlobal||freeGlobal["self"]===freeGlobal)){root=freeGlobal;}

function runInContext(context,exports){context||(context=root["Object"]());exports||(exports=root["Object"]());var Number=context["Number"]||root["Number"],String=context["String"]||root["String"],Object=context["Object"]||root["Object"],Date=context["Date"]||root["Date"],SyntaxError=context["SyntaxError"]||root["SyntaxError"],TypeError=context["TypeError"]||root["TypeError"],Math=context["Math"]||root["Math"],nativeJSON=context["JSON"]||root["JSON"];if(typeof nativeJSON=="object"&&nativeJSON){exports.stringify=nativeJSON.stringify;exports.parse=nativeJSON.parse;}
var objectProto=Object.prototype,getClass=objectProto.toString,isProperty,forEach,undef;var isExtended=new Date(-3509827334573292);try{
isExtended=isExtended.getUTCFullYear()==-109252&&isExtended.getUTCMonth()===0&&isExtended.getUTCDate()===1&&
isExtended.getUTCHours()==10&&isExtended.getUTCMinutes()==37&&isExtended.getUTCSeconds()==6&&isExtended.getUTCMilliseconds()==708;}catch(exception){}
function has(name){if(has[name]!==undef){return has[name];}
var isSupported;if(name=="bug-string-char-index"){
isSupported="a"[0]!="a";}else if(name=="json"){
isSupported=has("json-stringify")&&has("json-parse");}else{var value,serialized='{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';if(name=="json-stringify"){var stringify=exports.stringify,stringifySupported=typeof stringify=="function"&&isExtended;if(stringifySupported){(value=function(){return 1;}).toJSON=value;try{stringifySupported=
stringify(0)==="0"&&
stringify(new Number())==="0"&&stringify(new String())=='""'&&


stringify(getClass)===undef&&
stringify(undef)===undef&&stringify()===undef&&

stringify(value)==="1"&&stringify([value])=="[1]"&&
stringify([undef])=="[null]"&&stringify(null)=="null"&&

stringify([undef,getClass,null])=="[null,null,null]"&&
stringify({"a":[value,true,false,null,"\x00\b\n\f\r\t"]})==serialized&&stringify(null,value)==="1"&&stringify([1,2],null,1)=="[\n 1,\n 2\n]"&&
stringify(new Date(-8.64e15))=='"-271821-04-20T00:00:00.000Z"'&&stringify(new Date(8.64e15))=='"+275760-09-13T00:00:00.000Z"'&&
stringify(new Date(-621987552e5))=='"-000001-01-01T00:00:00.000Z"'&&
stringify(new Date(-1))=='"1969-12-31T23:59:59.999Z"';}catch(exception){stringifySupported=false;}}
isSupported=stringifySupported;}
if(name=="json-parse"){var parse=exports.parse;if(typeof parse=="function"){try{
if(parse("0")===0&&!parse(false)){value=parse(serialized);var parseSupported=value["a"].length==5&&value["a"][0]===1;if(parseSupported){try{parseSupported=!parse('"\t"');}catch(exception){}
if(parseSupported){try{

parseSupported=parse("01")!==1;}catch(exception){}}
if(parseSupported){try{
parseSupported=parse("1.")!==1;}catch(exception){}}}}}catch(exception){parseSupported=false;}}
isSupported=parseSupported;}}
return has[name]=!!isSupported;}
if(!has("json")){var functionClass="[object Function]",dateClass="[object Date]",numberClass="[object Number]",stringClass="[object String]",arrayClass="[object Array]",booleanClass="[object Boolean]";var charIndexBuggy=has("bug-string-char-index");if(!isExtended){var floor=Math.floor;
var Months=[0,31,59,90,120,151,181,212,243,273,304,334];
var getDay=function(year,month){return Months[month]+365*(year-1970)+floor((year-1969+(month=+(month>1)))/4)-floor((year-1901+month)/100)+floor((year-1601+month)/400);};}

if(!(isProperty=objectProto.hasOwnProperty)){isProperty=function(property){var members={},constructor;if((members.__proto__=null,members.__proto__={
"toString":1},members).toString!=getClass){
isProperty=function(property){

var original=this.__proto__,result=property in(this.__proto__=null,this);this.__proto__=original;return result;};}else{constructor=members.constructor;
isProperty=function(property){var parent=(this.constructor||constructor).prototype;return property in this&&!(property in parent&&this[property]===parent[property]);};}
members=null;return isProperty.call(this,property);};}

forEach=function(object,callback){var size=0,Properties,members,property;

(Properties=function(){this.valueOf=0;}).prototype.valueOf=0;members=new Properties();for(property in members){if(isProperty.call(members,property)){size++;}}
Properties=members=null;if(!size){members=["valueOf","toString","toLocaleString","propertyIsEnumerable","isPrototypeOf","hasOwnProperty","constructor"];
forEach=function(object,callback){var isFunction=getClass.call(object)==functionClass,property,length;var hasProperty=!isFunction&&typeof object.constructor!="function"&&objectTypes[typeof object.hasOwnProperty]&&object.hasOwnProperty||isProperty;for(property in object){
if(!(isFunction&&property=="prototype")&&hasProperty.call(object,property)){callback(property);}}
for(length=members.length;property=members[--length];hasProperty.call(object,property)&&callback(property));};}else if(size==2){forEach=function(object,callback){var members={},isFunction=getClass.call(object)==functionClass,property;for(property in object){
if(!(isFunction&&property=="prototype")&&!isProperty.call(members,property)&&(members[property]=1)&&isProperty.call(object,property)){callback(property);}}};}else{forEach=function(object,callback){var isFunction=getClass.call(object)==functionClass,property,isConstructor;for(property in object){if(!(isFunction&&property=="prototype")&&isProperty.call(object,property)&&!(isConstructor=property==="constructor")){callback(property);}}

if(isConstructor||isProperty.call(object,(property="constructor"))){callback(property);}};}
return forEach(object,callback);};



if(!has("json-stringify")){var Escapes={92:"\\\\",34:'\\"',8:"\\b",12:"\\f",10:"\\n",13:"\\r",9:"\\t"};
var leadingZeroes="000000";var toPaddedString=function(width,value){
return(leadingZeroes+(value||0)).slice(-width);};


var unicodePrefix="\\u00";var quote=function(value){var result='"',index=0,length=value.length,useCharIndex=!charIndexBuggy||length>10;var symbols=useCharIndex&&(charIndexBuggy?value.split(""):value);for(;index<length;index++){var charCode=value.charCodeAt(index);
switch(charCode){case 8:case 9:case 10:case 12:case 13:case 34:case 92:result+=Escapes[charCode];break;default:if(charCode<32){result+=unicodePrefix+toPaddedString(2,charCode.toString(16));break;}
result+=useCharIndex?symbols[index]:value.charAt(index);}}
return result+'"';};
var serialize=function(property,object,callback,properties,whitespace,indentation,stack){var value,className,year,month,date,time,hours,minutes,seconds,milliseconds,results,element,index,length,prefix,result;try{value=object[property];}catch(exception){}
if(typeof value=="object"&&value){className=getClass.call(value);if(className==dateClass&&!isProperty.call(value,"toJSON")){if(value>-1/0&&value<1/0){

if(getDay){
date=floor(value/864e5);for(year=floor(date/365.2425)+1970-1;getDay(year+1,0)<=date;year++);for(month=floor((date-getDay(year,0))/30.42);getDay(year,month+1)<=date;month++);date=1+date-getDay(year,month);


time=(value%864e5+864e5)%864e5;
hours=floor(time/36e5)%24;minutes=floor(time/6e4)%60;seconds=floor(time/1e3)%60;milliseconds=time%1e3;}else{year=value.getUTCFullYear();month=value.getUTCMonth();date=value.getUTCDate();hours=value.getUTCHours();minutes=value.getUTCMinutes();seconds=value.getUTCSeconds();milliseconds=value.getUTCMilliseconds();}
value=(year<=0||year>=1e4?(year<0?"-":"+")+toPaddedString(6,year<0?-year:year):toPaddedString(4,year))+"-"+toPaddedString(2,month+1)+"-"+toPaddedString(2,date)+

"T"+toPaddedString(2,hours)+":"+toPaddedString(2,minutes)+":"+toPaddedString(2,seconds)+
"."+toPaddedString(3,milliseconds)+"Z";}else{value=null;}}else if(typeof value.toJSON=="function"&&((className!=numberClass&&className!=stringClass&&className!=arrayClass)||isProperty.call(value,"toJSON"))){


value=value.toJSON(property);}}
if(callback){
value=callback.call(object,property,value);}
if(value===null){return"null";}
className=getClass.call(value);if(className==booleanClass){return""+value;}else if(className==numberClass){
return value>-1/0&&value<1/0?""+value:"null";}else if(className==stringClass){return quote(""+value);}
if(typeof value=="object"){
for(length=stack.length;length--;){if(stack[length]===value){throw TypeError();}}
stack.push(value);results=[];prefix=indentation;indentation+=whitespace;if(className==arrayClass){for(index=0,length=value.length;index<length;index++){element=serialize(index,value,callback,properties,whitespace,indentation,stack);results.push(element===undef?"null":element);}
result=results.length?(whitespace?"[\n"+indentation+results.join(",\n"+indentation)+"\n"+prefix+"]":("["+results.join(",")+"]")):"[]";}else{

forEach(properties||value,function(property){var element=serialize(property,value,callback,properties,whitespace,indentation,stack);if(element!==undef){


results.push(quote(property)+":"+(whitespace?" ":"")+element);}});result=results.length?(whitespace?"{\n"+indentation+results.join(",\n"+indentation)+"\n"+prefix+"}":("{"+results.join(",")+"}")):"{}";}
stack.pop();return result;}};exports.stringify=function(source,filter,width){var whitespace,callback,properties,className;if(objectTypes[typeof filter]&&filter){if((className=getClass.call(filter))==functionClass){callback=filter;}else if(className==arrayClass){properties={};for(var index=0,length=filter.length,value;index<length;value=filter[index++],((className=getClass.call(value)),className==stringClass||className==numberClass)&&(properties[value]=1));}}
if(width){if((className=getClass.call(width))==numberClass){
if((width-=width%1)>0){for(whitespace="",width>10&&(width=10);whitespace.length<width;whitespace+=" ");}}else if(className==stringClass){whitespace=width.length<=10?width:width.slice(0,10);}}


return serialize("",(value={},value[""]=source,value),callback,properties,whitespace,"",[]);};}
if(!has("json-parse")){var fromCharCode=String.fromCharCode;
var Unescapes={92:"\\",34:'"',47:"/",98:"\b",116:"\t",110:"\n",102:"\f",114:"\r"};var Index,Source;var abort=function(){Index=Source=null;throw SyntaxError();};
var lex=function(){var source=Source,length=source.length,value,begin,position,isSigned,charCode;while(Index<length){charCode=source.charCodeAt(Index);switch(charCode){case 9:case 10:case 13:case 32:
Index++;break;case 123:case 125:case 91:case 93:case 58:case 44:
value=charIndexBuggy?source.charAt(Index):source[Index];Index++;return value;case 34:


for(value="@",Index++;Index<length;){charCode=source.charCodeAt(Index);if(charCode<32){
abort();}else if(charCode==92){

charCode=source.charCodeAt(++Index);switch(charCode){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:value+=Unescapes[charCode];Index++;break;case 117:
begin=++Index;for(position=Index+4;Index<position;Index++){charCode=source.charCodeAt(Index);if(!(charCode>=48&&charCode<=57||charCode>=97&&charCode<=102||charCode>=65&&charCode<=70)){abort();}}
value+=fromCharCode("0x"+source.slice(begin,Index));break;default:abort();}}else{if(charCode==34){
break;}
charCode=source.charCodeAt(Index);begin=Index;while(charCode>=32&&charCode!=92&&charCode!=34){charCode=source.charCodeAt(++Index);}
value+=source.slice(begin,Index);}}
if(source.charCodeAt(Index)==34){Index++;return value;}
abort();default:begin=Index;if(charCode==45){isSigned=true;charCode=source.charCodeAt(++Index);}
if(charCode>=48&&charCode<=57){if(charCode==48&&((charCode=source.charCodeAt(Index+1)),charCode>=48&&charCode<=57)){abort();}
isSigned=false;for(;Index<length&&((charCode=source.charCodeAt(Index)),charCode>=48&&charCode<=57);Index++);
if(source.charCodeAt(Index)==46){position=++Index;for(;position<length&&((charCode=source.charCodeAt(position)),charCode>=48&&charCode<=57);position++);if(position==Index){abort();}
Index=position;}

charCode=source.charCodeAt(Index);if(charCode==101||charCode==69){charCode=source.charCodeAt(++Index);
if(charCode==43||charCode==45){Index++;}
for(position=Index;position<length&&((charCode=source.charCodeAt(position)),charCode>=48&&charCode<=57);position++);if(position==Index){abort();}
Index=position;}
return+source.slice(begin,Index);}
if(isSigned){abort();}
if(source.slice(Index,Index+4)=="true"){Index+=4;return true;}else if(source.slice(Index,Index+5)=="false"){Index+=5;return false;}else if(source.slice(Index,Index+4)=="null"){Index+=4;return null;}
abort();}}

return"$";}; var get=function(value){var results,hasMembers;if(value=="$"){abort();}
if(typeof value=="string"){if((charIndexBuggy?value.charAt(0):value[0])=="@"){return value.slice(1);}
if(value=="["){results=[];for(;;hasMembers||(hasMembers=true)){value=lex();if(value=="]"){break;}


if(hasMembers){if(value==","){value=lex();if(value=="]"){abort();}}else{abort();}}
if(value==","){abort();}
results.push(get(value));}
return results;}else if(value=="{"){results={};for(;;hasMembers||(hasMembers=true)){value=lex();if(value=="}"){break;}

if(hasMembers){if(value==","){value=lex();if(value=="}"){abort();}}else{abort();}}


if(value==","||typeof value!="string"||(charIndexBuggy?value.charAt(0):value[0])!="@"||lex()!=":"){abort();}
results[value.slice(1)]=get(lex());}
return results;}
abort();}
return value;};var update=function(source,property,callback){var element=walk(source,property,callback);if(element===undef){delete source[property];}else{source[property]=element;}};

var walk=function(source,property,callback){var value=source[property],length;if(typeof value=="object"&&value){
if(getClass.call(value)==arrayClass){for(length=value.length;length--;){update(value,length,callback);}}else{forEach(value,function(property){update(value,property,callback);});}}
return callback.call(source,property,value);};exports.parse=function(source,callback){var result,value;Index=0;Source=""+source;result=get(lex());if(lex()!="$"){abort();}
Index=Source=null;return callback&&getClass.call(callback)==functionClass?walk((value={},value[""]=result,value),"",callback):result;};}}
exports["runInContext"]=runInContext;return exports;}
if(freeExports&&!isLoader){runInContext(root,freeExports);}else{var nativeJSON=root.JSON,previousJSON=root["JSON3"],isRestored=false;var JSON3=runInContext(root,(root["JSON3"]={
"noConflict":function(){if(!isRestored){isRestored=true;root.JSON=nativeJSON;root["JSON3"]=previousJSON;nativeJSON=previousJSON=null;}
return JSON3;}}));root.JSON={"parse":JSON3.parse,"stringify":JSON3.stringify};}
if(isLoader){define(function(){return JSON3;});}}).call(this);}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})
},{}],59:[function(require,module,exports){'use strict';var required=require('requires-port'),lolcation=require('./lolcation'),qs=require('querystringify'),relativere=/^\/(?!\/)/;var instructions=[['#','hash'],['?','query'],['//','protocol',2,1,1],['/','pathname'],['@','auth',1],[NaN,'host',undefined,1,1],[/\:(\d+)$/,'port'],[NaN,'hostname',undefined,1,1]
];function URL(address,location,parser){if(!(this instanceof URL)){return new URL(address,location,parser);}
var relative=relativere.test(address),parse,instruction,index,key,type=typeof location,url=this,i=0;



if('object'!==type&&'string'!==type){parser=location;location=null;}
if(parser&&'function'!==typeof parser){parser=qs.parse;}
location=lolcation(location);for(;i<instructions.length;i++){instruction=instructions[i];parse=instruction[0];key=instruction[1];if(parse!==parse){url[key]=address;}else if('string'===typeof parse){if(~(index=address.indexOf(parse))){if('number'===typeof instruction[2]){url[key]=address.slice(0,index);address=address.slice(index+instruction[2]);}else{url[key]=address.slice(index);address=address.slice(0,index);}}}else if(index=parse.exec(address)){url[key]=index[1];address=address.slice(0,address.length-index[0].length);}
url[key]=url[key]||(instruction[3]||('port'===key&&relative)?location[key]||'':'');
if(instruction[4]){url[key]=url[key].toLowerCase();}}


if(parser)url.query=parser(url.query);

if(!required(url.port,url.protocol)){url.host=url.hostname;url.port='';}
url.username=url.password='';if(url.auth){instruction=url.auth.split(':');url.username=instruction[0]||'';url.password=instruction[1]||'';}
url.href=url.toString();}
URL.prototype.set=function set(part,value,fn){var url=this;if('query'===part){if('string'===typeof value)value=(fn||qs.parse)(value);url[part]=value;}else if('port'===part){url[part]=value;if(!required(value,url.protocol)){url.host=url.hostname;url[part]='';}else if(value){url.host=url.hostname+':'+value;}}else if('hostname'===part){url[part]=value;if(url.port)value+=':'+url.port;url.host=value;}else if('host'===part){url[part]=value;if(/\:\d+/.test(value)){value=value.split(':');url.hostname=value[0];url.port=value[1];}}else{url[part]=value;}
url.href=url.toString();return url;};URL.prototype.toString=function toString(stringify){if(!stringify||'function'!==typeof stringify)stringify=qs.stringify;var query,url=this,result=url.protocol+'//';if(url.username){result+=url.username;if(url.password)result+=':'+url.password;result+='@';}
result+=url.hostname;if(url.port)result+=':'+url.port;result+=url.pathname;if(url.query){if('object'===typeof url.query)query=stringify(url.query);else query=url.query;result+=(query.charAt(0)==='?'?'':'?')+query;}
if(url.hash)result+=url.hash;return result;};
URL.qs=qs;URL.location=lolcation;module.exports=URL;},{"./lolcation":60,"querystringify":61,"requires-port":62}],60:[function(require,module,exports){(function(global){'use strict';var ignore={hash:1,query:1},URL;module.exports=function lolcation(loc){loc=loc||global.location||{};URL=URL||require('./');var finaldestination={},type=typeof loc,key;if('blob:'===loc.protocol){finaldestination=new URL(unescape(loc.pathname),{});}else if('string'===type){finaldestination=new URL(loc,{});for(key in ignore)delete finaldestination[key];}else if('object'===type)for(key in loc){if(key in ignore)continue;finaldestination[key]=loc[key];}
return finaldestination;};}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})
},{"./":59}],61:[function(require,module,exports){'use strict';var has=Object.prototype.hasOwnProperty;function querystring(query){var parser=/([^=?&]+)=([^&]*)/g,result={},part;

for(;part=parser.exec(query);result[decodeURIComponent(part[1])]=decodeURIComponent(part[2]));return result;}
function querystringify(obj,prefix){prefix=prefix||'';var pairs=[];
if('string'!==typeof prefix)prefix='?';for(var key in obj){if(has.call(obj,key)){pairs.push(encodeURIComponent(key)+'='+encodeURIComponent(obj[key]));}}
return pairs.length?prefix+pairs.join('&'):'';}
exports.stringify=querystringify;exports.parse=querystring;},{}],62:[function(require,module,exports){'use strict';module.exports=function required(port,protocol){protocol=protocol.split(':')[0];port=+port;if(!port)return false;switch(protocol){case'http':case'ws':return port!==80;case'https':case'wss':return port!==443;case'ftp':return port!==22;case'gopher':return port!==70;case'file':return false;}
return port!==0;};},{}]},{},[1])(1)}); (function(factory){if(typeof define==='function'&&define.amd){ define(['jquery'],factory);}else if(typeof exports==='object'){ factory(require('jquery'));}else{ factory(jQuery);}}(function($){var pluses=/\+/g;function encode(s){return config.raw?s:encodeURIComponent(s);}
function decode(s){return config.raw?s:decodeURIComponent(s);}
function stringifyCookieValue(value){return encode(config.json?JSON.stringify(value):String(value));}
function parseCookieValue(s){if(s.indexOf('"')===0){s=s.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,'\\');}
try{s=decodeURIComponent(s.replace(pluses,' '));return config.json?JSON.parse(s):s;}catch(e){}}
function read(s,converter){var value=config.raw?s:parseCookieValue(s);return $.isFunction(converter)?converter(value):value;}
var config=$.cookie=function(key,value,options){ if(value!==undefined&&!$.isFunction(value)){options=$.extend({},config.defaults,options);if(typeof options.expires==='number'){var days=options.expires,t=options.expires=new Date();t.setTime(+t+days*864e+5);}
return(document.cookie=[encode(key),'=',stringifyCookieValue(value),options.expires?'; expires='+options.expires.toUTCString():'', options.path?'; path='+options.path:'',options.domain?'; domain='+options.domain:'',options.secure?'; secure':''].join(''));} 
var result=key?undefined:{};

var cookies=document.cookie?document.cookie.split('; '):[];for(var i=0,l=cookies.length;i<l;i++){var parts=cookies[i].split('=');var name=decode(parts.shift());var cookie=parts.join('=');if(key&&key===name){result=read(cookie,value);break;}
if(!key&&(cookie=read(cookie))!==undefined){result[name]=cookie;}}
return result;};config.defaults={};$.removeCookie=function(key,options){if($.cookie(key)===undefined){return false;}
$.cookie(key,'',$.extend({},options,{expires:-1}));return!$.cookie(key);};}));!function(root,factory){if(typeof define==='function'&&define.amd){define(['jquery'],factory);}else if(typeof exports==='object'){factory(require('jquery'));}else{factory(root.jQuery);}}(this,function($){'use strict';$.fn.typeWatch=function(o){ var _supportedInputTypes=['TEXT','TEXTAREA','PASSWORD','TEL','SEARCH','URL','EMAIL','DATETIME','DATE','MONTH','WEEK','TIME','DATETIME-LOCAL','NUMBER','RANGE']; var options=$.extend({wait:750,callback:function(){},highlight:true,captureLength:2,inputTypes:_supportedInputTypes},o);function checkElement(timer,override){var value=$(timer.el).val(); if((value.length>=options.captureLength&&value.toUpperCase()!=timer.text)||(override&&value.length>=options.captureLength)||(value.length==0&&timer.text))
{timer.text=value.toUpperCase();timer.cb.call(timer.el,value);}};function watchElement(elem){var elementType=elem.type.toUpperCase();if($.inArray(elementType,options.inputTypes)>=0){ var timer={timer:null,text:$(elem).val().toUpperCase(),cb:options.callback,el:elem,wait:options.wait};if(options.highlight){$(elem).focus(function(){this.select();});} 
var startWatch=function(evt){var timerWait=timer.wait;var overrideBool=false;var evtElementType=this.type.toUpperCase(); if(typeof evt.keyCode!='undefined'&&evt.keyCode==13&&evtElementType!='TEXTAREA'&&$.inArray(evtElementType,options.inputTypes)>=0){timerWait=1;overrideBool=true;}
var timerCallbackFx=function(){checkElement(timer,overrideBool)} 
clearTimeout(timer.timer);timer.timer=setTimeout(timerCallbackFx,timerWait);};$(elem).on('keydown paste cut input change',startWatch);}}; return this.each(function(){watchElement(this);});};});;(function(window,document){var version='3.7.3';var options=window.html5||{};var reSkip=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;var saveClones=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;var supportsHtml5Styles;var expando='_html5shiv';var expanID=0;var expandoData={};var supportsUnknownElements;(function(){try{var a=document.createElement('a');a.innerHTML='<xyz></xyz>'; supportsHtml5Styles=('hidden'in a);supportsUnknownElements=a.childNodes.length==1||(function(){(document.createElement)('a');var frag=document.createDocumentFragment();return(typeof frag.cloneNode=='undefined'||typeof frag.createDocumentFragment=='undefined'||typeof frag.createElement=='undefined');}());}catch(e){ supportsHtml5Styles=true;supportsUnknownElements=true;}}());function addStyleSheet(ownerDocument,cssText){var p=ownerDocument.createElement('p'),parent=ownerDocument.getElementsByTagName('head')[0]||ownerDocument.documentElement;p.innerHTML='x<style>'+cssText+'</style>';return parent.insertBefore(p.lastChild,parent.firstChild);}
function getElements(){var elements=html5.elements;return typeof elements=='string'?elements.split(' '):elements;}
function addElements(newElements,ownerDocument){var elements=html5.elements;if(typeof elements!='string'){elements=elements.join(' ');}
if(typeof newElements!='string'){newElements=newElements.join(' ');}
html5.elements=elements+' '+newElements;shivDocument(ownerDocument);}
function getExpandoData(ownerDocument){var data=expandoData[ownerDocument[expando]];if(!data){data={};expanID++;ownerDocument[expando]=expanID;expandoData[expanID]=data;}
return data;}
function createElement(nodeName,ownerDocument,data){if(!ownerDocument){ownerDocument=document;}
if(supportsUnknownElements){return ownerDocument.createElement(nodeName);}
if(!data){data=getExpandoData(ownerDocument);}
var node;if(data.cache[nodeName]){node=data.cache[nodeName].cloneNode();}else if(saveClones.test(nodeName)){node=(data.cache[nodeName]=data.createElem(nodeName)).cloneNode();}else{node=data.createElem(nodeName);}




 
return node.canHaveChildren&&!reSkip.test(nodeName)&&!node.tagUrn?data.frag.appendChild(node):node;}
function createDocumentFragment(ownerDocument,data){if(!ownerDocument){ownerDocument=document;}
if(supportsUnknownElements){return ownerDocument.createDocumentFragment();}
data=data||getExpandoData(ownerDocument);var clone=data.frag.cloneNode(),i=0,elems=getElements(),l=elems.length;for(;i<l;i++){clone.createElement(elems[i]);}
return clone;}
function shivMethods(ownerDocument,data){if(!data.cache){data.cache={};data.createElem=ownerDocument.createElement;data.createFrag=ownerDocument.createDocumentFragment;data.frag=data.createFrag();}
ownerDocument.createElement=function(nodeName){ if(!html5.shivMethods){return data.createElem(nodeName);}
return createElement(nodeName,ownerDocument,data);};ownerDocument.createDocumentFragment=Function('h,f','return function(){'+'var n=f.cloneNode(),c=n.createElement;'+'h.shivMethods&&('+ 
getElements().join().replace(/[\w\-:]+/g,function(nodeName){data.createElem(nodeName);data.frag.createElement(nodeName);return'c("'+nodeName+'")';})+');return n}')(html5,data.frag);}
function shivDocument(ownerDocument){if(!ownerDocument){ownerDocument=document;}
var data=getExpandoData(ownerDocument);if(html5.shivCSS&&!supportsHtml5Styles&&!data.hasCSS){data.hasCSS=!!addStyleSheet(ownerDocument,'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}'+
'mark{background:#FF0;color:#000}'+
'template{display:none}');}
if(!supportsUnknownElements){shivMethods(ownerDocument,data);}
return ownerDocument;}
var html5={'elements':options.elements||'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video','version':version,'shivCSS':(options.shivCSS!==false),'supportsUnknownElements':supportsUnknownElements,'shivMethods':(options.shivMethods!==false),'type':'default','shivDocument':shivDocument, createElement:createElement, createDocumentFragment:createDocumentFragment, addElements:addElements}; window.html5=html5; shivDocument(document);if(typeof module=='object'&&module.exports){module.exports=html5;}}(typeof window!=="undefined"?window:this,document));(function(global,exports){var $d=global.document,$=(global.jQuery||global.Zepto||global.ender||$d),$$,$b,ke='keydown';function realTypeOf(v,s){return(v===null)?s==='null':(v===undefined)?s==='undefined':(v.is&&v instanceof $)?s==='element':Object.prototype.toString.call(v).toLowerCase().indexOf(s)>7;}
if($===$d){$$=function(selector,context){return selector?$.querySelector(selector,context||$):$;};$b=function(e,fn){e.addEventListener(ke,fn,false);};$f=function(e,jwertyEv){var ret=document.createEvent('Event'),i;ret.initEvent(ke,true,true);for(i in jwertyEv)ret[i]=jwertyEv[i];return(e||$).dispatchEvent(ret);}}else{$$=function(selector,context,fn){return $(selector||$d,context);};$b=function(e,fn){$(e).bind(ke+'.jwerty',fn);};$f=function(e,ob){$(e||$d).trigger($.Event(ke,ob));};} 
var _modProps={16:'shiftKey',17:'ctrlKey',18:'altKey',91:'metaKey'};var _keys={ mods:{'⇧':16,shift:16,'⌃':17,ctrl:17,'⌥':18,alt:18,option:18,'⌘':91,meta:91,cmd:91,'super':91,win:91}, keys:{'⌫':8,backspace:8,'⇥':9,'⇆':9,tab:9,'↩':13,'return':13,enter:13,'⌅':13,'pause':19,'pause-break':19,'⇪':20,caps:20,'caps-lock':20,'⎋':27,escape:27,esc:27, space:32,'↖':33,pgup:33,'page-up':33,'↘':34,pgdown:34,'page-down':34,'⇟':35,end:35,'⇞':36,home:36, ins:45,insert:45,del:46,'delete':46,'←':37,left:37,'arrow-left':37,'↑':38,up:38,'arrow-up':38,'→':39,right:39,'arrow-right':39,'↓':40,down:40,'arrow-down':40,'*':106,star:106,asterisk:106,multiply:106,'+':107,'plus':107,'-':109,subtract:109,';':186,semicolon:186,'=':187,'equals':187,',':188,comma:188,'.':190,period:190,'full-stop':190,'/':191,slash:191,'forward-slash':191,'`':192,tick:192,'back-quote':192,'[':219,'open-bracket':219,'\\':220,'back-slash':220,']':221,'close-bracket':221,'\'':222,quote:222,apostraphe:222}}; i=95,n=0;while(++i<106){_keys.keys['num-'+n]=i;++n;} 
i=47,n=0;while(++i<58){_keys.keys[n]=i;++n;} 
i=111,n=1;while(++i<136){_keys.keys['f'+n]=i;++n;} 
var i=64;while(++i<91){_keys.keys[String.fromCharCode(i).toLowerCase()]=i;}
function JwertyCode(jwertyCode){var i,c,n,z,keyCombo,optionals,jwertyCodeFragment,rangeMatches,rangeI;if(jwertyCode instanceof JwertyCode)return jwertyCode;if(!realTypeOf(jwertyCode,'array')){jwertyCode=(String(jwertyCode)).replace(/\s/g,'').toLowerCase().match(/(?:\+,|[^,])+/g);} 
for(i=0,c=jwertyCode.length;i<c;++i){if(!realTypeOf(jwertyCode[i],'array')){jwertyCode[i]=String(jwertyCode[i]).match(/(?:\+\/|[^\/])+/g);} 
optionals=[],n=jwertyCode[i].length;while(n--){ var jwertyCodeFragment=jwertyCode[i][n];keyCombo={jwertyCombo:String(jwertyCodeFragment),shiftKey:false,ctrlKey:false,altKey:false,metaKey:false}

if(!realTypeOf(jwertyCodeFragment,'array')){jwertyCodeFragment=String(jwertyCodeFragment).toLowerCase().match(/(?:(?:[^\+])+|\+\+|^\+$)/g);}
z=jwertyCodeFragment.length;while(z--){ if(jwertyCodeFragment[z]==='++')jwertyCodeFragment[z]='+'; if(jwertyCodeFragment[z]in _keys.mods){keyCombo[_modProps[_keys.mods[jwertyCodeFragment[z]]]]=true;}else if(jwertyCodeFragment[z]in _keys.keys){keyCombo.keyCode=_keys.keys[jwertyCodeFragment[z]];}else{rangeMatches=jwertyCodeFragment[z].match(/^\[([^-]+\-?[^-]*)-([^-]+\-?[^-]*)\]$/);}}
if(realTypeOf(keyCombo.keyCode,'undefined')){if(rangeMatches&&(rangeMatches[1]in _keys.keys)&&(rangeMatches[2]in _keys.keys)){rangeMatches[2]=_keys.keys[rangeMatches[2]];rangeMatches[1]=_keys.keys[rangeMatches[1]]; for(rangeI=rangeMatches[1];rangeI<rangeMatches[2];++rangeI){optionals.push({altKey:keyCombo.altKey,shiftKey:keyCombo.shiftKey,metaKey:keyCombo.metaKey,ctrlKey:keyCombo.ctrlKey,keyCode:rangeI,jwertyCombo:String(jwertyCodeFragment)});}
keyCombo.keyCode=rangeI;}else{keyCombo.keyCode=0;}}
optionals.push(keyCombo);}
this[i]=optionals;}
this.length=i;return this;}
var jwerty=exports.jwerty={event:function(jwertyCode,callbackFunction,callbackContext ){if(realTypeOf(callbackFunction,'boolean')){var bool=callbackFunction;callbackFunction=function(){return bool;}}
jwertyCode=new JwertyCode(jwertyCode);var i=0,c=jwertyCode.length-1,returnValue,jwertyCodeIs;return function(event){if((jwertyCodeIs=jwerty.is(jwertyCode,event,i))){if(i<c){++i;return;  
}else{returnValue=callbackFunction.call(callbackContext||this,event,jwertyCodeIs);
if(returnValue===false)event.preventDefault();i=0;return;}}  
i=jwerty.is(jwertyCode,event)?1:0;}},is:function(jwertyCode,event,i ){jwertyCode=new JwertyCode(jwertyCode); i=i||0;jwertyCode=jwertyCode[i];
event=event.originalEvent||event;var key,n=jwertyCode.length,returnValue=false; while(n--){returnValue=jwertyCode[n].jwertyCombo;for(var p in jwertyCode[n]){if(p!=='jwertyCombo'&&event[p]!=jwertyCode[n][p])returnValue=false;}
if(returnValue!==false)return returnValue;}
return returnValue;},key:function(jwertyCode,callbackFunction,callbackContext ,selector ,selectorContext ){


var realSelector=realTypeOf(callbackContext,'element')||realTypeOf(callbackContext,'string')?callbackContext:selector


,realcallbackContext=realSelector===callbackContext?global:callbackContext


,realSelectorContext=realSelector===callbackContext?selector:selectorContext;$b(realTypeOf(realSelector,'element')?realSelector:$$(realSelector,realSelectorContext),jwerty.event(jwertyCode,callbackFunction,realcallbackContext));},fire:function(jwertyCode,selector ,selectorContext ,i){jwertyCode=new JwertyCode(jwertyCode);var realI=realTypeOf(selectorContext,'number')?selectorContext:i;$f(realTypeOf(selector,'element')?selector:$$(selector,selectorContext),jwertyCode[realI||0][0]);},KEYS:_keys};}(this,(typeof module!=='undefined'&&module.exports?module.exports:this)));