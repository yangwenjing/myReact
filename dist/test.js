/**
 * Created by ywj on 15/8/15.
 */
Array.prototype.deleteDuplicate = function () {
  var result = [];
  this.filter(function(item,index,arr){
    if(arr.indexOf(item)==index) {
      return true;
    }
    else {
      result.push(item);
      arr.splice(index,1);
      return false;
    }
  });
  return result;
};

function mySort() {
  var tags = new Array();//使用数组作为参数存储容器
  for(var i in arguments) {
    tags.push(arguments[i]);
  }
  tags.sort(function(item1, item2) {
    if(item1>item2)
      return 1;
    if(item1==item2)
      return 0;
    return -1;
  });
  return tags;//返回已经排序的数组
}


function getCharBitLen (str) {
  var bits = str.length;
  for(var i=0;i<str.length; i++) {
    if(str.charCodeAt(i)>255)
      bits++;
  }
  return bits;
}

console.log(getCharBitLen("杨文静,hahaha"));

function getStr (str) {
  return (typeof str=='string'||str instanceof Object);
}

var end = new Date(2016,1,1,0,0,0);
function getSeconds() {
  var date = new Date();
  return  (end.getTime()-date.getTime());
}
//测试
var handle = setInterval(function() {
  var dom = document.getElementById("date");
  var seconds = getSeconds();
//            var day = Math.floor(seconds/3600/24);
//            seconds = seconds-day*3600*24;
//            var hour = seconds/3600;
//            seconds = seconds-hour*3600;
//            var minutes = Math.floor(seconds/60);
//            seconds = seconds - minutes*60;
//            dom.innerText = day+"天"+hour+"小时"+minutes+"分钟"+seconds+"秒";
  dom.innerText = seconds;
}, 1000);


function clone (obj) {
  //如果非对象
  if(!obj) return null;
  if(typeof obj !== "object") {
    console.log(obj);
    return obj;
  }
  var o;
  if(obj instanceof Array) {
    o = [];
    for(var i=0;i<obj.length;i++) {
      o[i] = clone(obj[i]);
    }
  } else {
    o = {};
    for(var attr in obj) {
      o[attr] = clone(obj[attr]);
    }
  }
  return o;
}

function cloneObject(o) {
  if(!o || 'object' !== typeof o) {
    return o;
  }
  var c = 'function' === typeof o.pop ? [] : {};
  var p, v;
  for(p in o) {
    if(o.hasOwnProperty(p)) {
      v = o[p];
      if(v && 'object' === typeof v) {
        c[p] = Ext.ux.clone(v);
      }
      else {
        c[p] = v;
      }
    }
  }
  return c;
};



