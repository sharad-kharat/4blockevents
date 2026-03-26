import React from 'react';
import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi';
import './HomeContactMap.css';

const HomeContactMap = () => {
  return (
    <section className="contact-map-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="contact-container flex flex-col lg:flex-row gap-12 lg:gap-20">
        
        {/* Left: Contact Info */}
        <div className="contact-info-wrapper flex-1 flex flex-col justify-center">
          <h2 className="contact-title text-3xl md:text-4xl font-bold uppercase mb-6">
            GET IN TOUCH
          </h2>
          <p className="contact-desc text-base mb-10 max-w-md text-[var(--luxury-text)]">
            For inquiries, reservations, or special requests, reach out to us via phone, email, or our website.
          </p>

          <div className="contact-details space-y-6">
            
            <div className="contact-item flex items-start gap-4">
              <HiPhone className="contact-icon w-6 h-6 shrink-0 mt-1" />
              <div className="contact-text-group">
                <a href="tel:+917070513939" className="contact-link font-bold text-lg hover:underline underline-offset-4">
                  91+7070513939
                </a>
              </div>
            </div>

            <div className="contact-item flex items-start gap-4">
              <HiPhone className="contact-icon w-6 h-6 shrink-0 mt-1" />
              <div className="contact-text-group">
                <a href="tel:+917744817575" className="contact-link font-bold text-lg hover:underline underline-offset-4">
                  91+7744817575
                </a>
              </div>
            </div>

            <div className="contact-item flex items-start gap-4">
              <HiMail className="contact-icon w-6 h-6 shrink-0 mt-1" />
              <div className="contact-text-group">
                <a href="mailto:bookings@4blockgroup.com" className="contact-link text-base hover:underline underline-offset-4">
                  bookings@4blockgroup.com
                </a>
              </div>
            </div>

            <div className="contact-item flex items-start gap-4 mt-8">
              <HiLocationMarker className="contact-icon w-7 h-7 shrink-0 mt-1" />
              <div className="contact-text-group">
                <h4 className="font-bold text-lg text-[var(--luxury-border)] mb-1">Address</h4>
                <p className="contact-address text-base leading-relaxed text-[var(--luxury-text)]">
                  Aundh - Ravet BRTS Rd, behind Hotel Samadhan, Vishnu Dev Nagar, Punawale, Pimpri-Chinchwad, Maharashtra 411033, India
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Right: Map Embed */}
    <div className="contact-map-wrapper w-full h-[500px] rounded-lg overflow-hidden shadow-xl">
  <iframe
    src="https://maps.google.com/maps?q=18.622379,73.749157&output=embed"
    className="w-full h-full"
    style={{ border: 0 }}
    loading="lazy"
    allowFullScreen
  ></iframe>
</div>

      </div>
    </section>
  );
};

export default HomeContactMap;
