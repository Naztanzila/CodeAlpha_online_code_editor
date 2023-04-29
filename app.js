function run() {
    let html = document.getElementById("html-code");
    let css = document.getElementById("css-code");
    let js = document.getElementById("js-code");
    let code = document.getElementById("out").contentWindow.document;
  
    document.body.onkeyup = function() {
      code.open();
      code.writeln(
        html.value +
          "<style>" +
          css.value +
          "</style>" +
          "<script>" +
          js.value +
          "</script>"
      );
      code.close();
    };
  }
  
  run();