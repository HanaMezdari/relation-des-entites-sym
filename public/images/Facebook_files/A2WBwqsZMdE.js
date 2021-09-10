if (self.CavalryLogger) { CavalryLogger.start_js(["sfW7+xE"]); }

__d("TahoeTypedLogger",["Banzai","GeneratedLoggerUtils"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1={}}var c=a.prototype;c.log=function(a){b("GeneratedLoggerUtils").log("logger:TahoeLoggerConfig",this.$1,b("Banzai").BASIC,a)};c.logVital=function(a){b("GeneratedLoggerUtils").log("logger:TahoeLoggerConfig",this.$1,b("Banzai").VITAL,a)};c.logImmediately=function(a){b("GeneratedLoggerUtils").log("logger:TahoeLoggerConfig",this.$1,{signal:!0},a)};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setChainDepth=function(a){this.$1.chain_depth=a;return this};c.setChainingContextIdentifier=function(a){this.$1.chaining_context_identifier=a;return this};c.setEvent=function(a){this.$1.event=a;return this};c.setIsAutoplaying=function(a){this.$1.is_autoplaying=a;return this};c.setMediaID=function(a){this.$1.media_id=a;return this};c.setUpNextMediaID=function(a){this.$1.up_next_media_id=a;return this};c.setUpNextPosition=function(a){this.$1.up_next_position=a;return this};return a}();c={chain_depth:!0,chaining_context_identifier:!0,event:!0,is_autoplaying:!0,media_id:!0,up_next_media_id:!0,up_next_position:!0};f["default"]=a}),66);
__d("CometGamingFollowLifecycleStrings",["fbt"],(function(a,b,c,d,e,f,g,h){"use strict";a=h._("All Videos");b=h._("All Live Notifications");c=h._("Highlights");d=h._("Suggested Live Notifications");e=h._("None");f=h._("No Live Notifications");var i=h._("Receive all video notifications from this Page."),j=h._("You'll get notified when this Page goes live."),k=h._("Receive suggested video notifications from this Page."),l=h._("You'll get suggested notifications from this Page."),m=h._("Turn off notifications from this Page."),n=h._("You won't get notified when this Page goes live."),o=h._("Video Notifications"),p=h._("You'll stop seeing posts in your News Feed."),q=h._("You won't see posts from this Page in News Feed."),r=h._("Unfollow");h=h._("Follow");g.NOTIF_ALL_VIDEOS=a;g.NOTIF_ALL_VIDEOS_TAHOE=b;g.NOTIF_HIGHLIGHTS=c;g.NOTIF_HIGHLIGHTS_TAHOE=d;g.NOTIF_NONE=e;g.NOTIF_NONE_TAHOE=f;g.NOTIF_ALL_VIDEOS_DESC=i;g.NOTIF_ALL_VIDEOS_DESC_TAHOE=j;g.NOTIF_HIGHLIGHTS_DESC=k;g.NOTIF_HIGHLIGHTS_DESC_TAHOE=l;g.NOTIF_NONE_DESC=m;g.NOTIF_NONE_DESC_TAHOE=n;g.NOTIF_MENU_TITLE=o;g.UNFOLLOW_DESC=p;g.UNFOLLOW_DESC_TAHOE=q;g.UNFOLLOW=r;g.FOLLOW=h}),98);
__d("GamingVideoDestinationLoggingContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b={external_entrypoint:"unknown",surface:"unknown"};c=a.createContext(b);g["default"]=c}),98);
__d("GamingDestinationTypedLoggerLite",["generateLiteTypedLogger"],(function(a,b,c,d,e,f){"use strict";e.exports=b("generateLiteTypedLogger")("logger:GamingDestinationLoggerConfig")}),null);
__d("useGamingVideoDestinationEventLogger",["GamingDestinationTypedLoggerLite","GamingVideoDestinationLoggingContext","react"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useCallback,i=b.useContext;function a(){var a=i(c("GamingVideoDestinationLoggingContext")),b=h(function(b,d){c("GamingDestinationTypedLoggerLite").log(babelHelpers["extends"]({event:b},a,d))},[a]),d=h(function(a){b("click",a)},[b]),e=h(function(a){b("impression",a)},[b]);return{logClick:d,logEvent:b,logImpression:e}}g["default"]=a}),98);
__d("useVideoPlayerCometTahoeMouseInteractions",["VideoPlayerHooks","useVideoPlayerClickToPauseInteraction","useVideoPlayerClickToPlayInteraction"],(function(a,b,c,d,e,f,g){"use strict";function a(a){a=a===void 0?{}:a;a=a.shouldUnmuteOnPlay;var b=d("VideoPlayerHooks").useEnded(),e=d("VideoPlayerHooks").usePlaying();a=c("useVideoPlayerClickToPlayInteraction")({shouldUnmute:a});var f=c("useVideoPlayerClickToPauseInteraction")();e=e?f:a;return b?null:e}g["default"]=a}),98);
__d("validatePlayerSuborigin",[],(function(a,b,c,d,e,f){"use strict";function a(a){return typeof a==="string"?a:null}f["default"]=a}),66);
__d("CometTahoeSidepaneContext.react",["$InternalEnum","emptyFunction","react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react").createContext;e=b("$InternalEnum")({GENERIC:"generic",WOODHENGE:"woodhenge"});f=a({activeSidepane:e.GENERIC,setActiveSidepane:function(a){return c("emptyFunction")()}});g.CometTahoeSidepaneType=e;g.context=f}),98);
__d("CometTahoeUpNextVideoContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react").createContext;b=a({setUpNextChainingCursor:function(){},setUpNextTrackingCode:function(){},setUpNextVideoID:null,upNextChainingCursor:null,upNextTrackingCode:null,upNextVideoID:null});g["default"]=b}),98);
__d("CometTahoeWoodhengeContext.react",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react").createContext;b=a({paymentSucceeded:!1,setPaymentSucceeded:function(a){}});g["default"]=b}),98);
__d("CometVideoHomeInjectionPortalingProvider.react",["CometVideoHomeInjectionPortalingContext","GlobalVideoPortsID","react","useRoutePassthroughProps","validatePlayerSuborigin"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useMemo;function a(a){var b=a.children,e=a.injectedVideoID;a=c("useRoutePassthroughProps")();var f=d("GlobalVideoPortsID").ensureVideoID(a==null?void 0:a.portableVideoID),g=(a==null?void 0:a.portalingRouteTracePolicy)!=null?String(a==null?void 0:a.portalingRouteTracePolicy):null,j=c("validatePlayerSuborigin")(a==null?void 0:a.portalingSubOrigin);a=i(function(){return{initialTracePolicy:g,injectedVideoID:e,portableVideoID:f,subOrigin:j}},[g,e,f,j]);return h.jsx(c("CometVideoHomeInjectionPortalingContext").Provider,{value:a,children:b})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometVideoCommentComposerGlimmer.react",["BaseGlimmer.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){a=a.index;return h.jsx("div",{className:"j9ispegn pmk7jnqg dhix69tm bi6gxh9e wkznzc2l kvgmc6g5 n7fi1qx3 i09qtzwb",children:h.jsxs("div",{className:"j83agx80 bp9cbjyn",children:[h.jsx(c("BaseGlimmer.react"),{className:"q676j6op oi9244e8 qypqp5cg pfnyh3mw spb7xbtv bkmhp75w emlxlaya s45kfl79",index:a}),h.jsx(c("BaseGlimmer.react"),{className:"l5sxq0ai tv7at329 buofh1pr gob819ct ols5edhi gmcszhul emml16de",index:a})]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometVideoProfileInfoGlimmer.react",["BaseGlimmer.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.index;a=a.showVideoInfo;a=a===void 0?!0:a;return h.jsxs("div",{className:"cbu4d94t j83agx80",children:[h.jsxs("div",{className:"j83agx80",children:[h.jsx(c("BaseGlimmer.react"),{className:"go5t5npl oi9244e8 hxdsxuhi spb7xbtv bkmhp75w emlxlaya s45kfl79",index:b}),h.jsxs("div",{className:"taijpn5t cbu4d94t j83agx80",children:[h.jsx(c("BaseGlimmer.react"),{className:"elpiyq4v bi6gxh9e cyypbtt7 kzx2olss aot14ch1 p86d2i9g beltcj47",index:b}),h.jsx(c("BaseGlimmer.react"),{className:"i7o4yfgj cyypbtt7 kzx2olss aot14ch1 p86d2i9g beltcj47",index:b})]})]}),a&&h.jsx(c("BaseGlimmer.react"),{className:"f4c7eilb n1l5q3vz jnigpg78 ns4ygwem fykbt5ly hgaippwi fni8adji",index:b})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometTahoeUpNextItemGlimmer.react",["BaseGlimmer.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(){return h.jsxs("div",{className:"tr9rh885 j83agx80",children:[h.jsx(c("BaseGlimmer.react"),{className:"m7fg4r8v tvfksri0 ic2jb53e qttc61fc ihh4hy1g kdgqqoy6 jk6sbkaj",index:0}),h.jsxs("div",{children:[h.jsx(c("BaseGlimmer.react"),{className:"bow6oqyw gl3lb2sf l82x9zwi uo3d90p7 pw54ja7n ue3kfks5",index:0}),h.jsx(c("BaseGlimmer.react"),{className:"nx96mzau ku2m03ct cyypbtt7 kzx2olss aot14ch1 p86d2i9g beltcj47",index:0}),h.jsx(c("BaseGlimmer.react"),{className:"lelwyktv ku2m03ct cyypbtt7 kzx2olss aot14ch1 p86d2i9g beltcj47",index:0})]})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometTahoeUpNextGlimmer.react",["BaseGlimmer.react","CometTahoeUpNextItemGlimmer.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=3;function a(){return h.jsxs("div",{className:"cbu4d94t j83agx80",children:[h.jsx(c("BaseGlimmer.react"),{className:"bow6oqyw gl3lb2sf l82x9zwi uo3d90p7 pw54ja7n ue3kfks5",index:0}),Array(i).fill().map(function(a,b){return h.jsx(c("CometTahoeUpNextItemGlimmer.react"),{},b)})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometTahoeSidePaneGlimmer.react",["CometTahoeUpNextGlimmer.react","CometVideoCommentComposerGlimmer.react","CometVideoProfileInfoGlimmer.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(){return h.jsxs("div",{className:"dhix69tm sjgh65i0 wkznzc2l tr9rh885 cbu4d94t j83agx80",children:[h.jsx("div",{className:"tfnaxnde",children:h.jsx(c("CometVideoProfileInfoGlimmer.react"),{index:0})}),h.jsx(c("CometTahoeUpNextGlimmer.react"),{}),h.jsx("div",{className:"pmk7jnqg lfi1tu6t",children:h.jsx(c("CometVideoCommentComposerGlimmer.react"),{index:0})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("VideoSharingOptionClickedFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1744466");c=b("FalcoLoggerInternal").create("video_sharing_option_clicked",a);e.exports=c}),null);
__d("VideoSharingOptionImpressionFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1744467");c=b("FalcoLoggerInternal").create("video_sharing_option_impression",a);e.exports=c}),null);
__d("VideoHomeShareUtils",["VideoSharingOptionClickedFalcoEvent","VideoSharingOptionImpressionFalcoEvent"],(function(a,b,c,d,e,f,g){"use strict";a=function(a){var b=a.player_origin,d=a.reaction_video_channel_type,e=a.video_player_format,f=babelHelpers["extends"]({},a,{player_origin:b==null?void 0:b.toString(),reaction_video_channel_type:d==null?void 0:d.toString(),video_player_format:e==null?void 0:e.toString()});c("VideoSharingOptionImpressionFalcoEvent").log(function(){return f})};b=function(a){var b=a.player_origin,d=a.reaction_video_channel_type,e=a.video_player_format,f=babelHelpers["extends"]({},a,{player_origin:b==null?void 0:b.toString(),reaction_video_channel_type:d==null?void 0:d.toString(),video_player_format:e==null?void 0:e.toString()});c("VideoSharingOptionClickedFalcoEvent").log(function(){return f})};g.logExternalShareOptionImpression=a;g.logExternalShareOptionClick=b}),98);
__d("VideoSharingPermalinkLandingFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1744468");c=b("FalcoLoggerInternal").create("video_sharing_permalink_landing",a);e.exports=c}),null);
__d("CometVideoHomeShareUtils",["ConstUriUtils","VideoHomeShareUtils","VideoSharingPermalinkLandingFalcoEvent"],(function(a,b,c,d,e,f,g){"use strict";var h="extid";a=function(a){var b=d("ConstUriUtils").getUri(window.location.href),c=(b==null?void 0:b.getQueryParam(h))!=null;b!=null&&c&&i(babelHelpers["extends"]({},a,{url:b.toString()}))};var i=function(a){c("VideoSharingPermalinkLandingFalcoEvent").log(function(){return a})};f.exports={logExternalShareOptionClick:d("VideoHomeShareUtils").logExternalShareOptionClick,logExternalShareOptionImpression:d("VideoHomeShareUtils").logExternalShareOptionImpression,logPermalinkLandingFromSharing:i,logPermalinkLandingFromSharingIfQueryParamExists:a,sharingTrackingParam:h}}),34);
__d("randomShuffle",["randomInt"],(function(a,b,c,d,e,f){function a(a){for(var c=a.length-1;c>0;c--){var d=b("randomInt").call(this,c+1);if(d!=c){var e=a[d];a[d]=a[c];a[c]=e}}return a}f["default"]=a}),66);