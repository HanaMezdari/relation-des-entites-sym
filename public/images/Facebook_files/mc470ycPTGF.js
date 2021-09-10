if (self.CavalryLogger) { CavalryLogger.start_js(["dWwORXd"]); }

__d("CometSavableImage_item.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,concreteType:"Image",kind:"LinkedField",name:"savable_image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometSavableImage_item",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"savable",plural:!1,selections:[a,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"playable_duration",storageKey:null}],type:"Video",abstractKey:null}],storageKey:null},{alias:null,args:null,concreteType:"StoryPointer",kind:"LinkedField",name:"story_pointer",plural:!1,selections:[a],storageKey:null}],type:"ContentCollectionItem",abstractKey:"__isContentCollectionItem"}}();e.exports=a}),null);
__d("CometSavableTitle_savable.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometSavableTitle_savable",selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"savable_title",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null}],type:"Savable",abstractKey:"__isSavable"};e.exports=a}),null);
__d("CometSaveSavableActorImage_actor.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"CometSaveSavableActorImage_actor",selections:[{alias:null,args:[{kind:"Literal",name:"height",value:24},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:24}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null}],type:"Actor",abstractKey:"__isActor"};e.exports=a}),null);
__d("CometSaveSavableAttributes_savable.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometSaveSavableAttributes_savable",selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"savable_attributes",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],storageKey:null}],type:"Savable",abstractKey:"__isSavable"};e.exports=a}),null);
__d("CometSaveSavableLink_savable.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometSaveSavableLink_savable",selections:[{args:null,kind:"FragmentSpread",name:"useSaveSavableLinkProps_savable"}],type:"Savable",abstractKey:"__isSavable"};e.exports=a}),null);
__d("useSaveSavableLinkProps_savable.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useSaveSavableLinkProps_savable",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"savable_permalink",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"savable_default_category",storageKey:null}],type:"Savable",abstractKey:"__isSavable"};e.exports=a}),null);
__d("useShareCollectionItemDialog_savable.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useShareCollectionItemDialog_savable",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'}],type:"Entity",abstractKey:"__isEntity"},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"ExternalUrl",kind:"LinkedField",name:"global_share",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"external_url",storageKey:null}],storageKey:null}],type:"OpenGraphObject",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"share_uri",storageKey:null}],type:"ProductItem",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"story",plural:!1,selections:[{alias:null,args:[{kind:"Literal",name:"site",value:"comet"}],kind:"ScalarField",name:"url",storageKey:'url(site:"comet")'}],storageKey:null}],type:"StoryPointer",abstractKey:null}],type:"Savable",abstractKey:"__isSavable"};e.exports=a}),null);
__d("CometSavePlayableDurationOverlay.react",["ix","TetraIcon.react","TetraText.react","fbicon","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function j(a,b){a=a.toString();return a.length>=b?a:"0".repeat(b-a.length)+a}function k(a){var b=Math.floor(a/3600);a=a-b*3600;var c=Math.floor(a/60);a-=c*60;c=j(c,2)+":"+j(a,2);return b>0?b+":"+c:c}function a(a){a=a.duration;a=k(a);return i.jsxs("div",{className:"k4urcfbm l9j0dhe7 datstx6m taijpn5t j83agx80 bp9cbjyn",children:[i.jsx("div",{className:"f8ljpb73 lbh82i0l rq0escxv b29i7a1s tspa97kx gtmznovl twhnxvtc m5ft8umm j8piplf5 as11vdqa kiv2qpj0 ora8z2hr taijpn5t j83agx80 bp9cbjyn",children:i.jsx(c("TetraIcon.react"),{color:"white",icon:d("fbicon")._(h("582360"),32)})}),i.jsx("div",{className:"pmk7jnqg b3onmgus qt6c0cv9 ph5uu5jm jb3vyjys nqwkvpqi sq6gx45u b5fwa0m2 qrtewk5h labbqbtg qttc61fc ihh4hy1g kdgqqoy6 jk6sbkaj ora8z2hr ndl8hv4t taijpn5t j83agx80 bp9cbjyn",children:i.jsx(c("TetraText.react"),{color:"white",type:"bodyLink4",children:a})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometSavableImage.react",["fbt","CometImageCover.react","CometRelay","CometSavableImage_item.graphql","CometSavePlayableDurationOverlay.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react");function a(a){var e;a=a.item;a=d("CometRelay").useFragment(i!==void 0?i:i=b("CometSavableImage_item.graphql"),a);var f=a.savable;a=a.story_pointer;a=(e=f==null?void 0:(e=f.savable_image)==null?void 0:e.uri)!=null?e:a==null?void 0:(e=a.savable_image)==null?void 0:e.uri;e=a==null?j.jsx("div",{className:"qsy8amke k4urcfbm datstx6m"}):j.jsx(c("CometImageCover.react"),{alt:h._("image"),src:a});f=(a=f==null?void 0:f.playable_duration)!=null?a:0;a=f>0?j.jsx(c("CometSavePlayableDurationOverlay.react"),{duration:f}):null;return j.jsxs("div",{className:"l9j0dhe7 k4urcfbm datstx6m",children:[j.jsx("div",{className:"pmk7jnqg k4urcfbm datstx6m",children:e}),j.jsx("div",{className:"pmk7jnqg k4urcfbm datstx6m",children:a})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometSavableTitle.react",["CometRelay","CometSavableTitle_savable.graphql","TetraText.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){a=a.item;a=d("CometRelay").useFragment(h!==void 0?h:h=b("CometSavableTitle_savable.graphql"),a);a=(a==null?void 0:(a=a.savable_title)==null?void 0:a.text)||"";return i.jsx(c("TetraText.react"),{numberOfLines:2,type:"headlineEmphasized2",children:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometSaveItemGlimmer.react",["BaseGlimmer.react","BaseLoadingStateElement.react","CometCard.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){a=a.hasButtonRow;a=a===void 0?!0:a;return h.jsx(c("BaseLoadingStateElement.react"),{children:h.jsx(c("CometCard.react"),{background:"white",dropShadow:1,children:h.jsxs("div",{className:"dati1w0a ihqw7lf3 hv4rvrfc discj3wi j83agx80",children:[h.jsx("div",{className:"taijpn5t cbu4d94t j83agx80",children:h.jsx(c("BaseGlimmer.react"),{className:"qm714nnf d77eqvpc l82x9zwi uo3d90p7 pw54ja7n ue3kfks5",index:1})}),h.jsxs("div",{className:"k4urcfbm dhix69tm i1fnvgqd cbu4d94t j83agx80",children:[h.jsxs("div",{className:"gt1oanoe qypqp5cg cbu4d94t j83agx80",children:[h.jsx(c("BaseGlimmer.react"),{className:"hy61f1kz ed3p1gfi l82x9zwi uo3d90p7 pw54ja7n ue3kfks5",index:0}),h.jsx(c("BaseGlimmer.react"),{className:"pfqjqu37 n1l5q3vz ed3p1gfi l82x9zwi uo3d90p7 pw54ja7n ue3kfks5",index:0})]}),a&&h.jsx("div",{className:"cbu4d94t j83agx80",children:h.jsx(c("BaseGlimmer.react"),{className:"mwd26vqw gl3lb2sf l82x9zwi uo3d90p7 pw54ja7n ue3kfks5",index:0})})]})]})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometSaveSavableActorImage.react",["CometImageIcon_DEPRECATED.react","CometRelay","CometSaveSavableActorImage_actor.graphql","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){a=a.actor;a=d("CometRelay").useFragment(h!==void 0?h:h=b("CometSaveSavableActorImage_actor.graphql"),a);a=a==null?void 0:(a=a.profile_picture)==null?void 0:a.uri;return a==null?null:i.jsx(c("CometImageIcon_DEPRECATED.react"),{size:24,src:a,style:"circle"})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometSaveSavableAttributes.react",["CometRelay","CometSaveSavableAttributes_savable.graphql","TetraText.react","orEmptyArray","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){a=a.item;a=d("CometRelay").useFragment(h!==void 0?h:h=b("CometSaveSavableAttributes_savable.graphql"),a);a=c("orEmptyArray")(a==null?void 0:a.savable_attributes);a=a.map(function(a){return a.text}).join(" \u2022 ");return i.jsx(c("TetraText.react"),{numberOfLines:1,type:"meta3",children:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useSaveClickLogger",["CometSaveLoggingContext","react","requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useCallback,i=b.useContext,j=c("requireDeferred")("SaveClickFalcoEvent").__setRef("useSaveClickLogger");function a(a,b){var d=a.mechanism,e=a.savableID;a=i(c("CometSaveLoggingContext"));var f=a.collectionID,g=a.surface;a=h(function(a){j.onReady(function(a){a=a.log;a(function(){return{list_id:f,mechanism:d,object_id:e,surface:g,use_case:"SAVE_DEFAULT"}})}),b&&b(a)},[b,f,d,e,g]);return a}g["default"]=a}),98);
__d("useSaveSavableLinkProps",["RelayHooks","XCometSaveDashboardControllerRouteBuilder","useSaveClickLogger","useSaveSavableLinkProps_savable.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a,e,f){a=d("RelayHooks").useFragment(h!==void 0?h:h=b("useSaveSavableLinkProps_savable.graphql"),a);var g=a==null?void 0:a.savable_permalink;f=c("useSaveClickLogger")({mechanism:f,savableID:a==null?void 0:a.id});a=(a==null?void 0:a.savable_default_category)==="LINK"&&(a==null?void 0:a.__typename)!=="Page"?"_blank":"_self";e!=null&&(g=c("XCometSaveDashboardControllerRouteBuilder").buildURL({hoisted_item_id:e,referrer:"COMET_RHC"}),f=function(){},a="_self");return[g,f,a]}g["default"]=a}),98);
__d("CometSaveSavableLink.react",["CometLink.react","CometRelay","CometSaveSavableLink_savable.graphql","react","usePlayerOriginRouteTracePolicy","useSaveSavableLinkProps"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){var e=a.children,f=a.item,g=a.mechanism;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","item","mechanism"]);f=d("CometRelay").useFragment(h!==void 0?h:h=b("CometSaveSavableLink_savable.graphql"),f);f=c("useSaveSavableLinkProps")(f,null,g);g=f[0];var j=f[1];f=f[2];var k=c("usePlayerOriginRouteTracePolicy")();k=babelHelpers["extends"]({},a.passthroughProps,{initialTracePolicy:k});return g!=null?i.jsx(c("CometLink.react"),babelHelpers["extends"]({href:g,passthroughProps:k,target:f},a,{onClick:j,children:e})):e}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useSaveImpressionLogger",["CometSaveLoggingContext","react","requireDeferred","useImpressionLogger"],(function(a,b,c,d,e,f,g){"use strict";d("react");b=d("react");var h=b.useCallback,i=b.useContext,j=c("requireDeferred")("SaveSurfaceImpressionFalcoEvent").__setRef("useSaveImpressionLogger");function a(a){a=a||{};var b=a.hasInviteButton;a=i(c("CometSaveLoggingContext"));var d=a.collectionID,e=a.referrer,f=a.surface;a=h(function(a,c){c=a.log;c(function(){return{extra_data:{has_invite_button:b===!0?1:0},list_id:d,referrer:e,surface:f,use_case:"SAVE_DEFAULT"}})},[d,b,e,f]);return c("useImpressionLogger")(j,a)}g["default"]=a}),98);
__d("useShareCollectionItemDialog",["RelayHooks","createEmptyCometComposerViewState","react","useFeedComposerCometDialog","useShareCollectionItemDialog_savable.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react").useCallback;function a(a){var e;a=d("RelayHooks").useFragment(h!==void 0?h:h=b("useShareCollectionItemDialog_savable.graphql"),a);var f=a.url;switch(a.__typename){case"OpenGraphObject":f=(e=a.global_share)==null?void 0:e.external_url;break;case"ProductItem":f=a.share_uri;break;case"StoryPointer":f=(e=a.story)==null?void 0:e.url;break}var g=c("createEmptyCometComposerViewState")({editorState:{__type:"plain-text",hasFocus:!1,isComposing:!1,isPendingSelection:!1,selectionOffsets:null,text:(a=f)!=null?a:""}});e=c("useFeedComposerCometDialog")({tracePolicy:"comet.composer.shareCollection"});var j=e[0];a=e[1];var k=e[2],l=e[3];e=e[4];var m=i(function(){j({beginningViewState:g})},[g,j]);return[m,{onHoverInPrerenderer:k,onHoverOutPrerenderer:l,onPressInPrerenderer:e,triggerRef:a,url:f}]}g["default"]=a}),98);