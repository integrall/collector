/**
 * Created by Администратор on 02.09.2017.
 */

// возвращает cookie с именем name, если есть, если нет, то undefined
function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

// вот такая функция ставит куки:
function setCookie(name, value, options) {
    options = options || {};

    var expires = options.expires;

    if (typeof expires == "number" && expires) {
        var d = new Date();
        d.setTime(d.getTime() + expires * 1000);
        expires = options.expires = d;
    }
    if (expires && expires.toUTCString) {
        options.expires = expires.toUTCString();
    }

    value = encodeURIComponent(value);

    var updatedCookie = name + "=" + value;

    for (var propName in options) {
        updatedCookie += "; " + propName;
        var propValue = options[propName];
        if (propValue !== true) {
            updatedCookie += "=" + propValue;
        }
    }

    document.cookie = updatedCookie;
}

// Здесь всё просто – удаляем вызовом setCookie с датой в прошлом.
function deleteCookie(name) {
    setCookie(name, "", {
        expires: -1
    })
}


var utms = {};
var urlVar = window.location.href;

arrayVar = [];

// Проверка, есть ли в адресе знак ?
if (urlVar.indexOf('?') != -1) {
    var hh_ = (urlVar.split('?'));
    // Здесь происходит чистка от повторяющихся ? => ??????
    var hh = hh_.filter((v) => (!!(v)==true));
    //console.log(hh);
    //console.log(hh)

    // Проверка, есть ли в адресе знак &
    if (hh[1].indexOf('&') != -1) {
        var arrayVar_ = hh[1].split('&'), tmpArr;
        // Здесь происходит чистка от повторяющихся & => &&&&&&&
        var arrayVar = arrayVar_.filter((v) => (!!(v)==true));
        //console.log(arrayVar);
    }
}


// Проверка на Адрес предыдущей страницы
if (window.document.referrer != '') {
    setCookie('referer', window.document.referrer);
}


// Разбараем массив пришедший из адресной строки на utm и yid 
for (var i = 0; i < arrayVar.length; i++) { 

    tmpArr = arrayVar[i].split('=');
    
    switch (tmpArr[0]) {
        case 'utm_content': 
            var utm_content = tmpArr[1]; 
            if (utm_content && utm_content != '') {
                setCookie('utm_content', utm_content);
            break;
            };
        /*case 'referer': 
            var referrer = tmpArr[1]; 
            if (referrer && referrer != '') {
                setCookie('referer', referrer);
            break;
            };*/
        case 'utm_source': 
            var utm_source = tmpArr[1]; 
            if (utm_source && utm_source != '') {
                setCookie('utm_source', utm_source);
            break;
            };
        case 'utm_medium': 
            var utm_medium = tmpArr[1]; 
            if (utm_medium && utm_medium != '') {
                setCookie('utm_medium', utm_medium);
            break;
            };
        case 'utm_campaign': 
            var utm_campaign = tmpArr[1]; 
            if (utm_campaign && utm_campaign != '') {
                setCookie('utm_campaign', utm_campaign);
            break;
            };
        case '_ym_uid': 
            var _ym_uid = tmpArr[1]; 
            if (_ym_uid && _ym_uid != '') {
                setCookie('_ym_uid', _ym_uid);
            break;
            };
        case '_gid': 
            var _gid = tmpArr[1]; 
            if (_gid && _gid != '') {
                setCookie('_gid', _gid);
            break;
            }
    }
}