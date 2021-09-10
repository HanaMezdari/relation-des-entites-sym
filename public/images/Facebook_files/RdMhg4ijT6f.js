if (self.CavalryLogger) { CavalryLogger.start_js(["cmpjG20"]); }

__d("XLynxAsyncCallbackControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/si/linkclick/ajax_callback/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("FBLynxLogging",["AsyncRequest","ODS","XLynxAsyncCallbackControllerRouteBuilder"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var b=c("XLynxAsyncCallbackControllerRouteBuilder").buildURL({});new(c("AsyncRequest"))(b).setData({lynx_uri:a}).setErrorHandler(function(a){a=a.getError();d("ODS").bumpEntityKey(3861,"linkshim","click_log.post.fail."+a)}).setTransportErrorHandler(function(a){a=a.getError();d("ODS").bumpEntityKey(3861,"linkshim","click_log.post.transport_fail."+a)}).send()}g.log=a}),98);
__d("FBLynxBase",["$","FBLynxLogging","LinkshimHandlerConfig","URI","isLinkshimURI"],(function(a,b,c,d,e,f){"use strict";var g;function h(a){if(!b("isLinkshimURI")(a))return null;a=a.getQueryData().u;return!a?null:a}var i={logAsyncClick:function(a){i.swapLinkWithUnshimmedLink(a);a=a.getAttribute("data-lynx-uri");if(!a)return;b("FBLynxLogging").log(a)},originReferrerPolicyClick:function(a){var c=b("$")("meta_referrer");c.content=b("LinkshimHandlerConfig").switched_meta_referrer_policy;i.logAsyncClick(a);setTimeout(function(){c.content=b("LinkshimHandlerConfig").default_meta_referrer_policy},100)},swapLinkWithUnshimmedLink:function(a){var c=a.href,d=h(new(g||(g=b("URI")))(c));if(!d)return;a.setAttribute("data-lynx-uri",c);a.href=d},revertSwapIfLynxURIPresent:function(a){var b=a.getAttribute("data-lynx-uri");if(!b)return;a.removeAttribute("data-lynx-uri");a.href=b}};e.exports=i}),null);
__d("FBLynx",["Base64","Event","FBLynxBase","LinkshimHandlerConfig","Parent","URI"],(function(a,b,c,d,e,f){"use strict";var g,h=(g||(g=b("URI"))).goURIOnWindow,i={alreadySetup:!1,setupDelegation:function(a){a===void 0&&(a=!1);if(!document.documentElement)return;if(document.body==null){if(a)return;window.setTimeout(function(){i.setupDelegation(!0)},100);return}if(i.alreadySetup)return;i.alreadySetup=!0;var c=function(a){var c=i.getMaybeLynxLink(a.target);if(!c)return;var d=c[0];c=c[1];var e=c,f=new(g||(g=b("URI")))(c.href),j;if(b("LinkshimHandlerConfig").ghl_param_link_shim&&d!=="hover"&&(c.dataset&&c.dataset.attributes)){j=b("Base64").decodeObject(c.dataset.attributes);if(j&&j.open_link){var k;for(k in j)k!=="open_link"&&f.addQueryData(k,j[k]);k=c.cloneNode(!0);k.href=f.toString();e=k}}switch(d){case"async":case"asynclazy":b("FBLynxBase").logAsyncClick(e);break;case"origin":b("FBLynxBase").originReferrerPolicyClick(e);break;case"hover":i.hoverClick(e);break}b("LinkshimHandlerConfig").ghl_param_link_shim&&d!=="hover"&&j&&j.open_link&&(a.preventDefault(),h(f,window.open("",e.target),!0))};b("Event").listen(document.body,"click",c);b("LinkshimHandlerConfig").middle_click_requires_event&&b("Event").listen(document.body,"mouseup",function(a){a.button==1&&c(a)});b("Event").listen(document.body,"mouseover",function(a){a=i.getMaybeLynxLink(a.target);if(!a)return;var b=a[0];a=a[1];switch(b){case"async":case"asynclazy":case"origin":case"hover":i.mouseover(a);break}});b("Event").listen(document.body,"contextmenu",function(a){a=i.getMaybeLynxLink(a.target);if(!a)return;var b=a[0];a=a[1];switch(b){case"async":case"hover":case"origin":i.contextmenu(a);break;case"asynclazy":break}})},getMaybeLynxLink:function(a){a=b("Parent").byAttribute(a,"data-lynx-mode");if(a instanceof HTMLAnchorElement){var c=a.getAttribute("data-lynx-mode");switch(c){case"async":case"asynclazy":case"hover":case"origin":return[c,a];default:return null}}return null},hoverClick:function(a){b("FBLynxBase").revertSwapIfLynxURIPresent(a)},mouseover:function(a){b("FBLynxBase").swapLinkWithUnshimmedLink(a)},contextmenu:function(a){b("FBLynxBase").revertSwapIfLynxURIPresent(a)}};e.exports=i}),null);
__d("AbstractLinkLynxMode",["FBLynx","LinkshimHandlerConfig"],(function(a,b,c,d,e,f,g){"use strict";function a(a){return a?[c("LinkshimHandlerConfig").www_safe_js_mode,null]:["hover",null]}function b(){d("FBLynx").setupDelegation()}g.getMode=a;g.setupDelegation=b}),98);
__d("LynxGeneration",["LinkshimHandlerConfig","URI"],(function(a,b,c,d,e,f,g){var h=new(c("URI"))(c("LinkshimHandlerConfig").linkshim_path).setDomain(c("LinkshimHandlerConfig").linkshim_host),i={getShimURI:function(){return new(c("URI"))(h)},getLynxURIProtocol:function(a){return c("LinkshimHandlerConfig").always_use_https?"https":a.getProtocol()==="http"?"http":"https"},getShimmedHref:function(a,b,d){var e;a=new(c("URI"))(a);var f=i.getLynxURIProtocol(a);a=i.getShimURI().setQueryData((e={},e[c("LinkshimHandlerConfig").linkshim_url_param]=a.toString(),e[c("LinkshimHandlerConfig").linkshim_enc_param]=b,e)).setProtocol(f);b=d==null?void 0:d.trackingNodes;e=d==null?void 0:d.callbacks;b&&b.length&&(a=a.addQueryData("__tn__",b.join("")));e&&e.length&&(a=a.addQueryData("c",e));return a}};a=i;g["default"]=a}),98);
__d("NonFBLinkReferrerProtector",["$","Event","LinkshimHandlerConfig","Parent","URI","setTimeout"],(function(a,b,c,d,e,f){"use strict";var g,h=(g||(g=b("URI"))).goURIOnWindow,i={alreadySetup:!1,originReferrerPolicyClickWithoutLog:function(a){var c=b("$")("meta_referrer");c.content=b("LinkshimHandlerConfig").switched_meta_referrer_policy;b("setTimeout")(function(){c.content=b("LinkshimHandlerConfig").default_meta_referrer_policy},100)},setupDelegation:function(a){a===void 0&&(a=!1);if(document.body==null){if(a)return;b("setTimeout")(function(){i.setupDelegation(!0)},100);return}if(i.alreadySetup)return;i.alreadySetup=!0;a=function(a){var c=i.getMaybeNonFBLinkReferrerJSMode(a.target);if(!c)return;var d=c[0];c=c[1];switch(d){case"origin":i.originReferrerPolicyClickWithoutLog(c);break;case"ie":d=new(g||(g=b("URI")))(c.href);a.preventDefault();h(d,window.open("",c.target),!0);break}};b("Event").listen(document.body,"click",a)},getMaybeNonFBLinkReferrerJSMode:function(a){a=b("Parent").byAttribute(a,"data-lnfb-mode");if(a instanceof HTMLAnchorElement){var c=a.getAttribute("data-lnfb-mode");switch(c){case"ie":case"origin":return[c,a];default:return null}}return null}};e.exports=i}),null);
__d("AbstractLink.react",["AbstractLinkLynxMode","LynxGeneration","NonFBLinkReferrerProtector","isTruthy","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");a=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var e=b.prototype;e.componentDidMount=function(){this.props.dataLnfbMode!==null?d("NonFBLinkReferrerProtector").setupDelegation():this.props.isLinkshimSupported&&d("AbstractLinkLynxMode").setupDelegation()};e.render=function(){var a=this.props,b=a.href,e=a.linkRef,f=a.shimhash,g=a.nofollow,i=a.noopener,j=a.rel,k=a.isSafeToSkipShim,l=a.dataLnfbMode;a.isLinkshimSupported;a=babelHelpers.objectWithoutPropertiesLoose(a,["href","linkRef","shimhash","nofollow","noopener","rel","isSafeToSkipShim","dataLnfbMode","isLinkshimSupported"]);var m=b;j=j;var n=null,o=null,p=null;if(f!==null){m=c("LynxGeneration").getShimmedHref(b,f||"");b=d("AbstractLinkLynxMode").getMode(k);o=b[0];n=b[1]}g&&(j=c("isTruthy")(j)?j+" nofollow":"nofollow");i&&(j=c("isTruthy")(j)?j+" noopener":"noopener");c("isTruthy")(l)&&(p=l);return h.jsx("a",babelHelpers["extends"]({},a,{href:m.toString()||null,rel:j,ref:e,"data-sigil":n,"data-lynx-mode":o,"data-lnfb-mode":p}))};return b}(h.Component);g["default"]=a}),98);
__d("first",[],(function(a,b,c,d,e,f){"use strict";function a(a){for(var a=a,b=Array.isArray(a),c=0,a=b?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var d;if(b){if(c>=a.length)break;d=a[c++]}else{c=a.next();if(c.done)break;d=c.value}d=d;return d}return null}f["default"]=a}),66);
__d("ClickIDParameterUtils",["URI","compactArray","first","isCdnURI","isClickIDBlacklistSVDomainURI","isFacebookSVDomainURI","isFacebookURI","isFbDotComURI"],(function(a,b,c,d,e,f,g){"use strict";var h=new Set(["http","https"]);function i(a){return h.has(a.getProtocol())}var j="fbclid";b="doubleclick.net";var k=(d={},d[b]=[{extractor:function(a){a=a.getQueryString();return a!=null&&a.startsWith("http")?new(c("URI"))(a):null},injector:function(a,b,c){b=b.addQueryData(j,c);return a.setQueryString(b.toString())}}],d);function l(a){var b=a.getProtocol(),c=a.getDomain();a=a.getPort();return b!==null&&b.length>0||c!==null&&c.length>0||a!==null}function m(a){var b=c("first")(Object.keys(k).filter(function(b){return a.getDomain().endsWith(b)}));b=b!=null?k[b]:null;return b==null?null:c("first")(c("compactArray")(b.map(function(b){var c=b.extractor(a);return c==null?null:{injector:b.injector,uri:c}})))}function n(a){return!c("isFacebookURI")(a)&&!c("isFacebookSVDomainURI")(a)&&!c("isCdnURI")(a)&&!c("isFbDotComURI")(a)&&l(a)&&i(a)&&!o(a)}function o(a){var b=c("isClickIDBlacklistSVDomainURI")(a);if(b)return!0;b=m(a);return b!=null?o(b.uri):!1}function p(a,b){var c=m(a);return c!=null?c.injector(a,c.uri,b):a.addQueryData(j,b)}function a(a,b){return n(a)?p(a,b):a}g.QUERY_PARAM=j;g.appendClickIDQueryParam=a}),98);
__d("Link.react",["AbstractLink.react","ClickIDParameterUtils","LinkshimHandlerConfig","Random","URI","isExpressWifiDotComURI","isFacebookURI","isInternalFBURI","isLinkshimURI","isMessengerDotComURI","isOculusDotComURI","isWorkplaceDotComURI","killswitch","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function i(){return/(^|\.)oculus\.com$/.test(c("LinkshimHandlerConfig").current_domain)}function j(){return/(^|\.)expresswifi\.com$/.test(c("LinkshimHandlerConfig").current_domain)}function k(){return/(^|\.)workplace\.com$/.test(c("LinkshimHandlerConfig").current_domain)}function l(){return/(^|\.)internalfb\.com$/.test(c("LinkshimHandlerConfig").current_domain)}function m(a){return c("isFacebookURI")(a)||c("isMessengerDotComURI")(a)}function n(a){return a.getDomain().endsWith(".onion")}function o(a){if(k())return p(a);if(l())return c("isInternalFBURI")(a)||m(a);if(i())return c("isOculusDotComURI")(a);return j()?c("isExpressWifiDotComURI")(a):m(a)}function p(a){return c("isWorkplaceDotComURI")(a)}var q=/^(#|\/\w)/;function r(a){if(q.test(a.toString()))return!1;var b=a.getProtocol();return b!=="http"&&b!=="https"?!1:!o(a)}function s(a){var b="#",d=null;a instanceof c("URI")?b=a.toString():typeof a==="string"&&a!==""&&a!=="#"?b=a:typeof a==="object"&&a!==null?(b=a.url.toString(),d=a.shimhash?a.shimhash.toString():d):(b="#",d=null);return c("URI").isValidURI(b)?[new(c("URI"))(b),d]:[null,d]}var t=new RegExp("^(l|lm|h)\\..*$","i");function u(a){if(c("killswitch")("LINK_UPGRADE_UNSHIMMED_JS"))return null;if(a.getProtocol()!=="http")return null;if(!o(a))return null;return t.test(a.getDomain())?null:a.setProtocol("https")}function v(a){return a.getProtocol()===""||a.getDomain()===""&&a.getPort()===""?!1:!0}function w(a){if(!v(a))return!1;var b=c("LinkshimHandlerConfig").current_domain;if(b===""){b="."+b;return a.getDomain().endsWith(b)}return!0}function x(a,b){var d=null,e=!1;a=a!==null&&a instanceof c("URI")?a:new(c("URI"))("#");var f=w(a),g=f===!0;b=b||(f===!0?"_blank":null);var h=c("LinkshimHandlerConfig").use_rel_no_opener&&b==="_blank";return[a,g,h,b,d,e,f]}function y(a,b,e,f){if(a!==null&&a instanceof c("URI")){if(!c("killswitch")("LINK_PARSES_SHIMHASH_FROM_LINKSHIM")&&c("isLinkshimURI")(a)){var g=a.getQueryData()[c("LinkshimHandlerConfig").linkshim_url_param],h=a.getQueryData()[c("LinkshimHandlerConfig").linkshim_enc_param];c("URI").isValidURI(g)&&(a=new(c("URI"))(g),b==null&&(b=h))}g=c("LinkshimHandlerConfig").click_ids;if(!c("killswitch")("LINKSHIM_ADD_CLICK_ID_PARAM")&&g!=null&&g.length>0){h=Math.floor(c("Random").random()*g.length);g=g[h];a=d("ClickIDParameterUtils").appendClickIDQueryParam(a,g)}}else a=new(c("URI"))("#");b==null&&r(a)&&(b=c("LinkshimHandlerConfig").link_react_default_hash);h=u(a);h!=null&&(a=h);g=b!=null;h=e||(b!==null?"_blank":null);e=!!f;c("LinkshimHandlerConfig").onion_always_shim&&n(a)&&(e=!1);f=c("LinkshimHandlerConfig").use_rel_no_opener&&b!==null&&h==="_blank";var i=w(a);return[a,g,f,h,b,e,i]}a=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var d=b.prototype;d.render=function(){var a=this.props;a.allowunsafehref;var b=a.s,d=a.href,e=a.linkRef,f=a.target;a=babelHelpers.objectWithoutPropertiesLoose(a,["allowunsafehref","s","href","linkRef","target"]);d=s(d);var g=d[0];d=d[1];d=c("LinkshimHandlerConfig").is_linkshim_supported?y(g,d,f,b):x(g,f);b=d[0];g=d[1];f=d[2];var i=d[3],j=d[4],k=d[5];d=d[6];var l=null;!c("LinkshimHandlerConfig").is_linkshim_supported&&d&&(l=c("LinkshimHandlerConfig").non_linkshim_lnfb_mode);return h.jsx(c("AbstractLink.react"),babelHelpers["extends"]({},a,{href:b,linkRef:e,nofollow:g,noopener:f,shimhash:j,target:i,isSafeToSkipShim:k,dataLnfbMode:l,isLinkshimSupported:c("LinkshimHandlerConfig").is_linkshim_supported}))};return b}(h.Component);g["default"]=a}),98);