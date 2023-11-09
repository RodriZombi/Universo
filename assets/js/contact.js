$.validator.setDefaults({
    submitHandler: function () {
      alert("submitted!");
    }
  });
  
  $(document).ready(function () {
    $('#formJQ').validate({
      rules: {
        // The key name on the left side is the name attribute
        // of an input field. Validation rules are defined
        // on the right side
        nombre: "required",
        apellido: "required",
        correo: {
          required: true,
          // Specify that email should be validated
          // by the built-in "email" rul
          email: true
        },
        comments: "required",
        edad: {
          required: true,
          rangelenght: [1, 3]
        },
        tel: {
          required: true,
          length: 8
        },
        user: {
          required: true,
          minlength: 8
        },
        password: {
          required: true,
          minlength: 8
        },
        agree: "required"
      },
      // Specify validation error messages
      messages: {
        nombre: "Por favor introduzca su nombre",
        apellido: "Por favor introduzca su apellido",
        correo: {
          required: "Correo requerido",
          // Specify that email should be validated
          // by the built-in "email" rul
          email: "Introduzca correo correctamente"
        },
        comments: "Comentario requerido",
        edad: {
          required: "Edad requerida",
          length: "Introduzca una edad válida",
        },
        tel: {
          required: "Teléfono requerido",
          length: "Telefono de 8 numeros, sin espacios."
        },
        user: {
          required: "Usuario requerido",
          minlength: "Usuario de 8 caracteres por lo menos"
        },
        password: {
          required: "Contraseña requerida",
          minlength: "Por favor contraseña de por lo menos 8 caracteres"
        },
        agree: "Por favor leer Terminos y Condiciones..."
      },
      errorElement: "em",
      errorPlacement: function (error, element) {
        // Add the `help-block` class to the error element
        error.addClass("help-block");
  
        if (element.prop("type") === "checkbox") {
          error.insertAfter(element.parent("label"));
        } else {
          error.insertAfter(element);
        }
      },
      highlight: function (element, errorClass, validClass) {
        $(element).parents(".col-sm-2").addClass("has-error").removeClass("has-success");
        $(element).parents(".col-sm-3").addClass("has-error").removeClass("has-success");
        $(element).parents(".col-sm-4").addClass("has-error").removeClass("has-success");
        $(element).parents(".col-sm-5").addClass("has-error").removeClass("has-success");
        $(element).parents(".col-sm-6").addClass("has-error").removeClass("has-success");
        $(element).parents(".col-sm-8").addClass("has-error").removeClass("has-success");
      },
      unhighlight: function (element, errorClass, validClass) {
        $(element).parents(".col-sm-2").addClass("has-success").removeClass("has-error");
        $(element).parents(".col-sm-3").addClass("has-success").removeClass("has-error");
        $(element).parents(".col-sm-4").addClass("has-success").removeClass("has-error");
        $(element).parents(".col-sm-5").addClass("has-success").removeClass("has-error");
        $(element).parents(".col-sm-6").addClass("has-success").removeClass("has-error");
        $(element).parents(".col-sm-8").addClass("has-success").removeClass("has-error");
      }
    });
  });