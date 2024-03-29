/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon-mh\'">' + entity + '</span>' + html;
	}
	var icons = {
		'ic-phone': '&#xe600;',
		'ic-mobile': '&#xe601;',
		'ic-mouse': '&#xe602;',
		'ic-directions': '&#xe603;',
		'ic-mail': '&#xe604;',
		'ic-paperplane': '&#xe605;',
		'ic-pencil': '&#xe606;',
		'ic-feather': '&#xe607;',
		'ic-paperclip': '&#xe608;',
		'ic-drawer': '&#xe609;',
		'ic-reply': '&#xe60a;',
		'ic-reply-all': '&#xe60b;',
		'ic-forward': '&#xe60c;',
		'ic-user': '&#xe60d;',
		'ic-users': '&#xe60e;',
		'ic-user-add': '&#xe60f;',
		'ic-vcard': '&#xe610;',
		'ic-export': '&#xe611;',
		'ic-location': '&#xe612;',
		'ic-map': '&#xe613;',
		'ic-compass': '&#xe614;',
		'ic-location2': '&#xe615;',
		'ic-target': '&#xe616;',
		'ic-share': '&#xe617;',
		'ic-sharable': '&#xe618;',
		'ic-heart': '&#xe619;',
		'ic-heart2': '&#xe61a;',
		'ic-star': '&#xe61b;',
		'ic-star2': '&#xe61c;',
		'ic-thumbs-up': '&#xe61d;',
		'ic-thumbs-down': '&#xe61e;',
		'ic-chat': '&#xe61f;',
		'ic-comment': '&#xe620;',
		'ic-quote': '&#xe621;',
		'ic-house': '&#xe622;',
		'ic-popup': '&#xe623;',
		'ic-search': '&#xe624;',
		'ic-flashlight': '&#xe625;',
		'ic-printer': '&#xe626;',
		'ic-bell': '&#xe627;',
		'ic-link': '&#xe628;',
		'ic-flag': '&#xe629;',
		'ic-cog': '&#xe62a;',
		'ic-tools': '&#xe62b;',
		'ic-trophy': '&#xe62c;',
		'ic-tag': '&#xe62d;',
		'ic-camera': '&#xe62e;',
		'ic-megaphone': '&#xe62f;',
		'ic-moon': '&#xe630;',
		'ic-palette': '&#xe631;',
		'ic-leaf': '&#xe632;',
		'ic-music': '&#xe633;',
		'ic-music2': '&#xe634;',
		'ic-new': '&#xe635;',
		'ic-graduation': '&#xe636;',
		'ic-book': '&#xe637;',
		'ic-newspaper': '&#xe638;',
		'ic-bag': '&#xe639;',
		'ic-airplane': '&#xe63a;',
		'ic-lifebuoy': '&#xe63b;',
		'ic-eye': '&#xe63c;',
		'ic-clock': '&#xe63d;',
		'ic-microphone': '&#xe63e;',
		'ic-calendar': '&#xe63f;',
		'ic-bolt': '&#xe640;',
		'ic-thunder': '&#xe641;',
		'ic-droplet': '&#xe642;',
		'ic-cd': '&#xe643;',
		'ic-briefcase': '&#xe644;',
		'ic-air': '&#xe645;',
		'ic-hourglass': '&#xe646;',
		'ic-gauge': '&#xe647;',
		'ic-language': '&#xe648;',
		'ic-network': '&#xe649;',
		'ic-key': '&#xe64a;',
		'ic-battery': '&#xe64b;',
		'ic-bucket': '&#xe64c;',
		'ic-magnet': '&#xe64d;',
		'ic-drive': '&#xe64e;',
		'ic-cup': '&#xe64f;',
		'ic-rocket': '&#xe650;',
		'ic-brush': '&#xe651;',
		'ic-suitcase': '&#xe652;',
		'ic-cone': '&#xe653;',
		'ic-earth': '&#xe654;',
		'ic-keyboard': '&#xe655;',
		'ic-browser': '&#xe656;',
		'ic-publish': '&#xe657;',
		'ic-progress-3': '&#xe658;',
		'ic-progress-2': '&#xe659;',
		'ic-brogress-1': '&#xe65a;',
		'ic-progress-0': '&#xe65b;',
		'ic-sun': '&#xe65c;',
		'ic-sun2': '&#xe65d;',
		'ic-adjust': '&#xe65e;',
		'ic-code': '&#xe65f;',
		'ic-screen': '&#xe660;',
		'ic-infinity': '&#xe661;',
		'ic-light-bulb': '&#xe662;',
		'ic-credit-card': '&#xe663;',
		'ic-database': '&#xe664;',
		'ic-voicemail': '&#xe665;',
		'ic-clipboard': '&#xe666;',
		'ic-cart': '&#xe667;',
		'ic-box': '&#xe668;',
		'ic-ticket': '&#xe669;',
		'ic-rss': '&#xe66a;',
		'ic-signal': '&#xe66b;',
		'ic-thermometer': '&#xe66c;',
		'ic-droplets': '&#xe66d;',
		'ic-uniE66E': '&#xe66e;',
		'ic-statistics': '&#xe66f;',
		'ic-pie': '&#xe670;',
		'ic-bars': '&#xe671;',
		'ic-graph': '&#xe672;',
		'ic-lock': '&#xe673;',
		'ic-lock-open': '&#xe674;',
		'ic-logout': '&#xe675;',
		'ic-login': '&#xe676;',
		'ic-checkmark': '&#xe677;',
		'ic-cross': '&#xe678;',
		'ic-minus': '&#xe679;',
		'ic-plus': '&#xe67a;',
		'ic-cross2': '&#xe67b;',
		'ic-minus2': '&#xe67c;',
		'ic-plus2': '&#xe67d;',
		'ic-cross3': '&#xe67e;',
		'ic-minus3': '&#xe67f;',
		'ic-plus3': '&#xe680;',
		'ic-erase': '&#xe681;',
		'ic-blocked': '&#xe682;',
		'ic-info': '&#xe683;',
		'ic-info2': '&#xe684;',
		'ic-question': '&#xe685;',
		'ic-help': '&#xe686;',
		'ic-warning': '&#xe687;',
		'ic-cycle': '&#xe688;',
		'ic-cw': '&#xe689;',
		'ic-ccw': '&#xe68a;',
		'ic-shuffle': '&#xe68b;',
		'ic-arrow': '&#xe68c;',
		'ic-arrow2': '&#xe68d;',
		'ic-retweet': '&#xe68e;',
		'ic-loop': '&#xe68f;',
		'ic-history': '&#xe690;',
		'ic-back': '&#xe691;',
		'ic-switch': '&#xe692;',
		'ic-list': '&#xe693;',
		'ic-add-to-list': '&#xe694;',
		'ic-layout': '&#xe695;',
		'ic-list2': '&#xe696;',
		'ic-text': '&#xe697;',
		'ic-text2': '&#xe698;',
		'ic-document': '&#xe699;',
		'ic-docs': '&#xe69a;',
		'ic-landscape': '&#xe69b;',
		'ic-pictures': '&#xe69c;',
		'ic-video': '&#xe69d;',
		'ic-music3': '&#xe69e;',
		'ic-folder': '&#xe69f;',
		'ic-archive': '&#xe6a0;',
		'ic-trash': '&#xe6a1;',
		'ic-upload': '&#xe6a2;',
		'ic-download': '&#xe6a3;',
		'ic-disk': '&#xe6a4;',
		'ic-install': '&#xe6a5;',
		'ic-cloud': '&#xe6a6;',
		'ic-upload2': '&#xe6a7;',
		'ic-bookmark': '&#xe6a8;',
		'ic-bookmarks': '&#xe6a9;',
		'ic-book2': '&#xe6aa;',
		'ic-play': '&#xe6ab;',
		'ic-pause': '&#xe6ac;',
		'ic-record': '&#xe6ad;',
		'ic-stop': '&#xe6ae;',
		'ic-next': '&#xe6af;',
		'ic-previous': '&#xe6b0;',
		'ic-first': '&#xe6b1;',
		'ic-last': '&#xe6b2;',
		'ic-resize-enlarge': '&#xe6b3;',
		'ic-resize-shrink': '&#xe6b4;',
		'ic-volume': '&#xe6b5;',
		'ic-sound': '&#xe6b6;',
		'ic-mute': '&#xe6b7;',
		'ic-flow-cascade': '&#xe6b8;',
		'ic-flow-branch': '&#xe6b9;',
		'ic-flow-tree': '&#xe6ba;',
		'ic-flow-line': '&#xe6bb;',
		'ic-flow-parallel': '&#xe6bc;',
		'ic-arrow-left': '&#xe6bd;',
		'ic-arrow-down': '&#xe6be;',
		'ic-arrow-up--upload': '&#xe6bf;',
		'ic-arrow-right': '&#xe6c0;',
		'ic-arrow-left2': '&#xe6c1;',
		'ic-arrow-down2': '&#xe6c2;',
		'ic-arrow-up': '&#xe6c3;',
		'ic-arrow-right2': '&#xe6c4;',
		'ic-arrow-left3': '&#xe6c5;',
		'ic-arrow-down3': '&#xe6c6;',
		'ic-arrow-up2': '&#xe6c7;',
		'ic-arrow-right3': '&#xe6c8;',
		'ic-arrow-left4': '&#xe6c9;',
		'ic-arrow-down4': '&#xe6ca;',
		'ic-arrow-up3': '&#xe6cb;',
		'ic-arrow-right4': '&#xe6cc;',
		'ic-arrow-left5': '&#xe6cd;',
		'ic-arrow-down5': '&#xe6ce;',
		'ic-arrow-up4': '&#xe6cf;',
		'ic-arrow-right5': '&#xe6d0;',
		'ic-arrow-left6': '&#xe6d1;',
		'ic-arrow-down6': '&#xe6d2;',
		'ic-arrow-up5': '&#xe6d3;',
		'ic-arrow-right6': '&#xe6d4;',
		'ic-arrow-left7': '&#xe6d5;',
		'ic-arrow-down7': '&#xe6d6;',
		'ic-arrow-up6': '&#xe6d7;',
		'ic-uniE6D8': '&#xe6d8;',
		'ic-arrow-left8': '&#xe6d9;',
		'ic-arrow-down8': '&#xe6da;',
		'ic-arrow-up7': '&#xe6db;',
		'ic-arrow-right7': '&#xe6dc;',
		'ic-menu': '&#xe6dd;',
		'ic-ellipsis': '&#xe6de;',
		'ic-dots': '&#xe6df;',
		'ic-dot': '&#xe6e0;',
		'ic-cc': '&#xe6e1;',
		'ic-cc-by': '&#xe6e2;',
		'ic-cc-nc': '&#xe6e3;',
		'ic-cc-nc-eu': '&#xe6e4;',
		'ic-cc-nc-jp': '&#xe6e5;',
		'ic-cc-sa': '&#xe6e6;',
		'ic-cc-nd': '&#xe6e7;',
		'ic-cc-pd': '&#xe6e8;',
		'ic-cc-zero': '&#xe6e9;',
		'ic-cc-share': '&#xe6ea;',
		'ic-cc-share2': '&#xe6eb;',
		'ic-daniel-bruce': '&#xe6ec;',
		'ic-daniel-bruce2': '&#xe6ed;',
		'ic-github': '&#xe6ee;',
		'ic-github2': '&#xe6ef;',
		'ic-flickr': '&#xe6f0;',
		'ic-flickr2': '&#xe6f1;',
		'ic-vimeo': '&#xe6f2;',
		'ic-vimeo2': '&#xe6f3;',
		'ic-twitter': '&#xe6f4;',
		'ic-twitter2': '&#xe6f5;',
		'ic-facebook': '&#xe6f6;',
		'ic-facebook2': '&#xe6f7;',
		'ic-facebook3': '&#xe6f8;',
		'ic-googleplus': '&#xe6f9;',
		'ic-googleplus2': '&#xe6fa;',
		'ic-pinterest': '&#xe6fb;',
		'ic-pinterest2': '&#xe6fc;',
		'ic-tumblr': '&#xe6fd;',
		'ic-tumblr2': '&#xe6fe;',
		'ic-linkedin': '&#xe6ff;',
		'ic-linkedin2': '&#xe700;',
		'ic-dribbble': '&#xe701;',
		'ic-dribbble2': '&#xe702;',
		'ic-stumbleupon': '&#xe703;',
		'ic-stumbleupon2': '&#xe704;',
		'ic-lastfm': '&#xe705;',
		'ic-lastfm2': '&#xe706;',
		'ic-rdio': '&#xe707;',
		'ic-rdio2': '&#xe708;',
		'ic-spotify': '&#xe709;',
		'ic-spotify2': '&#xe70a;',
		'ic-qq': '&#xe70b;',
		'ic-instagram': '&#xe70c;',
		'ic-dropbox': '&#xe70d;',
		'ic-evernote': '&#xe70e;',
		'ic-flattr': '&#xe70f;',
		'ic-skype': '&#xe710;',
		'ic-skype2': '&#xe711;',
		'ic-renren': '&#xe712;',
		'ic-sina-weibo': '&#xe713;',
		'ic-paypal': '&#xe714;',
		'ic-picasa': '&#xe715;',
		'ic-soundcloud': '&#xe716;',
		'ic-mixi': '&#xe717;',
		'ic-behance': '&#xe718;',
		'ic-circles': '&#xe719;',
		'ic-vk': '&#xe71a;',
		'ic-smashing': '&#xe71b;',
		'ic-glass': '&#xe71c;',
		'ic-music4': '&#xe71d;',
		'ic-search2': '&#xe71e;',
		'ic-envelope': '&#xe71f;',
		'ic-heart3': '&#xe720;',
		'ic-star3': '&#xe721;',
		'ic-star-empty': '&#xe722;',
		'ic-user2': '&#xe723;',
		'ic-film': '&#xe724;',
		'ic-th-large': '&#xe725;',
		'ic-th': '&#xe726;',
		'ic-th-list': '&#xe727;',
		'ic-ok': '&#xe728;',
		'ic-remove': '&#xe729;',
		'ic-zoom-in': '&#xe72a;',
		'ic-zoom-out': '&#xe72b;',
		'ic-off': '&#xe72c;',
		'ic-signal2': '&#xe72d;',
		'ic-cog2': '&#xe72e;',
		'ic-trash2': '&#xe72f;',
		'ic-home': '&#xe730;',
		'ic-file': '&#xe731;',
		'ic-time': '&#xe732;',
		'ic-road': '&#xe733;',
		'ic-download-alt': '&#xe734;',
		'ic-download2': '&#xe735;',
		'ic-upload3': '&#xe736;',
		'ic-inbox': '&#xe737;',
		'ic-play-circle': '&#xe738;',
		'ic-repeat': '&#xe739;',
		'ic-refresh': '&#xe73a;',
		'ic-list-alt': '&#xe73b;',
		'ic-lock2': '&#xe73c;',
		'ic-flag2': '&#xe73d;',
		'ic-headphones': '&#xe73e;',
		'ic-volume-off': '&#xe73f;',
		'ic-volume-down': '&#xe740;',
		'ic-volume-up': '&#xe741;',
		'ic-qrcode': '&#xe742;',
		'ic-barcode': '&#xe743;',
		'ic-tag2': '&#xe744;',
		'ic-tags': '&#xe745;',
		'ic-book3': '&#xe746;',
		'ic-bookmark2': '&#xe747;',
		'ic-print': '&#xe748;',
		'ic-camera2': '&#xe749;',
		'ic-font': '&#xe74a;',
		'ic-bold': '&#xe74b;',
		'ic-italic': '&#xe74c;',
		'ic-text-height': '&#xe74d;',
		'ic-text-width': '&#xe74e;',
		'ic-align-left': '&#xe74f;',
		'ic-align-center': '&#xe750;',
		'ic-align-right': '&#xe751;',
		'ic-align-justify': '&#xe752;',
		'ic-list3': '&#xe753;',
		'ic-indent-left': '&#xe754;',
		'ic-indent-right': '&#xe755;',
		'ic-facetime-video': '&#xe756;',
		'ic-picture': '&#xe757;',
		'ic-pencil2': '&#xe758;',
		'ic-map-marker': '&#xe759;',
		'ic-adjust2': '&#xe75a;',
		'ic-tint': '&#xe75b;',
		'ic-edit': '&#xe75c;',
		'ic-share2': '&#xe75d;',
		'ic-check': '&#xe75e;',
		'ic-move': '&#xe75f;',
		'ic-step-backward': '&#xe760;',
		'ic-fast-backward': '&#xe761;',
		'ic-backward': '&#xe762;',
		'ic-play2': '&#xe763;',
		'ic-pause2': '&#xe764;',
		'ic-stop2': '&#xe765;',
		'ic-forward2': '&#xe766;',
		'ic-fast-forward': '&#xe767;',
		'ic-step-forward': '&#xe768;',
		'ic-eject': '&#xe769;',
		'ic-chevron-left': '&#xe76a;',
		'ic-chevron-right': '&#xe76b;',
		'ic-plus-sign': '&#xe81e;',
		'ic-minus-sign': '&#xe81f;',
		'ic-remove-sign': '&#xe820;',
		'ic-ok-sign': '&#xe821;',
		'ic-question-sign': '&#xe822;',
		'ic-info-sign': '&#xe823;',
		'ic-screenshot': '&#xe824;',
		'ic-remove-circle': '&#xe825;',
		'ic-ok-circle': '&#xe826;',
		'ic-ban-circle': '&#xe827;',
		'ic-arrow-left9': '&#xe828;',
		'ic-arrow-right8': '&#xe829;',
		'ic-arrow-up8': '&#xe82a;',
		'ic-arrow-down9': '&#xe82b;',
		'ic-share-alt': '&#xe82c;',
		'ic-resize-full': '&#xe82d;',
		'ic-resize-small': '&#xe82e;',
		'ic-plus4': '&#xe82f;',
		'ic-minus4': '&#xe830;',
		'ic-asterisk': '&#xe831;',
		'ic-exclamation-sign': '&#xe832;',
		'ic-gift': '&#xe833;',
		'ic-leaf2': '&#xe834;',
		'ic-fire': '&#xe835;',
		'ic-eye-open': '&#xe836;',
		'ic-eye-close': '&#xe837;',
		'ic-warning-sign': '&#xe838;',
		'ic-plane': '&#xe839;',
		'ic-calendar2': '&#xe83a;',
		'ic-random': '&#xe83b;',
		'ic-comment2': '&#xe83c;',
		'ic-magnet2': '&#xe83d;',
		'ic-chevron-up': '&#xe83e;',
		'ic-chevron-down': '&#xe83f;',
		'ic-retweet2': '&#xe840;',
		'ic-shopping-cart': '&#xe841;',
		'ic-folder-close': '&#xe842;',
		'ic-folder-open': '&#xe843;',
		'ic-resize-vertical': '&#xe844;',
		'ic-resize-horizontal': '&#xe845;',
		'ic-bar-chart': '&#xe846;',
		'ic-twitter-sign': '&#xe847;',
		'ic-facebook-sign': '&#xe848;',
		'ic-camera-retro': '&#xe849;',
		'ic-key2': '&#xe84a;',
		'ic-cogs': '&#xe84b;',
		'ic-comments': '&#xe84c;',
		'ic-thumbs-up2': '&#xe84d;',
		'ic-thumbs-down2': '&#xe84e;',
		'ic-star-half': '&#xe84f;',
		'ic-heart-empty': '&#xe850;',
		'ic-signout': '&#xe851;',
		'ic-linkedin-sign': '&#xe852;',
		'ic-pushpin': '&#xe853;',
		'ic-external-link': '&#xe854;',
		'ic-signin': '&#xe855;',
		'ic-trophy2': '&#xe856;',
		'ic-github-sign': '&#xe857;',
		'ic-upload-alt': '&#xe858;',
		'ic-lemon': '&#xe859;',
		'ic-phone2': '&#xe85a;',
		'ic-check-empty': '&#xe85b;',
		'ic-bookmark-empty': '&#xe85c;',
		'ic-phone-sign': '&#xe85d;',
		'ic-twitter3': '&#xe85e;',
		'ic-facebook4': '&#xe85f;',
		'ic-github3': '&#xe860;',
		'ic-unlock': '&#xe861;',
		'ic-credit': '&#xe862;',
		'ic-rss2': '&#xe863;',
		'ic-hdd': '&#xe864;',
		'ic-bullhorn': '&#xe865;',
		'ic-bell2': '&#xe866;',
		'ic-certificate': '&#xe867;',
		'ic-hand-right': '&#xe868;',
		'ic-hand-left': '&#xe869;',
		'ic-hand-up': '&#xe86a;',
		'ic-hand-down': '&#xe86b;',
		'ic-circle-arrow-left': '&#xe86c;',
		'ic-circle-arrow-right': '&#xe86d;',
		'ic-circle-arrow-up': '&#xe86e;',
		'ic-circle-arrow-down': '&#xe86f;',
		'ic-globe': '&#xe870;',
		'ic-wrench': '&#xe871;',
		'ic-tasks': '&#xe872;',
		'ic-filter': '&#xe873;',
		'ic-briefcase2': '&#xe874;',
		'ic-fullscreen': '&#xe875;',
		'ic-group': '&#xe876;',
		'ic-link2': '&#xe877;',
		'ic-cloud2': '&#xe878;',
		'ic-beaker': '&#xe879;',
		'ic-cut': '&#xe87a;',
		'ic-copy': '&#xe87b;',
		'ic-paper-clip': '&#xe87c;',
		'ic-save': '&#xe87d;',
		'ic-sign-blank': '&#xe87e;',
		'ic-reorder': '&#xe87f;',
		'ic-list-ul': '&#xe880;',
		'ic-list-ol': '&#xe881;',
		'ic-strikethrough': '&#xe882;',
		'ic-underline': '&#xe883;',
		'ic-table': '&#xe884;',
		'ic-magic': '&#xe885;',
		'ic-truck': '&#xe886;',
		'ic-pinterest3': '&#xe887;',
		'ic-pinterest-sign': '&#xe888;',
		'ic-google-plus-sign': '&#xe889;',
		'ic-google-plus': '&#xe88a;',
		'ic-money': '&#xe88b;',
		'ic-caret-down': '&#xe88c;',
		'ic-caret-up': '&#xe88d;',
		'ic-caret-left': '&#xe88e;',
		'ic-caret-right': '&#xe88f;',
		'ic-columns': '&#xe890;',
		'ic-sort': '&#xe891;',
		'ic-sort-down': '&#xe892;',
		'ic-sort-up': '&#xe893;',
		'ic-envelope-alt': '&#xe894;',
		'ic-linkedin3': '&#xe895;',
		'ic-undo': '&#xe896;',
		'ic-legal': '&#xe897;',
		'ic-dashboard': '&#xe898;',
		'ic-comment-alt': '&#xe899;',
		'ic-comments-alt': '&#xe89a;',
		'ic-bolt2': '&#xe89b;',
		'ic-sitemap': '&#xe89c;',
		'ic-umbrella': '&#xe89d;',
		'ic-paste': '&#xe89e;',
		'ic-lightbulb': '&#xe89f;',
		'ic-exchange': '&#xe8a0;',
		'ic-cloud-download': '&#xe8a1;',
		'ic-cloud-upload': '&#xe8a2;',
		'ic-user-md': '&#xe8a3;',
		'ic-stethoscope': '&#xe8a4;',
		'ic-suitcase2': '&#xe8a5;',
		'ic-bell-alt': '&#xe8a6;',
		'ic-coffee': '&#xe8a7;',
		'ic-food': '&#xe8a8;',
		'ic-file-alt': '&#xe8a9;',
		'ic-building': '&#xe8aa;',
		'ic-hospital': '&#xe8ab;',
		'ic-ambulance': '&#xe8ac;',
		'ic-medkit': '&#xe8ad;',
		'ic-fighter-jet': '&#xe8ae;',
		'ic-beer': '&#xe8af;',
		'ic-h-sign': '&#xe8b0;',
		'ic-plus-sign2': '&#xe8b1;',
		'ic-double-angle-left': '&#xe8b2;',
		'ic-double-angle-right': '&#xe8b3;',
		'ic-double-angle-up': '&#xe8b4;',
		'ic-double-angle-down': '&#xe8b5;',
		'ic-angle-left': '&#xe8b6;',
		'ic-angle-right': '&#xe8b7;',
		'ic-angle-up': '&#xe8b8;',
		'ic-angle-down': '&#xe8b9;',
		'ic-desktop': '&#xe8ba;',
		'ic-laptop': '&#xe8bb;',
		'ic-tablet': '&#xe8bc;',
		'ic-mobile2': '&#xe8bd;',
		'ic-circle-blank': '&#xe8be;',
		'ic-quote-left': '&#xe8bf;',
		'ic-quote-right': '&#xe8c0;',
		'ic-spinner': '&#xe8c1;',
		'ic-circle': '&#xe8c2;',
		'ic-reply2': '&#xe8c3;',
		'ic-github-alt': '&#xe8c4;',
		'ic-folder-close-alt': '&#xe8c5;',
		'ic-folder-open-alt': '&#xe8c6;',
		'ic-expand-alt': '&#xe8c7;',
		'ic-collapse-alt': '&#xe8c8;',
		'ic-smile': '&#xe8c9;',
		'ic-frown': '&#xe8ca;',
		'ic-meh': '&#xe8cb;',
		'ic-gamepad': '&#xe8cc;',
		'ic-keyboard2': '&#xe8cd;',
		'ic-flag-alt': '&#xe8ce;',
		'ic-flag-checkered': '&#xe8cf;',
		'ic-terminal': '&#xe8d0;',
		'ic-code2': '&#xe8d1;',
		'ic-reply-all2': '&#xe8d2;',
		'ic-star-half-full': '&#xe8d3;',
		'ic-location-arrow': '&#xe8d4;',
		'ic-crop': '&#xe8d5;',
		'ic-code-fork': '&#xe8d6;',
		'ic-unlink': '&#xe8d7;',
		'ic-question2': '&#xe8d8;',
		'ic-info3': '&#xe8d9;',
		'ic-exclamation': '&#xe8da;',
		'ic-superscript': '&#xe8db;',
		'ic-subscript': '&#xe8dc;',
		'ic-eraser': '&#xe8dd;',
		'ic-puzzle': '&#xe8de;',
		'ic-microphone2': '&#xe8df;',
		'ic-microphone-off': '&#xe8e0;',
		'ic-shield': '&#xe8e1;',
		'ic-calendar-empty': '&#xe8e2;',
		'ic-fire-extinguisher': '&#xe8e3;',
		'ic-rocket2': '&#xe8e4;',
		'ic-maxcdn': '&#xe8e5;',
		'ic-chevron-sign-left': '&#xe8e6;',
		'ic-chevron-sign-right': '&#xe8e7;',
		'ic-chevron-sign-up': '&#xe8e8;',
		'ic-chevron-sign-down': '&#xe8e9;',
		'ic-html5': '&#xe8ea;',
		'ic-css3': '&#xe8eb;',
		'ic-anchor': '&#xe8ec;',
		'ic-unlock-alt': '&#xe8ed;',
		'ic-bullseye': '&#xe8ee;',
		'ic-ellipsis-horizontal': '&#xe8ef;',
		'ic-ellipsis-vertical': '&#xe8f0;',
		'ic-rss-sign': '&#xe8f1;',
		'ic-play-sign': '&#xe8f2;',
		'ic-ticket2': '&#xe8f3;',
		'ic-minus-sign-alt': '&#xe8f4;',
		'ic-check-minus': '&#xe8f5;',
		'ic-level-up': '&#xe8f6;',
		'ic-level-down': '&#xe8f7;',
		'ic-check-sign': '&#xe8f8;',
		'ic-edit-sign': '&#xe8f9;',
		'ic-external-link-sign': '&#xe8fa;',
		'ic-share-sign': '&#xe8fb;',
		'ic-compass2': '&#xe8fc;',
		'ic-collapse': '&#xe8fd;',
		'ic-collapse-top': '&#xe8fe;',
		'ic-expand': '&#xe8ff;',
		'ic-euro': '&#xe900;',
		'ic-gbp': '&#xe901;',
		'ic-dollar': '&#xe902;',
		'ic-rupee': '&#xe903;',
		'ic-yen': '&#xe904;',
		'ic-renminbi': '&#xe905;',
		'ic-won': '&#xe906;',
		'ic-bitcoin': '&#xe907;',
		'ic-file2': '&#xe908;',
		'ic-file-text': '&#xe909;',
		'ic-sort-by-alphabet': '&#xe90a;',
		'ic-sort-by-alphabet-alt': '&#xe90b;',
		'ic-sort-by-attributes': '&#xe90c;',
		'ic-sort-by-attributes-alt': '&#xe90d;',
		'ic-sort-by-order': '&#xe90e;',
		'ic-sort-by-order-alt': '&#xe90f;',
		'ic-thumbs-up3': '&#xe910;',
		'ic-thumbs-down3': '&#xe911;',
		'ic-youtube-sign': '&#xe912;',
		'ic-youtube': '&#xe913;',
		'ic-xing': '&#xe914;',
		'ic-xing-sign': '&#xe915;',
		'ic-youtube-play': '&#xe916;',
		'ic-dropbox2': '&#xe917;',
		'ic-stackexchange': '&#xe918;',
		'ic-instagram2': '&#xe919;',
		'ic-flickr3': '&#xe91a;',
		'ic-adn': '&#xe91b;',
		'ic-bitbucket': '&#xe91c;',
		'ic-bitbucket-sign': '&#xe91d;',
		'ic-tumblr3': '&#xe91e;',
		'ic-tumblr-sign': '&#xe91f;',
		'ic-long-arrow-down': '&#xe920;',
		'ic-long-arrow-up': '&#xe921;',
		'ic-long-arrow-left': '&#xe922;',
		'ic-long-arrow-right': '&#xe923;',
		'ic-apple': '&#xe924;',
		'ic-windows': '&#xe925;',
		'ic-android': '&#xe926;',
		'ic-linux': '&#xe927;',
		'ic-dribbble3': '&#xe928;',
		'ic-skype3': '&#xe929;',
		'ic-foursquare': '&#xe92a;',
		'ic-trello': '&#xe92b;',
		'ic-female': '&#xe92c;',
		'ic-male': '&#xe92d;',
		'ic-gittip': '&#xe92e;',
		'ic-sun3': '&#xe92f;',
		'ic-moon2': '&#xe930;',
		'ic-archive2': '&#xe931;',
		'ic-bug': '&#xe932;',
		'ic-vk2': '&#xe933;',
		'ic-weibo': '&#xe934;',
		'ic-renren2': '&#xe935;',
		'ic-home2': '&#xe936;',
		'ic-home22': '&#xe76d;',
		'ic-home3': '&#xe937;',
		'ic-office': '&#xe938;',
		'ic-newspaper3': '&#xe76c;',
		'ic-pencil3': '&#xe939;',
		'ic-pencil4': '&#xe93a;',
		'ic-quill': '&#xe93b;',
		'ic-pen': '&#xe93c;',
		'ic-blog': '&#xe93d;',
		'ic-droplet2': '&#xe93e;',
		'ic-paint-format': '&#xe93f;',
		'ic-image': '&#xe940;',
		'ic-image2': '&#xe941;',
		'ic-images': '&#xe942;',
		'ic-camera3': '&#xe76e;',
		'ic-music42': '&#xe76f;',
		'ic-headphones2': '&#xe943;',
		'ic-play3': '&#xe944;',
		'ic-film2': '&#xe945;',
		'ic-camera4': '&#xe946;',
		'ic-dice': '&#xe947;',
		'ic-pacman': '&#xe948;',
		'ic-spades': '&#xe949;',
		'ic-clubs': '&#xe94a;',
		'ic-diamonds': '&#xe94b;',
		'ic-pawn': '&#xe94c;',
		'ic-bullhorn2': '&#xe94d;',
		'ic-connection': '&#xe94e;',
		'ic-podcast': '&#xe94f;',
		'ic-feed': '&#xe950;',
		'ic-book4': '&#xe951;',
		'ic-books': '&#xe952;',
		'ic-library': '&#xe953;',
		'ic-file3': '&#xe792;',
		'ic-profile': '&#xe791;',
		'ic-file4': '&#xe954;',
		'ic-file5': '&#xe955;',
		'ic-file6': '&#xe956;',
		'ic-copy2': '&#xe957;',
		'ic-copy3': '&#xe958;',
		'ic-copy4': '&#xe959;',
		'ic-paste2': '&#xe95a;',
		'ic-paste3': '&#xe95b;',
		'ic-paste4': '&#xe95c;',
		'ic-stack': '&#xe95d;',
		'ic-folder2': '&#xe95e;',
		'ic-folder-open2': '&#xe793;',
		'ic-tag22': '&#xe794;',
		'ic-tags2': '&#xe770;',
		'ic-barcode2': '&#xe95f;',
		'ic-qrcode2': '&#xe960;',
		'ic-ticket3': '&#xe961;',
		'ic-cart2': '&#xe962;',
		'ic-cart3': '&#xe963;',
		'ic-cart4': '&#xe964;',
		'ic-coin': '&#xe965;',
		'ic-credit2': '&#xe966;',
		'ic-calculate': '&#xe967;',
		'ic-support': '&#xe771;',
		'ic-phone3': '&#xe968;',
		'ic-phone-hang-up': '&#xe969;',
		'ic-address-book': '&#xe96a;',
		'ic-notebook': '&#xe96b;',
		'ic-envelope2': '&#xe790;',
		'ic-pushpin2': '&#xe78f;',
		'ic-location4': '&#xe78e;',
		'ic-location3': '&#xe78d;',
		'ic-compass22': '&#xe78c;',
		'ic-map3': '&#xe78b;',
		'ic-map2': '&#xe78a;',
		'ic-history2': '&#xe96c;',
		'ic-clock3': '&#xe788;',
		'ic-clock2': '&#xe96d;',
		'ic-alarm3': '&#xe789;',
		'ic-alarm2': '&#xe787;',
		'ic-bell22': '&#xe786;',
		'ic-stopwatch': '&#xe785;',
		'ic-calendar4': '&#xe784;',
		'ic-calendar3': '&#xe783;',
		'ic-print2': '&#xe782;',
		'ic-keyboard22': '&#xe781;',
		'ic-screen3': '&#xe780;',
		'ic-laptop2': '&#xe77f;',
		'ic-mobile3': '&#xe77e;',
		'ic-mobile22': '&#xe77d;',
		'ic-tablet2': '&#xe77c;',
		'ic-tv': '&#xe77b;',
		'ic-cabinet': '&#xe779;',
		'ic-drawer3': '&#xe77a;',
		'ic-drawer2': '&#xe772;',
		'ic-drawer4': '&#xe96e;',
		'ic-box-add': '&#xe96f;',
		'ic-box-remove': '&#xe970;',
		'ic-download22': '&#xe773;',
		'ic-upload32': '&#xe774;',
		'ic-disk2': '&#xe775;',
		'ic-storage': '&#xe776;',
		'ic-undo2': '&#xe777;',
		'ic-redo': '&#xe778;',
		'ic-flip': '&#xe971;',
		'ic-flip2': '&#xe972;',
		'ic-undo22': '&#xe796;',
		'ic-redo2': '&#xe797;',
		'ic-forward3': '&#xe798;',
		'ic-reply22': '&#xe795;',
		'ic-bubble': '&#xe799;',
		'ic-bubbles': '&#xe79a;',
		'ic-bubbles2': '&#xe973;',
		'ic-bubble2': '&#xe974;',
		'ic-bubbles3': '&#xe975;',
		'ic-bubbles4': '&#xe976;',
		'ic-user3': '&#xe79b;',
		'ic-users3': '&#xe79c;',
		'ic-user4': '&#xe977;',
		'ic-users2': '&#xe978;',
		'ic-user5': '&#xe979;',
		'ic-user6': '&#xe97a;',
		'ic-quotes-left': '&#xe97b;',
		'ic-busy': '&#xe97c;',
		'ic-spinner2': '&#xe97d;',
		'ic-spinner3': '&#xe97e;',
		'ic-spinner4': '&#xe97f;',
		'ic-spinner5': '&#xe980;',
		'ic-spinner6': '&#xe981;',
		'ic-spinner7': '&#xe982;',
		'ic-binoculars': '&#xe79f;',
		'ic-search3': '&#xe7a0;',
		'ic-zoom-in2': '&#xe7a1;',
		'ic-zoom-out2': '&#xe7a2;',
		'ic-expand2': '&#xe983;',
		'ic-contract': '&#xe984;',
		'ic-expand22': '&#xe79d;',
		'ic-contract2': '&#xe79e;',
		'ic-key3': '&#xe985;',
		'ic-key4': '&#xe986;',
		'ic-lock3': '&#xe987;',
		'ic-lock4': '&#xe988;',
		'ic-unlocked': '&#xe989;',
		'ic-wrench2': '&#xe98a;',
		'ic-settings': '&#xe98b;',
		'ic-equalizer': '&#xe7a3;',
		'ic-cog22': '&#xe7a4;',
		'ic-cogs2': '&#xe7a5;',
		'ic-cog3': '&#xe7a6;',
		'ic-hammer': '&#xe98c;',
		'ic-wand': '&#xe98d;',
		'ic-aid': '&#xe98e;',
		'ic-bug2': '&#xe98f;',
		'ic-pie2': '&#xe7a7;',
		'ic-stats': '&#xe7bd;',
		'ic-bars2': '&#xe7bc;',
		'ic-bars3': '&#xe990;',
		'ic-gift2': '&#xe7bb;',
		'ic-trophy22': '&#xe7ba;',
		'ic-glass2': '&#xe991;',
		'ic-mug': '&#xe992;',
		'ic-food2': '&#xe993;',
		'ic-leaf3': '&#xe994;',
		'ic-rocket22': '&#xe7b8;',
		'ic-meter': '&#xe7b9;',
		'ic-meter2': '&#xe995;',
		'ic-dashboard2': '&#xe996;',
		'ic-hammer2': '&#xe997;',
		'ic-fire2': '&#xe998;',
		'ic-lab': '&#xe999;',
		'ic-magnet3': '&#xe99a;',
		'ic-remove2': '&#xe99b;',
		'ic-remove3': '&#xe7a8;',
		'ic-briefcase22': '&#xe7b7;',
		'ic-airplane2': '&#xe7b5;',
		'ic-truck2': '&#xe7b6;',
		'ic-road2': '&#xe99c;',
		'ic-accessibility': '&#xe99d;',
		'ic-target2': '&#xe99e;',
		'ic-shield2': '&#xe99f;',
		'ic-lightning': '&#xe9a0;',
		'ic-switch2': '&#xe9a1;',
		'ic-power-cord': '&#xe9a2;',
		'ic-signup': '&#xe9a3;',
		'ic-list4': '&#xe9a4;',
		'ic-list5': '&#xe9a5;',
		'ic-numbered-list': '&#xe9a6;',
		'ic-menu2': '&#xe9a7;',
		'ic-menu3': '&#xe7be;',
		'ic-tree': '&#xe9a8;',
		'ic-cloud3': '&#xe7a9;',
		'ic-cloud-download2': '&#xe7aa;',
		'ic-cloud-upload2': '&#xe7ab;',
		'ic-download3': '&#xe7ac;',
		'ic-upload4': '&#xe7ad;',
		'ic-download4': '&#xe9a9;',
		'ic-upload5': '&#xe9aa;',
		'ic-globe2': '&#xe9ab;',
		'ic-earth2': '&#xe7ae;',
		'ic-link22': '&#xe7af;',
		'ic-flag22': '&#xe7b0;',
		'ic-attachment': '&#xe9ac;',
		'ic-eye2': '&#xe7b1;',
		'ic-eye-blocked': '&#xe7b2;',
		'ic-eye3': '&#xe9ad;',
		'ic-bookmark22': '&#xe7b3;',
		'ic-bookmarks2': '&#xe7b4;',
		'ic-brightness-medium': '&#xe9ae;',
		'ic-brightness-contrast': '&#xe9af;',
		'ic-contrast': '&#xe9b0;',
		'ic-star32': '&#xe7bf;',
		'ic-star4': '&#xe7c0;',
		'ic-star5': '&#xe7c1;',
		'ic-heart4': '&#xe7c2;',
		'ic-heart5': '&#xe7c3;',
		'ic-heart-broken': '&#xe7c4;',
		'ic-thumbs-up4': '&#xe9b1;',
		'ic-thumbs-up5': '&#xe9b2;',
		'ic-happy': '&#xe9b3;',
		'ic-happy2': '&#xe9b4;',
		'ic-smiley': '&#xe7c5;',
		'ic-smiley2': '&#xe9b5;',
		'ic-tongue': '&#xe7cd;',
		'ic-tongue2': '&#xe9b6;',
		'ic-sad': '&#xe7c6;',
		'ic-sad2': '&#xe9b7;',
		'ic-wink': '&#xe9b8;',
		'ic-wink2': '&#xe9b9;',
		'ic-grin': '&#xe7cc;',
		'ic-grin2': '&#xe9ba;',
		'ic-cool': '&#xe7c7;',
		'ic-cool2': '&#xe9bb;',
		'ic-angry': '&#xe7c8;',
		'ic-angry2': '&#xe9bc;',
		'ic-evil': '&#xe7c9;',
		'ic-evil2': '&#xe9bd;',
		'ic-shocked': '&#xe7ca;',
		'ic-shocked2': '&#xe9be;',
		'ic-confused': '&#xe7ce;',
		'ic-confused2': '&#xe9bf;',
		'ic-neutral': '&#xe7cf;',
		'ic-neutral2': '&#xe9c0;',
		'ic-wondering': '&#xe7cb;',
		'ic-wondering2': '&#xe9c1;',
		'ic-point-up': '&#xe7d3;',
		'ic-point-right': '&#xe7d0;',
		'ic-point-down': '&#xe7d1;',
		'ic-point-left': '&#xe7d2;',
		'ic-warning2': '&#xe7d4;',
		'ic-notification': '&#xe7d6;',
		'ic-question3': '&#xe7d5;',
		'ic-info32': '&#xe7d7;',
		'ic-info4': '&#xe7d8;',
		'ic-blocked2': '&#xe7d9;',
		'ic-cancel-circle': '&#xe9c2;',
		'ic-checkmark-circle': '&#xe9c3;',
		'ic-spam': '&#xe9c4;',
		'ic-close2': '&#xe7da;',
		'ic-checkmark2': '&#xe7db;',
		'ic-checkmark3': '&#xe9c5;',
		'ic-spell-check': '&#xe9c6;',
		'ic-minus42': '&#xe7dc;',
		'ic-plus42': '&#xe7dd;',
		'ic-enter': '&#xe7de;',
		'ic-exit': '&#xe7df;',
		'ic-play4': '&#xe9c7;',
		'ic-pause3': '&#xe9c8;',
		'ic-stop3': '&#xe9c9;',
		'ic-backward2': '&#xe9ca;',
		'ic-forward4': '&#xe9cb;',
		'ic-play5': '&#xe9cc;',
		'ic-pause4': '&#xe9cd;',
		'ic-stop4': '&#xe9ce;',
		'ic-backward3': '&#xe9cf;',
		'ic-forward5': '&#xe9d0;',
		'ic-first2': '&#xe9d1;',
		'ic-last2': '&#xe9d2;',
		'ic-previous2': '&#xe9d3;',
		'ic-next2': '&#xe9d4;',
		'ic-eject2': '&#xe9d5;',
		'ic-volume-high': '&#xe9d6;',
		'ic-volume-medium': '&#xe9d7;',
		'ic-volume-low': '&#xe9d8;',
		'ic-volume-mute': '&#xe9d9;',
		'ic-volume-mute2': '&#xe9da;',
		'ic-volume-increase': '&#xe9db;',
		'ic-volume-decrease': '&#xe9dc;',
		'ic-loop2': '&#xe9dd;',
		'ic-loop3': '&#xe9de;',
		'ic-loop4': '&#xe9df;',
		'ic-shuffle2': '&#xe9e0;',
		'ic-arrow-up-left': '&#xe9e1;',
		'ic-arrow-up9': '&#xe9e2;',
		'ic-arrow-up-right': '&#xe9e3;',
		'ic-arrow-right9': '&#xe9e4;',
		'ic-arrow-down-right': '&#xe9e5;',
		'ic-arrow-down10': '&#xe9e6;',
		'ic-arrow-down-left': '&#xe9e7;',
		'ic-arrow-left10': '&#xe9e8;',
		'ic-arrow-up-left2': '&#xe9e9;',
		'ic-arrow-up10': '&#xe9ea;',
		'ic-arrow-up-right2': '&#xe9eb;',
		'ic-arrow-right10': '&#xe9ec;',
		'ic-arrow-down-right2': '&#xe9ed;',
		'ic-arrow-down11': '&#xe9ee;',
		'ic-arrow-down-left2': '&#xe9ef;',
		'ic-arrow-left11': '&#xe9f0;',
		'ic-arrow-up-left3': '&#xe9f1;',
		'ic-arrow-up11': '&#xe9f2;',
		'ic-arrow-up-right3': '&#xe9f3;',
		'ic-arrow-right11': '&#xe9f4;',
		'ic-arrow-down-right3': '&#xe9f5;',
		'ic-arrow-down12': '&#xe9f6;',
		'ic-arrow-down-left3': '&#xe9f7;',
		'ic-arrow-left12': '&#xe9f8;',
		'ic-tab': '&#xe9f9;',
		'ic-checkbox-checked': '&#xe7e0;',
		'ic-checkbox-unchecked': '&#xe7e1;',
		'ic-checkbox-partial': '&#xe7e2;',
		'ic-radio-checked': '&#xe9fa;',
		'ic-radio-unchecked': '&#xe9fb;',
		'ic-crop2': '&#xe9fc;',
		'ic-scissors': '&#xe9fd;',
		'ic-filter2': '&#xe9fe;',
		'ic-filter3': '&#xe9ff;',
		'ic-font2': '&#xe7e3;',
		'ic-text-height2': '&#xea00;',
		'ic-text-width2': '&#xea01;',
		'ic-bold2': '&#xea02;',
		'ic-underline2': '&#xea03;',
		'ic-italic2': '&#xea04;',
		'ic-strikethrough2': '&#xea05;',
		'ic-omega': '&#xea06;',
		'ic-sigma': '&#xea07;',
		'ic-table2': '&#xea08;',
		'ic-table3': '&#xea09;',
		'ic-insert-template': '&#xe7e4;',
		'ic-pilcrow': '&#xea0a;',
		'ic-left-toright': '&#xea0b;',
		'ic-right-toleft': '&#xea0c;',
		'ic-paragraph-left': '&#xea0d;',
		'ic-paragraph-center': '&#xea0e;',
		'ic-paragraph-right': '&#xea0f;',
		'ic-paragraph-justify': '&#xea10;',
		'ic-paragraph-left2': '&#xea11;',
		'ic-paragraph-center2': '&#xea12;',
		'ic-paragraph-right2': '&#xea13;',
		'ic-paragraph-justify2': '&#xea14;',
		'ic-indent-increase': '&#xea15;',
		'ic-indent-decrease': '&#xea16;',
		'ic-new-tab': '&#xe7e6;',
		'ic-embed': '&#xe7e5;',
		'ic-code22': '&#xe7e7;',
		'ic-console': '&#xe7e8;',
		'ic-share22': '&#xe7e9;',
		'ic-mail2': '&#xea17;',
		'ic-mail3': '&#xea18;',
		'ic-mail4': '&#xea19;',
		'ic-mail5': '&#xea1a;',
		'ic-google': '&#xe7ea;',
		'ic-google-plus2': '&#xea1b;',
		'ic-google-plus3': '&#xea1c;',
		'ic-google-plus4': '&#xe7eb;',
		'ic-google-plus5': '&#xea1d;',
		'ic-google-drive': '&#xe7f1;',
		'ic-facebook5': '&#xea1e;',
		'ic-facebook52': '&#xe7f0;',
		'ic-facebook6': '&#xea1f;',
		'ic-instagram3': '&#xe7ef;',
		'ic-twitter32': '&#xe7ee;',
		'ic-twitter4': '&#xea20;',
		'ic-twitter5': '&#xea21;',
		'ic-feed2': '&#xea22;',
		'ic-feed3': '&#xea23;',
		'ic-feed4': '&#xea24;',
		'ic-youtube2': '&#xe7ed;',
		'ic-youtube3': '&#xea25;',
		'ic-vimeo3': '&#xe7ec;',
		'ic-vimeo22': '&#xea26;',
		'ic-vimeo4': '&#xea27;',
		'ic-lanyrd': '&#xea28;',
		'ic-flickr4': '&#xea29;',
		'ic-flickr5': '&#xea2a;',
		'ic-flickr6': '&#xea2b;',
		'ic-flickr32': '&#xe7f2;',
		'ic-picassa': '&#xea2c;',
		'ic-picassa2': '&#xea2d;',
		'ic-dribbble4': '&#xea2e;',
		'ic-dribbble5': '&#xea2f;',
		'ic-dribbble6': '&#xea30;',
		'ic-forrst': '&#xea31;',
		'ic-forrst2': '&#xea32;',
		'ic-deviantart': '&#xe7f3;',
		'ic-deviantart2': '&#xe7f4;',
		'ic-steam': '&#xe7fa;',
		'ic-steam2': '&#xea33;',
		'ic-github32': '&#xe7f5;',
		'ic-github4': '&#xe7f6;',
		'ic-github5': '&#xe7f7;',
		'ic-github6': '&#xea34;',
		'ic-github62': '&#xe7f8;',
		'ic-wordpress': '&#xe7f9;',
		'ic-wordpress2': '&#xea35;',
		'ic-joomla': '&#xe7fb;',
		'ic-blogger': '&#xea36;',
		'ic-blogger2': '&#xe7fc;',
		'ic-tumblr4': '&#xea37;',
		'ic-tumblr32': '&#xe7fd;',
		'ic-yahoo': '&#xe7fe;',
		'ic-tux': '&#xea38;',
		'ic-apple2': '&#xe7ff;',
		'ic-finder': '&#xea39;',
		'ic-android2': '&#xe800;',
		'ic-windows2': '&#xe801;',
		'ic-windows8': '&#xe802;',
		'ic-soundcloud3': '&#xe804;',
		'ic-soundcloud2': '&#xe803;',
		'ic-skype32': '&#xe805;',
		'ic-reddit': '&#xe806;',
		'ic-linkedin32': '&#xe807;',
		'ic-lastfm3': '&#xe808;',
		'ic-lastfm4': '&#xe809;',
		'ic-delicious': '&#xea3a;',
		'ic-stumbleupon3': '&#xea3b;',
		'ic-stumbleupon4': '&#xea3c;',
		'ic-stackoverflow': '&#xe80a;',
		'ic-pinterest32': '&#xe80b;',
		'ic-pinterest4': '&#xea3d;',
		'ic-xing2': '&#xe80c;',
		'ic-xing3': '&#xea3e;',
		'ic-flattr2': '&#xea3f;',
		'ic-foursquare2': '&#xe80d;',
		'ic-foursquare3': '&#xea40;',
		'ic-paypal2': '&#xe80e;',
		'ic-paypal3': '&#xea41;',
		'ic-paypal4': '&#xea42;',
		'ic-yelp': '&#xea43;',
		'ic-libreoffice': '&#xe80f;',
		'ic-file-pdf': '&#xe810;',
		'ic-file-openoffice': '&#xe811;',
		'ic-file-word': '&#xe812;',
		'ic-file-excel': '&#xe813;',
		'ic-file-zip': '&#xe814;',
		'ic-file-powerpoint': '&#xe815;',
		'ic-file-xml': '&#xe816;',
		'ic-file-css': '&#xe817;',
		'ic-html52': '&#xe818;',
		'ic-html53': '&#xea44;',
		'ic-css32': '&#xea45;',
		'ic-chrome': '&#xe819;',
		'ic-firefox': '&#xe81a;',
		'ic-IE': '&#xe81b;',
		'ic-opera': '&#xe81c;',
		'ic-safari': '&#xe81d;',
		'ic-IcoMoon': '&#xea46;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/ic-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
