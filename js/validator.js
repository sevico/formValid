$(function () {
    'use strict'
    window.Validator = function (val, rule) {
        this.is_valid = function (new_val) {
            var key
            if(new_val!==undefined)
                val=new_val
            console.log(val)
            if(!rule.required && !val) {
                return true

            }
            for(key in rule) {
                if(key==="required")
                    continue
                var r=this['validate_'+key]()
                if(!r) {
                    return false
                }
            }
            return true
        }
        this.validate_max = function () {
            preMaxMin()
            return val <= rule.max
        }

        this.validate_min = function () {
            preMaxMin()
            return val >= rule.min
        }
        this.validate_maxlength = function () {
            preLength()
            console.log(val.length,rule.maxlength)
            return val.length <= rule.maxlength
        }
        this.validate_minlength = function () {
            preLength()
            console.log(val.length,rule.minlength)
            return val.length >= rule.minlength
        }
        this.validate_numeric = function () {
            return $.isNumeric(val)
        }
        this.validate_required = function () {
            var real = $.trim(val)

            if (!read && real !== 0) return false
            return true

        }
        this.validate_pattern = function () {
            var reg = new RegExp(rule.pattern)
            return reg.test(val)
        }

        //用于this.validate_max 或validate_min 前置工作
        function preMaxMin() {
            val = parseFloat(val)
        }

        function preLength() {
            val = val.toString()
        }
    }
})

