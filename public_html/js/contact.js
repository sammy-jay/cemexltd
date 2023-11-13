const _name = document.querySelector("#xs_contact_name");
const _phone = document.querySelector("#xs_contact_phone");
const _email = document.querySelector("#xs_contact_email");
const _subject = document.querySelector("#xs_contact_subject");
const _message = document.querySelector("#xs_contact_message");
const submitBtn = document.querySelector("#xs_contact_submit");
const contactForm = document.querySelector("#xs-contact-form");

function validateForm() {
  if (
    _name.value !== "" &&
    _phone.value !== "" &&
    _email.value !== "" &&
    _subject.value !== "" &&
    _message.value !== ""
  ) {
    return true;
  }
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (validateForm()) {
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "info@cemexltd.com",
      Password: "A47AAD56C140A3652439C7287B9917EEC24C",
      From: "cemexng@gmail.com", //account used for registration
      To: "info@cemexltd.com", // where you want it delivered to
      ReplyTo: _email.value,
      Subject: _subject.value,
      Body: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head>
  <title>
  </title>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
  <style type="text/css">
    body,
    html {
      margin: 0px;
      padding: 0px;
      -webkit-font-smoothing: antialiased;
      text-size-adjust: none;
      width: 100% !important;
    }

    table td,
    table {}

    #outlook a {
      padding: 0px;
    }

    .ExternalClass,
    .ExternalClass p,
    .ExternalClass span,
    .ExternalClass font,
    .ExternalClass td,
    .ExternalClass div {
      line-height: 100%;
    }

    .ExternalClass {
      width: 100%;
    }

    @media only screen and (max-width: 480px) {

      table,
      table tr td,
      table td {
        width: 100%;
      }

      table tr td table.edsocialfollowcontainer {
        width: auto;
      }

      img {
        width: inherit;
      }

      .layer_2 {
        max-width: 100% !important;
      }

      .edsocialfollowcontainer table {
        max-width: 25% !important;
      }

      .edsocialfollowcontainer table td {
        padding: 10px !important;
      }

      .edsocialfollowcontainer table {
        max-width: 25% !important;
      }

      .edsocialfollowcontainer table td {
        padding: 10px !important;
      }
    }
  </style>
  
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,600i,700,700i &subset=cyrillic,latin-ext" data-name="open_sans" rel="stylesheet" type="text/css">
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/spectrum/1.8.0/spectrum.min.css">
</head><body style="padding:0; margin: 0;background: #e4e6ec">
  <table style="height: 100%; width: 100%; background-color: #e4e6ec;" align="center">
    <tbody>
      <tr>
        <td valign="top" id="dbody" data-version="2.31" style="width: 100%; height: 100%; background-color: #dddddf; padding-top: 50px; padding-bottom: 50px;">
          <!--[if (gte mso 9)|(IE)]><table align="center" style="max-width:600px" width="600" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
          <table class="layer_1" align="center" border="0" cellpadding="0" cellspacing="0" style="border-color: #232325; max-width: 600px; box-sizing: border-box; width: 100%; margin: 0px auto;">
            <tbody>

              
              <tr>
                <td class="drow" valign="top" align="center" style="background-color: #dddddf; box-sizing: border-box; font-size: 0px; text-align: center;">
                  <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                  <div class="layer_2" style="max-width: 600px; display: inline-block; vertical-align: top; width: 100%;">
                    <table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse;width:100%">
                      <tbody>

                      <!-- Put  logo url down here -->
                        <tr>
                          <td valign="top" class="edimg" style="padding: 20px; box-sizing: border-box; text-align: center;"><img src="https://cemexltd.com/images/cemex%20logo.png" alt="Image" style="border-width: 0px; border-style: none; max-width: 380px; width: 100%;" width="380">
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
                </td>
              </tr>
              

              <tr>
                <td class="drow" valign="top" align="center" style="background-color: #dddddf; box-sizing: border-box; font-size: 0px; text-align: center;">
                  <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                  <div class="layer_2" style="max-width: 596px; display: inline-block; vertical-align: top; width: 100%;">
                    <table border="0" cellspacing="0" class="edcontent" style="border-collapse: collapse;width:100%">
                      <tbody>
                        <tr>
                          <td valign="top" class="edtext" style="padding: 32px; color: #3d3d3d; font-size: 14px; text-align: left; font-family: &quot;Open Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; word-break: break-word; direction: ltr; box-sizing: border-box;">
                            <p class="style1 text-center" style="line-height: 1.25em; color: #090116; font-family: &quot;Arial Black&quot;, Gadget, sans-serif; text-align: center; margin: 0px; padding: 0px; font-size: 32px;"><strong> Contact Form Submission</strong></p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
                </td>
              </tr>
              
              <tr><td class="drow" valign="top" align="center" style="background-color: #dddddf; box-sizing: border-box; font-size: 0px; text-align: center;"><!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]--><div class="layer_2" style="display: inline-block; vertical-align: top; width: 100%; max-width: 600px;"><table border="0" cellspacing="0" class="edcontent" style="border-collapse: collapse; width: 100%; background-color: #dddddf;"><tbody><tr><td valign="top" class="edtext" style="padding: 20px; text-align: left; color: #5f5f5f; font-size: 12px; font-family: &quot;Open Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; word-break: break-word; direction: ltr; box-sizing: border-box;"><p style="margin: 0px; padding: 0px;"><span style="font-size: 16px;"><strong>Sender Email</strong>: <strong>${_email.value}</strong></span></p><br/><p style="margin: 0px; padding: 0px;"><strong><span style="font-size: 16px;">Sender Full Name: ${_name.value}</span></strong></p><br/><p style="margin: 0px; padding: 0px;"><strong><span style="font-size: 16px;">Sender Phone Number: ${_phone.value}</span></strong></p><p style="margin: 0px; padding: 0px;"><strong><span style="font-size: 16px;"><br></span></strong></p><p style="margin: 0px; padding: 0px;"><strong><span style="font-size: 16px;">Sender Message: ${_message.value}</span></strong></p><p style="margin: 0px; padding: 0px;"><br></p></td></tr></tbody></table></div><!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]--></td></tr>
              <tr>
                <td class="drow" valign="top" align="center" style="background-color: #dddddf; box-sizing: border-box; font-size: 0px; text-align: center;">
                  <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                  <div class="layer_2" style="max-width: 600px; display: inline-block; vertical-align: top; width: 100%;">
                    <table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse;width:100%">
                      <tbody>
                        <tr>
                          <td valign="top" class="edimg" style="padding: 20px; box-sizing: border-box; text-align: center;"><img src="https://api.smtprelay.co/userfile/49540e0f-2e09-4101-a05d-5032842b99d3/cyber-monday-separator.png" alt="Image" style="border-width: 0px; border-style: none; max-width: 380px; width: 100%;" width="380">
                          </td>
                        </tr    >
                      </tbody>
                    </table>
                  </div>
                  <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
                </td>
              </tr>
              <tr>
                <td class="drow" valign="top" align="center" style="background-color: #dddddf; box-sizing: border-box; font-size: 0px; text-align: center;">
                  <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                  <div class="layer_2" style="max-width: 600px; display: inline-block; vertical-align: top; width: 100%;">
                    <table border="0" cellspacing="0" cellpadding="0" class="edcontent" style="border-collapse: collapse;width:100%">
                      <tbody>
                        <tr>
                          <td valign="top" class="emptycell" style="padding: 18px;"></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
                </td>
              </tr>

              <tr>
                <td class="drow text-center" valign="top" align="center" style="background-color: #dddddf; text-align: center; box-sizing: border-box; font-size: 0px;">
                  <!--[if (gte mso 9)|(IE)]><table width="100%" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td valign="top"><![endif]-->
                  <div class="layer_2 text-center" style="max-width: 596px; text-align: center; display: inline-block; vertical-align: top; width: 100%;">
                    <table class="edcontent" style="border-collapse: collapse;width:100%" border="0" cellpadding="0" cellspacing="0">
                      <tbody>
                        <tr>
                          <td class="edtext text-center" valign="top" style="padding: 10px; color: #3d3d3d; font-size: 14px; text-align: center; font-family: &quot;Open Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; word-break: break-word; direction: ltr; box-sizing: border-box;">
                            <p style="font-size: 11px; margin: 0px; padding: 0px;"><span style="color: #ffffff;"><span style="color: #3d3d3d;">If you no longer wish to receive mail from us, you can&nbsp;<a href="{unsubscribe}" style="color: #3d72ff; text-decoration: none;">unsubscribe</a> 
                                <br></span><span style="color: #3d3d3d;">${_email.value}</span></span>
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
                </td>
              </tr>
            </tbody>
          </table>
          <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
        </td>
      </tr>
    </tbody>
  </table>
</body></html>`,
    }).then((message) => {
      _email.value = "";
      _name.value = "";
      _phone.value = "";
      _message.value = "";
      _subject.value = "";

      alert("Message sent successfully");
    });
  }
});
