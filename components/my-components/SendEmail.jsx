import * as MailComposer from 'expo-mail-composer';

const sendEmail = async (formData) => {
  await MailComposer.composeAsync({
    recipients: ['services@qkore.com'],
    subject: 'Form Submission',
    body: `Form data: ${formData.message}`
  });
};

export default sendEmail;