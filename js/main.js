$(function () {
    $('.aki-pf .icon .iconfont').click(function () {
        let num = $(this).index()
        $(this).siblings('.iconfont').removeClass('active')
        if (num == 0) {
            $(this).addClass('active')
        } else {
            for (let i = 0; i <= num; i++) {
                $(this).parent().children('.iconfont').eq(i).addClass('active')
            }
        }
        $(this).parent().attr('fen', num + 1)
    })


    $('.aki-tj').click(function () {
        let sum = 0
        for (let i = 0; i < $('.pingfen .once .icon').length; i++) {
            sum = sum + $('.pingfen .once .icon').eq(i).attr('fen') * 1
        }

        alert(`你本次提交的综合评分为：${sum / $('.pingfen .once .icon').length} 星！`)
    })
})