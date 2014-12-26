(function(global,factory){if(typeof module==="object"&&typeof module.exports==="object"){module.exports=global.document?factory(global,true):function(w){if(!w.document){throw new Error("jQuery requires a window with a document");}
return factory(w);};}else{factory(global);}
}(typeof window!=="undefined"?window:this,function(window,noGlobal){


var arr=[];var slice=arr.slice;var concat=arr.concat;var push=arr.push;var indexOf=arr.indexOf;var class2type={};var toString=class2type.toString;var hasOwn=class2type.hasOwnProperty;var support={};var

document=window.document,version="2.1.3", jQuery=function(selector,context){return new jQuery.fn.init(selector,context);},
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
return obj;}, trim:function(text){return text==null?"":(text+"").replace(rtrim,"");}, makeArray:function(arr,results){var ret=results||[];if(arr!=null){if(isArraylike(Object(arr))){jQuery.merge(ret,typeof arr==="string"?[arr]:arr);}else{push.call(ret,arr);}}
return ret;},inArray:function(elem,arr,i){return arr==null?-1:indexOf.call(arr,elem,i);},merge:function(first,second){var len=+second.length,j=0,i=first.length;for(;j<len;j++){first[i++]=second[j];}
first.length=i;return first;},grep:function(elems,callback,invert){var callbackInverse,matches=[],i=0,length=elems.length,callbackExpect=!invert;
 for(;i<length;i++){callbackInverse=!callback(elems[i],i);if(callbackInverse!==callbackExpect){matches.push(elems[i]);}}
return matches;}, map:function(elems,callback,arg){var value,i=0,length=elems.length,isArray=isArraylike(elems),ret=[]; if(isArray){for(;i<length;i++){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}
}else{for(i in elems){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}} 
return concat.apply([],ret);}, guid:1,
proxy:function(fn,context){var tmp,args,proxy;if(typeof context==="string"){tmp=fn[context];context=fn;fn=tmp;}

if(!jQuery.isFunction(fn)){return undefined;} 
args=slice.call(arguments,2);proxy=function(){return fn.apply(context||this,args.concat(slice.call(arguments)));}; proxy.guid=fn.guid=fn.guid||jQuery.guid++;return proxy;},now:Date.now,
support:support});jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(i,name){class2type["[object "+name+"]"]=name.toLowerCase();});function isArraylike(obj){var length=obj.length,type=jQuery.type(obj);if(type==="function"||jQuery.isWindow(obj)){return false;}
if(obj.nodeType===1&&length){return true;}
return type==="array"||length===0||typeof length==="number"&&length>0&&(length-1)in obj;}
var Sizzle=(function(window){var i,support,Expr,getText,isXML,tokenize,compile,select,outermostContext,sortInput,hasDuplicate, setDocument,document,docElem,documentIsHTML,rbuggyQSA,rbuggyMatches,matches,contains, expando="sizzle"+1*new Date(),preferredDoc=window.document,dirruns=0,done=0,classCache=createCache(),tokenCache=createCache(),compilerCache=createCache(),sortOrder=function(a,b){if(a===b){hasDuplicate=true;}
return 0;}, MAX_NEGATIVE=1<<31, hasOwn=({}).hasOwnProperty,arr=[],pop=arr.pop,push_native=arr.push,push=arr.push,slice=arr.slice,
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
return i? siblingCheck(ap[i],bp[i]): ap[i]===preferredDoc?-1:bp[i]===preferredDoc?1:0;};return doc;};Sizzle.matches=function(expr,elements){return Sizzle(expr,null,null,elements);};Sizzle.matchesSelector=function(elem,expr){ if((elem.ownerDocument||elem)!==document){setDocument(elem);} 
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
push=ArrayProto.push,slice=ArrayProto.slice,concat=ArrayProto.concat,toString=ObjProto.toString,hasOwnProperty=ObjProto.hasOwnProperty;
var
nativeIsArray=Array.isArray,nativeKeys=Object.keys,nativeBind=FuncProto.bind;var _=function(obj){if(obj instanceof _)return obj;if(!(this instanceof _))return new _(obj);this._wrapped=obj;};

if(typeof exports!=='undefined'){if(typeof module!=='undefined'&&module.exports){exports=module.exports=_;}
exports._=_;}else{root._=_;}
_.VERSION='1.7.0';

var createCallback=function(func,context,argCount){if(context===void 0)return func;switch(argCount==null?3:argCount){case 1:return function(value){return func.call(context,value);};case 2:return function(value,other){return func.call(context,value,other);};case 3:return function(value,index,collection){return func.call(context,value,index,collection);};case 4:return function(accumulator,value,index,collection){return func.call(context,accumulator,value,index,collection);};}
return function(){return func.apply(context,arguments);};};

_.iteratee=function(value,context,argCount){if(value==null)return _.identity;if(_.isFunction(value))return createCallback(value,context,argCount);if(_.isObject(value))return _.matches(value);return _.property(value);};

_.each=_.forEach=function(obj,iteratee,context){if(obj==null)return obj;iteratee=createCallback(iteratee,context);var i,length=obj.length;if(length===+length){for(i=0;i<length;i++){iteratee(obj[i],i,obj);}}else{var keys=_.keys(obj);for(i=0,length=keys.length;i<length;i++){iteratee(obj[keys[i]],keys[i],obj);}}
return obj;};_.map=_.collect=function(obj,iteratee,context){if(obj==null)return[];iteratee=_.iteratee(iteratee,context);var keys=obj.length!==+obj.length&&_.keys(obj),length=(keys||obj).length,results=Array(length),currentKey;for(var index=0;index<length;index++){currentKey=keys?keys[index]:index;results[index]=iteratee(obj[currentKey],currentKey,obj);}
return results;};var reduceError='Reduce of empty array with no initial value';_.reduce=_.foldl=_.inject=function(obj,iteratee,memo,context){if(obj==null)obj=[];iteratee=createCallback(iteratee,context,4);var keys=obj.length!==+obj.length&&_.keys(obj),length=(keys||obj).length,index=0,currentKey;if(arguments.length<3){if(!length)throw new TypeError(reduceError);memo=obj[keys?keys[index++]:index++];}
for(;index<length;index++){currentKey=keys?keys[index]:index;memo=iteratee(memo,obj[currentKey],currentKey,obj);}
return memo;};_.reduceRight=_.foldr=function(obj,iteratee,memo,context){if(obj==null)obj=[];iteratee=createCallback(iteratee,context,4);var keys=obj.length!==+obj.length&&_.keys(obj),index=(keys||obj).length,currentKey;if(arguments.length<3){if(!index)throw new TypeError(reduceError);memo=obj[keys?keys[--index]:--index];}
while(index--){currentKey=keys?keys[index]:index;memo=iteratee(memo,obj[currentKey],currentKey,obj);}
return memo;};_.find=_.detect=function(obj,predicate,context){var result;predicate=_.iteratee(predicate,context);_.some(obj,function(value,index,list){if(predicate(value,index,list)){result=value;return true;}});return result;};_.filter=_.select=function(obj,predicate,context){var results=[];if(obj==null)return results;predicate=_.iteratee(predicate,context);_.each(obj,function(value,index,list){if(predicate(value,index,list))results.push(value);});return results;};_.reject=function(obj,predicate,context){return _.filter(obj,_.negate(_.iteratee(predicate)),context);};_.every=_.all=function(obj,predicate,context){if(obj==null)return true;predicate=_.iteratee(predicate,context);var keys=obj.length!==+obj.length&&_.keys(obj),length=(keys||obj).length,index,currentKey;for(index=0;index<length;index++){currentKey=keys?keys[index]:index;if(!predicate(obj[currentKey],currentKey,obj))return false;}
return true;};_.some=_.any=function(obj,predicate,context){if(obj==null)return false;predicate=_.iteratee(predicate,context);var keys=obj.length!==+obj.length&&_.keys(obj),length=(keys||obj).length,index,currentKey;for(index=0;index<length;index++){currentKey=keys?keys[index]:index;if(predicate(obj[currentKey],currentKey,obj))return true;}
return false;};_.contains=_.include=function(obj,target){if(obj==null)return false;if(obj.length!==+obj.length)obj=_.values(obj);return _.indexOf(obj,target)>=0;};_.invoke=function(obj,method){var args=slice.call(arguments,2);var isFunc=_.isFunction(method);return _.map(obj,function(value){return(isFunc?method:value[method]).apply(value,args);});};_.pluck=function(obj,key){return _.map(obj,_.property(key));};
_.where=function(obj,attrs){return _.filter(obj,_.matches(attrs));};
_.findWhere=function(obj,attrs){return _.find(obj,_.matches(attrs));};_.max=function(obj,iteratee,context){var result=-Infinity,lastComputed=-Infinity,value,computed;if(iteratee==null&&obj!=null){obj=obj.length===+obj.length?obj:_.values(obj);for(var i=0,length=obj.length;i<length;i++){value=obj[i];if(value>result){result=value;}}}else{iteratee=_.iteratee(iteratee,context);_.each(obj,function(value,index,list){computed=iteratee(value,index,list);if(computed>lastComputed||computed===-Infinity&&result===-Infinity){result=value;lastComputed=computed;}});}
return result;};_.min=function(obj,iteratee,context){var result=Infinity,lastComputed=Infinity,value,computed;if(iteratee==null&&obj!=null){obj=obj.length===+obj.length?obj:_.values(obj);for(var i=0,length=obj.length;i<length;i++){value=obj[i];if(value<result){result=value;}}}else{iteratee=_.iteratee(iteratee,context);_.each(obj,function(value,index,list){computed=iteratee(value,index,list);if(computed<lastComputed||computed===Infinity&&result===Infinity){result=value;lastComputed=computed;}});}
return result;};
_.shuffle=function(obj){var set=obj&&obj.length===+obj.length?obj:_.values(obj);var length=set.length;var shuffled=Array(length);for(var index=0,rand;index<length;index++){rand=_.random(0,index);if(rand!==index)shuffled[index]=shuffled[rand];shuffled[rand]=set[index];}
return shuffled;};_.sample=function(obj,n,guard){if(n==null||guard){if(obj.length!==+obj.length)obj=_.values(obj);return obj[_.random(obj.length-1)];}
return _.shuffle(obj).slice(0,Math.max(0,n));};_.sortBy=function(obj,iteratee,context){iteratee=_.iteratee(iteratee,context);return _.pluck(_.map(obj,function(value,index,list){return{value:value,index:index,criteria:iteratee(value,index,list)};}).sort(function(left,right){var a=left.criteria;var b=right.criteria;if(a!==b){if(a>b||a===void 0)return 1;if(a<b||b===void 0)return-1;}
return left.index-right.index;}),'value');};var group=function(behavior){return function(obj,iteratee,context){var result={};iteratee=_.iteratee(iteratee,context);_.each(obj,function(value,index){var key=iteratee(value,index,obj);behavior(result,value,key);});return result;};};
_.groupBy=group(function(result,value,key){if(_.has(result,key))result[key].push(value);else result[key]=[value];});
_.indexBy=group(function(result,value,key){result[key]=value;});

_.countBy=group(function(result,value,key){if(_.has(result,key))result[key]++;else result[key]=1;});
_.sortedIndex=function(array,obj,iteratee,context){iteratee=_.iteratee(iteratee,context,1);var value=iteratee(obj);var low=0,high=array.length;while(low<high){var mid=low+high>>>1;if(iteratee(array[mid])<value)low=mid+1;else high=mid;}
return low;};_.toArray=function(obj){if(!obj)return[];if(_.isArray(obj))return slice.call(obj);if(obj.length===+obj.length)return _.map(obj,_.identity);return _.values(obj);};_.size=function(obj){if(obj==null)return 0;return obj.length===+obj.length?obj.length:_.keys(obj).length;};
_.partition=function(obj,predicate,context){predicate=_.iteratee(predicate,context);var pass=[],fail=[];_.each(obj,function(value,key,obj){(predicate(value,key,obj)?pass:fail).push(value);});return[pass,fail];};


_.first=_.head=_.take=function(array,n,guard){if(array==null)return void 0;if(n==null||guard)return array[0];if(n<0)return[];return slice.call(array,0,n);};


_.initial=function(array,n,guard){return slice.call(array,0,Math.max(0,array.length-(n==null||guard?1:n)));};
_.last=function(array,n,guard){if(array==null)return void 0;if(n==null||guard)return array[array.length-1];return slice.call(array,Math.max(array.length-n,0));};
_.rest=_.tail=_.drop=function(array,n,guard){return slice.call(array,n==null||guard?1:n);};_.compact=function(array){return _.filter(array,_.identity);};var flatten=function(input,shallow,strict,output){if(shallow&&_.every(input,_.isArray)){return concat.apply(output,input);}
for(var i=0,length=input.length;i<length;i++){var value=input[i];if(!_.isArray(value)&&!_.isArguments(value)){if(!strict)output.push(value);}else if(shallow){push.apply(output,value);}else{flatten(value,shallow,strict,output);}}
return output;};_.flatten=function(array,shallow){return flatten(array,shallow,false,[]);};_.without=function(array){return _.difference(array,slice.call(arguments,1));};
_.uniq=_.unique=function(array,isSorted,iteratee,context){if(array==null)return[];if(!_.isBoolean(isSorted)){context=iteratee;iteratee=isSorted;isSorted=false;}
if(iteratee!=null)iteratee=_.iteratee(iteratee,context);var result=[];var seen=[];for(var i=0,length=array.length;i<length;i++){var value=array[i];if(isSorted){if(!i||seen!==value)result.push(value);seen=value;}else if(iteratee){var computed=iteratee(value,i,array);if(_.indexOf(seen,computed)<0){seen.push(computed);result.push(value);}}else if(_.indexOf(result,value)<0){result.push(value);}}
return result;};
_.union=function(){return _.uniq(flatten(arguments,true,true,[]));};
_.intersection=function(array){if(array==null)return[];var result=[];var argsLength=arguments.length;for(var i=0,length=array.length;i<length;i++){var item=array[i];if(_.contains(result,item))continue;for(var j=1;j<argsLength;j++){if(!_.contains(arguments[j],item))break;}
if(j===argsLength)result.push(item);}
return result;};_.difference=function(array){var rest=flatten(slice.call(arguments,1),true,true,[]);return _.filter(array,function(value){return!_.contains(rest,value);});};
_.zip=function(array){if(array==null)return[];var length=_.max(arguments,'length').length;var results=Array(length);for(var i=0;i<length;i++){results[i]=_.pluck(arguments,i);}
return results;};
_.object=function(list,values){if(list==null)return{};var result={};for(var i=0,length=list.length;i<length;i++){if(values){result[list[i]]=values[i];}else{result[list[i][0]]=list[i][1];}}
return result;};_.indexOf=function(array,item,isSorted){if(array==null)return-1;var i=0,length=array.length;if(isSorted){if(typeof isSorted=='number'){i=isSorted<0?Math.max(0,length+isSorted):isSorted;}else{i=_.sortedIndex(array,item);return array[i]===item?i:-1;}}
for(;i<length;i++)if(array[i]===item)return i;return-1;};_.lastIndexOf=function(array,item,from){if(array==null)return-1;var idx=array.length;if(typeof from=='number'){idx=from<0?idx+from+1:Math.min(idx,from+1);}
while(--idx>=0)if(array[idx]===item)return idx;return-1;};

_.range=function(start,stop,step){if(arguments.length<=1){stop=start||0;start=0;}
step=step||1;var length=Math.max(Math.ceil((stop-start)/step),0);var range=Array(length);for(var idx=0;idx<length;idx++,start+=step){range[idx]=start;}
return range;};
var Ctor=function(){};
_.bind=function(func,context){var args,bound;if(nativeBind&&func.bind===nativeBind)return nativeBind.apply(func,slice.call(arguments,1));if(!_.isFunction(func))throw new TypeError('Bind must be called on a function');args=slice.call(arguments,2);bound=function(){if(!(this instanceof bound))return func.apply(context,args.concat(slice.call(arguments)));Ctor.prototype=func.prototype;var self=new Ctor;Ctor.prototype=null;var result=func.apply(self,args.concat(slice.call(arguments)));if(_.isObject(result))return result;return self;};return bound;};

_.partial=function(func){var boundArgs=slice.call(arguments,1);return function(){var position=0;var args=boundArgs.slice();for(var i=0,length=args.length;i<length;i++){if(args[i]===_)args[i]=arguments[position++];}
while(position<arguments.length)args.push(arguments[position++]);return func.apply(this,args);};};

_.bindAll=function(obj){var i,length=arguments.length,key;if(length<=1)throw new Error('bindAll must be passed function names');for(i=1;i<length;i++){key=arguments[i];obj[key]=_.bind(obj[key],obj);}
return obj;};_.memoize=function(func,hasher){var memoize=function(key){var cache=memoize.cache;var address=hasher?hasher.apply(this,arguments):key;if(!_.has(cache,address))cache[address]=func.apply(this,arguments);return cache[address];};memoize.cache={};return memoize;};
_.delay=function(func,wait){var args=slice.call(arguments,2);return setTimeout(function(){return func.apply(null,args);},wait);};
_.defer=function(func){return _.delay.apply(_,[func,1].concat(slice.call(arguments,1)));};


_.throttle=function(func,wait,options){var context,args,result;var timeout=null;var previous=0;if(!options)options={};var later=function(){previous=options.leading===false?0:_.now();timeout=null;result=func.apply(context,args);if(!timeout)context=args=null;};return function(){var now=_.now();if(!previous&&options.leading===false)previous=now;var remaining=wait-(now-previous);context=this;args=arguments;if(remaining<=0||remaining>wait){clearTimeout(timeout);timeout=null;previous=now;result=func.apply(context,args);if(!timeout)context=args=null;}else if(!timeout&&options.trailing!==false){timeout=setTimeout(later,remaining);}
return result;};};


_.debounce=function(func,wait,immediate){var timeout,args,context,timestamp,result;var later=function(){var last=_.now()-timestamp;if(last<wait&&last>0){timeout=setTimeout(later,wait-last);}else{timeout=null;if(!immediate){result=func.apply(context,args);if(!timeout)context=args=null;}}};return function(){context=this;args=arguments;timestamp=_.now();var callNow=immediate&&!timeout;if(!timeout)timeout=setTimeout(later,wait);if(callNow){result=func.apply(context,args);context=args=null;}
return result;};};
_.wrap=function(func,wrapper){return _.partial(wrapper,func);};_.negate=function(predicate){return function(){return!predicate.apply(this,arguments);};};
_.compose=function(){var args=arguments;var start=args.length-1;return function(){var i=start;var result=args[start].apply(this,arguments);while(i--)result=args[i].call(this,result);return result;};};_.after=function(times,func){return function(){if(--times<1){return func.apply(this,arguments);}};};_.before=function(times,func){var memo;return function(){if(--times>0){memo=func.apply(this,arguments);}else{func=null;}
return memo;};};
_.once=_.partial(_.before,2);
_.keys=function(obj){if(!_.isObject(obj))return[];if(nativeKeys)return nativeKeys(obj);var keys=[];for(var key in obj)if(_.has(obj,key))keys.push(key);return keys;};_.values=function(obj){var keys=_.keys(obj);var length=keys.length;var values=Array(length);for(var i=0;i<length;i++){values[i]=obj[keys[i]];}
return values;};_.pairs=function(obj){var keys=_.keys(obj);var length=keys.length;var pairs=Array(length);for(var i=0;i<length;i++){pairs[i]=[keys[i],obj[keys[i]]];}
return pairs;};_.invert=function(obj){var result={};var keys=_.keys(obj);for(var i=0,length=keys.length;i<length;i++){result[obj[keys[i]]]=keys[i];}
return result;};_.functions=_.methods=function(obj){var names=[];for(var key in obj){if(_.isFunction(obj[key]))names.push(key);}
return names.sort();};_.extend=function(obj){if(!_.isObject(obj))return obj;var source,prop;for(var i=1,length=arguments.length;i<length;i++){source=arguments[i];for(prop in source){if(hasOwnProperty.call(source,prop)){obj[prop]=source[prop];}}}
return obj;};_.pick=function(obj,iteratee,context){var result={},key;if(obj==null)return result;if(_.isFunction(iteratee)){iteratee=createCallback(iteratee,context);for(key in obj){var value=obj[key];if(iteratee(value,key,obj))result[key]=value;}}else{var keys=concat.apply([],slice.call(arguments,1));obj=new Object(obj);for(var i=0,length=keys.length;i<length;i++){key=keys[i];if(key in obj)result[key]=obj[key];}}
return result;};_.omit=function(obj,iteratee,context){if(_.isFunction(iteratee)){iteratee=_.negate(iteratee);}else{var keys=_.map(concat.apply([],slice.call(arguments,1)),String);iteratee=function(value,key){return!_.contains(keys,key);};}
return _.pick(obj,iteratee,context);};_.defaults=function(obj){if(!_.isObject(obj))return obj;for(var i=1,length=arguments.length;i<length;i++){var source=arguments[i];for(var prop in source){if(obj[prop]===void 0)obj[prop]=source[prop];}}
return obj;};_.clone=function(obj){if(!_.isObject(obj))return obj;return _.isArray(obj)?obj.slice():_.extend({},obj);};
_.tap=function(obj,interceptor){interceptor(obj);return obj;};var eq=function(a,b,aStack,bStack){if(a===b)return a!==0||1/a===1/b;if(a==null||b==null)return a===b;if(a instanceof _)a=a._wrapped;if(b instanceof _)b=b._wrapped;var className=toString.call(a);if(className!==toString.call(b))return false;switch(className){case'[object RegExp]':case'[object String]':
return''+a===''+b;case'[object Number]': if(+a!==+a)return+b!==+b;return+a===0?1/+a===1/b:+a===+b;case'[object Date]':case'[object Boolean]':

return+a===+b;}
if(typeof a!='object'||typeof b!='object')return false;
var length=aStack.length;while(length--){
if(aStack[length]===a)return bStack[length]===b;}

var aCtor=a.constructor,bCtor=b.constructor;if(aCtor!==bCtor&&'constructor'in a&&'constructor'in b&&!(_.isFunction(aCtor)&&aCtor instanceof aCtor&&_.isFunction(bCtor)&&bCtor instanceof bCtor)){return false;}
aStack.push(a);bStack.push(b);var size,result;if(className==='[object Array]'){size=a.length;result=size===b.length;if(result){while(size--){if(!(result=eq(a[size],b[size],aStack,bStack)))break;}}}else{var keys=_.keys(a),key;size=keys.length;result=_.keys(b).length===size;if(result){while(size--){ key=keys[size];if(!(result=_.has(b,key)&&eq(a[key],b[key],aStack,bStack)))break;}}}
aStack.pop();bStack.pop();return result;};_.isEqual=function(a,b){return eq(a,b,[],[]);};_.isEmpty=function(obj){if(obj==null)return true;if(_.isArray(obj)||_.isString(obj)||_.isArguments(obj))return obj.length===0;for(var key in obj)if(_.has(obj,key))return false;return true;};_.isElement=function(obj){return!!(obj&&obj.nodeType===1);}; _.isArray=nativeIsArray||function(obj){return toString.call(obj)==='[object Array]';};_.isObject=function(obj){var type=typeof obj;return type==='function'||type==='object'&&!!obj;};_.each(['Arguments','Function','String','Number','Date','RegExp'],function(name){_['is'+name]=function(obj){return toString.call(obj)==='[object '+name+']';};});
if(!_.isArguments(arguments)){_.isArguments=function(obj){return _.has(obj,'callee');};}
if(typeof/./!=='function'){_.isFunction=function(obj){return typeof obj=='function'||false;};}
_.isFinite=function(obj){return isFinite(obj)&&!isNaN(parseFloat(obj));};_.isNaN=function(obj){return _.isNumber(obj)&&obj!==+obj;};_.isBoolean=function(obj){return obj===true||obj===false||toString.call(obj)==='[object Boolean]';};_.isNull=function(obj){return obj===null;};_.isUndefined=function(obj){return obj===void 0;};
_.has=function(obj,key){return obj!=null&&hasOwnProperty.call(obj,key);};

_.noConflict=function(){root._=previousUnderscore;return this;};_.identity=function(value){return value;};_.constant=function(value){return function(){return value;};};_.noop=function(){};_.property=function(key){return function(obj){return obj[key];};};_.matches=function(attrs){var pairs=_.pairs(attrs),length=pairs.length;return function(obj){if(obj==null)return!length;obj=new Object(obj);for(var i=0;i<length;i++){var pair=pairs[i],key=pair[0];if(pair[1]!==obj[key]||!(key in obj))return false;}
return true;};};_.times=function(n,iteratee,context){var accum=Array(Math.max(0,n));iteratee=createCallback(iteratee,context,1);for(var i=0;i<n;i++)accum[i]=iteratee(i);return accum;};_.random=function(min,max){if(max==null){max=min;min=0;}
return min+Math.floor(Math.random()*(max-min+1));};_.now=Date.now||function(){return new Date().getTime();};var escapeMap={'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#x27;','`':'&#x60;'};var unescapeMap=_.invert(escapeMap);var createEscaper=function(map){var escaper=function(match){return map[match];}; var source='(?:'+_.keys(map).join('|')+')';var testRegexp=RegExp(source);var replaceRegexp=RegExp(source,'g');return function(string){string=string==null?'':''+string;return testRegexp.test(string)?string.replace(replaceRegexp,escaper):string;};};_.escape=createEscaper(escapeMap);_.unescape=createEscaper(unescapeMap);
_.result=function(object,property){if(object==null)return void 0;var value=object[property];return _.isFunction(value)?object[property]():value;};var idCounter=0;_.uniqueId=function(prefix){var id=++idCounter+'';return prefix?prefix+id:id;};
_.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};

var noMatch=/(.)^/;
var escapes={"'":"'",'\\':'\\','\r':'r','\n':'n','\u2028':'u2028','\u2029':'u2029'};var escaper=/\\|'|\r|\n|\u2028|\u2029/g;var escapeChar=function(match){return'\\'+escapes[match];};_.template=function(text,settings,oldSettings){if(!settings&&oldSettings)settings=oldSettings;settings=_.defaults({},settings,_.templateSettings);var matcher=RegExp([(settings.escape||noMatch).source,(settings.interpolate||noMatch).source,(settings.evaluate||noMatch).source].join('|')+'|$','g');var index=0;var source="__p+='";text.replace(matcher,function(match,escape,interpolate,evaluate,offset){source+=text.slice(index,offset).replace(escaper,escapeChar);index=offset+match.length;if(escape){source+="'+\n((__t=("+escape+"))==null?'':_.escape(__t))+\n'";}else if(interpolate){source+="'+\n((__t=("+interpolate+"))==null?'':__t)+\n'";}else if(evaluate){source+="';\n"+evaluate+"\n__p+='";}
return match;});source+="';\n";if(!settings.variable)source='with(obj||{}){\n'+source+'}\n';source="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+
source+'return __p;\n';try{var render=new Function(settings.variable||'obj','_',source);}catch(e){e.source=source;throw e;}
var template=function(data){return render.call(this,data,_);};var argument=settings.variable||'obj';template.source='function('+argument+'){\n'+source+'}';return template;};_.chain=function(obj){var instance=_(obj);instance._chain=true;return instance;};


var result=function(obj){return this._chain?_(obj).chain():obj;};_.mixin=function(obj){_.each(_.functions(obj),function(name){var func=_[name]=obj[name];_.prototype[name]=function(){var args=[this._wrapped];push.apply(args,arguments);return result.call(this,func.apply(_,args));};});};_.mixin(_);_.each(['pop','push','reverse','shift','sort','splice','unshift'],function(name){var method=ArrayProto[name];_.prototype[name]=function(){var obj=this._wrapped;method.apply(obj,arguments);if((name==='shift'||name==='splice')&&obj.length===0)delete obj[0];return result.call(this,obj);};});_.each(['concat','join','slice'],function(name){var method=ArrayProto[name];_.prototype[name]=function(){return result.call(this,method.apply(this._wrapped,arguments));};});_.prototype.value=function(){return this._wrapped;};





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
return 0;};}};Sifter.prototype.prepareSearch=function(query,options){if(typeof query==='object')return query;options=extend({},options);var option_fields=options.fields;var option_sort=options.sort;var option_sort_empty=options.sort_empty;if(option_fields&&!is_array(option_fields))options.fields=[option_fields];if(option_sort&&!is_array(option_sort))options.sort=[option_sort];if(option_sort_empty&&!is_array(option_sort_empty))options.sort_empty=[option_sort_empty];return{options:options,query:String(query||'').toLowerCase(),tokens:this.tokenize(query),total:0,items:[]};};Sifter.prototype.search=function(query,options){var self=this,value,score,search,calculateScore;var fn_sort;var fn_score;search=this.prepareSearch(query,options);options=search.options;query=search.query; fn_score=options.score||self.getScoreFunction(search); if(query.length){self.iterator(self.items,function(item,id){score=fn_score(item);if(options.filter===false||score>0){search.items.push({'score':score,'id':id});}});}else{self.iterator(self.items,function(item,id){search.items.push({'score':1,'id':id});});}
fn_sort=self.getSortFunction(search,options);if(fn_sort)search.items.sort(fn_sort); search.total=search.items.length;if(typeof options.limit==='number'){search.items=search.items.slice(0,options.limit);}
return search;};
var cmp=function(a,b){if(typeof a==='number'&&typeof b==='number'){return a>b?1:(a<b?-1:0);}
a=String(a||'').toLowerCase();b=String(b||'').toLowerCase();if(a>b)return 1;if(b>a)return-1;return 0;};var extend=function(a,b){var i,n,k,object;for(i=1,n=arguments.length;i<n;i++){object=arguments[i];if(!object)continue;for(k in object){if(object.hasOwnProperty(k)){a[k]=object[k];}}}
return a;};var trim=function(str){return(str+'').replace(/^\s+|\s+$|/g,'');};var escape_regex=function(str){return(str+'').replace(/([.?*+^$[\]\\(){}|-])/g,'\\$1');};var is_array=Array.isArray||($&&$.isArray)||function(object){return Object.prototype.toString.call(object)==='[object Array]';};var DIACRITICS={'a':'[aÀÁÂÃÄÅàáâãäåĀā]','c':'[cÇçćĆčČ]','d':'[dđĐďĎ]','e':'[eÈÉÊËèéêëěĚĒē]','i':'[iÌÍÎÏìíîïĪī]','n':'[nÑñňŇ]','o':'[oÒÓÔÕÕÖØòóôõöøŌō]','r':'[rřŘ]','s':'[sŠš]','t':'[tťŤ]','u':'[uÙÚÛÜùúûüůŮŪū]','y':'[yŸÿýÝ]','z':'[zŽž]'};
return Sifter;}));(function(root,factory){if(typeof define==='function'&&define.amd){define(['jquery','sifter','microplugin'],factory);}else if(typeof exports==='object'){module.exports=factory(require('jquery'),require('sifter'),require('microplugin'));}else{root.Selectize=factory(root.jQuery,root.Sifter,root.MicroPlugin);}}(this,function($,Sifter,MicroPlugin){'use strict';var highlight=function($element,pattern){if(typeof pattern==='string'&&!pattern.length)return;var regex=(typeof pattern==='string')?new RegExp(pattern,'i'):pattern;var highlight=function(node){var skip=0;if(node.nodeType===3){var pos=node.data.search(regex);if(pos>=0&&node.data.length>0){var match=node.data.match(regex);var spannode=document.createElement('span');spannode.className='highlight';var middlebit=node.splitText(pos);var endbit=middlebit.splitText(match[0].length);var middleclone=middlebit.cloneNode(true);spannode.appendChild(middleclone);middlebit.parentNode.replaceChild(spannode,middlebit);skip=1;}}else if(node.nodeType===1&&node.childNodes&&!/(script|style)/i.test(node.tagName)){for(var i=0;i<node.childNodes.length;++i){i+=highlight(node.childNodes[i]);}}
return skip;};return $element.each(function(){highlight(this);});};var MicroEvent=function(){};MicroEvent.prototype={on:function(event,fct){this._events=this._events||{};this._events[event]=this._events[event]||[];this._events[event].push(fct);},off:function(event,fct){var n=arguments.length;if(n===0)return delete this._events;if(n===1)return delete this._events[event];this._events=this._events||{};if(event in this._events===false)return;this._events[event].splice(this._events[event].indexOf(fct),1);},trigger:function(event ){this._events=this._events||{};if(event in this._events===false)return;for(var i=0;i<this._events[event].length;i++){this._events[event][i].apply(this,Array.prototype.slice.call(arguments,1));}}};MicroEvent.mixin=function(destObject){var props=['on','off','trigger'];for(var i=0;i<props.length;i++){destObject.prototype[props[i]]=MicroEvent.prototype[props[i]];}};var IS_MAC=/Mac/.test(navigator.userAgent);var KEY_A=65;var KEY_COMMA=188;var KEY_RETURN=13;var KEY_ESC=27;var KEY_LEFT=37;var KEY_UP=38;var KEY_P=80;var KEY_RIGHT=39;var KEY_DOWN=40;var KEY_N=78;var KEY_BACKSPACE=8;var KEY_DELETE=46;var KEY_SHIFT=16;var KEY_CMD=IS_MAC?91:17;var KEY_CTRL=IS_MAC?18:17;var KEY_TAB=9;var TAG_SELECT=1;var TAG_INPUT=2;var isset=function(object){return typeof object!=='undefined';};var hash_key=function(value){if(typeof value==='undefined'||value===null)return null;if(typeof value==='boolean')return value?'1':'0';return value+'';};var escape_html=function(str){return(str+'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');};var escape_replace=function(str){return(str+'').replace(/\$/g,'$$$$');};var hook={};hook.before=function(self,method,fn){var original=self[method];self[method]=function(){fn.apply(self,arguments);return original.apply(self,arguments);};};hook.after=function(self,method,fn){var original=self[method];self[method]=function(){var result=original.apply(self,arguments);fn.apply(self,arguments);return result;};};var build_hash_table=function(key,objects){if(!$.isArray(objects))return objects;var i,n,table={};for(i=0,n=objects.length;i<n;i++){if(objects[i].hasOwnProperty(key)){table[objects[i][key]]=objects[i];}}
return table;};var once=function(fn){var called=false;return function(){if(called)return;called=true;fn.apply(this,arguments);};};var debounce=function(fn,delay){var timeout;return function(){var self=this;var args=arguments;window.clearTimeout(timeout);timeout=window.setTimeout(function(){fn.apply(self,args);},delay);};};var debounce_events=function(self,types,fn){var type;var trigger=self.trigger;var event_args={}; self.trigger=function(){var type=arguments[0];if(types.indexOf(type)!==-1){event_args[type]=arguments;}else{return trigger.apply(self,arguments);}}; fn.apply(self,[]);self.trigger=trigger; for(type in event_args){if(event_args.hasOwnProperty(type)){trigger.apply(self,event_args[type]);}}};var watchChildEvent=function($parent,event,selector,fn){$parent.on(event,selector,function(e){var child=e.target;while(child&&child.parentNode!==$parent[0]){child=child.parentNode;}
e.currentTarget=child;return fn.apply(this,[e]);});};var getSelection=function(input){var result={};if('selectionStart'in input){result.start=input.selectionStart;result.length=input.selectionEnd-result.start;}else if(document.selection){input.focus();var sel=document.selection.createRange();var selLen=document.selection.createRange().text.length;sel.moveStart('character',-input.value.length);result.start=sel.text.length-selLen;result.length=selLen;}
return result;};var transferStyles=function($from,$to,properties){var i,n,styles={};if(properties){for(i=0,n=properties.length;i<n;i++){styles[properties[i]]=$from.css(properties[i]);}}else{styles=$from.css();}
$to.css(styles);};var measureString=function(str,$parent){if(!str){return 0;}
var $test=$('<test>').css({position:'absolute',top:-99999,left:-99999,width:'auto',padding:0,whiteSpace:'pre'}).text(str).appendTo('body');transferStyles($parent,$test,['letterSpacing','fontSize','fontFamily','fontWeight','textTransform']);var width=$test.width();$test.remove();return width;};var autoGrow=function($input){var currentWidth=null;var update=function(e,options){var value,keyCode,printable,placeholder,width;var shift,character,selection;e=e||window.event||{};options=options||{};if(e.metaKey||e.altKey)return;if(!options.force&&$input.data('grow')===false)return;value=$input.val();if(e.type&&e.type.toLowerCase()==='keydown'){keyCode=e.keyCode;printable=((keyCode>=97&&keyCode<=122)||(keyCode>=65&&keyCode<=90)||(keyCode>=48&&keyCode<=57)|| keyCode===32
);if(keyCode===KEY_DELETE||keyCode===KEY_BACKSPACE){selection=getSelection($input[0]);if(selection.length){value=value.substring(0,selection.start)+value.substring(selection.start+selection.length);}else if(keyCode===KEY_BACKSPACE&&selection.start){value=value.substring(0,selection.start-1)+value.substring(selection.start+1);}else if(keyCode===KEY_DELETE&&typeof selection.start!=='undefined'){value=value.substring(0,selection.start)+value.substring(selection.start+1);}}else if(printable){shift=e.shiftKey;character=String.fromCharCode(e.keyCode);if(shift)character=character.toUpperCase();else character=character.toLowerCase();value+=character;}}
placeholder=$input.attr('placeholder');if(!value&&placeholder){value=placeholder;}
width=measureString(value,$input)+4;if(width!==currentWidth){currentWidth=width;$input.width(width);$input.triggerHandler('resize');}};$input.on('keydown keyup update blur',update);update();};var Selectize=function($input,settings){var key,i,n,dir,input,self=this;input=$input[0];input.selectize=self; var computedStyle=window.getComputedStyle&&window.getComputedStyle(input,null);dir=computedStyle?computedStyle.getPropertyValue('direction'):input.currentStyle&&input.currentStyle.direction;dir=dir||$input.parents('[dir]:first').attr('dir')||''; $.extend(self,{settings:settings,$input:$input,tagType:input.tagName.toLowerCase()==='select'?TAG_SELECT:TAG_INPUT,rtl:/rtl/i.test(dir),eventNS:'.selectize'+(++Selectize.count),highlightedValue:null,isOpen:false,isDisabled:false,isRequired:$input.is('[required]'),isInvalid:false,isLocked:false,isFocused:false,isInputHidden:false,isSetup:false,isShiftDown:false,isCmdDown:false,isCtrlDown:false,ignoreFocus:false,ignoreBlur:false,ignoreHover:false,hasOptions:false,currentResults:null,lastValue:'',caretPos:0,loading:0,loadedSearches:{},$activeOption:null,$activeItems:[],optgroups:{},options:{},userOptions:{},items:[],renderCache:{},onSearchChange:settings.loadThrottle===null?self.onSearchChange:debounce(self.onSearchChange,settings.loadThrottle)}); self.sifter=new Sifter(this.options,{diacritics:settings.diacritics}); $.extend(self.options,build_hash_table(settings.valueField,settings.options));delete self.settings.options; $.extend(self.optgroups,build_hash_table(settings.optgroupValueField,settings.optgroups));delete self.settings.optgroups; self.settings.mode=self.settings.mode||(self.settings.maxItems===1?'single':'multi');if(typeof self.settings.hideSelected!=='boolean'){self.settings.hideSelected=self.settings.mode==='multi';}
self.initializePlugins(self.settings.plugins);self.setupCallbacks();self.setupTemplates();self.setup();};

MicroEvent.mixin(Selectize);MicroPlugin.mixin(Selectize);

$.extend(Selectize.prototype,{setup:function(){var self=this;var settings=self.settings;var eventNS=self.eventNS;var $window=$(window);var $document=$(document);var $input=self.$input;var $wrapper;var $control;var $control_input;var $dropdown;var $dropdown_content;var $dropdown_parent;var inputMode;var timeout_blur;var timeout_focus;var tab_index;var classes;var classes_plugins;inputMode=self.settings.mode;tab_index=$input.attr('tabindex')||'';classes=$input.attr('class')||'';$wrapper=$('<div>').addClass(settings.wrapperClass).addClass(classes).addClass(inputMode);$control=$('<div>').addClass(settings.inputClass).addClass('items').appendTo($wrapper);$control_input=$('<input type="text" autocomplete="off" />').appendTo($control).attr('tabindex',tab_index);$dropdown_parent=$(settings.dropdownParent||$wrapper);$dropdown=$('<div>').addClass(settings.dropdownClass).addClass(inputMode).hide().appendTo($dropdown_parent);$dropdown_content=$('<div>').addClass(settings.dropdownContentClass).appendTo($dropdown);if(self.settings.copyClassesToDropdown){$dropdown.addClass(classes);}
$wrapper.css({width:$input[0].style.width});if(self.plugins.names.length){classes_plugins='plugin-'+self.plugins.names.join(' plugin-');$wrapper.addClass(classes_plugins);$dropdown.addClass(classes_plugins);}
if((settings.maxItems===null||settings.maxItems>1)&&self.tagType===TAG_SELECT){$input.attr('multiple','multiple');}
if(self.settings.placeholder){$control_input.attr('placeholder',settings.placeholder);}
if($input.attr('autocorrect')){$control_input.attr('autocorrect',$input.attr('autocorrect'));}
if($input.attr('autocapitalize')){$control_input.attr('autocapitalize',$input.attr('autocapitalize'));}
self.$wrapper=$wrapper;self.$control=$control;self.$control_input=$control_input;self.$dropdown=$dropdown;self.$dropdown_content=$dropdown_content;$dropdown.on('mouseenter','[data-selectable]',function(){return self.onOptionHover.apply(self,arguments);});$dropdown.on('mousedown','[data-selectable]',function(){return self.onOptionSelect.apply(self,arguments);});watchChildEvent($control,'mousedown','*:not(input)',function(){return self.onItemSelect.apply(self,arguments);});autoGrow($control_input);$control.on({mousedown:function(){return self.onMouseDown.apply(self,arguments);},click:function(){return self.onClick.apply(self,arguments);}});$control_input.on({mousedown:function(e){e.stopPropagation();},keydown:function(){return self.onKeyDown.apply(self,arguments);},keyup:function(){return self.onKeyUp.apply(self,arguments);},keypress:function(){return self.onKeyPress.apply(self,arguments);},resize:function(){self.positionDropdown.apply(self,[]);},blur:function(){return self.onBlur.apply(self,arguments);},focus:function(){self.ignoreBlur=false;return self.onFocus.apply(self,arguments);},paste:function(){return self.onPaste.apply(self,arguments);}});$document.on('keydown'+eventNS,function(e){self.isCmdDown=e[IS_MAC?'metaKey':'ctrlKey'];self.isCtrlDown=e[IS_MAC?'altKey':'ctrlKey'];self.isShiftDown=e.shiftKey;});$document.on('keyup'+eventNS,function(e){if(e.keyCode===KEY_CTRL)self.isCtrlDown=false;if(e.keyCode===KEY_SHIFT)self.isShiftDown=false;if(e.keyCode===KEY_CMD)self.isCmdDown=false;});$document.on('mousedown'+eventNS,function(e){if(self.isFocused){ if(e.target===self.$dropdown[0]||e.target.parentNode===self.$dropdown[0]){return false;} 
if(!self.$control.has(e.target).length&&e.target!==self.$control[0]){self.blur();}}});$window.on(['scroll'+eventNS,'resize'+eventNS].join(' '),function(){if(self.isOpen){self.positionDropdown.apply(self,arguments);}});$window.on('mousemove'+eventNS,function(){self.ignoreHover=false;});
this.revertSettings={$children:$input.children().detach(),tabindex:$input.attr('tabindex')};$input.attr('tabindex',-1).hide().after(self.$wrapper);if($.isArray(settings.items)){self.setValue(settings.items);delete settings.items;} 
if($input[0].validity){$input.on('invalid'+eventNS,function(e){e.preventDefault();self.isInvalid=true;self.refreshState();});}
self.updateOriginalInput();self.refreshItems();self.refreshState();self.updatePlaceholder();self.isSetup=true;if($input.is(':disabled')){self.disable();}
self.on('change',this.onChange);$input.data('selectize',self);$input.addClass('selectized');self.trigger('initialize'); if(settings.preload===true){self.onSearchChange('');}},setupTemplates:function(){var self=this;var field_label=self.settings.labelField;var field_optgroup=self.settings.optgroupLabelField;var templates={'optgroup':function(data){return'<div class="optgroup">'+data.html+'</div>';},'optgroup_header':function(data,escape){return'<div class="optgroup-header">'+escape(data[field_optgroup])+'</div>';},'option':function(data,escape){return'<div class="option">'+escape(data[field_label])+'</div>';},'item':function(data,escape){return'<div class="item">'+escape(data[field_label])+'</div>';},'option_create':function(data,escape){return'<div class="create">Add <strong>'+escape(data.input)+'</strong>&hellip;</div>';}};self.settings.render=$.extend({},templates,self.settings.render);},setupCallbacks:function(){var key,fn,callbacks={'initialize':'onInitialize','change':'onChange','item_add':'onItemAdd','item_remove':'onItemRemove','clear':'onClear','option_add':'onOptionAdd','option_remove':'onOptionRemove','option_clear':'onOptionClear','dropdown_open':'onDropdownOpen','dropdown_close':'onDropdownClose','type':'onType','load':'onLoad'};for(key in callbacks){if(callbacks.hasOwnProperty(key)){fn=this.settings[callbacks[key]];if(fn)this.on(key,fn);}}},onClick:function(e){var self=this;
if(!self.isFocused){self.focus();e.preventDefault();}},onMouseDown:function(e){var self=this;var defaultPrevented=e.isDefaultPrevented();var $target=$(e.target);if(self.isFocused){
if(e.target!==self.$control_input[0]){if(self.settings.mode==='single'){ self.isOpen?self.close():self.open();}else if(!defaultPrevented){self.setActiveItem(null);}
return false;}}else{ if(!defaultPrevented){window.setTimeout(function(){self.focus();},0);}}},onChange:function(){this.$input.trigger('change');},onPaste:function(e){var self=this;if(self.isFull()||self.isInputHidden||self.isLocked){e.preventDefault();}},onKeyPress:function(e){if(this.isLocked)return e&&e.preventDefault();var character=String.fromCharCode(e.keyCode||e.which);if(this.settings.create&&character===this.settings.delimiter){this.createItem();e.preventDefault();return false;}},onKeyDown:function(e){var isInput=e.target===this.$control_input[0];var self=this;if(self.isLocked){if(e.keyCode!==KEY_TAB){e.preventDefault();}
return;}
switch(e.keyCode){case KEY_A:if(self.isCmdDown){self.selectAll();return;}
break;case KEY_ESC:self.close();return;case KEY_N:if(!e.ctrlKey||e.altKey)break;case KEY_DOWN:if(!self.isOpen&&self.hasOptions){self.open();}else if(self.$activeOption){self.ignoreHover=true;var $next=self.getAdjacentOption(self.$activeOption,1);if($next.length)self.setActiveOption($next,true,true);}
e.preventDefault();return;case KEY_P:if(!e.ctrlKey||e.altKey)break;case KEY_UP:if(self.$activeOption){self.ignoreHover=true;var $prev=self.getAdjacentOption(self.$activeOption,-1);if($prev.length)self.setActiveOption($prev,true,true);}
e.preventDefault();return;case KEY_RETURN:if(self.isOpen&&self.$activeOption){self.onOptionSelect({currentTarget:self.$activeOption});}
e.preventDefault();return;case KEY_LEFT:self.advanceSelection(-1,e);return;case KEY_RIGHT:self.advanceSelection(1,e);return;case KEY_TAB:if(self.settings.selectOnTab&&self.isOpen&&self.$activeOption){self.onOptionSelect({currentTarget:self.$activeOption});e.preventDefault();}
if(self.settings.create&&self.createItem()){e.preventDefault();}
return;case KEY_BACKSPACE:case KEY_DELETE:self.deleteSelection(e);return;}
if((self.isFull()||self.isInputHidden)&&!(IS_MAC?e.metaKey:e.ctrlKey)){e.preventDefault();return;}},onKeyUp:function(e){var self=this;if(self.isLocked)return e&&e.preventDefault();var value=self.$control_input.val()||'';if(self.lastValue!==value){self.lastValue=value;self.onSearchChange(value);self.refreshOptions();self.trigger('type',value);}},onSearchChange:function(value){var self=this;var fn=self.settings.load;if(!fn)return;if(self.loadedSearches.hasOwnProperty(value))return;self.loadedSearches[value]=true;self.load(function(callback){fn.apply(self,[value,callback]);});},onFocus:function(e){var self=this;self.isFocused=true;if(self.isDisabled){self.blur();e&&e.preventDefault();return false;}
if(self.ignoreFocus)return;if(self.settings.preload==='focus')self.onSearchChange('');if(!self.$activeItems.length){self.showInput();self.setActiveItem(null);self.refreshOptions(!!self.settings.openOnFocus);}
self.refreshState();},onBlur:function(e){var self=this;self.isFocused=false;if(self.ignoreFocus)return; if(!self.ignoreBlur&&document.activeElement===self.$dropdown_content[0]){self.ignoreBlur=true;self.onFocus(e);return;}
if(self.settings.create&&self.settings.createOnBlur){self.createItem(false);}
self.close();self.setTextboxValue('');self.setActiveItem(null);self.setActiveOption(null);self.setCaret(self.items.length);self.refreshState();},onOptionHover:function(e){if(this.ignoreHover)return;this.setActiveOption(e.currentTarget,false);},onOptionSelect:function(e){var value,$target,$option,self=this;if(e.preventDefault){e.preventDefault();e.stopPropagation();}
$target=$(e.currentTarget);if($target.hasClass('create')){self.createItem();}else{value=$target.attr('data-value');if(typeof value!=='undefined'){self.lastQuery=null;self.setTextboxValue('');self.addItem(value);if(!self.settings.hideSelected&&e.type&&/mouse/.test(e.type)){self.setActiveOption(self.getOption(value));}}}},onItemSelect:function(e){var self=this;if(self.isLocked)return;if(self.settings.mode==='multi'){e.preventDefault();self.setActiveItem(e.currentTarget,e);}},load:function(fn){var self=this;var $wrapper=self.$wrapper.addClass('loading');self.loading++;fn.apply(self,[function(results){self.loading=Math.max(self.loading-1,0);if(results&&results.length){self.addOption(results);self.refreshOptions(self.isFocused&&!self.isInputHidden);}
if(!self.loading){$wrapper.removeClass('loading');}
self.trigger('load',results);}]);},setTextboxValue:function(value){var $input=this.$control_input;var changed=$input.val()!==value;if(changed){$input.val(value).triggerHandler('update');this.lastValue=value;}},getValue:function(){if(this.tagType===TAG_SELECT&&this.$input.attr('multiple')){return this.items;}else{return this.items.join(this.settings.delimiter);}},setValue:function(value){debounce_events(this,['change'],function(){this.clear();this.addItems(value);});},setActiveItem:function($item,e){var self=this;var eventName;var i,idx,begin,end,item,swap;var $last;if(self.settings.mode==='single')return;$item=$($item); if(!$item.length){$(self.$activeItems).removeClass('active');self.$activeItems=[];if(self.isFocused){self.showInput();}
return;} 
eventName=e&&e.type.toLowerCase();if(eventName==='mousedown'&&self.isShiftDown&&self.$activeItems.length){$last=self.$control.children('.active:last');begin=Array.prototype.indexOf.apply(self.$control[0].childNodes,[$last[0]]);end=Array.prototype.indexOf.apply(self.$control[0].childNodes,[$item[0]]);if(begin>end){swap=begin;begin=end;end=swap;}
for(i=begin;i<=end;i++){item=self.$control[0].childNodes[i];if(self.$activeItems.indexOf(item)===-1){$(item).addClass('active');self.$activeItems.push(item);}}
e.preventDefault();}else if((eventName==='mousedown'&&self.isCtrlDown)||(eventName==='keydown'&&this.isShiftDown)){if($item.hasClass('active')){idx=self.$activeItems.indexOf($item[0]);self.$activeItems.splice(idx,1);$item.removeClass('active');}else{self.$activeItems.push($item.addClass('active')[0]);}}else{$(self.$activeItems).removeClass('active');self.$activeItems=[$item.addClass('active')[0]];} 
self.hideInput();if(!this.isFocused){self.focus();}},setActiveOption:function($option,scroll,animate){var height_menu,height_item,y;var scroll_top,scroll_bottom;var self=this;if(self.$activeOption)self.$activeOption.removeClass('active');self.$activeOption=null;$option=$($option);if(!$option.length)return;self.$activeOption=$option.addClass('active');if(scroll||!isset(scroll)){height_menu=self.$dropdown_content.height();height_item=self.$activeOption.outerHeight(true);scroll=self.$dropdown_content.scrollTop()||0;y=self.$activeOption.offset().top-self.$dropdown_content.offset().top+scroll;scroll_top=y;scroll_bottom=y-height_menu+height_item;if(y+height_item>height_menu+scroll){self.$dropdown_content.stop().animate({scrollTop:scroll_bottom},animate?self.settings.scrollDuration:0);}else if(y<scroll){self.$dropdown_content.stop().animate({scrollTop:scroll_top},animate?self.settings.scrollDuration:0);}}},selectAll:function(){var self=this;if(self.settings.mode==='single')return;self.$activeItems=Array.prototype.slice.apply(self.$control.children(':not(input)').addClass('active'));if(self.$activeItems.length){self.hideInput();self.close();}
self.focus();},hideInput:function(){var self=this;self.setTextboxValue('');self.$control_input.css({opacity:0,position:'absolute',left:self.rtl?10000:-10000});self.isInputHidden=true;},showInput:function(){this.$control_input.css({opacity:1,position:'relative',left:0});this.isInputHidden=false;},focus:function(){var self=this;if(self.isDisabled)return;self.ignoreFocus=true;self.$control_input[0].focus();window.setTimeout(function(){self.ignoreFocus=false;self.onFocus();},0);},blur:function(){this.$control_input.trigger('blur');},getScoreFunction:function(query){return this.sifter.getScoreFunction(query,this.getSearchOptions());},getSearchOptions:function(){var settings=this.settings;var sort=settings.sortField;if(typeof sort==='string'){sort={field:sort};}
return{fields:settings.searchField,conjunction:settings.searchConjunction,sort:sort};},search:function(query){var i,value,score,result,calculateScore;var self=this;var settings=self.settings;var options=this.getSearchOptions(); if(settings.score){calculateScore=self.settings.score.apply(this,[query]);if(typeof calculateScore!=='function'){throw new Error('Selectize "score" setting must be a function that returns a function');}} 
if(query!==self.lastQuery){self.lastQuery=query;result=self.sifter.search(query,$.extend(options,{score:calculateScore}));self.currentResults=result;}else{result=$.extend(true,{},self.currentResults);} 
if(settings.hideSelected){for(i=result.items.length-1;i>=0;i--){if(self.items.indexOf(hash_key(result.items[i].id))!==-1){result.items.splice(i,1);}}}
return result;},refreshOptions:function(triggerDropdown){var i,j,k,n,groups,groups_order,option,option_html,optgroup,optgroups,html,html_children,has_create_option;var $active,$active_before,$create;if(typeof triggerDropdown==='undefined'){triggerDropdown=true;}
var self=this;var query=$.trim(self.$control_input.val());var results=self.search(query);var $dropdown_content=self.$dropdown_content;var active_before=self.$activeOption&&hash_key(self.$activeOption.attr('data-value')); n=results.items.length;if(typeof self.settings.maxOptions==='number'){n=Math.min(n,self.settings.maxOptions);} 
groups={};if(self.settings.optgroupOrder){groups_order=self.settings.optgroupOrder;for(i=0;i<groups_order.length;i++){groups[groups_order[i]]=[];}}else{groups_order=[];}
for(i=0;i<n;i++){option=self.options[results.items[i].id];option_html=self.render('option',option);optgroup=option[self.settings.optgroupField]||'';optgroups=$.isArray(optgroup)?optgroup:[optgroup];for(j=0,k=optgroups&&optgroups.length;j<k;j++){optgroup=optgroups[j];if(!self.optgroups.hasOwnProperty(optgroup)){optgroup='';}
if(!groups.hasOwnProperty(optgroup)){groups[optgroup]=[];groups_order.push(optgroup);}
groups[optgroup].push(option_html);}} 
html=[];for(i=0,n=groups_order.length;i<n;i++){optgroup=groups_order[i];if(self.optgroups.hasOwnProperty(optgroup)&&groups[optgroup].length){ html_children=self.render('optgroup_header',self.optgroups[optgroup])||'';html_children+=groups[optgroup].join('');html.push(self.render('optgroup',$.extend({},self.optgroups[optgroup],{html:html_children})));}else{html.push(groups[optgroup].join(''));}}
$dropdown_content.html(html.join('')); if(self.settings.highlight&&results.query.length&&results.tokens.length){for(i=0,n=results.tokens.length;i<n;i++){highlight($dropdown_content,results.tokens[i].regex);}} 
if(!self.settings.hideSelected){for(i=0,n=self.items.length;i<n;i++){self.getOption(self.items[i]).addClass('selected');}} 
has_create_option=self.canCreate(query);if(has_create_option){$dropdown_content.prepend(self.render('option_create',{input:query}));$create=$($dropdown_content[0].childNodes[0]);} 
self.hasOptions=results.items.length>0||has_create_option;if(self.hasOptions){if(results.items.length>0){$active_before=active_before&&self.getOption(active_before);if($active_before&&$active_before.length){$active=$active_before;}else if(self.settings.mode==='single'&&self.items.length){$active=self.getOption(self.items[0]);}
if(!$active||!$active.length){if($create&&!self.settings.addPrecedence){$active=self.getAdjacentOption($create,1);}else{$active=$dropdown_content.find('[data-selectable]:first');}}}else{$active=$create;}
self.setActiveOption($active);if(triggerDropdown&&!self.isOpen){self.open();}}else{self.setActiveOption(null);if(triggerDropdown&&self.isOpen){self.close();}}},addOption:function(data){var i,n,optgroup,value,self=this;if($.isArray(data)){for(i=0,n=data.length;i<n;i++){self.addOption(data[i]);}
return;}
value=hash_key(data[self.settings.valueField]);if(typeof value!=='string'||self.options.hasOwnProperty(value))return;self.userOptions[value]=true;self.options[value]=data;self.lastQuery=null;self.trigger('option_add',value,data);},addOptionGroup:function(id,data){this.optgroups[id]=data;this.trigger('optgroup_add',id,data);},updateOption:function(value,data){var self=this;var $item,$item_new;var value_new,index_item,cache_items,cache_options;value=hash_key(value);value_new=hash_key(data[self.settings.valueField]); if(value===null)return;if(!self.options.hasOwnProperty(value))return;if(typeof value_new!=='string')throw new Error('Value must be set in option data'); if(value_new!==value){delete self.options[value];index_item=self.items.indexOf(value);if(index_item!==-1){self.items.splice(index_item,1,value_new);}}
self.options[value_new]=data; cache_items=self.renderCache['item'];cache_options=self.renderCache['option'];if(cache_items){delete cache_items[value];delete cache_items[value_new];}
if(cache_options){delete cache_options[value];delete cache_options[value_new];} 
if(self.items.indexOf(value_new)!==-1){$item=self.getItem(value);$item_new=$(self.render('item',data));if($item.hasClass('active'))$item_new.addClass('active');$item.replaceWith($item_new);} 
self.lastQuery=null; if(self.isOpen){self.refreshOptions(false);}},removeOption:function(value){var self=this;value=hash_key(value);var cache_items=self.renderCache['item'];var cache_options=self.renderCache['option'];if(cache_items)delete cache_items[value];if(cache_options)delete cache_options[value];delete self.userOptions[value];delete self.options[value];self.lastQuery=null;self.trigger('option_remove',value);self.removeItem(value);},clearOptions:function(){var self=this;self.loadedSearches={};self.userOptions={};self.renderCache={};self.options=self.sifter.items={};self.lastQuery=null;self.trigger('option_clear');self.clear();},getOption:function(value){return this.getElementWithValue(value,this.$dropdown_content.find('[data-selectable]'));},getAdjacentOption:function($option,direction){var $options=this.$dropdown.find('[data-selectable]');var index=$options.index($option)+direction;return index>=0&&index<$options.length?$options.eq(index):$();},getElementWithValue:function(value,$els){value=hash_key(value);if(typeof value!=='undefined'&&value!==null){for(var i=0,n=$els.length;i<n;i++){if($els[i].getAttribute('data-value')===value){return $($els[i]);}}}
return $();},getItem:function(value){return this.getElementWithValue(value,this.$control.children());},addItems:function(values){var items=$.isArray(values)?values:[values];for(var i=0,n=items.length;i<n;i++){this.isPending=(i<n-1);this.addItem(items[i]);}},addItem:function(value){debounce_events(this,['change'],function(){var $item,$option,$options;var self=this;var inputMode=self.settings.mode;var i,active,value_next,wasFull;value=hash_key(value);if(self.items.indexOf(value)!==-1){if(inputMode==='single')self.close();return;}
if(!self.options.hasOwnProperty(value))return;if(inputMode==='single')self.clear();if(inputMode==='multi'&&self.isFull())return;$item=$(self.render('item',self.options[value]));wasFull=self.isFull();self.items.splice(self.caretPos,0,value);self.insertAtCaret($item);if(!self.isPending||(!wasFull&&self.isFull())){self.refreshState();}
if(self.isSetup){$options=self.$dropdown_content.find('[data-selectable]');if(!self.isPending){$option=self.getOption(value);value_next=self.getAdjacentOption($option,1).attr('data-value');self.refreshOptions(self.isFocused&&inputMode!=='single');if(value_next){self.setActiveOption(self.getOption(value_next));}} 
if(!$options.length||self.isFull()){self.close();}else{self.positionDropdown();}
self.updatePlaceholder();self.trigger('item_add',value,$item);self.updateOriginalInput();}});},removeItem:function(value){var self=this;var $item,i,idx;$item=(typeof value==='object')?value:self.getItem(value);value=hash_key($item.attr('data-value'));i=self.items.indexOf(value);if(i!==-1){$item.remove();if($item.hasClass('active')){idx=self.$activeItems.indexOf($item[0]);self.$activeItems.splice(idx,1);}
self.items.splice(i,1);self.lastQuery=null;if(!self.settings.persist&&self.userOptions.hasOwnProperty(value)){self.removeOption(value);}
if(i<self.caretPos){self.setCaret(self.caretPos-1);}
self.refreshState();self.updatePlaceholder();self.updateOriginalInput();self.positionDropdown();self.trigger('item_remove',value);}},createItem:function(triggerDropdown){var self=this;var input=$.trim(self.$control_input.val()||'');var caret=self.caretPos;if(!self.canCreate(input))return false;self.lock();if(typeof triggerDropdown==='undefined'){triggerDropdown=true;}
var setup=(typeof self.settings.create==='function')?this.settings.create:function(input){var data={};data[self.settings.labelField]=input;data[self.settings.valueField]=input;return data;};var create=once(function(data){self.unlock();if(!data||typeof data!=='object')return;var value=hash_key(data[self.settings.valueField]);if(typeof value!=='string')return;self.setTextboxValue('');self.addOption(data);self.setCaret(caret);self.addItem(value);self.refreshOptions(triggerDropdown&&self.settings.mode!=='single');});var output=setup.apply(this,[input,create]);if(typeof output!=='undefined'){create(output);}
return true;},refreshItems:function(){this.lastQuery=null;if(this.isSetup){for(var i=0;i<this.items.length;i++){this.addItem(this.items);}}
this.refreshState();this.updateOriginalInput();},refreshState:function(){var invalid,self=this;if(self.isRequired){if(self.items.length)self.isInvalid=false;self.$control_input.prop('required',invalid);}
self.refreshClasses();},refreshClasses:function(){var self=this;var isFull=self.isFull();var isLocked=self.isLocked;self.$wrapper.toggleClass('rtl',self.rtl);self.$control.toggleClass('focus',self.isFocused).toggleClass('disabled',self.isDisabled).toggleClass('required',self.isRequired).toggleClass('invalid',self.isInvalid).toggleClass('locked',isLocked).toggleClass('full',isFull).toggleClass('not-full',!isFull).toggleClass('input-active',self.isFocused&&!self.isInputHidden).toggleClass('dropdown-active',self.isOpen).toggleClass('has-options',!$.isEmptyObject(self.options)).toggleClass('has-items',self.items.length>0);self.$control_input.data('grow',!isFull&&!isLocked);},isFull:function(){return this.settings.maxItems!==null&&this.items.length>=this.settings.maxItems;},updateOriginalInput:function(){var i,n,options,self=this;if(self.tagType===TAG_SELECT){options=[];for(i=0,n=self.items.length;i<n;i++){options.push('<option value="'+escape_html(self.items[i])+'" selected="selected"></option>');}
if(!options.length&&!this.$input.attr('multiple')){options.push('<option value="" selected="selected"></option>');}
self.$input.html(options.join(''));}else{self.$input.val(self.getValue());self.$input.attr('value',self.$input.val());}
if(self.isSetup){self.trigger('change',self.$input.val());}},updatePlaceholder:function(){if(!this.settings.placeholder)return;var $input=this.$control_input;if(this.items.length){$input.removeAttr('placeholder');}else{$input.attr('placeholder',this.settings.placeholder);}
$input.triggerHandler('update',{force:true});},open:function(){var self=this;if(self.isLocked||self.isOpen||(self.settings.mode==='multi'&&self.isFull()))return;self.focus();self.isOpen=true;self.refreshState();self.$dropdown.css({visibility:'hidden',display:'block'});self.positionDropdown();self.$dropdown.css({visibility:'visible'});self.trigger('dropdown_open',self.$dropdown);},close:function(){var self=this;var trigger=self.isOpen;if(self.settings.mode==='single'&&self.items.length){self.hideInput();}
self.isOpen=false;self.$dropdown.hide();self.setActiveOption(null);self.refreshState();if(trigger)self.trigger('dropdown_close',self.$dropdown);},positionDropdown:function(){var $control=this.$control;var offset=this.settings.dropdownParent==='body'?$control.offset():$control.position();offset.top+=$control.outerHeight(true);this.$dropdown.css({width:$control.outerWidth(),top:offset.top,left:offset.left});},clear:function(){var self=this;if(!self.items.length)return;self.$control.children(':not(input)').remove();self.items=[];self.lastQuery=null;self.setCaret(0);self.setActiveItem(null);self.updatePlaceholder();self.updateOriginalInput();self.refreshState();self.showInput();self.trigger('clear');},insertAtCaret:function($el){var caret=Math.min(this.caretPos,this.items.length);if(caret===0){this.$control.prepend($el);}else{$(this.$control[0].childNodes[caret]).before($el);}
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
self.caretPos=i;},lock:function(){this.close();this.isLocked=true;this.refreshState();},unlock:function(){this.isLocked=false;this.refreshState();},disable:function(){var self=this;self.$input.prop('disabled',true);self.isDisabled=true;self.lock();},enable:function(){var self=this;self.$input.prop('disabled',false);self.isDisabled=false;self.unlock();},destroy:function(){var self=this;var eventNS=self.eventNS;var revertSettings=self.revertSettings;self.trigger('destroy');self.off();self.$wrapper.remove();self.$dropdown.remove();self.$input.html('').append(revertSettings.$children).removeAttr('tabindex').removeClass('selectized').attr({tabindex:revertSettings.tabindex}).show();self.$control_input.removeData('grow');self.$input.removeData('selectize');$(window).off(eventNS);$(document).off(eventNS);$(document.body).off(eventNS);delete self.$input[0].selectize;},render:function(templateName,data){var value,id,label;var html='';var cache=false;var self=this;var regex_tag=/^[\t ]*<([a-z][a-z0-9\-_]*(?:\:[a-z][a-z0-9\-_]*)?)/i;if(templateName==='option'||templateName==='item'){value=hash_key(data[self.settings.valueField]);cache=!!value;} 
if(cache){if(!isset(self.renderCache[templateName])){self.renderCache[templateName]={};}
if(self.renderCache[templateName].hasOwnProperty(value)){return self.renderCache[templateName][value];}} 
html=self.settings.render[templateName].apply(this,[data,escape_html]); if(templateName==='option'||templateName==='option_create'){html=html.replace(regex_tag,'<$1 data-selectable');}
if(templateName==='optgroup'){id=data[self.settings.optgroupValueField]||'';html=html.replace(regex_tag,'<$1 data-group="'+escape_replace(escape_html(id))+'"');}
if(templateName==='option'||templateName==='item'){html=html.replace(regex_tag,'<$1 data-value="'+escape_replace(escape_html(value||''))+'"');} 
if(cache){self.renderCache[templateName][value]=html;}
return html;},clearCache:function(templateName){var self=this;if(typeof templateName==='undefined'){self.renderCache={};}else{delete self.renderCache[templateName];}},canCreate:function(input){var self=this;if(!self.settings.create)return false;var filter=self.settings.createFilter;return input.length&&(typeof filter!=='function'||filter.apply(self,[input]))&&(typeof filter!=='string'||new RegExp(filter).test(input))&&(!(filter instanceof RegExp)||filter.test(input));}});Selectize.count=0;Selectize.defaults={plugins:[],delimiter:',',persist:true,diacritics:true,create:false,createOnBlur:false,createFilter:null,highlight:true,openOnFocus:true,maxOptions:1000,maxItems:null,hideSelected:null,addPrecedence:false,selectOnTab:false,preload:false,allowEmptyOption:false,scrollDuration:60,loadThrottle:300,dataAttr:'data-data',optgroupField:'optgroup',valueField:'value',labelField:'text',optgroupLabelField:'label',optgroupValueField:'value',optgroupOrder:null,sortField:'$order',searchField:['text'],searchConjunction:'and',mode:null,wrapperClass:'selectize-control',inputClass:'selectize-input',dropdownClass:'selectize-dropdown',dropdownContentClass:'selectize-dropdown-content',dropdownParent:null,copyClassesToDropdown:true,render:{}};$.fn.selectize=function(settings_user){var defaults=$.fn.selectize.defaults;var settings=$.extend({},defaults,settings_user);var attr_data=settings.dataAttr;var field_label=settings.labelField;var field_value=settings.valueField;var field_optgroup=settings.optgroupField;var field_optgroup_label=settings.optgroupLabelField;var field_optgroup_value=settings.optgroupValueField;var init_textbox=function($input,settings_element){var i,n,values,option,value=$.trim($input.val()||'');if(!settings.allowEmptyOption&&!value.length)return;values=value.split(settings.delimiter);for(i=0,n=values.length;i<n;i++){option={};option[field_label]=values[i];option[field_value]=values[i];settings_element.options[values[i]]=option;}
settings_element.items=values;};var init_select=function($input,settings_element){var i,n,tagName,$children,order=0;var options=settings_element.options;var readData=function($el){var data=attr_data&&$el.attr(attr_data);if(typeof data==='string'&&data.length){return JSON.parse(data);}
return null;};var addOption=function($option,group){var value,option;$option=$($option);value=$option.attr('value')||'';if(!value.length&&!settings.allowEmptyOption)return;


if(options.hasOwnProperty(value)){if(group){if(!options[value].optgroup){options[value].optgroup=group;}else if(!$.isArray(options[value].optgroup)){options[value].optgroup=[options[value].optgroup,group];}else{options[value].optgroup.push(group);}}
return;}
option=readData($option)||{};option[field_label]=option[field_label]||$option.text();option[field_value]=option[field_value]||value;option[field_optgroup]=option[field_optgroup]||group;option.$order=++order;options[value]=option;if($option.is(':selected')){settings_element.items.push(value);}};var addGroup=function($optgroup){var i,n,id,optgroup,$options;$optgroup=$($optgroup);id=$optgroup.attr('label');if(id){optgroup=readData($optgroup)||{};optgroup[field_optgroup_label]=id;optgroup[field_optgroup_value]=id;settings_element.optgroups[id]=optgroup;}
$options=$('option',$optgroup);for(i=0,n=$options.length;i<n;i++){addOption($options[i],id);}};settings_element.maxItems=$input.attr('multiple')?null:1;$children=$input.children();for(i=0,n=$children.length;i<n;i++){tagName=$children[i].tagName.toLowerCase();if(tagName==='optgroup'){addGroup($children[i]);}else if(tagName==='option'){addOption($children[i]);}}};return this.each(function(){if(this.selectize)return;var instance;var $input=$(this);var tag_name=this.tagName.toLowerCase();var placeholder=$input.attr('placeholder')||$input.attr('data-placeholder');if(!placeholder&&!settings.allowEmptyOption){placeholder=$input.children('option[value=""]').text();}
var settings_element={'placeholder':placeholder,'options':{},'optgroups':{},'items':[]};if(tag_name==='select'){init_select($input,settings_element);}else{init_textbox($input,settings_element);}
instance=new Selectize($input,$.extend(true,{},defaults,settings_element,settings_user));});};$.fn.selectize.defaults=Selectize.defaults;Selectize.define('drag_drop',function(options){if(!$.fn.sortable)throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".');if(this.settings.mode!=='multi')return;var self=this;self.lock=(function(){var original=self.lock;return function(){var sortable=self.$control.data('sortable');if(sortable)sortable.disable();return original.apply(self,arguments);};})();self.unlock=(function(){var original=self.unlock;return function(){var sortable=self.$control.data('sortable');if(sortable)sortable.enable();return original.apply(self,arguments);};})();self.setup=(function(){var original=self.setup;return function(){original.apply(this,arguments);var $control=self.$control.sortable({items:'[data-value]',forcePlaceholderSize:true,disabled:self.isLocked,start:function(e,ui){ui.placeholder.css('width',ui.helper.css('width'));$control.css({overflow:'visible'});},stop:function(){$control.css({overflow:'hidden'});var active=self.$activeItems?self.$activeItems.slice():null;var values=[];$control.children('[data-value]').each(function(){values.push($(this).attr('data-value'));});self.setValue(values);self.setActiveItem(active);}});};})();});Selectize.define('dropdown_header',function(options){var self=this;options=$.extend({title:'Untitled',headerClass:'selectize-dropdown-header',titleRowClass:'selectize-dropdown-header-title',labelClass:'selectize-dropdown-header-label',closeClass:'selectize-dropdown-header-close',html:function(data){return('<div class="'+data.headerClass+'">'+'<div class="'+data.titleRowClass+'">'+'<span class="'+data.labelClass+'">'+data.title+'</span>'+'<a href="javascript:void(0)" class="'+data.closeClass+'">&times;</a>'+'</div>'+'</div>');}},options);self.setup=(function(){var original=self.setup;return function(){original.apply(self,arguments);self.$dropdown_header=$(options.html(options));self.$dropdown.prepend(self.$dropdown_header);};})();});Selectize.define('optgroup_columns',function(options){var self=this;options=$.extend({equalizeWidth:true,equalizeHeight:true},options);this.getAdjacentOption=function($option,direction){var $options=$option.closest('[data-group]').find('[data-selectable]');var index=$options.index($option)+direction;return index>=0&&index<$options.length?$options.eq(index):$();};this.onKeyDown=(function(){var original=self.onKeyDown;return function(e){var index,$option,$options,$optgroup;if(this.isOpen&&(e.keyCode===KEY_LEFT||e.keyCode===KEY_RIGHT)){self.ignoreHover=true;$optgroup=this.$activeOption.closest('[data-group]');index=$optgroup.find('[data-selectable]').index(this.$activeOption);if(e.keyCode===KEY_LEFT){$optgroup=$optgroup.prev('[data-group]');}else{$optgroup=$optgroup.next('[data-group]');}
$options=$optgroup.find('[data-selectable]');$option=$options.eq(Math.min($options.length-1,index));if($option.length){this.setActiveOption($option);}
return;}
return original.apply(this,arguments);};})();var getScrollbarWidth=function(){var div;var width=getScrollbarWidth.width;var doc=document;if(typeof width==='undefined'){div=doc.createElement('div');div.innerHTML='<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>';div=div.firstChild;doc.body.appendChild(div);width=getScrollbarWidth.width=div.offsetWidth-div.clientWidth;doc.body.removeChild(div);}
return width;};var equalizeSizes=function(){var i,n,height_max,width,width_last,width_parent,$optgroups;$optgroups=$('[data-group]',self.$dropdown_content);n=$optgroups.length;if(!n||!self.$dropdown_content.width())return;if(options.equalizeHeight){height_max=0;for(i=0;i<n;i++){height_max=Math.max(height_max,$optgroups.eq(i).height());}
$optgroups.css({height:height_max});}
if(options.equalizeWidth){width_parent=self.$dropdown_content.innerWidth()-getScrollbarWidth();width=Math.round(width_parent/n);$optgroups.css({width:width});if(n>1){width_last=width_parent-width*(n-1);$optgroups.eq(n-1).css({width:width_last});}}};if(options.equalizeHeight||options.equalizeWidth){hook.after(this,'positionDropdown',equalizeSizes);hook.after(this,'refreshOptions',equalizeSizes);}});Selectize.define('remove_button',function(options){if(this.settings.mode==='single')return;options=$.extend({label:'&times;',title:'Remove',className:'remove',append:true},options);var self=this;var html='<a href="javascript:void(0)" class="'+options.className+'" tabindex="-1" title="'+escape_html(options.title)+'">'+options.label+'</a>';var append=function(html_container,html_element){var pos=html_container.search(/(<\/[^>]+>\s*)$/);return html_container.substring(0,pos)+html_element+html_container.substring(pos);};this.setup=(function(){var original=self.setup;return function(){ if(options.append){var render_item=self.settings.render.item;self.settings.render.item=function(data){return append(render_item.apply(this,arguments),html);};}
original.apply(this,arguments); this.$control.on('click','.'+options.className,function(e){e.preventDefault();if(self.isLocked)return;var $item=$(e.currentTarget).parent();self.setActiveItem($item);if(self.deleteSelection()){self.setCaret(self.items.length);}});};})();});Selectize.define('restore_on_backspace',function(options){var self=this;options.text=options.text||function(option){return option[this.settings.labelField];};this.onKeyDown=(function(e){var original=self.onKeyDown;return function(e){var index,option;if(e.keyCode===KEY_BACKSPACE&&this.$control_input.val()===''&&!this.$activeItems.length){index=this.caretPos-1;if(index>=0&&index<this.items.length){option=this.options[this.items[index]];if(this.deleteSelection(e)){this.setTextboxValue(options.text.apply(this,[option]));this.refreshOptions(true);}
e.preventDefault();return;}}
return original.apply(this,arguments);};})();});return Selectize;}));



(function(undefined){var moment,VERSION='2.8.4', globalScope=typeof global!=='undefined'?global:this,oldGlobalMoment,round=Math.round,hasOwnProperty=Object.prototype.hasOwnProperty,i,YEAR=0,MONTH=1,DATE=2,HOUR=3,MINUTE=4,SECOND=5,MILLISECOND=6, locales={},momentProperties=[], hasModule=(typeof module!=='undefined'&&module&&module.exports), aspNetJsonRegex=/^\/?Date\((\-?\d+)/i,aspNetTimeSpanJsonRegex=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,
 isoDurationRegex=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, formattingTokens=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g,localFormattingTokens=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, parseTokenOneOrTwoDigits=/\d\d?/, parseTokenOneToThreeDigits=/\d{1,3}/, parseTokenOneToFourDigits=/\d{1,4}/, parseTokenOneToSixDigits=/[+\-]?\d{1,6}/, parseTokenDigits=/\d+/, parseTokenWord=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,parseTokenTimezone=/Z|[\+\-]\d\d:?\d\d/gi, parseTokenT=/T/i,parseTokenOffsetMs=/[\+\-]?\d+/, parseTokenTimestampMs=/[\+\-]?\d+(\.\d{1,3})?/,
 parseTokenOneDigit=/\d/, parseTokenTwoDigits=/\d\d/, parseTokenThreeDigits=/\d{3}/, parseTokenFourDigits=/\d{4}/, parseTokenSixDigits=/[+-]?\d{6}/, parseTokenSignedNumber=/[+-]?\d+/,

isoRegex=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,isoFormat='YYYY-MM-DDTHH:mm:ssZ',isoDates=[['YYYYYY-MM-DD',/[+-]\d{6}-\d{2}-\d{2}/],['YYYY-MM-DD',/\d{4}-\d{2}-\d{2}/],['GGGG-[W]WW-E',/\d{4}-W\d{2}-\d/],['GGGG-[W]WW',/\d{4}-W\d{2}/],['YYYY-DDD',/\d{4}-\d{3}/]], isoTimes=[['HH:mm:ss.SSSS',/(T| )\d\d:\d\d:\d\d\.\d+/],['HH:mm:ss',/(T| )\d\d:\d\d:\d\d/],['HH:mm',/(T| )\d\d:\d\d/],['HH',/(T| )\d\d/]],parseTimezoneChunker=/([\+\-]|\d\d)/gi, proxyGettersAndSetters='Date|Hours|Minutes|Seconds|Milliseconds'.split('|'),unitMillisecondFactors={'Milliseconds':1,'Seconds':1e3,'Minutes':6e4,'Hours':36e5,'Days':864e5,'Months':2592e6,'Years':31536e6},unitAliases={ms:'millisecond',s:'second',m:'minute',h:'hour',d:'day',D:'date',w:'week',W:'isoWeek',M:'month',Q:'quarter',y:'year',DDD:'dayOfYear',e:'weekday',E:'isoWeekday',gg:'weekYear',GG:'isoWeekYear'},camelFunctions={dayofyear:'dayOfYear',isoweekday:'isoWeekday',isoweek:'isoWeek',weekyear:'weekYear',isoweekyear:'isoWeekYear'}, formatFunctions={}, relativeTimeThresholds={s:45, m:45, h:22, d:26, M:11
}, ordinalizeTokens='DDD w W M D d'.split(' '),paddedTokens='M D H h m s w W'.split(' '),formatTokenFunctions={M:function(){return this.month()+1;},MMM:function(format){return this.localeData().monthsShort(this,format);},MMMM:function(format){return this.localeData().months(this,format);},D:function(){return this.date();},DDD:function(){return this.dayOfYear();},d:function(){return this.day();},dd:function(format){return this.localeData().weekdaysMin(this,format);},ddd:function(format){return this.localeData().weekdaysShort(this,format);},dddd:function(format){return this.localeData().weekdays(this,format);},w:function(){return this.week();},W:function(){return this.isoWeek();},YY:function(){return leftZeroFill(this.year()%100,2);},YYYY:function(){return leftZeroFill(this.year(),4);},YYYYY:function(){return leftZeroFill(this.year(),5);},YYYYYY:function(){var y=this.year(),sign=y>=0?'+':'-';return sign+leftZeroFill(Math.abs(y),6);},gg:function(){return leftZeroFill(this.weekYear()%100,2);},gggg:function(){return leftZeroFill(this.weekYear(),4);},ggggg:function(){return leftZeroFill(this.weekYear(),5);},GG:function(){return leftZeroFill(this.isoWeekYear()%100,2);},GGGG:function(){return leftZeroFill(this.isoWeekYear(),4);},GGGGG:function(){return leftZeroFill(this.isoWeekYear(),5);},e:function(){return this.weekday();},E:function(){return this.isoWeekday();},a:function(){return this.localeData().meridiem(this.hours(),this.minutes(),true);},A:function(){return this.localeData().meridiem(this.hours(),this.minutes(),false);},H:function(){return this.hours();},h:function(){return this.hours()%12||12;},m:function(){return this.minutes();},s:function(){return this.seconds();},S:function(){return toInt(this.milliseconds()/100);},SS:function(){return leftZeroFill(toInt(this.milliseconds()/10),2);},SSS:function(){return leftZeroFill(this.milliseconds(),3);},SSSS:function(){return leftZeroFill(this.milliseconds(),3);},Z:function(){var a=-this.zone(),b='+';if(a<0){a=-a;b='-';}
return b+leftZeroFill(toInt(a/60),2)+':'+leftZeroFill(toInt(a)%60,2);},ZZ:function(){var a=-this.zone(),b='+';if(a<0){a=-a;b='-';}
return b+leftZeroFill(toInt(a/60),2)+leftZeroFill(toInt(a)%60,2);},z:function(){return this.zoneAbbr();},zz:function(){return this.zoneName();},x:function(){return this.valueOf();},X:function(){return this.unix();},Q:function(){return this.quarter();}},deprecations={},lists=['months','monthsShort','weekdays','weekdaysShort','weekdaysMin'];
function dfl(a,b,c){switch(arguments.length){case 2:return a!=null?a:b;case 3:return a!=null?a:b!=null?b:c;default:throw new Error('Implement me');}}
function hasOwnProp(a,b){return hasOwnProperty.call(a,b);}
function defaultParsingFlags(){
return{empty:false,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:false,invalidMonth:null,invalidFormat:false,userInvalidated:false,iso:false};}
function printMsg(msg){if(moment.suppressDeprecationWarnings===false&&typeof console!=='undefined'&&console.warn){console.warn('Deprecation warning: '+msg);}}
function deprecate(msg,fn){var firstTime=true;return extend(function(){if(firstTime){printMsg(msg);firstTime=false;}
return fn.apply(this,arguments);},fn);}
function deprecateSimple(name,msg){if(!deprecations[name]){printMsg(msg);deprecations[name]=true;}}
function padToken(func,count){return function(a){return leftZeroFill(func.call(this,a),count);};}
function ordinalizeToken(func,period){return function(a){return this.localeData().ordinal(func.call(this,a),period);};}
while(ordinalizeTokens.length){i=ordinalizeTokens.pop();formatTokenFunctions[i+'o']=ordinalizeToken(formatTokenFunctions[i],i);}
while(paddedTokens.length){i=paddedTokens.pop();formatTokenFunctions[i+i]=padToken(formatTokenFunctions[i],2);}
formatTokenFunctions.DDDD=padToken(formatTokenFunctions.DDD,3);function Locale(){} 
function Moment(config,skipOverflow){if(skipOverflow!==false){checkOverflow(config);}
copyConfig(this,config);this._d=new Date(+config._d);} 
function Duration(duration){var normalizedInput=normalizeObjectUnits(duration),years=normalizedInput.year||0,quarters=normalizedInput.quarter||0,months=normalizedInput.month||0,weeks=normalizedInput.week||0,days=normalizedInput.day||0,hours=normalizedInput.hour||0,minutes=normalizedInput.minute||0,seconds=normalizedInput.second||0,milliseconds=normalizedInput.millisecond||0; this._milliseconds=+milliseconds+
seconds*1e3+ minutes*6e4+ hours*36e5;

 this._days=+days+
weeks*7;

this._months=+months+
quarters*3+
years*12;this._data={};this._locale=moment.localeData();this._bubble();}
function extend(a,b){for(var i in b){if(hasOwnProp(b,i)){a[i]=b[i];}}
if(hasOwnProp(b,'toString')){a.toString=b.toString;}
if(hasOwnProp(b,'valueOf')){a.valueOf=b.valueOf;}
return a;}
function copyConfig(to,from){var i,prop,val;if(typeof from._isAMomentObject!=='undefined'){to._isAMomentObject=from._isAMomentObject;}
if(typeof from._i!=='undefined'){to._i=from._i;}
if(typeof from._f!=='undefined'){to._f=from._f;}
if(typeof from._l!=='undefined'){to._l=from._l;}
if(typeof from._strict!=='undefined'){to._strict=from._strict;}
if(typeof from._tzm!=='undefined'){to._tzm=from._tzm;}
if(typeof from._isUTC!=='undefined'){to._isUTC=from._isUTC;}
if(typeof from._offset!=='undefined'){to._offset=from._offset;}
if(typeof from._pf!=='undefined'){to._pf=from._pf;}
if(typeof from._locale!=='undefined'){to._locale=from._locale;}
if(momentProperties.length>0){for(i in momentProperties){prop=momentProperties[i];val=from[prop];if(typeof val!=='undefined'){to[prop]=val;}}}
return to;}
function absRound(number){if(number<0){return Math.ceil(number);}else{return Math.floor(number);}}
 
function leftZeroFill(number,targetLength,forceSign){var output=''+Math.abs(number),sign=number>=0;while(output.length<targetLength){output='0'+output;}
return(sign?(forceSign?'+':''):'-')+output;}
function positiveMomentsDifference(base,other){var res={milliseconds:0,months:0};res.months=other.month()-base.month()+
(other.year()-base.year())*12;if(base.clone().add(res.months,'M').isAfter(other)){--res.months;}
res.milliseconds=+other-+(base.clone().add(res.months,'M'));return res;}
function momentsDifference(base,other){var res;other=makeAs(other,base);if(base.isBefore(other)){res=positiveMomentsDifference(base,other);}else{res=positiveMomentsDifference(other,base);res.milliseconds=-res.milliseconds;res.months=-res.months;}
return res;} 
function createAdder(direction,name){return function(val,period){var dur,tmp; if(period!==null&&!isNaN(+period)){deprecateSimple(name,'moment().'+name+'(period, number) is deprecated. Please use moment().'+name+'(number, period).');tmp=val;val=period;period=tmp;}
val=typeof val==='string'?+val:val;dur=moment.duration(val,period);addOrSubtractDurationFromMoment(this,dur,direction);return this;};}
function addOrSubtractDurationFromMoment(mom,duration,isAdding,updateOffset){var milliseconds=duration._milliseconds,days=duration._days,months=duration._months;updateOffset=updateOffset==null?true:updateOffset;if(milliseconds){mom._d.setTime(+mom._d+milliseconds*isAdding);}
if(days){rawSetter(mom,'Date',rawGetter(mom,'Date')+days*isAdding);}
if(months){rawMonthSetter(mom,rawGetter(mom,'Month')+months*isAdding);}
if(updateOffset){moment.updateOffset(mom,days||months);}} 
function isArray(input){return Object.prototype.toString.call(input)==='[object Array]';}
function isDate(input){return Object.prototype.toString.call(input)==='[object Date]'||input instanceof Date;} 
function compareArrays(array1,array2,dontConvert){var len=Math.min(array1.length,array2.length),lengthDiff=Math.abs(array1.length-array2.length),diffs=0,i;for(i=0;i<len;i++){if((dontConvert&&array1[i]!==array2[i])||(!dontConvert&&toInt(array1[i])!==toInt(array2[i]))){diffs++;}}
return diffs+lengthDiff;}
function normalizeUnits(units){if(units){var lowered=units.toLowerCase().replace(/(.)s$/,'$1');units=unitAliases[units]||camelFunctions[lowered]||lowered;}
return units;}
function normalizeObjectUnits(inputObject){var normalizedInput={},normalizedProp,prop;for(prop in inputObject){if(hasOwnProp(inputObject,prop)){normalizedProp=normalizeUnits(prop);if(normalizedProp){normalizedInput[normalizedProp]=inputObject[prop];}}}
return normalizedInput;}
function makeList(field){var count,setter;if(field.indexOf('week')===0){count=7;setter='day';}
else if(field.indexOf('month')===0){count=12;setter='month';}
else{return;}
moment[field]=function(format,index){var i,getter,method=moment._locale[field],results=[];if(typeof format==='number'){index=format;format=undefined;}
getter=function(i){var m=moment().utc().set(setter,i);return method.call(moment._locale,m,format||'');};if(index!=null){return getter(index);}
else{for(i=0;i<count;i++){results.push(getter(i));}
return results;}};}
function toInt(argumentForCoercion){var coercedNumber=+argumentForCoercion,value=0;if(coercedNumber!==0&&isFinite(coercedNumber)){if(coercedNumber>=0){value=Math.floor(coercedNumber);}else{value=Math.ceil(coercedNumber);}}
return value;}
function daysInMonth(year,month){return new Date(Date.UTC(year,month+1,0)).getUTCDate();}
function weeksInYear(year,dow,doy){return weekOfYear(moment([year,11,31+dow-doy]),dow,doy).week;}
function daysInYear(year){return isLeapYear(year)?366:365;}
function isLeapYear(year){return(year%4===0&&year%100!==0)||year%400===0;}
function checkOverflow(m){var overflow;if(m._a&&m._pf.overflow===-2){overflow=m._a[MONTH]<0||m._a[MONTH]>11?MONTH:m._a[DATE]<1||m._a[DATE]>daysInMonth(m._a[YEAR],m._a[MONTH])?DATE:m._a[HOUR]<0||m._a[HOUR]>24||(m._a[HOUR]===24&&(m._a[MINUTE]!==0||m._a[SECOND]!==0||m._a[MILLISECOND]!==0))?HOUR:m._a[MINUTE]<0||m._a[MINUTE]>59?MINUTE:m._a[SECOND]<0||m._a[SECOND]>59?SECOND:m._a[MILLISECOND]<0||m._a[MILLISECOND]>999?MILLISECOND:-1;if(m._pf._overflowDayOfYear&&(overflow<YEAR||overflow>DATE)){overflow=DATE;}
m._pf.overflow=overflow;}}
function isValid(m){if(m._isValid==null){m._isValid=!isNaN(m._d.getTime())&&m._pf.overflow<0&&!m._pf.empty&&!m._pf.invalidMonth&&!m._pf.nullInput&&!m._pf.invalidFormat&&!m._pf.userInvalidated;if(m._strict){m._isValid=m._isValid&&m._pf.charsLeftOver===0&&m._pf.unusedTokens.length===0&&m._pf.bigHour===undefined;}}
return m._isValid;}
function normalizeLocale(key){return key?key.toLowerCase().replace('_','-'):key;}

 
function chooseLocale(names){var i=0,j,next,locale,split;while(i<names.length){split=normalizeLocale(names[i]).split('-');j=split.length;next=normalizeLocale(names[i+1]);next=next?next.split('-'):null;while(j>0){locale=loadLocale(split.slice(0,j).join('-'));if(locale){return locale;}
if(next&&next.length>=j&&compareArrays(split,next,true)>=j-1){ break;}
j--;}
i++;}
return null;}
function loadLocale(name){var oldLocale=null;if(!locales[name]&&hasModule){try{oldLocale=moment.locale();require('./locale/'+name); moment.locale(oldLocale);}catch(e){}}
return locales[name];}
function makeAs(input,model){var res,diff;if(model._isUTC){res=model.clone();diff=(moment.isMoment(input)||isDate(input)?+input:+moment(input))-(+res);res._d.setTime(+res._d+diff);moment.updateOffset(res,false);return res;}else{return moment(input).local();}}
extend(Locale.prototype,{set:function(config){var prop,i;for(i in config){prop=config[i];if(typeof prop==='function'){this[i]=prop;}else{this['_'+i]=prop;}}

this._ordinalParseLenient=new RegExp(this._ordinalParse.source+'|'+/\d{1,2}/.source);},_months:'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),months:function(m){return this._months[m.month()];},_monthsShort:'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),monthsShort:function(m){return this._monthsShort[m.month()];},monthsParse:function(monthName,format,strict){var i,mom,regex;if(!this._monthsParse){this._monthsParse=[];this._longMonthsParse=[];this._shortMonthsParse=[];}
for(i=0;i<12;i++){ mom=moment.utc([2000,i]);if(strict&&!this._longMonthsParse[i]){this._longMonthsParse[i]=new RegExp('^'+this.months(mom,'').replace('.','')+'$','i');this._shortMonthsParse[i]=new RegExp('^'+this.monthsShort(mom,'').replace('.','')+'$','i');}
if(!strict&&!this._monthsParse[i]){regex='^'+this.months(mom,'')+'|^'+this.monthsShort(mom,'');this._monthsParse[i]=new RegExp(regex.replace('.',''),'i');} 
if(strict&&format==='MMMM'&&this._longMonthsParse[i].test(monthName)){return i;}else if(strict&&format==='MMM'&&this._shortMonthsParse[i].test(monthName)){return i;}else if(!strict&&this._monthsParse[i].test(monthName)){return i;}}},_weekdays:'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),weekdays:function(m){return this._weekdays[m.day()];},_weekdaysShort:'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),weekdaysShort:function(m){return this._weekdaysShort[m.day()];},_weekdaysMin:'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),weekdaysMin:function(m){return this._weekdaysMin[m.day()];},weekdaysParse:function(weekdayName){var i,mom,regex;if(!this._weekdaysParse){this._weekdaysParse=[];}
for(i=0;i<7;i++){ if(!this._weekdaysParse[i]){mom=moment([2000,1]).day(i);regex='^'+this.weekdays(mom,'')+'|^'+this.weekdaysShort(mom,'')+'|^'+this.weekdaysMin(mom,'');this._weekdaysParse[i]=new RegExp(regex.replace('.',''),'i');} 
if(this._weekdaysParse[i].test(weekdayName)){return i;}}},_longDateFormat:{LTS:'h:mm:ss A',LT:'h:mm A',L:'MM/DD/YYYY',LL:'MMMM D, YYYY',LLL:'MMMM D, YYYY LT',LLLL:'dddd, MMMM D, YYYY LT'},longDateFormat:function(key){var output=this._longDateFormat[key];if(!output&&this._longDateFormat[key.toUpperCase()]){output=this._longDateFormat[key.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(val){return val.slice(1);});this._longDateFormat[key]=output;}
return output;},isPM:function(input){
return((input+'').toLowerCase().charAt(0)==='p');},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(hours,minutes,isLower){if(hours>11){return isLower?'pm':'PM';}else{return isLower?'am':'AM';}},_calendar:{sameDay:'[Today at] LT',nextDay:'[Tomorrow at] LT',nextWeek:'dddd [at] LT',lastDay:'[Yesterday at] LT',lastWeek:'[Last] dddd [at] LT',sameElse:'L'},calendar:function(key,mom,now){var output=this._calendar[key];return typeof output==='function'?output.apply(mom,[now]):output;},_relativeTime:{future:'in %s',past:'%s ago',s:'a few seconds',m:'a minute',mm:'%d minutes',h:'an hour',hh:'%d hours',d:'a day',dd:'%d days',M:'a month',MM:'%d months',y:'a year',yy:'%d years'},relativeTime:function(number,withoutSuffix,string,isFuture){var output=this._relativeTime[string];return(typeof output==='function')?output(number,withoutSuffix,string,isFuture):output.replace(/%d/i,number);},pastFuture:function(diff,output){var format=this._relativeTime[diff>0?'future':'past'];return typeof format==='function'?format(output):format.replace(/%s/i,output);},ordinal:function(number){return this._ordinal.replace('%d',number);},_ordinal:'%d',_ordinalParse:/\d{1,2}/,preparse:function(string){return string;},postformat:function(string){return string;},week:function(mom){return weekOfYear(mom,this._week.dow,this._week.doy).week;},_week:{dow:0,doy:6
},_invalidDate:'Invalid date',invalidDate:function(){return this._invalidDate;}});function removeFormattingTokens(input){if(input.match(/\[[\s\S]/)){return input.replace(/^\[|\]$/g,'');}
return input.replace(/\\/g,'');}
function makeFormatFunction(format){var array=format.match(formattingTokens),i,length;for(i=0,length=array.length;i<length;i++){if(formatTokenFunctions[array[i]]){array[i]=formatTokenFunctions[array[i]];}else{array[i]=removeFormattingTokens(array[i]);}}
return function(mom){var output='';for(i=0;i<length;i++){output+=array[i]instanceof Function?array[i].call(mom,format):array[i];}
return output;};} 
function formatMoment(m,format){if(!m.isValid()){return m.localeData().invalidDate();}
format=expandFormat(format,m.localeData());if(!formatFunctions[format]){formatFunctions[format]=makeFormatFunction(format);}
return formatFunctions[format](m);}
function expandFormat(format,locale){var i=5;function replaceLongDateFormatTokens(input){return locale.longDateFormat(input)||input;}
localFormattingTokens.lastIndex=0;while(i>=0&&localFormattingTokens.test(format)){format=format.replace(localFormattingTokens,replaceLongDateFormatTokens);localFormattingTokens.lastIndex=0;i-=1;}
return format;} 
function getParseRegexForToken(token,config){var a,strict=config._strict;switch(token){case'Q':return parseTokenOneDigit;case'DDDD':return parseTokenThreeDigits;case'YYYY':case'GGGG':case'gggg':return strict?parseTokenFourDigits:parseTokenOneToFourDigits;case'Y':case'G':case'g':return parseTokenSignedNumber;case'YYYYYY':case'YYYYY':case'GGGGG':case'ggggg':return strict?parseTokenSixDigits:parseTokenOneToSixDigits;case'S':if(strict){return parseTokenOneDigit;}
case'SS':if(strict){return parseTokenTwoDigits;}
case'SSS':if(strict){return parseTokenThreeDigits;}
case'DDD':return parseTokenOneToThreeDigits;case'MMM':case'MMMM':case'dd':case'ddd':case'dddd':return parseTokenWord;case'a':case'A':return config._locale._meridiemParse;case'x':return parseTokenOffsetMs;case'X':return parseTokenTimestampMs;case'Z':case'ZZ':return parseTokenTimezone;case'T':return parseTokenT;case'SSSS':return parseTokenDigits;case'MM':case'DD':case'YY':case'GG':case'gg':case'HH':case'hh':case'mm':case'ss':case'ww':case'WW':return strict?parseTokenTwoDigits:parseTokenOneOrTwoDigits;case'M':case'D':case'd':case'H':case'h':case'm':case's':case'w':case'W':case'e':case'E':return parseTokenOneOrTwoDigits;case'Do':return strict?config._locale._ordinalParse:config._locale._ordinalParseLenient;default:a=new RegExp(regexpEscape(unescapeFormat(token.replace('\\','')),'i'));return a;}}
function timezoneMinutesFromString(string){string=string||'';var possibleTzMatches=(string.match(parseTokenTimezone)||[]),tzChunk=possibleTzMatches[possibleTzMatches.length-1]||[],parts=(tzChunk+'').match(parseTimezoneChunker)||['-',0,0],minutes=+(parts[1]*60)+toInt(parts[2]);return parts[0]==='+'?-minutes:minutes;} 
function addTimeToArrayFromToken(token,input,config){var a,datePartArray=config._a;switch(token){ case'Q':if(input!=null){datePartArray[MONTH]=(toInt(input)-1)*3;}
break; case'M': case'MM':if(input!=null){datePartArray[MONTH]=toInt(input)-1;}
break;case'MMM': case'MMMM':a=config._locale.monthsParse(input,token,config._strict);if(a!=null){datePartArray[MONTH]=a;}else{config._pf.invalidMonth=input;}
break; case'D': case'DD':if(input!=null){datePartArray[DATE]=toInt(input);}
break;case'Do':if(input!=null){datePartArray[DATE]=toInt(parseInt(input.match(/\d{1,2}/)[0],10));}
break; case'DDD': case'DDDD':if(input!=null){config._dayOfYear=toInt(input);}
break; case'YY':datePartArray[YEAR]=moment.parseTwoDigitYear(input);break;case'YYYY':case'YYYYY':case'YYYYYY':datePartArray[YEAR]=toInt(input);break; case'a': case'A':config._isPm=config._locale.isPM(input);break; case'h': case'hh':config._pf.bigHour=true;case'H': case'HH':datePartArray[HOUR]=toInt(input);break; case'm': case'mm':datePartArray[MINUTE]=toInt(input);break; case's': case'ss':datePartArray[SECOND]=toInt(input);break; case'S':case'SS':case'SSS':case'SSSS':datePartArray[MILLISECOND]=toInt(('0.'+input)*1000);break;case'x':config._d=new Date(toInt(input));break; case'X':config._d=new Date(parseFloat(input)*1000);break; case'Z': case'ZZ':config._useUTC=true;config._tzm=timezoneMinutesFromString(input);break; case'dd':case'ddd':case'dddd':a=config._locale.weekdaysParse(input); if(a!=null){config._w=config._w||{};config._w['d']=a;}else{config._pf.invalidWeekday=input;}
break; case'w':case'ww':case'W':case'WW':case'd':case'e':case'E':token=token.substr(0,1);case'gggg':case'GGGG':case'GGGGG':token=token.substr(0,2);if(input){config._w=config._w||{};config._w[token]=toInt(input);}
break;case'gg':case'GG':config._w=config._w||{};config._w[token]=moment.parseTwoDigitYear(input);}}
function dayOfYearFromWeekInfo(config){var w,weekYear,week,weekday,dow,doy,temp;w=config._w;if(w.GG!=null||w.W!=null||w.E!=null){dow=1;doy=4;


weekYear=dfl(w.GG,config._a[YEAR],weekOfYear(moment(),1,4).year);week=dfl(w.W,1);weekday=dfl(w.E,1);}else{dow=config._locale._week.dow;doy=config._locale._week.doy;weekYear=dfl(w.gg,config._a[YEAR],weekOfYear(moment(),dow,doy).year);week=dfl(w.w,1);if(w.d!=null){ weekday=w.d;if(weekday<dow){++week;}}else if(w.e!=null){ weekday=w.e+dow;}else{ weekday=dow;}}
temp=dayOfYearFromWeeks(weekYear,week,weekday,doy,dow);config._a[YEAR]=temp.year;config._dayOfYear=temp.dayOfYear;}

function dateFromConfig(config){var i,date,input=[],currentDate,yearToUse;if(config._d){return;}
currentDate=currentDateArray(config); if(config._w&&config._a[DATE]==null&&config._a[MONTH]==null){dayOfYearFromWeekInfo(config);} 
if(config._dayOfYear){yearToUse=dfl(config._a[YEAR],currentDate[YEAR]);if(config._dayOfYear>daysInYear(yearToUse)){config._pf._overflowDayOfYear=true;}
date=makeUTCDate(yearToUse,0,config._dayOfYear);config._a[MONTH]=date.getUTCMonth();config._a[DATE]=date.getUTCDate();}


 
for(i=0;i<3&&config._a[i]==null;++i){config._a[i]=input[i]=currentDate[i];} 
for(;i<7;i++){config._a[i]=input[i]=(config._a[i]==null)?(i===2?1:0):config._a[i];} 
if(config._a[HOUR]===24&&config._a[MINUTE]===0&&config._a[SECOND]===0&&config._a[MILLISECOND]===0){config._nextDay=true;config._a[HOUR]=0;}
config._d=(config._useUTC?makeUTCDate:makeDate).apply(null,input);
if(config._tzm!=null){config._d.setUTCMinutes(config._d.getUTCMinutes()+config._tzm);}
if(config._nextDay){config._a[HOUR]=24;}}
function dateFromObject(config){var normalizedInput;if(config._d){return;}
normalizedInput=normalizeObjectUnits(config._i);config._a=[normalizedInput.year,normalizedInput.month,normalizedInput.day||normalizedInput.date,normalizedInput.hour,normalizedInput.minute,normalizedInput.second,normalizedInput.millisecond];dateFromConfig(config);}
function currentDateArray(config){var now=new Date();if(config._useUTC){return[now.getUTCFullYear(),now.getUTCMonth(),now.getUTCDate()];}else{return[now.getFullYear(),now.getMonth(),now.getDate()];}} 
function makeDateFromStringAndFormat(config){if(config._f===moment.ISO_8601){parseISO(config);return;}
config._a=[];config._pf.empty=true;var string=''+config._i,i,parsedInput,tokens,token,skipped,stringLength=string.length,totalParsedInputLength=0;tokens=expandFormat(config._f,config._locale).match(formattingTokens)||[];for(i=0;i<tokens.length;i++){token=tokens[i];parsedInput=(string.match(getParseRegexForToken(token,config))||[])[0];if(parsedInput){skipped=string.substr(0,string.indexOf(parsedInput));if(skipped.length>0){config._pf.unusedInput.push(skipped);}
string=string.slice(string.indexOf(parsedInput)+parsedInput.length);totalParsedInputLength+=parsedInput.length;} 
if(formatTokenFunctions[token]){if(parsedInput){config._pf.empty=false;}
else{config._pf.unusedTokens.push(token);}
addTimeToArrayFromToken(token,parsedInput,config);}
else if(config._strict&&!parsedInput){config._pf.unusedTokens.push(token);}} 
config._pf.charsLeftOver=stringLength-totalParsedInputLength;if(string.length>0){config._pf.unusedInput.push(string);} 
if(config._pf.bigHour===true&&config._a[HOUR]<=12){config._pf.bigHour=undefined;} 
if(config._isPm&&config._a[HOUR]<12){config._a[HOUR]+=12;} 
if(config._isPm===false&&config._a[HOUR]===12){config._a[HOUR]=0;}
dateFromConfig(config);checkOverflow(config);}
function unescapeFormat(s){return s.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(matched,p1,p2,p3,p4){return p1||p2||p3||p4;});} 
function regexpEscape(s){return s.replace(/[-\/\\^$*+?.()|[\]{}]/g,'\\$&');} 
function makeDateFromStringAndArray(config){var tempConfig,bestMoment,scoreToBeat,i,currentScore;if(config._f.length===0){config._pf.invalidFormat=true;config._d=new Date(NaN);return;}
for(i=0;i<config._f.length;i++){currentScore=0;tempConfig=copyConfig({},config);if(config._useUTC!=null){tempConfig._useUTC=config._useUTC;}
tempConfig._pf=defaultParsingFlags();tempConfig._f=config._f[i];makeDateFromStringAndFormat(tempConfig);if(!isValid(tempConfig)){continue;} 
currentScore+=tempConfig._pf.charsLeftOver; currentScore+=tempConfig._pf.unusedTokens.length*10;tempConfig._pf.score=currentScore;if(scoreToBeat==null||currentScore<scoreToBeat){scoreToBeat=currentScore;bestMoment=tempConfig;}}
extend(config,bestMoment||tempConfig);} 
function parseISO(config){var i,l,string=config._i,match=isoRegex.exec(string);if(match){config._pf.iso=true;for(i=0,l=isoDates.length;i<l;i++){if(isoDates[i][1].exec(string)){ config._f=isoDates[i][0]+(match[6]||' ');break;}}
for(i=0,l=isoTimes.length;i<l;i++){if(isoTimes[i][1].exec(string)){config._f+=isoTimes[i][0];break;}}
if(string.match(parseTokenTimezone)){config._f+='Z';}
makeDateFromStringAndFormat(config);}else{config._isValid=false;}} 
function makeDateFromString(config){parseISO(config);if(config._isValid===false){delete config._isValid;moment.createFromInputFallback(config);}}
function map(arr,fn){var res=[],i;for(i=0;i<arr.length;++i){res.push(fn(arr[i],i));}
return res;}
function makeDateFromInput(config){var input=config._i,matched;if(input===undefined){config._d=new Date();}else if(isDate(input)){config._d=new Date(+input);}else if((matched=aspNetJsonRegex.exec(input))!==null){config._d=new Date(+matched[1]);}else if(typeof input==='string'){makeDateFromString(config);}else if(isArray(input)){config._a=map(input.slice(0),function(obj){return parseInt(obj,10);});dateFromConfig(config);}else if(typeof(input)==='object'){dateFromObject(config);}else if(typeof(input)==='number'){ config._d=new Date(input);}else{moment.createFromInputFallback(config);}}
function makeDate(y,m,d,h,M,s,ms){ var date=new Date(y,m,d,h,M,s,ms); if(y<1970){date.setFullYear(y);}
return date;}
function makeUTCDate(y){var date=new Date(Date.UTC.apply(null,arguments));if(y<1970){date.setUTCFullYear(y);}
return date;}
function parseWeekday(input,locale){if(typeof input==='string'){if(!isNaN(input)){input=parseInt(input,10);}
else{input=locale.weekdaysParse(input);if(typeof input!=='number'){return null;}}}
return input;} 
function substituteTimeAgo(string,number,withoutSuffix,isFuture,locale){return locale.relativeTime(number||1,!!withoutSuffix,string,isFuture);}
function relativeTime(posNegDuration,withoutSuffix,locale){var duration=moment.duration(posNegDuration).abs(),seconds=round(duration.as('s')),minutes=round(duration.as('m')),hours=round(duration.as('h')),days=round(duration.as('d')),months=round(duration.as('M')),years=round(duration.as('y')),args=seconds<relativeTimeThresholds.s&&['s',seconds]||minutes===1&&['m']||minutes<relativeTimeThresholds.m&&['mm',minutes]||hours===1&&['h']||hours<relativeTimeThresholds.h&&['hh',hours]||days===1&&['d']||days<relativeTimeThresholds.d&&['dd',days]||months===1&&['M']||months<relativeTimeThresholds.M&&['MM',months]||years===1&&['y']||['yy',years];args[2]=withoutSuffix;args[3]=+posNegDuration>0;args[4]=locale;return substituteTimeAgo.apply({},args);}





function weekOfYear(mom,firstDayOfWeek,firstDayOfWeekOfYear){var end=firstDayOfWeekOfYear-firstDayOfWeek,daysToDayOfWeek=firstDayOfWeekOfYear-mom.day(),adjustedMoment;if(daysToDayOfWeek>end){daysToDayOfWeek-=7;}
if(daysToDayOfWeek<end-7){daysToDayOfWeek+=7;}
adjustedMoment=moment(mom).add(daysToDayOfWeek,'d');return{week:Math.ceil(adjustedMoment.dayOfYear()/7),year:adjustedMoment.year()};} 
function dayOfYearFromWeeks(year,week,weekday,firstDayOfWeekOfYear,firstDayOfWeek){var d=makeUTCDate(year,0,1).getUTCDay(),daysToAdd,dayOfYear;d=d===0?7:d;weekday=weekday!=null?weekday:firstDayOfWeek;daysToAdd=firstDayOfWeek-d+(d>firstDayOfWeekOfYear?7:0)-(d<firstDayOfWeek?7:0);dayOfYear=7*(week-1)+(weekday-firstDayOfWeek)+daysToAdd+1;return{year:dayOfYear>0?year:year-1,dayOfYear:dayOfYear>0?dayOfYear:daysInYear(year-1)+dayOfYear};}
function makeMoment(config){var input=config._i,format=config._f,res;config._locale=config._locale||moment.localeData(config._l);if(input===null||(format===undefined&&input==='')){return moment.invalid({nullInput:true});}
if(typeof input==='string'){config._i=input=config._locale.preparse(input);}
if(moment.isMoment(input)){return new Moment(input,true);}else if(format){if(isArray(format)){makeDateFromStringAndArray(config);}else{makeDateFromStringAndFormat(config);}}else{makeDateFromInput(config);}
res=new Moment(config);if(res._nextDay){ res.add(1,'d');res._nextDay=undefined;}
return res;}
moment=function(input,format,locale,strict){var c;if(typeof(locale)==='boolean'){strict=locale;locale=undefined;} 
c={};c._isAMomentObject=true;c._i=input;c._f=format;c._l=locale;c._strict=strict;c._isUTC=false;c._pf=defaultParsingFlags();return makeMoment(c);};moment.suppressDeprecationWarnings=false;moment.createFromInputFallback=deprecate('moment construction falls back to js Date. This is '+'discouraged and will be removed in upcoming major '+'release. Please refer to '+'https://github.com/moment/moment/issues/1407 for more info.',function(config){config._d=new Date(config._i+(config._useUTC?' UTC':''));});

function pickBy(fn,moments){var res,i;if(moments.length===1&&isArray(moments[0])){moments=moments[0];}
if(!moments.length){return moment();}
res=moments[0];for(i=1;i<moments.length;++i){if(moments[i][fn](res)){res=moments[i];}}
return res;}
moment.min=function(){var args=[].slice.call(arguments,0);return pickBy('isBefore',args);};moment.max=function(){var args=[].slice.call(arguments,0);return pickBy('isAfter',args);}; moment.utc=function(input,format,locale,strict){var c;if(typeof(locale)==='boolean'){strict=locale;locale=undefined;} 
c={};c._isAMomentObject=true;c._useUTC=true;c._isUTC=true;c._l=locale;c._i=input;c._f=format;c._strict=strict;c._pf=defaultParsingFlags();return makeMoment(c).utc();};moment.unix=function(input){return moment(input*1000);}; moment.duration=function(input,key){var duration=input, match=null,sign,ret,parseIso,diffRes;if(moment.isDuration(input)){duration={ms:input._milliseconds,d:input._days,M:input._months};}else if(typeof input==='number'){duration={};if(key){duration[key]=input;}else{duration.milliseconds=input;}}else if(!!(match=aspNetTimeSpanJsonRegex.exec(input))){sign=(match[1]==='-')?-1:1;duration={y:0,d:toInt(match[DATE])*sign,h:toInt(match[HOUR])*sign,m:toInt(match[MINUTE])*sign,s:toInt(match[SECOND])*sign,ms:toInt(match[MILLISECOND])*sign};}else if(!!(match=isoDurationRegex.exec(input))){sign=(match[1]==='-')?-1:1;parseIso=function(inp){
var res=inp&&parseFloat(inp.replace(',','.')); return(isNaN(res)?0:res)*sign;};duration={y:parseIso(match[2]),M:parseIso(match[3]),d:parseIso(match[4]),h:parseIso(match[5]),m:parseIso(match[6]),s:parseIso(match[7]),w:parseIso(match[8])};}else if(typeof duration==='object'&&('from'in duration||'to'in duration)){diffRes=momentsDifference(moment(duration.from),moment(duration.to));duration={};duration.ms=diffRes.milliseconds;duration.M=diffRes.months;}
ret=new Duration(duration);if(moment.isDuration(input)&&hasOwnProp(input,'_locale')){ret._locale=input._locale;}
return ret;}; moment.version=VERSION; moment.defaultFormat=isoFormat; moment.ISO_8601=function(){};moment.momentProperties=momentProperties;moment.updateOffset=function(){}; moment.relativeTimeThreshold=function(threshold,limit){if(relativeTimeThresholds[threshold]===undefined){return false;}
if(limit===undefined){return relativeTimeThresholds[threshold];}
relativeTimeThresholds[threshold]=limit;return true;};moment.lang=deprecate('moment.lang is deprecated. Use moment.locale instead.',function(key,value){return moment.locale(key,value);});

moment.locale=function(key,values){var data;if(key){if(typeof(values)!=='undefined'){data=moment.defineLocale(key,values);}
else{data=moment.localeData(key);}
if(data){moment.duration._locale=moment._locale=data;}}
return moment._locale._abbr;};moment.defineLocale=function(name,values){if(values!==null){values.abbr=name;if(!locales[name]){locales[name]=new Locale();}
locales[name].set(values); moment.locale(name);return locales[name];}else{ delete locales[name];return null;}};moment.langData=deprecate('moment.langData is deprecated. Use moment.localeData instead.',function(key){return moment.localeData(key);}); moment.localeData=function(key){var locale;if(key&&key._locale&&key._locale._abbr){key=key._locale._abbr;}
if(!key){return moment._locale;}
if(!isArray(key)){ locale=loadLocale(key);if(locale){return locale;}
key=[key];}
return chooseLocale(key);}; moment.isMoment=function(obj){return obj instanceof Moment||(obj!=null&&hasOwnProp(obj,'_isAMomentObject'));}; moment.isDuration=function(obj){return obj instanceof Duration;};for(i=lists.length-1;i>=0;--i){makeList(lists[i]);}
moment.normalizeUnits=function(units){return normalizeUnits(units);};moment.invalid=function(flags){var m=moment.utc(NaN);if(flags!=null){extend(m._pf,flags);}
else{m._pf.userInvalidated=true;}
return m;};moment.parseZone=function(){return moment.apply(null,arguments).parseZone();};moment.parseTwoDigitYear=function(input){return toInt(input)+(toInt(input)>68?1900:2000);};extend(moment.fn=Moment.prototype,{clone:function(){return moment(this);},valueOf:function(){return+this._d+((this._offset||0)*60000);},unix:function(){return Math.floor(+this/1000);},toString:function(){return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');},toDate:function(){return this._offset?new Date(+this):this._d;},toISOString:function(){var m=moment(this).utc();if(0<m.year()&&m.year()<=9999){if('function'===typeof Date.prototype.toISOString){ return this.toDate().toISOString();}else{return formatMoment(m,'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');}}else{return formatMoment(m,'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');}},toArray:function(){var m=this;return[m.year(),m.month(),m.date(),m.hours(),m.minutes(),m.seconds(),m.milliseconds()];},isValid:function(){return isValid(this);},isDSTShifted:function(){if(this._a){return this.isValid()&&compareArrays(this._a,(this._isUTC?moment.utc(this._a):moment(this._a)).toArray())>0;}
return false;},parsingFlags:function(){return extend({},this._pf);},invalidAt:function(){return this._pf.overflow;},utc:function(keepLocalTime){return this.zone(0,keepLocalTime);},local:function(keepLocalTime){if(this._isUTC){this.zone(0,keepLocalTime);this._isUTC=false;if(keepLocalTime){this.add(this._dateTzOffset(),'m');}}
return this;},format:function(inputString){var output=formatMoment(this,inputString||moment.defaultFormat);return this.localeData().postformat(output);},add:createAdder(1,'add'),subtract:createAdder(-1,'subtract'),diff:function(input,units,asFloat){var that=makeAs(input,this),zoneDiff=(this.zone()-that.zone())*6e4,diff,output,daysAdjust;units=normalizeUnits(units);if(units==='year'||units==='month'){ diff=(this.daysInMonth()+that.daysInMonth())*432e5;
 output=((this.year()-that.year())*12)+(this.month()-that.month());
daysAdjust=(this-moment(this).startOf('month'))-
(that-moment(that).startOf('month')); daysAdjust-=((this.zone()-moment(this).startOf('month').zone())-
(that.zone()-moment(that).startOf('month').zone()))*6e4;output+=daysAdjust/diff;if(units==='year'){output=output/12;}}else{diff=(this-that);output=units==='second'?diff/1e3: units==='minute'?diff/6e4: units==='hour'?diff/36e5: units==='day'?(diff-zoneDiff)/864e5: units==='week'?(diff-zoneDiff)/6048e5: diff;}
return asFloat?output:absRound(output);},from:function(time,withoutSuffix){return moment.duration({to:this,from:time}).locale(this.locale()).humanize(!withoutSuffix);},fromNow:function(withoutSuffix){return this.from(moment(),withoutSuffix);},calendar:function(time){var now=time||moment(),sod=makeAs(now,this).startOf('day'),diff=this.diff(sod,'days',true),format=diff<-6?'sameElse':diff<-1?'lastWeek':diff<0?'lastDay':diff<1?'sameDay':diff<2?'nextDay':diff<7?'nextWeek':'sameElse';return this.format(this.localeData().calendar(format,this,moment(now)));},isLeapYear:function(){return isLeapYear(this.year());},isDST:function(){return(this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone());},day:function(input){var day=this._isUTC?this._d.getUTCDay():this._d.getDay();if(input!=null){input=parseWeekday(input,this.localeData());return this.add(input-day,'d');}else{return day;}},month:makeAccessor('Month',true),startOf:function(units){units=normalizeUnits(units);
switch(units){case'year':this.month(0);case'quarter':case'month':this.date(1);case'week':case'isoWeek':case'day':this.hours(0);case'hour':this.minutes(0);case'minute':this.seconds(0);case'second':this.milliseconds(0);} 
if(units==='week'){this.weekday(0);}else if(units==='isoWeek'){this.isoWeekday(1);} 
if(units==='quarter'){this.month(Math.floor(this.month()/3)*3);}
return this;},endOf:function(units){units=normalizeUnits(units);if(units===undefined||units==='millisecond'){return this;}
return this.startOf(units).add(1,(units==='isoWeek'?'week':units)).subtract(1,'ms');},isAfter:function(input,units){var inputMs;units=normalizeUnits(typeof units!=='undefined'?units:'millisecond');if(units==='millisecond'){input=moment.isMoment(input)?input:moment(input);return+this>+input;}else{inputMs=moment.isMoment(input)?+input:+moment(input);return inputMs<+this.clone().startOf(units);}},isBefore:function(input,units){var inputMs;units=normalizeUnits(typeof units!=='undefined'?units:'millisecond');if(units==='millisecond'){input=moment.isMoment(input)?input:moment(input);return+this<+input;}else{inputMs=moment.isMoment(input)?+input:+moment(input);return+this.clone().endOf(units)<inputMs;}},isSame:function(input,units){var inputMs;units=normalizeUnits(units||'millisecond');if(units==='millisecond'){input=moment.isMoment(input)?input:moment(input);return+this===+input;}else{inputMs=+moment(input);return+(this.clone().startOf(units))<=inputMs&&inputMs<=+(this.clone().endOf(units));}},min:deprecate('moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548',function(other){other=moment.apply(null,arguments);return other<this?this:other;}),max:deprecate('moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548',function(other){other=moment.apply(null,arguments);return other>this?this:other;}),





zone:function(input,keepLocalTime){var offset=this._offset||0,localAdjust;if(input!=null){if(typeof input==='string'){input=timezoneMinutesFromString(input);}
if(Math.abs(input)<16){input=input*60;}
if(!this._isUTC&&keepLocalTime){localAdjust=this._dateTzOffset();}
this._offset=input;this._isUTC=true;if(localAdjust!=null){this.subtract(localAdjust,'m');}
if(offset!==input){if(!keepLocalTime||this._changeInProgress){addOrSubtractDurationFromMoment(this,moment.duration(offset-input,'m'),1,false);}else if(!this._changeInProgress){this._changeInProgress=true;moment.updateOffset(this,true);this._changeInProgress=null;}}}else{return this._isUTC?offset:this._dateTzOffset();}
return this;},zoneAbbr:function(){return this._isUTC?'UTC':'';},zoneName:function(){return this._isUTC?'Coordinated Universal Time':'';},parseZone:function(){if(this._tzm){this.zone(this._tzm);}else if(typeof this._i==='string'){this.zone(this._i);}
return this;},hasAlignedHourOffset:function(input){if(!input){input=0;}
else{input=moment(input).zone();}
return(this.zone()-input)%60===0;},daysInMonth:function(){return daysInMonth(this.year(),this.month());},dayOfYear:function(input){var dayOfYear=round((moment(this).startOf('day')-moment(this).startOf('year'))/864e5)+1;return input==null?dayOfYear:this.add((input-dayOfYear),'d');},quarter:function(input){return input==null?Math.ceil((this.month()+1)/3):this.month((input-1)*3+this.month()%3);},weekYear:function(input){var year=weekOfYear(this,this.localeData()._week.dow,this.localeData()._week.doy).year;return input==null?year:this.add((input-year),'y');},isoWeekYear:function(input){var year=weekOfYear(this,1,4).year;return input==null?year:this.add((input-year),'y');},week:function(input){var week=this.localeData().week(this);return input==null?week:this.add((input-week)*7,'d');},isoWeek:function(input){var week=weekOfYear(this,1,4).week;return input==null?week:this.add((input-week)*7,'d');},weekday:function(input){var weekday=(this.day()+7-this.localeData()._week.dow)%7;return input==null?weekday:this.add(input-weekday,'d');},isoWeekday:function(input){

return input==null?this.day()||7:this.day(this.day()%7?input:input-7);},isoWeeksInYear:function(){return weeksInYear(this.year(),1,4);},weeksInYear:function(){var weekInfo=this.localeData()._week;return weeksInYear(this.year(),weekInfo.dow,weekInfo.doy);},get:function(units){units=normalizeUnits(units);return this[units]();},set:function(units,value){units=normalizeUnits(units);if(typeof this[units]==='function'){this[units](value);}
return this;},

locale:function(key){var newLocaleData;if(key===undefined){return this._locale._abbr;}else{newLocaleData=moment.localeData(key);if(newLocaleData!=null){this._locale=newLocaleData;}
return this;}},lang:deprecate('moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',function(key){if(key===undefined){return this.localeData();}else{return this.locale(key);}}),localeData:function(){return this._locale;},_dateTzOffset:function(){ return Math.round(this._d.getTimezoneOffset()/15)*15;}});function rawMonthSetter(mom,value){var dayOfMonth;if(typeof value==='string'){value=mom.localeData().monthsParse(value);if(typeof value!=='number'){return mom;}}
dayOfMonth=Math.min(mom.date(),daysInMonth(mom.year(),value));mom._d['set'+(mom._isUTC?'UTC':'')+'Month'](value,dayOfMonth);return mom;}
function rawGetter(mom,unit){return mom._d['get'+(mom._isUTC?'UTC':'')+unit]();}
function rawSetter(mom,unit,value){if(unit==='Month'){return rawMonthSetter(mom,value);}else{return mom._d['set'+(mom._isUTC?'UTC':'')+unit](value);}}
function makeAccessor(unit,keepTime){return function(value){if(value!=null){rawSetter(this,unit,value);moment.updateOffset(this,keepTime);return this;}else{return rawGetter(this,unit);}};}
moment.fn.millisecond=moment.fn.milliseconds=makeAccessor('Milliseconds',false);moment.fn.second=moment.fn.seconds=makeAccessor('Seconds',false);moment.fn.minute=moment.fn.minutes=makeAccessor('Minutes',false);


moment.fn.hour=moment.fn.hours=makeAccessor('Hours',true); moment.fn.date=makeAccessor('Date',true);moment.fn.dates=deprecate('dates accessor is deprecated. Use date instead.',makeAccessor('Date',true));moment.fn.year=makeAccessor('FullYear',true);moment.fn.years=deprecate('years accessor is deprecated. Use year instead.',makeAccessor('FullYear',true)); moment.fn.days=moment.fn.day;moment.fn.months=moment.fn.month;moment.fn.weeks=moment.fn.week;moment.fn.isoWeeks=moment.fn.isoWeek;moment.fn.quarters=moment.fn.quarter; moment.fn.toJSON=moment.fn.toISOString;function daysToYears(days){return days*400/146097;}
function yearsToDays(years){return years*146097/400;}
extend(moment.duration.fn=Duration.prototype,{_bubble:function(){var milliseconds=this._milliseconds,days=this._days,months=this._months,data=this._data,seconds,minutes,hours,years=0;
data.milliseconds=milliseconds%1000;seconds=absRound(milliseconds/1000);data.seconds=seconds%60;minutes=absRound(seconds/60);data.minutes=minutes%60;hours=absRound(minutes/60);data.hours=hours%24;days+=absRound(hours/24);years=absRound(daysToYears(days));days-=absRound(yearsToDays(years));
months+=absRound(days/30);days%=30; years+=absRound(months/12);months%=12;data.days=days;data.months=months;data.years=years;},abs:function(){this._milliseconds=Math.abs(this._milliseconds);this._days=Math.abs(this._days);this._months=Math.abs(this._months);this._data.milliseconds=Math.abs(this._data.milliseconds);this._data.seconds=Math.abs(this._data.seconds);this._data.minutes=Math.abs(this._data.minutes);this._data.hours=Math.abs(this._data.hours);this._data.months=Math.abs(this._data.months);this._data.years=Math.abs(this._data.years);return this;},weeks:function(){return absRound(this.days()/7);},valueOf:function(){return this._milliseconds+
this._days*864e5+
(this._months%12)*2592e6+
toInt(this._months/12)*31536e6;},humanize:function(withSuffix){var output=relativeTime(this,!withSuffix,this.localeData());if(withSuffix){output=this.localeData().pastFuture(+this,output);}
return this.localeData().postformat(output);},add:function(input,val){var dur=moment.duration(input,val);this._milliseconds+=dur._milliseconds;this._days+=dur._days;this._months+=dur._months;this._bubble();return this;},subtract:function(input,val){var dur=moment.duration(input,val);this._milliseconds-=dur._milliseconds;this._days-=dur._days;this._months-=dur._months;this._bubble();return this;},get:function(units){units=normalizeUnits(units);return this[units.toLowerCase()+'s']();},as:function(units){var days,months;units=normalizeUnits(units);if(units==='month'||units==='year'){days=this._days+this._milliseconds/864e5;months=this._months+daysToYears(days)*12;return units==='month'?months:months/12;}else{days=this._days+Math.round(yearsToDays(this._months/12));switch(units){case'week':return days/7+this._milliseconds/6048e5;case'day':return days+this._milliseconds/864e5;case'hour':return days*24+this._milliseconds/36e5;case'minute':return days*24*60+this._milliseconds/6e4;case'second':return days*24*60*60+this._milliseconds/1000; case'millisecond':return Math.floor(days*24*60*60*1000)+this._milliseconds;default:throw new Error('Unknown unit '+units);}}},lang:moment.fn.lang,locale:moment.fn.locale,toIsoString:deprecate('toIsoString() is deprecated. Please use toISOString() instead '+'(notice the capitals)',function(){return this.toISOString();}),toISOString:function(){ var years=Math.abs(this.years()),months=Math.abs(this.months()),days=Math.abs(this.days()),hours=Math.abs(this.hours()),minutes=Math.abs(this.minutes()),seconds=Math.abs(this.seconds()+this.milliseconds()/1000);if(!this.asSeconds()){return'P0D';}
return(this.asSeconds()<0?'-':'')+'P'+
(years?years+'Y':'')+
(months?months+'M':'')+
(days?days+'D':'')+
((hours||minutes||seconds)?'T':'')+
(hours?hours+'H':'')+
(minutes?minutes+'M':'')+
(seconds?seconds+'S':'');},localeData:function(){return this._locale;}});moment.duration.fn.toString=moment.duration.fn.toISOString;function makeDurationGetter(name){moment.duration.fn[name]=function(){return this._data[name];};}
for(i in unitMillisecondFactors){if(hasOwnProp(unitMillisecondFactors,i)){makeDurationGetter(i.toLowerCase());}}
moment.duration.fn.asMilliseconds=function(){return this.as('ms');};moment.duration.fn.asSeconds=function(){return this.as('s');};moment.duration.fn.asMinutes=function(){return this.as('m');};moment.duration.fn.asHours=function(){return this.as('h');};moment.duration.fn.asDays=function(){return this.as('d');};moment.duration.fn.asWeeks=function(){return this.as('weeks');};moment.duration.fn.asMonths=function(){return this.as('M');};moment.duration.fn.asYears=function(){return this.as('y');};moment.locale('en',{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(number){var b=number%10,output=(toInt(number%100/10)===1)?'th':(b===1)?'st':(b===2)?'nd':(b===3)?'rd':'th';return number+output;}});function makeGlobal(shouldDeprecate){if(typeof ender!=='undefined'){return;}
oldGlobalMoment=globalScope.moment;if(shouldDeprecate){globalScope.moment=deprecate('Accessing Moment through the global scope is '+'deprecated, and will be removed in an upcoming '+'release.',moment);}else{globalScope.moment=moment;}} 
if(hasModule){module.exports=moment;}else if(typeof define==='function'&&define.amd){define('moment',function(require,exports,module){if(module.config&&module.config()&&module.config().noGlobal===true){ globalScope.moment=oldGlobalMoment;}
return moment;});makeGlobal(true);}else{makeGlobal();}}).call(this);

(function(root,factory){if(typeof define==='function'&&define.amd){define(['underscore','jquery','exports'],function(_,$,exports){
root.Backbone=factory(root,exports,_,$);});}else if(typeof exports!=='undefined'){var _=require('underscore');factory(root,exports,_);}else{root.Backbone=factory(root,{},root._,(root.jQuery||root.Zepto||root.ender||root.$));}}(this,function(root,Backbone,_,$){

var previousBackbone=root.Backbone;var array=[];var push=array.push;var slice=array.slice;var splice=array.splice;Backbone.VERSION='1.1.2';
Backbone.$=$;
Backbone.noConflict=function(){root.Backbone=previousBackbone;return this;};

Backbone.emulateHTTP=false;


Backbone.emulateJSON=false;



var Events=Backbone.Events={
on:function(name,callback,context){if(!eventsApi(this,'on',name,[callback,context])||!callback)return this;this._events||(this._events={});var events=this._events[name]||(this._events[name]=[]);events.push({callback:callback,context:context,ctx:context||this});return this;},
once:function(name,callback,context){if(!eventsApi(this,'once',name,[callback,context])||!callback)return this;var self=this;var once=_.once(function(){self.off(name,once);callback.apply(this,arguments);});once._callback=callback;return this.on(name,once,context);},


off:function(name,callback,context){var retain,ev,events,names,i,l,j,k;if(!this._events||!eventsApi(this,'off',name,[callback,context]))return this;if(!name&&!callback&&!context){this._events=void 0;return this;}
names=name?[name]:_.keys(this._events);for(i=0,l=names.length;i<l;i++){name=names[i];if(events=this._events[name]){this._events[name]=retain=[];if(callback||context){for(j=0,k=events.length;j<k;j++){ev=events[j];if((callback&&callback!==ev.callback&&callback!==ev.callback._callback)||(context&&context!==ev.context)){retain.push(ev);}}}
if(!retain.length)delete this._events[name];}}
return this;},


trigger:function(name){if(!this._events)return this;var args=slice.call(arguments,1);if(!eventsApi(this,'trigger',name,args))return this;var events=this._events[name];var allEvents=this._events.all;if(events)triggerEvents(events,args);if(allEvents)triggerEvents(allEvents,arguments);return this;},
stopListening:function(obj,name,callback){var listeningTo=this._listeningTo;if(!listeningTo)return this;var remove=!name&&!callback;if(!callback&&typeof name==='object')callback=this;if(obj)(listeningTo={})[obj._listenId]=obj;for(var id in listeningTo){obj=listeningTo[id];obj.off(name,callback,this);if(remove||_.isEmpty(obj._events))delete this._listeningTo[id];}
return this;}};var eventSplitter=/\s+/;
var eventsApi=function(obj,action,name,rest){if(!name)return true;if(typeof name==='object'){for(var key in name){obj[action].apply(obj,[key,name[key]].concat(rest));}
return false;}
if(eventSplitter.test(name)){var names=name.split(eventSplitter);for(var i=0,l=names.length;i<l;i++){obj[action].apply(obj,[names[i]].concat(rest));}
return false;}
return true;};

var triggerEvents=function(events,args){var ev,i=-1,l=events.length,a1=args[0],a2=args[1],a3=args[2];switch(args.length){case 0:while(++i<l)(ev=events[i]).callback.call(ev.ctx);return;case 1:while(++i<l)(ev=events[i]).callback.call(ev.ctx,a1);return;case 2:while(++i<l)(ev=events[i]).callback.call(ev.ctx,a1,a2);return;case 3:while(++i<l)(ev=events[i]).callback.call(ev.ctx,a1,a2,a3);return;default:while(++i<l)(ev=events[i]).callback.apply(ev.ctx,args);return;}};var listenMethods={listenTo:'on',listenToOnce:'once'};

_.each(listenMethods,function(implementation,method){Events[method]=function(obj,name,callback){var listeningTo=this._listeningTo||(this._listeningTo={});var id=obj._listenId||(obj._listenId=_.uniqueId('l'));listeningTo[id]=obj;if(!callback&&typeof name==='object')callback=this;obj[implementation](name,callback,this);return this;};});Events.bind=Events.on;Events.unbind=Events.off;
_.extend(Backbone,Events);


var Model=Backbone.Model=function(attributes,options){var attrs=attributes||{};options||(options={});this.cid=_.uniqueId('c');this.attributes={};if(options.collection)this.collection=options.collection;if(options.parse)attrs=this.parse(attrs,options)||{};attrs=_.defaults({},attrs,_.result(this,'defaults'));this.set(attrs,options);this.changed={};this.initialize.apply(this,arguments);};_.extend(Model.prototype,Events,{changed:null,validationError:null,
idAttribute:'id',
initialize:function(){},toJSON:function(options){return _.clone(this.attributes);},
sync:function(){return Backbone.sync.apply(this,arguments);},get:function(attr){return this.attributes[attr];},escape:function(attr){return _.escape(this.get(attr));},
has:function(attr){return this.get(attr)!=null;},

set:function(key,val,options){var attr,attrs,unset,changes,silent,changing,prev,current;if(key==null)return this;if(typeof key==='object'){attrs=key;options=val;}else{(attrs={})[key]=val;}
options||(options={});if(!this._validate(attrs,options))return false;unset=options.unset;silent=options.silent;changes=[];changing=this._changing;this._changing=true;if(!changing){this._previousAttributes=_.clone(this.attributes);this.changed={};}
current=this.attributes,prev=this._previousAttributes;if(this.idAttribute in attrs)this.id=attrs[this.idAttribute];for(attr in attrs){val=attrs[attr];if(!_.isEqual(current[attr],val))changes.push(attr);if(!_.isEqual(prev[attr],val)){this.changed[attr]=val;}else{delete this.changed[attr];}
unset?delete current[attr]:current[attr]=val;}
if(!silent){if(changes.length)this._pending=options;for(var i=0,l=changes.length;i<l;i++){this.trigger('change:'+changes[i],this,current[changes[i]],options);}}

if(changing)return this;if(!silent){while(this._pending){options=this._pending;this._pending=false;this.trigger('change',this,options);}}
this._pending=false;this._changing=false;return this;},
unset:function(attr,options){return this.set(attr,void 0,_.extend({},options,{unset:true}));},clear:function(options){var attrs={};for(var key in this.attributes)attrs[key]=void 0;return this.set(attrs,_.extend({},options,{unset:true}));},hasChanged:function(attr){if(attr==null)return!_.isEmpty(this.changed);return _.has(this.changed,attr);},


changedAttributes:function(diff){if(!diff)return this.hasChanged()?_.clone(this.changed):false;var val,changed=false;var old=this._changing?this._previousAttributes:this.attributes;for(var attr in diff){if(_.isEqual(old[attr],(val=diff[attr])))continue;(changed||(changed={}))[attr]=val;}
return changed;},
previous:function(attr){if(attr==null||!this._previousAttributes)return null;return this._previousAttributes[attr];},
previousAttributes:function(){return _.clone(this._previousAttributes);},
fetch:function(options){options=options?_.clone(options):{};if(options.parse===void 0)options.parse=true;var model=this;var success=options.success;options.success=function(resp){if(!model.set(model.parse(resp,options),options))return false;if(success)success(model,resp,options);model.trigger('sync',model,resp,options);};wrapError(this,options);return this.sync('read',this,options);},
save:function(key,val,options){var attrs,method,xhr,attributes=this.attributes;if(key==null||typeof key==='object'){attrs=key;options=val;}else{(attrs={})[key]=val;}
options=_.extend({validate:true},options);

if(attrs&&!options.wait){if(!this.set(attrs,options))return false;}else{if(!this._validate(attrs,options))return false;}
if(attrs&&options.wait){this.attributes=_.extend({},attributes,attrs);}
if(options.parse===void 0)options.parse=true;var model=this;var success=options.success;options.success=function(resp){model.attributes=attributes;var serverAttrs=model.parse(resp,options);if(options.wait)serverAttrs=_.extend(attrs||{},serverAttrs);if(_.isObject(serverAttrs)&&!model.set(serverAttrs,options)){return false;}
if(success)success(model,resp,options);model.trigger('sync',model,resp,options);};wrapError(this,options);method=this.isNew()?'create':(options.patch?'patch':'update');if(method==='patch')options.attrs=attrs;xhr=this.sync(method,this,options);if(attrs&&options.wait)this.attributes=attributes;return xhr;},destroy:function(options){options=options?_.clone(options):{};var model=this;var success=options.success;var destroy=function(){model.trigger('destroy',model,model.collection,options);};options.success=function(resp){if(options.wait||model.isNew())destroy();if(success)success(model,resp,options);if(!model.isNew())model.trigger('sync',model,resp,options);};if(this.isNew()){options.success();return false;}
wrapError(this,options);var xhr=this.sync('delete',this,options);if(!options.wait)destroy();return xhr;},

url:function(){var base=_.result(this,'urlRoot')||_.result(this.collection,'url')||urlError();if(this.isNew())return base;return base.replace(/([^\/])$/,'$1/')+encodeURIComponent(this.id);},
parse:function(resp,options){return resp;},clone:function(){return new this.constructor(this.attributes);},isNew:function(){return!this.has(this.idAttribute);},isValid:function(options){return this._validate({},_.extend(options||{},{validate:true}));},_validate:function(attrs,options){if(!options.validate||!this.validate)return true;attrs=_.extend({},this.attributes,attrs);var error=this.validationError=this.validate(attrs,options)||null;if(!error)return true;this.trigger('invalid',this,error,_.extend(options,{validationError:error}));return false;}});var modelMethods=['keys','values','pairs','invert','pick','omit'];_.each(modelMethods,function(method){Model.prototype[method]=function(){var args=slice.call(arguments);args.unshift(this.attributes);return _[method].apply(_,args);};});






var Collection=Backbone.Collection=function(models,options){options||(options={});if(options.model)this.model=options.model;if(options.comparator!==void 0)this.comparator=options.comparator;this._reset();this.initialize.apply(this,arguments);if(models)this.reset(models,_.extend({silent:true},options));};var setOptions={add:true,remove:true,merge:true};var addOptions={add:true,remove:false};_.extend(Collection.prototype,Events,{model:Model,
initialize:function(){},
toJSON:function(options){return this.map(function(model){return model.toJSON(options);});},sync:function(){return Backbone.sync.apply(this,arguments);},add:function(models,options){return this.set(models,_.extend({merge:false},options,addOptions));},remove:function(models,options){var singular=!_.isArray(models);models=singular?[models]:_.clone(models);options||(options={});var i,l,index,model;for(i=0,l=models.length;i<l;i++){model=models[i]=this.get(models[i]);if(!model)continue;delete this._byId[model.id];delete this._byId[model.cid];index=this.indexOf(model);this.models.splice(index,1);this.length--;if(!options.silent){options.index=index;model.trigger('remove',model,this,options);}
this._removeReference(model,options);}
return singular?models[0]:models;},
set:function(models,options){options=_.defaults({},options,setOptions);if(options.parse)models=this.parse(models,options);var singular=!_.isArray(models);models=singular?(models?[models]:[]):_.clone(models);var i,l,id,model,attrs,existing,sort;var at=options.at;var targetModel=this.model;var sortable=this.comparator&&(at==null)&&options.sort!==false;var sortAttr=_.isString(this.comparator)?this.comparator:null;var toAdd=[],toRemove=[],modelMap={};var add=options.add,merge=options.merge,remove=options.remove;var order=!sortable&&add&&remove?[]:false;
for(i=0,l=models.length;i<l;i++){attrs=models[i]||{};if(attrs instanceof Model){id=model=attrs;}else{id=attrs[targetModel.prototype.idAttribute||'id'];}

if(existing=this.get(id)){if(remove)modelMap[existing.cid]=true;if(merge){attrs=attrs===model?model.attributes:attrs;if(options.parse)attrs=existing.parse(attrs,options);existing.set(attrs,options);if(sortable&&!sort&&existing.hasChanged(sortAttr))sort=true;}
models[i]=existing;}else if(add){model=models[i]=this._prepareModel(attrs,options);if(!model)continue;toAdd.push(model);this._addReference(model,options);}
model=existing||model;if(order&&(model.isNew()||!modelMap[model.id]))order.push(model);modelMap[model.id]=true;}
if(remove){for(i=0,l=this.length;i<l;++i){if(!modelMap[(model=this.models[i]).cid])toRemove.push(model);}
if(toRemove.length)this.remove(toRemove,options);}
if(toAdd.length||(order&&order.length)){if(sortable)sort=true;this.length+=toAdd.length;if(at!=null){for(i=0,l=toAdd.length;i<l;i++){this.models.splice(at+i,0,toAdd[i]);}}else{if(order)this.models.length=0;var orderedModels=order||toAdd;for(i=0,l=orderedModels.length;i<l;i++){this.models.push(orderedModels[i]);}}}
if(sort)this.sort({silent:true});if(!options.silent){for(i=0,l=toAdd.length;i<l;i++){(model=toAdd[i]).trigger('add',model,this,options);}
if(sort||(order&&order.length))this.trigger('sort',this,options);}
return singular?models[0]:models;},
reset:function(models,options){options||(options={});for(var i=0,l=this.models.length;i<l;i++){this._removeReference(this.models[i],options);}
options.previousModels=this.models;this._reset();models=this.add(models,_.extend({silent:true},options));if(!options.silent)this.trigger('reset',this,options);return models;},push:function(model,options){return this.add(model,_.extend({at:this.length},options));},pop:function(options){var model=this.at(this.length-1);this.remove(model,options);return model;},unshift:function(model,options){return this.add(model,_.extend({at:0},options));},shift:function(options){var model=this.at(0);this.remove(model,options);return model;},slice:function(){return slice.apply(this.models,arguments);},get:function(obj){if(obj==null)return void 0;return this._byId[obj]||this._byId[obj.id]||this._byId[obj.cid];},at:function(index){return this.models[index];},
where:function(attrs,first){if(_.isEmpty(attrs))return first?void 0:[];return this[first?'find':'filter'](function(model){for(var key in attrs){if(attrs[key]!==model.get(key))return false;}
return true;});},
findWhere:function(attrs){return this.where(attrs,true);},

sort:function(options){if(!this.comparator)throw new Error('Cannot sort a set without a comparator');options||(options={});if(_.isString(this.comparator)||this.comparator.length===1){this.models=this.sortBy(this.comparator,this);}else{this.models.sort(_.bind(this.comparator,this));}
if(!options.silent)this.trigger('sort',this,options);return this;},pluck:function(attr){return _.invoke(this.models,'get',attr);},

fetch:function(options){options=options?_.clone(options):{};if(options.parse===void 0)options.parse=true;var success=options.success;var collection=this;options.success=function(resp){var method=options.reset?'reset':'set';collection[method](resp,options);if(success)success(collection,resp,options);collection.trigger('sync',collection,resp,options);};wrapError(this,options);return this.sync('read',this,options);},

create:function(model,options){options=options?_.clone(options):{};if(!(model=this._prepareModel(model,options)))return false;if(!options.wait)this.add(model,options);var collection=this;var success=options.success;options.success=function(model,resp){if(options.wait)collection.add(model,options);if(success)success(model,resp,options);};model.save(null,options);return model;},
parse:function(resp,options){return resp;},clone:function(){return new this.constructor(this.models);},
_reset:function(){this.length=0;this.models=[];this._byId={};},
_prepareModel:function(attrs,options){if(attrs instanceof Model)return attrs;options=options?_.clone(options):{};options.collection=this;var model=new this.model(attrs,options);if(!model.validationError)return model;this.trigger('invalid',this,model.validationError,options);return false;},_addReference:function(model,options){this._byId[model.cid]=model;if(model.id!=null)this._byId[model.id]=model;if(!model.collection)model.collection=this;model.on('all',this._onModelEvent,this);},_removeReference:function(model,options){if(this===model.collection)delete model.collection;model.off('all',this._onModelEvent,this);},

_onModelEvent:function(event,model,collection,options){if((event==='add'||event==='remove')&&collection!==this)return;if(event==='destroy')this.remove(model,options);if(model&&event==='change:'+model.idAttribute){delete this._byId[model.previous(model.idAttribute)];if(model.id!=null)this._byId[model.id]=model;}
this.trigger.apply(this,arguments);}});
var methods=['forEach','each','map','collect','reduce','foldl','inject','reduceRight','foldr','find','detect','filter','select','reject','every','all','some','any','include','contains','invoke','max','min','toArray','size','first','head','take','initial','rest','tail','drop','last','without','difference','indexOf','shuffle','lastIndexOf','isEmpty','chain','sample'];_.each(methods,function(method){Collection.prototype[method]=function(){var args=slice.call(arguments);args.unshift(this.models);return _[method].apply(_,args);};});var attributeMethods=['groupBy','countBy','sortBy','indexBy'];_.each(attributeMethods,function(method){Collection.prototype[method]=function(value,context){var iterator=_.isFunction(value)?value:function(model){return model.get(value);};return _[method](this.models,iterator,context);};});






var View=Backbone.View=function(options){this.cid=_.uniqueId('view');options||(options={});_.extend(this,_.pick(options,viewOptions));this._ensureElement();this.initialize.apply(this,arguments);this.delegateEvents();};var delegateEventSplitter=/^(\S+)\s*(.*)$/;var viewOptions=['model','collection','el','id','attributes','className','tagName','events'];_.extend(View.prototype,Events,{tagName:'div',
$:function(selector){return this.$el.find(selector);},
initialize:function(){},

render:function(){return this;},
remove:function(){this.$el.remove();this.stopListening();return this;},
setElement:function(element,delegate){if(this.$el)this.undelegateEvents();this.$el=element instanceof Backbone.$?element:Backbone.$(element);this.el=this.$el[0];if(delegate!==false)this.delegateEvents();return this;},


delegateEvents:function(events){if(!(events||(events=_.result(this,'events'))))return this;this.undelegateEvents();for(var key in events){var method=events[key];if(!_.isFunction(method))method=this[events[key]];if(!method)continue;var match=key.match(delegateEventSplitter);var eventName=match[1],selector=match[2];method=_.bind(method,this);eventName+='.delegateEvents'+this.cid;if(selector===''){this.$el.on(eventName,method);}else{this.$el.on(eventName,selector,method);}}
return this;},
undelegateEvents:function(){this.$el.off('.delegateEvents'+this.cid);return this;},

_ensureElement:function(){if(!this.el){var attrs=_.extend({},_.result(this,'attributes'));if(this.id)attrs.id=_.result(this,'id');if(this.className)attrs['class']=_.result(this,'className');var $el=Backbone.$('<'+_.result(this,'tagName')+'>').attr(attrs);this.setElement($el,false);}else{this.setElement(_.result(this,'el'),false);}}});





Backbone.sync=function(method,model,options){var type=methodMap[method];_.defaults(options||(options={}),{emulateHTTP:Backbone.emulateHTTP,emulateJSON:Backbone.emulateJSON});var params={type:type,dataType:'json'};if(!options.url){params.url=_.result(model,'url')||urlError();}
if(options.data==null&&model&&(method==='create'||method==='update'||method==='patch')){params.contentType='application/json';params.data=JSON.stringify(options.attrs||model.toJSON(options));}
if(options.emulateJSON){params.contentType='application/x-www-form-urlencoded';params.data=params.data?{model:params.data}:{};}
if(options.emulateHTTP&&(type==='PUT'||type==='DELETE'||type==='PATCH')){params.type='POST';if(options.emulateJSON)params.data._method=type;var beforeSend=options.beforeSend;options.beforeSend=function(xhr){xhr.setRequestHeader('X-HTTP-Method-Override',type);if(beforeSend)return beforeSend.apply(this,arguments);};}
if(params.type!=='GET'&&!options.emulateJSON){params.processData=false;}


if(params.type==='PATCH'&&noXhrPatch){params.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP");};}
var xhr=options.xhr=Backbone.ajax(_.extend(params,options));model.trigger('request',model,xhr,options);return xhr;};var noXhrPatch=typeof window!=='undefined'&&!!window.ActiveXObject&&!(window.XMLHttpRequest&&(new XMLHttpRequest).dispatchEvent);var methodMap={'create':'POST','update':'PUT','patch':'PATCH','delete':'DELETE','read':'GET'};Backbone.ajax=function(){return Backbone.$.ajax.apply(Backbone.$,arguments);};

var Router=Backbone.Router=function(options){options||(options={});if(options.routes)this.routes=options.routes;this._bindRoutes();this.initialize.apply(this,arguments);};
var optionalParam=/\((.*?)\)/g;var namedParam=/(\(\?)?:\w+/g;var splatParam=/\*\w+/g;var escapeRegExp=/[\-{}\[\]+?.,\\\^$|#\s]/g;_.extend(Router.prototype,Events,{
initialize:function(){},route:function(route,name,callback){if(!_.isRegExp(route))route=this._routeToRegExp(route);if(_.isFunction(name)){callback=name;name='';}
if(!callback)callback=this[name];var router=this;Backbone.history.route(route,function(fragment){var args=router._extractParameters(route,fragment);router.execute(callback,args);router.trigger.apply(router,['route:'+name].concat(args));router.trigger('route',name,args);Backbone.history.trigger('route',router,name,args);});return this;},
execute:function(callback,args){if(callback)callback.apply(this,args);},navigate:function(fragment,options){Backbone.history.navigate(fragment,options);return this;},

_bindRoutes:function(){if(!this.routes)return;this.routes=_.result(this,'routes');var route,routes=_.keys(this.routes);while((route=routes.pop())!=null){this.route(route,this.routes[route]);}},
_routeToRegExp:function(route){route=route.replace(escapeRegExp,'\\$&').replace(optionalParam,'(?:$1)?').replace(namedParam,function(match,optional){return optional?match:'([^/?]+)';}).replace(splatParam,'([^?]*?)');return new RegExp('^'+route+'(?:\\?([\\s\\S]*))?$');},

_extractParameters:function(route,fragment){var params=route.exec(fragment).slice(1);return _.map(params,function(param,i){if(i===params.length-1)return param||null;return param?decodeURIComponent(param):null;});}});



var History=Backbone.History=function(){this.handlers=[];_.bindAll(this,'checkUrl');if(typeof window!=='undefined'){this.location=window.location;this.history=window.history;}};var routeStripper=/^[#\/]|\s+$/g;var rootStripper=/^\/+|\/+$/g;var isExplorer=/msie [\w.]+/;var trailingSlash=/\/$/;var pathStripper=/#.*$/;History.started=false;_.extend(History.prototype,Events,{
interval:50,atRoot:function(){return this.location.pathname.replace(/[^\/]$/,'$&/')===this.root;},
getHash:function(window){var match=(window||this).location.href.match(/#(.*)$/);return match?match[1]:'';},getFragment:function(fragment,forcePushState){if(fragment==null){if(this._hasPushState||!this._wantsHashChange||forcePushState){fragment=decodeURI(this.location.pathname+this.location.search);var root=this.root.replace(trailingSlash,'');if(!fragment.indexOf(root))fragment=fragment.slice(root.length);}else{fragment=this.getHash();}}
return fragment.replace(routeStripper,'');},
start:function(options){if(History.started)throw new Error("Backbone.history has already been started");History.started=true;this.options=_.extend({root:'/'},this.options,options);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);var fragment=this.getFragment();var docMode=document.documentMode;var oldIE=(isExplorer.exec(navigator.userAgent.toLowerCase())&&(!docMode||docMode<=7));this.root=('/'+this.root+'/').replace(rootStripper,'/');if(oldIE&&this._wantsHashChange){var frame=Backbone.$('<iframe src="javascript:0" tabindex="-1">');this.iframe=frame.hide().appendTo('body')[0].contentWindow;this.navigate(fragment);}

if(this._hasPushState){Backbone.$(window).on('popstate',this.checkUrl);}else if(this._wantsHashChange&&('onhashchange'in window)&&!oldIE){Backbone.$(window).on('hashchange',this.checkUrl);}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval);}

this.fragment=fragment;var loc=this.location;
if(this._wantsHashChange&&this._wantsPushState){
if(!this._hasPushState&&!this.atRoot()){this.fragment=this.getFragment(null,true);this.location.replace(this.root+'#'+this.fragment); return true;
}else if(this._hasPushState&&this.atRoot()&&loc.hash){this.fragment=this.getHash().replace(routeStripper,'');this.history.replaceState({},document.title,this.root+this.fragment);}}
if(!this.options.silent)return this.loadUrl();},stop:function(){Backbone.$(window).off('popstate',this.checkUrl).off('hashchange',this.checkUrl);if(this._checkUrlInterval)clearInterval(this._checkUrlInterval);History.started=false;},
route:function(route,callback){this.handlers.unshift({route:route,callback:callback});},checkUrl:function(e){var current=this.getFragment();if(current===this.fragment&&this.iframe){current=this.getFragment(this.getHash(this.iframe));}
if(current===this.fragment)return false;if(this.iframe)this.navigate(current);this.loadUrl();},
loadUrl:function(fragment){fragment=this.fragment=this.getFragment(fragment);return _.any(this.handlers,function(handler){if(handler.route.test(fragment)){handler.callback(fragment);return true;}});},



navigate:function(fragment,options){if(!History.started)return false;if(!options||options===true)options={trigger:!!options};var url=this.root+(fragment=this.getFragment(fragment||''));fragment=fragment.replace(pathStripper,'');if(this.fragment===fragment)return;this.fragment=fragment;if(fragment===''&&url!=='/')url=url.slice(0,-1);if(this._hasPushState){this.history[options.replace?'replaceState':'pushState']({},document.title,url);
}else if(this._wantsHashChange){this._updateHash(this.location,fragment,options.replace);if(this.iframe&&(fragment!==this.getFragment(this.getHash(this.iframe)))){

if(!options.replace)this.iframe.document.open().close();this._updateHash(this.iframe.location,fragment,options.replace);}
}else{return this.location.assign(url);}
if(options.trigger)return this.loadUrl(fragment);},
_updateHash:function(location,fragment,replace){if(replace){var href=location.href.replace(/(javascript:|#).*$/,'');location.replace(href+'#'+fragment);}else{location.hash='#'+fragment;}}});Backbone.history=new History;

var extend=function(protoProps,staticProps){var parent=this;var child;

if(protoProps&&_.has(protoProps,'constructor')){child=protoProps.constructor;}else{child=function(){return parent.apply(this,arguments);};}
_.extend(child,parent,staticProps);
var Surrogate=function(){this.constructor=child;};Surrogate.prototype=parent.prototype;child.prototype=new Surrogate;if(protoProps)_.extend(child.prototype,protoProps);
child.__super__=parent.prototype;return child;};Model.extend=Collection.extend=Router.extend=View.extend=History.extend=extend;var urlError=function(){throw new Error('A "url" property or function must be specified');};var wrapError=function(model,options){var error=options.error;options.error=function(resp){if(error)error(model,resp,options);model.trigger('error',model,resp,options);};};return Backbone;}));var JSON;JSON||(JSON={}),function(){function str(a,b){var c,d,e,f,g=gap,h,i=b[a];i&&typeof i=="object"&&typeof i.toJSON=="function"&&(i=i.toJSON(a)),typeof rep=="function"&&(i=rep.call(b,a,i));switch(typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i)return"null";gap+=indent,h=[];if(Object.prototype.toString.apply(i)==="[object Array]"){f=i.length;for(c=0;c<f;c+=1)h[c]=str(c,i)||"null";e=h.length===0?"[]":gap?"[\n"+gap+h.join(",\n"+gap)+"\n"+g+"]":"["+h.join(",")+"]",gap=g;return e}if(rep&&typeof rep=="object"){f=rep.length;for(c=0;c<f;c+=1)typeof rep[c]=="string"&&(d=rep[c],e=str(d,i),e&&h.push(quote(d)+(gap?": ":":")+e))}else for(d in i)Object.prototype.hasOwnProperty.call(i,d)&&(e=str(d,i),e&&h.push(quote(d)+(gap?": ":":")+e));e=h.length===0?"{}":gap?"{\n"+gap+h.join(",\n"+gap)+"\n"+g+"}":"{"+h.join(",")+"}",gap=g;return e}}function quote(a){escapable.lastIndex=0;return escapable.test(a)?'"'+a.replace(escapable,function(a){var b=meta[a];return typeof b=="string"?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function f(a){return a<10?"0"+a:a}"use strict",typeof Date.prototype.toJSON!="function"&&(Date.prototype.toJSON=function(a){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(a){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;typeof JSON.stringify!="function"&&(JSON.stringify=function(a,b,c){var d;gap="",indent="";if(typeof c=="number")for(d=0;d<c;d+=1)indent+=" ";else typeof c=="string"&&(indent=c);rep=b;if(!b||typeof b=="function"||typeof b=="object"&&typeof b.length=="number")return str("",{"":a});throw new Error("JSON.stringify")}),typeof JSON.parse!="function"&&(JSON.parse=function(text,reviver){function walk(a,b){var c,d,e=a[b];if(e&&typeof e=="object")for(c in e)Object.prototype.hasOwnProperty.call(e,c)&&(d=walk(e,c),d!==undefined?e[c]=d:delete e[c]);return reviver.call(a,b,e)}var j;text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver=="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")})}()

SockJS=(function(){var _document=document;var _window=window;var utils={};  var REventTarget=function(){};REventTarget.prototype.addEventListener=function(eventType,listener){if(!this._listeners){this._listeners={};}
if(!(eventType in this._listeners)){this._listeners[eventType]=[];}
var arr=this._listeners[eventType];if(utils.arrIndexOf(arr,listener)===-1){arr.push(listener);}
return;};REventTarget.prototype.removeEventListener=function(eventType,listener){if(!(this._listeners&&(eventType in this._listeners))){return;}
var arr=this._listeners[eventType];var idx=utils.arrIndexOf(arr,listener);if(idx!==-1){if(arr.length>1){this._listeners[eventType]=arr.slice(0,idx).concat(arr.slice(idx+1));}else{delete this._listeners[eventType];}
return;}
return;};REventTarget.prototype.dispatchEvent=function(event){var t=event.type;var args=Array.prototype.slice.call(arguments,0);if(this['on'+t]){this['on'+t].apply(this,args);}
if(this._listeners&&t in this._listeners){for(var i=0;i<this._listeners[t].length;i++){this._listeners[t][i].apply(this,args);}}};
 var SimpleEvent=function(type,obj){this.type=type;if(typeof obj!=='undefined'){for(var k in obj){if(!obj.hasOwnProperty(k))continue;this[k]=obj[k];}}};SimpleEvent.prototype.toString=function(){var r=[];for(var k in this){if(!this.hasOwnProperty(k))continue;var v=this[k];if(typeof v==='function')v='[function]';r.push(k+'='+v);}
return'SimpleEvent('+r.join(', ')+')';};
 var EventEmitter=function(events){var that=this;that._events=events||[];that._listeners={};};EventEmitter.prototype.emit=function(type){var that=this;that._verifyType(type);if(that._nuked)return;var args=Array.prototype.slice.call(arguments,1);if(that['on'+type]){that['on'+type].apply(that,args);}
if(type in that._listeners){for(var i=0;i<that._listeners[type].length;i++){that._listeners[type][i].apply(that,args);}}};EventEmitter.prototype.on=function(type,callback){var that=this;that._verifyType(type);if(that._nuked)return;if(!(type in that._listeners)){that._listeners[type]=[];}
that._listeners[type].push(callback);};EventEmitter.prototype._verifyType=function(type){var that=this;if(utils.arrIndexOf(that._events,type)===-1){utils.log('Event '+JSON.stringify(type)+' not listed '+JSON.stringify(that._events)+' in '+that);}};EventEmitter.prototype.nuke=function(){var that=this;that._nuked=true;for(var i=0;i<that._events.length;i++){delete that[that._events[i]];}
that._listeners={};};
 var random_string_chars='abcdefghijklmnopqrstuvwxyz0123456789_';utils.random_string=function(length,max){max=max||random_string_chars.length;var i,ret=[];for(i=0;i<length;i++){ret.push(random_string_chars.substr(Math.floor(Math.random()*max),1));}
return ret.join('');};utils.random_number=function(max){return Math.floor(Math.random()*max);};utils.random_number_string=function(max){var t=(''+(max-1)).length;var p=Array(t+1).join('0');return(p+utils.random_number(max)).slice(-t);};utils.getOrigin=function(url){url+='/';var parts=url.split('/').slice(0,3);return parts.join('/');};utils.isSameOriginUrl=function(url_a,url_b){if(!url_b)url_b=_window.location.href;return(url_a.split('/').slice(0,3).join('/')===url_b.split('/').slice(0,3).join('/'));};utils.getParentDomain=function(url){ if(/^[0-9.]*$/.test(url))return url; if(/^\[/.test(url))return url; if(!(/[.]/.test(url)))return url;var parts=url.split('.').slice(1);return parts.join('.');};utils.objectExtend=function(dst,src){for(var k in src){if(src.hasOwnProperty(k)){dst[k]=src[k];}}
return dst;};var WPrefix='_jp';utils.polluteGlobalNamespace=function(){if(!(WPrefix in _window)){_window[WPrefix]={};}};utils.closeFrame=function(code,reason){return'c'+JSON.stringify([code,reason]);};utils.userSetCode=function(code){return code===1000||(code>=3000&&code<=4999);};utils.countRTO=function(rtt){var rto;if(rtt>100){rto=3*rtt;}else{rto=rtt+200;}
return rto;}
utils.log=function(){if(_window.console&&console.log&&console.log.apply){console.log.apply(console,arguments);}};utils.bind=function(fun,that){if(fun.bind){return fun.bind(that);}else{return function(){return fun.apply(that,arguments);};}};utils.flatUrl=function(url){return url.indexOf('?')===-1&&url.indexOf('#')===-1;};utils.amendUrl=function(url){var dl=_document.location;if(!url){throw new Error('Wrong url for SockJS');}
if(!utils.flatUrl(url)){throw new Error('Only basic urls are supported in SockJS');}
if(url.indexOf('//')===0){url=dl.protocol+url;}
if(url.indexOf('/')===0){url=dl.protocol+'//'+dl.host+url;} 
url=url.replace(/[/]+$/,'');return url;};utils.arrIndexOf=function(arr,obj){for(var i=0;i<arr.length;i++){if(arr[i]===obj){return i;}}
return-1;};utils.arrSkip=function(arr,obj){var idx=utils.arrIndexOf(arr,obj);if(idx===-1){return arr.slice();}else{var dst=arr.slice(0,idx);return dst.concat(arr.slice(idx+1));}};utils.isArray=Array.isArray||function(value){return{}.toString.call(value).indexOf('Array')>=0};utils.delay=function(t,fun){if(typeof t==='function'){fun=t;t=0;}
return setTimeout(fun,t);};var json_escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,json_lookup={"\u0000":"\\u0000","\u0001":"\\u0001","\u0002":"\\u0002","\u0003":"\\u0003","\u0004":"\\u0004","\u0005":"\\u0005","\u0006":"\\u0006","\u0007":"\\u0007","\b":"\\b","\t":"\\t","\n":"\\n","\u000b":"\\u000b","\f":"\\f","\r":"\\r","\u000e":"\\u000e","\u000f":"\\u000f","\u0010":"\\u0010","\u0011":"\\u0011","\u0012":"\\u0012","\u0013":"\\u0013","\u0014":"\\u0014","\u0015":"\\u0015","\u0016":"\\u0016","\u0017":"\\u0017","\u0018":"\\u0018","\u0019":"\\u0019","\u001a":"\\u001a","\u001b":"\\u001b","\u001c":"\\u001c","\u001d":"\\u001d","\u001e":"\\u001e","\u001f":"\\u001f","\"":"\\\"","\\":"\\\\","\u007f":"\\u007f","\u0080":"\\u0080","\u0081":"\\u0081","\u0082":"\\u0082","\u0083":"\\u0083","\u0084":"\\u0084","\u0085":"\\u0085","\u0086":"\\u0086","\u0087":"\\u0087","\u0088":"\\u0088","\u0089":"\\u0089","\u008a":"\\u008a","\u008b":"\\u008b","\u008c":"\\u008c","\u008d":"\\u008d","\u008e":"\\u008e","\u008f":"\\u008f","\u0090":"\\u0090","\u0091":"\\u0091","\u0092":"\\u0092","\u0093":"\\u0093","\u0094":"\\u0094","\u0095":"\\u0095","\u0096":"\\u0096","\u0097":"\\u0097","\u0098":"\\u0098","\u0099":"\\u0099","\u009a":"\\u009a","\u009b":"\\u009b","\u009c":"\\u009c","\u009d":"\\u009d","\u009e":"\\u009e","\u009f":"\\u009f","\u00ad":"\\u00ad","\u0600":"\\u0600","\u0601":"\\u0601","\u0602":"\\u0602","\u0603":"\\u0603","\u0604":"\\u0604","\u070f":"\\u070f","\u17b4":"\\u17b4","\u17b5":"\\u17b5","\u200c":"\\u200c","\u200d":"\\u200d","\u200e":"\\u200e","\u200f":"\\u200f","\u2028":"\\u2028","\u2029":"\\u2029","\u202a":"\\u202a","\u202b":"\\u202b","\u202c":"\\u202c","\u202d":"\\u202d","\u202e":"\\u202e","\u202f":"\\u202f","\u2060":"\\u2060","\u2061":"\\u2061","\u2062":"\\u2062","\u2063":"\\u2063","\u2064":"\\u2064","\u2065":"\\u2065","\u2066":"\\u2066","\u2067":"\\u2067","\u2068":"\\u2068","\u2069":"\\u2069","\u206a":"\\u206a","\u206b":"\\u206b","\u206c":"\\u206c","\u206d":"\\u206d","\u206e":"\\u206e","\u206f":"\\u206f","\ufeff":"\\ufeff","\ufff0":"\\ufff0","\ufff1":"\\ufff1","\ufff2":"\\ufff2","\ufff3":"\\ufff3","\ufff4":"\\ufff4","\ufff5":"\\ufff5","\ufff6":"\\ufff6","\ufff7":"\\ufff7","\ufff8":"\\ufff8","\ufff9":"\\ufff9","\ufffa":"\\ufffa","\ufffb":"\\ufffb","\ufffc":"\\ufffc","\ufffd":"\\ufffd","\ufffe":"\\ufffe","\uffff":"\\uffff"};
var extra_escapable=/[\x00-\x1f\ud800-\udfff\ufffe\uffff\u0300-\u0333\u033d-\u0346\u034a-\u034c\u0350-\u0352\u0357-\u0358\u035c-\u0362\u0374\u037e\u0387\u0591-\u05af\u05c4\u0610-\u0617\u0653-\u0654\u0657-\u065b\u065d-\u065e\u06df-\u06e2\u06eb-\u06ec\u0730\u0732-\u0733\u0735-\u0736\u073a\u073d\u073f-\u0741\u0743\u0745\u0747\u07eb-\u07f1\u0951\u0958-\u095f\u09dc-\u09dd\u09df\u0a33\u0a36\u0a59-\u0a5b\u0a5e\u0b5c-\u0b5d\u0e38-\u0e39\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69\u0f72-\u0f76\u0f78\u0f80-\u0f83\u0f93\u0f9d\u0fa2\u0fa7\u0fac\u0fb9\u1939-\u193a\u1a17\u1b6b\u1cda-\u1cdb\u1dc0-\u1dcf\u1dfc\u1dfe\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d\u1fbb\u1fbe\u1fc9\u1fcb\u1fd3\u1fdb\u1fe3\u1feb\u1fee-\u1fef\u1ff9\u1ffb\u1ffd\u2000-\u2001\u20d0-\u20d1\u20d4-\u20d7\u20e7-\u20e9\u2126\u212a-\u212b\u2329-\u232a\u2adc\u302b-\u302c\uaab2-\uaab3\uf900-\ufa0d\ufa10\ufa12\ufa15-\ufa1e\ufa20\ufa22\ufa25-\ufa26\ufa2a-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4e\ufff0-\uffff]/g,extra_lookup;var JSONQuote=(JSON&&JSON.stringify)||function(string){json_escapable.lastIndex=0;if(json_escapable.test(string)){string=string.replace(json_escapable,function(a){return json_lookup[a];});}
return'"'+string+'"';};
var unroll_lookup=function(escapable){var i;var unrolled={}
var c=[]
for(i=0;i<65536;i++){c.push(String.fromCharCode(i));}
escapable.lastIndex=0;c.join('').replace(escapable,function(a){unrolled[a]='\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);return'';});escapable.lastIndex=0;return unrolled;};
utils.quote=function(string){var quoted=JSONQuote(string);extra_escapable.lastIndex=0;if(!extra_escapable.test(quoted)){return quoted;}
if(!extra_lookup)extra_lookup=unroll_lookup(extra_escapable);return quoted.replace(extra_escapable,function(a){return extra_lookup[a];});}
var _all_protocols=['websocket','xdr-streaming','xhr-streaming','iframe-eventsource','iframe-htmlfile','xdr-polling','xhr-polling','iframe-xhr-polling','jsonp-polling'];utils.probeProtocols=function(){var probed={};for(var i=0;i<_all_protocols.length;i++){var protocol=_all_protocols[i];probed[protocol]=SockJS[protocol]&&SockJS[protocol].enabled();}
return probed;};utils.detectProtocols=function(probed,protocols_whitelist,info){var pe={},protocols=[];if(!protocols_whitelist)protocols_whitelist=_all_protocols;for(var i=0;i<protocols_whitelist.length;i++){var protocol=protocols_whitelist[i];pe[protocol]=probed[protocol];}
var maybe_push=function(protos){var proto=protos.shift();if(pe[proto]){protocols.push(proto);}else{if(protos.length>0){maybe_push(protos);}}} 
if(info.websocket!==false){maybe_push(['websocket']);} 
if(pe['xhr-streaming']&&!info.null_origin){protocols.push('xhr-streaming');}else{if(pe['xdr-streaming']&&!info.cookie_needed&&!info.null_origin){protocols.push('xdr-streaming');}else{maybe_push(['iframe-eventsource','iframe-htmlfile']);}} 
if(pe['xhr-polling']&&!info.null_origin){protocols.push('xhr-polling');}else{if(pe['xdr-polling']&&!info.cookie_needed&&!info.null_origin){protocols.push('xdr-polling');}else{maybe_push(['iframe-xhr-polling','jsonp-polling']);}}
return protocols;}
  
var MPrefix='_sockjs_global';utils.createHook=function(){var window_id='a'+utils.random_string(8);if(!(MPrefix in _window)){var map={};_window[MPrefix]=function(window_id){if(!(window_id in map)){map[window_id]={id:window_id,del:function(){delete map[window_id];}};}
return map[window_id];}}
return _window[MPrefix](window_id);};utils.attachMessage=function(listener){utils.attachEvent('message',listener);};utils.attachEvent=function(event,listener){if(typeof _window.addEventListener!=='undefined'){_window.addEventListener(event,listener,false);}else{
_document.attachEvent("on"+event,listener);_window.attachEvent("on"+event,listener);}};utils.detachMessage=function(listener){utils.detachEvent('message',listener);};utils.detachEvent=function(event,listener){if(typeof _window.addEventListener!=='undefined'){_window.removeEventListener(event,listener,false);}else{_document.detachEvent("on"+event,listener);_window.detachEvent("on"+event,listener);}};var on_unload={};var after_unload=false;var trigger_unload_callbacks=function(){for(var ref in on_unload){on_unload[ref]();delete on_unload[ref];};};var unload_triggered=function(){if(after_unload)return;after_unload=true;trigger_unload_callbacks();};
utils.attachEvent('unload',unload_triggered);utils.unload_add=function(listener){var ref=utils.random_string(8);on_unload[ref]=listener;if(after_unload){utils.delay(trigger_unload_callbacks);}
return ref;};utils.unload_del=function(ref){if(ref in on_unload)
delete on_unload[ref];};utils.createIframe=function(iframe_url,error_callback){var iframe=_document.createElement('iframe');var tref,unload_ref;var unattach=function(){clearTimeout(tref);try{iframe.onload=null;}catch(x){}
iframe.onerror=null;};var cleanup=function(){if(iframe){unattach();

setTimeout(function(){if(iframe){iframe.parentNode.removeChild(iframe);}
iframe=null;},0);utils.unload_del(unload_ref);}};var onerror=function(r){if(iframe){cleanup();error_callback(r);}};var post=function(msg,origin){try{
if(iframe&&iframe.contentWindow){iframe.contentWindow.postMessage(msg,origin);}}catch(x){};};iframe.src=iframe_url;iframe.style.display='none';iframe.style.position='absolute';iframe.onerror=function(){onerror('onerror');};iframe.onload=function(){
clearTimeout(tref);tref=setTimeout(function(){onerror('onload timeout');},2000);};_document.body.appendChild(iframe);tref=setTimeout(function(){onerror('timeout');},15000);unload_ref=utils.unload_add(cleanup);return{post:post,cleanup:cleanup,loaded:unattach};};utils.createHtmlfile=function(iframe_url,error_callback){var doc=new ActiveXObject('htmlfile');var tref,unload_ref;var iframe;var unattach=function(){clearTimeout(tref);};var cleanup=function(){if(doc){unattach();utils.unload_del(unload_ref);iframe.parentNode.removeChild(iframe);iframe=doc=null;CollectGarbage();}};var onerror=function(r){if(doc){cleanup();error_callback(r);}};var post=function(msg,origin){try{
if(iframe&&iframe.contentWindow){iframe.contentWindow.postMessage(msg,origin);}}catch(x){};};doc.open();doc.write('<html><s'+'cript>'+'document.domain="'+document.domain+'";'+'</s'+'cript></html>');doc.close();doc.parentWindow[WPrefix]=_window[WPrefix];var c=doc.createElement('div');doc.body.appendChild(c);iframe=doc.createElement('iframe');c.appendChild(iframe);iframe.src=iframe_url;tref=setTimeout(function(){onerror('timeout');},15000);unload_ref=utils.unload_add(cleanup);return{post:post,cleanup:cleanup,loaded:unattach};};
 var AbstractXHRObject=function(){};AbstractXHRObject.prototype=new EventEmitter(['chunk','finish']);AbstractXHRObject.prototype._start=function(method,url,payload,opts){var that=this;try{that.xhr=new XMLHttpRequest();}catch(x){};if(!that.xhr){try{that.xhr=new _window.ActiveXObject('Microsoft.XMLHTTP');}catch(x){};}
if(_window.ActiveXObject||_window.XDomainRequest){ url+=((url.indexOf('?')===-1)?'?':'&')+'t='+(+new Date);}
 
that.unload_ref=utils.unload_add(function(){that._cleanup(true);});try{that.xhr.open(method,url,true);}catch(e){that.emit('finish',0,'');that._cleanup();return;};if(!opts||!opts.no_credentials){that.xhr.withCredentials='true';}
if(opts&&opts.headers){for(var key in opts.headers){that.xhr.setRequestHeader(key,opts.headers[key]);}}
that.xhr.onreadystatechange=function(){if(that.xhr){var x=that.xhr;switch(x.readyState){case 3:
 try{var status=x.status;var text=x.responseText;}catch(x){}; if(status===1223)status=204;if(text&&text.length>0){that.emit('chunk',status,text);}
break;case 4:var status=x.status; if(status===1223)status=204;that.emit('finish',status,x.responseText);that._cleanup(false);break;}}};that.xhr.send(payload);};AbstractXHRObject.prototype._cleanup=function(abort){var that=this;if(!that.xhr)return;utils.unload_del(that.unload_ref); that.xhr.onreadystatechange=function(){};if(abort){try{that.xhr.abort();}catch(x){};}
that.unload_ref=that.xhr=null;};AbstractXHRObject.prototype.close=function(){var that=this;that.nuke();that._cleanup(true);};var XHRCorsObject=utils.XHRCorsObject=function(){var that=this,args=arguments;utils.delay(function(){that._start.apply(that,args);});};XHRCorsObject.prototype=new AbstractXHRObject();var XHRLocalObject=utils.XHRLocalObject=function(method,url,payload){var that=this;utils.delay(function(){that._start(method,url,payload,{no_credentials:true});});};XHRLocalObject.prototype=new AbstractXHRObject();
var XDRObject=utils.XDRObject=function(method,url,payload){var that=this;utils.delay(function(){that._start(method,url,payload);});};XDRObject.prototype=new EventEmitter(['chunk','finish']);XDRObject.prototype._start=function(method,url,payload){var that=this;var xdr=new XDomainRequest(); url+=((url.indexOf('?')===-1)?'?':'&')+'t='+(+new Date);var onerror=xdr.ontimeout=xdr.onerror=function(){that.emit('finish',0,'');that._cleanup(false);};xdr.onprogress=function(){that.emit('chunk',200,xdr.responseText);};xdr.onload=function(){that.emit('finish',200,xdr.responseText);that._cleanup(false);};that.xdr=xdr;that.unload_ref=utils.unload_add(function(){that._cleanup(true);});try{ that.xdr.open(method,url);that.xdr.send(payload);}catch(x){onerror();}};XDRObject.prototype._cleanup=function(abort){var that=this;if(!that.xdr)return;utils.unload_del(that.unload_ref);that.xdr.ontimeout=that.xdr.onerror=that.xdr.onprogress=that.xdr.onload=null;if(abort){try{that.xdr.abort();}catch(x){};}
that.unload_ref=that.xdr=null;};XDRObject.prototype.close=function(){var that=this;that.nuke();that._cleanup(true);};

utils.isXHRCorsCapable=function(){if(_window.XMLHttpRequest&&'withCredentials'in new XMLHttpRequest()){return 1;}
if(_window.XDomainRequest&&_document.domain){return 2;}
if(IframeTransport.enabled()){return 3;}
return 4;};
 var SockJS=function(url,dep_protocols_whitelist,options){if(this===_window){ return new SockJS(url,dep_protocols_whitelist,options);}
var that=this,protocols_whitelist;that._options={devel:false,debug:false,protocols_whitelist:[],info:undefined,rtt:undefined};if(options){utils.objectExtend(that._options,options);}
that._base_url=utils.amendUrl(url);that._server=that._options.server||utils.random_number_string(1000);if(that._options.protocols_whitelist&&that._options.protocols_whitelist.length){protocols_whitelist=that._options.protocols_whitelist;}else{ if(typeof dep_protocols_whitelist==='string'&&dep_protocols_whitelist.length>0){protocols_whitelist=[dep_protocols_whitelist];}else if(utils.isArray(dep_protocols_whitelist)){protocols_whitelist=dep_protocols_whitelist}else{protocols_whitelist=null;}
if(protocols_whitelist){that._debug('Deprecated API: Use "protocols_whitelist" option '+'instead of supplying protocol list as a second '+'parameter to SockJS constructor.');}}
that._protocols=[];that.protocol=null;that.readyState=SockJS.CONNECTING;that._ir=createInfoReceiver(that._base_url);that._ir.onfinish=function(info,rtt){that._ir=null;if(info){if(that._options.info){ info=utils.objectExtend(info,that._options.info);}
if(that._options.rtt){rtt=that._options.rtt;}
that._applyInfo(info,rtt,protocols_whitelist);that._didClose();}else{that._didClose(1002,'Can\'t connect to server',true);}};};SockJS.prototype=new REventTarget();SockJS.version="0.3.4";SockJS.CONNECTING=0;SockJS.OPEN=1;SockJS.CLOSING=2;SockJS.CLOSED=3;SockJS.prototype._debug=function(){if(this._options.debug)
utils.log.apply(utils,arguments);};SockJS.prototype._dispatchOpen=function(){var that=this;if(that.readyState===SockJS.CONNECTING){if(that._transport_tref){clearTimeout(that._transport_tref);that._transport_tref=null;}
that.readyState=SockJS.OPEN;that.dispatchEvent(new SimpleEvent("open"));}else{
that._didClose(1006,"Server lost session");}};SockJS.prototype._dispatchMessage=function(data){var that=this;if(that.readyState!==SockJS.OPEN)
return;that.dispatchEvent(new SimpleEvent("message",{data:data}));};SockJS.prototype._dispatchHeartbeat=function(data){var that=this;if(that.readyState!==SockJS.OPEN)
return;that.dispatchEvent(new SimpleEvent('heartbeat',{}));};SockJS.prototype._didClose=function(code,reason,force){var that=this;if(that.readyState!==SockJS.CONNECTING&&that.readyState!==SockJS.OPEN&&that.readyState!==SockJS.CLOSING)
throw new Error('INVALID_STATE_ERR');if(that._ir){that._ir.nuke();that._ir=null;}
if(that._transport){that._transport.doCleanup();that._transport=null;}
var close_event=new SimpleEvent("close",{code:code,reason:reason,wasClean:utils.userSetCode(code)});if(!utils.userSetCode(code)&&that.readyState===SockJS.CONNECTING&&!force){if(that._try_next_protocol(close_event)){return;}
close_event=new SimpleEvent("close",{code:2000,reason:"All transports failed",wasClean:false,last_event:close_event});}
that.readyState=SockJS.CLOSED;utils.delay(function(){that.dispatchEvent(close_event);});};SockJS.prototype._didMessage=function(data){var that=this;var type=data.slice(0,1);switch(type){case'o':that._dispatchOpen();break;case'a':var payload=JSON.parse(data.slice(1)||'[]');for(var i=0;i<payload.length;i++){that._dispatchMessage(payload[i]);}
break;case'm':var payload=JSON.parse(data.slice(1)||'null');that._dispatchMessage(payload);break;case'c':var payload=JSON.parse(data.slice(1)||'[]');that._didClose(payload[0],payload[1]);break;case'h':that._dispatchHeartbeat();break;}};SockJS.prototype._try_next_protocol=function(close_event){var that=this;if(that.protocol){that._debug('Closed transport:',that.protocol,''+close_event);that.protocol=null;}
if(that._transport_tref){clearTimeout(that._transport_tref);that._transport_tref=null;}
while(1){var protocol=that.protocol=that._protocols.shift();if(!protocol){return false;}

if(SockJS[protocol]&&SockJS[protocol].need_body===true&&(!_document.body||(typeof _document.readyState!=='undefined'&&_document.readyState!=='complete'))){that._protocols.unshift(protocol);that.protocol='waiting-for-load';utils.attachEvent('load',function(){that._try_next_protocol();});return true;}
if(!SockJS[protocol]||!SockJS[protocol].enabled(that._options)){that._debug('Skipping transport:',protocol);}else{var roundTrips=SockJS[protocol].roundTrips||1;var to=((that._options.rto||0)*roundTrips)||5000;that._transport_tref=utils.delay(to,function(){if(that.readyState===SockJS.CONNECTING){

that._didClose(2007,"Transport timeouted");}});var connid=utils.random_string(8);var trans_url=that._base_url+'/'+that._server+'/'+connid;that._debug('Opening transport:',protocol,' url:'+trans_url,' RTO:'+that._options.rto);that._transport=new SockJS[protocol](that,trans_url,that._base_url);return true;}}};SockJS.prototype.close=function(code,reason){var that=this;if(code&&!utils.userSetCode(code))
throw new Error("INVALID_ACCESS_ERR");if(that.readyState!==SockJS.CONNECTING&&that.readyState!==SockJS.OPEN){return false;}
that.readyState=SockJS.CLOSING;that._didClose(code||1000,reason||"Normal closure");return true;};SockJS.prototype.send=function(data){var that=this;if(that.readyState===SockJS.CONNECTING)
throw new Error('INVALID_STATE_ERR');if(that.readyState===SockJS.OPEN){that._transport.doSend(utils.quote(''+data));}
return true;};SockJS.prototype._applyInfo=function(info,rtt,protocols_whitelist){var that=this;that._options.info=info;that._options.rtt=rtt;that._options.rto=utils.countRTO(rtt);that._options.info.null_origin=!_document.domain;var probed=utils.probeProtocols();that._protocols=utils.detectProtocols(probed,protocols_whitelist,info);};
 var WebSocketTransport=SockJS.websocket=function(ri,trans_url){var that=this;var url=trans_url+'/websocket';if(url.slice(0,5)==='https'){url='wss'+url.slice(5);}else{url='ws'+url.slice(4);}
that.ri=ri;that.url=url;var Constructor=_window.WebSocket||_window.MozWebSocket;that.ws=new Constructor(that.url);that.ws.onmessage=function(e){that.ri._didMessage(e.data);};


 that.unload_ref=utils.unload_add(function(){that.ws.close()});that.ws.onclose=function(){that.ri._didMessage(utils.closeFrame(1006,"WebSocket connection broken"));};};WebSocketTransport.prototype.doSend=function(data){this.ws.send('['+data+']');};WebSocketTransport.prototype.doCleanup=function(){var that=this;var ws=that.ws;if(ws){ws.onmessage=ws.onclose=null;ws.close();utils.unload_del(that.unload_ref);that.unload_ref=that.ri=that.ws=null;}};WebSocketTransport.enabled=function(){return!!(_window.WebSocket||_window.MozWebSocket);};


WebSocketTransport.roundTrips=2;
 var BufferedSender=function(){};BufferedSender.prototype.send_constructor=function(sender){var that=this;that.send_buffer=[];that.sender=sender;};BufferedSender.prototype.doSend=function(message){var that=this;that.send_buffer.push(message);if(!that.send_stop){that.send_schedule();}};





BufferedSender.prototype.send_schedule_wait=function(){var that=this;var tref;that.send_stop=function(){that.send_stop=null;clearTimeout(tref);};tref=utils.delay(25,function(){that.send_stop=null;that.send_schedule();});};BufferedSender.prototype.send_schedule=function(){var that=this;if(that.send_buffer.length>0){var payload='['+that.send_buffer.join(',')+']';that.send_stop=that.sender(that.trans_url,payload,function(success,abort_reason){that.send_stop=null;if(success===false){that.ri._didClose(1006,'Sending error '+abort_reason);}else{that.send_schedule_wait();}});that.send_buffer=[];}};BufferedSender.prototype.send_destructor=function(){var that=this;if(that._send_stop){that._send_stop();}
that._send_stop=null;};var jsonPGenericSender=function(url,payload,callback){var that=this;if(!('_send_form'in that)){var form=that._send_form=_document.createElement('form');var area=that._send_area=_document.createElement('textarea');area.name='d';form.style.display='none';form.style.position='absolute';form.method='POST';form.enctype='application/x-www-form-urlencoded';form.acceptCharset="UTF-8";form.appendChild(area);_document.body.appendChild(form);}
var form=that._send_form;var area=that._send_area;var id='a'+utils.random_string(8);form.target=id;form.action=url+'/jsonp_send?i='+id;var iframe;try{iframe=_document.createElement('<iframe name="'+id+'">');}catch(x){iframe=_document.createElement('iframe');iframe.name=id;}
iframe.id=id;form.appendChild(iframe);iframe.style.display='none';try{area.value=payload;}catch(e){utils.log('Your browser is seriously broken. Go home! '+e.message);}
form.submit();var completed=function(e){if(!iframe.onerror)return;iframe.onreadystatechange=iframe.onerror=iframe.onload=null;
utils.delay(500,function(){iframe.parentNode.removeChild(iframe);iframe=null;});area.value='';
callback(true);};iframe.onerror=iframe.onload=completed;iframe.onreadystatechange=function(e){if(iframe.readyState=='complete')completed();};return completed;};var createAjaxSender=function(AjaxObject){return function(url,payload,callback){var xo=new AjaxObject('POST',url+'/xhr_send',payload);xo.onfinish=function(status,text){callback(status===200||status===204,'http status '+status);};return function(abort_reason){callback(false,abort_reason);};};};
   
  var jsonPGenericReceiver=function(url,callback){var tref;var script=_document.createElement('script');var script2;var close_script=function(frame){if(script2){script2.parentNode.removeChild(script2);script2=null;}
if(script){clearTimeout(tref);
script.parentNode.removeChild(script);script.onreadystatechange=script.onerror=script.onload=script.onclick=null;script=null;callback(frame);callback=null;}};var loaded_okay=false;var error_timer=null;script.id='a'+utils.random_string(8);script.src=url;script.type='text/javascript';script.charset='UTF-8';script.onerror=function(e){if(!error_timer){error_timer=setTimeout(function(){if(!loaded_okay){close_script(utils.closeFrame(1006,"JSONP script loaded abnormally (onerror)"));}},1000);}};script.onload=function(e){close_script(utils.closeFrame(1006,"JSONP script loaded abnormally (onload)"));};script.onreadystatechange=function(e){if(/loaded|closed/.test(script.readyState)){if(script&&script.htmlFor&&script.onclick){loaded_okay=true;try{script.onclick();}catch(x){}}
if(script){close_script(utils.closeFrame(1006,"JSONP script loaded abnormally (onreadystatechange)"));}}};




 if(typeof script.async==='undefined'&&_document.attachEvent){
 if(!/opera/i.test(navigator.userAgent)){ try{script.htmlFor=script.id;script.event="onclick";}catch(x){}
script.async=true;}else{ script2=_document.createElement('script');script2.text="try{var a = document.getElementById('"+script.id+"'); if(a)a.onerror();}catch(x){};";script.async=script2.async=false;}}
if(typeof script.async!=='undefined'){script.async=true;}
tref=setTimeout(function(){close_script(utils.closeFrame(1006,"JSONP script loaded abnormally (timeout)"));},35000);var head=_document.getElementsByTagName('head')[0];head.insertBefore(script,head.firstChild);if(script2){head.insertBefore(script2,head.firstChild);}
return close_script;};
  
 
 
   
 var JsonPTransport=SockJS['jsonp-polling']=function(ri,trans_url){utils.polluteGlobalNamespace();var that=this;that.ri=ri;that.trans_url=trans_url;that.send_constructor(jsonPGenericSender);that._schedule_recv();};JsonPTransport.prototype=new BufferedSender();JsonPTransport.prototype._schedule_recv=function(){var that=this;var callback=function(data){that._recv_stop=null;if(data){if(!that._is_closing){that.ri._didMessage(data);}}
if(!that._is_closing){that._schedule_recv();}};that._recv_stop=jsonPReceiverWrapper(that.trans_url+'/jsonp',jsonPGenericReceiver,callback);};JsonPTransport.enabled=function(){return true;};JsonPTransport.need_body=true;JsonPTransport.prototype.doCleanup=function(){var that=this;that._is_closing=true;if(that._recv_stop){that._recv_stop();}
that.ri=that._recv_stop=null;that.send_destructor();};var jsonPReceiverWrapper=function(url,constructReceiver,user_callback){var id='a'+utils.random_string(6);var url_id=url+'?c='+escape(WPrefix+'.'+id);
var aborting=0;var callback=function(frame){switch(aborting){case 0:delete _window[WPrefix][id];user_callback(frame);break;case 1:user_callback(frame);aborting=2;break;case 2:delete _window[WPrefix][id];break;}};var close_script=constructReceiver(url_id,callback);_window[WPrefix][id]=close_script;var stop=function(){if(_window[WPrefix][id]){aborting=1;_window[WPrefix][id](utils.closeFrame(1000,"JSONP user aborted read"));}};return stop;};
 var AjaxBasedTransport=function(){};AjaxBasedTransport.prototype=new BufferedSender();AjaxBasedTransport.prototype.run=function(ri,trans_url,url_suffix,Receiver,AjaxObject){var that=this;that.ri=ri;that.trans_url=trans_url;that.send_constructor(createAjaxSender(AjaxObject));that.poll=new Polling(ri,Receiver,trans_url+url_suffix,AjaxObject);};AjaxBasedTransport.prototype.doCleanup=function(){var that=this;if(that.poll){that.poll.abort();that.poll=null;}};var XhrStreamingTransport=SockJS['xhr-streaming']=function(ri,trans_url){this.run(ri,trans_url,'/xhr_streaming',XhrReceiver,utils.XHRCorsObject);};XhrStreamingTransport.prototype=new AjaxBasedTransport();XhrStreamingTransport.enabled=function(){
return(_window.XMLHttpRequest&&'withCredentials'in new XMLHttpRequest()&&(!/opera/i.test(navigator.userAgent)));};XhrStreamingTransport.roundTrips=2;

XhrStreamingTransport.need_body=true;
var XdrStreamingTransport=SockJS['xdr-streaming']=function(ri,trans_url){this.run(ri,trans_url,'/xhr_streaming',XhrReceiver,utils.XDRObject);};XdrStreamingTransport.prototype=new AjaxBasedTransport();XdrStreamingTransport.enabled=function(){return!!_window.XDomainRequest;};XdrStreamingTransport.roundTrips=2;
var XhrPollingTransport=SockJS['xhr-polling']=function(ri,trans_url){this.run(ri,trans_url,'/xhr',XhrReceiver,utils.XHRCorsObject);};XhrPollingTransport.prototype=new AjaxBasedTransport();XhrPollingTransport.enabled=XhrStreamingTransport.enabled;XhrPollingTransport.roundTrips=2;
var XdrPollingTransport=SockJS['xdr-polling']=function(ri,trans_url){this.run(ri,trans_url,'/xhr',XhrReceiver,utils.XDRObject);};XdrPollingTransport.prototype=new AjaxBasedTransport();XdrPollingTransport.enabled=XdrStreamingTransport.enabled;XdrPollingTransport.roundTrips=2;

  
 
 
 
  
 var IframeTransport=function(){};IframeTransport.prototype.i_constructor=function(ri,trans_url,base_url){var that=this;that.ri=ri;that.origin=utils.getOrigin(base_url);that.base_url=base_url;that.trans_url=trans_url;var iframe_url=base_url+'/iframe.html';if(that.ri._options.devel){iframe_url+='?t='+(+new Date);}
that.window_id=utils.random_string(8);iframe_url+='#'+that.window_id;that.iframeObj=utils.createIframe(iframe_url,function(r){that.ri._didClose(1006,"Unable to load an iframe ("+r+")");});that.onmessage_cb=utils.bind(that.onmessage,that);utils.attachMessage(that.onmessage_cb);};IframeTransport.prototype.doCleanup=function(){var that=this;if(that.iframeObj){utils.detachMessage(that.onmessage_cb);try{
if(that.iframeObj.iframe.contentWindow){that.postMessage('c');}}catch(x){}
that.iframeObj.cleanup();that.iframeObj=null;that.onmessage_cb=that.iframeObj=null;}};IframeTransport.prototype.onmessage=function(e){var that=this;if(e.origin!==that.origin)return;var window_id=e.data.slice(0,8);var type=e.data.slice(8,9);var data=e.data.slice(9);if(window_id!==that.window_id)return;switch(type){case's':that.iframeObj.loaded();that.postMessage('s',JSON.stringify([SockJS.version,that.protocol,that.trans_url,that.base_url]));break;case't':that.ri._didMessage(data);break;}};IframeTransport.prototype.postMessage=function(type,data){var that=this;that.iframeObj.post(that.window_id+type+(data||''),that.origin);};IframeTransport.prototype.doSend=function(message){this.postMessage('m',message);};IframeTransport.enabled=function(){
var konqueror=navigator&&navigator.userAgent&&navigator.userAgent.indexOf('Konqueror')!==-1;return((typeof _window.postMessage==='function'||typeof _window.postMessage==='object')&&(!konqueror));};
 var curr_window_id;var postMessage=function(type,data){if(parent!==_window){parent.postMessage(curr_window_id+type+(data||''),'*');}else{utils.log("Can't postMessage, no parent window.",type,data);}};var FacadeJS=function(){};FacadeJS.prototype._didClose=function(code,reason){postMessage('t',utils.closeFrame(code,reason));};FacadeJS.prototype._didMessage=function(frame){postMessage('t',frame);};FacadeJS.prototype._doSend=function(data){this._transport.doSend(data);};FacadeJS.prototype._doCleanup=function(){this._transport.doCleanup();};utils.parent_origin=undefined;SockJS.bootstrap_iframe=function(){var facade;curr_window_id=_document.location.hash.slice(1);var onMessage=function(e){if(e.source!==parent)return;if(typeof utils.parent_origin==='undefined')
utils.parent_origin=e.origin;if(e.origin!==utils.parent_origin)return;var window_id=e.data.slice(0,8);var type=e.data.slice(8,9);var data=e.data.slice(9);if(window_id!==curr_window_id)return;switch(type){case's':var p=JSON.parse(data);var version=p[0];var protocol=p[1];var trans_url=p[2];var base_url=p[3];if(version!==SockJS.version){utils.log("Incompatibile SockJS! Main site uses:"+" \""+version+"\", the iframe:"+" \""+SockJS.version+"\".");}
if(!utils.flatUrl(trans_url)||!utils.flatUrl(base_url)){utils.log("Only basic urls are supported in SockJS");return;}
if(!utils.isSameOriginUrl(trans_url)||!utils.isSameOriginUrl(base_url)){utils.log("Can't connect to different domain from within an "+"iframe. ("+JSON.stringify([_window.location.href,trans_url,base_url])+")");return;}
facade=new FacadeJS();facade._transport=new FacadeJS[protocol](facade,trans_url,base_url);break;case'm':facade._doSend(data);break;case'c':if(facade)
facade._doCleanup();facade=null;break;}};utils.attachMessage(onMessage); postMessage('s');};
 var InfoReceiver=function(base_url,AjaxObject){var that=this;utils.delay(function(){that.doXhr(base_url,AjaxObject);});};InfoReceiver.prototype=new EventEmitter(['finish']);InfoReceiver.prototype.doXhr=function(base_url,AjaxObject){var that=this;var t0=(new Date()).getTime();var xo=new AjaxObject('GET',base_url+'/info');var tref=utils.delay(8000,function(){xo.ontimeout();});xo.onfinish=function(status,text){clearTimeout(tref);tref=null;if(status===200){var rtt=(new Date()).getTime()-t0;var info=JSON.parse(text);if(typeof info!=='object')info={};that.emit('finish',info,rtt);}else{that.emit('finish');}};xo.ontimeout=function(){xo.close();that.emit('finish');};};var InfoReceiverIframe=function(base_url){var that=this;var go=function(){var ifr=new IframeTransport();ifr.protocol='w-iframe-info-receiver';var fun=function(r){if(typeof r==='string'&&r.substr(0,1)==='m'){var d=JSON.parse(r.substr(1));var info=d[0],rtt=d[1];that.emit('finish',info,rtt);}else{that.emit('finish');}
ifr.doCleanup();ifr=null;};var mock_ri={_options:{},_didClose:fun,_didMessage:fun};ifr.i_constructor(mock_ri,base_url,base_url);}
if(!_document.body){utils.attachEvent('load',go);}else{go();}};InfoReceiverIframe.prototype=new EventEmitter(['finish']);var InfoReceiverFake=function(){

var that=this;utils.delay(function(){that.emit('finish',{},2000);});};InfoReceiverFake.prototype=new EventEmitter(['finish']);var createInfoReceiver=function(base_url){if(utils.isSameOriginUrl(base_url)){
return new InfoReceiver(base_url,utils.XHRLocalObject);}
switch(utils.isXHRCorsCapable()){case 1: return new InfoReceiver(base_url,utils.XHRLocalObject);case 2:return new InfoReceiver(base_url,utils.XDRObject);case 3: return new InfoReceiverIframe(base_url);default: return new InfoReceiverFake();};};var WInfoReceiverIframe=FacadeJS['w-iframe-info-receiver']=function(ri,_trans_url,base_url){var ir=new InfoReceiver(base_url,utils.XHRLocalObject);ir.onfinish=function(info,rtt){ri._didMessage('m'+JSON.stringify([info,rtt]));ri._didClose();}};WInfoReceiverIframe.prototype.doCleanup=function(){};
 var EventSourceIframeTransport=SockJS['iframe-eventsource']=function(){var that=this;that.protocol='w-iframe-eventsource';that.i_constructor.apply(that,arguments);};EventSourceIframeTransport.prototype=new IframeTransport();EventSourceIframeTransport.enabled=function(){return('EventSource'in _window)&&IframeTransport.enabled();};EventSourceIframeTransport.need_body=true;EventSourceIframeTransport.roundTrips=3;
var EventSourceTransport=FacadeJS['w-iframe-eventsource']=function(ri,trans_url){this.run(ri,trans_url,'/eventsource',EventSourceReceiver,utils.XHRLocalObject);}
EventSourceTransport.prototype=new AjaxBasedTransport();
 var XhrPollingIframeTransport=SockJS['iframe-xhr-polling']=function(){var that=this;that.protocol='w-iframe-xhr-polling';that.i_constructor.apply(that,arguments);};XhrPollingIframeTransport.prototype=new IframeTransport();XhrPollingIframeTransport.enabled=function(){return _window.XMLHttpRequest&&IframeTransport.enabled();};XhrPollingIframeTransport.need_body=true;XhrPollingIframeTransport.roundTrips=3;
var XhrPollingITransport=FacadeJS['w-iframe-xhr-polling']=function(ri,trans_url){this.run(ri,trans_url,'/xhr',XhrReceiver,utils.XHRLocalObject);};XhrPollingITransport.prototype=new AjaxBasedTransport();
  
  
 var HtmlFileIframeTransport=SockJS['iframe-htmlfile']=function(){var that=this;that.protocol='w-iframe-htmlfile';that.i_constructor.apply(that,arguments);};HtmlFileIframeTransport.prototype=new IframeTransport();HtmlFileIframeTransport.enabled=function(){return IframeTransport.enabled();};HtmlFileIframeTransport.need_body=true;HtmlFileIframeTransport.roundTrips=3;
var HtmlFileTransport=FacadeJS['w-iframe-htmlfile']=function(ri,trans_url){this.run(ri,trans_url,'/htmlfile',HtmlfileReceiver,utils.XHRLocalObject);};HtmlFileTransport.prototype=new AjaxBasedTransport();
 var Polling=function(ri,Receiver,recv_url,AjaxObject){var that=this;that.ri=ri;that.Receiver=Receiver;that.recv_url=recv_url;that.AjaxObject=AjaxObject;that._scheduleRecv();};Polling.prototype._scheduleRecv=function(){var that=this;var poll=that.poll=new that.Receiver(that.recv_url,that.AjaxObject);var msg_counter=0;poll.onmessage=function(e){msg_counter+=1;that.ri._didMessage(e.data);};poll.onclose=function(e){that.poll=poll=poll.onmessage=poll.onclose=null;if(!that.poll_is_closing){if(e.reason==='permanent'){that.ri._didClose(1006,'Polling error ('+e.reason+')');}else{that._scheduleRecv();}}};};Polling.prototype.abort=function(){var that=this;that.poll_is_closing=true;if(that.poll){that.poll.abort();}};
 var EventSourceReceiver=function(url){var that=this;var es=new EventSource(url);es.onmessage=function(e){that.dispatchEvent(new SimpleEvent('message',{'data':unescape(e.data)}));};that.es_close=es.onerror=function(e,abort_reason){ var reason=abort_reason?'user':(es.readyState!==2?'network':'permanent');that.es_close=es.onmessage=es.onerror=null;es.close();es=null;
 utils.delay(200,function(){that.dispatchEvent(new SimpleEvent('close',{reason:reason}));});};};EventSourceReceiver.prototype=new REventTarget();EventSourceReceiver.prototype.abort=function(){var that=this;if(that.es_close){that.es_close({},true);}};
 var _is_ie_htmlfile_capable;var isIeHtmlfileCapable=function(){if(_is_ie_htmlfile_capable===undefined){if('ActiveXObject'in _window){try{_is_ie_htmlfile_capable=!!new ActiveXObject('htmlfile');}catch(x){}}else{_is_ie_htmlfile_capable=false;}}
return _is_ie_htmlfile_capable;};var HtmlfileReceiver=function(url){var that=this;utils.polluteGlobalNamespace();that.id='a'+utils.random_string(6,26);url+=((url.indexOf('?')===-1)?'?':'&')+'c='+escape(WPrefix+'.'+that.id);var constructor=isIeHtmlfileCapable()?utils.createHtmlfile:utils.createIframe;var iframeObj;_window[WPrefix][that.id]={start:function(){iframeObj.loaded();},message:function(data){that.dispatchEvent(new SimpleEvent('message',{'data':data}));},stop:function(){that.iframe_close({},'network');}};that.iframe_close=function(e,abort_reason){iframeObj.cleanup();that.iframe_close=iframeObj=null;delete _window[WPrefix][that.id];that.dispatchEvent(new SimpleEvent('close',{reason:abort_reason}));};iframeObj=constructor(url,function(e){that.iframe_close({},'permanent');});};HtmlfileReceiver.prototype=new REventTarget();HtmlfileReceiver.prototype.abort=function(){var that=this;if(that.iframe_close){that.iframe_close({},'user');}};
 var XhrReceiver=function(url,AjaxObject){var that=this;var buf_pos=0;that.xo=new AjaxObject('POST',url,null);that.xo.onchunk=function(status,text){if(status!==200)return;while(1){var buf=text.slice(buf_pos);var p=buf.indexOf('\n');if(p===-1)break;buf_pos+=p+1;var msg=buf.slice(0,p);that.dispatchEvent(new SimpleEvent('message',{data:msg}));}};that.xo.onfinish=function(status,text){that.xo.onchunk(status,text);that.xo=null;var reason=status===200?'network':'permanent';that.dispatchEvent(new SimpleEvent('close',{reason:reason}));}};XhrReceiver.prototype=new REventTarget();XhrReceiver.prototype.abort=function(){var that=this;if(that.xo){that.xo.close();that.dispatchEvent(new SimpleEvent('close',{reason:'user'}));that.xo=null;}};
  SockJS.getUtils=function(){return utils;};SockJS.getIframeTransport=function(){return IframeTransport;}; return SockJS;})();if('_sockjs_onload'in window)setTimeout(_sockjs_onload,1);if(typeof define==='function'&&define.amd){define('sockjs',[],function(){return SockJS;});}
 
(function(factory){if(typeof define==='function'&&define.amd){ define(['jquery'],factory);}else if(typeof exports==='object'){ factory(require('jquery'));}else{ factory(jQuery);}}(function($){var pluses=/\+/g;function encode(s){return config.raw?s:encodeURIComponent(s);}
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
$.cookie(key,'',$.extend({},options,{expires:-1}));return!$.cookie(key);};}));;(function(window,document){var version='3.7.2';var options=window.html5||{};var reSkip=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;var saveClones=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;var supportsHtml5Styles;var expando='_html5shiv';var expanID=0;var expandoData={};var supportsUnknownElements;(function(){try{var a=document.createElement('a');a.innerHTML='<xyz></xyz>'; supportsHtml5Styles=('hidden'in a);supportsUnknownElements=a.childNodes.length==1||(function(){(document.createElement)('a');var frag=document.createDocumentFragment();return(typeof frag.cloneNode=='undefined'||typeof frag.createDocumentFragment=='undefined'||typeof frag.createElement=='undefined');}());}catch(e){ supportsHtml5Styles=true;supportsUnknownElements=true;}}());function addStyleSheet(ownerDocument,cssText){var p=ownerDocument.createElement('p'),parent=ownerDocument.getElementsByTagName('head')[0]||ownerDocument.documentElement;p.innerHTML='x<style>'+cssText+'</style>';return parent.insertBefore(p.lastChild,parent.firstChild);}
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
var html5={'elements':options.elements||'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video','version':version,'shivCSS':(options.shivCSS!==false),'supportsUnknownElements':supportsUnknownElements,'shivMethods':(options.shivMethods!==false),'type':'default','shivDocument':shivDocument, createElement:createElement, createDocumentFragment:createDocumentFragment, addElements:addElements}; window.html5=html5; shivDocument(document);}(this,document));(function(global,exports){var $d=global.document,$=(global.jQuery||global.Zepto||global.ender||$d),$$,$b,ke='keydown';function realTypeOf(v,s){return(v===null)?s==='null':(v===undefined)?s==='undefined':(v.is&&v instanceof $)?s==='element':Object.prototype.toString.call(v).toLowerCase().indexOf(s)>7;}
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