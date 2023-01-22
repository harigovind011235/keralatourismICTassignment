;/*FB_PKG_DELIM*/

__d("useWWWIGStoriesLogging",["PolarisReactRedux","PolarisstorySelectors","logXIGPageView","react","useCometRouterState"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useEffect,i=b.useRef;function a(){var a=d("PolarisReactRedux").useSelector(d("PolarisstorySelectors").getCurrentPostId),b=c("useCometRouterState")(),e=i(null);h(function(){b!=null&&a!=null&&(e==null?void 0:e.current)!=null&&e.current!==a&&c("logXIGPageView")(b),e.current=a},[a,b])}g["default"]=a}),98);
__d("usePolarisStoriesProviderDisableNewPlayback",["PolarisConfig","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useEffect;function a(a,b,c,e){var f=a.hasFocus,g=a.isBugNubActive,i=a.isCloseFriendsDialogActive,j=a.isExclusiveStoryDialogActive,k=a.isHidden,l=a.isKeyboardActive,m=a.isModalActive,n=a.isPaused,o=a.isStoryShareSheetActive,p=a.isStoryViewerListActive,q=a.isHighlightsTrayActive,r=a.isTransitioning,s=a.isUnfollowModalActive,t=a.isCaptionModalActive;h(function(){var a=g||j||i||l||m||n||o||p||q||r||s||t||k||d("PolarisConfig").isIOS()&&!f||b!=null||c;e({isPlaybackDisabled:a})},[f,g,i,j,k,l,m,n,o,p,q,r,s,t,c,e,b])}g["default"]=a}),98);
__d("PolarisStoriesProvider.react",["PolarisReactRedux","PolarisRelationshipTypes","PolarisStoriesContext","PolarisrelationshipSelectors","PolarisstorySelectors","nullthrows","react","usePolarisStoriesProviderDisableNewPlayback","useWWWIGStoriesLogging"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");e=d("react");var i=e.useCallback,j=e.useContext,k=e.useEffect,l=e.useMemo,m=e.useState;function a(){return j(d("PolarisStoriesContext").StoriesContext)}function b(a){var b=a.children,e=a.initialState,f=c("nullthrows")(d("PolarisReactRedux").useSelector(d("PolarisstorySelectors").getCurrentPostAuthor));a=d("PolarisReactRedux").useSelector(function(a){return d("PolarisrelationshipSelectors").getRelationship(a.relationships,f.id)});var g=a.followedByViewer.state===d("PolarisRelationshipTypes").FOLLOW_STATUS_FOLLOWING,j=d("PolarisReactRedux").useSelector(function(a){return a.displayProperties.viewportHeight});a=l(function(){return babelHelpers["extends"]({},d("PolarisStoriesContext").defaultContext,e,{isInitiallyFollowedByViewer:g,viewerHeight:j})},[g,e,j]);a=m(a);var n=a[0],o=a[1];a=d("PolarisReactRedux").useSelector(d("PolarisstorySelectors").isFromPreviousFullscreenSession);var p=d("PolarisReactRedux").useSelector(function(a){return a.stories.isAppAttributionOpen}),q=d("PolarisReactRedux").useSelector(function(a){return a.stories.tappedObjectId}),r=i(function(a){return o(function(b){return babelHelpers["extends"]({},b,a)})},[]),s=l(function(){return babelHelpers["extends"]({},n,{updateStoriesContext:r})},[n,r]);c("useWWWIGStoriesLogging")();var t=a||p;c("usePolarisStoriesProviderDisableNewPlayback")(n,q,t,r);k(function(){r({isResumeOverlayActive:t})},[t,r]);k(function(){r({hasFocus:document.hasFocus(),isHidden:document.hidden!=null?document.hidden:!1})},[r]);return h.jsx(d("PolarisStoriesContext").StoriesContext.Provider,{value:s,children:b})}b.displayName=b.name+" [from "+f.id+"]";e=h.memo(b);g.useStoriesContext=a;g.StoriesContextProvider=e}),98);
__d("PolarisLocationAvatar.react",["cx","fbt","FastLink","PolarisIGCoreLocationPanoOutlineIcon","PolarisLinkBuilder","PolarisUA","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react");function a(a){var b=a.backgroundColor;b=b===void 0?"ig-secondary-background":b;var e=a.isLink;e=e===void 0?!0:e;var f=a.locationId,g=a.profilePictureUrl;a=a.size;a=a===void 0?30:a;a={width:a,height:a};var h=g!=null;h=h?j.jsx("img",{alt:"",className:"_abwx",src:g}):j.jsx("div",{className:"_abwy",children:j.jsx(c("PolarisIGCoreLocationPanoOutlineIcon"),{alt:i._("Location icon."),color:"ig-secondary-text",size:d("PolarisUA").isMobile()?32:44})});return j.jsx("div",{className:"_abwv"+(b==="ig-primary-background"?" _adbd":""),style:a,children:e?j.jsx(c("FastLink"),{className:"_aa8k",href:d("PolarisLinkBuilder").buildLocationLink({id:f,slug:""}),style_DEPRECATED:a,children:h}):j.jsx(j.Fragment,{children:h})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("usePolarisNeedsTapToStart",["usePolarisViewer","useRouteReferrer"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var b=c("useRouteReferrer")(),d=c("usePolarisViewer")();d=d!=null&&d.id===a;return d===!1&&((b==null?void 0:b.navigationType)==="initial"||(b==null?void 0:b.navigationType)==="reload")}g["default"]=a}),98);