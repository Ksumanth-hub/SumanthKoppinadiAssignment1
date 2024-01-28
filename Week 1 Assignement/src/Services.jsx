import React from 'react';
// Image paths
const responsiveImagePath = '../src/assets/responsive-design.jpg';
const uiDesignImagePath = '../src/assets/ui-design.jpg';
const seoImagePath = '../src/assets/seo.jpg';


const Services = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Our Web Design Services</h1>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
                <div>
                    <img src={responsiveImagePath} alt="Responsive Web Design" style={{ width: '500px', height: '500px' }} />
                    <h2>Responsive Web Design</h2>
                    <p>Responsive Web Design (RWD) is a web development approach that creates dynamic changes to the appearance of a website, depending on the screen size and orientation of the device being used to view it. RWD aims to provide an optimal viewing experience—easy reading and navigation with a minimum of resizing, panning, and scrolling—across a wide range of devices from desktop computer monitors to mobile phones.</p>
                </div>
                <div>
                    <img src={uiDesignImagePath} alt="User Interface Design" style={{ width: '500px', height: '500px' }} />
                    <h2>User Interface Design</h2>
                    <p>User Interface (UI) Design is the process designers use to build interfaces in software or computerized devices, focusing on looks or style. Designers aim to create interfaces which users find easy to use and pleasurable. UI design refers to graphical user interfaces and other forms—e.g., voice-controlled interfaces.</p>
                </div>
                <div>
                    <img src={seoImagePath} alt="Search Engine Optimization" style={{ width: '500px', height: '500px' }} />
                    <h2>Search Engine Optimization</h2>
                    <p>
Search Engine Optimization (SEO) is the practice of increasing the quantity and quality of traffic to your website through organic search engine results. It's a multidisciplinary approach to promoting a website by increasing its visibility in search engine result pages (SERPs) through optimization practices.</p>
                </div>
            </div>  
        </div>
    );
}

export default Services;
