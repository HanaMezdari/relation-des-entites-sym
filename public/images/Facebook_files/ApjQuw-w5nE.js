if (self.CavalryLogger) { CavalryLogger.start_js(["cyHAwvh"]); }

__d("CometVideoRootMediaViewerQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4424503600942736",metadata:{},name:"CometVideoRootMediaViewerQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometVideoRoot.entrypoint",["CometVideoRootMediaViewerQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){a=a.routeParams;var c=a.comment_id,e=a.reply_comment_id,f=a.set;a=a.story_token;e=(e=e)!=null?e:c;c={UFI2CommentsProvider_commentsKey:"CometVideoRootMediaViewerQuery",displayCommentsContextEnableComment:null,displayCommentsContextIsAdPreview:null,displayCommentsContextIsAggregatedShare:null,displayCommentsContextIsStorySet:null,displayCommentsFeedbackContext:null,feedLocation:"COMET_MEDIA_VIEWER",feedbackSource:65,focusCommentID:e!=null?String(e):null,isMediaset:f!=null,mediasetToken:f,nodeID:a,privacySelectorRenderLocation:"COMET_STREAM",renderLocation:"permalink",scale:d("WebPixelRatio").get(),useDefaultActor:!1};return{queries:{videoRootQueryReference:{parameters:b("CometVideoRootMediaViewerQuery$Parameters"),variables:c}}}},root:c("JSResourceForInteraction")("CometVideoRoot.react").__setRef("CometVideoRoot.entrypoint")};g["default"]=a}),98);