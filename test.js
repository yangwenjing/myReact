/**
 * Created by ywj on 15/8/19.
 */
/*** new vui template*/(function (E) {
  E.pl = E.pl || {};
  E.pl.imTimesign = parseInt("86" || 0, 10);
  E.pl.sivaTimesign = parseInt("87" || 0, 10);
  E.pl.searchId = "a0bbb20e0006a4e6";
  E.pl.templates = "baiduASPT1S,baiduASPT2S,baiduASPT204_blank,baiduASPT217S,anticheat,baiduASPT665S";
  E.pl.asyn_ads_mode = parseInt("0" || 0, 10);
  E.pl.asyn_ads_url = '';
})(E);
(function (a) {
  function b(d) {
    var c = location.href.match("debug=1");
    var g = window.jQuery || {};
    if (!c) {
      try {
        d(a.pl, g)
      } catch (f) {
        a.pl.handleError(f)
      }
    } else {
      d(a.pl, g)
    }
  }

  a.pl.run = function (d, c) {
    if (c || arguments.length == 1) {
      bds.ready(function () {
        b(d)
      })
    } else {
      b(d)
    }
  };
  a.pl.handleError = function (c) {
    var d = {message: c.message, datetime: (new Date()).getTime(), stack: c.stack};
    this.fclick("ps-js-error", d)
  };
  a.pl.request = function (d) {
    if (d) {
      var f = new Date().getTime();
      var c = new Image();
      var e = f + Math.random();
      d += "&_rand=" + (f + Math.random());
      a.pl["--IMAGE" + e] = c;
      c.onload = c.onerror = c.onabort = function () {
        c.onload = c.onerror = c.onabort = null;
        a.pl["--IMAGE" + e] = null;
        c = null
      };
      c.src = d
    }
  };
  a.pl.log = function (d, e) {
    var f = [];
    e.searchId = a.pl.searchId;
    for (var c in e) {
      if (e.hasOwnProperty(c)) {
        f.push(encodeURIComponent(c) + "=" + encodeURIComponent(e[c]))
      }
    }
    this.request(d + "?" + f.join("&"))
  };
  a.pl.fclick = function (c, d) {
    d.tag = c;
    this.log("https://sp0.baidu.com/-rU_dTmfKgQFm2e88IuM_a/w.gif", d)
  };
  a.pl.q = function (f, g) {
    g = g || document;
    if (g.getElementsByClassName) {
      return g.getElementsByClassName(f)
    } else {
      var d = [];
      var c = g.all || g.getElementsByTagName("*");
      var e = c.length;
      f = f.replace(/\-/g, "\\-");
      var h = new RegExp("(^|\\s)" + f + "(\\s|$)");
      while (--e >= 0) {
        if (h.test(c[e].className)) {
          d.push(c[e])
        }
      }
      return d
    }
  }
})(window.bds.ecom);
E.pl.run(function (b, c) {
  var e = function (k) {
    var m = k.target;
    var j = c(m).closest("a");
    if (!j.length || j.attr("data-nolog")) {
      return
    }
    var i = a(j.get(0), this);
    var h = c.parseJSON(c(this).attr("data-click") || "{}");
    var l = (m.tagName == "IMG");
    var n = j.attr("data-is-main-url") !== undefined;
    var g = c.parseJSON(j.attr("data-click") || "{}");
    if (n) {
      i += "(title)"
    } else {
      i += l ? "(img)" : "(link)";
      h.mu = d(this)
    }
    h.title = j.html();
    h.url = j.attr("href");
    h.rsv_xpath = i;
    h.rsv_height = this.offsetHeight;
    h = c.extend({}, h, g);
    window.c(h)
  };
  var d = function (g) {
    var h = c(g).find("a[data-is-main-url]");
    return h.length ? h.attr("href") : undefined
  };
  var a = function (k, g) {
    var h = [];
    var j;
    var m;
    var l;
    var i;
    while (k && k !== g) {
      j = k.tagName;
      m = f(k);
      i = m == 0 ? j : j + (m + 1);
      h.unshift(i.toLowerCase());
      k = k.parentNode
    }
    return h.join("-")
  };
  var f = function (g) {
    return c(g).parent().children(g.tagName).index(g)
  };
  b.ubs = function (g) {
    c(g).on("mousedown", e)
  };
  b.ubs(".mowcWl")
});
(function (A) {
  var j = undefined, i = undefined;
  var n = 0, m = 0;
  var g = 0;
  var q = 0;
  var k = 0;
  var f = 0;
  var o = 0;
  var c = 0;
  var y = 0;
  var v = /link\?url\=([^\&]+)/;
  var p = /\?url\=([^\.]+)\./;
  var b = "data-cklink";
  var w = /[?&]tn=([^&]*)/;

  function x() {
    var D = y.href;
    var F = y.getAttribute(b);
    var C = t(D);
    C = C || t(F);
    return C
  }

  function t(D) {
    if (!D) {
      return false
    }
    var C = v.exec(D) || p.exec(D);
    if (C) {
      if (v.exec(D)) {
        return C[1].length < 20 ? C[1] : C[1].substr(0, 20)
      } else {
        return C[1]
      }
    } else {
      return false
    }
  }

  function z(F) {
    var C = x();
    if (C !== false) {
      var D = s(C, F);
      r(D)
    }
  }

  function r(G) {
    var D = "&ck=" + [G, g, c, Math.round(n), Math.round(m), Math.round(j), Math.round(i), o].join(".");
    var C = y.href;
    var F = y.getAttribute(b);
    if (C) {
      y.href = u(C, D) + e(C)
    }
    if (F) {
      y.setAttribute(b, u(F, D) + e(F))
    }
  }

  function e(D) {
    var F = "";
    if (D.indexOf("&shh=") === -1 && D.indexOf("?shh=") === -1) {
      F = "&shh=" + location.hostname
    }
    if (D.indexOf("&sht=") === -1 && D.indexOf("?sht=") === -1) {
      var C = location.href.match(w);
      if (C) {
        F += "&sht=" + C[1]
      }
    }
    return F
  }

  function u(D, C) {
    if (t(D)) {
      if (D.indexOf("&ck=") == -1) {
        D += C
      } else {
        D = D.replace(/&ck=[\d.]*/, C)
      }
    }
    return D
  }

  function s(D, G) {
    var F = 0;
    for (var C = 0; C < (((g * G) % 99) + 9); C++) {
      F += D.charCodeAt((c * C) % D.length)
    }
    return F
  }

  function B(C) {
    C = C || window.event;
    g++;
    if (j === undefined) {
      j = C.clientX
    }
    if (i === undefined) {
      i = C.clientY
    }
    q = new Date().getTime()
  }

  function h(D, C) {
    D = D || window.event;
    y = D.target || D.srcElement;
    while (y && y.tagName != "A") {
      y = y.parentNode
    }
    k = new Date().getTime();
    c = 9999;
    n = D.clientX;
    m = D.clientY;
    if (q === 0) {
      o = 0
    } else {
      o = k - q
    }
    z(C)
  }

  function l(D, C) {
    f = new Date().getTime();
    c = f - k;
    z(C)
  }

  function d(I, F, H) {
    var G, C, D;
    for (D in F) {
      G = F[D];
      C = H[D];
      if (window.attachEvent) {
        I.attachEvent("on" + G, C)
      } else {
        I.addEventListener(G, C, false)
      }
    }
  }

  function a(C) {
    return [function (D) {
      B(D)
    }, function (D) {
      h(D, C)
    }, function (D) {
      l(D, C)
    }]
  }

  A.ck = function (H, G) {
    if (H.length === undefined) {
      H = [H]
    }
    var C = H.length;
    var D = 0;
    var F = a(G);
    for (; D < C; D++) {
      d(H[D], ["mouseover", "mousedown", "mouseup"], F)
    }
  }
})(E.pl);
E.pl.run(function (c) {
  var e = c.q("mowcWl");
  for (var b = 0; b < e.length; b++) {
    var a = e[b];
    var d = a.getElementsByTagName("A");
    c.ck(d, E.pl.imTimesign)
  }
}, false);
E.pl.run(function () {
  var j = 300;
  var n = /&?us=([^&]*)/;
  var h = null;
  var f = 0;
  var b = 0;
  var m = 0;
  var d = 0;
  var l = null;
  var c = null;
  E.pl.updateUsField = function () {
    var p = k(this);
    var r = $(this).attr("href");
    var s = /link\?url\=([^\&]+)/;
    var q = /\?url\=([^\.]+)\./;
    var o = s.exec(r) || q.exec(r);
    if (o) {
      var t = r.match(n) ? r.match(n)[1] : false;
      if (t) {
        var u = t.split(".").slice(6);
        p += "." + u.join(".")
      }
      var r = r.replace(n, "") + "&us=" + p;
      $(this).attr("href", r)
    }
  };
  var k = function (o) {
    var p = g(o);
    var q = e();
    usField = [p, q, b, f, m, d];
    return usField.join(".")
  };
  var g = function (q) {
    var u = $(q).parents(".mowcWl").toArray()[0];
    var t = $(window).scrollTop();
    var s = $(q).parents("#content_left, #content_right").find(".mowcWl, .result-op, .result");
    var p = 0;
    for (var r = 0, o = s.length; r < o; r++) {
      result = s.eq(r);
      if (result.position().top < t) {
        continue
      }
      p++;
      if (result.toArray()[0] === u) {
        return p
      }
    }
  };
  var e = function () {
    var o = +new Date;
    var p = 0;
    if (h !== null) {
      p = o - h
    }
    h = o;
    return p
  };
  E.pl.updateClickCount = function () {
    b++;
    if ($(this).hasClass("ZeSQNh")) {
      f++
    }
  };
  var a = function () {
    d += (+new Date) - l;
    l = null
  };
  var i = function () {
    if (l === null) {
      ++m;
      l = +new Date
    } else {
      d += (+new Date) - l;
      l = +new Date;
      clearTimeout(c)
    }
    c = setTimeout(a, j)
  };
  bds.aladdin.addDisposeHandler({
    fn: function () {
      clearTimeout(c);
      $(window).off(i);
      j = null;
      n = null;
      h = null;
      f = null;
      b = null;
      m = null;
      d = null;
      l = null;
      c = null;
      i = null;
      a = null;
      E.pl.updateClickCount = null;
      E.pl.updateUsField = null;
      e = null;
      g = null;
      k = null
    }
  });
  $(window).scroll(i);
  $("#container, #head").on("mousedown", "a", E.pl.updateClickCount);
  $("#container").on("mousedown", ".mowcWl a", E.pl.updateUsField)
});
E.pl.run(function (n, d) {
  var i = "#content_left";
  var r = "mowcWl";
  var f = ".AKeqyi";
  var c = false;
  var g = false;
  var p = 0;
  var h = function () {
    this.isAD = false;
    this.top = 0;
    this.bottom = 0;
    this.height = 0;
    this.index = 0;
    this.isTop = true;
    this.title = ""
  };
  var j = function () {
    this.adt = 0;
    this.adb = 0;
    this.top = 0;
    this.wise = 0;
    this.bottom = 0;
    this.adpos = "";
    this.initViewZone = "";
    this.adsHeight = "";
    this.availHeight = screen.availHeight;
    this.availWidth = screen.availWidth;
    this.winHeight = d(window).height();
    this.winWidth = d(window).width();
    this.action = "init"
  };
  var a = function () {
    this.startHeight = 0;
    this.startTime = 0;
    this.endHeight = 0;
    this.endTime = 0;
    this.scrollTime = 0;
    this.scrollLen = 0;
    this.scrollInter = 0;
    this.scrolldirect = 0;
    this.stayTime = 0;
    this.startViewZone = "";
    this.endViewZone = "";
    this.adpos = "";
    this.action = "scroll"
  };
  var k = [];
  var o = new j();
  var e = new a();
  var l = false;
  var b = 0;
  var m = 0;
  var q = 0;
  n.getImItem = function (w, s, u, t) {
    if (s) {
      u ? o.top++ : o.bottom++
    } else {
      o.wise++
    }
    var x = new h();
    var v = d(w);
    x.isAD = s;
    x.isTop = u;
    x.top = parseInt(v.offset().top, 10);
    x.height = parseInt(v.height(), 10);
    x.bottom = x.top + x.height;
    x.index = t;
    return x
  };
  n.setAdsHeight = function () {
    var s = k.length;
    for (var t = 0; t < s; t++) {
      var u = k[t];
      if (u.isAD && u.isTop) {
        o.adsHeight += "_t"
      }
      if (!u.isAD) {
        o.adsHeight += "_w"
      }
      if (u.isAD && !u.isTop) {
        o.adsHeight += "_b"
      }
      o.adsHeight += u.index + ":" + u.height
    }
  };
  n.computerObj = function (v, s) {
    var t = {};
    for (var u in v) {
      t[u] = v[u]
    }
    for (var u in s) {
      t[u] = s[u]
    }
    return t
  };
  n.setSearchItem = function () {
    k = [];
    o = new j();
    l = false;
    b = 0;
    m = 0;
    q = 0;
    var t = d(i).children();
    var s = t.length;
    for (var w = 0; w < s; w++) {
      var x = t.get(w);
      if (!x.id || parseInt(x.id, 10) != x.id) {
        var u = d(x).find("." + r + "," + E.pl.EC_RESULT_ASYN);
        for (var v = 0; v < u.length; v++) {
          n.setLeftArray(u[v])
        }
      } else {
        n.setLeftArray(x)
      }
    }
    if (o.top > 0) {
      o.adt = k[0].top;
      o.adb = k[o.top - 1].bottom
    } else {
      if (o.bottom > 0) {
        o.adt = k[o.top + o.wise].top;
        o.adb = k[o.top + o.wise + o.bottom - 1].bottom
      }
    }
    n.setAdsHeight()
  };
  n.setLeftArray = function (s) {
    if (d(s).attr("srcid") || parseInt(s.id, 10) < 500) {
      l = true;
      m++;
      k = k.concat(n.getImItem(s, false, true, m))
    } else {
      if (!l) {
        b++;
        k = k.concat(n.getImItem(s, true, true, b))
      } else {
        q++;
        k = k.concat(n.getImItem(s, true, false, q))
      }
    }
  };
  n.calViewZone = function (x, B) {
    var z = k.length;
    var y = z - 1;
    var s = z - 1;
    for (var w = 0; w < z; w++) {
      if (x < k[w].top) {
        y = (w === 0 ? 0 : w - 1);
        break
      }
    }
    var v = x - k[y].top;
    v = v < 0 ? 0 : v;
    var A = (v / k[y].height).toFixed(2);
    A = A > 1 ? "1.00" : A;
    var u = (k[y].isAD ? (k[y].isTop ? "t" : "b") : "w") + "_" + k[y].index + "_" + A;
    for (var w = 0; w < z; w++) {
      if (B < k[w].top) {
        s = (w - 1) < 0 ? 0 : (w - 1);
        break
      }
    }
    v = B - k[s].top;
    v = v < 0 ? 0 : v;
    A = (v / k[s].height).toFixed(2);
    A = A > 1 ? "1.00" : A;
    var t = (k[s].isAD ? (k[s].isTop ? "t" : "b") : "w") + "_" + k[s].index + "_" + A;
    return u + ":" + t
  };
  n.setAdPos = function (x) {
    var w = x.split(":")[1];
    var v = w.split("_");
    var B = v[0];
    var A = v[1];
    var t = v[2];
    if (e.adpos.length === 0) {
      if ("w" === B) {
        if (o.top === 0) {
          e.adpos = "t_0_0.00"
        } else {
          e.adpos = "t_" + o.top + "_1.00"
        }
      } else {
        e.adpos = w
      }
    } else {
      var u = e.adpos.split("_");
      var z = u[0];
      var y = u[1];
      var s = u[2];
      if (z === "t") {
        if (B === "t") {
          if (A > y || (A === y && t > s)) {
            e.adpos = w
          }
        } else {
          if (B === "w") {
            if (o.top === 0) {
              e.adpos = "t_0_0.00"
            } else {
              e.adpos = "t_" + o.top + "_1.00"
            }
          } else {
            e.adpos = w
          }
        }
      } else {
        if (B === "b") {
          if (A > y || (A === y && t > s)) {
            e.adpos = w
          }
        }
      }
    }
  };
  n.moveScroll = function () {
    if (!g) {
      g = true;
      e.startHeight = e.endHeight;
      e.startTime = new Date().getTime();
      e.stayTime = e.startTime - e.endTime;
      e.startViewZone = e.endViewZone
    }
    if (n.asyn_ads_url && o.bottom === 0) {
      if (d(window).scrollTop() > 1000 || Math.abs(d(window).scrollTop() - p) > 200) {
        if (!c) {
          c = true;
          var s = d.parseJSON(n.asyn_ads_url);
          s.id = 49510;
          s.dom = d(f);
          s.cb = E.pl.setSearchItem;
          bds.se.asynAds(s)
        }
      }
    }
    clearTimeout(n.scrollId);
    n.scrollId = setTimeout(function () {
      e.endHeight = d(window).height() + d(window).scrollTop();
      e.endTime = new Date().getTime();
      e.scrollInter += 1;
      e.scrollTime = e.endTime - e.startTime;
      e.scrollLen = e.endHeight - e.startHeight;
      e.scrolldirect = (e.scrollLen >= 0 ? "B" : "T");
      e.endViewZone = n.calViewZone(d(window).scrollTop() + 1 * d("#head").height(), e.endHeight);
      n.setAdPos(e.endViewZone);
      g = false
    }, 300)
  };
  n.delayInit = function () {
    e.startTime = e.endTime = new Date().getTime();
    var u = e.endHeight = e.startHeight = d(window).height() + d(window).scrollTop();
    p = d(window).scrollTop();
    o.initViewZone = n.calViewZone(d(window).scrollTop() + 1 * d("#head").height(), u);
    e.startViewZone = e.endViewZone = o.initViewZone;
    if (o.top === 0) {
      o.adpos = "t_0_0.00"
    } else {
      var t = o.initViewZone.split(":")[1];
      var s = t.substr(0, 1);
      if (s === "t") {
        o.adpos = t
      } else {
        o.adpos = "t_" + o.top + "_1.00"
      }
    }
  };
  bds.ready(function () {
    n.setSearchItem();
    n.delayInit();
    d(window).on("scroll", n.moveScroll)
  });
  d(window).on("swap_begin", function () {
    d(window).unbind("scroll", E.pl.moveScroll)
  })
});
E.pl.run(function (a, b) {
  b("._hNwYy, .RkStDz, .ayMwID").each(function (c, f) {
    var g = b.trim(b("<div>" + f.innerHTML + "</div>").text());
    g = g.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
    var d = f.href;
    var e = '{"title":"' + g + '","url":"' + d + '"}';
    b(f).parents(".ci_Whp, .lQgKEu, .sMSywz").find(".c-tools").attr("data-tools", e)
  })
});
(function () {
  bds.ready(function () {
    var a = $(".ci_Whp");
    var c = $(".sMSywz");
    var b = $(".lQgKEu");
    E.pl.insertElem = function (n) {
      for (var k = 0, d = n.length; k < d; k++) {
        var h = $(".c-icon", n[k]);
        for (var g = 0, f = h.length; g < f; g++) {
          var e = $(h[g]);
          if (g != f - 1 && !e.hasClass("c-icon-triangle-down-g")) {
            var m = $("<span></span>");
            m.attr("class", "c-vline");
            e.after(m)
          }
        }
      }
    };
    E.pl.insertElem(a);
    E.pl.insertElem(c);
    E.pl.insertElem(b)
  })
})();
bds.ready(function () {
  var r = "\u5df2\u7ecf\u901a\u8fc7";
  var x = "\u767e\u5ea6\u4fe1\u8a89\u8ba4\u8bc1";
  var w = "\u4f18\u60e0\u8be6\u60c5";
  var f = "\u54a8\u8be2\u7535\u8bdd";
  var a = "\u6b63\u89c4\u836f\u54c1\u9500\u552e\u7f51\u7ad9\uff1a";
  var e = "\u6b63\u89c4\u7f51\u4e0a\u552e\u7968\u7f51\u7ad9\uff1a";
  var b = {
    a: '<span#{billing}><a target="_blank"  href="#{url}" onmousedown="return c({\'title\':this.innerHTML,\'url\':this.href,#{options}});">#{text}</a></span>',
    list: '<div class="c-tip-cer"><ul>#{credit}#{identity}#{personal}</ul></div>',
    identity: '<li class="c-tip-item-i"><i class="c-icon c-icon-v-noborder c-gap-icon-right-small c-tip-item-icon"></i>' + r + "#{text}#{a}</li>",
    identityImg: '<li class="c-tip-item-i"><img class="c-customicon c-gap-icon-right-small c-tip-item-icon" src="#{img}">' + r + "#{text}#{a}</li>",
    credit: '<li class="juprl_"></li>',
    personal: '<li class="c-tip-item-i"><i class="c-icon c-icon-person-noborder c-gap-icon-right-small c-tip-item-icon"></i>' + r + "#{text}#{a}</li>",
    personalImg: '<li class="c-tip-item-i"><img height=16 width=16 class="c-customicon c-gap-icon-right-small c-tip-item-icon" src="#{img}">' + r + "#{text}#{a}</li>",
    coupon: "<div class=\"c-tip-info wTrFDj\"><a target=\"_blank\" href=\"#{url}\" class=\"coupon-ck\" onmousedown=\"return c({'title':this.innerHTML,'url':this.href,'fm':'#{fm}','rsv_ct':'#{rsv_ct}','p1':#{p1},'p2':#{p2}});\">#{text}</a></div>",
    tel: '<div class="c-tip-info">#{text}</div>',
    commitmentList: '<div class="c-tip-info"><ul>#{commitmentContent}</ul></div>',
    commitmentItem: "<li class=\"c-tip-item-i\"><span><i class=\"c-icon c-icon-circle-blue-s ec-vertical-baseline c-gap-icon-right-small c-tip-item-icon\"></i><a href=#{url} target=\"_blank\" onmousedown=\"return c({'title': this.innerHTML,'url': this.href,'fm': '#{fm}','p1': '#{p1}'});\">#{text}</a></span></li>",
    med: '<div class="c-tip-info"><ul><li class="c-tip-item-i"><img class="c-customicon c-gap-icon-right-small c-tip-item-icon" src="#{img}">#{content}</li></ul></div>',
    air: '<div class="c-tip-info"><ul><li class="c-tip-item-i"><img class="c-customicon c-gap-icon-right-small c-tip-item-icon" src="#{img}">#{content}</li></ul></div>'
  };
  var j = {
    offset: {
      identity: {x: 10, y: 25},
      commitment: {x: 10, y: 25},
      coupon: {x: 10, y: 25},
      tel: {x: 10, y: 25},
      med: {x: 10, y: 25},
      air: {x: 10, y: 25}
    }
  };
  var c = 374;
  var i = {
    identity: {clsList: ["c-icon-v", "c-icon-high-v", "c-icon-person"], attrKey: "data-renzheng"},
    coupon: {clsList: ["c-icon-hui"], attrKey: "data-coupon", tipTitle: w + "："},
    tel: {clsList: ["c-icon-phone"], attrKey: "data-phone", tipTitle: f + "："},
    commitment: {clsList: ["c-icon-nuo"], attrKey: "data-commitment"},
    med: {clsList: ["c-icon-med"], attrKey: "data-med", tipTitle: a},
    air: {clsList: ["c-icon-air"], attrKey: "data-air", tipTitle: e}
  };

  function q(F) {
    return String(F).replace(/[#%&+=\/\\\ \　\f\r\n\t]/g, function (G) {
      return "%" + (256 + G.charCodeAt()).toString(16).substring(1).toUpperCase()
    })
  }

  function D(J, I) {
    if (arguments.length < 2 && I === undefined) {
      return J
    }
    var G = J;
    var H = Array.prototype.slice;
    var F = H.call(arguments, 2);
    return function () {
      var K = H.call(arguments, 0);
      G.apply(I, F.concat(K))
    }
  }

  function l(H, I) {
    var F = [];
    var J;
    var G = I || function (K) {
        return q(K)
      };
    $.each(H, function (K, L) {
      if ($.isArray(L)) {
        J = L.length;
        while (J--) {
          F.push(K + "=" + G(L[J], K))
        }
      } else {
        F.push(K + "=" + G(L, K))
      }
    });
    return F.join("&")
  }

  function C(F) {
    return (new Function("return (" + F + ")"))()
  }

  var p = "";
  var g = (function () {
    var G = [];
    var F = function (H) {
      return encodeURIComponent(H)
    };
    return function (J) {
      var I = G.push(new Image()) - 1;
      G[I].onload = G[I].onerror = function () {
        G[I] = G[I].onload = G[I].onerror = null;
        delete G[I]
      };
      var H = p + "?" + l(J, F);
      G[I].src = H
    }
  })();

  function y(G) {
    var I = j.statistics;
    if (I && I[G] && I[G]["url"]) {
      var F = window.bds || {};
      var J = "";
      if (F && F.comm && F.comm.qid) {
        J = F.comm.qid
      }
      var H = {qid: J, url: window.document.location.href, timestamp: +new Date()};
      p = I[G]["url"];
      $.extend(H, I[G]["query"] || {});
      g(H)
    }
  }

  function u(F, G) {
    G = G || {};
    return $.format(b[F], G)
  }

  function o(J, K) {
    var F = {};
    var I = "";
    if (J) {
      var G = [];
      for (var H in J) {
        if ("billing" === H || "url" === H || "text" === H) {
          continue
        }
        G.push("'" + H + "':'" + J[H] + "'")
      }
      F = {billing: J.billing && ' class="wTrFDj"', url: J.url, text: J.text || K, options: G.join(",")};
      I = u("a", F)
    }
    return I
  }

  function h(H, I) {
    var G = "";
    if (I) {
      var F = o(I.a, x);
      G = u(H, {text: I.text, a: F, img: I.img})
    }
    return G
  }

  function z(H, G) {
    var F = H.attr(G);
    return F && C(F)
  }

  function k(H) {
    var G;
    if (H.identity) {
      if (H.identity.img) {
        G = h("identityImg", H.identity)
      } else {
        G = h("identity", H.identity)
      }
    }
    var K = h("credit", H.identity);
    var F;
    if (H.personal) {
      if (H.personal.img) {
        F = h("personalImg", H.personal)
      } else {
        F = h("personal", H.personal)
      }
    }
    var J = u("list", {credit: K, personal: F});
    var I = "" + J;
    return I
  }

  function d(H) {
    var I = "";
    for (var G in H) {
      if (H.hasOwnProperty(G)) {
        I += u("commitmentItem", {text: H[G].text, url: H[G].url, fm: H[G].fm, p1: H[G].p1})
      }
    }
    var F = u("commitmentList", {commitmentContent: I});
    return F
  }

  function n(K, I) {
    var M = $("." + I.clsList.join(",."));
    var H = I.attrKey;
    var F = I.tipTitle;
    for (var J = 0, L = M.length; J < L; J++) {
      var O = $(M[J]);
      if (K !== "identity") {
        var G = O.parent();
        if (G.length && G.hasClass("wTrFDj")) {
          var N = new bds.se.tip({target: O[0]});
          N.onShow = D(v, N, K, H, F)
        }
      } else {
        if (O.parents(".ci_Whp").length || O.parents(".lQgKEu").length || O.parents(".sMSywz").length) {
          var N = new bds.se.tip({target: O[0]});
          N.onShow = D(v, N, K, H, F)
        }
      }
    }
  }

  function s(M, J) {
    var L = M.width();
    if (isNaN(L)) {
      L = 0
    }
    if (L > 20) {
      J.op.arrow.offset = L / 2
    }
    var I = M.parents(".lQgKEu");
    var F = parseInt(I.position().left, 10);
    var H = parseInt(I.width(), 10);
    var K = parseInt(M.position().left, 10);
    var G;
    if (M.hasClass("c-icon-med") || M.hasClass("c-icon-air")) {
      G = Math.abs(F - K);
      J.op.offset = {x: G, y: 25};
      J.op.arrow = {has: 1, offset: G}
    } else {
      G = Math.abs((F + H - c) - K);
      J.op.offset = {x: G, y: 25};
      J.op.arrow = {has: 1, offset: L > 20 ? G + L / 3 : G}
    }
  }

  function v(P, K, I) {
    if (P === "identity" || P === "air" || P === "med") {
      y(P)
    }
    var S = this;
    if (!S.alreadyRender) {
      S.op.offset = j.offset[P];
      var U = $(S.getTarget());
      if (U.attr("data-tip-limite")) {
        s(U, S)
      }
      var O = z(U, K);
      var M = "";
      if (P === "commitment") {
        M = d(O);
        S.setContent(M)
      } else {
        if (P === "air" || P === "med") {
          var R = O.content || "";
          var J = o(O.a, O.linkLabel);
          O.content = R.replace(/\[linkLabel]/, J);
          M = u(P, O);
          S.setTitle(I);
          S.setContent(M)
        } else {
          if (P === "identity") {
            var H = U.attr("href");
            O.identity && O.identity.a && !O.identity.a.url && (O.identity.a.url = H);
            O.personal && O.personal.a && !O.personal.a.url && (O.personal.a.url = H);
            M = k(O);
            S.setTitle(O.title);
            S.setContent(M);
            if (O[P] && O[P].process) {
              var T = O[P].process;
              var G = O[P].process_level;
              A.use("honourCard", function () {
                A.ui.honourCard(S.getDom().find(".juprl_")[0], O[P].a.url, G, T, O[P].a)
              })
            }
          } else {
            if (P === "coupon") {
              var F = S.getDom().find("a");
              var Q = [];
              for (var N = 0, L = F.length; N < L; N++) {
                if (F[N].tagName.toLowerCase() === "a") {
                  Q.push(F[N])
                }
              }
              if (Q.length) {
                E.pl.ck(Q, E.pl.imTimesign)
              }
              M = u(P, O);
              I && S.setTitle(I);
              S.setContent(M)
            } else {
              if (P === "tel") {
                M = u(P, O);
                I && S.setTitle(I);
                S.setContent(M)
              }
            }
          }
        }
      }
      S.alreadyRender = true
    }
  }

  var B;
  E.pl.checkTipComponent = function () {
    if (!bds || !bds.se || !bds.se.tip) {
      B = setTimeout(function () {
        E.pl.checkTipComponent()
      }, 10)
    } else {
      B && clearTimeout(B);
      $.each(i, function (F, G) {
        n(F, G)
      })
    }
  };
  function t(F) {
    $(document).ready(function () {
      $.extend(true, j, F || {});
      E.pl.checkTipComponent()
    })
  }

  var m = {
    statistics: {
      identity: {
        url: "https://sp1.baidu.com/6KYTfyq72xB3otqbppnN2DJv/v.php",
        query: {tag: "vshenfenhover"}
      },
      med: {url: "https://sp1.baidu.com/6KYTfyq72xB3otqbppnN2DJv/v.php", query: {tag: "medhover"}},
      air: {url: "https://sp1.baidu.com/6KYTfyq72xB3otqbppnN2DJv/v.php", query: {tag: "airhover"}}
    },
    offset: {
      identity: {x: 10, y: 25},
      commitment: {x: 10, y: 25},
      coupon: {x: 10, y: 25},
      tel: {x: 10, y: 25},
      med: {x: 10, y: 25},
      air: {x: 10, y: 25}
    }
  };
  t(m)
});
E.pl.run(function () {
  var a = a();
  if (!a) {
    $("#content_left .mowcWl").each(function () {
      var c = this.tagName.toLowerCase();
      var b = $(this).next();
      var d = b ? b[0].tagName.toLowerCase() : "";
      if (c == "div") {
        var e = $(this).attr("style");
        if (e) {
          $(this).attr("style", e + "; display:block !important")
        } else {
          $(this).attr("style", "display:block !important")
        }
      } else {
        if (c == "table") {
          var e = $(this).attr("style");
          if (e) {
            $(this).attr("style", e + "; display:table !important")
          } else {
            $(this).attr("style", "display:table !important")
          }
          if (d == "br") {
            b.attr("style", "display: inline !important")
          }
        }
      }
    })
  }
  function a() {
    var c = document.createElement("div");
    c.innerHTML = '<!--[if lt IE 8]><i id="isIE67Ele"></i><![endif]-->';
    var b = c.getElementsByTagName("i");
    return b && b.length == 1 && b.attr("id") == "isIE67Ele"
  }
});
E.pl.run(function () {
  var b = $(".mowcWl img").length;
  var e = 0;
  var d = 600;
  var a = /baidu\.php\?url\=([^\.]+)\./;
  var c = 0;
  $(".mowcWl img").each(function (f, g) {
    if ($(g).offset().top < d) {
      e++
    }
  });
  $(".mowcWl a").each(function (g, h) {
    var f = $(h).attr("href");
    if (!a.exec(f)) {
      return
    }
    c += f.length
  });
  if (window.PDC_ASYNC) {
    window.PDC_ASYNC.setParam("ecfc_isfc", 1);
    window.PDC_ASYNC.setParam("ecfc_imgnum", b);
    window.PDC_ASYNC.setParam("ecfc_firstscreen_imgnum", e);
    window.PDC_ASYNC.setParam("ecfc_urllength", c);
    window.PDC_ASYNC.setParam("ecfc_templatename", E.pl.templates)
  }
});
E.pl.run(function (a, b) {
  b(".qpmdUW .biKCsy").click(function () {
    var c = this.getAttribute("data-cklink");
    E.pl.request(c)
  })
});