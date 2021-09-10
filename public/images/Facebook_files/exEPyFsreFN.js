if (self.CavalryLogger) { CavalryLogger.start_js(["3ovbZYb"]); }

__d("GroupsCometColorWrapper_group.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"GroupsCometColorWrapper_group",selections:[{alias:null,args:null,concreteType:"Group",kind:"LinkedField",name:"if_viewer_can_see_expanded_color",plural:!1,selections:[{args:null,documentName:"GroupsCometColorWrapper_group_canSeeExpandedColor",fragmentName:"GroupsCometColorExpandedWrapper_group",fragmentPropName:"group",kind:"ModuleImport"}],storageKey:null},{alias:null,args:null,concreteType:"Group",kind:"LinkedField",name:"if_viewer_cannot_see_expanded_color",plural:!1,selections:[{args:null,documentName:"GroupsCometColorWrapper_group_cannotSeeExpandedColor",fragmentName:"GroupsCometColorDefaultWrapper_group",fragmentPropName:"group",kind:"ModuleImport"}],storageKey:null}],type:"Group",abstractKey:null};e.exports=a}),null);
__d("CometEntityHeaderCoverMediaFooter.react",["CometRow.react","CometRowItem.react","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={footer:{paddingBottom:"ihqw7lf3",paddingTop:"discj3wi",position:"l9j0dhe7"}};function a(a){var b=a.customBackgroundColor,d=a.footer,e=a.footerAlign;a=a.xstyle;return d==null?null:h.jsx("div",{className:c("stylex")(i.footer,a),style:{backgroundColor:b},children:h.jsx(c("CometRow.react"),{align:e,paddingHorizontal:16,paddingTop:0,verticalAlign:"bottom",children:h.jsx(c("CometRowItem.react"),{expanding:!0,children:d})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("GroupsCometCreatePreviewContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b={isPreview:!1};c=a.createContext(b);g["default"]=c}),98);
__d("GroupsCometCreatePreviewDisabledWrapper.react",["GroupsCometCreatePreviewContext","react","stylex","useIsDarkMode"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useContext;function a(a){var b=a.children;a=a.hasPreviewData;a=a===void 0?!1:a;var d=c("useIsDarkMode")(),e=i(c("GroupsCometCreatePreviewContext"));e=e.isPreview;e=e===void 0?!1:e;return h.jsx("div",{className:c("stylex").dedupe(e&&!a&&d?{"filter-1":"l880q9ns"}:{},e&&!a&&!d?{"filter-1":"flc5ov9u"}:null),children:b})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("GroupsCometColorWrapper.react",["CometRelay","GroupsCometColorWrapper_group.graphql","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){var c=a.children,e=a.group,f=a.isDefaultColorApplied;f=f===void 0?!0:f;var g=a.properties;a=a.testid;e=d("CometRelay").useFragment(h!==void 0?h:h=b("GroupsCometColorWrapper_group.graphql"),e);if((e==null?void 0:e.if_viewer_can_see_expanded_color)!=null)return i.jsx(d("CometRelay").MatchContainer,{match:e==null?void 0:e.if_viewer_can_see_expanded_color,props:{children:c,properties:g,testid:a}});return(e==null?void 0:e.if_viewer_cannot_see_expanded_color)&&f?i.jsx(d("CometRelay").MatchContainer,{match:e.if_viewer_cannot_see_expanded_color,props:{children:c}}):c}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useGroupsCometCleanupLocalFeedInlineMessages",["CometRelay","recoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";function a(){var a=d("CometRelay").useRelayEnvironment();return function(b){return d("CometRelay").commitLocalUpdate(a,function(a){a=a.get(b);if(!a){c("recoverableViolation")("Group Feed Inline Message: Could not find group edge in store","groups_comet");return}a.setLinkedRecords([],"local_feed_inline_messages")})}}g["default"]=a}),98);
__d("GroupsCometDiscussionLayout.react",["CometResponsiveColumns.react","gkx","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=c("gkx")("1296384"),j={container:{width:"ecyo15nh"},mainColumn:{flexBasis:"gile2uim",maxWidth:"qmfd67dx"},paddingTop:{paddingTop:"discj3wi"},root:{alignItems:"bp9cbjyn",display:"j83agx80",flexDirection:"cbu4d94t",paddingBottom:"sj5x9vvc",width:"k4urcfbm"},secondaryColumn:{flexBasis:"o387gat7",maxWidth:"qmfd67dx",overflowAnchor:"rek2kq2y"}};function a(a){var b=a.beforeContent,e=a.feed;a=a.secondaryColumn;return h.jsx("div",{className:c("stylex")(j.root),"data-testid":void 0,children:h.jsxs(d("CometResponsiveColumns.react").Container,{containerWidth:"DEFAULT",reverseColumns:!0,xstyle:[j.paddingTop,!i&&j.container],children:[h.jsx(d("CometResponsiveColumns.react").Column,{columnType:i?"FEED":void 0,xstyle:i?void 0:j.mainColumn,children:e}),h.jsx(d("CometResponsiveColumns.react").Column,{columnType:i?"SECONDARY":void 0,xstyle:i?void 0:j.secondaryColumn,children:a}),b&&h.jsx(d("CometResponsiveColumns.react").Column,{columnType:i?"FULL":void 0,children:b})]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useGroupsCometCleanUpLocallyComposedPost",["CometRelay","recoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";function a(){var a=d("CometRelay").useRelayEnvironment();return function(b){return d("CometRelay").commitLocalUpdate(a,function(a){a=a.get(b);if(!a){c("recoverableViolation")("GroupsCometHoistAndRegularFeedSection: Could not find group edge in store","groups_comet");return}a.setLinkedRecords([],"locally_composed_feed_edges")})}}g["default"]=a}),98);
__d("usePreviousSurfaceForGroupLogging",["useRoutePassthroughProps","useRouteReferrer"],(function(a,b,c,d,e,f,g){"use strict";function a(){var a=c("useRoutePassthroughProps")(),b=c("useRouteReferrer")();switch(a==null?void 0:a.ref){case"feed_story":case"actor_hovercard":if((b==null?void 0:b.tracePolicy)==="comet.groups.feed")return"groups_targeted_tab";else if((b==null?void 0:b.tracePolicy)==="comet.home")return"newsfeed";else if((b==null?void 0:b.tracePolicy)==="comet.profile.collection.groups")return"timeline";else return"unknown";case"your_groups":return"other";case"groups_card":if((b==null?void 0:b.tracePolicy)==="comet.groups.discover")return"groups_discover_tab";else if((b==null?void 0:b.tracePolicy)==="comet.home")return"gysj";else return"unknown";case"notification":return"notification";case"bookmark":return"bookmarks";default:return"unknown"}}g["default"]=a}),98);
__d("GroupLeadersEngagementFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1743660");c=b("FalcoLoggerInternal").create("group_leaders_engagement",a);e.exports=c}),null);