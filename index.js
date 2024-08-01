document.addEventListener('DOMContentLoaded', function () {
  const instagramIcon = document.querySelector('.js-instagram');
  const linkedinIcon = document.querySelector('.js-linkedin');
  const gmailIcon = document.querySelector('.js-gmail');

  const originalInsta = 'icons/instagram.webp';
  const originalLinkedin = 'icons/linkedin.webp';
  const originalGmail = 'icons/gmail.webp';

  const instagramActive = 'icons/instagram-hover.webp';
  const linkedinActive = 'icons/linkedin-hover.webp';
  const gmailActive = 'icons/gmail-hover.webp';

  instagramIcon.addEventListener('mouseover', () => {
      instagramIcon.src = instagramActive  
  });
  instagramIcon.addEventListener('mouseout', () => {
      instagramIcon.src = originalInsta;
  });

  linkedinIcon.addEventListener('mouseover', () => {
      linkedinIcon.src = linkedinActive;
  });
  linkedinIcon.addEventListener('mouseout', () => {
      linkedinIcon.src = originalLinkedin;
  });

  gmailIcon.addEventListener('mouseover', () => {
      gmailIcon.src = gmailActive;
  });
  gmailIcon.addEventListener('mouseout', () => {
      gmailIcon.src = originalGmail;
  });
});
