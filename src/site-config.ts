export const whatsappNumber = '919880148652';
export const contactPhoneDisplay = '+91 98801 48652';
export const contactPhoneHref = 'tel:+919880148652';

function whatsappLink(message: string) {
  const enquiryMessage = encodeURIComponent(message);

  return whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${enquiryMessage}`
    : `https://wa.me/?text=${enquiryMessage}`;
}

export const whatsappHref = whatsappLink(
  'Namaste, I would like to know more about Rudramsha Divine Elements and the pieces currently available.',
);

export function productEnquiryHref(productName: string, price?: string) {
  const priceNote = price ? ` I saw the indicative price of ${price}.` : '';

  return whatsappLink(
    `Namaste, I am interested in the ${productName}.${priceNote} Please share its current availability, details, and final price.`,
  );
}
