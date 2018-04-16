//js数组处理

    Array.prototype.unique = function(){ //arr数组去重
        this.sort();
        var arr = this;
        var result = [], json = {};
        for (var i = 0, len = arr.length; i < len; i++){
            if (!json[arr[i]]) {
                json[arr[i]] = 1;
                result.push(arr[i]);  //返回没被删除的元素
            }
        }
        return result;

    }

    Array.prototype.uniqueEs6 = function () {  //arr数组去重
        return [...new Set(this)];
      };
  
    Array.prototype.uniqueObject = function() { //对象数组去重
            var arr = this;
            var hash = {};
            arr = arr.reduce(function(item, next) {
                hash[next.name] ? '' : hash[next.name] = true && item.push(next);
                return item
            }, [])
            return arr;
    }

    Array.prototype.uniqueObjectJson=function(){ //对象数组去重
        var res=[];  	 	
        var jso={};
        for(var i=0;i<this.length;i++){
          if (!jso[JSON.stringify(this[i])]) {
            res.push(this[i]);
            jso[JSON.stringify(this[i])]=1;
          };
        } 
        return res;
      };

   

     Array.prototype.uniqueCommon = function(){   //两个数组，a = [1,2,3], b = [2,3,4]，要求合并后的数组为[1,4]
        var a = {},
            b = {},
            n = this.length;
        for(var i = 0; i < n; i++){
          if(typeof(b[this[i]]) != "undefined")
            continue;
          if(typeof(a[this[i]]) == "undefined"){
            a[this[i]] = 1;
          }else{
            b[this[i]] = 1;
            delete a[this[i]];
          }
        }
        this.length = 0;
        for(var i in a)
          this[this.length] = i;
        return this;
      };

    Array.prototype.isRepeat = function() {  //arr是否有重复元素
        var arr = this;
        var hash = {};
        for (var i in arr) {
            if (hash[arr[i]]) return true;
            hash[arr[i]] = true;
        }
        return false;
    }

    Array.prototype.isMax = function() { // arr 数组取最大值
        return Math.max.apply(Math,this)
    }

    Array.prototype.isMin = function() { // arr 数组取最小值
        return Math.min.apply(Math,this)
    }

    Array.prototype.sorts = function(){ //数组排序
        this.sort(function(a,b){
            return a - b ;
        })
        return this    
    }

   

    function isArray (arr) { //判断是否是数组
      return typeof Array.isArray === 'function' ?
                    Array.isArray(arr) : Object.prototype.toString.call(arr) === '[Object Array]'
    }
        