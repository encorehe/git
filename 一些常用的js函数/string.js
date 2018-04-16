//常用字符串处理函数

String.prototype.Trim = function() { //字符串去掉前后空格
  return this.replace(/(^\s*)|(\s*$)/g, "");
};

String.prototype.LTrim = function(){ //字符串去掉左侧空格
  return this.replace(/(^\s*)/g, "");
};

String.prototype.RTrim = function(){ //字符串去掉右侧空格
  return this.replace(/(\s*$)/g, "");
}

String.prototype.hyphenToHump = function () { // 连字符转驼峰
    return this.replace(/-(\w)/g, function () {
      return arguments[1].toUpperCase()
    })
  };

  String.prototype.gblen = function() { //计算字符串字节数
    var len = 0;
    for (var i=0; i<this.length; i++) {
        if (this.charCodeAt(i)>127 || this.charCodeAt(i)==94) {
            len += 2;
        } else {
            len ++;
        }
    }
    return len;
}

String.prototype.leftStr = function(len) { //得到左侧Len的字符串

        if(isNaN(len)||len==null)
        {
                len = this.length;
        }
        else
        {
                if(parseInt(len)<0||parseInt(len)>this.length)
                {
                        len = this.length;
                }
        }
       
        return this.substr(0,len);
}

String.prototype.rightStr = function(len){ //得到右侧Len的字符串

        if(isNaN(len)||len==null){
                len = this.length;
        }
        else{
            if(parseInt(len)<0||parseInt(len)>this.length){
                    len = this.length;
            }
        }
        return this.substring(this.length-len,this.length);
}

String.prototype.midStr = function(start,len) { //得到中间的字符串,注意从0开始
        return this.substr(start,len);
}

String.prototype.InStrRev = function(str) { //在字符串里反向查找另一字符串:位置0开始

        if(str==null)
        {
                str = "";
        }
       
        return this.lastIndexOf(str);
}

String.prototype.lengthW = function() //计算字符串打印长度
{
        return this.replace(/[^/x00-/xff]/g,"**").length;
}

String.prototype.isIP = function() //是否是正确的IP地址
{

        var reSpaceCheck = /^(/d+)/.(/d+)/.(/d+)/.(/d+)$/;

        if (reSpaceCheck.test(this))
        {
                this.match(reSpaceCheck);
                if (RegExp.$1 <= 255 && RegExp.$1 >= 0
                 && RegExp.$2 <= 255 && RegExp.$2 >= 0
                 && RegExp.$3 <= 255 && RegExp.$3 >= 0
                 && RegExp.$4 <= 255 && RegExp.$4 >= 0)
                {
                        return true;    
                }
                else
                {
                        return false;
                }
        }
        else
        {
                return false;
        }

}

String.prototype.existChinese = function() //是否是有汉字
{
        //[/u4E00-/u9FA5]為漢字﹐[/uFE30-/uFFA0]為全角符號
        return /^[/x00-/xff]*$/.test(this);
}

String.prototype.isFileName = function() //是否是合法的文件名/目录名
{
        return !/[/////*/?/|:"<>]/g.test(this);
}

String.prototype.isUrl = function() //是否是有效链接
{
        return /^http[s]?:////([/w-]+/.)+[/w-]+([/w-./?%&=]*)?$/i.test(this);
}


String.prototype.toCase = function() //转换成全角
{
        var tmp = "";
        for(var i=0;i<this.length;i++)
        {
                if(this.charCodeAt(i)>0&&this.charCodeAt(i)<255)
                {
                        tmp += String.fromCharCode(this.charCodeAt(i)+65248);
                }
                else
                {
                        tmp += String.fromCharCode(this.charCodeAt(i));
                }
        }
        return tmp
}

String.prototype.htmlEncodeByRegExp=function (){  //字符串转html
 var s = "";
 var str = this;
 if(str.length == 0) return "";
    s = str.replace(/&/g,"&amp;");
    s = s.replace(/</g,"&lt;");
    s = s.replace(/>/g,"&gt;");
    s = s.replace(/ /g,"&nbsp;");
    s = s.replace(/\'/g,"&#39;");
    s = s.replace(/\"/g,"&quot;");
    return s;  
}

String.prototype.htmlDecodeByRegExp=function (){  //html转字符串
    var s = "";
    var str = this;
        if(str.length == 0) return "";
        s = str.replace(/&amp;/g,"&");
        s = s.replace(/&lt;/g,"<");
        s = s.replace(/&gt;/g,">");
        s = s.replace(/&nbsp;/g," ");
        s = s.replace(/&#39;/g,"\'");
        s = s.replace(/&quot;/g,"\"");
         return s;  
   }

   String.prototype.reverseString = function (){ //字符串反转
       return this.split("").reverse().join("")
   }


   String.prototype.hyphenFormatDate = function (){ //2005-12-15   09:41:3
            return new Date(Date.parse(this.replace(/-/g,"/")))
   }

   String.prototype.removeRepeat = function() { //字符串去重
        var res=[];  
        var arr=this.split("");  
        for(var i=0;i<arr.length;i++){  
            if(res.indexOf(arr[i])==-1){  
                res.push(arr[i]);  
            }  
        }  
        return res.join("");  
   }
   
   String.prototype.isHasChar = function(char) { //字符串是否存在char字符
       var res = false;
       if (this.indexOf(char) > -1) res = true;
       return res
   }


   String.prototype.checkCardId = function(){   //检验身份证是否合法
                var socialNo = this;
                if(socialNo == "")  
                {  
                alert("输入身份证号码不能为空!");  
                return (false);  
                }  

                if (socialNo.length != 15 && socialNo.length != 18)  
                {  
                alert("请输入有效证件号码!");  
                return (false);  
                }  
                    
            var area={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"};   
                
                if(area[parseInt(socialNo.substr(0,2))]==null) {  
                alert("身份证号码不正确(地区非法)!");  
                    return (false);  
                }   
                        
                if (socialNo.length == 15)  
                {  
                pattern= /^\d{15}$/;  
                if (pattern.exec(socialNo)==null){  
                    alert("15位身份证号码必须为数字！");  
                    return (false);  
                }  
                var birth = parseInt("19" + socialNo.substr(6,2));  
                var month = socialNo.substr(8,2);  
                var day = parseInt(socialNo.substr(10,2));  
                switch(month) {  
                    case '01':  
                    case '03':  
                    case '05':  
                    case '07':  
                    case '08':  
                    case '10':  
                    case '12':  
                        if(day>31) {  
                            alert('请输入有效证件号码!');  
                            return false;  
                        }  
                        break;  
                    case '04':  
                    case '06':  
                    case '09':  
                    case '11':  
                        if(day>30) {  
                            alert('请输入有效证件号码!');  
                            return false;  
                        }  
                        break;  
                    case '02':  
                        if((birth % 4 == 0 && birth % 100 != 0) || birth % 400 == 0) {  
                            if(day>29) {  
                                alert('请输入有效证件号码!');  
                                return false;  
                            }  
                        } else {  
                            if(day>28) {  
                                alert('请输入有效证件号码!');  
                                return false;  
                            }  
                        }  
                        break;  
                    default:  
                        alert('请输入有效证件号码!');  
                        return false;  
                }  
                var nowYear = new Date().getYear();  
                if(nowYear - parseInt(birth)<15 || nowYear - parseInt(birth)>100) {  
                    alert('请输入有效证件号码!');  
                    return false;  
                }  
                return (true);  
                }  
                
                var Wi = new Array(  
                        7,9,10,5,8,4,2,1,6,  
                        3,7,9,10,5,8,4,2,1  
                        );  
                var   lSum        = 0;  
                var   nNum        = 0;  
                var   nCheckSum   = 0;  
                
                for (i = 0; i < 17; ++i)  
                {  
                        

                    if ( socialNo.charAt(i) < '0' || socialNo.charAt(i) > '9' )  
                    {  
                        alert("请输入有效证件号码!");  
                        return (false);  
                    }  
                    else  
                    {  
                        nNum = socialNo.charAt(i) - '0';  
                    }  
                    lSum += nNum * Wi[i];  
                }  

                
                if( socialNo.charAt(17) == 'X' || socialNo.charAt(17) == 'x')  
                {  
                    lSum += 10*Wi[17];  
                }  
                else if ( socialNo.charAt(17) < '0' || socialNo.charAt(17) > '9' )  
                {  
                    alert("请输入有效证件号码!");  
                    return (false);  
                }  
                else  
                {  
                    lSum += ( socialNo.charAt(17) - '0' ) * Wi[17];  
                }  

                    
                    
                if ( (lSum % 11) == 1 )  
                {  
                    return true;  
                }  
                else  
                {  
                    alert("请输入有效证件号码!");  
                    return (false);  
                }  
        
} 



    String.prototype.brStrings = function(){ //n字符串转成<br>
        var reg = new RegExp("\n", "g");
        var reg2 = new RegExp("&nbsp;","g");
        var str =  this.replaceAll(reg2, " ");
        return str;
    }
    
    String.prototype.brString = function(){ //所有n字符串转成<br>
        var reg = new RegExp("\n", "g");
        var reg2 = new RegExp("&nbsp;","g")
        var str =  this.replaceAll(reg, "<br>");
        str =  str.replaceAll(reg2, " ");
        return str;
    }

    String.prototype.nString = function(){   //所有br字符串转成\n
        var reg = new RegExp("<br/>", "g");
        let reg2 = new RegExp(" ","g")
        let str =  this.replaceAll(reg, "\n");
        return str;
      }
   
    String.prototype.humpToHyphen = function () {  // 驼峰转连字符
        return this.replace(/([A-Z])/g, '-$1').toLowerCase()
    };
    
    String.prototype.replaceAll = function(s1,s2){ //替换所有
    
        return this.replace(new RegExp(s1,"gm"),s2);
    }