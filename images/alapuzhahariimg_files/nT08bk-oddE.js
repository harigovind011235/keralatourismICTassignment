;/*FB_PKG_DELIM*/

__d("PolarisAdvisoryMessage.react",["cx","joinClasses","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){var b=a.children;a=a.className;return i.jsx("div",{className:c("joinClasses")("_aady",a),children:b})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisMediaBrowserConstants",[],(function(a,b,c,d,e,f){"use strict";a=3;f.POSTS_PER_ROW=a}),66);
__d("PolarisPaddedSectionHeader.react",["cx","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){a=a.children;return i.jsx("h2",{className:"_aanc",children:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisMediaBrowser.react",["cx","fbt","IGRouter","PolarisAdvisoryMessage.react","PolarisConfig","PolarisLinkBuilder","PolarisMediaBrowserConstants","PolarisMediaImpressionsLogger","PolarisPaddedSectionHeader.react","PolarisSizeCache","PolarisSizing","PolarisUA","PolarisVirtualPostsGrid.react","PolarisVirtualPostsGridConstants","PolarisgetPostFromGraphMediaInterface","PolarisisUserLoggedIn","PolarispostModalHelpers","Polarisunexpected","browserHistory","deferredLoadComponent","memoizeStringOnly","nullthrows","react","requireDeferred"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react"),k=c("deferredLoadComponent")(c("requireDeferred")("PolarisMediaBrowserPostModal.react").__setRef("PolarisMediaBrowser.react")),l=5,m=12,n=i._("Top Posts"),o=i._("Most Recent"),p=i._("No posts yet."),q=c("memoizeStringOnly")(function(a){return new(c("PolarisSizeCache"))({estimatedSize:d("PolarisVirtualPostsGridConstants").POSTS_ROW_ESTIMATED_HEIGHT})});function r(a,b){return a.topPosts?[].concat(a.topPosts,b):a.posts}function s(a){return a.topPosts?a.posts.filter(function(b){var c=a.topPosts||[];return!c.some(function(a){return a.id===b.id})}):a.posts}function t(a,b){b={combinedPosts:[],prevValues:{maxPostsToDisplay:a.maxPostsToDisplay,postsLength:a.posts.length},modalEntryPath:b==null?void 0:b.modalEntryPath,modalPostId:b==null?void 0:b.modalPostId,showModal:!!(b==null?void 0:b.showModal),uniquePosts:[],visibleUniquePostsCount:0};if(a.posts.length>0||a.topPosts&&a.topPosts.length>0){var c=s(a);b.uniquePosts=c;b.combinedPosts=r(a,c);if(c.length>0){b.earliestPostIdToDisplay=c[0].id;c=c.length;var e=a.isOldestPostLoaded?0:c%d("PolarisMediaBrowserConstants").POSTS_PER_ROW;b.visibleUniquePostsCount=Math.min(c-e,a.maxPostsToDisplay)}}return b}a=function(a){babelHelpers.inheritsLoose(b,a);function b(b){var e;e=a.call(this,b)||this;e.$6=function(a){e.setState({modalEntryPath:e.props.history.location.pathname,modalPostId:a,showModal:!0})};e.$7=function(a,b){e.$6(a);var f=e.state.combinedPosts.find(function(b){return b.id===a});f=f!=null?d("PolarisgetPostFromGraphMediaInterface").getPostMediaType(f):0;f===0&&c("Polarisunexpected")("MediaBrowser: missing media type for post modal log event");d("PolarispostModalHelpers").logPostModalOpen(e.props.analyticsContext,f,"media_browser");if(b!=null){f=e.props;var g=f.isOldestPostLoaded;f=f.maxPostsToDisplay;!g&&e.state.combinedPosts.length-1-b<=l&&e.props.onPostLoadTargetChange(f+m)}};e.$8=function(a,b,c){var f=e.props,g=f.onIntentClick;f=f.shouldSpawnPostModal;if(g&&!d("PolarisisUserLoggedIn").isUserLoggedIn()&&(d("PolarisUA").isDesktop()||d("PolarisConfig").isNetzDGEligible())&&!d("PolarisConfig").isAllowlistedCrawlBot())a.preventDefault(),g(e.props.history.location.pathname,"profile_posts",e.props.match.params.username,b.id);else if(f===!0&&d("PolarisSizing").shouldSpawnModals(e.props.viewportWidth)){g=e.state.combinedPosts.map(function(a){return a.id}).findIndex(function(a){return a===b.id});e.$7(b.id,g);a.preventDefault()}e.props.onClick&&e.props.onClick(b,c)};e.$4=function(a){e.setState({modalEntryPath:null,modalPostId:null,showModal:!1}),e.props.onPostModalClose&&e.props.onPostModalClose(a)};e.$9=function(a){d("PolarisMediaImpressionsLogger").logImpressionForPost(a,"permalink")};e.$5=function(){var a=e.props,b=a.isOldestPostLoaded;a=a.maxPostsToDisplay;b||e.props.onPostLoadTargetChange(a+m)};e.$13=function(a){var b=e.props.loggingData;if((b==null?void 0:b.hashtagName)!=null)return babelHelpers["extends"]({},b,{hashtagFeedType:a});else if((b==null?void 0:b.entityPageName)!=null)return babelHelpers["extends"]({},b,{feedType:a});return{hashtagFeedType:null,feedType:null}};e.$11=function(a){return j.jsx(c("PolarisVirtualPostsGrid.react"),{analyticsContext:e.props.analyticsContext,hasNextPage:!1,isFetching:!1,loggingData:e.$13("top"),mediaLinkBuilder:e.props.mediaLinkBuilder,onClick:e.$8,onImpression:e.props.onImpression,overscanRowsCount:e.props.overscanRowsCount,PostGridItem:e.props.PostGridItem,posts:a,shouldSpawnModals:d("PolarisSizing").shouldSpawnModals(e.props.viewportWidth),sizeCache:e.$3,visibleCount:a?a.length:0},"virtual_top_posts")};e.state=t(b);e.$2=q(e.props.analyticsContext+"_recentPosts");e.$3=q(e.props.analyticsContext+"_topSetPosts");return e}b.getDerivedStateFromProps=function(a,b){var c=b.prevValues,d=s(a).map(function(a){return a.id}),e=!b.uniquePosts.every(function(a){return d.includes(a.id)});return e||c.maxPostsToDisplay!==a.maxPostsToDisplay?t(a,b):null};var e=b.prototype;e.componentDidMount=function(){var a=this;this.$1=this.props.history.listen(function(b,c){c===d("browserHistory").ACTION.POP&&a.$4()})};e.componentWillUnmount=function(){this.$1()};e.componentDidUpdate=function(a,b){this.state.uniquePosts.length!==b.uniquePosts.length&&this.state.visibleUniquePostsCount===b.visibleUniquePostsCount&&this.$5()};e.renderPhotosComponent=function(){var a=this.state,b=a.combinedPosts;a=a.uniquePosts;if(this.props.hidePhotoComponentRenderer)return null;if(b.length===0&&!this.props.isFetching)return j.jsx(c("PolarisAdvisoryMessage.react"),{className:"_aaq6",children:j.jsx("h2",{className:"_aaq7",children:p})});var d,e;this.props.topPosts&&this.props.topPosts.length>0&&this.props.posts.length===0?(d=this.$10(),e=this.props.noRecentPostExplanation||null):this.props.topPosts&&this.props.topPosts.length===0?(d=this.props.noTopPostExplanation,e=null):b.length===0?d=e=null:a.length===0?(d=null,e=this.props.isTopMediaOnly?this.props.noRecentPostExplanation:this.$11(this.props.topPosts)):(d=this.$10(),this.props.isTopMediaOnly?e=this.props.noRecentPostExplanation:e=this.props.isMostRecentPostNumLimited?this.$11(this.props.posts):this.$12());return[d,e]};e.renderPostModal=function(){var a=c("nullthrows")(this.state.modalPostId);return j.jsx(k,{analyticsContext:this.props.analyticsContext,combinedPosts:this.state.combinedPosts,mediaLinkBuilder:this.props.mediaLinkBuilder,modalEntryPath:this.state.modalEntryPath,onClose:this.$4,onImpression:this.$9,onOpen:this.$7,postId:a})};e.$10=function(){return!this.props.topPosts||this.props.topPosts.length<1?null:[j.jsxs("div",{className:"_aaq8",children:[j.jsx(c("PolarisPaddedSectionHeader.react"),{children:j.jsxs("div",{className:"_aaq9",children:[n,this.props.isSmallScreen&&this.props.postCount&&j.jsx("div",{className:"_aaqa",children:this.props.postCount})]})}),this.$11(this.props.topPosts)]},"top_posts_container"),!this.props.isTopMediaOnly&&this.props.posts.length>0&&j.jsx(c("PolarisPaddedSectionHeader.react"),{children:o},"most_recent_container")]};e.$12=function(){var a;return j.jsx(c("PolarisVirtualPostsGrid.react"),{allowSampledScrollLogging:this.props.allowSampledScrollLogging,analyticsContext:this.props.analyticsContext,hasNextPage:!this.props.isOldestPostLoaded,isFetching:(a=this.props.isFetching)!=null?a:!1,loggingData:this.$13("recent"),mediaLinkBuilder:this.props.mediaLinkBuilder,onClick:this.$8,onImpression:this.props.onImpression,onNextPage:this.$5,overscanRowsCount:this.props.overscanRowsCount,PostGridItem:this.props.PostGridItem,posts:this.state.uniquePosts,postsPerRow:d("PolarisMediaBrowserConstants").POSTS_PER_ROW,profileUser:this.props.profileUser,shouldSpawnModals:d("PolarisSizing").shouldSpawnModals(this.props.viewportWidth),sizeCache:this.$2,visibleCount:this.state.visibleUniquePostsCount},"virtual_posts_grid")};e.render=function(){return j.jsxs("article",{className:this.props.className,children:[this.props.children,typeof this.props.photoComponentRenderer==="function"?this.props.photoComponentRenderer():this.renderPhotosComponent(),this.state.showModal?this.renderPostModal():null]})};return b}(j.Component);a.defaultProps={mediaLinkBuilder:d("PolarisLinkBuilder").buildMediaLink,shouldSpawnPostModal:!0};b=d("IGRouter").withIGRouter(a);g["default"]=b}),98);