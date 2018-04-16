// 时间处理

// 日期格式化
Date.prototype.format = function (format) {
    var o = {
      'M+': this.getMonth() + 1,
      'd+': this.getDate(),
      'h+': this.getHours(),
      'H+': this.getHours(),
      'm+': this.getMinutes(),
      's+': this.getSeconds(),
      'q+': Math.floor((this.getMonth() + 3) / 3),
      'S': this.getMilliseconds()
    };
    if (/(y+)/.test(format)) { format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length)) }
    for (var k in o) {
      if (new RegExp('(' + k + ')').test(format)) {
        format = format.replace(RegExp.$1, RegExp.$1.length === 1
          ? o[k]
          : ('00' + o[k]).substr(('' + o[k]).length))
      }
    }
    return format
  };


  //时间戳计算年龄
Number.prototype.getAge = function(){
    let ageStrs = formateDate(this).format('YYYY-MM-DD')
    let ageStr = ageStrs;
    let   r   =   ageStr.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
    if (r==null) return   false;
    let d = new Date(r[1], r[3]-1,r[4]);
    if ( d.getFullYear() == r[1] && ( d.getMonth()+1 ) == r[3] && d.getDate() == r[4] )
    {
      let   Y   =   new   Date().getFullYear();
      return( (Y-r[1])+"周岁");
    }
    return("");
  }

  //加天数
  Date.prototype.addDay = function(num){
    if(!isNaN(num))
      this.setDate(
        this.getDate() + parseInt(num)
      );
    return this;
  };
