$(function () {
   window.Input=function (selector) {
       var $ele,rule={required:true,},me=this,$error_ele
       this.load_validator = function () {
           var val = this.get_val()
           this.validator = new Validator(val,rule)
       }
       this.get_val = function () {
           return $ele.val()
       }
         function init() {
            findEle()
             get_error_ele()
             parse_rule()
             me.load_validator()
             listen()
         }
         function listen() {
           $ele.on("change",function () {
               console.log(me.get_val())
             var valid=  me.validator.is_valid(me.get_val())
               console.log(valid)
               if(valid) {
                 $error_ele.hide()
               }else{
                 $error_ele.show()
               }
           })
         }
         function get_error_ele() {
           $error_ele = $(get_error_selector())
         }
         function get_error_selector() {
            return "#"+$ele.attr('name')+"-input-error"
         }
         function findEle() {
             if(selector instanceof jQuery) {
                 $ele=selector
             }else {
                 $ele = $(selector)
             }
         }
         function parse_rule() {
             var ruleString=$ele.data('rule')
             if(!ruleString) {
                 return
             }
             var ruleArr = ruleString.split("|")
             for(var i=0;i<ruleArr.length;i++) {
                 var itemString=ruleArr[i]
                 var itemArr=itemString.split(":")
                 rule[itemArr[0]] = JSON.parse(itemArr[1])


             }
         }
         init()


   }
})

