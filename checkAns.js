// Page 1 param
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

// Page 2 param
var ans_p2_1_1 = 1;
var ans_p2_1_2 = 2;
var ans_p2_1_3 = 3;
var ans_p2_1_4 = 4;
var ans_p2_1_5 = "5";
var ans_p2_1_6 = "2";
var ans_p2_2_1 = "principal";
var ans_p2_2_2 = "interest";
var ans_p2_2_3 = "number";
var ans_p2_3_1 = 11025;

// Page 1
giveFeedback_fill_in_blank("btn-p1-1-1","p1-1-1","p1-part1-1r","p1-part1-1f", ans_p1_1_1);
giveFeedback_fill_in_blank("btn-p1-1-2","p1-1-2","p1-part1-2r","p1-part1-2f", ans_p1_1_2);
giveFeedback_fill_in_blank("btn-p1-1-3","p1-1-3","p1-part1-3r","p1-part1-3f", ans_p1_1_3);
giveFeedback_fill_in_2_blank("btn-p1-1-4","p1-1-4-1","p1-1-4-2","p1-part1-4r","p1-part1-4f", ans_p1_1_4_1, ans_p1_1_4_2);
giveFeedback_fill_in_2_blank("btn-p1-1-5","p1-1-5-1","p1-1-5-2","p1-part1-5r","p1-part1-5f", ans_p1_1_5_1, ans_p1_1_5_2);
giveFeedback_fill_in_2_blank("btn-p1-1-6","p1-1-6-1","p1-1-6-2","p1-part1-6r","p1-part1-6f", ans_p1_1_6_1, ans_p1_1_6_2);
giveFeedback_fill_in_blank("btn-p1-2-1","p1-2-1","p1-part2-1r","p1-part2-1f", ans_p1_1_1);
giveFeedback_fill_in_blank("btn-p1-2-2","p1-2-2","p1-part2-2r","p1-part2-2f", ans_p1_1_2);
giveFeedback_fill_in_blank("btn-p1-2-3","p1-2-3","p1-part2-3r","p1-part2-3f", ans_p1_1_3);
giveFeedback_multi_choice("btn-p1-2-4","p1-2-4","p1-part2-4r","p1-part2-4f", ans_p1_2_4);

// Page 2
giveFeedback_multi_choice("btn-p2-1-1","p2-1-1","step1-1r","step1-1f", ans_p2_1_1);
giveFeedback_multi_choice("btn-p2-1-2","p2-1-2","step1-2r","step1-2f", ans_p2_1_2);
giveFeedback_multi_choice("btn-p2-1-3","p2-1-3","step1-3r","step1-3f", ans_p2_1_3);
giveFeedback_multi_choice("btn-p2-1-4","p2-1-4","step1-4r","step1-4f", ans_p2_1_4);
giveFeedback_fill_in_blank("btn-p2-1-5","p2-1-5","step1-5r","step1-5f", ans_p2_1_5);
giveFeedback_fill_in_blank("btn-p2-1-6","p2-1-6","step1-6r","step1-6f", ans_p2_1_6);
giveFeedback_fill_in_blank("btn-p2-2-1","p2-2-1","step2-1r","step2-1f", ans_p2_2_1);
giveFeedback_fill_in_blank("btn-p2-2-1","p2-2-2","step2-2r","step2-2f", ans_p2_2_2);
giveFeedback_fill_in_blank("btn-p2-2-1","p2-2-3","step2-3r","step2-3f", ans_p2_2_3);
giveFeedback_fill_in_blank("btn-p2-3-1","p2-3-1","step3-1r","step3-1f", ans_p2_3_1);

// functions
function giveFeedback_fill_in_blank(btnId, inputId, rightFeedbackId, falseFeedbackId, ans){
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
    })
}

function giveFeedback_fill_in_2_blank(btnId, inputId1, inputId2, rightFeedbackId, falseFeedbackId, ans1, ans2){
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
    })
}

function giveFeedback_multi_choice(btnId, name, rightFeedbackId, falseFeedbackId, ans){
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
    })
}

function openEnd() {
    $("#step3-2r").show();
}

function jumpto1() {
    window.location.href='./Page1.html';
}

function jumpto2(){
    window.location.href = "./Page2.html"
}

function jumpto3(){
    window.location.href = "./Page3.html"
}
