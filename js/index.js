$(() => {

  $(".horizotal-shadow-badge").text($("#horizontal-shadow").val());
  $("#horizontal-shadow").change((e) => {
    $(".horizotal-shadow-badge").text(e.target.value);
  });

  $(".vertical-shadow-badge").text($("#vertical-shadow").val());
  $("#vertical-shadow").change((e) => {
    $(".vertical-shadow-badge").text(e.target.value);
  });

    $(".blur-radius-badge").text($("#blur-radius").val());
    $("#blur-radius").change((e) => {
      $(".blur-radius-badge").text(e.target.value);
    });

    $(".spread-radius-badge").text($("#spread-radius").val());
    $("#spread-radius").change((e) => {
      $(".spread-radius-badge").text(e.target.value);
    });

    $(".shadow-color-opacity-badge").text($("#shadow-color-opacity").val());
    $("#shadow-color-opacity").change((e) => {
      $(".shadow-color-opacity-badge").text(e.target.value);
    });

  function boxShadow({
    horisontalShadow,
    verticalShadow,
    blurRadius,
    spreadRadius,
    shadowColor,
    inset = false,
  }) {
    let boxShadow;
    if (inset) {
      boxShadow =
        horisontalShadow +
        `px ` +
        verticalShadow +
        "px " +
        blurRadius +
        "px " +
        spreadRadius +
        "px " +
        shadowColor +
        " inset";
      (")");
    } else {
      boxShadow =
        horisontalShadow +
        `px ` +
        verticalShadow +
        "px " +
        blurRadius +
        "px " +
        spreadRadius +
        "px " +
        shadowColor;
      (")");
    }

    $(".box").css("box-shadow", boxShadow);
    $(".result").text("box-shadow:" + boxShadow);
  }

  boxShadow({
    horisontalShadow: 100,
    verticalShadow: 100,
    blurRadius: 100,
    spreadRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    inset: false,
  });

  $(document).on("input change", "input", () => {
    const horisontalShadow = $("#horizontal-shadow").val();
    const verticalShadow = $("#vertical-shadow").val();
    const blurRadius = $("#blur-radius").val();
    const spreadRadius = $("#spread-radius").val();
    const hexColor = $("#select-color").val();
    const inset = $("#inset:checked").val();
    const red = parseInt(hexColor[1] + hexColor[2], 16);
    const green = parseInt(hexColor[3] + hexColor[4], 16);
    const blue = parseInt(hexColor[5] + hexColor[6], 16);

    const shadowOpacity = $("#shadow-color-opacity").val();
    const shadowColor = `rgba(${red}, ${green}, ${blue}, ${shadowOpacity})`;

    boxShadow({
      horisontalShadow,
      verticalShadow,
      blurRadius,
      spreadRadius,
      shadowColor,
      shadowOpacity,
      inset,
    });
  });

  $;
});
