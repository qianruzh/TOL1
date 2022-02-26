function giveFeedback_fill_in_blank(index, btnId, inputId, rightFeedbackId, falseFeedbackId, ans){
    $("#"+btnId).click(function(){
        var val = String($("#"+inputId).val());
        if (val==ans) {
            $("#"+rightFeedbackId).show();
            $("#"+falseFeedbackId).hide();
        }
        else{
            $("#"+falseFeedbackId).show();
            $("#"+rightFeedbackId).hide();
        }
        checkAllQuestion[index-1] = true;
    })
}

function giveFeedback_fill_in_2_blank(index, btnId, inputId1, inputId2, rightFeedbackId, falseFeedbackId, ans1, ans2){
    $("#"+btnId).click(function(){
        var val1 = String($("#"+inputId1).val());
        var val2 = String($("#"+inputId2).val());
        if (val1==ans1 && val2==ans2) {
            $("#"+rightFeedbackId).show();
            $("#"+falseFeedbackId).hide();
        }
        else{
            $("#"+falseFeedbackId).show();
            $("#"+rightFeedbackId).hide();
        }
        checkAllQuestion[index-1] = true;
    })
}

function giveFeedback_multi_choice(index, btnId, name, rightFeedbackId, falseFeedbackId, ans){
    $("#"+btnId).click(function(){
        var val = parseInt($("input[name="+name+"]:checked").val());
        if (val == ans) {
            $("#"+rightFeedbackId).show();
            $("#"+falseFeedbackId).hide();
        }
        else{
            $("#"+falseFeedbackId).show();
            $("#"+rightFeedbackId).hide();
        }
        checkAllQuestion[index-1] = true;
    })
}

function jumpto2(){
    var jump = true;
    for (var i=0; i<checkAllQuestion.length; i++){
        if (checkAllQuestion[i] == false){
            alert("You haven't complete all questions.");
            jump = false;
            break;
        }
    }
    if (jump==true){
        window.location.href = "./Page2.html"
    }
}

function jumpto3(){
    window.location.href = "./Page3.html"
}



// Page 1
var ans_p1_1_1 = "1000";
var ans_p1_1_2 = "20";
var ans_p1_1_3 = "3";
var ans_p1_1_4_1 = "200";
var ans_p1_1_4_2 = "1200";
var ans_p1_1_5_1 = "240";
var ans_p1_1_5_2 = "1440";
var ans_p1_1_6_1 = "288";
var ans_p1_1_6_2 = "1728";
var ans_p1_2_1 = "2488";
var ans_p1_2_2 = "3585";
var ans_p1_2_3 = "6191";
var ans_p1_2_4 = 1;
var checkAllQuestion = [false, false, false, false, false,
                        false, false, false, false, false]
giveFeedback_fill_in_blank(1, "btn-p1-1-1","p1-1-1","p1-part1-1r","p1-part1-1f", ans_p1_1_1);
giveFeedback_fill_in_blank(2, "btn-p1-1-2","p1-1-2","p1-part1-2r","p1-part1-2f", ans_p1_1_2);
giveFeedback_fill_in_blank(3, "btn-p1-1-3","p1-1-3","p1-part1-3r","p1-part1-3f", ans_p1_1_3);
giveFeedback_fill_in_2_blank(4, "btn-p1-1-4","p1-1-4-1","p1-1-4-2","p1-part1-4r","p1-part1-4f", ans_p1_1_4_1, ans_p1_1_4_2);
giveFeedback_fill_in_2_blank(5, "btn-p1-1-5","p1-1-5-1","p1-1-5-2","p1-part1-5r","p1-part1-5f", ans_p1_1_5_1, ans_p1_1_5_2);
giveFeedback_fill_in_2_blank(6, "btn-p1-1-6","p1-1-6-1","p1-1-6-2","p1-part1-6r","p1-part1-6f", ans_p1_1_6_1, ans_p1_1_6_2);
giveFeedback_fill_in_blank(7, "btn-p1-2-1","p1-2-1","p1-part2-1r","p1-part2-1f", ans_p1_1_1);
giveFeedback_fill_in_blank(8, "btn-p1-2-2","p1-2-2","p1-part2-2r","p1-part2-2f", ans_p1_1_2);
giveFeedback_fill_in_blank(9, "btn-p1-2-3","p1-2-3","p1-part2-3r","p1-part2-3f", ans_p1_1_3);
giveFeedback_multi_choice(10, "btn-p1-2-4","p1-2-4","p1-part2-4r","p1-part2-4f", ans_p1_2_4);
