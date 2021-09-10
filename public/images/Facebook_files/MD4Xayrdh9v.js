if (self.CavalryLogger) { CavalryLogger.start_js(["dtn+9im"]); }

__d("GroupsCometJoinedActionMenuQuery.graphql",["relay-runtime"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"groupID"}],b=[{kind:"Variable",name:"id",variableName:"groupID"}],c={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},d=[{kind:"Literal",name:"supported",value:["GroupLeaveSubgroupAction"]}],e={kind:"InlineFragment",selections:[{args:null,documentName:"GroupsCometJoinedActionMenuQuery_group_leave_action",fragmentName:"GroupsCometLeaveSubgroupActionMenuItem_action",fragmentPropName:"action",kind:"ModuleImport"}],type:"GroupLeaveSubgroupAction",abstractKey:null},f={args:null,documentName:"GroupsCometJoinedActionMenuQuery",fragmentName:"GroupsCometFollowActionMenuItem_group",fragmentPropName:"group",kind:"ModuleImport"},g={alias:null,args:null,kind:"ScalarField",name:"viewer_join_state",storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"GroupsCometJoinedActionMenuQuery",selections:[{alias:null,args:b,concreteType:"Group",kind:"LinkedField",name:"group",plural:!1,selections:[c,{alias:null,args:d,concreteType:null,kind:"LinkedField",name:"leave_action",plural:!1,selections:[e],storageKey:'leave_action(supported:["GroupLeaveSubgroupAction"])'},{alias:null,args:null,concreteType:"Group",kind:"LinkedField",name:"if_viewer_can_change_follow_setting",plural:!1,selections:[f],storageKey:null},g,{args:null,kind:"FragmentSpread",name:"GroupsCometLeaveActionMenuItem_group"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"GroupsCometJoinedActionMenuQuery",selections:[{alias:null,args:b,concreteType:"Group",kind:"LinkedField",name:"group",plural:!1,selections:[c,{alias:null,args:d,concreteType:null,kind:"LinkedField",name:"leave_action",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},e],storageKey:'leave_action(supported:["GroupLeaveSubgroupAction"])'},{alias:null,args:null,concreteType:"Group",kind:"LinkedField",name:"if_viewer_can_change_follow_setting",plural:!1,selections:[f,c],storageKey:null},g,{alias:null,args:null,kind:"ScalarField",name:"can_viewer_see_sole_admin_treatment",storageKey:null},{alias:null,args:[{kind:"Literal",name:"sentance_case",value:!0}],concreteType:"TextWithEntities",kind:"LinkedField",name:"leave_text",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:"leave_text(sentance_case:true)"}],storageKey:null}]},params:{id:"6155718987779196",metadata:{},name:"GroupsCometJoinedActionMenuQuery",operationKind:"query",text:null}}}();a.params.id!=null&&b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a}),null);
__d("GroupsCometJoinedActionMenu.react",["CometMenuBase.react","CometPopover.react","CometRelay","CometSeparatorMenuItem.react","GroupsCometJoinedActionMenuQuery.graphql","GroupsCometLeaveActionMenuItem.react","GroupsCometManageNotificationsActionMenuItem.react","react","useNullthrowsViolation"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){var e=a.props,f=e.onClose,g=e.onNotifChange;e=e.onPressNotifItem;a=a.queries.queryReference;a=d("CometRelay").usePreloadedQuery(h!==void 0?h:h=b("GroupsCometJoinedActionMenuQuery.graphql"),a);a=a.group;var j=c("useNullthrowsViolation")(a),k=c("useNullthrowsViolation")(a==null?void 0:a.id),l=(a==null?void 0:a.if_viewer_can_change_follow_setting)?i.jsx(d("CometRelay").MatchContainer,{match:a==null?void 0:a.if_viewer_can_change_follow_setting,props:{onClose:f}},"GroupsCometFollowActionMenuItem"):null;f=(a==null?void 0:a.leave_action)!=null?i.jsx(d("CometRelay").MatchContainer,{match:a==null?void 0:a.leave_action,props:{onClose:f}},"GroupsCometLeaveActionMenuItem"):i.jsx(c("GroupsCometLeaveActionMenuItem.react"),{group:j},"GroupsCometDefaultLeaveActionMenuItem");j=(a==null?void 0:a.viewer_join_state)==="MEMBER";a=j?f:null;return i.jsx(c("CometPopover.react"),{role:"menu",withArrow:!0,children:i.jsx("div",{className:"geg40m2u",children:i.jsxs(c("CometMenuBase.react"),{role:"menu",children:[i.jsx(c("GroupsCometManageNotificationsActionMenuItem.react"),{groupID:k,onPress:e,onSave:g}),l,i.jsx(c("CometSeparatorMenuItem.react"),{}),a]})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("LWICometDateFormatUtils",["formatDate"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var b=new Date().getFullYear(),d=typeof a==="number"?new Date(a*1e3).getFullYear():a.getFullYear();d=d===b?"M j":"M j, Y";return c("formatDate")(a,d)}g.getPrettyDateString=a}),98);