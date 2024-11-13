 

// hover effect links wala 
const socialContainers = document.querySelectorAll('.socialContainer');

socialContainers.forEach(container => {
  container.addEventListener('mouseenter', () => {
    const svgClass = container.querySelector('.socialSvg').classList[1];
    
    if (svgClass === 'instagramSvg') {
      document.body.style.background = 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)';
    
    } else if (svgClass === 'linkdinSvg') {
      document.body.style.background = 'linear-gradient(45deg, #0e76a8, #0072b1, #1c8ccd, #289df3)';
    } else if (svgClass === 'whatsappSvg') {
      document.body.style.background = 'linear-gradient(45deg, #25d366, #21b658, #128c7e, #075e54)';
    } else if (svgClass === 'githubSvg') {
      
      document.body.style.background = 'linear-gradient(45deg, #333, #6e6e6e, #9b9b9b, #d0d0d0)';
    }
  });
//ye reset keray ga background hover k baad
  container.addEventListener('mouseleave', () => {
    document.body.style.background = 'linear-gradient(135deg, #3a3a3a, #070707)'; 
  });
});
