// **SET COOKIE**
function setCookie(name, value, exp) {
    var date = new Date();
    date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
    document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
}
//   setCookie('pop', 'event0405', 7); /* pop=event0405, 7일 뒤 만료됨 */

// **GET COOKIE**
function getCookie(name) {
    var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value ? value[2] : null;
}
//   getCookie('pop'); /* 결과: pop0405 */

// **DELETE COOKIE**
function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

//   deleteCookie('pop');

export {
    setCookie,getCookie,deleteCookie
}