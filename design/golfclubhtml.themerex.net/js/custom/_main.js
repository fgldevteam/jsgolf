

if (typeof N7_GOLF_CLUB_STORAGE == 'undefined') 
    var N7_GOLF_CLUB_STORAGE = {};
    if (N7_GOLF_CLUB_STORAGE['theme_font'] == '') N7_GOLF_CLUB_STORAGE['theme_font'] = 'Martel';
    N7_GOLF_CLUB_STORAGE['theme_skin_color'] = '';
    N7_GOLF_CLUB_STORAGE['theme_skin_bg_color'] = '';


if (typeof N7_GOLF_CLUB_STORAGE == 'undefined') 
    var N7_GOLF_CLUB_STORAGE = {};
    N7_GOLF_CLUB_STORAGE["strings"] = {
    ajax_error: "Invalid server answer",
    bookmark_add: "Add the bookmark",
    bookmark_added: "Current page has been successfully added to the bookmarks. You can see it in the right panel on the tab &#039;Bookmarks&#039;",
    bookmark_del: "Delete this bookmark",
    bookmark_title: "Enter bookmark title",
    bookmark_exists: "Current page already exists in the bookmarks list",
    search_error: "Error occurs in AJAX search! Please, type your query and press search icon for the traditional search way.",
    email_confirm: "On the e-mail address &quot;%s&quot; we sent a confirmation email. Please, open it and click on the link.",
    reviews_vote: "Thanks for your vote! New average rating is:",
    reviews_error: "Error saving your vote! Please, try again later.",
    error_like: "Error saving your like! Please, try again later.",
    error_global: "Global error text",
    name_empty: "The name can&#039;t be empty",
    name_long: "Too long name",
    email_empty: "Too short (or empty) email address",
    email_long: "Too long email address",
    email_not_valid: "Invalid email address",
    subject_empty: "The subject can&#039;t be empty",
    subject_long: "Too long subject",
    text_empty: "The message text can&#039;t be empty",
    text_long: "Too long message text",
    send_complete: "Send message complete!",
    send_error: "Transmit failed!",
    login_empty: "The Login field can&#039;t be empty",
    login_long: "Too long login field",
    login_success: "Login success! The page will be reloaded in 3 sec.",
    login_failed: "Login failed!",
    password_empty: "The password can&#039;t be empty and shorter then 4 characters",
    password_long: "Too long password",
    password_not_equal: "The passwords in both fields are not equal",
    registration_success: "Registration success! Please log in!",
    registration_failed: "Registration failed!",
    geocode_error: "Geocode was not successful for the following reason:",
    googlemap_not_avail: "Google map API not available!",
    editor_save_success: "Post content saved!",
    editor_save_error: "Error saving post data!",
    editor_delete_post: "You really want to delete the current post?",
    editor_delete_post_header: "Delete post",
    editor_delete_success: "Post deleted!",
    editor_delete_error: "Error deleting post!",
    editor_caption_cancel: "Cancel",
    editor_caption_close: "Close"
};

if (typeof N7_GOLF_CLUB_STORAGE == 'undefined') 
    var N7_GOLF_CLUB_STORAGE = {};
    N7_GOLF_CLUB_STORAGE['ajax_url'] = '#';
    N7_GOLF_CLUB_STORAGE['ajax_nonce'] = '38a669ed48';
    N7_GOLF_CLUB_STORAGE['site_url'] = 'http://golfclub-html.themerex.net';
    N7_GOLF_CLUB_STORAGE['vc_edit_mode'] = false;
    N7_GOLF_CLUB_STORAGE['theme_font'] = 'Martel';
    N7_GOLF_CLUB_STORAGE['theme_skin'] = 'no_less';
    N7_GOLF_CLUB_STORAGE['theme_skin_color'] = '';
    N7_GOLF_CLUB_STORAGE['theme_skin_bg_color'] = '';
    N7_GOLF_CLUB_STORAGE['slider_height'] = 100;
    N7_GOLF_CLUB_STORAGE['system_message'] = {
        message: '',
        status: '',
        header: ''
    };
    N7_GOLF_CLUB_STORAGE['user_logged_in'] = false;
    N7_GOLF_CLUB_STORAGE['toc_menu'] = '';
    N7_GOLF_CLUB_STORAGE['toc_menu_home'] = false;
    N7_GOLF_CLUB_STORAGE['toc_menu_top'] = false;
if (jQuery("body.menu_fixed").length > 0) {
    N7_GOLF_CLUB_STORAGE['menu_fixed'] = true;
} else {
    N7_GOLF_CLUB_STORAGE['menu_fixed'] = false;
}
    N7_GOLF_CLUB_STORAGE['menu_mobile'] = 1024;
    N7_GOLF_CLUB_STORAGE['menu_slider'] = false;
    N7_GOLF_CLUB_STORAGE['menu_cache'] = false;
    N7_GOLF_CLUB_STORAGE['demo_time'] = 0;
    N7_GOLF_CLUB_STORAGE['media_elements_enabled'] = true;
    N7_GOLF_CLUB_STORAGE['ajax_search_enabled'] = true;
    N7_GOLF_CLUB_STORAGE['ajax_search_min_length'] = 3;
    N7_GOLF_CLUB_STORAGE['ajax_search_delay'] = 200;
    N7_GOLF_CLUB_STORAGE['css_animation'] = true;
    N7_GOLF_CLUB_STORAGE['menu_animation_in'] = 'fadeInUp';
    N7_GOLF_CLUB_STORAGE['menu_animation_out'] = 'fadeOutDown';
    N7_GOLF_CLUB_STORAGE['popup_engine'] = 'magnific';
    N7_GOLF_CLUB_STORAGE['email_mask'] = '^([a-zA-Z0-9_\-]+\.)*[a-zA-Z0-9_\-]+@[a-z0-9_\-]+(\.[a-z0-9_\-]+)*\.[a-z]{2,6}$';
    N7_GOLF_CLUB_STORAGE['contacts_maxlength'] = 1000;
    N7_GOLF_CLUB_STORAGE['comments_maxlength'] = 1000;
    N7_GOLF_CLUB_STORAGE['remember_visitors_settings'] = false;
    N7_GOLF_CLUB_STORAGE['admin_mode'] = false;
    N7_GOLF_CLUB_STORAGE['isotope_resize_delta'] = 0.3;
    N7_GOLF_CLUB_STORAGE['error_message_box'] = null;
    N7_GOLF_CLUB_STORAGE['viewmore_busy'] = false;
    N7_GOLF_CLUB_STORAGE['video_resize_inited'] = false;
    N7_GOLF_CLUB_STORAGE['top_panel_height'] = 0;



jQuery(document).ready(function() {
    "use strict";
    main_slider_init();
    esg_init();

});

/*Revolution slider*/

function revslider_showDoubleJqueryError(sliderID) {
    var errorMessage = "Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";
    errorMessage += "<br> This includes make eliminates the revolution slider libraries, and make it not work.";
    errorMessage += "<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.";
    errorMessage += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.";
    errorMessage = "<span style='font-size:16px;color:#BC0C06;'>" + errorMessage + "</span>";
    jQuery(sliderID).show().html(errorMessage);
}
function main_slider_init() {
    "use strict";
    if (jQuery("#mainslider_1").length > 0) {
        
        var htmlDiv = document.getElementById("rs-plugin-settings-inline-css"); var htmlDivCss="";
        if(htmlDiv) {
            htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
        }else{
            var htmlDiv = document.createElement("div");
            htmlDiv.innerHTML = "<style>" + htmlDivCss + "</style>";
            document.getElementsByTagName("head")[0].appendChild(htmlDiv.childNodes[0]);
        }
        
        var htmlDiv = document.getElementById("rs-plugin-settings-inline-css"); 
        var htmlDivCss=".tp-caption.black,.black{color:#000;color:#fff;text-shadow:none;letter-spacing:2px}.tp-caption.black2,.black2{color:rgba(255,255,255,1.00);font-size:24px;line-height:22px;font-weight:400;font-style:italic;font-family:Crimson Text;padding:0px 0px 0px 0px;text-decoration:none;text-align:left;background-color:transparent;border-color:transparent;border-style:none;border-width:0px;border-radius:0px 0px 0px 0px;color:#fff;text-shadow:none;letter-spacing:0px}.tp-caption.Button,.Button{color:rgba(255,255,255,1.00);font-size:16px;line-height:48px;font-weight:600;font-style:normal;font-family:Raleway;padding:0px 40px 0px 40px;text-decoration:none;text-align:left;background-color:rgba(51,51,51,1.00);border-color:rgba(0,0,0,1.00);border-style:none;border-width:2px;border-radius:0px 0px 0px 0px;letter-spacing:1px}.tp-caption.Button:hover,.Button:hover{color:rgba(51,51,51,1.00);text-decoration:none;background-color:rgba(255,255,255,1.00);border-color:rgba(0,0,0,1.00);border-style:none;border-width:2px;border-radius:0px 0px 0px 0px}";
        if(htmlDiv) {
            htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
        }else{
            var htmlDiv = document.createElement("div");
            htmlDiv.innerHTML = "<style>" + htmlDivCss + "</style>";
            document.getElementsByTagName("head")[0].appendChild(htmlDiv.childNodes[0]);
        }
        
        var setREVStartSize=function(){
            try{var e=new Object,i=jQuery(window).width(),t=9999,r=0,n=0,l=0,f=0,s=0,h=0;
                e.c = jQuery('#rev_slider_1_1');
                e.gridwidth = [1240];
                e.gridheight = [955];

                e.sliderLayout = "fullwidth";
                if(e.responsiveLevels&&(jQuery.each(e.responsiveLevels,function(e,f){f>i&&(t=r=f,l=e),i>f&&f>r&&(r=f,n=e)}),t>r&&(l=n)),f=e.gridheight[l]||e.gridheight[0]||e.gridheight,s=e.gridwidth[l]||e.gridwidth[0]||e.gridwidth,h=i/s,h=h>1?1:h,f=Math.round(h*f),"fullscreen"==e.sliderLayout){var u=(e.c.width(),jQuery(window).height());if(void 0!=e.fullScreenOffsetContainer){var c=e.fullScreenOffsetContainer.split(",");if (c) jQuery.each(c,function(e,i){u=jQuery(i).length>0?u-jQuery(i).outerHeight(!0):u}),e.fullScreenOffset.split("%").length>1&&void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0?u-=jQuery(window).height()*parseInt(e.fullScreenOffset,0)/100:void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0&&(u-=parseInt(e.fullScreenOffset,0))}f=u}else void 0!=e.minHeight&&f<e.minHeight&&(f=e.minHeight);e.c.closest(".rev_slider_wrapper").css({height:f})

               }catch(d){console.log("Failure at Presize of Slider:"+d)}
        };

        setREVStartSize();

        var tpj=jQuery;

        var revapi1;
        tpj(document).ready(function() {
            if(tpj("#rev_slider_1_1").revolution == undefined){
                revslider_showDoubleJqueryError("#rev_slider_1_1");
            }else{
                revapi1 = tpj("#rev_slider_1_1").show().revolution({
                    sliderType:"standard",
                    jsFileLocation:"js/vendor/revslider/public/assets/js/",
                    sliderLayout:"fullwidth",
                    dottedOverlay:"none",
                    delay:11000,
                    navigation: {
                        keyboardNavigation:"off",
                        keyboard_direction: "horizontal",
                        mouseScrollNavigation:"off",
                        mouseScrollReverse:"default",
                        onHoverStop:"off",
                        arrows: {
                            style:"uranus",
                            enable:true,
                            hide_onmobile:false,
                            hide_onleave:true,
                            hide_delay:200,
                            hide_delay_mobile:1200,
                            tmp:'',
                            left: {
                                h_align:"left",
                                v_align:"center",
                                h_offset:20,
                                v_offset:0
                            },
                            right: {
                                h_align:"right",
                                v_align:"center",
                                h_offset:20,
                                v_offset:0
                            }
                        }
                    },
                    visibilityLevels:[1240,1024,778,480],
                    gridwidth:1240,
                    gridheight:955,
                    lazyType:"none",
                    shadow:0,
                    spinner:"spinner0",
                    stopLoop:"off",
                    stopAfterLoops:-1,
                    stopAtSlide:-1,
                    shuffle:"off",
                    autoHeight:"off",
                    hideThumbsOnMobile:"off",
                    hideSliderAtLimit:0,
                    hideCaptionAtLimit:0,
                    hideAllCaptionAtLilmit:0,
                    debugMode:false,
                    fallbacks: {
                        simplifyAll:"off",
                        nextSlideOnWindowFocus:"off",
                        disableFocusListener:false,
                    }
                });
            }
            
        });	/*ready*/
        var htmlDivCss = unescape("%23rev_slider_1_1%20.uranus.tparrows%20%7B%0A%20%20width%3A50px%3B%0A%20%20height%3A50px%3B%0A%20%20background%3Argba%28255%2C255%2C255%2C0%29%3B%0A%20%7D%0A%20%23rev_slider_1_1%20.uranus.tparrows%3Abefore%20%7B%0A%20width%3A50px%3B%0A%20height%3A50px%3B%0A%20line-height%3A50px%3B%0A%20font-size%3A40px%3B%0A%20transition%3Aall%200.3s%3B%0A-webkit-transition%3Aall%200.3s%3B%0A%20%7D%0A%20%0A%20%20%23rev_slider_1_1%20.uranus.tparrows%3Ahover%3Abefore%20%7B%0A%20%20%20%20opacity%3A0.75%3B%0A%20%20%7D%0A");
        var htmlDiv = document.getElementById('rs-plugin-settings-inline-css');
        if(htmlDiv) {
            htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
        }
        else{
            var htmlDiv = document.createElement('div');
            htmlDiv.innerHTML = '<style>' + htmlDivCss + '</style>';
            document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[0]);
        }
        
    }
    if (jQuery("#mainslider_2").length > 0) {

        var htmlDiv = document.getElementById("rs-plugin-settings-inline-css"); var htmlDivCss="";
        if(htmlDiv) {
            htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
        }else{
            var htmlDiv = document.createElement("div");
            htmlDiv.innerHTML = "<style>" + htmlDivCss + "</style>";
            document.getElementsByTagName("head")[0].appendChild(htmlDiv.childNodes[0]);
        }
        var htmlDiv = document.getElementById("rs-plugin-settings-inline-css"); var htmlDivCss=".tp-caption.black,.black{color:#000;color:#fff;text-shadow:none;letter-spacing:2px}.tp-caption.black2,.black2{color:rgba(255,255,255,1.00);font-size:24px;line-height:22px;font-weight:400;font-style:italic;font-family:Crimson Text;padding:0px 0px 0px 0px;text-decoration:none;text-align:left;background-color:transparent;border-color:transparent;border-style:none;border-width:0px;border-radius:0px 0px 0px 0px;color:#fff;text-shadow:none;letter-spacing:0px}.tp-caption.Button,.Button{color:rgba(255,255,255,1.00);font-size:16px;line-height:48px;font-weight:600;font-style:normal;font-family:Raleway;padding:0px 40px 0px 40px;text-decoration:none;text-align:left;background-color:rgba(51,51,51,1.00);border-color:rgba(0,0,0,1.00);border-style:none;border-width:2px;border-radius:0px 0px 0px 0px;letter-spacing:1px}.tp-caption.Button:hover,.Button:hover{color:rgba(51,51,51,1.00);text-decoration:none;background-color:rgba(255,255,255,1.00);border-color:rgba(0,0,0,1.00);border-style:none;border-width:2px;border-radius:0px 0px 0px 0px}";
        if(htmlDiv) {
            htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
        }else{
            var htmlDiv = document.createElement("div");
            htmlDiv.innerHTML = "<style>" + htmlDivCss + "</style>";
            document.getElementsByTagName("head")[0].appendChild(htmlDiv.childNodes[0]);
        }
        
        var setREVStartSize=function(){
            try{var e=new Object,i=jQuery(window).width(),t=9999,r=0,n=0,l=0,f=0,s=0,h=0;
                e.c = jQuery('#rev_slider_1_1');
                e.gridwidth = [1240];
                e.gridheight = [955];

                e.sliderLayout = "fullwidth";
                if(e.responsiveLevels&&(jQuery.each(e.responsiveLevels,function(e,f){f>i&&(t=r=f,l=e),i>f&&f>r&&(r=f,n=e)}),t>r&&(l=n)),f=e.gridheight[l]||e.gridheight[0]||e.gridheight,s=e.gridwidth[l]||e.gridwidth[0]||e.gridwidth,h=i/s,h=h>1?1:h,f=Math.round(h*f),"fullscreen"==e.sliderLayout){var u=(e.c.width(),jQuery(window).height());if(void 0!=e.fullScreenOffsetContainer){var c=e.fullScreenOffsetContainer.split(",");if (c) jQuery.each(c,function(e,i){u=jQuery(i).length>0?u-jQuery(i).outerHeight(!0):u}),e.fullScreenOffset.split("%").length>1&&void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0?u-=jQuery(window).height()*parseInt(e.fullScreenOffset,0)/100:void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0&&(u-=parseInt(e.fullScreenOffset,0))}f=u}else void 0!=e.minHeight&&f<e.minHeight&&(f=e.minHeight);e.c.closest(".rev_slider_wrapper").css({height:f})

               }catch(d){console.log("Failure at Presize of Slider:"+d)}
        };

        setREVStartSize();

        var tpj=jQuery;

        var revapi1;
        tpj(document).ready(function() {
            if(tpj("#rev_slider_1_1").revolution == undefined){
                revslider_showDoubleJqueryError("#rev_slider_1_1");
            }else{
                revapi1 = tpj("#rev_slider_1_1").show().revolution({
                    sliderType:"standard",
                    jsFileLocation:"js/vendor/revslider/public/assets/js/",
                    sliderLayout:"fullwidth",
                    dottedOverlay:"none",
                    delay:11000,
                    navigation: {
                        keyboardNavigation:"off",
                        keyboard_direction: "horizontal",
                        mouseScrollNavigation:"off",
                        mouseScrollReverse:"default",
                        onHoverStop:"off",
                        arrows: {
                            style:"uranus",
                            enable:true,
                            hide_onmobile:false,
                            hide_onleave:true,
                            hide_delay:200,
                            hide_delay_mobile:1200,
                            tmp:'',
                            left: {
                                h_align:"left",
                                v_align:"center",
                                h_offset:20,
                                v_offset:0
                            },
                            right: {
                                h_align:"right",
                                v_align:"center",
                                h_offset:20,
                                v_offset:0
                            }
                        }
                    },
                    visibilityLevels:[1240,1024,778,480],
                    gridwidth:1240,
                    gridheight:955,
                    lazyType:"none",
                    shadow:0,
                    spinner:"spinner0",
                    stopLoop:"off",
                    stopAfterLoops:-1,
                    stopAtSlide:-1,
                    shuffle:"off",
                    autoHeight:"off",
                    hideThumbsOnMobile:"off",
                    hideSliderAtLimit:0,
                    hideCaptionAtLimit:0,
                    hideAllCaptionAtLilmit:0,
                    debugMode:false,
                    fallbacks: {
                        simplifyAll:"off",
                        nextSlideOnWindowFocus:"off",
                        disableFocusListener:false,
                    }
                });
            }
        });	/*ready*/
        
        var htmlDivCss = unescape("%23rev_slider_1_1%20.uranus.tparrows%20%7B%0A%20%20width%3A50px%3B%0A%20%20height%3A50px%3B%0A%20%20background%3Argba%28255%2C255%2C255%2C0%29%3B%0A%20%7D%0A%20%23rev_slider_1_1%20.uranus.tparrows%3Abefore%20%7B%0A%20width%3A50px%3B%0A%20height%3A50px%3B%0A%20line-height%3A50px%3B%0A%20font-size%3A40px%3B%0A%20transition%3Aall%200.3s%3B%0A-webkit-transition%3Aall%200.3s%3B%0A%20%7D%0A%20%0A%20%20%23rev_slider_1_1%20.uranus.tparrows%3Ahover%3Abefore%20%7B%0A%20%20%20%20opacity%3A0.75%3B%0A%20%20%7D%0A");
        var htmlDiv = document.getElementById('rs-plugin-settings-inline-css');
        if(htmlDiv) {
            htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
        }
        else{
            var htmlDiv = document.createElement('div');
            htmlDiv.innerHTML = '<style>' + htmlDivCss + '</style>';
            document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[0]);
        }
    }
}
    

/* Essential Grid */

function esg_init() {
    if (jQuery("#esg-grid-4-1").length > 0) {
        "use strict";
        function eggbfc(winw,resultoption) {
            var lasttop = winw,
                lastbottom = 0,
                smallest =9999,
                largest = 0,
                samount = 0,
                lamoung = 0,
                lastamount = 0,
                resultid = 0,
                resultidb = 0,
                responsiveEntries = [
                    { width:1400,amount:4},
                    { width:1170,amount:4},
                    { width:1024,amount:4},
                    { width:960,amount:4},
                    { width:778,amount:4},
                    { width:640,amount:4},
                    { width:480,amount:1}
                ];
            if (responsiveEntries!=undefined && responsiveEntries.length>0)
                jQuery.each(responsiveEntries, function(index,obj) {
                    var curw = obj.width != undefined ? obj.width : 0,
                        cura = obj.amount != undefined ? obj.amount : 0;
                    if (smallest>curw) {
                        smallest = curw;
                        samount = cura;
                        resultidb = index;
                    }
                    if (largest<curw) {
                        largest = curw;
                        lamount = cura;
                    }
                    if (curw>lastbottom && curw<=lasttop) {
                        lastbottom = curw;
                        lastamount = cura;
                        resultid = index;
                    }
                })
                if (smallest>winw) {
                    lastamount = samount;
                    resultid = resultidb;
                }
            var obj = new Object;
            obj.index = resultid;
            obj.column = lastamount;
            if (resultoption=="id")
                return obj;
            else
                return lastamount;
        }
        if ("even"=="even") {
            var coh=0,
                container = jQuery("#esg-grid-4-1");
            var	cwidth = container.width(),
                ar = "4:4",
                gbfc = eggbfc(jQuery(window).width(),"id"),
                row = 3;
            ar = ar.split(":");
            aratio=parseInt(ar[0],0) / parseInt(ar[1],0);
            coh = cwidth / aratio;
            coh = coh/gbfc.column*row;
            var ul = container.find("ul").first();
            ul.css({display:"block",height:coh+"px"});
        }
        var essapi_4;
        jQuery(document).ready(function() {
            essapi_4 = jQuery("#esg-grid-4-1").tpessential({
                gridID:4,
                layout:"even",
                forceFullWidth:"off",
                lazyLoad:"off",
                row:3,
                loadMoreAjaxToken:"b0b35b0116",
                loadMoreAjaxUrl:"#",
                loadMoreAjaxAction:"Essential_Grid_Front_request_ajax",
                ajaxContentTarget:"ess-grid-ajax-container-",
                ajaxScrollToOffset:"0",
                ajaxCloseButton:"off",
                ajaxContentSliding:"on",
                ajaxScrollToOnLoad:"on",
                ajaxNavButton:"off",
                ajaxCloseType:"type1",
                ajaxCloseInner:"false",
                ajaxCloseStyle:"light",
                ajaxClosePosition:"tr",
                space:0,
                pageAnimation:"fade",
                paginationScrollToTop:"off",
                spinner:"spinner0",
                evenGridMasonrySkinPusher:"off",
                lightBoxMode:"single",
                animSpeed:1000,
                delayBasic:1,
                mainhoverdelay:1,
                filterType:"single",
                showDropFilter:"hover",
                filterGroupClass:"esg-fgc-4",
                googleFonts:['Open+Sans:300,400,600,700,800','Raleway:100,200,300,400,500,600,700,800,900','Droid+Serif:400,700'],
                aspectratio:"4:4",
                responsiveEntries: [
                    { width:1400,amount:4},
                    { width:1170,amount:4},
                    { width:1024,amount:4},
                    { width:960,amount:4},
                    { width:778,amount:4},
                    { width:640,amount:4},
                    { width:480,amount:1}
                ]
            });

            try{
                jQuery("#esg-grid-4-1 .esgbox").esgbox({
                    padding : [0,0,0,0],
                    afterLoad:function() { 
                        if (this.element.hasClass("esgboxhtml5")) {
                            var mp = this.element.data("mp4"),
                                ogv = this.element.data("ogv"),
                                webm = this.element.data("webm");
                            this.content ='<div style="width:100%;height:100%;"><video autoplay="true" loop="" class="rowbgimage" poster="" width="100%" height="auto"><source src="'+mp+'" type="video/mp4"><source src="'+webm+'" type="video/webm"><source src="'+ogv+'" type="video/ogg"></video></div>';	
                            var riint = setInterval(function() {jQuery(window).trigger("resize");},100); setTimeout(function() {clearInterval(riint);},2500);
                        };
                    },
                    beforeShow : function () { 
                        this.title = jQuery(this.element).attr('lgtitle');
                        if (this.title) {
                            this.title="";
                            this.title =  '<div style="padding:0px 0px 0px 0px">'+this.title+'</div>';
                        }
                    },
                    afterShow : function() {
                    },
                    openEffect : 'fade',
                    closeEffect : 'fade',
                    nextEffect : 'fade',
                    prevEffect : 'fade',
                    openSpeed : 'normal',
                    closeSpeed : 'normal',
                    nextSpeed : 'normal',
                    prevSpeed : 'normal',
                    helpers : {
                        media : {},
                        title : {
                            type:""
                        }
                    }
                });

            } catch (e) {}

        });
    }
    if (jQuery("#esg-grid-3-1").length > 0) {
        "use strict";    
        function eggbfc(winw,resultoption) {
            var lasttop = winw,
                lastbottom = 0,
                smallest =9999,
                largest = 0,
                samount = 0,
                lamoung = 0,
                lastamount = 0,
                resultid = 0,
                resultidb = 0,
                responsiveEntries = [
                    { width:1400,amount:4},
                    { width:1170,amount:4},
                    { width:1024,amount:4},
                    { width:960,amount:4},
                    { width:778,amount:4},
                    { width:640,amount:4},
                    { width:480,amount:1}
                ];
            if (responsiveEntries!=undefined && responsiveEntries.length>0)
                jQuery.each(responsiveEntries, function(index,obj) {
                    var curw = obj.width != undefined ? obj.width : 0,
                        cura = obj.amount != undefined ? obj.amount : 0;
                    if (smallest>curw) {
                        smallest = curw;
                        samount = cura;
                        resultidb = index;
                    }
                    if (largest<curw) {
                        largest = curw;
                        lamount = cura;
                    }
                    if (curw>lastbottom && curw<=lasttop) {
                        lastbottom = curw;
                        lastamount = cura;
                        resultid = index;
                    }
                })
                if (smallest>winw) {
                    lastamount = samount;
                    resultid = resultidb;
                }
            var obj = new Object;
            obj.index = resultid;
            obj.column = lastamount;
            if (resultoption=="id")
                return obj;
            else
                return lastamount;
        }
        if ("masonry"=="even") {
            var coh=0,
                container = jQuery("#esg-grid-3-1");
            var	cwidth = container.width(),
                ar = "4:4",
                gbfc = eggbfc(jQuery(window).width(),"id"),
                row = 6;
            ar = ar.split(":");
            aratio=parseInt(ar[0],0) / parseInt(ar[1],0);
            coh = cwidth / aratio;
            coh = coh/gbfc.column*row;
            var ul = container.find("ul").first();
            ul.css({display:"block",height:coh+"px"});
        }
        var essapi_3;
        jQuery(document).ready(function() {
            essapi_3 = jQuery("#esg-grid-3-1").tpessential({
                gridID:3,
                layout:"masonry",
                forceFullWidth:"off",
                lazyLoad:"off",
                row:6,
                loadMoreAjaxToken:"b0b35b0116",
                loadMoreAjaxUrl:"#",
                loadMoreAjaxAction:"Essential_Grid_Front_request_ajax",
                ajaxContentTarget:"ess-grid-ajax-container-",
                ajaxScrollToOffset:"0",
                ajaxCloseButton:"off",
                ajaxContentSliding:"on",
                ajaxScrollToOnLoad:"on",
                ajaxNavButton:"off",
                ajaxCloseType:"type1",
                ajaxCloseInner:"false",
                ajaxCloseStyle:"light",
                ajaxClosePosition:"tr",
                space:0,
                pageAnimation:"fade",
                paginationScrollToTop:"off",
                spinner:"spinner0",
                lightBoxMode:"single",
                animSpeed:1000,
                delayBasic:1,
                mainhoverdelay:1,
                filterType:"single",
                showDropFilter:"hover",
                filterGroupClass:"esg-fgc-3",
                googleFonts:['Open+Sans:300,400,600,700,800','Raleway:100,200,300,400,500,600,700,800,900','Droid+Serif:400,700'],
                responsiveEntries: [
                    { width:1400,amount:4},
                    { width:1170,amount:4},
                    { width:1024,amount:4},
                    { width:960,amount:4},
                    { width:778,amount:4},
                    { width:640,amount:4},
                    { width:480,amount:1}
                ]
            });

            try{
                jQuery("#esg-grid-3-1 .esgbox").esgbox({
                    padding : [0,0,0,0],
                    afterLoad:function() { 
                        if (this.element.hasClass("esgboxhtml5")) {
                            var mp = this.element.data("mp4"),
                                ogv = this.element.data("ogv"),
                                webm = this.element.data("webm");
                            this.content ='<div style="width:100%;height:100%;"><video autoplay="true" loop="" class="rowbgimage" poster="" width="100%" height="auto"><source src="'+mp+'" type="video/mp4"><source src="'+webm+'" type="video/webm"><source src="'+ogv+'" type="video/ogg"></video></div>';	
                            var riint = setInterval(function() {jQuery(window).trigger("resize");},100); setTimeout(function() {clearInterval(riint);},2500);
                        };
                    },
                    beforeShow : function () { 
                        this.title = jQuery(this.element).attr('lgtitle');
                        if (this.title) {
                            this.title="";
                            this.title =  '<div style="padding:0px 0px 0px 0px">'+this.title+'</div>';
                        }
                    },
                    afterShow : function() {
                    },
                    openEffect : 'fade',
                    closeEffect : 'fade',
                    nextEffect : 'fade',
                    prevEffect : 'fade',
                    openSpeed : 'normal',
                    closeSpeed : 'normal',
                    nextSpeed : 'normal',
                    prevSpeed : 'normal',
                    helpers : {
                        media : {},
                        title : {
                            type:""
                        }
                    }
                });

            } catch (e) {}

        });
        
    }
    if (jQuery("#esg-grid-2-1").length > 0) {
        "use strict";
        function eggbfc(winw,resultoption) {
            var lasttop = winw,
                lastbottom = 0,
                smallest =9999,
                largest = 0,
                samount = 0,
                lamoung = 0,
                lastamount = 0,
                resultid = 0,
                resultidb = 0,
                responsiveEntries = [
                    { width:1400,amount:4},
                    { width:1170,amount:4},
                    { width:1024,amount:4},
                    { width:960,amount:4},
                    { width:778,amount:4},
                    { width:640,amount:4},
                    { width:480,amount:1}
                ];
            if (responsiveEntries!=undefined && responsiveEntries.length>0)
                jQuery.each(responsiveEntries, function(index,obj) {
                    var curw = obj.width != undefined ? obj.width : 0,
                        cura = obj.amount != undefined ? obj.amount : 0;
                    if (smallest>curw) {
                        smallest = curw;
                        samount = cura;
                        resultidb = index;
                    }
                    if (largest<curw) {
                        largest = curw;
                        lamount = cura;
                    }
                    if (curw>lastbottom && curw<=lasttop) {
                        lastbottom = curw;
                        lastamount = cura;
                        resultid = index;
                    }
                })
                if (smallest>winw) {
                    lastamount = samount;
                    resultid = resultidb;
                }
            var obj = new Object;
            obj.index = resultid;
            obj.column = lastamount;
            if (resultoption=="id")
                return obj;
            else
                return lastamount;
        }
        if ("cobbles"=="even") {
            var coh=0,
                container = jQuery("#esg-grid-2-1");
            var	cwidth = container.width(),
                ar = "4:4",
                gbfc = eggbfc(jQuery(window).width(),"id"),
                row = 6;
            ar = ar.split(":");
            aratio=parseInt(ar[0],0) / parseInt(ar[1],0);
            coh = cwidth / aratio;
            coh = coh/gbfc.column*row;
            var ul = container.find("ul").first();
            ul.css({display:"block",height:coh+"px"});
        }
        var essapi_2;
        jQuery(document).ready(function() {
            essapi_2 = jQuery("#esg-grid-2-1").tpessential({
                gridID:2,
                layout:"cobbles",
                forceFullWidth:"off",
                lazyLoad:"off",
                row:6,
                loadMoreAjaxToken:"b0b35b0116",
                loadMoreAjaxUrl:"#",
                loadMoreAjaxAction:"Essential_Grid_Front_request_ajax",
                ajaxContentTarget:"ess-grid-ajax-container-",
                ajaxScrollToOffset:"0",
                ajaxCloseButton:"off",
                ajaxContentSliding:"on",
                ajaxScrollToOnLoad:"on",
                ajaxNavButton:"off",
                ajaxCloseType:"type1",
                ajaxCloseInner:"false",
                ajaxCloseStyle:"light",
                ajaxClosePosition:"tr",
                space:0,
                pageAnimation:"fade",
                paginationScrollToTop:"off",
                spinner:"spinner0",
                lightBoxMode:"single",
                animSpeed:1000,
                delayBasic:1,
                mainhoverdelay:1,
                filterType:"single",
                showDropFilter:"hover",
                filterGroupClass:"esg-fgc-2",
                googleFonts:['Open+Sans:300,400,600,700,800','Raleway:100,200,300,400,500,600,700,800,900','Droid+Serif:400,700'],
                aspectratio:"4:4",
                responsiveEntries: [
                    { width:1400,amount:4},
                    { width:1170,amount:4},
                    { width:1024,amount:4},
                    { width:960,amount:4},
                    { width:778,amount:4},
                    { width:640,amount:4},
                    { width:480,amount:1}
                ]
            });

            try{
                jQuery("#esg-grid-2-1 .esgbox").esgbox({
                    padding : [0,0,0,0],
                    afterLoad:function() { 
                        if (this.element.hasClass("esgboxhtml5")) {
                            var mp = this.element.data("mp4"),
                                ogv = this.element.data("ogv"),
                                webm = this.element.data("webm");
                            this.content ='<div style="width:100%;height:100%;"><video autoplay="true" loop="" class="rowbgimage" poster="" width="100%" height="auto"><source src="'+mp+'" type="video/mp4"><source src="'+webm+'" type="video/webm"><source src="'+ogv+'" type="video/ogg"></video></div>';	
                            var riint = setInterval(function() {jQuery(window).trigger("resize");},100); setTimeout(function() {clearInterval(riint);},2500);
                        };
                    },
                    beforeShow : function () { 
                        this.title = jQuery(this.element).attr('lgtitle');
                        if (this.title) {
                            this.title="";
                            this.title =  '<div style="padding:0px 0px 0px 0px">'+this.title+'</div>';
                        }
                    },
                    afterShow : function() {
                    },
                    openEffect : 'fade',
                    closeEffect : 'fade',
                    nextEffect : 'fade',
                    prevEffect : 'fade',
                    openSpeed : 'normal',
                    closeSpeed : 'normal',
                    nextSpeed : 'normal',
                    prevSpeed : 'normal',
                    helpers : {
                        media : {},
                        title : {
                            type:""
                        }
                    }
                });

            } catch (e) {}

        });
    }
    if (jQuery("#esg-grid-7-1").length > 0) {
        "use strict";
        function eggbfc(winw,resultoption) {
            var lasttop = winw,
                lastbottom = 0,
                smallest =9999,
                largest = 0,
                samount = 0,
                lamoung = 0,
                lastamount = 0,
                resultid = 0,
                resultidb = 0,
                responsiveEntries = [
                    { width:1400,amount:4},
                    { width:1170,amount:4},
                    { width:1024,amount:4},
                    { width:960,amount:4},
                    { width:778,amount:4},
                    { width:640,amount:4},
                    { width:480,amount:1}
                ];
            if (responsiveEntries!=undefined && responsiveEntries.length>0)
                jQuery.each(responsiveEntries, function(index,obj) {
                    var curw = obj.width != undefined ? obj.width : 0,
                        cura = obj.amount != undefined ? obj.amount : 0;
                    if (smallest>curw) {
                        smallest = curw;
                        samount = cura;
                        resultidb = index;
                    }
                    if (largest<curw) {
                        largest = curw;
                        lamount = cura;
                    }
                    if (curw>lastbottom && curw<=lasttop) {
                        lastbottom = curw;
                        lastamount = cura;
                        resultid = index;
                    }
                })
                if (smallest>winw) {
                    lastamount = samount;
                    resultid = resultidb;
                }
            var obj = new Object;
            obj.index = resultid;
            obj.column = lastamount;
            if (resultoption=="id")
                return obj;
            else
                return lastamount;
        }
        if ("cobbles"=="even") {
            var coh=0,
                container = jQuery("#esg-grid-7-1");
            var	cwidth = container.width(),
                ar = "4:4",
                gbfc = eggbfc(jQuery(window).width(),"id"),
                row = 3;
            ar = ar.split(":");
            aratio=parseInt(ar[0],0) / parseInt(ar[1],0);
            coh = cwidth / aratio;
            coh = coh/gbfc.column*row;
            var ul = container.find("ul").first();
            ul.css({display:"block",height:coh+"px"});
        }
        var essapi_7;
        jQuery(document).ready(function() {
            essapi_7 = jQuery("#esg-grid-7-1").tpessential({
                gridID:7,
                layout:"cobbles",
                forceFullWidth:"off",
                lazyLoad:"off",
                row:3,
                loadMoreAjaxToken:"db528ebce0",
                loadMoreAjaxUrl:"http://golfclub.themerex.net/wp-admin/admin-ajax.php",
                loadMoreAjaxAction:"Essential_Grid_Front_request_ajax",
                ajaxContentTarget:"ess-grid-ajax-container-",
                ajaxScrollToOffset:"0",
                ajaxCloseButton:"off",
                ajaxContentSliding:"on",
                ajaxScrollToOnLoad:"on",
                ajaxNavButton:"off",
                ajaxCloseType:"type1",
                ajaxCloseInner:"false",
                ajaxCloseStyle:"light",
                ajaxClosePosition:"tr",
                space:0,
                pageAnimation:"fade",
                paginationScrollToTop:"off",
                spinner:"spinner0",
                lightBoxMode:"single",
                animSpeed:1000,
                delayBasic:1,
                mainhoverdelay:1,
                filterType:"single",
                showDropFilter:"hover",
                filterGroupClass:"esg-fgc-7",
                googleFonts:['Open+Sans:300,400,600,700,800','Raleway:100,200,300,400,500,600,700,800,900','Droid+Serif:400,700'],
                aspectratio:"4:4",
                responsiveEntries: [
                    { width:1400,amount:4},
                    { width:1170,amount:4},
                    { width:1024,amount:4},
                    { width:960,amount:4},
                    { width:778,amount:4},
                    { width:640,amount:4},
                    { width:480,amount:1}
                ]
            });

            try{
                jQuery("#esg-grid-7-1 .esgbox").esgbox({
                    padding : [0,0,0,0],
                    afterLoad:function() { 
                        if (this.element.hasClass("esgboxhtml5")) {
                            var mp = this.element.data("mp4"),
                                ogv = this.element.data("ogv"),
                                webm = this.element.data("webm");
                            this.content ='<div style="width:100%;height:100%;"><video autoplay="true" loop="" class="rowbgimage" poster="" width="100%" height="auto"><source src="'+mp+'" type="video/mp4"><source src="'+webm+'" type="video/webm"><source src="'+ogv+'" type="video/ogg"></video></div>';	
                            var riint = setInterval(function() {jQuery(window).trigger("resize");},100); setTimeout(function() {clearInterval(riint);},2500);
                        };
                    },
                    beforeShow : function () { 
                        this.title = jQuery(this.element).attr('lgtitle');
                        if (this.title) {
                            this.title="";
                            this.title =  '<div style="padding:0px 0px 0px 0px">'+this.title+'</div>';
                        }
                    },
                    afterShow : function() {
                    },
                    openEffect : 'fade',
                    closeEffect : 'fade',
                    nextEffect : 'fade',
                    prevEffect : 'fade',
                    openSpeed : 'normal',
                    closeSpeed : 'normal',
                    nextSpeed : 'normal',
                    prevSpeed : 'normal',
                    helpers : {
                        media : {},
                        title : {
                            type:""
                        }
                    }
                });

            } catch (e) {}

        });
    }
    
}

/*Tribe Events*/

var tribe_bootstrap_datepicker_strings = {"dates":{"days":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],"daysShort":["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"],"daysMin":["S","M","T","W","T","F","S","S"],"months":["January","February","March","April","May","June","July","August","September","October","November","December"],"monthsShort":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"clear":"Clear","today":"Today"}};
var tribe_js_config = {"permalink_settings":"\/%year%\/%monthnum%\/%day%\/%postname%\/","events_post_type":"tribe_events","events_base":"http:\/\/golfclub-html.themerex.net\/events\/"};
var tribe_events_linked_posts = {"post_types":{"tribe_venue":"venue","tribe_organizer":"organizer"}};

var tribeEventsSingleMap = {"addresses":[{"address":"448 S Main St Los Angeles CA 90013 United States ","title":""}],"zoom":"8"};

/*Price Slider*/
var woocommerce_price_slider_params = {"currency_symbol":"$","currency_pos":"left","min_price":"","max_price":""};

/* review rating */
var wc_single_product_params = {"i18n_required_rating_text":"Please select a rating","review_rating_required":"yes"};

/*Book-a-court*/
var profilePage = 'http://golfclub-html.themerex.net/book-a-court/';

// Set some defaults
var timeFormat = 'h:i A';
var timeInterval = 60;

var i18n_confirm_appt_delete 		= 'Are you sure you want to cancel this appointment?',
    i18n_please_wait 				= 'Please wait...',
    i18n_wrong_username_pass 		= 'Wrong username/password combination.',
    i18n_request_appointment		= 'Request Appointment',
    i18n_fill_out_required_fields 	= 'Please fill out all required fields.',
    i18n_appt_required_fields		= 'A first name and an email address are required fields.';


