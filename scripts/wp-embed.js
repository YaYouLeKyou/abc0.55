/*! This file is auto-generated */
!(function (c, d) {
  'use strict';
  var e = !1,
    n = !1;
  if (d.querySelector) if (c.addEventListener) e = !0;
  if (((c.wp = c.wp || {}), !c.wp.receiveEmbedMessage))
    if (
      ((c.wp.receiveEmbedMessage = function (e) {
        var t = e.data;
        if (t)
          if (t.secret || t.message || t.value)
            if (!/[^a-zA-Z0-9]/.test(t.secret)) {
              for (
                var r,
                  a,
                  i,
                  s = d.querySelectorAll(
                    'iframe[data-secret="' + t.secret + '"]'
                  ),
                  n = d.querySelectorAll(
                    'blockquote[data-secret="' + t.secret + '"]'
                  ),
                  o = 0;
                o < n.length;
                o++
              )
                n[o].style.display = 'none';
              for (o = 0; o < s.length; o++)
                if (((r = s[o]), e.source === r.contentWindow)) {
                  if ((r.removeAttribute('style'), 'height' === t.message)) {
                    if (1e3 < (i = parseInt(t.value, 10))) i = 1e3;
                    else if (~~i < 200) i = 200;
                    r.height = i;
                  }
                  if ('link' === t.message)
                    if (
                      ((a = d.createElement('a')),
                      (i = d.createElement('a')),
                      (a.href = r.getAttribute('src')),
                      (i.href = t.value),
                      i.host === a.host)
                    )
                      if (d.activeElement === r) c.top.location.href = t.value;
                }
            }
      }),
      e)
    )
      c.addEventListener('message', c.wp.receiveEmbedMessage, !1),
        d.addEventListener('DOMContentLoaded', t, !1),
        c.addEventListener('load', t, !1);
  function t() {
    if (!n) {
      n = !0;
      for (
        var e,
          t,
          r = -1 !== navigator.appVersion.indexOf('MSIE 10'),
          a = !!navigator.userAgent.match(/Trident.*rv:11\./),
          i = d.querySelectorAll('iframe.wp-embedded-content'),
          s = 0;
        s < i.length;
        s++
      ) {
        if (!(e = i[s]).getAttribute('data-secret'))
          (t = Math.random().toString(36).substr(2, 10)),
            (e.src += '#?secret=' + t),
            e.setAttribute('data-secret', t);
        if (r || a)
          (t = e.cloneNode(!0)).removeAttribute('security'),
            e.parentNode.replaceChild(t, e);
      }
    }
  }
})(window, document);
