// Add the business WhatsApp number in international format, digits only.
// Example for India: '919876543210'. Until then, WhatsApp opens with a prefilled message.
export const whatsappNumber: string = '';

const enquiryMessage = encodeURIComponent(
  'Namaste, I would like to know more about Rudramsha Divine Elements and the pieces currently available.',
);

export const whatsappHref = whatsappNumber
  ? `https://wa.me/${whatsappNumber}?text=${enquiryMessage}`
  : `https://wa.me/?text=${enquiryMessage}`;
