function getQueryParam(e){var t=e;return location.search.substr(1).split("&").some(function(t){return t.split("=")[0]==e&&(e=t.split("=")[1])}),t==e?null:e}function runNow(){var e=getQueryParam("option");if(e)("changeemail"==e||"passwordchange"==e)&&(window.location.href="https://ninth.me/");else{$('a[href*="passwordchange"]').attr("href","https://ninth.me/dashboard"),$("#lnkUserPrefUpdateContactInfo").parent().remove(),$("#item_change_password").parent().remove(),$("#item_contact_information").parent().remove(),$("#item_site_publisher").parent().remove(),$("#item_sitereptile").parent().remove(),$("a#item_attracta_seotools").text("Support"),$('a[href^="http://byet.net"]').attr("href","https://ninth.me/support"),$('a[href*="supportnewticket"]').attr("href","https://ninthme.freshdesk.com/support/solutions"),$("#item_ShowTickets").parent().remove(),$("#item_api_shell").parent().remove();var t='<iframe src="https://ninth.me/message.php" scrolling="no" style="" frameborder="0"></iframe>',r=$("#boxes");r.prepend(t);var a='<div style="width: 100%; text-align: center;">Hello World. This is an ads space.</div><br />',n=$("#content");n.prepend(a),n.append(a),$('a[href^="https://ifastnet.com/portal"]').attr("href","/panel/indexpl.php?option=upgrade"),(document.documentElement.textContent||document.documentElement.innerText).indexOf("demoacct.ninth.me")>-1&&($('a[href*="passwordchange"]').attr("href","https://ninth.me/dashboard"),$('a[href*="subdomains"]').attr("href","#"),$('a[href*="domains"]').attr("href","#"),$('a[href*="accountsettings"]').attr("href","#"),$('a[href*="redirect"]').attr("href","#"),$('a[href*="mxrecords"]').attr("href","#"),$('a[href*="spfrecords"]').attr("href","#"),$('a[href*="accesslogchoose"]').attr("href","#"),$('a[href*="http://185.27.134.9/"]').attr("target",""),$('a[href*="http://185.27.134.9/"]').attr("href","#"),$('a[href*="ftpsettings"]').attr("href","#"),$('a[href*="cnamerecords"]').attr("href","#"),$('a[href*="phpselectversion"]').attr("href","#"),$('a[href*="installer"]').attr("target",""),$('a[href*="installer"]').attr("href","#"),$('a[href*="sitebuilder"]').attr("href","https://ninth.me/go/demo"))}}function defer(e){window.jQuery?e():setTimeout(function(){defer(e)},50)}defer(runNow);
