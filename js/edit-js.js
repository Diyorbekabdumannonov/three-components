jQuery(function ($) {
  $("input").on("keypress", function (e) {
    if (e.keyCode == 13) {
      var getindex = $(this).parents(".inner_tab_content").index() + 1;
      if (e.target.name == "info") {
        const accInfo = $(this)
          .parents(".inner_tab_content")
          .find('input[name="info"')
          .val();
        var ownerEmail = $(this)
          .parents(".inner_tab_content")
          .find('input[type="email"]')
          .val();
        var validatePass = false;
        var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
        if (testEmail.test(ownerEmail)) {
          validatePass = true;
        } else {
          validatePass = false;
        }
        if (accInfo == "") {
          alert("Please enter personal information");
        } else if (ownerEmail == "") {
          alert("please enter the email");
        } else if (ownerEmail != "" && validatePass == false) {
          alert("Not a valid email address");
        }
      } else if (getindex == 1) {
        var isFussy = $(this)
          .parents(".inner_tab_content")
          .find('input[name="pet-fussy"]')
          .is(":checked");
        var fussyVal = $(this)
          .parents(".inner_tab_content")
          .find('input[name="pet-fussy"]:checked')
          .val();
        var isFussyType = $(this)
          .parents(".inner_tab_content")
          .find('input[type="radion"]')
          .is(":checked");
        if (isFussy == false) {
          alert("Please select fusyy");
        } else if (fussyVal == true && isFussyType == false) {
          alert("Please select fussy type below");
        } else {
          $("#tab ul li.tab2")
            .find(".current_step")
            .text(getindex + 1);
          if (totalSteps1 == getindex + 1) {
            $("#tab ul li.tab2").addClass("completed_step");
          }
          $(this)
            .parents(".inner_tab_body")
            .find(".inner_tab_content")
            .eq(getindex)
            .show()
            .siblings()
            .hide();
        }
      } else if (getindex == 2) {
        var isSnack = $(this)
          .parents(".inner_tab_content")
          .find('input[name="snackradio"]')
          .is(":checked");
        if (isSnack == false) {
          alert("Please select Snack");
        } else {
          $("#tab ul li.tab2")
            .find(".current_step")
            .text(getindex + 1);
          if (totalSteps1 == getindex + 1) {
            $("#tab ul li.tab2").addClass("completed_step");
          }
          $(this)
            .parents(".inner_tab_body")
            .find(".inner_tab_content")
            .eq(getindex)
            .show()
            .siblings()
            .hide();
        }
      } else if (getindex == 3) {
        var isSnack = $(this)
          .parents(".inner_tab_content")
          .find('input[name="pet-kibbles"]')
          .is(":checked");
        if (isSnack == false) {
          alert("Please select Snack");
        } else {
          $("#tab ul li.tab2").addClass("completed_step");
          $("#tab ul li.tab3").addClass("current_step active");
          $(this)
            .parents(".inner_tab_body")
            .find(".inner_tab_content")
            .eq(getindex)
            .show()
            .siblings()
            .hide();
        }
      }
      if (getindex == 4) {
        const accInfo = $(this)
          .parents(".inner_tab_content")
          .find('input[name="info"')
          .val();
        var ownerEmail = $(this)
          .parents(".inner_tab_content")
          .find('input[type="email"]')
          .val();
        var validatePass = false;
        var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
        if (testEmail.test(ownerEmail)) {
          validatePass = true;
        } else {
          validatePass = false;
        }
        if (accInfo == "") {
          alert("Please enter personal information");
        } else if (ownerEmail == "") {
          alert("please enter the email");
        } else if (ownerEmail != "" && validatePass == false) {
          alert("Not a valid email address");
        } else {
          $("#tab ul li.tab3").addClass("completed_step");
          $("#tab ul li.tab4").addClass("current_step active");
          $(this)
            .parents(".inner_tab_body")
            .find(".inner_tab_content")
            .eq(getindex)
            .show()
            .siblings()
            .hide();
        }
      }
      if (getindex == 5) {
        var isSnack = $(".inner_tab_content")
          .find('input[name="pet-plan"]')
          .is(":checked");
        if (isSnack != "") {
          return;
        } else {
          $("#tab ul li.tab4").addClass("completed_step");
          $("#tab ul li.tab5").addClass("current_step active");
          $(this)
            .parents(".inner_tab_body")
            .find(".inner_tab_content")
            .eq(getindex)
            .show()
            .siblings()
            .hide();
        }
      }
    }
  });

  $(window).on("keypress", function (e) {
    if (e.keyCode == 13) {
      var isFussy = $(".inner_tab_content")
        .find('input[name="pet-fussy"]')
        .is(":checked");
      var isSnack = $(".inner_tab_content")
        .find('input[name="snackradio"]')
        .is(":checked");
      var kibles = $(".inner_tab_content")
        .find('input[name="pet-kibbles"]')
        .is(":checked");
      const getindex = $(".inner_tab_body")
        .find(".inner_tab_content")
        .filter((e, i) => i.style.display != "none")
        .index();

      if (getindex == 0) {
        if (isFussy == true) {
          $("#tab ul li.tab2").find(".current_step").text(1);
          $(".inner_tab_body")
            .find(".inner_tab_content")
            .eq(1)
            .show()
            .siblings()
            .hide();
        }
      }
      if (getindex == 1) {
        if (isSnack == true) {
          $("#tab ul li.tab2").find(".current_step").text(2);
          $(".inner_tab_body")
            .find(".inner_tab_content")
            .eq(2)
            .show()
            .siblings()
            .hide();
        }
      }
      if (getindex == 2) {
        if (kibles == true) {
          $("#tab ul li.tab2").find(".current_step").text(3);
          $(".inner_tab_body")
            .find(".inner_tab_content")
            .eq(3)
            .show()
            .siblings()
            .hide();
        }
      }
      if (getindex == 4) {
        $(".inner_tab_body")
          .find(".inner_tab_content")
          .eq(4)
          .show()
          .siblings()
          .hide();
      }
      if (getindex == 5) {
        $(".inner_tab_body")
          .find(".inner_tab_content")
          .eq(5)
          .show()
          .siblings()
          .hide();
      }
    }
  });

  var totalSteps1 = $("#inner_tab .inner_tab_body").find(
    ".inner_tab_content"
  ).length;
  $(".inner_next").click(function () {
    var getindex = $(this).parents(".inner_tab_content").index() + 1;
    if (getindex == 1) {
      var isFussy = $(this)
        .parents(".inner_tab_content")
        .find('input[name="pet-fussy"]')
        .is(":checked");
      var fussyVal = $(this)
        .parents(".inner_tab_content")
        .find('input[name="pet-fussy"]:checked')
        .val();
      var isFussyType = $(this)
        .parents(".inner_tab_content")
        .find('input[type="radion"]')
        .is(":checked");
      if (isFussy == false) {
        alert("Please select fusyy");
      } else if (fussyVal == true && isFussyType == false) {
        alert("Please select fussy type below");
      } else {
        $("#tab ul li.tab2")
          .find(".current_step")
          .text(getindex + 1);
        if (totalSteps1 == getindex + 1) {
          $("#tab ul li.tab2").addClass("completed_step");
        }
        $(this)
          .parents(".inner_tab_body")
          .find(".inner_tab_content")
          .eq(getindex)
          .show()
          .siblings()
          .hide();
      }
    }
    if (getindex == 2) {
      var isSnack = $(this)
        .parents(".inner_tab_content")
        .find('input[name="snackradio"]')
        .is(":checked");
      if (isSnack == false) {
        alert("Please select Snack");
      } else {
        $("#tab ul li.tab2")
          .find(".current_step")
          .text(getindex + 1);
        if (totalSteps1 == getindex + 1) {
          $("#tab ul li.tab2").addClass("completed_step");
        }
        $(this)
          .parents(".inner_tab_body")
          .find(".inner_tab_content")
          .eq(getindex)
          .show()
          .siblings()
          .hide();
      }
    }
    if (getindex == 3) {
      var isSnack = $(this)
        .parents(".inner_tab_content")
        .find('input[name="pet-kibbles"]')
        .is(":checked");
      if (isSnack == false) {
        alert("Please select Snack");
      } else {
        $("#tab ul li.tab2").addClass("completed_step");
        $("#tab ul li.tab3").addClass("current_step active");
        $(this)
          .parents(".inner_tab_body")
          .find(".inner_tab_content")
          .eq(getindex)
          .show()
          .siblings()
          .hide();
      }
    }
    if (getindex == 4) {
      const accInfo = $(this)
        .parents(".inner_tab_content")
        .find('input[name="info"')
        .val();
      var ownerEmail = $(this)
        .parents(".inner_tab_content")
        .find('input[type="email"]')
        .val();
      var validatePass = false;
      var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
      if (testEmail.test(ownerEmail)) {
        validatePass = true;
      } else {
        validatePass = false;
      }
      if (accInfo == "") {
        alert("Please enter personal information");
      } else if (ownerEmail == "") {
        alert("please enter the email");
      } else if (ownerEmail != "" && validatePass == false) {
        alert("Not a valid email address");
      } else {
        $("#tab ul li.tab3").addClass("completed_step");
        $("#tab ul li.tab4").addClass("current_step active");
        $(this)
          .parents(".inner_tab_body")
          .find(".inner_tab_content")
          .eq(getindex)
          .show()
          .siblings()
          .hide();
      }
    }
    if (getindex == 5) {
      var isSnack = $(".inner_tab_content")
        .find('input[name="bento-form[full-bento-box]"]')
        .is(":checked");
      if (isSnack == "") {
        console.log("smth");
        alert("please select type below");
      } else {
        $("#tab ul li.tab4").addClass("completed_step");
      }
    }
  });
  $("#inner_tab2 a.innner_previous_btn").click(function (e) {
    e.preventDefault();
    var getindex = $(this).parents(".inner_tab_content").index() - 1;
    if (getindex == 3) {
      $("#tab ul li.tab4").removeClass("current_step active");
      $("#tab ul li.tab4").removeClass("completed_step");
    }
    if (getindex == 2) {
      $("#tab ul li.tab3").removeClass("current_step active");
      $("#tab ul li.tab3").removeClass("completed_step");
    }
    if (getindex == 1) {
      $("#tab ul li.tab").removeClass("current_step active");
      $("#tab ul li.tab2").removeClass("completed_step");
    }
    console.log(getindex);
    $("#tab ul li.tab2")
      .find(".current_step")
      .text(getindex + 1);
    $(this)
      .parents(".inner_tab_body")
      .find(".inner_tab_content")
      .eq(getindex)
      .show()
      .siblings()
      .hide();
  });
});
