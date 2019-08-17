import React from 'react';
const size = `30vh`;

const mapsApi = {
    width: size,
    height: size,
    border: `0`
};

const GoogleMaps = () => (
    <iframe
        style={mapsApi}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224.31323286816715!2d-7.496926725223472!3d40.8502071400794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3cbcec081034b7%3A0xa00ebc04f8178f0!2sPte.+do+Abade%2C+3570-192+Aguiar+da+Beira!5e0!3m2!1spt-PT!2spt!4v1565459886893!5m2!1spt-PT!2spt"
        allowFullScreen
    />
);

export default GoogleMaps;
