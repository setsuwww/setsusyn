import React from 'react';
import '../style/App.css'; // Pastikan Anda mengimpor file CSS

const RadialEffectComponent = ({ position, colorStart, colorEnd }) => {
  // Gaya dinamis berdasarkan props
  const style = {
    position: 'relative',
    overflow: 'hidden',
  };

  const radialBeforeStyle = {
    content: "''",
    position: 'absolute',
    top: position.top || '-20%',
    right: position.right || '-20%',
    width: '170px',
    height: '170px',
    background: `radial-gradient(circle, ${colorStart || 'rgba(210, 244, 255, 0.5)'}, ${colorEnd || 'rgba(240, 248, 255, 0)'} )`,
    borderRadius: '50%',
    zIndex: 2,
  };

  return (
    <div className="radial-effect" style={style}>
      <div style={radialBeforeStyle}></div>
      {/* Konten lainnya */}
    </div>
  );
};

export default RadialEffectComponent;
