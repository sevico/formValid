$(
    function () {
        var $inputs = $("[data-rule]")
        var $form = $("#signup")
        var inputs = []
        $inputs.each(function (key, val) {
            //解析每一个 input 的验证规则
            var tmp = new Input(val)
            inputs.push(tmp)
        })
        $form.on("submit", function (e) {
            e.preventDefault()
            $inputs.trigger("change")
            for (var i = 0; i < inputs.length; i++) {
                var item = inputs[i]
                r = item.validator.is_valid()
                if (!r) {
                    alert("invalid")
                    return
                }
            }
            alert("valid")
            signup()
        })
        function signup() {
            alert("注册成功!")
        }
    }
)
