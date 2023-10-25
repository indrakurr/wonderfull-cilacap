import React, { forwardRef } from "react";

const Maps =forwardRef((props, ref) => {
  return (
    <>
      <div className="container-maps" ref={ref}>
        <div className="row">
          <div className="text-center">
            <div className="my-5">
              <h2>Where to Go?</h2>
            </div>
            <div className="maps">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63260.51424653689!2d108.9912949702589!3d-7.7065121315520955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e650c8d0abed43b%3A0x4027a76e3530950!2sCilacap%2C%20Kabupaten%20Cilacap%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1690027319779!5m2!1sid!2sid"
                width="100%"
                height="450"
                title="Cilacap Maps"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default Maps;
