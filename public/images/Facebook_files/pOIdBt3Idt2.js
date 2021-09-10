if (self.CavalryLogger) { CavalryLogger.start_js(["\/BB2haN"]); }

__d("GroupsCometFeedRightRailSurfaceHighlights_viewer.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={kind:"Literal",name:"landing_tab",value:"ENGAGE_MAIN"},b={alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null},c={alias:null,args:null,concreteType:null,kind:"LinkedField",name:"notifications",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"badge_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"sender_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"time",storageKey:null},{args:null,kind:"FragmentSpread",name:"GroupsCometNotificationListItem_tabBadge"}],storageKey:null},d=[b,c];return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"GroupsCometFeedRightRailSurfaceHighlights_viewer",selections:[{alias:null,args:null,concreteType:"GroupsTab",kind:"LinkedField",name:"groups_tab",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"GroupsCometNotificationListItem_groupsTab"},{alias:"newHighlights",args:[a,{kind:"Literal",name:"seen_states",value:["NEW"]}],concreteType:"GroupsTabSurfaceHighlights",kind:"LinkedField",name:"highlights",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"badge_identifiers",storageKey:null},b,c],storageKey:'highlights(landing_tab:"ENGAGE_MAIN",seen_states:["NEW"])'},{alias:"seenHighlights",args:[a,{kind:"Literal",name:"seen_states",value:["SEEN"]}],concreteType:"GroupsTabSurfaceHighlights",kind:"LinkedField",name:"highlights",plural:!1,selections:d,storageKey:'highlights(landing_tab:"ENGAGE_MAIN",seen_states:["SEEN"])'},{alias:"unseenHighlights",args:[a,{kind:"Literal",name:"seen_states",value:["UNSEEN"]}],concreteType:"GroupsTabSurfaceHighlights",kind:"LinkedField",name:"highlights",plural:!1,selections:d,storageKey:'highlights(landing_tab:"ENGAGE_MAIN",seen_states:["UNSEEN"])'}],storageKey:null}],type:"Viewer",abstractKey:null}}();e.exports=a}),null);
__d("GroupsCometNotificationListItem_groupsTab.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"GroupsCometNotificationListItem_groupsTab",selections:[{alias:"seenHighlights",args:[{kind:"Literal",name:"landing_tab",value:"ENGAGE_MAIN"},{kind:"Literal",name:"seen_states",value:["SEEN"]}],concreteType:"GroupsTabSurfaceHighlights",kind:"LinkedField",name:"highlights",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"notifications",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"sender_id",storageKey:null}],storageKey:null}],storageKey:'highlights(landing_tab:"ENGAGE_MAIN",seen_states:["SEEN"])'}],type:"GroupsTab",abstractKey:null};e.exports=a}),null);
__d("GroupsCometNotificationListItem_tabBadge.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],b=[{args:null,kind:"FragmentSpread",name:"CometTextWithEntitiesRelay_textWithEntities"}];return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"GroupsCometNotificationListItem_tabBadge",selections:[{alias:null,args:null,kind:"ScalarField",name:"destination_uri",storageKey:null},{alias:null,args:null,concreteType:"TabBadgeImageData",kind:"LinkedField",name:"image_data",plural:!1,selections:a,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"sender_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"time",storageKey:null},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"title",plural:!1,selections:b,storageKey:null},{alias:null,args:null,concreteType:"TabBadgeContextData",kind:"LinkedField",name:"context",plural:!1,selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"text",plural:!1,selections:b,storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"story",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"debug_info",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"serialized_frtp_identifiers",storageKey:null},{alias:null,args:null,concreteType:"Feedback",kind:"LinkedField",name:"feedback",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"comment_count",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"reaction_count",storageKey:null},{alias:null,args:[{kind:"Literal",name:"first",value:3},{kind:"Literal",name:"orderby",value:"COUNT_DESC"}],concreteType:"TopReactionsConnection",kind:"LinkedField",name:"top_reactions",plural:!1,selections:[{alias:null,args:null,concreteType:"TopReactionsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"FeedbackReactionInfo",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:[{kind:"Literal",name:"height",value:16},{kind:"Literal",name:"scale",value:16},{kind:"Literal",name:"width",value:16}],concreteType:"Image",kind:"LinkedField",name:"face_image",plural:!1,selections:a,storageKey:"face_image(height:16,scale:16,width:16)"}],storageKey:null}],storageKey:null}],storageKey:'top_reactions(first:3,orderby:"COUNT_DESC")'}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"post_id",storageKey:null}],storageKey:null}],type:"TabBadge",abstractKey:"__isTabBadge"}}();e.exports=a}),null);
__d("useGroupsCometNotifFeedVisitMutation.graphql",["CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"bookmarkID"},c={defaultValue:null,kind:"LocalArgument",name:"input"},d={defaultValue:null,kind:"LocalArgument",name:"scale"},e={defaultValue:null,kind:"LocalArgument",name:"skipFetchingUnreadCount"},f=[{kind:"Variable",name:"data",variableName:"input"}],g=[{kind:"Literal",name:"seen_states",value:["NEW","UNSEEN"]}],h={alias:null,args:null,kind:"ScalarField",name:"stories_count",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},j={alias:null,args:null,concreteType:"Group",kind:"LinkedField",name:"group",plural:!1,selections:[i],storageKey:null},k={alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},l={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},m={alias:null,args:null,concreteType:null,kind:"LinkedField",name:"bookmarked_node",plural:!1,selections:[l,i],storageKey:null},n={kind:"Literal",name:"bookmark_render_location",value:"COMET_LEFT_NAV"},o={kind:"Variable",name:"scale",variableName:"scale"},p={alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},q=[n];return{fragment:{argumentDefinitions:[a,c,d,e],kind:"Fragment",metadata:null,name:"useGroupsCometNotifFeedVisitMutation",selections:[{alias:null,args:f,concreteType:"ViewerGroupsTabLogGroupVisitResponsePayload",kind:"LinkedField",name:"viewer_groups_tab_log_group_visit",plural:!1,selections:[{alias:null,args:null,concreteType:"Bookmark",kind:"LinkedField",name:"group_bookmark",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometFolderBookmarkListItem_bookmark"}],storageKey:null},{alias:"viewer_for_homepage_unread_count",args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometHomepageBadgeCountClearingMutationHelperShortcuts_viewer"}],storageKey:null},{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:null,concreteType:"GroupsTab",kind:"LinkedField",name:"groups_tab",plural:!1,selections:[{alias:null,args:g,concreteType:"GroupsTabBadgeContentConnection",kind:"LinkedField",name:"badge_content",plural:!1,selections:[{alias:null,args:null,concreteType:"GroupsTabBadgeContentEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{kind:"InlineFragment",selections:[h,j,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"action_link",plural:!1,selections:[k],storageKey:null}],type:"GroupWithNewPostsGroupsTabBadgeContent",abstractKey:null}],storageKey:null}],storageKey:null}],storageKey:'badge_content(seen_states:["NEW","UNSEEN"])'}],storageKey:null}],storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[c,d,a,e],kind:"Operation",name:"useGroupsCometNotifFeedVisitMutation",selections:[{alias:null,args:f,concreteType:"ViewerGroupsTabLogGroupVisitResponsePayload",kind:"LinkedField",name:"viewer_groups_tab_log_group_visit",plural:!1,selections:[{alias:null,args:null,concreteType:"Bookmark",kind:"LinkedField",name:"group_bookmark",plural:!1,selections:[m,{alias:null,args:null,kind:"ScalarField",name:"additonal_profile_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_additonal_profile",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"eligible_for_direct_profile_switching",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"with_core_app_access",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_news_feed",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"section",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"has_user_hidden",storageKey:null},{alias:null,args:[n,{kind:"Literal",name:"site",value:"comet"}],kind:"ScalarField",name:"url",storageKey:'url(bookmark_render_location:"COMET_LEFT_NAV",site:"comet")'},{alias:null,args:null,kind:"ScalarField",name:"tracking",storageKey:null},{alias:null,args:[{kind:"Literal",name:"icon_size",value:"DP36"},o],concreteType:"Image",kind:"LinkedField",name:"bookmark_icon_image",plural:!1,selections:[p],storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:36},{kind:"Literal",name:"icon_style",value:"CASPIAN"},o,{kind:"Literal",name:"width",value:36}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[p,{alias:null,args:null,kind:"ScalarField",name:"is_silhouette",storageKey:null}],storageKey:null},{condition:"skipFetchingUnreadCount",kind:"Condition",passingValue:!1,selections:[{alias:null,args:q,kind:"ScalarField",name:"unread_count",storageKey:'unread_count(bookmark_render_location:"COMET_LEFT_NAV")'}]},{alias:null,args:q,kind:"ScalarField",name:"unread_count_string",storageKey:'unread_count_string(bookmark_render_location:"COMET_LEFT_NAV")'},{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"context_sentence",plural:!1,selections:[{args:null,fragment:b("CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"),kind:"FragmentSpread"}],storageKey:null},i],storageKey:null},{alias:"viewer_for_homepage_unread_count",args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:[{items:[{kind:"Variable",name:"bookmark_ids.0",variableName:"bookmarkID"}],kind:"ListValue",name:"bookmark_ids"},{kind:"Literal",name:"environment",value:"COMET"},{kind:"Literal",name:"folder_id",value:"FAVORITES"},{kind:"Literal",name:"sections",value:["FACEBOOK_APP"]}],concreteType:"BookmarksConnection",kind:"LinkedField",name:"bookmarks",plural:!1,selections:[{alias:null,args:null,concreteType:"BookmarksEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Bookmark",kind:"LinkedField",name:"node",plural:!1,selections:[m,{alias:"bookmark_unread_count",args:q,kind:"ScalarField",name:"unread_count",storageKey:'unread_count(bookmark_render_location:"COMET_LEFT_NAV")'},{alias:"bookmark_unread_count_string",args:q,kind:"ScalarField",name:"unread_count_string",storageKey:'unread_count_string(bookmark_render_location:"COMET_LEFT_NAV")'},i],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:null,concreteType:"GroupsTab",kind:"LinkedField",name:"groups_tab",plural:!1,selections:[{alias:null,args:g,concreteType:"GroupsTabBadgeContentConnection",kind:"LinkedField",name:"badge_content",plural:!1,selections:[{alias:null,args:null,concreteType:"GroupsTabBadgeContentEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[l,{kind:"InlineFragment",selections:[h,j,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"action_link",plural:!1,selections:[l,k],storageKey:null}],type:"GroupWithNewPostsGroupsTabBadgeContent",abstractKey:null}],storageKey:null}],storageKey:null}],storageKey:'badge_content(seen_states:["NEW","UNSEEN"])'}],storageKey:null}],storageKey:null}],storageKey:null}]},params:{id:"4163983923724355",metadata:{},name:"useGroupsCometNotifFeedVisitMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("GroupsCometTabNotifFeedContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext({refs:{current:[]}});g["default"]=b}),98);
__d("GroupsCometCrossGroupFeedRoot.Loading.react",["CometContentArea.react","CometFeedStoryGlimmer.react","CometFeedWidthStyles","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={feedContainer:{marginBottom:"sej5wr8e",marginTop:"dht4glve",maxWidth:"g86cw1v9",minHeight:"h3gjbzrl",paddingTop:"cxgpxx05",paddingEnd:"dflh9lhu",paddingBottom:"sj5x9vvc",paddingStart:"scb9dxdr"}},j=d("CometFeedWidthStyles").getFeedWidthStyles();function a(){return h.jsx(c("CometContentArea.react"),{verticalAlign:"middle",children:h.jsxs("div",{className:c("stylex")(i.feedContainer,j.feedContainer),children:[h.jsx(c("CometFeedStoryGlimmer.react"),{}),h.jsx(c("CometFeedStoryGlimmer.react"),{})]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("GroupsCometFeedLayoutWithRightRail.react",["CometResponsiveColumns.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={secondary:{"@media (max-width: 1210px)":{display:"n99bqvw7"},"@media (min-width: 1211px) and (max-width: 1284px)":{maxWidth:"g2wm7t24"},"@media (min-width: 1285px) and (max-width: 1360px)":{maxWidth:"kcmanqeg"}}};function a(a){var b=a.feedContents;a=a.secondaryContents;return h.jsxs(d("CometResponsiveColumns.react").Container,{containerWidth:"DEFAULT",reverseColumns:!0,children:[h.jsx(d("CometResponsiveColumns.react").Column,{columnType:"FEED",children:b}),a==null?null:h.jsx(d("CometResponsiveColumns.react").Column,{columnType:"SECONDARY",xstyle:i.secondary,children:a})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("GroupsCometFeedRightRailCard.react",["CometCard.react","CometErrorBoundary.react","CometUnit.react","CometUnitHeader.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.children,d=a.headerActionText,e=a.headerActionUrl,f=a.headline;a=a.subtitle;return h.jsx(c("CometErrorBoundary.react"),{children:h.jsx("div",{className:"sjgh65i0",children:h.jsx(c("CometCard.react"),{background:"white",dropShadow:1,children:h.jsx(c("CometUnit.react"),{header:h.jsx(c("CometUnitHeader.react"),{action:d,actionLinkProps:{url:e},body:a,headline:f,level:3}),paddingBottom:16,children:b})})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("GroupsCometErrorState.react",["fbt","GroupsCometTabFalcoEventLog","NullStateGeneral","TetraButton.react","TetraNullState.react","XCometGroupsTabEngageControllerRouteBuilder","XCometHomeControllerRouteBuilder","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=c("XCometGroupsTabEngageControllerRouteBuilder").buildURL({}),k=c("XCometHomeControllerRouteBuilder").buildURL({}),l=h._("Go to News Feed"),m=h._("Go to Groups Feed");function a(a){a=a.subTab;d("GroupsCometTabFalcoEventLog").useLogGroupsTabImpressionDeferred("GroupsCometCrossGroupFeedEndOfFeed",a);a=a==="notifications";return i.jsx("div",{className:"sjgh65i0",children:i.jsx(c("TetraNullState.react"),{action:i.jsx(c("TetraButton.react"),{label:a?m:l,linkProps:{url:a?j:k}}),body:h._("This may be because of a technical error we are working to fix."),headline:h._("This Page Isn't Available Right Now"),icon:c("NullStateGeneral")})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("GroupsCometNotificationListItem.react",["fbt","ix","CometBadge.react","CometBoldedEntityRenderer","CometColumn.react","CometColumnItem.react","CometEmojiTransform","CometEmoticonTransform","CometListCellStrict.react","CometMiddot.react","CometNumber.react","CometRelativeTimestamp.react","CometRelay","CometRow.react","CometRowItem.react","CometTextWithEntitiesRelay.react","FBLogger","GroupsCometNotificationListItem_groupsTab.graphql","GroupsCometNotificationListItem_tabBadge.graphql","GroupsCometTabFalcoEventLog","TetraOverlappingFacepileUnstyled.react","TetraText.react","TetraTextPairing.react","XCometGroupDiscussionControllerRouteBuilder","cr:98","fbicon","qex","react","stylex","useNullthrowsViolation"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k,l=d("react");e=d("react");var m=e.useCallback,n=e.useState,o=(e=c("qex")._("496"))!=null?e:!1,p=(e=c("qex")._("497"))!=null?e:!1,q=(e=c("qex")._("498"))!=null?e:!1,r=(e=c("qex")._("513"))!=null?e:!1,s=(e=c("qex")._("29"))!=null?e:!1,t={"*":[c("CometBoldedEntityRenderer")]},u=[c("CometEmoticonTransform")(),c("CometEmojiTransform")()],v={icons:{paddingEnd:"ph5uu5jm"},info:{paddingBottom:"e5nlhep0"},middot:{paddingEnd:"ph5uu5jm",paddingStart:"b3onmgus"}};function a(a){var e,f,g,h,o=a.groupsTab,p=a.isHub,q=a.logEventName,v=a.onClick,z=a.position;a=a.tabBadge;a=d("CometRelay").useFragment(j!==void 0?j:j=b("GroupsCometNotificationListItem_tabBadge.graphql"),a);o=d("CometRelay").useFragment(k!==void 0?k:k=b("GroupsCometNotificationListItem_groupsTab.graphql"),o);a=(a=a)!=null?a:{};var A=a.context,B=a.destination_uri,C=a.image_data,D=a.sender_id,E=a.story,F=a.time;a=a.title;e=E==null?void 0:(e=E.feedback)==null?void 0:e.comment_count;f=E==null?void 0:(f=E.feedback)==null?void 0:f.reaction_count;var G=E==null?void 0:E.post_id;A=A==null?void 0:A.text;g=E==null?void 0:(g=E.feedback)==null?void 0:(g=g.top_reactions)==null?void 0:g.edges;C=C==null?void 0:C.uri;h=c("useNullthrowsViolation")((h=/^\d+(?=;)/.exec((h=D)!=null?h:""))==null?void 0:h[0]);var H=m(function(){J(!1),d("GroupsCometTabFalcoEventLog").logGroupsTabFalcoEventDeferred({component:"GroupsCometNotificationListItem",event_type:"click.notif",metadata:q,position:String(z)}),v&&v()},[q,v,z]);G=p?c("XCometGroupDiscussionControllerRouteBuilder").buildURL({idorvanity:h,multi_permalinks:(h=G)!=null?h:""}):B;var I=[];g!=null&&g.forEach(function(a){var b;((b=a.node)==null?void 0:(b=b.face_image)==null?void 0:b.uri)!=null&&I.push({source:{uri:a.node.face_image.uri}})});o=o==null?void 0:(h=o.seenHighlights)==null?void 0:(g=h.notifications)==null?void 0:g.some(function(a){return(a==null?void 0:a.sender_id)===D});h=n(!o);g=h[0];var J=h[1];if(B==null||A==null||a==null)throw c("FBLogger")("community_home_comet").mustfixThrow("destinationUri, header, or title is null");return l.jsx(c("CometListCellStrict.react"),{addOnEnd:r&&b("cr:98")?{addOn:l.jsx(b("cr:98"),{feedLocation:"GROUPS_SURFACE_HIGHLIGHTS",id:E==null?void 0:E.id,serializedFRTPIdentifiers:E==null?void 0:E.serialized_frtp_identifiers,storyDebugInfo:E==null?void 0:E.debug_info}),type:"body"}:null,addOnStart:C!=null?{shape:"circle",size:60,source:{uri:C},type:"profile-photo"}:{icon:d("fbicon")._(i("510948"),24),size:60,type:"contained-icon"},body:l.jsxs(c("CometColumn.react"),{children:[l.jsx(c("CometColumnItem.react"),{children:l.jsx(w,{header:A})}),l.jsx(c("CometColumnItem.react"),{expanding:!0,children:l.jsx(c("TetraText.react"),{color:g?"primary":"secondary",numberOfLines:1,type:"body3",children:l.jsx(c("CometTextWithEntitiesRelay.react"),{renderers:t,textWithEntities:a,transforms:u})})})]}),bodyColor:g?"primary":"secondary",bodyLineLimit:3,linkProps:{url:p&&s?null:G},meta:l.jsxs(c("CometColumn.react"),{children:[l.jsx(c("CometColumnItem.react"),{children:l.jsx(y,{commentCount:e,icons:I,reactionCount:f})}),l.jsx(c("CometColumnItem.react"),{children:l.jsx(x,{isHighlight:g,time:F})})]}),onPress:H})}a.displayName=a.name+" [from "+f.id+"]";var w=function(a){a=a.header;return!o||a==null?null:l.jsx(c("TetraTextPairing.react"),{body:l.jsx(c("CometRow.react"),{align:"start",paddingHorizontal:0,paddingVertical:0,spacing:8,children:l.jsx(c("CometRowItem.react"),{expanding:!0,verticalAlign:"center",children:l.jsx(c("TetraText.react"),{color:"secondary",numberOfLines:1,type:"body4",children:l.jsx(c("CometTextWithEntitiesRelay.react"),{renderers:t,textWithEntities:a,transforms:u})})})}),bodyColor:"secondary",level:4})},x=function(a){var b=a.isHighlight;a=a.time;return a==null?null:l.jsx(c("TetraText.react"),{color:b?"highlight":"secondary",type:"body4",children:l.jsxs("span",{children:[b?l.jsx(c("CometBadge.react"),{color:"blue"}):l.jsx(c("CometBadge.react"),{color:"gray"}),l.jsx(c("CometRelativeTimestamp.react"),{date:new Date(a*1e3)})]})})},y=function(a){var b=a.commentCount,d=a.icons;a=a.reactionCount;var e=!p||b==null||b===0,f=!q||a==null||a===0||d.length===0,g=e&&f;return g?null:l.jsxs(c("CometRow.react"),{align:"start",paddingHorizontal:0,paddingVertical:0,spacing:0,xstyle:v.info,children:[f?null:l.jsx(c("CometRowItem.react"),{children:l.jsx(A,{icons:d,reactionCount:(g=a)!=null?g:0})}),e?null:l.jsx(c("CometRowItem.react"),{children:l.jsx(z,{commentCount:(d=b)!=null?d:0,reactionsDidNotRender:f})})]})},z=function(a){var b=a.commentCount;a=a.reactionsDidNotRender;return l.jsxs(c("CometRow.react"),{align:"start",paddingHorizontal:0,paddingVertical:0,spacing:0,children:[l.jsx(c("CometRowItem.react"),{children:a?null:l.jsx(c("CometMiddot.react"),{className:c("stylex")(v.middot)})}),l.jsx(c("CometRowItem.react"),{children:l.jsx(c("TetraText.react"),{color:"secondary",type:"body4",children:l.jsx("span",{children:h._({"*":"{number} Comments","_1":"1 Comment"},[h._plural(b,"number")])})})})]})},A=function(a){var b=a.icons;a=a.reactionCount;return l.jsxs(c("CometRow.react"),{align:"start",paddingHorizontal:0,paddingVertical:0,spacing:0,children:[l.jsx(c("CometRowItem.react"),{children:l.jsx("div",{className:c("stylex")(v.icons),children:l.jsx(c("TetraOverlappingFacepileUnstyled.react"),{align:"start",count:b.length,items:b,size:16})})}),l.jsx(c("CometRowItem.react"),{children:l.jsx(c("TetraText.react"),{color:"secondary",type:"body4",children:l.jsx(c("CometNumber.react"),{decimals:0,number:a})})})]})};g["default"]=a}),98);
__d("XCometGroupsTabNotificationsHubControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/groups/notifications/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("useGroupsCometNotifFeedVisitMutation",["CometRelay","useGroupsCometNotifFeedVisitMutation.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(){var a=d("CometRelay").useMutation(h!==void 0?h:h=b("useGroupsCometNotifFeedVisitMutation.graphql"));a=a[0];return a}g["default"]=a}),98);
__d("GroupsCometFeedRightRailSurfaceHighlights.react",["fbt","CometRelay","GroupsCometFeedRightRailCard.react","GroupsCometFeedRightRailSurfaceHighlights_viewer.graphql","GroupsCometNotificationListItem.react","GroupsCometTabFalcoEventLog","GroupsCometTabNotifFeedContext","TetraButton.react","WebPixelRatio","XCometGroupsTabNotificationsHubControllerRouteBuilder","gkx","qex","react","useGroupsCometNotifFeedVisitMutation","useGroupsCometVisitMutation"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react");e=d("react");var k=e.useContext,l=e.useEffect,m=e.useRef,n=e.useState,o=(e=c("qex")._("547"))!=null?e:!1,p=(e=c("qex")._("29"))!=null?e:!1;function a(a){var e=d("CometRelay").useFragment(i!==void 0?i:i=b("GroupsCometFeedRightRailSurfaceHighlights_viewer.graphql"),a.viewer),f=n(""),g=f[0],r=f[1];f=n([]);var s=f[0],t=f[1],u=c("useGroupsCometVisitMutation")(),v=c("useGroupsCometNotifFeedVisitMutation")(),w=k(c("GroupsCometTabNotifFeedContext"));l(function(){var b,c,d;b=(b=e==null?void 0:(b=e.groups_tab)==null?void 0:(b=b.newHighlights)==null?void 0:b.notifications)!=null?b:[];c=(c=e==null?void 0:(c=e.groups_tab)==null?void 0:(c=c.unseenHighlights)==null?void 0:c.notifications)!=null?c:[];d=(d=e==null?void 0:(d=e.groups_tab)==null?void 0:(d=d.seenHighlights)==null?void 0:d.notifications)!=null?d:[];q(b,c,d,a.showAll,r,t)},[]);f=m(((f=e==null?void 0:(f=e.groups_tab)==null?void 0:(f=f.newHighlights)==null?void 0:f.count)!=null?f:0)+((f=e==null?void 0:(f=e.groups_tab)==null?void 0:(f=f.seenHighlights)==null?void 0:f.count)!=null?f:0)+((f=e==null?void 0:(f=e.groups_tab)==null?void 0:(f=f.unseenHighlights)==null?void 0:f.count)!=null?f:0));if(s.length===0)return null;s=s.filter(Boolean).sort(function(a,b){return((b=b.time)!=null?b:0)-((b=a.time)!=null?b:0)}).slice(0,a.showAll?s.length:2).map(function(b,f){return j.jsx(c("GroupsCometNotificationListItem.react"),{groupsTab:e==null?void 0:e.groups_tab,isHub:a.showAll,logEventName:"[click][tab][surface highlight][item]",onClick:function(){var e;e=(e=/^\d+(?=;)/.exec((e=b==null?void 0:b.sender_id)!=null?e:""))==null?void 0:e[0];if(e==null)return;!a.showAll&&o?(u({onCompleted:function(b,c){var d;if(c!=null)return;c=(c=b==null?void 0:(c=b.viewer_groups_tab_log_group_visit)==null?void 0:(c=c.viewer)==null?void 0:(c=c.groups_tab)==null?void 0:(c=c.newHighlights)==null?void 0:c.notifications)!=null?c:[];d=(d=b==null?void 0:(d=b.viewer_groups_tab_log_group_visit)==null?void 0:(d=d.viewer)==null?void 0:(d=d.groups_tab)==null?void 0:(d=d.seenHighlights)==null?void 0:d.notifications)!=null?d:[];b=(b=b==null?void 0:(b=b.viewer_groups_tab_log_group_visit)==null?void 0:(b=b.viewer)==null?void 0:(b=b.groups_tab)==null?void 0:(b=b.unseenHighlights)==null?void 0:b.notifications)!=null?b:[];q(c,b,d,a.showAll,r,t)},variables:{bookmarkID:e,input:{badge_entry_point:"GROUPS_TAB_MAIN",group_id:e},scale:d("WebPixelRatio").get(),skipFetchingUnreadCount:c("gkx")("2252")}}),scrollTo({behavior:"smooth",top:0})):a.showAll&&p&&(v({variables:{bookmarkID:e,input:{badge_entry_point:"GROUPS_TAB_MAIN",group_id:e},scale:d("WebPixelRatio").get(),skipFetchingUnreadCount:c("gkx")("2252")}}),scrollTo({behavior:"smooth",top:w.refs.current[f].offsetTop}))},position:f,tabBadge:b},b.badge_id)});return j.jsx(c("GroupsCometFeedRightRailCard.react"),{headline:g,children:j.jsxs(j.Fragment,{children:[s,a.showAll||f.current<=2?null:j.jsx("div",{className:"discj3wi dati1w0a hv4rvrfc",children:j.jsx(c("TetraButton.react"),{label:h._("Show More"),linkProps:{passthroughProps:{badgeIdentifiers:e==null?void 0:(g=e.groups_tab)==null?void 0:(s=g.newHighlights)==null?void 0:s.badge_identifiers},url:c("XCometGroupsTabNotificationsHubControllerRouteBuilder").buildURL({})},onPress:function(){return d("GroupsCometTabFalcoEventLog").logGroupsTabFalcoEventDeferred({component:"GroupsCometFeedRightRailSurfaceHighlights",event_type:"click.nav",metadata:"notifications"})},reduceEmphasis:!0})})]})})}a.displayName=a.name+" [from "+f.id+"]";var q=function(a,b,c,d,e,f){d?(e(h._("Your Notifications")),f([].concat(a,b,c))):a.length>0?(e(h._("New for you")),f(a)):b.length>0?(e(h._("Earlier Notifications")),f(b)):c.length>0&&(e(h._("Seen Notifications")),f(c))};g["default"]=a}),98);