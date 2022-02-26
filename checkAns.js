function giveFeedback_fill_in_blank(btnId, inputId, rightFeedbackId, falseFeedbackId, ans){
    $("#"+btnId).click(function(){
        var val = String($("#"+inputId).val());
        console.log(ans);
        if (val==ans) {
            $("#"+rightFeedbackId).show();
            $("#"+falseFeedbackId).hide();
        }
        else{
            $("#"+falseFeedbackId).show();
            $("#"+rightFeedbackId).hide();
        }
    })
}

function giveFeedback_multi_choice(btnId, name, rightFeedbackId, falseFeedbackId, ans){
    $("#"+btnId).click(function(){
        var val = parseInt($("input[name="+name+"]:checked").val());
        console.log(val);
        console.log(ans);
        console.log(typeof(val));
        console.log(typeof(ans));

        if (val == ans) {
            $("#"+rightFeedbackId).show();
            $("#"+falseFeedbackId).hide();
        }
        else{
            $("#"+falseFeedbackId).show();
            $("#"+rightFeedbackId).hide();
        }
    })
}

function jumpto2(){
    window.location.href = "./Page2.html"
}


var ans_p1_1_1 = "10000";
var ans_p1_1_2 = "20";
var ans_p1_2_4 = 1;

giveFeedback_fill_in_blank("btn-p1-1-1","p1-1-1","p1-part1-1r","p1-part1-1f", ans_p1_1_1);
giveFeedback_fill_in_blank("btn-p1-1-2","p1-1-2","p1-part1-2r","p1-part1-2f", ans_p1_1_2);

giveFeedback_multi_choice("btn-p1-2-4","p1-2-4","p1-part2-4r","p1-part2-4f", ans_p1_2_4);
