import emailjs from "@emailjs/nodejs";

const publicKey = import.meta.env.PUBLIC_EMAILJS_KEY;
const privateKey = import.meta.env.EMAILJS_KEY;
const templateId = import.meta.env.EMAIL_JS_TEMPLATE_ID;
const serviceId = import.meta.env.EMAIL_JS_SERVICE_ID;
const from = import.meta.env.CONTACT_FORM_EMAIL;

export const sendEmail = async (name, email, phonenumber, message) => {
  const templateParams = {
    from_email: from,
    user_name: name,
    user_phone: phonenumber,
    user_email: email,
    message: message,
  };

  var response = await emailjs.send(serviceId, templateId, templateParams, {
    publicKey: publicKey,
    privateKey: privateKey,
  });

  if (response.status != 200) return false;

  return true;
};
